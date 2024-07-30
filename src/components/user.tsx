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
    setIsReposVisible(true);
    isLoading && fetchRepos();
  };
console.log(repos?.[0]?.url)
  return (
    <View style={{ flex: 1, marginBottom: 20 }}>
      <Pressable onPress={showRepos}>
        <Text>{data.item.login}</Text>
      </Pressable>
      {isReposVisible && (
        <View>
          {isLoading ? (
            <UiLoader />
          ) : (
            <FlatList
              data={repos}
              renderItem={(item) => {
                return (
                    <View style={{height: 20}}>
                      <Text style={{color: 'black', backgroundColor: 'red'}}>{item.item.url}</Text>
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
