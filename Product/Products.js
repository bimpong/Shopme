import React from 'react'
import { useState ,useEffect} from 'react';
import { StyleSheet,View,TouchableOpacity,ActivityIndicator, FlatList,Image, Text, Dimensions} from 'react-native'
import Productlist from "./productlist";
import { SearchBar } from 'react-native-elements';
import Search from "../Screens/Search"

var { width } = Dimensions.get("window");



const Data=require('../assets/Data.json');





const Product=()=> {
   

      
    const [products, assign]= useState([]);
    

    useEffect(()=>{
 assign(Data);
  return ()=>{
      assign([]);
  }

    },
    []

    )

  
    return (

        
       
<View style={styles.products}>
   
   <Search/>
    

            
            <Text style={{fontWeight:"100", fontSize:30, paddingBottom:12}}>products</Text>
            <View style={styles.flatlist}>
            <FlatList
         
            numColumns={2}
                 data={products}
                 renderItem={({item})=>< Productlist key={item.id}
                 item={item}/>}
                 keyExtractor={item=>item.name}/>
            </View>
            
        </View>
       

     
           
        








 
   
        
     

   
    
    )
}



const styles = StyleSheet.create({
products:{
   alignItems:"center",
    backgroundColor:"lavender"
},
flatlist:{

}



    
})
export default Product