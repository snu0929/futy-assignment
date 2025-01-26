import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import icon from '../assets/f-inside-a-circle.png';

export const GameCard = ({ team1, team2, date, time, amount }) => {
    const [joined, setJoined] = useState(false);

    const handleJoinGame = () => {
        setJoined(true);
    };

    return (
        <View style={styles.card}>
            {/* Header with Amount */}
            <View style={styles.header}>
                <Image source={icon} style={styles.icon} />
                <Text style={styles.amount}>{amount} &gt;</Text>
            </View>

            {/* Team Details */}
            <View style={styles.teams}>
                {/* Team 1 */}
                <View style={styles.team}>
                    <Image source={{ uri: team1.logo }} style={styles.teamImage} />
                    <Text style={styles.teamName}>{team1.name}</Text>
                </View>

                {/* Match Info */}
                <View style={styles.matchInfo}>
                    <Text style={styles.matchDate}>{date}</Text>
                    <Text style={styles.matchTime}>{time}</Text>
                </View>

                {/* Team 2 */}
                <View style={styles.team}>
                    <Image source={{ uri: team2.logo }} style={styles.teamImage} />
                    <Text style={styles.teamName}>{team2.name}</Text>
                </View>
            </View>

            {/* Join Button */}
            <TouchableOpacity
                style={[styles.joinButton, joined && styles.joinedButton]} // Apply a different style if joined
                onPress={handleJoinGame}
                disabled={joined} // Disable the button if already joined
            >
                <Text style={styles.joinButtonText}>
                    {joined ? 'Joined' : 'JOIN GAME'} {/* Show 'Joined' if the game is joined */}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#191919',
        borderRadius: 10,
        padding: 15,
        margin: 5,
        position: 'relative',
        borderTopColor: 'white',
        borderTopWidth: 4,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5,
    },
    header: {
        position: 'absolute',
        top: -15,
        left: '25%',
        right: '25%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        gap: 10
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    amount: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
    },
    teams: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        paddingBottom: 10,
    },
    team: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    teamImage: {
        width: 50,
        height: 50,
        marginBottom: 5,
    },
    teamName: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
    },
    matchInfo: {
        alignItems: 'center',
    },
    matchDate: {
        fontSize: 14,
        color: '#fff',
        marginBottom: 5,
    },
    matchTime: {
        fontSize: 14,
        color: '#fff',
    },
    joinButton: {
        backgroundColor: '#28a745',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 15,
    },
    joinedButton: {
        backgroundColor: '#6c757d',
    },
    joinButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
