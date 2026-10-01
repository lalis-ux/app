import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import DecoracoesCantos from "../DecoracoesCantos";

type Perfil = "mulher" | "homem" | "outro";

type Props = {
  onContinuar?: (perfil: Perfil) => void;
};

export default function EscolhaPerfil({
  onContinuar,
}: Props) {
  const [perfil, setPerfil] = useState<Perfil | null>(null);

  const continuar = () => {
    if (!perfil) {
      return;
    }

    onContinuar?.(perfil);
  };

  return (
    <View style={styles.container}>
      <DecoracoesCantos />

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.conteudo}>

          <Text style={styles.emoji}>🦜</Text>

          <Text style={styles.titulo}>
            Qual é o seu perfil?
          </Text>

          <Text style={styles.subtitulo}>
            Isso ajuda o Núcleo Vital a personalizar
            sua experiência.
          </Text>

          <View style={styles.progresso}>
            <View style={styles.concluido} />
            <View style={styles.ativo} />
            <View style={styles.vazio} />
          </View>

          <TouchableOpacity
            style={[
              styles.card,
              styles.cardRosa,
              perfil === "mulher" && styles.selecionadoRosa,
            ]}
            onPress={() => setPerfil("mulher")}
          >
            <Text style={styles.cardEmoji}>♀️</Text>

            <View style={styles.cardTexto}>
              <Text style={styles.cardTitulo}>
                Mulher
              </Text>

              <Text style={styles.cardDescricao}>
                Menstruação, gestação, academia
                e bem-estar.
              </Text>
            </View>

            <Text style={styles.seta}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.card,
              styles.cardAzul,
              perfil === "homem" && styles.selecionadoAzul,
            ]}
            onPress={() => setPerfil("homem")}
          >
            <Text style={styles.cardEmoji}>♂️</Text>

            <View style={styles.cardTexto}>
              <Text style={styles.cardTitulo}>
                Homem
              </Text>

              <Text style={styles.cardDescricao}>
                Academia, saúde e bem-estar.
              </Text>
            </View>

            <Text style={styles.seta}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.card,
              styles.cardAmarelo,
              perfil === "outro" &&
                styles.selecionadoAmarelo,
            ]}
            onPress={() => setPerfil("outro")}
          >
            <Text style={styles.cardEmoji}>👤</Text>

            <View style={styles.cardTexto}>
              <Text style={styles.cardTitulo}>
                Outro
              </Text>

              <Text style={styles.cardDescricao}>
                Sua rotina, do seu jeito.
              </Text>
            </View>

            <Text style={styles.seta}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.botao,
              !perfil && styles.botaoDesativado,
            ]}
            onPress={continuar}
            disabled={!perfil}
          >
            <Text style={styles.textoBotao}>
              CONTINUAR
            </Text>

            <Text style={styles.setaBotao}>
              →
            </Text>
          </TouchableOpacity>

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
    paddingVertical: 40,
  },

  conteudo: {
    width: "90%",
    maxWidth: 450,
    alignSelf: "center",
  },

  emoji: {
    fontSize: 48,
    textAlign: "center",
    marginBottom: 10,
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
    marginTop: 8,
  },

  progresso: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
    marginVertical: 25,
  },

  concluido: {
    width: 15,
    height: 6,
    borderRadius: 10,
    backgroundColor: "#D92B2B",
  },

  ativo: {
    width: 45,
    height: 6,
    borderRadius: 10,
    backgroundColor: "#D92B2B",
  },

  vazio: {
    width: 15,
    height: 6,
    borderRadius: 10,
    backgroundColor: "#D9E4EF",
  },

  card: {
    minHeight: 115,
    borderRadius: 22,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    borderWidth: 1.5,
  },

  cardRosa: {
    backgroundColor: "#FFF0F5",
    borderColor: "#F5B8CC",
  },

  cardAzul: {
    backgroundColor: "#EAF5FF",
    borderColor: "#B5D9F5",
  },

  cardAmarelo: {
    backgroundColor: "#FFF8D9",
    borderColor: "#F0D66B",
  },

  selecionadoRosa: {
    borderWidth: 3,
    borderColor: "#D92B2B",
  },

  selecionadoAzul: {
    borderWidth: 3,
    borderColor: "#17365F",
  },

  selecionadoAmarelo: {
    borderWidth: 3,
    borderColor: "#E0B400",
  },

  cardEmoji: {
    fontSize: 38,
    width: 55,
  },

  cardTexto: {
    flex: 1,
    paddingHorizontal: 8,
  },

  cardTitulo: {
    fontSize: 19,
    fontWeight: "800",
    color: "#17365F",
  },

  cardDescricao: {
    fontSize: 13,
    color: "#666",
    lineHeight: 18,
    marginTop: 4,
  },

  seta: {
    fontSize: 28,
    color: "#17365F",
  },

  botao: {
    height: 55,
    backgroundColor: "#17365F",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 15,
  },

  botaoDesativado: {
    backgroundColor: "#AAB8C7",
  },

  textoBotao: {
    color: "#FFFFFF",
    fontWeight: "800",
  },

  setaBotao: {
    color: "#FFFFFF",
    fontSize: 22,
    marginLeft: 12,
  },
});