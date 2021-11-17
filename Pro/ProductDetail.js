import React, { useState, useEffect } from 'react'
import { Image, View, StyleSheet, Text, ScrollView, Button,Dimensions ,TouchableOpacity} from 'react-native';
import { ListItem ,Rating} from 'react-native-elements';


import Swiper from "react-native-swiper/src";
import { connect } from 'react-redux'
import * as actions from "../Redux/Actions/cartActions"


var { width } = Dimensions.get("window");



const ProductDetail = (props) => {

    const [item, setItem] = useState(props.route.params.item);
    const  [availability, setAvailability]=useState('')
  
   
  

    return (
     
        
            <ScrollView style={{ padding: 5 }}>
            
                <View style={styles.container}>
                    <View style={styles.swiper}>
                <Swiper
            style={{ height: width/2 }}
            showButtons={false}
            autoplay={true}
            autoplayTimeout={4}
          >
                   <Image 
                        source={{
                            uri: item.image 
                        
                        }}
                        resizeMode="contain"
                        style={styles.image}
                    />
                 

            
              
        
          </Swiper>
          </View>




               
               </View>

               <ListItem>

               <ListItem.Content>
                <ListItem.Title style={{fontSize:19,fontStyle:"bold"}}><Text style={{fontWeight:"bold", fontSize:23}}> Name:</Text>
                  {item.name}
                </ListItem.Title>
                <View style={{marginBottom:10,}}></View>
                <ListItem.Title style={{marginBottom:20}}>
                 <Text style={{fontsize:50, fontWeight:"bold",marginLeft:21}}>Price : GHC{item.price}</Text>
                  <Text style={{color:"red", fontSize:12}}>
                      <Text style={{textDecorationLine:"line-through",color:"red"}}> GHC{item.l}</Text> {item.discount}% discount off</Text>
                      <View style={{alignItems:"flex-start"}}>
             
              </View></ListItem.Title>
                 <ListItem.Subtitle style={{marginLeft:50 ,fontsize:2}}> </ListItem.Subtitle>
                 
                <ListItem.Subtitle
                
                style={{textShadowColor:'black'}}><Text style={{fontSize:20,fontWeight:"bold"}}>Product description: </Text> {item.description}</ListItem.Subtitle>
                <ListItem.Title style={{fontSize:19,fontStyle:"bold"}}><Text style={{fontWeight:"bold", fontSize:23}}> Brand:</Text>
                  {item.brand}
                </ListItem.Title>
                <ListItem.Title style={{fontSize:19,fontStyle:"bold"}}><Text style={{fontWeight:"bold", fontSize:23}}>Products in Stock:</Text>{item.countInStock}</ListItem.Title>

               </ListItem.Content>
             
                </ListItem>
                <View style={{alignItems:"center", marginTop:20,marginBottom:32}}>
                <TouchableOpacity style={{backgroundColor:"green",width:width/2,height:width/8,alignItems:"center" ,justifyContent:"center"}}
                onPress={()=>
                  props.addItemToCart(item)}>
                   <Text>Buy</Text> 
                </TouchableOpacity>
                 
                </View>
                
          

                

               
               </ScrollView>
     
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
        flex: 1,
        backgroundColor: "white",
      },
      swiper: {
        width: width,
        alignItems: "center",
        marginTop: 10,
      },
      image: {
        height: width / 2.5,
        width: width - 40,
        borderRadius: 10,
        marginHorizontal: 20,
      },
    
    }
)

export default connect(null, mapDispatchToProps) (ProductDetail);