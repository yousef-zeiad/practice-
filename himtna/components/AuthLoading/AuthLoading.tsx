import React, { useCallback, useEffect } from 'react';
import { Container, SafeView } from './styled';
import { ActivityIndicator } from 'react-native';
import localStorage from '../helpers/localSorage';

export default function AuthLoading({ navigation }) {

  useEffect(() => {
    async function getTokens() {
      const tokens = await localStorage.get('tokens');
      console.log(tokens);
      if (tokens) {
        navigation.navigate('App');
      } else {
        navigation.navigate('Auth');
      }
    };
    getTokens();
  }, []);
  return (
    <Container>
      <SafeView forceInset={{ top: 'always' }}>
        <ActivityIndicator />
      </SafeView>
    </Container>
  );
}
