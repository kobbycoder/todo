import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { Todo } from "../types/Todo";

const TodoItem: React.FC<Todo> = (props: Todo) => {
  // const dispatch = useDispatch();

  // const handleToggleTodo = () => {
  //   dispatch(toggleTodo(item.id));
  // };

  // const handleDeleteTodo = () => {
  //   dispatch(deleteTodo(item.id));
  // };

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.todoListItems}>
          <Text style={[props.completed ? styles.completedText : styles.title]}>
            {props.title}
          </Text>
          <View style={styles.subTextContainer}>
            <Text style={styles.subText}>
              {props.completed ? "completed" : "uncompleted"}
            </Text>
            <Text>{props.completed ? '✅' : '⏳'}</Text>
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
    justifyContent: "space-between"
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
