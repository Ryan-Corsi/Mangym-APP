import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";
import CupertinoSearchBarBasic from "../components/builderxComponents/CupertinoSearchBarBasic";
import EntypoIcon from "react-native-vector-icons/Entypo";
import CupertinoButtonInfo from "../components/builderxComponents/CupertinoButtonInfo";
import firebaseApp from './firebaseConfig'

const db = firebaseApp.firestore();
const storage = firebaseApp.storage();


let naoPassou = false;


function Update({ navigation }) {

  const [id, setId] = useState(undefined)
  const [usuario, setUsuario] = useState('')
  const [idade, setIdade] = useState('')
  const [clientes, setClientes] = useState([])
  const [nome, setNome] = useState('')
  const [image, setImage] = useState(null);
  const [nomeE, setNomeE] = useState('')
  const [idadeE, setIdadeE] = useState('')
  const [newNome, setNewNome] = useState('')
  const [newIdade, setNewIdade] = useState('')
  const [newImage, setNewImage] = useState('')
  const [content, setContent] = useState(false);

  function editar() {
    if (newNome == "" || newIdade == "" || newImage == "") {
      alert("Preencha todos os Campos!")
      return;
    }
    if (naoPassou == true) {
      console.log("aa")
      console.log(newImage)
      console.log(newNome)
      console.log(newIdade)
      db.collection('mangym').doc(id).update({
        nome: newNome,
        idade: newIdade,
        image: newNome.replace(/ +/g, "") + "_" + newImage.name,
      })

      storage.ref(`/minhasImagens/${newNome.replace(/ +/g, "") + "_" + newImage.name}`).put(newImage)

      setUsuario("");
      setNome("");
      setIdade("");
      setNomeE("");
      setIdadeE("");
      setImage("");
      setNewImage("");
      setNewIdade("");
      setNewNome("");
      setContent(false);

    } else {
      alert("Usuário não encontrado!")
      setContent(false);
    }
    naoPassou = false;
  }

  const pesquisarId = () => {
    naoPassou = false
    let verify = false;

    if (nome == "") {

      alert("Usuário não encontrado!")
      setUsuario("");
      setNome("");
      setIdade("");
      setNomeE("");
      setIdadeE("");
      setImage("")
      setContent(false);
      naoPassou = false;

    } else {


      for (let i = 0; i < clientes.length; i++) {

        if (clientes[i].nome == nome) {
          setId(clientes[i].id)
          setUsuario(clientes[i]);
          setNome(clientes[i].nome);
          setIdade(clientes[i].idade);
          setNomeE(clientes[i].nome);
          setIdadeE(clientes[i].idade);
          setImage(clientes[i].image)
          setContent(true);
          verify = true;
          naoPassou = true;
          break;

        }
      }

      if (verify == false) {
        setContent(false);
        alert("Usuário não encontrado!")
        setUsuario("");
        setNome("");
        setIdade("");
        setNomeE("");
        setIdadeE("");
        setImage("")
        naoPassou = false;
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
        <Text style={styles.tituloUpdate}>MANGYM</Text>
        <CupertinoSearchBarBasic
          inputBox="#EFEFF4"
          inputStyle="Search"
          inputBox="rgba(255,255,255,1)"
          inputStyle="Pessoa a ser alterada..."
          style={styles.pesquisarNomeUpdate}
          value={nome}
          onChange={setNome}
        ></CupertinoSearchBarBasic>
        <View style={styles.containerRead}>
          <View style={styles.div1Update}>
            <Image source={{
              // uri: 'gs://somativa-cc5f4.appspot.com/minhasImagens/' + image + "?alt=media",
              uri: `https://firebasestorage.googleapis.com/v0/b/somativa-cc5f4.appspot.com/o/minhasImagens%2F${image}?alt=media`
            }}
              style={{ height: 130, width: 146, resizeMode: "contain" }}
            //style={styles.div3Read}
            />
          </View>

          <View style={styles.rContent}>
            <Text style={styles.txt1}>Cliente da Mangym </Text>
            {content === false
              ?
              <View style={styles.br}>
                <Text style={styles.txt}></Text>
                <Text style={styles.txt}></Text>
              </View>
              :
              <View style={styles.br}>
                <Text style={styles.txt}>Sr(a) {nomeE} </Text>
                <Text style={styles.txt}>Idade {idadeE} anos</Text>
              </View>
            }
            <View style={styles.align}>
              <TouchableOpacity style={styles.Pesquisar} onPress={pesquisarId}>
                <Text style={styles.lblPesq}>Selecionar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TextInput
          placeholder="Nome"
          autoCapitalize="words"
          style={styles.nomeCreate}
          onChangeText={setNewNome}
          value={newNome}
        ></TextInput>
        <TextInput
          placeholder="Idade"
          style={styles.idadeCreate}
          onChangeText={setNewIdade}
          value={newIdade}>
        </TextInput>
        <View style={styles.divCreate1}>
          <input type="file" onChange={(e) => { setNewImage(e.target.files[0]) }} />

        </View>
        <View style={styles.iconBtnUpdateRow}>
          <EntypoIcon name="tools" style={styles.iconBtnUpdate}></EntypoIcon>
          <TouchableOpacity style={{
            backgroundColor: 'black',
            borderRadius: 5,
            fontSize: 2,
            height: 25,
            width: 23, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", height: 33, width: 88, marginRight: 30,
          }} onPress={editar}><Text style={{ color: "white" }}>Upload</Text></TouchableOpacity>
        </View>
        <View gradientImage="Gradient_tHU9se8.png" style={styles.tabBarUpdate}>
          <View style={styles.iconCreateUpdateStackStackRow}>
            <View style={styles.iconCreateUpdateStackStack}>
              <View style={styles.iconCreateUpdateStack}>
                <EntypoIcon
                  name="add-to-list"
                  style={styles.iconCreateUpdate}
                ></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Create")}
                  style={styles.btnCreateUpdate}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textCreateUpdate}>Create</Text>
            </View>
            <View style={styles.iconReadUpdateStackStack}>
              <View style={styles.iconReadUpdateStack}>
                <EntypoIcon
                  name="eye"
                  style={styles.iconReadUpdate}
                ></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Read")}
                  style={styles.btnReadUpdate}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textReadUpdate}>Read</Text>
            </View>
            <View style={styles.iconUpdateUpdateStackStack}>
              <View style={styles.iconUpdateUpdateStack}>
                <EntypoIcon
                  name="brush"
                  style={styles.iconUpdateUpdate}
                ></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Update")}
                  style={styles.btnUpdateUpdate}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textUpdateUpdate}>Update</Text>
            </View>
            <View style={styles.iconDeleteUpdateStackStack}>
              <View style={styles.iconDeleteUpdateStack}>
                <EntypoIcon
                  name="trash"
                  style={styles.iconDeleteUpdate}
                ></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Delete")}
                  style={styles.btnDeleteUpdate}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textDeleteUpdate}>Delete</Text>
            </View>
            <View style={styles.iconImageUpdateStackStack}>
              <View style={styles.iconImageUpdateStack}>
                <EntypoIcon
                  name="image-inverted"
                  style={styles.iconImageUpdate}
                ></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Images")}
                  style={styles.btnImageUpdate}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textImageUpdate}>Image</Text>
            </View>
            <View style={styles.iconUserUpdateStackStack}>
              <View style={styles.iconUserUpdateStack}>
                <EntypoIcon
                  name="v-card"
                  style={styles.iconUserUpdate}
                ></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("User")}
                  style={styles.btnUserUpdate}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textUserUpdate}>User</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  divCreate1: {
    width: 258,
    height: 21,
    backgroundColor: "#E6E6E6",
    marginTop: 23,
    marginLeft: 51
  },
  nomeCreate: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 249,
    borderWidth: 1,
    borderColor: "#000000",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginTop: 60,
    marginLeft: 55,
    outlineStyle: 'none',

  },
  idadeCreate: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 249,
    borderWidth: 1,
    borderColor: "#000000",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginTop: 57,
    marginLeft: 55,
    outlineStyle: 'none',

  },
  br: {
    paddingTop: 10
  },
  align: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  lblPesq: {
    color: 'white',
    fontSize: 13,
    fontFamily: "roboto-700",
    paddingTop: 10,
  },
  Pesquisar: {
    width: "100%",
    padding: 15,
    backgroundColor: "rgba(43,47,47,1)",
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 3,
    borderRadius: 5,
    height: 30,
    color: "white",
  },
  rContent: {
    paddingLeft: 14,
    paddingTop: 30,
    alignItems: "center"
  },
  containerRead: {
    flexDirection: 'row',
  },
  txt: {
    fontSize: 14,
    fontFamily: "roboto-700",
  },
  txt1: {
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "roboto-700",

  },
  container: {
    flex: 1,
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  meioDiv: {
    paddingLeft: 50,
    paddingTop: 10
  },
  rect: {
    width: 360,
    height: 740
  },
  rect_imageStyle: {},
  tituloUpdate: {
    fontFamily: "roboto-500",
    color: "#121212",
    height: 38,
    width: 140,
    fontSize: 30,
    textAlign: "center",
    marginTop: 37,
    marginLeft: 121
  },
  pesquisarNomeUpdate: {
    height: 44,
    width: 282,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 39,
    marginLeft: 43
  },
  div1Update: {

    width: 146,
    height: 160,
    backgroundColor: "#E6E6E6",
    marginTop: 16,
    marginLeft: 43,
    backgroundSize: "contain "
  },
  div2Update: {
    width: 264,
    height: 210,
    backgroundColor: "#E6E6E6",
    marginTop: 12,
    marginLeft: 59
  },
  iconBtnUpdate: {
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    height: 25,
    width: 23,
    paddingRight: 35

  },
  btnUpdate: {
    height: 40,
    width: 110,
    backgroundColor: "rgba(0,0,0,1)",
    marginLeft: 20
  },
  iconBtnUpdateRow: {
    height: 25,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 45,
    marginLeft: 119,
    marginRight: 99
  },
  tabBarUpdate: {
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
  iconCreateUpdate: {
    top: 3,
    left: 14,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    height: 20,
    width: 18
  },
  btnCreateUpdate: {
    top: 0,
    left: 0,
    width: 47,
    height: 47,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconCreateUpdateStack: {
    top: 0,
    left: 0,
    width: 47,
    height: 47,
    position: "absolute"
  },
  textCreateUpdate: {
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
  iconCreateUpdateStackStack: {
    width: 47,
    height: 48,
    marginTop: 1
  },
  iconReadUpdate: {
    top: 0,
    left: 9,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 23,
    height: 25,
    width: 23
  },
  btnReadUpdate: {
    top: 0,
    left: 0,
    width: 41,
    height: 46,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconReadUpdateStack: {
    top: 0,
    left: 0,
    width: 41,
    height: 46,
    position: "absolute"
  },
  textReadUpdate: {
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
  iconReadUpdateStackStack: {
    width: 41,
    height: 46,
    marginLeft: 8,
    marginTop: 2
  },
  iconUpdateUpdate: {
    top: 1,
    left: 13,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 21,
    height: 23,
    width: 21
  },
  btnUpdateUpdate: {
    top: 0,
    left: 0,
    width: 45,
    height: 47,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconUpdateUpdateStack: {
    top: 0,
    left: 0,
    width: 45,
    height: 47,
    position: "absolute"
  },
  textUpdateUpdate: {
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
  iconUpdateUpdateStackStack: {
    width: 47,
    height: 47,
    marginLeft: 17,
    marginTop: 1
  },
  iconDeleteUpdate: {
    top: 3,
    left: 15,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 19,
    height: 21,
    width: 19
  },
  btnDeleteUpdate: {
    top: 0,
    left: 0,
    width: 49,
    height: 50,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconDeleteUpdateStack: {
    top: 0,
    left: 0,
    width: 49,
    height: 50,
    position: "absolute"
  },
  textDeleteUpdate: {
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
  iconDeleteUpdateStackStack: {
    width: 49,
    height: 50,
    marginLeft: 15
  },
  iconImageUpdate: {
    top: 0,
    left: 12,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 23,
    height: 25,
    width: 23
  },
  btnImageUpdate: {
    top: 0,
    left: 0,
    width: 48,
    height: 49,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconImageUpdateStack: {
    top: 0,
    left: 0,
    width: 48,
    height: 49,
    position: "absolute"
  },
  textImageUpdate: {
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
  iconImageUpdateStackStack: {
    width: 48,
    height: 49,
    marginLeft: 14,
    marginTop: 2
  },
  iconUserUpdate: {
    top: 0,
    left: 10,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    height: 27,
    width: 25
  },
  btnUserUpdate: {
    top: 1,
    left: 0,
    width: 45,
    height: 50,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconUserUpdateStack: {
    top: 0,
    left: 0,
    width: 45,
    height: 51,
    position: "absolute"
  },
  textUserUpdate: {
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
  iconUserUpdateStackStack: {
    width: 45,
    height: 51,
    marginLeft: 16
  },
  iconCreateUpdateStackStackRow: {
    height: 51,
    flexDirection: "row",
    flex: 1,
    marginRight: 8,
    marginLeft: 5,
    marginTop: 6
  }
});

export default Update;
