import React, {Component} from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity, Image, Dimensions} from 'react-native'
var { width } = Dimensions.get("window");
import { Rating } from 'react-native-elements';
import { connect } from 'react-redux'
import * as actions from "../Redux/Actions/cartActions"

const Cards=(props)=>{

    const {name,price, countInStock, color, image,l,discount,rating,delivery} =props;

    return(
       
        <View style={styles.container} >

            <Image style={styles.image} 
           resizeMode='contain'
            source={{uri:image}}
           
        
           /><View style={{alignItems:"flex-start"}}>
                <View style={styles.card} />
                <Text style={styles.title}  >
                {name}
                </Text> 
                
                <Text style={styles.price} >GH₵{price} </Text>
              

               <Text style={{marginBottom:10}}> <Text style={{textDecorationLine:"line-through",color:"red",fontSize:10}}>20{l}</Text> <Text style={{fontSize:13, color:"red"}}>{discount}% discount off</Text></Text>
               <View style={{alignItems:"flex-start",marginBottom:15}}>
             
              </View>

             
                {countInStock >0 ?(
                     <View style={{alignItems:"center"}}>
                     <TouchableOpacity style={{borderRadius:10,backgroundColor:"blue",width:width/4,height:width/10,alignItems:"center",marginLeft:25 ,justifyContent:"center"}}
                     onPress={()=>
                       props.addItemToCart(props)}>
                        <Text>Order Now</Text> 
                     </TouchableOpacity>
                 
                 </View>     
                ):<Text style={{ marginTop:20}}>Out of stock</Text>}
             
       
           </View>
               
        </View>
      
    )



}
const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => 
            dispatch(actions.addToCart({quantity: 1, product}))
    }
}

const styles = StyleSheet.create({
    container: {
        width: width / 2 - 20,
        height: width / 1.5,
        padding: 10,
        borderRadius: 10,
        marginTop:70,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white'
        
    },
    image: {
        width: width / 2 - 20 - 40,
        height: width / 2 - 20 - 60,
        backgroundColor: 'transparent',
        position: 'absolute',
      
    },
    card: {
        marginBottom: 10,
        height: width / 2 - 20 - 90,
        backgroundColor: 'transparent',
        width: width / 50 - 20 - 10
    },
    title: {
        fontWeight: "bold",
        fontSize: 14,
        textAlign: 'center'
    },
    price: {
        fontSize: 15,
        color: 'orange',
        marginTop: 10
    }
})

export default connect(null, mapDispatchToProps)(Cards);
