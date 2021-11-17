
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity, Image, Dimensions} from 'react-native'
var { width } = Dimensions.get("window");
import { Avatar, ListItem } from 'react-native-elements';

const SearchDesign=(props)=>{

    const {name,price, countInStock, color,brand, image,description} =props;

    return(

   

           <ListItem bottomDivider 
            
          >
      
        <Avatar source={{uri: image}} />
        <ListItem.Content>
          <ListItem.Title>{name}</ListItem.Title>
          <ListItem.Subtitle>Brand: {brand}</ListItem.Subtitle>
        </ListItem.Content>
    
      </ListItem>
        
    
      



      
    )



}

const styles = StyleSheet.create({
   
})

export default SearchDesign;
