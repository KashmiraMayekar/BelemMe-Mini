import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Card, Avatar } from 'react-native-paper';
import Styles from '../utils/StyleSheet';
import StyleSheetConstants from '../utils/StyleSheetConstants';


const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
};

const CalenderScreen: React.FC = () => {
    const [items, setItems] = useState({});

    const loadItems = (day) => {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);
                if (!items[strTime]) {
                    items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 3 + 1);
                    for (let j = 0; j < numItems; j++) {
                        items[strTime].push({
                            name: 'Hi, sorry to distrub would like to know your bussiness module...',
                            sunTitle: 'Arul Selvakumaran',
                            height: Math.max(50, Math.floor(Math.random() * 150)),
                        });
                    }
                }
            }
            const newItems = {};
            Object.keys(items).forEach((key) => {
                newItems[key] = items[key];
            });
            setItems(newItems);
        }, 1000);
    };

    const renderItem = (item) => {
        return (
            <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
                <Card>
                    <Card.Content>
                        <View
                            style={{
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                            }}>
                            <View style={{ flexDirection: 'row'}}>
                            <Avatar.Icon size={20} icon="question_mark" style={{backgroundColor: '#359C74'}} />
                                <Text style={{marginStart: 8}}>{item.sunTitle}</Text>
                            </View>
                            <Text>{item.name}</Text>
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={Styles.navBarStyle}>
                <Text
                    style={Styles.navBarTitle}
                >
                    22 Apr
                </Text>
                <Avatar.Icon size={20} icon="question_mark" style={{backgroundColor: '#FFFFFF'}} />
            </View>
            <Agenda
                items={items}
                loadItemsForMonth={loadItems}
                selected={'2022-04-13'}
                renderItem={renderItem}
            />
        </View>
    );
};

export default CalenderScreen;