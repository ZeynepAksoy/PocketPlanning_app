import { View, Text, StyleSheet , Image, TextInput, Touchable, TouchableOpacity, ScrollView, KeyboardAvoidingView} from 'react-native'
import React, { useState } from 'react'
import Colors from '../utils/Colors';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { decode } from 'base64-arraybuffer';

const placeholder='https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png'
export default function AddNewCategoryItem() {
    const [ image,setImage]=useState(placeholder);
    const [previeImage, setPreviewImage]=useState(placeholder);
    const [name,setName]=useState();
    const [url,setUrl]=useState();
    const [cost,setCost]=useState();
    const [note,setNote]=useState();


    const onImagePick=async()=>{
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        quality: 0.7,
        base64:true
      });

      if (!result.canceled) {
        setPreviewImage(result.assets[0].uri);
        setImage(result.assets[0].base64);
      }
    }

    const onClickAdd=async()=>{
      const fileName=Date.now();
      const { data, error } = await supabase
      .storage
      .from('images')
      .upload(fileName+'png', decode(image), {
        contentType:'image/png',
      });
      console.log("Dosya Yüklendi:",data,error);
    } 
  return (
    <KeyboardAvoidingView>
    <ScrollView style={{padding:20}}>
      <TouchableOpacity onPress={()=>onImagePick()}>
        <Image source={{uri:previeImage}}
        style={styles.image}
        />  
      </TouchableOpacity>
      <View style={styles.textInputContainer}>
        <Ionicons name="pricetag" size={24} color={Colors.GRAY} />
        <TextInput placeholder='Harcama adı'
         style={styles.input}
         onChangeText={(value)=>setName(value)}
        />  
      </View> 
      <View style={styles.textInputContainer}>
        <FontAwesome name="turkish-lira" size={24} color={Colors.GRAY}  />   
        <TextInput placeholder='Ücret' 
        keyboardType='number-pad'
        onChangeText={(value)=>setCost(value)}
        style={styles.input}/>  
      </View> 
      <View style={styles.textInputContainer}>
        <Ionicons name="link" size={24} color={Colors.GRAY} />
        <TextInput placeholder='Url'
         onChangeText={(value)=>setUrl(value)}
        style={styles.input}/>  
      </View>  
      <View style={styles.textInputContainer}>
        <Ionicons name="pencil" size={24} color={Colors.GRAY} />
        <TextInput placeholder='Not' 
        onChangeText={(value)=>setNote(value)}
        style={styles.input}
        numberOfLines={3}/>  
      </View>  
      <TouchableOpacity style={styles.buttom}
            disabled={!name||!cost}
            onPress={()=>onClickAdd()}
      >
        <Text style={{textAlign:'center',
          fontFamily:'outfit-bold',
          color:Colors.WHITE
        }}>Ekle</Text>
      </TouchableOpacity>
    </ScrollView>
    </KeyboardAvoidingView>
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
    fontSize:17,
    width:'100%'
  },
  buttom:{
    padding:17,
    backgroundColor:Colors.PRIMARY,
    borderRadius:99,
    marginTop:25
  }
}) 