import { View, Text, StyleSheet } from 'react-native';
import { cubicBezier } from '@/helpers/cubicBezier';

export function Logo() {
  const shadowsCount = 12;
  const els = [];
  const opacityCurve = cubicBezier(0.12, 0, 0.39, 0);

  for (let i = 0; i < shadowsCount; i++) {
    const angle = (i / (shadowsCount - 1)) * 90;
    const opacity = opacityCurve(1 - i / shadowsCount);

    els.push(
      <Text
        key={i}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          color: `rgba(0, 0, 0, ${opacity})`,
          transformOrigin: '-2% 90%',
          transform: [{ rotate: `${angle}deg` }],
          ...styles.logoText,
        }}
      >
        vocaba
      </Text>
    )
  }

  return (
    <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <View style={{backgroundColor: 'red', height: 256}}>
        <Text style={styles.logoText}>vocaba</Text>
        {els}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  logoText: {
    fontWeight: 'bold',
    fontSize: 60,
    lineHeight: 60,
  }
})

