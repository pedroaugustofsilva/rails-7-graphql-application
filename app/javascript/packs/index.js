import React from 'react';
import { createRoot } from 'react-dom/client';

// Components
import Provider from '../components/Provider';
import Library from "../components/Library";

const root = createRoot(document.querySelector('#root'));

root.render(<Provider><Library></Library></Provider>)
