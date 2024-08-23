import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from './home'
import { Password } from './password'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='home'
                component={Home}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons
                                size={size}
                                color={color}
                                name='home' />
                        }
                        return <Ionicons
                            size={size}
                            color={color}
                            name='home-outline' />
                    }
                }} />

            <Tab.Screen
                name='passwords'
                component={Password}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons
                                size={size}
                                color={color}
                                name='lock-open' />
                        }
                        return <Ionicons
                            size={size}
                            color={color}
                            name='lock-closed-outline' />
                    }
                }} />
        </Tab.Navigator>
    )
}