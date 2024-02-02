import { View, Text, StyleSheet } from "react-native";

export function CurrentUserStatus(props) {
  return (
    <View style={styles.currentUserStatusContainer}>
      <Text style={styles.currentUserStatusText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  currentUserStatusContainer: {
    paddingVertical: 8,
  },
  currentUserStatusText: {
    fontSize: 18,
  },
});
