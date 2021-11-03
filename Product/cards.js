import React, {Component} from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity, Image, Dimensions} from 'react-native'
var { width } = Dimensions.get("window");

const Cards=(props)=>{

    const {name,price, countInStock,description, image} =props;

    return(
        <View style={styles.container} >

            <Image style={styles.image} 
           resizeMode='contain'
            source={{uri:image}}
           
        
           />
                <View style={styles.card} />
                <Text style={styles.title} >
                {name}
                </Text> 
                
                <Text style={styles.price} >GHC {price}</Text>
                {countInStock >0 ?(
                    <View style={{marginTop:20}}>
                        <Button title="Check Order" color={"black"} onPress={()=>alert(description)}/> 

                    </View>
                ):<Text style={{ marginTop:20}}>Out of stock</Text>}
        
        </View>
    )



}
const styles = StyleSheet.create({
    container: {
        width: width / 2 - 30,
        height: width/1.7,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 100,
        backgroundColor: 'white'
       
    },
    image: {
        width: width / 2 - 20 - 10,
        height: width / 2 - 20 - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -40,
        borderRadius:20
    },
    card: {
        marginBottom: 10,
        height: width / 2 - 20 - 90,
        backgroundColor: 'transparent',
        width: width / 2 - 20 - 10
    },
    title: {
        fontWeight: "bold",
        fontSize: 14,
        textAlign: 'center'
    },
    price: {
        fontSize: 20,
        color: 'orange',
        marginTop: 10
    }
})

export default Cards;
