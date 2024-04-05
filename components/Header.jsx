import { View, Text } from 'react-native'
import React, { useEffect , useState} from 'react'
import { Image } from 'react-native';
import Colors from '../utils/Colors';
import { client } from '../utils/KindeConfig';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
    const [ user,setUser]=useState();
    useEffect(()=>{
        getUserData();
    },[])
    const getUserData=async()=>{
        const user=await client.getUserDetails();
        setUser(user);
    }
      return (
    <View style={{
        display:'flex',
        flexDirection:'row',
        gap: 8,
        alignItems:'center'
    }}>
      <Image source={{uri:user?.picture}}
      style={{
        width:50,
        height: 50,
        borderRadius:99
      }}
      />
      <View >
         <Text style={{color:Colors.WHITE, fontSize:16, fontFamily:'outfit'}}>Hoş Geldin</Text>
         <Text style={{color:Colors.WHITE, fontSize:20, fontFamily:'outfit-Bold'}}>{user?.given_name}</Text>
      </View>
      <Ionicons style={{marginLeft:200}} name="notifications" size={24} color="white" />
    </View>
  )
}