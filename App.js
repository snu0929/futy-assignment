import { StyleSheet, Text, View } from "react-native";
import { Games } from "./screens/Games";

export default function App() {
  return (
    <View style={styles.container}>
      <Games />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
