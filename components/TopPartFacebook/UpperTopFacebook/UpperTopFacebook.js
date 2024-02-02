import { View, StyleSheet } from "react-native";
import { Logo } from "./Logo";
import { UpperMenuIcons } from "./UpperMenuIcons";

export function UpperTopFacebook() {
  return (
    <View style={styles.upperTopFacebookContainer}>
      <Logo />
      <UpperMenuIcons />
    </View>
  );
}

const styles = StyleSheet.create({
  upperTopFacebookContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingBottom: 2,
  },
});
