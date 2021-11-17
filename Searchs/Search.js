import React, { useState, useEffect } from 'react';

// import 
import { SafeAreaView, Text, StyleSheet, View, FlatList,Dimensions,Image, Button} from 'react-native';
import { SearchBar,Card,ListItem, Avatar } from 'react-native-elements';
import {AntDesign} from "@expo/vector-icons"
var { width } = Dimensions.get("window");
const Data=require('../assets/Data.json');
import Searchdesignlist from "./Searchdesignlist"
import Productlist from "../Pro/productlist"



const Search = (props) => {
 
  const [search, setSearch] = useState('');
  const [filteredData, setfilter] = useState([]);
  const [sources, datasource] = useState([]);


  

  useEffect(() => {



    
    

        setfilter(Data);
        datasource(Data);
        
       
     
        return ()=>{
            setfilter([]);
      

        }
      
          },
          []
      
          )

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the sources
      // Update filteredData
      const newData = sources.filter(function (item) {
        const itemData = item.name
          ? item.name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilter(newData);
      setSearch(text);
    }
   
    else {
    
      // Update filteredData with sources
      setfilter(sources);
      setSearch(text);
    }
  };
  const openList = () => {
    datasource(true);
  };

  const onBlur = () => {
    datasource(false);
  };

  const ItemView = () => {
    return (<View>
      {
      filteredData.map((item) => {
        return(
          <ListItem
          onPress={()=>{
            props.navigation.navigate("Product Details", {item: item})
        }}>
            <Searchdesignlist
         
       
      
           
               
                key={item._id}
                item={item}
           
            />
                 </ListItem>
        )
    })}
    </View>
    )
      
  
        
  };
 

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' name : ' + item.name);
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{marginLeft:23,backgroundColor:"transparent"}}>
        <SearchBar
      round
    
  
    searchIcon={{ size: 24 }}
    onChangeText={(text) => searchFilterFunction(text)}
    onClear={(text) => searchFilterFunction("")}
    placeholder="Search Products..."
    value={search}
    placeholderTextColor={"red"}
    inputStyle={{color:"black"}}
    
   
  
    containerStyle={{ width:width-40, backgroundColor:"transparent",borderTopColor: 'transparent', borderBottomColor:"transparent"}}
    inputContainerStyle={{backgroundColor:""}}
   />
        </View>
    
     
      <View>
              <FlatList
        data={search}
       
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={
          ItemView         

      } 
      
      />
     
    
        </View>
    
      
    
    
  

           </View>
        
   
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'

  },
  itemStyle: {
    padding: 10
  },
});

export default Search;
