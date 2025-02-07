import React, { useState } from "react";
import { TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Importing an icon from Expo vector icons

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // Implement search functionality here
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for products..."
        placeholderTextColor="#888"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <TouchableOpacity onPress={handleSearch} style={styles.iconContainer}>
        <Ionicons name="search" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width:"90%",
    alignItems: "center",
    backgroundColor: "#fff", // White background for better contrast
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginHorizontal: 2, // Ensures spacing from screen edges
    marginVertical: 0,
    marginBottom:2,
    elevation: 1, // Adds subtle shadow for better visibility
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    color: "#333", // Darker text color for readability
  },
  iconContainer: {
    backgroundColor: "#007AFF", // Blue button for better visibility
    borderRadius: 50,
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
