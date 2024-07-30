import React from 'react';
import { FlatList } from 'react-native';
import User from './user';

interface UsersType {
  data: any[];
}

export default function Users(props: UsersType): React.JSX.Element {
  const { data } = props;
  const renderUser = (data) => <User data={data} />;

  return <FlatList data={data} renderItem={renderUser} />;
}
