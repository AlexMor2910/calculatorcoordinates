export function coordinateReadouts(p){if(!p)return null;const {x,y,z}=p;const rho=Math.hypot(x,y);const r=Math.hypot(x,y,z);return {cartesian:`x=${f(x)}, y=${f(y)}, z=${f(z)}`,cylindrical:`ρ=${f(rho)}, φ=${f(Math.atan2(y,x))}, z=${f(z)}`,spherical:`r=${f(r)}, θ=${f(Math.atan2(y,x))}, φ=${f(r===0?0:Math.acos(z/r))}`};}
function f(v){return Number.isFinite(v)?v.toFixed(3):'—';}
