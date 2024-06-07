import * as React from 'react'
import {AntDesign} from '@expo/vector-icons'
import {Tabs} from 'expo-router'
import {atoms as a, tokens as t} from '@/alf'

export default function AppRootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: t.color.yellow_500,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: t.color.blue_300,
        tabBarActiveBackgroundColor: t.color.blue_600,
        tabBarInactiveBackgroundColor: t.color.blue_600,
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

type TabIconProps = {
  color: string
  focused?: boolean
}

const tabItems = [
  {
    name: 'home',
    href: '/home',
    icon: ({color}: TabIconProps) => (
      <AntDesign name="home" size={24} style={[{width: 20, height: 20}, a.justify_center, a.align_center]} color={color} />
    ),
  },
  {
    name: 'quests',
    href: '/quests',
    icon: ({color}: TabIconProps) => (
      <AntDesign
        style={[{width: 20, height: 20}, a.justify_center, a.align_center]}
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
      <AntDesign style={[{width: 20, height: 20}, a.justify_center, a.align_center]} size={24} name="user" color={color} />
    ),
  },

  {
    name: 'leaderboard',
    href: '/leaderboard',
    icon: ({color}: TabIconProps) => (
      <AntDesign style={[{width: 20, height: 20}, a.justify_center, a.align_center]} size={24} name="slack" color={color} />
    ),
  },
  {
    name: 'review',
    href: '/review',
    icon: ({color}: TabIconProps) => (
      <AntDesign style={[{width: 20, height: 20}, a.justify_center, a.align_center]} size={24} name="star" color={color} />
    ),
  },
  {
    name: 'feed',
    href: '/feed',
    icon: ({color}: TabIconProps) => (
      <AntDesign style={[{width: 20, height: 20}, a.justify_center, a.align_center]} size={24} name="paperclip" color={color} />
    ),
  },
]
