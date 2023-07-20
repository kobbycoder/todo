import React, { useEffect } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getTodosAction } from "../store/todosSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state: any) => state.allTodos.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosAction());
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          alwaysBounceVertical={false}
          data={todos}
          renderItem={(itemData) => (
            <TodoItem
              title={itemData.item.title}
              id={itemData.item.id}
              completed={itemData.item.completed}
              userId={itemData.item.userId}
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
