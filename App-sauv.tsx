import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
//import CustomClock from "./Component/CustomClock";

export default function App() {
  /*

1- Création d'un état nommé heureActuelle avec la méthode de mise à jour de l'état setTime. 
Nous utiliserions cet état pour stocker la valeur d'heure actuelle.
heureActuelle est l'état actuel, il ne peut être modifié, il peut être juste lu
setheureActuelle est une fonction qui le met à jour.

*/

  //Cette fonction permettant de créer un nouvel objet Date.
  let date = new Date();
  //réccupération de l'heure actuelle
  //let heure = date.toLocaleTimeString();

  /* const [heureActuelle, setheureActuelle] = useState<string | undefined>(undefined); est un state 
  useState est un hook
  useEffect est un hook
  */

  const [heureActuelle, setheureActuelle] = useState<string | undefined>(
    undefined
  );

  const interval = setInterval(
    () => setheureActuelle(new Date().toLocaleTimeString()),
    1000
  );

  useEffect(() => {
    //effectué au chargement de la page
    interval;

    return () =>
      //effectué au démontage de la page

      clearInterval(interval);
  }, []);

  //effectué à la mise à jour de la page

  //Création du bloc return () , composant de texte qui affiche l'heure actuelle
  return (
    <View style={styles.container}>
      {/* <CustomClock /> */}
      {/* <Text style={styles.dateText}> {new Date().toLocaleTimeString()} </Text> */}
      {/* heureActuelle au début est undefined */}

      <Text style={styles.dateText}>
        {heureActuelle != undefined && heureActuelle}
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dateText: {
    fontWeight: "bold",
    alignSelf: "center", // centré horizontalement
  },
});

/*
    //Obtenir les heures de l'heure actuelle
    var hours = new Date().getHours();
    //Obtenir les minutes de l'heure actuelle
    var min = new Date().getMinutes();
    //Obtenir les secondes de l'heure actuelle
    var sec = new Date().getSeconds();
    */
