import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";

function User({ props, navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.rect}
        imageStyle={styles.rect_imageStyle}
        source={require("../assets/images/Gradient_DpxnLje.png")}
      >
        <Text style={styles.tituloUser}>MANGYM</Text>
        <View style={styles.div1User}>
          <Image style={{ width: '100%', height: '100%' }} source={require('../assets/images/logo.png')} />
        </View>
        <View style={styles.div2User}>
          <Text style={styles.txt1}>Integrantes do Mangym </Text>
          <Text style={styles.txt}>Julia Carvalho</Text>
          <Text style={styles.txt}>Milena Fernandes</Text>
          <Text style={styles.txt}>Ryan Corsi</Text>
          <Text style={styles.txt}>Vinicius Cunha</Text>
        </View>
        <View gradientImage="Gradient_tHU9se8.png" style={styles.tabBarUser}>
          <View style={styles.iconCreateUserStackStackRow}>
            <View style={styles.iconCreateUserStackStack}>
              <View style={styles.iconCreateUserStack}>
                <EntypoIcon
                  name="add-to-list"
                  style={styles.iconCreateUser}
                ></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Create")}
                  style={styles.btnCreateUser}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textCreateUser}>Create</Text>
            </View>
            <View style={styles.iconReadUserStackStack}>
              <View style={styles.iconReadUserStack}>
                <EntypoIcon name="eye" style={styles.iconReadUser}></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Read")}
                  style={styles.btnReadUser}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textReadUser}>Read</Text>
            </View>
            <View style={styles.iconUpdateUserStackStack}>
              <View style={styles.iconUpdateUserStack}>
                <EntypoIcon
                  name="brush"
                  style={styles.iconUpdateUser}
                ></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Update")}
                  style={styles.btnUpdateUser}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textUpdateUser}>Update</Text>
            </View>
            <View style={styles.iconDeleteUserStackStack}>
              <View style={styles.iconDeleteUserStack}>
                <EntypoIcon
                  name="trash"
                  style={styles.iconDeleteUser}
                ></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Delete")}
                  style={styles.btnDeleteUser}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textDeleteUser}>Delete</Text>
            </View>
            <View style={styles.iconImageUserStackStack}>
              <View style={styles.iconImageUserStack}>
                <EntypoIcon
                  name="image-inverted"
                  style={styles.iconImageUser}
                ></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Images")}
                  style={styles.btnImageUser}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textImageUser}>Image</Text>
            </View>
            <View style={styles.iconUserUserStackStack}>
              <View style={styles.iconUserUserStack}>
                <EntypoIcon
                  name="v-card"
                  style={styles.iconUserUser}
                ></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("User")}
                  style={styles.btnUserUser}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textUserUser}>User</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 20,
  },
  txt1: {
    fontSize: 22,
    fontWeight: "bold",
    fontFamily: "roboto-700",

  },
  container: {
    flex: 1,
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  rect: {
    width: 360,
    height: 740
  },
  rect_imageStyle: {},
  tituloUser: {
    fontFamily: "roboto-500",
    color: "#121212",
    height: 38,
    width: 140,
    fontSize: 30,
    textAlign: "center",
    marginTop: 37,
    marginLeft: 121
  },
  div1User: {
    width: 200,
    height: 200,
    backgroundColor: "none",
    marginTop: 59,
    marginLeft: 85
  },
  div2User: {
    alignItems: 'center',
    width: 283,
    height: 229,
    backgroundColor: "none",
    marginTop: 19,
    marginLeft: 43
  },
  tabBarUser: {
    width: 360,
    height: 60,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    overflow: "visible",
    backgroundColor: "rgba(0,0,0,0.88)",
    flexDirection: "row",
    marginTop: 99
  },
  iconCreateUser: {
    top: 3,
    left: 14,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    height: 20,
    width: 18
  },
  btnCreateUser: {
    top: 0,
    left: 0,
    width: 47,
    height: 47,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconCreateUserStack: {
    top: 0,
    left: 0,
    width: 47,
    height: 47,
    position: "absolute"
  },
  textCreateUser: {
    top: 30,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 18,
    width: 47,
    textAlign: "center",
    fontSize: 12
  },
  iconCreateUserStackStack: {
    width: 47,
    height: 48,
    marginTop: 1
  },
  iconReadUser: {
    top: 0,
    left: 9,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 23,
    height: 25,
    width: 23
  },
  btnReadUser: {
    top: 0,
    left: 0,
    width: 41,
    height: 46,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconReadUserStack: {
    top: 0,
    left: 0,
    width: 41,
    height: 46,
    position: "absolute"
  },
  textReadUser: {
    top: 29,
    left: 3,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 12,
    width: 35,
    textAlign: "center",
    fontSize: 12
  },
  iconReadUserStackStack: {
    width: 41,
    height: 46,
    marginLeft: 8,
    marginTop: 2
  },
  iconUpdateUser: {
    top: 1,
    left: 13,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 21,
    height: 23,
    width: 21
  },
  btnUpdateUser: {
    top: 0,
    left: 0,
    width: 45,
    height: 47,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconUpdateUserStack: {
    top: 0,
    left: 0,
    width: 45,
    height: 47,
    position: "absolute"
  },
  textUpdateUser: {
    top: 30,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 12,
    width: 47,
    textAlign: "center",
    fontSize: 12
  },
  iconUpdateUserStackStack: {
    width: 47,
    height: 47,
    marginLeft: 17,
    marginTop: 1
  },
  iconDeleteUser: {
    top: 3,
    left: 15,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 19,
    height: 21,
    width: 19
  },
  btnDeleteUser: {
    top: 0,
    left: 0,
    width: 49,
    height: 50,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconDeleteUserStack: {
    top: 0,
    left: 0,
    width: 49,
    height: 50,
    position: "absolute"
  },
  textDeleteUser: {
    top: 32,
    left: 4,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 15,
    width: 40,
    textAlign: "center",
    fontSize: 12
  },
  iconDeleteUserStackStack: {
    width: 49,
    height: 50,
    marginLeft: 15
  },
  iconImageUser: {
    top: 0,
    left: 12,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 23,
    height: 25,
    width: 23
  },
  btnImageUser: {
    top: 0,
    left: 0,
    width: 48,
    height: 49,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconImageUserStack: {
    top: 0,
    left: 0,
    width: 48,
    height: 49,
    position: "absolute"
  },
  textImageUser: {
    top: 30,
    left: 3,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 15,
    width: 40,
    textAlign: "center",
    fontSize: 12
  },
  iconImageUserStackStack: {
    width: 48,
    height: 49,
    marginLeft: 14,
    marginTop: 2
  },
  iconUserUser: {
    top: 0,
    left: 10,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    height: 27,
    width: 25
  },
  btnUserUser: {
    top: 1,
    left: 0,
    width: 45,
    height: 50,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconUserUserStack: {
    top: 0,
    left: 0,
    width: 45,
    height: 51,
    position: "absolute"
  },
  textUserUser: {
    top: 32,
    left: 3,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 15,
    width: 40,
    textAlign: "center",
    fontSize: 12
  },
  iconUserUserStackStack: {
    width: 45,
    height: 51,
    marginLeft: 16
  },
  iconCreateUserStackStackRow: {
    height: 51,
    flexDirection: "row",
    flex: 1,
    marginRight: 8,
    marginLeft: 5,
    marginTop: 6
  }
});

export default User;
