import React ,{useState}from 'react';

import {View,Text, StyleSheet,TouchableOpacity ,Dimensions}from 'react-native';
const { width } = Dimensions.get("window"); 



const ButtonRes=props=>{
    let mybutton;
   // console.log(width);
    if(width >= 768){
        console.log("longeeeeeeeeeeeeeer");
        return mybutton=  <View  style={styles.button}>
      
            <Text style={styles.textStyle}>Réserver maintenant</Text>
            
        </View>;
        
 
    }else{
        mybutton= <View  style={styles.button}>
        <Text style={styles.textStyle}>Réserver</Text>
        
    </View>;
    }
    return (
    <TouchableOpacity  onPress={props.onreserve}>
          {mybutton}
        </TouchableOpacity>
 );
};
const styles=StyleSheet.create({
    button:{
        width:'80%',
        height:35,
         borderRadius:15,
        //marginLeft:60,
        marginTop:20,
        marginLeft:8,
        backgroundColor:"#6B9E59",
        justifyContent:'center',
        alignItems:'center',
        //position: 'absolute',
        //top: 100,
        //paddingTop: 5,
        
    },
    textStyle:{
        fontSize:14,
        color:'#fff',
        fontFamily:"Cairo-Bold",
        

    },
    
});
export default ButtonRes;