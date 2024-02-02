import { StyleSheet, Text } from "react-native";

export function Logo() {
  return <Text style={styles.logo}>Facebook</Text>;
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 32,
    fontWeight: "800",
    color: "#4874DF",
    textTransform: "lowercase",
  },
});
