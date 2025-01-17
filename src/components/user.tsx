import React, { useState } from 'react';
import { Button, FlatList, Pressable, Text, View } from 'react-native';
import { getUserRepos, searchUsers } from '../api/search';
import UiLoader from './ui-loader';

interface UserType {
  data: any;
}

export default function User(props: UserType): React.JSX.Element {
  const { data } = props;
  const [repos, setRepos] = useState<any[]>([]);
  const [isReposVisible, setIsReposVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRepos = async () => {
    const _repos = await getUserRepos(data.item.login);
    setRepos(_repos);
    setIsLoading(false);
  };

  const showRepos = () => {
    setIsReposVisible(!isReposVisible);
    isLoading && fetchRepos();
  };

  return (
    <View style={{ flex: 1, marginBottom: 20 }}>
      <Pressable onPress={showRepos} style={{backgroundColor: '#F2F2F2', minHeight: 40, padding: 10}}>
        <Text>{data.item.login}</Text>
      </Pressable>
      {isReposVisible && (
        <View style={{paddingLeft: 20}}>
          {isLoading ? (
            <UiLoader />
          ) : (
            <FlatList
              data={repos}
              renderItem={(item) => {
                return (
                    <View style={{height: 40, backgroundColor: '#E0E0E0', marginBottom: 20 }}>
                      <Text >{item.item.url}</Text>
                    </View>
                )
              }}
            />
          )}
        </View>
      )}
    </View>
  );
}

