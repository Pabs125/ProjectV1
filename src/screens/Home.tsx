import React from "react";
import { Text, StyleSheet, SafeAreaView, View, ImageBackground, Image} from "react-native";
import { RootStackScreenProps} from "../navigators/MainNavigators";


const imagen = { uri: "https://scontent.fclo9-1.fna.fbcdn.net/v/t39.30808-6/420081944_378201168234352_2375964957751989901_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeH-H8XVh0GWNtG7J0LPJ-WlgrAP7Ngk0ziCsA_s2CTTOH2kbBwoaBq1QNUjixWJzc--K9-Fd06Iit_WVAXAltLV&_nc_ohc=-szyjXlSGDAAX-xSnXT&_nc_zt=23&_nc_ht=scontent.fclo9-1.fna&oh=00_AfCNSDH80stPAvyI-1nUvBZGE_JHjiD4GGVftoc1XLmGlA&oe=65E6E1CC" };
const logoUrl = require("../img/VuseLogo.png");

export const Home = ({
  navigation,
}: RootStackScreenProps<"Home">) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={imagen} resizeMode={'cover'} style={styles.image}>
        <View style={styles.overlay}>
            <View style={styles.logoContainer}>
                <Image source={logoUrl} style={styles.logo} />
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
