import React from "react";
import {
  StatusBar,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView,
  Image
} from "react-native";
import { color, publicColors } from "../assets/color";

const { width } = Dimensions.get("window");

class NavBar extends React.Component {
  render() {
    return <View style={styles.navBar}></View>;
  }
}

const AnavBar = ({ content, btnName }) => {
  return (
    <View style={styles.navBar}>
      <Text style={styles.txtlogo}>{content}</Text>

      <View style={styles.groupInputTextAndButton}>
        <TextInput
          style={styles.inputTextStyle}
          placeholder="아이디를 입력하세요"
        ></TextInput>
        <TouchableOpacity
          style={styles.searchButton}
          // source={require("./img/search-btn.png")}
        >
          <Image
            source={require("../img/search-btn.png")}
            style={styles.searchImg}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

class User extends React.Component {
  render() {
    return (
      <View style={styles.user}>
        <View
          style={{
            width: width,
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View style={styles.LinearLayout}>
            <View style={styles.rankObjectGroup}>
              <Text style={styles.txtPadding}>티어</Text>
              <Text style={styles.txtPadding}>포인트</Text>
              <Text style={styles.txtPadding}>승률</Text>
            </View>
            <View style={styles.rankObjectGroup}>
              <Text style={styles.txtPadding}>티어</Text>
              <Text style={styles.txtPadding}>포인트</Text>
              <Text style={styles.txtPadding}>승률</Text>
            </View>
            <View style={styles.rankObjectGroup}>
              <Text style={styles.txtPadding}>티어</Text>
              <Text style={styles.txtPadding}>포인트</Text>
              <Text style={styles.txtPadding}>승률</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

class ButtonGroup extends React.Component {
  render() {
    return (
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={{ fontSize: 30, letterSpacing: 12 }}>전적갱신</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
class Taps extends React.Component {
  render() {
    return (
      <View style={styles.taps}>
        <View style={styles.rowLayout2}>
          <Text style={{ fontSize: 18, fontWeight: "bold", letterSpacing: 2 }}>
            챔피언
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", letterSpacing: 2 }}>
            KDA
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", letterSpacing: 2 }}>
            승패
          </Text>
        </View>

        <View style={styles.result}>
          <ScrollView horizontal={false} showsHorizontalScrollIndicator={true}>
            <View style={styles.rowLayout}>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", letterSpacing: 2 }}
              >
                탈리아
              </Text>
              <Text
                style={{ fontSize: 15, fontWeight: "600", letterSpacing: 2 }}
              >
                1.2
              </Text>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", letterSpacing: 2 }}
              >
                승패
              </Text>
            </View>
            <View style={styles.rowLayout}>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", letterSpacing: 2 }}
              >
                제이스
              </Text>
              <Text
                style={{ fontSize: 15, fontWeight: "600", letterSpacing: 2 }}
              >
                KDA
              </Text>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", letterSpacing: 2 }}
              >
                승패
              </Text>
            </View>
            <View style={styles.rowLayout}>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", letterSpacing: 2 }}
              >
                자이라
              </Text>
              <Text
                style={{ fontSize: 15, fontWeight: "600", letterSpacing: 2 }}
              >
                3.18
              </Text>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", letterSpacing: 2 }}
              >
                승패
              </Text>
            </View>
            <View style={styles.rowLayout}>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", letterSpacing: 2 }}
              >
                신드라
              </Text>
              <Text
                style={{ fontSize: 15, fontWeight: "600", letterSpacing: 2 }}
              >
                3.18
              </Text>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", letterSpacing: 2 }}
              >
                승패
              </Text>
            </View>
            <View style={styles.rowLayout}>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", letterSpacing: 2 }}
              >
                소라카
              </Text>
              <Text
                style={{ fontSize: 15, fontWeight: "600", letterSpacing: 2 }}
              >
                3.18
              </Text>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", letterSpacing: 2 }}
              >
                승패
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

class Layout extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 24 }}></View>
        <View>
          <AnavBar content="LOL 전적검색" />
        </View>

        <User />

        <ButtonGroup />
        <View style={{ flex: 1 }}></View>
        <Taps />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  navBar: {
    height: 200,
    width: width,
    alignItems: "center",
    backgroundColor: "#eee",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  user: {
    height: 200,
    width: width,
    backgroundColor: "#fff"
  },
  buttonGroup: {
    height: 100,
    width: width,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee"
  },
  taps: {
    height: 500,
    width: width,
    backgroundColor: "#fff",
    flexDirection: "column"
  },
  txtlogo: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 25,
    paddingTop: 40,
    marginBottom: 10
  },
  searchImg: {
    width: 28,
    height: 28,
    marginTop: 6,
    // backgroundColor: "#dff9fb",
    padding: 10
  },
  none: {
    margin: 40,
    justifyContent: "center"
  },
  result: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginLeft: 0
  },
  txtPadding: {
    margin: 10
  },
  inputTextStyle: {
    width: 200,
    height: 40,
    padding: 10,
    paddingLeft: 14,
    borderBottomColor: "#333",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginRight: 10,
    backgroundColor: "#fff"
  },
  searchButton: {},
  groupInputTextAndButton: {
    flexDirection: "row",

    marginBottom: 40
  },
  LinearLayout: {
    height: 200,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  rowLayout: {
    marginTop: 20,
    height: 30,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  rowLayout2: {
    marginTop: 20,
    height: 30,

    flexDirection: "row",
    justifyContent: "space-evenly"
  },

  rankObjectGroup: {
    flexDirection: "column",
    margin: 40,
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default Layout;
