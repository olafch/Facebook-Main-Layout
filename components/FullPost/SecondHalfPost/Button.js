import { View, StyleSheet, Text } from "react-native";
import { ButtonPicture } from "./ButtonPicture";

export function Button(props) {
  return (
    <View style={[styles.buttonContainer, styles.buttonPictureContainer]}>
      <ButtonPicture style={styles.buttonPictureSelf} />
      <Text style={styles.buttonFont}>{props.textButton}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
  },
  buttonPictureContainer: {
    justifyContent: "center",
  },
  buttonPictureSelf: {
    alignSelf: "center",
    right: 8,
  },
  buttonFont: {
    fontSize: 16,
    fontWeight: "600",
    color: "#676767",
  },
});
