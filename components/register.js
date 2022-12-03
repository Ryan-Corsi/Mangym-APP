import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, ImageBackground, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialUnderlineTextbox from "./builderxComponents/MaterialUnderlineTextbox";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialButtonViolet from "./builderxComponents/MaterialButtonViolet";
import MaterialUnderlineTextbox1 from "./builderxComponents/MaterialUnderlineTextbox1";
import MaterialUnderlineTextbox2 from "./builderxComponents/MaterialUnderlineTextbox1";
import "../styles.css";
import myImage from "../assets/images/Gradient_DpxnLje.png";
import firebaseApp from './firebaseConfig'
import { MaterialCommunityIcons } from '@expo/vector-icons'


function Register({ props, navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [errorRegister, setErrorRegister] = useState('')
  const [errorRegisterCheck, setErrorRegisterCheck] = useState('')
  const [veri_um, setVeri_um] = useState('')
  const [veri_dois, setVeri_dois] = useState('')

  
  // const register

  useEffect(() => { }, []);


  function makeRegister() {
    if (passwordCheck != password){
      setErrorRegisterCheck(true)
      setTimeout(() => {
        setErrorRegisterCheck(false)
      
      },5000)
      return
    }
      

    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(password);
        console.log(email);
        let user = userCredential.user;
        navigation.navigate('Login', { idUser: user.uid })
      })
      .catch((error) => {
        console.log(password);
        console.log(email);
        setErrorRegister(true)
        setTimeout(() => {
          setErrorRegister(false)
        
        },5000)
        let errorCode = error.code
        let errorMessage = error.message
        console.log(errorCode)
        console.log(errorMessage)
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonStack}>
        <TouchableOpacity style={styles.button}></TouchableOpacity>
        <ImageBackground
          style={styles.rect}
          imageStyle={styles.rect_imageStyle}
          source={myImage}
        >
          <Text style={styles.mangym}>MANGYM</Text>
          <View style={styles.iconRow}>
            <FontAwesomeIcon
              name="user-o"
              style={styles.icon}
            ></FontAwesomeIcon>
            <MaterialUnderlineTextbox
              inputStyle="User"
              style={styles.materialUnderlineTextbox4}
              // onChangeText={(text) => setEmail(text)}
              onChange={setEmail}
              value={email}
            ></MaterialUnderlineTextbox>
          </View>
          <View style={styles.icon2Row}>
            <FontAwesomeIcon name="lock" style={styles.icon2}></FontAwesomeIcon>
            <MaterialUnderlineTextbox1
              secureTextEntry={true}
              style={styles.materialUnderlineTextbox5}
              // onChangeText={(text) => setPassword(text)}
              onChange={setPassword} value={password}
              multiline={false}
            ></MaterialUnderlineTextbox1>
          </View>
          <View style={styles.icon3Row}>
            <FontAwesomeIcon name="lock" style={styles.icon3}></FontAwesomeIcon>
            <MaterialUnderlineTextbox2
              inputStyle="Password"
              
              style={styles.materialUnderlineTextbox5}
              // onChangeText={(text) => setPassword(text)}
              onChange={setPasswordCheck}
              secureTextEntry={true}
              ></MaterialUnderlineTextbox2>
          </View>
          <TouchableOpacity
            style={styles.materialButtonViolet1}
            onPress={() =>
              makeRegister()
            }





          ><Text style={styles.TextFieldViolet}>Register</Text></TouchableOpacity>
          {/*############ ERROR #######################*/}
          {errorRegisterCheck === true 
            ?
            
            <View style={styles.error}>
              <MaterialCommunityIcons
                name='alert-circle'
                size={20}
                color='#f00'
              /><Text style={styles.warning}>As senhas não se conhecidem...</Text>
            </View>
            :
            <View />
          }

          {errorRegister === true
            ?
            <View style={styles.error}>
              <MaterialCommunityIcons
                name='alert-circle'
                size={20}
                color='#f00'
              /><Text style={styles.warning}>E-mail o senha inválido...</Text>
            </View>
            :
            <View />
          }
          {/*############ FIM ERROR ##################*/}


          {/* <MaterialButtonViolet
            caption="Register"
            style={styles.materialButtonViolet1}
            onPress={register}
          ></MaterialButtonViolet> */}
          <View>
            <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate("Login")}><Text style={styles.TextFieldLogin}>Login</Text></TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  TextFieldLogin: {
    fontFamily: "roboto-regular",
    textAlign: "center",
  },
  TextFieldViolet: {
    fontFamily: "roboto-regular",
    color: "white",
  },
  button1: {
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginTop: 32,
    left: 86,
    width: 187,
    height: 49,
    position: "absolute",
    backgroundColor: "rgb(0, 0, 0, 0)"
  },
  container: {
    width: 360,
    height: 740
  },
  button: {
    top: 620,
    left: 133,
    width: 91,
    height: 40,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  rect: {
    width: 360,
    height: 740,
    position: "absolute",
    left: 0,
    top: 0
  },
  rect_imageStyle: {},
  mangym: {
    fontFamily: "roboto-500",
    color: "#121212",
    height: 55,
    width: 213,
    fontSize: 45,
    textAlign: "center",
    marginTop: 150,
    marginLeft: 76
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 25,
    height: 0,
    width: 0,
    marginTop: 18
  },
  materialUnderlineTextbox4: {
    height: 43,
    width: 219,
    overflow: "visible",
    borderWidth: 0,
    borderColor: "#000000",
    borderStyle: "solid",
    marginLeft: 43
  },
  iconRow: {
    height: 43,
    flexDirection: "row",
    marginTop: 92,
    marginLeft: 47,
    marginRight: 51
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    height: 0,
    width: 0,
    marginTop: 10
  },
  materialUnderlineTextbox5: {
    height: 43,
    width: 219,
    overflow: "visible",
    borderWidth: 0,
    borderColor: "#000000",
    borderStyle: "solid",
    marginLeft: 42
  },
  icon2Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 48,
    marginRight: 51
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    height: 0,
    width: 0,
    marginTop: 10
  },
  materialUnderlineTextbox6: {
    height: 43,
    width: 219,
    overflow: "visible",
    borderWidth: 0,
    borderColor: "#000000",
    borderStyle: "solid",
    marginLeft: 40
  },
  icon3Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 46,
    marginLeft: 50,
    marginRight: 51
  },
  materialButtonViolet1: {
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
  login: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 17,
    marginTop: 44,
    marginLeft: 152
  },
  buttonStack: {
    width: 360,
    height: 740
  },
  warning: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },

  alertCircle: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  }
});

export default Register;
