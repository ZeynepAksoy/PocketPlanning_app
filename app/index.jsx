import { View, Text , StyleSheet, Button } from 'react-native'
import React, { useEffect } from 'react'
import { Link, useRouter } from 'expo-router'
import services from '../utils/services'

export default function Home() {

  const router=useRouter();

  useEffect(()=>{
    checkUserAuth();
  },[])

  /**
   * Used to check user is already auth or not
   */

  const checkUserAuth=async()=>{ // Kimlik doğrulama 
    const result=await services.getData('login');
    if(result!=='true'){
      router.replace('/login')
    }
  }
  return (
    <View style={{
      marginTop:20  
    }} >
      <Text style={styles.text}>Ana Sayfa</Text>
    </View> 
  )
}
const styles = StyleSheet.create({
  text:{
    fontSize:20
  }
})