import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import { MedContext } from "../state-management/context";
import MedItem from "./MedItem";

const MedList = ({ onPress }) => {
  const medCtx = useContext(MedContext);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        keyboardShouldPersistTaps="always"
        data={medCtx.availableMeds}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <MedItem
            name={itemData.item.name}
            onPress={onPress.bind(this, itemData.item.id, itemData.item.name)}
          />
        )}
      />
    </View>
  );
};

export default MedList;
