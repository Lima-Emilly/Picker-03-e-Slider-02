import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({

  area_fundo: {
    flex: 1,
    backgroundColor: "#87CEEB",
    alignItems: "center",
    paddingTop: 40,
  },

  area_cabecalho: {
    marginBottom: 20,
  },

  titulo: {
    fontSize: 34,
    color: "#111",
  },

  area_conteudo: {
    width: "90%",
    alignItems: "center",
  },

  texto: {
    alignSelf: "flex-start",
    fontSize: 22,
    marginBottom: 10,
    color: "#222",
  },

  input: {
    width: "100%",
    height: 55,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#c2185b",
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 25,
    fontSize: 20,
  },

  picker: {
    width: "100%",
    height: 60,
    backgroundColor: "#fff",
    marginBottom: 25,
  },

  imagem: {
    width: 150,
    height: 150,
    marginBottom: 30,
    resizeMode: "contain",
  },

  slider: {
    width: "100%",
    height: 40,
    marginBottom: 25,
  },

  inputComentario: {
    width: "100%",
    height: 120,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#c2185b",
    borderRadius: 8,
    padding: 10,
    fontSize: 20,
    marginBottom: 25,
    textAlignVertical: "top",
  },

  botao: {
    backgroundColor: "#ff5722",
    width: 140,
    padding: 18,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 25,
  },

  textoBotao: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  resultado: {
    fontSize: 22,
    textAlign: "center",
    color: "#111",
  },

});