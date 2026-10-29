import {createRoot} from 'react-dom/client';

const container = document.querySelector('div');

if (container) {
    createRoot(container);

    createRoot.render('Hello React');
}