import styled from 'styled-components';
export const MainContainer = styled.div`
  width: 100%;
  height: 800px;
  background: black;
  max-width: 2303px;
  display: flex;
  justify-content: center;
  color: white;
`;
export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-direction: column;
  @media (min-width: 980px) {
    width: 80%;
    flex-direction: row;
  }
`;

export const InfoContainer = styled.div`
  flex: 1 1 35%;
  font-family: '-OC Rey';
  h1 {
    font-weight: 400;
    font-size: 72px;
    line-height: 130%;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 130%;
    font-family: 'Wigrum';
  }
  button {
    width: 286px;
    height: 47px;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    font-family: 'Wigrum';
    border-radius: 135px;
    background: #656cff;
    padding: 10px 32px;
  }
`;
export const ImageContainer = styled.div`
  flex: 1 1 100%;
  text-align: center;
  background-image: url('/mobile-image.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  order: 1;
  @media (min-width: 980px) {
    height: 100%;
    flex: 1 1 50%;
  }
`;
