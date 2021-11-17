import React, { useEffect, useState, useContext} from 'react'
import { Text, View, Button } from 'react-native'
import { NativeBaseProvider,Select,VStack,CheckIcon, ScrollView} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import FormContainer from '../../Form/FormContainer'
import Input from '../../Form/Input'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Regions from "../../assets/Regions.json"

import { connect } from 'react-redux'



const Checkout = (props) => {


    const [ orderItems, setOrderItems ] = useState();
    const [ address, setAddress ] = useState();
    const [ address2, setAddress2 ] = useState();
   
    const [ city, setCity ] = useState();
  
    const [ Region, setregion ] = useState();
 
    const [ phone, setPhone ] = useState();
 

    useEffect(() => {
        setOrderItems(props.CartItems)

        

        return () => {
            setOrderItems();
        }
    }, [])

    const checkOut = () => {
   
        let order = {
            Regions,
            city,
            
            dateOrdered: Date.now(),
            orderItems,
            phone,
            shippingAddress1: address,
            shippingAddress2: address2,
         
        
          
          
        }
        props.navigation.navigate("Payment", {order: order })

    
    }

    return (
        <NativeBaseProvider><ScrollView>
                <VStack alignItems="center" space={50}>
      <Select
        selectedValue={Region}
        minWidth="300"

        accessibilityLabel="Choose region"
        placeholder="Choose Region"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={50}
        onValueChange={(r) => setregion(r)}
      >
       {
           Regions.map((r)=>{
               return(
                    <Select.Item
                   value={r.name}
                  label={r.name}
                   key={r.code}
                
                   />
          
               )
           })
       }
      </Select>
    </VStack>
              
      
           
             <FormContainer>
                <Input
                    placeholder={"Phone"}
                    name={"phone"}
                    value={phone}
                    keyboardType={"numeric"}
                    onChangeText={(text) => setPhone(text)}
                />
                 <Input
                    placeholder={"City"}
                    name={"city"}
                    value={city}
                    onChangeText={(text) => setCity(text)}
                />
                   <Input
                    placeholder={"Shipping Address 1"}
                    name={"ShippingAddress1"}
                    value={address}
                    onChangeText={(text) => setAddress(text)}
        
        />
         <Input
                    placeholder={"Shipping Address 2"}
                    name={"ShippingAddress2"}
                    value={address2}
                    onChangeText={(text) => setAddress2(text)}
                />
                <View style={{marginTop:50}}>
                    
                
                  
                </View>
                  
                 
                  
              
                <View style={{ width: '80%', alignItems: "center",backgroundColor:"gainsboro"  }}>
                <Button  title="Confirm"  onPress={() => checkOut()}/>
              
                  </View>
                  </FormContainer>
        
            </ScrollView>
            </NativeBaseProvider>
    )
}

const mapStateToProps = (state) => {
    const { cartItems } = state;
    return {
        cartItems: cartItems,
    }
}

export default connect(mapStateToProps)(Checkout)