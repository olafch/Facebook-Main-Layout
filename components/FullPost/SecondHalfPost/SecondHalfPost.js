import { View, StyleSheet } from "react-native";
import { PostPicture } from "./PostPicture";
import { ButtonGroup } from "./ButtonGroup";
import { DivisionBorder } from "../../DivisionBorder";

const buttons = ["Like", "Comment", "Share"];

export function SecondHalfPost() {
  return (
    <View style={styles.secondHalfPostContainer}>
      <PostPicture />
      <ButtonGroup buttons={buttons} />
      <DivisionBorder />
    </View>
  );
}

const styles = StyleSheet.create({
  secondHalfPostContainer: {
    paddingTop: 12,
  },
});
