import { View, Text, StyleSheet } from "react-native";

export function UserName(props) {
  return (
    <View style={props.style}>
      <Text style={styles.currentUserStatusText}>{props.userName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  currentUserStatusText: {
    fontSize: 20,
    fontWeight: "700",
  },
});
