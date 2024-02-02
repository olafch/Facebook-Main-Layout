import { View, StyleSheet } from "react-native";

export function UpperMenuIcon() {
  return <View style={styles.upperMenuIcon} />;
}

const styles = StyleSheet.create({
  upperMenuIcon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "lightgrey",
  },
});
