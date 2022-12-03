
import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import CupertinoButtonGrey from "./builderxComponents/MaterialButtonGrey";
import firebaseApp from './firebaseConfig'

const db = firebaseApp.firestore();
const storage = firebaseApp.storage();

function Create({ props, navigation, route }) {

  const [nome, setNome] = useState()
  const [idade, setIdade] = useState()
  const [texto, setTexto] = useState()
  var param = route.params?.idUser;

  //############## Imagens ####################
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    if (!image) {
      setPreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(image)
    setPreview(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)

  }, [image])





  const upload = () => {
    if (image == null)
      return;
    storage.ref(`/minhasImagens/${nome.replace(/ +/g, "") + "_" + image.name}`).put(image)
      
  }

  // mFoto = ' https://firebasestorage.googleapis.com/v0/b/somativa-cc5f4.appspot.com/o/minhasImagens%2F$' + image? 'alt=media'
     
  // storage.ref(`/minhasImagens/${nomeImg}`).put(image)
  // .on("state_changed", alert("success"), alert);

  function adicionar() {
    db.collection("mangym").add({
      nome: nome,
      idade: idade,
      status: false,
      image: nome.replace(/ +/g, "") + "_" + image.name,
      // mFoto = 'https://firebasestorage.googleapis.com/v0/b/crud-ab034.appspot.com/o/images%2F' + nomeImg + '?alt=media'
     
    })
    setNome("")
    setImage("")
    setIdade("")
    upload()
    setTexto('Cadastrado com sucesso')
    //navigation.navigate("Read")
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.rect}
        imageStyle={styles.rect_imageStyle}
        source={require("../assets/images/Gradient_DpxnLje.png")}
      >
        <Text style={styles.tituloCreate}>MANGYM</Text>
        <TextInput
          placeholder="Nome"
          autoCapitalize="words"
          style={styles.nomeCreate}
          onChangeText={setNome}
          value={nome}
        ></TextInput>
        <TextInput
          placeholder="Idade"
          style={styles.idadeCreate}
          onChangeText={setIdade}
          value={idade}>
        </TextInput>
        <View style={styles.divCreate1}>
          <input type="file" onChange={(e) => { setImage(e.target.files[0]) }} />

        </View>
        <View style={styles.divCreate}>
          <img src={preview} style={{ height: 230, width: 260 }} />
        </View>
        <View style={styles.iconUploadCreateRow}>
          <EntypoIcon
            name="upload"
            style={styles.iconUploadCreate}
          ></EntypoIcon>
          <View style={styles.lblBtnUploadCreateStack}>
            <CupertinoButtonGrey
              caption="Upload"
              style={styles.lblBtnUploadCreate}
            ></CupertinoButtonGrey>
            <TouchableOpacity style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", height: 33, width:88 }} onPress={adicionar}><Text style={{ color: "white" }}>Upload</Text></TouchableOpacity>
          </View>
        </View>
        <View gradientImage="Gradient_tHU9se8.png" style={styles.tabbar}>
          <View style={styles.iconCreateStackStackRow}>
            <View style={styles.iconCreateStackStack}>
              <View style={styles.iconCreateStack}>
                <EntypoIcon
                  name="add-to-list"
                  style={styles.iconCreate}
                ></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Create")}
                  style={styles.btnCreateCreate}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textcreate}>Create</Text>
            </View>
            <View style={styles.iconReadStackStack}>
              <View style={styles.iconReadStack}>
                <EntypoIcon name="eye" style={styles.iconRead}></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Read")}
                  style={styles.btnReadCreate}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textread}>Read</Text>
            </View>
            <View style={styles.iconUpdateStackStack}>
              <View style={styles.iconUpdateStack}>
                <EntypoIcon name="brush" style={styles.iconUpdate}></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Update")}
                  style={styles.btnupdateCreate}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textupdate}>Update</Text>
            </View>
            <View style={styles.iconDeleteStackStack}>
              <View style={styles.iconDeleteStack}>
                <EntypoIcon name="trash" style={styles.iconDelete}></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Delete")}
                  style={styles.btnDeleteCreate}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textDelete}>Delete</Text>
            </View>
            <View style={styles.iconImageStackStack}>
              <View style={styles.iconImageStack}>
                <EntypoIcon
                  name="image-inverted"
                  style={styles.iconImage}
                ></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Images")}
                  style={styles.btnImageCreate}
                ></TouchableOpacity>
              </View>
              <Text style={styles.image}>Image</Text>
            </View>
            <View style={styles.iconUserStackStack}>
              <View style={styles.iconUserStack}>
                <EntypoIcon name="v-card" style={styles.iconUser}></EntypoIcon>
                <TouchableOpacity
                  onPress={() => navigation.navigate("User")}
                  style={styles.btnUserCreate}
                ></TouchableOpacity>
              </View>
              <Text style={styles.textUser}>User</Text>
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
  tituloCreate: {
    fontFamily: "roboto-500",
    color: "#121212",
    height: 38,
    width: 140,
    fontSize: 30,
    textAlign: "center",
    marginTop: 37,
    marginLeft: 121
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
    marginTop: 138,
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
  divCreate1: {
    width: 259,
    height: 21,
    backgroundColor: "#E6E6E6",
    marginTop: 23,
    marginLeft: 51
  },
  divCreate: {
    width: 258,
    height: 230,
    backgroundColor: "#E6E6E6",
    marginTop: 23,
    marginLeft: 51
  },
  iconUploadCreate: {
    color: "rgba(0,0,0,1)",
    fontSize: 27,
    height: 29,
    width: 27
  },
  lblBtnUploadCreate: {
    height: 33,
    width: 83,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0,0,0,1)",
    color: "white",
    borderRadius: 5
  },
  btnUploadCreate: {
    top: 0,
    left: 0,
    width: 83,
    height: 33,
    color: "white",
    position: "absolute",
    backgroundColor: "black",
    opacity: 0
  },
  lblBtnUploadCreateStack: {
    top: 0,
    left: 0,
    width: 83,
    height: 33,
    marginLeft: 11,
    flexDirection: "row",
    alignItems: "center",
  },
  iconUploadCreateRow: {
    height: 33,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 125,
    marginRight: 114
  },
  tabbar: {
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
    marginTop: 10
  },
  iconCreate: {
    top: 3,
    left: 14,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    height: 20,
    width: 18
  },
  btnCreateCreate: {
    top: 0,
    left: 0,
    width: 47,
    height: 47,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconCreateStack: {
    top: 0,
    left: 0,
    width: 47,
    height: 47,
    position: "absolute"
  },
  textcreate: {
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
  iconCreateStackStack: {
    width: 47,
    height: 48,
    marginTop: 1
  },
  iconRead: {
    top: 0,
    left: 9,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 23,
    height: 25,
    width: 23
  },
  btnReadCreate: {
    top: 0,
    left: 0,
    width: 41,
    height: 46,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconReadStack: {
    top: 0,
    left: 0,
    width: 41,
    height: 46,
    position: "absolute"
  },
  textread: {
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
  iconReadStackStack: {
    width: 41,
    height: 46,
    marginLeft: 8,
    marginTop: 2
  },
  iconUpdate: {
    top: 1,
    left: 13,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 21,
    height: 23,
    width: 21
  },
  btnupdateCreate: {
    top: 0,
    left: 0,
    width: 45,
    height: 47,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconUpdateStack: {
    top: 0,
    left: 0,
    width: 45,
    height: 47,
    position: "absolute"
  },
  textupdate: {
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
  iconUpdateStackStack: {
    width: 47,
    height: 47,
    marginLeft: 17,
    marginTop: 1
  },
  iconDelete: {
    top: 3,
    left: 15,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 19,
    height: 21,
    width: 19
  },
  btnDeleteCreate: {
    top: 0,
    left: 0,
    width: 49,
    height: 50,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconDeleteStack: {
    top: 0,
    left: 0,
    width: 49,
    height: 50,
    position: "absolute"
  },
  textDelete: {
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
  iconDeleteStackStack: {
    width: 49,
    height: 50,
    marginLeft: 15
  },
  iconImage: {
    top: 0,
    left: 12,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 23,
    height: 25,
    width: 23
  },
  btnImageCreate: {
    top: 0,
    left: 0,
    width: 48,
    height: 49,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconImageStack: {
    top: 0,
    left: 0,
    width: 48,
    height: 49,
    position: "absolute"
  },
  image: {
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
  iconImageStackStack: {
    width: 48,
    height: 49,
    marginLeft: 14,
    marginTop: 2
  },
  iconUser: {
    top: 0,
    left: 10,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    height: 27,
    width: 25
  },
  btnUserCreate: {
    top: 1,
    left: 0,
    width: 45,
    height: 50,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconUserStack: {
    top: 0,
    left: 0,
    width: 45,
    height: 51,
    position: "absolute"
  },
  textUser: {
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
  iconUserStackStack: {
    width: 45,
    height: 51,
    marginLeft: 16
  },
  iconCreateStackStackRow: {
    height: 51,
    flexDirection: "row",
    flex: 1,
    marginRight: 8,
    marginLeft: 5,
    marginTop: 6
  }
});

export default Create;