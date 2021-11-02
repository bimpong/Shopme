import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import { SafeAreaView, Text, StyleSheet, View, FlatList,Dimensions,Image} from 'react-native';
import { SearchBar,ListItem, Avatar } from 'react-native-elements';

import Productlist from '../Product/productlist';
import Cards from '../Product/cards';
var { width } = Dimensions.get("window");
const Data=require('../assets/Data.json');
const Search = () => {
  const [search, setSearch] = useState('');
  const [filteredData, setfilter] = useState([]);
  const [sources, datasource] = useState([]);

  useEffect(() => {

    
    
 
        setfilter(Data);
        datasource(Data);
     
        return ()=>{
            assign([]);
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
    } else {
    
      // Update filteredData with sources
      setfilter(sources);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      
      <FlatList
         
      numColumns={2}
           data={filteredData}
           renderItem={({item})=>< Cards key={item.id}
           item={item}/>}
           keyExtractor={item=>item.name}/>
     
    );
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
      <SearchBar
    round
    searchIcon={{ size: 24 }}
    onChangeText={(text) => searchFilterFunction(text)}
    onClear={(text) => searchFilterFunction('')}
    placeholder="Type Here..."
    value={search}
    containerStyle={{ width:width, marginTop:30, backgroundColor: 'white', borderRadius: 1 }}
    inputContainerStyle={{backgroundColor:"white"}}
    
  
   // onChangeText={(text)=> }
        

    
    
   />
        <FlatList
          data={Search}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={
            ItemView
        
        }
      
           
        
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
});

export default Search;
