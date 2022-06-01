import * as React from "react";
import { ScrollView, ScrollViewProps, StyleSheet } from "react-native";

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
