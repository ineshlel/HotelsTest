import React ,{useState,useEffect}from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Modal, Dimensions ,TextInput} from 'react-native';

import ButtonRes from './Buttonresv';

import StarRating from './StarRating';
import Icon from 'react-native-vector-icons/Ionicons';
const { width } = Dimensions.get("window"); 

const Card = ({itemData, onPress}) => {
   

    const [isModalVisible, setModalVisible] = useState(false); 
    const [inputValue2, setInputValue2] = useState(); 
    const [inputValue3, setInputValue3] = useState(); 
   //const[hotelprice,setHotelprice]=useState(itemData.HotelPrice);  
   //const [totalprice, setTotalPrice] = useState(0); 

  
  
  
  
   const toggleModalVisibility = () => { 
    setModalVisible(!isModalVisible); 
    setInputValue2('');
    setInputValue3('');
     }; 
    
 

    let price, newPrice,imgwithoffer,totalpricetext;
  
  
  if (itemData.Offer) {
       newPrice=parseInt(itemData.HotelPrice.substring(2)*parseInt(itemData.Offer.substring(0,2)))/100;
  // setHotelprice(parseInt(itemData.HotelPrice.substring(2)*parseInt(itemData.Offer.substring(0,2)))/100);
  
           price = <View  style={styles.priceContainer}>
                   <Text style={styles.oldpriceStyle}>{itemData.HotelPrice}</Text>
                   <Text style={styles.priceStyle}>  $ {newPrice}</Text>
                 </View>;
        imgwithoffer=<View style={styles.cardImgWrapper}>
            
        <Image
          source={itemData.HotelImg}
          resizeMode="cover"
          style={styles.cardImg}
        />
     
     <View style={{position:'absolute',width:40,height:40,borderRadius:30,backgroundColor:'orange',
      left:-6,top:-10,justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:'white',fontSize:12, }}>Offer</Text>
      </View>
      </View>;
     
      } else {
        price =  <Text style={styles.priceStyle}>{itemData.HotelPrice}</Text>;
        imgwithoffer=<View style={styles.cardImgWrapper}>
            
        <Image
          source={itemData.HotelImg}
          resizeMode="cover"
          style={styles.cardImg}
        />
      </View>;
    
      }
    
      if(itemData.Offer && inputValue2 && inputValue3){
        totalpricetext=  <Text> $ {parseInt(inputValue2)*parseInt(inputValue3)*
            (parseInt(itemData.HotelPrice.substring(2)*parseInt(itemData.Offer.substring(0,2)))/100)}</Text>;
      }
      else if(inputValue2=="" || inputValue3==""){
        totalpricetext=<Text>$ 0 </Text>  
      }
      else {
        totalpricetext=<Text>$ {parseInt(inputValue2)*parseInt(inputValue3)*parseInt(itemData.HotelPrice)}</Text>  
      }
    
  
  return (
      
      <View>
         
  
      <View style={styles.card}>
          {imgwithoffer}
      
        
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>{itemData.HotelName}</Text>
          <StarRating ratings={itemData.rating}  />
 
          { price }
        <ButtonRes
        onreserve={toggleModalVisibility}
        />
        </View>
       
      </View>
 
    <Modal animationType="slide"
    transparent visible={isModalVisible} 
    presentationStyle="overFullScreen"
    onDismiss={toggleModalVisibility}> 
      
          
      
   
    <View style={styles.viewWrapper}> 
        <View style={styles.modalView}> 
        <View  style={{marginLeft:width * 0.75}}>  
        <Icon
                    name='close'
                    color='black'
                    size={24}
                    onPress={toggleModalVisibility}
                />
        </View>
        <View    style={{flexDirection:'row',marginTop:12}}>
        <View style={styles.nameStyle} >

     <Text style={{color:'black',fontSize:14,}}>Nombre des chambres à réserver :</Text>
      </View> 
 

      
        
        <TextInput placeholder="1"
                    value={inputValue2} 
                    style={styles.textInput} 
        
        onChangeText={(value2) => setInputValue2(value2)} />
       </View>
       <View    style={{flexDirection:'row',marginTop:12}}>
       <View style={styles.nameStyle} >

       <Text style={{color:'black',fontSize:14,}}>Nombre des nuits :</Text>
           </View> 
        
        
        <TextInput placeholder="1"
                    value={inputValue3} 
                    style={styles.textInput} 
        
        onChangeText={(value3) => setInputValue3(value3)} />
       </View>
       <View style={{
            height: 1,
            backgroundColor: 'black',
            alignSelf: 'stretch',
            marginTop:30,
            marginHorizontal:14,
        }} />
         <View    style={{flexDirection:'row',marginTop:25}}>
       <View style={styles.nameStyle} >

       <Text style={{color:'black',fontSize:14,}}>Prix total :</Text>
           </View> 
    
           {totalpricetext}
       </View>
           
        
        </View> 
    </View> 
</Modal> 
    </View>
    
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    height: 140,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  
  
  },
  cardImgWrapper: {
    flex: 1,
    borderLeftWidth:6,
    borderColor:"white",
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  

    

  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  
  },
  cardTitle: {
    fontWeight: 'bold',
    color:'black',
    fontSize: 16,
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
  priceContainer:{
      flexDirection:"row",
     
  },
  oldpriceStyle:{
    textDecorationLine: 'line-through',
    color:"black",
    marginRight:20 ,
   
  },
  priceStyle:{
      color:"#3B91E1",
   
  }
  ,

  viewWrapper: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center", 
    backgroundColor: "rgba(0, 0, 0, 0.2)", 
}, 
modalView: { 
     paddingTop:10,
    alignItems: "center", 
    //justifyContent: "center", 
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