// src/screens/AddTodoScreen.tsx

import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { addTodoAction } from "../store/todosSlice";
import { Todo } from "../types/Todo";
import ScreenWrapper from "../ScreenWrapper";
import TodoHeader from "../components/TodoHeader";

const AddTodo: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [text, setText] = useState("");
  const [userId, setUserId] = useState(1);

  const handleAddTodo = () => {
    const newTodo: Todo = {
      id: Date.now(),
      title: text,
      completed: false,
      userId: userId,
    };

    if (text === "") {
      Alert.alert("Field cannot be empty");
    } else {
      dispatch(addTodoAction(newTodo));
      setText("");
      navigation.goBack(); // Go back to the previous screen after adding the todo
    }
  };

  return (
    <ScreenWrapper>
      <TodoHeader title="Add Todo" />
      <View style={styles.container}>
        <TextInput
          placeholder="Enter todo text"
          value={text}
          onChangeText={(newText) => setText(newText)}
        />
        <Button title="Add Todo" onPress={handleAddTodo} />
      </View>
    </ScreenWrapper>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    flex: 8,
    height: "100%",
    alignItems: "center",
  },
});
