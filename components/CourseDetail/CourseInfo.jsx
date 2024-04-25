import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';

export default function CourseInfo({categoryData}) {
  return (
    <View style={styles.container}>
            <View style={styles.iconContainer}>
            <Text style={[styles.textIcon,
                {backgroundColor:categoryData.color
                }]}>{categoryData.icon}</Text>
            </View>
            <View style={{flex:1, marginLeft:20}}>
                <Text>{categoryData?.name}</Text>
                <Text>{categoryData?.CategoryItens?.length} Ücret</Text>
            </View>
            <EvilIcons name="trash" size={24} color="black" />
    </View>
  )
}
const styles= StyleSheet.create({
    container:{
        marginTop:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    textIcon:{
        fontSize:25,
        padding:20,
        borderRadius:15
    },
    iconContainer:{
        justifyContent:'center',
        alignItems:'baseline'
    }
})