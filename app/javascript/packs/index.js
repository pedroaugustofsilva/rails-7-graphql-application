import React from 'react';
import { createRoot } from 'react-dom/client';
import Provider from '../components/Provider';

const root = createRoot(document.querySelector('#root'));

root.render(<Provider>👻</Provider>)
