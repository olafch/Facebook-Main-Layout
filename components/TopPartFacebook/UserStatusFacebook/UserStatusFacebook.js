import { View, StyleSheet } from "react-native";
import { Avatar } from "./Avatar";
import { CurrentUserStatus } from "./CurrentUserStatus";
import { AttachFile } from "./AttachFile";

export function UserStatusFacebook() {
  return (
    <View style={styles.userStatusFacebookContainer}>
      <Avatar />
      <CurrentUserStatus text={"What's on your mind?"} />
      <AttachFile />
    </View>
  );
}

const styles = StyleSheet.create({
  userStatusFacebookContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 8,
    paddingVertical: 12,
  },
});
