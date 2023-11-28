import './app.css'
import App from './App.svelte'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const app = new App({
  target: <any> document.getElementById('app'),
})

export default app
