
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const Login=()=> {
  return (

    <View  style={styles.container}>
      <Text style={styles.Text}>
        Login Require</Text>
        <TextInput 
          style={ styles.input}
          placeholder="Enter Username"
        />
         <TextInput
          style={styles.input}
          placeholder="Enter Password" secureTextEntry
        />
        <View style={styles.btnContainer}>
            <TouchableOpacity
            style={styles.userBtn}
            onPress={() => alert("Login Works")}
            >
              <Text style={styles.btnTxt}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.userBtn}
              onPress={() => alert("Sign In Works")}
            >
              <Text style={styles.btnTxt}>Sign ZIn</Text>
            </TouchableOpacity>
            </View>    
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize:30,
    textAlign: 'centre',
    margin: 10,
    color: 'white',
  },
   input: {
     width: "90%",
     backgroundColor: "white",
     padding: 15,
     marginBottom: 10,  
   },
   btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",

   },
   userBtn: {
     backgroundColor: "#FFD700",
     padding: 15,
     width: "45%",
   },
   btnTxt: {
    fontSize: 18,
    textAlign: "center"
  }
});  
export default Login;