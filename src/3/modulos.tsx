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

type Modulo =
  | "academia"
  | "menstruacao"
  | "gestacao";

type Props = {
  perfil?: Perfil;
  onContinuar?: (modulos: Modulo[]) => void;
};

export default function Modulos({
  perfil = "outro",
  onContinuar,
}: Props) {
  const [selecionados, setSelecionados] =
    useState<Modulo[]>([]);

  const selecionar = (modulo: Modulo) => {
    if (selecionados.includes(modulo)) {
      setSelecionados(
        selecionados.filter((item) => item !== modulo)
      );
      return;
    }

    if (selecionados.length >= 2) {
      return;
    }

    setSelecionados([
      ...selecionados,
      modulo,
    ]);
  };

  const continuar = () => {
    onContinuar?.(selecionados);
  };

  return (
    <View style={styles.container}>
      <DecoracoesCantos />

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.conteudo}>

          <Text style={styles.emoji}>🦜</Text>

          <Text style={styles.titulo}>
            Vamos personalizar seu Núcleo Vital
          </Text>

          <Text style={styles.subtitulo}>
            Escolha até 2 opções que você gostaria
            de acompanhar no aplicativo.
          </Text>

          <View style={styles.aviso}>
            <Text style={styles.avisoTexto}>
              Você pode escolher até 2 módulos.
            </Text>
          </View>

          {/* ACADEMIA */}

          <TouchableOpacity
            style={[
              styles.card,
              styles.academia,
              selecionados.includes("academia") &&
                styles.selecionadoAcademia,
            ]}
            onPress={() => selecionar("academia")}
          >
            <View style={styles.icone}>
              <Text style={styles.iconeTexto}>🏋️</Text>
            </View>

            <View style={styles.textos}>
              <Text style={styles.cardTitulo}>
                Academia
              </Text>

              <Text style={styles.cardDescricao}>
                Objetivos, peso, regiões do corpo
                e rotina de treino personalizada.
              </Text>
            </View>

            <View
              style={[
                styles.checkbox,
                selecionados.includes("academia") &&
                  styles.checkboxAtivo,
              ]}
            >
              {selecionados.includes("academia") && (
                <Text style={styles.check}>✓</Text>
              )}
            </View>
          </TouchableOpacity>

          {/* MENSTRUAÇÃO */}

          <TouchableOpacity
            style={[
              styles.card,
              styles.menstruacao,
              selecionados.includes("menstruacao") &&
                styles.selecionadoMenstruacao,
            ]}
            onPress={() => selecionar("menstruacao")}
          >
            <View style={styles.icone}>
              <Text style={styles.iconeTexto}>🌸</Text>
            </View>

            <View style={styles.textos}>
              <Text style={styles.cardTitulo}>
                Menstruação
              </Text>

              <Text style={styles.cardDescricao}>
                Ciclo, fluxo, sintomas, registros
                e previsão do próximo ciclo.
              </Text>
            </View>

            <View
              style={[
                styles.checkbox,
                selecionados.includes("menstruacao") &&
                  styles.checkboxAtivo,
              ]}
            >
              {selecionados.includes("menstruacao") && (
                <Text style={styles.check}>✓</Text>
              )}
            </View>
          </TouchableOpacity>

          {/* GESTAÇÃO */}

          <TouchableOpacity
            style={[
              styles.card,
              styles.gestacao,
              selecionados.includes("gestacao") &&
                styles.selecionadoGestacao,
            ]}
            onPress={() => selecionar("gestacao")}
          >
            <View style={styles.icone}>
              <Text style={styles.iconeTexto}>🤰</Text>
            </View>

            <View style={styles.textos}>
              <Text style={styles.cardTitulo}>
                Gestação
              </Text>

              <Text style={styles.cardDescricao}>
                Acompanhamento da gestação,
                bebê, consultas e desenvolvimento.
              </Text>
            </View>

            <View
              style={[
                styles.checkbox,
                selecionados.includes("gestacao") &&
                  styles.checkboxAtivo,
              ]}
            >
              {selecionados.includes("gestacao") && (
                <Text style={styles.check}>✓</Text>
              )}
            </View>
          </TouchableOpacity>

          <Text style={styles.contador}>
            {selecionados.length}/2 selecionados
          </Text>

          <TouchableOpacity
            style={[
              styles.botao,
              selecionados.length === 0 &&
                styles.botaoDesativado,
            ]}
            onPress={continuar}
            disabled={selecionados.length === 0}
          >
            <Text style={styles.textoBotao}>
              CONTINUAR
            </Text>

            <Text style={styles.seta}>
              →
            </Text>
          </TouchableOpacity>

          <Text style={styles.essenciais}>
            E algumas funções estarão sempre com você 💙
          </Text>

          <View style={styles.funcoes}>
            <View style={styles.funcao}>
              <Text style={styles.funcaoEmoji}>💧</Text>
              <Text style={styles.funcaoTexto}>Água</Text>
            </View>

            <View style={styles.funcao}>
              <Text style={styles.funcaoEmoji}>💩</Text>
              <Text style={styles.funcaoTexto}>
                Intestino
              </Text>
            </View>

            <View style={styles.funcao}>
              <Text style={styles.funcaoEmoji}>📅</Text>
              <Text style={styles.funcaoTexto}>
                Calendário
              </Text>
            </View>

            <View style={styles.funcao}>
              <Text style={styles.funcaoEmoji}>📖</Text>
              <Text style={styles.funcaoTexto}>
                Diário
              </Text>
            </View>

            <View style={styles.funcao}>
              <Text style={styles.funcaoEmoji}>🦜</Text>
              <Text style={styles.funcaoTexto}>
                Ararinho
              </Text>
            </View>
          </View>

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
    paddingVertical: 35,
  },

  conteudo: {
    width: "90%",
    maxWidth: 470,
    alignSelf: "center",
  },

  emoji: {
    fontSize: 45,
    textAlign: "center",
  },

  titulo: {
    fontSize: 27,
    fontWeight: "800",
    color: "#17365F",
    textAlign: "center",
    marginTop: 10,
  },

  subtitulo: {
    color: "#666",
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
    marginTop: 8,
  },

  aviso: {
    backgroundColor: "#FFF8D9",
    borderRadius: 14,
    padding: 12,
    marginTop: 20,
    marginBottom: 15,
  },

  avisoTexto: {
    textAlign: "center",
    color: "#806A00",
    fontWeight: "600",
  },

  card: {
    minHeight: 125,
    borderRadius: 22,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    borderWidth: 1.5,
  },

  academia: {
    backgroundColor: "#FFF7D6",
    borderColor: "#E7CC55",
  },

  menstruacao: {
    backgroundColor: "#FFF0F5",
    borderColor: "#F0B8CA",
  },

  gestacao: {
    backgroundColor: "#F0ECFF",
    borderColor: "#C8B8F5",
  },

  selecionadoAcademia: {
    borderWidth: 3,
    borderColor: "#E0B400",
  },

  selecionadoMenstruacao: {
    borderWidth: 3,
    borderColor: "#D92B2B",
  },

  selecionadoGestacao: {
    borderWidth: 3,
    borderColor: "#7048D9",
  },

  icone: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  iconeTexto: {
    fontSize: 30,
  },

  textos: {
    flex: 1,
    paddingHorizontal: 12,
  },

  cardTitulo: {
    fontSize: 18,
    fontWeight: "800",
    color: "#17365F",
  },

  cardDescricao: {
    fontSize: 13,
    lineHeight: 18,
    color: "#666",
    marginTop: 4,
  },

  checkbox: {
    width: 26,
    height: 26,
    borderWidth: 2,
    borderColor: "#AAB8C7",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  checkboxAtivo: {
    backgroundColor: "#17365F",
    borderColor: "#17365F",
  },

  check: {
    color: "#FFFFFF",
    fontWeight: "900",
  },

  contador: {
    textAlign: "center",
    color: "#17365F",
    fontWeight: "700",
    marginTop: 5,
  },

  botao: {
    height: 55,
    backgroundColor: "#17365F",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 20,
  },

  botaoDesativado: {
    backgroundColor: "#AAB8C7",
  },

  textoBotao: {
    color: "#FFFFFF",
    fontWeight: "800",
  },

  seta: {
    color: "#FFFFFF",
    fontSize: 22,
    marginLeft: 12,
  },

  essenciais: {
    textAlign: "center",
    color: "#17365F",
    fontWeight: "700",
    marginTop: 25,
    marginBottom: 12,
  },

  funcoes: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },

  funcao: {
    width: 85,
    minHeight: 75,
    borderRadius: 16,
    backgroundColor: "#F3F7FA",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },

  funcaoEmoji: {
    fontSize: 24,
  },

  funcaoTexto: {
    color: "#17365F",
    fontSize: 11,
    fontWeight: "700",
    marginTop: 4,
  },
});