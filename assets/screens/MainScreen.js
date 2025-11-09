// ./screens/MainScreen.js
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Main Screen</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  text: {
    fontSize: 20,
    marginBottom: 16,
  },
});
