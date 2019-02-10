import React from "react";
import { View, Text, StatusBar } from "react-native";

import styles from "./styles";

const Main = () => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <Text>React-Native Clean Project</Text>
    <Text>Redux, Saga, Reactotron, Styles, Ducks</Text>
  </View>
);

Main.navigationOptions = {
  title: "Sua Biblioteca"
};

export default Main;
