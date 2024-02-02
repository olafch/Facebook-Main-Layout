import { View, StyleSheet, ScrollView } from "react-native";
import { Reel } from "./Reel";

export function Reels(props) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.reelsGroup}>
        {props.reelsLength.map(function (_, index) {
          return <Reel key={index} />;
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  reelsGroup: {
    flexDirection: "row",
    columnGap: 8,
    paddingVertical: 12,
    //backgroundColor: "red",
  },
});
