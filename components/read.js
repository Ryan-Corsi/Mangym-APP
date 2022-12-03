import React, { Component, useState, useEffect, FlatList } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import CupertinoSearchBarBasic from "../components/builderxComponents/CupertinoSearchBarBasic";
import EntypoIcon from "react-native-vector-icons/Entypo";
import firebaseApp from './firebaseConfig'

const db = firebaseApp.firestore();
const storage = firebaseApp.storage();

function Read({ props, navigation }) {

  const [usuario, setUsuario] = useState({})
  const [clientes, setClientes] = useState([])
  const [content, setContent] = useState(false);
  const [texto, setTexto] = useState('')
  const [image, setImage] = useState(null);
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')

  useEffect(() => {
    for (let i = 0; i < clientes.length; i++) {
      console.log(clientes[i])
      if (clientes[i].nome == texto) {
        setUsuario(clientes[i])
        setImage(clientes[i].image)
        setNome(clientes[i].nome)

        if (clientes[i].idade <= 0) {
          setIdade("")
        } else {
          setIdade(clientes[i].idade)
        }
        setContent(true);


        break
      }

    }

  }, [texto])

  useEffect(() => {
    db.collection("mangym").onSnapshot((query) => {


      query.forEach((doc) => {
        clientes.push({ ...doc.data(), id: doc.id })
      })
    })


  }, [])

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.rect}
        imageStyle={styles.rect_imageStyle}
        source={require("../assets/images/Gradient_DpxnLje.png")}
      >
        <Text style={styles.tituloRead}>MANGYM</Text>
        <CupertinoSearchBarBasic
          inputBox="#EFEFF4"
          inputStyle="Search"
          inputBox="rgba(255,255,255,1)"
          onChange={setTexto}
          value={texto}
          inputStyle="Pesquisar nome..."
          style={styles.pesquisarNomeRead}
        ></CupertinoSearchBarBasic>
        <View style={styles.div1Read}>
          <Image source={{
            // uri: 'gs://somativa-cc5f4.appspot.com/minhasImagens/' + image + "?alt=media",
            uri: `https://firebasestorage.googleapis.com/v0/b/somativa-cc5f4.appspot.com/o/minhasImagens%2F${image}?alt=media`
          }}
            style={{ height: 149, width: 146, resizeMode: "contain" }}
          //style={styles.div3Read}
          />
        </View>
        {content === false
          ?
          <View style={styles.div2Read}>
            <Text style={styles.txt1}></Text>
            <Text style={styles.txt}></Text>
            <Text style={styles.txt}></Text>
          </View>
          :
          <View style={styles.div2Read}>
            <Text style={styles.txt1}>Cliente da Mangym </Text>
            <Text style={styles.txt}>Sr(a) {nome}</Text>
            <Text style={styles.txt}>Idade {idade} anos</Text>
          </View>
        }
        <View gradientImage="Gradient_tHU9se8.png" style={styles.tabBarRead}>
          <View style={styles.iconCreateReadStackStackRow}>
            <View style={styles.iconCreateReadStackStack}>
              <View style={styles.iconCreateReadStack}>
                <EntypoIcon
                  name="add-to-list"
                  style={styles.iconCreateRead}
                ></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Create")}
                  style={styles.btnCreateRead}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textcreateRead}>Create</Text>
            </View>
            <View style={styles.iconReadReadStackStack}>
              <View style={styles.iconReadReadStack}>
                <EntypoIcon name="eye" style={styles.iconReadRead}></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Read")}
                  style={styles.btnReadRead}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textReadRead}>Read</Text>
            </View>
            <View style={styles.iconUpdateReadStackStack}>
              <View style={styles.iconUpdateReadStack}>
                <EntypoIcon
                  name="brush"
                  style={styles.iconUpdateRead}
                ></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Update")}
                  style={styles.btnUpdateRead}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textupdateRead}>Update</Text>
            </View>
            <View style={styles.iconDeleteReadStackStack}>
              <View style={styles.iconDeleteReadStack}>
                <EntypoIcon
                  name="trash"
                  style={styles.iconDeleteRead}
                ></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Delete")}
                  style={styles.btnDeleteRead}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textDeleteRead}>Delete</Text>
            </View>
            <View style={styles.iconImageReadStackStack}>
              <View style={styles.iconImageReadStack}>
                <EntypoIcon
                  name="image-inverted"
                  style={styles.iconImageRead}
                ></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Images")}
                  style={styles.btnImageRead}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textImageRead}>Image</Text>
            </View>
            <View style={styles.iconUserReadStackStack}>
              <View style={styles.iconUserReadStack}>
                <EntypoIcon
                  name="v-card"
                  style={styles.iconUserRead}
                ></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("User")}
                  style={styles.btnUserRead}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textUserRead}>User</Text>
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
  tituloRead: {
    fontFamily: "roboto-500",
    color: "#121212",
    height: 38,
    width: 140,
    fontSize: 30,
    textAlign: "center",
    marginTop: 37,
    marginLeft: 121
  },
  pesquisarNomeRead: {
    height: 44,
    width: 282,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 39,
    marginLeft: 43,
    outline: "none",
  },
  div1Read: {
    width: 146,
    height: 149,
    backgroundColor: "#E6E6E6",
    marginTop: 16,
    marginLeft: 118,
    backgroundSize: "contain "

  },
  div3Read: {
    width: 146,
    height: 149,
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat"
    backgroundSize: "contain"


  },
  div2Read: {
    alignItems: 'center',
    width: 264,
    height: 223,
    backgroundColor: "none",
    marginTop: 12,
    marginLeft: 59
  },
  tabBarRead: {
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
    marginTop: 122
  },
  iconCreateRead: {
    top: 3,
    left: 14,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    height: 20,
    width: 18
  },
  btnCreateRead: {
    top: 0,
    left: 0,
    width: 47,
    height: 47,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconCreateReadStack: {
    top: 0,
    left: 0,
    width: 47,
    height: 47,
    position: "absolute"
  },
  textcreateRead: {
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
  iconCreateReadStackStack: {
    width: 47,
    height: 48,
    marginTop: 1
  },
  iconReadRead: {
    top: 0,
    left: 9,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 23,
    height: 25,
    width: 23
  },
  btnReadRead: {
    top: 0,
    left: 0,
    width: 41,
    height: 46,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconReadReadStack: {
    top: 0,
    left: 0,
    width: 41,
    height: 46,
    position: "absolute"
  },
  textReadRead: {
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
  iconReadReadStackStack: {
    width: 41,
    height: 46,
    marginLeft: 8,
    marginTop: 2
  },
  iconUpdateRead: {
    top: 1,
    left: 13,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 21,
    height: 23,
    width: 21
  },
  btnUpdateRead: {
    top: 0,
    left: 0,
    width: 45,
    height: 47,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconUpdateReadStack: {
    top: 0,
    left: 0,
    width: 45,
    height: 47,
    position: "absolute"
  },
  textupdateRead: {
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
  iconUpdateReadStackStack: {
    width: 47,
    height: 47,
    marginLeft: 17,
    marginTop: 1
  },
  iconDeleteRead: {
    top: 3,
    left: 15,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 19,
    height: 21,
    width: 19
  },
  btnDeleteRead: {
    top: 0,
    left: 0,
    width: 49,
    height: 50,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconDeleteReadStack: {
    top: 0,
    left: 0,
    width: 49,
    height: 50,
    position: "absolute"
  },
  textDeleteRead: {
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
  iconDeleteReadStackStack: {
    width: 49,
    height: 50,
    marginLeft: 15
  },
  iconImageRead: {
    top: 0,
    left: 12,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 23,
    height: 25,
    width: 23
  },
  btnImageRead: {
    top: 0,
    left: 0,
    width: 48,
    height: 49,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconImageReadStack: {
    top: 0,
    left: 0,
    width: 48,
    height: 49,
    position: "absolute"
  },
  textImageRead: {
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
  iconImageReadStackStack: {
    width: 48,
    height: 49,
    marginLeft: 14,
    marginTop: 2
  },
  iconUserRead: {
    top: 0,
    left: 10,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    height: 27,
    width: 25
  },
  btnUserRead: {
    top: 1,
    left: 0,
    width: 45,
    height: 50,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconUserReadStack: {
    top: 0,
    left: 0,
    width: 45,
    height: 51,
    position: "absolute"
  },
  textUserRead: {
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
  iconUserReadStackStack: {
    width: 45,
    height: 51,
    marginLeft: 16
  },
  iconCreateReadStackStackRow: {
    height: 51,
    flexDirection: "row",
    flex: 1,
    marginRight: 8,
    marginLeft: 5,
    marginTop: 6
  }
});

export default Read;
