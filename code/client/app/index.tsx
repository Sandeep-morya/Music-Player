import { useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default function App() {

  return (
    <View style={styles.container} >
      <Text style={{ fontFamily: 'open-sans', fontSize: 30 }}>Inter Black</Text>
      <Text style={{ fontSize: 30 }}>Platform Default</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
