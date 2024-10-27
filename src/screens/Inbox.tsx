import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import profilePic from 'D:\\React Native\\Fusion\\src\\assets\\testProfiles\\i.png';

const Inbox = () => {

    const getRandomLightColor = () => {
        const letters = 'CDEF'; // Restrict to letters for lighter shades
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 4)]; // Choose from C, D, E, F
        }
        return color;
    };

    const navigation = useNavigation();
    const numberOfChats = 10; // Changed to camelCase
    const chatElements = [];
    
    for (let i = 0; i < numberOfChats; i++) {
        chatElements.push(
            <Pressable key={i} onPress={() => navigation.navigate('Chats')} style={[styles.bigBoxes, { backgroundColor: getRandomLightColor() }]}>
                <View style={styles.chatOver}>
                    <View style={styles.chatPic}>
                        <Image source={profilePic} style={styles.profilePic} />
                    </View>
                    <View style={styles.chatText}>
                        <Text style={styles.Name}>
                            Chat {i + 1}
                        </Text>
                    </View>
                </View>
            </Pressable>
        );
    }
  
    return (
        <ScrollView>
            {chatElements}
        </ScrollView>
    );
}

export default Inbox;

const styles = StyleSheet.create({
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 15,
        marginRight: 10,
    },
    chatOver: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 90, // Adjusted height for better visibility
        padding: 10, // Added padding for a better look
    },
    chatPic: {
        width: '30%',
    },
    chatText: {
        width: '70%',
    },
    bigBoxes: {
        margin: 8,
        borderRadius: 25,
        color: 'black'
    },
    Name : {
        color: 'black',
    }
});
