import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen'
import CalenderScreen from './CalenderScreen';
import MenuScreen from './MenuScreen';

const Tab = createMaterialBottomTabNavigator();

function BottomTabScreen() {
    return (
        <Tab.Navigator
            initialRouteName="Calender"
            activeColor="#008B55"
            barStyle={{ backgroundColor: 'white' }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="chat" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Calender"
                component={CalenderScreen}
                options={{
                    tabBarLabel: 'Calender',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="calendar" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Menu"
                component={MenuScreen}
                options={{
                    tabBarLabel: 'Menu',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="menu" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
export default BottomTabScreen;