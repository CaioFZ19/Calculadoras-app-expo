import { ThemedView } from "@/components/themed-view";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import { useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CalculadoraScreen() {
  const [resultado, setResultado] = useState("");

  const conta = (n: string) => {
    setResultado(resultado + n);
  };

  const calc = () => {};
    const array = resultado.split(/(\d+)/g)
    console.log(array)
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <TextInput
            style={styles.input}
            value={resultado}
            onChangeText={setResultado}
          />

          <ThemedView style={styles.teclado_linha}>
            <Button title="7" onPress={() => conta("7")}></Button>
            <Button title="8" onPress={() => conta("8")}></Button>
            <Button title="9" onPress={() => conta("9")}></Button>
            <Button title="C" onPress={() => setResultado("")}></Button>
          </ThemedView>

          <ThemedView style={styles.teclado_linha}>
            <Button title="4" onPress={() => conta("4")}></Button>
            <Button title="5" onPress={() => conta("5")}></Button>
            <Button title="6" onPress={() => conta("6")}></Button>
            <Button title="+" onPress={() => conta("+")}></Button>
          </ThemedView>

          <ThemedView style={styles.teclado_linha}>
            <Button title="1" onPress={() => conta("1")}></Button>
            <Button title="2" onPress={() => conta("2")}></Button>
            <Button title="3" onPress={() => conta("3")}></Button>
            <Button title="-" onPress={() => conta("-")}></Button>
          </ThemedView>

          <ThemedView style={styles.teclado_linha}>
            <Button title="0" onPress={() => conta("0")}></Button>
            <Button title="x" onPress={() => conta("*")}></Button>
            <Button title="/" onPress={() => conta("/")}></Button>
            <Button title="=" onPress={calc}></Button>
          </ThemedView>
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  teclado: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  teclado_linha: {
    gap: Spacing.four,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: "center",
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: "center",
  },
  code: {
    textTransform: "uppercase",
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: "stretch",
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
  input: {
    justifyContent: "center",
    borderWidth: 1,
  },
});
