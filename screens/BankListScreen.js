import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const BankDataList = () => {
  const bankData = [
    {
      bankName: "AB Bank Limited",
      branchName: "Kalatiya Branch, Shamshurpur, Dhaka",
      accountNumber: "4043765186430",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "Agrani Bank Limited",
      branchName: "Gulshan-1, Dhaka",
      accountNumber: "0200012362377",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "Dhaka Bank Limited",
      branchName: "Banani, Kemal Ataturk Avenue, Dhaka",
      accountNumber: "2061500002480",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "Eastern Bank Limited",
      branchName: "Banani-11 Branch, Dhaka",
      accountNumber: "1161360280850",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "Jamuna Bank Limited",
      branchName: "Dilkusha Commercial Area, Dhaka",
      accountNumber: "0060320001881",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "Mercantile Bank Limited",
      branchName: "Banani, Kemal Ataturk Avenue, Dhaka",
      accountNumber: "110613125289042",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "Midland Bank Limited",
      branchName: "Gulshan North Avenue, Dhaka",
      accountNumber: "88011820000015",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "Mutual Trust Bank Limited",
      branchName: "Dilkusha C/A, Dhaka",
      accountNumber: "0020320003954",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "One Bank Limited",
      branchName: "Banani, Kemal Ataturk Avenue, Dhaka",
      accountNumber: "0182090000014",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "Premier Bank Limited",
      branchName: "Narayanganj Branch",
      accountNumber: "12013600000001",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "Sonali Bank Limited",
      branchName: "Banani, Kemal Ataturk Avenue, Dhaka",
      accountNumber: "0106503000023",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "Southeast Bank Ltd",
      branchName: "Gulshan-1, Dhaka",
      accountNumber: "001013100001639",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "The City Bank Ltd.",
      branchName: "Pragati Sarani Branch, Dhaka",
      accountNumber: "3102446132001",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "Trust Bank Limited",
      branchName: "Sadhinota Tower, Mohakhali, Dhaka",
      accountNumber: "70220322000160",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "Al-Arafah Islami Bank Ltd",
      branchName: "Gulshan-1, Dhaka",
      accountNumber: "0541220000967",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "Shahjalal Islami Bank Ltd.",
      branchName: "Gulshan Branch, Dhaka",
      accountNumber: "4057-13100000020",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "Islami Bank Bangladesh Ltd",
      branchName: "Mohakhali, Dhaka",
      accountNumber: "20501910900003918",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "United Commercial Bank Ltd.",
      branchName: "Banani, Dhaka",
      accountNumber: "09013100000436",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "IFIC",
      branchName: "Gulshan Branch, Dhaka",
      accountNumber: "019014654041",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },

    {
      bankName: "Meghna Bank Ltd",
      branchName: "Banani",
      accountNumber: "112013500000014",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "NCC Bank Ltd",
      branchName: "Gulshan",
      accountNumber: "00120325001678",
      accountsTitle: "Nagad LTD. Trust Cum Settlement Account (TCSA)",
    },
    {
      bankName: "Bank Asia",
      branchName: "Banani",
      accountNumber: "01236050884",
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
