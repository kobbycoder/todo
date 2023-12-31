import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface Props {
  title: string
}

const TodoHeader: React.FC<Props> = ({ title }) => {

  return (
    <View style={[styles.header,styles.elevation, styles.shadowProp]}>
      <View>
        <Text style={styles.headerText}>{title}</Text>
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
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: "45%",
    backgroundColor: "#64CCC5",
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
