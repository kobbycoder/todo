import React from "react";
import "reflect-metadata";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import store from "./src/store/store";
import AddTodo from "./src/screens/AddTodo";
import EditTodo from "./src/screens/EditTodo";
import TodoItem from "./src/components/TodoItem";
import Main from "./src/Main";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainScreen" screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen
            name="MainScreen"
            component={Main}
          />
          <Stack.Screen
            name="AddTodo"
            component={AddTodo}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="EditTodo" component={EditTodo} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
