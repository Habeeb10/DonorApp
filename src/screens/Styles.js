import { StyleSheet } from "react-native";
import { pink } from "../common/colors";

export const AssistantStyles = StyleSheet.create({
  sendboox: {
    width: 344,
    height: 56,
    backgroundColor: "white",
    marginLeft: 25,
    marginTop: 20,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingHorizontal: 20,
  },
  bloodgroupbox: {
    width: 92,
    height: 56,
    backgroundColor: "#FF2156",
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 270,
    alignItems: "center",
    justifyContent: "center",
  },
  group: {
    width: 259,
    marginLeft: 50,
    lineHeight: 25,
    color: "#272A2F",
  },
  greatcont2: {
    width: 250,
    height: 55,
    backgroundColor: "#E5E5E5",
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 5,
  },
  greatcont1: {
    width: 150,
    height: 47,
    backgroundColor: "#E5E5E5",
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  greatbox: {
    flexDirection: "row",
    marginTop: 15,
  },
  check: {
    fontSize: 18,
    fontWeight: "500",
    color: "#F5F5F5",
  },
  instructionbox: {
    width: 281,
    height: 56,
    backgroundColor: "#FF2156",
    borderRadius: 10,
    marginTop: 33,
    marginLeft: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  donatebox1: {
    width: 260,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#E9E9E9",
    height: 50,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  donatebox: {
    width: 260,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#E9E9E9",
    height: 50,
  },
  donate: {
    color: "#FF2156",
    fontWeight: "500",
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
  },
  fahim: {
    color: "#272A2F",
    fontSize: 14,
    fontWeight: "500",
    width: 220,
    marginLeft: 25,
    marginTop: 5,
    lineHeight: 25,
    marginBottom: 10,
  },
  contbox2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contbox1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logobox1: {
    alignItems: "center",
    justifyContent: "center",
    height: 44,
    width: 44,
    borderRadius: 10,
    backgroundColor: "#FF2156",
    marginTop: 70,
    marginRight: 20,
  },
  logobox2: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 40,
    borderRadius: 30,
    backgroundColor: "#FF2156",
    marginLeft: 20,
    marginTop: 10,
  },
  logobox: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 40,
    borderRadius: 30,
    backgroundColor: "#FF2156",
    marginTop: 70,
    marginLeft: 20,
  },
  textbox: {
    width: 260,
    height: 230,
    backgroundColor: "#E5E5E5",
    marginTop: 20,
    marginRight: 50,
    borderRadius: 8,
  },
  header: {
    marginLeft: 80,
  },
  container: {
    flex: 1,
  },
});

export const DonationStyles = StyleSheet.create({
  header: {
    marginRight: 60,
  },
  box: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  but: {
    marginTop: 20,
  },
  success: {
    width: 230,
    height: 230,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 100,
  },
  code: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 26,
    color: "#FF2156",
    marginLeft: 260,
    marginBottom: 10,
  },
  container: {
    flex: 1,
  },
});

export const FindDonorStyles = StyleSheet.create({
  searchbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  head: {
    marginRight: 140,
    fontSize: 17,
  },

  container: {
    flex: 1,
  },
});

export const FinishStyles = StyleSheet.create({
  but: {
    marginTop: 20,
  },
  success: {
    width: 230,
    height: 230,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 100,
  },
  code: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 26,
    color: "#FF2156",
    marginLeft: 260,
    marginBottom: 10,
  },
  container: {
    flex: 1,
  },
});

export const HomeStyles = StyleSheet.create({
  request: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 26,
    color: "#272A2F",
    marginTop: 40,
    marginLeft: 30,
  },
  box: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  iconbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 60,
    paddingHorizontal: 30,
  },
  success: {
    width: 300,
    height: 250,
    resizeMode: "contain",
    alignSelf: "center",
  },
  container: {
    flex: 1,
  },
});

export const LoginStyles = StyleSheet.create({
  account: {
    fontSize: 18,
    fontWeight: "500",
    color: "#7E7E7E",
  },
  register: {
    fontSize: 18,
    fontWeight: "500",
    color: "#FF2156",
  },
  registerbox: {
    flexDirection: "row",
    marginTop: 70,
    paddingHorizontal: 40,
  },
  password: {
    marginTop: 30,
    textAlign: "center",
    color: "#FF2156",
    fontSize: 18,
    fontWeight: "400",
  },
  button: {
    marginTop: 80,
    width: "90%",
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    marginBottom: 60,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 70,
  },
  container: {
    flex: 1,
  },
});

export const OnboardingStyles = StyleSheet.create({
  login: {
    color: pink,
  },
  but: {
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#FF2156",
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
  },
  need: {
    fontSize: 20,
    fontWeight: "500",
    width: 300,
    textAlign: "center",
    marginTop: 60,
    color: "#7E7E7E",
    alignSelf: "center",
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 70,
  },
  container: {
    flex: 1,
  },
});

export const ProfileStyles = StyleSheet.create({
  box: {
    flexDirection: "row",
  },
  blood: {
    fontSize: 10,
    color: "#7C7C7C",
    fontWeight: "500",
    lineHeight: 26,
  },
  group: {
    fontSize: 30,
    color: "#272A2F",
  },
  groupbox: {
    width: 102,
    height: 102,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginTop: 35,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  text: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color: "#FFFFFF",
    marginLeft: 10,
  },
  requestbox: {
    flexDirection: "row",
    width: 158,
    height: 45,
    backgroundColor: "#FF2156",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  callbox: {
    flexDirection: "row",
    width: 158,
    height: 45,
    backgroundColor: "#689593",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  deskbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 31,
    paddingHorizontal: 25,
  },
  bangladesh: {
    color: "#7C7C7C",
    fontSize: 12,
    fontWeight: "400",
  },
  locationbox: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 15,
    alignItems: "center",
  },
  fahim: {
    color: "#272A2F",
    fontWeight: "500",
    fontSize: 30,
    textAlign: "center",
    marginTop: 25,
  },
  fahimekan: {
    width: 89,
    height: 89,
    alignSelf: "center",
    marginTop: 15,
  },
  contbox1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    marginLeft: 110,
  },
  container: {
    flex: 1,
  },
});
