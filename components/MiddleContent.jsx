import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GameCard } from './GameCard';

export const MiddleContent = () => {
    const gameData = [
        {
            id: 1,
            team1: { name: 'SOU', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'MON', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '25 Jan',
            time: '17:00',
            amount: 2100,
        },
        {
            id: 2,
            team1: { name: 'LIV', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'CHE', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '26 Jan',
            time: '19:00',
            amount: 2500,
        },
        {
            id: 3,
            team1: { name: 'ARS', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'TOT', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '27 Jan',
            time: '21:00',
            amount: 2200,
        },
        {
            id: 4,
            team1: { name: 'MCI', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'WHU', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '28 Jan',
            time: '18:00',
            amount: 2300,
        },
        {
            id: 5,
            team1: { name: 'EVE', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'LEI', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '29 Jan',
            time: '16:00',
            amount: 2400,
        },
        {
            id: 6,
            team1: { name: 'BUR', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'NOR', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '30 Jan',
            time: '20:00',
            amount: 2000,
        },
        {
            id: 7,
            team1: { name: 'BHA', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'AVL', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '31 Jan',
            time: '19:30',
            amount: 2100,
        },
        {
            id: 8,
            team1: { name: 'LEE', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'WOL', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '1 Feb',
            time: '20:30',
            amount: 2200,
        },
        {
            id: 9,
            team1: { name: 'SOU', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'MON', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '25 Jan',
            time: '17:00',
            amount: 2100,
        },
        {
            id: 10,
            team1: { name: 'LIV', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'CHE', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '26 Jan',
            time: '19:00',
            amount: 2500,
        },
        {
            id: 11,
            team1: { name: 'ARS', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'TOT', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '27 Jan',
            time: '21:00',
            amount: 2200,
        },
        {
            id: 12,
            team1: { name: 'MCI', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'WHU', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '28 Jan',
            time: '18:00',
            amount: 2300,
        },
        {
            id: 13,
            team1: { name: 'EVE', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'LEI', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '29 Jan',
            time: '16:00',
            amount: 2400,
        },
        {
            id: 14,
            team1: { name: 'BUR', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'NOR', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '30 Jan',
            time: '20:00',
            amount: 2000,
        },
        {
            id: 15,
            team1: { name: 'BHA', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'AVL', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '31 Jan',
            time: '19:30',
            amount: 2100,
        },
        {
            id: 16,
            team1: { name: 'LEE', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'WOL', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '1 Feb',
            time: '20:30',
            amount: 2200,
        },
        {
            id: 17,
            team1: { name: 'SOU', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'MON', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '25 Jan',
            time: '17:00',
            amount: 2100,
        },
        {
            id: 18,
            team1: { name: 'LIV', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'CHE', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '26 Jan',
            time: '19:00',
            amount: 2500,
        },
        {
            id: 19,
            team1: { name: 'ARS', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'TOT', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '27 Jan',
            time: '21:00',
            amount: 2200,
        },
        {
            id: 20,
            team1: { name: 'MCI', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'WHU', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '28 Jan',
            time: '18:00',
            amount: 2300,
        },
        {
            id: 21,
            team1: { name: 'EVE', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'LEI', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '29 Jan',
            time: '16:00',
            amount: 2400,
        },
        {
            id: 22,
            team1: { name: 'BUR', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'NOR', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '30 Jan',
            time: '20:00',
            amount: 2000,
        },
        {
            id: 23,
            team1: { name: 'BHA', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'AVL', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '31 Jan',
            time: '19:30',
            amount: 2100,
        },
        {
            id: 24,
            team1: { name: 'LEE', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'WOL', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '1 Feb',
            time: '20:30',
            amount: 2200,
        },
        {
            id: 25,
            team1: { name: 'SOU', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'MON', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '25 Jan',
            time: '17:00',
            amount: 2100,
        },
        {
            id: 26,
            team1: { name: 'LIV', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'CHE', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '26 Jan',
            time: '19:00',
            amount: 2500,
        },
        {
            id: 27,
            team1: { name: 'ARS', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'TOT', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '27 Jan',
            time: '21:00',
            amount: 2200,
        },
        {
            id: 28,
            team1: { name: 'MCI', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'WHU', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '28 Jan',
            time: '18:00',
            amount: 2300,
        },
        {
            id: 29,
            team1: { name: 'EVE', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'LEI', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '29 Jan',
            time: '16:00',
            amount: 2400,
        },
        {
            id: 30,
            team1: { name: 'BUR', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'NOR', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '30 Jan',
            time: '20:00',
            amount: 2000,
        },
        {
            id: 31,
            team1: { name: 'BHA', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'AVL', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '31 Jan',
            time: '19:30',
            amount: 2100,
        },
        {
            id: 32,
            team1: { name: 'LEE', logo: 'https://store.southamptonfc.com/siteimg/headers/29.png' },
            team2: { name: 'WOL', logo: 'https://www.jetpunk.com/img/user-img/9a/9a11f40af8-235.webp' },
            date: '1 Feb',
            time: '20:30',
            amount: 2200,
        },
    ];




    return (
        <View style={styles.container}>

            <View style={styles.cardsContainer}>
                {gameData.map((game) => (
                    <View style={styles.cardWrapper} key={game.id}>
                        <GameCard
                            team1={game.team1}
                            team2={game.team2}
                            date={game.date}
                            time={game.time}
                            amount={game.amount}
                        />
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    cardWrapper: {
        width: '50%', // Ensures two cards per row with some spacing
        marginBottom: 10,
    },
});
