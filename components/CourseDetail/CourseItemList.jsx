import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function CourseItemList({categoryData}) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Harcamalar</Text>

      <View>
        {categoryData?.CategoryItems?.map((item,index)=>(
            <View key={index}>
                <Image source={{uri:item.image}} style={styles.image}/>
            </View>
        ))}
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        marginTop:20
    },
    heading:{
        fontFamily:'outfit-bold',
        fontSize:20
    },
    image:{
        width:100,
        height:100

    }
})
