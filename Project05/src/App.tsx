import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  Vibration,
  View,
} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
  );
};

const App = (): JSX.Element => {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const rollDiceOnTop = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    Vibration.vibrate(100)

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 5:
        setDiceImage(DiceSix);
        break;
      default:
        setDiceImage(DiceOne);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable onPress={rollDiceOnTop}>
        <Text style={styles.rollDiceBtnText}>Roll The Dice</Text>
      </Pressable>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
