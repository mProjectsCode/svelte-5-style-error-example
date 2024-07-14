import { mount } from 'svelte';
import './app.css';
import App from './App.svelte';

const target = document.getElementById('app')!;

const detachedNode = document.createElement('div');

const app = mount(App, {
  target: detachedNode,
});

setTimeout(() => {
  target.appendChild(detachedNode);
}, 0);

export default app;
