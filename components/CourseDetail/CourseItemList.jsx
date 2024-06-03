import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors'

export default function CourseItemList({categoryData}) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Harcama Listesi</Text>
      
      <View style={{marginTop:15}}>
        {categoryData?.CategoryItems?.length>0?categoryData?.CategoryItems?.map((item,index)=>(
          <>
            <View key={index} style={styles.itemContainer}>
                <Image source={{uri:item.image}} style={styles.image}/>
                <View style={{flex:1, marginLeft:10}}>
                  <Text style={styles.name}>{item.name} </Text>
                  <Text style={styles.url}>{item.url} </Text>
                </View>
                <Text style={styles.cost}>{item.cost}₺</Text>
            </View>
           {categoryData?.CategoryItems.length-1!=index&&
            <View style={{borderWidth:0.5, marginTop:7, borderColor:Colors.GRAY}}></View>
           }
            </>
        )):
        <Text style={styles.noItemText}>Harcama Bulunamadı</Text>} 
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
        width:90,
        height:90,
        borderRadius:15
    },
    itemContainer:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginTop:10
    },
    name:{
      fontSize:17,
      fontFamily:'outfit-bold',
    },
    url:{
      fontFamily:'outfit',
      color:Colors.GRAY
    },
    cost:{
      fontSize:17,
      marginLeft:10,
      fontFamily:'outfit-bold'
    },
    noItemText:{
      fontFamily:'outfit-bold',
      fontSize:25,
      color:Colors.GRAY
    }
})
