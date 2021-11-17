import React from "react";
import { StyleSheet, Text, View , SafeAreaView, Image,Dimensions,TouchableOpacity} from 'react-native'
import { fonts } from "react-native-elements/dist/config";
import { color } from "react-native-elements/dist/helpers";
var { width } = Dimensions.get("window");
const Header=()=>{
    return (
    <TouchableOpacity style={{backgroundColor:"gainsboro"}}>
       <View style={styles.header}>
          
           
           < Image style={{ width:width/4, height:width/8, margin:20,resizeMode:"fit"}} source={require("../assets/laptop.png")}/>
           < Image style={{ width:width/3, height:width/6}} source={require("../assets/phone.png")}/>
          
           </View>
           <View style={styles.content}>
           <Text style={styles.headname}>GENERAL MOSQUITO PHONES, LAPTOPS SHOP AND ACCESSORIES</Text> 
           <Text style={styles.headname}>ShopApp</Text> 
        
        <View>
            <Text>Buy all your phones, laptops and accessories at affordable price</Text></View>
           </View>
           
        
     </TouchableOpacity>
    )
}




const styles = StyleSheet.create({
headname:{
   fontWeight:"bold",
   color: "blue"
,
fontStyle:"italic"
},
header:{
    
    flexDirection:"row",
    alignItems:"center",
    flexWrap:"wrap",
    justifyContent:"center",
    marginTop:20,
    


},
content:{
    alignItems:"center",
    justifyContent:"center",
    padding:2
}

})
export default Header; 