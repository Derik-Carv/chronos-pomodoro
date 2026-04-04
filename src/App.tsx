import { Heading } from './componentes/Heading';

import './styles/theme.css';
import './styles/global.css';

export const App = () => {
    console.log('Renderizando App');

    return (
        <>
            <Heading />
            <p>Este é o componente App.</p>
        </>
    )
}