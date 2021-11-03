import React from "react";
import { StyleSheet, Text, View , SafeAreaView, Image,Dimensions,TouchableOpacity} from 'react-native'
var { width } = Dimensions.get("window");
const Header=()=>{
    return (
    <TouchableOpacity style={{backgroundColor:"gainsboro"}}>
       <View style={styles.header}>
          
           
           < Image style={{ width:width/4, height:width/8, margin:20,resizeMode:"fit"}} source={require("../assets/laptop.png")}/>
           < Image style={{ width:width/3, height:width/6}} source={require("../assets/phone.png")}/>
          
           </View>
           <View style={styles.content}>
           <Text style={styles.headname}>General Mosquito ShopApp</Text> 
        
        <View>
            <Text>Buy all your phones, laptops and accessories at affordable price</Text></View>
           </View>
           
        
     </TouchableOpacity>
    )
}




const styles = StyleSheet.create({
headname:{
   fontWeight:"bold"
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