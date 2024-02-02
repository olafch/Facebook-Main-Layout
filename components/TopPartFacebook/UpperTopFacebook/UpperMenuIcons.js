import { View, StyleSheet } from "react-native";
import { UpperMenuIcon } from "./UpperMenuIcon";

const upperMenuIcons = new Array(3).fill(null);

export function UpperMenuIcons() {
  return (
    <View style={styles.upperMenuGroup}>
      {upperMenuIcons.map(function (_, index) {
        return <UpperMenuIcon key={index} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  upperMenuGroup: {
    flexDirection: "row",
    justifyContent: "flex-end",
    columnGap: 8,
  },
});
