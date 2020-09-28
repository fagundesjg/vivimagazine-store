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
`;

const PhotoPreview = styled.img`
  height: 100px;
  width: 100px;
  margin-bottom: 5px;
  margin-right: 5px;
`;

const PhotoView = styled.img`
  width: 50%;
  padding: 0 5px;
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
};
