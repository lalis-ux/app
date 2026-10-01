import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import DecoracoesCantos from "../DecoracoesCantos";

type Props = {
  onVoltar: () => void;
  onContinuar: () => void;
};

export default function RecuperarSenha({
  onVoltar,
  onContinuar,
}: Props) {
  const [contato, setContato] = useState("");

  return (
    <View style={styles.container}>
      <DecoracoesCantos tela="login" />

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.conteudo}>

          {/* BOTÃO VOLTAR */}
          <TouchableOpacity
            style={styles.botaoVoltar}
            onPress={onVoltar}
          >
            <Text style={styles.setaVoltar}>←</Text>
            <Text style={styles.textoVoltar}>Voltar</Text>
          </TouchableOpacity>

          {/* TÍTULO */}
          <View style={styles.tituloArea}>
            <Text style={styles.titulo}>
              Recuperar
            </Text>

            <Text style={styles.tituloVermelho}>
              senha
            </Text>

            <Text style={styles.subtitulo}>
              Não se preocupe! Vamos ajudar você
              a recuperar o acesso à sua conta.
            </Text>
          </View>

          {/* CARD */}
          <View style={styles.card}>

            {/* DETALHES */}
            <View style={styles.detalheAmarelo} />
            <View style={styles.detalheVermelho} />

            {/* ÍCONE */}
            <View style={styles.iconeCirculo}>
              <Text style={styles.icone}>
                🔐
              </Text>
            </View>

            <Text style={styles.pergunta}>
              Como deseja recuperar sua senha?
            </Text>

            <Text style={styles.explicacao}>
              Digite seu e-mail ou número de celular
              cadastrado para receber um código.
            </Text>

            {/* CAMPO */}
            <Text style={styles.label}>
              E-mail ou celular
            </Text>

            <View style={styles.inputContainer}>
              <Text style={styles.inputIcone}>
                ✉
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Digite seu e-mail ou celular"
                placeholderTextColor="#9BA8B5"
                value={contato}
                onChangeText={setContato}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* BOTÃO */}
            <TouchableOpacity
              style={styles.botaoEnviar}
              onPress={onContinuar}
            >
              <Text style={styles.textoBotao}>
                Enviar código
              </Text>

              <View style={styles.circuloSeta}>
                <Text style={styles.seta}>
                  →
                </Text>
              </View>
            </TouchableOpacity>

            {/* AVISO */}
            <View style={styles.aviso}>
              <Text style={styles.avisoIcone}>
                💡
              </Text>

              <Text style={styles.avisoTexto}>
                Você receberá um código para confirmar
                sua identidade e criar uma nova senha.
              </Text>
            </View>

          </View>

          {/* RODAPÉ */}
          <Text style={styles.rodape}>
            Estamos aqui para ajudar você. 💙
          </Text>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  scroll: {
    flexGrow: 1,
    paddingHorizontal: 25,
    paddingVertical: 30,
  },

  conteudo: {
    width: "100%",
    maxWidth: 500,
    alignSelf: "center",
    zIndex: 2,
  },

  botaoVoltar: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 25,
  },

  setaVoltar: {
    fontSize: 27,
    color: "#17365F",
    marginRight: 7,
    fontWeight: "600",
  },

  textoVoltar: {
    fontSize: 14,
    color: "#17365F",
    fontWeight: "700",
  },

  tituloArea: {
    alignItems: "center",
    marginBottom: 28,
  },

  titulo: {
    fontSize: 31,
    fontWeight: "800",
    color: "#17365F",
  },

  tituloVermelho: {
    fontFamily: "Britini",
    fontSize: 48,
    color: "#D92B2B",
    marginTop: -8,
  },

  subtitulo: {
    fontSize: 14,
    color: "#667788",
    textAlign: "center",
    lineHeight: 21,
    marginTop: 7,
    maxWidth: 350,
  },

  card: {
    backgroundColor: "#F2F7FC",
    borderRadius: 28,
    padding: 25,
    paddingTop: 30,
    overflow: "hidden",

    shadowColor: "#17365F",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.12,
    shadowRadius: 12,

    elevation: 5,
  },

  detalheAmarelo: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#F5B719",
    right: -17,
    top: -17,
  },

  detalheVermelho: {
    position: "absolute",
    width: 27,
    height: 27,
    borderRadius: 14,
    backgroundColor: "#D92B2B",
    left: -10,
    bottom: 80,
  },

  iconeCirculo: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },

  icone: {
    fontSize: 30,
  },

  pergunta: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "800",
    color: "#17365F",
    marginBottom: 8,
  },

  explicacao: {
    textAlign: "center",
    color: "#71808E",
    fontSize: 13,
    lineHeight: 19,
    marginBottom: 23,
  },

  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#17365F",
    marginBottom: 7,
  },

  inputContainer: {
    height: 54,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#D8E5F0",
    marginBottom: 22,
  },

  inputIcone: {
    fontSize: 18,
    marginRight: 10,
  },

  input: {
    flex: 1,
    height: "100%",
    fontSize: 14,
    color: "#17365F",
  },

  botaoEnviar: {
    height: 55,
    borderRadius: 17,
    backgroundColor: "#F5B719",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  textoBotao: {
    color: "#17365F",
    fontSize: 16,
    fontWeight: "800",
  },

  circuloSeta: {
    position: "absolute",
    right: 13,
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  seta: {
    color: "#17365F",
    fontSize: 22,
    fontWeight: "700",
  },

  aviso: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 13,
    marginTop: 18,
  },

  avisoIcone: {
    fontSize: 18,
    marginRight: 9,
  },

  avisoTexto: {
    flex: 1,
    fontSize: 12,
    color: "#71808E",
    lineHeight: 18,
  },

  rodape: {
    textAlign: "center",
    color: "#17365F",
    fontSize: 13,
    marginTop: 25,
  },
});