import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, useLocalSearchParams, useRouter} from 'expo-router'
import { supabase } from '../utils/SupabaseConfig';
import { Ionicons } from '@expo/vector-icons';
import CourseInfo from '../components/CourseDetail/CourseInfo';
import CourseItemList from '../components/CourseDetail/CourseItemList';
import Colors from '../utils/Colors'
export default function CategoryDetails() {
    const {categoryId}=useLocalSearchParams();
    const [categoryData,setCategoryData]=useState([]);
    const router=useRouter();
    useEffect(()=>{
        console.log(categoryId)
        categoryId&&getCategorDetail()
    },[categoryId]);

    const getCategorDetail=async()=>{  // Kategoriye ait detayları alınıyor 
      const {data,error}=await supabase.from('Category')
      .select('*,CategoryItems(*)')
      .eq('id', categoryId)
      setCategoryData(data[0]);
    }

  return (
    <View style={{padding:20,marginTop:20, flex:1,backgroundColor:Colors.WHITE}}>
      <TouchableOpacity onPress={()=>router.back()}>
      <Ionicons name="arrow-back-circle" size={44} color="black" />
      </TouchableOpacity>
      <CourseInfo categoryData={categoryData}/>
      <CourseItemList categoryData={categoryData}
      setUpdateRecord={()=>getCategorDetail()}/>

      <Link
      href={{
        pathname:'/add-new-category-item',
        params:{
          categoryId:categoryData.id
        }
      }}
      style={styles.floatingBtn}
      
      >
      <Ionicons name="add-circle" size={60} color='#94b9ff'/>
      </Link>
    </View>
  )
}
const styles = StyleSheet.create({
  floatingBtn:{
    position:'absolute',
    bottom:16,
    right:16,
  }
})
