import { StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();

  const handleMenuItemPress = (route: string) => {
    // Navigate to the corresponding screen
    navigation.navigate(route);
  };

    function alert(arg0: string): void {
        throw new Error('Function not implemented.');
    }

  return (
    <View style={styles.menuContainer}>
      <ScrollView contentContainerStyle={styles.menuItems}>
        <Pressable style={styles.menuItem} onPress={() => handleMenuItemPress('Home')}>
          <Text style={styles.menuText}>Edit Profile</Text>
        </Pressable>
        <Pressable style={styles.menuItem} onPress={() => handleMenuItemPress('Inbox')}>
          <Text style={styles.menuText}>Settings</Text>
        </Pressable>
        <Pressable style={styles.menuItem} onPress={() => alert('Logout')}>
          <Text style={styles.menuText}>Logout</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menuContainer: {
    position: 'absolute',
    top: 40,
    right: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 5,
    width: 150,
    zIndex: 1000,
  },
  menuItems: {
    paddingVertical: 10,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  menuText: {
    fontSize: 16,
    color: '#000000',
  },
});
