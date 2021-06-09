import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import Buttons from "../Buttons";

const CarItems = (props) => {

    const {name, tagline, image} = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>

        <Text style={styles.subTitle}>{tagline}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Buttons
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom Button");
          }}
        />

        <Buttons
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Inventory Button");
          }}
        />
      </View>
    </View>
  );
};

export default CarItems;
