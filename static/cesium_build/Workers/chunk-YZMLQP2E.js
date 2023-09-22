/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.109
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import{a as w,b as z,d as T,e as S}from"./chunk-5EDTRNG5.js";import{a as y}from"./chunk-IO6LETQ6.js";import{a as C,d as x}from"./chunk-C6Y3PRDH.js";import{a as h}from"./chunk-LI57NJAL.js";import{a as u,b as a}from"./chunk-FUATUYJ3.js";import{e as b}from"./chunk-ODUTJJQ5.js";var c={SCALAR:"SCALAR",VEC2:"VEC2",VEC3:"VEC3",VEC4:"VEC4",MAT2:"MAT2",MAT3:"MAT3",MAT4:"MAT4"};c.getMathType=function(e){switch(e){case c.SCALAR:return Number;case c.VEC2:return T;case c.VEC3:return C;case c.VEC4:return w;case c.MAT2:return S;case c.MAT3:return x;case c.MAT4:return z;default:throw new u("attributeType is not a valid value.")}};c.getNumberOfComponents=function(e){switch(e){case c.SCALAR:return 1;case c.VEC2:return 2;case c.VEC3:return 3;case c.VEC4:case c.MAT2:return 4;case c.MAT3:return 9;case c.MAT4:return 16;default:throw new u("attributeType is not a valid value.")}};c.getAttributeLocationCount=function(e){switch(e){case c.SCALAR:case c.VEC2:case c.VEC3:case c.VEC4:return 1;case c.MAT2:return 2;case c.MAT3:return 3;case c.MAT4:return 4;default:throw new u("attributeType is not a valid value.")}};c.getGlslType=function(e){switch(a.typeOf.string("attributeType",e),e){case c.SCALAR:return"float";case c.VEC2:return"vec2";case c.VEC3:return"vec3";case c.VEC4:return"vec4";case c.MAT2:return"mat2";case c.MAT3:return"mat3";case c.MAT4:return"mat4";default:throw new u("attributeType is not a valid value.")}};var N=Object.freeze(c);var V=1/256,D=256,r={};r.octEncodeInRange=function(e,t,n){a.defined("vector",e),a.defined("result",n);let o=C.magnitudeSquared(e);if(Math.abs(o-1)>h.EPSILON6)throw new u("vector must be normalized.");if(n.x=e.x/(Math.abs(e.x)+Math.abs(e.y)+Math.abs(e.z)),n.y=e.y/(Math.abs(e.x)+Math.abs(e.y)+Math.abs(e.z)),e.z<0){let i=n.x,d=n.y;n.x=(1-Math.abs(d))*h.signNotZero(i),n.y=(1-Math.abs(i))*h.signNotZero(d)}return n.x=h.toSNorm(n.x,t),n.y=h.toSNorm(n.y,t),n};r.octEncode=function(e,t){return r.octEncodeInRange(e,255,t)};var A=new T,F=new Uint8Array(1);function E(e){return F[0]=e,F[0]}r.octEncodeToCartesian4=function(e,t){return r.octEncodeInRange(e,65535,A),t.x=E(A.x*V),t.y=E(A.x),t.z=E(A.y*V),t.w=E(A.y),t};r.octDecodeInRange=function(e,t,n,o){if(a.defined("result",o),e<0||e>n||t<0||t>n)throw new u(`x and y must be unsigned normalized integers between 0 and ${n}`);if(o.x=h.fromSNorm(e,n),o.y=h.fromSNorm(t,n),o.z=1-(Math.abs(o.x)+Math.abs(o.y)),o.z<0){let i=o.x;o.x=(1-Math.abs(o.y))*h.signNotZero(i),o.y=(1-Math.abs(i))*h.signNotZero(o.y)}return C.normalize(o,o)};r.octDecode=function(e,t,n){return r.octDecodeInRange(e,t,255,n)};r.octDecodeFromCartesian4=function(e,t){a.typeOf.object("encoded",e),a.typeOf.object("result",t);let n=e.x,o=e.y,i=e.z,d=e.w;if(n<0||n>255||o<0||o>255||i<0||i>255||d<0||d>255)throw new u("x, y, z, and w must be unsigned normalized integers between 0 and 255");let f=n*D+o,s=i*D+d;return r.octDecodeInRange(f,s,65535,t)};r.octPackFloat=function(e){return a.defined("encoded",e),256*e.x+e.y};var l=new T;r.octEncodeFloat=function(e){return r.octEncode(e,l),r.octPackFloat(l)};r.octDecodeFloat=function(e,t){a.defined("value",e);let n=e/256,o=Math.floor(n),i=(n-o)*256;return r.octDecode(o,i,t)};r.octPack=function(e,t,n,o){a.defined("v1",e),a.defined("v2",t),a.defined("v3",n),a.defined("result",o);let i=r.octEncodeFloat(e),d=r.octEncodeFloat(t),f=r.octEncode(n,l);return o.x=65536*f.x+i,o.y=65536*f.y+d,o};r.octUnpack=function(e,t,n,o){a.defined("packed",e),a.defined("v1",t),a.defined("v2",n),a.defined("v3",o);let i=e.x/65536,d=Math.floor(i),f=(i-d)*65536;i=e.y/65536;let s=Math.floor(i),m=(i-s)*65536;r.octDecodeFloat(f,t),r.octDecodeFloat(m,n),r.octDecode(d,s,o)};r.compressTextureCoordinates=function(e){a.defined("textureCoordinates",e);let t=e.x*4095|0,n=e.y*4095|0;return 4096*t+n};r.decompressTextureCoordinates=function(e,t){a.defined("compressed",e),a.defined("result",t);let n=e/4096,o=Math.floor(n);return t.x=o/4095,t.y=(e-o*4096)/4095,t};function g(e){return e>>1^-(e&1)}r.zigZagDeltaDecode=function(e,t,n){a.defined("uBuffer",e),a.defined("vBuffer",t),a.typeOf.number.equals("uBuffer.length","vBuffer.length",e.length,t.length),b(n)&&a.typeOf.number.equals("uBuffer.length","heightBuffer.length",e.length,n.length);let o=e.length,i=0,d=0,f=0;for(let s=0;s<o;++s)i+=g(e[s]),d+=g(t[s]),e[s]=i,t[s]=d,b(n)&&(f+=g(n[s]),n[s]=f)};r.dequantize=function(e,t,n,o){a.defined("typedArray",e),a.defined("componentDatatype",t),a.defined("type",n),a.defined("count",o);let i=N.getNumberOfComponents(n),d;switch(t){case y.BYTE:d=127;break;case y.UNSIGNED_BYTE:d=255;break;case y.SHORT:d=32767;break;case y.UNSIGNED_SHORT:d=65535;break;case y.INT:d=2147483647;break;case y.UNSIGNED_INT:d=4294967295;break;default:throw new u(`Cannot dequantize component datatype: ${t}`)}let f=new Float32Array(o*i);for(let s=0;s<o;s++)for(let m=0;m<i;m++){let p=s*i+m;f[p]=Math.max(e[p]/d,-1)}return f};r.decodeRGB565=function(e,t){a.defined("typedArray",e);let n=e.length*3;b(t)&&a.typeOf.number.equals("result.length","typedArray.length * 3",t.length,n);let o=e.length;b(t)||(t=new Float32Array(o*3));let i=32-1,d=64-1,f=1/31,s=1/63;for(let m=0;m<o;m++){let p=e[m],R=p>>11,I=p>>5&d,O=p&i,M=3*m;t[M]=R*f,t[M+1]=I*s,t[M+2]=O*f}return t};var W=r;export{W as a};
