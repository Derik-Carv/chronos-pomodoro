import { Heading } from './componentes/02-body/Heading';
import { HeaderPrincipal } from './componentes/01-header/Header';
import { Body } from './componentes/02-body/Body';
import { Footer } from './componentes/03-footer/Footer';

import './styles/theme.css';
import './styles/global.css';

export const App = () => {
    return (
        <>
            <HeaderPrincipal />
            <Heading />
            <Body />
            <Footer />
        </>
    )
}