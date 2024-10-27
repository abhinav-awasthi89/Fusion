import pymongo

DEFAULT_CONNECTION_URL = "mongodb://localhost:27017/"
DB_NAME = "Fusion"

client = pymongo.MongoClient(DEFAULT_CONNECTION_URL)
dataBase = client[DB_NAME]

COLLECTION_NAMES = ['Posts', 'Chats']

# Check if collection exists
def checkExistence_COL(COLLECTION_NAME, DB_NAME, db):
    collection_list = db.list_collection_names()
    if COLLECTION_NAME in collection_list:
        print(f"Collection '{COLLECTION_NAME}' in Database '{DB_NAME}' exists")
        return True
    print(f"Collection '{COLLECTION_NAME}' in Database '{DB_NAME}' does not exist or no documents are present")
    return False

# Insert a new post
def insert_post(post_data):
    collection = dataBase['Posts']
    result = collection.insert_one(post_data)
    return result.inserted_id

# Insert chat message
def insert_chat_message(chat_data):
    collection = dataBase['Chats']
    result = collection.insert_one(chat_data)
    return result.inserted_id

# Fetch random posts
def get_random_posts(limit):
    collection = dataBase['Posts']
    posts = list(collection.aggregate([{"$sample": {"size": limit}}]))
    return posts
