import { View, StyleSheet } from "react-native";

export function PostPicture() {
  return <View style={styles.postPicture} />;
}

const styles = StyleSheet.create({
  postPicture: {
    width: "100%",
    aspectRatio: 16 / 9,
    alignSelf: "center",
    borderRadius: 16,
    backgroundColor: "#E6E7EB",
  },
});
