import {
  Image,
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import Text from "../components/text/Text";
import PlanetHeader from "../components/PlanetHeader";
import { colors } from "../themes/colors";
import mars from "../../assets/images/mars.png";
import earth from "../../assets/images/earth.png";
import jupiter from "../../assets/images/jupiter.png";
import mercury from "../../assets/images/mercury.png";
import saturn from "../../assets/images/saturn.png";
import venus from "../../assets/images/venus.png";
import uranus from "../../assets/images/uranus.png";
import neptune from "../../assets/images/neptune.png";
import { spacing } from "../themes/spacing";
import { EvilIcons } from "@expo/vector-icons";

const PlanetInfo = ({ title, value }) => {
  return (
    <View style={styles.planetinfo}>
      <Text preset="small">{title}</Text>
      <Text preset="h2">{value}</Text>
    </View>
  );
};

export default function Details({ route }) {
  const planet = route.params.planet;

  const {
    name,
    description,
    rotationTime,
    revolutionTime,
    radius,
    avgTemp,
    wikiLink,
  } = planet;

  const renderImage = planet_name => {
    switch (planet_name) {
      case "mars":
        return mars;
        break;
      case "earth":
        return earth;
        break;
      case "jupiter":
        return jupiter;
        break;
      case "mercury":
        return mercury;
        break;
      case "saturn":
        return saturn;
        break;
      case "venus":
        return venus;
        break;
      case "uranus":
        return uranus;
        break;
      case "neptune":
        return neptune;
        break;
    }
  };

  const onPressLink = () => {
    Linking.openURL(wikiLink);
  };

  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn={true} />
      <ScrollView>
        <View style={styles.imageStyle}>
          <Image style={styles.image} source={renderImage(name)}></Image>
        </View>
        <View style={styles.content}>
          <Text preset="h1" style={styles.name}>
            {name}
          </Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <Pressable style={styles.source} onPress={onPressLink}>
          <Text>Source:</Text>
          <Text preset="h4" style={styles.wikipedia}>
            Wikipedia
          </Text>
          <EvilIcons name="external-link" size={24} color="white" />
        </Pressable>

        {/* planet info  */}
        <View style={{ marginTop: 20 }}></View>
        <PlanetInfo title="Rotation time" value={rotationTime} />
        <PlanetInfo title="Revolution time" value={revolutionTime} />
        <PlanetInfo title="Radius" value={radius} />
        <PlanetInfo title="Average temp" value={avgTemp} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  imageStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    resizeMode: "contain",
    width: 250,
    height: 300,
  },
  content: {
    padding: spacing[6],
    alignItems: "center",
  },
  name: {
    textTransform: "uppercase",
    color: colors.orange,
  },
  description: {
    lineHeight: spacing[6],
    marginTop: spacing[5],
    textAlign: "center",
  },
  source: {
    flexDirection: "row",
    justifyContent: "center",
  },
  wikipedia: {
    textDecorationLine: "underline",
    color: colors.lightGreen,
  },
  planetinfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[3],
    borderWidth: 0.3,
    borderColor: colors.white,
    marginHorizontal: spacing[4],
    marginVertical: spacing[2],
    borderRadius: spacing[1],
  },
});
