import styled from 'styled-components';

export const Logo = styled.img`
  width: 270px;
  height: 90px;
`;
export const Search = styled.input`
  padding: 10px;
  border-radius: 175px;
  width: 350px;
  height: 13px;
  outline: none;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 140px;
  justify-content: space-between;
  align-items: center;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
export const Button = styled.button`
  width: 150px;
  height: 30px;
`;
export const Error = styled.span`
  font-size: 20px;
  color: red;
`
