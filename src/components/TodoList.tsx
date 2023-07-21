import React, { useEffect } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getTodosAction, deleteTodoAction } from "../store/todosSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state: any) => state.allTodos.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosAction());
  }, []);

  const handleDeleteTodo = (id: number) => {
    // Dispatch the action to delete the todo from the store
    dispatch(deleteTodoAction(id));
  };

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          alwaysBounceVertical={false}
          data={todos}
          renderItem={(itemData) => (
            <TodoItem
              todo={itemData.item}
              onDelete={() => handleDeleteTodo(itemData.item.id)}
            />
          )}
        />
      </View>
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 8,
    paddingTop: 10,
    paddingHorizontal: 16,
  },
});
