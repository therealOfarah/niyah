import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import Profile from '../screens/Profile';
import Media from '../screens/Media';
import Planner from '../screens/Planner';
import MorePodcasts from '../screens/MorePodcasts';

const Tab = createBottomTabNavigator();
const Stack =  createStackNavigator();

function MediaStackScreen() {
  return (
    <Stack.Navigator screenOptions={{
      cardStyle: {
          backgroundColor: 'rgb(143, 172, 139)'
      }
  }}>
      <Stack.Screen name="Media" options={{headerShown:false}}component={Media} />
      <Stack.Screen name="More Podcasts"options={{headerShown:true}} component={MorePodcasts} />
    </Stack.Navigator>
  );
}
function PlannerStackScreen() {
  return (
    <Stack.Navigator screenOptions={{
      cardStyle: {
          backgroundColor: 'rgb(143, 172, 139)'
      }
  }}>
      <Stack.Screen name="Planner" options={{headerShown:false}}component={Planner} />
      {/* <Stack.Screen name="More Podcasts"options={{headerShown:false}} component={MorePodcasts} /> */}
    </Stack.Navigator>
  );
}
export default function UserStack() {
  return (
    <>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home"  options={{headerShown:false}}  component={HomeScreen} />
        <Tab.Screen name="Media"  options={{headerShown:false}} component={MediaStackScreen} />
        <Tab.Screen name="Planner"  options={{headerShown:false}} component={PlannerStackScreen} />
        <Tab.Screen name="Profile" options={{headerShown:false}} component={Profile} />
        {/* <Tab.Screen name="More Podcast" options={{headerShown:false}} component={MorePodcasts} /> */}
      </Tab.Navigator>
    </NavigationContainer>

    </>
  );
}
