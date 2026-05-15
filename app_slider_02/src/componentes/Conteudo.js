import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Image
} from "react-native";

import { Picker } from "@react-native-picker/picker";

import Slider from "@react-native-community/slider";

import { estilos } from "../stylesheet/estilos";

function Conteudo() {

  const [nome, setNome] = useState("");
  const [filme, setFilme] = useState("Matrix");
  const [nota, setNota] = useState(8);
  const [comentario, setComentario] = useState("");
  const [resultado, setResultado] = useState("");

  function avaliar() {

    if (nome === "" || comentario === "") {

      alert("Preencha todos os campos!");

    } else {

      setResultado(
        "Nome: " + nome +
        "\nFilme: " + filme +
        "\nNota: " + nota.toFixed(1) +
        "\nComentário: " + comentario
      );
    }
  }

  function retornaImagem() {

    if (filme === "Matrix") {

      return require("../img/matrix.png");

    } else if (filme === "Vingadores") {

      return require("../img/vingadores.png");

    } else {

      return require("../img/barbie.png");
    }
  }

  return (

    <View style={estilos.area_conteudo}>

      <TextInput
        placeholder="Digite seu nome"
        style={estilos.input}
        value={nome}
        onChangeText={setNome}
      />

      <Text style={estilos.texto}>
        Escolha o filme:
      </Text>

      <Picker
        selectedValue={filme}
        style={estilos.picker}
        onValueChange={(itemValue) =>
          setFilme(itemValue)
        }
      >

        <Picker.Item label="Matrix" value="Matrix" />
        <Picker.Item label="Vingadores" value="Vingadores" />
        <Picker.Item label="Barbie" value="Barbie" />

      </Picker>

      <Image
        source={retornaImagem()}
        style={estilos.imagem}
      />

      <Text style={estilos.texto}>
        Nota: {nota.toFixed(1)}
      </Text>

      <Slider
        style={estilos.slider}
        minimumValue={0}
        maximumValue={10}
        step={0.5}
        minimumTrackTintColor="#009688"
        maximumTrackTintColor="#999"
        value={nota}
        onValueChange={(valor) => setNota(valor)}
      />

      <TextInput
        placeholder="Digite um comentário"
        style={estilos.inputComentario}
        multiline={true}
        value={comentario}
        onChangeText={setComentario}
      />

      <TouchableHighlight
        style={estilos.botao}
        onPress={avaliar}
      >

        <Text style={estilos.textoBotao}>
          Avaliar
        </Text>

      </TouchableHighlight>

      <Text style={estilos.resultado}>
        {resultado}
      </Text>

    </View>
  );
}

export default Conteudo;