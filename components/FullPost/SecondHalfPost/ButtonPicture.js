import { View, StyleSheet } from "react-native";

export function ButtonPicture(props) {
  return <View style={[styles.buttonPictureContainer, props.style]} />;
}

const styles = StyleSheet.create({
  buttonPictureContainer: {
    height: 12,
    width: 12,
    backgroundColor: "#676767",
  },
});
