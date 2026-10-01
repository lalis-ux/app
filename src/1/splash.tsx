import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  Dimensions,
} from "react-native";
import DecoracoesCantos from "../DecoracoesCantos";

type Props = {
  onFinish?: () => void;
};

const { width, height } = Dimensions.get("window");

export default function Splash({ onFinish }: Props) {
  const fade = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.85)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
      }),

      Animated.spring(scale, {
        toValue: 1,
        friction: 7,
        tension: 45,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      if (onFinish) {
        onFinish();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [fade, scale, onFinish]);

  return (
    <View style={styles.container}>
      <DecoracoesCantos tela="splash" />

      <Animated.View
        style={[
          styles.conteudo,
          {
            opacity: fade,
            transform: [{ scale }],
          },
        ]}
      >
<Image
  source={require("../../assets/arara_nucleo_vital.png.jpeg")}
  style={styles.arara}
  resizeMode="contain"
/>

        <View style={styles.nome}>
          <Text style={styles.nucleo}>Núcleo</Text>
          <Text style={styles.vital}>Vital</Text>
        </View>

        <View style={styles.linha}>
          <View style={styles.linhaAzul} />
          <Text style={styles.coracao}>♥</Text>
          <View style={styles.linhaAzul} />
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  conteudo: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    zIndex: 2,
  },

  arara: {
    width: Math.min(width * 0.63, 300),
    height: Math.min(height * 0.50, 390),
    marginBottom: 10,
  },

  nome: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 5,
  },

  nucleo: {
    fontSize: 39,
    fontWeight: "800",
    color: "#173765",
    letterSpacing: 1,
  },

  vital: {
    fontSize: 42,
    fontStyle: "italic",
    color: "#D6283F",
    marginLeft: 7,
  },

  linha: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
  },

  linhaAzul: {
    width: 48,
    height: 2,
    backgroundColor: "#5FA8D3",
  },

  coracao: {
    color: "#D6283F",
    fontSize: 17,
    marginHorizontal: 10,
  },
});
