import React, { Component } from 'react';
import {
    Animated,
    Dimensions,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
    FlatList,
    ViewItems,
    renderItem
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react/cjs/react.production.min';
import ProfilePicture from 'react-native-profile-picture';
import Styles from '../utils/StyleSheet';
import StyleSheetConstants from '../utils/StyleSheetConstants';
import { Searchbar } from 'react-native-paper';

const HEADER_EXPANDED_HEIGHT = 300;
const HEADER_COLLAPSED_HEIGHT = 60;
const { width: SCREEN_WIDTH } = Dimensions.get("screen")

export default class HomeScreen extends Component {
    constructor() {
        super();

        this.state = {
            scrollY: new Animated.Value(0)
        }
    }

    render() {
        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
            outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
            extrapolate: 'clamp'
        });
        const headerTitleOpacity = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        });
        const heroTitleOpacity = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        });

        const DATA = [
            {
                title: 'Wireframing Lorem ',
            },
            {
                title: 'Wireframing Lorem ',
            },
            {
                title: 'Lorem ipsum dolor'
            },
            {
                title: 'Wireframing Lorem'
            },
            {
                title: 'Wireframing Lorem ',
            },
            {
                title: 'Wireframing Lorem',
            },
            {
                title: 'Lorem ipsum dolor'
            },
        ];

        const Item = ({ title }) => {
            return (
                <View style={{ flex: 1, paddingTop: 8, paddingHorizontal: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <ProfilePicture
                            isPicture={false}
                            user={"userName"}
                            shape='circle'
                            backgroundColor='#008B55'
                            height={StyleSheetConstants.FIFTY}
                            width={StyleSheetConstants.FIFTY}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ paddingHorizontal: 20 }}>
                                <Text style={Styles.notificationTitle}>
                                    {title}
                                </Text>
                            </View>

                            <View style={{ paddingHorizontal: 20 }}>
                                <Text style={{ color: 'gray', fontSize: 12 }}>
                                    {title}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingBottom: 10, }}>
                                <Text style={{ color: '#A78BFA', fontSize: 12 }}>
                                    {title}
                                </Text>
                                <Text style={{ color: 'gray' }}>
                                    {" | "}
                                </Text>
                                <Text style={{ color: 'gray', fontSize: 12 }}>
                                    {title}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: 'lightgray', paddingHorizontal: 24 }} />
                </View>
            );
        }

        const renderItem = ({ item }) => (
            <Item title={item.title} />
        );

        const headerTitle = 'Belme'

        return (
            <View style={styles.container}>
                <Animated.View style={[styles.header, { height: headerHeight }]}>
                    <Animated.Text style={{
                        textAlign: 'center', fontSize: 20, color: 'white', marginTop: 20,
                        textAlign: StyleSheetConstants.LEFT, marginStart: 20, fontWeight: 'bold', opacity: headerTitleOpacity, justifyContent: 'flex-start'
                    }}>{headerTitle}</Animated.Text>
                    <Animated.Text style={{ textAlign: 'center', fontSize: 32, fontWeight: 'bold', color: 'white', position: 'absolute', bottom: 16, left: 16, opacity: heroTitleOpacity, fontStyle: 'bold' }}>{headerTitle}</Animated.Text>
                </Animated.View>
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    onScroll={Animated.event(
                        [{
                            nativeEvent: {
                                contentOffset: {
                                    y: this.state.scrollY
                                }
                            }
                        }])
                    }
                    scrollEventThrottle={16}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </ScrollView>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: StyleSheetConstants.BACKGROUND_COLOR,
    },
    scrollContainer: {
        padding: 16,
        paddingTop: HEADER_EXPANDED_HEIGHT,
        borderRadius: 40, borderColor: 'red'
    },
    header: {
        backgroundColor: '#008B55',
        position: 'absolute',
        width: SCREEN_WIDTH,
        top: 0,
        left: 0,
        zIndex: 9999
    },
    title: {
        marginVertical: 16,
        color: "black",
        fontWeight: "bold",
        fontSize: 24
    }
});
