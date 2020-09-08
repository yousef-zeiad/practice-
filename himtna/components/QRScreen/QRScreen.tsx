import React from 'react';
import Header from './Header';
import { Logo, Container, OfferTile } from './styled';

export default function QRScreen({ navigation }) {
  const promotion = navigation.getParam('promotion')
  return (
    <Container>
      <Header navigation={navigation} />
      <Logo />
      <OfferTile branch={`${promotion.name.ar} Offer`} offer={`${promotion.discounted_percentage} %`} />
    </Container>
  )
}