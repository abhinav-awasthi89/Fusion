import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Navbar = () => {
    const navigation = useNavigation(); // Hook to access navigation in functional components
  
    return (
      <LinearGradient 
        colors={['#004aad', '#cb6ce6']} 
        style={styles.navbar}
        start={{ x: 0, y: 0 }} 
        end={{ x: 1, y: 0 }} // For 90-degree gradient
      >
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Icon name='home' size={30} color='#FFFFFF' />
        </Pressable>
  
        <Pressable onPress={() => navigation.navigate('Search')}>
          <Icon name='search' size={30} color='#FFFFFF' />
        </Pressable>
  
        <Pressable onPress={() => navigation.navigate('Inbox')}>
          <Icon name='comments' size={30} color='#FFFFFF' />
        </Pressable>
      </LinearGradient>
    );
};

export default Navbar;

const styles = StyleSheet.create({
    navbar: {
        borderRadius: 50,
        width: '80%',
        height: '5%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: '2%'
    }
});
