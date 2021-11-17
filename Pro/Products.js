import React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,

} from "react-native";
import { connect } from "react-redux";
import * as actions from "../Redux/Actions/cartActions"





import Search from "../Searchs/Search";
var { width } = Dimensions.get("window");
const Data = require("../assets/Data.json");

import Productlist from "./productlist"




const Product = (props) => {
  const [products, assign] = useState([]);
 
  useEffect(() => {
    assign(Data);
    
    
    return () => {
      assign([]);
     
    };
  }, []);
  
  return (
    <View>
      <View style={styles.products}>
        

      </View>
      <ScrollView>
     <View>
     <Search
      navigation={props.navigation} />
       <View>
  
       
   
        


            
          
      
    


         
           <View style={{flexDirection:"row", flexWrap:"wrap", backgroundColor:"gainsboro"}}>
           {products.map((item) => {
               return(
                   <Productlist
                   navigation={props.navigation}
                      
                       key={item._id}
                       item={item}
                   />
               )
           })}</View>    
       </View>
      
       <View style={{height:width}}></View>
      
     </View>
   </ScrollView>
      
             
    </View>
  );
};
const mapDispatchToProps=(dispatch)=>{
  return{
    addItemToCart:(product)=>
    dispatch(actions.addToCart({quantity:1,product}) )
  }
}
const styles = StyleSheet.create({
  products: {
    alignItems: "center",
    backgroundColor: "lavender",
  },
  flatlist: {},
});
export default connect(null,mapDispatchToProps)(Product);
