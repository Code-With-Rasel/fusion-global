import React, { useState } from "react";
import { View, Alert, Linking, StyleSheet, ScrollView } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import SelectDso from "../components/SelectDso";
import SelectDate from "../components/SelectDate";

const Home = () => {
  const [inputs, setInputs] = useState({
    lifting: "",
    cashLifting: "",
    bank: "",
    crm: "",
    cash: "",
    preDue: "",
    cashSupport: "",
    returnVal: "",
    note: "",
    date: "",
    dso: "",
  });

  const handleInputChange = (name, value) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const calculateTotal = () => {
    const {
      lifting,
      cashLifting,
      bank,
      crm,
      cash,
      preDue,
      cashSupport,
      returnVal,
    } = inputs;
    const sum1 = +lifting + +cashLifting + +preDue;
    const sum2 = +cash + +cashSupport + +returnVal + +crm + +bank;
    return sum1 - sum2;
  };

  const handleCalculate = () => {
    if (Object.values(inputs).some((val) => !val.trim())) {
      return Alert.alert("Error", "Please fill all fields with 0 or more");
    }

    const total = calculateTotal();
    const message = `Date: *${inputs.date}*\nDSO: *${inputs.dso}*\nLifting: *${
      inputs.lifting
    }*\nCash Lifting: *${inputs.cashLifting}*\nTotal Lifting: *${
      +inputs.lifting + +inputs.cashLifting
    }*\nBank: *${inputs.bank}*\nCRM: *${inputs.crm}*\nCash: *${
      inputs.cash
    }*\nPre_Due: *${inputs.preDue}*\nCash Support: *${
      inputs.cashSupport
    }*\nReturn: *${inputs.returnVal}*\nNB: *${inputs.note}*`;

    Alert.alert(
      total < 0 ? "Excess Money" : total > 0 ? "Due Money" : "No Due",
      total > 0
        ? `Check your account, you have a due of ${total}.`
        : total < 0
        ? `Check your account, you have an excess of ${Math.abs(total)}.`
        : "Thank you!",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Send", onPress: () => openWhatsApp(message) },
      ]
    );
  };

  const openWhatsApp = (message) => {
    const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(message)}`;
    Linking.openURL(whatsappUrl).catch(() =>
      Alert.alert("Error", "Make sure WhatsApp is installed on your device")
    );
  };

  const total = calculateTotal(); // Calculate total for display

  return (
    <ScrollView style={styles.container}>
      <Text variant="titleLarge" style={styles.headerText}>
        FUSION GLOBAL LIMITED
      </Text>
      <SelectDate getDate={(date) => handleInputChange("date", date)} />
      <SelectDso getDso={(dso) => handleInputChange("dso", dso)} />

      <View style={styles.inputContainer}>
        {[
          "lifting",
          "cashLifting",
          "bank",
          "crm",
          "cash",
          "preDue",
          "cashSupport",
          "returnVal",
        ].map((label) => (
          <CustomInput
            key={label}
            label={label.charAt(0).toUpperCase() + label.slice(1)}
            value={inputs[label]}
            onChange={(value) => handleInputChange(label, value)}
          />
        ))}
      </View>

      <TextInput
        mode="outlined"
        label="Note"
        value={inputs.note}
        onChangeText={(value) => handleInputChange("note", value)}
        style={{ marginVertical: 10 }}
      />
      <Text variant="headlineSmall" style={styles.resultText}>{`${
        total > 0 ? "Due" : total < 0 ? "Advance" : "😊"
      } ${Math.abs(total)}`}</Text>

      <Button mode="contained" onPress={handleCalculate} icon={"send"}></Button>
    </ScrollView>
  );
};

const CustomInput = ({ label, value, onChange }) => (
  <TextInput
    mode="outlined"
    keyboardType="numeric"
    label={label}
    value={value}
    onChangeText={onChange}
    style={styles.box}
  />
);

const styles = StyleSheet.create({
  container: { padding: 15 },
  headerText: { textAlign: "center", marginVertical: 10 },
  inputContainer: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  box: { width: "48%" },
  resultText: {
    textAlign: "center",
    color: "red",
    marginVertical: 15,
    borderWidth: 0.5,
    borderColor: "gray",
    padding: 13,
    borderRadius: 10,
  },
  send: {
    fontSize: 50,
  },
});

export default Home;
