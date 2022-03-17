import * as React from 'react';
import Tasklist from '../screens/taskList/TaskList';
import { StyleSheet, Image, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 70, paddingTop: 10, paddingBottom: Platform.OS === 'ios' ? 20 : 10 },
        tabBarLabelStyle: { fontSize: 12, fontFamily: 'OpenSans_400Regular', }
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="My Day"
        component={Tasklist}
        options={{
          tabBarLabel: 'My Day',
          tabBarIcon: ({ focused }) => (
            <>
              <View style={styles.boderContainer}>
                {
                  focused && <View style={styles.borderLine} />
                }
              </View>
              <Image
                style={[styles.tabIcon, focused && styles.tabIconActive]}
                source={require('../../assets/icons/bottomIcon/dayIcon.png')} />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Tasklist}
        options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: ({ focused }) => (
            <>
              <View style={styles.boderContainer}>
                {
                  focused && <View style={styles.borderLine} />
                }
              </View>
              <Image
                style={[styles.tabIcon, focused && styles.tabIconActive]}
                source={require('../../assets/icons/bottomIcon/calenderIcon-2.png')} />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={Tasklist}
        options={{
          tabBarLabel: 'Tasks',
          tabBarIcon: ({ focused }) => (
            <>
              <View style={styles.boderContainer}>
                {
                  focused && <View style={styles.borderLine} />
                }
              </View>
              <Image
                style={[styles.tabIcon, focused && styles.tabIconActive]}
                source={require('../../assets/icons/bottomIcon/taskIcon.png')} />
            </>
          ),
        }}
      />

      <Tab.Screen
        name="Lists"
        component={Tasklist}
        options={{
          tabBarLabel: 'Lists',
          tabBarIcon: ({ focused }) => (
            <>
              <View style={styles.boderContainer}>
                {
                  focused && <View style={styles.borderLine} />
                }
              </View>
              <Image
                style={[styles.tabIcon, focused && styles.tabIconActive]}
                source={require('../../assets/icons/bottomIcon/listIcon.png')} />
            </>
          ),
        }}
      />
    </Tab.Navigator>

  );
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 21,
    height: 21,
    tintColor: '#4C5257'
  },
  tabIconActive: {
    tintColor: '#4355B6'
  },
  boderContainer: {
    width: 65,
    position: 'absolute',
    top: -12,
  },
  borderLine: {
    borderTopColor: '#4355B6',
    borderTopWidth: 3,
  }
})




