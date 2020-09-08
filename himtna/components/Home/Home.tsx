import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actions';
import { Header } from './Header';
import { Body, StackPage } from '../Shared/Shared';
import Search from '../Search/Search';
import axios from 'axios';
import {
  PromotionTile, Title, Container,
  ButtonContainer, CategoryTile, PromotionOffers, CategoriesList, PromotionList
} from './styled';
import { View, TouchableOpacity } from 'react-native';
import Favorie from './Favorite'

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const favPromotion = useSelector(state => state.main.favoritePromotions);
  const toggleFav = navigation.getParam('toggleFav')
  const [data, setData] = useState([]);
  const [promotions, setProm] = useState([]);
  const [brands, setBrand] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://67.205.144.192/api/v1/categories`);
      console.log(result.data, "po");
      setData(result.data.data);
    }
    fetchData()
  }, [setData]);

  useEffect(() => {
    const fetchPromo = async () => {
      const result = await axios.get(`http://67.205.144.192/api/v1/promotions`);

      setProm(result.data.data);
    }
    fetchPromo()
  }, [setProm]);

  useEffect(() => {
    const fetchPromo = async () => {
      const result = await axios.get(`http://67.205.144.192/api/v1/brands`);
      setBrand(result.data.data);
    }
    fetchPromo()
  }, [setBrand])

  return (
    <>
      <Header navigation={navigation} />
      <StackPage >
        <Body>
          <Search navigation={navigation} />
          <PromotionList horizontal contentContainerStyle={{}} showsHorizontalScrollIndicator={false}>
            {promotions.map(promotion => {
              return (<PromotionTile key={promotion.id} promotion={promotion} navigation={navigation} onPress={() => { }} />)
            })}
          </PromotionList>
          <Container>
            <ButtonContainer>
              <Title fontSize={16}>
                All Offers
              </Title>
              <Title fontSize={16}>
                Offers Near Me
              </Title>
              <TouchableOpacity onPress={() => console.log(toggleFav, 'toggleFav')}>

                <Title fontSize={16}>
                  My Favorites
              </Title>
              </TouchableOpacity>
            </ButtonContainer>
            <CategoriesList bounces horizontal contentContainerStyle={{ paddingLeft: 20 }} showsHorizontalScrollIndicator={false}>
              {data.map(category => <CategoryTile category={category} key={category.id}
                onPress={() => { }}
                selected={''} />)}
            </CategoriesList>
            <Title fontSize={16} style={{ paddingLeft: 25 }}>
              Resto
            </Title>
            <TouchableOpacity onPress={() => navigation.push('BrandDetails')}>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {brands.map(brand => <PromotionOffers brands={brand} navigation={navigation} />)}

              </View>
            </TouchableOpacity>
          </Container>
        </Body>
      </StackPage>
    </>
  )
}
