import React  from 'react';
import { TextInput } from 'react-native-paper';

interface UiSearchType {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export default function UiSearch(props: UiSearchType): React.JSX.Element {
  const { searchValue, setSearchValue } = props;

  return (
    <TextInput
      label={'Enter username'}
      value={searchValue}
      onChangeText={setSearchValue}
    />
  );
}
