import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../utils/Colors';

export default function CourseInfo({categoryData}) {
    const [totalCost, setTotalCost]=useState();
    const [perclTotal, setPercTotal]=useState(0);

    useEffect(()=>{
        categoryData&&calculateTotalPerc();
    },[categoryData])
    const calculateTotalPerc=()=>{ //Kategorideki toplam maliyeti hesaplandı ve ilerleme yüzdesini hesaplandı
        let total=0;
        categoryData?.CategoryItems?.forEach(item=>{
            total=total+item.cost;
        });
        setTotalCost(total);
        const perc=(total/categoryData.assigned_budget)*100;
        setPercTotal(perc)
    }
  return (
    <View>
        <View style={styles.container}>
                <View style={styles.iconContainer}>
                <Text style={[styles.textIcon,
                    {backgroundColor:categoryData.color
                    }]}>{categoryData.icon}</Text>
                </View>
                <View style={{flex:1, marginLeft:20}}>
                    <Text style={styles.categoryName}>{categoryData?.name}</Text>
                    <Text style={styles.categoryItemText}>{categoryData?.CategoryItems?.length} Harcama</Text>
                </View>
                <Ionicons name="trash" size={24} color="red" />
        </View>
        {/* ilerleme çubuğu*/}
         {/*Toplam maliyet ve kategoriye atanan toplam bütçe gösterili*/}
        <View style={styles.amountContainer}>
            <Text style={{fontFamily:'outfit-bold'}}>{totalCost}₺</Text>
            <Text style={{fontFamily:'outfit'}}>Toplam Bütçe:{categoryData.assigned_budget}</Text>
        </View>
        <View style={styles.progressBarContainer}> 
            <View style={[styles.progressBarSubContainer,{width:perclTotal+'%'}]}></View>
        </View>
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
        fontSize:35,
        padding:20,
        borderRadius:15
    },
    iconContainer:{
        justifyContent:'center',
        alignItems:'baseline'
    },
    categoryName:{
        fontFamily:'outfit-bold',
        fontSize:24
    },
    categoryItemText:{
        fontFamily:'outfit',
        fontSize:16
    },
    amountContainer:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        marginTop:15 
    },
    progressBarContainer:{
        width:'100%',
        height:15,
        backgroundColor:Colors.GRAY,
        borderRadius:99,
        marginTop:7
    },
    progressBarSubContainer:{
        width:'40%',
        backgroundColor:Colors.PRIMARY,
        borderRadius:99,
        height:15,
    }
})