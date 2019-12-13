import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from "react-native";
import CommonBtn from "./components/CommonBtn";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CommonBtn />
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
