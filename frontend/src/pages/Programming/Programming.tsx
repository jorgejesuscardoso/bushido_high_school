import { NextFeat } from '../../components/News/NextFeat'
import { TabelServices } from '../../components/News/TabelServices'
import { Container, Content, Main } from './style'

export const Programming = () => {
  return (
    <Main>
      <Container>
        <Content>
          <TabelServices />
          <NextFeat />
        </Content>
      </Container>
    </Main>
  )
}