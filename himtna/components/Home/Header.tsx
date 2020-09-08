import React from 'react';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native';
import { Logo } from '../Shared/Shared';
import { LogoContainer } from './styled';
import Colors from '../../Colors';

export const Header = ({ navigation }) => (
  <>
    <LogoContainer>
      <Logo
        source={require('../../assets/Logo.png')}
        resizeMode={FastImage.resizeMode.cover}

      />
      <TouchableOpacity onPress={() => { }}>
        <FastImage source={require('../../assets/card.png')} style={{ width: 30, height: 30 }} />
      </TouchableOpacity>
    </LogoContainer>
  </>
);