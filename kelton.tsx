import { Text, View, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { RootStackParamList } from "../Navigation/Navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
//Cette fonction permettant de créer un nouvel objet Date.
//réccupération de l'heure actuelle
//let heure = date.toLocaleTimeString();
/*
1- Création d'un état nommé heureActuelle avec la méthode de mise à jour de l'état setTime. 
Nous utiliserions cet état pour stocker la valeur d'heure actuelle.
heureActuelle est l'état actuel, il ne peut être modifié, il peut être juste lu
setheureActuelle est une fonction qui le met à jour.

*/

/* const [heureActuelle, setheureActuelle] = useState<string | undefined>(undefined); est un state 
useState est un hook
useEffect est un hook
*/

const CustomClock = () => {
  let date = new Date();

  const [heureActuelle, setheureActuelle] = useState<string | Date | any>(date);

  const ChangeHeure = () => {
    setheureActuelle({ heureActuelle: new Date() });
  };
  useEffect(() => {
    //effectué au chargement de la page
    const interval = setInterval(() => ChangeHeure); //fonction

    console.log("hello");

    return () => {
      console.log("bye");
      clearInterval(interval);
    };
  }, []); //effectué au démontage de la page

  return (
    <View style={styles.ViewClock}>
      <Text style={styles.dateText}>{heureActuelle.toLocaleTimeString()}</Text>
      <Text style={styles.dateText}>{date.toLocaleTimeString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  //styles des View - Flex
  ViewClock: {
    justifyContent: "center",
    alignItems: "center",
  },

  //styles des éléments text
  dateText: {
    fontWeight: "bold",
    alignSelf: "center", // centré horizontalement
  },
});

export default CustomClock;
