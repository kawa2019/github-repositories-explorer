import React from 'react';
import { FlatList } from 'react-native';
import User from './user';

interface UsersType {
  data: any[];
}

export default function Users(props: UsersType): React.JSX.Element {
  const { data } = props;

  return <FlatList data={data} renderItem={User} />;
}
