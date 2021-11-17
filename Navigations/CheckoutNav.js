import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

// Screens
import Checkout from '../Cart/Checkout/Checkout'
import Payment from '../Cart/Checkout/Payment'
import Confirm from '../Cart/Checkout/Confirm';

const Tab = createMaterialTopTabNavigator();

function MyTabs() { 
    return(
        <Tab.Navigator>
            <Tab.Screen name="Shipping" component={Checkout} />
            <Tab.Screen name="Payment" component={Payment} />
            <Tab.Screen name="Confirm" component={Confirm} />
        </Tab.Navigator>
    );
}

export default function CheckoutNavigator() {
    return <MyTabs />
}
