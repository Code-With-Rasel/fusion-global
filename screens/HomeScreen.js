import React, { useState, useRef } from "react";
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

  // Create refs for each input
  const liftingRef = useRef();
  const cashLiftingRef = useRef();
  const bankRef = useRef();
  const crmRef = useRef();
  const cashRef = useRef();
  const preDueRef = useRef();
  const cashSupportRef = useRef();
  const returnValRef = useRef();
  const noteRef = useRef();

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

    if (Object.values(requiredFields).some((val) => !val.trim())) {
      return Alert.alert("😊", "দয়া করে, সব ফিল্ডে শূন্য বা সঠিক সংখ্যা দিন।", [
        { text: "ঠিক আছে", style: "cancel" },
      ]);
    }

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
        ? `আপনার হিসাব চেক করুন, আপনার ${Math.abs(total)} টাকা বেশি আছে।`
        : "আপনার কোন ডিউ/এডভান্স নেই😊",
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
        <CustomInput
          ref={liftingRef}
          label="Lifting"
          value={inputs.lifting}
          onChange={(value) => handleInputChange("lifting", value)}
          onSubmitEditing={() => cashLiftingRef.current.focus()}
          returnKeyType="next"
        />
        <CustomInput
          ref={cashLiftingRef}
          label="Cash Lifting"
          value={inputs.cashLifting}
          onChange={(value) => handleInputChange("cashLifting", value)}
          onSubmitEditing={() => bankRef.current.focus()}
          returnKeyType="next"
        />
        <CustomInput
          ref={bankRef}
          label="Bank"
          value={inputs.bank}
          onChange={(value) => handleInputChange("bank", value)}
          onSubmitEditing={() => crmRef.current.focus()}
          returnKeyType="next"
        />
        <CustomInput
          ref={crmRef}
          label="CRM"
          value={inputs.crm}
          onChange={(value) => handleInputChange("crm", value)}
          onSubmitEditing={() => cashRef.current.focus()}
          returnKeyType="next"
        />
        <CustomInput
          ref={cashRef}
          label="Cash"
          value={inputs.cash}
          onChange={(value) => handleInputChange("cash", value)}
          onSubmitEditing={() => preDueRef.current.focus()}
          returnKeyType="next"
        />
        <CustomInput
          ref={preDueRef}
          label="Pre Due"
          value={inputs.preDue}
          onChange={(value) => handleInputChange("preDue", value)}
          onSubmitEditing={() => cashSupportRef.current.focus()}
          returnKeyType="next"
        />
        <CustomInput
          ref={cashSupportRef}
          label="Cash Support"
          value={inputs.cashSupport}
          onChange={(value) => handleInputChange("cashSupport", value)}
          onSubmitEditing={() => returnValRef.current.focus()}
          returnKeyType="next"
        />
        <CustomInput
          ref={returnValRef}
          label="Return"
          value={inputs.returnVal}
          onChange={(value) => handleInputChange("returnVal", value)}
          onSubmitEditing={() => noteRef.current.focus()}
          returnKeyType="next"
        />
      </View>

      <TextInput
        ref={noteRef}
        mode="outlined"
        label="Note"
        textColor="black"
        value={inputs.note}
        onChangeText={(value) => handleInputChange("note", value)}
        returnKeyType="done"
        style={{ marginVertical: 8, backgroundColor: "white" }}
      />
      <Text variant="headlineSmall" style={styles.resultText}>
        {total > 0
          ? `Due ${Math.abs(total)}`
          : total < 0
          ? `Advance ${Math.abs(total)}`
          : "😊"}
      </Text>

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

const CustomInput = React.forwardRef(
  ({ label, value, onChange, onSubmitEditing, returnKeyType }, ref) => (
    <TextInput
      mode="outlined"
      keyboardType="numeric"
      textColor="black"
      label={label}
      value={value}
      onChangeText={onChange}
      ref={ref}
      onSubmitEditing={onSubmitEditing}
      returnKeyType={returnKeyType}
      style={styles.box}
    />
  )
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
    borderWidth: 2,
    padding: 10,
    fontWeight: "bold",
    borderColor: "green",
  },
});

export default Home;
