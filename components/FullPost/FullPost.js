import { View } from "react-native";
import { FirstHalfPost } from "./FirstHalfPost/FirstHalfPost";
import { SecondHalfPost } from "./SecondHalfPost/SecondHalfPost";

export function FullPost(props) {
  return (
    <View>
      <FirstHalfPost userName={props.userName} />
      <SecondHalfPost />
    </View>
  );
}
