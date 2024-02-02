import { View, StyleSheet } from "react-native";

export function Avatar() {
  return <View style={styles.avatar} />;
}

const styles = StyleSheet.create({
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: "grey",
    marginHorizontal: 8,
  },
});
