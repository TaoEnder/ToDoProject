import React, { useEffect, useState } from "react";
import { SafeAreaView,StyleSheet,View,FlatList} from 'react-native';
import work from './work.json'
import HeadCard from "./component/HeadCard/HeadCard";
import ListCard from "./component/ListCard/ListCard";
import AddBar from "./component/AddBar/AddBar";

function App(){
    const [toDoList,setToDoList]=useState(work);

    const handleDeleteTodo = (deletedTodo) => {
        const updatedList = toDoList.filter((item) =>
         item !== deletedTodo);
        setToDoList(updatedList);
    };

    const handleToggleIsDone = (toggledTodo) => {
        const updatedList = toDoList.map((item) =>
          item === toggledTodo ? { ...item, isDone: !item.isDone } : item
        );
        setToDoList(updatedList);
      };
    

    useEffect(() => {
        setToDoList(work);
      }, []);

    const renderSeperator = ({ item }) => (
    <ListCard work={item} onDelete={handleDeleteTodo}  onPress={handleToggleIsDone} />
    );


    return(

        <SafeAreaView style={styles.container}>
            <View >
                <HeadCard toDoList={toDoList}/>
                <View style={styles.flatlist_cards}>
                    <FlatList 
                    style={{marginBottom: 10}}
                    data={toDoList}
                    renderItem={renderSeperator}
                    />
                </View>
            </View>
            <View style={styles.add_bar}>
                <AddBar toDoList={toDoList} setToDoList={setToDoList}/>
            </View>
        </SafeAreaView>

    )
}

export default App;

const styles=StyleSheet.create({
    container:{
        padding:10,
        flex:1,
        backgroundColor:'#001C30',
        justifyContent: 'space-between', 
    },
    flatlist_cards:{

    },
    separator: {
        borderWidth:10,
    },
    add_bar:{
        marginBottom:40,
    }

})