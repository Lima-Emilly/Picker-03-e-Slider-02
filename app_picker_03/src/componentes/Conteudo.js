import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Image
} from "react-native";

import { Picker } from "@react-native-picker/picker";

import { estilos } from "../stylesheet/estilos";

function Conteudo() {

  const [nome, setNome] = useState("");
  const [lanche, setLanche] = useState("Pizza");
  const [descricao, setDescricao] = useState("");
  const [pedido, setPedido] = useState("");

  function fazerPedido() {

    if (nome === "" || descricao === "") {

      alert("Preencha todos os campos!");

    } else {

      setPedido(
        "Pedido de: " + nome +
        "\nLanche: " + lanche +
        "\nObservação: " + descricao
      );
    }
  }

  function retornaImagem() {

    if (lanche === "Pizza") {

      return require("../img/pizza.png");

    } else if (lanche === "Hambúrguer") {

      return require("../img/hamburguer.png");

    } else {

      return require("../img/pastel.png");
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
        Escolha seu lanche:
      </Text>

      <Picker
        selectedValue={lanche}
        style={estilos.picker}
        onValueChange={(itemValue) =>
          setLanche(itemValue)
        }
      >

        <Picker.Item label="Pizza" value="Pizza" />
        <Picker.Item label="Hambúrguer" value="Hambúrguer" />
        <Picker.Item label="Pastel" value="Pastel" />

      </Picker>

      <Image
        source={retornaImagem()}
        style={estilos.imagem}
      />

      <TextInput
        placeholder="Digite uma observação"
        style={estilos.inputDescricao}
        multiline={true}
        value={descricao}
        onChangeText={setDescricao}
      />

      <TouchableHighlight
        style={estilos.botao}
        onPress={fazerPedido}
      >

        <Text style={estilos.textoBotao}>
          Fazer Pedido
        </Text>

      </TouchableHighlight>

      <Text style={estilos.resultado}>
        {pedido}
      </Text>

    </View>
  );
}

export default Conteudo;