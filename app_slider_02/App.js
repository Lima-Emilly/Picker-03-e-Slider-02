import React from "react";

import { View } from "react-native";

import Cabecalho from "./src/componentes/Cabecalho";
import Conteudo from "./src/componentes/Conteudo";

import { estilos } from "./src/stylesheet/estilos";

function App() {

  return (

    <View style={estilos.area_fundo}>

      <Cabecalho />

      <Conteudo />

    </View>
  );
}

export default App;