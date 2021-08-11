import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Header } from "../shared/Header";
import { Searchinput } from "../shared/Searchinput";
import { Ellipse, SearchIcon, Uparrow } from "../../assets/svg";
import { SearchCard } from "../shared/SearchCard";
import { Button } from "../shared/Button";

const SearchList = [
  {
    group: "A+",
  },
  {
    group: "A-",
  },
  {
    group: "B+",
  },
  {
    group: "B-",
  },
  {
    group: "0+",
  },
  {
    group: "AB+",
  },
  {
    group: "AB-",
  },
];

export default function Search({ navigation }) {
  return (
    <View stytle={styles.container}>
      <StatusBar style={"dark"} />
      <Header
        onPress={() => navigation.navigate("home")}
        title="Search"
        headerStyle={styles.head}
      />
      <View style={styles.searchbox}>
        <Searchinput
          icon={SearchIcon}
          style={styles.search}
          placeholder="Search"
        />
        <View
          style={{
            backgroundColor: "#FF2156",
            width: 35,
            height: 35,
            marginTop: 20,
            borderRadius: 8,
            marginLeft: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ellipse />
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          height: 550,
          width: 345,
          marginLeft: 25,
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <TextInput
          placeholder="Filters"
          style={styles.filters}
          placeholderTextColor="#272A2F"
        />
        <View style={styles.bloodbox}>
          <TextInput
            placeholder="Blood Type"
            style={styles.blood}
            placeholderTextColor="#272A2F"
          />
          <Uparrow />
        </View>
        <View style={styles.box}>
          {SearchList.map((item, index) => {
            return <SearchCard key={index} group={item.group} />;
          })}
        </View>
        <View style={styles.locationbox}>
          <TextInput
            placeholder="Location"
            style={styles.blood}
            placeholderTextColor="#272A2F"
          />
          <Uparrow />
        </View>
        <View style={styles.bankbox}>
          <TextInput
            placeholder="Blood Bank"
            style={styles.blood}
            placeholderTextColor="#272A2F"
          />
          <Uparrow />
        </View>
        <View style={styles.bankbox}>
          <TextInput
            placeholder="Donors"
            style={styles.blood}
            placeholderTextColor="#272A2F"
          />
          <Uparrow />
        </View>
        <Button
          title="Apply"
          style={styles.button}
          onPress={() => navigation.navigate("request")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 150,
    width: "50%",
    height: 44,
  },
  bankbox: {
    borderWidth: 1,
    borderColor: "#EDEDED",
    height: 40,
    backgroundColor: "#FFFFFF",
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 13,
    marginTop: 5,
    width: 346,
    marginRight: 30,
  },
  locationbox: {
    borderWidth: 1,
    borderColor: "#EDEDED",
    height: 40,
    backgroundColor: "#FFFFFF",
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 13,
    marginTop: 20,
    width: 346,
    marginRight: 30,
  },
  blood: {
    fontSize: 14,
    fontWeight: "500",
  },
  bloodbox: {
    borderWidth: 1,
    borderColor: "#EDEDED",
    height: 40,
    backgroundColor: "#FFFFFF",
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 13,
    marginTop: 5,
    width: 346,
    marginRight: 30,
  },
  searchbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  head: {
    marginRight: 140,
    fontSize: 17,
  },
  filters: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderColor: "#EDEDED",
    height: 40,
    backgroundColor: "#FFFFFF",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
  },
  box: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 13,
  },
  container: {
    flex: 1,
  },
});
