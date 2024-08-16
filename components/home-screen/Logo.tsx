import { View, Text, StyleSheet } from 'react-native';
import LogoGlyph from './LogoGlyph';

export function Logo() {

  return (
    <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <View style={styles.logoImageWrapper}>
          <LogoGlyph />
        </View>
        <Text style={styles.logoText}>vocaba</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  logoText: {
    fontFamily: 'Bagnard',
    fontSize: 60,
    lineHeight: 60,
  },
  logoImageWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

