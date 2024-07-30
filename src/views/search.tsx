import React, { useEffect, useState } from 'react';
import {SafeAreaView, View} from 'react-native';
import { useDebounce } from 'use-debounce';
import { searchUsers } from '../api/search';
import UiSearch from '../components/ui-search';
import UiLoader from '../components/ui-loader';
import Users from '../components/users';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function Search(): React.JSX.Element {
  const [searchValue, setSearchValue] = useState<string>('');
  const [users, setUsers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [debouncedValue] = useDebounce(searchValue, 500);

  const fetchUsers = async () => {
    const _users = await searchUsers(debouncedValue);
    setUsers(_users);
    setIsLoading(false);
  };

  useEffect(() => {
    if (searchValue.length > 3) {
      setIsLoading(true);
      fetchUsers();
    }
  }, [debouncedValue]);

  return (
    <SafeAreaView style={styles.container}>
      <View style = {{paddingTop: 30}}>
      <UiSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      {isLoading ? <UiLoader /> : <Users data={users} />}
      </View>
    </SafeAreaView>
  );
}

const styles = EStyleSheet.create({
  container: {
    backgroundColor: 'green',
  },
});
