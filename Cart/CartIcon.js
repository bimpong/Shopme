import React from "react";
import { StyleSheet } from "react-native";
import { Badge, Text ,NativeBaseProvider} from "native-base";

import { connect } from "react-redux";

const CartIcon = (props) => {
  return (
    <>
      {props.cartItems.length ? (
        <NativeBaseProvider>
          <Badge style={styles.badge}>
          <Text style={styles.text}>{props.cartItems.length}</Text>
        </Badge>
        </NativeBaseProvider>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

const styles = StyleSheet.create({
  badge: {
    width: 25,
    position: "absolute",

    backgroundColor:"orange",
    top:-42,
    borderRadius:30,
    right:-19

  },
  text: {
    fontSize:10,
    color:"white"
   
  },
});

export default connect(mapStateToProps)(CartIcon);
