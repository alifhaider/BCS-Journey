import * as React from 'react'
import {AntDesign, FontAwesome5} from '@expo/vector-icons'
import {Tabs} from 'expo-router'
import {atoms as a, tokens as t} from '@/alf'
import {BlurView} from 'expo-blur'

function BlurBackground() {
  return (
    <BlurView
      intensity={100}
      tint="regular"
      style={[a.flex_1, {backgroundColor: 'rgba(0, 0, 0, 0.05)'}]}
    />
  )
}

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: t.color.yellow_500,
          tabBarShowLabel: false,
          tabBarBackground: BlurBackground,
          tabBarStyle: [
            a.border_0,
            a.absolute,
            {backgroundColor: 'transparent', borderTopWidth: 0, elevation: 0},
          ],
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

        <Tabs.Screen
          name="sub/[id]"
          options={{
            headerShown: false,
            href: null,
          }}
        />
      </Tabs>
    </>
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
      <FontAwesome5
        name="puzzle-piece"
        size={24}
        style={[{width: 20, height: 20}, a.justify_center, a.align_center]}
        color={color}
      />
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
      <AntDesign
        style={[{width: 20, height: 20}, a.justify_center, a.align_center]}
        size={24}
        name="user"
        color={color}
      />
    ),
  },

  {
    name: 'leaderboard',
    href: '/leaderboard',
    icon: ({color}: TabIconProps) => (
      <AntDesign
        style={[{width: 20, height: 20}, a.justify_center, a.align_center]}
        size={24}
        name="slack"
        color={color}
      />
    ),
  },
  {
    name: 'review',
    href: '/review',
    icon: ({color}: TabIconProps) => (
      <AntDesign
        style={[{width: 20, height: 20}, a.justify_center, a.align_center]}
        size={24}
        name="star"
        color={color}
      />
    ),
  },
  {
    name: 'feed',
    href: '/feed',
    icon: ({color}: TabIconProps) => (
      <AntDesign
        style={[{width: 20, height: 20}, a.justify_center, a.align_center]}
        size={24}
        name="paperclip"
        color={color}
      />
    ),
  },
]
