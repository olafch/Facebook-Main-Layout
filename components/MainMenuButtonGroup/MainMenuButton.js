import { View, StyleSheet, Text } from "react-native";

export function MainMenuButton(props) {
  return (
    <View
      style={[
        styles.mainMenuButton,
        props.selected ? styles.mainMenuButtonSelected : null,
      ]}
    >
      <View
        style={[
          props.selected
            ? styles.mainMenuButtonPictureSelected
            : styles.mainMenuButtonPicture,
        ]}
      />
      <Text
        style={
          props.selected
            ? styles.mainMenuButtonSelected
            : styles.mainMenuButtonText
        }
      >
        {props.buttonName}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainMenuButton: {
    flexDirection: "row",
    flexGrow: 1,
    width: 68,
    flexBasis: 64,
    backgroundColor: "white",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  mainMenuButtonText: {
    fontSize: 11,
  },
  mainMenuButtonSelected: {
    fontSize: 11,
    borderTopColor: "#4870D3",
    borderTopWidth: 2,
    color: "#4870D3",
  },
  mainMenuButtonPictureSelected: {
    position: "absolute",
    width: 26,
    height: 26,
    borderRadius: 4,
    backgroundColor: "#4870D3",
    alignSelf: "center",
  },
  mainMenuButtonPicture: {
    position: "absolute",
    width: 26,
    height: 26,
    borderRadius: 4,
    backgroundColor: "#676767",
    alignSelf: "center",
  },
});
