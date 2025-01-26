import React, { useState, useRef } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { Navbar } from '../components/Navbar';
import { MiddleContent } from '../components/MiddleContent';
import { BottomBar } from '../components/BottomBar';

export const Games = () => {
    const [showBottomBar, setShowBottomBar] = useState(true);
    const [lastOffset, setLastOffset] = useState(0);
    const scrollTimeout = useRef(null);

    const handleScroll = (event) => {
        const currentOffset = event.nativeEvent.contentOffset.y;

        if (currentOffset > lastOffset) {
            setShowBottomBar(false);
        } else {

            setShowBottomBar(true);
        }


        if (scrollTimeout.current) {
            clearTimeout(scrollTimeout.current);
        }

        scrollTimeout.current = setTimeout(() => {

            setShowBottomBar(true);
        }, 300);
        setLastOffset(currentOffset);
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Navbar at the top */}
            <View style={styles.navbar}>
                <Navbar />
            </View>

            {/* Scrollable MiddleContent */}



            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                <View style={{ flexDirection: 'row', marginHorizontal: 10, gap: 25, marginBottom: 30 }}>
                    <TouchableOpacity
                        onPress={() => { }}
                        style={{ paddingVertical: 10, paddingHorizontal: 15, borderRadius: 5, borderWidth: 1, backgroundColor: "#191919" }}
                    >
                        <Text style={{ color: 'white', textAlign: 'center' }}>Completed</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { }}
                        style={{ paddingVertical: 10, paddingHorizontal: 15, borderRadius: 5, borderWidth: 1, borderColor: 'grey' }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {/* Green Dot */}
                            <View style={{
                                width: 10, height: 10, borderRadius: 5, backgroundColor: 'green', marginRight: 6
                            }} />
                            {/* Text */}
                            <Text style={{ color: 'white', textAlign: 'center' }}>Live</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { }}
                        style={{ paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5, borderWidth: 1, borderColor: 'grey' }}
                    >
                        <Text style={{ color: 'white', textAlign: 'center' }}>Upcoming</Text>
                    </TouchableOpacity>
                </View>
                <MiddleContent />
            </ScrollView>

            {
                showBottomBar && (
                    <View style={styles.bottomBar}>
                        <BottomBar />
                    </View>
                )
            }
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    navbar: {
        height: 85, // Fixed height for the navbar
        marginTop: 40, // Adding a little top margin if needed for extra space
        borderBottomColor: 'white',
        borderBottomWidth: 4,
    },
    scrollView: {
        flexGrow: 1, // Ensures the ScrollView takes the remaining space
    },
    scrollContent: {
        marginTop: 40,
        paddingBottom: 70,
    },
    bottomBar: {
        height: 70, // Fixed height for the bottom bar
    },
});
