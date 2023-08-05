import React, { useState } from "react";
import { Button, TextInput, View,} from 'react-native'
import styles from './AddBar.styles'

function AddBar({toDoList,setToDoList}){

  const [newTodo, setNewTodo] = useState(""); // Yeni todo başlığını tutacak state

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      const newTodoItem = {
        title: newTodo,
        isDone: false
      };
      setToDoList([...toDoList, newTodoItem]);
      setNewTodo("");
    }
  };

  return(
    <View style={styles.container}>
      <TextInput
       placeholder="Yapılacak..."
       value={newTodo}
        onChangeText={(text) => setNewTodo(text)}
       />
       <Button title="Tıkla" onPress={handleAddTodo}>

       </Button>
       
    </View>
        )
        };
        export default AddBar;