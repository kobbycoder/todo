import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Todo } from "../types/Todo";
import { useNavigation } from "@react-navigation/native";

interface TodoItemProps {
  todo: Todo;
}

// Defining a type for the navigation object specific to the TodoItem component
type TodoItemNavigation = {
  navigate: (screen: "EditTodo", params: { todo: Todo }) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const navigation = useNavigation<TodoItemNavigation>();

  const handleUpdateTodo = () => {
    navigation.navigate("EditTodo", { todo });
  };

  return (
    <TouchableOpacity onPress={handleUpdateTodo}>
      <View style={styles.container}>
        <View style={styles.todoListItems}>
          <Text style={[todo.completed ? styles.completedText : styles.title]}>
            {todo.title}
          </Text>
          <View style={styles.subTextContainer}>
            <Text style={styles.subText}>
              {todo.completed ? "completed" : "uncompleted"}
            </Text>
            <Text>{todo.completed ? "✅" : "⏳"}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#001C30",
    marginBottom: 14,
    borderRadius: 8,
  },
  subTextContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "white",
    fontFamily: "Poppins-Regular",
    fontWeight: "bold",
    fontSize: 16,
  },
  subText: {
    color: "#ccc",
    marginTop: 10,
    fontSize: 10,
  },
  deleteText: {
    fontSize: 16,
    color: "red",
  },
  title: {
    color: "white",
    fontFamily: "Poppins-Regular",
    fontWeight: "bold",
    fontSize: 16,
  },
  todoListItems: {
    width: "100%",
    padding: 8,
    color: "white",
  },
});

export default TodoItem;
