import React from "react";
import {View,Text,TouchableOpacity} from 'react-native'
import styles from './ListCard.styles'

const ListCard =({ work, onDelete , onPress })=>{
    const isDoneContainerCtrl=work.isDone ? "#3E606F":"#a6e678";//container renk
    const isDoneTextCtrl=work.isDone ? "#91AA9D":"white";// yazı renk
    const isDoneLineThrough=work.isDone? 'line-through':'';//yazının üstü çizilmesi

    return(
        <TouchableOpacity onLongPress={()=>onDelete(work)} onPress={() => onPress(work)}>
        <View style={[styles.container,{backgroundColor:isDoneContainerCtrl}]}>
            <Text style={[styles.work_text,{color:isDoneTextCtrl},{textDecorationLine:isDoneLineThrough}]}>{work.title}</Text>
        </View>
        </TouchableOpacity>
    )
}
export default ListCard