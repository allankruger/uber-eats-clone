import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 50,
    flexDirection: "row",
    alignSelf: "center",
    gap: 8,
  },
  headerButton: {
    backgroundColor: "black",
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  headerButton__text: {
    color: "white",
    fontSize: 15,
    fontWeight: "900",
  },
});
