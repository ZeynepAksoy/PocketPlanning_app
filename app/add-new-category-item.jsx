import { View, Text, StyleSheet , Image, TextInput} from 'react-native'
import React, { useState } from 'react'
import Colors from '../utils/Colors';
import { Ionicons } from '@expo/vector-icons';

const placeholder='storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png'
export default function AddNewCategoryItem() {
    const [ image,setImage]=useState(placeholder);
  return (
    <View style={{padding:20}}>
      <Image source={{uri:image}}
      style={styles.image}
      />  
      <View style={styles.textInputContainer}>
        <Ionicons name="pricetag" size={24} color={Colors.GRAY} />
        <TextInput placeholder='Harcama adı' style={styles.input}/>  
      </View> 
      <View style={styles.textInputContainer}>
        <Ionicons name="pricetag" size={24} color={Colors.GRAY} />
        <TextInput placeholder='Ücret' style={styles.input}/>  
      </View> 
      <View style={styles.textInputContainer}>
        <Ionicons name="pricetag" size={24} color={Colors.GRAY} />
        <TextInput placeholder='Url' style={styles.input}/>  
      </View>  
      <View style={styles.textInputContainer}>
        <Ionicons name="pricetag" size={24} color={Colors.GRAY} />
        <TextInput placeholder='Not' style={styles.input}/>  
      </View>  
    </View>
  )
}
const styles = StyleSheet.create({
  image:{ 
    width:150,
    height:150,
    backgroundColor:Colors.GRAY,
    borderRadius:15
  },
  textInputContainer:{
    padding:10,
    borderWidth:1,
    display:'flex',
    flexDirection:'row',
    gap:10,
    alignItems:'center',
    borderRadius:10,
    borderColor:Colors.GRAY,
    marginTop:10
  },
  input:{
    fontSize:17
  }
})