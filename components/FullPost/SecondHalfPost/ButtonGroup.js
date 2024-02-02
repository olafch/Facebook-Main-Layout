import { View, StyleSheet } from "react-native";
import { Button } from "./Button";

export function ButtonGroup(props) {
  return (
    <View style={styles.buttonGroup}>
      {props.buttons.map(function (value, index) {
        return <Button key={index} textButton={props.buttons[index]} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: "row",
  },
});
