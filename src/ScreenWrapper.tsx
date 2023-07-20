import React, { ReactNode } from "react";
import {
  SafeAreaView,
  Platform,
  StatusBar,
  ViewStyle,
  StyleSheet,
  View,
} from "react-native";

interface Props {
  style?: ViewStyle; // Use the appropriate type for style (e.g., ViewStyle)
  children: ReactNode;
}

const ScreenWrapper: React.FC<Props> = ({ style, children }) => {
  const androidSafeAreaStyle = {
    flex: 1,
    backgroundColor: "#DAFFFB",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  };

  return (
    <SafeAreaView style={[styles.androidSafeArea, androidSafeAreaStyle, style]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
  },
});

export default ScreenWrapper;
