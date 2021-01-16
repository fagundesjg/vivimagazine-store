import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  margin: 30px 0;
  display: flex;
  max-height: 500px;
  flex-wrap: wrap;
  padding: 100px 5vw 0 5vw;
  justify-content: center;
`;

const PhotosContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 750px;
  flex: 1;
  justify-content: center;
  justify-content: space-between;
`;

const DetailsContainer = styled.div`
  display: flex;
  min-width: 300px;
  max-width: 750px;
  flex: 1;
  padding: 2% 5vw 0 5vw;
  flex-direction: column;
  justify-content: space-between;
`;

const PhotoPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5% 0 0;
`;

const PhotoPreview = styled.img<{ selected: boolean }>`
  height: 100px;
  width: 100px;
  margin-bottom: 5px;
  margin-right: 5px;
  cursor: pointer;
  border: ${({ selected }) =>
    selected ? '2px solid #275a53' : '2px solid transparent'};
`;

const PhotoView = styled.img`
  width: 80%;
  max-width: 500px;
  cursor: pointer;
`;

const Brand = styled.span`
  color: #b8b8b8;
`;

const Title = styled.span`
  margin-top: 5px;
  color: #275a53;
  font-weight: bold;
  text-transform: uppercase;
`;

const Description = styled.p`
  text-align: justify;
`;

const OldPrice = styled.span`
  color: #b8b8b8;
  text-decoration: line-through;
  margin-top: 15px;
  font-size: 1em;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Price = styled.span`
  color: #333;
  font-size: 2em;
  font-weight: bold;
`;

const Discount = styled.span`
  background-color: #275a53;
  color: white;
  padding: 8px 10px;
  font-size: 1em;
  margin-left: 8px;
  font-weight: bold;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px 16px;
  background-color: #275a53;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 2px;
  transform: margin-top 0.4s ease;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 8px;

  &:hover {
    cursor: hover;
    filter: brightness(120%);
  }
  &:active {
    margin-top: 5px;
  }
`;

const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 150px;
  justify-content: flex-end;
  flex-direction: column;
`;

export {
  Container,
  Content,
  PhotoPreview,
  PhotoView,
  DetailsContainer,
  PhotosContainer,
  PhotoPreviewContainer,
  Brand,
  Title,
  Description,
  OldPrice,
  Price,
  Discount,
  Row,
  Button,
  InfosContainer,
  ButtonsContainer,
};
