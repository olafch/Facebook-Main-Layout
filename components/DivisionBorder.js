import { View, StyleSheet } from "react-native";

export function DivisionBorder() {
  return <View style={styles.postDivision} />;
}

const styles = StyleSheet.create({
  postDivision: {
    backgroundColor: "#FFFFFF",
    borderColor: "#C7CCCF",
    borderBottomWidth: 8,
  },
});
