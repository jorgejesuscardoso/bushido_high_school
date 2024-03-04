import { NextFeat } from '../../components/News/NextFeat';
import { TabelServices } from '../../components/News/TabelServices';
import { Main } from './style';

export const About = () => {
    return (
        <Main>
            <TabelServices />
            <NextFeat />
        </Main>
    );
}