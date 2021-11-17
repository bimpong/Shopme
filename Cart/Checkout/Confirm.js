import React from "react";
import { View, StyleSheet, Dimensions, ScrollView, Button,Text } from "react-native";
import { Avatar,ListItem } from "react-native-elements";
import { connect } from "react-redux";



import * as actions from "../../Redux/Actions/cartActions"


var { width, height } = Dimensions.get("window");

const Confirm = (props) => {
  const confirm = props.route.params;


  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Confirm Order</Text>
        {props.route.params ? (
          <View style={{ borderWidth: 1, borderColor: "orange" }}>
            <Text style={styles.title}>Shipping to:</Text>
            <View style={{ padding: 8 }}>
              <Text>Address: {confirm.order.order.shippingAddress1}</Text>
              <Text>Address2: {confirm.order.order.shippingAddress2}</Text>
              <Text>City: {confirm.order.order.city}</Text>
            
              <Text>Country: {confirm.order.order.country}</Text>
            </View>
            <Text style={styles.title}>Items:</Text>
         
           
             
            
          </View>
        ) : null}
        <View style={{ alignItems: "center", margin: 20 }}>
          <Button title={"Place order"} />
        </View>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({

});

export default Confirm;
