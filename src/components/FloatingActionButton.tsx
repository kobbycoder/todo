import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

type style = {
  style: {};
};

const openAddTodo = () => {
  console.log("clicked");
};

const FloatingActionButton = (props: style) => {
  return (
    <TouchableWithoutFeedback onPress={openAddTodo}>
      <View style={[styles.container, props.style, styles.button, styles.menu]}>
        <Animated.View>
          <AntDesign name="plus" size={25} color="#fff" />
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FloatingActionButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    position: "absolute",
  },
  button: {
    position: "absolute",
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    alignItems: "center",
    justifyContent: "center",
    shadowRadius: 10,
    shadowColor: "#F02A4B",
    shadowOpacity: 0.3,
    shadowOffset: { height: 10, width: 0 },
  },
  menu: {
    backgroundColor: "#64CCC5",
  },
});
