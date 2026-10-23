import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import * as Device from 'expo-device';
import { useState } from 'react';
import { Alert, Button, Platform, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';


function getDevMenuHint() {
  if (Platform.OS === 'web') {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}

export default function calcScreen() {

  const [resultado, setResultado] = useState("")

  return (
      <ThemedView style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <ThemedView style={styles.heroSection}>
            <TextInput
              style={styles.input}
              value={resultado}
              onChangeText={setResultado}
            />
            
            <Button title='7'></Button>
            <Button title='8'></Button>
            <Button title='9'></Button>
            <Button title='+'></Button>

            <Button title='4'></Button>
            <Button title='5'></Button>
            <Button title='6'></Button>
            <Button title='-'></Button>

            <Button title='1'></Button>
            <Button title='2'></Button>
            <Button title='3'></Button>
            <Button title='x'></Button>

            <Button title='0'></Button>
            <Button title='/'></Button>

          </ThemedView>
        </SafeAreaView>
      </ThemedView>
  )
}

const styles = StyleSheet.create({
  teclado: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  teclado_linha: {
    gap: Spacing.four,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center',
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
  input: {
    borderWidth: 1,
  },
});