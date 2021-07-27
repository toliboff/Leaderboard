import { buildLayout } from './layout.js';
import './style.css';

const main = document.querySelector('#main');
main.innerHTML = buildLayout();