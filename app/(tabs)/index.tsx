/* 
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView"; */
import * as N from "react-native";

const HomeScreen = () => {
  return (
    <N.View style={styles.mainBox}>
      <N.Text style={styles.h1}>Now we have a clean slate</N.Text>
      <N.Text style={styles.btn} onPress={() => console.log("tapped")}>
        tap me
      </N.Text>
    </N.View>
  );
};

const styles = N.StyleSheet.create({
  mainBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2F4F",
    textAlign: "center",
    marginBottom: 16,
  },
  btn: {
    borderWidth: 4,
    borderColor: "red",
    padding: 10,
    fontSize: 16,
    color: "#fff",
    backgroundColor: "blue",
  },
});

export default HomeScreen;
