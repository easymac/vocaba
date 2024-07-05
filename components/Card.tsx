import { StyleSheet, View, Text } from 'react-native';
import { CardColors } from '@/constants/Colors';
import colorInt from '@/helpers/colorInt';
import Animated, { SharedValue, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import type { Word } from '@/types';

interface CardProps {
  word: Word;
  swipeOffset: SharedValue<number> | null;
  index: number;
}
export function Card({ word, swipeOffset, index }: CardProps) {
  const pressed = useSharedValue<boolean>(false);
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    if (swipeOffset) {
      offset.value = swipeOffset.value;
    }
    return {
      transform: [
        { translateX: offset.value },
        { scale: withTiming(pressed.value ? 1.1 : 1) }
      ]
    }
  });

  return (
    <View style={styles.wrapper}>
      <Animated.View style={[
        { padding: 4, height: '100%', width: '100%', backgroundColor: CardColors[colorInt(word.word)] },
        animatedStyles
      ]}>
        <Text>{word.word}</Text>
      </Animated.View>
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