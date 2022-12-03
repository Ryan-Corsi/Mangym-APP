import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  Image
} from "react-native";
import CupertinoSearchBarBasic from "./builderxComponents/CupertinoSearchBarBasic";
import EntypoIcon from "react-native-vector-icons/Entypo";
import CupertinoButtonInfo from "./builderxComponents/CupertinoButtonInfo";
import firebaseApp from './firebaseConfig'

const db = firebaseApp.firestore();

function Delete({ props, navigation }) {

  const [usuario, setUsuario] = useState({})
  const [clientes, setClientes] = useState([])
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [texto, setTexto] = useState('')
  const [image, setImage] = useState(null);
  const [content, setContent] = useState(false);
  const [nomeE, setNomeE] = useState('')
  const [idadeE, setIdadeE] = useState('')

  function deleteMovies() {

    let id = usuario.id;

    console.log(id)

    db.collection("mangym").doc(id).delete();

    setNomeE("")
    setIdadeE("")
    setImage("")
    setContent(false);


  }

  const pesquisarId = () => {

    let verify = false;

    if (nome == "") {

      setContent(false);
      alert("Usuário não encontrado com sucesso")
      setUsuario("");
      setNome("");
      setIdade("");
      setNomeE("");
      setIdadeE("");
      setImage("")

    } else {


      for (let i = 0; i < clientes.length; i++) {

        if (clientes[i].nome == nome) {

          setUsuario(clientes[i]);
          setNome(clientes[i].nome);
          setIdade(clientes[i].idade);
          setImage(clientes[i].image)
          setNomeE(clientes[i].nome);
          setIdadeE(clientes[i].idade);
          setContent(true);

          verify = true;
          break;

        }

      }

      if (verify == false) {
        alert("Usuário não foi encontrado")
        setContent(false);
        setUsuario("");
        setNome("");
        setIdade("");
        setNomeE("");
        setIdadeE("");
        setImage("")
      }

    }

  }

  useEffect(() => {

    db.collection("mangym").onSnapshot((query) => {

      const list = []
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id })
      })
      setClientes(list)
    })


  }, [])

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.rect}
        imageStyle={styles.rect_imageStyle}
        source={require("../assets/images/Gradient_DpxnLje.png")}
      >
        <Text style={styles.tituloDelete}>MANGYM</Text>

        {/* <TextInput placeholder="pesquise o id" style={styles.pesquisarNomeDelete} value={nome} onChangeText={text => setNome(text)} /> */}

        {/* <CupertinoSearchBarBasic inputBox="#EFEFF4" inputStyle="Pesquisar nome..." style={styles.pesquisarNomeDelete} value={nome} onChangeText={text => console.log(text)} /> */}

        <CupertinoSearchBarBasic
          inputBox="#EFEFF4"
          inputStyle="Search"
          inputBox="rgba(255,255,255,1)"
          inputStyle="Pessoa a ser deletada..."
          style={styles.pesquisarNomeDelete}
          value={nome}
          onChange={setNome}
        ></CupertinoSearchBarBasic>
        <View style={styles.align}>
          <TouchableOpacity style={styles.Pesquisar} onPress={pesquisarId}>

            <Text style={styles.lblPesq}>Pesquisar</Text>

          </TouchableOpacity>

        </View>

        <View style={styles.div1Delete}>
          <Image source={{
            // uri: 'gs://somativa-cc5f4.appspot.com/minhasImagens/' + image + "?alt=media",
            uri: `https://firebasestorage.googleapis.com/v0/b/somativa-cc5f4.appspot.com/o/minhasImagens%2F${image}?alt=media`
          }} style={{ height: 130, width: 146, resizeMode: "contain" }} />
        </View>
        {content === false
          ?
          <View style={styles.div2Delete}>
            <Text style={styles.txt1}></Text>
            <Text style={styles.txt}></Text>
            <Text style={styles.txt}></Text>
          </View>
          :
          <View style={styles.div2Delete}>
            <Text style={styles.txt1}>Cliente da Mangym </Text>
            <Text style={styles.txt}>Sr(a) {nomeE}</Text>
            <Text style={styles.txt}>Idade {idadeE} anos</Text>
          </View>

        }

        <View style={styles.iconBtnDeleteRow}>
          <EntypoIcon name="trash" style={styles.iconBtnDelete}></EntypoIcon>

          <TouchableOpacity style={[styles.container]} onPress={() => { deleteMovies() }}>
            <Text style={styles.caption}>Deletar</Text>
          </TouchableOpacity>
        </View>
        <View gradientImage="Gradient_tHU9se8.png" style={styles.tabBarDelete}>
          <View style={styles.iconCreateDeleteStackStackRow}>
            <View style={styles.iconCreateDeleteStackStack}>
              <View style={styles.iconCreateDeleteStack}>
                <EntypoIcon
                  name="add-to-list"
                  style={styles.iconCreateDelete}
                ></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Create")}
                  style={styles.btnCreateDelete}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textCreateDelete}>Create</Text>
            </View>
            <View style={styles.iconReadDeleteStackStack}>
              <View style={styles.iconReadDeleteStack}>
                <EntypoIcon
                  name="eye"
                  style={styles.iconReadDelete}
                ></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Delete")}
                  style={styles.btnReadDelete}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textReadDelete}>Read</Text>
            </View>
            <View style={styles.iconUpdateDeleteStackStack}>
              <View style={styles.iconUpdateDeleteStack}>
                <EntypoIcon
                  name="brush"
                  style={styles.iconUpdateDelete}
                ></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Update")}
                  style={styles.btnUpdateDelete}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textUpdateDelete}>Update</Text>
            </View>
            <View style={styles.iconDeleteDeleteStackStack}>
              <View style={styles.iconDeleteDeleteStack}>
                <EntypoIcon
                  name="trash"
                  style={styles.iconDeleteDelete}
                ></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Delete")}
                  style={styles.btnDeleteDelete}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textDeleteDelete}>Delete</Text>
            </View>
            <View style={styles.iconImageDeleteStackStack}>
              <View style={styles.iconImageDeleteStack}>
                <EntypoIcon
                  name="image-inverted"
                  style={styles.iconImageDelete}
                ></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Images")}
                  style={styles.btnImageDelete}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textImageDelete}>Image</Text>
            </View>
            <View style={styles.iconUserDeleteStackStack}>
              <View style={styles.iconUserDeleteStack}>
                <EntypoIcon
                  name="v-card"
                  style={styles.iconUserDelete}
                ></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("User")}
                  style={styles.btnUserDelete}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textUserDelete}>User</Text>
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
  lblPesq: {
    paddingTop: 10,
    color: "white"
  },
  pesquisarNomeDelete: {
    height: 44,
    width: 282,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 39,
    marginLeft: 43
  },
  container: {
    flex: 1,
  },
  rect: {
    width: 360,
    height: 740
  },
  caption: {
    width: 130,
    height: 45,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    marginRight: 5,
    paddingLeft: 40,
    color: "white",
    fontSize: 17

  },
  rect_imageStyle: {},
  tituloDelete: {
    fontFamily: "roboto-500",
    color: "#121212",
    height: 38,
    width: 140,
    fontSize: 30,
    textAlign: "center",
    marginTop: 37,
    marginLeft: 121
  },
  align: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Pesquisar: {
    height: 37,
    width: 80,
    padding: 15,
    backgroundColor: "black",
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 3,
    borderRadius: 5
  },
  pesquisarNomeDelete: {
    height: 44,
    width: 282,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 39,
    marginLeft: 43
  },
  div1Delete: {
    width: 146,
    height: 130,
    backgroundColor: "#E6E6E6",
    marginTop: 16,
    marginLeft: 110
  },
  div2Delete: {
    alignItems: 'center',
    width: 264,
    height: 195,
    backgroundColor: "none",
    marginTop: 12,
    marginLeft: 59
  },
  iconBtnDelete: {
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    height: 25,
    width: 23,
    paddingRight: 30
  },
  btnDelete: {
    height: 30,
    width: 110,
    backgroundColor: "rgba(0,0,0,1)",
    marginLeft: 9
  },
  iconBtnDeleteRow: {
    height: 25,
    flexDirection: "row",
    marginTop: 40,
    marginLeft: 119,
    marginRight: 99
  },
  tabBarDelete: {
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
    marginTop: 57
  },
  iconCreateDelete: {
    top: 3,
    left: 14,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    height: 20,
    width: 18
  },
  btnCreateDelete: {
    top: 0,
    left: 0,
    width: 47,
    height: 47,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconCreateDeleteStack: {
    top: 0,
    left: 0,
    width: 47,
    height: 47,
    position: "absolute"
  },
  textCreateDelete: {
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
  iconCreateDeleteStackStack: {
    width: 47,
    height: 48,
    marginTop: 1
  },
  iconReadDelete: {
    top: 0,
    left: 9,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 23,
    height: 25,
    width: 23
  },
  btnReadDelete: {
    top: 0,
    left: 0,
    width: 41,
    height: 46,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconReadDeleteStack: {
    top: 0,
    left: 0,
    width: 41,
    height: 46,
    position: "absolute"
  },
  textReadDelete: {
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
  iconReadDeleteStackStack: {
    width: 41,
    height: 46,
    marginLeft: 8,
    marginTop: 2,
  },
  iconUpdateDelete: {
    top: 1,
    left: 13,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 21,
    height: 23,
    width: 21
  },
  btnUpdateDelete: {
    top: 0,
    left: 0,
    width: 45,
    height: 47,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconUpdateDeleteStack: {
    top: 0,
    left: 0,
    width: 45,
    height: 47,
    position: "absolute"
  },
  textUpdateDelete: {
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
  iconUpdateDeleteStackStack: {
    width: 47,
    height: 47,
    marginLeft: 17,
    marginTop: 1
  },
  iconDeleteDelete: {
    top: 3,
    left: 15,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 19,
    height: 21,
    width: 19,
  },
  btnDeleteDelete: {
    top: 0,
    left: 0,
    width: 49,
    height: 50,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconDeleteDeleteStack: {
    top: 0,
    left: 0,
    width: 49,
    height: 50,
    alignItems: "center",
    textAlign: "center",
    justifyContent: 'center',
  },
  textDeleteDelete: {
    top: 32,
    left: 4,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 15,
    width: 40,
    textAlign: "center",
    fontSize: 12,
    alignItems: "center",
    justifyContent: 'center',
    display: "flex",
  },
  iconDeleteDeleteStackStack: {
    width: 49,
    height: 50,
    marginLeft: 15
  },
  iconImageDelete: {
    top: 0,
    left: 12,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 23,
    height: 25,
    width: 23
  },
  btnImageDelete: {
    top: 0,
    left: 0,
    width: 48,
    height: 49,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconImageDeleteStack: {
    top: 0,
    left: 0,
    width: 48,
    height: 49,
    position: "absolute"
  },
  textImageDelete: {
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
  iconImageDeleteStackStack: {
    width: 48,
    height: 49,
    marginLeft: 14,
    marginTop: 2
  },
  iconUserDelete: {
    top: 0,
    left: 10,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    height: 27,
    width: 25
  },
  btnUserDelete: {
    top: 1,
    left: 0,
    width: 45,
    height: 50,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconUserDeleteStack: {
    top: 0,
    left: 0,
    width: 45,
    height: 51,
    position: "absolute"
  },
  textUserDelete: {
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
  iconUserDeleteStackStack: {
    width: 45,
    height: 51,
    marginLeft: 16
  },
  iconCreateDeleteStackStackRow: {
    height: 51,
    flexDirection: "row",
    flex: 1,
    marginRight: 8,
    marginLeft: 5,
    marginTop: 6
  }

});

export default Delete;
