import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
    const navigation = useNavigation(); // Hook to access navigation in functional components
  
    return (
      <View style={styles.navbar}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Icon name='home' size={30} color='#000000' />
        </Pressable>
  
        <Pressable onPress={() => navigation.navigate('Search')}>
          <Icon name='search' size={30} color='#000000' />
        </Pressable>
  
        <Pressable onPress={() => navigation.navigate('Inbox')}>
          <Icon name='comments' size={30} color='#000000' />
        </Pressable>
      </View>
    );
  };

export default Navbar

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#F7CD2E',
        borderRadius: 50,
        width: '80%',
        height: '5%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: '1%'
      }
})