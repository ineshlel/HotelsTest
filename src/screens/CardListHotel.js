import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Modal, Dimensions ,TextInput } from 'react-native';
import {data} from '../model/data';
import Card from '../components/Card';
//import Icon from 'react-native-vector-icons/Ionicons';
const { width } = Dimensions.get("window"); 
const CardListScreen = ({}) => {

    

  
 
   
    const renderItem = ({item}) => {
      
        //console.log(item.id);
        return (
            <Card 
                
                itemData={item}
               // onPress={toggleModalVisibility}
             
            />
           
        );
       
    };

    return (
      <View style={styles.container}>
   
  
        <FlatList 
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            
        />
      </View>
    );
};

export default CardListScreen;

const styles = StyleSheet.create({
  container: {
   flex: 1, 
    width: '95%',
    alignSelf: 'center',
    paddingTop:18,
  
  },
  viewWrapper: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center", 
    backgroundColor: "rgba(0, 0, 0, 0.2)", 
}, 
modalView: { 
     paddingTop:10,
    alignItems: "center", 
    position: "absolute", 
    top: "38%", 
    left: "45%", 
    elevation: 8, 
    transform: [{ translateX: -(width * 0.4) }, 
                { translateY: -90 }], 
    height: 260, 
    width: width * 0.9, 
    backgroundColor: "#fff", 
    borderRadius: 7, 
},
textInput: { 
    width: "40%", 
    borderRadius: 5, 
    paddingVertical: 4, 
    paddingHorizontal: 16, 
    borderColor: "rgba(0, 0, 0, 0.2)", 
    borderWidth: 1, 
    marginBottom: 8, 
},
nameStyle:{
    width: width * 0.9*0.5,
   },
   lineStyle:{
    borderWidth: 0.5,
    borderColor:'black',
    margin:10,
}
});