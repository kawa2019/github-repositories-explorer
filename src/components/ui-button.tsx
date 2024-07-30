import React from 'react';
import { FlatList, Pressable } from 'react-native';

interface UiButtonType {
}

export default function UiButton(props: UiButtonType): React.JSX.Element {
    const {onPress, title} = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
}
