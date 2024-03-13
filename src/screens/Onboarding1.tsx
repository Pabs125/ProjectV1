import React from "react";
import { Text, StyleSheet, SafeAreaView, View, ImageBackground, Image} from "react-native";
import { RootStackScreenProps} from "../navigators/MainNavigators";
import { INTRO_SCREEN_01 } from "../utils/constants";
import { ScreenIndicators } from "../components/ScreenIndicators";
import PrimaryButton  from "../components/PrimaryButton";

const imagen = require("../img/vuseW1.jpg");
const logoUrl = require("../img/VuseLogo.png");

export const Onboarding1 = ({
  navigation,
}: RootStackScreenProps<"Onboarding1">) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={imagen} resizeMode={'cover'} style={styles.image}>
        <View style={styles.overlay}>
          <View style={styles.textContainer}>
            <View style={styles.logoContainer}>
              <Image source={logoUrl} style={styles.logo} />
            </View>
            <Text style={styles.boldCenteredText}>PARA INGRESAR A ESTE SITIO DEBES SER MAYOR DE EDAD</Text>
            <Text style={styles.whiteText}>{INTRO_SCREEN_01.title}</Text>
            <PrimaryButton
              label="Soy mayor de edad"
              style={styles.button}
              onPress={() => {
                navigation.replace("Onboarding2");
              }}
            />
            <Text style={styles.whiteText}>{INTRO_SCREEN_01.description}</Text>
            <ScreenIndicators count={3} activeIndex={0} />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  textContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  boldCenteredText: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold", // Hacer el texto en negrita
  },
  whiteText: {
    color: "black",
    textAlign: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: '100%', // Ancho del contenedor igual al 100% del contenedor padre
  },
  logo: {
    maxWidth: '50%', // Ancho máximo igual al 50% del contenedor
    height: 30, // Altura fija del logo (ajustar según lo necesites)
  },
  button: {
    height: 52,
    backgroundColor: "orange", // Color naranja
    alignItems: "center",
    justifyContent: "center",
  },
});
