import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

import Navigation from "./Navigation/Navigation";

export default function App() {
  //effectué à la mise à jour de la page

  //Création du bloc return () , composant de texte qui affiche l'heure actuelle
  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
