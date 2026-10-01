import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import DecoracoesCantos from "../DecoracoesCantos";

type Props = {
  onContinuar: () => void;
};

export default function SenhaAlterada({
  onContinuar,
}: Props) {
  return (
    <View style={styles.container}>
      <DecoracoesCantos tela="login" />

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.conteudo}>

          {/* CARD */}
          <View style={styles.card}>

            {/* DETALHES */}
            <View style={styles.detalheAmarelo} />
            <View style={styles.detalheVermelho} />

            {/* ÍCONE DE SUCESSO */}
            <View style={styles.circuloSucesso}>
              <Text style={styles.check}>
                ✓
              </Text>
            </View>

            {/* TÍTULO */}
            <Text style={styles.titulo}>
              Senha
            </Text>

            <Text style={styles.tituloVermelho}>
              alterada!
            </Text>

            {/* MENSAGEM */}
            <Text style={styles.mensagem}>
              Sua senha foi alterada com sucesso!
            </Text>

            <Text style={styles.subMensagem}>
              Agora você já pode entrar novamente
              na sua conta usando sua nova senha.
            </Text>

            {/* BOTÃO */}
            <TouchableOpacity
              style={styles.botaoContinuar}
              onPress={onContinuar}
            >
              <Text style={styles.textoBotao}>
                Ir para o login
              </Text>

              <View style={styles.circuloSeta}>
                <Text style={styles.seta}>
                  →
                </Text>
              </View>
            </TouchableOpacity>

          </View>

          {/* RODAPÉ */}
          <Text style={styles.rodape}>
            Que bom ter você de volta! 💙
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
    justifyContent: "center",
    paddingHorizontal: 25,
    paddingVertical: 30,
  },

  conteudo: {
    width: "100%",
    maxWidth: 500,
    alignSelf: "center",
    zIndex: 2,
  },

  card: {
    backgroundColor: "#F2F7FC",
    borderRadius: 28,
    padding: 30,
    paddingTop: 40,
    paddingBottom: 35,
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
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: "#F5B719",
    right: -18,
    top: -18,
  },

  detalheVermelho: {
    position: "absolute",
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#D92B2B",
    left: -10,
    bottom: 90,
  },

  circuloSucesso: {
    width: 95,
    height: 95,
    borderRadius: 48,
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
    borderWidth: 3,
    borderColor: "#F5B719",
  },

  check: {
    fontSize: 55,
    color: "#17365F",
    fontWeight: "800",
  },

  titulo: {
    textAlign: "center",
    fontSize: 31,
    fontWeight: "800",
    color: "#17365F",
  },

  tituloVermelho: {
    textAlign: "center",
    fontFamily: "Britini",
    fontSize: 48,
    color: "#D92B2B",
    marginTop: -7,
  },

  mensagem: {
    textAlign: "center",
    color: "#17365F",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 20,
  },

  subMensagem: {
    textAlign: "center",
    color: "#71808E",
    fontSize: 13,
    lineHeight: 20,
    marginTop: 8,
    marginBottom: 28,
  },

  botaoContinuar: {
    height: 55,
    borderRadius: 17,
    backgroundColor: "#17365F",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  textoBotao: {
    color: "#FFFFFF",
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

  rodape: {
    textAlign: "center",
    color: "#17365F",
    fontSize: 13,
    marginTop: 25,
  },
});