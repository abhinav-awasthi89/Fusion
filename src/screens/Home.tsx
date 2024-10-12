import { Image, StyleSheet, Text, View, Button, ScrollView, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import profilePic from '../assets/testProfiles/i.png';

const Home = () => {
  function alert(arg0: string): void {
    throw new Error('Function not implemented.');
  }

  const navigation = useNavigation(); // Get the navigation object
  const numberOfPosts = 3; // Define the number of posts you want to display

  // Function to generate a random hex color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Using a for loop to create an array of posts
  const postElements = [];
  for (let i = 0; i < numberOfPosts; i++) {
    postElements.push(
      <View key={i} style={[styles.postsContainer, { backgroundColor: getRandomColor() }]}>
        <View style={styles.postHeader}>
          <Image 
            source={profilePic}
            style={styles.profilePic}
          />
          <Button title="Get in Touch!" onPress={() => alert('Followed!')} />
        </View>
        <View style={styles.post}>
          <Text style={styles.description}>This is a description of the post {i + 1}.</Text>
          <Image 
            source={{ uri: '../assets/testProfiles/postImage.png' }}
            style={styles.postImage}
          />
        </View>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Pressable onPress={() => navigation.navigate('Profile')}>
          <Image 
            source={profilePic}
            style={styles.profilePic}
          />
        </Pressable>
        <Text style={styles.welcomeText}>
          Welcome!!
        </Text>
      </View>

      {/* Render the array of posts */}
      {postElements}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  postHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  profileContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  postsContainer: {
    flex: 1,
    marginBottom: 15,
    padding: 8,
    borderRadius: 25,
  },
  post: {
    padding: 10,
    borderRadius: 5,
  },
  description: {
    fontSize: 16,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
});