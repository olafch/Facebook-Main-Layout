import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { MainMenuButtonGroup } from "./components/MainMenuButtonGroup/MainMenuButtonGroup";
import { DivisionBorder } from "./components/DivisionBorder";
import { MiddlePartFacebook } from "./components/MiddlePartFacebook/MiddlePartFacebook";
import { FullPost } from "./components/FullPost/FullPost";
import { UpperTopFacebook } from "./components/TopPartFacebook/UpperTopFacebook/UpperTopFacebook";
import { UserStatusFacebook } from "./components/TopPartFacebook/UserStatusFacebook/UserStatusFacebook";

const usersNames = [
  "Olaf Chwołka",
  "Clara Hernández",
  "Nadia Roberts",
  "Dariusz Galicki",
  "Peter Tyson",
  "Henry Cabib",
  "Nayib Tachmal",
  "Moussef Haddad",
  "Robert Czajkowski",
  "Matthew Jackson",
  "Sergio Pérez",
  "Kacper Grzeszczyk",
];

export default function App() {
  return (
    <SafeAreaView style={styles.scrollViewStyle}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        stickyHeaderHiddenOnScroll
      >
        <UpperTopFacebook />
        <UserStatusFacebook />
        <DivisionBorder />
        <MiddlePartFacebook />
        <DivisionBorder />
        {usersNames.map(function (name, index) {
          return <FullPost key={index} userName={name} />;
        })}
      </ScrollView>
      <MainMenuButtonGroup
        buttons={[
          "Home",
          "Friends",
          "Watch",
          "Profile",
          "Notifications",
          "Menu",
        ]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollViewStyle: {
    flex: 1,
  },
});
