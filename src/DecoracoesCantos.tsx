import React from "react";
import { View, StyleSheet } from "react-native";

type Props = {
  tela?: "splash" | "login" | "cadastro" | "recuperarsenha";
};

export default function DecoracoesCantos({
  tela = "login",
}: Props) {
  return (
    <View pointerEvents="none" style={styles.container}>

      {/* =========================
          CANTO SUPERIOR DIREITO
      ========================== */}

      <View style={styles.cantoSuperiorDireito}>
        <View style={styles.galho}>
          <View style={[styles.folha, styles.folha1]} />
          <View style={[styles.folha, styles.folha2]} />
          <View style={[styles.folha, styles.folha3]} />
          <View style={[styles.folha, styles.folha4]} />
        </View>
      </View>

      {/* =========================
          CANTO SUPERIOR ESQUERDO
      ========================== */}

      <View style={styles.bolinhas}>
        <View style={styles.linhaBolinhas}>
          <View style={styles.bolinha} />
          <View style={styles.bolinha} />
          <View style={styles.bolinha} />
        </View>

        <View style={styles.linhaBolinhas}>
          <View style={styles.bolinha} />
          <View style={styles.bolinha} />
          <View style={styles.bolinha} />
        </View>

        <View style={styles.linhaBolinhas}>
          <View style={styles.bolinha} />
          <View style={styles.bolinha} />
          <View style={styles.bolinha} />
        </View>

        <View style={styles.linhaBolinhas}>
          <View style={styles.bolinha} />
          <View style={styles.bolinha} />
          <View style={styles.bolinha} />
        </View>
      </View>

      {/* =========================
          CÍRCULO VERMELHO ESQUERDO
      ========================== */}

      <View style={styles.circuloVermelho} />

      {/* =========================
          CANTO INFERIOR ESQUERDO
      ========================== */}

      <View style={styles.formaAzul} />

      {/* =========================
          CANTO INFERIOR DIREITO
      ========================== */}

      <View style={styles.formaAmarela} />

      {/* =========================
          BOLINHAS INFERIORES
      ========================== */}

      <View style={styles.bolinhasInferiores}>
        <View style={styles.linhaBolinhas}>
          <View style={styles.bolinhaVermelha} />
          <View style={styles.bolinhaVermelha} />
          <View style={styles.bolinhaVermelha} />
        </View>

        <View style={styles.linhaBolinhas}>
          <View style={styles.bolinhaVermelha} />
          <View style={styles.bolinhaVermelha} />
          <View style={styles.bolinhaVermelha} />
        </View>

        <View style={styles.linhaBolinhas}>
          <View style={styles.bolinhaVermelha} />
          <View style={styles.bolinhaVermelha} />
          <View style={styles.bolinhaVermelha} />
        </View>
      </View>

      {/* =========================
          CÍRCULO AMARELO
      ========================== */}

      <View style={styles.circuloAmarelo} />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    ...StyleSheet.absoluteFillObject,
    overflow: "hidden",
    zIndex: 0,
  },

  /* PLANTA */

  cantoSuperiorDireito: {
    position: "absolute",
    right: -15,
    top: 45,
    width: 120,
    height: 150,
  },

  galho: {
    position: "absolute",
    width: 3,
    height: 130,
    backgroundColor: "#8DB7D9",
    right: 48,
    top: 10,
    transform: [{ rotate: "15deg" }],
    borderRadius: 10,
  },

  folha: {
    position: "absolute",
    width: 32,
    height: 17,
    borderWidth: 2,
    borderColor: "#8DB7D9",
    borderRadius: 20,
    backgroundColor: "transparent",
  },

  folha1: {
    right: -27,
    top: 15,
    transform: [{ rotate: "35deg" }],
  },

  folha2: {
    right: 5,
    top: 38,
    transform: [{ rotate: "-35deg" }],
  },

  folha3: {
    right: -25,
    top: 63,
    transform: [{ rotate: "35deg" }],
  },

  folha4: {
    right: 7,
    top: 88,
    transform: [{ rotate: "-35deg" }],
  },

  /* BOLINHAS AZUIS */

  bolinhas: {
    position: "absolute",
    left: 28,
    top: 125,
    width: 45,
    height: 60,
  },

  linhaBolinhas: {
    flexDirection: "row",
    gap: 7,
    marginBottom: 7,
  },

  bolinha: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#A9CDE8",
  },

  /* CÍRCULO VERMELHO */

  circuloVermelho: {
    position: "absolute",
    left: -55,
    top: 190,
    width: 115,
    height: 115,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#D92727",
    backgroundColor: "transparent",
  },

  /* AZUL INFERIOR */

  formaAzul: {
    position: "absolute",
    left: -45,
    bottom: -45,
    width: 190,
    height: 170,
    backgroundColor: "#1474C4",
    borderTopRightRadius: 95,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 90,
    transform: [{ rotate: "-8deg" }],
  },

  /* AMARELO INFERIOR */

  formaAmarela: {
    position: "absolute",
    right: -45,
    bottom: -55,
    width: 130,
    height: 125,
    backgroundColor: "#F5B719",
    borderTopLeftRadius: 100,
  },

  /* BOLINHAS VERMELHAS */

  bolinhasInferiores: {
    position: "absolute",
    left: 28,
    bottom: 80,
    width: 45,
  },

  bolinhaVermelha: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#D92727",
  },

  /* CÍRCULO AMARELO */

  circuloAmarelo: {
    position: "absolute",
    right: -35,
    bottom: 70,
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#F5B719",
    backgroundColor: "transparent",
  },
});