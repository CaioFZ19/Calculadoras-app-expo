import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import * as Device from "expo-device";
import { useState } from "react";
import { Platform, StyleSheet, TextInput } from "react-native";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function getDevMenuHint() {
  if (Platform.OS === "web") {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === "android" ? "cmd+m (or ctrl+m)" : "cmd+d";
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}

export default function PitagorasScreen() {
  const [catetoA, setCatetoA] = useState("")
  const [catetoB, setCatetoB] = useState("")
  const [hipotenusa, setHipotenusa] = useState("")
  const [resultado, setResultado] = useState("")

  const calc = () => {
    if (!hipotenusa && !catetoA && !catetoB){
      setResultado("")
    } else if (!hipotenusa) {
      const resposta = (catetoA ** 2) + (catetoB ** 2)
      setResultado(`Hipotenusa = ${resposta}`)
    } else if (!catetoA) {
      const resposta = ((hipotenusa ** 2) - (catetoB ** 2)) ** 0.5
      setResultado(`Cateto A = ${resposta}`)
    } else if (!catetoB) {
      const resposta = ((hipotenusa ** 2) - (catetoA ** 2)) ** 0.5
      setResultado(`Cateto B = ${resposta}`)
    }
  }

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <TextInput
            style={styles.input}
            onChangeText={setCatetoA}
            value={catetoA}
            placeholder="Cateto A"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={setCatetoB}
            value={catetoB}
            placeholder="Cateto B"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={setHipotenusa}
            value={hipotenusa}
            placeholder="Hipotenusa"
            keyboardType="numeric"
          />
          <Button title="Calcular" onPress={calc} />
          <TextInput
            value={resultado}
            style={styles.input}
            onChangeText={setResultado}
          />
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
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
    borderWidth: 1,
  },
});