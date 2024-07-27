import {FlatList, StyleSheet, View} from 'react-native';
import { useEffect, useState } from 'react';
import UiSearch from './src/components/ui-search';
import {searchUsers} from "./src/api/search";
import Users from "./src/components/users";

export default function App() {
  const [searchValue, setSearchValue] = useState<string>('kawa');
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    const _users = await searchUsers(searchValue);
    setUsers(_users);
  };

  useEffect(() => {
    if (searchValue.length > 3) {
      fetchUsers();
    }
  }, [searchValue]);

  return (
    <View >
      <UiSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <Users data = {users}/>
    </View>
  );
}

const styles = StyleSheet.create({

});
