import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

import DecoracoesCantos from "../DecoracoesCantos";

type Props = {
  onVoltar?: () => void;
};

export default function Cadastro({ onVoltar }: Props) {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [confirmarVisivel, setConfirmarVisivel] = useState(false);
  const [aceitou, setAceitou] = useState(false);

  return (
    <View style={styles.container}>

      {/* DECORAÇÕES DOS CANTOS */}
      <DecoracoesCantos tela="cadastro" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >

        {/* BOTÃO VOLTAR */}
        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={onVoltar}
        >
          <Text style={styles.seta}>←</Text>
        </TouchableOpacity>

        {/* LOGO */}
        <View style={styles.logoArea}>
          {/* 
            Se sua arara estiver salva nos assets,
            depois colocamos a imagem aqui.
          */}
          <View style={styles.logoCirculo}>
            <Text style={styles.logoEmoji}>🦜</Text>
          </View>
        </View>

        {/* TÍTULO */}
        <Text style={styles.titulo}>
          Criar <Text style={styles.tituloAzul}>sua conta</Text>
        </Text>

        <Text style={styles.subtitulo}>
          Vamos começar essa jornada{"\n"}juntos! 💙
        </Text>

        {/* NOME */}
        <View style={styles.inputContainer}>
          <Text style={styles.icone}>♙</Text>

          <TextInput
            style={styles.input}
            placeholder="Nome completo"
            placeholderTextColor="#999"
          />
        </View>

        {/* EMAIL */}
        <View style={styles.inputContainer}>
          <Text style={styles.icone}>✉</Text>

          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* SENHA */}
        <View style={styles.inputContainer}>
          <Text style={styles.icone}>🔒</Text>

          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#999"
            secureTextEntry={!senhaVisivel}
          />

          <TouchableOpacity
            onPress={() => setSenhaVisivel(!senhaVisivel)}
          >
            <Text style={styles.olho}>
              {senhaVisivel ? "◉" : "◌"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* CONFIRMAR SENHA */}
        <View style={styles.inputContainer}>
          <Text style={styles.icone}>🔒</Text>

          <TextInput
            style={styles.input}
            placeholder="Confirmar senha"
            placeholderTextColor="#999"
            secureTextEntry={!confirmarVisivel}
          />

          <TouchableOpacity
            onPress={() =>
              setConfirmarVisivel(!confirmarVisivel)
            }
          >
            <Text style={styles.olho}>
              {confirmarVisivel ? "◉" : "◌"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* TERMOS */}
        <TouchableOpacity
          style={styles.termosArea}
          onPress={() => setAceitou(!aceitou)}
        >
          <View
            style={[
              styles.checkbox,
              aceitou && styles.checkboxMarcado,
            ]}
          >
            {aceitou && (
              <Text style={styles.check}>✓</Text>
            )}
          </View>

          <Text style={styles.textoTermos}>
            Li e aceito os{" "}
            <Text style={styles.azul}>Termos de Uso</Text>
            {" e\n"}
            <Text style={styles.azul}>
              Política de Privacidade
            </Text>
          </Text>
        </TouchableOpacity>

        {/* BOTÃO CRIAR CONTA */}
        <TouchableOpacity style={styles.botaoCriar}>
          <Text style={styles.textoBotao}>
            Criar conta
          </Text>

          <View style={styles.circuloSeta}>
            <Text style={styles.setaBotao}>→</Text>
          </View>
        </TouchableOpacity>

        {/* OU */}
        <View style={styles.linhaOu}>
          <View style={styles.linha} />
          <Text style={styles.ou}>ou</Text>
          <View style={styles.linha} />
        </View>

        {/* GOOGLE */}
        <TouchableOpacity style={styles.botaoGoogle}>
          <Text style={styles.google}>G</Text>
          <Text style={styles.textoGoogle}>
            Cadastrar com Google
          </Text>
        </TouchableOpacity>

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
    paddingHorizontal: 28,
    paddingTop: 35,
    paddingBottom: 50,
  },

  botaoVoltar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: "#E0E5EA",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
    backgroundColor: "#FFFFFF",
  },

  seta: {
    fontSize: 28,
    color: "#173563",
    marginTop: -3,
  },

  logoArea: {
    alignItems: "center",
    marginBottom: 12,
  },

  logoCirculo: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 4,
  },

  logoEmoji: {
    fontSize: 42,
  },

  titulo: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "800",
    color: "#172F54",
    marginTop: 8,
  },

  tituloAzul: {
    color: "#2575C5",
  },

  subtitulo: {
    textAlign: "center",
    fontSize: 16,
    color: "#26364A",
    lineHeight: 24,
    marginTop: 10,
    marginBottom: 22,
  },

  inputContainer: {
    height: 60,
    borderWidth: 1,
    borderColor: "#E0E5EA",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 17,
    marginBottom: 14,
    backgroundColor: "#FFFFFF",

    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 2,
  },

  icone: {
    fontSize: 22,
    color: "#172F54",
    width: 35,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: "#222",
  },

  olho: {
    fontSize: 22,
    color: "#172F54",
  },

  termosArea: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 5,
    marginBottom: 22,
  },

  checkbox: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: "#B8C4CE",
    borderRadius: 5,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  checkboxMarcado: {
    backgroundColor: "#173563",
    borderColor: "#173563",
  },

  check: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 17,
  },

  textoTermos: {
    flex: 1,
    fontSize: 14,
    lineHeight: 21,
    color: "#344054",
  },

  azul: {
    color: "#2875BE",
    fontWeight: "600",
  },

  botaoCriar: {
    height: 62,
    borderRadius: 17,
    backgroundColor: "#173563",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  circuloSeta: {
    position: "absolute",
    right: 12,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  setaBotao: {
    color: "#173563",
    fontSize: 23,
    fontWeight: "bold",
  },

  linhaOu: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 22,
  },

  linha: {
    flex: 1,
    height: 1,
    backgroundColor: "#E1E1E1",
  },

  ou: {
    marginHorizontal: 14,
    fontSize: 14,
    color: "#555",
  },

  botaoGoogle: {
    height: 60,
    borderWidth: 1,
    borderColor: "#E0E5EA",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  google: {
    fontSize: 25,
    fontWeight: "800",
    color: "#4285F4",
    marginRight: 15,
  },

  textoGoogle: {
    fontSize: 16,
    color: "#172F54",
    fontWeight: "500",
  },
});