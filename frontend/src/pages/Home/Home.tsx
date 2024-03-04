import { TabelServices } from '../../components/News/TabelServices';
import { Slide } from "../../components/Slides/Frame";
import { Main } from "./style";

export const Home = () => {
  return (
    <Main>
      <Slide />
      <TabelServices />
    </Main>
  );
}