import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from "react-native";
import CommonBtn from "./components/CommonBtn";
import Layout from "./components/Layout";
//import Layout from "./components/Layout";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Layout/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
