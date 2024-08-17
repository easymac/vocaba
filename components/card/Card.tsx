import { StyleSheet, View, Text, Pressable } from 'react-native';
import { SquircleView } from 'react-native-figma-squircle';
import Color from 'color';
import colorInt from '@/helpers/colorInt';
import { CardColors } from '@/constants/Colors';
import { CardGestureHandler } from './CardGestureHandler';
import { RemoveWordButton } from './RemoveWordButton';
import { DragIndicator } from './DragIndicator';
import type { Word } from '@/types';

interface CardProps {
  word: Word;
  index: number;
  handleGesture: (direction: string) => void;
}
export function Card({ word, handleGesture }: CardProps) {
  const backgroundColor = CardColors[colorInt(word.word)]
  const buttonColor = Color(backgroundColor).darken(0.1).hex();
  return (
    <View style={styles.wrapper}>
      <CardGestureHandler handleGesture={handleGesture}>
        <SquircleView squircleParams={{
            cornerSmoothing: 0.6,
            cornerRadius: 70,
            fillColor: backgroundColor,
          }}
        >
          <View style={styles.card}>
            <RemoveWordButton color={buttonColor} />
            <View style={styles.wordRegion}>
              <Text style={styles.lexicalCategory}>{word.lexicalCategory}</Text>
              <Text style={styles.word}>{word.word}</Text>
              {word.ipa && <Text style={styles.ipa}>{word.ipa}</Text>}
            </View>
            <View style={styles.buttonRegion}>
              <Pressable
                style={[
                  styles.revealDefinitionButton,
                  { backgroundColor: buttonColor }
                ]}
                onPress={() => {}}
              >
                <Text style={styles.rDBText}>Reveal</Text>
                <Text style={styles.rDBText}>Definition</Text>
              </Pressable>
              <DragIndicator color={buttonColor} />
            </View>
          </View>
        </SquircleView>
      </CardGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  word: {
    fontFamily: 'Bagnard',
    fontSize: 64,
    letterSpacing: -4,
    opacity: 0.85,
  },
  card: {
    padding: '5%',
    paddingTop: '7.5%',
    paddingBottom: '7.5%',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  lexicalCategory: {
    textTransform: 'uppercase',
  },
  ipa: {

  },
  revealDefinitionButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '7.5%',
    backgroundColor: '#fff',
    borderRadius: 99999,
  },
  rDBText: {
    textTransform: 'uppercase',
  },
  wordRegion: {

  },
  buttonRegion: {
    gap: 40,
  }
})