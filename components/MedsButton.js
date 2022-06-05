import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MedsButton = ({
  children,
  navigateTo,
  value,
  title,
  iconName,
  iconName2,
  iconSize,
  iconColor,
}) => {
  const navigation = useNavigation();
  const pressHandler = () => {
    navigation.navigate(navigateTo);
  };
  return (
    <View>
      {title && <Text style={styles.title}>{title}</Text>}
      <Pressable onPress={pressHandler} style={styles.container}>
        <View style={styles.textContainer}>
          <MaterialCommunityIcons
            name={iconName}
            size={iconSize}
            color={iconColor}
          />
          <Text style={styles.text}>{children}</Text>
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.value}>{value}</Text>
          <AntDesign name={iconName2} size={iconSize} color="black" />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textTransform: "uppercase",
    color: "black",
    marginBottom: 8,
    marginHorizontal: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  valueContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  value: {
    color: "black",
    fontSize: 16,
    marginHorizontal: 8,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginHorizontal: 10,
    color: "blue",
    fontSize: 18,
  },
});

export default MedsButton;
