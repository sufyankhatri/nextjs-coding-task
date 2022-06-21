import styled from 'styled-components';
export const MainContainer = styled.div`
  width: 100%;
  background: black;
  max-width: 2303px;
  display: flex;
  justify-content: center;
  color: white;
`;

export const InnerContainer = styled.div`
  // margin: 50px 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  flex-direction: column-reverse;
  @media (min-width: 980px) {
    width: 80%;
    flex-direction: row;
  }
`;

export const InfoContainer = styled.div`
  flex: 1 1 40%;
  font-family: '-OC Rey';
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 30px;

  h1 {
    font-size: 40px;
    line-height: 120%;
    font-weight: normal;
    margin: 0px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    font-family: 'Wigrum';
    margin: 30px 0px;
  }
  button {
    width: 100%;
    height: 47px;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    font-family: 'Wigrum';
    border-radius: 135px;
    background: #656cff;
    padding: 10px 32px;
  }

  @media (min-width: 980px) {
    margin: 0px;
    h1 {
      font-size: 72px;
      line-height: 93.6px;
    }
    p {
      font-size: 18px;
      line-height: 23.4px;
    }
    button {
      width: fit-content;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  flex: 1 1 60%;
`;

export const ImageElem = styled.img`
  text-align: center;
  width: 100%;
  object-fit: cover;

  // @media (max-width: 980px) {
  //   height: 100%;
  // }
`;

export const GradientX = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;

  &:before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 40px;
    background: linear-gradient(to left, rgba(0,0,0,0) , rgba(0,0,0,.8));
  }

  &:after {
    content: '';
    position: absolute;
    top: 0px;
    right: 0px;
    height: 100%;
    width: 40px;
    background: linear-gradient(to right, rgba(0,0,0,0) , rgba(0,0,0,.8));
  }
`;

export const GradientY = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;

  &:before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    height: 20px;
    width: 100%;
    background: linear-gradient(to top, rgba(0,0,0,0) , rgba(0,0,0,.6));
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: 20px;
    width: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0) , rgba(0,0,0,.6));
  }
`;