import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
// import store from './store';

// Screens (to be implemented)
const WelcomeScreen = () => <></>;  // Welcome/Onboarding
const LoginScreen = () => <></>;     // Login
const RegisterScreen = () => <></>;  // Registration
const DashboardScreen = () => <></>;  // Main dashboard
const ChatScreen = () => <></>;       // AI chat interface
const PortfolioScreen = () => <></>;  // Portfolio/Assets
const LearnScreen = () => <></>;      // Educational content
const ProfileScreen = () => <></>;    // User profile

// Navigation
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Main tab navigation
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#4F46E5',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: 60,
          paddingBottom: 10,
        },
      }}
    >
      <Tab.Screen 
        name="Dashboard" 
        component={DashboardScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            // Icon component will be added
            <></>
          ),
        }}
      />
      <Tab.Screen 
        name="Chat" 
        component={ChatScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            // Icon component will be added
            <></>
          ),
        }}
      />
      <Tab.Screen 
        name="Portfolio" 
        component={PortfolioScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            // Icon component will be added
            <></>
          ),
        }}
      />
      <Tab.Screen 
        name="Learn" 
        component={LearnScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            // Icon component will be added
            <></>
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            // Icon component will be added
            <></>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Main app component
export default function App() {
  return (
    <SafeAreaProvider>
      {/* <Provider store={store}> */}
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName="Welcome"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Main" component={MainTabs} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      {/* </Provider> */}
    </SafeAreaProvider>
  );
}