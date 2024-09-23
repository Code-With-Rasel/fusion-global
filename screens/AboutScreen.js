import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const About = () => (
  <View style={styles.container}>
    <Image source={require("../assets/Rasel.jpeg")} style={styles.image} />
    <Text style={styles.header}>About Me</Text>
    <Text style={styles.content}>
      I am Rasel Hossain, a passionate React Developer with experience in
      building websites, web apps, and mobile apps using React and React Native.
      I am always eager to learn and grow in the world of development. Thanks
      for visiting!
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: "center",
    backgroundColor: "#f0f4f8",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  content: {
    fontSize: 16,
    lineHeight: 26,
    textAlign: "justify",
    color: "#555",
    paddingHorizontal: 20,
  },
});

export default About;
