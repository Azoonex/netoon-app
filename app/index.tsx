import CarouselLayout from "@/components/layout/home/carousel-layout";
import Loading from "@/components/layout/loading";
import { Colors, rounded } from "@/components/theme";
import { Search, TvMinimalPlay, Grip } from "lucide-react-native";
import { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
export default function StartGameScreen() {
  const [validateEnteredNumber, setValidateEnteredNumber] = useState(false);

  // header state
  const [isSearchState, setSearchState] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValidateEnteredNumber(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return !validateEnteredNumber ? (
    <Loading />
  ) : (
    // header
    <View style={styles.containerWarper}>
      <View style={styles.containerHeader}>
        <View style={styles.containerHeader}>
          <Pressable
            onPress={() => {
              setSearchState(!isSearchState);
              console.log("press");
            }}
          >
            <Search />
          </Pressable>
          <TvMinimalPlay />
        </View>
        <Grip />
      </View>
      {isSearchState && (
        <View>
          <TextInput placeholder="Search..." style={styles.inputSearchStyle} />
        </View>
      )}
      {/* hero */}
      <Image
        style={styles.posterStyle}
        source={require("@/assets/images/posters/poster-hero.png")}
      />

      <CarouselLayout />
    </View>
  );
}

const styles = StyleSheet.create({
  containerWarper: {
    paddingBlock: 15,
    paddingInline: 10,
    backgroundColor: Colors.primary,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  // header
  containerHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
  },
  inputSearchStyle: {
    borderRadius: rounded.sm,
    borderWidth: 1,
    borderColor: Colors.button,
  },
  posterStyle: {
    width: "100%",
    height: "50%",
    backgroundSize: "cover",
    borderRadius: rounded.sm,
  },
});
