import * as React from "react";
import { ScrollViewProps, StyleSheet } from "react-native";
  import { ScrollView } from "react-native-virtualized-view";

const FullHeightScrollView = (
  props: {
    children: React.ReactNode;
  } & Omit<ScrollViewProps, "contentContainerStyle">
) => {
  return (
    <ScrollView contentContainerStyle={styles.grow} {...props}>
      {props.children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  grow: { flexGrow: 1 },
});
export default FullHeightScrollView;
