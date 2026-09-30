import {compile} from 'mathjs';
export function parseTuple(text){const values=text.split(',').map(v=>Number(v.trim()));if(values.length!==3||values.some(v=>!Number.isFinite(v)))throw new Error('Expected three numbers separated by commas.');return values;}
export function compileSurface(expr){const code=compile(expr);return (x,y)=>{const z=Number(code.evaluate({x,y,pi:Math.PI,e:Math.E}));return Number.isFinite(z)?z:NaN;};}
