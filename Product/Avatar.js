import React from 'react';
import { Avatar } from 'react-native-elements';


const Avata=()=>{
    return (
       

<Avatar


rounded
source={{
  uri:
    'https://pbs.twimg.com/profile_images/1454000498651144195/U1HsILij_400x400.jpg',

}}
size= {100}
onPress={() => console.log()}
activeOpacity={0.7}
/>
    );
}

export default Avata;

