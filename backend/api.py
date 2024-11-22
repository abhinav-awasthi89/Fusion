from fastapi import FastAPI, HTTPException, WebSocket, WebSocketDisconnect, UploadFile, File, status
from typing import List, Optional
from backend.database import *  # Import all from database module

app = FastAPI()

# WebSocket manager to handle multiple clients for chat
class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    async def send_message(self, message: str):
        for connection in self.active_connections:
            await connection.send_text(message)

manager = ConnectionManager()

# WebSocket for chat functionality
@app.websocket("/ws/chat")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            await manager.send_message(data)
            insert_chat_message({"message": data})  # Store chat message in DB
    except WebSocketDisconnect:
        manager.disconnect(websocket)

# Endpoint to create a post with optional image
@app.post("/api/v1/posts", status_code=status.HTTP_201_CREATED)
async def create_post(description: str, image: Optional[UploadFile] = None):
    post_data = {"description": description}
    if image:
        post_data["image"] = await image.read()  # Save image as binary data
    post_id = insert_post(post_data)
    return {"post_id": post_id, "description": description}

# Fetch random posts for the homepage
@app.get("/api/v1/posts", status_code=status.HTTP_200_OK)
def fetch_random_posts(limit: int = 5):
    try:
        posts = get_random_posts(limit)
        return {"posts": posts}
    except Exception as e:
        raise HTTPException(status_code=500, detail="Error fetching posts")

# Optional feature: Delete a post by ID
@app.delete("/api/v1/posts/{post_id}", status_code=status.HTTP_200_OK)
def delete_post(post_id: str):
    collection = dataBase['Posts']  # Correct reference to dataBase
    result = collection.delete_one({"_id": post_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Post not found")
    return {"message": "Post deleted successfully"}
