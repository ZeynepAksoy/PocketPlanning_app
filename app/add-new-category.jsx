import { View, Text, TextInput, StyleSheet, Touchable, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import Colors from '../utils/Colors'
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import ColorPicker from '../components/ColorPicker'
import { supabase } from '../utils/SupabaseConfig';
import { client } from '../utils/KindeConfig';

export default function AddNewCategory() {
  const [selectedIcon,setSelectedIcon]=useState('IC')
  const [selectedColor,setSelectedColor]=useState(Colors.PRIMARY)
  const [categoryName,setCategoryName]=useState();
  const [totalBudget,setTotalBudget]=useState();

  const onCreateCategory=async()=>{
    const user=await client.getUserDetails();
    const {data, error}=await supabase.from('Category')
    .insert([{
      name:categoryName,
      assigned_budget:totalBudget,
      icon:selectedIcon,
      color:selectedColor,
      created_by:user.email
    }]).select();
      console.log(data);
    if(data){
      ToastAndroid.show('Category Created!', ToastAndroid.SHORT)
    }
  }

  return (
    <View style={{marginTop:20, padding:20}}>
     <View style={{
      justifyContent:'center',
      alignItems:'center'
     }}>

      <TextInput
        style={[styles.iconInput,{backgroundColor:selectedColor}]}
        maxLength={2}
        onChangeText={(value)=>setSelectedIcon(value)}
      >{selectedIcon}</TextInput>
       <ColorPicker
       selectedColor={selectedColor}
       setSelectedColor={(color)=>setSelectedColor(color)}
       />  
     </View>  
     {/*kategori adı ve toplam bütçe seçimi ekleme*/}

     <View style={styles.inputView}>
     <MaterialIcons name="local-offer" size={24} color={Colors.GRAY} />
     <TextInput placeholder='Kategori Adı' 
     onChangeText={(V)=>setCategoryName(V)}
     style={{width:'100%', fontSize:17}}/>
     </View>

     <View style={styles.inputView}>
     <Foundation name="dollar" size={24} color={Colors.GRAY}/>
     <TextInput placeholder='Toplam Bütçe'
        keyboardType='numeric'
        onChangeText={(V)=>setCategoryName(V)}
      style={{width:'100%', fontSize:17}}/>
     </View>

     <TouchableOpacity style={styles.button}
       disabled={!categoryName&&!totalBudget}
       onPress={()=>onCreateCategory()}
     >
      <Text style={{textAlign:'center',fontSize:16, color:Colors.WHITE}}>Oluştur</Text>
     </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
  iconInput:{
    textAlign:'center',
    fontSize:30,
    padding:20,
    borderRadius:99,
    paddingHorizontal:28,
    color:Colors.WHITE
  },
  inputView:{
    borderWidth:1,
    display:'flex',
    flexDirection:'row',
    gap:5,
    padding:10,
    borderRadius:10,
    borderColor:Colors.GRAY,
    backgroundColor:Colors.WHITE,
    alignItems:'center',
    marginTop:20
  },
  button:{
    backgroundColor:Colors.PRIMARY,
    padding:15,
    borderRadius:10,
    marginTop:30
  }
})