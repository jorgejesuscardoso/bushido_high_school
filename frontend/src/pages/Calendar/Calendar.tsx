import { CardWarning } from '../../components/Cards/CardWarning';
import { Main } from "./style";

export const Calendar = () => {
  return (
    <Main>
      <CardWarning props="O que vai acontecer nos próximos dias?" />
    </Main>
  );
}