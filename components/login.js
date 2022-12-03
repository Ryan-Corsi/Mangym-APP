import React, { Component, useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, View, ImageBackground, Text, TextInput, KeyboardAvoidingView, PlatformWebStatic } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialUnderlineTextbox from "./builderxComponents/MaterialUnderlineTextbox";
import MaterialUnderlineTextbox1 from "./builderxComponents/MaterialUnderlineTextbox1";

import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialButtonViolet from "./builderxComponents/MaterialButtonViolet";
import myImage from "../assets/images/Gradient_DpxnLje.png";
import firebaseApp from './firebaseConfig';
import { MaterialCommunityIcons } from '@expo/vector-icons'


import "../styles.css";

function Login({ props, navigation }) {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorLogin, setErrorLogin] = useState('')


  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.rect}
        imageStyle={styles.rect_imageStyle}
        source={myImage}
      >
        <Text style={styles.mangym}>MANGYM</Text>
        <View style={styles.iconRow}>
          <FontAwesomeIcon name="user-o" style={styles.icon}></FontAwesomeIcon>
          <MaterialUnderlineTextbox
            inputStyle="User"
            onChange={setEmail}
            style={styles.materialUnderlineTextbox2}
            value={email}
          ></MaterialUnderlineTextbox>
        </View>
        <View style={styles.icon2Row}>
          <FontAwesomeIcon name="lock" style={styles.icon2}></FontAwesomeIcon>
          <MaterialUnderlineTextbox1
            inputStyle="Password"
            style={styles.materialUnderlineTextbox1}
            secureTextEntry={true}
            type='password'
            onChange={setPassword}
            value={password}
            multiline={false}
      
          ></MaterialUnderlineTextbox1>
        </View>
        <TouchableOpacity
        
          style={styles.materialButtonViolet}
          onPress={() => firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
              let user = userCredential.user;
              navigation.navigate('Create', { idUser: user.uid })
              console.log(email);
              console.log(password);
            })
            .catch((error) => {
              // console.log(email);
              // console.log(password);
              setErrorLogin(true)
              let errorCode = error.code
              let errorMessage = error.message
              // console.log(errorCode)
              // console.log(errorMessage)
            })
          }
        ><Text style={styles.TextFieldViolet}>Login</Text></TouchableOpacity>
        {/* ############ ERROR #######################*/}
        {errorLogin === true
          ?
          <View style={styles.error}>
            <MaterialCommunityIcons
              name='alert-circle'
              size={20}
              color='#f00'
              style={styles.alertCircle}
            /><Text style={styles.warning}>E-mail ou Senha inválido...</Text>
          </View>
          :
          <View />
        }
        {/*############ FIM ERROR ################## */}

        

      <View>
        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate("Register")}><Text style={styles.TextFieldRegister}>Register</Text></TouchableOpacity>
      </View>
    </ImageBackground>

    </View >

  );
}

const styles = StyleSheet.create({
  TextFieldRegister:{
    fontFamily: "roboto-regular",
    color: "white",
  },
  TextFieldViolet:{
    fontFamily: "roboto-regular",
    color: "white",

  },
  button1: {
    
    textAlign: "center",
    marginTop: 32,
    left: 93,
    width: 187,
    height: 49,
    position: "absolute",
    backgroundColor: "rgb(0, 0, 0, 0)"
  },
  container: {
    flex: 1
  },
  rect: {

    width: 360,
    height: 740
  },
  rect_imageStyle: {},
  mangym: {
    fontFamily: "roboto-500",
    color: "#121212",
    height: 55,
    width: 213,
    fontSize: 45,
    textAlign: "center",
    marginTop: 156,
    marginLeft: 73
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 25,
    height: 25,
    width: 21,
    marginTop: 18
  },
  materialUnderlineTextbox2: {
    height: 43,
    width: 219,
    overflow: "visible",
    borderWidth: 0,
    borderColor: "#00000",
    borderStyle: "solid",
    marginLeft: 22,
    outlineStyle: 'none'
  },

  iconRow: {
    height: 43,
    flexDirection: "row",
    marginTop: 90,
    marginLeft: 49,
    marginRight: 49
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    height: 33,
    width: 19,
    marginTop: 10
  },
  materialUnderlineTextbox1: {
    height: 43,
    width: 219,
    overflow: "visible",
    borderWidth: 0,
    borderColor: "#000000",
    borderStyle: "solid",
    marginLeft: 22,
  },
  icon2Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 46,
    marginLeft: 51,
    marginRight: 49
  },
  materialButtonViolet: {
    justifyContent: 'center',
    fontSize: 15,
    fontFamily: "roboto-regular",
    alignItems: 'center',
    textAlign: "center",
    color: 'white',
    height: 45,
    width: 263,
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 17,
    backgroundColor: "rgba(43,47,47,1)",
    marginTop: 40,
    marginLeft: 56
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 15,
    marginTop: 42,
    marginLeft: 112
  },
  signUp: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 17,
    textAlign: "center",
    justifyContent: "center",
    marginTop: 32,
    marginLeft: 0
  },
  warning: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  
  alertCircle:{
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  }
});

export default Login;
