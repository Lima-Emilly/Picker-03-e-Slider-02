import React from "react";
import { View } from "react-native";

import { estilos } from "./src/stylesheet/estilos";

import Cabecalho from "./src/componentes/Cabecalho";
import Conteudo from "./src/componentes/Conteudo";

export default function App() {

  return (

    <View style={estilos.area_fundo}>

      <Cabecalho />

      <Conteudo />

    </View>
  );
}