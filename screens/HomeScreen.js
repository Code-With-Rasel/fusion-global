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
    const { note, cashSupport, ...requiredFields } = inputs;

    // Check if any required fields (except "note" and "cashSupport") are empty
    if (Object.values(requiredFields).some((val) => !val.trim())) {
      return Alert.alert("😊", "দয়া করে, সব ফিল্ডে শূন্য বা সঠিক সংখ্যা দিন।", [
        { text: "ঠিক আছে", style: "cancel" },
      ]);
    }

    // If cashSupport is greater than 0, validate the note field
    if (cashSupport > 0 && !note.trim()) {
      return Alert.alert(
        "😊",
        "Cash Support গ্রহীতার নাম Note এ উল্লেখ করুন ।",
        [{ text: "ঠিক আছে", style: "cancel" }]
      );
    }

    const total = calculateTotal();
    const message = `Date:- *${inputs.date}*\nDSO:- *${
      inputs.dso
    }*\nLifting:- *${inputs.lifting}*\nCash Lifting:- *${
      inputs.cashLifting
    }*\nTotal Lifting:- *${+inputs.lifting + +inputs.cashLifting}*\nBank:- *${
      inputs.bank
    }*\nCRM:- *${inputs.crm}*\nCash:- *${inputs.cash}*\nPre_Due:- *${
      inputs.preDue
    }*\nCash Support:- *${inputs.cashSupport}*\nReturn:- *${
      inputs.returnVal
    }*\n${calculateTotal() > 50 ? "Due" : "Adv"}:*${calculateTotal()}*\nNB:- *${
      inputs.note
    }*`;

    Alert.alert(
      total < 0 ? "টাকা বেশি আছে!!" : total > 0 ? "টাকা কম আছে!!" : "ধন্যবাদ",
      total > 0
        ? `আপনার হিসাব চেক করুন, আপনার ${total} কম আছে।`
        : total < 0
        ? `আপনার হিসাব চেক করুন, আপনার ${Math.abs(total)} টাকা বেশি আছে। `
        : "Thank you!",
      [
        { text: "পাঠাবো না❌", style: "cancel" },
        { text: "পাঠাবো✅", onPress: () => openWhatsApp(message) },
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
        Fusion Global Limited
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
        textColor="black"
        value={inputs.note}
        onChangeText={(value) => handleInputChange("note", value)}
        style={{ marginVertical: 8, backgroundColor: "white" }}
      />
      <Text variant="headlineSmall" style={styles.resultText}>{`${
        total > 0 ? "Due" : total < 0 ? "Advance" : "😊"
      } ${Math.abs(total)}`}</Text>

      <Button
        mode="contained"
        style={{
          backgroundColor: "orange",
          color: "red",
          paddingVertical: 5,
          marginTop: 5,
        }}
        onPress={handleCalculate}
        icon={"send"}
      ></Button>
    </ScrollView>
  );
};

const CustomInput = ({ label, value, onChange }) => (
  <TextInput
    mode="outlined"
    keyboardType="numeric"
    textColor="black"
    label={label}
    value={value}
    onChangeText={onChange}
    style={styles.box}
  />
);

const styles = StyleSheet.create({
  container: { padding: 10 },
  headerText: {
    textAlign: "center",
    marginBottom: 10,
    color: "orangered",
    fontWeight: "bold",
  },
  inputContainer: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  box: { width: "48%", backgroundColor: "white" },
  resultText: {
    textAlign: "center",
    color: "red",
    marginVertical: 5,
    borderWidth: 0.5,
    borderColor: "gray",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
  },
});

export default Home;
