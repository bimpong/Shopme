import React from "react";
import { StyleSheet, Text, View , SafeAreaView, Image,Dimensions,TouchableOpacity} from 'react-native'
var { width } = Dimensions.get("window");
const Header=()=>{
    return (
    <TouchableOpacity>
       <View style={styles.header}>
           < Image style={{ width:width/6, height:width/6}} source={require("../assets/lo.png")}/>
           <Text style={styles.headname}>ShopApp</Text>
        
       </View></TouchableOpacity>
    )
}




const styles = StyleSheet.create({
headname:{
   fontWeight:"bold"
,
fontStyle:"italic"
},
header:{
    backgroundColor:"white",
    alignItems:"center",
  
   
    padding:10,

   borderBottomWidth:10,

    borderRadius:40
}

})
export default Header;