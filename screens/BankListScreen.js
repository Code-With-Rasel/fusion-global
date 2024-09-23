import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const BankDataList = () => {
  const bankData = [
    {
      bankName: "AB Bank Limited",
      branchName: "Kalatiya Branch",
      accountNumber: "4043765186430",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "Dhaka Bank Limited",
      branchName: "Banani",
      accountNumber: "2061500002480",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "Eastern Bank Limited",
      branchName: "Banani",
      accountNumber: "1161360280850",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "Jamuna Bank Limited",
      branchName: "Dilkusha Commercial Area",
      accountNumber: "0060320001881",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "Mercantile Bank Limited",
      branchName: "Banani Branch",
      accountNumber: "11061312528904",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "Midland Bank Limited",
      branchName: "Gulshan North Avenue",
      accountNumber: "8801810002090",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "Mutual Trust Bank Limited",
      branchName: "Dilkusha",
      accountNumber: "0203230003954",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "One Bank Limited",
      branchName: "Banani",
      accountNumber: "0128090000014",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "Premier Bank Limited",
      branchName: "Narayanganj Branch",
      accountNumber: "0100135000001",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "Sonali Bank Limited",
      branchName: "Banani Bazar",
      accountNumber: "0106503000023",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "Southeast Bank Ltd",
      branchName: "Gulshan-1",
      accountNumber: "0010-13100001639",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "The City Bank Ltd.",
      branchName: "Pragati Sarani Branch",
      accountNumber: "30124461320001",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "Trust Bank Limited",
      branchName: "Sadhinota Tower",
      accountNumber: "7020232000160",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "Shahjalal Islami Bank Ltd.",
      branchName: "Gulshan Branch",
      accountNumber: "4057-1310000436",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "Union Commercial Bank Limited",
      branchName: "Banani, Dhaka",
      accountNumber: "30613100000436",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "IFIC",
      branchName: "Gulshan Branch",
      accountNumber: "0190146540041",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "Community Bank",
      branchName: "Gulshan Branch",
      accountNumber: "310026518001",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "NRB Bank Limited",
      branchName: "Banani Branch",
      accountNumber: "1022050039936",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "Janata Bank Limited",
      branchName: "Banani Branch",
      accountNumber: "0100216563390",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
  ];

  return (
    <FlatList
      data={bankData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.text}>
            <Text style={styles.label}>Bank Name:</Text> {item.bankName}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Branch Name:</Text> {item.branchName}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Account Number:</Text>{" "}
            {item.accountNumber}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Accounts Title:</Text>{" "}
            {item.accountsTitle}
          </Text>
          <View style={styles.separator} />
        </View>
      )}
    />
  );
};

export default BankDataList;

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    backgroundColor: "#cccccc",
    marginTop: 10,
  },
});
