import {compile} from 'mathjs';

export function parseTuple(text){const values=text.split(',').map(v=>Number(v.trim()));if(values.length!==3||values.some(v=>!Number.isFinite(v)))throw new Error('Expected three numbers separated by commas.');return values;}

export function compileSurface(expr){const code=compile(expr);return (x,y)=>{const z=Number(code.evaluate({x,y,pi:Math.PI,e:Math.E}));return Number.isFinite(z)?z:NaN;};}

export function compileCurve(expr){const parts=expr.split(',').map(v=>v.trim());if(parts.length!==3)throw new Error('Expected x(t), y(t), z(t).');const codes=parts.map(part=>compile(part));return t=>codes.map(code=>{const value=Number(code.evaluate({t,pi:Math.PI,e:Math.E}));return Number.isFinite(value)?value:NaN;});}

export function evaluateConstant(expr){const code=compile(String(expr));const value=Number(code.evaluate({pi:Math.PI,e:Math.E}));if(!Number.isFinite(value))throw new Error('Expected a finite number.');return value;}