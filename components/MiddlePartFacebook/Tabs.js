import { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Tab } from "./Tab";

export function Tabs(props) {
  const [selected, setSelected] = useState(props.tabs[1]);
  return (
    <View style={styles.tabs}>
      {props.tabs.map(function (tab) {
        return (
          <Pressable
            key={tab}
            style={styles.pressableTab}
            onPress={() => setSelected(tab)}
          >
            <Tab selected={tab === selected} name={tab} />
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: "row",
  },
  pressableTab: {
    flex: 1,
  },
});
