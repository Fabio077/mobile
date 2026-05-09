import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

import { Picker } from "@react-native-picker/picker";

export default function App() {
  const [nome, setNome] = useState("");
  const [linguagem, setLinguagem] = useState("Python");
  const [mensagem, setMensagem] = useState("");

  function confirmar() {
    if (nome === "") {
      setMensagem("Por favor, Digite seu nome!");
    } else {
      setMensagem(
        `Olá ${nome}, a sua linguagem de programação favorita é ${linguagem}`
      );
    }
  }

  return (
    <View style={styles.container}>

      {/* CAIXA DO APP */}
      <View style={styles.caixaApp}>

        {/* TOPO */}
        <View style={styles.topo}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2462/2462719.png",
            }}
            style={styles.imagem}
          />

          <Text style={styles.titulo}>
            Componente Picker
          </Text>
        </View>

        {/* CONTEÚDO */}
        <View style={styles.conteudo}>

          <Text style={styles.subtitulo}>
            Escolha Linguagem Favorita
          </Text>

          <TextInput
            placeholder="Digite seu nome"
            style={styles.input}
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>
            Escolha uma linguagem:
          </Text>

          <Picker
            selectedValue={linguagem}
            onValueChange={(itemValue) =>
              setLinguagem(itemValue)
            }
            style={styles.picker}
          >
            <Picker.Item label="Python" value="Python" />
            <Picker.Item label="Java" value="Java" />
            <Picker.Item label="JavaScript" value="JavaScript" />
            <Picker.Item label="C#" value="C#" />
          </Picker>

          <TouchableOpacity
            style={styles.botao}
            onPress={confirmar}
          >
            <Text style={styles.textoBotao}>
              Confirmar
            </Text>
          </TouchableOpacity>

          <Text style={styles.mensagem}>
            {mensagem}
          </Text>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#d9d3cd",
    justifyContent: "center",
    alignItems: "center",
  },

  caixaApp: {
    width: 320,
    height: 640,
    backgroundColor: "#87CEEB",
  },

  topo: {
    backgroundColor: "#fff",
    height: 190,
    justifyContent: "center",
    alignItems: "center",
  },

  imagem: {
    width: 90,
    height: 90,
    marginBottom: 10,
  },

  titulo: {
    fontSize: 22,
    color: "#87CEEB",
    fontWeight: "bold",
  },

  conteudo: {
    padding: 20,
  },

  subtitulo: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#fff",
    height: 45,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  label: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },

  picker: {
    backgroundColor: "#fff",
    marginBottom: 20,
  },

  botao: {
    backgroundColor: "#45B649",
    height: 45,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  textoBotao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  mensagem: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 16,
  },

});