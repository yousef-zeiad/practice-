import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actions';
import { Header } from './Header';
import {
  Container, BackgroundCover, BrandLogo, Logo,
  BrandLogoContainer, MainContainer, BrandsDescription, PromotionOffers
} from './styled';
import FastImage from 'react-native-fast-image';
import axios from 'axios';
const { width } = Dimensions.get('window');
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

export default function BrandDetails({ navigation }) {
  const promotion = navigation.getParam('promotion');
  const dispatch = useDispatch();
  const favPromotion = useSelector(state => state.main.favoritePromotions);
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(actions.main.toggleFavorite(promotion))
  }, [dispatch, promotion])
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://67.205.144.192/api/v1/brands`);
      console.log(result.data, "po");
      setData(result.data.data);
    }
    fetchData()
  }, [setData]);
  useEffect(() => {
    navigation.setParams({ toggleFav: toggleFavoriteHandler })
  }, [toggleFavoriteHandler])

  return (
    <>
      <Header title={promotion.name.ar} navigation={navigation} />
      <BackgroundCover style={{ width, height }} source={promotion.image ? { uri: promotion.image } : require('../../assets/branch_placeholder.png')} resizeMode={FastImage.resizeMode.cover} />
      <Container>
        <BrandLogoContainer>
          <BrandLogo>
            <Logo source={require('../../assets/logo_placeholder.png')} resizeMode={FastImage.resizeMode.cover} />
          </BrandLogo>
        </BrandLogoContainer>
      </Container>
      <MainContainer>
        {data.map(brands => <BrandsDescription open_hour={console.log(brands.main_location.open_hour)} />)}
        <BrandsDescription description={'We promise an intimate and relaxed dining experience that offers something different to local and foreign patrons and ensures you enjoy a memorable food experience every time.'} />
        <Text style={{ marginTop: 33, fontSize: 16, fontWeight: 'bold' }}>
          Offers
        </Text>
        <PromotionOffers promotion={promotion} onPress={() => console.log(toggleFavoriteHandler, "ff")} />
      </MainContainer>
    </>
  )
};
