import React, { useState } from "react"
import {Text,View, TouchableOpacity} from "react-native"
import {ListItem, Avatar } from "react-native-elements"
const CartItems=(props)=>{
    const data=props.item.item;
    const [quantity, setquantity]=useState(props.item.quantity)
return(


    <View style={{}}>
    <TouchableOpacity>
    <ListItem bottomDivider >
    <Avatar source={{uri:data.product.image}} />
<ListItem.Content>
<ListItem.Title style={{fontSize:13}}>{data.product.name}</ListItem.Title>

<ListItem.Subtitle style={{position:"absolute",alignSelf:"flex-end"}} >
GHC {data.product.price}</ListItem.Subtitle>



</ListItem.Content>



    </ListItem>
  
</TouchableOpacity> 

</View>



)




}
export default CartItems;