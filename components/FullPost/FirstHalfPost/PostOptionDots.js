import { View, StyleSheet } from "react-native";
import { PostOptionDot } from "./PostOptionDot";

const upperMenuIcons = new Array(3).fill(null);

export function PostOptionDots(props) {
  return (
    <View style={[styles.postDotsGroup, props.style]}>
      {upperMenuIcons.map(function (_, index) {
        return <PostOptionDot key={index} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  postDotsGroup: {
    position: "absolute",
    right: 12,
    paddingTop: 16,
    flexDirection: "row",
    columnGap: 2,
  },
});
