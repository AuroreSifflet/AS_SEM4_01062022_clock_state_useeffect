import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import CustomClock from "../Component/CustomClock";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/Navigation";

export default function ClockScreen() {
  //effectué à la mise à jour de la page
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  //Création du bloc return () , composant de texte qui affiche l'heure actuelle
  return (
    <View style={styles.container}>
      <CustomClock />
      <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
        <Text>Retour Home</Text>
      </TouchableOpacity>
      {/* <Text style={styles.dateText}> {new Date().toLocaleTimeString()} </Text> */}
      {/* heureActuelle au début est undefined */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
});
