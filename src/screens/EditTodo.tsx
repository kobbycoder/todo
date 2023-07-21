import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { updateTodoAction } from "../store/todosSlice";
import { Todo } from "../types/Todo";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Checkbox } from "expo-checkbox";
import ScreenWrapper from "../ScreenWrapper";
import TodoHeader from "../components/TodoHeader";
import CustomButton from '../components/CustomButton'

const EditTodo: React.FC = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const navigation = useNavigation();
  const todo: Todo | undefined = route.params?.todo; // Access the todo from route params or provide a default value

  const [title, setTitle] = useState(todo?.title || "");
  const [isDone, setDone] = useState(todo?.completed || false);
  const [id, setId] = useState(todo?.id || 1);
  const [userId, setUserId] = useState(1);

  // Function to handle updating the todo item
  const handleUpdateTodo = () => {
    if (todo) {
      const updatedTodo: Todo = {
        ...todo,
        title: title,
        completed: isDone,
        id: id,
        userId: userId,
      };

      const text = updatedTodo.title;

      if (text === "") {
        Alert.alert("Title cannot be empty");
        return;
      } else {
        dispatch(updateTodoAction(updatedTodo)); // Dispatch the action to update the todo in the store
      }

      //navigate back to
      navigation.goBack();
    }
  };

  return (
    <ScreenWrapper>
      <TodoHeader title="Edit Todo" />
      <View style={styles.container}>
        <TextInput value={title} onChangeText={(e) => setTitle(e)} style={styles.textInput} />
        <Checkbox value={isDone} onValueChange={(value) => setDone(value)} />
        <Text>Done</Text>
        <CustomButton buttonText="Save" onPress={handleUpdateTodo} />
      </View>
    </ScreenWrapper>
  );
};

export default EditTodo;

const styles = StyleSheet.create({
  container: {
    flex: 8,
    height: "100%",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#64CCC5",
    padding: 8,
    width: "70%",
    borderRadius: 8,
    marginRight: 8,
    marginVertical: 20
  },
});
