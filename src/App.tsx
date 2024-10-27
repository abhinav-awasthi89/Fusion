import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import profilePic from 'D:\\React Native\\Fusion\\src\\assets\\testProfiles\\i.png';

// Screens
import Home from './screens/Home';
import Notification from './screens/Notification';
import Profile from './screens/Profile';
import Search from './screens/Search';
import Navbar from './components/Navbar';
import Inbox from './screens/Inbox';
import Chats from './screens/Chats';

// Profile picture path
// const profilePic = require('../assets/testProfiles/i.png');

export type RootStackParamList = {
  Home: undefined;
  Notification: undefined;
  Profile: undefined;
  Inbox: undefined;
  Search: undefined;
  Chats: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// Custom Header Component
const HomeHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <Pressable onPress={() => navigation.navigate('Profile')}>
        <Image source={profilePic} style={styles.profilePic} />
      </Pressable>
      <Text style={styles.headerTitle}>Fusion - Welcome Home</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.mainContainer}>
        <View style={styles.centerScreen}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerTitle: () => <HomeHeader />, // Use the custom header component
              }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{
                title: 'Search - Find Something',
              }}
            />
            <Stack.Screen
              name="Inbox"
              component={Inbox}
              options={{
                title: 'Inbox - Conversations',
              }}
            />
            <Stack.Screen
              name="Notification"
              component={Notification}
              options={{
                title: 'Notifications',
              }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                title: 'Profile - Your Info',
              }}
            />
            <Stack.Screen
              name="Chats"
              component={Chats}
              options={{
                title: 'ChatBox',
              }}
            />
          </Stack.Navigator>
        </View>
        <Navbar />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    color: 'black'
  },
  centerScreen: {
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  },
});

export default App;