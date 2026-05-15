import React from "react";

import {
  View,
  Text
} from "react-native";

import { estilos } from "../stylesheet/estilos";

function Cabecalho() {

  return (

    <View style={estilos.area_cabecalho}>

      <Text style={estilos.titulo}>
        Lanchonete App
      </Text>

    </View>
  );
}

export default Cabecalho;