import React, { Component, useState, useEffect, } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import firebaseApp from './firebaseConfig'

const db = firebaseApp.firestore();
const storage = firebaseApp.storage();

function Images({ props, navigation }) {

  const [usuario, setUsuario] = useState(null)
  const [clientes, setClientes] = useState([])
  const [texto, setTexto] = useState('')
  const [image, setImage] = useState(null);
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  var [i, setI] = useState(0)

  function teste() {
    console.log("testeee")
    setI(i++)
    console.log("Ok ", i)
  }

  useEffect(() => {
    db.collection("mangym").onSnapshot((query) => {
      query.forEach((doc) => {
        clientes.push({ ...doc.data(), id: doc.id })
      })
      console.log("clientes")
      console.log(clientes)

      if (clientes.length > 0) {       
        console.log("clientes", clientes)
        setUsuario(clientes[i])
        setImage(clientes[i].image)
        console.log(clientes[i].image)
      }

    })
  }, [])

  useEffect(() => {
    console.log("exec")
    if (clientes.length > 0) {
      setImage(clientes[i].image)
      console.log(clientes[i].image)
    }
  }, [i])



  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.rect}
        imageStyle={styles.rect_imageStyle}
        source={require("../assets/images/Gradient_DpxnLje.png")}
      >
        
        <Text style={styles.tituloImage}>MANGYM</Text>
        <View style={styles.divImageStackStackRow}>
          <View style={styles.divImageStackStack}>
            <View style={styles.divImageStack}>
              <View style={styles.divImage}>
                {/* <Text style={styles.tituloImage}>{image}</Text> */}
                <Image source={{
                  // uri: 'gs://somativa-cc5f4.appspot.com/minhasImagens/' + image + "?alt=media",
                  uri: `https://firebasestorage.googleapis.com/v0/b/somativa-cc5f4.appspot.com/o/minhasImagens%2F${image}?alt=media&token=7619fdef-7048-429c-842d-a3673019a7b3`
                  // uri: 'https://firebasestorage.googleapis.com/v0/b/somativa-cc5f4.appspot.com/o/minhasImagens%2FDudu_banner_flash.jpg?alt=media&token=7619fdef-7048-429c-842d-a3673019a7b3'
                }}
                  style={{alignItems: "center", justifyContent:"center", height: 350, width: 258, resizeMode: "contain" }}
                //style={styles.div3Read}
                />
               
              </View>
            </View>
            <Text style={styles.textsetaEsquerda}>&lt;</Text>
            <TouchableOpacity
                  style={styles.btnSetaEsquerda} onPress={() => {
                    if (i > 0)
                      setI(i--)
                    console.log("Ok ", i)
                  }}
        ></TouchableOpacity>
          </View>
          <View style={styles.textsetaDireitaStack}>
            <Text style={styles.textsetaDireita}>&gt;</Text>
            <TouchableOpacity style={styles.btnSetaDireita} onPress={() => {
              if (i < (clientes.length - 1))
                setI(i++)
              console.log("Ok ", i)
            }}
            ></TouchableOpacity>
          </View>
        </View>
        <View gradientImage="Gradient_tHU9se8.png" style={styles.tabBarImage}>
          <View style={styles.iconCreateImageStackStackRow}>
            <View style={styles.iconCreateImageStackStack}>
              <View style={styles.iconCreateImageStack}>
                <EntypoIcon
                  name="add-to-list"
                  style={styles.iconCreateImage}
                ></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Create")}
                  style={styles.btnCreateImage}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textCreateImage}>Create</Text>
            </View>
            <View style={styles.iconReadImageStackStack}>
              <View style={styles.iconReadImageStack}>
                <EntypoIcon
                  name="eye"
                  style={styles.iconReadImage}
                ></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Read")}
                  style={styles.btnReadImage}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textReadImage}>Read</Text>
            </View>
            <View style={styles.iconUpdateImageStackStack}>
              <View style={styles.iconUpdateImageStack}>
                <EntypoIcon
                  name="brush"
                  style={styles.iconUpdateImage}
                ></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Update")}
                  style={styles.btnUpdateImage}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textUpdateImage}>Update</Text>
            </View>
            <View style={styles.iconDeleteImageStackStack}>
              <View style={styles.iconDeleteImageStack}>
                <EntypoIcon
                  name="trash"
                  style={styles.iconDeleteImage}
                ></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Delete")}
                  style={styles.btnDeleteImage}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textDeleteImage}>Delete</Text>
            </View>
            <View style={styles.iconImageImageStackStack}>
              <View style={styles.iconImageImageStack}>
                <EntypoIcon
                  name="image-inverted"
                  style={styles.iconImageImage}
                ></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Image")}
                  style={styles.btnImageImage}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textImageImage}>Image</Text>
            </View>
            <View style={styles.iconUserImageStackStack}>
              <View style={styles.iconUserImageStack}>
                <EntypoIcon
                  name="v-card"
                  style={styles.iconUserImage}
                ></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("User")}
                  style={styles.btnUserImage}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textUserImage}>User</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  rect: {
    width: 360,
    height: 740
  },
  rect_imageStyle: {},
  tituloImage: {
    fontFamily: "roboto-500",
    color: "#121212",
    height: 38,
    width: 140,
    fontSize: 30,
    textAlign: "center",
    marginTop: 37,
    marginLeft: 121
  },
  divImage: {
    top: 0,
    left: 49,
    width: 258,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E6E6E6",
  },
  btnSetaEsquerda: {
    top: 140,
    width: 50,
    height: 60,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  

  },
  divImageStack: {
    top: 0,
    left: 0,
    width: 307,
    height: 455,
    position: "absolute"
  },
  textsetaEsquerda: {
    top: 114,
    left: 0,
    position: "absolute",
    fontFamily: "acme-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 80,
    textAlign: "right"
  },
  divImageStackStack: {
    width: 307,
    height: 455
  },
  textsetaDireita: {
    top: 0,
    left: 1,
    position: "absolute",
    fontFamily: "acme-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 80,
    textAlign: "right"
  },
  btnSetaDireita: {
    top: 26,
    left: 0,
    width: 50,
    height: 60,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0

   
  },
  textsetaDireitaStack: {
    width: 50,
    height: 156,
    marginTop: 114
  },
  divImageStackStackRow: {
    height: 455,
    flexDirection: "row",
    marginTop: 68,
    marginLeft: 2,
    marginRight: 1
  },
  tabBarImage: {
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
    marginTop: 82
  },
  iconCreateImage: {
    top: 3,
    left: 14,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    height: 20,
    width: 18
  },
  btnCreateImage: {
    top: 0,
    left: 0,
    width: 47,
    height: 47,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconCreateImageStack: {
    top: 0,
    left: 0,
    width: 47,
    height: 47,
    position: "absolute"
  },
  textCreateImage: {
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
  iconCreateImageStackStack: {
    width: 47,
    height: 48,
    marginTop: 1
  },
  iconReadImage: {
    top: 0,
    left: 9,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 23,
    height: 25,
    width: 23
  },
  btnReadImage: {
    top: 0,
    left: 0,
    width: 41,
    height: 46,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconReadImageStack: {
    top: 0,
    left: 0,
    width: 41,
    height: 46,
    position: "absolute"
  },
  textReadImage: {
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
  iconReadImageStackStack: {
    width: 41,
    height: 46,
    marginLeft: 8,
    marginTop: 2
  },
  iconUpdateImage: {
    top: 1,
    left: 13,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 21,
    height: 23,
    width: 21
  },
  btnUpdateImage: {
    top: 0,
    left: 0,
    width: 45,
    height: 47,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconUpdateImageStack: {
    top: 0,
    left: 0,
    width: 45,
    height: 47,
    position: "absolute"
  },
  textUpdateImage: {
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
  iconUpdateImageStackStack: {
    width: 47,
    height: 47,
    marginLeft: 17,
    marginTop: 1
  },
  iconDeleteImage: {
    top: 3,
    left: 15,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 19,
    height: 21,
    width: 19
  },
  btnDeleteImage: {
    top: 0,
    left: 0,
    width: 49,
    height: 50,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconDeleteImageStack: {
    top: 0,
    left: 0,
    width: 49,
    height: 50,
    position: "absolute"
  },
  textDeleteImage: {
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
  iconDeleteImageStackStack: {
    width: 49,
    height: 50,
    marginLeft: 15
  },
  iconImageImage: {
    top: 0,
    left: 12,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 23,
    height: 25,
    width: 23
  },
  btnImageImage: {
    top: 0,
    left: 0,
    width: 48,
    height: 49,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconImageImageStack: {
    top: 0,
    left: 0,
    width: 48,
    height: 49,
    position: "absolute"
  },
  textImageImage: {
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
  iconImageImageStackStack: {
    width: 48,
    height: 49,
    marginLeft: 14,
    marginTop: 2
  },
  iconUserImage: {
    top: 0,
    left: 10,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    height: 27,
    width: 25
  },
  btnUserImage: {
    top: 1,
    left: 0,
    width: 45,
    height: 50,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconUserImageStack: {
    top: 0,
    left: 0,
    width: 45,
    height: 51,
    position: "absolute"
  },
  textUserImage: {
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
  iconUserImageStackStack: {
    width: 45,
    height: 51,
    marginLeft: 16
  },
  iconCreateImageStackStackRow: {
    height: 51,
    flexDirection: "row",
    flex: 1,
    marginRight: 8,
    marginLeft: 5,
    marginTop: 6
  }
});

export default Images;
