import React, { useCallback, useEffect } from 'react';
import { Logo, Search, Button, ButtonContainer, Header, Error } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Container } from '../Shared/Shared';
import actions from '../../actions';
const MainLogo = require('../../assets/logo.png');

export default function Home() {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const {isLoading, error, result} = useSelector(state => state.main);

  useEffect(() => console.log(isLoading, error, result), [isLoading, error, result])

  const onSubmit = useCallback(data => {
    dispatch(actions.main.search(data.searchTerm));
  }, [dispatch]);

  return (
    <Container>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Header>
            <Logo src={MainLogo} />
            <Search name="searchTerm" defaultValue="" ref={register({ required: true })} />
            {errors.searchTerm && <Error>Empty Bitch</Error>}
          </Header>
          <ButtonContainer>
            <Button type="submit">
              Search
            </Button>
            <Button>
              I'm Feeling Lucky
            </Button>
          </ButtonContainer>
        </form>
      </div>
    </Container>
  );
}
