import { View, Text, StyleSheet } from "react-native";
import React from "react";
import TodoHeader from "./components/TodoHeader";

export default function Main(): JSX.Element {
  return (
    <View>
      <View>
        <TodoHeader />
      </View>
    </View>
  );
}

