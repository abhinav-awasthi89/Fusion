import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import profilePic from '../assets/testProfiles/i.png';


const Profile = () => {
  return (
    <ScrollView>
      <View>
      <Image 
        source={profilePic}
        style={styles.profilePic}
      />

        <View>

        </View>
      </View>
    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 55,
    margin: 15,
  },
})