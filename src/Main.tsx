import { View, Text, StyleSheet } from "react-native";
import React from "react";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

export default function Main(): JSX.Element {
  return (
    <View>
      <View>
        <TodoHeader />
        <TodoList />
      </View>
    </View>
  );
}

