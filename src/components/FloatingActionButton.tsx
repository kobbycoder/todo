import React from "react";
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  style?: any;
};

// Defining a type for the navigation object specific to the FloatingActionButton component
type FloatingActionButtonNavigation = {
    navigate: (screen: 'AddTodo') => void;
    // Add other navigation methods if needed
  };

const FloatingActionButton: React.FC<Props> = ({ style }) => {
    const navigation = useNavigation<FloatingActionButtonNavigation>()

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('AddTodo')}>
      <View style={[styles.container, style, styles.button, styles.menu]}>
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
