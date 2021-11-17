import React, { useState } from "react";
import { View, Button, Text, TouchableOpacity, StyleSheet,Dimensions ,Image} from "react-native";

var width=Dimensions.get("window");

import {
  NativeBaseProvider,
  VStack,
  Select,
  Radio,
  CheckIcon,
} from "native-base";

const methods = [
  { name: "Cash on Delivery", value: 1 },
  { name: "Mobile Money Payfast", value: 2 },
  { name: "Card Payment", value: 3 },
];

const paymentCards = [
  { name: "Visa", value: 2 },
  { name: "MasterCard", value: 3 },
  { name: "Other", value: 4 },
];

const Payment = (props) => {
  const order = props.route.params;

  const [selected, setSelected] = useState("one");
  const [card, setCard] = useState();
  return (
   
    <NativeBaseProvider>
        

      <View style={{backgroundColor:"gainsboro", alignItems:"center"}}>
    
      
    
      <VStack>
        <View style={styles.content}>
          {methods.map((item, index) => {
            return (
              <View style={{marginTop:30}}>
              <TouchableOpacity key={item.name} onPress={() => setSelected(item.value)}>
                <View style={{ paddingLeft: 40 }}>
                  <View>
                    <Text style={{fontSize:25}}>{item.name}</Text>
                  </View>
                  <View style={{ position:"absolute",alignSelf:"flex-end",paddingRight:23 }}>
                    <Radio.Group name="myRadioGroup" value={item.value}>
                      <Radio value={selected} />
                    </Radio.Group>
                  </View>
                </View>
              </TouchableOpacity>
              </View>
            );
          })}

          {selected == 2 ? (
            <View style={{ marginTop: 50 }}>
              <Text style={{}}>Welcome to mobile fast pay!!</Text>
            </View>
          ) : null}

          {selected == 3 ? (
            <Select
              selectedValue={card}
              Width="10"
              accessibilityLabel="Select Card"
              placeholder="Select Card"
              _selectedItem={{
                backgroundColor: "white",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={50}
              onValueChange={(c) => setCard(c)}
            >
              {paymentCards.map((c, index) => {
                return (
                  <Select.Item value={c.name} label={c.name} key={c.name} />
                );
              })}
            </Select>
          ) : null}


          <View style={{ marginTop: 60, alignSelf: "center" }}>
            <Button
              title={"Confirm"}
              onPress={() => props.navigation.navigate("Confirm", { order })}
            />
          </View>
        </View>
      </VStack>
      </View>
    </NativeBaseProvider>
  
  );
};
const styles = StyleSheet.create({
  content: {
    marginTop: 30,
  borderRadius:30,

 
  backgroundColor:"white",
  width:380,
  
    borderTopWidth: 2,
    borderWidth:1,
  
    
  },
});

export default Payment;
