import { View, Text, StyleSheet } from "react-native";
import React from "react";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import FloatingActionButton from "./components/FloatingActionButton";

export default function Main(): JSX.Element {
  return (
    <View style={styles.container}>
        <TodoHeader />
        <TodoList />
        <FloatingActionButton style={{ bottom: 30, right: 30 }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: "center"
  },
});


