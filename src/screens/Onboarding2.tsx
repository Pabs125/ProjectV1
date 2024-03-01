import React from "react";
import { Text, StyleSheet, SafeAreaView, View, ImageBackground, Image } from "react-native";
import { RootStackScreenProps} from "../navigators/MainNavigators";
import { INTRO_SCREEN_02 } from "../utils/constants";
import { ScreenIndicators } from "../components/ScreenIndicators";
import PrimaryButton  from "../components/PrimaryButton";

const imagen = { uri: "https://scontent.fclo9-1.fna.fbcdn.net/v/t39.30808-6/410465000_356374487083687_4101821059603741451_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeEhy29DafkelDjAE0nm-Rz89vbWy2ajRjf29tbLZqNGN-mZHHLGw5ClaclefUH_KJJ6f7iOHGELzvz552nZP7wF&_nc_ohc=4XclyZzoUFoAX-aMw10&_nc_zt=23&_nc_ht=scontent.fclo9-1.fna&oh=00_AfCvBFNtrdoHAmtcR0g-JFQtwRN9buut2ZpDA9232Ph7Eg&oe=65E6A377" };
const logoUrl = require("../img/VuseLogo.png");
const publiUrl = require("../img/publi.jpg");

export const Onboarding2 = ({ navigation, }: RootStackScreenProps<"Onboarding2">) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={imagen} resizeMode={'cover'} style={styles.image}>
        <View style={styles.overlay}>
          <View style={styles.textContainer}>
            <View style={styles.logoContainer}>
              <Image source={logoUrl} style={styles.logo} />
            </View>
            <Text style={styles.whiteText}>{INTRO_SCREEN_02.title}</Text>
            <Text style={styles.boldCenteredText}>{INTRO_SCREEN_02.description}</Text>
            <View style={styles.logoContainer}>
            <Image source={publiUrl} style={styles.publiImage} />
            </View>
            <PrimaryButton
              label="Conocer más"
              style={styles.button}
              onPress={() => {
                navigation.replace("Onboarding3");
              }}
            />
            <ScreenIndicators count={3} activeIndex={1} />
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
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  publiImage: {
    width: 200, // ajusta el ancho según sea necesario
    height: 200, // ajusta la altura según sea necesario
    borderRadius: 20, // Bordes ovalados
  },
  
  
});
