import React from "react";
import { Text, StyleSheet, SafeAreaView, View, ImageBackground, Image} from "react-native";
import { RootStackScreenProps} from "../navigators/MainNavigators";
import { INTRO_SCREEN_03 } from "../utils/constants";
import { ScreenIndicators } from "../components/ScreenIndicators";
import PrimaryButton  from "../components/PrimaryButton";

const imagen = require("../img/vuseW3.jpg");
const logoUrl = require("../img/VuseLogo.png");
const publiUrl = require("../img/publi2.jpg");

export const Onboarding3 = ({
  navigation,
}: RootStackScreenProps<"Onboarding3">) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={imagen} resizeMode={'cover'} style={styles.image}>
        <View style={styles.overlay}>
          <View style={styles.textContainer}>
            <View style={styles.logoContainer}>
              <Image source={logoUrl} style={styles.logo} />
            </View>
            <Text style={styles.texticoLindo}>{INTRO_SCREEN_03.title}</Text>
            <Text style={styles.boldCenteredText}>{INTRO_SCREEN_03.description}</Text>
            <View style={styles.logoContainer}>
            <Image source={publiUrl} style={styles.publiImage} />
            </View>
            <Text style={styles.priceText}>{INTRO_SCREEN_03.precio}</Text>
            <PrimaryButton
              label="Quiero que sea mío"
              style={styles.button}
              onPress={() => {
                navigation.replace("Home");
              }}
            />
            <ScreenIndicators count={3} activeIndex={2} />
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
    fontWeight: "bold",
    fontSize: 20,
  },
  texticoLindo: {
    color: "black",
    textAlign: "center",
    fontSize: 18,
  },
  whiteText: {
    color: "black",
    textAlign: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: '100%',
  },
  logo: {
    maxWidth: '50%',
    height: 30,
  },
  button: {
    height: 52,
    backgroundColor: "#FF0000",
    alignItems: "center",
    justifyContent: "center",
  },
  publiImage: {
    width: 200, // ajusta el ancho según sea necesario
    height: 200, // ajusta la altura según sea necesario
    borderRadius: 20, // Bordes ovalados
  },
  priceText: {
    fontSize: 24, // Tamaño de fuente más grande
    fontWeight: "bold", // Texto en negrita
    fontStyle: "italic", // Texto en cursiva
    textAlign: "center", // Texto centrado
  },
  
  
});
