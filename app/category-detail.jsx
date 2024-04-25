import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams} from 'expo-router'
import { supabase } from '../utils/SupabaseConfig';
import { Ionicons } from '@expo/vector-icons';
import CourseInfo from '../components/CourseDetail/CourseInfo';

export default function CategoryDetails() {
    const {categoryId}=useLocalSearchParams();
    const [categoryData,setCategoryData]=useState([]);
    useEffect(()=>{
        console.log(categoryId)
        categoryId&&getCategorDetail()
    },[categoryId]);

    const getCategorDetail=async()=>{
      const {data,error}=await supabase.from('Category')
      .select('*,CategoryItems(*)')
      .eq('id', categoryId)
      setCategoryData(data[0]);
    }

  return (
    <View style={{padding:20,marginTop:20 }}>
      <Ionicons name="arrow-back-circle" size={44} color="black" />
      <CourseInfo categoryData={categoryData}/>
    </View>
  )
}
