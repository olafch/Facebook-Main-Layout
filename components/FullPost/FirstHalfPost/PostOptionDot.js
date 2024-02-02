import { View, StyleSheet } from "react-native";

export function PostOptionDot() {
  return <View style={styles.postOptionDot} />;
}

const styles = StyleSheet.create({
  postOptionDot: {
    height: 5,
    width: 5,
    borderRadius: 2.5,
    backgroundColor: "#646464",
  },
});
