import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import { MedContext } from "../state-management/context";
import ConditionItem from "./ConditionItem";

const ConditionList = ({ onPress }) => {
  const medCtx = useContext(MedContext);

  return (
    <View style={{ flex: 1, width: 360}}>
      <FlatList
        keyboardShouldPersistTaps="always"
        data={medCtx.availableConditions}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <ConditionItem
            name={itemData.item.name}
            onPress={onPress.bind(this, itemData.item.id, itemData.item.name)}
          />
        )}
      />
    </View>
  );
};

export default ConditionList;
