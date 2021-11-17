import React from "react"
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../User/Login'
import Register from '../User/Register'


const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
             <Stack.Screen 
                name="Register"
                component={Register}
                options={{
                    headerShown: false
                }}
            />
             
        </Stack.Navigator>
    )
}

export default function UserNavigator() {
    return <MyStack />
}