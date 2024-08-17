import { View, Pressable, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export function RemoveWordButton({ color }: { color: string }) {
  return (
    <Pressable style={styles.removeWordButton}>
      <Text style={styles.text}>Remove word</Text>
      <View style={[styles.icon, { backgroundColor: color }]}>
        <MaterialCommunityIcons name="close-circle" size={24} color="black" />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  removeWordButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  text: {
    textTransform: 'uppercase',
  },
  icon: {
    padding: 10,
    borderRadius: 99999,
  }
})