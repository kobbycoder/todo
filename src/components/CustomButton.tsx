import { StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";


interface CustomButtonProps {
    buttonText: string;
    onPress: () => void;
  }

const Buttons: React.FC<CustomButtonProps> = ({ buttonText, onPress }) => {

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#001C30",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    marginVertical: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
