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

export default function Codigo({
  onVoltar,
  onContinuar,
}: Props) {
  const [codigo, setCodigo] = useState("");

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
              Digite o
            </Text>

            <Text style={styles.tituloVermelho}>
              código
            </Text>

            <Text style={styles.subtitulo}>
              Enviamos um código de 6 dígitos para
              confirmar sua identidade.
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
              Código de confirmação
            </Text>

            <Text style={styles.explicacao}>
              Digite abaixo o código que você recebeu.
            </Text>

            {/* CAMPO DO CÓDIGO */}
            <TextInput
              style={styles.inputCodigo}
              placeholder="000000"
              placeholderTextColor="#B7C2CC"
              value={codigo}
              onChangeText={(texto) => {
                const apenasNumeros = texto
                  .replace(/[^0-9]/g, "")
                  .slice(0, 6);

                setCodigo(apenasNumeros);
              }}
              keyboardType="number-pad"
              maxLength={6}
              textAlign="center"
            />

            {/* BOTÃO CONFIRMAR */}
            <TouchableOpacity
              style={styles.botaoConfirmar}
              onPress={onContinuar}
            >
              <Text style={styles.textoBotao}>
                Confirmar código
              </Text>

              <View style={styles.circuloSeta}>
                <Text style={styles.seta}>
                  →
                </Text>
              </View>
            </TouchableOpacity>

            {/* REENVIAR */}
            <View style={styles.reenviarArea}>
              <Text style={styles.naoRecebeu}>
                Não recebeu o código?
              </Text>

              <TouchableOpacity>
                <Text style={styles.reenviar}>
                  Reenviar código
                </Text>
              </TouchableOpacity>
            </View>

            {/* AVISO */}
            <View style={styles.aviso}>
              <Text style={styles.avisoIcone}>
                💡
              </Text>

              <Text style={styles.avisoTexto}>
                Confira também a caixa de spam ou lixo
                eletrônico caso tenha escolhido receber
                o código por e-mail.
              </Text>
            </View>

          </View>

          {/* RODAPÉ */}
          <Text style={styles.rodape}>
            Estamos quase lá! 💙
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
    marginBottom: 20,
  },

  inputCodigo: {
    height: 65,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#D8E5F0",
    fontSize: 27,
    fontWeight: "800",
    letterSpacing: 10,
    color: "#17365F",
    marginBottom: 22,
  },

  botaoConfirmar: {
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

  reenviarArea: {
    alignItems: "center",
    marginTop: 22,
  },

  naoRecebeu: {
    color: "#7A8794",
    fontSize: 13,
  },

  reenviar: {
    color: "#D92B2B",
    fontSize: 14,
    fontWeight: "800",
    marginTop: 5,
  },

  aviso: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 13,
    marginTop: 20,
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