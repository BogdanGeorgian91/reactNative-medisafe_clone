import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
} from "react-native";

const HomeScreen: () => React$Node = ({ route, navigation }) => {
  const moveAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: Dimensions.get("window").width / 2.8,
        delay: 0,
        useNativeDriver: false,
      }),
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: 0,
        delay: 0,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.timing(fadeAnim, {
      duration: 2000,
      toValue: 1,
      delay: 200,
      useNativeDriver: false,
    }).start();
  }, [moveAnim, fadeAnim]);

  const addMedicineHandler = () => {
    navigation.navigate("AddMedicine");
    // console.log("added medicine");
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../assets/unnamed.png")}
        style={[styles.image, { opacity: fadeAnim }]}
      />

      <Animated.View style={[styles.textContainer, { marginLeft: moveAnim }]}>
        <Text style={styles.text}>M</Text>
        <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>
          ediSafeClone
        </Animated.Text>
      </Animated.View>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={addMedicineHandler}
      >
        <Text style={styles.button}>Add Medicine</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 50,
    // paddingHorizontal: 50,
    alignItems: "center",
    backgroundColor: "#0FFF50",
  },
  buttonContainer: {
    width: 210,
    height: 50,
    backgroundColor: "#4169E1",
    borderColor: "orange",
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    color: "white",
    fontSize: 23,
  },
  image: {
    width: "90%",
    height: 250,
    borderColor: "orange",
    borderWidth: 4,
    borderRadius: 150,
    marginBottom: 40,
  },
  textContainer: {
    marginBottom: 40,
    flexDirection: "row",
  },
  text: {
    fontSize: 27,
    fontWeight: "bold",
    color: "white",
  },
});

export default HomeScreen;
