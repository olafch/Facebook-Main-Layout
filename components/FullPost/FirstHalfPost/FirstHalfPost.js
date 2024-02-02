import { View, StyleSheet } from "react-native";
import { Avatar } from "../../TopPartFacebook/UserStatusFacebook/Avatar";
import { PostOptionDots } from "./PostOptionDots";
import { UserName } from "./UserName";

export function FirstHalfPost(props) {
  return (
    <View style={[styles.firstHalfPostContainer]}>
      <Avatar />
      <UserName style={styles.userNameContainer} userName={props.userName} />
      <PostOptionDots style={styles.postOptionDotsContainer} />
    </View>
  );
}

const styles = StyleSheet.create({
  firstHalfPostContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 16,
  },
  userNameContainer: {
    bottom: 6,
  },
  postOptionDotsContainer: {
    top: 4,
    justifyContent: "flex-end",
  },
});
