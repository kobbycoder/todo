import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const TodoHeader = () => {

  return (
    <View style={[styles.header,styles.elevation, styles.shadowProp]}>
      <View>
        <Text style={styles.headerText}>To Do</Text>
      </View>
      <View>
        <Image source={require('../../assets/logo.png')}/>
      </View>
    </View>
  );
};

export default TodoHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "100%",
    height: "45%",
    backgroundColor: "#2dd4bf",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontFamily: "Poppins-Bold"
  },
  elevation: {
    elevation: 20,
    shadowColor: '#cccccc'
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
