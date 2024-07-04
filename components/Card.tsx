import { StyleSheet, View, Text } from 'react-native';
import { CardColors } from '@/constants/Colors';
import colorInt from '@/helpers/colorInt';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

export function Card({ word }: { word: string }) {
  const pressed = useSharedValue<boolean>(false);
  const offset = useSharedValue(0);

  const tap = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
    })
    .onChange((event) => {
      offset.value = event.translationX;
    })
    .onFinalize(() => {
      offset.value = withSpring(0);
      pressed.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      { translateX: offset.value },
      { scale: withTiming(pressed.value ? 1.1 : 1) }
    ]
  }))
  return (
    <View style={styles.wrapper}>
      <GestureDetector gesture={tap}>
        <Animated.View style={[
          { padding: 4, height: '100%', width: '100%', backgroundColor: CardColors[colorInt(word)] },
          animatedStyles
        ]}>
          <Text>{word}</Text>
        </Animated.View>
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 10,
    position: 'absolute',
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
  }
})