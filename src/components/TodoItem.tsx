import React from "react";
import { Todo } from "../types/Todo";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Swipeable } from "react-native-gesture-handler";

interface TodoItemProps {
  todo: Todo;
  onDelete: () => void;
}

// Defining a type for the navigation object specific to the TodoItem component
type TodoItemNavigation = {
  navigate: (screen: "EditTodo", params: { todo: Todo }) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete }) => {
  const navigation = useNavigation<TodoItemNavigation>();

  const openEditTodoScreen = () => {
    navigation.navigate("EditTodo", { todo });
  };

  const handleDelete = () => {
    onDelete();
  };

  const renderRightActions = () => (
    <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
      <Text style={styles.bin}>🗑️</Text>
      <Text style={styles.deleteText}>Delete</Text>
    </TouchableOpacity>
  );

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity onPress={openEditTodoScreen}>
        <View style={styles.container}>
          <View style={styles.todoListItems}>
            <Text
              style={[todo.completed ? styles.completedText : styles.title]}
            >
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
    </Swipeable>
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
  deleteButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    backgroundColor: "#FF6666",
    borderRadius: 8,
    marginBottom:14,
    marginLeft: 10
  },
  deleteText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
  },
  bin: {
    fontSize: 20
  }
});

export default TodoItem;
