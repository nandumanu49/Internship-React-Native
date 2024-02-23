import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import DownloadsScreen from './screens/DownloadsScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import { StatusBar } from 'expo-status-bar';
import { Foundation } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  const handleLogin = () => {
    setUserAuthenticated(true);
  };

  return (
    <NavigationContainer>
      {userAuthenticated ? (
        <>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarStyle: [
                {
                  display: 'flex',
                  backgroundColor: 'black',
                },
                null,
              ],
            }}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ size }) => (
                  <Foundation name="home" size={size} color="white" />
                ),
              }}
            />
            <Tab.Screen
              name="Search"
              component={SearchScreen}
              options={{
                tabBarIcon: ({ size }) => (
                  <EvilIcons name="search" size={size} color="white" />
                ),
              }}
            />
            <Tab.Screen
              name="Downloads"
              component={DownloadsScreen}
              options={{
                tabBarIcon: ({ size }) => (
                  <Octicons name="download" size={size} color="white" />
                ),
              }}
            />
            <Tab.Screen
              name="My Space"
              component={ProfileScreen}
              options={{
                tabBarIcon: ({ size }) => (
                  <FontAwesome name="user-circle-o" size={size} color="white" />
                ),
              }}
            />
          </Tab.Navigator>
          <StatusBar style="light" />
        </>
      ) : (
        <LoginScreen onLogin={handleLogin} />
      )}
    </NavigationContainer>
  );
}
