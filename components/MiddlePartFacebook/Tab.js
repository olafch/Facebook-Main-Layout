import { View, StyleSheet, Text } from "react-native";

export function Tab(props) {
  return (
    <View
      style={[styles.tabContainer, props.selected ? styles.tabSelected : null]}
    >
      <Text
        style={[styles.tabText, props.selected ? styles.tabSelectedText : null]}
      >
        {props.name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  tabText: {
    fontSize: 18,
    color: "#676767",
  },
  tabSelected: {
    borderBottomColor: "#4870D3",
    borderBottomWidth: 2,
  },
  tabSelectedText: {
    fontSize: 18,
    color: "#4870D3",
  },
});
