import React from "react";
import {
  StatusBar,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput
} from "react-native";
import { color, publicColors } from "../assets/color";

const { width } = Dimensions.get("window");

class CommonBtn extends React.Component {
  render() {
    return (
      <View>
        <StatusBar barStyle={"dark-content"} />
        <View style={styles.container}>
          <TextInput style={styles.search} placeholder="Search Here" />
          <TouchableOpacity onPress={this.props.action} style={styles.btn}>
            <Text style={styles.txt}>검색</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 10
  },
  search: { borderBottomColor: "#333", borderBottomWidth: 1 },
  btn: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: publicColors.BTN_COLOR,
    width: 50,
    height: 35,
    borderRadius: 10
  },
  txt: { color: "#fff" }
});

export default CommonBtn;
