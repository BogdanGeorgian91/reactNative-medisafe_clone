import React, { useContext } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import UnitItem from "../components/UnitItem";
import { MedContext } from "../state-management/context";

const UnitScreen = () => {
  const medCtx = useContext(MedContext);

  const chooseUnitHandler = (id) => {
    medCtx.addUnit(id);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={medCtx.allUnits}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <UnitItem
            onPress={chooseUnitHandler.bind(this, itemData.item.id)}
            unit={itemData.item.name}
            isSelected={itemData.item.id === medCtx.units.value}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});

export default UnitScreen;
