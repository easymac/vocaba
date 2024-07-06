import { useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { CardColors } from '@/constants/Colors';
import colorInt from '@/helpers/colorInt';
import Animated, { SharedValue, runOnJS, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import type { Word } from '@/types';

interface CardProps {
  word: Word;
  index: number;
  handleGesture: (direction: string) => void;
}
export function Card({ word, index, handleGesture }: CardProps) {
  const pressed = useSharedValue<boolean>(false);
  const offset = useSharedValue(0);

  const springConfig = {
    overshootClamping: true
  }

  const pan = Gesture.Pan()
    .onChange((event) => {
      offset.value = event.translationX;
    })
    .onFinalize((event) => {
      if (event.translationX < -50) {
        offset.value = withSpring(-500, springConfig, () => {
          runOnJS(handleGesture)('left');
        });
      } else if (event.translationX > 50) {
        offset.value = withSpring(500, springConfig, () => {
          runOnJS(handleGesture)('right');
        });
      } else {
        offset.value = withSpring(0);
      }
    })
    .runOnJS(true);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offset.value },
        { scale: withTiming(pressed.value ? 1.1 : 1) }
      ]
    }
  });

  return (
    <View style={styles.wrapper}>
      <GestureDetector gesture={pan}>
        <Animated.View style={[
          { backgroundColor: CardColors[colorInt(word.word)] },
          animatedStyles,
          styles.card,
        ]}>
          <Text style={styles.word}>{word.word}</Text>
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
  },
  word: {
    fontSize: 64,
    letterSpacing: -2,
    opacity: 0.85,
    fontWeight: 'bold',
  },
  card: {
    padding: 4,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 70,
  }
})