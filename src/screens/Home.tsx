import React, { useCallback, useRef, useState } from "react";
import { Text, StyleSheet, SafeAreaView, View, Image, TouchableOpacity, ImageBackground } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const imagen = require("../img/fonfoHome.jpg");
const vapo = require("../img/vapo1.png");

export const Home = () => {
  const sheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(false);
  const snapPoints = ["65%"];

  const handleSnapPress = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleCloseSheet = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView style={styles.container}>
        <ImageBackground source={imagen} resizeMode={'cover'} style={styles.imagen}>
          <View style={styles.card}>
            <Image source={vapo} style={styles.image} />
            <Text style={styles.title}>VUSE GO MAX - ICED COCONUT MOCHA</Text>
            <Text style={styles.normalText}>Vapeador desechable. Contiene 1 und de dispositivo con batería no recargable, precargado hasta con 1.500 Puff*. Sabor: Iced Coconut Mocha (Ice Coco Mocha)</Text>
            
            <View style={styles.priceContainer}>
              <Text style={styles.price}>$35.000 COP</Text>
              <TouchableOpacity style={styles.addButton} onPress={handleSnapPress}>
                <Text style={styles.buttonText}>Añadir al carrito</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        {isOpen && (
          <BottomSheet
            ref={sheetRef}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            onClose={() => setIsOpen(false)}
          >
            <BottomSheetView style={styles.bottomSheetContent}>
              <Image source={vapo} style={styles.bottomSheetImage} />
              <View style={styles.bottomSheetTextContainer}>
                <Text style={styles.bottomSheetTitle}>VUSE GO MAX - ICED COCONUT MOCHA</Text>
                <Text style={styles.bottomSheetText}>Vapeador desechable. Contiene 1 und de dispositivo con batería no recargable, precargado hasta con 1.500 Puff*. (5 ml de líquido con sales de nicotina)</Text>
                <Text style={styles.bottomSheetText}>Sabor: Iced Coconut Mocha (Ice Coco Mocha)</Text>
                <Text style={styles.bottomSheetText}>Nivel de nicotina: 34mg/ml - 3%</Text>
                <Text style={styles.bottomSheetTitle}>+18 Producto exclusivo para mayores de edad, contiene nicotina sustancia adictiva.</Text>
              </View>
              <View style={styles.bottomSheetFooter}>
                <Text style={styles.bottomSheetPrice}>Precio: $35.000 COP</Text>
                <TouchableOpacity style={styles.bottomSheetButton} onPress={handleCloseSheet}>
                  <Text style={styles.bottomSheetButtonText}>QUIERO UNO</Text>
                </TouchableOpacity>
              </View>
            </BottomSheetView>
          </BottomSheet>
        )}
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    margin: 10,
    maxWidth: 300,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 10,
  },
  normalText: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 14,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  addButton: {
    backgroundColor: 'darkorange',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#333',
    textAlign: 'center',
  },
  bottomSheetContent: {
    alignItems: 'center',
  },
  bottomSheetImage: {
    width: 250,
    height: 250,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bottomSheetTextContainer: {
    padding: 10,
  },
  bottomSheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomSheetText: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 5,
  },
  bottomSheetPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomSheetFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  bottomSheetButton: {
    backgroundColor: 'darkorange',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginLeft: 10,
  },
  bottomSheetButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});
