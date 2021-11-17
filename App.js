import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity, ActivityIndicator, ScrollView, FlatList,   LogBox} from 'react-native'
import { useState } from 'react'
import {} from "react-native-elements"
import { NavigationContainer } from '@react-navigation/native'
import {Provider} from "react-redux"
import store from "./Redux/store";




import Products from  "./Pro/Products"

import Product from './Pro/Products'
import Navpage from './Navigations/Navpage'
LogBox.ignoreAllLogs(true);
import Header from './src/Header'







export default function App() {
    return (
    <Provider store={store}>
         <NavigationContainer>
             <Header/>
            <Navpage/>
            
</NavigationContainer>

        
    </Provider>
           
 
       
    )
}






