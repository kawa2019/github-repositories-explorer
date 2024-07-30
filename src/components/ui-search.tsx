import React from 'react';
import { TextInput } from 'react-native-paper';
import EStyleSheet from 'react-native-extended-stylesheet';
import { DefaultTheme } from 'react-native-paper';
import { View } from 'react-native';

interface UiSearchType {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export default function UiSearch(props: UiSearchType): React.JSX.Element {
  const { searchValue, setSearchValue } = props;

  return (
    <View style={{ height: 100, backgroundColor: 'red'}}>
      <TextInput
        label={'Enter username'}
        value={searchValue}
        onChangeText={setSearchValue}
        style={styles.input}
        contentStyle={styles.content}
      />
    </View>
  );
}

const styles = EStyleSheet.create({
  input: {
    backgroundColor: 'yellow',
  },
  content: {},
});
