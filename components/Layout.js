import React from "react";
import {
  StatusBar,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView
} from "react-native";
import { color, publicColors } from "../assets/color";

const { width } = Dimensions.get("window");

class NavBar extends React.Component {
    render() {
      return(
        <View style={styles.navBar}>
            
        </View>
      )
  
    }
  }

  const AnavBar = ({content, btnName }) => {
    return (
        <View style={styles.navBar}>
            <Text style={styles.txt,{marginTop: 20}}>{content}</Text>
           
            <View style={styles.groupInputTextAndButton}>
            <TextInput style={styles.inputTextStyle} placeholder="아이디를 입력하세요"></TextInput>
            <TouchableOpacity style={styles.searchButton}><Text>버튼</Text></TouchableOpacity>
            </View>   
        </View>
        
        );
  }
  
  class User extends React.Component {
    render() {
      return(
        <View style={styles.user}>
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
      )
    }
  }
  
  class ButtonGroup extends React.Component {
    render() {
      return(
        <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.searchButton}>
                <Text style={{fontSize: 50}}>전적갱신</Text>
            </TouchableOpacity>
            
        </View>
      )
    }
  }
  class Taps extends React.Component {
    render() {
      return(
        <View style={styles.taps}>
            <View style={styles.LinearLayout}>
                <View style={styles.none}>
                    
            <ScrollView
                horizontal={false}
                showsHorizontalScrollIndicator = {true}>
                
                <Text style={{fontSize:15}}>챔피언</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>

            </ScrollView>
            </View>
            <View style={styles.none}>
            <ScrollView
                horizontal={false}
                showsHorizontalScrollIndicator = {true}>
                <Text style={{fontSize:15}}>KDA</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>

            </ScrollView>
            </View>
            <View style={styles.none}>
            <ScrollView
                horizontal={false}
                showsHorizontalScrollIndicator = {true}>
                <Text style={{fontSize:15}}>승률</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>
                <Text>ttt</Text>

            </ScrollView>
            </View>
            </View>
        </View>
      )
    }
  }
  
  
  class Layout extends React.Component {
    render() {
      return (
        <View style={styles.container}>
        <View style={{height:24}}>
            
         </View>
        <View>
          <AnavBar content="LOL 전적검색" />

        </View>
            
          <User />

          <ButtonGroup />
          <View style={{flex: 1}}>
          </View>
          <Taps />
        </View>
      );
    }
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    navBar: {
      height: 100,
      width: width,
      alignItems: "center",
      backgroundColor: '#ffffff'
    },
    user: {
      height: 200,
      width: width,
      backgroundColor: '#81D4FA'
    },
    buttonGroup: {
      height: 100,
      width: width,
      alignItems : "center",
      justifyContent: "center",
      backgroundColor: '#C5E1A5'
    },
    taps: {
      height: 400,
      width: width,
      backgroundColor: '#FFD54F'
    },
    txt: { 
        color: "#000000",
        fontWeight: "bold",
        fontSize: 20,
        


    },
    none:{
        margin: 50
    },
    txtPadding:{
        margin: 10
    },
    inputTextStyle: {
        width: 120,
        height: 20,
        borderBottomColor: "#333"
    },
    searchButton: {
     
    },
    groupInputTextAndButton:{
        flexDirection: "row"
    },
    LinearLayout: {
        flexDirection: "row",
        alignItems: "center"
    },

    rankObjectGroup:{
        flexDirection: "column"
        , margin: 40,
        justifyContent: "space-between"

    }

    
  });

  
export default Layout;