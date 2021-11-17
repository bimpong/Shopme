import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Dimensions } from 'react-native'
import Card from "./cards";

var {width}=Dimensions.get('window');
const Productlist=(props)=>{
const {item}=props;
    return (
        <TouchableOpacity onPress={()=>{
            props.navigation.navigate("Product Details", {item: item})
        }}

         style={{width:'50%'}} >
            <View style={{width:width/2}}>
            <Card {...item}/>
        </View>
        </TouchableOpacity>
    )
} 

const styles = StyleSheet.create({


})
export default Productlist;