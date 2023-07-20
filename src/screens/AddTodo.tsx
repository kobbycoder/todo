// src/screens/AddTodoScreen.tsx

import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
//import { addTodo } from '../store/todosSlice';
import { Todo } from '../types/Todo';

const AddTodo: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [userId, setUserId] = useState(1);

  const handleAddTodo = () => {
    const newTodo: Todo = {
      id: Date.now(),
      title: text,
      completed: false,
      userId: userId
    };
    dispatch(addTodo(newTodo));
    setText('');
    navigation.goBack(); // Go back to the previous screen after adding the todo
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Enter todo text"
        value={text}
        onChangeText={(newText) => setText(newText)}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
    </View>
  );
};

export default AddTodo;
