import * as React from 'react'
import {Colors} from '@/constants/Colors'
import {AntDesign, MaterialIcons} from '@expo/vector-icons'
import {Tabs} from 'expo-router'
import {StyleSheet} from 'react-native'

export default function AppRootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.brand.CirtusBurst,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: Colors.brand.AzureRadiance,
      }}>
      {tabItems.map(tabItem => (
        <Tabs.Screen
          key={tabItem.name}
          name={tabItem.name}
          options={{
            href: tabItem.href,
            headerShown: false,
            tabBarIcon: ({color}) => tabItem.icon({color}),
          }}
        />
      ))}
    </Tabs>
  )
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 20,
    height: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

type TabIconProps = {
  color: string
  focused?: boolean
}

const tabItems = [
  {
    name: 'home',
    href: '/home',
    icon: ({color}: TabIconProps) => (
      <AntDesign name="home" size={24} style={styles.tabIcon} color={color} />
    ),
  },
  {
    name: 'quests',
    href: '/quests',
    icon: ({color}: TabIconProps) => (
      <AntDesign
        style={styles.tabIcon}
        size={24}
        name="CodeSandbox"
        color={color}
      />
    ),
  },
  {
    name: 'profile',
    href: '/profile',
    icon: ({color}: TabIconProps) => (
      <AntDesign style={styles.tabIcon} size={24} name="user" color={color} />
    ),
  },

  {
    name: 'leaderboard',
    href: '/leaderboard',
    icon: ({color}: TabIconProps) => (
      <AntDesign style={styles.tabIcon} size={24} name="slack" color={color} />
    ),
  },
  {
    name: 'review',
    href: '/review',
    icon: ({color}: TabIconProps) => (
      <AntDesign style={styles.tabIcon} size={24} name="star" color={color} />
    ),
  },
  {
    name: 'feed',
    href: '/feed',
    icon: ({color}: TabIconProps) => (
      <MaterialIcons name="developer-board" size={24} color={color} />
    ),
  },
]
