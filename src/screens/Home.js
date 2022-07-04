import {
  StyleSheet,
  FlatList,
  View,
  Pressable,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../themes/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import PlanetHeader from "../components/PlanetHeader";
import { PLANET_LIST } from "../data/planet-list";
import Text from "../components/text/Text";
import { spacing } from "../themes/spacing";
import { AntDesign } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [list, setList] = useState(PLANET_LIST);

  const searchPlanet = text => {
    const filteredList = PLANET_LIST.filter(item => {
      const itemName = item.name.toLowerCase();
      const typedName = text.toLowerCase();

      return itemName.indexOf(typedName) > -1;
    });
    setList(filteredList);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Details", { planet: item });
        }}
        style={styles.item}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View style={[styles.circle, { backgroundColor: item.color }]}></View>
          <Text style={styles.planetName}>{item.name}</Text>
        </View>
        <AntDesign name="arrowright" size={18} color={colors.white} />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
      <TextInput
        placeholder="Type the planet name"
        placeholderTextColor={colors.white}
        style={styles.textInput}
        onChangeText={text => searchPlanet(text)}
      ></TextInput>
      <FlatList
        contentContainerStyle={styles.list}
        keyExtractor={item => item.name}
        data={list}
        renderItem={renderItem}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: spacing[7],
  },
  list: {
    padding: spacing[7],
  },
  planetName: {
    marginLeft: spacing[4],
    fontSize: spacing[4],
    textTransform: "capitalize",
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  textInput: {
    padding: spacing[4],
    color: colors.white,
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    marginHorizontal: spacing[8],
    marginVertical: spacing[3],
  },
});
