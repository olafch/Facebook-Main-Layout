import { View, StyleSheet } from "react-native";
import { Tabs } from "./Tabs";
import { Reels } from "./Reels";

export function MiddlePartFacebook() {
  return (
    <View style={styles.middlePartFacebookContainer}>
      <Tabs tabs={["Stories", "Reels", "Proof"]} />
      <Reels reelsLength={Array.from({ length: 15 })} />
    </View>
  );
}

const styles = StyleSheet.create({
  middlePartFacebookContainer: {
    backgroundColor: "white",
  },
});
