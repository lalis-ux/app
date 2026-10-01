import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import DecoracoesCantos from "../DecoracoesCantos";

type Props = {
  onContinuar?: (nome: string, idade: number) => void;
};

export default function BoasVindas({ onContinuar }: Props) {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");

  const continuar = () => {
    const idadeNumero = Number(idade);

    if (nome.trim() === "") {
      return;
    }

    if (!idade || idadeNumero <= 0) {
      return;
    }

    onContinuar?.(nome.trim(), idadeNumero);
  };

  const preenchido =
    nome.trim().length > 0 && idade.length > 0;

  return (
    <View style={styles.container}>
      <DecoracoesCantos />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={
          Platform.OS === "ios"
            ? "padding"
            : undefined
        }
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.conteudo}>

            <View style={styles.iconeArea}>
              <Text style={styles.icone}>🦜</Text>
            </View>

            <Text style={styles.titulo}>
              Vamos começar! 💙
            </Text>

            <Text style={styles.subtitulo}>
              Antes de entrar no seu Núcleo Vital,
              queremos conhecer você um pouquinho.
            </Text>

            <View style={styles.progresso}>
              <View style={styles.progressoAtivo} />
              <View style={styles.progressoVazio} />
              <View style={styles.progressoVazio} />
            </View>

            <Text style={styles.pergunta}>
              Como você quer ser chamada?
            </Text>

            <Text style={styles.explicacao}>
              Pode ser seu nome ou apelido.
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Ex.: Nicoly"
              placeholderTextColor="#999"
              value={nome}
              onChangeText={setNome}
              maxLength={30}
            />

            <Text style={styles.pergunta}>
              Qual é a sua idade?
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Ex.: 18"
              placeholderTextColor="#999"
              value={idade}
              onChangeText={setIdade}
              keyboardType="numeric"
              maxLength={3}
            />

            <TouchableOpacity
              style={[
                styles.botao,
                !preenchido && styles.botaoDesativado,
              ]}
              onPress={continuar}
              disabled={!preenchido}
            >
              <Text style={styles.textoBotao}>
                CONTINUAR
              </Text>

              <Text style={styles.seta}>
                →
              </Text>
            </TouchableOpacity>

            <Text style={styles.rodape}>
              Seu bem-estar, nossa missão. 💙
            </Text>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  flex: {
    flex: 1,
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

  iconeArea: {
    width: 85,
    height: 85,
    borderRadius: 25,
    backgroundColor: "#FFF1B8",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 18,
  },

  icone: {
    fontSize: 48,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "800",
    color: "#17365F",
    textAlign: "center",
  },

  subtitulo: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
    marginTop: 10,
    paddingHorizontal: 15,
  },

  progresso: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    marginTop: 25,
    marginBottom: 20,
  },

  progressoAtivo: {
    width: 45,
    height: 6,
    borderRadius: 10,
    backgroundColor: "#D92B2B",
  },

  progressoVazio: {
    width: 15,
    height: 6,
    borderRadius: 10,
    backgroundColor: "#D9E4EF",
  },

  pergunta: {
    fontSize: 18,
    fontWeight: "700",
    color: "#17365F",
    marginTop: 18,
    marginBottom: 5,
  },

  explicacao: {
    fontSize: 13,
    color: "#777",
    marginBottom: 9,
  },

  input: {
    height: 54,
    borderWidth: 1.5,
    borderColor: "#D5DDE5",
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#17365F",
    backgroundColor: "#FAFCFF",
  },

  botao: {
    height: 55,
    borderRadius: 16,
    backgroundColor: "#17365F",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },

  botaoDesativado: {
    backgroundColor: "#AAB8C7",
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },

  seta: {
    color: "#FFFFFF",
    fontSize: 22,
    marginLeft: 12,
  },

  rodape: {
    textAlign: "center",
    color: "#17365F",
    fontSize: 13,
    marginTop: 25,
  },
});