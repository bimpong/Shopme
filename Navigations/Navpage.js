import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {View,Text, ScrollView,SafeAreaView} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome";
import { MaterialIcons } from "@expo/vector-icons";
import HomeNav from "./HomeNav"
import CartNav from "./CartNav";
import UserNav from "./UserNav";
const Bottomtab=createBottomTabNavigator();




import CartIcon from "../Cart/CartIcon"


const Navpage=()=>{
return(

     <Bottomtab.Navigator
  
  initialRouteName="Home"
  tabBarOptions={{
    keyboardHidesTabBar: true,
    showLabel: false,
    activeTintColor: "yellow",
    inactiveTintColor: "green"
  }}
  >
       <Bottomtab.Screen
    name="General Mosquito's Phones And Accessories"
    component={HomeNav}
    options={{ title:"General Mosquito's Phones And Accessories", 
  
    headerStyle:{backgroundColor:"blue",
    borderTopWidth:20,height:80,
    borderTopColor:"red"
    },
    headerTitleStyle:{
      color:"white"
    },
    tabBarStyle:{
      backgroundColor:"blue"
    }
    ,
      tabBarIcon: ({ color }) => (
        <Icon name="home"
         color={color}
          size={30} />
      ),
   
    }}
  />
  
  <Bottomtab.Screen
    name="Cart"
    component={CartNav}
    options={{
      title:"Cart", 
    headerStyle:{backgroundColor:"blue",
    borderTopWidth:20,height:80,
    borderTopColor:"yellow"
    },
    headerTitleStyle:{
      color:"white"
    },
    tabBarStyle:{
      backgroundColor:"blue"
    }
    ,
      tabBarIcon: ({ color }) => (
        <View style={{marginTop:12}}>
          
          <Icon name="shopping-cart"
           color={color}
            size={30} />
        <CartIcon/>
        </View>
    
   
      ),
    }}
  />
   <Bottomtab.Screen
    name="Categories"
    component={HomeNav}
    options={{
      title:"Categories", 
      headerStyle:{backgroundColor:"blue",
      borderTopWidth:20,height:80,
      borderTopColor:"black"
      },
      headerTitleStyle:{
        color:"white"
      },
      tabBarStyle:{
        backgroundColor:"blue"
      }
      ,
      tabBarIcon: ({ color }) => (
        
            <MaterialIcons name="category"
         color={color}
          size={30} />

      
      ),
    }}
  />
   <Bottomtab.Screen
    name="User"
    component={UserNav}
    options={{  title:"User", 
    headerStyle:{backgroundColor:"blue",
    borderTopWidth:20,height:80,
    borderTopColor:"green"
    },
    headerTitleStyle:{
      color:"white"
    },
    tabBarStyle:{
      backgroundColor:"blue"
    }
    ,
      tabBarIcon: ({ color }) => (
        <Icon name="user" color={color} size={30} />
      ),
    }}
  />
  



    

</Bottomtab.Navigator>

   






);



}
export default Navpage;