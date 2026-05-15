import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({

  area_fundo: {
    flex: 1,
    backgroundColor: "#f5e8a3",
    alignItems: "center",
    paddingTop: 40,
  },

  area_cabecalho: {
    marginBottom: 30,
  },

  titulo: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#5e2b00",
  },

  area_conteudo: {
    width: "90%",
    alignItems: "center",
  },

  texto: {
    alignSelf: "flex-start",
    fontSize: 22,
    marginBottom: 10,
    color: "#5e2b00",
  },

  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
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
    width: 140,
    height: 140,
    marginBottom: 25,
  },

  inputDescricao: {
    width: "100%",
    height: 100,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 25,
    fontSize: 18,
    textAlignVertical: "top",
  },

  botao: {
    backgroundColor: "#4CAF50",
    width: 180,
    padding: 18,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 30,
  },

  textoBotao: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  resultado: {
    fontSize: 22,
    textAlign: "center",
    color: "#000",
  },

});