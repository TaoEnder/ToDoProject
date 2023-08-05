import React from "react";
import { SafeAreaView,Text} from 'react-native';
import styles from './HeadCard.styles';


const HeadCard = (props) => {
    const count=props.toDoList.length;

    return(
        <SafeAreaView style={styles.container}>
        <Text style={styles.left_text}>
            Yapılacaklar
        </Text>
        <Text style={styles.count_text}>
           {count}
        </Text >
        </SafeAreaView>
    );

}

export default HeadCard