import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { TextInput, Divider } from "react-native-paper";

export default function CashInHand() {
  const denominationImages = {
    1000: require("../assets/1000.jpg"),
    500: require("../assets/500.jpg"),
    200: require("../assets/200.jpg"),
    100: require("../assets/100.jpg"),
    50: require("../assets/50.jpg"),
    20: require("../assets/20.jpg"),
    10: require("../assets/10.jpg"),
  };

  // Denomination states
  const [denominations, setDenominations] = useState({
    10: "",
    20: "",
    1000: "",
    500: "",
    200: "",
    100: "",
    50: "",
  });

  // Function to handle input changes
  const handleInputChange = (value, denomination) => {
    // Ensure that only numbers are allowed
    const parsedValue = parseInt(value) || 0;
    setDenominations({
      ...denominations,
      [denomination]: parsedValue,
    });
  };

  // Format number with commas
  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  // Calculate total for all denominations
  const calculateTotal = () => {
    const total = Object.keys(denominations).reduce((sum, denomination) => {
      return sum + denomination * denominations[denomination];
    }, 0);
    return formatNumber(total);
  };

  // Calculate total for each denomination
  const calculateDenominationTotal = (denomination) => {
    return formatNumber(denomination * denominations[denomination]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.total}>Total: {calculateTotal()}</Text>
      <View style={styles.table}>
        {/* Table Headers */}
        <View style={styles.tableHeader}>
          <Text style={styles.headerText}>Denomination</Text>
          <Text style={styles.headerText}>Quantity</Text>
          <Text style={styles.headerText}>Total</Text>
        </View>

        <Divider style={styles.divider} />

        {/* Table Rows */}
        {Object.keys(denominations)
          .sort((a, b) => b - a)
          .map((denom) => (
            <View key={denom} style={styles.tableRow}>
              <Image
                source={denominationImages[denom]}
                style={styles.noteImage}
              />
              <TextInput
                mode="outlined"
                keyboardType="numeric"
                textColor="black"
                style={styles.input}
                label={denom}
                onChangeText={(value) => handleInputChange(value, denom)}
                value={denominations[denom].toString()}
              />
              <Text style={styles.denomTotal}>
                {calculateDenominationTotal(denom)}
              </Text>
            </View>
          ))}
      </View>

      {/* Total Footer */}
      <Divider style={styles.divider} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: "#f7f7f7",
  },
  total: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#6200ea",
    marginBottom: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    backgroundColor: "#6200ea",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  input: {
    flex: 1,
    textAlign: "center",
    marginHorizontal: 5,
    fontSize: 20,
    backgroundColor: "white",
  },
  denomTotal: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
  },
  divider: {
    height: 1,
    backgroundColor: "#cccccc",
  },
  noteImage: {
    width: 70,
    height: 50,
    flex: 1,
    resizeMode: "contain",
  },
});
