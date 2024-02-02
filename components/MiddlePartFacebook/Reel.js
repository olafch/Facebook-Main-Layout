import { View, StyleSheet } from "react-native";

export function Reel() {
  return <View style={styles.reel} />;
}

const styles = StyleSheet.create({
  reel: {
    height: 200,
    width: 116,
    borderRadius: 16,
    backgroundColor: "lightgrey",
  },
});
