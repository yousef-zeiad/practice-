import React from 'react';
import { Header } from './Header';
import {
  Container, Logo, PlaceInfo, MainContainer,
  HeaderTitle, BranchTile, Discount, Valid
} from './styled';
import { ButtonsContainer, Button, ButtonText } from '../Shared/Shared';

export default function OfferDetails({ navigation }) {
  const promotion = navigation.getParam('promotion')
  return (
    <>
      <Header title={'Offers Details'} navigation={navigation} />
      <Container>
        <Logo />
        <MainContainer>
          <BranchTile promotion={promotion} navigation={navigation} />
          <HeaderTitle>
            {promotion.name.ar}
          </HeaderTitle>
          <PlaceInfo
            description={promotion.description.ar}
          />
          <Discount title={'Discount'} offer={promotion.discounted} />
          <Valid title={'Valid till'} date={'20/10/2017'} />
          <ButtonsContainer>
            <Button onPress={() => navigation.push('BrandDetails', { promotion })} >
              <ButtonText>Get QR Code</ButtonText>
            </Button>
          </ButtonsContainer>
        </MainContainer>
      </Container>
    </>
  )
}

