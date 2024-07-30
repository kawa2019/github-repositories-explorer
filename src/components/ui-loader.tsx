import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function UiLoader({ style }) {
  return (
    <View style={{ ...styles.loader, ...style }}>
      <ActivityIndicator
        size="large"
        color={EStyleSheet.value('$colorBrandPrimary')}
      />
    </View>
  );
}

const styles = EStyleSheet.create({
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});
