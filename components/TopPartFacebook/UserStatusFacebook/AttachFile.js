import { View, StyleSheet } from "react-native";

export function AttachFile() {
  return <View style={styles.attachFile} />;
}

const styles = StyleSheet.create({
  attachFile: {
    height: 24,
    width: 18,
    backgroundColor: "#7DB474",
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    left: 150,
  },
});
