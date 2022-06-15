import React from 'react';
import Chat from './Chat';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ChannelList from './ChannelList';

export default () => {
    return <RightDrawerScreen />;
};

const RightDrawer = createDrawerNavigator();

function RightDrawerScreen() {
    return (
        <RightDrawer.Navigator
            id="RightDrawer"
            drawerContent={(props) => <ChannelList {...props} />}
            screenOptions={{
                drawerPosition: 'right',
                headerShown: false,
                drawerType: 'slide',
                swipeEdgeWidth: 100,
            }}
        >
            <RightDrawer.Screen
                name="HomeDrawer"
                component={LeftDrawerScreen}
            />
        </RightDrawer.Navigator>
    );
}

const LeftDrawer = createDrawerNavigator();

function LeftDrawerScreen() {
    return (
        <LeftDrawer.Navigator
            id="LeftDrawer"
            screenOptions={{
                drawerPosition: 'left',
                drawerType: 'slide',
                swipeEdgeWidth: 100,
            }}
        >
            <LeftDrawer.Screen name="Home" component={Chat} />
        </LeftDrawer.Navigator>
    );
}
