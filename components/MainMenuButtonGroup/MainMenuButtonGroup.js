import { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { MainMenuButton } from "./MainMenuButton";

export function MainMenuButtonGroup(props) {
  const [selectedButton, setSelectedButton] = useState(props.buttons[0]);

  return (
    <View style={styles.allButtonsContainer}>
      {props.buttons.map(function (button, index) {
        return (
          <Pressable
            style={styles.pressableMenuButtonGroup}
            key={index}
            onPress={() => setSelectedButton(button)}
          >
            <MainMenuButton
              selected={button === selectedButton}
              buttonName={props.buttons[index]}
            />
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  allButtonsContainer: {
    width: "100%",
    flexBasis: 64,
    flexDirection: "row",
  },
  mainMenuButtonSelected: {
    borderBottomColor: "blue",
    borderBottomWidth: 2,
  },

  pressableMenuButtonGroup: {
    flex: 1,
  },
});
