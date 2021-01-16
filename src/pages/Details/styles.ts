import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  margin: 30px 0;
  display: flex;
  width: 100%;
  max-height: 500px;
  flex-wrap: wrap;
  padding: 100px 5% 0 5%;
`;

const PhotosContainer = styled.div`
  display: flex;
  min-width: 500px;
  flex: 1;
  padding: 0 5%;
  justify-content: center;
  margin-bottom: 32px;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 500px;
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
};
