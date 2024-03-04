import { NextFeat } from '../../components/News/NextFeat';
import { TabelServices } from '../../components/News/TabelServices';
import { Slide } from "../../components/Slides/Frame";
import { Container, Content, Main } from "./style";

export const Home = () => {
  return (
    <Main>
      <Slide />
      <Container>
        <Content>
          <TabelServices />
          <NextFeat />
        </Content>
      </Container>
    </Main>
  );
}