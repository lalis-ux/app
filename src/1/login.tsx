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
  onCadastro?: () => void;
  onEsqueceuSenha?: () => void;
  onEntrar?: () => void;
};

export default function Login({
  onCadastro,
  onEsqueceuSenha,
  onEntrar,
}: Props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <View style={styles.container}>
      <DecoracoesCantos />

      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.conteudo}>
          <Text style={styles.logo}>
            Núcleo<Text style={styles.logoVital}>Vital</Text>
          </Text>

          <Text style={styles.titulo}>Bem-vindo(a) de volta!</Text>

          <Text style={styles.subtitulo}>
            Entre na sua conta para continuar 💙
          </Text>

          <View style={styles.divisor}>
            <Text style={styles.coracao}>♥</Text>
          </View>

          <Text style={styles.label}>E-mail</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.icone}>✉</Text>

            <TextInput
              style={styles.input}
              placeholder="Digite seu e-mail"
              placeholderTextColor="#888"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <Text style={styles.label}>Senha</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.icone}>🔒</Text>

            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              placeholderTextColor="#888"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={!mostrarSenha}
            />

            <TouchableOpacity
              onPress={() => setMostrarSenha(!mostrarSenha)}
            >
              <Text style={styles.mostrar}>
                {mostrarSenha ? "Ocultar" : "Mostrar"}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.esqueceu}
            onPress={onEsqueceuSenha}
          >
            <Text style={styles.esqueceuTexto}>
              Esqueci minha senha
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoEntrar}
            onPress={onEntrar}
          >
            <Text style={styles.textoBotao}>ENTRAR</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.google}>
            <Text style={styles.googleTexto}>
              Continuar com Google
            </Text>
          </TouchableOpacity>

          <View style={styles.cadastroArea}>
            <Text style={styles.naoTem}>
              Ainda não tem uma conta?
            </Text>

            <TouchableOpacity onPress={onCadastro}>
              <Text style={styles.cadastroTexto}>
                Criar minha conta
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.missao}>
            Seu bem-estar, nossa missão. 💙
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
    paddingVertical: 40,
  },

  conteudo: {
    width: "90%",
    maxWidth: 450,
    alignSelf: "center",
  },

  logo: {
    fontSize: 38,
    fontWeight: "700",
    color: "#111111",
    textAlign: "center",
    marginBottom: 20,
  },

  logoVital: {
    color: "#D92B2B",
    fontStyle: "italic",
  },

  titulo: {
    fontSize: 25,
    fontWeight: "700",
    color: "#17365F",
    textAlign: "center",
  },

  subtitulo: {
    fontSize: 15,
    color: "#666666",
    textAlign: "center",
    marginTop: 8,
  },

  divisor: {
    alignItems: "center",
    marginVertical: 20,
  },

  coracao: {
    fontSize: 22,
    color: "#D92B2B",
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#17365F",
    marginBottom: 7,
    marginTop: 10,
  },

  inputContainer: {
    height: 52,
    borderWidth: 1,
    borderColor: "#D5D5D5",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    backgroundColor: "#FFFFFF",
  },

  icone: {
    fontSize: 18,
    marginRight: 8,
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: "#222222",
  },

  mostrar: {
    color: "#17365F",
    fontSize: 12,
    fontWeight: "600",
  },

  esqueceu: {
    alignSelf: "flex-end",
    marginTop: 10,
  },

  esqueceuTexto: {
    color: "#D92B2B",
    fontWeight: "600",
  },

  botaoEntrar: {
    height: 52,
    backgroundColor: "#17365F",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  google: {
    height: 52,
    borderWidth: 1,
    borderColor: "#D5D5D5",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },

  googleTexto: {
    color: "#17365F",
    fontWeight: "600",
  },

  cadastroArea: {
    alignItems: "center",
    marginTop: 25,
  },

  naoTem: {
    color: "#666666",
    marginBottom: 5,
  },

  cadastroTexto: {
    color: "#D92B2B",
    fontWeight: "700",
  },

  missao: {
    textAlign: "center",
    marginTop: 25,
    color: "#17365F",
    fontSize: 13,
  },
});