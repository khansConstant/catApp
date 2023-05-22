import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Main from './screens/Main'
import Calender from './screens/Calender'
import Picture from './screens/Picture'

const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Main' component={Main} />
                <Stack.Screen name='Picture' component={Picture} />
                <Stack.Screen name='Calender' component={Calender} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation