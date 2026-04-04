import { Heading } from './componentes/Heading';

import './styles/theme.css';
import './styles/global.css';
import { Trash2 } from 'lucide-react';

export const App = () => {
    return (
        <>
            <Heading >
                Olá mundo!
                <button>
                    <Trash2 />
                </button>
            </Heading>
            <p>Este é o componente App.</p>
        </>
    )
}