import React, { useState } from 'react';
import { Button, FlatList, View } from 'react-native';
import { searchUsers } from '../api/search';

interface UserType {
  data: any[];
}

export default function User(props: UsersType): React.JSX.Element {
  const { data } = props;
  const [repos, setRepos] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState<string>('kawa');
  const [users, setUsers] = useState<any[]>([]);
  const [isReposVisible, setIsReposVisible] = useState<boolean>(false);

  const fetchRepos = async () => {
    const _users = await searchUsers(searchValue);
    setUsers(_users);
  };

  const showRepos = () => {
    setIsReposVisible(true);
  };

  return (
    <View>
      <Button onPress={fetchUsers}></Button>
      {isReposVisible && repos.length && (
        <FlatList data={} renderItem={} />
      )}
    </View>
  );
}
