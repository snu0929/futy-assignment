import React, { useState } from 'react';
import { View, TextInput, Image, TouchableOpacity, StyleSheet, Text, SafeAreaView, Vibration } from 'react-native';
import { Audio } from 'expo-av'; // Importing Expo's Audio API
import user from '../assets/vecteezy_user-account-icon-for-your-design-only_21079672.png';
import fIcon from '../assets/f-inside-a-circle.png';
import searchIcon from '../assets/search.png';
import hamburger from '../assets/settings.png';

export const Navbar = () => {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [sound, setSound] = React.useState();


    const handleHamburgerClick = async () => {

        const { sound } = await Audio.Sound.createAsync(
            require('../assets/mouse-click-290204.mp3')
        );
        setSound(sound);
        await sound.playAsync();

        Vibration.vibrate(100); // Vibrates for 100ms
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.navbar}>
                {/* Left Section */}
                <View style={styles.leftSection}>
                    <Image source={user} style={styles.icon} />
                    <View style={{ backgroundColor: "black", borderWidth: 3, borderColor: 'orange', display: "flex", flexDirection: 'row', alignItems: "center", borderRadius: 20, paddingHorizontal: 1 }}>
                        <Image source={fIcon} style={styles.icon} />

                        <Text style={{ color: "orange", fontSize: 16 }}>50</Text>
                    </View>
                </View>

                {/* Center Section (Search Bar) */}
                <View style={styles.centerSection}>
                    {isSearchActive ? (
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search..."
                            placeholderTextColor="#888"
                            autoFocus={true}
                        />
                    ) : (
                        <Text style={styles.logoText}></Text>
                    )}
                </View>

                {/* Right Section */}
                <View style={styles.rightSection}>
                    <TouchableOpacity onPress={() => setIsSearchActive(!isSearchActive)}>
                        <Image source={searchIcon} style={styles.sicon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleHamburgerClick}>
                        <View style={styles.hamburgerIconContainer}>
                            <Image source={hamburger} style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 0,

    },
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        marginHorizontal: 10
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    centerSection: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
    },
    rightSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 36,
        height: 36,
        marginHorizontal: 5,
        resizeMode: 'contain',
        borderRadius: 50,
        backgroundColor: "white"
    },
    sicon: {
        width: 36,
        height: 36,
        marginHorizontal: 5,
        resizeMode: 'contain',
        borderRadius: 50,

    },
    logoText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    searchInput: {
        width: '100%',
        backgroundColor: '#333',
        borderRadius: 20,
        paddingHorizontal: 10,
        color: '#fff',
        fontSize: 15,
    },
    hamburgerIconContainer: {
        borderRadius: 50,
        padding: 8,
    },
});
