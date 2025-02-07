import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Importing location icon

export default function LocationIcon() {
  const [isLocationOn, setIsLocationOn] = useState(false);

  const toggleLocation = () => {
    setIsLocationOn(!isLocationOn);
    console.log("Location toggled:", !isLocationOn);
    // Future: Implement logic to enable/disable location-based search
  };

  return (
    <TouchableOpacity onPress={toggleLocation} style={styles.iconContainer}>
      <Ionicons
        name={isLocationOn ? "location" : "location-outline"}
        size={28} // Slightly larger icon size for better visibility
        color={isLocationOn ? "#007AFF" : "#555"}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    padding: 4, // Increased padding for better touch area
    borderRadius: 50,
    backgroundColor: "#f0f0f0",
    elevation: 3, // Slightly more shadow for better depth
    marginLeft: 10,
    alignItems: "center", // Ensure the icon is centered within the TouchableOpacity
    justifyContent: "center",
  },
});
