import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import DecoracoesCantos from "../DecoracoesCantos";

type Perfil =
  | "mulher"
  | "homem"
  | "outro";

type Modulo =
  | "academia"
  | "menstruacao"
  | "gestacao";

type Props = {
  nome?: string;
  idade?: number;
  perfil?: Perfil;
  modulosSelecionados?: Modulo[];
  onModulos?: () => void;
};

export default function Inicio({
  nome = "você",
  idade,
  modulosSelecionados = [],
  onModulos,
}: Props) {
  return (
    <View style={styles.container}>
      <DecoracoesCantos />

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.conteudo}>

          <View style={styles.cabecalho}>
            <View>
              <Text style={styles.ola}>
                Olá, {nome}! 💙
              </Text>

              <Text style={styles.subtitulo}>
                Que bom ter você aqui!
              </Text>
            </View>

            <View style={styles.perfilIcone}>
              <Text style={styles.perfilEmoji}>
                👤
              </Text>
            </View>
          </View>

          {/* ARARINHO */}

          <TouchableOpacity style={styles.ararinhoCard}>
            <View style={styles.ararinhoImagem}>
              <Text style={styles.ararinhoEmoji}>
                🦜
              </Text>
            </View>

            <View style={styles.ararinhoTexto}>
              <Text style={styles.ararinhoTitulo}>
                Ararinho
              </Text>

              <Text style={styles.ararinhoDescricao}>
                Estou aqui para te ajudar no seu dia. 💙
              </Text>

              <Text style={styles.ararinhoLink}>
                Toque para conversar comigo →
              </Text>
            </View>
          </TouchableOpacity>

          {/* CALENDÁRIO */}

          <TouchableOpacity style={styles.calendarioCard}>
            <View style={styles.iconeGrande}>
              <Text style={styles.iconeTexto}>
                📅
              </Text>
            </View>

            <View style={styles.cardTexto}>
              <Text style={styles.cardTitulo}>
                Seu calendário
              </Text>

              <Text style={styles.cardDescricao}>
                Consultas, exames, treinos e lembretes
                organizados em um só lugar.
              </Text>
            </View>
          </TouchableOpacity>

          {/* MÓDULOS */}

          <View style={styles.tituloArea}>
            <Text style={styles.tituloSecao}>
              Seu Núcleo Vital
            </Text>

            <TouchableOpacity onPress={onModulos}>
              <Text style={styles.verTodos}>
                Ver módulos →
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>

            {modulosSelecionados.includes(
              "menstruacao"
            ) && (
              <TouchableOpacity
                style={[
                  styles.modulo,
                  styles.rosa,
                ]}
              >
                <Text style={styles.moduloEmoji}>
                  🌸
                </Text>

                <Text style={styles.moduloTitulo}>
                  Menstruação
                </Text>

                <Text style={styles.moduloDescricao}>
                  Acompanhe seu ciclo
                </Text>
              </TouchableOpacity>
            )}

            {modulosSelecionados.includes(
              "academia"
            ) && (
              <TouchableOpacity
                style={[
                  styles.modulo,
                  styles.amarelo,
                ]}
              >
                <Text style={styles.moduloEmoji}>
                  🏋️
                </Text>

                <Text style={styles.moduloTitulo}>
                  Academia
                </Text>

                <Text style={styles.moduloDescricao}>
                  Cuide dos seus objetivos
                </Text>
              </TouchableOpacity>
            )}

            {modulosSelecionados.includes(
              "gestacao"
            ) && (
              <TouchableOpacity
                style={[
                  styles.modulo,
                  styles.lilas,
                ]}
              >
                <Text style={styles.moduloEmoji}>
                  🤰
                </Text>

                <Text style={styles.moduloTitulo}>
                  Gestação
                </Text>

                <Text style={styles.moduloDescricao}>
                  Acompanhe o bebê
                </Text>
              </TouchableOpacity>
            )}

          </View>

          {/* FUNÇÕES FIXAS */}

          <Text style={styles.tituloSecao}>
            Funções essenciais
          </Text>

          <View style={styles.funcoes}>

            <TouchableOpacity
              style={styles.funcao}
            >
              <Text style={styles.funcaoEmoji}>
                💧
              </Text>

              <Text style={styles.funcaoTitulo}>
                Água
              </Text>

              <Text style={styles.funcaoDescricao}>
                Registrar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.funcao}
            >
              <Text style={styles.funcaoEmoji}>
                💩
              </Text>

              <Text style={styles.funcaoTitulo}>
                Intestino
              </Text>

              <Text style={styles.funcaoDescricao}>
                Registrar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.funcao}
            >
              <Text style={styles.funcaoEmoji}>
                📅
              </Text>

              <Text style={styles.funcaoTitulo}>
                Calendário
              </Text>

              <Text style={styles.funcaoDescricao}>
                Ver hoje
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.funcao}
            >
              <Text style={styles.funcaoEmoji}>
                📖
              </Text>

              <Text style={styles.funcaoTitulo}>
                Diário
              </Text>

              <Text style={styles.funcaoDescricao}>
                Escrever
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.funcao}
            >
              <Text style={styles.funcaoEmoji}>
                🦜
              </Text>

              <Text style={styles.funcaoTitulo}>
                Ararinho
              </Text>

              <Text style={styles.funcaoDescricao}>
                Conversar
              </Text>
            </TouchableOpacity>

          </View>

          <Text style={styles.rodape}>
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
    paddingVertical: 25,
    paddingBottom: 50,
  },

  conteudo: {
    width: "90%",
    maxWidth: 900,
    alignSelf: "center",
  },

  cabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  ola: {
    fontSize: 29,
    fontWeight: "800",
    color: "#17365F",
  },

  subtitulo: {
    color: "#777",
    fontSize: 15,
    marginTop: 5,
  },

  perfilIcone: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFF2B8",
    justifyContent: "center",
    alignItems: "center",
  },

  perfilEmoji: {
    fontSize: 30,
  },

  ararinhoCard: {
    minHeight: 145,
    borderRadius: 25,
    backgroundColor: "#FFF8D9",
    borderWidth: 1,
    borderColor: "#E7CC55",
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    marginBottom: 18,
  },

  ararinhoImagem: {
    width: 95,
    height: 95,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  ararinhoEmoji: {
    fontSize: 58,
  },

  ararinhoTexto: {
    flex: 1,
    paddingLeft: 18,
  },

  ararinhoTitulo: {
    fontSize: 25,
    fontWeight: "800",
    color: "#17365F",
  },

  ararinhoDescricao: {
    fontSize: 15,
    color: "#666",
    marginTop: 5,
  },

  ararinhoLink: {
    color: "#D92B2B",
    fontSize: 14,
    fontWeight: "800",
    marginTop: 12,
  },

  calendarioCard: {
    minHeight: 125,
    borderRadius: 25,
    backgroundColor: "#EAF3FC",
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    marginBottom: 30,
  },

  iconeGrande: {
    width: 82,
    height: 82,
    borderRadius: 25,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  iconeTexto: {
    fontSize: 35,
  },

  cardTexto: {
    flex: 1,
    paddingLeft: 18,
  },

  cardTitulo: {
    fontSize: 23,
    fontWeight: "800",
    color: "#17365F",
  },

  cardDescricao: {
    fontSize: 15,
    color: "#666",
    lineHeight: 21,
    marginTop: 5,
  },

  tituloArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  tituloSecao: {
    fontSize: 27,
    fontWeight: "800",
    color: "#17365F",
    marginBottom: 15,
  },

  verTodos: {
    color: "#D92B2B",
    fontWeight: "700",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 14,
    marginBottom: 30,
  },

  modulo: {
    width: "48%",
    minHeight: 170,
    borderRadius: 24,
    padding: 20,
    justifyContent: "center",
  },

  rosa: {
    backgroundColor: "#FFF0F5",
  },

  amarelo: {
    backgroundColor: "#FFF7D6",
  },

  lilas: {
    backgroundColor: "#F0ECFF",
  },

  moduloEmoji: {
    fontSize: 38,
    marginBottom: 15,
  },

  moduloTitulo: {
    fontSize: 19,
    fontWeight: "800",
    color: "#17365F",
  },

  moduloDescricao: {
    fontSize: 13,
    color: "#777",
    marginTop: 5,
  },

  funcoes: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },

  funcao: {
    width: 100,
    minHeight: 105,
    borderRadius: 20,
    backgroundColor: "#F3F7FA",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  funcaoEmoji: {
    fontSize: 30,
  },

  funcaoTitulo: {
    color: "#17365F",
    fontWeight: "800",
    marginTop: 5,
    fontSize: 13,
  },

  funcaoDescricao: {
    color: "#777",
    fontSize: 11,
    marginTop: 3,
  },

  rodape: {
    textAlign: "center",
    color: "#17365F",
    fontSize: 13,
    marginTop: 30,
  },
});