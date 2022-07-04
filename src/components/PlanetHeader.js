import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import Text from "./text/Text";
import { spacing } from "../../src/themes/spacing";
import { colors } from "../themes/colors";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function PlanetHeader({ backBtn, title = "THE PLANETS" }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {backBtn && (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign
            style={{ marginRight: spacing[4] }}
            name="arrowleft"
            size={24}
            color="white"
          />
        </TouchableOpacity>
      )}
      <Text preset="h2">{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[5],
    borderBottomColor: colors.white,
    borderBottomWidth: 0.2,
    flexDirection: "row",
    alignItems: "center",
  },
});
