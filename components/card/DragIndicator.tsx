import { View, StyleSheet } from 'react-native';

export function DragIndicator({ color }: { color: string }) {
  return (
    <View style={styles.dragIndicator}>
      <View style={[styles.dot, { backgroundColor: color }]} />
      <View style={[styles.dot, { backgroundColor: color }]} />
      <View style={[styles.dot, { backgroundColor: color }]} />
    </View>
  )
}

const styles = StyleSheet.create({
  dragIndicator: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 99999,
  }
});