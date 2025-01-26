import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

// Import your icon assets
import userIcon from '../assets/vecteezy_user-account-icon-for-your-design-only_21079672.png';
import gameIcon from '../assets/game-icon-png-9.jpg';
import footballIcon from '../assets/football.png';
import fIcon from '../assets/f-inside-a-circle.png';

export const BottomBar = () => {
    return (
        <View style={styles.container}>
            {/* Home Button */}
            <TouchableOpacity style={styles.iconContainer} activeOpacity={0.7}>
                <View style={styles.iconWrapper}>
                    <Image source={userIcon} style={styles.icon} />
                </View>
                <Text style={styles.label}>Home</Text>
            </TouchableOpacity>

            {/* Games Button */}
            <TouchableOpacity style={styles.iconContainer} activeOpacity={0.7}>
                <View style={styles.iconWrapper}>
                    <Image source={gameIcon} style={styles.icon} />
                </View>
                <Text style={styles.label}>Games</Text>
            </TouchableOpacity>

            {/* Notifications Button */}
            <TouchableOpacity style={styles.iconContainer} activeOpacity={0.7}>
                <View style={styles.iconWrapper}>
                    <Image source={footballIcon} style={styles.icon} />
                </View>
                <Text style={styles.label}>Notify</Text>
            </TouchableOpacity>

            {/* Profile Button */}
            <TouchableOpacity style={styles.iconContainer} activeOpacity={0.7}>
                <View style={styles.iconWrapper}>
                    <Image source={fIcon} style={styles.icon} />
                </View>
                <Text style={styles.label}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around', // Space the buttons evenly
        alignItems: 'center', // Center the icons vertically
        backgroundColor: '#191919',
        paddingVertical: 10, // Add vertical padding for spacing
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1, // Allow icons to evenly space out
    },
    iconWrapper: {
        width: 40, // Fixed dimensions for icons
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 40, // Icon size
        height: 40,
        resizeMode: 'contain',
        backgroundColor: "white",
        borderRadius: 50
    },
    label: {
        color: 'white',
        fontSize: 10,

    },
});
