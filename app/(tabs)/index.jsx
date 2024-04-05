import { View, Text , StyleSheet, Button } from 'react-native'
import React, { useEffect } from 'react'
import { Link, useRouter } from 'expo-router'
import services from '../../utils/services'
import { client } from '../../utils/KindeConfig';
import { supabase } from '../../utils/SupabaseConfig';
import Header from '../../components/Header'
import Colors from '../../utils/Colors';
import CircularChart from '../../components/CircularChart';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {

  const router=useRouter();

  useEffect(()=>{
    checkUserAuth();
    getCategoryList();
  },[])


  const checkUserAuth=async()=>{ // Kimlik doğrulama 
    const result=await services.getData('login');
    if(result!=='true'){
      router.replace('/login')
    }
  }

  const handleLogout = async () => {
    const loggedOut=await client.logout();
    if(loggedOut){
      await services.storeData('login', 'false');
      router.replace('/login');
    }
  };

  const getCategoryList=async ()=>{
    const user=await client.getUserDetails();
    const {data,error}=await supabase.from('Category')
    .select('*')
    .eq('created_by',user.email);
    console.log("Data",data)
  }

  return (
    <View style={{
      marginTop:20 ,
      flex:1
    }}>
    <View style={{
      padding:20,
      backgroundColor:Colors.PRIMARY,
      height:150
    }} >
     <Header/>

     <CircularChart/>

    </View> 
    <Link href={'/add-new-category'} style={styles.adBtnContainer}>
    <Ionicons name="add-circle" size={74} color={Colors.PRIMARY} />
    </Link>
    </View>
  )
}
const styles = StyleSheet.create({
  text:{
    fontSize:20
  },
  adBtnContainer:{
    marginTop:700,
    position:'absolute',
    buttom:16,
    right:16
  }
})