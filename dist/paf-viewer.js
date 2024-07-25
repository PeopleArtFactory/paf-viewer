var wt = Object.defineProperty;
var Ct = (r, e, n) =>
  e in r
    ? wt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (r[e] = n);
var te = (r, e, n) => Ct(r, typeof e != "symbol" ? e + "" : e, n);
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const REVISION = "166",
  CullFaceNone = 0,
  CullFaceBack = 1,
  CullFaceFront = 2,
  PCFShadowMap = 1,
  PCFSoftShadowMap = 2,
  VSMShadowMap = 3,
  FrontSide = 0,
  BackSide = 1,
  DoubleSide = 2,
  NoBlending = 0,
  NormalBlending = 1,
  AdditiveBlending = 2,
  SubtractiveBlending = 3,
  MultiplyBlending = 4,
  CustomBlending = 5,
  AddEquation = 100,
  SubtractEquation = 101,
  ReverseSubtractEquation = 102,
  MinEquation = 103,
  MaxEquation = 104,
  ZeroFactor = 200,
  OneFactor = 201,
  SrcColorFactor = 202,
  OneMinusSrcColorFactor = 203,
  SrcAlphaFactor = 204,
  OneMinusSrcAlphaFactor = 205,
  DstAlphaFactor = 206,
  OneMinusDstAlphaFactor = 207,
  DstColorFactor = 208,
  OneMinusDstColorFactor = 209,
  SrcAlphaSaturateFactor = 210,
  ConstantColorFactor = 211,
  OneMinusConstantColorFactor = 212,
  ConstantAlphaFactor = 213,
  OneMinusConstantAlphaFactor = 214,
  NeverDepth = 0,
  AlwaysDepth = 1,
  LessDepth = 2,
  LessEqualDepth = 3,
  EqualDepth = 4,
  GreaterEqualDepth = 5,
  GreaterDepth = 6,
  NotEqualDepth = 7,
  MultiplyOperation = 0,
  MixOperation = 1,
  AddOperation = 2,
  NoToneMapping = 0,
  LinearToneMapping = 1,
  ReinhardToneMapping = 2,
  CineonToneMapping = 3,
  ACESFilmicToneMapping = 4,
  CustomToneMapping = 5,
  AgXToneMapping = 6,
  NeutralToneMapping = 7,
  UVMapping = 300,
  CubeReflectionMapping = 301,
  CubeRefractionMapping = 302,
  EquirectangularReflectionMapping = 303,
  EquirectangularRefractionMapping = 304,
  CubeUVReflectionMapping = 306,
  RepeatWrapping = 1e3,
  ClampToEdgeWrapping = 1001,
  MirroredRepeatWrapping = 1002,
  NearestFilter = 1003,
  NearestMipmapNearestFilter = 1004,
  NearestMipmapLinearFilter = 1005,
  LinearFilter = 1006,
  LinearMipmapNearestFilter = 1007,
  LinearMipmapLinearFilter = 1008,
  UnsignedByteType = 1009,
  ByteType = 1010,
  ShortType = 1011,
  UnsignedShortType = 1012,
  IntType = 1013,
  UnsignedIntType = 1014,
  FloatType = 1015,
  HalfFloatType = 1016,
  UnsignedShort4444Type = 1017,
  UnsignedShort5551Type = 1018,
  UnsignedInt248Type = 1020,
  UnsignedInt5999Type = 35902,
  AlphaFormat = 1021,
  RGBFormat = 1022,
  RGBAFormat = 1023,
  LuminanceFormat = 1024,
  LuminanceAlphaFormat = 1025,
  DepthFormat = 1026,
  DepthStencilFormat = 1027,
  RedFormat = 1028,
  RedIntegerFormat = 1029,
  RGFormat = 1030,
  RGIntegerFormat = 1031,
  RGBAIntegerFormat = 1033,
  RGB_S3TC_DXT1_Format = 33776,
  RGBA_S3TC_DXT1_Format = 33777,
  RGBA_S3TC_DXT3_Format = 33778,
  RGBA_S3TC_DXT5_Format = 33779,
  RGB_PVRTC_4BPPV1_Format = 35840,
  RGB_PVRTC_2BPPV1_Format = 35841,
  RGBA_PVRTC_4BPPV1_Format = 35842,
  RGBA_PVRTC_2BPPV1_Format = 35843,
  RGB_ETC1_Format = 36196,
  RGB_ETC2_Format = 37492,
  RGBA_ETC2_EAC_Format = 37496,
  RGBA_ASTC_4x4_Format = 37808,
  RGBA_ASTC_5x4_Format = 37809,
  RGBA_ASTC_5x5_Format = 37810,
  RGBA_ASTC_6x5_Format = 37811,
  RGBA_ASTC_6x6_Format = 37812,
  RGBA_ASTC_8x5_Format = 37813,
  RGBA_ASTC_8x6_Format = 37814,
  RGBA_ASTC_8x8_Format = 37815,
  RGBA_ASTC_10x5_Format = 37816,
  RGBA_ASTC_10x6_Format = 37817,
  RGBA_ASTC_10x8_Format = 37818,
  RGBA_ASTC_10x10_Format = 37819,
  RGBA_ASTC_12x10_Format = 37820,
  RGBA_ASTC_12x12_Format = 37821,
  RGBA_BPTC_Format = 36492,
  RGB_BPTC_SIGNED_Format = 36494,
  RGB_BPTC_UNSIGNED_Format = 36495,
  RED_RGTC1_Format = 36283,
  SIGNED_RED_RGTC1_Format = 36284,
  RED_GREEN_RGTC2_Format = 36285,
  SIGNED_RED_GREEN_RGTC2_Format = 36286,
  BasicDepthPacking = 3200,
  RGBADepthPacking = 3201,
  TangentSpaceNormalMap = 0,
  ObjectSpaceNormalMap = 1,
  NoColorSpace = "",
  SRGBColorSpace = "srgb",
  LinearSRGBColorSpace = "srgb-linear",
  DisplayP3ColorSpace = "display-p3",
  LinearDisplayP3ColorSpace = "display-p3-linear",
  LinearTransfer = "linear",
  SRGBTransfer = "srgb",
  Rec709Primaries = "rec709",
  P3Primaries = "p3",
  KeepStencilOp = 7680,
  AlwaysStencilFunc = 519,
  NeverCompare = 512,
  LessCompare = 513,
  EqualCompare = 514,
  LessEqualCompare = 515,
  GreaterCompare = 516,
  NotEqualCompare = 517,
  GreaterEqualCompare = 518,
  AlwaysCompare = 519,
  StaticDrawUsage = 35044,
  GLSL3 = "300 es",
  WebGLCoordinateSystem = 2e3,
  WebGPUCoordinateSystem = 2001;
class EventDispatcher {
  addEventListener(e, n) {
    this._listeners === void 0 && (this._listeners = {});
    const i = this._listeners;
    i[e] === void 0 && (i[e] = []), i[e].indexOf(n) === -1 && i[e].push(n);
  }
  hasEventListener(e, n) {
    if (this._listeners === void 0) return !1;
    const i = this._listeners;
    return i[e] !== void 0 && i[e].indexOf(n) !== -1;
  }
  removeEventListener(e, n) {
    if (this._listeners === void 0) return;
    const s = this._listeners[e];
    if (s !== void 0) {
      const a = s.indexOf(n);
      a !== -1 && s.splice(a, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e.type];
    if (i !== void 0) {
      e.target = this;
      const s = i.slice(0);
      for (let a = 0, o = s.length; a < o; a++) s[a].call(this, e);
      e.target = null;
    }
  }
}
const _lut = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff",
  ],
  DEG2RAD = Math.PI / 180,
  RAD2DEG = 180 / Math.PI;
function generateUUID() {
  const r = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0,
    i = (Math.random() * 4294967295) | 0;
  return (
    _lut[r & 255] +
    _lut[(r >> 8) & 255] +
    _lut[(r >> 16) & 255] +
    _lut[(r >> 24) & 255] +
    "-" +
    _lut[e & 255] +
    _lut[(e >> 8) & 255] +
    "-" +
    _lut[((e >> 16) & 15) | 64] +
    _lut[(e >> 24) & 255] +
    "-" +
    _lut[(n & 63) | 128] +
    _lut[(n >> 8) & 255] +
    "-" +
    _lut[(n >> 16) & 255] +
    _lut[(n >> 24) & 255] +
    _lut[i & 255] +
    _lut[(i >> 8) & 255] +
    _lut[(i >> 16) & 255] +
    _lut[(i >> 24) & 255]
  ).toLowerCase();
}
function clamp$2(r, e, n) {
  return Math.max(e, Math.min(n, r));
}
function euclideanModulo(r, e) {
  return ((r % e) + e) % e;
}
function lerp(r, e, n) {
  return (1 - n) * r + n * e;
}
function denormalize(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return r / 4294967295;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int32Array:
      return Math.max(r / 2147483647, -1);
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function normalize(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return Math.round(r * 4294967295);
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int32Array:
      return Math.round(r * 2147483647);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class Vector2 {
  constructor(e = 0, n = 0) {
    (Vector2.prototype.isVector2 = !0), (this.x = e), (this.y = n);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, n) {
    return (this.x = e), (this.y = n), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, n) {
    switch (e) {
      case 0:
        this.x = n;
        break;
      case 1:
        this.y = n;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, n) {
    return (this.x = e.x + n.x), (this.y = e.y + n.y), this;
  }
  addScaledVector(e, n) {
    return (this.x += e.x * n), (this.y += e.y * n), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, n) {
    return (this.x = e.x - n.x), (this.y = e.y - n.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const n = this.x,
      i = this.y,
      s = e.elements;
    return (
      (this.x = s[0] * n + s[3] * i + s[6]),
      (this.y = s[1] * n + s[4] * i + s[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, n) {
    return (
      (this.x = Math.max(e.x, Math.min(n.x, this.x))),
      (this.y = Math.max(e.y, Math.min(n.y, this.y))),
      this
    );
  }
  clampScalar(e, n) {
    return (
      (this.x = Math.max(e, Math.min(n, this.x))),
      (this.y = Math.max(e, Math.min(n, this.y))),
      this
    );
  }
  clampLength(e, n) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(
      Math.max(e, Math.min(n, i))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this;
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const n = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (n === 0) return Math.PI / 2;
    const i = this.dot(e) / n;
    return Math.acos(clamp$2(i, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const n = this.x - e.x,
      i = this.y - e.y;
    return n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, n) {
    return (this.x += (e.x - this.x) * n), (this.y += (e.y - this.y) * n), this;
  }
  lerpVectors(e, n, i) {
    return (
      (this.x = e.x + (n.x - e.x) * i), (this.y = e.y + (n.y - e.y) * i), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, n = 0) {
    return (this.x = e[n]), (this.y = e[n + 1]), this;
  }
  toArray(e = [], n = 0) {
    return (e[n] = this.x), (e[n + 1] = this.y), e;
  }
  fromBufferAttribute(e, n) {
    return (this.x = e.getX(n)), (this.y = e.getY(n)), this;
  }
  rotateAround(e, n) {
    const i = Math.cos(n),
      s = Math.sin(n),
      a = this.x - e.x,
      o = this.y - e.y;
    return (this.x = a * i - o * s + e.x), (this.y = a * s + o * i + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Matrix3 {
  constructor(e, n, i, s, a, o, l, c, h) {
    (Matrix3.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, n, i, s, a, o, l, c, h);
  }
  set(e, n, i, s, a, o, l, c, h) {
    const u = this.elements;
    return (
      (u[0] = e),
      (u[1] = s),
      (u[2] = l),
      (u[3] = n),
      (u[4] = a),
      (u[5] = c),
      (u[6] = i),
      (u[7] = o),
      (u[8] = h),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const n = this.elements,
      i = e.elements;
    return (
      (n[0] = i[0]),
      (n[1] = i[1]),
      (n[2] = i[2]),
      (n[3] = i[3]),
      (n[4] = i[4]),
      (n[5] = i[5]),
      (n[6] = i[6]),
      (n[7] = i[7]),
      (n[8] = i[8]),
      this
    );
  }
  extractBasis(e, n, i) {
    return (
      e.setFromMatrix3Column(this, 0),
      n.setFromMatrix3Column(this, 1),
      i.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const n = e.elements;
    return (
      this.set(n[0], n[4], n[8], n[1], n[5], n[9], n[2], n[6], n[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, n) {
    const i = e.elements,
      s = n.elements,
      a = this.elements,
      o = i[0],
      l = i[3],
      c = i[6],
      h = i[1],
      u = i[4],
      d = i[7],
      f = i[2],
      p = i[5],
      g = i[8],
      v = s[0],
      _ = s[3],
      m = s[6],
      A = s[1],
      S = s[4],
      E = s[7],
      N = s[2],
      w = s[5],
      C = s[8];
    return (
      (a[0] = o * v + l * A + c * N),
      (a[3] = o * _ + l * S + c * w),
      (a[6] = o * m + l * E + c * C),
      (a[1] = h * v + u * A + d * N),
      (a[4] = h * _ + u * S + d * w),
      (a[7] = h * m + u * E + d * C),
      (a[2] = f * v + p * A + g * N),
      (a[5] = f * _ + p * S + g * w),
      (a[8] = f * m + p * E + g * C),
      this
    );
  }
  multiplyScalar(e) {
    const n = this.elements;
    return (
      (n[0] *= e),
      (n[3] *= e),
      (n[6] *= e),
      (n[1] *= e),
      (n[4] *= e),
      (n[7] *= e),
      (n[2] *= e),
      (n[5] *= e),
      (n[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      n = e[0],
      i = e[1],
      s = e[2],
      a = e[3],
      o = e[4],
      l = e[5],
      c = e[6],
      h = e[7],
      u = e[8];
    return (
      n * o * u - n * l * h - i * a * u + i * l * c + s * a * h - s * o * c
    );
  }
  invert() {
    const e = this.elements,
      n = e[0],
      i = e[1],
      s = e[2],
      a = e[3],
      o = e[4],
      l = e[5],
      c = e[6],
      h = e[7],
      u = e[8],
      d = u * o - l * h,
      f = l * c - u * a,
      p = h * a - o * c,
      g = n * d + i * f + s * p;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const v = 1 / g;
    return (
      (e[0] = d * v),
      (e[1] = (s * h - u * i) * v),
      (e[2] = (l * i - s * o) * v),
      (e[3] = f * v),
      (e[4] = (u * n - s * c) * v),
      (e[5] = (s * a - l * n) * v),
      (e[6] = p * v),
      (e[7] = (i * c - h * n) * v),
      (e[8] = (o * n - i * a) * v),
      this
    );
  }
  transpose() {
    let e;
    const n = this.elements;
    return (
      (e = n[1]),
      (n[1] = n[3]),
      (n[3] = e),
      (e = n[2]),
      (n[2] = n[6]),
      (n[6] = e),
      (e = n[5]),
      (n[5] = n[7]),
      (n[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const n = this.elements;
    return (
      (e[0] = n[0]),
      (e[1] = n[3]),
      (e[2] = n[6]),
      (e[3] = n[1]),
      (e[4] = n[4]),
      (e[5] = n[7]),
      (e[6] = n[2]),
      (e[7] = n[5]),
      (e[8] = n[8]),
      this
    );
  }
  setUvTransform(e, n, i, s, a, o, l) {
    const c = Math.cos(a),
      h = Math.sin(a);
    return (
      this.set(
        i * c,
        i * h,
        -i * (c * o + h * l) + o + e,
        -s * h,
        s * c,
        -s * (-h * o + c * l) + l + n,
        0,
        0,
        1
      ),
      this
    );
  }
  //
  scale(e, n) {
    return this.premultiply(_m3.makeScale(e, n)), this;
  }
  rotate(e) {
    return this.premultiply(_m3.makeRotation(-e)), this;
  }
  translate(e, n) {
    return this.premultiply(_m3.makeTranslation(e, n)), this;
  }
  // for 2D Transforms
  makeTranslation(e, n) {
    return (
      e.isVector2
        ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1)
        : this.set(1, 0, e, 0, 1, n, 0, 0, 1),
      this
    );
  }
  makeRotation(e) {
    const n = Math.cos(e),
      i = Math.sin(e);
    return this.set(n, -i, 0, i, n, 0, 0, 0, 1), this;
  }
  makeScale(e, n) {
    return this.set(e, 0, 0, 0, n, 0, 0, 0, 1), this;
  }
  //
  equals(e) {
    const n = this.elements,
      i = e.elements;
    for (let s = 0; s < 9; s++) if (n[s] !== i[s]) return !1;
    return !0;
  }
  fromArray(e, n = 0) {
    for (let i = 0; i < 9; i++) this.elements[i] = e[i + n];
    return this;
  }
  toArray(e = [], n = 0) {
    const i = this.elements;
    return (
      (e[n] = i[0]),
      (e[n + 1] = i[1]),
      (e[n + 2] = i[2]),
      (e[n + 3] = i[3]),
      (e[n + 4] = i[4]),
      (e[n + 5] = i[5]),
      (e[n + 6] = i[6]),
      (e[n + 7] = i[7]),
      (e[n + 8] = i[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const _m3 = /* @__PURE__ */ new Matrix3();
function arrayNeedsUint32(r) {
  for (let e = r.length - 1; e >= 0; --e) if (r[e] >= 65535) return !0;
  return !1;
}
function createElementNS(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
function createCanvasElement() {
  const r = createElementNS("canvas");
  return (r.style.display = "block"), r;
}
const _cache = {};
function warnOnce(r) {
  r in _cache || ((_cache[r] = !0), console.warn(r));
}
function probeAsync(r, e, n) {
  return new Promise(function (i, s) {
    function a() {
      switch (r.clientWaitSync(e, r.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case r.WAIT_FAILED:
          s();
          break;
        case r.TIMEOUT_EXPIRED:
          setTimeout(a, n);
          break;
        default:
          i();
      }
    }
    setTimeout(a, n);
  });
}
const LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = /* @__PURE__ */ new Matrix3().set(
    0.8224621,
    0.177538,
    0,
    0.0331941,
    0.9668058,
    0,
    0.0170827,
    0.0723974,
    0.9105199
  ),
  LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = /* @__PURE__ */ new Matrix3().set(
    1.2249401,
    -0.2249404,
    0,
    -0.0420569,
    1.0420571,
    0,
    -0.0196376,
    -0.0786361,
    1.0982735
  ),
  COLOR_SPACES = {
    [LinearSRGBColorSpace]: {
      transfer: LinearTransfer,
      primaries: Rec709Primaries,
      toReference: (r) => r,
      fromReference: (r) => r,
    },
    [SRGBColorSpace]: {
      transfer: SRGBTransfer,
      primaries: Rec709Primaries,
      toReference: (r) => r.convertSRGBToLinear(),
      fromReference: (r) => r.convertLinearToSRGB(),
    },
    [LinearDisplayP3ColorSpace]: {
      transfer: LinearTransfer,
      primaries: P3Primaries,
      toReference: (r) => r.applyMatrix3(LINEAR_DISPLAY_P3_TO_LINEAR_SRGB),
      fromReference: (r) => r.applyMatrix3(LINEAR_SRGB_TO_LINEAR_DISPLAY_P3),
    },
    [DisplayP3ColorSpace]: {
      transfer: SRGBTransfer,
      primaries: P3Primaries,
      toReference: (r) =>
        r.convertSRGBToLinear().applyMatrix3(LINEAR_DISPLAY_P3_TO_LINEAR_SRGB),
      fromReference: (r) =>
        r.applyMatrix3(LINEAR_SRGB_TO_LINEAR_DISPLAY_P3).convertLinearToSRGB(),
    },
  },
  SUPPORTED_WORKING_COLOR_SPACES = /* @__PURE__ */ new Set([
    LinearSRGBColorSpace,
    LinearDisplayP3ColorSpace,
  ]),
  ColorManagement = {
    enabled: !0,
    _workingColorSpace: LinearSRGBColorSpace,
    get workingColorSpace() {
      return this._workingColorSpace;
    },
    set workingColorSpace(r) {
      if (!SUPPORTED_WORKING_COLOR_SPACES.has(r))
        throw new Error(`Unsupported working color space, "${r}".`);
      this._workingColorSpace = r;
    },
    convert: function (r, e, n) {
      if (this.enabled === !1 || e === n || !e || !n) return r;
      const i = COLOR_SPACES[e].toReference,
        s = COLOR_SPACES[n].fromReference;
      return s(i(r));
    },
    fromWorkingColorSpace: function (r, e) {
      return this.convert(r, this._workingColorSpace, e);
    },
    toWorkingColorSpace: function (r, e) {
      return this.convert(r, e, this._workingColorSpace);
    },
    getPrimaries: function (r) {
      return COLOR_SPACES[r].primaries;
    },
    getTransfer: function (r) {
      return r === NoColorSpace ? LinearTransfer : COLOR_SPACES[r].transfer;
    },
  };
function SRGBToLinear(r) {
  return r < 0.04045
    ? r * 0.0773993808
    : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function LinearToSRGB(r) {
  return r < 31308e-7 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
let _canvas;
class ImageUtils {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let n;
    if (e instanceof HTMLCanvasElement) n = e;
    else {
      _canvas === void 0 && (_canvas = createElementNS("canvas")),
        (_canvas.width = e.width),
        (_canvas.height = e.height);
      const i = _canvas.getContext("2d");
      e instanceof ImageData
        ? i.putImageData(e, 0, 0)
        : i.drawImage(e, 0, 0, e.width, e.height),
        (n = _canvas);
    }
    return n.width > 2048 || n.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          e
        ),
        n.toDataURL("image/jpeg", 0.6))
      : n.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const n = createElementNS("canvas");
      (n.width = e.width), (n.height = e.height);
      const i = n.getContext("2d");
      i.drawImage(e, 0, 0, e.width, e.height);
      const s = i.getImageData(0, 0, e.width, e.height),
        a = s.data;
      for (let o = 0; o < a.length; o++) a[o] = SRGBToLinear(a[o] / 255) * 255;
      return i.putImageData(s, 0, 0), n;
    } else if (e.data) {
      const n = e.data.slice(0);
      for (let i = 0; i < n.length; i++)
        n instanceof Uint8Array || n instanceof Uint8ClampedArray
          ? (n[i] = Math.floor(SRGBToLinear(n[i] / 255) * 255))
          : (n[i] = SRGBToLinear(n[i]));
      return {
        data: n,
        width: e.width,
        height: e.height,
      };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        e
      );
  }
}
let _sourceId = 0;
class Source {
  constructor(e = null) {
    (this.isSource = !0),
      Object.defineProperty(this, "id", { value: _sourceId++ }),
      (this.uuid = generateUUID()),
      (this.data = e),
      (this.dataReady = !0),
      (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const n = e === void 0 || typeof e == "string";
    if (!n && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const i = {
        uuid: this.uuid,
        url: "",
      },
      s = this.data;
    if (s !== null) {
      let a;
      if (Array.isArray(s)) {
        a = [];
        for (let o = 0, l = s.length; o < l; o++)
          s[o].isDataTexture
            ? a.push(serializeImage(s[o].image))
            : a.push(serializeImage(s[o]));
      } else a = serializeImage(s);
      i.url = a;
    }
    return n || (e.images[this.uuid] = i), i;
  }
}
function serializeImage(r) {
  return (typeof HTMLImageElement < "u" && r instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && r instanceof ImageBitmap)
    ? ImageUtils.getDataURL(r)
    : r.data
    ? {
        data: Array.from(r.data),
        width: r.width,
        height: r.height,
        type: r.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let _textureId = 0;
class Texture extends EventDispatcher {
  constructor(
    e = Texture.DEFAULT_IMAGE,
    n = Texture.DEFAULT_MAPPING,
    i = 1001,
    s = 1001,
    a = 1006,
    o = 1008,
    l = 1023,
    c = 1009,
    h = Texture.DEFAULT_ANISOTROPY,
    u = NoColorSpace
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: _textureId++ }),
      (this.uuid = generateUUID()),
      (this.name = ""),
      (this.source = new Source(e)),
      (this.mipmaps = []),
      (this.mapping = n),
      (this.channel = 0),
      (this.wrapS = i),
      (this.wrapT = s),
      (this.magFilter = a),
      (this.minFilter = o),
      (this.anisotropy = h),
      (this.format = l),
      (this.internalFormat = null),
      (this.type = c),
      (this.offset = new Vector2(0, 0)),
      (this.repeat = new Vector2(1, 1)),
      (this.center = new Vector2(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Matrix3()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = u),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.pmremVersion = 0);
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const n = e === void 0 || typeof e == "string";
    if (!n && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const i = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON",
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (i.userData = this.userData),
      n || (e.textures[this.uuid] = i),
      i
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== 300) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case 1e3:
          e.x = e.x - Math.floor(e.x);
          break;
        case 1001:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case 1e3:
          e.y = e.y - Math.floor(e.y);
          break;
        case 1001:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
Texture.DEFAULT_IMAGE = null;
Texture.DEFAULT_MAPPING = 300;
Texture.DEFAULT_ANISOTROPY = 1;
class Vector4 {
  constructor(e = 0, n = 0, i = 0, s = 1) {
    (Vector4.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = n),
      (this.z = i),
      (this.w = s);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, n, i, s) {
    return (this.x = e), (this.y = n), (this.z = i), (this.w = s), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, n) {
    switch (e) {
      case 0:
        this.x = n;
        break;
      case 1:
        this.y = n;
        break;
      case 2:
        this.z = n;
        break;
      case 3:
        this.w = n;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
    );
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, n) {
    return (
      (this.x = e.x + n.x),
      (this.y = e.y + n.y),
      (this.z = e.z + n.z),
      (this.w = e.w + n.w),
      this
    );
  }
  addScaledVector(e, n) {
    return (
      (this.x += e.x * n),
      (this.y += e.y * n),
      (this.z += e.z * n),
      (this.w += e.w * n),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
    );
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, n) {
    return (
      (this.x = e.x - n.x),
      (this.y = e.y - n.y),
      (this.z = e.z - n.z),
      (this.w = e.w - n.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const n = this.x,
      i = this.y,
      s = this.z,
      a = this.w,
      o = e.elements;
    return (
      (this.x = o[0] * n + o[4] * i + o[8] * s + o[12] * a),
      (this.y = o[1] * n + o[5] * i + o[9] * s + o[13] * a),
      (this.z = o[2] * n + o[6] * i + o[10] * s + o[14] * a),
      (this.w = o[3] * n + o[7] * i + o[11] * s + o[15] * a),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const n = Math.sqrt(1 - e.w * e.w);
    return (
      n < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / n), (this.y = e.y / n), (this.z = e.z / n)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let n, i, s, a;
    const c = e.elements,
      h = c[0],
      u = c[4],
      d = c[8],
      f = c[1],
      p = c[5],
      g = c[9],
      v = c[2],
      _ = c[6],
      m = c[10];
    if (
      Math.abs(u - f) < 0.01 &&
      Math.abs(d - v) < 0.01 &&
      Math.abs(g - _) < 0.01
    ) {
      if (
        Math.abs(u + f) < 0.1 &&
        Math.abs(d + v) < 0.1 &&
        Math.abs(g + _) < 0.1 &&
        Math.abs(h + p + m - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      n = Math.PI;
      const S = (h + 1) / 2,
        E = (p + 1) / 2,
        N = (m + 1) / 2,
        w = (u + f) / 4,
        C = (d + v) / 4,
        U = (g + _) / 4;
      return (
        S > E && S > N
          ? S < 0.01
            ? ((i = 0), (s = 0.707106781), (a = 0.707106781))
            : ((i = Math.sqrt(S)), (s = w / i), (a = C / i))
          : E > N
          ? E < 0.01
            ? ((i = 0.707106781), (s = 0), (a = 0.707106781))
            : ((s = Math.sqrt(E)), (i = w / s), (a = U / s))
          : N < 0.01
          ? ((i = 0.707106781), (s = 0.707106781), (a = 0))
          : ((a = Math.sqrt(N)), (i = C / a), (s = U / a)),
        this.set(i, s, a, n),
        this
      );
    }
    let A = Math.sqrt(
      (_ - g) * (_ - g) + (d - v) * (d - v) + (f - u) * (f - u)
    );
    return (
      Math.abs(A) < 1e-3 && (A = 1),
      (this.x = (_ - g) / A),
      (this.y = (d - v) / A),
      (this.z = (f - u) / A),
      (this.w = Math.acos((h + p + m - 1) / 2)),
      this
    );
  }
  setFromMatrixPosition(e) {
    const n = e.elements;
    return (
      (this.x = n[12]),
      (this.y = n[13]),
      (this.z = n[14]),
      (this.w = n[15]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, n) {
    return (
      (this.x = Math.max(e.x, Math.min(n.x, this.x))),
      (this.y = Math.max(e.y, Math.min(n.y, this.y))),
      (this.z = Math.max(e.z, Math.min(n.z, this.z))),
      (this.w = Math.max(e.w, Math.min(n.w, this.w))),
      this
    );
  }
  clampScalar(e, n) {
    return (
      (this.x = Math.max(e, Math.min(n, this.x))),
      (this.y = Math.max(e, Math.min(n, this.y))),
      (this.z = Math.max(e, Math.min(n, this.z))),
      (this.w = Math.max(e, Math.min(n, this.w))),
      this
    );
  }
  clampLength(e, n) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(
      Math.max(e, Math.min(n, i))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, n) {
    return (
      (this.x += (e.x - this.x) * n),
      (this.y += (e.y - this.y) * n),
      (this.z += (e.z - this.z) * n),
      (this.w += (e.w - this.w) * n),
      this
    );
  }
  lerpVectors(e, n, i) {
    return (
      (this.x = e.x + (n.x - e.x) * i),
      (this.y = e.y + (n.y - e.y) * i),
      (this.z = e.z + (n.z - e.z) * i),
      (this.w = e.w + (n.w - e.w) * i),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, n = 0) {
    return (
      (this.x = e[n]),
      (this.y = e[n + 1]),
      (this.z = e[n + 2]),
      (this.w = e[n + 3]),
      this
    );
  }
  toArray(e = [], n = 0) {
    return (
      (e[n] = this.x),
      (e[n + 1] = this.y),
      (e[n + 2] = this.z),
      (e[n + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, n) {
    return (
      (this.x = e.getX(n)),
      (this.y = e.getY(n)),
      (this.z = e.getZ(n)),
      (this.w = e.getW(n)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class RenderTarget extends EventDispatcher {
  constructor(e = 1, n = 1, i = {}) {
    super(),
      (this.isRenderTarget = !0),
      (this.width = e),
      (this.height = n),
      (this.depth = 1),
      (this.scissor = new Vector4(0, 0, e, n)),
      (this.scissorTest = !1),
      (this.viewport = new Vector4(0, 0, e, n));
    const s = { width: e, height: n, depth: 1 };
    i = Object.assign(
      {
        generateMipmaps: !1,
        internalFormat: null,
        minFilter: 1006,
        depthBuffer: !0,
        stencilBuffer: !1,
        resolveDepthBuffer: !0,
        resolveStencilBuffer: !0,
        depthTexture: null,
        samples: 0,
        count: 1,
      },
      i
    );
    const a = new Texture(
      s,
      i.mapping,
      i.wrapS,
      i.wrapT,
      i.magFilter,
      i.minFilter,
      i.format,
      i.type,
      i.anisotropy,
      i.colorSpace
    );
    (a.flipY = !1),
      (a.generateMipmaps = i.generateMipmaps),
      (a.internalFormat = i.internalFormat),
      (this.textures = []);
    const o = i.count;
    for (let l = 0; l < o; l++)
      (this.textures[l] = a.clone()),
        (this.textures[l].isRenderTargetTexture = !0);
    (this.depthBuffer = i.depthBuffer),
      (this.stencilBuffer = i.stencilBuffer),
      (this.resolveDepthBuffer = i.resolveDepthBuffer),
      (this.resolveStencilBuffer = i.resolveStencilBuffer),
      (this.depthTexture = i.depthTexture),
      (this.samples = i.samples);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, n, i = 1) {
    if (this.width !== e || this.height !== n || this.depth !== i) {
      (this.width = e), (this.height = n), (this.depth = i);
      for (let s = 0, a = this.textures.length; s < a; s++)
        (this.textures[s].image.width = e),
          (this.textures[s].image.height = n),
          (this.textures[s].image.depth = i);
      this.dispose();
    }
    this.viewport.set(0, 0, e, n), this.scissor.set(0, 0, e, n);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.scissor.copy(e.scissor),
      (this.scissorTest = e.scissorTest),
      this.viewport.copy(e.viewport),
      (this.textures.length = 0);
    for (let i = 0, s = e.textures.length; i < s; i++)
      (this.textures[i] = e.textures[i].clone()),
        (this.textures[i].isRenderTargetTexture = !0);
    const n = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new Source(n)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      (this.resolveDepthBuffer = e.resolveDepthBuffer),
      (this.resolveStencilBuffer = e.resolveStencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class WebGLRenderTarget extends RenderTarget {
  constructor(e = 1, n = 1, i = {}) {
    super(e, n, i), (this.isWebGLRenderTarget = !0);
  }
}
class DataArrayTexture extends Texture {
  constructor(e = null, n = 1, i = 1, s = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: n, height: i, depth: s }),
      (this.magFilter = 1003),
      (this.minFilter = 1003),
      (this.wrapR = 1001),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.layerUpdates = /* @__PURE__ */ new Set());
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Data3DTexture extends Texture {
  constructor(e = null, n = 1, i = 1, s = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: n, height: i, depth: s }),
      (this.magFilter = 1003),
      (this.minFilter = 1003),
      (this.wrapR = 1001),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Quaternion {
  constructor(e = 0, n = 0, i = 0, s = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = n),
      (this._z = i),
      (this._w = s);
  }
  static slerpFlat(e, n, i, s, a, o, l) {
    let c = i[s + 0],
      h = i[s + 1],
      u = i[s + 2],
      d = i[s + 3];
    const f = a[o + 0],
      p = a[o + 1],
      g = a[o + 2],
      v = a[o + 3];
    if (l === 0) {
      (e[n + 0] = c), (e[n + 1] = h), (e[n + 2] = u), (e[n + 3] = d);
      return;
    }
    if (l === 1) {
      (e[n + 0] = f), (e[n + 1] = p), (e[n + 2] = g), (e[n + 3] = v);
      return;
    }
    if (d !== v || c !== f || h !== p || u !== g) {
      let _ = 1 - l;
      const m = c * f + h * p + u * g + d * v,
        A = m >= 0 ? 1 : -1,
        S = 1 - m * m;
      if (S > Number.EPSILON) {
        const N = Math.sqrt(S),
          w = Math.atan2(N, m * A);
        (_ = Math.sin(_ * w) / N), (l = Math.sin(l * w) / N);
      }
      const E = l * A;
      if (
        ((c = c * _ + f * E),
        (h = h * _ + p * E),
        (u = u * _ + g * E),
        (d = d * _ + v * E),
        _ === 1 - l)
      ) {
        const N = 1 / Math.sqrt(c * c + h * h + u * u + d * d);
        (c *= N), (h *= N), (u *= N), (d *= N);
      }
    }
    (e[n] = c), (e[n + 1] = h), (e[n + 2] = u), (e[n + 3] = d);
  }
  static multiplyQuaternionsFlat(e, n, i, s, a, o) {
    const l = i[s],
      c = i[s + 1],
      h = i[s + 2],
      u = i[s + 3],
      d = a[o],
      f = a[o + 1],
      p = a[o + 2],
      g = a[o + 3];
    return (
      (e[n] = l * g + u * d + c * p - h * f),
      (e[n + 1] = c * g + u * f + h * d - l * p),
      (e[n + 2] = h * g + u * p + l * f - c * d),
      (e[n + 3] = u * g - l * d - c * f - h * p),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, n, i, s) {
    return (
      (this._x = e),
      (this._y = n),
      (this._z = i),
      (this._w = s),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, n = !0) {
    const i = e._x,
      s = e._y,
      a = e._z,
      o = e._order,
      l = Math.cos,
      c = Math.sin,
      h = l(i / 2),
      u = l(s / 2),
      d = l(a / 2),
      f = c(i / 2),
      p = c(s / 2),
      g = c(a / 2);
    switch (o) {
      case "XYZ":
        (this._x = f * u * d + h * p * g),
          (this._y = h * p * d - f * u * g),
          (this._z = h * u * g + f * p * d),
          (this._w = h * u * d - f * p * g);
        break;
      case "YXZ":
        (this._x = f * u * d + h * p * g),
          (this._y = h * p * d - f * u * g),
          (this._z = h * u * g - f * p * d),
          (this._w = h * u * d + f * p * g);
        break;
      case "ZXY":
        (this._x = f * u * d - h * p * g),
          (this._y = h * p * d + f * u * g),
          (this._z = h * u * g + f * p * d),
          (this._w = h * u * d - f * p * g);
        break;
      case "ZYX":
        (this._x = f * u * d - h * p * g),
          (this._y = h * p * d + f * u * g),
          (this._z = h * u * g - f * p * d),
          (this._w = h * u * d + f * p * g);
        break;
      case "YZX":
        (this._x = f * u * d + h * p * g),
          (this._y = h * p * d + f * u * g),
          (this._z = h * u * g - f * p * d),
          (this._w = h * u * d - f * p * g);
        break;
      case "XZY":
        (this._x = f * u * d - h * p * g),
          (this._y = h * p * d - f * u * g),
          (this._z = h * u * g + f * p * d),
          (this._w = h * u * d + f * p * g);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o
        );
    }
    return n === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, n) {
    const i = n / 2,
      s = Math.sin(i);
    return (
      (this._x = e.x * s),
      (this._y = e.y * s),
      (this._z = e.z * s),
      (this._w = Math.cos(i)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const n = e.elements,
      i = n[0],
      s = n[4],
      a = n[8],
      o = n[1],
      l = n[5],
      c = n[9],
      h = n[2],
      u = n[6],
      d = n[10],
      f = i + l + d;
    if (f > 0) {
      const p = 0.5 / Math.sqrt(f + 1);
      (this._w = 0.25 / p),
        (this._x = (u - c) * p),
        (this._y = (a - h) * p),
        (this._z = (o - s) * p);
    } else if (i > l && i > d) {
      const p = 2 * Math.sqrt(1 + i - l - d);
      (this._w = (u - c) / p),
        (this._x = 0.25 * p),
        (this._y = (s + o) / p),
        (this._z = (a + h) / p);
    } else if (l > d) {
      const p = 2 * Math.sqrt(1 + l - i - d);
      (this._w = (a - h) / p),
        (this._x = (s + o) / p),
        (this._y = 0.25 * p),
        (this._z = (c + u) / p);
    } else {
      const p = 2 * Math.sqrt(1 + d - i - l);
      (this._w = (o - s) / p),
        (this._x = (a + h) / p),
        (this._y = (c + u) / p),
        (this._z = 0.25 * p);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, n) {
    let i = e.dot(n) + 1;
    return (
      i < Number.EPSILON
        ? ((i = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = i))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = i)))
        : ((this._x = e.y * n.z - e.z * n.y),
          (this._y = e.z * n.x - e.x * n.z),
          (this._z = e.x * n.y - e.y * n.x),
          (this._w = i)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(clamp$2(this.dot(e), -1, 1)));
  }
  rotateTowards(e, n) {
    const i = this.angleTo(e);
    if (i === 0) return this;
    const s = Math.min(1, n / i);
    return this.slerp(e, s), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, n) {
    const i = e._x,
      s = e._y,
      a = e._z,
      o = e._w,
      l = n._x,
      c = n._y,
      h = n._z,
      u = n._w;
    return (
      (this._x = i * u + o * l + s * h - a * c),
      (this._y = s * u + o * c + a * l - i * h),
      (this._z = a * u + o * h + i * c - s * l),
      (this._w = o * u - i * l - s * c - a * h),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, n) {
    if (n === 0) return this;
    if (n === 1) return this.copy(e);
    const i = this._x,
      s = this._y,
      a = this._z,
      o = this._w;
    let l = o * e._w + i * e._x + s * e._y + a * e._z;
    if (
      (l < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (l = -l))
        : this.copy(e),
      l >= 1)
    )
      return (this._w = o), (this._x = i), (this._y = s), (this._z = a), this;
    const c = 1 - l * l;
    if (c <= Number.EPSILON) {
      const p = 1 - n;
      return (
        (this._w = p * o + n * this._w),
        (this._x = p * i + n * this._x),
        (this._y = p * s + n * this._y),
        (this._z = p * a + n * this._z),
        this.normalize(),
        this
      );
    }
    const h = Math.sqrt(c),
      u = Math.atan2(h, l),
      d = Math.sin((1 - n) * u) / h,
      f = Math.sin(n * u) / h;
    return (
      (this._w = o * d + this._w * f),
      (this._x = i * d + this._x * f),
      (this._y = s * d + this._y * f),
      (this._z = a * d + this._z * f),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, n, i) {
    return this.copy(e).slerp(n, i);
  }
  random() {
    const e = 2 * Math.PI * Math.random(),
      n = 2 * Math.PI * Math.random(),
      i = Math.random(),
      s = Math.sqrt(1 - i),
      a = Math.sqrt(i);
    return this.set(
      s * Math.sin(e),
      s * Math.cos(e),
      a * Math.sin(n),
      a * Math.cos(n)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, n = 0) {
    return (
      (this._x = e[n]),
      (this._y = e[n + 1]),
      (this._z = e[n + 2]),
      (this._w = e[n + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], n = 0) {
    return (
      (e[n] = this._x),
      (e[n + 1] = this._y),
      (e[n + 2] = this._z),
      (e[n + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, n) {
    return (
      (this._x = e.getX(n)),
      (this._y = e.getY(n)),
      (this._z = e.getZ(n)),
      (this._w = e.getW(n)),
      this._onChangeCallback(),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class Vector3 {
  constructor(e = 0, n = 0, i = 0) {
    (Vector3.prototype.isVector3 = !0),
      (this.x = e),
      (this.y = n),
      (this.z = i);
  }
  set(e, n, i) {
    return (
      i === void 0 && (i = this.z),
      (this.x = e),
      (this.y = n),
      (this.z = i),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, n) {
    switch (e) {
      case 0:
        this.x = n;
        break;
      case 1:
        this.y = n;
        break;
      case 2:
        this.z = n;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, n) {
    return (
      (this.x = e.x + n.x), (this.y = e.y + n.y), (this.z = e.z + n.z), this
    );
  }
  addScaledVector(e, n) {
    return (this.x += e.x * n), (this.y += e.y * n), (this.z += e.z * n), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, n) {
    return (
      (this.x = e.x - n.x), (this.y = e.y - n.y), (this.z = e.z - n.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, n) {
    return (
      (this.x = e.x * n.x), (this.y = e.y * n.y), (this.z = e.z * n.z), this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(_quaternion$4.setFromEuler(e));
  }
  applyAxisAngle(e, n) {
    return this.applyQuaternion(_quaternion$4.setFromAxisAngle(e, n));
  }
  applyMatrix3(e) {
    const n = this.x,
      i = this.y,
      s = this.z,
      a = e.elements;
    return (
      (this.x = a[0] * n + a[3] * i + a[6] * s),
      (this.y = a[1] * n + a[4] * i + a[7] * s),
      (this.z = a[2] * n + a[5] * i + a[8] * s),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const n = this.x,
      i = this.y,
      s = this.z,
      a = e.elements,
      o = 1 / (a[3] * n + a[7] * i + a[11] * s + a[15]);
    return (
      (this.x = (a[0] * n + a[4] * i + a[8] * s + a[12]) * o),
      (this.y = (a[1] * n + a[5] * i + a[9] * s + a[13]) * o),
      (this.z = (a[2] * n + a[6] * i + a[10] * s + a[14]) * o),
      this
    );
  }
  applyQuaternion(e) {
    const n = this.x,
      i = this.y,
      s = this.z,
      a = e.x,
      o = e.y,
      l = e.z,
      c = e.w,
      h = 2 * (o * s - l * i),
      u = 2 * (l * n - a * s),
      d = 2 * (a * i - o * n);
    return (
      (this.x = n + c * h + o * d - l * u),
      (this.y = i + c * u + l * h - a * d),
      (this.z = s + c * d + a * u - o * h),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    const n = this.x,
      i = this.y,
      s = this.z,
      a = e.elements;
    return (
      (this.x = a[0] * n + a[4] * i + a[8] * s),
      (this.y = a[1] * n + a[5] * i + a[9] * s),
      (this.z = a[2] * n + a[6] * i + a[10] * s),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, n) {
    return (
      (this.x = Math.max(e.x, Math.min(n.x, this.x))),
      (this.y = Math.max(e.y, Math.min(n.y, this.y))),
      (this.z = Math.max(e.z, Math.min(n.z, this.z))),
      this
    );
  }
  clampScalar(e, n) {
    return (
      (this.x = Math.max(e, Math.min(n, this.x))),
      (this.y = Math.max(e, Math.min(n, this.y))),
      (this.z = Math.max(e, Math.min(n, this.z))),
      this
    );
  }
  clampLength(e, n) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(
      Math.max(e, Math.min(n, i))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, n) {
    return (
      (this.x += (e.x - this.x) * n),
      (this.y += (e.y - this.y) * n),
      (this.z += (e.z - this.z) * n),
      this
    );
  }
  lerpVectors(e, n, i) {
    return (
      (this.x = e.x + (n.x - e.x) * i),
      (this.y = e.y + (n.y - e.y) * i),
      (this.z = e.z + (n.z - e.z) * i),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, n) {
    const i = e.x,
      s = e.y,
      a = e.z,
      o = n.x,
      l = n.y,
      c = n.z;
    return (
      (this.x = s * c - a * l),
      (this.y = a * o - i * c),
      (this.z = i * l - s * o),
      this
    );
  }
  projectOnVector(e) {
    const n = e.lengthSq();
    if (n === 0) return this.set(0, 0, 0);
    const i = e.dot(this) / n;
    return this.copy(e).multiplyScalar(i);
  }
  projectOnPlane(e) {
    return _vector$c.copy(this).projectOnVector(e), this.sub(_vector$c);
  }
  reflect(e) {
    return this.sub(_vector$c.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const n = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (n === 0) return Math.PI / 2;
    const i = this.dot(e) / n;
    return Math.acos(clamp$2(i, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const n = this.x - e.x,
      i = this.y - e.y,
      s = this.z - e.z;
    return n * n + i * i + s * s;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, n, i) {
    const s = Math.sin(n) * e;
    return (
      (this.x = s * Math.sin(i)),
      (this.y = Math.cos(n) * e),
      (this.z = s * Math.cos(i)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, n, i) {
    return (
      (this.x = e * Math.sin(n)), (this.y = i), (this.z = e * Math.cos(n)), this
    );
  }
  setFromMatrixPosition(e) {
    const n = e.elements;
    return (this.x = n[12]), (this.y = n[13]), (this.z = n[14]), this;
  }
  setFromMatrixScale(e) {
    const n = this.setFromMatrixColumn(e, 0).length(),
      i = this.setFromMatrixColumn(e, 1).length(),
      s = this.setFromMatrixColumn(e, 2).length();
    return (this.x = n), (this.y = i), (this.z = s), this;
  }
  setFromMatrixColumn(e, n) {
    return this.fromArray(e.elements, n * 4);
  }
  setFromMatrix3Column(e, n) {
    return this.fromArray(e.elements, n * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  setFromColor(e) {
    return (this.x = e.r), (this.y = e.g), (this.z = e.b), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, n = 0) {
    return (this.x = e[n]), (this.y = e[n + 1]), (this.z = e[n + 2]), this;
  }
  toArray(e = [], n = 0) {
    return (e[n] = this.x), (e[n + 1] = this.y), (e[n + 2] = this.z), e;
  }
  fromBufferAttribute(e, n) {
    return (
      (this.x = e.getX(n)), (this.y = e.getY(n)), (this.z = e.getZ(n)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2,
      n = Math.random() * 2 - 1,
      i = Math.sqrt(1 - n * n);
    return (
      (this.x = i * Math.cos(e)), (this.y = n), (this.z = i * Math.sin(e)), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const _vector$c = /* @__PURE__ */ new Vector3(),
  _quaternion$4 = /* @__PURE__ */ new Quaternion();
class Box3 {
  constructor(
    e = new Vector3(1 / 0, 1 / 0, 1 / 0),
    n = new Vector3(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = n);
  }
  set(e, n) {
    return this.min.copy(e), this.max.copy(n), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let n = 0, i = e.length; n < i; n += 3)
      this.expandByPoint(_vector$b.fromArray(e, n));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let n = 0, i = e.count; n < i; n++)
      this.expandByPoint(_vector$b.fromBufferAttribute(e, n));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let n = 0, i = e.length; n < i; n++) this.expandByPoint(e[n]);
    return this;
  }
  setFromCenterAndSize(e, n) {
    const i = _vector$b.copy(n).multiplyScalar(0.5);
    return this.min.copy(e).sub(i), this.max.copy(e).add(i), this;
  }
  setFromObject(e, n = !1) {
    return this.makeEmpty(), this.expandByObject(e, n);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, n = !1) {
    e.updateWorldMatrix(!1, !1);
    const i = e.geometry;
    if (i !== void 0) {
      const a = i.getAttribute("position");
      if (n === !0 && a !== void 0 && e.isInstancedMesh !== !0)
        for (let o = 0, l = a.count; o < l; o++)
          e.isMesh === !0
            ? e.getVertexPosition(o, _vector$b)
            : _vector$b.fromBufferAttribute(a, o),
            _vector$b.applyMatrix4(e.matrixWorld),
            this.expandByPoint(_vector$b);
      else
        e.boundingBox !== void 0
          ? (e.boundingBox === null && e.computeBoundingBox(),
            _box$4.copy(e.boundingBox))
          : (i.boundingBox === null && i.computeBoundingBox(),
            _box$4.copy(i.boundingBox)),
          _box$4.applyMatrix4(e.matrixWorld),
          this.union(_box$4);
    }
    const s = e.children;
    for (let a = 0, o = s.length; a < o; a++) this.expandByObject(s[a], n);
    return this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, n) {
    return n.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, _vector$b),
      _vector$b.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let n, i;
    return (
      e.normal.x > 0
        ? ((n = e.normal.x * this.min.x), (i = e.normal.x * this.max.x))
        : ((n = e.normal.x * this.max.x), (i = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((n += e.normal.y * this.min.y), (i += e.normal.y * this.max.y))
        : ((n += e.normal.y * this.max.y), (i += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((n += e.normal.z * this.min.z), (i += e.normal.z * this.max.z))
        : ((n += e.normal.z * this.max.z), (i += e.normal.z * this.min.z)),
      n <= -e.constant && i >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(_center),
      _extents.subVectors(this.max, _center),
      _v0$2.subVectors(e.a, _center),
      _v1$7.subVectors(e.b, _center),
      _v2$4.subVectors(e.c, _center),
      _f0.subVectors(_v1$7, _v0$2),
      _f1.subVectors(_v2$4, _v1$7),
      _f2.subVectors(_v0$2, _v2$4);
    let n = [
      0,
      -_f0.z,
      _f0.y,
      0,
      -_f1.z,
      _f1.y,
      0,
      -_f2.z,
      _f2.y,
      _f0.z,
      0,
      -_f0.x,
      _f1.z,
      0,
      -_f1.x,
      _f2.z,
      0,
      -_f2.x,
      -_f0.y,
      _f0.x,
      0,
      -_f1.y,
      _f1.x,
      0,
      -_f2.y,
      _f2.x,
      0,
    ];
    return !satForAxes(n, _v0$2, _v1$7, _v2$4, _extents) ||
      ((n = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      !satForAxes(n, _v0$2, _v1$7, _v2$4, _extents))
      ? !1
      : (_triangleNormal.crossVectors(_f0, _f1),
        (n = [_triangleNormal.x, _triangleNormal.y, _triangleNormal.z]),
        satForAxes(n, _v0$2, _v1$7, _v2$4, _extents));
  }
  clampPoint(e, n) {
    return n.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, _vector$b).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = this.getSize(_vector$b).length() * 0.5)),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (_points[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        _points[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        _points[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        _points[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        _points[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        _points[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        _points[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        _points[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(_points),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const _points = [
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
  ],
  _vector$b = /* @__PURE__ */ new Vector3(),
  _box$4 = /* @__PURE__ */ new Box3(),
  _v0$2 = /* @__PURE__ */ new Vector3(),
  _v1$7 = /* @__PURE__ */ new Vector3(),
  _v2$4 = /* @__PURE__ */ new Vector3(),
  _f0 = /* @__PURE__ */ new Vector3(),
  _f1 = /* @__PURE__ */ new Vector3(),
  _f2 = /* @__PURE__ */ new Vector3(),
  _center = /* @__PURE__ */ new Vector3(),
  _extents = /* @__PURE__ */ new Vector3(),
  _triangleNormal = /* @__PURE__ */ new Vector3(),
  _testAxis = /* @__PURE__ */ new Vector3();
function satForAxes(r, e, n, i, s) {
  for (let a = 0, o = r.length - 3; a <= o; a += 3) {
    _testAxis.fromArray(r, a);
    const l =
        s.x * Math.abs(_testAxis.x) +
        s.y * Math.abs(_testAxis.y) +
        s.z * Math.abs(_testAxis.z),
      c = e.dot(_testAxis),
      h = n.dot(_testAxis),
      u = i.dot(_testAxis);
    if (Math.max(-Math.max(c, h, u), Math.min(c, h, u)) > l) return !1;
  }
  return !0;
}
const _box$3 = /* @__PURE__ */ new Box3(),
  _v1$6 = /* @__PURE__ */ new Vector3(),
  _v2$3 = /* @__PURE__ */ new Vector3();
class Sphere {
  constructor(e = new Vector3(), n = -1) {
    (this.isSphere = !0), (this.center = e), (this.radius = n);
  }
  set(e, n) {
    return this.center.copy(e), (this.radius = n), this;
  }
  setFromPoints(e, n) {
    const i = this.center;
    n !== void 0 ? i.copy(n) : _box$3.setFromPoints(e).getCenter(i);
    let s = 0;
    for (let a = 0, o = e.length; a < o; a++)
      s = Math.max(s, i.distanceToSquared(e[a]));
    return (this.radius = Math.sqrt(s)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const n = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= n * n;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, n) {
    const i = this.center.distanceToSquared(e);
    return (
      n.copy(e),
      i > this.radius * this.radius &&
        (n.sub(this.center).normalize(),
        n.multiplyScalar(this.radius).add(this.center)),
      n
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    _v1$6.subVectors(e, this.center);
    const n = _v1$6.lengthSq();
    if (n > this.radius * this.radius) {
      const i = Math.sqrt(n),
        s = (i - this.radius) * 0.5;
      this.center.addScaledVector(_v1$6, s / i), (this.radius += s);
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(e), this)
      : (this.center.equals(e.center) === !0
          ? (this.radius = Math.max(this.radius, e.radius))
          : (_v2$3.subVectors(e.center, this.center).setLength(e.radius),
            this.expandByPoint(_v1$6.copy(e.center).add(_v2$3)),
            this.expandByPoint(_v1$6.copy(e.center).sub(_v2$3))),
        this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const _vector$a = /* @__PURE__ */ new Vector3(),
  _segCenter = /* @__PURE__ */ new Vector3(),
  _segDir = /* @__PURE__ */ new Vector3(),
  _diff = /* @__PURE__ */ new Vector3(),
  _edge1 = /* @__PURE__ */ new Vector3(),
  _edge2 = /* @__PURE__ */ new Vector3(),
  _normal$1 = /* @__PURE__ */ new Vector3();
class Ray {
  constructor(e = new Vector3(), n = new Vector3(0, 0, -1)) {
    (this.origin = e), (this.direction = n);
  }
  set(e, n) {
    return this.origin.copy(e), this.direction.copy(n), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, n) {
    return n.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, _vector$a)), this;
  }
  closestPointToPoint(e, n) {
    n.subVectors(e, this.origin);
    const i = n.dot(this.direction);
    return i < 0
      ? n.copy(this.origin)
      : n.copy(this.origin).addScaledVector(this.direction, i);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const n = _vector$a.subVectors(e, this.origin).dot(this.direction);
    return n < 0
      ? this.origin.distanceToSquared(e)
      : (_vector$a.copy(this.origin).addScaledVector(this.direction, n),
        _vector$a.distanceToSquared(e));
  }
  distanceSqToSegment(e, n, i, s) {
    _segCenter.copy(e).add(n).multiplyScalar(0.5),
      _segDir.copy(n).sub(e).normalize(),
      _diff.copy(this.origin).sub(_segCenter);
    const a = e.distanceTo(n) * 0.5,
      o = -this.direction.dot(_segDir),
      l = _diff.dot(this.direction),
      c = -_diff.dot(_segDir),
      h = _diff.lengthSq(),
      u = Math.abs(1 - o * o);
    let d, f, p, g;
    if (u > 0)
      if (((d = o * c - l), (f = o * l - c), (g = a * u), d >= 0))
        if (f >= -g)
          if (f <= g) {
            const v = 1 / u;
            (d *= v),
              (f *= v),
              (p = d * (d + o * f + 2 * l) + f * (o * d + f + 2 * c) + h);
          } else
            (f = a),
              (d = Math.max(0, -(o * f + l))),
              (p = -d * d + f * (f + 2 * c) + h);
        else
          (f = -a),
            (d = Math.max(0, -(o * f + l))),
            (p = -d * d + f * (f + 2 * c) + h);
      else
        f <= -g
          ? ((d = Math.max(0, -(-o * a + l))),
            (f = d > 0 ? -a : Math.min(Math.max(-a, -c), a)),
            (p = -d * d + f * (f + 2 * c) + h))
          : f <= g
          ? ((d = 0),
            (f = Math.min(Math.max(-a, -c), a)),
            (p = f * (f + 2 * c) + h))
          : ((d = Math.max(0, -(o * a + l))),
            (f = d > 0 ? a : Math.min(Math.max(-a, -c), a)),
            (p = -d * d + f * (f + 2 * c) + h));
    else
      (f = o > 0 ? -a : a),
        (d = Math.max(0, -(o * f + l))),
        (p = -d * d + f * (f + 2 * c) + h);
    return (
      i && i.copy(this.origin).addScaledVector(this.direction, d),
      s && s.copy(_segCenter).addScaledVector(_segDir, f),
      p
    );
  }
  intersectSphere(e, n) {
    _vector$a.subVectors(e.center, this.origin);
    const i = _vector$a.dot(this.direction),
      s = _vector$a.dot(_vector$a) - i * i,
      a = e.radius * e.radius;
    if (s > a) return null;
    const o = Math.sqrt(a - s),
      l = i - o,
      c = i + o;
    return c < 0 ? null : l < 0 ? this.at(c, n) : this.at(l, n);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const n = e.normal.dot(this.direction);
    if (n === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const i = -(this.origin.dot(e.normal) + e.constant) / n;
    return i >= 0 ? i : null;
  }
  intersectPlane(e, n) {
    const i = this.distanceToPlane(e);
    return i === null ? null : this.at(i, n);
  }
  intersectsPlane(e) {
    const n = e.distanceToPoint(this.origin);
    return n === 0 || e.normal.dot(this.direction) * n < 0;
  }
  intersectBox(e, n) {
    let i, s, a, o, l, c;
    const h = 1 / this.direction.x,
      u = 1 / this.direction.y,
      d = 1 / this.direction.z,
      f = this.origin;
    return (
      h >= 0
        ? ((i = (e.min.x - f.x) * h), (s = (e.max.x - f.x) * h))
        : ((i = (e.max.x - f.x) * h), (s = (e.min.x - f.x) * h)),
      u >= 0
        ? ((a = (e.min.y - f.y) * u), (o = (e.max.y - f.y) * u))
        : ((a = (e.max.y - f.y) * u), (o = (e.min.y - f.y) * u)),
      i > o ||
      a > s ||
      ((a > i || isNaN(i)) && (i = a),
      (o < s || isNaN(s)) && (s = o),
      d >= 0
        ? ((l = (e.min.z - f.z) * d), (c = (e.max.z - f.z) * d))
        : ((l = (e.max.z - f.z) * d), (c = (e.min.z - f.z) * d)),
      i > c || l > s) ||
      ((l > i || i !== i) && (i = l), (c < s || s !== s) && (s = c), s < 0)
        ? null
        : this.at(i >= 0 ? i : s, n)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, _vector$a) !== null;
  }
  intersectTriangle(e, n, i, s, a) {
    _edge1.subVectors(n, e),
      _edge2.subVectors(i, e),
      _normal$1.crossVectors(_edge1, _edge2);
    let o = this.direction.dot(_normal$1),
      l;
    if (o > 0) {
      if (s) return null;
      l = 1;
    } else if (o < 0) (l = -1), (o = -o);
    else return null;
    _diff.subVectors(this.origin, e);
    const c = l * this.direction.dot(_edge2.crossVectors(_diff, _edge2));
    if (c < 0) return null;
    const h = l * this.direction.dot(_edge1.cross(_diff));
    if (h < 0 || c + h > o) return null;
    const u = -l * _diff.dot(_normal$1);
    return u < 0 ? null : this.at(u / o, a);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Matrix4 {
  constructor(e, n, i, s, a, o, l, c, h, u, d, f, p, g, v, _) {
    (Matrix4.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, n, i, s, a, o, l, c, h, u, d, f, p, g, v, _);
  }
  set(e, n, i, s, a, o, l, c, h, u, d, f, p, g, v, _) {
    const m = this.elements;
    return (
      (m[0] = e),
      (m[4] = n),
      (m[8] = i),
      (m[12] = s),
      (m[1] = a),
      (m[5] = o),
      (m[9] = l),
      (m[13] = c),
      (m[2] = h),
      (m[6] = u),
      (m[10] = d),
      (m[14] = f),
      (m[3] = p),
      (m[7] = g),
      (m[11] = v),
      (m[15] = _),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Matrix4().fromArray(this.elements);
  }
  copy(e) {
    const n = this.elements,
      i = e.elements;
    return (
      (n[0] = i[0]),
      (n[1] = i[1]),
      (n[2] = i[2]),
      (n[3] = i[3]),
      (n[4] = i[4]),
      (n[5] = i[5]),
      (n[6] = i[6]),
      (n[7] = i[7]),
      (n[8] = i[8]),
      (n[9] = i[9]),
      (n[10] = i[10]),
      (n[11] = i[11]),
      (n[12] = i[12]),
      (n[13] = i[13]),
      (n[14] = i[14]),
      (n[15] = i[15]),
      this
    );
  }
  copyPosition(e) {
    const n = this.elements,
      i = e.elements;
    return (n[12] = i[12]), (n[13] = i[13]), (n[14] = i[14]), this;
  }
  setFromMatrix3(e) {
    const n = e.elements;
    return (
      this.set(
        n[0],
        n[3],
        n[6],
        0,
        n[1],
        n[4],
        n[7],
        0,
        n[2],
        n[5],
        n[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, n, i) {
    return (
      e.setFromMatrixColumn(this, 0),
      n.setFromMatrixColumn(this, 1),
      i.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, n, i) {
    return (
      this.set(
        e.x,
        n.x,
        i.x,
        0,
        e.y,
        n.y,
        i.y,
        0,
        e.z,
        n.z,
        i.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    const n = this.elements,
      i = e.elements,
      s = 1 / _v1$5.setFromMatrixColumn(e, 0).length(),
      a = 1 / _v1$5.setFromMatrixColumn(e, 1).length(),
      o = 1 / _v1$5.setFromMatrixColumn(e, 2).length();
    return (
      (n[0] = i[0] * s),
      (n[1] = i[1] * s),
      (n[2] = i[2] * s),
      (n[3] = 0),
      (n[4] = i[4] * a),
      (n[5] = i[5] * a),
      (n[6] = i[6] * a),
      (n[7] = 0),
      (n[8] = i[8] * o),
      (n[9] = i[9] * o),
      (n[10] = i[10] * o),
      (n[11] = 0),
      (n[12] = 0),
      (n[13] = 0),
      (n[14] = 0),
      (n[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const n = this.elements,
      i = e.x,
      s = e.y,
      a = e.z,
      o = Math.cos(i),
      l = Math.sin(i),
      c = Math.cos(s),
      h = Math.sin(s),
      u = Math.cos(a),
      d = Math.sin(a);
    if (e.order === "XYZ") {
      const f = o * u,
        p = o * d,
        g = l * u,
        v = l * d;
      (n[0] = c * u),
        (n[4] = -c * d),
        (n[8] = h),
        (n[1] = p + g * h),
        (n[5] = f - v * h),
        (n[9] = -l * c),
        (n[2] = v - f * h),
        (n[6] = g + p * h),
        (n[10] = o * c);
    } else if (e.order === "YXZ") {
      const f = c * u,
        p = c * d,
        g = h * u,
        v = h * d;
      (n[0] = f + v * l),
        (n[4] = g * l - p),
        (n[8] = o * h),
        (n[1] = o * d),
        (n[5] = o * u),
        (n[9] = -l),
        (n[2] = p * l - g),
        (n[6] = v + f * l),
        (n[10] = o * c);
    } else if (e.order === "ZXY") {
      const f = c * u,
        p = c * d,
        g = h * u,
        v = h * d;
      (n[0] = f - v * l),
        (n[4] = -o * d),
        (n[8] = g + p * l),
        (n[1] = p + g * l),
        (n[5] = o * u),
        (n[9] = v - f * l),
        (n[2] = -o * h),
        (n[6] = l),
        (n[10] = o * c);
    } else if (e.order === "ZYX") {
      const f = o * u,
        p = o * d,
        g = l * u,
        v = l * d;
      (n[0] = c * u),
        (n[4] = g * h - p),
        (n[8] = f * h + v),
        (n[1] = c * d),
        (n[5] = v * h + f),
        (n[9] = p * h - g),
        (n[2] = -h),
        (n[6] = l * c),
        (n[10] = o * c);
    } else if (e.order === "YZX") {
      const f = o * c,
        p = o * h,
        g = l * c,
        v = l * h;
      (n[0] = c * u),
        (n[4] = v - f * d),
        (n[8] = g * d + p),
        (n[1] = d),
        (n[5] = o * u),
        (n[9] = -l * u),
        (n[2] = -h * u),
        (n[6] = p * d + g),
        (n[10] = f - v * d);
    } else if (e.order === "XZY") {
      const f = o * c,
        p = o * h,
        g = l * c,
        v = l * h;
      (n[0] = c * u),
        (n[4] = -d),
        (n[8] = h * u),
        (n[1] = f * d + v),
        (n[5] = o * u),
        (n[9] = p * d - g),
        (n[2] = g * d - p),
        (n[6] = l * u),
        (n[10] = v * d + f);
    }
    return (
      (n[3] = 0),
      (n[7] = 0),
      (n[11] = 0),
      (n[12] = 0),
      (n[13] = 0),
      (n[14] = 0),
      (n[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(_zero, e, _one);
  }
  lookAt(e, n, i) {
    const s = this.elements;
    return (
      _z.subVectors(e, n),
      _z.lengthSq() === 0 && (_z.z = 1),
      _z.normalize(),
      _x.crossVectors(i, _z),
      _x.lengthSq() === 0 &&
        (Math.abs(i.z) === 1 ? (_z.x += 1e-4) : (_z.z += 1e-4),
        _z.normalize(),
        _x.crossVectors(i, _z)),
      _x.normalize(),
      _y.crossVectors(_z, _x),
      (s[0] = _x.x),
      (s[4] = _y.x),
      (s[8] = _z.x),
      (s[1] = _x.y),
      (s[5] = _y.y),
      (s[9] = _z.y),
      (s[2] = _x.z),
      (s[6] = _y.z),
      (s[10] = _z.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, n) {
    const i = e.elements,
      s = n.elements,
      a = this.elements,
      o = i[0],
      l = i[4],
      c = i[8],
      h = i[12],
      u = i[1],
      d = i[5],
      f = i[9],
      p = i[13],
      g = i[2],
      v = i[6],
      _ = i[10],
      m = i[14],
      A = i[3],
      S = i[7],
      E = i[11],
      N = i[15],
      w = s[0],
      C = s[4],
      U = s[8],
      T = s[12],
      M = s[1],
      P = s[5],
      z = s[9],
      O = s[13],
      G = s[2],
      X = s[6],
      k = s[10],
      K = s[14],
      H = s[3],
      se = s[7],
      pe = s[11],
      me = s[15];
    return (
      (a[0] = o * w + l * M + c * G + h * H),
      (a[4] = o * C + l * P + c * X + h * se),
      (a[8] = o * U + l * z + c * k + h * pe),
      (a[12] = o * T + l * O + c * K + h * me),
      (a[1] = u * w + d * M + f * G + p * H),
      (a[5] = u * C + d * P + f * X + p * se),
      (a[9] = u * U + d * z + f * k + p * pe),
      (a[13] = u * T + d * O + f * K + p * me),
      (a[2] = g * w + v * M + _ * G + m * H),
      (a[6] = g * C + v * P + _ * X + m * se),
      (a[10] = g * U + v * z + _ * k + m * pe),
      (a[14] = g * T + v * O + _ * K + m * me),
      (a[3] = A * w + S * M + E * G + N * H),
      (a[7] = A * C + S * P + E * X + N * se),
      (a[11] = A * U + S * z + E * k + N * pe),
      (a[15] = A * T + S * O + E * K + N * me),
      this
    );
  }
  multiplyScalar(e) {
    const n = this.elements;
    return (
      (n[0] *= e),
      (n[4] *= e),
      (n[8] *= e),
      (n[12] *= e),
      (n[1] *= e),
      (n[5] *= e),
      (n[9] *= e),
      (n[13] *= e),
      (n[2] *= e),
      (n[6] *= e),
      (n[10] *= e),
      (n[14] *= e),
      (n[3] *= e),
      (n[7] *= e),
      (n[11] *= e),
      (n[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      n = e[0],
      i = e[4],
      s = e[8],
      a = e[12],
      o = e[1],
      l = e[5],
      c = e[9],
      h = e[13],
      u = e[2],
      d = e[6],
      f = e[10],
      p = e[14],
      g = e[3],
      v = e[7],
      _ = e[11],
      m = e[15];
    return (
      g *
        (+a * c * d -
          s * h * d -
          a * l * f +
          i * h * f +
          s * l * p -
          i * c * p) +
      v *
        (+n * c * p -
          n * h * f +
          a * o * f -
          s * o * p +
          s * h * u -
          a * c * u) +
      _ *
        (+n * h * d -
          n * l * p -
          a * o * d +
          i * o * p +
          a * l * u -
          i * h * u) +
      m *
        (-s * l * u - n * c * d + n * l * f + s * o * d - i * o * f + i * c * u)
    );
  }
  transpose() {
    const e = this.elements;
    let n;
    return (
      (n = e[1]),
      (e[1] = e[4]),
      (e[4] = n),
      (n = e[2]),
      (e[2] = e[8]),
      (e[8] = n),
      (n = e[6]),
      (e[6] = e[9]),
      (e[9] = n),
      (n = e[3]),
      (e[3] = e[12]),
      (e[12] = n),
      (n = e[7]),
      (e[7] = e[13]),
      (e[13] = n),
      (n = e[11]),
      (e[11] = e[14]),
      (e[14] = n),
      this
    );
  }
  setPosition(e, n, i) {
    const s = this.elements;
    return (
      e.isVector3
        ? ((s[12] = e.x), (s[13] = e.y), (s[14] = e.z))
        : ((s[12] = e), (s[13] = n), (s[14] = i)),
      this
    );
  }
  invert() {
    const e = this.elements,
      n = e[0],
      i = e[1],
      s = e[2],
      a = e[3],
      o = e[4],
      l = e[5],
      c = e[6],
      h = e[7],
      u = e[8],
      d = e[9],
      f = e[10],
      p = e[11],
      g = e[12],
      v = e[13],
      _ = e[14],
      m = e[15],
      A = d * _ * h - v * f * h + v * c * p - l * _ * p - d * c * m + l * f * m,
      S = g * f * h - u * _ * h - g * c * p + o * _ * p + u * c * m - o * f * m,
      E = u * v * h - g * d * h + g * l * p - o * v * p - u * l * m + o * d * m,
      N = g * d * c - u * v * c - g * l * f + o * v * f + u * l * _ - o * d * _,
      w = n * A + i * S + s * E + a * N;
    if (w === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const C = 1 / w;
    return (
      (e[0] = A * C),
      (e[1] =
        (v * f * a -
          d * _ * a -
          v * s * p +
          i * _ * p +
          d * s * m -
          i * f * m) *
        C),
      (e[2] =
        (l * _ * a -
          v * c * a +
          v * s * h -
          i * _ * h -
          l * s * m +
          i * c * m) *
        C),
      (e[3] =
        (d * c * a -
          l * f * a -
          d * s * h +
          i * f * h +
          l * s * p -
          i * c * p) *
        C),
      (e[4] = S * C),
      (e[5] =
        (u * _ * a -
          g * f * a +
          g * s * p -
          n * _ * p -
          u * s * m +
          n * f * m) *
        C),
      (e[6] =
        (g * c * a -
          o * _ * a -
          g * s * h +
          n * _ * h +
          o * s * m -
          n * c * m) *
        C),
      (e[7] =
        (o * f * a -
          u * c * a +
          u * s * h -
          n * f * h -
          o * s * p +
          n * c * p) *
        C),
      (e[8] = E * C),
      (e[9] =
        (g * d * a -
          u * v * a -
          g * i * p +
          n * v * p +
          u * i * m -
          n * d * m) *
        C),
      (e[10] =
        (o * v * a -
          g * l * a +
          g * i * h -
          n * v * h -
          o * i * m +
          n * l * m) *
        C),
      (e[11] =
        (u * l * a -
          o * d * a -
          u * i * h +
          n * d * h +
          o * i * p -
          n * l * p) *
        C),
      (e[12] = N * C),
      (e[13] =
        (u * v * s -
          g * d * s +
          g * i * f -
          n * v * f -
          u * i * _ +
          n * d * _) *
        C),
      (e[14] =
        (g * l * s -
          o * v * s -
          g * i * c +
          n * v * c +
          o * i * _ -
          n * l * _) *
        C),
      (e[15] =
        (o * d * s -
          u * l * s +
          u * i * c -
          n * d * c -
          o * i * f +
          n * l * f) *
        C),
      this
    );
  }
  scale(e) {
    const n = this.elements,
      i = e.x,
      s = e.y,
      a = e.z;
    return (
      (n[0] *= i),
      (n[4] *= s),
      (n[8] *= a),
      (n[1] *= i),
      (n[5] *= s),
      (n[9] *= a),
      (n[2] *= i),
      (n[6] *= s),
      (n[10] *= a),
      (n[3] *= i),
      (n[7] *= s),
      (n[11] *= a),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      n = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      i = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      s = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(n, i, s));
  }
  makeTranslation(e, n, i) {
    return (
      e.isVector3
        ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, e, 0, 1, 0, n, 0, 0, 1, i, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(e) {
    const n = Math.cos(e),
      i = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, n, -i, 0, 0, i, n, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const n = Math.cos(e),
      i = Math.sin(e);
    return this.set(n, 0, i, 0, 0, 1, 0, 0, -i, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const n = Math.cos(e),
      i = Math.sin(e);
    return this.set(n, -i, 0, 0, i, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, n) {
    const i = Math.cos(n),
      s = Math.sin(n),
      a = 1 - i,
      o = e.x,
      l = e.y,
      c = e.z,
      h = a * o,
      u = a * l;
    return (
      this.set(
        h * o + i,
        h * l - s * c,
        h * c + s * l,
        0,
        h * l + s * c,
        u * l + i,
        u * c - s * o,
        0,
        h * c - s * l,
        u * c + s * o,
        a * c * c + i,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, n, i) {
    return this.set(e, 0, 0, 0, 0, n, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, n, i, s, a, o) {
    return this.set(1, i, a, 0, e, 1, o, 0, n, s, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, n, i) {
    const s = this.elements,
      a = n._x,
      o = n._y,
      l = n._z,
      c = n._w,
      h = a + a,
      u = o + o,
      d = l + l,
      f = a * h,
      p = a * u,
      g = a * d,
      v = o * u,
      _ = o * d,
      m = l * d,
      A = c * h,
      S = c * u,
      E = c * d,
      N = i.x,
      w = i.y,
      C = i.z;
    return (
      (s[0] = (1 - (v + m)) * N),
      (s[1] = (p + E) * N),
      (s[2] = (g - S) * N),
      (s[3] = 0),
      (s[4] = (p - E) * w),
      (s[5] = (1 - (f + m)) * w),
      (s[6] = (_ + A) * w),
      (s[7] = 0),
      (s[8] = (g + S) * C),
      (s[9] = (_ - A) * C),
      (s[10] = (1 - (f + v)) * C),
      (s[11] = 0),
      (s[12] = e.x),
      (s[13] = e.y),
      (s[14] = e.z),
      (s[15] = 1),
      this
    );
  }
  decompose(e, n, i) {
    const s = this.elements;
    let a = _v1$5.set(s[0], s[1], s[2]).length();
    const o = _v1$5.set(s[4], s[5], s[6]).length(),
      l = _v1$5.set(s[8], s[9], s[10]).length();
    this.determinant() < 0 && (a = -a),
      (e.x = s[12]),
      (e.y = s[13]),
      (e.z = s[14]),
      _m1$4.copy(this);
    const h = 1 / a,
      u = 1 / o,
      d = 1 / l;
    return (
      (_m1$4.elements[0] *= h),
      (_m1$4.elements[1] *= h),
      (_m1$4.elements[2] *= h),
      (_m1$4.elements[4] *= u),
      (_m1$4.elements[5] *= u),
      (_m1$4.elements[6] *= u),
      (_m1$4.elements[8] *= d),
      (_m1$4.elements[9] *= d),
      (_m1$4.elements[10] *= d),
      n.setFromRotationMatrix(_m1$4),
      (i.x = a),
      (i.y = o),
      (i.z = l),
      this
    );
  }
  makePerspective(e, n, i, s, a, o, l = 2e3) {
    const c = this.elements,
      h = (2 * a) / (n - e),
      u = (2 * a) / (i - s),
      d = (n + e) / (n - e),
      f = (i + s) / (i - s);
    let p, g;
    if (l === 2e3) (p = -(o + a) / (o - a)), (g = (-2 * o * a) / (o - a));
    else if (l === 2001) (p = -o / (o - a)), (g = (-o * a) / (o - a));
    else
      throw new Error(
        "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + l
      );
    return (
      (c[0] = h),
      (c[4] = 0),
      (c[8] = d),
      (c[12] = 0),
      (c[1] = 0),
      (c[5] = u),
      (c[9] = f),
      (c[13] = 0),
      (c[2] = 0),
      (c[6] = 0),
      (c[10] = p),
      (c[14] = g),
      (c[3] = 0),
      (c[7] = 0),
      (c[11] = -1),
      (c[15] = 0),
      this
    );
  }
  makeOrthographic(e, n, i, s, a, o, l = 2e3) {
    const c = this.elements,
      h = 1 / (n - e),
      u = 1 / (i - s),
      d = 1 / (o - a),
      f = (n + e) * h,
      p = (i + s) * u;
    let g, v;
    if (l === 2e3) (g = (o + a) * d), (v = -2 * d);
    else if (l === 2001) (g = a * d), (v = -1 * d);
    else
      throw new Error(
        "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + l
      );
    return (
      (c[0] = 2 * h),
      (c[4] = 0),
      (c[8] = 0),
      (c[12] = -f),
      (c[1] = 0),
      (c[5] = 2 * u),
      (c[9] = 0),
      (c[13] = -p),
      (c[2] = 0),
      (c[6] = 0),
      (c[10] = v),
      (c[14] = -g),
      (c[3] = 0),
      (c[7] = 0),
      (c[11] = 0),
      (c[15] = 1),
      this
    );
  }
  equals(e) {
    const n = this.elements,
      i = e.elements;
    for (let s = 0; s < 16; s++) if (n[s] !== i[s]) return !1;
    return !0;
  }
  fromArray(e, n = 0) {
    for (let i = 0; i < 16; i++) this.elements[i] = e[i + n];
    return this;
  }
  toArray(e = [], n = 0) {
    const i = this.elements;
    return (
      (e[n] = i[0]),
      (e[n + 1] = i[1]),
      (e[n + 2] = i[2]),
      (e[n + 3] = i[3]),
      (e[n + 4] = i[4]),
      (e[n + 5] = i[5]),
      (e[n + 6] = i[6]),
      (e[n + 7] = i[7]),
      (e[n + 8] = i[8]),
      (e[n + 9] = i[9]),
      (e[n + 10] = i[10]),
      (e[n + 11] = i[11]),
      (e[n + 12] = i[12]),
      (e[n + 13] = i[13]),
      (e[n + 14] = i[14]),
      (e[n + 15] = i[15]),
      e
    );
  }
}
const _v1$5 = /* @__PURE__ */ new Vector3(),
  _m1$4 = /* @__PURE__ */ new Matrix4(),
  _zero = /* @__PURE__ */ new Vector3(0, 0, 0),
  _one = /* @__PURE__ */ new Vector3(1, 1, 1),
  _x = /* @__PURE__ */ new Vector3(),
  _y = /* @__PURE__ */ new Vector3(),
  _z = /* @__PURE__ */ new Vector3(),
  _matrix$2 = /* @__PURE__ */ new Matrix4(),
  _quaternion$3 = /* @__PURE__ */ new Quaternion();
class Euler {
  constructor(e = 0, n = 0, i = 0, s = Euler.DEFAULT_ORDER) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = n),
      (this._z = i),
      (this._order = s);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, n, i, s = this._order) {
    return (
      (this._x = e),
      (this._y = n),
      (this._z = i),
      (this._order = s),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, n = this._order, i = !0) {
    const s = e.elements,
      a = s[0],
      o = s[4],
      l = s[8],
      c = s[1],
      h = s[5],
      u = s[9],
      d = s[2],
      f = s[6],
      p = s[10];
    switch (n) {
      case "XYZ":
        (this._y = Math.asin(clamp$2(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._x = Math.atan2(-u, p)), (this._z = Math.atan2(-o, a)))
            : ((this._x = Math.atan2(f, h)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-clamp$2(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(l, p)), (this._z = Math.atan2(c, h)))
            : ((this._y = Math.atan2(-d, a)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(clamp$2(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._y = Math.atan2(-d, p)), (this._z = Math.atan2(-o, h)))
            : ((this._y = 0), (this._z = Math.atan2(c, a)));
        break;
      case "ZYX":
        (this._y = Math.asin(-clamp$2(d, -1, 1))),
          Math.abs(d) < 0.9999999
            ? ((this._x = Math.atan2(f, p)), (this._z = Math.atan2(c, a)))
            : ((this._x = 0), (this._z = Math.atan2(-o, h)));
        break;
      case "YZX":
        (this._z = Math.asin(clamp$2(c, -1, 1))),
          Math.abs(c) < 0.9999999
            ? ((this._x = Math.atan2(-u, h)), (this._y = Math.atan2(-d, a)))
            : ((this._x = 0), (this._y = Math.atan2(l, p)));
        break;
      case "XZY":
        (this._z = Math.asin(-clamp$2(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(f, h)), (this._y = Math.atan2(l, a)))
            : ((this._x = Math.atan2(-u, p)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            n
        );
    }
    return (this._order = n), i === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, n, i) {
    return (
      _matrix$2.makeRotationFromQuaternion(e),
      this.setFromRotationMatrix(_matrix$2, n, i)
    );
  }
  setFromVector3(e, n = this._order) {
    return this.set(e.x, e.y, e.z, n);
  }
  reorder(e) {
    return (
      _quaternion$3.setFromEuler(this), this.setFromQuaternion(_quaternion$3, e)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], n = 0) {
    return (
      (e[n] = this._x),
      (e[n + 1] = this._y),
      (e[n + 2] = this._z),
      (e[n + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Euler.DEFAULT_ORDER = "XYZ";
class Layers {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let _object3DId = 0;
const _v1$4 = /* @__PURE__ */ new Vector3(),
  _q1 = /* @__PURE__ */ new Quaternion(),
  _m1$3 = /* @__PURE__ */ new Matrix4(),
  _target = /* @__PURE__ */ new Vector3(),
  _position$3 = /* @__PURE__ */ new Vector3(),
  _scale$2 = /* @__PURE__ */ new Vector3(),
  _quaternion$2 = /* @__PURE__ */ new Quaternion(),
  _xAxis = /* @__PURE__ */ new Vector3(1, 0, 0),
  _yAxis = /* @__PURE__ */ new Vector3(0, 1, 0),
  _zAxis = /* @__PURE__ */ new Vector3(0, 0, 1),
  _addedEvent = { type: "added" },
  _removedEvent = { type: "removed" },
  _childaddedEvent = { type: "childadded", child: null },
  _childremovedEvent = { type: "childremoved", child: null };
class Object3D extends EventDispatcher {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: _object3DId++ }),
      (this.uuid = generateUUID()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = Object3D.DEFAULT_UP.clone());
    const e = new Vector3(),
      n = new Euler(),
      i = new Quaternion(),
      s = new Vector3(1, 1, 1);
    function a() {
      i.setFromEuler(n, !1);
    }
    function o() {
      n.setFromQuaternion(i, void 0, !1);
    }
    n._onChange(a),
      i._onChange(o),
      Object.defineProperties(this, {
        position: {
          configurable: !0,
          enumerable: !0,
          value: e,
        },
        rotation: {
          configurable: !0,
          enumerable: !0,
          value: n,
        },
        quaternion: {
          configurable: !0,
          enumerable: !0,
          value: i,
        },
        scale: {
          configurable: !0,
          enumerable: !0,
          value: s,
        },
        modelViewMatrix: {
          value: new Matrix4(),
        },
        normalMatrix: {
          value: new Matrix3(),
        },
      }),
      (this.matrix = new Matrix4()),
      (this.matrixWorld = new Matrix4()),
      (this.matrixAutoUpdate = Object3D.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new Layers()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, n) {
    this.quaternion.setFromAxisAngle(e, n);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, n) {
    return _q1.setFromAxisAngle(e, n), this.quaternion.multiply(_q1), this;
  }
  rotateOnWorldAxis(e, n) {
    return _q1.setFromAxisAngle(e, n), this.quaternion.premultiply(_q1), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(_xAxis, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(_yAxis, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(_zAxis, e);
  }
  translateOnAxis(e, n) {
    return (
      _v1$4.copy(e).applyQuaternion(this.quaternion),
      this.position.add(_v1$4.multiplyScalar(n)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(_xAxis, e);
  }
  translateY(e) {
    return this.translateOnAxis(_yAxis, e);
  }
  translateZ(e) {
    return this.translateOnAxis(_zAxis, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(_m1$3.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, n, i) {
    e.isVector3 ? _target.copy(e) : _target.set(e, n, i);
    const s = this.parent;
    this.updateWorldMatrix(!0, !1),
      _position$3.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? _m1$3.lookAt(_position$3, _target, this.up)
        : _m1$3.lookAt(_target, _position$3, this.up),
      this.quaternion.setFromRotationMatrix(_m1$3),
      s &&
        (_m1$3.extractRotation(s.matrixWorld),
        _q1.setFromRotationMatrix(_m1$3),
        this.quaternion.premultiply(_q1.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.add(arguments[n]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e
        ),
        this)
      : (e && e.isObject3D
          ? (e.removeFromParent(),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(_addedEvent),
            (_childaddedEvent.child = e),
            this.dispatchEvent(_childaddedEvent),
            (_childaddedEvent.child = null))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) this.remove(arguments[i]);
      return this;
    }
    const n = this.children.indexOf(e);
    return (
      n !== -1 &&
        ((e.parent = null),
        this.children.splice(n, 1),
        e.dispatchEvent(_removedEvent),
        (_childremovedEvent.child = e),
        this.dispatchEvent(_childremovedEvent),
        (_childremovedEvent.child = null)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      _m1$3.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1),
        _m1$3.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(_m1$3),
      e.removeFromParent(),
      (e.parent = this),
      this.children.push(e),
      e.updateWorldMatrix(!1, !0),
      e.dispatchEvent(_addedEvent),
      (_childaddedEvent.child = e),
      this.dispatchEvent(_childaddedEvent),
      (_childaddedEvent.child = null),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, n) {
    if (this[e] === n) return this;
    for (let i = 0, s = this.children.length; i < s; i++) {
      const o = this.children[i].getObjectByProperty(e, n);
      if (o !== void 0) return o;
    }
  }
  getObjectsByProperty(e, n, i = []) {
    this[e] === n && i.push(this);
    const s = this.children;
    for (let a = 0, o = s.length; a < o; a++)
      s[a].getObjectsByProperty(e, n, i);
    return i;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(_position$3, e, _scale$2),
      e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(_position$3, _quaternion$2, e),
      e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const n = this.matrixWorld.elements;
    return e.set(n[8], n[9], n[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const n = this.children;
    for (let i = 0, s = n.length; i < s; i++) n[i].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const n = this.children;
    for (let i = 0, s = n.length; i < s; i++) n[i].traverseVisible(e);
  }
  traverseAncestors(e) {
    const n = this.parent;
    n !== null && (e(n), n.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.matrixWorldAutoUpdate === !0 &&
          (this.parent === null
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const n = this.children;
    for (let i = 0, s = n.length; i < s; i++) n[i].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, n) {
    const i = this.parent;
    if (
      (e === !0 && i !== null && i.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.matrixWorldAutoUpdate === !0 &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            )),
      n === !0)
    ) {
      const s = this.children;
      for (let a = 0, o = s.length; a < o; a++) s[a].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const n = e === void 0 || typeof e == "string",
      i = {};
    n &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (i.metadata = {
        version: 4.6,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const s = {};
    (s.uuid = this.uuid),
      (s.type = this.type),
      this.name !== "" && (s.name = this.name),
      this.castShadow === !0 && (s.castShadow = !0),
      this.receiveShadow === !0 && (s.receiveShadow = !0),
      this.visible === !1 && (s.visible = !1),
      this.frustumCulled === !1 && (s.frustumCulled = !1),
      this.renderOrder !== 0 && (s.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (s.userData = this.userData),
      (s.layers = this.layers.mask),
      (s.matrix = this.matrix.toArray()),
      (s.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (s.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((s.type = "InstancedMesh"),
        (s.count = this.count),
        (s.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (s.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((s.type = "BatchedMesh"),
        (s.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (s.sortObjects = this.sortObjects),
        (s.drawRanges = this._drawRanges),
        (s.reservedRanges = this._reservedRanges),
        (s.visibility = this._visibility),
        (s.active = this._active),
        (s.bounds = this._bounds.map((l) => ({
          boxInitialized: l.boxInitialized,
          boxMin: l.box.min.toArray(),
          boxMax: l.box.max.toArray(),
          sphereInitialized: l.sphereInitialized,
          sphereRadius: l.sphere.radius,
          sphereCenter: l.sphere.center.toArray(),
        }))),
        (s.maxInstanceCount = this._maxInstanceCount),
        (s.maxVertexCount = this._maxVertexCount),
        (s.maxIndexCount = this._maxIndexCount),
        (s.geometryInitialized = this._geometryInitialized),
        (s.geometryCount = this._geometryCount),
        (s.matricesTexture = this._matricesTexture.toJSON(e)),
        this._colorsTexture !== null &&
          (s.colorsTexture = this._colorsTexture.toJSON(e)),
        this.boundingSphere !== null &&
          (s.boundingSphere = {
            center: s.boundingSphere.center.toArray(),
            radius: s.boundingSphere.radius,
          }),
        this.boundingBox !== null &&
          (s.boundingBox = {
            min: s.boundingBox.min.toArray(),
            max: s.boundingBox.max.toArray(),
          }));
    function a(l, c) {
      return l[c.uuid] === void 0 && (l[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (s.background = this.background.toJSON())
          : this.background.isTexture &&
            (s.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (s.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      s.geometry = a(e.geometries, this.geometry);
      const l = this.geometry.parameters;
      if (l !== void 0 && l.shapes !== void 0) {
        const c = l.shapes;
        if (Array.isArray(c))
          for (let h = 0, u = c.length; h < u; h++) {
            const d = c[h];
            a(e.shapes, d);
          }
        else a(e.shapes, c);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((s.bindMode = this.bindMode),
        (s.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (a(e.skeletons, this.skeleton), (s.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const l = [];
        for (let c = 0, h = this.material.length; c < h; c++)
          l.push(a(e.materials, this.material[c]));
        s.material = l;
      } else s.material = a(e.materials, this.material);
    if (this.children.length > 0) {
      s.children = [];
      for (let l = 0; l < this.children.length; l++)
        s.children.push(this.children[l].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      s.animations = [];
      for (let l = 0; l < this.animations.length; l++) {
        const c = this.animations[l];
        s.animations.push(a(e.animations, c));
      }
    }
    if (n) {
      const l = o(e.geometries),
        c = o(e.materials),
        h = o(e.textures),
        u = o(e.images),
        d = o(e.shapes),
        f = o(e.skeletons),
        p = o(e.animations),
        g = o(e.nodes);
      l.length > 0 && (i.geometries = l),
        c.length > 0 && (i.materials = c),
        h.length > 0 && (i.textures = h),
        u.length > 0 && (i.images = u),
        d.length > 0 && (i.shapes = d),
        f.length > 0 && (i.skeletons = f),
        p.length > 0 && (i.animations = p),
        g.length > 0 && (i.nodes = g);
    }
    return (i.object = s), i;
    function o(l) {
      const c = [];
      for (const h in l) {
        const u = l[h];
        delete u.metadata, c.push(u);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, n = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.animations = e.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      n === !0)
    )
      for (let i = 0; i < e.children.length; i++) {
        const s = e.children[i];
        this.add(s.clone());
      }
    return this;
  }
}
Object3D.DEFAULT_UP = /* @__PURE__ */ new Vector3(0, 1, 0);
Object3D.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const _v0$1 = /* @__PURE__ */ new Vector3(),
  _v1$3 = /* @__PURE__ */ new Vector3(),
  _v2$2 = /* @__PURE__ */ new Vector3(),
  _v3$2 = /* @__PURE__ */ new Vector3(),
  _vab = /* @__PURE__ */ new Vector3(),
  _vac = /* @__PURE__ */ new Vector3(),
  _vbc = /* @__PURE__ */ new Vector3(),
  _vap = /* @__PURE__ */ new Vector3(),
  _vbp = /* @__PURE__ */ new Vector3(),
  _vcp = /* @__PURE__ */ new Vector3();
class Triangle {
  constructor(e = new Vector3(), n = new Vector3(), i = new Vector3()) {
    (this.a = e), (this.b = n), (this.c = i);
  }
  static getNormal(e, n, i, s) {
    s.subVectors(i, n), _v0$1.subVectors(e, n), s.cross(_v0$1);
    const a = s.lengthSq();
    return a > 0 ? s.multiplyScalar(1 / Math.sqrt(a)) : s.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, n, i, s, a) {
    _v0$1.subVectors(s, n), _v1$3.subVectors(i, n), _v2$2.subVectors(e, n);
    const o = _v0$1.dot(_v0$1),
      l = _v0$1.dot(_v1$3),
      c = _v0$1.dot(_v2$2),
      h = _v1$3.dot(_v1$3),
      u = _v1$3.dot(_v2$2),
      d = o * h - l * l;
    if (d === 0) return a.set(0, 0, 0), null;
    const f = 1 / d,
      p = (h * c - l * u) * f,
      g = (o * u - l * c) * f;
    return a.set(1 - p - g, g, p);
  }
  static containsPoint(e, n, i, s) {
    return this.getBarycoord(e, n, i, s, _v3$2) === null
      ? !1
      : _v3$2.x >= 0 && _v3$2.y >= 0 && _v3$2.x + _v3$2.y <= 1;
  }
  static getInterpolation(e, n, i, s, a, o, l, c) {
    return this.getBarycoord(e, n, i, s, _v3$2) === null
      ? ((c.x = 0),
        (c.y = 0),
        "z" in c && (c.z = 0),
        "w" in c && (c.w = 0),
        null)
      : (c.setScalar(0),
        c.addScaledVector(a, _v3$2.x),
        c.addScaledVector(o, _v3$2.y),
        c.addScaledVector(l, _v3$2.z),
        c);
  }
  static isFrontFacing(e, n, i, s) {
    return (
      _v0$1.subVectors(i, n),
      _v1$3.subVectors(e, n),
      _v0$1.cross(_v1$3).dot(s) < 0
    );
  }
  set(e, n, i) {
    return this.a.copy(e), this.b.copy(n), this.c.copy(i), this;
  }
  setFromPointsAndIndices(e, n, i, s) {
    return this.a.copy(e[n]), this.b.copy(e[i]), this.c.copy(e[s]), this;
  }
  setFromAttributeAndIndices(e, n, i, s) {
    return (
      this.a.fromBufferAttribute(e, n),
      this.b.fromBufferAttribute(e, i),
      this.c.fromBufferAttribute(e, s),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      _v0$1.subVectors(this.c, this.b),
      _v1$3.subVectors(this.a, this.b),
      _v0$1.cross(_v1$3).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Triangle.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, n) {
    return Triangle.getBarycoord(e, this.a, this.b, this.c, n);
  }
  getInterpolation(e, n, i, s, a) {
    return Triangle.getInterpolation(e, this.a, this.b, this.c, n, i, s, a);
  }
  containsPoint(e) {
    return Triangle.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Triangle.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, n) {
    const i = this.a,
      s = this.b,
      a = this.c;
    let o, l;
    _vab.subVectors(s, i), _vac.subVectors(a, i), _vap.subVectors(e, i);
    const c = _vab.dot(_vap),
      h = _vac.dot(_vap);
    if (c <= 0 && h <= 0) return n.copy(i);
    _vbp.subVectors(e, s);
    const u = _vab.dot(_vbp),
      d = _vac.dot(_vbp);
    if (u >= 0 && d <= u) return n.copy(s);
    const f = c * d - u * h;
    if (f <= 0 && c >= 0 && u <= 0)
      return (o = c / (c - u)), n.copy(i).addScaledVector(_vab, o);
    _vcp.subVectors(e, a);
    const p = _vab.dot(_vcp),
      g = _vac.dot(_vcp);
    if (g >= 0 && p <= g) return n.copy(a);
    const v = p * h - c * g;
    if (v <= 0 && h >= 0 && g <= 0)
      return (l = h / (h - g)), n.copy(i).addScaledVector(_vac, l);
    const _ = u * g - p * d;
    if (_ <= 0 && d - u >= 0 && p - g >= 0)
      return (
        _vbc.subVectors(a, s),
        (l = (d - u) / (d - u + (p - g))),
        n.copy(s).addScaledVector(_vbc, l)
      );
    const m = 1 / (_ + v + f);
    return (
      (o = v * m),
      (l = f * m),
      n.copy(i).addScaledVector(_vab, o).addScaledVector(_vac, l)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const _colorKeywords = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  _hslA = { h: 0, s: 0, l: 0 },
  _hslB = { h: 0, s: 0, l: 0 };
function hue2rgb(r, e, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? r + (e - r) * 6 * n
      : n < 1 / 2
      ? e
      : n < 2 / 3
      ? r + (e - r) * 6 * (2 / 3 - n)
      : r
  );
}
class Color {
  constructor(e, n, i) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(e, n, i)
    );
  }
  set(e, n, i) {
    if (n === void 0 && i === void 0) {
      const s = e;
      s && s.isColor
        ? this.copy(s)
        : typeof s == "number"
        ? this.setHex(s)
        : typeof s == "string" && this.setStyle(s);
    } else this.setRGB(e, n, i);
    return this;
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, n = SRGBColorSpace) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      ColorManagement.toWorkingColorSpace(this, n),
      this
    );
  }
  setRGB(e, n, i, s = ColorManagement.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = n),
      (this.b = i),
      ColorManagement.toWorkingColorSpace(this, s),
      this
    );
  }
  setHSL(e, n, i, s = ColorManagement.workingColorSpace) {
    if (
      ((e = euclideanModulo(e, 1)),
      (n = clamp$2(n, 0, 1)),
      (i = clamp$2(i, 0, 1)),
      n === 0)
    )
      this.r = this.g = this.b = i;
    else {
      const a = i <= 0.5 ? i * (1 + n) : i + n - i * n,
        o = 2 * i - a;
      (this.r = hue2rgb(o, a, e + 1 / 3)),
        (this.g = hue2rgb(o, a, e)),
        (this.b = hue2rgb(o, a, e - 1 / 3));
    }
    return ColorManagement.toWorkingColorSpace(this, s), this;
  }
  setStyle(e, n = SRGBColorSpace) {
    function i(a) {
      a !== void 0 &&
        parseFloat(a) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored."
        );
    }
    let s;
    if ((s = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let a;
      const o = s[1],
        l = s[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (
            (a =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                l
              ))
          )
            return (
              i(a[4]),
              this.setRGB(
                Math.min(255, parseInt(a[1], 10)) / 255,
                Math.min(255, parseInt(a[2], 10)) / 255,
                Math.min(255, parseInt(a[3], 10)) / 255,
                n
              )
            );
          if (
            (a =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                l
              ))
          )
            return (
              i(a[4]),
              this.setRGB(
                Math.min(100, parseInt(a[1], 10)) / 100,
                Math.min(100, parseInt(a[2], 10)) / 100,
                Math.min(100, parseInt(a[3], 10)) / 100,
                n
              )
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (a =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                l
              ))
          )
            return (
              i(a[4]),
              this.setHSL(
                parseFloat(a[1]) / 360,
                parseFloat(a[2]) / 100,
                parseFloat(a[3]) / 100,
                n
              )
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if ((s = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const a = s[1],
        o = a.length;
      if (o === 3)
        return this.setRGB(
          parseInt(a.charAt(0), 16) / 15,
          parseInt(a.charAt(1), 16) / 15,
          parseInt(a.charAt(2), 16) / 15,
          n
        );
      if (o === 6) return this.setHex(parseInt(a, 16), n);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, n);
    return this;
  }
  setColorName(e, n = SRGBColorSpace) {
    const i = _colorKeywords[e.toLowerCase()];
    return (
      i !== void 0
        ? this.setHex(i, n)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (
      (this.r = SRGBToLinear(e.r)),
      (this.g = SRGBToLinear(e.g)),
      (this.b = SRGBToLinear(e.b)),
      this
    );
  }
  copyLinearToSRGB(e) {
    return (
      (this.r = LinearToSRGB(e.r)),
      (this.g = LinearToSRGB(e.g)),
      (this.b = LinearToSRGB(e.b)),
      this
    );
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = SRGBColorSpace) {
    return (
      ColorManagement.fromWorkingColorSpace(_color.copy(this), e),
      Math.round(clamp$2(_color.r * 255, 0, 255)) * 65536 +
        Math.round(clamp$2(_color.g * 255, 0, 255)) * 256 +
        Math.round(clamp$2(_color.b * 255, 0, 255))
    );
  }
  getHexString(e = SRGBColorSpace) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, n = ColorManagement.workingColorSpace) {
    ColorManagement.fromWorkingColorSpace(_color.copy(this), n);
    const i = _color.r,
      s = _color.g,
      a = _color.b,
      o = Math.max(i, s, a),
      l = Math.min(i, s, a);
    let c, h;
    const u = (l + o) / 2;
    if (l === o) (c = 0), (h = 0);
    else {
      const d = o - l;
      switch (((h = u <= 0.5 ? d / (o + l) : d / (2 - o - l)), o)) {
        case i:
          c = (s - a) / d + (s < a ? 6 : 0);
          break;
        case s:
          c = (a - i) / d + 2;
          break;
        case a:
          c = (i - s) / d + 4;
          break;
      }
      c /= 6;
    }
    return (e.h = c), (e.s = h), (e.l = u), e;
  }
  getRGB(e, n = ColorManagement.workingColorSpace) {
    return (
      ColorManagement.fromWorkingColorSpace(_color.copy(this), n),
      (e.r = _color.r),
      (e.g = _color.g),
      (e.b = _color.b),
      e
    );
  }
  getStyle(e = SRGBColorSpace) {
    ColorManagement.fromWorkingColorSpace(_color.copy(this), e);
    const n = _color.r,
      i = _color.g,
      s = _color.b;
    return e !== SRGBColorSpace
      ? `color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`
      : `rgb(${Math.round(n * 255)},${Math.round(i * 255)},${Math.round(
          s * 255
        )})`;
  }
  offsetHSL(e, n, i) {
    return (
      this.getHSL(_hslA), this.setHSL(_hslA.h + e, _hslA.s + n, _hslA.l + i)
    );
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, n) {
    return (
      (this.r = e.r + n.r), (this.g = e.g + n.g), (this.b = e.b + n.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, n) {
    return (
      (this.r += (e.r - this.r) * n),
      (this.g += (e.g - this.g) * n),
      (this.b += (e.b - this.b) * n),
      this
    );
  }
  lerpColors(e, n, i) {
    return (
      (this.r = e.r + (n.r - e.r) * i),
      (this.g = e.g + (n.g - e.g) * i),
      (this.b = e.b + (n.b - e.b) * i),
      this
    );
  }
  lerpHSL(e, n) {
    this.getHSL(_hslA), e.getHSL(_hslB);
    const i = lerp(_hslA.h, _hslB.h, n),
      s = lerp(_hslA.s, _hslB.s, n),
      a = lerp(_hslA.l, _hslB.l, n);
    return this.setHSL(i, s, a), this;
  }
  setFromVector3(e) {
    return (this.r = e.x), (this.g = e.y), (this.b = e.z), this;
  }
  applyMatrix3(e) {
    const n = this.r,
      i = this.g,
      s = this.b,
      a = e.elements;
    return (
      (this.r = a[0] * n + a[3] * i + a[6] * s),
      (this.g = a[1] * n + a[4] * i + a[7] * s),
      (this.b = a[2] * n + a[5] * i + a[8] * s),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, n = 0) {
    return (this.r = e[n]), (this.g = e[n + 1]), (this.b = e[n + 2]), this;
  }
  toArray(e = [], n = 0) {
    return (e[n] = this.r), (e[n + 1] = this.g), (e[n + 2] = this.b), e;
  }
  fromBufferAttribute(e, n) {
    return (
      (this.r = e.getX(n)), (this.g = e.getY(n)), (this.b = e.getZ(n)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const _color = /* @__PURE__ */ new Color();
Color.NAMES = _colorKeywords;
let _materialId = 0;
class Material extends EventDispatcher {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: _materialId++ }),
      (this.uuid = generateUUID()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = 1),
      (this.side = 0),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = 204),
      (this.blendDst = 205),
      (this.blendEquation = 100),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new Color(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = 3),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = 519),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = 7680),
      (this.stencilZFail = 7680),
      (this.stencilZPass = 7680),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const n in e) {
        const i = e[n];
        if (i === void 0) {
          console.warn(
            `THREE.Material: parameter '${n}' has value of undefined.`
          );
          continue;
        }
        const s = this[n];
        if (s === void 0) {
          console.warn(
            `THREE.Material: '${n}' is not a property of THREE.${this.type}.`
          );
          continue;
        }
        s && s.isColor
          ? s.set(i)
          : s && s.isVector3 && i && i.isVector3
          ? s.copy(i)
          : (this[n] = i);
      }
  }
  toJSON(e) {
    const n = e === void 0 || typeof e == "string";
    n &&
      (e = {
        textures: {},
        images: {},
      });
    const i = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    (i.uuid = this.uuid),
      (i.type = this.type),
      this.name !== "" && (i.name = this.name),
      this.color && this.color.isColor && (i.color = this.color.getHex()),
      this.roughness !== void 0 && (i.roughness = this.roughness),
      this.metalness !== void 0 && (i.metalness = this.metalness),
      this.sheen !== void 0 && (i.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (i.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (i.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (i.emissive = this.emissive.getHex()),
      this.emissiveIntensity !== void 0 &&
        this.emissiveIntensity !== 1 &&
        (i.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (i.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (i.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (i.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (i.shininess = this.shininess),
      this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (i.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (i.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.dispersion !== void 0 && (i.dispersion = this.dispersion),
      this.iridescence !== void 0 && (i.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (i.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (i.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (i.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (i.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy),
      this.anisotropyRotation !== void 0 &&
        (i.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (i.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (i.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (i.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((i.lightMap = this.lightMap.toJSON(e).uuid),
        (i.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((i.aoMap = this.aoMap.toJSON(e).uuid),
        (i.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((i.bumpMap = this.bumpMap.toJSON(e).uuid),
        (i.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((i.normalMap = this.normalMap.toJSON(e).uuid),
        (i.normalMapType = this.normalMapType),
        (i.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((i.displacementMap = this.displacementMap.toJSON(e).uuid),
        (i.displacementScale = this.displacementScale),
        (i.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (i.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (i.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (i.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (i.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (i.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((i.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (i.combine = this.combine)),
      this.envMapRotation !== void 0 &&
        (i.envMapRotation = this.envMapRotation.toArray()),
      this.envMapIntensity !== void 0 &&
        (i.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (i.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (i.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (i.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (i.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (i.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (i.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (i.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (i.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (i.size = this.size),
      this.shadowSide !== null && (i.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (i.sizeAttenuation = this.sizeAttenuation),
      this.blending !== 1 && (i.blending = this.blending),
      this.side !== 0 && (i.side = this.side),
      this.vertexColors === !0 && (i.vertexColors = !0),
      this.opacity < 1 && (i.opacity = this.opacity),
      this.transparent === !0 && (i.transparent = !0),
      this.blendSrc !== 204 && (i.blendSrc = this.blendSrc),
      this.blendDst !== 205 && (i.blendDst = this.blendDst),
      this.blendEquation !== 100 && (i.blendEquation = this.blendEquation),
      this.blendSrcAlpha !== null && (i.blendSrcAlpha = this.blendSrcAlpha),
      this.blendDstAlpha !== null && (i.blendDstAlpha = this.blendDstAlpha),
      this.blendEquationAlpha !== null &&
        (i.blendEquationAlpha = this.blendEquationAlpha),
      this.blendColor &&
        this.blendColor.isColor &&
        (i.blendColor = this.blendColor.getHex()),
      this.blendAlpha !== 0 && (i.blendAlpha = this.blendAlpha),
      this.depthFunc !== 3 && (i.depthFunc = this.depthFunc),
      this.depthTest === !1 && (i.depthTest = this.depthTest),
      this.depthWrite === !1 && (i.depthWrite = this.depthWrite),
      this.colorWrite === !1 && (i.colorWrite = this.colorWrite),
      this.stencilWriteMask !== 255 &&
        (i.stencilWriteMask = this.stencilWriteMask),
      this.stencilFunc !== 519 && (i.stencilFunc = this.stencilFunc),
      this.stencilRef !== 0 && (i.stencilRef = this.stencilRef),
      this.stencilFuncMask !== 255 &&
        (i.stencilFuncMask = this.stencilFuncMask),
      this.stencilFail !== 7680 && (i.stencilFail = this.stencilFail),
      this.stencilZFail !== 7680 && (i.stencilZFail = this.stencilZFail),
      this.stencilZPass !== 7680 && (i.stencilZPass = this.stencilZPass),
      this.stencilWrite === !0 && (i.stencilWrite = this.stencilWrite),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (i.rotation = this.rotation),
      this.polygonOffset === !0 && (i.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (i.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (i.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (i.linewidth = this.linewidth),
      this.dashSize !== void 0 && (i.dashSize = this.dashSize),
      this.gapSize !== void 0 && (i.gapSize = this.gapSize),
      this.scale !== void 0 && (i.scale = this.scale),
      this.dithering === !0 && (i.dithering = !0),
      this.alphaTest > 0 && (i.alphaTest = this.alphaTest),
      this.alphaHash === !0 && (i.alphaHash = !0),
      this.alphaToCoverage === !0 && (i.alphaToCoverage = !0),
      this.premultipliedAlpha === !0 && (i.premultipliedAlpha = !0),
      this.forceSinglePass === !0 && (i.forceSinglePass = !0),
      this.wireframe === !0 && (i.wireframe = !0),
      this.wireframeLinewidth > 1 &&
        (i.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (i.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (i.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (i.flatShading = !0),
      this.visible === !1 && (i.visible = !1),
      this.toneMapped === !1 && (i.toneMapped = !1),
      this.fog === !1 && (i.fog = !1),
      Object.keys(this.userData).length > 0 && (i.userData = this.userData);
    function s(a) {
      const o = [];
      for (const l in a) {
        const c = a[l];
        delete c.metadata, o.push(c);
      }
      return o;
    }
    if (n) {
      const a = s(e.textures),
        o = s(e.images);
      a.length > 0 && (i.textures = a), o.length > 0 && (i.images = o);
    }
    return i;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      this.blendColor.copy(e.blendColor),
      (this.blendAlpha = e.blendAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const n = e.clippingPlanes;
    let i = null;
    if (n !== null) {
      const s = n.length;
      i = new Array(s);
      for (let a = 0; a !== s; ++a) i[a] = n[a].clone();
    }
    return (
      (this.clippingPlanes = i),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaHash = e.alphaHash),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
  onBeforeRender() {
    console.warn("Material: onBeforeRender() has been removed.");
  }
}
class MeshBasicMaterial extends Material {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new Color(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new Euler()),
      (this.combine = 0),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const _vector$9 = /* @__PURE__ */ new Vector3(),
  _vector2$1 = /* @__PURE__ */ new Vector2();
class BufferAttribute {
  constructor(e, n, i = !1) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = n),
      (this.count = e !== void 0 ? e.length / n : 0),
      (this.normalized = i),
      (this.usage = 35044),
      (this._updateRange = { offset: 0, count: -1 }),
      (this.updateRanges = []),
      (this.gpuType = 1015),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get updateRange() {
    return (
      warnOnce(
        "THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."
      ),
      this._updateRange
    );
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  addUpdateRange(e, n) {
    this.updateRanges.push({ start: e, count: n });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      (this.gpuType = e.gpuType),
      this
    );
  }
  copyAt(e, n, i) {
    (e *= this.itemSize), (i *= n.itemSize);
    for (let s = 0, a = this.itemSize; s < a; s++)
      this.array[e + s] = n.array[i + s];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let n = 0, i = this.count; n < i; n++)
        _vector2$1.fromBufferAttribute(this, n),
          _vector2$1.applyMatrix3(e),
          this.setXY(n, _vector2$1.x, _vector2$1.y);
    else if (this.itemSize === 3)
      for (let n = 0, i = this.count; n < i; n++)
        _vector$9.fromBufferAttribute(this, n),
          _vector$9.applyMatrix3(e),
          this.setXYZ(n, _vector$9.x, _vector$9.y, _vector$9.z);
    return this;
  }
  applyMatrix4(e) {
    for (let n = 0, i = this.count; n < i; n++)
      _vector$9.fromBufferAttribute(this, n),
        _vector$9.applyMatrix4(e),
        this.setXYZ(n, _vector$9.x, _vector$9.y, _vector$9.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let n = 0, i = this.count; n < i; n++)
      _vector$9.fromBufferAttribute(this, n),
        _vector$9.applyNormalMatrix(e),
        this.setXYZ(n, _vector$9.x, _vector$9.y, _vector$9.z);
    return this;
  }
  transformDirection(e) {
    for (let n = 0, i = this.count; n < i; n++)
      _vector$9.fromBufferAttribute(this, n),
        _vector$9.transformDirection(e),
        this.setXYZ(n, _vector$9.x, _vector$9.y, _vector$9.z);
    return this;
  }
  set(e, n = 0) {
    return this.array.set(e, n), this;
  }
  getComponent(e, n) {
    let i = this.array[e * this.itemSize + n];
    return this.normalized && (i = denormalize(i, this.array)), i;
  }
  setComponent(e, n, i) {
    return (
      this.normalized && (i = normalize(i, this.array)),
      (this.array[e * this.itemSize + n] = i),
      this
    );
  }
  getX(e) {
    let n = this.array[e * this.itemSize];
    return this.normalized && (n = denormalize(n, this.array)), n;
  }
  setX(e, n) {
    return (
      this.normalized && (n = normalize(n, this.array)),
      (this.array[e * this.itemSize] = n),
      this
    );
  }
  getY(e) {
    let n = this.array[e * this.itemSize + 1];
    return this.normalized && (n = denormalize(n, this.array)), n;
  }
  setY(e, n) {
    return (
      this.normalized && (n = normalize(n, this.array)),
      (this.array[e * this.itemSize + 1] = n),
      this
    );
  }
  getZ(e) {
    let n = this.array[e * this.itemSize + 2];
    return this.normalized && (n = denormalize(n, this.array)), n;
  }
  setZ(e, n) {
    return (
      this.normalized && (n = normalize(n, this.array)),
      (this.array[e * this.itemSize + 2] = n),
      this
    );
  }
  getW(e) {
    let n = this.array[e * this.itemSize + 3];
    return this.normalized && (n = denormalize(n, this.array)), n;
  }
  setW(e, n) {
    return (
      this.normalized && (n = normalize(n, this.array)),
      (this.array[e * this.itemSize + 3] = n),
      this
    );
  }
  setXY(e, n, i) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((n = normalize(n, this.array)), (i = normalize(i, this.array))),
      (this.array[e + 0] = n),
      (this.array[e + 1] = i),
      this
    );
  }
  setXYZ(e, n, i, s) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((n = normalize(n, this.array)),
        (i = normalize(i, this.array)),
        (s = normalize(s, this.array))),
      (this.array[e + 0] = n),
      (this.array[e + 1] = i),
      (this.array[e + 2] = s),
      this
    );
  }
  setXYZW(e, n, i, s, a) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((n = normalize(n, this.array)),
        (i = normalize(i, this.array)),
        (s = normalize(s, this.array)),
        (a = normalize(a, this.array))),
      (this.array[e + 0] = n),
      (this.array[e + 1] = i),
      (this.array[e + 2] = s),
      (this.array[e + 3] = a),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== 35044 && (e.usage = this.usage),
      e
    );
  }
}
class Uint16BufferAttribute extends BufferAttribute {
  constructor(e, n, i) {
    super(new Uint16Array(e), n, i);
  }
}
class Uint32BufferAttribute extends BufferAttribute {
  constructor(e, n, i) {
    super(new Uint32Array(e), n, i);
  }
}
class Float32BufferAttribute extends BufferAttribute {
  constructor(e, n, i) {
    super(new Float32Array(e), n, i);
  }
}
let _id$2 = 0;
const _m1$2 = /* @__PURE__ */ new Matrix4(),
  _obj = /* @__PURE__ */ new Object3D(),
  _offset = /* @__PURE__ */ new Vector3(),
  _box$2 = /* @__PURE__ */ new Box3(),
  _boxMorphTargets = /* @__PURE__ */ new Box3(),
  _vector$8 = /* @__PURE__ */ new Vector3();
class BufferGeometry extends EventDispatcher {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: _id$2++ }),
      (this.uuid = generateUUID()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (
            arrayNeedsUint32(e) ? Uint32BufferAttribute : Uint16BufferAttribute
          )(e, 1))
        : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, n) {
    return (this.attributes[e] = n), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, n, i = 0) {
    this.groups.push({
      start: e,
      count: n,
      materialIndex: i,
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, n) {
    (this.drawRange.start = e), (this.drawRange.count = n);
  }
  applyMatrix4(e) {
    const n = this.attributes.position;
    n !== void 0 && (n.applyMatrix4(e), (n.needsUpdate = !0));
    const i = this.attributes.normal;
    if (i !== void 0) {
      const a = new Matrix3().getNormalMatrix(e);
      i.applyNormalMatrix(a), (i.needsUpdate = !0);
    }
    const s = this.attributes.tangent;
    return (
      s !== void 0 && (s.transformDirection(e), (s.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return _m1$2.makeRotationFromQuaternion(e), this.applyMatrix4(_m1$2), this;
  }
  rotateX(e) {
    return _m1$2.makeRotationX(e), this.applyMatrix4(_m1$2), this;
  }
  rotateY(e) {
    return _m1$2.makeRotationY(e), this.applyMatrix4(_m1$2), this;
  }
  rotateZ(e) {
    return _m1$2.makeRotationZ(e), this.applyMatrix4(_m1$2), this;
  }
  translate(e, n, i) {
    return _m1$2.makeTranslation(e, n, i), this.applyMatrix4(_m1$2), this;
  }
  scale(e, n, i) {
    return _m1$2.makeScale(e, n, i), this.applyMatrix4(_m1$2), this;
  }
  lookAt(e) {
    return (
      _obj.lookAt(e), _obj.updateMatrix(), this.applyMatrix4(_obj.matrix), this
    );
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(_offset).negate(),
      this.translate(_offset.x, _offset.y, _offset.z),
      this
    );
  }
  setFromPoints(e) {
    const n = [];
    for (let i = 0, s = e.length; i < s; i++) {
      const a = e[i];
      n.push(a.x, a.y, a.z || 0);
    }
    return (
      this.setAttribute("position", new Float32BufferAttribute(n, 3)), this
    );
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Box3());
    const e = this.attributes.position,
      n = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        "THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",
        this
      ),
        this.boundingBox.set(
          new Vector3(-1 / 0, -1 / 0, -1 / 0),
          new Vector3(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), n))
        for (let i = 0, s = n.length; i < s; i++) {
          const a = n[i];
          _box$2.setFromBufferAttribute(a),
            this.morphTargetsRelative
              ? (_vector$8.addVectors(this.boundingBox.min, _box$2.min),
                this.boundingBox.expandByPoint(_vector$8),
                _vector$8.addVectors(this.boundingBox.max, _box$2.max),
                this.boundingBox.expandByPoint(_vector$8))
              : (this.boundingBox.expandByPoint(_box$2.min),
                this.boundingBox.expandByPoint(_box$2.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Sphere());
    const e = this.attributes.position,
      n = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        "THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",
        this
      ),
        this.boundingSphere.set(new Vector3(), 1 / 0);
      return;
    }
    if (e) {
      const i = this.boundingSphere.center;
      if ((_box$2.setFromBufferAttribute(e), n))
        for (let a = 0, o = n.length; a < o; a++) {
          const l = n[a];
          _boxMorphTargets.setFromBufferAttribute(l),
            this.morphTargetsRelative
              ? (_vector$8.addVectors(_box$2.min, _boxMorphTargets.min),
                _box$2.expandByPoint(_vector$8),
                _vector$8.addVectors(_box$2.max, _boxMorphTargets.max),
                _box$2.expandByPoint(_vector$8))
              : (_box$2.expandByPoint(_boxMorphTargets.min),
                _box$2.expandByPoint(_boxMorphTargets.max));
        }
      _box$2.getCenter(i);
      let s = 0;
      for (let a = 0, o = e.count; a < o; a++)
        _vector$8.fromBufferAttribute(e, a),
          (s = Math.max(s, i.distanceToSquared(_vector$8)));
      if (n)
        for (let a = 0, o = n.length; a < o; a++) {
          const l = n[a],
            c = this.morphTargetsRelative;
          for (let h = 0, u = l.count; h < u; h++)
            _vector$8.fromBufferAttribute(l, h),
              c && (_offset.fromBufferAttribute(e, h), _vector$8.add(_offset)),
              (s = Math.max(s, i.distanceToSquared(_vector$8)));
        }
      (this.boundingSphere.radius = Math.sqrt(s)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const e = this.index,
      n = this.attributes;
    if (
      e === null ||
      n.position === void 0 ||
      n.normal === void 0 ||
      n.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
      return;
    }
    const i = n.position,
      s = n.normal,
      a = n.uv;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute(
        "tangent",
        new BufferAttribute(new Float32Array(4 * i.count), 4)
      );
    const o = this.getAttribute("tangent"),
      l = [],
      c = [];
    for (let U = 0; U < i.count; U++)
      (l[U] = new Vector3()), (c[U] = new Vector3());
    const h = new Vector3(),
      u = new Vector3(),
      d = new Vector3(),
      f = new Vector2(),
      p = new Vector2(),
      g = new Vector2(),
      v = new Vector3(),
      _ = new Vector3();
    function m(U, T, M) {
      h.fromBufferAttribute(i, U),
        u.fromBufferAttribute(i, T),
        d.fromBufferAttribute(i, M),
        f.fromBufferAttribute(a, U),
        p.fromBufferAttribute(a, T),
        g.fromBufferAttribute(a, M),
        u.sub(h),
        d.sub(h),
        p.sub(f),
        g.sub(f);
      const P = 1 / (p.x * g.y - g.x * p.y);
      isFinite(P) &&
        (v
          .copy(u)
          .multiplyScalar(g.y)
          .addScaledVector(d, -p.y)
          .multiplyScalar(P),
        _.copy(d)
          .multiplyScalar(p.x)
          .addScaledVector(u, -g.x)
          .multiplyScalar(P),
        l[U].add(v),
        l[T].add(v),
        l[M].add(v),
        c[U].add(_),
        c[T].add(_),
        c[M].add(_));
    }
    let A = this.groups;
    A.length === 0 &&
      (A = [
        {
          start: 0,
          count: e.count,
        },
      ]);
    for (let U = 0, T = A.length; U < T; ++U) {
      const M = A[U],
        P = M.start,
        z = M.count;
      for (let O = P, G = P + z; O < G; O += 3)
        m(e.getX(O + 0), e.getX(O + 1), e.getX(O + 2));
    }
    const S = new Vector3(),
      E = new Vector3(),
      N = new Vector3(),
      w = new Vector3();
    function C(U) {
      N.fromBufferAttribute(s, U), w.copy(N);
      const T = l[U];
      S.copy(T),
        S.sub(N.multiplyScalar(N.dot(T))).normalize(),
        E.crossVectors(w, T);
      const P = E.dot(c[U]) < 0 ? -1 : 1;
      o.setXYZW(U, S.x, S.y, S.z, P);
    }
    for (let U = 0, T = A.length; U < T; ++U) {
      const M = A[U],
        P = M.start,
        z = M.count;
      for (let O = P, G = P + z; O < G; O += 3)
        C(e.getX(O + 0)), C(e.getX(O + 1)), C(e.getX(O + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index,
      n = this.getAttribute("position");
    if (n !== void 0) {
      let i = this.getAttribute("normal");
      if (i === void 0)
        (i = new BufferAttribute(new Float32Array(n.count * 3), 3)),
          this.setAttribute("normal", i);
      else for (let f = 0, p = i.count; f < p; f++) i.setXYZ(f, 0, 0, 0);
      const s = new Vector3(),
        a = new Vector3(),
        o = new Vector3(),
        l = new Vector3(),
        c = new Vector3(),
        h = new Vector3(),
        u = new Vector3(),
        d = new Vector3();
      if (e)
        for (let f = 0, p = e.count; f < p; f += 3) {
          const g = e.getX(f + 0),
            v = e.getX(f + 1),
            _ = e.getX(f + 2);
          s.fromBufferAttribute(n, g),
            a.fromBufferAttribute(n, v),
            o.fromBufferAttribute(n, _),
            u.subVectors(o, a),
            d.subVectors(s, a),
            u.cross(d),
            l.fromBufferAttribute(i, g),
            c.fromBufferAttribute(i, v),
            h.fromBufferAttribute(i, _),
            l.add(u),
            c.add(u),
            h.add(u),
            i.setXYZ(g, l.x, l.y, l.z),
            i.setXYZ(v, c.x, c.y, c.z),
            i.setXYZ(_, h.x, h.y, h.z);
        }
      else
        for (let f = 0, p = n.count; f < p; f += 3)
          s.fromBufferAttribute(n, f + 0),
            a.fromBufferAttribute(n, f + 1),
            o.fromBufferAttribute(n, f + 2),
            u.subVectors(o, a),
            d.subVectors(s, a),
            u.cross(d),
            i.setXYZ(f + 0, u.x, u.y, u.z),
            i.setXYZ(f + 1, u.x, u.y, u.z),
            i.setXYZ(f + 2, u.x, u.y, u.z);
      this.normalizeNormals(), (i.needsUpdate = !0);
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let n = 0, i = e.count; n < i; n++)
      _vector$8.fromBufferAttribute(e, n),
        _vector$8.normalize(),
        e.setXYZ(n, _vector$8.x, _vector$8.y, _vector$8.z);
  }
  toNonIndexed() {
    function e(l, c) {
      const h = l.array,
        u = l.itemSize,
        d = l.normalized,
        f = new h.constructor(c.length * u);
      let p = 0,
        g = 0;
      for (let v = 0, _ = c.length; v < _; v++) {
        l.isInterleavedBufferAttribute
          ? (p = c[v] * l.data.stride + l.offset)
          : (p = c[v] * u);
        for (let m = 0; m < u; m++) f[g++] = h[p++];
      }
      return new BufferAttribute(f, u, d);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const n = new BufferGeometry(),
      i = this.index.array,
      s = this.attributes;
    for (const l in s) {
      const c = s[l],
        h = e(c, i);
      n.setAttribute(l, h);
    }
    const a = this.morphAttributes;
    for (const l in a) {
      const c = [],
        h = a[l];
      for (let u = 0, d = h.length; u < d; u++) {
        const f = h[u],
          p = e(f, i);
        c.push(p);
      }
      n.morphAttributes[l] = c;
    }
    n.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let l = 0, c = o.length; l < c; l++) {
      const h = o[l];
      n.addGroup(h.start, h.count, h.materialIndex);
    }
    return n;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const c = this.parameters;
      for (const h in c) c[h] !== void 0 && (e[h] = c[h]);
      return e;
    }
    e.data = { attributes: {} };
    const n = this.index;
    n !== null &&
      (e.data.index = {
        type: n.array.constructor.name,
        array: Array.prototype.slice.call(n.array),
      });
    const i = this.attributes;
    for (const c in i) {
      const h = i[c];
      e.data.attributes[c] = h.toJSON(e.data);
    }
    const s = {};
    let a = !1;
    for (const c in this.morphAttributes) {
      const h = this.morphAttributes[c],
        u = [];
      for (let d = 0, f = h.length; d < f; d++) {
        const p = h[d];
        u.push(p.toJSON(e.data));
      }
      u.length > 0 && ((s[c] = u), (a = !0));
    }
    a &&
      ((e.data.morphAttributes = s),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const l = this.boundingSphere;
    return (
      l !== null &&
        (e.data.boundingSphere = {
          center: l.center.toArray(),
          radius: l.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const n = {};
    this.name = e.name;
    const i = e.index;
    i !== null && this.setIndex(i.clone(n));
    const s = e.attributes;
    for (const h in s) {
      const u = s[h];
      this.setAttribute(h, u.clone(n));
    }
    const a = e.morphAttributes;
    for (const h in a) {
      const u = [],
        d = a[h];
      for (let f = 0, p = d.length; f < p; f++) u.push(d[f].clone(n));
      this.morphAttributes[h] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let h = 0, u = o.length; h < u; h++) {
      const d = o[h];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const l = e.boundingBox;
    l !== null && (this.boundingBox = l.clone());
    const c = e.boundingSphere;
    return (
      c !== null && (this.boundingSphere = c.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const _inverseMatrix$3 = /* @__PURE__ */ new Matrix4(),
  _ray$3 = /* @__PURE__ */ new Ray(),
  _sphere$6 = /* @__PURE__ */ new Sphere(),
  _sphereHitAt = /* @__PURE__ */ new Vector3(),
  _vA$1 = /* @__PURE__ */ new Vector3(),
  _vB$1 = /* @__PURE__ */ new Vector3(),
  _vC$1 = /* @__PURE__ */ new Vector3(),
  _tempA = /* @__PURE__ */ new Vector3(),
  _morphA = /* @__PURE__ */ new Vector3(),
  _uvA$1 = /* @__PURE__ */ new Vector2(),
  _uvB$1 = /* @__PURE__ */ new Vector2(),
  _uvC$1 = /* @__PURE__ */ new Vector2(),
  _normalA = /* @__PURE__ */ new Vector3(),
  _normalB = /* @__PURE__ */ new Vector3(),
  _normalC = /* @__PURE__ */ new Vector3(),
  _intersectionPoint = /* @__PURE__ */ new Vector3(),
  _intersectionPointWorld = /* @__PURE__ */ new Vector3();
class Mesh extends Object3D {
  constructor(e = new BufferGeometry(), n = new MeshBasicMaterial()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = n),
      this.updateMorphTargets();
  }
  copy(e, n) {
    return (
      super.copy(e, n),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const n = this.geometry.morphAttributes,
      i = Object.keys(n);
    if (i.length > 0) {
      const s = n[i[0]];
      if (s !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let a = 0, o = s.length; a < o; a++) {
          const l = s[a].name || String(a);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[l] = a);
        }
      }
    }
  }
  getVertexPosition(e, n) {
    const i = this.geometry,
      s = i.attributes.position,
      a = i.morphAttributes.position,
      o = i.morphTargetsRelative;
    n.fromBufferAttribute(s, e);
    const l = this.morphTargetInfluences;
    if (a && l) {
      _morphA.set(0, 0, 0);
      for (let c = 0, h = a.length; c < h; c++) {
        const u = l[c],
          d = a[c];
        u !== 0 &&
          (_tempA.fromBufferAttribute(d, e),
          o
            ? _morphA.addScaledVector(_tempA, u)
            : _morphA.addScaledVector(_tempA.sub(n), u));
      }
      n.add(_morphA);
    }
    return n;
  }
  raycast(e, n) {
    const i = this.geometry,
      s = this.material,
      a = this.matrixWorld;
    s !== void 0 &&
      (i.boundingSphere === null && i.computeBoundingSphere(),
      _sphere$6.copy(i.boundingSphere),
      _sphere$6.applyMatrix4(a),
      _ray$3.copy(e.ray).recast(e.near),
      !(
        _sphere$6.containsPoint(_ray$3.origin) === !1 &&
        (_ray$3.intersectSphere(_sphere$6, _sphereHitAt) === null ||
          _ray$3.origin.distanceToSquared(_sphereHitAt) > (e.far - e.near) ** 2)
      ) &&
        (_inverseMatrix$3.copy(a).invert(),
        _ray$3.copy(e.ray).applyMatrix4(_inverseMatrix$3),
        !(
          i.boundingBox !== null && _ray$3.intersectsBox(i.boundingBox) === !1
        ) && this._computeIntersections(e, n, _ray$3)));
  }
  _computeIntersections(e, n, i) {
    let s;
    const a = this.geometry,
      o = this.material,
      l = a.index,
      c = a.attributes.position,
      h = a.attributes.uv,
      u = a.attributes.uv1,
      d = a.attributes.normal,
      f = a.groups,
      p = a.drawRange;
    if (l !== null)
      if (Array.isArray(o))
        for (let g = 0, v = f.length; g < v; g++) {
          const _ = f[g],
            m = o[_.materialIndex],
            A = Math.max(_.start, p.start),
            S = Math.min(
              l.count,
              Math.min(_.start + _.count, p.start + p.count)
            );
          for (let E = A, N = S; E < N; E += 3) {
            const w = l.getX(E),
              C = l.getX(E + 1),
              U = l.getX(E + 2);
            (s = checkGeometryIntersection(this, m, e, i, h, u, d, w, C, U)),
              s &&
                ((s.faceIndex = Math.floor(E / 3)),
                (s.face.materialIndex = _.materialIndex),
                n.push(s));
          }
        }
      else {
        const g = Math.max(0, p.start),
          v = Math.min(l.count, p.start + p.count);
        for (let _ = g, m = v; _ < m; _ += 3) {
          const A = l.getX(_),
            S = l.getX(_ + 1),
            E = l.getX(_ + 2);
          (s = checkGeometryIntersection(this, o, e, i, h, u, d, A, S, E)),
            s && ((s.faceIndex = Math.floor(_ / 3)), n.push(s));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(o))
        for (let g = 0, v = f.length; g < v; g++) {
          const _ = f[g],
            m = o[_.materialIndex],
            A = Math.max(_.start, p.start),
            S = Math.min(
              c.count,
              Math.min(_.start + _.count, p.start + p.count)
            );
          for (let E = A, N = S; E < N; E += 3) {
            const w = E,
              C = E + 1,
              U = E + 2;
            (s = checkGeometryIntersection(this, m, e, i, h, u, d, w, C, U)),
              s &&
                ((s.faceIndex = Math.floor(E / 3)),
                (s.face.materialIndex = _.materialIndex),
                n.push(s));
          }
        }
      else {
        const g = Math.max(0, p.start),
          v = Math.min(c.count, p.start + p.count);
        for (let _ = g, m = v; _ < m; _ += 3) {
          const A = _,
            S = _ + 1,
            E = _ + 2;
          (s = checkGeometryIntersection(this, o, e, i, h, u, d, A, S, E)),
            s && ((s.faceIndex = Math.floor(_ / 3)), n.push(s));
        }
      }
  }
}
function checkIntersection$1(r, e, n, i, s, a, o, l) {
  let c;
  if (
    (e.side === 1
      ? (c = i.intersectTriangle(o, a, s, !0, l))
      : (c = i.intersectTriangle(s, a, o, e.side === 0, l)),
    c === null)
  )
    return null;
  _intersectionPointWorld.copy(l),
    _intersectionPointWorld.applyMatrix4(r.matrixWorld);
  const h = n.ray.origin.distanceTo(_intersectionPointWorld);
  return h < n.near || h > n.far
    ? null
    : {
        distance: h,
        point: _intersectionPointWorld.clone(),
        object: r,
      };
}
function checkGeometryIntersection(r, e, n, i, s, a, o, l, c, h) {
  r.getVertexPosition(l, _vA$1),
    r.getVertexPosition(c, _vB$1),
    r.getVertexPosition(h, _vC$1);
  const u = checkIntersection$1(
    r,
    e,
    n,
    i,
    _vA$1,
    _vB$1,
    _vC$1,
    _intersectionPoint
  );
  if (u) {
    s &&
      (_uvA$1.fromBufferAttribute(s, l),
      _uvB$1.fromBufferAttribute(s, c),
      _uvC$1.fromBufferAttribute(s, h),
      (u.uv = Triangle.getInterpolation(
        _intersectionPoint,
        _vA$1,
        _vB$1,
        _vC$1,
        _uvA$1,
        _uvB$1,
        _uvC$1,
        new Vector2()
      ))),
      a &&
        (_uvA$1.fromBufferAttribute(a, l),
        _uvB$1.fromBufferAttribute(a, c),
        _uvC$1.fromBufferAttribute(a, h),
        (u.uv1 = Triangle.getInterpolation(
          _intersectionPoint,
          _vA$1,
          _vB$1,
          _vC$1,
          _uvA$1,
          _uvB$1,
          _uvC$1,
          new Vector2()
        ))),
      o &&
        (_normalA.fromBufferAttribute(o, l),
        _normalB.fromBufferAttribute(o, c),
        _normalC.fromBufferAttribute(o, h),
        (u.normal = Triangle.getInterpolation(
          _intersectionPoint,
          _vA$1,
          _vB$1,
          _vC$1,
          _normalA,
          _normalB,
          _normalC,
          new Vector3()
        )),
        u.normal.dot(i.direction) > 0 && u.normal.multiplyScalar(-1));
    const d = {
      a: l,
      b: c,
      c: h,
      normal: new Vector3(),
      materialIndex: 0,
    };
    Triangle.getNormal(_vA$1, _vB$1, _vC$1, d.normal), (u.face = d);
  }
  return u;
}
class BoxGeometry extends BufferGeometry {
  constructor(e = 1, n = 1, i = 1, s = 1, a = 1, o = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: n,
        depth: i,
        widthSegments: s,
        heightSegments: a,
        depthSegments: o,
      });
    const l = this;
    (s = Math.floor(s)), (a = Math.floor(a)), (o = Math.floor(o));
    const c = [],
      h = [],
      u = [],
      d = [];
    let f = 0,
      p = 0;
    g("z", "y", "x", -1, -1, i, n, e, o, a, 0),
      g("z", "y", "x", 1, -1, i, n, -e, o, a, 1),
      g("x", "z", "y", 1, 1, e, i, n, s, o, 2),
      g("x", "z", "y", 1, -1, e, i, -n, s, o, 3),
      g("x", "y", "z", 1, -1, e, n, i, s, a, 4),
      g("x", "y", "z", -1, -1, e, n, -i, s, a, 5),
      this.setIndex(c),
      this.setAttribute("position", new Float32BufferAttribute(h, 3)),
      this.setAttribute("normal", new Float32BufferAttribute(u, 3)),
      this.setAttribute("uv", new Float32BufferAttribute(d, 2));
    function g(v, _, m, A, S, E, N, w, C, U, T) {
      const M = E / C,
        P = N / U,
        z = E / 2,
        O = N / 2,
        G = w / 2,
        X = C + 1,
        k = U + 1;
      let K = 0,
        H = 0;
      const se = new Vector3();
      for (let pe = 0; pe < k; pe++) {
        const me = pe * P - O;
        for (let Ie = 0; Ie < X; Ie++) {
          const ze = Ie * M - z;
          (se[v] = ze * A),
            (se[_] = me * S),
            (se[m] = G),
            h.push(se.x, se.y, se.z),
            (se[v] = 0),
            (se[_] = 0),
            (se[m] = w > 0 ? 1 : -1),
            u.push(se.x, se.y, se.z),
            d.push(Ie / C),
            d.push(1 - pe / U),
            (K += 1);
        }
      }
      for (let pe = 0; pe < U; pe++)
        for (let me = 0; me < C; me++) {
          const Ie = f + me + X * pe,
            ze = f + me + X * (pe + 1),
            W = f + (me + 1) + X * (pe + 1),
            J = f + (me + 1) + X * pe;
          c.push(Ie, ze, J), c.push(ze, W, J), (H += 6);
        }
      l.addGroup(p, H, T), (p += H), (f += K);
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new BoxGeometry(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function cloneUniforms(r) {
  const e = {};
  for (const n in r) {
    e[n] = {};
    for (const i in r[n]) {
      const s = r[n][i];
      s &&
      (s.isColor ||
        s.isMatrix3 ||
        s.isMatrix4 ||
        s.isVector2 ||
        s.isVector3 ||
        s.isVector4 ||
        s.isTexture ||
        s.isQuaternion)
        ? s.isRenderTargetTexture
          ? (console.warn(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."
            ),
            (e[n][i] = null))
          : (e[n][i] = s.clone())
        : Array.isArray(s)
        ? (e[n][i] = s.slice())
        : (e[n][i] = s);
    }
  }
  return e;
}
function mergeUniforms(r) {
  const e = {};
  for (let n = 0; n < r.length; n++) {
    const i = cloneUniforms(r[n]);
    for (const s in i) e[s] = i[s];
  }
  return e;
}
function cloneUniformsGroups(r) {
  const e = [];
  for (let n = 0; n < r.length; n++) e.push(r[n].clone());
  return e;
}
function getUnlitUniformColorSpace(r) {
  const e = r.getRenderTarget();
  return e === null
    ? r.outputColorSpace
    : e.isXRRenderTarget === !0
    ? e.texture.colorSpace
    : ColorManagement.workingColorSpace;
}
const UniformsUtils = { clone: cloneUniforms, merge: mergeUniforms };
var default_vertex = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  default_fragment = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class ShaderMaterial extends Material {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = default_vertex),
      (this.fragmentShader = default_fragment),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = {
        clipCullDistance: !1,
        // set to use vertex shader clipping
        multiDraw: !1,
        // set to use vertex shader multi_draw / enable gl_DrawID
      }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = cloneUniforms(e.uniforms)),
      (this.uniformsGroups = cloneUniformsGroups(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const n = super.toJSON(e);
    (n.glslVersion = this.glslVersion), (n.uniforms = {});
    for (const s in this.uniforms) {
      const o = this.uniforms[s].value;
      o && o.isTexture
        ? (n.uniforms[s] = {
            type: "t",
            value: o.toJSON(e).uuid,
          })
        : o && o.isColor
        ? (n.uniforms[s] = {
            type: "c",
            value: o.getHex(),
          })
        : o && o.isVector2
        ? (n.uniforms[s] = {
            type: "v2",
            value: o.toArray(),
          })
        : o && o.isVector3
        ? (n.uniforms[s] = {
            type: "v3",
            value: o.toArray(),
          })
        : o && o.isVector4
        ? (n.uniforms[s] = {
            type: "v4",
            value: o.toArray(),
          })
        : o && o.isMatrix3
        ? (n.uniforms[s] = {
            type: "m3",
            value: o.toArray(),
          })
        : o && o.isMatrix4
        ? (n.uniforms[s] = {
            type: "m4",
            value: o.toArray(),
          })
        : (n.uniforms[s] = {
            value: o,
          });
    }
    Object.keys(this.defines).length > 0 && (n.defines = this.defines),
      (n.vertexShader = this.vertexShader),
      (n.fragmentShader = this.fragmentShader),
      (n.lights = this.lights),
      (n.clipping = this.clipping);
    const i = {};
    for (const s in this.extensions) this.extensions[s] === !0 && (i[s] = !0);
    return Object.keys(i).length > 0 && (n.extensions = i), n;
  }
}
class Camera extends Object3D {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new Matrix4()),
      (this.projectionMatrix = new Matrix4()),
      (this.projectionMatrixInverse = new Matrix4()),
      (this.coordinateSystem = 2e3);
  }
  copy(e, n) {
    return (
      super.copy(e, n),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      (this.coordinateSystem = e.coordinateSystem),
      this
    );
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, n) {
    super.updateWorldMatrix(e, n),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const _v3$1 = /* @__PURE__ */ new Vector3(),
  _minTarget = /* @__PURE__ */ new Vector2(),
  _maxTarget = /* @__PURE__ */ new Vector2();
class PerspectiveCamera extends Camera {
  constructor(e = 50, n = 1, i = 0.1, s = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = i),
      (this.far = s),
      (this.focus = 10),
      (this.aspect = n),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, n) {
    return (
      super.copy(e, n),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const n = (0.5 * this.getFilmHeight()) / e;
    (this.fov = RAD2DEG * 2 * Math.atan(n)), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(DEG2RAD * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return (
      RAD2DEG * 2 * Math.atan(Math.tan(DEG2RAD * 0.5 * this.fov) / this.zoom)
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.
   */
  getViewBounds(e, n, i) {
    _v3$1.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      n.set(_v3$1.x, _v3$1.y).multiplyScalar(-e / _v3$1.z),
      _v3$1.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      i.set(_v3$1.x, _v3$1.y).multiplyScalar(-e / _v3$1.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   * Copies the result into the target Vector2, where x is width and y is height.
   */
  getViewSize(e, n) {
    return (
      this.getViewBounds(e, _minTarget, _maxTarget),
      n.subVectors(_maxTarget, _minTarget)
    );
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, n, i, s, a, o) {
    (this.aspect = e / n),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = n),
      (this.view.offsetX = i),
      (this.view.offsetY = s),
      (this.view.width = a),
      (this.view.height = o),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let n = (e * Math.tan(DEG2RAD * 0.5 * this.fov)) / this.zoom,
      i = 2 * n,
      s = this.aspect * i,
      a = -0.5 * s;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = o.fullWidth,
        h = o.fullHeight;
      (a += (o.offsetX * s) / c),
        (n -= (o.offsetY * i) / h),
        (s *= o.width / c),
        (i *= o.height / h);
    }
    const l = this.filmOffset;
    l !== 0 && (a += (e * l) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        a,
        a + s,
        n,
        n - i,
        e,
        this.far,
        this.coordinateSystem
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const n = super.toJSON(e);
    return (
      (n.object.fov = this.fov),
      (n.object.zoom = this.zoom),
      (n.object.near = this.near),
      (n.object.far = this.far),
      (n.object.focus = this.focus),
      (n.object.aspect = this.aspect),
      this.view !== null && (n.object.view = Object.assign({}, this.view)),
      (n.object.filmGauge = this.filmGauge),
      (n.object.filmOffset = this.filmOffset),
      n
    );
  }
}
const fov = -90,
  aspect = 1;
class CubeCamera extends Object3D {
  constructor(e, n, i) {
    super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = i),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0);
    const s = new PerspectiveCamera(fov, aspect, e, n);
    (s.layers = this.layers), this.add(s);
    const a = new PerspectiveCamera(fov, aspect, e, n);
    (a.layers = this.layers), this.add(a);
    const o = new PerspectiveCamera(fov, aspect, e, n);
    (o.layers = this.layers), this.add(o);
    const l = new PerspectiveCamera(fov, aspect, e, n);
    (l.layers = this.layers), this.add(l);
    const c = new PerspectiveCamera(fov, aspect, e, n);
    (c.layers = this.layers), this.add(c);
    const h = new PerspectiveCamera(fov, aspect, e, n);
    (h.layers = this.layers), this.add(h);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem,
      n = this.children.concat(),
      [i, s, a, o, l, c] = n;
    for (const h of n) this.remove(h);
    if (e === 2e3)
      i.up.set(0, 1, 0),
        i.lookAt(1, 0, 0),
        s.up.set(0, 1, 0),
        s.lookAt(-1, 0, 0),
        a.up.set(0, 0, -1),
        a.lookAt(0, 1, 0),
        o.up.set(0, 0, 1),
        o.lookAt(0, -1, 0),
        l.up.set(0, 1, 0),
        l.lookAt(0, 0, 1),
        c.up.set(0, 1, 0),
        c.lookAt(0, 0, -1);
    else if (e === 2001)
      i.up.set(0, -1, 0),
        i.lookAt(-1, 0, 0),
        s.up.set(0, -1, 0),
        s.lookAt(1, 0, 0),
        a.up.set(0, 0, 1),
        a.lookAt(0, 1, 0),
        o.up.set(0, 0, -1),
        o.lookAt(0, -1, 0),
        l.up.set(0, -1, 0),
        l.lookAt(0, 0, 1),
        c.up.set(0, -1, 0),
        c.lookAt(0, 0, -1);
    else
      throw new Error(
        "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
          e
      );
    for (const h of n) this.add(h), h.updateMatrixWorld();
  }
  update(e, n) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: i, activeMipmapLevel: s } = this;
    this.coordinateSystem !== e.coordinateSystem &&
      ((this.coordinateSystem = e.coordinateSystem),
      this.updateCoordinateSystem());
    const [a, o, l, c, h, u] = this.children,
      d = e.getRenderTarget(),
      f = e.getActiveCubeFace(),
      p = e.getActiveMipmapLevel(),
      g = e.xr.enabled;
    e.xr.enabled = !1;
    const v = i.texture.generateMipmaps;
    (i.texture.generateMipmaps = !1),
      e.setRenderTarget(i, 0, s),
      e.render(n, a),
      e.setRenderTarget(i, 1, s),
      e.render(n, o),
      e.setRenderTarget(i, 2, s),
      e.render(n, l),
      e.setRenderTarget(i, 3, s),
      e.render(n, c),
      e.setRenderTarget(i, 4, s),
      e.render(n, h),
      (i.texture.generateMipmaps = v),
      e.setRenderTarget(i, 5, s),
      e.render(n, u),
      e.setRenderTarget(d, f, p),
      (e.xr.enabled = g),
      (i.texture.needsPMREMUpdate = !0);
  }
}
class CubeTexture extends Texture {
  constructor(e, n, i, s, a, o, l, c, h, u) {
    (e = e !== void 0 ? e : []),
      (n = n !== void 0 ? n : 301),
      super(e, n, i, s, a, o, l, c, h, u),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class WebGLCubeRenderTarget extends WebGLRenderTarget {
  constructor(e = 1, n = {}) {
    super(e, e, n), (this.isWebGLCubeRenderTarget = !0);
    const i = { width: e, height: e, depth: 1 },
      s = [i, i, i, i, i, i];
    (this.texture = new CubeTexture(
      s,
      n.mapping,
      n.wrapS,
      n.wrapT,
      n.magFilter,
      n.minFilter,
      n.format,
      n.type,
      n.anisotropy,
      n.colorSpace
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        n.generateMipmaps !== void 0 ? n.generateMipmaps : !1),
      (this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : 1006);
  }
  fromEquirectangularTexture(e, n) {
    (this.texture.type = n.type),
      (this.texture.colorSpace = n.colorSpace),
      (this.texture.generateMipmaps = n.generateMipmaps),
      (this.texture.minFilter = n.minFilter),
      (this.texture.magFilter = n.magFilter);
    const i = {
        uniforms: {
          tEquirect: { value: null },
        },
        vertexShader:
          /* glsl */
          `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader:
          /* glsl */
          `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      s = new BoxGeometry(5, 5, 5),
      a = new ShaderMaterial({
        name: "CubemapFromEquirect",
        uniforms: cloneUniforms(i.uniforms),
        vertexShader: i.vertexShader,
        fragmentShader: i.fragmentShader,
        side: 1,
        blending: 0,
      });
    a.uniforms.tEquirect.value = n;
    const o = new Mesh(s, a),
      l = n.minFilter;
    return (
      n.minFilter === 1008 && (n.minFilter = 1006),
      new CubeCamera(1, 10, this).update(e, o),
      (n.minFilter = l),
      o.geometry.dispose(),
      o.material.dispose(),
      this
    );
  }
  clear(e, n, i, s) {
    const a = e.getRenderTarget();
    for (let o = 0; o < 6; o++) e.setRenderTarget(this, o), e.clear(n, i, s);
    e.setRenderTarget(a);
  }
}
const _vector1 = /* @__PURE__ */ new Vector3(),
  _vector2 = /* @__PURE__ */ new Vector3(),
  _normalMatrix = /* @__PURE__ */ new Matrix3();
let Plane$2 = class {
  constructor(e = new Vector3(1, 0, 0), n = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = n);
  }
  set(e, n) {
    return this.normal.copy(e), (this.constant = n), this;
  }
  setComponents(e, n, i, s) {
    return this.normal.set(e, n, i), (this.constant = s), this;
  }
  setFromNormalAndCoplanarPoint(e, n) {
    return this.normal.copy(e), (this.constant = -n.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, n, i) {
    const s = _vector1
      .subVectors(i, n)
      .cross(_vector2.subVectors(e, n))
      .normalize();
    return this.setFromNormalAndCoplanarPoint(s, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, n) {
    return n.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, n) {
    const i = e.delta(_vector1),
      s = this.normal.dot(i);
    if (s === 0)
      return this.distanceToPoint(e.start) === 0 ? n.copy(e.start) : null;
    const a = -(e.start.dot(this.normal) + this.constant) / s;
    return a < 0 || a > 1 ? null : n.copy(e.start).addScaledVector(i, a);
  }
  intersectsLine(e) {
    const n = this.distanceToPoint(e.start),
      i = this.distanceToPoint(e.end);
    return (n < 0 && i > 0) || (i < 0 && n > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, n) {
    const i = n || _normalMatrix.getNormalMatrix(e),
      s = this.coplanarPoint(_vector1).applyMatrix4(e),
      a = this.normal.applyMatrix3(i).normalize();
    return (this.constant = -s.dot(a)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
const _sphere$5 = /* @__PURE__ */ new Sphere(),
  _vector$7 = /* @__PURE__ */ new Vector3();
class Frustum {
  constructor(
    e = new Plane$2(),
    n = new Plane$2(),
    i = new Plane$2(),
    s = new Plane$2(),
    a = new Plane$2(),
    o = new Plane$2()
  ) {
    this.planes = [e, n, i, s, a, o];
  }
  set(e, n, i, s, a, o) {
    const l = this.planes;
    return (
      l[0].copy(e),
      l[1].copy(n),
      l[2].copy(i),
      l[3].copy(s),
      l[4].copy(a),
      l[5].copy(o),
      this
    );
  }
  copy(e) {
    const n = this.planes;
    for (let i = 0; i < 6; i++) n[i].copy(e.planes[i]);
    return this;
  }
  setFromProjectionMatrix(e, n = 2e3) {
    const i = this.planes,
      s = e.elements,
      a = s[0],
      o = s[1],
      l = s[2],
      c = s[3],
      h = s[4],
      u = s[5],
      d = s[6],
      f = s[7],
      p = s[8],
      g = s[9],
      v = s[10],
      _ = s[11],
      m = s[12],
      A = s[13],
      S = s[14],
      E = s[15];
    if (
      (i[0].setComponents(c - a, f - h, _ - p, E - m).normalize(),
      i[1].setComponents(c + a, f + h, _ + p, E + m).normalize(),
      i[2].setComponents(c + o, f + u, _ + g, E + A).normalize(),
      i[3].setComponents(c - o, f - u, _ - g, E - A).normalize(),
      i[4].setComponents(c - l, f - d, _ - v, E - S).normalize(),
      n === 2e3)
    )
      i[5].setComponents(c + l, f + d, _ + v, E + S).normalize();
    else if (n === 2001) i[5].setComponents(l, d, v, S).normalize();
    else
      throw new Error(
        "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
          n
      );
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(),
        _sphere$5.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const n = e.geometry;
      n.boundingSphere === null && n.computeBoundingSphere(),
        _sphere$5.copy(n.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(_sphere$5);
  }
  intersectsSprite(e) {
    return (
      _sphere$5.center.set(0, 0, 0),
      (_sphere$5.radius = 0.7071067811865476),
      _sphere$5.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(_sphere$5)
    );
  }
  intersectsSphere(e) {
    const n = this.planes,
      i = e.center,
      s = -e.radius;
    for (let a = 0; a < 6; a++) if (n[a].distanceToPoint(i) < s) return !1;
    return !0;
  }
  intersectsBox(e) {
    const n = this.planes;
    for (let i = 0; i < 6; i++) {
      const s = n[i];
      if (
        ((_vector$7.x = s.normal.x > 0 ? e.max.x : e.min.x),
        (_vector$7.y = s.normal.y > 0 ? e.max.y : e.min.y),
        (_vector$7.z = s.normal.z > 0 ? e.max.z : e.min.z),
        s.distanceToPoint(_vector$7) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const n = this.planes;
    for (let i = 0; i < 6; i++) if (n[i].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function WebGLAnimation() {
  let r = null,
    e = !1,
    n = null,
    i = null;
  function s(a, o) {
    n(a, o), (i = r.requestAnimationFrame(s));
  }
  return {
    start: function () {
      e !== !0 && n !== null && ((i = r.requestAnimationFrame(s)), (e = !0));
    },
    stop: function () {
      r.cancelAnimationFrame(i), (e = !1);
    },
    setAnimationLoop: function (a) {
      n = a;
    },
    setContext: function (a) {
      r = a;
    },
  };
}
function WebGLAttributes(r) {
  const e = /* @__PURE__ */ new WeakMap();
  function n(l, c) {
    const h = l.array,
      u = l.usage,
      d = h.byteLength,
      f = r.createBuffer();
    r.bindBuffer(c, f), r.bufferData(c, h, u), l.onUploadCallback();
    let p;
    if (h instanceof Float32Array) p = r.FLOAT;
    else if (h instanceof Uint16Array)
      l.isFloat16BufferAttribute ? (p = r.HALF_FLOAT) : (p = r.UNSIGNED_SHORT);
    else if (h instanceof Int16Array) p = r.SHORT;
    else if (h instanceof Uint32Array) p = r.UNSIGNED_INT;
    else if (h instanceof Int32Array) p = r.INT;
    else if (h instanceof Int8Array) p = r.BYTE;
    else if (h instanceof Uint8Array) p = r.UNSIGNED_BYTE;
    else if (h instanceof Uint8ClampedArray) p = r.UNSIGNED_BYTE;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + h
      );
    return {
      buffer: f,
      type: p,
      bytesPerElement: h.BYTES_PER_ELEMENT,
      version: l.version,
      size: d,
    };
  }
  function i(l, c, h) {
    const u = c.array,
      d = c._updateRange,
      f = c.updateRanges;
    if (
      (r.bindBuffer(h, l),
      d.count === -1 && f.length === 0 && r.bufferSubData(h, 0, u),
      f.length !== 0)
    ) {
      for (let p = 0, g = f.length; p < g; p++) {
        const v = f[p];
        r.bufferSubData(h, v.start * u.BYTES_PER_ELEMENT, u, v.start, v.count);
      }
      c.clearUpdateRanges();
    }
    d.count !== -1 &&
      (r.bufferSubData(h, d.offset * u.BYTES_PER_ELEMENT, u, d.offset, d.count),
      (d.count = -1)),
      c.onUploadCallback();
  }
  function s(l) {
    return l.isInterleavedBufferAttribute && (l = l.data), e.get(l);
  }
  function a(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const c = e.get(l);
    c && (r.deleteBuffer(c.buffer), e.delete(l));
  }
  function o(l, c) {
    if (l.isGLBufferAttribute) {
      const u = e.get(l);
      (!u || u.version < l.version) &&
        e.set(l, {
          buffer: l.buffer,
          type: l.type,
          bytesPerElement: l.elementSize,
          version: l.version,
        });
      return;
    }
    l.isInterleavedBufferAttribute && (l = l.data);
    const h = e.get(l);
    if (h === void 0) e.set(l, n(l, c));
    else if (h.version < l.version) {
      if (h.size !== l.array.byteLength)
        throw new Error(
          "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported."
        );
      i(h.buffer, l, c), (h.version = l.version);
    }
  }
  return {
    get: s,
    remove: a,
    update: o,
  };
}
class PlaneGeometry extends BufferGeometry {
  constructor(e = 1, n = 1, i = 1, s = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: n,
        widthSegments: i,
        heightSegments: s,
      });
    const a = e / 2,
      o = n / 2,
      l = Math.floor(i),
      c = Math.floor(s),
      h = l + 1,
      u = c + 1,
      d = e / l,
      f = n / c,
      p = [],
      g = [],
      v = [],
      _ = [];
    for (let m = 0; m < u; m++) {
      const A = m * f - o;
      for (let S = 0; S < h; S++) {
        const E = S * d - a;
        g.push(E, -A, 0), v.push(0, 0, 1), _.push(S / l), _.push(1 - m / c);
      }
    }
    for (let m = 0; m < c; m++)
      for (let A = 0; A < l; A++) {
        const S = A + h * m,
          E = A + h * (m + 1),
          N = A + 1 + h * (m + 1),
          w = A + 1 + h * m;
        p.push(S, E, w), p.push(E, N, w);
      }
    this.setIndex(p),
      this.setAttribute("position", new Float32BufferAttribute(g, 3)),
      this.setAttribute("normal", new Float32BufferAttribute(v, 3)),
      this.setAttribute("uv", new Float32BufferAttribute(_, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new PlaneGeometry(
      e.width,
      e.height,
      e.widthSegments,
      e.heightSegments
    );
  }
}
var alphahash_fragment = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  alphahash_pars_fragment = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  alphamap_fragment = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  alphamap_pars_fragment = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  alphatest_fragment = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
  alphatest_pars_fragment = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  aomap_fragment = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  aomap_pars_fragment = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  batching_pars_vertex = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,
  batching_vertex = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
  begin_vertex = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  beginnormal_vertex = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  bsdfs = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  iridescence_fragment = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  bumpmap_pars_fragment = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  clipping_planes_fragment = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,
  clipping_planes_pars_fragment = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  clipping_planes_pars_vertex = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  clipping_planes_vertex = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  color_fragment = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  color_pars_fragment = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  color_pars_vertex = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,
  color_vertex = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,
  common = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  cube_uv_reflection_fragment = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  defaultnormal_vertex = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  displacementmap_pars_vertex = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  displacementmap_vertex = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  emissivemap_fragment = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  emissivemap_pars_fragment = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  colorspace_fragment = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  colorspace_pars_fragment = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,
  envmap_fragment = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  envmap_common_pars_fragment = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  envmap_pars_fragment = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  envmap_pars_vertex = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  envmap_vertex = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  fog_vertex = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  fog_pars_vertex = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  fog_fragment = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  fog_pars_fragment = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  gradientmap_pars_fragment = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  lightmap_pars_fragment = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  lights_lambert_fragment = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  lights_lambert_pars_fragment = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  lights_pars_begin = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  envmap_physical_pars_fragment = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,
  lights_toon_fragment = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  lights_toon_pars_fragment = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  lights_phong_fragment = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  lights_phong_pars_fragment = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  lights_physical_fragment = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
  lights_physical_pars_fragment = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  lights_fragment_begin = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  lights_fragment_maps = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  lights_fragment_end = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  logdepthbuf_fragment = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  logdepthbuf_pars_fragment = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  logdepthbuf_pars_vertex = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  logdepthbuf_vertex = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
  map_fragment = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  map_pars_fragment = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  map_particle_fragment = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  map_particle_pars_fragment = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  metalnessmap_fragment = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  metalnessmap_pars_fragment = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  morphinstance_vertex = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
  morphcolor_vertex = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  morphnormal_vertex = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  morphtarget_pars_vertex = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,
  morphtarget_vertex = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  normal_fragment_begin = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  normal_fragment_maps = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  normal_pars_fragment = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  normal_pars_vertex = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  normal_vertex = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  normalmap_pars_fragment = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  clearcoat_normal_fragment_begin = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  clearcoat_normal_fragment_maps = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  clearcoat_pars_fragment = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  iridescence_pars_fragment = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  opaque_fragment = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  packing = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
  premultiplied_alpha_fragment = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  project_vertex = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  dithering_fragment = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  dithering_pars_fragment = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  roughnessmap_fragment = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  roughnessmap_pars_fragment = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  shadowmap_pars_fragment = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,
  shadowmap_pars_vertex = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  shadowmap_vertex = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  shadowmask_pars_fragment = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  skinbase_vertex = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  skinning_pars_vertex = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  skinning_vertex = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  skinnormal_vertex = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  specularmap_fragment = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  specularmap_pars_fragment = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  tonemapping_fragment = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  tonemapping_pars_fragment = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  transmission_fragment = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  transmission_pars_fragment = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  uv_pars_fragment = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  uv_pars_vertex = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  uv_vertex = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  worldpos_vertex = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const vertex$h = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  fragment$h = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  vertex$g = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  fragment$g = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  vertex$f = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  fragment$f = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  vertex$e = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  fragment$e = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
  vertex$d = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  fragment$d = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  vertex$c = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  fragment$c = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  vertex$b = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  fragment$b = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  vertex$a = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  fragment$a = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  vertex$9 = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  fragment$9 = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  vertex$8 = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  fragment$8 = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  vertex$7 = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  fragment$7 = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  vertex$6 = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  fragment$6 = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  vertex$5 = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  fragment$5 = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  vertex$4 = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  fragment$4 = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  vertex$3 = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  fragment$3 = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  vertex$2 = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  fragment$2 = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  vertex$1 = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  fragment$1 = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  ShaderChunk = {
    alphahash_fragment,
    alphahash_pars_fragment,
    alphamap_fragment,
    alphamap_pars_fragment,
    alphatest_fragment,
    alphatest_pars_fragment,
    aomap_fragment,
    aomap_pars_fragment,
    batching_pars_vertex,
    batching_vertex,
    begin_vertex,
    beginnormal_vertex,
    bsdfs,
    iridescence_fragment,
    bumpmap_pars_fragment,
    clipping_planes_fragment,
    clipping_planes_pars_fragment,
    clipping_planes_pars_vertex,
    clipping_planes_vertex,
    color_fragment,
    color_pars_fragment,
    color_pars_vertex,
    color_vertex,
    common,
    cube_uv_reflection_fragment,
    defaultnormal_vertex,
    displacementmap_pars_vertex,
    displacementmap_vertex,
    emissivemap_fragment,
    emissivemap_pars_fragment,
    colorspace_fragment,
    colorspace_pars_fragment,
    envmap_fragment,
    envmap_common_pars_fragment,
    envmap_pars_fragment,
    envmap_pars_vertex,
    envmap_physical_pars_fragment,
    envmap_vertex,
    fog_vertex,
    fog_pars_vertex,
    fog_fragment,
    fog_pars_fragment,
    gradientmap_pars_fragment,
    lightmap_pars_fragment,
    lights_lambert_fragment,
    lights_lambert_pars_fragment,
    lights_pars_begin,
    lights_toon_fragment,
    lights_toon_pars_fragment,
    lights_phong_fragment,
    lights_phong_pars_fragment,
    lights_physical_fragment,
    lights_physical_pars_fragment,
    lights_fragment_begin,
    lights_fragment_maps,
    lights_fragment_end,
    logdepthbuf_fragment,
    logdepthbuf_pars_fragment,
    logdepthbuf_pars_vertex,
    logdepthbuf_vertex,
    map_fragment,
    map_pars_fragment,
    map_particle_fragment,
    map_particle_pars_fragment,
    metalnessmap_fragment,
    metalnessmap_pars_fragment,
    morphinstance_vertex,
    morphcolor_vertex,
    morphnormal_vertex,
    morphtarget_pars_vertex,
    morphtarget_vertex,
    normal_fragment_begin,
    normal_fragment_maps,
    normal_pars_fragment,
    normal_pars_vertex,
    normal_vertex,
    normalmap_pars_fragment,
    clearcoat_normal_fragment_begin,
    clearcoat_normal_fragment_maps,
    clearcoat_pars_fragment,
    iridescence_pars_fragment,
    opaque_fragment,
    packing,
    premultiplied_alpha_fragment,
    project_vertex,
    dithering_fragment,
    dithering_pars_fragment,
    roughnessmap_fragment,
    roughnessmap_pars_fragment,
    shadowmap_pars_fragment,
    shadowmap_pars_vertex,
    shadowmap_vertex,
    shadowmask_pars_fragment,
    skinbase_vertex,
    skinning_pars_vertex,
    skinning_vertex,
    skinnormal_vertex,
    specularmap_fragment,
    specularmap_pars_fragment,
    tonemapping_fragment,
    tonemapping_pars_fragment,
    transmission_fragment,
    transmission_pars_fragment,
    uv_pars_fragment,
    uv_pars_vertex,
    uv_vertex,
    worldpos_vertex,
    background_vert: vertex$h,
    background_frag: fragment$h,
    backgroundCube_vert: vertex$g,
    backgroundCube_frag: fragment$g,
    cube_vert: vertex$f,
    cube_frag: fragment$f,
    depth_vert: vertex$e,
    depth_frag: fragment$e,
    distanceRGBA_vert: vertex$d,
    distanceRGBA_frag: fragment$d,
    equirect_vert: vertex$c,
    equirect_frag: fragment$c,
    linedashed_vert: vertex$b,
    linedashed_frag: fragment$b,
    meshbasic_vert: vertex$a,
    meshbasic_frag: fragment$a,
    meshlambert_vert: vertex$9,
    meshlambert_frag: fragment$9,
    meshmatcap_vert: vertex$8,
    meshmatcap_frag: fragment$8,
    meshnormal_vert: vertex$7,
    meshnormal_frag: fragment$7,
    meshphong_vert: vertex$6,
    meshphong_frag: fragment$6,
    meshphysical_vert: vertex$5,
    meshphysical_frag: fragment$5,
    meshtoon_vert: vertex$4,
    meshtoon_frag: fragment$4,
    points_vert: vertex$3,
    points_frag: fragment$3,
    shadow_vert: vertex$2,
    shadow_frag: fragment$2,
    sprite_vert: vertex$1,
    sprite_frag: fragment$1,
  },
  UniformsLib = {
    common: {
      diffuse: { value: /* @__PURE__ */ new Color(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: /* @__PURE__ */ new Matrix3() },
      alphaMap: { value: null },
      alphaMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: /* @__PURE__ */ new Matrix3() },
    },
    envmap: {
      envMap: { value: null },
      envMapRotation: { value: /* @__PURE__ */ new Matrix3() },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      // basic, lambert, phong
      ior: { value: 1.5 },
      // physical
      refractionRatio: { value: 0.98 },
      // basic, lambert, phong
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: /* @__PURE__ */ new Matrix3() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: /* @__PURE__ */ new Matrix3() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      normalScale: { value: /* @__PURE__ */ new Vector2(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: /* @__PURE__ */ new Matrix3() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: /* @__PURE__ */ new Matrix3() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: /* @__PURE__ */ new Matrix3() },
    },
    gradientmap: {
      gradientMap: { value: null },
    },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: /* @__PURE__ */ new Color(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: {
          direction: {},
          color: {},
        },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          decay: {},
          distance: {},
        },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: {
          direction: {},
          skyColor: {},
          groundColor: {},
        },
      },
      // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
      rectAreaLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          width: {},
          height: {},
        },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: /* @__PURE__ */ new Color(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      alphaTest: { value: 0 },
      uvTransform: { value: /* @__PURE__ */ new Matrix3() },
    },
    sprite: {
      diffuse: { value: /* @__PURE__ */ new Color(16777215) },
      opacity: { value: 1 },
      center: { value: /* @__PURE__ */ new Vector2(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: /* @__PURE__ */ new Matrix3() },
      alphaMap: { value: null },
      alphaMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      alphaTest: { value: 0 },
    },
  },
  ShaderLib = {
    basic: {
      uniforms: /* @__PURE__ */ mergeUniforms([
        UniformsLib.common,
        UniformsLib.specularmap,
        UniformsLib.envmap,
        UniformsLib.aomap,
        UniformsLib.lightmap,
        UniformsLib.fog,
      ]),
      vertexShader: ShaderChunk.meshbasic_vert,
      fragmentShader: ShaderChunk.meshbasic_frag,
    },
    lambert: {
      uniforms: /* @__PURE__ */ mergeUniforms([
        UniformsLib.common,
        UniformsLib.specularmap,
        UniformsLib.envmap,
        UniformsLib.aomap,
        UniformsLib.lightmap,
        UniformsLib.emissivemap,
        UniformsLib.bumpmap,
        UniformsLib.normalmap,
        UniformsLib.displacementmap,
        UniformsLib.fog,
        UniformsLib.lights,
        {
          emissive: { value: /* @__PURE__ */ new Color(0) },
        },
      ]),
      vertexShader: ShaderChunk.meshlambert_vert,
      fragmentShader: ShaderChunk.meshlambert_frag,
    },
    phong: {
      uniforms: /* @__PURE__ */ mergeUniforms([
        UniformsLib.common,
        UniformsLib.specularmap,
        UniformsLib.envmap,
        UniformsLib.aomap,
        UniformsLib.lightmap,
        UniformsLib.emissivemap,
        UniformsLib.bumpmap,
        UniformsLib.normalmap,
        UniformsLib.displacementmap,
        UniformsLib.fog,
        UniformsLib.lights,
        {
          emissive: { value: /* @__PURE__ */ new Color(0) },
          specular: { value: /* @__PURE__ */ new Color(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: ShaderChunk.meshphong_vert,
      fragmentShader: ShaderChunk.meshphong_frag,
    },
    standard: {
      uniforms: /* @__PURE__ */ mergeUniforms([
        UniformsLib.common,
        UniformsLib.envmap,
        UniformsLib.aomap,
        UniformsLib.lightmap,
        UniformsLib.emissivemap,
        UniformsLib.bumpmap,
        UniformsLib.normalmap,
        UniformsLib.displacementmap,
        UniformsLib.roughnessmap,
        UniformsLib.metalnessmap,
        UniformsLib.fog,
        UniformsLib.lights,
        {
          emissive: { value: /* @__PURE__ */ new Color(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: ShaderChunk.meshphysical_vert,
      fragmentShader: ShaderChunk.meshphysical_frag,
    },
    toon: {
      uniforms: /* @__PURE__ */ mergeUniforms([
        UniformsLib.common,
        UniformsLib.aomap,
        UniformsLib.lightmap,
        UniformsLib.emissivemap,
        UniformsLib.bumpmap,
        UniformsLib.normalmap,
        UniformsLib.displacementmap,
        UniformsLib.gradientmap,
        UniformsLib.fog,
        UniformsLib.lights,
        {
          emissive: { value: /* @__PURE__ */ new Color(0) },
        },
      ]),
      vertexShader: ShaderChunk.meshtoon_vert,
      fragmentShader: ShaderChunk.meshtoon_frag,
    },
    matcap: {
      uniforms: /* @__PURE__ */ mergeUniforms([
        UniformsLib.common,
        UniformsLib.bumpmap,
        UniformsLib.normalmap,
        UniformsLib.displacementmap,
        UniformsLib.fog,
        {
          matcap: { value: null },
        },
      ]),
      vertexShader: ShaderChunk.meshmatcap_vert,
      fragmentShader: ShaderChunk.meshmatcap_frag,
    },
    points: {
      uniforms: /* @__PURE__ */ mergeUniforms([
        UniformsLib.points,
        UniformsLib.fog,
      ]),
      vertexShader: ShaderChunk.points_vert,
      fragmentShader: ShaderChunk.points_frag,
    },
    dashed: {
      uniforms: /* @__PURE__ */ mergeUniforms([
        UniformsLib.common,
        UniformsLib.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: ShaderChunk.linedashed_vert,
      fragmentShader: ShaderChunk.linedashed_frag,
    },
    depth: {
      uniforms: /* @__PURE__ */ mergeUniforms([
        UniformsLib.common,
        UniformsLib.displacementmap,
      ]),
      vertexShader: ShaderChunk.depth_vert,
      fragmentShader: ShaderChunk.depth_frag,
    },
    normal: {
      uniforms: /* @__PURE__ */ mergeUniforms([
        UniformsLib.common,
        UniformsLib.bumpmap,
        UniformsLib.normalmap,
        UniformsLib.displacementmap,
        {
          opacity: { value: 1 },
        },
      ]),
      vertexShader: ShaderChunk.meshnormal_vert,
      fragmentShader: ShaderChunk.meshnormal_frag,
    },
    sprite: {
      uniforms: /* @__PURE__ */ mergeUniforms([
        UniformsLib.sprite,
        UniformsLib.fog,
      ]),
      vertexShader: ShaderChunk.sprite_vert,
      fragmentShader: ShaderChunk.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: /* @__PURE__ */ new Matrix3() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: ShaderChunk.background_vert,
      fragmentShader: ShaderChunk.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
        backgroundRotation: { value: /* @__PURE__ */ new Matrix3() },
      },
      vertexShader: ShaderChunk.backgroundCube_vert,
      fragmentShader: ShaderChunk.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: ShaderChunk.cube_vert,
      fragmentShader: ShaderChunk.cube_frag,
    },
    equirect: {
      uniforms: {
        tEquirect: { value: null },
      },
      vertexShader: ShaderChunk.equirect_vert,
      fragmentShader: ShaderChunk.equirect_frag,
    },
    distanceRGBA: {
      uniforms: /* @__PURE__ */ mergeUniforms([
        UniformsLib.common,
        UniformsLib.displacementmap,
        {
          referencePosition: { value: /* @__PURE__ */ new Vector3() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: ShaderChunk.distanceRGBA_vert,
      fragmentShader: ShaderChunk.distanceRGBA_frag,
    },
    shadow: {
      uniforms: /* @__PURE__ */ mergeUniforms([
        UniformsLib.lights,
        UniformsLib.fog,
        {
          color: { value: /* @__PURE__ */ new Color(0) },
          opacity: { value: 1 },
        },
      ]),
      vertexShader: ShaderChunk.shadow_vert,
      fragmentShader: ShaderChunk.shadow_frag,
    },
  };
ShaderLib.physical = {
  uniforms: /* @__PURE__ */ mergeUniforms([
    ShaderLib.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Vector2(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: {
        value: /* @__PURE__ */ new Matrix3(),
      },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Color(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Vector2() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Color(0) },
      specularColor: { value: /* @__PURE__ */ new Color(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      anisotropyVector: { value: /* @__PURE__ */ new Vector2() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Matrix3() },
    },
  ]),
  vertexShader: ShaderChunk.meshphysical_vert,
  fragmentShader: ShaderChunk.meshphysical_frag,
};
const _rgb = { r: 0, b: 0, g: 0 },
  _e1$1 = /* @__PURE__ */ new Euler(),
  _m1$1 = /* @__PURE__ */ new Matrix4();
function WebGLBackground(r, e, n, i, s, a, o) {
  const l = new Color(0);
  let c = a === !0 ? 0 : 1,
    h,
    u,
    d = null,
    f = 0,
    p = null;
  function g(A) {
    let S = A.isScene === !0 ? A.background : null;
    return (
      S && S.isTexture && (S = (A.backgroundBlurriness > 0 ? n : e).get(S)), S
    );
  }
  function v(A) {
    let S = !1;
    const E = g(A);
    E === null ? m(l, c) : E && E.isColor && (m(E, 1), (S = !0));
    const N = r.xr.getEnvironmentBlendMode();
    N === "additive"
      ? i.buffers.color.setClear(0, 0, 0, 1, o)
      : N === "alpha-blend" && i.buffers.color.setClear(0, 0, 0, 0, o),
      (r.autoClear || S) &&
        (i.buffers.depth.setTest(!0),
        i.buffers.depth.setMask(!0),
        i.buffers.color.setMask(!0),
        r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil));
  }
  function _(A, S) {
    const E = g(S);
    E && (E.isCubeTexture || E.mapping === 306)
      ? (u === void 0 &&
          ((u = new Mesh(
            new BoxGeometry(1, 1, 1),
            new ShaderMaterial({
              name: "BackgroundCubeMaterial",
              uniforms: cloneUniforms(ShaderLib.backgroundCube.uniforms),
              vertexShader: ShaderLib.backgroundCube.vertexShader,
              fragmentShader: ShaderLib.backgroundCube.fragmentShader,
              side: 1,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
            })
          )),
          u.geometry.deleteAttribute("normal"),
          u.geometry.deleteAttribute("uv"),
          (u.onBeforeRender = function (N, w, C) {
            this.matrixWorld.copyPosition(C.matrixWorld);
          }),
          Object.defineProperty(u.material, "envMap", {
            get: function () {
              return this.uniforms.envMap.value;
            },
          }),
          s.update(u)),
        _e1$1.copy(S.backgroundRotation),
        (_e1$1.x *= -1),
        (_e1$1.y *= -1),
        (_e1$1.z *= -1),
        E.isCubeTexture &&
          E.isRenderTargetTexture === !1 &&
          ((_e1$1.y *= -1), (_e1$1.z *= -1)),
        (u.material.uniforms.envMap.value = E),
        (u.material.uniforms.flipEnvMap.value =
          E.isCubeTexture && E.isRenderTargetTexture === !1 ? -1 : 1),
        (u.material.uniforms.backgroundBlurriness.value =
          S.backgroundBlurriness),
        (u.material.uniforms.backgroundIntensity.value = S.backgroundIntensity),
        u.material.uniforms.backgroundRotation.value.setFromMatrix4(
          _m1$1.makeRotationFromEuler(_e1$1)
        ),
        (u.material.toneMapped =
          ColorManagement.getTransfer(E.colorSpace) !== SRGBTransfer),
        (d !== E || f !== E.version || p !== r.toneMapping) &&
          ((u.material.needsUpdate = !0),
          (d = E),
          (f = E.version),
          (p = r.toneMapping)),
        u.layers.enableAll(),
        A.unshift(u, u.geometry, u.material, 0, 0, null))
      : E &&
        E.isTexture &&
        (h === void 0 &&
          ((h = new Mesh(
            new PlaneGeometry(2, 2),
            new ShaderMaterial({
              name: "BackgroundMaterial",
              uniforms: cloneUniforms(ShaderLib.background.uniforms),
              vertexShader: ShaderLib.background.vertexShader,
              fragmentShader: ShaderLib.background.fragmentShader,
              side: 0,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
            })
          )),
          h.geometry.deleteAttribute("normal"),
          Object.defineProperty(h.material, "map", {
            get: function () {
              return this.uniforms.t2D.value;
            },
          }),
          s.update(h)),
        (h.material.uniforms.t2D.value = E),
        (h.material.uniforms.backgroundIntensity.value = S.backgroundIntensity),
        (h.material.toneMapped =
          ColorManagement.getTransfer(E.colorSpace) !== SRGBTransfer),
        E.matrixAutoUpdate === !0 && E.updateMatrix(),
        h.material.uniforms.uvTransform.value.copy(E.matrix),
        (d !== E || f !== E.version || p !== r.toneMapping) &&
          ((h.material.needsUpdate = !0),
          (d = E),
          (f = E.version),
          (p = r.toneMapping)),
        h.layers.enableAll(),
        A.unshift(h, h.geometry, h.material, 0, 0, null));
  }
  function m(A, S) {
    A.getRGB(_rgb, getUnlitUniformColorSpace(r)),
      i.buffers.color.setClear(_rgb.r, _rgb.g, _rgb.b, S, o);
  }
  return {
    getClearColor: function () {
      return l;
    },
    setClearColor: function (A, S = 1) {
      l.set(A), (c = S), m(l, c);
    },
    getClearAlpha: function () {
      return c;
    },
    setClearAlpha: function (A) {
      (c = A), m(l, c);
    },
    render: v,
    addToRenderList: _,
  };
}
function WebGLBindingStates(r, e) {
  const n = r.getParameter(r.MAX_VERTEX_ATTRIBS),
    i = {},
    s = f(null);
  let a = s,
    o = !1;
  function l(M, P, z, O, G) {
    let X = !1;
    const k = d(O, z, P);
    a !== k && ((a = k), h(a.object)),
      (X = p(M, O, z, G)),
      X && g(M, O, z, G),
      G !== null && e.update(G, r.ELEMENT_ARRAY_BUFFER),
      (X || o) &&
        ((o = !1),
        E(M, P, z, O),
        G !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, e.get(G).buffer));
  }
  function c() {
    return r.createVertexArray();
  }
  function h(M) {
    return r.bindVertexArray(M);
  }
  function u(M) {
    return r.deleteVertexArray(M);
  }
  function d(M, P, z) {
    const O = z.wireframe === !0;
    let G = i[M.id];
    G === void 0 && ((G = {}), (i[M.id] = G));
    let X = G[P.id];
    X === void 0 && ((X = {}), (G[P.id] = X));
    let k = X[O];
    return k === void 0 && ((k = f(c())), (X[O] = k)), k;
  }
  function f(M) {
    const P = [],
      z = [],
      O = [];
    for (let G = 0; G < n; G++) (P[G] = 0), (z[G] = 0), (O[G] = 0);
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: P,
      enabledAttributes: z,
      attributeDivisors: O,
      object: M,
      attributes: {},
      index: null,
    };
  }
  function p(M, P, z, O) {
    const G = a.attributes,
      X = P.attributes;
    let k = 0;
    const K = z.getAttributes();
    for (const H in K)
      if (K[H].location >= 0) {
        const pe = G[H];
        let me = X[H];
        if (
          (me === void 0 &&
            (H === "instanceMatrix" &&
              M.instanceMatrix &&
              (me = M.instanceMatrix),
            H === "instanceColor" && M.instanceColor && (me = M.instanceColor)),
          pe === void 0 || pe.attribute !== me || (me && pe.data !== me.data))
        )
          return !0;
        k++;
      }
    return a.attributesNum !== k || a.index !== O;
  }
  function g(M, P, z, O) {
    const G = {},
      X = P.attributes;
    let k = 0;
    const K = z.getAttributes();
    for (const H in K)
      if (K[H].location >= 0) {
        let pe = X[H];
        pe === void 0 &&
          (H === "instanceMatrix" &&
            M.instanceMatrix &&
            (pe = M.instanceMatrix),
          H === "instanceColor" && M.instanceColor && (pe = M.instanceColor));
        const me = {};
        (me.attribute = pe),
          pe && pe.data && (me.data = pe.data),
          (G[H] = me),
          k++;
      }
    (a.attributes = G), (a.attributesNum = k), (a.index = O);
  }
  function v() {
    const M = a.newAttributes;
    for (let P = 0, z = M.length; P < z; P++) M[P] = 0;
  }
  function _(M) {
    m(M, 0);
  }
  function m(M, P) {
    const z = a.newAttributes,
      O = a.enabledAttributes,
      G = a.attributeDivisors;
    (z[M] = 1),
      O[M] === 0 && (r.enableVertexAttribArray(M), (O[M] = 1)),
      G[M] !== P && (r.vertexAttribDivisor(M, P), (G[M] = P));
  }
  function A() {
    const M = a.newAttributes,
      P = a.enabledAttributes;
    for (let z = 0, O = P.length; z < O; z++)
      P[z] !== M[z] && (r.disableVertexAttribArray(z), (P[z] = 0));
  }
  function S(M, P, z, O, G, X, k) {
    k === !0
      ? r.vertexAttribIPointer(M, P, z, G, X)
      : r.vertexAttribPointer(M, P, z, O, G, X);
  }
  function E(M, P, z, O) {
    v();
    const G = O.attributes,
      X = z.getAttributes(),
      k = P.defaultAttributeValues;
    for (const K in X) {
      const H = X[K];
      if (H.location >= 0) {
        let se = G[K];
        if (
          (se === void 0 &&
            (K === "instanceMatrix" &&
              M.instanceMatrix &&
              (se = M.instanceMatrix),
            K === "instanceColor" && M.instanceColor && (se = M.instanceColor)),
          se !== void 0)
        ) {
          const pe = se.normalized,
            me = se.itemSize,
            Ie = e.get(se);
          if (Ie === void 0) continue;
          const ze = Ie.buffer,
            W = Ie.type,
            J = Ie.bytesPerElement,
            ue = W === r.INT || W === r.UNSIGNED_INT || se.gpuType === 1013;
          if (se.isInterleavedBufferAttribute) {
            const le = se.data,
              be = le.stride,
              Re = se.offset;
            if (le.isInstancedInterleavedBuffer) {
              for (let Le = 0; Le < H.locationSize; Le++)
                m(H.location + Le, le.meshPerAttribute);
              M.isInstancedMesh !== !0 &&
                O._maxInstanceCount === void 0 &&
                (O._maxInstanceCount = le.meshPerAttribute * le.count);
            } else
              for (let Le = 0; Le < H.locationSize; Le++) _(H.location + Le);
            r.bindBuffer(r.ARRAY_BUFFER, ze);
            for (let Le = 0; Le < H.locationSize; Le++)
              S(
                H.location + Le,
                me / H.locationSize,
                W,
                pe,
                be * J,
                (Re + (me / H.locationSize) * Le) * J,
                ue
              );
          } else {
            if (se.isInstancedBufferAttribute) {
              for (let le = 0; le < H.locationSize; le++)
                m(H.location + le, se.meshPerAttribute);
              M.isInstancedMesh !== !0 &&
                O._maxInstanceCount === void 0 &&
                (O._maxInstanceCount = se.meshPerAttribute * se.count);
            } else
              for (let le = 0; le < H.locationSize; le++) _(H.location + le);
            r.bindBuffer(r.ARRAY_BUFFER, ze);
            for (let le = 0; le < H.locationSize; le++)
              S(
                H.location + le,
                me / H.locationSize,
                W,
                pe,
                me * J,
                (me / H.locationSize) * le * J,
                ue
              );
          }
        } else if (k !== void 0) {
          const pe = k[K];
          if (pe !== void 0)
            switch (pe.length) {
              case 2:
                r.vertexAttrib2fv(H.location, pe);
                break;
              case 3:
                r.vertexAttrib3fv(H.location, pe);
                break;
              case 4:
                r.vertexAttrib4fv(H.location, pe);
                break;
              default:
                r.vertexAttrib1fv(H.location, pe);
            }
        }
      }
    }
    A();
  }
  function N() {
    U();
    for (const M in i) {
      const P = i[M];
      for (const z in P) {
        const O = P[z];
        for (const G in O) u(O[G].object), delete O[G];
        delete P[z];
      }
      delete i[M];
    }
  }
  function w(M) {
    if (i[M.id] === void 0) return;
    const P = i[M.id];
    for (const z in P) {
      const O = P[z];
      for (const G in O) u(O[G].object), delete O[G];
      delete P[z];
    }
    delete i[M.id];
  }
  function C(M) {
    for (const P in i) {
      const z = i[P];
      if (z[M.id] === void 0) continue;
      const O = z[M.id];
      for (const G in O) u(O[G].object), delete O[G];
      delete z[M.id];
    }
  }
  function U() {
    T(), (o = !0), a !== s && ((a = s), h(a.object));
  }
  function T() {
    (s.geometry = null), (s.program = null), (s.wireframe = !1);
  }
  return {
    setup: l,
    reset: U,
    resetDefaultState: T,
    dispose: N,
    releaseStatesOfGeometry: w,
    releaseStatesOfProgram: C,
    initAttributes: v,
    enableAttribute: _,
    disableUnusedAttributes: A,
  };
}
function WebGLBufferRenderer(r, e, n) {
  let i;
  function s(h) {
    i = h;
  }
  function a(h, u) {
    r.drawArrays(i, h, u), n.update(u, i, 1);
  }
  function o(h, u, d) {
    d !== 0 && (r.drawArraysInstanced(i, h, u, d), n.update(u, i, d));
  }
  function l(h, u, d) {
    if (d === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, h, 0, u, 0, d);
    let p = 0;
    for (let g = 0; g < d; g++) p += u[g];
    n.update(p, i, 1);
  }
  function c(h, u, d, f) {
    if (d === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null) for (let g = 0; g < h.length; g++) o(h[g], u[g], f[g]);
    else {
      p.multiDrawArraysInstancedWEBGL(i, h, 0, u, 0, f, 0, d);
      let g = 0;
      for (let v = 0; v < d; v++) g += u[v];
      for (let v = 0; v < f.length; v++) n.update(g, i, f[v]);
    }
  }
  (this.setMode = s),
    (this.render = a),
    (this.renderInstances = o),
    (this.renderMultiDraw = l),
    (this.renderMultiDrawInstances = c);
}
function WebGLCapabilities(r, e, n, i) {
  let s;
  function a() {
    if (s !== void 0) return s;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const w = e.get("EXT_texture_filter_anisotropic");
      s = r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else s = 0;
    return s;
  }
  function o(w) {
    return !(
      w !== 1023 &&
      i.convert(w) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)
    );
  }
  function l(w) {
    const C =
      w === 1016 &&
      (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(
      w !== 1009 &&
      i.convert(w) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
      w !== 1015 &&
      !C
    );
  }
  function c(w) {
    if (w === "highp") {
      if (
        r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision >
          0 &&
        r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      w = "mediump";
    }
    return w === "mediump" &&
      r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision >
        0 &&
      r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision >
        0
      ? "mediump"
      : "lowp";
  }
  let h = n.precision !== void 0 ? n.precision : "highp";
  const u = c(h);
  u !== h &&
    (console.warn(
      "THREE.WebGLRenderer:",
      h,
      "not supported, using",
      u,
      "instead."
    ),
    (h = u));
  const d = n.logarithmicDepthBuffer === !0,
    f = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),
    p = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    g = r.getParameter(r.MAX_TEXTURE_SIZE),
    v = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),
    _ = r.getParameter(r.MAX_VERTEX_ATTRIBS),
    m = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),
    A = r.getParameter(r.MAX_VARYING_VECTORS),
    S = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),
    E = p > 0,
    N = r.getParameter(r.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: a,
    getMaxPrecision: c,
    textureFormatReadable: o,
    textureTypeReadable: l,
    precision: h,
    logarithmicDepthBuffer: d,
    maxTextures: f,
    maxVertexTextures: p,
    maxTextureSize: g,
    maxCubemapSize: v,
    maxAttributes: _,
    maxVertexUniforms: m,
    maxVaryings: A,
    maxFragmentUniforms: S,
    vertexTextures: E,
    maxSamples: N,
  };
}
function WebGLClipping(r) {
  const e = this;
  let n = null,
    i = 0,
    s = !1,
    a = !1;
  const o = new Plane$2(),
    l = new Matrix3(),
    c = { value: null, needsUpdate: !1 };
  (this.uniform = c),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (d, f) {
      const p =
        d.length !== 0 ||
        f || // enable state of previous frame - the clipping code has to
        // run another frame in order to reset the state:
        i !== 0 ||
        s;
      return (s = f), (i = d.length), p;
    }),
    (this.beginShadows = function () {
      (a = !0), u(null);
    }),
    (this.endShadows = function () {
      a = !1;
    }),
    (this.setGlobalState = function (d, f) {
      n = u(d, f, 0);
    }),
    (this.setState = function (d, f, p) {
      const g = d.clippingPlanes,
        v = d.clipIntersection,
        _ = d.clipShadows,
        m = r.get(d);
      if (!s || g === null || g.length === 0 || (a && !_)) a ? u(null) : h();
      else {
        const A = a ? 0 : i,
          S = A * 4;
        let E = m.clippingState || null;
        (c.value = E), (E = u(g, f, S, p));
        for (let N = 0; N !== S; ++N) E[N] = n[N];
        (m.clippingState = E),
          (this.numIntersection = v ? this.numPlanes : 0),
          (this.numPlanes += A);
      }
    });
  function h() {
    c.value !== n && ((c.value = n), (c.needsUpdate = i > 0)),
      (e.numPlanes = i),
      (e.numIntersection = 0);
  }
  function u(d, f, p, g) {
    const v = d !== null ? d.length : 0;
    let _ = null;
    if (v !== 0) {
      if (((_ = c.value), g !== !0 || _ === null)) {
        const m = p + v * 4,
          A = f.matrixWorldInverse;
        l.getNormalMatrix(A),
          (_ === null || _.length < m) && (_ = new Float32Array(m));
        for (let S = 0, E = p; S !== v; ++S, E += 4)
          o.copy(d[S]).applyMatrix4(A, l),
            o.normal.toArray(_, E),
            (_[E + 3] = o.constant);
      }
      (c.value = _), (c.needsUpdate = !0);
    }
    return (e.numPlanes = v), (e.numIntersection = 0), _;
  }
}
function WebGLCubeMaps(r) {
  let e = /* @__PURE__ */ new WeakMap();
  function n(o, l) {
    return l === 303 ? (o.mapping = 301) : l === 304 && (o.mapping = 302), o;
  }
  function i(o) {
    if (o && o.isTexture) {
      const l = o.mapping;
      if (l === 303 || l === 304)
        if (e.has(o)) {
          const c = e.get(o).texture;
          return n(c, o.mapping);
        } else {
          const c = o.image;
          if (c && c.height > 0) {
            const h = new WebGLCubeRenderTarget(c.height);
            return (
              h.fromEquirectangularTexture(r, o),
              e.set(o, h),
              o.addEventListener("dispose", s),
              n(h.texture, o.mapping)
            );
          } else return null;
        }
    }
    return o;
  }
  function s(o) {
    const l = o.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: i,
    dispose: a,
  };
}
class OrthographicCamera extends Camera {
  constructor(e = -1, n = 1, i = 1, s = -1, a = 0.1, o = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = n),
      (this.top = i),
      (this.bottom = s),
      (this.near = a),
      (this.far = o),
      this.updateProjectionMatrix();
  }
  copy(e, n) {
    return (
      super.copy(e, n),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, n, i, s, a, o) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = n),
      (this.view.offsetX = i),
      (this.view.offsetY = s),
      (this.view.width = a),
      (this.view.height = o),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      n = (this.top - this.bottom) / (2 * this.zoom),
      i = (this.right + this.left) / 2,
      s = (this.top + this.bottom) / 2;
    let a = i - e,
      o = i + e,
      l = s + n,
      c = s - n;
    if (this.view !== null && this.view.enabled) {
      const h = (this.right - this.left) / this.view.fullWidth / this.zoom,
        u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (a += h * this.view.offsetX),
        (o = a + h * this.view.width),
        (l -= u * this.view.offsetY),
        (c = l - u * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(
      a,
      o,
      l,
      c,
      this.near,
      this.far,
      this.coordinateSystem
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const n = super.toJSON(e);
    return (
      (n.object.zoom = this.zoom),
      (n.object.left = this.left),
      (n.object.right = this.right),
      (n.object.top = this.top),
      (n.object.bottom = this.bottom),
      (n.object.near = this.near),
      (n.object.far = this.far),
      this.view !== null && (n.object.view = Object.assign({}, this.view)),
      n
    );
  }
}
const LOD_MIN = 4,
  EXTRA_LOD_SIGMA = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  MAX_SAMPLES = 20,
  _flatCamera = /* @__PURE__ */ new OrthographicCamera(),
  _clearColor = /* @__PURE__ */ new Color();
let _oldTarget = null,
  _oldActiveCubeFace = 0,
  _oldActiveMipmapLevel = 0,
  _oldXrEnabled = !1;
const PHI = (1 + Math.sqrt(5)) / 2,
  INV_PHI = 1 / PHI,
  _axisDirections = [
    /* @__PURE__ */ new Vector3(-PHI, INV_PHI, 0),
    /* @__PURE__ */ new Vector3(PHI, INV_PHI, 0),
    /* @__PURE__ */ new Vector3(-INV_PHI, 0, PHI),
    /* @__PURE__ */ new Vector3(INV_PHI, 0, PHI),
    /* @__PURE__ */ new Vector3(0, PHI, -INV_PHI),
    /* @__PURE__ */ new Vector3(0, PHI, INV_PHI),
    /* @__PURE__ */ new Vector3(-1, 1, -1),
    /* @__PURE__ */ new Vector3(1, 1, -1),
    /* @__PURE__ */ new Vector3(-1, 1, 1),
    /* @__PURE__ */ new Vector3(1, 1, 1),
  ];
class PMREMGenerator {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, n = 0, i = 0.1, s = 100) {
    (_oldTarget = this._renderer.getRenderTarget()),
      (_oldActiveCubeFace = this._renderer.getActiveCubeFace()),
      (_oldActiveMipmapLevel = this._renderer.getActiveMipmapLevel()),
      (_oldXrEnabled = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1),
      this._setSize(256);
    const a = this._allocateTargets();
    return (
      (a.depthBuffer = !0),
      this._sceneToCubeUV(e, i, s, a),
      n > 0 && this._blur(a, 0, 0, n),
      this._applyPMREM(a),
      this._cleanup(a),
      a
    );
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported equirectangular image size is 64 x 32.
   */
  fromEquirectangular(e, n = null) {
    return this._fromTexture(e, n);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported cube size is 16 x 16.
   */
  fromCubemap(e, n = null) {
    return this._fromTexture(e, n);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = _getCubemapMaterial()),
      this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = _getEquirectMaterial()),
      this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(
      _oldTarget,
      _oldActiveCubeFace,
      _oldActiveMipmapLevel
    ),
      (this._renderer.xr.enabled = _oldXrEnabled),
      (e.scissorTest = !1),
      _setViewport(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, n) {
    e.mapping === 301 || e.mapping === 302
      ? this._setSize(
          e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (_oldTarget = this._renderer.getRenderTarget()),
      (_oldActiveCubeFace = this._renderer.getActiveCubeFace()),
      (_oldActiveMipmapLevel = this._renderer.getActiveMipmapLevel()),
      (_oldXrEnabled = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1);
    const i = n || this._allocateTargets();
    return (
      this._textureToCubeUV(e, i), this._applyPMREM(i), this._cleanup(i), i
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      n = 4 * this._cubeSize,
      i = {
        magFilter: 1006,
        minFilter: 1006,
        generateMipmaps: !1,
        type: 1016,
        format: 1023,
        colorSpace: LinearSRGBColorSpace,
        depthBuffer: !1,
      },
      s = _createRenderTarget(e, n, i);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== n
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = _createRenderTarget(e, n, i));
      const { _lodMax: a } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = _createPlanes(a)),
        (this._blurMaterial = _getBlurShader(a, e, n));
    }
    return s;
  }
  _compileMaterial(e) {
    const n = new Mesh(this._lodPlanes[0], e);
    this._renderer.compile(n, _flatCamera);
  }
  _sceneToCubeUV(e, n, i, s) {
    const l = new PerspectiveCamera(90, 1, n, i),
      c = [1, -1, 1, 1, 1, 1],
      h = [1, 1, 1, -1, -1, -1],
      u = this._renderer,
      d = u.autoClear,
      f = u.toneMapping;
    u.getClearColor(_clearColor), (u.toneMapping = 0), (u.autoClear = !1);
    const p = new MeshBasicMaterial({
        name: "PMREM.Background",
        side: 1,
        depthWrite: !1,
        depthTest: !1,
      }),
      g = new Mesh(new BoxGeometry(), p);
    let v = !1;
    const _ = e.background;
    _
      ? _.isColor && (p.color.copy(_), (e.background = null), (v = !0))
      : (p.color.copy(_clearColor), (v = !0));
    for (let m = 0; m < 6; m++) {
      const A = m % 3;
      A === 0
        ? (l.up.set(0, c[m], 0), l.lookAt(h[m], 0, 0))
        : A === 1
        ? (l.up.set(0, 0, c[m]), l.lookAt(0, h[m], 0))
        : (l.up.set(0, c[m], 0), l.lookAt(0, 0, h[m]));
      const S = this._cubeSize;
      _setViewport(s, A * S, m > 2 ? S : 0, S, S),
        u.setRenderTarget(s),
        v && u.render(g, l),
        u.render(e, l);
    }
    g.geometry.dispose(),
      g.material.dispose(),
      (u.toneMapping = f),
      (u.autoClear = d),
      (e.background = _);
  }
  _textureToCubeUV(e, n) {
    const i = this._renderer,
      s = e.mapping === 301 || e.mapping === 302;
    s
      ? (this._cubemapMaterial === null &&
          (this._cubemapMaterial = _getCubemapMaterial()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null &&
        (this._equirectMaterial = _getEquirectMaterial());
    const a = s ? this._cubemapMaterial : this._equirectMaterial,
      o = new Mesh(this._lodPlanes[0], a),
      l = a.uniforms;
    l.envMap.value = e;
    const c = this._cubeSize;
    _setViewport(n, 0, 0, 3 * c, 2 * c),
      i.setRenderTarget(n),
      i.render(o, _flatCamera);
  }
  _applyPMREM(e) {
    const n = this._renderer,
      i = n.autoClear;
    n.autoClear = !1;
    const s = this._lodPlanes.length;
    for (let a = 1; a < s; a++) {
      const o = Math.sqrt(
          this._sigmas[a] * this._sigmas[a] -
            this._sigmas[a - 1] * this._sigmas[a - 1]
        ),
        l = _axisDirections[(s - a - 1) % _axisDirections.length];
      this._blur(e, a - 1, a, o, l);
    }
    n.autoClear = i;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, n, i, s, a) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(e, o, n, i, s, "latitudinal", a),
      this._halfBlur(o, e, i, i, s, "longitudinal", a);
  }
  _halfBlur(e, n, i, s, a, o, l) {
    const c = this._renderer,
      h = this._blurMaterial;
    o !== "latitudinal" &&
      o !== "longitudinal" &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    const u = 3,
      d = new Mesh(this._lodPlanes[s], h),
      f = h.uniforms,
      p = this._sizeLods[i] - 1,
      g = isFinite(a)
        ? Math.PI / (2 * p)
        : (2 * Math.PI) / (2 * MAX_SAMPLES - 1),
      v = a / g,
      _ = isFinite(a) ? 1 + Math.floor(u * v) : MAX_SAMPLES;
    _ > MAX_SAMPLES &&
      console.warn(
        `sigmaRadians, ${a}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${MAX_SAMPLES}`
      );
    const m = [];
    let A = 0;
    for (let C = 0; C < MAX_SAMPLES; ++C) {
      const U = C / v,
        T = Math.exp((-U * U) / 2);
      m.push(T), C === 0 ? (A += T) : C < _ && (A += 2 * T);
    }
    for (let C = 0; C < m.length; C++) m[C] = m[C] / A;
    (f.envMap.value = e.texture),
      (f.samples.value = _),
      (f.weights.value = m),
      (f.latitudinal.value = o === "latitudinal"),
      l && (f.poleAxis.value = l);
    const { _lodMax: S } = this;
    (f.dTheta.value = g), (f.mipInt.value = S - i);
    const E = this._sizeLods[s],
      N = 3 * E * (s > S - LOD_MIN ? s - S + LOD_MIN : 0),
      w = 4 * (this._cubeSize - E);
    _setViewport(n, N, w, 3 * E, 2 * E),
      c.setRenderTarget(n),
      c.render(d, _flatCamera);
  }
}
function _createPlanes(r) {
  const e = [],
    n = [],
    i = [];
  let s = r;
  const a = r - LOD_MIN + 1 + EXTRA_LOD_SIGMA.length;
  for (let o = 0; o < a; o++) {
    const l = Math.pow(2, s);
    n.push(l);
    let c = 1 / l;
    o > r - LOD_MIN
      ? (c = EXTRA_LOD_SIGMA[o - r + LOD_MIN - 1])
      : o === 0 && (c = 0),
      i.push(c);
    const h = 1 / (l - 2),
      u = -h,
      d = 1 + h,
      f = [u, u, d, u, d, d, u, u, d, d, u, d],
      p = 6,
      g = 6,
      v = 3,
      _ = 2,
      m = 1,
      A = new Float32Array(v * g * p),
      S = new Float32Array(_ * g * p),
      E = new Float32Array(m * g * p);
    for (let w = 0; w < p; w++) {
      const C = ((w % 3) * 2) / 3 - 1,
        U = w > 2 ? 0 : -1,
        T = [
          C,
          U,
          0,
          C + 2 / 3,
          U,
          0,
          C + 2 / 3,
          U + 1,
          0,
          C,
          U,
          0,
          C + 2 / 3,
          U + 1,
          0,
          C,
          U + 1,
          0,
        ];
      A.set(T, v * g * w), S.set(f, _ * g * w);
      const M = [w, w, w, w, w, w];
      E.set(M, m * g * w);
    }
    const N = new BufferGeometry();
    N.setAttribute("position", new BufferAttribute(A, v)),
      N.setAttribute("uv", new BufferAttribute(S, _)),
      N.setAttribute("faceIndex", new BufferAttribute(E, m)),
      e.push(N),
      s > LOD_MIN && s--;
  }
  return { lodPlanes: e, sizeLods: n, sigmas: i };
}
function _createRenderTarget(r, e, n) {
  const i = new WebGLRenderTarget(r, e, n);
  return (
    (i.texture.mapping = 306),
    (i.texture.name = "PMREM.cubeUv"),
    (i.scissorTest = !0),
    i
  );
}
function _setViewport(r, e, n, i, s) {
  r.viewport.set(e, n, i, s), r.scissor.set(e, n, i, s);
}
function _getBlurShader(r, e, n) {
  const i = new Float32Array(MAX_SAMPLES),
    s = new Vector3(0, 1, 0);
  return new ShaderMaterial({
    name: "SphericalGaussianBlur",
    defines: {
      n: MAX_SAMPLES,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / n,
      CUBEUV_MAX_MIP: `${r}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: i },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: s },
    },
    vertexShader: _getCommonVertexShader(),
    fragmentShader:
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function _getEquirectMaterial() {
  return new ShaderMaterial({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null },
    },
    vertexShader: _getCommonVertexShader(),
    fragmentShader:
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function _getCubemapMaterial() {
  return new ShaderMaterial({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
    },
    vertexShader: _getCommonVertexShader(),
    fragmentShader:
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function _getCommonVertexShader() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function WebGLCubeUVMaps(r) {
  let e = /* @__PURE__ */ new WeakMap(),
    n = null;
  function i(l) {
    if (l && l.isTexture) {
      const c = l.mapping,
        h = c === 303 || c === 304,
        u = c === 301 || c === 302;
      if (h || u) {
        let d = e.get(l);
        const f = d !== void 0 ? d.texture.pmremVersion : 0;
        if (l.isRenderTargetTexture && l.pmremVersion !== f)
          return (
            n === null && (n = new PMREMGenerator(r)),
            (d = h ? n.fromEquirectangular(l, d) : n.fromCubemap(l, d)),
            (d.texture.pmremVersion = l.pmremVersion),
            e.set(l, d),
            d.texture
          );
        if (d !== void 0) return d.texture;
        {
          const p = l.image;
          return (h && p && p.height > 0) || (u && p && s(p))
            ? (n === null && (n = new PMREMGenerator(r)),
              (d = h ? n.fromEquirectangular(l) : n.fromCubemap(l)),
              (d.texture.pmremVersion = l.pmremVersion),
              e.set(l, d),
              l.addEventListener("dispose", a),
              d.texture)
            : null;
        }
      }
    }
    return l;
  }
  function s(l) {
    let c = 0;
    const h = 6;
    for (let u = 0; u < h; u++) l[u] !== void 0 && c++;
    return c === h;
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener("dispose", a);
    const h = e.get(c);
    h !== void 0 && (e.delete(c), h.dispose());
  }
  function o() {
    (e = /* @__PURE__ */ new WeakMap()),
      n !== null && (n.dispose(), (n = null));
  }
  return {
    get: i,
    dispose: o,
  };
}
function WebGLExtensions(r) {
  const e = {};
  function n(i) {
    if (e[i] !== void 0) return e[i];
    let s;
    switch (i) {
      case "WEBGL_depth_texture":
        s =
          r.getExtension("WEBGL_depth_texture") ||
          r.getExtension("MOZ_WEBGL_depth_texture") ||
          r.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        s =
          r.getExtension("EXT_texture_filter_anisotropic") ||
          r.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        s =
          r.getExtension("WEBGL_compressed_texture_s3tc") ||
          r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        s =
          r.getExtension("WEBGL_compressed_texture_pvrtc") ||
          r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        s = r.getExtension(i);
    }
    return (e[i] = s), s;
  }
  return {
    has: function (i) {
      return n(i) !== null;
    },
    init: function () {
      n("EXT_color_buffer_float"),
        n("WEBGL_clip_cull_distance"),
        n("OES_texture_float_linear"),
        n("EXT_color_buffer_half_float"),
        n("WEBGL_multisampled_render_to_texture"),
        n("WEBGL_render_shared_exponent");
    },
    get: function (i) {
      const s = n(i);
      return (
        s === null &&
          warnOnce("THREE.WebGLRenderer: " + i + " extension not supported."),
        s
      );
    },
  };
}
function WebGLGeometries(r, e, n, i) {
  const s = {},
    a = /* @__PURE__ */ new WeakMap();
  function o(d) {
    const f = d.target;
    f.index !== null && e.remove(f.index);
    for (const g in f.attributes) e.remove(f.attributes[g]);
    for (const g in f.morphAttributes) {
      const v = f.morphAttributes[g];
      for (let _ = 0, m = v.length; _ < m; _++) e.remove(v[_]);
    }
    f.removeEventListener("dispose", o), delete s[f.id];
    const p = a.get(f);
    p && (e.remove(p), a.delete(f)),
      i.releaseStatesOfGeometry(f),
      f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount,
      n.memory.geometries--;
  }
  function l(d, f) {
    return (
      s[f.id] === !0 ||
        (f.addEventListener("dispose", o),
        (s[f.id] = !0),
        n.memory.geometries++),
      f
    );
  }
  function c(d) {
    const f = d.attributes;
    for (const g in f) e.update(f[g], r.ARRAY_BUFFER);
    const p = d.morphAttributes;
    for (const g in p) {
      const v = p[g];
      for (let _ = 0, m = v.length; _ < m; _++) e.update(v[_], r.ARRAY_BUFFER);
    }
  }
  function h(d) {
    const f = [],
      p = d.index,
      g = d.attributes.position;
    let v = 0;
    if (p !== null) {
      const A = p.array;
      v = p.version;
      for (let S = 0, E = A.length; S < E; S += 3) {
        const N = A[S + 0],
          w = A[S + 1],
          C = A[S + 2];
        f.push(N, w, w, C, C, N);
      }
    } else if (g !== void 0) {
      const A = g.array;
      v = g.version;
      for (let S = 0, E = A.length / 3 - 1; S < E; S += 3) {
        const N = S + 0,
          w = S + 1,
          C = S + 2;
        f.push(N, w, w, C, C, N);
      }
    } else return;
    const _ = new (
      arrayNeedsUint32(f) ? Uint32BufferAttribute : Uint16BufferAttribute
    )(f, 1);
    _.version = v;
    const m = a.get(d);
    m && e.remove(m), a.set(d, _);
  }
  function u(d) {
    const f = a.get(d);
    if (f) {
      const p = d.index;
      p !== null && f.version < p.version && h(d);
    } else h(d);
    return a.get(d);
  }
  return {
    get: l,
    update: c,
    getWireframeAttribute: u,
  };
}
function WebGLIndexedBufferRenderer(r, e, n) {
  let i;
  function s(f) {
    i = f;
  }
  let a, o;
  function l(f) {
    (a = f.type), (o = f.bytesPerElement);
  }
  function c(f, p) {
    r.drawElements(i, p, a, f * o), n.update(p, i, 1);
  }
  function h(f, p, g) {
    g !== 0 && (r.drawElementsInstanced(i, p, a, f * o, g), n.update(p, i, g));
  }
  function u(f, p, g) {
    if (g === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i, p, 0, a, f, 0, g);
    let _ = 0;
    for (let m = 0; m < g; m++) _ += p[m];
    n.update(_, i, 1);
  }
  function d(f, p, g, v) {
    if (g === 0) return;
    const _ = e.get("WEBGL_multi_draw");
    if (_ === null) for (let m = 0; m < f.length; m++) h(f[m] / o, p[m], v[m]);
    else {
      _.multiDrawElementsInstancedWEBGL(i, p, 0, a, f, 0, v, 0, g);
      let m = 0;
      for (let A = 0; A < g; A++) m += p[A];
      for (let A = 0; A < v.length; A++) n.update(m, i, v[A]);
    }
  }
  (this.setMode = s),
    (this.setIndex = l),
    (this.render = c),
    (this.renderInstances = h),
    (this.renderMultiDraw = u),
    (this.renderMultiDrawInstances = d);
}
function WebGLInfo(r) {
  const e = {
      geometries: 0,
      textures: 0,
    },
    n = {
      frame: 0,
      calls: 0,
      triangles: 0,
      points: 0,
      lines: 0,
    };
  function i(a, o, l) {
    switch ((n.calls++, o)) {
      case r.TRIANGLES:
        n.triangles += l * (a / 3);
        break;
      case r.LINES:
        n.lines += l * (a / 2);
        break;
      case r.LINE_STRIP:
        n.lines += l * (a - 1);
        break;
      case r.LINE_LOOP:
        n.lines += l * a;
        break;
      case r.POINTS:
        n.points += l * a;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function s() {
    (n.calls = 0), (n.triangles = 0), (n.points = 0), (n.lines = 0);
  }
  return {
    memory: e,
    render: n,
    programs: null,
    autoReset: !0,
    reset: s,
    update: i,
  };
}
function WebGLMorphtargets(r, e, n) {
  const i = /* @__PURE__ */ new WeakMap(),
    s = new Vector4();
  function a(o, l, c) {
    const h = o.morphTargetInfluences,
      u =
        l.morphAttributes.position ||
        l.morphAttributes.normal ||
        l.morphAttributes.color,
      d = u !== void 0 ? u.length : 0;
    let f = i.get(l);
    if (f === void 0 || f.count !== d) {
      let T = function () {
        C.dispose(), i.delete(l), l.removeEventListener("dispose", T);
      };
      f !== void 0 && f.texture.dispose();
      const p = l.morphAttributes.position !== void 0,
        g = l.morphAttributes.normal !== void 0,
        v = l.morphAttributes.color !== void 0,
        _ = l.morphAttributes.position || [],
        m = l.morphAttributes.normal || [],
        A = l.morphAttributes.color || [];
      let S = 0;
      p === !0 && (S = 1), g === !0 && (S = 2), v === !0 && (S = 3);
      let E = l.attributes.position.count * S,
        N = 1;
      E > e.maxTextureSize &&
        ((N = Math.ceil(E / e.maxTextureSize)), (E = e.maxTextureSize));
      const w = new Float32Array(E * N * 4 * d),
        C = new DataArrayTexture(w, E, N, d);
      (C.type = 1015), (C.needsUpdate = !0);
      const U = S * 4;
      for (let M = 0; M < d; M++) {
        const P = _[M],
          z = m[M],
          O = A[M],
          G = E * N * 4 * M;
        for (let X = 0; X < P.count; X++) {
          const k = X * U;
          p === !0 &&
            (s.fromBufferAttribute(P, X),
            (w[G + k + 0] = s.x),
            (w[G + k + 1] = s.y),
            (w[G + k + 2] = s.z),
            (w[G + k + 3] = 0)),
            g === !0 &&
              (s.fromBufferAttribute(z, X),
              (w[G + k + 4] = s.x),
              (w[G + k + 5] = s.y),
              (w[G + k + 6] = s.z),
              (w[G + k + 7] = 0)),
            v === !0 &&
              (s.fromBufferAttribute(O, X),
              (w[G + k + 8] = s.x),
              (w[G + k + 9] = s.y),
              (w[G + k + 10] = s.z),
              (w[G + k + 11] = O.itemSize === 4 ? s.w : 1));
        }
      }
      (f = {
        count: d,
        texture: C,
        size: new Vector2(E, N),
      }),
        i.set(l, f),
        l.addEventListener("dispose", T);
    }
    if (o.isInstancedMesh === !0 && o.morphTexture !== null)
      c.getUniforms().setValue(r, "morphTexture", o.morphTexture, n);
    else {
      let p = 0;
      for (let v = 0; v < h.length; v++) p += h[v];
      const g = l.morphTargetsRelative ? 1 : 1 - p;
      c.getUniforms().setValue(r, "morphTargetBaseInfluence", g),
        c.getUniforms().setValue(r, "morphTargetInfluences", h);
    }
    c.getUniforms().setValue(r, "morphTargetsTexture", f.texture, n),
      c.getUniforms().setValue(r, "morphTargetsTextureSize", f.size);
  }
  return {
    update: a,
  };
}
function WebGLObjects(r, e, n, i) {
  let s = /* @__PURE__ */ new WeakMap();
  function a(c) {
    const h = i.render.frame,
      u = c.geometry,
      d = e.get(c, u);
    if (
      (s.get(d) !== h && (e.update(d), s.set(d, h)),
      c.isInstancedMesh &&
        (c.hasEventListener("dispose", l) === !1 &&
          c.addEventListener("dispose", l),
        s.get(c) !== h &&
          (n.update(c.instanceMatrix, r.ARRAY_BUFFER),
          c.instanceColor !== null && n.update(c.instanceColor, r.ARRAY_BUFFER),
          s.set(c, h))),
      c.isSkinnedMesh)
    ) {
      const f = c.skeleton;
      s.get(f) !== h && (f.update(), s.set(f, h));
    }
    return d;
  }
  function o() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function l(c) {
    const h = c.target;
    h.removeEventListener("dispose", l),
      n.remove(h.instanceMatrix),
      h.instanceColor !== null && n.remove(h.instanceColor);
  }
  return {
    update: a,
    dispose: o,
  };
}
class DepthTexture extends Texture {
  constructor(e, n, i, s, a, o, l, c, h, u = 1026) {
    if (u !== 1026 && u !== 1027)
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    i === void 0 && u === 1026 && (i = 1014),
      i === void 0 && u === 1027 && (i = 1020),
      super(null, s, a, o, l, c, u, i, h),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: n }),
      (this.magFilter = l !== void 0 ? l : 1003),
      (this.minFilter = c !== void 0 ? c : 1003),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null);
  }
  copy(e) {
    return super.copy(e), (this.compareFunction = e.compareFunction), this;
  }
  toJSON(e) {
    const n = super.toJSON(e);
    return (
      this.compareFunction !== null &&
        (n.compareFunction = this.compareFunction),
      n
    );
  }
}
const emptyTexture = /* @__PURE__ */ new Texture(),
  emptyShadowTexture = /* @__PURE__ */ new DepthTexture(1, 1),
  emptyArrayTexture = /* @__PURE__ */ new DataArrayTexture(),
  empty3dTexture = /* @__PURE__ */ new Data3DTexture(),
  emptyCubeTexture = /* @__PURE__ */ new CubeTexture(),
  arrayCacheF32 = [],
  arrayCacheI32 = [],
  mat4array = new Float32Array(16),
  mat3array = new Float32Array(9),
  mat2array = new Float32Array(4);
function flatten(r, e, n) {
  const i = r[0];
  if (i <= 0 || i > 0) return r;
  const s = e * n;
  let a = arrayCacheF32[s];
  if (
    (a === void 0 && ((a = new Float32Array(s)), (arrayCacheF32[s] = a)),
    e !== 0)
  ) {
    i.toArray(a, 0);
    for (let o = 1, l = 0; o !== e; ++o) (l += n), r[o].toArray(a, l);
  }
  return a;
}
function arraysEqual(r, e) {
  if (r.length !== e.length) return !1;
  for (let n = 0, i = r.length; n < i; n++) if (r[n] !== e[n]) return !1;
  return !0;
}
function copyArray(r, e) {
  for (let n = 0, i = e.length; n < i; n++) r[n] = e[n];
}
function allocTexUnits(r, e) {
  let n = arrayCacheI32[e];
  n === void 0 && ((n = new Int32Array(e)), (arrayCacheI32[e] = n));
  for (let i = 0; i !== e; ++i) n[i] = r.allocateTextureUnit();
  return n;
}
function setValueV1f(r, e) {
  const n = this.cache;
  n[0] !== e && (r.uniform1f(this.addr, e), (n[0] = e));
}
function setValueV2f(r, e) {
  const n = this.cache;
  if (e.x !== void 0)
    (n[0] !== e.x || n[1] !== e.y) &&
      (r.uniform2f(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
  else {
    if (arraysEqual(n, e)) return;
    r.uniform2fv(this.addr, e), copyArray(n, e);
  }
}
function setValueV3f(r, e) {
  const n = this.cache;
  if (e.x !== void 0)
    (n[0] !== e.x || n[1] !== e.y || n[2] !== e.z) &&
      (r.uniform3f(this.addr, e.x, e.y, e.z),
      (n[0] = e.x),
      (n[1] = e.y),
      (n[2] = e.z));
  else if (e.r !== void 0)
    (n[0] !== e.r || n[1] !== e.g || n[2] !== e.b) &&
      (r.uniform3f(this.addr, e.r, e.g, e.b),
      (n[0] = e.r),
      (n[1] = e.g),
      (n[2] = e.b));
  else {
    if (arraysEqual(n, e)) return;
    r.uniform3fv(this.addr, e), copyArray(n, e);
  }
}
function setValueV4f(r, e) {
  const n = this.cache;
  if (e.x !== void 0)
    (n[0] !== e.x || n[1] !== e.y || n[2] !== e.z || n[3] !== e.w) &&
      (r.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (n[0] = e.x),
      (n[1] = e.y),
      (n[2] = e.z),
      (n[3] = e.w));
  else {
    if (arraysEqual(n, e)) return;
    r.uniform4fv(this.addr, e), copyArray(n, e);
  }
}
function setValueM2(r, e) {
  const n = this.cache,
    i = e.elements;
  if (i === void 0) {
    if (arraysEqual(n, e)) return;
    r.uniformMatrix2fv(this.addr, !1, e), copyArray(n, e);
  } else {
    if (arraysEqual(n, i)) return;
    mat2array.set(i),
      r.uniformMatrix2fv(this.addr, !1, mat2array),
      copyArray(n, i);
  }
}
function setValueM3(r, e) {
  const n = this.cache,
    i = e.elements;
  if (i === void 0) {
    if (arraysEqual(n, e)) return;
    r.uniformMatrix3fv(this.addr, !1, e), copyArray(n, e);
  } else {
    if (arraysEqual(n, i)) return;
    mat3array.set(i),
      r.uniformMatrix3fv(this.addr, !1, mat3array),
      copyArray(n, i);
  }
}
function setValueM4(r, e) {
  const n = this.cache,
    i = e.elements;
  if (i === void 0) {
    if (arraysEqual(n, e)) return;
    r.uniformMatrix4fv(this.addr, !1, e), copyArray(n, e);
  } else {
    if (arraysEqual(n, i)) return;
    mat4array.set(i),
      r.uniformMatrix4fv(this.addr, !1, mat4array),
      copyArray(n, i);
  }
}
function setValueV1i(r, e) {
  const n = this.cache;
  n[0] !== e && (r.uniform1i(this.addr, e), (n[0] = e));
}
function setValueV2i(r, e) {
  const n = this.cache;
  if (e.x !== void 0)
    (n[0] !== e.x || n[1] !== e.y) &&
      (r.uniform2i(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
  else {
    if (arraysEqual(n, e)) return;
    r.uniform2iv(this.addr, e), copyArray(n, e);
  }
}
function setValueV3i(r, e) {
  const n = this.cache;
  if (e.x !== void 0)
    (n[0] !== e.x || n[1] !== e.y || n[2] !== e.z) &&
      (r.uniform3i(this.addr, e.x, e.y, e.z),
      (n[0] = e.x),
      (n[1] = e.y),
      (n[2] = e.z));
  else {
    if (arraysEqual(n, e)) return;
    r.uniform3iv(this.addr, e), copyArray(n, e);
  }
}
function setValueV4i(r, e) {
  const n = this.cache;
  if (e.x !== void 0)
    (n[0] !== e.x || n[1] !== e.y || n[2] !== e.z || n[3] !== e.w) &&
      (r.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (n[0] = e.x),
      (n[1] = e.y),
      (n[2] = e.z),
      (n[3] = e.w));
  else {
    if (arraysEqual(n, e)) return;
    r.uniform4iv(this.addr, e), copyArray(n, e);
  }
}
function setValueV1ui(r, e) {
  const n = this.cache;
  n[0] !== e && (r.uniform1ui(this.addr, e), (n[0] = e));
}
function setValueV2ui(r, e) {
  const n = this.cache;
  if (e.x !== void 0)
    (n[0] !== e.x || n[1] !== e.y) &&
      (r.uniform2ui(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
  else {
    if (arraysEqual(n, e)) return;
    r.uniform2uiv(this.addr, e), copyArray(n, e);
  }
}
function setValueV3ui(r, e) {
  const n = this.cache;
  if (e.x !== void 0)
    (n[0] !== e.x || n[1] !== e.y || n[2] !== e.z) &&
      (r.uniform3ui(this.addr, e.x, e.y, e.z),
      (n[0] = e.x),
      (n[1] = e.y),
      (n[2] = e.z));
  else {
    if (arraysEqual(n, e)) return;
    r.uniform3uiv(this.addr, e), copyArray(n, e);
  }
}
function setValueV4ui(r, e) {
  const n = this.cache;
  if (e.x !== void 0)
    (n[0] !== e.x || n[1] !== e.y || n[2] !== e.z || n[3] !== e.w) &&
      (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (n[0] = e.x),
      (n[1] = e.y),
      (n[2] = e.z),
      (n[3] = e.w));
  else {
    if (arraysEqual(n, e)) return;
    r.uniform4uiv(this.addr, e), copyArray(n, e);
  }
}
function setValueT1(r, e, n) {
  const i = this.cache,
    s = n.allocateTextureUnit();
  i[0] !== s && (r.uniform1i(this.addr, s), (i[0] = s));
  let a;
  this.type === r.SAMPLER_2D_SHADOW
    ? ((emptyShadowTexture.compareFunction = 515), (a = emptyShadowTexture))
    : (a = emptyTexture),
    n.setTexture2D(e || a, s);
}
function setValueT3D1(r, e, n) {
  const i = this.cache,
    s = n.allocateTextureUnit();
  i[0] !== s && (r.uniform1i(this.addr, s), (i[0] = s)),
    n.setTexture3D(e || empty3dTexture, s);
}
function setValueT6(r, e, n) {
  const i = this.cache,
    s = n.allocateTextureUnit();
  i[0] !== s && (r.uniform1i(this.addr, s), (i[0] = s)),
    n.setTextureCube(e || emptyCubeTexture, s);
}
function setValueT2DArray1(r, e, n) {
  const i = this.cache,
    s = n.allocateTextureUnit();
  i[0] !== s && (r.uniform1i(this.addr, s), (i[0] = s)),
    n.setTexture2DArray(e || emptyArrayTexture, s);
}
function getSingularSetter(r) {
  switch (r) {
    case 5126:
      return setValueV1f;
    case 35664:
      return setValueV2f;
    case 35665:
      return setValueV3f;
    case 35666:
      return setValueV4f;
    case 35674:
      return setValueM2;
    case 35675:
      return setValueM3;
    case 35676:
      return setValueM4;
    case 5124:
    case 35670:
      return setValueV1i;
    case 35667:
    case 35671:
      return setValueV2i;
    case 35668:
    case 35672:
      return setValueV3i;
    case 35669:
    case 35673:
      return setValueV4i;
    case 5125:
      return setValueV1ui;
    case 36294:
      return setValueV2ui;
    case 36295:
      return setValueV3ui;
    case 36296:
      return setValueV4ui;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return setValueT1;
    case 35679:
    case 36299:
    case 36307:
      return setValueT3D1;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return setValueT6;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return setValueT2DArray1;
  }
}
function setValueV1fArray(r, e) {
  r.uniform1fv(this.addr, e);
}
function setValueV2fArray(r, e) {
  const n = flatten(e, this.size, 2);
  r.uniform2fv(this.addr, n);
}
function setValueV3fArray(r, e) {
  const n = flatten(e, this.size, 3);
  r.uniform3fv(this.addr, n);
}
function setValueV4fArray(r, e) {
  const n = flatten(e, this.size, 4);
  r.uniform4fv(this.addr, n);
}
function setValueM2Array(r, e) {
  const n = flatten(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, n);
}
function setValueM3Array(r, e) {
  const n = flatten(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, n);
}
function setValueM4Array(r, e) {
  const n = flatten(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, n);
}
function setValueV1iArray(r, e) {
  r.uniform1iv(this.addr, e);
}
function setValueV2iArray(r, e) {
  r.uniform2iv(this.addr, e);
}
function setValueV3iArray(r, e) {
  r.uniform3iv(this.addr, e);
}
function setValueV4iArray(r, e) {
  r.uniform4iv(this.addr, e);
}
function setValueV1uiArray(r, e) {
  r.uniform1uiv(this.addr, e);
}
function setValueV2uiArray(r, e) {
  r.uniform2uiv(this.addr, e);
}
function setValueV3uiArray(r, e) {
  r.uniform3uiv(this.addr, e);
}
function setValueV4uiArray(r, e) {
  r.uniform4uiv(this.addr, e);
}
function setValueT1Array(r, e, n) {
  const i = this.cache,
    s = e.length,
    a = allocTexUnits(n, s);
  arraysEqual(i, a) || (r.uniform1iv(this.addr, a), copyArray(i, a));
  for (let o = 0; o !== s; ++o) n.setTexture2D(e[o] || emptyTexture, a[o]);
}
function setValueT3DArray(r, e, n) {
  const i = this.cache,
    s = e.length,
    a = allocTexUnits(n, s);
  arraysEqual(i, a) || (r.uniform1iv(this.addr, a), copyArray(i, a));
  for (let o = 0; o !== s; ++o) n.setTexture3D(e[o] || empty3dTexture, a[o]);
}
function setValueT6Array(r, e, n) {
  const i = this.cache,
    s = e.length,
    a = allocTexUnits(n, s);
  arraysEqual(i, a) || (r.uniform1iv(this.addr, a), copyArray(i, a));
  for (let o = 0; o !== s; ++o)
    n.setTextureCube(e[o] || emptyCubeTexture, a[o]);
}
function setValueT2DArrayArray(r, e, n) {
  const i = this.cache,
    s = e.length,
    a = allocTexUnits(n, s);
  arraysEqual(i, a) || (r.uniform1iv(this.addr, a), copyArray(i, a));
  for (let o = 0; o !== s; ++o)
    n.setTexture2DArray(e[o] || emptyArrayTexture, a[o]);
}
function getPureArraySetter(r) {
  switch (r) {
    case 5126:
      return setValueV1fArray;
    case 35664:
      return setValueV2fArray;
    case 35665:
      return setValueV3fArray;
    case 35666:
      return setValueV4fArray;
    case 35674:
      return setValueM2Array;
    case 35675:
      return setValueM3Array;
    case 35676:
      return setValueM4Array;
    case 5124:
    case 35670:
      return setValueV1iArray;
    case 35667:
    case 35671:
      return setValueV2iArray;
    case 35668:
    case 35672:
      return setValueV3iArray;
    case 35669:
    case 35673:
      return setValueV4iArray;
    case 5125:
      return setValueV1uiArray;
    case 36294:
      return setValueV2uiArray;
    case 36295:
      return setValueV3uiArray;
    case 36296:
      return setValueV4uiArray;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return setValueT1Array;
    case 35679:
    case 36299:
    case 36307:
      return setValueT3DArray;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return setValueT6Array;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return setValueT2DArrayArray;
  }
}
class SingleUniform {
  constructor(e, n, i) {
    (this.id = e),
      (this.addr = i),
      (this.cache = []),
      (this.type = n.type),
      (this.setValue = getSingularSetter(n.type));
  }
}
class PureArrayUniform {
  constructor(e, n, i) {
    (this.id = e),
      (this.addr = i),
      (this.cache = []),
      (this.type = n.type),
      (this.size = n.size),
      (this.setValue = getPureArraySetter(n.type));
  }
}
class StructuredUniform {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, n, i) {
    const s = this.seq;
    for (let a = 0, o = s.length; a !== o; ++a) {
      const l = s[a];
      l.setValue(e, n[l.id], i);
    }
  }
}
const RePathPart = /(\w+)(\])?(\[|\.)?/g;
function addUniform(r, e) {
  r.seq.push(e), (r.map[e.id] = e);
}
function parseUniform(r, e, n) {
  const i = r.name,
    s = i.length;
  for (RePathPart.lastIndex = 0; ; ) {
    const a = RePathPart.exec(i),
      o = RePathPart.lastIndex;
    let l = a[1];
    const c = a[2] === "]",
      h = a[3];
    if ((c && (l = l | 0), h === void 0 || (h === "[" && o + 2 === s))) {
      addUniform(
        n,
        h === void 0
          ? new SingleUniform(l, r, e)
          : new PureArrayUniform(l, r, e)
      );
      break;
    } else {
      let d = n.map[l];
      d === void 0 && ((d = new StructuredUniform(l)), addUniform(n, d)),
        (n = d);
    }
  }
}
class WebGLUniforms {
  constructor(e, n) {
    (this.seq = []), (this.map = {});
    const i = e.getProgramParameter(n, e.ACTIVE_UNIFORMS);
    for (let s = 0; s < i; ++s) {
      const a = e.getActiveUniform(n, s),
        o = e.getUniformLocation(n, a.name);
      parseUniform(a, o, this);
    }
  }
  setValue(e, n, i, s) {
    const a = this.map[n];
    a !== void 0 && a.setValue(e, i, s);
  }
  setOptional(e, n, i) {
    const s = n[i];
    s !== void 0 && this.setValue(e, i, s);
  }
  static upload(e, n, i, s) {
    for (let a = 0, o = n.length; a !== o; ++a) {
      const l = n[a],
        c = i[l.id];
      c.needsUpdate !== !1 && l.setValue(e, c.value, s);
    }
  }
  static seqWithValue(e, n) {
    const i = [];
    for (let s = 0, a = e.length; s !== a; ++s) {
      const o = e[s];
      o.id in n && i.push(o);
    }
    return i;
  }
}
function WebGLShader(r, e, n) {
  const i = r.createShader(e);
  return r.shaderSource(i, n), r.compileShader(i), i;
}
const COMPLETION_STATUS_KHR = 37297;
let programIdCount = 0;
function handleSource(r, e) {
  const n = r.split(`
`),
    i = [],
    s = Math.max(e - 6, 0),
    a = Math.min(e + 6, n.length);
  for (let o = s; o < a; o++) {
    const l = o + 1;
    i.push(`${l === e ? ">" : " "} ${l}: ${n[o]}`);
  }
  return i.join(`
`);
}
function getEncodingComponents(r) {
  const e = ColorManagement.getPrimaries(ColorManagement.workingColorSpace),
    n = ColorManagement.getPrimaries(r);
  let i;
  switch (
    (e === n
      ? (i = "")
      : e === P3Primaries && n === Rec709Primaries
      ? (i = "LinearDisplayP3ToLinearSRGB")
      : e === Rec709Primaries &&
        n === P3Primaries &&
        (i = "LinearSRGBToLinearDisplayP3"),
    r)
  ) {
    case LinearSRGBColorSpace:
    case LinearDisplayP3ColorSpace:
      return [i, "LinearTransferOETF"];
    case SRGBColorSpace:
    case DisplayP3ColorSpace:
      return [i, "sRGBTransferOETF"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported color space:", r),
        [i, "LinearTransferOETF"]
      );
  }
}
function getShaderErrors(r, e, n) {
  const i = r.getShaderParameter(e, r.COMPILE_STATUS),
    s = r.getShaderInfoLog(e).trim();
  if (i && s === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(s);
  if (a) {
    const o = parseInt(a[1]);
    return (
      n.toUpperCase() +
      `

` +
      s +
      `

` +
      handleSource(r.getShaderSource(e), o)
    );
  } else return s;
}
function getTexelEncodingFunction(r, e) {
  const n = getEncodingComponents(e);
  return `vec4 ${r}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`;
}
function getToneMappingFunction(r, e) {
  let n;
  switch (e) {
    case 1:
      n = "Linear";
      break;
    case 2:
      n = "Reinhard";
      break;
    case 3:
      n = "OptimizedCineon";
      break;
    case 4:
      n = "ACESFilmic";
      break;
    case 6:
      n = "AgX";
      break;
    case 7:
      n = "Neutral";
      break;
    case 5:
      n = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        (n = "Linear");
  }
  return (
    "vec3 " + r + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
  );
}
function generateVertexExtensions(r) {
  return [
    r.extensionClipCullDistance
      ? "#extension GL_ANGLE_clip_cull_distance : require"
      : "",
    r.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : "",
  ].filter(filterEmptyLine).join(`
`);
}
function generateDefines(r) {
  const e = [];
  for (const n in r) {
    const i = r[n];
    i !== !1 && e.push("#define " + n + " " + i);
  }
  return e.join(`
`);
}
function fetchAttributeLocations(r, e) {
  const n = {},
    i = r.getProgramParameter(e, r.ACTIVE_ATTRIBUTES);
  for (let s = 0; s < i; s++) {
    const a = r.getActiveAttrib(e, s),
      o = a.name;
    let l = 1;
    a.type === r.FLOAT_MAT2 && (l = 2),
      a.type === r.FLOAT_MAT3 && (l = 3),
      a.type === r.FLOAT_MAT4 && (l = 4),
      (n[o] = {
        type: a.type,
        location: r.getAttribLocation(e, o),
        locationSize: l,
      });
  }
  return n;
}
function filterEmptyLine(r) {
  return r !== "";
}
function replaceLightNums(r, e) {
  const n =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return r
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, n)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function replaceClippingPlaneNums(r, e) {
  return r
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const includePattern = /^[ \t]*#include +<([\w\d./]+)>/gm;
function resolveIncludes(r) {
  return r.replace(includePattern, includeReplacer);
}
const shaderChunkMap = /* @__PURE__ */ new Map();
function includeReplacer(r, e) {
  let n = ShaderChunk[e];
  if (n === void 0) {
    const i = shaderChunkMap.get(e);
    if (i !== void 0)
      (n = ShaderChunk[i]),
        console.warn(
          'THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
          e,
          i
        );
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return resolveIncludes(n);
}
const unrollLoopPattern =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function unrollLoops(r) {
  return r.replace(unrollLoopPattern, loopReplacer);
}
function loopReplacer(r, e, n, i) {
  let s = "";
  for (let a = parseInt(e); a < parseInt(n); a++)
    s += i
      .replace(/\[\s*i\s*\]/g, "[ " + a + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, a);
  return s;
}
function generatePrecision(r) {
  let e = `precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;
  return (
    r.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : r.precision === "mediump"
      ? (e += `
#define MEDIUM_PRECISION`)
      : r.precision === "lowp" &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
function generateShadowMapTypeDefine(r) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    r.shadowMapType === 1
      ? (e = "SHADOWMAP_TYPE_PCF")
      : r.shadowMapType === 2
      ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
      : r.shadowMapType === 3 && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function generateEnvMapTypeDefine(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case 301:
      case 302:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case 306:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function generateEnvMapModeDefine(r) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (r.envMap)
    switch (r.envMapMode) {
      case 302:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function generateEnvMapBlendingDefine(r) {
  let e = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case 0:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case 1:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case 2:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function generateCubeUVSize(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null) return null;
  const n = Math.log2(e) - 2,
    i = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 7 * 16)),
    texelHeight: i,
    maxMip: n,
  };
}
function WebGLProgram(r, e, n, i) {
  const s = r.getContext(),
    a = n.defines;
  let o = n.vertexShader,
    l = n.fragmentShader;
  const c = generateShadowMapTypeDefine(n),
    h = generateEnvMapTypeDefine(n),
    u = generateEnvMapModeDefine(n),
    d = generateEnvMapBlendingDefine(n),
    f = generateCubeUVSize(n),
    p = generateVertexExtensions(n),
    g = generateDefines(a),
    v = s.createProgram();
  let _,
    m,
    A = n.glslVersion
      ? "#version " +
        n.glslVersion +
        `
`
      : "";
  n.isRawShaderMaterial
    ? ((_ = [
        "#define SHADER_TYPE " + n.shaderType,
        "#define SHADER_NAME " + n.shaderName,
        g,
      ].filter(filterEmptyLine).join(`
`)),
      _.length > 0 &&
        (_ += `
`),
      (m = [
        "#define SHADER_TYPE " + n.shaderType,
        "#define SHADER_NAME " + n.shaderName,
        g,
      ].filter(filterEmptyLine).join(`
`)),
      m.length > 0 &&
        (m += `
`))
    : ((_ = [
        generatePrecision(n),
        "#define SHADER_TYPE " + n.shaderType,
        "#define SHADER_NAME " + n.shaderName,
        g,
        n.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
        n.batching ? "#define USE_BATCHING" : "",
        n.batchingColor ? "#define USE_BATCHING_COLOR" : "",
        n.instancing ? "#define USE_INSTANCING" : "",
        n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        n.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
        n.useFog && n.fog ? "#define USE_FOG" : "",
        n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
        n.map ? "#define USE_MAP" : "",
        n.envMap ? "#define USE_ENVMAP" : "",
        n.envMap ? "#define " + u : "",
        n.lightMap ? "#define USE_LIGHTMAP" : "",
        n.aoMap ? "#define USE_AOMAP" : "",
        n.bumpMap ? "#define USE_BUMPMAP" : "",
        n.normalMap ? "#define USE_NORMALMAP" : "",
        n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        n.anisotropy ? "#define USE_ANISOTROPY" : "",
        n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        n.specularMap ? "#define USE_SPECULARMAP" : "",
        n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        n.metalnessMap ? "#define USE_METALNESSMAP" : "",
        n.alphaMap ? "#define USE_ALPHAMAP" : "",
        n.alphaHash ? "#define USE_ALPHAHASH" : "",
        n.transmission ? "#define USE_TRANSMISSION" : "",
        n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        //
        n.mapUv ? "#define MAP_UV " + n.mapUv : "",
        n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "",
        n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "",
        n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "",
        n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "",
        n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "",
        n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "",
        n.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv
          : "",
        n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "",
        n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "",
        n.anisotropyMapUv
          ? "#define ANISOTROPYMAP_UV " + n.anisotropyMapUv
          : "",
        n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "",
        n.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv
          : "",
        n.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv
          : "",
        n.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv
          : "",
        n.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n.iridescenceThicknessMapUv
          : "",
        n.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv
          : "",
        n.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv
          : "",
        n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "",
        n.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv
          : "",
        n.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv
          : "",
        n.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv
          : "",
        n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "",
        //
        n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "",
        n.vertexColors ? "#define USE_COLOR" : "",
        n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        n.vertexUv1s ? "#define USE_UV1" : "",
        n.vertexUv2s ? "#define USE_UV2" : "",
        n.vertexUv3s ? "#define USE_UV3" : "",
        n.pointsUvs ? "#define USE_POINTS_UV" : "",
        n.flatShading ? "#define FLAT_SHADED" : "",
        n.skinning ? "#define USE_SKINNING" : "",
        n.morphTargets ? "#define USE_MORPHTARGETS" : "",
        n.morphNormals && n.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        n.morphColors ? "#define USE_MORPHCOLORS" : "",
        n.morphTargetsCount > 0
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride
          : "",
        n.morphTargetsCount > 0
          ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount
          : "",
        n.doubleSided ? "#define DOUBLE_SIDED" : "",
        n.flipSided ? "#define FLIP_SIDED" : "",
        n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        n.shadowMapEnabled ? "#define " + c : "",
        n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "#ifdef USE_INSTANCING_MORPH",
        "	uniform sampler2D morphTexture;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_UV1",
        "	attribute vec2 uv1;",
        "#endif",
        "#ifdef USE_UV2",
        "	attribute vec2 uv2;",
        "#endif",
        "#ifdef USE_UV3",
        "	attribute vec2 uv3;",
        "#endif",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(filterEmptyLine).join(`
`)),
      (m = [
        generatePrecision(n),
        "#define SHADER_TYPE " + n.shaderType,
        "#define SHADER_NAME " + n.shaderName,
        g,
        n.useFog && n.fog ? "#define USE_FOG" : "",
        n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
        n.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
        n.map ? "#define USE_MAP" : "",
        n.matcap ? "#define USE_MATCAP" : "",
        n.envMap ? "#define USE_ENVMAP" : "",
        n.envMap ? "#define " + h : "",
        n.envMap ? "#define " + u : "",
        n.envMap ? "#define " + d : "",
        f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
        f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
        f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
        n.lightMap ? "#define USE_LIGHTMAP" : "",
        n.aoMap ? "#define USE_AOMAP" : "",
        n.bumpMap ? "#define USE_BUMPMAP" : "",
        n.normalMap ? "#define USE_NORMALMAP" : "",
        n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        n.anisotropy ? "#define USE_ANISOTROPY" : "",
        n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        n.clearcoat ? "#define USE_CLEARCOAT" : "",
        n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        n.dispersion ? "#define USE_DISPERSION" : "",
        n.iridescence ? "#define USE_IRIDESCENCE" : "",
        n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        n.specularMap ? "#define USE_SPECULARMAP" : "",
        n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        n.metalnessMap ? "#define USE_METALNESSMAP" : "",
        n.alphaMap ? "#define USE_ALPHAMAP" : "",
        n.alphaTest ? "#define USE_ALPHATEST" : "",
        n.alphaHash ? "#define USE_ALPHAHASH" : "",
        n.sheen ? "#define USE_SHEEN" : "",
        n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        n.transmission ? "#define USE_TRANSMISSION" : "",
        n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "",
        n.vertexColors || n.instancingColor || n.batchingColor
          ? "#define USE_COLOR"
          : "",
        n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        n.vertexUv1s ? "#define USE_UV1" : "",
        n.vertexUv2s ? "#define USE_UV2" : "",
        n.vertexUv3s ? "#define USE_UV3" : "",
        n.pointsUvs ? "#define USE_POINTS_UV" : "",
        n.gradientMap ? "#define USE_GRADIENTMAP" : "",
        n.flatShading ? "#define FLAT_SHADED" : "",
        n.doubleSided ? "#define DOUBLE_SIDED" : "",
        n.flipSided ? "#define FLIP_SIDED" : "",
        n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        n.shadowMapEnabled ? "#define " + c : "",
        n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        n.toneMapping !== 0 ? "#define TONE_MAPPING" : "",
        n.toneMapping !== 0 ? ShaderChunk.tonemapping_pars_fragment : "",
        // this code is required here because it is used by the toneMapping() function defined below
        n.toneMapping !== 0
          ? getToneMappingFunction("toneMapping", n.toneMapping)
          : "",
        n.dithering ? "#define DITHERING" : "",
        n.opaque ? "#define OPAQUE" : "",
        ShaderChunk.colorspace_pars_fragment,
        // this code is required here because it is used by the various encoding/decoding function defined below
        getTexelEncodingFunction("linearToOutputTexel", n.outputColorSpace),
        n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
        `
`,
      ].filter(filterEmptyLine).join(`
`))),
    (o = resolveIncludes(o)),
    (o = replaceLightNums(o, n)),
    (o = replaceClippingPlaneNums(o, n)),
    (l = resolveIncludes(l)),
    (l = replaceLightNums(l, n)),
    (l = replaceClippingPlaneNums(l, n)),
    (o = unrollLoops(o)),
    (l = unrollLoops(l)),
    n.isRawShaderMaterial !== !0 &&
      ((A = `#version 300 es
`),
      (_ =
        [
          p,
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        _),
      (m =
        [
          "#define varying in",
          n.glslVersion === GLSL3
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          n.glslVersion === GLSL3 ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        m));
  const S = A + _ + o,
    E = A + m + l,
    N = WebGLShader(s, s.VERTEX_SHADER, S),
    w = WebGLShader(s, s.FRAGMENT_SHADER, E);
  s.attachShader(v, N),
    s.attachShader(v, w),
    n.index0AttributeName !== void 0
      ? s.bindAttribLocation(v, 0, n.index0AttributeName)
      : n.morphTargets === !0 && s.bindAttribLocation(v, 0, "position"),
    s.linkProgram(v);
  function C(P) {
    if (r.debug.checkShaderErrors) {
      const z = s.getProgramInfoLog(v).trim(),
        O = s.getShaderInfoLog(N).trim(),
        G = s.getShaderInfoLog(w).trim();
      let X = !0,
        k = !0;
      if (s.getProgramParameter(v, s.LINK_STATUS) === !1)
        if (((X = !1), typeof r.debug.onShaderError == "function"))
          r.debug.onShaderError(s, v, N, w);
        else {
          const K = getShaderErrors(s, N, "vertex"),
            H = getShaderErrors(s, w, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " +
              s.getError() +
              " - VALIDATE_STATUS " +
              s.getProgramParameter(v, s.VALIDATE_STATUS) +
              `

Material Name: ` +
              P.name +
              `
Material Type: ` +
              P.type +
              `

Program Info Log: ` +
              z +
              `
` +
              K +
              `
` +
              H
          );
        }
      else
        z !== ""
          ? console.warn("THREE.WebGLProgram: Program Info Log:", z)
          : (O === "" || G === "") && (k = !1);
      k &&
        (P.diagnostics = {
          runnable: X,
          programLog: z,
          vertexShader: {
            log: O,
            prefix: _,
          },
          fragmentShader: {
            log: G,
            prefix: m,
          },
        });
    }
    s.deleteShader(N),
      s.deleteShader(w),
      (U = new WebGLUniforms(s, v)),
      (T = fetchAttributeLocations(s, v));
  }
  let U;
  this.getUniforms = function () {
    return U === void 0 && C(this), U;
  };
  let T;
  this.getAttributes = function () {
    return T === void 0 && C(this), T;
  };
  let M = n.rendererExtensionParallelShaderCompile === !1;
  return (
    (this.isReady = function () {
      return (
        M === !1 && (M = s.getProgramParameter(v, COMPLETION_STATUS_KHR)), M
      );
    }),
    (this.destroy = function () {
      i.releaseStatesOfProgram(this),
        s.deleteProgram(v),
        (this.program = void 0);
    }),
    (this.type = n.shaderType),
    (this.name = n.shaderName),
    (this.id = programIdCount++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = v),
    (this.vertexShader = N),
    (this.fragmentShader = w),
    this
  );
}
let _id$1 = 0;
class WebGLShaderCache {
  constructor() {
    (this.shaderCache = /* @__PURE__ */ new Map()),
      (this.materialCache = /* @__PURE__ */ new Map());
  }
  update(e) {
    const n = e.vertexShader,
      i = e.fragmentShader,
      s = this._getShaderStage(n),
      a = this._getShaderStage(i),
      o = this._getShaderCacheForMaterial(e);
    return (
      o.has(s) === !1 && (o.add(s), s.usedTimes++),
      o.has(a) === !1 && (o.add(a), a.usedTimes++),
      this
    );
  }
  remove(e) {
    const n = this.materialCache.get(e);
    for (const i of n)
      i.usedTimes--, i.usedTimes === 0 && this.shaderCache.delete(i.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const n = this.materialCache;
    let i = n.get(e);
    return i === void 0 && ((i = /* @__PURE__ */ new Set()), n.set(e, i)), i;
  }
  _getShaderStage(e) {
    const n = this.shaderCache;
    let i = n.get(e);
    return i === void 0 && ((i = new WebGLShaderStage(e)), n.set(e, i)), i;
  }
}
class WebGLShaderStage {
  constructor(e) {
    (this.id = _id$1++), (this.code = e), (this.usedTimes = 0);
  }
}
function WebGLPrograms(r, e, n, i, s, a, o) {
  const l = new Layers(),
    c = new WebGLShaderCache(),
    h = /* @__PURE__ */ new Set(),
    u = [],
    d = s.logarithmicDepthBuffer,
    f = s.vertexTextures;
  let p = s.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function v(T) {
    return h.add(T), T === 0 ? "uv" : `uv${T}`;
  }
  function _(T, M, P, z, O) {
    const G = z.fog,
      X = O.geometry,
      k = T.isMeshStandardMaterial ? z.environment : null,
      K = (T.isMeshStandardMaterial ? n : e).get(T.envMap || k),
      H = K && K.mapping === 306 ? K.image.height : null,
      se = g[T.type];
    T.precision !== null &&
      ((p = s.getMaxPrecision(T.precision)),
      p !== T.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          T.precision,
          "not supported, using",
          p,
          "instead."
        ));
    const pe =
        X.morphAttributes.position ||
        X.morphAttributes.normal ||
        X.morphAttributes.color,
      me = pe !== void 0 ? pe.length : 0;
    let Ie = 0;
    X.morphAttributes.position !== void 0 && (Ie = 1),
      X.morphAttributes.normal !== void 0 && (Ie = 2),
      X.morphAttributes.color !== void 0 && (Ie = 3);
    let ze, W, J, ue;
    if (se) {
      const Ne = ShaderLib[se];
      (ze = Ne.vertexShader), (W = Ne.fragmentShader);
    } else
      (ze = T.vertexShader),
        (W = T.fragmentShader),
        c.update(T),
        (J = c.getVertexShaderID(T)),
        (ue = c.getFragmentShaderID(T));
    const le = r.getRenderTarget(),
      be = O.isInstancedMesh === !0,
      Re = O.isBatchedMesh === !0,
      Le = !!T.map,
      He = !!T.matcap,
      R = !!K,
      Xe = !!T.aoMap,
      Ve = !!T.lightMap,
      Ge = !!T.bumpMap,
      ge = !!T.normalMap,
      qe = !!T.displacementMap,
      Te = !!T.emissiveMap,
      we = !!T.metalnessMap,
      b = !!T.roughnessMap,
      x = T.anisotropy > 0,
      V = T.clearcoat > 0,
      Z = T.dispersion > 0,
      j = T.iridescence > 0,
      Y = T.sheen > 0,
      ve = T.transmission > 0,
      re = x && !!T.anisotropyMap,
      ce = V && !!T.clearcoatMap,
      Ce = V && !!T.clearcoatNormalMap,
      Q = V && !!T.clearcoatRoughnessMap,
      oe = j && !!T.iridescenceMap,
      De = j && !!T.iridescenceThicknessMap,
      Ee = Y && !!T.sheenColorMap,
      he = Y && !!T.sheenRoughnessMap,
      Ae = !!T.specularMap,
      Pe = !!T.specularColorMap,
      ke = !!T.specularIntensityMap,
      L = ve && !!T.transmissionMap,
      ee = ve && !!T.thicknessMap,
      $ = !!T.gradientMap,
      q = !!T.alphaMap,
      ie = T.alphaTest > 0,
      Se = !!T.alphaHash,
      Ue = !!T.extensions;
    let Ye = 0;
    T.toneMapped &&
      (le === null || le.isXRRenderTarget === !0) &&
      (Ye = r.toneMapping);
    const Ke = {
      shaderID: se,
      shaderType: T.type,
      shaderName: T.name,
      vertexShader: ze,
      fragmentShader: W,
      defines: T.defines,
      customVertexShaderID: J,
      customFragmentShaderID: ue,
      isRawShaderMaterial: T.isRawShaderMaterial === !0,
      glslVersion: T.glslVersion,
      precision: p,
      batching: Re,
      batchingColor: Re && O._colorsTexture !== null,
      instancing: be,
      instancingColor: be && O.instanceColor !== null,
      instancingMorph: be && O.morphTexture !== null,
      supportsVertexTextures: f,
      outputColorSpace:
        le === null
          ? r.outputColorSpace
          : le.isXRRenderTarget === !0
          ? le.texture.colorSpace
          : LinearSRGBColorSpace,
      alphaToCoverage: !!T.alphaToCoverage,
      map: Le,
      matcap: He,
      envMap: R,
      envMapMode: R && K.mapping,
      envMapCubeUVHeight: H,
      aoMap: Xe,
      lightMap: Ve,
      bumpMap: Ge,
      normalMap: ge,
      displacementMap: f && qe,
      emissiveMap: Te,
      normalMapObjectSpace: ge && T.normalMapType === 1,
      normalMapTangentSpace: ge && T.normalMapType === 0,
      metalnessMap: we,
      roughnessMap: b,
      anisotropy: x,
      anisotropyMap: re,
      clearcoat: V,
      clearcoatMap: ce,
      clearcoatNormalMap: Ce,
      clearcoatRoughnessMap: Q,
      dispersion: Z,
      iridescence: j,
      iridescenceMap: oe,
      iridescenceThicknessMap: De,
      sheen: Y,
      sheenColorMap: Ee,
      sheenRoughnessMap: he,
      specularMap: Ae,
      specularColorMap: Pe,
      specularIntensityMap: ke,
      transmission: ve,
      transmissionMap: L,
      thicknessMap: ee,
      gradientMap: $,
      opaque:
        T.transparent === !1 && T.blending === 1 && T.alphaToCoverage === !1,
      alphaMap: q,
      alphaTest: ie,
      alphaHash: Se,
      combine: T.combine,
      //
      mapUv: Le && v(T.map.channel),
      aoMapUv: Xe && v(T.aoMap.channel),
      lightMapUv: Ve && v(T.lightMap.channel),
      bumpMapUv: Ge && v(T.bumpMap.channel),
      normalMapUv: ge && v(T.normalMap.channel),
      displacementMapUv: qe && v(T.displacementMap.channel),
      emissiveMapUv: Te && v(T.emissiveMap.channel),
      metalnessMapUv: we && v(T.metalnessMap.channel),
      roughnessMapUv: b && v(T.roughnessMap.channel),
      anisotropyMapUv: re && v(T.anisotropyMap.channel),
      clearcoatMapUv: ce && v(T.clearcoatMap.channel),
      clearcoatNormalMapUv: Ce && v(T.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: Q && v(T.clearcoatRoughnessMap.channel),
      iridescenceMapUv: oe && v(T.iridescenceMap.channel),
      iridescenceThicknessMapUv: De && v(T.iridescenceThicknessMap.channel),
      sheenColorMapUv: Ee && v(T.sheenColorMap.channel),
      sheenRoughnessMapUv: he && v(T.sheenRoughnessMap.channel),
      specularMapUv: Ae && v(T.specularMap.channel),
      specularColorMapUv: Pe && v(T.specularColorMap.channel),
      specularIntensityMapUv: ke && v(T.specularIntensityMap.channel),
      transmissionMapUv: L && v(T.transmissionMap.channel),
      thicknessMapUv: ee && v(T.thicknessMap.channel),
      alphaMapUv: q && v(T.alphaMap.channel),
      //
      vertexTangents: !!X.attributes.tangent && (ge || x),
      vertexColors: T.vertexColors,
      vertexAlphas:
        T.vertexColors === !0 &&
        !!X.attributes.color &&
        X.attributes.color.itemSize === 4,
      pointsUvs: O.isPoints === !0 && !!X.attributes.uv && (Le || q),
      fog: !!G,
      useFog: T.fog === !0,
      fogExp2: !!G && G.isFogExp2,
      flatShading: T.flatShading === !0,
      sizeAttenuation: T.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      skinning: O.isSkinnedMesh === !0,
      morphTargets: X.morphAttributes.position !== void 0,
      morphNormals: X.morphAttributes.normal !== void 0,
      morphColors: X.morphAttributes.color !== void 0,
      morphTargetsCount: me,
      morphTextureStride: Ie,
      numDirLights: M.directional.length,
      numPointLights: M.point.length,
      numSpotLights: M.spot.length,
      numSpotLightMaps: M.spotLightMap.length,
      numRectAreaLights: M.rectArea.length,
      numHemiLights: M.hemi.length,
      numDirLightShadows: M.directionalShadowMap.length,
      numPointLightShadows: M.pointShadowMap.length,
      numSpotLightShadows: M.spotShadowMap.length,
      numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps,
      numLightProbes: M.numLightProbes,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: T.dithering,
      shadowMapEnabled: r.shadowMap.enabled && P.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: Ye,
      decodeVideoTexture:
        Le &&
        T.map.isVideoTexture === !0 &&
        ColorManagement.getTransfer(T.map.colorSpace) === SRGBTransfer,
      premultipliedAlpha: T.premultipliedAlpha,
      doubleSided: T.side === 2,
      flipSided: T.side === 1,
      useDepthPacking: T.depthPacking >= 0,
      depthPacking: T.depthPacking || 0,
      index0AttributeName: T.index0AttributeName,
      extensionClipCullDistance:
        Ue &&
        T.extensions.clipCullDistance === !0 &&
        i.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw:
        ((Ue && T.extensions.multiDraw === !0) || Re) &&
        i.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: i.has(
        "KHR_parallel_shader_compile"
      ),
      customProgramCacheKey: T.customProgramCacheKey(),
    };
    return (
      (Ke.vertexUv1s = h.has(1)),
      (Ke.vertexUv2s = h.has(2)),
      (Ke.vertexUv3s = h.has(3)),
      h.clear(),
      Ke
    );
  }
  function m(T) {
    const M = [];
    if (
      (T.shaderID
        ? M.push(T.shaderID)
        : (M.push(T.customVertexShaderID), M.push(T.customFragmentShaderID)),
      T.defines !== void 0)
    )
      for (const P in T.defines) M.push(P), M.push(T.defines[P]);
    return (
      T.isRawShaderMaterial === !1 &&
        (A(M, T), S(M, T), M.push(r.outputColorSpace)),
      M.push(T.customProgramCacheKey),
      M.join()
    );
  }
  function A(T, M) {
    T.push(M.precision),
      T.push(M.outputColorSpace),
      T.push(M.envMapMode),
      T.push(M.envMapCubeUVHeight),
      T.push(M.mapUv),
      T.push(M.alphaMapUv),
      T.push(M.lightMapUv),
      T.push(M.aoMapUv),
      T.push(M.bumpMapUv),
      T.push(M.normalMapUv),
      T.push(M.displacementMapUv),
      T.push(M.emissiveMapUv),
      T.push(M.metalnessMapUv),
      T.push(M.roughnessMapUv),
      T.push(M.anisotropyMapUv),
      T.push(M.clearcoatMapUv),
      T.push(M.clearcoatNormalMapUv),
      T.push(M.clearcoatRoughnessMapUv),
      T.push(M.iridescenceMapUv),
      T.push(M.iridescenceThicknessMapUv),
      T.push(M.sheenColorMapUv),
      T.push(M.sheenRoughnessMapUv),
      T.push(M.specularMapUv),
      T.push(M.specularColorMapUv),
      T.push(M.specularIntensityMapUv),
      T.push(M.transmissionMapUv),
      T.push(M.thicknessMapUv),
      T.push(M.combine),
      T.push(M.fogExp2),
      T.push(M.sizeAttenuation),
      T.push(M.morphTargetsCount),
      T.push(M.morphAttributeCount),
      T.push(M.numDirLights),
      T.push(M.numPointLights),
      T.push(M.numSpotLights),
      T.push(M.numSpotLightMaps),
      T.push(M.numHemiLights),
      T.push(M.numRectAreaLights),
      T.push(M.numDirLightShadows),
      T.push(M.numPointLightShadows),
      T.push(M.numSpotLightShadows),
      T.push(M.numSpotLightShadowsWithMaps),
      T.push(M.numLightProbes),
      T.push(M.shadowMapType),
      T.push(M.toneMapping),
      T.push(M.numClippingPlanes),
      T.push(M.numClipIntersection),
      T.push(M.depthPacking);
  }
  function S(T, M) {
    l.disableAll(),
      M.supportsVertexTextures && l.enable(0),
      M.instancing && l.enable(1),
      M.instancingColor && l.enable(2),
      M.instancingMorph && l.enable(3),
      M.matcap && l.enable(4),
      M.envMap && l.enable(5),
      M.normalMapObjectSpace && l.enable(6),
      M.normalMapTangentSpace && l.enable(7),
      M.clearcoat && l.enable(8),
      M.iridescence && l.enable(9),
      M.alphaTest && l.enable(10),
      M.vertexColors && l.enable(11),
      M.vertexAlphas && l.enable(12),
      M.vertexUv1s && l.enable(13),
      M.vertexUv2s && l.enable(14),
      M.vertexUv3s && l.enable(15),
      M.vertexTangents && l.enable(16),
      M.anisotropy && l.enable(17),
      M.alphaHash && l.enable(18),
      M.batching && l.enable(19),
      M.dispersion && l.enable(20),
      M.batchingColor && l.enable(21),
      T.push(l.mask),
      l.disableAll(),
      M.fog && l.enable(0),
      M.useFog && l.enable(1),
      M.flatShading && l.enable(2),
      M.logarithmicDepthBuffer && l.enable(3),
      M.skinning && l.enable(4),
      M.morphTargets && l.enable(5),
      M.morphNormals && l.enable(6),
      M.morphColors && l.enable(7),
      M.premultipliedAlpha && l.enable(8),
      M.shadowMapEnabled && l.enable(9),
      M.doubleSided && l.enable(10),
      M.flipSided && l.enable(11),
      M.useDepthPacking && l.enable(12),
      M.dithering && l.enable(13),
      M.transmission && l.enable(14),
      M.sheen && l.enable(15),
      M.opaque && l.enable(16),
      M.pointsUvs && l.enable(17),
      M.decodeVideoTexture && l.enable(18),
      M.alphaToCoverage && l.enable(19),
      T.push(l.mask);
  }
  function E(T) {
    const M = g[T.type];
    let P;
    if (M) {
      const z = ShaderLib[M];
      P = UniformsUtils.clone(z.uniforms);
    } else P = T.uniforms;
    return P;
  }
  function N(T, M) {
    let P;
    for (let z = 0, O = u.length; z < O; z++) {
      const G = u[z];
      if (G.cacheKey === M) {
        (P = G), ++P.usedTimes;
        break;
      }
    }
    return P === void 0 && ((P = new WebGLProgram(r, M, T, a)), u.push(P)), P;
  }
  function w(T) {
    if (--T.usedTimes === 0) {
      const M = u.indexOf(T);
      (u[M] = u[u.length - 1]), u.pop(), T.destroy();
    }
  }
  function C(T) {
    c.remove(T);
  }
  function U() {
    c.dispose();
  }
  return {
    getParameters: _,
    getProgramCacheKey: m,
    getUniforms: E,
    acquireProgram: N,
    releaseProgram: w,
    releaseShaderCache: C,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: u,
    dispose: U,
  };
}
function WebGLProperties() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(a) {
    let o = r.get(a);
    return o === void 0 && ((o = {}), r.set(a, o)), o;
  }
  function n(a) {
    r.delete(a);
  }
  function i(a, o, l) {
    r.get(a)[o] = l;
  }
  function s() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: n,
    update: i,
    dispose: s,
  };
}
function painterSortStable(r, e) {
  return r.groupOrder !== e.groupOrder
    ? r.groupOrder - e.groupOrder
    : r.renderOrder !== e.renderOrder
    ? r.renderOrder - e.renderOrder
    : r.material.id !== e.material.id
    ? r.material.id - e.material.id
    : r.z !== e.z
    ? r.z - e.z
    : r.id - e.id;
}
function reversePainterSortStable(r, e) {
  return r.groupOrder !== e.groupOrder
    ? r.groupOrder - e.groupOrder
    : r.renderOrder !== e.renderOrder
    ? r.renderOrder - e.renderOrder
    : r.z !== e.z
    ? e.z - r.z
    : r.id - e.id;
}
function WebGLRenderList() {
  const r = [];
  let e = 0;
  const n = [],
    i = [],
    s = [];
  function a() {
    (e = 0), (n.length = 0), (i.length = 0), (s.length = 0);
  }
  function o(d, f, p, g, v, _) {
    let m = r[e];
    return (
      m === void 0
        ? ((m = {
            id: d.id,
            object: d,
            geometry: f,
            material: p,
            groupOrder: g,
            renderOrder: d.renderOrder,
            z: v,
            group: _,
          }),
          (r[e] = m))
        : ((m.id = d.id),
          (m.object = d),
          (m.geometry = f),
          (m.material = p),
          (m.groupOrder = g),
          (m.renderOrder = d.renderOrder),
          (m.z = v),
          (m.group = _)),
      e++,
      m
    );
  }
  function l(d, f, p, g, v, _) {
    const m = o(d, f, p, g, v, _);
    p.transmission > 0
      ? i.push(m)
      : p.transparent === !0
      ? s.push(m)
      : n.push(m);
  }
  function c(d, f, p, g, v, _) {
    const m = o(d, f, p, g, v, _);
    p.transmission > 0
      ? i.unshift(m)
      : p.transparent === !0
      ? s.unshift(m)
      : n.unshift(m);
  }
  function h(d, f) {
    n.length > 1 && n.sort(d || painterSortStable),
      i.length > 1 && i.sort(f || reversePainterSortStable),
      s.length > 1 && s.sort(f || reversePainterSortStable);
  }
  function u() {
    for (let d = e, f = r.length; d < f; d++) {
      const p = r[d];
      if (p.id === null) break;
      (p.id = null),
        (p.object = null),
        (p.geometry = null),
        (p.material = null),
        (p.group = null);
    }
  }
  return {
    opaque: n,
    transmissive: i,
    transparent: s,
    init: a,
    push: l,
    unshift: c,
    finish: u,
    sort: h,
  };
}
function WebGLRenderLists() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(i, s) {
    const a = r.get(i);
    let o;
    return (
      a === void 0
        ? ((o = new WebGLRenderList()), r.set(i, [o]))
        : s >= a.length
        ? ((o = new WebGLRenderList()), a.push(o))
        : (o = a[s]),
      o
    );
  }
  function n() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: n,
  };
}
function UniformsCache() {
  const r = {};
  return {
    get: function (e) {
      if (r[e.id] !== void 0) return r[e.id];
      let n;
      switch (e.type) {
        case "DirectionalLight":
          n = {
            direction: new Vector3(),
            color: new Color(),
          };
          break;
        case "SpotLight":
          n = {
            position: new Vector3(),
            direction: new Vector3(),
            color: new Color(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          n = {
            position: new Vector3(),
            color: new Color(),
            distance: 0,
            decay: 0,
          };
          break;
        case "HemisphereLight":
          n = {
            direction: new Vector3(),
            skyColor: new Color(),
            groundColor: new Color(),
          };
          break;
        case "RectAreaLight":
          n = {
            color: new Color(),
            position: new Vector3(),
            halfWidth: new Vector3(),
            halfHeight: new Vector3(),
          };
          break;
      }
      return (r[e.id] = n), n;
    },
  };
}
function ShadowUniformsCache() {
  const r = {};
  return {
    get: function (e) {
      if (r[e.id] !== void 0) return r[e.id];
      let n;
      switch (e.type) {
        case "DirectionalLight":
          n = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Vector2(),
          };
          break;
        case "SpotLight":
          n = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Vector2(),
          };
          break;
        case "PointLight":
          n = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Vector2(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (r[e.id] = n), n;
    },
  };
}
let nextVersion = 0;
function shadowCastingAndTexturingLightsFirst(r, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (r.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (r.map ? 1 : 0)
  );
}
function WebGLLights(r) {
  const e = new UniformsCache(),
    n = ShadowUniformsCache(),
    i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let h = 0; h < 9; h++) i.probe.push(new Vector3());
  const s = new Vector3(),
    a = new Matrix4(),
    o = new Matrix4();
  function l(h) {
    let u = 0,
      d = 0,
      f = 0;
    for (let T = 0; T < 9; T++) i.probe[T].set(0, 0, 0);
    let p = 0,
      g = 0,
      v = 0,
      _ = 0,
      m = 0,
      A = 0,
      S = 0,
      E = 0,
      N = 0,
      w = 0,
      C = 0;
    h.sort(shadowCastingAndTexturingLightsFirst);
    for (let T = 0, M = h.length; T < M; T++) {
      const P = h[T],
        z = P.color,
        O = P.intensity,
        G = P.distance,
        X = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
      if (P.isAmbientLight) (u += z.r * O), (d += z.g * O), (f += z.b * O);
      else if (P.isLightProbe) {
        for (let k = 0; k < 9; k++)
          i.probe[k].addScaledVector(P.sh.coefficients[k], O);
        C++;
      } else if (P.isDirectionalLight) {
        const k = e.get(P);
        if ((k.color.copy(P.color).multiplyScalar(P.intensity), P.castShadow)) {
          const K = P.shadow,
            H = n.get(P);
          (H.shadowIntensity = K.intensity),
            (H.shadowBias = K.bias),
            (H.shadowNormalBias = K.normalBias),
            (H.shadowRadius = K.radius),
            (H.shadowMapSize = K.mapSize),
            (i.directionalShadow[p] = H),
            (i.directionalShadowMap[p] = X),
            (i.directionalShadowMatrix[p] = P.shadow.matrix),
            A++;
        }
        (i.directional[p] = k), p++;
      } else if (P.isSpotLight) {
        const k = e.get(P);
        k.position.setFromMatrixPosition(P.matrixWorld),
          k.color.copy(z).multiplyScalar(O),
          (k.distance = G),
          (k.coneCos = Math.cos(P.angle)),
          (k.penumbraCos = Math.cos(P.angle * (1 - P.penumbra))),
          (k.decay = P.decay),
          (i.spot[v] = k);
        const K = P.shadow;
        if (
          (P.map &&
            ((i.spotLightMap[N] = P.map),
            N++,
            K.updateMatrices(P),
            P.castShadow && w++),
          (i.spotLightMatrix[v] = K.matrix),
          P.castShadow)
        ) {
          const H = n.get(P);
          (H.shadowIntensity = K.intensity),
            (H.shadowBias = K.bias),
            (H.shadowNormalBias = K.normalBias),
            (H.shadowRadius = K.radius),
            (H.shadowMapSize = K.mapSize),
            (i.spotShadow[v] = H),
            (i.spotShadowMap[v] = X),
            E++;
        }
        v++;
      } else if (P.isRectAreaLight) {
        const k = e.get(P);
        k.color.copy(z).multiplyScalar(O),
          k.halfWidth.set(P.width * 0.5, 0, 0),
          k.halfHeight.set(0, P.height * 0.5, 0),
          (i.rectArea[_] = k),
          _++;
      } else if (P.isPointLight) {
        const k = e.get(P);
        if (
          (k.color.copy(P.color).multiplyScalar(P.intensity),
          (k.distance = P.distance),
          (k.decay = P.decay),
          P.castShadow)
        ) {
          const K = P.shadow,
            H = n.get(P);
          (H.shadowIntensity = K.intensity),
            (H.shadowBias = K.bias),
            (H.shadowNormalBias = K.normalBias),
            (H.shadowRadius = K.radius),
            (H.shadowMapSize = K.mapSize),
            (H.shadowCameraNear = K.camera.near),
            (H.shadowCameraFar = K.camera.far),
            (i.pointShadow[g] = H),
            (i.pointShadowMap[g] = X),
            (i.pointShadowMatrix[g] = P.shadow.matrix),
            S++;
        }
        (i.point[g] = k), g++;
      } else if (P.isHemisphereLight) {
        const k = e.get(P);
        k.skyColor.copy(P.color).multiplyScalar(O),
          k.groundColor.copy(P.groundColor).multiplyScalar(O),
          (i.hemi[m] = k),
          m++;
      }
    }
    _ > 0 &&
      (r.has("OES_texture_float_linear") === !0
        ? ((i.rectAreaLTC1 = UniformsLib.LTC_FLOAT_1),
          (i.rectAreaLTC2 = UniformsLib.LTC_FLOAT_2))
        : ((i.rectAreaLTC1 = UniformsLib.LTC_HALF_1),
          (i.rectAreaLTC2 = UniformsLib.LTC_HALF_2))),
      (i.ambient[0] = u),
      (i.ambient[1] = d),
      (i.ambient[2] = f);
    const U = i.hash;
    (U.directionalLength !== p ||
      U.pointLength !== g ||
      U.spotLength !== v ||
      U.rectAreaLength !== _ ||
      U.hemiLength !== m ||
      U.numDirectionalShadows !== A ||
      U.numPointShadows !== S ||
      U.numSpotShadows !== E ||
      U.numSpotMaps !== N ||
      U.numLightProbes !== C) &&
      ((i.directional.length = p),
      (i.spot.length = v),
      (i.rectArea.length = _),
      (i.point.length = g),
      (i.hemi.length = m),
      (i.directionalShadow.length = A),
      (i.directionalShadowMap.length = A),
      (i.pointShadow.length = S),
      (i.pointShadowMap.length = S),
      (i.spotShadow.length = E),
      (i.spotShadowMap.length = E),
      (i.directionalShadowMatrix.length = A),
      (i.pointShadowMatrix.length = S),
      (i.spotLightMatrix.length = E + N - w),
      (i.spotLightMap.length = N),
      (i.numSpotLightShadowsWithMaps = w),
      (i.numLightProbes = C),
      (U.directionalLength = p),
      (U.pointLength = g),
      (U.spotLength = v),
      (U.rectAreaLength = _),
      (U.hemiLength = m),
      (U.numDirectionalShadows = A),
      (U.numPointShadows = S),
      (U.numSpotShadows = E),
      (U.numSpotMaps = N),
      (U.numLightProbes = C),
      (i.version = nextVersion++));
  }
  function c(h, u) {
    let d = 0,
      f = 0,
      p = 0,
      g = 0,
      v = 0;
    const _ = u.matrixWorldInverse;
    for (let m = 0, A = h.length; m < A; m++) {
      const S = h[m];
      if (S.isDirectionalLight) {
        const E = i.directional[d];
        E.direction.setFromMatrixPosition(S.matrixWorld),
          s.setFromMatrixPosition(S.target.matrixWorld),
          E.direction.sub(s),
          E.direction.transformDirection(_),
          d++;
      } else if (S.isSpotLight) {
        const E = i.spot[p];
        E.position.setFromMatrixPosition(S.matrixWorld),
          E.position.applyMatrix4(_),
          E.direction.setFromMatrixPosition(S.matrixWorld),
          s.setFromMatrixPosition(S.target.matrixWorld),
          E.direction.sub(s),
          E.direction.transformDirection(_),
          p++;
      } else if (S.isRectAreaLight) {
        const E = i.rectArea[g];
        E.position.setFromMatrixPosition(S.matrixWorld),
          E.position.applyMatrix4(_),
          o.identity(),
          a.copy(S.matrixWorld),
          a.premultiply(_),
          o.extractRotation(a),
          E.halfWidth.set(S.width * 0.5, 0, 0),
          E.halfHeight.set(0, S.height * 0.5, 0),
          E.halfWidth.applyMatrix4(o),
          E.halfHeight.applyMatrix4(o),
          g++;
      } else if (S.isPointLight) {
        const E = i.point[f];
        E.position.setFromMatrixPosition(S.matrixWorld),
          E.position.applyMatrix4(_),
          f++;
      } else if (S.isHemisphereLight) {
        const E = i.hemi[v];
        E.direction.setFromMatrixPosition(S.matrixWorld),
          E.direction.transformDirection(_),
          v++;
      }
    }
  }
  return {
    setup: l,
    setupView: c,
    state: i,
  };
}
function WebGLRenderState(r) {
  const e = new WebGLLights(r),
    n = [],
    i = [];
  function s(u) {
    (h.camera = u), (n.length = 0), (i.length = 0);
  }
  function a(u) {
    n.push(u);
  }
  function o(u) {
    i.push(u);
  }
  function l() {
    e.setup(n);
  }
  function c(u) {
    e.setupView(n, u);
  }
  const h = {
    lightsArray: n,
    shadowsArray: i,
    camera: null,
    lights: e,
    transmissionRenderTarget: {},
  };
  return {
    init: s,
    state: h,
    setupLights: l,
    setupLightsView: c,
    pushLight: a,
    pushShadow: o,
  };
}
function WebGLRenderStates(r) {
  let e = /* @__PURE__ */ new WeakMap();
  function n(s, a = 0) {
    const o = e.get(s);
    let l;
    return (
      o === void 0
        ? ((l = new WebGLRenderState(r)), e.set(s, [l]))
        : a >= o.length
        ? ((l = new WebGLRenderState(r)), o.push(l))
        : (l = o[a]),
      l
    );
  }
  function i() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i,
  };
}
class MeshDepthMaterial extends Material {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = 3200),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class MeshDistanceMaterial extends Material {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const vertex = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  fragment = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function WebGLShadowMap(r, e, n) {
  let i = new Frustum();
  const s = new Vector2(),
    a = new Vector2(),
    o = new Vector4(),
    l = new MeshDepthMaterial({ depthPacking: 3201 }),
    c = new MeshDistanceMaterial(),
    h = {},
    u = n.maxTextureSize,
    d = { 0: 1, 1: 0, 2: 2 },
    f = new ShaderMaterial({
      defines: {
        VSM_SAMPLES: 8,
      },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Vector2() },
        radius: { value: 4 },
      },
      vertexShader: vertex,
      fragmentShader: fragment,
    }),
    p = f.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const g = new BufferGeometry();
  g.setAttribute(
    "position",
    new BufferAttribute(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const v = new Mesh(g, f),
    _ = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = 1);
  let m = this.type;
  this.render = function (w, C, U) {
    if (
      _.enabled === !1 ||
      (_.autoUpdate === !1 && _.needsUpdate === !1) ||
      w.length === 0
    )
      return;
    const T = r.getRenderTarget(),
      M = r.getActiveCubeFace(),
      P = r.getActiveMipmapLevel(),
      z = r.state;
    z.setBlending(0),
      z.buffers.color.setClear(1, 1, 1, 1),
      z.buffers.depth.setTest(!0),
      z.setScissorTest(!1);
    const O = m !== 3 && this.type === 3,
      G = m === 3 && this.type !== 3;
    for (let X = 0, k = w.length; X < k; X++) {
      const K = w[X],
        H = K.shadow;
      if (H === void 0) {
        console.warn("THREE.WebGLShadowMap:", K, "has no shadow.");
        continue;
      }
      if (H.autoUpdate === !1 && H.needsUpdate === !1) continue;
      s.copy(H.mapSize);
      const se = H.getFrameExtents();
      if (
        (s.multiply(se),
        a.copy(H.mapSize),
        (s.x > u || s.y > u) &&
          (s.x > u &&
            ((a.x = Math.floor(u / se.x)),
            (s.x = a.x * se.x),
            (H.mapSize.x = a.x)),
          s.y > u &&
            ((a.y = Math.floor(u / se.y)),
            (s.y = a.y * se.y),
            (H.mapSize.y = a.y))),
        H.map === null || O === !0 || G === !0)
      ) {
        const me = this.type !== 3 ? { minFilter: 1003, magFilter: 1003 } : {};
        H.map !== null && H.map.dispose(),
          (H.map = new WebGLRenderTarget(s.x, s.y, me)),
          (H.map.texture.name = K.name + ".shadowMap"),
          H.camera.updateProjectionMatrix();
      }
      r.setRenderTarget(H.map), r.clear();
      const pe = H.getViewportCount();
      for (let me = 0; me < pe; me++) {
        const Ie = H.getViewport(me);
        o.set(a.x * Ie.x, a.y * Ie.y, a.x * Ie.z, a.y * Ie.w),
          z.viewport(o),
          H.updateMatrices(K, me),
          (i = H.getFrustum()),
          E(C, U, H.camera, K, this.type);
      }
      H.isPointLightShadow !== !0 && this.type === 3 && A(H, U),
        (H.needsUpdate = !1);
    }
    (m = this.type), (_.needsUpdate = !1), r.setRenderTarget(T, M, P);
  };
  function A(w, C) {
    const U = e.update(v);
    f.defines.VSM_SAMPLES !== w.blurSamples &&
      ((f.defines.VSM_SAMPLES = w.blurSamples),
      (p.defines.VSM_SAMPLES = w.blurSamples),
      (f.needsUpdate = !0),
      (p.needsUpdate = !0)),
      w.mapPass === null && (w.mapPass = new WebGLRenderTarget(s.x, s.y)),
      (f.uniforms.shadow_pass.value = w.map.texture),
      (f.uniforms.resolution.value = w.mapSize),
      (f.uniforms.radius.value = w.radius),
      r.setRenderTarget(w.mapPass),
      r.clear(),
      r.renderBufferDirect(C, null, U, f, v, null),
      (p.uniforms.shadow_pass.value = w.mapPass.texture),
      (p.uniforms.resolution.value = w.mapSize),
      (p.uniforms.radius.value = w.radius),
      r.setRenderTarget(w.map),
      r.clear(),
      r.renderBufferDirect(C, null, U, p, v, null);
  }
  function S(w, C, U, T) {
    let M = null;
    const P =
      U.isPointLight === !0 ? w.customDistanceMaterial : w.customDepthMaterial;
    if (P !== void 0) M = P;
    else if (
      ((M = U.isPointLight === !0 ? c : l),
      (r.localClippingEnabled &&
        C.clipShadows === !0 &&
        Array.isArray(C.clippingPlanes) &&
        C.clippingPlanes.length !== 0) ||
        (C.displacementMap && C.displacementScale !== 0) ||
        (C.alphaMap && C.alphaTest > 0) ||
        (C.map && C.alphaTest > 0))
    ) {
      const z = M.uuid,
        O = C.uuid;
      let G = h[z];
      G === void 0 && ((G = {}), (h[z] = G));
      let X = G[O];
      X === void 0 &&
        ((X = M.clone()), (G[O] = X), C.addEventListener("dispose", N)),
        (M = X);
    }
    if (
      ((M.visible = C.visible),
      (M.wireframe = C.wireframe),
      T === 3
        ? (M.side = C.shadowSide !== null ? C.shadowSide : C.side)
        : (M.side = C.shadowSide !== null ? C.shadowSide : d[C.side]),
      (M.alphaMap = C.alphaMap),
      (M.alphaTest = C.alphaTest),
      (M.map = C.map),
      (M.clipShadows = C.clipShadows),
      (M.clippingPlanes = C.clippingPlanes),
      (M.clipIntersection = C.clipIntersection),
      (M.displacementMap = C.displacementMap),
      (M.displacementScale = C.displacementScale),
      (M.displacementBias = C.displacementBias),
      (M.wireframeLinewidth = C.wireframeLinewidth),
      (M.linewidth = C.linewidth),
      U.isPointLight === !0 && M.isMeshDistanceMaterial === !0)
    ) {
      const z = r.properties.get(M);
      z.light = U;
    }
    return M;
  }
  function E(w, C, U, T, M) {
    if (w.visible === !1) return;
    if (
      w.layers.test(C.layers) &&
      (w.isMesh || w.isLine || w.isPoints) &&
      (w.castShadow || (w.receiveShadow && M === 3)) &&
      (!w.frustumCulled || i.intersectsObject(w))
    ) {
      w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse, w.matrixWorld);
      const O = e.update(w),
        G = w.material;
      if (Array.isArray(G)) {
        const X = O.groups;
        for (let k = 0, K = X.length; k < K; k++) {
          const H = X[k],
            se = G[H.materialIndex];
          if (se && se.visible) {
            const pe = S(w, se, T, M);
            w.onBeforeShadow(r, w, C, U, O, pe, H),
              r.renderBufferDirect(U, null, O, pe, w, H),
              w.onAfterShadow(r, w, C, U, O, pe, H);
          }
        }
      } else if (G.visible) {
        const X = S(w, G, T, M);
        w.onBeforeShadow(r, w, C, U, O, X, null),
          r.renderBufferDirect(U, null, O, X, w, null),
          w.onAfterShadow(r, w, C, U, O, X, null);
      }
    }
    const z = w.children;
    for (let O = 0, G = z.length; O < G; O++) E(z[O], C, U, T, M);
  }
  function N(w) {
    w.target.removeEventListener("dispose", N);
    for (const U in h) {
      const T = h[U],
        M = w.target.uuid;
      M in T && (T[M].dispose(), delete T[M]);
    }
  }
}
function WebGLState(r) {
  function e() {
    let L = !1;
    const ee = new Vector4();
    let $ = null;
    const q = new Vector4(0, 0, 0, 0);
    return {
      setMask: function (ie) {
        $ !== ie && !L && (r.colorMask(ie, ie, ie, ie), ($ = ie));
      },
      setLocked: function (ie) {
        L = ie;
      },
      setClear: function (ie, Se, Ue, Ye, Ke) {
        Ke === !0 && ((ie *= Ye), (Se *= Ye), (Ue *= Ye)),
          ee.set(ie, Se, Ue, Ye),
          q.equals(ee) === !1 && (r.clearColor(ie, Se, Ue, Ye), q.copy(ee));
      },
      reset: function () {
        (L = !1), ($ = null), q.set(-1, 0, 0, 0);
      },
    };
  }
  function n() {
    let L = !1,
      ee = null,
      $ = null,
      q = null;
    return {
      setTest: function (ie) {
        ie ? ue(r.DEPTH_TEST) : le(r.DEPTH_TEST);
      },
      setMask: function (ie) {
        ee !== ie && !L && (r.depthMask(ie), (ee = ie));
      },
      setFunc: function (ie) {
        if ($ !== ie) {
          switch (ie) {
            case 0:
              r.depthFunc(r.NEVER);
              break;
            case 1:
              r.depthFunc(r.ALWAYS);
              break;
            case 2:
              r.depthFunc(r.LESS);
              break;
            case 3:
              r.depthFunc(r.LEQUAL);
              break;
            case 4:
              r.depthFunc(r.EQUAL);
              break;
            case 5:
              r.depthFunc(r.GEQUAL);
              break;
            case 6:
              r.depthFunc(r.GREATER);
              break;
            case 7:
              r.depthFunc(r.NOTEQUAL);
              break;
            default:
              r.depthFunc(r.LEQUAL);
          }
          $ = ie;
        }
      },
      setLocked: function (ie) {
        L = ie;
      },
      setClear: function (ie) {
        q !== ie && (r.clearDepth(ie), (q = ie));
      },
      reset: function () {
        (L = !1), (ee = null), ($ = null), (q = null);
      },
    };
  }
  function i() {
    let L = !1,
      ee = null,
      $ = null,
      q = null,
      ie = null,
      Se = null,
      Ue = null,
      Ye = null,
      Ke = null;
    return {
      setTest: function (Ne) {
        L || (Ne ? ue(r.STENCIL_TEST) : le(r.STENCIL_TEST));
      },
      setMask: function (Ne) {
        ee !== Ne && !L && (r.stencilMask(Ne), (ee = Ne));
      },
      setFunc: function (Ne, it, nt) {
        ($ !== Ne || q !== it || ie !== nt) &&
          (r.stencilFunc(Ne, it, nt), ($ = Ne), (q = it), (ie = nt));
      },
      setOp: function (Ne, it, nt) {
        (Se !== Ne || Ue !== it || Ye !== nt) &&
          (r.stencilOp(Ne, it, nt), (Se = Ne), (Ue = it), (Ye = nt));
      },
      setLocked: function (Ne) {
        L = Ne;
      },
      setClear: function (Ne) {
        Ke !== Ne && (r.clearStencil(Ne), (Ke = Ne));
      },
      reset: function () {
        (L = !1),
          (ee = null),
          ($ = null),
          (q = null),
          (ie = null),
          (Se = null),
          (Ue = null),
          (Ye = null),
          (Ke = null);
      },
    };
  }
  const s = new e(),
    a = new n(),
    o = new i(),
    l = /* @__PURE__ */ new WeakMap(),
    c = /* @__PURE__ */ new WeakMap();
  let h = {},
    u = {},
    d = /* @__PURE__ */ new WeakMap(),
    f = [],
    p = null,
    g = !1,
    v = null,
    _ = null,
    m = null,
    A = null,
    S = null,
    E = null,
    N = null,
    w = new Color(0, 0, 0),
    C = 0,
    U = !1,
    T = null,
    M = null,
    P = null,
    z = null,
    O = null;
  const G = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let X = !1,
    k = 0;
  const K = r.getParameter(r.VERSION);
  K.indexOf("WebGL") !== -1
    ? ((k = parseFloat(/^WebGL (\d)/.exec(K)[1])), (X = k >= 1))
    : K.indexOf("OpenGL ES") !== -1 &&
      ((k = parseFloat(/^OpenGL ES (\d)/.exec(K)[1])), (X = k >= 2));
  let H = null,
    se = {};
  const pe = r.getParameter(r.SCISSOR_BOX),
    me = r.getParameter(r.VIEWPORT),
    Ie = new Vector4().fromArray(pe),
    ze = new Vector4().fromArray(me);
  function W(L, ee, $, q) {
    const ie = new Uint8Array(4),
      Se = r.createTexture();
    r.bindTexture(L, Se),
      r.texParameteri(L, r.TEXTURE_MIN_FILTER, r.NEAREST),
      r.texParameteri(L, r.TEXTURE_MAG_FILTER, r.NEAREST);
    for (let Ue = 0; Ue < $; Ue++)
      L === r.TEXTURE_3D || L === r.TEXTURE_2D_ARRAY
        ? r.texImage3D(ee, 0, r.RGBA, 1, 1, q, 0, r.RGBA, r.UNSIGNED_BYTE, ie)
        : r.texImage2D(
            ee + Ue,
            0,
            r.RGBA,
            1,
            1,
            0,
            r.RGBA,
            r.UNSIGNED_BYTE,
            ie
          );
    return Se;
  }
  const J = {};
  (J[r.TEXTURE_2D] = W(r.TEXTURE_2D, r.TEXTURE_2D, 1)),
    (J[r.TEXTURE_CUBE_MAP] = W(
      r.TEXTURE_CUBE_MAP,
      r.TEXTURE_CUBE_MAP_POSITIVE_X,
      6
    )),
    (J[r.TEXTURE_2D_ARRAY] = W(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1)),
    (J[r.TEXTURE_3D] = W(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1)),
    s.setClear(0, 0, 0, 1),
    a.setClear(1),
    o.setClear(0),
    ue(r.DEPTH_TEST),
    a.setFunc(3),
    Ge(!1),
    ge(1),
    ue(r.CULL_FACE),
    Xe(0);
  function ue(L) {
    h[L] !== !0 && (r.enable(L), (h[L] = !0));
  }
  function le(L) {
    h[L] !== !1 && (r.disable(L), (h[L] = !1));
  }
  function be(L, ee) {
    return u[L] !== ee
      ? (r.bindFramebuffer(L, ee),
        (u[L] = ee),
        L === r.DRAW_FRAMEBUFFER && (u[r.FRAMEBUFFER] = ee),
        L === r.FRAMEBUFFER && (u[r.DRAW_FRAMEBUFFER] = ee),
        !0)
      : !1;
  }
  function Re(L, ee) {
    let $ = f,
      q = !1;
    if (L) {
      ($ = d.get(ee)), $ === void 0 && (($ = []), d.set(ee, $));
      const ie = L.textures;
      if ($.length !== ie.length || $[0] !== r.COLOR_ATTACHMENT0) {
        for (let Se = 0, Ue = ie.length; Se < Ue; Se++)
          $[Se] = r.COLOR_ATTACHMENT0 + Se;
        ($.length = ie.length), (q = !0);
      }
    } else $[0] !== r.BACK && (($[0] = r.BACK), (q = !0));
    q && r.drawBuffers($);
  }
  function Le(L) {
    return p !== L ? (r.useProgram(L), (p = L), !0) : !1;
  }
  const He = {
    100: r.FUNC_ADD,
    101: r.FUNC_SUBTRACT,
    102: r.FUNC_REVERSE_SUBTRACT,
  };
  (He[103] = r.MIN), (He[104] = r.MAX);
  const R = {
    200: r.ZERO,
    201: r.ONE,
    202: r.SRC_COLOR,
    204: r.SRC_ALPHA,
    210: r.SRC_ALPHA_SATURATE,
    208: r.DST_COLOR,
    206: r.DST_ALPHA,
    203: r.ONE_MINUS_SRC_COLOR,
    205: r.ONE_MINUS_SRC_ALPHA,
    209: r.ONE_MINUS_DST_COLOR,
    207: r.ONE_MINUS_DST_ALPHA,
    211: r.CONSTANT_COLOR,
    212: r.ONE_MINUS_CONSTANT_COLOR,
    213: r.CONSTANT_ALPHA,
    214: r.ONE_MINUS_CONSTANT_ALPHA,
  };
  function Xe(L, ee, $, q, ie, Se, Ue, Ye, Ke, Ne) {
    if (L === 0) {
      g === !0 && (le(r.BLEND), (g = !1));
      return;
    }
    if ((g === !1 && (ue(r.BLEND), (g = !0)), L !== 5)) {
      if (L !== v || Ne !== U) {
        if (
          ((_ !== 100 || S !== 100) &&
            (r.blendEquation(r.FUNC_ADD), (_ = 100), (S = 100)),
          Ne)
        )
          switch (L) {
            case 1:
              r.blendFuncSeparate(
                r.ONE,
                r.ONE_MINUS_SRC_ALPHA,
                r.ONE,
                r.ONE_MINUS_SRC_ALPHA
              );
              break;
            case 2:
              r.blendFunc(r.ONE, r.ONE);
              break;
            case 3:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case 4:
              r.blendFuncSeparate(r.ZERO, r.SRC_COLOR, r.ZERO, r.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        else
          switch (L) {
            case 1:
              r.blendFuncSeparate(
                r.SRC_ALPHA,
                r.ONE_MINUS_SRC_ALPHA,
                r.ONE,
                r.ONE_MINUS_SRC_ALPHA
              );
              break;
            case 2:
              r.blendFunc(r.SRC_ALPHA, r.ONE);
              break;
            case 3:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case 4:
              r.blendFunc(r.ZERO, r.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        (m = null),
          (A = null),
          (E = null),
          (N = null),
          w.set(0, 0, 0),
          (C = 0),
          (v = L),
          (U = Ne);
      }
      return;
    }
    (ie = ie || ee),
      (Se = Se || $),
      (Ue = Ue || q),
      (ee !== _ || ie !== S) &&
        (r.blendEquationSeparate(He[ee], He[ie]), (_ = ee), (S = ie)),
      ($ !== m || q !== A || Se !== E || Ue !== N) &&
        (r.blendFuncSeparate(R[$], R[q], R[Se], R[Ue]),
        (m = $),
        (A = q),
        (E = Se),
        (N = Ue)),
      (Ye.equals(w) === !1 || Ke !== C) &&
        (r.blendColor(Ye.r, Ye.g, Ye.b, Ke), w.copy(Ye), (C = Ke)),
      (v = L),
      (U = !1);
  }
  function Ve(L, ee) {
    L.side === 2 ? le(r.CULL_FACE) : ue(r.CULL_FACE);
    let $ = L.side === 1;
    ee && ($ = !$),
      Ge($),
      L.blending === 1 && L.transparent === !1
        ? Xe(0)
        : Xe(
            L.blending,
            L.blendEquation,
            L.blendSrc,
            L.blendDst,
            L.blendEquationAlpha,
            L.blendSrcAlpha,
            L.blendDstAlpha,
            L.blendColor,
            L.blendAlpha,
            L.premultipliedAlpha
          ),
      a.setFunc(L.depthFunc),
      a.setTest(L.depthTest),
      a.setMask(L.depthWrite),
      s.setMask(L.colorWrite);
    const q = L.stencilWrite;
    o.setTest(q),
      q &&
        (o.setMask(L.stencilWriteMask),
        o.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask),
        o.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)),
      Te(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits),
      L.alphaToCoverage === !0
        ? ue(r.SAMPLE_ALPHA_TO_COVERAGE)
        : le(r.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Ge(L) {
    T !== L && (L ? r.frontFace(r.CW) : r.frontFace(r.CCW), (T = L));
  }
  function ge(L) {
    L !== 0
      ? (ue(r.CULL_FACE),
        L !== M &&
          (L === 1
            ? r.cullFace(r.BACK)
            : L === 2
            ? r.cullFace(r.FRONT)
            : r.cullFace(r.FRONT_AND_BACK)))
      : le(r.CULL_FACE),
      (M = L);
  }
  function qe(L) {
    L !== P && (X && r.lineWidth(L), (P = L));
  }
  function Te(L, ee, $) {
    L
      ? (ue(r.POLYGON_OFFSET_FILL),
        (z !== ee || O !== $) && (r.polygonOffset(ee, $), (z = ee), (O = $)))
      : le(r.POLYGON_OFFSET_FILL);
  }
  function we(L) {
    L ? ue(r.SCISSOR_TEST) : le(r.SCISSOR_TEST);
  }
  function b(L) {
    L === void 0 && (L = r.TEXTURE0 + G - 1),
      H !== L && (r.activeTexture(L), (H = L));
  }
  function x(L, ee, $) {
    $ === void 0 && (H === null ? ($ = r.TEXTURE0 + G - 1) : ($ = H));
    let q = se[$];
    q === void 0 && ((q = { type: void 0, texture: void 0 }), (se[$] = q)),
      (q.type !== L || q.texture !== ee) &&
        (H !== $ && (r.activeTexture($), (H = $)),
        r.bindTexture(L, ee || J[L]),
        (q.type = L),
        (q.texture = ee));
  }
  function V() {
    const L = se[H];
    L !== void 0 &&
      L.type !== void 0 &&
      (r.bindTexture(L.type, null), (L.type = void 0), (L.texture = void 0));
  }
  function Z() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function j() {
    try {
      r.compressedTexImage3D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Y() {
    try {
      r.texSubImage2D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ve() {
    try {
      r.texSubImage3D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function re() {
    try {
      r.compressedTexSubImage2D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ce() {
    try {
      r.compressedTexSubImage3D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Ce() {
    try {
      r.texStorage2D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Q() {
    try {
      r.texStorage3D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function oe() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function De() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Ee(L) {
    Ie.equals(L) === !1 && (r.scissor(L.x, L.y, L.z, L.w), Ie.copy(L));
  }
  function he(L) {
    ze.equals(L) === !1 && (r.viewport(L.x, L.y, L.z, L.w), ze.copy(L));
  }
  function Ae(L, ee) {
    let $ = c.get(ee);
    $ === void 0 && (($ = /* @__PURE__ */ new WeakMap()), c.set(ee, $));
    let q = $.get(L);
    q === void 0 && ((q = r.getUniformBlockIndex(ee, L.name)), $.set(L, q));
  }
  function Pe(L, ee) {
    const q = c.get(ee).get(L);
    l.get(ee) !== q &&
      (r.uniformBlockBinding(ee, q, L.__bindingPointIndex), l.set(ee, q));
  }
  function ke() {
    r.disable(r.BLEND),
      r.disable(r.CULL_FACE),
      r.disable(r.DEPTH_TEST),
      r.disable(r.POLYGON_OFFSET_FILL),
      r.disable(r.SCISSOR_TEST),
      r.disable(r.STENCIL_TEST),
      r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),
      r.blendEquation(r.FUNC_ADD),
      r.blendFunc(r.ONE, r.ZERO),
      r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO),
      r.blendColor(0, 0, 0, 0),
      r.colorMask(!0, !0, !0, !0),
      r.clearColor(0, 0, 0, 0),
      r.depthMask(!0),
      r.depthFunc(r.LESS),
      r.clearDepth(1),
      r.stencilMask(4294967295),
      r.stencilFunc(r.ALWAYS, 0, 4294967295),
      r.stencilOp(r.KEEP, r.KEEP, r.KEEP),
      r.clearStencil(0),
      r.cullFace(r.BACK),
      r.frontFace(r.CCW),
      r.polygonOffset(0, 0),
      r.activeTexture(r.TEXTURE0),
      r.bindFramebuffer(r.FRAMEBUFFER, null),
      r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null),
      r.bindFramebuffer(r.READ_FRAMEBUFFER, null),
      r.useProgram(null),
      r.lineWidth(1),
      r.scissor(0, 0, r.canvas.width, r.canvas.height),
      r.viewport(0, 0, r.canvas.width, r.canvas.height),
      (h = {}),
      (H = null),
      (se = {}),
      (u = {}),
      (d = /* @__PURE__ */ new WeakMap()),
      (f = []),
      (p = null),
      (g = !1),
      (v = null),
      (_ = null),
      (m = null),
      (A = null),
      (S = null),
      (E = null),
      (N = null),
      (w = new Color(0, 0, 0)),
      (C = 0),
      (U = !1),
      (T = null),
      (M = null),
      (P = null),
      (z = null),
      (O = null),
      Ie.set(0, 0, r.canvas.width, r.canvas.height),
      ze.set(0, 0, r.canvas.width, r.canvas.height),
      s.reset(),
      a.reset(),
      o.reset();
  }
  return {
    buffers: {
      color: s,
      depth: a,
      stencil: o,
    },
    enable: ue,
    disable: le,
    bindFramebuffer: be,
    drawBuffers: Re,
    useProgram: Le,
    setBlending: Xe,
    setMaterial: Ve,
    setFlipSided: Ge,
    setCullFace: ge,
    setLineWidth: qe,
    setPolygonOffset: Te,
    setScissorTest: we,
    activeTexture: b,
    bindTexture: x,
    unbindTexture: V,
    compressedTexImage2D: Z,
    compressedTexImage3D: j,
    texImage2D: oe,
    texImage3D: De,
    updateUBOMapping: Ae,
    uniformBlockBinding: Pe,
    texStorage2D: Ce,
    texStorage3D: Q,
    texSubImage2D: Y,
    texSubImage3D: ve,
    compressedTexSubImage2D: re,
    compressedTexSubImage3D: ce,
    scissor: Ee,
    viewport: he,
    reset: ke,
  };
}
function getByteLength(r, e, n, i) {
  const s = getTextureTypeByteLength(i);
  switch (n) {
    case 1021:
      return r * e;
    case 1024:
      return r * e;
    case 1025:
      return r * e * 2;
    case 1028:
      return ((r * e) / s.components) * s.byteLength;
    case 1029:
      return ((r * e) / s.components) * s.byteLength;
    case 1030:
      return ((r * e * 2) / s.components) * s.byteLength;
    case 1031:
      return ((r * e * 2) / s.components) * s.byteLength;
    case 1022:
      return ((r * e * 3) / s.components) * s.byteLength;
    case 1023:
      return ((r * e * 4) / s.components) * s.byteLength;
    case 1033:
      return ((r * e * 4) / s.components) * s.byteLength;
    case 33776:
    case 33777:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 33778:
    case 33779:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 35841:
    case 35843:
      return (Math.max(r, 16) * Math.max(e, 8)) / 4;
    case 35840:
    case 35842:
      return (Math.max(r, 8) * Math.max(e, 8)) / 2;
    case 36196:
    case 37492:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 37496:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 37808:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 37809:
      return Math.floor((r + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case 37810:
      return Math.floor((r + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case 37811:
      return Math.floor((r + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case 37812:
      return Math.floor((r + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case 37813:
      return Math.floor((r + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case 37814:
      return Math.floor((r + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case 37815:
      return Math.floor((r + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case 37816:
      return Math.floor((r + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case 37817:
      return Math.floor((r + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case 37818:
      return Math.floor((r + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case 37819:
      return Math.floor((r + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case 37820:
      return Math.floor((r + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case 37821:
      return Math.floor((r + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case 36492:
    case 36494:
    case 36495:
      return Math.ceil(r / 4) * Math.ceil(e / 4) * 16;
    case 36283:
    case 36284:
      return Math.ceil(r / 4) * Math.ceil(e / 4) * 8;
    case 36285:
    case 36286:
      return Math.ceil(r / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${n} format.`);
}
function getTextureTypeByteLength(r) {
  switch (r) {
    case 1009:
    case 1010:
      return { byteLength: 1, components: 1 };
    case 1012:
    case 1011:
    case 1016:
      return { byteLength: 2, components: 1 };
    case 1017:
    case 1018:
      return { byteLength: 2, components: 4 };
    case 1014:
    case 1013:
    case 1015:
      return { byteLength: 4, components: 1 };
    case 35902:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${r}.`);
}
function WebGLTextures(r, e, n, i, s, a, o) {
  const l = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    c =
      typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    h = new Vector2(),
    u = /* @__PURE__ */ new WeakMap();
  let d;
  const f = /* @__PURE__ */ new WeakMap();
  let p = !1;
  try {
    p =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function g(b, x) {
    return p
      ? // eslint-disable-next-line compat/compat
        new OffscreenCanvas(b, x)
      : createElementNS("canvas");
  }
  function v(b, x, V) {
    let Z = 1;
    const j = we(b);
    if (
      ((j.width > V || j.height > V) && (Z = V / Math.max(j.width, j.height)),
      Z < 1)
    )
      if (
        (typeof HTMLImageElement < "u" && b instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && b instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && b instanceof ImageBitmap) ||
        (typeof VideoFrame < "u" && b instanceof VideoFrame)
      ) {
        const Y = Math.floor(Z * j.width),
          ve = Math.floor(Z * j.height);
        d === void 0 && (d = g(Y, ve));
        const re = x ? g(Y, ve) : d;
        return (
          (re.width = Y),
          (re.height = ve),
          re.getContext("2d").drawImage(b, 0, 0, Y, ve),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              j.width +
              "x" +
              j.height +
              ") to (" +
              Y +
              "x" +
              ve +
              ")."
          ),
          re
        );
      } else
        return (
          "data" in b &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                j.width +
                "x" +
                j.height +
                ")."
            ),
          b
        );
    return b;
  }
  function _(b) {
    return b.generateMipmaps && b.minFilter !== 1003 && b.minFilter !== 1006;
  }
  function m(b) {
    r.generateMipmap(b);
  }
  function A(b, x, V, Z, j = !1) {
    if (b !== null) {
      if (r[b] !== void 0) return r[b];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          b +
          "'"
      );
    }
    let Y = x;
    if (
      (x === r.RED &&
        (V === r.FLOAT && (Y = r.R32F),
        V === r.HALF_FLOAT && (Y = r.R16F),
        V === r.UNSIGNED_BYTE && (Y = r.R8)),
      x === r.RED_INTEGER &&
        (V === r.UNSIGNED_BYTE && (Y = r.R8UI),
        V === r.UNSIGNED_SHORT && (Y = r.R16UI),
        V === r.UNSIGNED_INT && (Y = r.R32UI),
        V === r.BYTE && (Y = r.R8I),
        V === r.SHORT && (Y = r.R16I),
        V === r.INT && (Y = r.R32I)),
      x === r.RG &&
        (V === r.FLOAT && (Y = r.RG32F),
        V === r.HALF_FLOAT && (Y = r.RG16F),
        V === r.UNSIGNED_BYTE && (Y = r.RG8)),
      x === r.RG_INTEGER &&
        (V === r.UNSIGNED_BYTE && (Y = r.RG8UI),
        V === r.UNSIGNED_SHORT && (Y = r.RG16UI),
        V === r.UNSIGNED_INT && (Y = r.RG32UI),
        V === r.BYTE && (Y = r.RG8I),
        V === r.SHORT && (Y = r.RG16I),
        V === r.INT && (Y = r.RG32I)),
      x === r.RGB && V === r.UNSIGNED_INT_5_9_9_9_REV && (Y = r.RGB9_E5),
      x === r.RGBA)
    ) {
      const ve = j ? LinearTransfer : ColorManagement.getTransfer(Z);
      V === r.FLOAT && (Y = r.RGBA32F),
        V === r.HALF_FLOAT && (Y = r.RGBA16F),
        V === r.UNSIGNED_BYTE &&
          (Y = ve === SRGBTransfer ? r.SRGB8_ALPHA8 : r.RGBA8),
        V === r.UNSIGNED_SHORT_4_4_4_4 && (Y = r.RGBA4),
        V === r.UNSIGNED_SHORT_5_5_5_1 && (Y = r.RGB5_A1);
    }
    return (
      (Y === r.R16F ||
        Y === r.R32F ||
        Y === r.RG16F ||
        Y === r.RG32F ||
        Y === r.RGBA16F ||
        Y === r.RGBA32F) &&
        e.get("EXT_color_buffer_float"),
      Y
    );
  }
  function S(b, x) {
    let V;
    return (
      b
        ? x === null || x === 1014 || x === 1020
          ? (V = r.DEPTH24_STENCIL8)
          : x === 1015
          ? (V = r.DEPTH32F_STENCIL8)
          : x === 1012 &&
            ((V = r.DEPTH24_STENCIL8),
            console.warn(
              "DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment."
            ))
        : x === null || x === 1014 || x === 1020
        ? (V = r.DEPTH_COMPONENT24)
        : x === 1015
        ? (V = r.DEPTH_COMPONENT32F)
        : x === 1012 && (V = r.DEPTH_COMPONENT16),
      V
    );
  }
  function E(b, x) {
    return _(b) === !0 ||
      (b.isFramebufferTexture && b.minFilter !== 1003 && b.minFilter !== 1006)
      ? Math.log2(Math.max(x.width, x.height)) + 1
      : b.mipmaps !== void 0 && b.mipmaps.length > 0
      ? b.mipmaps.length
      : b.isCompressedTexture && Array.isArray(b.image)
      ? x.mipmaps.length
      : 1;
  }
  function N(b) {
    const x = b.target;
    x.removeEventListener("dispose", N), C(x), x.isVideoTexture && u.delete(x);
  }
  function w(b) {
    const x = b.target;
    x.removeEventListener("dispose", w), T(x);
  }
  function C(b) {
    const x = i.get(b);
    if (x.__webglInit === void 0) return;
    const V = b.source,
      Z = f.get(V);
    if (Z) {
      const j = Z[x.__cacheKey];
      j.usedTimes--,
        j.usedTimes === 0 && U(b),
        Object.keys(Z).length === 0 && f.delete(V);
    }
    i.remove(b);
  }
  function U(b) {
    const x = i.get(b);
    r.deleteTexture(x.__webglTexture);
    const V = b.source,
      Z = f.get(V);
    delete Z[x.__cacheKey], o.memory.textures--;
  }
  function T(b) {
    const x = i.get(b);
    if ((b.depthTexture && b.depthTexture.dispose(), b.isWebGLCubeRenderTarget))
      for (let Z = 0; Z < 6; Z++) {
        if (Array.isArray(x.__webglFramebuffer[Z]))
          for (let j = 0; j < x.__webglFramebuffer[Z].length; j++)
            r.deleteFramebuffer(x.__webglFramebuffer[Z][j]);
        else r.deleteFramebuffer(x.__webglFramebuffer[Z]);
        x.__webglDepthbuffer && r.deleteRenderbuffer(x.__webglDepthbuffer[Z]);
      }
    else {
      if (Array.isArray(x.__webglFramebuffer))
        for (let Z = 0; Z < x.__webglFramebuffer.length; Z++)
          r.deleteFramebuffer(x.__webglFramebuffer[Z]);
      else r.deleteFramebuffer(x.__webglFramebuffer);
      if (
        (x.__webglDepthbuffer && r.deleteRenderbuffer(x.__webglDepthbuffer),
        x.__webglMultisampledFramebuffer &&
          r.deleteFramebuffer(x.__webglMultisampledFramebuffer),
        x.__webglColorRenderbuffer)
      )
        for (let Z = 0; Z < x.__webglColorRenderbuffer.length; Z++)
          x.__webglColorRenderbuffer[Z] &&
            r.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);
      x.__webglDepthRenderbuffer &&
        r.deleteRenderbuffer(x.__webglDepthRenderbuffer);
    }
    const V = b.textures;
    for (let Z = 0, j = V.length; Z < j; Z++) {
      const Y = i.get(V[Z]);
      Y.__webglTexture &&
        (r.deleteTexture(Y.__webglTexture), o.memory.textures--),
        i.remove(V[Z]);
    }
    i.remove(b);
  }
  let M = 0;
  function P() {
    M = 0;
  }
  function z() {
    const b = M;
    return (
      b >= s.maxTextures &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            b +
            " texture units while this GPU supports only " +
            s.maxTextures
        ),
      (M += 1),
      b
    );
  }
  function O(b) {
    const x = [];
    return (
      x.push(b.wrapS),
      x.push(b.wrapT),
      x.push(b.wrapR || 0),
      x.push(b.magFilter),
      x.push(b.minFilter),
      x.push(b.anisotropy),
      x.push(b.internalFormat),
      x.push(b.format),
      x.push(b.type),
      x.push(b.generateMipmaps),
      x.push(b.premultiplyAlpha),
      x.push(b.flipY),
      x.push(b.unpackAlignment),
      x.push(b.colorSpace),
      x.join()
    );
  }
  function G(b, x) {
    const V = i.get(b);
    if (
      (b.isVideoTexture && qe(b),
      b.isRenderTargetTexture === !1 &&
        b.version > 0 &&
        V.__version !== b.version)
    ) {
      const Z = b.image;
      if (Z === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found."
        );
      else if (Z.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
        );
      else {
        ze(V, b, x);
        return;
      }
    }
    n.bindTexture(r.TEXTURE_2D, V.__webglTexture, r.TEXTURE0 + x);
  }
  function X(b, x) {
    const V = i.get(b);
    if (b.version > 0 && V.__version !== b.version) {
      ze(V, b, x);
      return;
    }
    n.bindTexture(r.TEXTURE_2D_ARRAY, V.__webglTexture, r.TEXTURE0 + x);
  }
  function k(b, x) {
    const V = i.get(b);
    if (b.version > 0 && V.__version !== b.version) {
      ze(V, b, x);
      return;
    }
    n.bindTexture(r.TEXTURE_3D, V.__webglTexture, r.TEXTURE0 + x);
  }
  function K(b, x) {
    const V = i.get(b);
    if (b.version > 0 && V.__version !== b.version) {
      W(V, b, x);
      return;
    }
    n.bindTexture(r.TEXTURE_CUBE_MAP, V.__webglTexture, r.TEXTURE0 + x);
  }
  const H = {
      1e3: r.REPEAT,
      1001: r.CLAMP_TO_EDGE,
      1002: r.MIRRORED_REPEAT,
    },
    se = {
      1003: r.NEAREST,
      1004: r.NEAREST_MIPMAP_NEAREST,
      1005: r.NEAREST_MIPMAP_LINEAR,
      1006: r.LINEAR,
      1007: r.LINEAR_MIPMAP_NEAREST,
      1008: r.LINEAR_MIPMAP_LINEAR,
    },
    pe = {
      512: r.NEVER,
      519: r.ALWAYS,
      513: r.LESS,
      515: r.LEQUAL,
      514: r.EQUAL,
      518: r.GEQUAL,
      516: r.GREATER,
      517: r.NOTEQUAL,
    };
  function me(b, x) {
    if (
      (x.type === 1015 &&
        e.has("OES_texture_float_linear") === !1 &&
        (x.magFilter === 1006 ||
          x.magFilter === 1007 ||
          x.magFilter === 1005 ||
          x.magFilter === 1008 ||
          x.minFilter === 1006 ||
          x.minFilter === 1007 ||
          x.minFilter === 1005 ||
          x.minFilter === 1008) &&
        console.warn(
          "THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."
        ),
      r.texParameteri(b, r.TEXTURE_WRAP_S, H[x.wrapS]),
      r.texParameteri(b, r.TEXTURE_WRAP_T, H[x.wrapT]),
      (b === r.TEXTURE_3D || b === r.TEXTURE_2D_ARRAY) &&
        r.texParameteri(b, r.TEXTURE_WRAP_R, H[x.wrapR]),
      r.texParameteri(b, r.TEXTURE_MAG_FILTER, se[x.magFilter]),
      r.texParameteri(b, r.TEXTURE_MIN_FILTER, se[x.minFilter]),
      x.compareFunction &&
        (r.texParameteri(b, r.TEXTURE_COMPARE_MODE, r.COMPARE_REF_TO_TEXTURE),
        r.texParameteri(b, r.TEXTURE_COMPARE_FUNC, pe[x.compareFunction])),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      if (
        x.magFilter === 1003 ||
        (x.minFilter !== 1005 && x.minFilter !== 1008) ||
        (x.type === 1015 && e.has("OES_texture_float_linear") === !1)
      )
        return;
      if (x.anisotropy > 1 || i.get(x).__currentAnisotropy) {
        const V = e.get("EXT_texture_filter_anisotropic");
        r.texParameterf(
          b,
          V.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(x.anisotropy, s.getMaxAnisotropy())
        ),
          (i.get(x).__currentAnisotropy = x.anisotropy);
      }
    }
  }
  function Ie(b, x) {
    let V = !1;
    b.__webglInit === void 0 &&
      ((b.__webglInit = !0), x.addEventListener("dispose", N));
    const Z = x.source;
    let j = f.get(Z);
    j === void 0 && ((j = {}), f.set(Z, j));
    const Y = O(x);
    if (Y !== b.__cacheKey) {
      j[Y] === void 0 &&
        ((j[Y] = {
          texture: r.createTexture(),
          usedTimes: 0,
        }),
        o.memory.textures++,
        (V = !0)),
        j[Y].usedTimes++;
      const ve = j[b.__cacheKey];
      ve !== void 0 &&
        (j[b.__cacheKey].usedTimes--, ve.usedTimes === 0 && U(x)),
        (b.__cacheKey = Y),
        (b.__webglTexture = j[Y].texture);
    }
    return V;
  }
  function ze(b, x, V) {
    let Z = r.TEXTURE_2D;
    (x.isDataArrayTexture || x.isCompressedArrayTexture) &&
      (Z = r.TEXTURE_2D_ARRAY),
      x.isData3DTexture && (Z = r.TEXTURE_3D);
    const j = Ie(b, x),
      Y = x.source;
    n.bindTexture(Z, b.__webglTexture, r.TEXTURE0 + V);
    const ve = i.get(Y);
    if (Y.version !== ve.__version || j === !0) {
      n.activeTexture(r.TEXTURE0 + V);
      const re = ColorManagement.getPrimaries(
          ColorManagement.workingColorSpace
        ),
        ce =
          x.colorSpace === NoColorSpace
            ? null
            : ColorManagement.getPrimaries(x.colorSpace),
        Ce =
          x.colorSpace === NoColorSpace || re === ce
            ? r.NONE
            : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, x.flipY),
        r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha),
        r.pixelStorei(r.UNPACK_ALIGNMENT, x.unpackAlignment),
        r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ce);
      let Q = v(x.image, !1, s.maxTextureSize);
      Q = Te(x, Q);
      const oe = a.convert(x.format, x.colorSpace),
        De = a.convert(x.type);
      let Ee = A(x.internalFormat, oe, De, x.colorSpace, x.isVideoTexture);
      me(Z, x);
      let he;
      const Ae = x.mipmaps,
        Pe = x.isVideoTexture !== !0,
        ke = ve.__version === void 0 || j === !0,
        L = Y.dataReady,
        ee = E(x, Q);
      if (x.isDepthTexture)
        (Ee = S(x.format === 1027, x.type)),
          ke &&
            (Pe
              ? n.texStorage2D(r.TEXTURE_2D, 1, Ee, Q.width, Q.height)
              : n.texImage2D(
                  r.TEXTURE_2D,
                  0,
                  Ee,
                  Q.width,
                  Q.height,
                  0,
                  oe,
                  De,
                  null
                ));
      else if (x.isDataTexture)
        if (Ae.length > 0) {
          Pe &&
            ke &&
            n.texStorage2D(r.TEXTURE_2D, ee, Ee, Ae[0].width, Ae[0].height);
          for (let $ = 0, q = Ae.length; $ < q; $++)
            (he = Ae[$]),
              Pe
                ? L &&
                  n.texSubImage2D(
                    r.TEXTURE_2D,
                    $,
                    0,
                    0,
                    he.width,
                    he.height,
                    oe,
                    De,
                    he.data
                  )
                : n.texImage2D(
                    r.TEXTURE_2D,
                    $,
                    Ee,
                    he.width,
                    he.height,
                    0,
                    oe,
                    De,
                    he.data
                  );
          x.generateMipmaps = !1;
        } else
          Pe
            ? (ke && n.texStorage2D(r.TEXTURE_2D, ee, Ee, Q.width, Q.height),
              L &&
                n.texSubImage2D(
                  r.TEXTURE_2D,
                  0,
                  0,
                  0,
                  Q.width,
                  Q.height,
                  oe,
                  De,
                  Q.data
                ))
            : n.texImage2D(
                r.TEXTURE_2D,
                0,
                Ee,
                Q.width,
                Q.height,
                0,
                oe,
                De,
                Q.data
              );
      else if (x.isCompressedTexture)
        if (x.isCompressedArrayTexture) {
          Pe &&
            ke &&
            n.texStorage3D(
              r.TEXTURE_2D_ARRAY,
              ee,
              Ee,
              Ae[0].width,
              Ae[0].height,
              Q.depth
            );
          for (let $ = 0, q = Ae.length; $ < q; $++)
            if (((he = Ae[$]), x.format !== 1023))
              if (oe !== null)
                if (Pe) {
                  if (L)
                    if (x.layerUpdates.size > 0) {
                      const ie = getByteLength(
                        he.width,
                        he.height,
                        x.format,
                        x.type
                      );
                      for (const Se of x.layerUpdates) {
                        const Ue = he.data.subarray(
                          (Se * ie) / he.data.BYTES_PER_ELEMENT,
                          ((Se + 1) * ie) / he.data.BYTES_PER_ELEMENT
                        );
                        n.compressedTexSubImage3D(
                          r.TEXTURE_2D_ARRAY,
                          $,
                          0,
                          0,
                          Se,
                          he.width,
                          he.height,
                          1,
                          oe,
                          Ue,
                          0,
                          0
                        );
                      }
                      x.clearLayerUpdates();
                    } else
                      n.compressedTexSubImage3D(
                        r.TEXTURE_2D_ARRAY,
                        $,
                        0,
                        0,
                        0,
                        he.width,
                        he.height,
                        Q.depth,
                        oe,
                        he.data,
                        0,
                        0
                      );
                } else
                  n.compressedTexImage3D(
                    r.TEXTURE_2D_ARRAY,
                    $,
                    Ee,
                    he.width,
                    he.height,
                    Q.depth,
                    0,
                    he.data,
                    0,
                    0
                  );
              else
                console.warn(
                  "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                );
            else
              Pe
                ? L &&
                  n.texSubImage3D(
                    r.TEXTURE_2D_ARRAY,
                    $,
                    0,
                    0,
                    0,
                    he.width,
                    he.height,
                    Q.depth,
                    oe,
                    De,
                    he.data
                  )
                : n.texImage3D(
                    r.TEXTURE_2D_ARRAY,
                    $,
                    Ee,
                    he.width,
                    he.height,
                    Q.depth,
                    0,
                    oe,
                    De,
                    he.data
                  );
        } else {
          Pe &&
            ke &&
            n.texStorage2D(r.TEXTURE_2D, ee, Ee, Ae[0].width, Ae[0].height);
          for (let $ = 0, q = Ae.length; $ < q; $++)
            (he = Ae[$]),
              x.format !== 1023
                ? oe !== null
                  ? Pe
                    ? L &&
                      n.compressedTexSubImage2D(
                        r.TEXTURE_2D,
                        $,
                        0,
                        0,
                        he.width,
                        he.height,
                        oe,
                        he.data
                      )
                    : n.compressedTexImage2D(
                        r.TEXTURE_2D,
                        $,
                        Ee,
                        he.width,
                        he.height,
                        0,
                        he.data
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : Pe
                ? L &&
                  n.texSubImage2D(
                    r.TEXTURE_2D,
                    $,
                    0,
                    0,
                    he.width,
                    he.height,
                    oe,
                    De,
                    he.data
                  )
                : n.texImage2D(
                    r.TEXTURE_2D,
                    $,
                    Ee,
                    he.width,
                    he.height,
                    0,
                    oe,
                    De,
                    he.data
                  );
        }
      else if (x.isDataArrayTexture)
        if (Pe) {
          if (
            (ke &&
              n.texStorage3D(
                r.TEXTURE_2D_ARRAY,
                ee,
                Ee,
                Q.width,
                Q.height,
                Q.depth
              ),
            L)
          )
            if (x.layerUpdates.size > 0) {
              const $ = getByteLength(Q.width, Q.height, x.format, x.type);
              for (const q of x.layerUpdates) {
                const ie = Q.data.subarray(
                  (q * $) / Q.data.BYTES_PER_ELEMENT,
                  ((q + 1) * $) / Q.data.BYTES_PER_ELEMENT
                );
                n.texSubImage3D(
                  r.TEXTURE_2D_ARRAY,
                  0,
                  0,
                  0,
                  q,
                  Q.width,
                  Q.height,
                  1,
                  oe,
                  De,
                  ie
                );
              }
              x.clearLayerUpdates();
            } else
              n.texSubImage3D(
                r.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                Q.width,
                Q.height,
                Q.depth,
                oe,
                De,
                Q.data
              );
        } else
          n.texImage3D(
            r.TEXTURE_2D_ARRAY,
            0,
            Ee,
            Q.width,
            Q.height,
            Q.depth,
            0,
            oe,
            De,
            Q.data
          );
      else if (x.isData3DTexture)
        Pe
          ? (ke &&
              n.texStorage3D(r.TEXTURE_3D, ee, Ee, Q.width, Q.height, Q.depth),
            L &&
              n.texSubImage3D(
                r.TEXTURE_3D,
                0,
                0,
                0,
                0,
                Q.width,
                Q.height,
                Q.depth,
                oe,
                De,
                Q.data
              ))
          : n.texImage3D(
              r.TEXTURE_3D,
              0,
              Ee,
              Q.width,
              Q.height,
              Q.depth,
              0,
              oe,
              De,
              Q.data
            );
      else if (x.isFramebufferTexture) {
        if (ke)
          if (Pe) n.texStorage2D(r.TEXTURE_2D, ee, Ee, Q.width, Q.height);
          else {
            let $ = Q.width,
              q = Q.height;
            for (let ie = 0; ie < ee; ie++)
              n.texImage2D(r.TEXTURE_2D, ie, Ee, $, q, 0, oe, De, null),
                ($ >>= 1),
                (q >>= 1);
          }
      } else if (Ae.length > 0) {
        if (Pe && ke) {
          const $ = we(Ae[0]);
          n.texStorage2D(r.TEXTURE_2D, ee, Ee, $.width, $.height);
        }
        for (let $ = 0, q = Ae.length; $ < q; $++)
          (he = Ae[$]),
            Pe
              ? L && n.texSubImage2D(r.TEXTURE_2D, $, 0, 0, oe, De, he)
              : n.texImage2D(r.TEXTURE_2D, $, Ee, oe, De, he);
        x.generateMipmaps = !1;
      } else if (Pe) {
        if (ke) {
          const $ = we(Q);
          n.texStorage2D(r.TEXTURE_2D, ee, Ee, $.width, $.height);
        }
        L && n.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, oe, De, Q);
      } else n.texImage2D(r.TEXTURE_2D, 0, Ee, oe, De, Q);
      _(x) && m(Z), (ve.__version = Y.version), x.onUpdate && x.onUpdate(x);
    }
    b.__version = x.version;
  }
  function W(b, x, V) {
    if (x.image.length !== 6) return;
    const Z = Ie(b, x),
      j = x.source;
    n.bindTexture(r.TEXTURE_CUBE_MAP, b.__webglTexture, r.TEXTURE0 + V);
    const Y = i.get(j);
    if (j.version !== Y.__version || Z === !0) {
      n.activeTexture(r.TEXTURE0 + V);
      const ve = ColorManagement.getPrimaries(
          ColorManagement.workingColorSpace
        ),
        re =
          x.colorSpace === NoColorSpace
            ? null
            : ColorManagement.getPrimaries(x.colorSpace),
        ce =
          x.colorSpace === NoColorSpace || ve === re
            ? r.NONE
            : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, x.flipY),
        r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha),
        r.pixelStorei(r.UNPACK_ALIGNMENT, x.unpackAlignment),
        r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, ce);
      const Ce = x.isCompressedTexture || x.image[0].isCompressedTexture,
        Q = x.image[0] && x.image[0].isDataTexture,
        oe = [];
      for (let q = 0; q < 6; q++)
        !Ce && !Q
          ? (oe[q] = v(x.image[q], !0, s.maxCubemapSize))
          : (oe[q] = Q ? x.image[q].image : x.image[q]),
          (oe[q] = Te(x, oe[q]));
      const De = oe[0],
        Ee = a.convert(x.format, x.colorSpace),
        he = a.convert(x.type),
        Ae = A(x.internalFormat, Ee, he, x.colorSpace),
        Pe = x.isVideoTexture !== !0,
        ke = Y.__version === void 0 || Z === !0,
        L = j.dataReady;
      let ee = E(x, De);
      me(r.TEXTURE_CUBE_MAP, x);
      let $;
      if (Ce) {
        Pe &&
          ke &&
          n.texStorage2D(r.TEXTURE_CUBE_MAP, ee, Ae, De.width, De.height);
        for (let q = 0; q < 6; q++) {
          $ = oe[q].mipmaps;
          for (let ie = 0; ie < $.length; ie++) {
            const Se = $[ie];
            x.format !== 1023
              ? Ee !== null
                ? Pe
                  ? L &&
                    n.compressedTexSubImage2D(
                      r.TEXTURE_CUBE_MAP_POSITIVE_X + q,
                      ie,
                      0,
                      0,
                      Se.width,
                      Se.height,
                      Ee,
                      Se.data
                    )
                  : n.compressedTexImage2D(
                      r.TEXTURE_CUBE_MAP_POSITIVE_X + q,
                      ie,
                      Ae,
                      Se.width,
                      Se.height,
                      0,
                      Se.data
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                  )
              : Pe
              ? L &&
                n.texSubImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + q,
                  ie,
                  0,
                  0,
                  Se.width,
                  Se.height,
                  Ee,
                  he,
                  Se.data
                )
              : n.texImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + q,
                  ie,
                  Ae,
                  Se.width,
                  Se.height,
                  0,
                  Ee,
                  he,
                  Se.data
                );
          }
        }
      } else {
        if ((($ = x.mipmaps), Pe && ke)) {
          $.length > 0 && ee++;
          const q = we(oe[0]);
          n.texStorage2D(r.TEXTURE_CUBE_MAP, ee, Ae, q.width, q.height);
        }
        for (let q = 0; q < 6; q++)
          if (Q) {
            Pe
              ? L &&
                n.texSubImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + q,
                  0,
                  0,
                  0,
                  oe[q].width,
                  oe[q].height,
                  Ee,
                  he,
                  oe[q].data
                )
              : n.texImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + q,
                  0,
                  Ae,
                  oe[q].width,
                  oe[q].height,
                  0,
                  Ee,
                  he,
                  oe[q].data
                );
            for (let ie = 0; ie < $.length; ie++) {
              const Ue = $[ie].image[q].image;
              Pe
                ? L &&
                  n.texSubImage2D(
                    r.TEXTURE_CUBE_MAP_POSITIVE_X + q,
                    ie + 1,
                    0,
                    0,
                    Ue.width,
                    Ue.height,
                    Ee,
                    he,
                    Ue.data
                  )
                : n.texImage2D(
                    r.TEXTURE_CUBE_MAP_POSITIVE_X + q,
                    ie + 1,
                    Ae,
                    Ue.width,
                    Ue.height,
                    0,
                    Ee,
                    he,
                    Ue.data
                  );
            }
          } else {
            Pe
              ? L &&
                n.texSubImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + q,
                  0,
                  0,
                  0,
                  Ee,
                  he,
                  oe[q]
                )
              : n.texImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + q,
                  0,
                  Ae,
                  Ee,
                  he,
                  oe[q]
                );
            for (let ie = 0; ie < $.length; ie++) {
              const Se = $[ie];
              Pe
                ? L &&
                  n.texSubImage2D(
                    r.TEXTURE_CUBE_MAP_POSITIVE_X + q,
                    ie + 1,
                    0,
                    0,
                    Ee,
                    he,
                    Se.image[q]
                  )
                : n.texImage2D(
                    r.TEXTURE_CUBE_MAP_POSITIVE_X + q,
                    ie + 1,
                    Ae,
                    Ee,
                    he,
                    Se.image[q]
                  );
            }
          }
      }
      _(x) && m(r.TEXTURE_CUBE_MAP),
        (Y.__version = j.version),
        x.onUpdate && x.onUpdate(x);
    }
    b.__version = x.version;
  }
  function J(b, x, V, Z, j, Y) {
    const ve = a.convert(V.format, V.colorSpace),
      re = a.convert(V.type),
      ce = A(V.internalFormat, ve, re, V.colorSpace);
    if (!i.get(x).__hasExternalTextures) {
      const Q = Math.max(1, x.width >> Y),
        oe = Math.max(1, x.height >> Y);
      j === r.TEXTURE_3D || j === r.TEXTURE_2D_ARRAY
        ? n.texImage3D(j, Y, ce, Q, oe, x.depth, 0, ve, re, null)
        : n.texImage2D(j, Y, ce, Q, oe, 0, ve, re, null);
    }
    n.bindFramebuffer(r.FRAMEBUFFER, b),
      ge(x)
        ? l.framebufferTexture2DMultisampleEXT(
            r.FRAMEBUFFER,
            Z,
            j,
            i.get(V).__webglTexture,
            0,
            Ge(x)
          )
        : (j === r.TEXTURE_2D ||
            (j >= r.TEXTURE_CUBE_MAP_POSITIVE_X &&
              j <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          r.framebufferTexture2D(
            r.FRAMEBUFFER,
            Z,
            j,
            i.get(V).__webglTexture,
            Y
          ),
      n.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function ue(b, x, V) {
    if ((r.bindRenderbuffer(r.RENDERBUFFER, b), x.depthBuffer)) {
      const Z = x.depthTexture,
        j = Z && Z.isDepthTexture ? Z.type : null,
        Y = S(x.stencilBuffer, j),
        ve = x.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT,
        re = Ge(x);
      ge(x)
        ? l.renderbufferStorageMultisampleEXT(
            r.RENDERBUFFER,
            re,
            Y,
            x.width,
            x.height
          )
        : V
        ? r.renderbufferStorageMultisample(
            r.RENDERBUFFER,
            re,
            Y,
            x.width,
            x.height
          )
        : r.renderbufferStorage(r.RENDERBUFFER, Y, x.width, x.height),
        r.framebufferRenderbuffer(r.FRAMEBUFFER, ve, r.RENDERBUFFER, b);
    } else {
      const Z = x.textures;
      for (let j = 0; j < Z.length; j++) {
        const Y = Z[j],
          ve = a.convert(Y.format, Y.colorSpace),
          re = a.convert(Y.type),
          ce = A(Y.internalFormat, ve, re, Y.colorSpace),
          Ce = Ge(x);
        V && ge(x) === !1
          ? r.renderbufferStorageMultisample(
              r.RENDERBUFFER,
              Ce,
              ce,
              x.width,
              x.height
            )
          : ge(x)
          ? l.renderbufferStorageMultisampleEXT(
              r.RENDERBUFFER,
              Ce,
              ce,
              x.width,
              x.height
            )
          : r.renderbufferStorage(r.RENDERBUFFER, ce, x.width, x.height);
      }
    }
    r.bindRenderbuffer(r.RENDERBUFFER, null);
  }
  function le(b, x) {
    if (x && x.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported"
      );
    if (
      (n.bindFramebuffer(r.FRAMEBUFFER, b),
      !(x.depthTexture && x.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
      );
    (!i.get(x.depthTexture).__webglTexture ||
      x.depthTexture.image.width !== x.width ||
      x.depthTexture.image.height !== x.height) &&
      ((x.depthTexture.image.width = x.width),
      (x.depthTexture.image.height = x.height),
      (x.depthTexture.needsUpdate = !0)),
      G(x.depthTexture, 0);
    const Z = i.get(x.depthTexture).__webglTexture,
      j = Ge(x);
    if (x.depthTexture.format === 1026)
      ge(x)
        ? l.framebufferTexture2DMultisampleEXT(
            r.FRAMEBUFFER,
            r.DEPTH_ATTACHMENT,
            r.TEXTURE_2D,
            Z,
            0,
            j
          )
        : r.framebufferTexture2D(
            r.FRAMEBUFFER,
            r.DEPTH_ATTACHMENT,
            r.TEXTURE_2D,
            Z,
            0
          );
    else if (x.depthTexture.format === 1027)
      ge(x)
        ? l.framebufferTexture2DMultisampleEXT(
            r.FRAMEBUFFER,
            r.DEPTH_STENCIL_ATTACHMENT,
            r.TEXTURE_2D,
            Z,
            0,
            j
          )
        : r.framebufferTexture2D(
            r.FRAMEBUFFER,
            r.DEPTH_STENCIL_ATTACHMENT,
            r.TEXTURE_2D,
            Z,
            0
          );
    else throw new Error("Unknown depthTexture format");
  }
  function be(b) {
    const x = i.get(b),
      V = b.isWebGLCubeRenderTarget === !0;
    if (b.depthTexture && !x.__autoAllocateDepthBuffer) {
      if (V)
        throw new Error(
          "target.depthTexture not supported in Cube render targets"
        );
      le(x.__webglFramebuffer, b);
    } else if (V) {
      x.__webglDepthbuffer = [];
      for (let Z = 0; Z < 6; Z++)
        n.bindFramebuffer(r.FRAMEBUFFER, x.__webglFramebuffer[Z]),
          (x.__webglDepthbuffer[Z] = r.createRenderbuffer()),
          ue(x.__webglDepthbuffer[Z], b, !1);
    } else
      n.bindFramebuffer(r.FRAMEBUFFER, x.__webglFramebuffer),
        (x.__webglDepthbuffer = r.createRenderbuffer()),
        ue(x.__webglDepthbuffer, b, !1);
    n.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function Re(b, x, V) {
    const Z = i.get(b);
    x !== void 0 &&
      J(
        Z.__webglFramebuffer,
        b,
        b.texture,
        r.COLOR_ATTACHMENT0,
        r.TEXTURE_2D,
        0
      ),
      V !== void 0 && be(b);
  }
  function Le(b) {
    const x = b.texture,
      V = i.get(b),
      Z = i.get(x);
    b.addEventListener("dispose", w);
    const j = b.textures,
      Y = b.isWebGLCubeRenderTarget === !0,
      ve = j.length > 1;
    if (
      (ve ||
        (Z.__webglTexture === void 0 && (Z.__webglTexture = r.createTexture()),
        (Z.__version = x.version),
        o.memory.textures++),
      Y)
    ) {
      V.__webglFramebuffer = [];
      for (let re = 0; re < 6; re++)
        if (x.mipmaps && x.mipmaps.length > 0) {
          V.__webglFramebuffer[re] = [];
          for (let ce = 0; ce < x.mipmaps.length; ce++)
            V.__webglFramebuffer[re][ce] = r.createFramebuffer();
        } else V.__webglFramebuffer[re] = r.createFramebuffer();
    } else {
      if (x.mipmaps && x.mipmaps.length > 0) {
        V.__webglFramebuffer = [];
        for (let re = 0; re < x.mipmaps.length; re++)
          V.__webglFramebuffer[re] = r.createFramebuffer();
      } else V.__webglFramebuffer = r.createFramebuffer();
      if (ve)
        for (let re = 0, ce = j.length; re < ce; re++) {
          const Ce = i.get(j[re]);
          Ce.__webglTexture === void 0 &&
            ((Ce.__webglTexture = r.createTexture()), o.memory.textures++);
        }
      if (b.samples > 0 && ge(b) === !1) {
        (V.__webglMultisampledFramebuffer = r.createFramebuffer()),
          (V.__webglColorRenderbuffer = []),
          n.bindFramebuffer(r.FRAMEBUFFER, V.__webglMultisampledFramebuffer);
        for (let re = 0; re < j.length; re++) {
          const ce = j[re];
          (V.__webglColorRenderbuffer[re] = r.createRenderbuffer()),
            r.bindRenderbuffer(r.RENDERBUFFER, V.__webglColorRenderbuffer[re]);
          const Ce = a.convert(ce.format, ce.colorSpace),
            Q = a.convert(ce.type),
            oe = A(
              ce.internalFormat,
              Ce,
              Q,
              ce.colorSpace,
              b.isXRRenderTarget === !0
            ),
            De = Ge(b);
          r.renderbufferStorageMultisample(
            r.RENDERBUFFER,
            De,
            oe,
            b.width,
            b.height
          ),
            r.framebufferRenderbuffer(
              r.FRAMEBUFFER,
              r.COLOR_ATTACHMENT0 + re,
              r.RENDERBUFFER,
              V.__webglColorRenderbuffer[re]
            );
        }
        r.bindRenderbuffer(r.RENDERBUFFER, null),
          b.depthBuffer &&
            ((V.__webglDepthRenderbuffer = r.createRenderbuffer()),
            ue(V.__webglDepthRenderbuffer, b, !0)),
          n.bindFramebuffer(r.FRAMEBUFFER, null);
      }
    }
    if (Y) {
      n.bindTexture(r.TEXTURE_CUBE_MAP, Z.__webglTexture),
        me(r.TEXTURE_CUBE_MAP, x);
      for (let re = 0; re < 6; re++)
        if (x.mipmaps && x.mipmaps.length > 0)
          for (let ce = 0; ce < x.mipmaps.length; ce++)
            J(
              V.__webglFramebuffer[re][ce],
              b,
              x,
              r.COLOR_ATTACHMENT0,
              r.TEXTURE_CUBE_MAP_POSITIVE_X + re,
              ce
            );
        else
          J(
            V.__webglFramebuffer[re],
            b,
            x,
            r.COLOR_ATTACHMENT0,
            r.TEXTURE_CUBE_MAP_POSITIVE_X + re,
            0
          );
      _(x) && m(r.TEXTURE_CUBE_MAP), n.unbindTexture();
    } else if (ve) {
      for (let re = 0, ce = j.length; re < ce; re++) {
        const Ce = j[re],
          Q = i.get(Ce);
        n.bindTexture(r.TEXTURE_2D, Q.__webglTexture),
          me(r.TEXTURE_2D, Ce),
          J(
            V.__webglFramebuffer,
            b,
            Ce,
            r.COLOR_ATTACHMENT0 + re,
            r.TEXTURE_2D,
            0
          ),
          _(Ce) && m(r.TEXTURE_2D);
      }
      n.unbindTexture();
    } else {
      let re = r.TEXTURE_2D;
      if (
        ((b.isWebGL3DRenderTarget || b.isWebGLArrayRenderTarget) &&
          (re = b.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY),
        n.bindTexture(re, Z.__webglTexture),
        me(re, x),
        x.mipmaps && x.mipmaps.length > 0)
      )
        for (let ce = 0; ce < x.mipmaps.length; ce++)
          J(V.__webglFramebuffer[ce], b, x, r.COLOR_ATTACHMENT0, re, ce);
      else J(V.__webglFramebuffer, b, x, r.COLOR_ATTACHMENT0, re, 0);
      _(x) && m(re), n.unbindTexture();
    }
    b.depthBuffer && be(b);
  }
  function He(b) {
    const x = b.textures;
    for (let V = 0, Z = x.length; V < Z; V++) {
      const j = x[V];
      if (_(j)) {
        const Y = b.isWebGLCubeRenderTarget ? r.TEXTURE_CUBE_MAP : r.TEXTURE_2D,
          ve = i.get(j).__webglTexture;
        n.bindTexture(Y, ve), m(Y), n.unbindTexture();
      }
    }
  }
  const R = [],
    Xe = [];
  function Ve(b) {
    if (b.samples > 0) {
      if (ge(b) === !1) {
        const x = b.textures,
          V = b.width,
          Z = b.height;
        let j = r.COLOR_BUFFER_BIT;
        const Y = b.stencilBuffer
            ? r.DEPTH_STENCIL_ATTACHMENT
            : r.DEPTH_ATTACHMENT,
          ve = i.get(b),
          re = x.length > 1;
        if (re)
          for (let ce = 0; ce < x.length; ce++)
            n.bindFramebuffer(r.FRAMEBUFFER, ve.__webglMultisampledFramebuffer),
              r.framebufferRenderbuffer(
                r.FRAMEBUFFER,
                r.COLOR_ATTACHMENT0 + ce,
                r.RENDERBUFFER,
                null
              ),
              n.bindFramebuffer(r.FRAMEBUFFER, ve.__webglFramebuffer),
              r.framebufferTexture2D(
                r.DRAW_FRAMEBUFFER,
                r.COLOR_ATTACHMENT0 + ce,
                r.TEXTURE_2D,
                null,
                0
              );
        n.bindFramebuffer(
          r.READ_FRAMEBUFFER,
          ve.__webglMultisampledFramebuffer
        ),
          n.bindFramebuffer(r.DRAW_FRAMEBUFFER, ve.__webglFramebuffer);
        for (let ce = 0; ce < x.length; ce++) {
          if (
            (b.resolveDepthBuffer &&
              (b.depthBuffer && (j |= r.DEPTH_BUFFER_BIT),
              b.stencilBuffer &&
                b.resolveStencilBuffer &&
                (j |= r.STENCIL_BUFFER_BIT)),
            re)
          ) {
            r.framebufferRenderbuffer(
              r.READ_FRAMEBUFFER,
              r.COLOR_ATTACHMENT0,
              r.RENDERBUFFER,
              ve.__webglColorRenderbuffer[ce]
            );
            const Ce = i.get(x[ce]).__webglTexture;
            r.framebufferTexture2D(
              r.DRAW_FRAMEBUFFER,
              r.COLOR_ATTACHMENT0,
              r.TEXTURE_2D,
              Ce,
              0
            );
          }
          r.blitFramebuffer(0, 0, V, Z, 0, 0, V, Z, j, r.NEAREST),
            c === !0 &&
              ((R.length = 0),
              (Xe.length = 0),
              R.push(r.COLOR_ATTACHMENT0 + ce),
              b.depthBuffer &&
                b.resolveDepthBuffer === !1 &&
                (R.push(Y),
                Xe.push(Y),
                r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, Xe)),
              r.invalidateFramebuffer(r.READ_FRAMEBUFFER, R));
        }
        if (
          (n.bindFramebuffer(r.READ_FRAMEBUFFER, null),
          n.bindFramebuffer(r.DRAW_FRAMEBUFFER, null),
          re)
        )
          for (let ce = 0; ce < x.length; ce++) {
            n.bindFramebuffer(r.FRAMEBUFFER, ve.__webglMultisampledFramebuffer),
              r.framebufferRenderbuffer(
                r.FRAMEBUFFER,
                r.COLOR_ATTACHMENT0 + ce,
                r.RENDERBUFFER,
                ve.__webglColorRenderbuffer[ce]
              );
            const Ce = i.get(x[ce]).__webglTexture;
            n.bindFramebuffer(r.FRAMEBUFFER, ve.__webglFramebuffer),
              r.framebufferTexture2D(
                r.DRAW_FRAMEBUFFER,
                r.COLOR_ATTACHMENT0 + ce,
                r.TEXTURE_2D,
                Ce,
                0
              );
          }
        n.bindFramebuffer(
          r.DRAW_FRAMEBUFFER,
          ve.__webglMultisampledFramebuffer
        );
      } else if (b.depthBuffer && b.resolveDepthBuffer === !1 && c) {
        const x = b.stencilBuffer
          ? r.DEPTH_STENCIL_ATTACHMENT
          : r.DEPTH_ATTACHMENT;
        r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [x]);
      }
    }
  }
  function Ge(b) {
    return Math.min(s.maxSamples, b.samples);
  }
  function ge(b) {
    const x = i.get(b);
    return (
      b.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      x.__useRenderToTexture !== !1
    );
  }
  function qe(b) {
    const x = o.render.frame;
    u.get(b) !== x && (u.set(b, x), b.update());
  }
  function Te(b, x) {
    const V = b.colorSpace,
      Z = b.format,
      j = b.type;
    return (
      b.isCompressedTexture === !0 ||
        b.isVideoTexture === !0 ||
        (V !== LinearSRGBColorSpace &&
          V !== NoColorSpace &&
          (ColorManagement.getTransfer(V) === SRGBTransfer
            ? (Z !== 1023 || j !== 1009) &&
              console.warn(
                "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
              )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture color space:",
                V
              ))),
      x
    );
  }
  function we(b) {
    return (
      typeof HTMLImageElement < "u" && b instanceof HTMLImageElement
        ? ((h.width = b.naturalWidth || b.width),
          (h.height = b.naturalHeight || b.height))
        : typeof VideoFrame < "u" && b instanceof VideoFrame
        ? ((h.width = b.displayWidth), (h.height = b.displayHeight))
        : ((h.width = b.width), (h.height = b.height)),
      h
    );
  }
  (this.allocateTextureUnit = z),
    (this.resetTextureUnits = P),
    (this.setTexture2D = G),
    (this.setTexture2DArray = X),
    (this.setTexture3D = k),
    (this.setTextureCube = K),
    (this.rebindTextures = Re),
    (this.setupRenderTarget = Le),
    (this.updateRenderTargetMipmap = He),
    (this.updateMultisampleRenderTarget = Ve),
    (this.setupDepthRenderbuffer = be),
    (this.setupFrameBufferTexture = J),
    (this.useMultisampledRTT = ge);
}
function WebGLUtils(r, e) {
  function n(i, s = NoColorSpace) {
    let a;
    const o = ColorManagement.getTransfer(s);
    if (i === 1009) return r.UNSIGNED_BYTE;
    if (i === 1017) return r.UNSIGNED_SHORT_4_4_4_4;
    if (i === 1018) return r.UNSIGNED_SHORT_5_5_5_1;
    if (i === 35902) return r.UNSIGNED_INT_5_9_9_9_REV;
    if (i === 1010) return r.BYTE;
    if (i === 1011) return r.SHORT;
    if (i === 1012) return r.UNSIGNED_SHORT;
    if (i === 1013) return r.INT;
    if (i === 1014) return r.UNSIGNED_INT;
    if (i === 1015) return r.FLOAT;
    if (i === 1016) return r.HALF_FLOAT;
    if (i === 1021) return r.ALPHA;
    if (i === 1022) return r.RGB;
    if (i === 1023) return r.RGBA;
    if (i === 1024) return r.LUMINANCE;
    if (i === 1025) return r.LUMINANCE_ALPHA;
    if (i === 1026) return r.DEPTH_COMPONENT;
    if (i === 1027) return r.DEPTH_STENCIL;
    if (i === 1028) return r.RED;
    if (i === 1029) return r.RED_INTEGER;
    if (i === 1030) return r.RG;
    if (i === 1031) return r.RG_INTEGER;
    if (i === 1033) return r.RGBA_INTEGER;
    if (i === 33776 || i === 33777 || i === 33778 || i === 33779)
      if (o === SRGBTransfer)
        if (((a = e.get("WEBGL_compressed_texture_s3tc_srgb")), a !== null)) {
          if (i === 33776) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (i === 33777) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (i === 33778) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (i === 33779) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((a = e.get("WEBGL_compressed_texture_s3tc")), a !== null)) {
        if (i === 33776) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (i === 33777) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (i === 33778) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (i === 33779) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (i === 35840 || i === 35841 || i === 35842 || i === 35843)
      if (((a = e.get("WEBGL_compressed_texture_pvrtc")), a !== null)) {
        if (i === 35840) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (i === 35841) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (i === 35842) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (i === 35843) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (i === 36196 || i === 37492 || i === 37496)
      if (((a = e.get("WEBGL_compressed_texture_etc")), a !== null)) {
        if (i === 36196 || i === 37492)
          return o === SRGBTransfer
            ? a.COMPRESSED_SRGB8_ETC2
            : a.COMPRESSED_RGB8_ETC2;
        if (i === 37496)
          return o === SRGBTransfer
            ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      i === 37808 ||
      i === 37809 ||
      i === 37810 ||
      i === 37811 ||
      i === 37812 ||
      i === 37813 ||
      i === 37814 ||
      i === 37815 ||
      i === 37816 ||
      i === 37817 ||
      i === 37818 ||
      i === 37819 ||
      i === 37820 ||
      i === 37821
    )
      if (((a = e.get("WEBGL_compressed_texture_astc")), a !== null)) {
        if (i === 37808)
          return o === SRGBTransfer
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (i === 37809)
          return o === SRGBTransfer
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (i === 37810)
          return o === SRGBTransfer
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (i === 37811)
          return o === SRGBTransfer
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (i === 37812)
          return o === SRGBTransfer
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (i === 37813)
          return o === SRGBTransfer
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (i === 37814)
          return o === SRGBTransfer
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (i === 37815)
          return o === SRGBTransfer
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (i === 37816)
          return o === SRGBTransfer
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (i === 37817)
          return o === SRGBTransfer
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (i === 37818)
          return o === SRGBTransfer
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (i === 37819)
          return o === SRGBTransfer
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (i === 37820)
          return o === SRGBTransfer
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (i === 37821)
          return o === SRGBTransfer
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (i === 36492 || i === 36494 || i === 36495)
      if (((a = e.get("EXT_texture_compression_bptc")), a !== null)) {
        if (i === 36492)
          return o === SRGBTransfer
            ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (i === 36494) return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (i === 36495) return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (i === 36283 || i === 36284 || i === 36285 || i === 36286)
      if (((a = e.get("EXT_texture_compression_rgtc")), a !== null)) {
        if (i === 36492) return a.COMPRESSED_RED_RGTC1_EXT;
        if (i === 36284) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (i === 36285) return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (i === 36286) return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return i === 1020 ? r.UNSIGNED_INT_24_8 : r[i] !== void 0 ? r[i] : null;
  }
  return { convert: n };
}
class ArrayCamera extends PerspectiveCamera {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class Group extends Object3D {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const _moveEvent = { type: "move" };
class WebXRController {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new Group()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new Group()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new Vector3()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new Vector3())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new Group()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new Vector3()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new Vector3())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const n = this._hand;
      if (n) for (const i of e.hand.values()) this._getHandJoint(n, i);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, n, i) {
    let s = null,
      a = null,
      o = null;
    const l = this._targetRay,
      c = this._grip,
      h = this._hand;
    if (e && n.session.visibilityState !== "visible-blurred") {
      if (h && e.hand) {
        o = !0;
        for (const v of e.hand.values()) {
          const _ = n.getJointPose(v, i),
            m = this._getHandJoint(h, v);
          _ !== null &&
            (m.matrix.fromArray(_.transform.matrix),
            m.matrix.decompose(m.position, m.rotation, m.scale),
            (m.matrixWorldNeedsUpdate = !0),
            (m.jointRadius = _.radius)),
            (m.visible = _ !== null);
        }
        const u = h.joints["index-finger-tip"],
          d = h.joints["thumb-tip"],
          f = u.position.distanceTo(d.position),
          p = 0.02,
          g = 5e-3;
        h.inputState.pinching && f > p + g
          ? ((h.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !h.inputState.pinching &&
            f <= p - g &&
            ((h.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        c !== null &&
          e.gripSpace &&
          ((a = n.getPose(e.gripSpace, i)),
          a !== null &&
            (c.matrix.fromArray(a.transform.matrix),
            c.matrix.decompose(c.position, c.rotation, c.scale),
            (c.matrixWorldNeedsUpdate = !0),
            a.linearVelocity
              ? ((c.hasLinearVelocity = !0),
                c.linearVelocity.copy(a.linearVelocity))
              : (c.hasLinearVelocity = !1),
            a.angularVelocity
              ? ((c.hasAngularVelocity = !0),
                c.angularVelocity.copy(a.angularVelocity))
              : (c.hasAngularVelocity = !1)));
      l !== null &&
        ((s = n.getPose(e.targetRaySpace, i)),
        s === null && a !== null && (s = a),
        s !== null &&
          (l.matrix.fromArray(s.transform.matrix),
          l.matrix.decompose(l.position, l.rotation, l.scale),
          (l.matrixWorldNeedsUpdate = !0),
          s.linearVelocity
            ? ((l.hasLinearVelocity = !0),
              l.linearVelocity.copy(s.linearVelocity))
            : (l.hasLinearVelocity = !1),
          s.angularVelocity
            ? ((l.hasAngularVelocity = !0),
              l.angularVelocity.copy(s.angularVelocity))
            : (l.hasAngularVelocity = !1),
          this.dispatchEvent(_moveEvent)));
    }
    return (
      l !== null && (l.visible = s !== null),
      c !== null && (c.visible = a !== null),
      h !== null && (h.visible = o !== null),
      this
    );
  }
  // private method
  _getHandJoint(e, n) {
    if (e.joints[n.jointName] === void 0) {
      const i = new Group();
      (i.matrixAutoUpdate = !1),
        (i.visible = !1),
        (e.joints[n.jointName] = i),
        e.add(i);
    }
    return e.joints[n.jointName];
  }
}
const _occlusion_vertex = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
  _occlusion_fragment = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class WebXRDepthSensing {
  constructor() {
    (this.texture = null),
      (this.mesh = null),
      (this.depthNear = 0),
      (this.depthFar = 0);
  }
  init(e, n, i) {
    if (this.texture === null) {
      const s = new Texture(),
        a = e.properties.get(s);
      (a.__webglTexture = n.texture),
        (n.depthNear != i.depthNear || n.depthFar != i.depthFar) &&
          ((this.depthNear = n.depthNear), (this.depthFar = n.depthFar)),
        (this.texture = s);
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const n = e.cameras[0].viewport,
        i = new ShaderMaterial({
          vertexShader: _occlusion_vertex,
          fragmentShader: _occlusion_fragment,
          uniforms: {
            depthColor: { value: this.texture },
            depthWidth: { value: n.z },
            depthHeight: { value: n.w },
          },
        });
      this.mesh = new Mesh(new PlaneGeometry(20, 20), i);
    }
    return this.mesh;
  }
  reset() {
    (this.texture = null), (this.mesh = null);
  }
  getDepthTexture() {
    return this.texture;
  }
}
class WebXRManager extends EventDispatcher {
  constructor(e, n) {
    super();
    const i = this;
    let s = null,
      a = 1,
      o = null,
      l = "local-floor",
      c = 1,
      h = null,
      u = null,
      d = null,
      f = null,
      p = null,
      g = null;
    const v = new WebXRDepthSensing(),
      _ = n.getContextAttributes();
    let m = null,
      A = null;
    const S = [],
      E = [],
      N = new Vector2();
    let w = null;
    const C = new PerspectiveCamera();
    C.layers.enable(1), (C.viewport = new Vector4());
    const U = new PerspectiveCamera();
    U.layers.enable(2), (U.viewport = new Vector4());
    const T = [C, U],
      M = new ArrayCamera();
    M.layers.enable(1), M.layers.enable(2);
    let P = null,
      z = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (W) {
        let J = S[W];
        return (
          J === void 0 && ((J = new WebXRController()), (S[W] = J)),
          J.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (W) {
        let J = S[W];
        return (
          J === void 0 && ((J = new WebXRController()), (S[W] = J)),
          J.getGripSpace()
        );
      }),
      (this.getHand = function (W) {
        let J = S[W];
        return (
          J === void 0 && ((J = new WebXRController()), (S[W] = J)),
          J.getHandSpace()
        );
      });
    function O(W) {
      const J = E.indexOf(W.inputSource);
      if (J === -1) return;
      const ue = S[J];
      ue !== void 0 &&
        (ue.update(W.inputSource, W.frame, h || o),
        ue.dispatchEvent({ type: W.type, data: W.inputSource }));
    }
    function G() {
      s.removeEventListener("select", O),
        s.removeEventListener("selectstart", O),
        s.removeEventListener("selectend", O),
        s.removeEventListener("squeeze", O),
        s.removeEventListener("squeezestart", O),
        s.removeEventListener("squeezeend", O),
        s.removeEventListener("end", G),
        s.removeEventListener("inputsourceschange", X);
      for (let W = 0; W < S.length; W++) {
        const J = E[W];
        J !== null && ((E[W] = null), S[W].disconnect(J));
      }
      (P = null),
        (z = null),
        v.reset(),
        e.setRenderTarget(m),
        (p = null),
        (f = null),
        (d = null),
        (s = null),
        (A = null),
        ze.stop(),
        (i.isPresenting = !1),
        e.setPixelRatio(w),
        e.setSize(N.width, N.height, !1),
        i.dispatchEvent({ type: "sessionend" });
    }
    (this.setFramebufferScaleFactor = function (W) {
      (a = W),
        i.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
          );
    }),
      (this.setReferenceSpaceType = function (W) {
        (l = W),
          i.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return h || o;
      }),
      (this.setReferenceSpace = function (W) {
        h = W;
      }),
      (this.getBaseLayer = function () {
        return f !== null ? f : p;
      }),
      (this.getBinding = function () {
        return d;
      }),
      (this.getFrame = function () {
        return g;
      }),
      (this.getSession = function () {
        return s;
      }),
      (this.setSession = async function (W) {
        if (((s = W), s !== null)) {
          if (
            ((m = e.getRenderTarget()),
            s.addEventListener("select", O),
            s.addEventListener("selectstart", O),
            s.addEventListener("selectend", O),
            s.addEventListener("squeeze", O),
            s.addEventListener("squeezestart", O),
            s.addEventListener("squeezeend", O),
            s.addEventListener("end", G),
            s.addEventListener("inputsourceschange", X),
            _.xrCompatible !== !0 && (await n.makeXRCompatible()),
            (w = e.getPixelRatio()),
            e.getSize(N),
            s.renderState.layers === void 0)
          ) {
            const J = {
              antialias: _.antialias,
              alpha: !0,
              depth: _.depth,
              stencil: _.stencil,
              framebufferScaleFactor: a,
            };
            (p = new XRWebGLLayer(s, n, J)),
              s.updateRenderState({ baseLayer: p }),
              e.setPixelRatio(1),
              e.setSize(p.framebufferWidth, p.framebufferHeight, !1),
              (A = new WebGLRenderTarget(
                p.framebufferWidth,
                p.framebufferHeight,
                {
                  format: 1023,
                  type: 1009,
                  colorSpace: e.outputColorSpace,
                  stencilBuffer: _.stencil,
                }
              ));
          } else {
            let J = null,
              ue = null,
              le = null;
            _.depth &&
              ((le = _.stencil ? n.DEPTH24_STENCIL8 : n.DEPTH_COMPONENT24),
              (J = _.stencil ? 1027 : 1026),
              (ue = _.stencil ? 1020 : 1014));
            const be = {
              colorFormat: n.RGBA8,
              depthFormat: le,
              scaleFactor: a,
            };
            (d = new XRWebGLBinding(s, n)),
              (f = d.createProjectionLayer(be)),
              s.updateRenderState({ layers: [f] }),
              e.setPixelRatio(1),
              e.setSize(f.textureWidth, f.textureHeight, !1),
              (A = new WebGLRenderTarget(f.textureWidth, f.textureHeight, {
                format: 1023,
                type: 1009,
                depthTexture: new DepthTexture(
                  f.textureWidth,
                  f.textureHeight,
                  ue,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  J
                ),
                stencilBuffer: _.stencil,
                colorSpace: e.outputColorSpace,
                samples: _.antialias ? 4 : 0,
                resolveDepthBuffer: f.ignoreDepthValues === !1,
              }));
          }
          (A.isXRRenderTarget = !0),
            this.setFoveation(c),
            (h = null),
            (o = await s.requestReferenceSpace(l)),
            ze.setContext(s),
            ze.start(),
            (i.isPresenting = !0),
            i.dispatchEvent({ type: "sessionstart" });
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (s !== null) return s.environmentBlendMode;
      }),
      (this.getDepthTexture = function () {
        return v.getDepthTexture();
      });
    function X(W) {
      for (let J = 0; J < W.removed.length; J++) {
        const ue = W.removed[J],
          le = E.indexOf(ue);
        le >= 0 && ((E[le] = null), S[le].disconnect(ue));
      }
      for (let J = 0; J < W.added.length; J++) {
        const ue = W.added[J];
        let le = E.indexOf(ue);
        if (le === -1) {
          for (let Re = 0; Re < S.length; Re++)
            if (Re >= E.length) {
              E.push(ue), (le = Re);
              break;
            } else if (E[Re] === null) {
              (E[Re] = ue), (le = Re);
              break;
            }
          if (le === -1) break;
        }
        const be = S[le];
        be && be.connect(ue);
      }
    }
    const k = new Vector3(),
      K = new Vector3();
    function H(W, J, ue) {
      k.setFromMatrixPosition(J.matrixWorld),
        K.setFromMatrixPosition(ue.matrixWorld);
      const le = k.distanceTo(K),
        be = J.projectionMatrix.elements,
        Re = ue.projectionMatrix.elements,
        Le = be[14] / (be[10] - 1),
        He = be[14] / (be[10] + 1),
        R = (be[9] + 1) / be[5],
        Xe = (be[9] - 1) / be[5],
        Ve = (be[8] - 1) / be[0],
        Ge = (Re[8] + 1) / Re[0],
        ge = Le * Ve,
        qe = Le * Ge,
        Te = le / (-Ve + Ge),
        we = Te * -Ve;
      J.matrixWorld.decompose(W.position, W.quaternion, W.scale),
        W.translateX(we),
        W.translateZ(Te),
        W.matrixWorld.compose(W.position, W.quaternion, W.scale),
        W.matrixWorldInverse.copy(W.matrixWorld).invert();
      const b = Le + Te,
        x = He + Te,
        V = ge - we,
        Z = qe + (le - we),
        j = ((R * He) / x) * b,
        Y = ((Xe * He) / x) * b;
      W.projectionMatrix.makePerspective(V, Z, j, Y, b, x),
        W.projectionMatrixInverse.copy(W.projectionMatrix).invert();
    }
    function se(W, J) {
      J === null
        ? W.matrixWorld.copy(W.matrix)
        : W.matrixWorld.multiplyMatrices(J.matrixWorld, W.matrix),
        W.matrixWorldInverse.copy(W.matrixWorld).invert();
    }
    this.updateCamera = function (W) {
      if (s === null) return;
      v.texture !== null && ((W.near = v.depthNear), (W.far = v.depthFar)),
        (M.near = U.near = C.near = W.near),
        (M.far = U.far = C.far = W.far),
        (P !== M.near || z !== M.far) &&
          (s.updateRenderState({
            depthNear: M.near,
            depthFar: M.far,
          }),
          (P = M.near),
          (z = M.far),
          (C.near = P),
          (C.far = z),
          (U.near = P),
          (U.far = z),
          C.updateProjectionMatrix(),
          U.updateProjectionMatrix(),
          W.updateProjectionMatrix());
      const J = W.parent,
        ue = M.cameras;
      se(M, J);
      for (let le = 0; le < ue.length; le++) se(ue[le], J);
      ue.length === 2
        ? H(M, C, U)
        : M.projectionMatrix.copy(C.projectionMatrix),
        pe(W, M, J);
    };
    function pe(W, J, ue) {
      ue === null
        ? W.matrix.copy(J.matrixWorld)
        : (W.matrix.copy(ue.matrixWorld),
          W.matrix.invert(),
          W.matrix.multiply(J.matrixWorld)),
        W.matrix.decompose(W.position, W.quaternion, W.scale),
        W.updateMatrixWorld(!0),
        W.projectionMatrix.copy(J.projectionMatrix),
        W.projectionMatrixInverse.copy(J.projectionMatrixInverse),
        W.isPerspectiveCamera &&
          ((W.fov =
            RAD2DEG * 2 * Math.atan(1 / W.projectionMatrix.elements[5])),
          (W.zoom = 1));
    }
    (this.getCamera = function () {
      return M;
    }),
      (this.getFoveation = function () {
        if (!(f === null && p === null)) return c;
      }),
      (this.setFoveation = function (W) {
        (c = W),
          f !== null && (f.fixedFoveation = W),
          p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = W);
      }),
      (this.hasDepthSensing = function () {
        return v.texture !== null;
      }),
      (this.getDepthSensingMesh = function () {
        return v.getMesh(M);
      });
    let me = null;
    function Ie(W, J) {
      if (((u = J.getViewerPose(h || o)), (g = J), u !== null)) {
        const ue = u.views;
        p !== null &&
          (e.setRenderTargetFramebuffer(A, p.framebuffer),
          e.setRenderTarget(A));
        let le = !1;
        ue.length !== M.cameras.length && ((M.cameras.length = 0), (le = !0));
        for (let Re = 0; Re < ue.length; Re++) {
          const Le = ue[Re];
          let He = null;
          if (p !== null) He = p.getViewport(Le);
          else {
            const Xe = d.getViewSubImage(f, Le);
            (He = Xe.viewport),
              Re === 0 &&
                (e.setRenderTargetTextures(
                  A,
                  Xe.colorTexture,
                  f.ignoreDepthValues ? void 0 : Xe.depthStencilTexture
                ),
                e.setRenderTarget(A));
          }
          let R = T[Re];
          R === void 0 &&
            ((R = new PerspectiveCamera()),
            R.layers.enable(Re),
            (R.viewport = new Vector4()),
            (T[Re] = R)),
            R.matrix.fromArray(Le.transform.matrix),
            R.matrix.decompose(R.position, R.quaternion, R.scale),
            R.projectionMatrix.fromArray(Le.projectionMatrix),
            R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),
            R.viewport.set(He.x, He.y, He.width, He.height),
            Re === 0 &&
              (M.matrix.copy(R.matrix),
              M.matrix.decompose(M.position, M.quaternion, M.scale)),
            le === !0 && M.cameras.push(R);
        }
        const be = s.enabledFeatures;
        if (be && be.includes("depth-sensing")) {
          const Re = d.getDepthInformation(ue[0]);
          Re && Re.isValid && Re.texture && v.init(e, Re, s.renderState);
        }
      }
      for (let ue = 0; ue < S.length; ue++) {
        const le = E[ue],
          be = S[ue];
        le !== null && be !== void 0 && be.update(le, J, h || o);
      }
      me && me(W, J),
        J.detectedPlanes &&
          i.dispatchEvent({ type: "planesdetected", data: J }),
        (g = null);
    }
    const ze = new WebGLAnimation();
    ze.setAnimationLoop(Ie),
      (this.setAnimationLoop = function (W) {
        me = W;
      }),
      (this.dispose = function () {});
  }
}
const _e1 = /* @__PURE__ */ new Euler(),
  _m1 = /* @__PURE__ */ new Matrix4();
function WebGLMaterials(r, e) {
  function n(_, m) {
    _.matrixAutoUpdate === !0 && _.updateMatrix(), m.value.copy(_.matrix);
  }
  function i(_, m) {
    m.color.getRGB(_.fogColor.value, getUnlitUniformColorSpace(r)),
      m.isFog
        ? ((_.fogNear.value = m.near), (_.fogFar.value = m.far))
        : m.isFogExp2 && (_.fogDensity.value = m.density);
  }
  function s(_, m, A, S, E) {
    m.isMeshBasicMaterial || m.isMeshLambertMaterial
      ? a(_, m)
      : m.isMeshToonMaterial
      ? (a(_, m), d(_, m))
      : m.isMeshPhongMaterial
      ? (a(_, m), u(_, m))
      : m.isMeshStandardMaterial
      ? (a(_, m), f(_, m), m.isMeshPhysicalMaterial && p(_, m, E))
      : m.isMeshMatcapMaterial
      ? (a(_, m), g(_, m))
      : m.isMeshDepthMaterial
      ? a(_, m)
      : m.isMeshDistanceMaterial
      ? (a(_, m), v(_, m))
      : m.isMeshNormalMaterial
      ? a(_, m)
      : m.isLineBasicMaterial
      ? (o(_, m), m.isLineDashedMaterial && l(_, m))
      : m.isPointsMaterial
      ? c(_, m, A, S)
      : m.isSpriteMaterial
      ? h(_, m)
      : m.isShadowMaterial
      ? (_.color.value.copy(m.color), (_.opacity.value = m.opacity))
      : m.isShaderMaterial && (m.uniformsNeedUpdate = !1);
  }
  function a(_, m) {
    (_.opacity.value = m.opacity),
      m.color && _.diffuse.value.copy(m.color),
      m.emissive &&
        _.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),
      m.map && ((_.map.value = m.map), n(m.map, _.mapTransform)),
      m.alphaMap &&
        ((_.alphaMap.value = m.alphaMap), n(m.alphaMap, _.alphaMapTransform)),
      m.bumpMap &&
        ((_.bumpMap.value = m.bumpMap),
        n(m.bumpMap, _.bumpMapTransform),
        (_.bumpScale.value = m.bumpScale),
        m.side === 1 && (_.bumpScale.value *= -1)),
      m.normalMap &&
        ((_.normalMap.value = m.normalMap),
        n(m.normalMap, _.normalMapTransform),
        _.normalScale.value.copy(m.normalScale),
        m.side === 1 && _.normalScale.value.negate()),
      m.displacementMap &&
        ((_.displacementMap.value = m.displacementMap),
        n(m.displacementMap, _.displacementMapTransform),
        (_.displacementScale.value = m.displacementScale),
        (_.displacementBias.value = m.displacementBias)),
      m.emissiveMap &&
        ((_.emissiveMap.value = m.emissiveMap),
        n(m.emissiveMap, _.emissiveMapTransform)),
      m.specularMap &&
        ((_.specularMap.value = m.specularMap),
        n(m.specularMap, _.specularMapTransform)),
      m.alphaTest > 0 && (_.alphaTest.value = m.alphaTest);
    const A = e.get(m),
      S = A.envMap,
      E = A.envMapRotation;
    S &&
      ((_.envMap.value = S),
      _e1.copy(E),
      (_e1.x *= -1),
      (_e1.y *= -1),
      (_e1.z *= -1),
      S.isCubeTexture &&
        S.isRenderTargetTexture === !1 &&
        ((_e1.y *= -1), (_e1.z *= -1)),
      _.envMapRotation.value.setFromMatrix4(_m1.makeRotationFromEuler(_e1)),
      (_.flipEnvMap.value =
        S.isCubeTexture && S.isRenderTargetTexture === !1 ? -1 : 1),
      (_.reflectivity.value = m.reflectivity),
      (_.ior.value = m.ior),
      (_.refractionRatio.value = m.refractionRatio)),
      m.lightMap &&
        ((_.lightMap.value = m.lightMap),
        (_.lightMapIntensity.value = m.lightMapIntensity),
        n(m.lightMap, _.lightMapTransform)),
      m.aoMap &&
        ((_.aoMap.value = m.aoMap),
        (_.aoMapIntensity.value = m.aoMapIntensity),
        n(m.aoMap, _.aoMapTransform));
  }
  function o(_, m) {
    _.diffuse.value.copy(m.color),
      (_.opacity.value = m.opacity),
      m.map && ((_.map.value = m.map), n(m.map, _.mapTransform));
  }
  function l(_, m) {
    (_.dashSize.value = m.dashSize),
      (_.totalSize.value = m.dashSize + m.gapSize),
      (_.scale.value = m.scale);
  }
  function c(_, m, A, S) {
    _.diffuse.value.copy(m.color),
      (_.opacity.value = m.opacity),
      (_.size.value = m.size * A),
      (_.scale.value = S * 0.5),
      m.map && ((_.map.value = m.map), n(m.map, _.uvTransform)),
      m.alphaMap &&
        ((_.alphaMap.value = m.alphaMap), n(m.alphaMap, _.alphaMapTransform)),
      m.alphaTest > 0 && (_.alphaTest.value = m.alphaTest);
  }
  function h(_, m) {
    _.diffuse.value.copy(m.color),
      (_.opacity.value = m.opacity),
      (_.rotation.value = m.rotation),
      m.map && ((_.map.value = m.map), n(m.map, _.mapTransform)),
      m.alphaMap &&
        ((_.alphaMap.value = m.alphaMap), n(m.alphaMap, _.alphaMapTransform)),
      m.alphaTest > 0 && (_.alphaTest.value = m.alphaTest);
  }
  function u(_, m) {
    _.specular.value.copy(m.specular),
      (_.shininess.value = Math.max(m.shininess, 1e-4));
  }
  function d(_, m) {
    m.gradientMap && (_.gradientMap.value = m.gradientMap);
  }
  function f(_, m) {
    (_.metalness.value = m.metalness),
      m.metalnessMap &&
        ((_.metalnessMap.value = m.metalnessMap),
        n(m.metalnessMap, _.metalnessMapTransform)),
      (_.roughness.value = m.roughness),
      m.roughnessMap &&
        ((_.roughnessMap.value = m.roughnessMap),
        n(m.roughnessMap, _.roughnessMapTransform)),
      m.envMap && (_.envMapIntensity.value = m.envMapIntensity);
  }
  function p(_, m, A) {
    (_.ior.value = m.ior),
      m.sheen > 0 &&
        (_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),
        (_.sheenRoughness.value = m.sheenRoughness),
        m.sheenColorMap &&
          ((_.sheenColorMap.value = m.sheenColorMap),
          n(m.sheenColorMap, _.sheenColorMapTransform)),
        m.sheenRoughnessMap &&
          ((_.sheenRoughnessMap.value = m.sheenRoughnessMap),
          n(m.sheenRoughnessMap, _.sheenRoughnessMapTransform))),
      m.clearcoat > 0 &&
        ((_.clearcoat.value = m.clearcoat),
        (_.clearcoatRoughness.value = m.clearcoatRoughness),
        m.clearcoatMap &&
          ((_.clearcoatMap.value = m.clearcoatMap),
          n(m.clearcoatMap, _.clearcoatMapTransform)),
        m.clearcoatRoughnessMap &&
          ((_.clearcoatRoughnessMap.value = m.clearcoatRoughnessMap),
          n(m.clearcoatRoughnessMap, _.clearcoatRoughnessMapTransform)),
        m.clearcoatNormalMap &&
          ((_.clearcoatNormalMap.value = m.clearcoatNormalMap),
          n(m.clearcoatNormalMap, _.clearcoatNormalMapTransform),
          _.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),
          m.side === 1 && _.clearcoatNormalScale.value.negate())),
      m.dispersion > 0 && (_.dispersion.value = m.dispersion),
      m.iridescence > 0 &&
        ((_.iridescence.value = m.iridescence),
        (_.iridescenceIOR.value = m.iridescenceIOR),
        (_.iridescenceThicknessMinimum.value = m.iridescenceThicknessRange[0]),
        (_.iridescenceThicknessMaximum.value = m.iridescenceThicknessRange[1]),
        m.iridescenceMap &&
          ((_.iridescenceMap.value = m.iridescenceMap),
          n(m.iridescenceMap, _.iridescenceMapTransform)),
        m.iridescenceThicknessMap &&
          ((_.iridescenceThicknessMap.value = m.iridescenceThicknessMap),
          n(m.iridescenceThicknessMap, _.iridescenceThicknessMapTransform))),
      m.transmission > 0 &&
        ((_.transmission.value = m.transmission),
        (_.transmissionSamplerMap.value = A.texture),
        _.transmissionSamplerSize.value.set(A.width, A.height),
        m.transmissionMap &&
          ((_.transmissionMap.value = m.transmissionMap),
          n(m.transmissionMap, _.transmissionMapTransform)),
        (_.thickness.value = m.thickness),
        m.thicknessMap &&
          ((_.thicknessMap.value = m.thicknessMap),
          n(m.thicknessMap, _.thicknessMapTransform)),
        (_.attenuationDistance.value = m.attenuationDistance),
        _.attenuationColor.value.copy(m.attenuationColor)),
      m.anisotropy > 0 &&
        (_.anisotropyVector.value.set(
          m.anisotropy * Math.cos(m.anisotropyRotation),
          m.anisotropy * Math.sin(m.anisotropyRotation)
        ),
        m.anisotropyMap &&
          ((_.anisotropyMap.value = m.anisotropyMap),
          n(m.anisotropyMap, _.anisotropyMapTransform))),
      (_.specularIntensity.value = m.specularIntensity),
      _.specularColor.value.copy(m.specularColor),
      m.specularColorMap &&
        ((_.specularColorMap.value = m.specularColorMap),
        n(m.specularColorMap, _.specularColorMapTransform)),
      m.specularIntensityMap &&
        ((_.specularIntensityMap.value = m.specularIntensityMap),
        n(m.specularIntensityMap, _.specularIntensityMapTransform));
  }
  function g(_, m) {
    m.matcap && (_.matcap.value = m.matcap);
  }
  function v(_, m) {
    const A = e.get(m).light;
    _.referencePosition.value.setFromMatrixPosition(A.matrixWorld),
      (_.nearDistance.value = A.shadow.camera.near),
      (_.farDistance.value = A.shadow.camera.far);
  }
  return {
    refreshFogUniforms: i,
    refreshMaterialUniforms: s,
  };
}
function WebGLUniformsGroups(r, e, n, i) {
  let s = {},
    a = {},
    o = [];
  const l = r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(A, S) {
    const E = S.program;
    i.uniformBlockBinding(A, E);
  }
  function h(A, S) {
    let E = s[A.id];
    E === void 0 &&
      (g(A), (E = u(A)), (s[A.id] = E), A.addEventListener("dispose", _));
    const N = S.program;
    i.updateUBOMapping(A, N);
    const w = e.render.frame;
    a[A.id] !== w && (f(A), (a[A.id] = w));
  }
  function u(A) {
    const S = d();
    A.__bindingPointIndex = S;
    const E = r.createBuffer(),
      N = A.__size,
      w = A.usage;
    return (
      r.bindBuffer(r.UNIFORM_BUFFER, E),
      r.bufferData(r.UNIFORM_BUFFER, N, w),
      r.bindBuffer(r.UNIFORM_BUFFER, null),
      r.bindBufferBase(r.UNIFORM_BUFFER, S, E),
      E
    );
  }
  function d() {
    for (let A = 0; A < l; A++) if (o.indexOf(A) === -1) return o.push(A), A;
    return (
      console.error(
        "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
      ),
      0
    );
  }
  function f(A) {
    const S = s[A.id],
      E = A.uniforms,
      N = A.__cache;
    r.bindBuffer(r.UNIFORM_BUFFER, S);
    for (let w = 0, C = E.length; w < C; w++) {
      const U = Array.isArray(E[w]) ? E[w] : [E[w]];
      for (let T = 0, M = U.length; T < M; T++) {
        const P = U[T];
        if (p(P, w, T, N) === !0) {
          const z = P.__offset,
            O = Array.isArray(P.value) ? P.value : [P.value];
          let G = 0;
          for (let X = 0; X < O.length; X++) {
            const k = O[X],
              K = v(k);
            typeof k == "number" || typeof k == "boolean"
              ? ((P.__data[0] = k),
                r.bufferSubData(r.UNIFORM_BUFFER, z + G, P.__data))
              : k.isMatrix3
              ? ((P.__data[0] = k.elements[0]),
                (P.__data[1] = k.elements[1]),
                (P.__data[2] = k.elements[2]),
                (P.__data[3] = 0),
                (P.__data[4] = k.elements[3]),
                (P.__data[5] = k.elements[4]),
                (P.__data[6] = k.elements[5]),
                (P.__data[7] = 0),
                (P.__data[8] = k.elements[6]),
                (P.__data[9] = k.elements[7]),
                (P.__data[10] = k.elements[8]),
                (P.__data[11] = 0))
              : (k.toArray(P.__data, G),
                (G += K.storage / Float32Array.BYTES_PER_ELEMENT));
          }
          r.bufferSubData(r.UNIFORM_BUFFER, z, P.__data);
        }
      }
    }
    r.bindBuffer(r.UNIFORM_BUFFER, null);
  }
  function p(A, S, E, N) {
    const w = A.value,
      C = S + "_" + E;
    if (N[C] === void 0)
      return (
        typeof w == "number" || typeof w == "boolean"
          ? (N[C] = w)
          : (N[C] = w.clone()),
        !0
      );
    {
      const U = N[C];
      if (typeof w == "number" || typeof w == "boolean") {
        if (U !== w) return (N[C] = w), !0;
      } else if (U.equals(w) === !1) return U.copy(w), !0;
    }
    return !1;
  }
  function g(A) {
    const S = A.uniforms;
    let E = 0;
    const N = 16;
    for (let C = 0, U = S.length; C < U; C++) {
      const T = Array.isArray(S[C]) ? S[C] : [S[C]];
      for (let M = 0, P = T.length; M < P; M++) {
        const z = T[M],
          O = Array.isArray(z.value) ? z.value : [z.value];
        for (let G = 0, X = O.length; G < X; G++) {
          const k = O[G],
            K = v(k),
            H = E % N;
          H !== 0 && N - H < K.boundary && (E += N - H),
            (z.__data = new Float32Array(
              K.storage / Float32Array.BYTES_PER_ELEMENT
            )),
            (z.__offset = E),
            (E += K.storage);
        }
      }
    }
    const w = E % N;
    return w > 0 && (E += N - w), (A.__size = E), (A.__cache = {}), this;
  }
  function v(A) {
    const S = {
      boundary: 0,
      // bytes
      storage: 0,
      // bytes
    };
    return (
      typeof A == "number" || typeof A == "boolean"
        ? ((S.boundary = 4), (S.storage = 4))
        : A.isVector2
        ? ((S.boundary = 8), (S.storage = 8))
        : A.isVector3 || A.isColor
        ? ((S.boundary = 16), (S.storage = 12))
        : A.isVector4
        ? ((S.boundary = 16), (S.storage = 16))
        : A.isMatrix3
        ? ((S.boundary = 48), (S.storage = 48))
        : A.isMatrix4
        ? ((S.boundary = 64), (S.storage = 64))
        : A.isTexture
        ? console.warn(
            "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."
          )
        : console.warn(
            "THREE.WebGLRenderer: Unsupported uniform value type.",
            A
          ),
      S
    );
  }
  function _(A) {
    const S = A.target;
    S.removeEventListener("dispose", _);
    const E = o.indexOf(S.__bindingPointIndex);
    o.splice(E, 1), r.deleteBuffer(s[S.id]), delete s[S.id], delete a[S.id];
  }
  function m() {
    for (const A in s) r.deleteBuffer(s[A]);
    (o = []), (s = {}), (a = {});
  }
  return {
    bind: c,
    update: h,
    dispose: m,
  };
}
class WebGLRenderer {
  constructor(e = {}) {
    const {
      canvas: n = createCanvasElement(),
      context: i = null,
      depth: s = !0,
      stencil: a = !1,
      alpha: o = !1,
      antialias: l = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: h = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: d = !1,
    } = e;
    this.isWebGLRenderer = !0;
    let f;
    if (i !== null) {
      if (
        typeof WebGLRenderingContext < "u" &&
        i instanceof WebGLRenderingContext
      )
        throw new Error(
          "THREE.WebGLRenderer: WebGL 1 is not supported since r163."
        );
      f = i.getContextAttributes().alpha;
    } else f = o;
    const p = new Uint32Array(4),
      g = new Int32Array(4);
    let v = null,
      _ = null;
    const m = [],
      A = [];
    (this.domElement = n),
      (this.debug = {
        /**
         * Enables error checking and reporting when shader programs are being compiled
         * @type {boolean}
         */
        checkShaderErrors: !0,
        /**
         * Callback for custom error reporting.
         * @type {?Function}
         */
        onShaderError: null,
      }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this._outputColorSpace = SRGBColorSpace),
      (this.toneMapping = 0),
      (this.toneMappingExposure = 1);
    const S = this;
    let E = !1,
      N = 0,
      w = 0,
      C = null,
      U = -1,
      T = null;
    const M = new Vector4(),
      P = new Vector4();
    let z = null;
    const O = new Color(0);
    let G = 0,
      X = n.width,
      k = n.height,
      K = 1,
      H = null,
      se = null;
    const pe = new Vector4(0, 0, X, k),
      me = new Vector4(0, 0, X, k);
    let Ie = !1;
    const ze = new Frustum();
    let W = !1,
      J = !1;
    const ue = new Matrix4(),
      le = new Vector3(),
      be = new Vector4(),
      Re = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    let Le = !1;
    function He() {
      return C === null ? K : 1;
    }
    let R = i;
    function Xe(y, I) {
      return n.getContext(y, I);
    }
    try {
      const y = {
        alpha: !0,
        depth: s,
        stencil: a,
        antialias: l,
        premultipliedAlpha: c,
        preserveDrawingBuffer: h,
        powerPreference: u,
        failIfMajorPerformanceCaveat: d,
      };
      if (
        ("setAttribute" in n &&
          n.setAttribute("data-engine", `three.js r${REVISION}`),
        n.addEventListener("webglcontextlost", $, !1),
        n.addEventListener("webglcontextrestored", q, !1),
        n.addEventListener("webglcontextcreationerror", ie, !1),
        R === null)
      ) {
        const I = "webgl2";
        if (((R = Xe(I, y)), R === null))
          throw Xe(I)
            ? new Error(
                "Error creating WebGL context with your selected attributes."
              )
            : new Error("Error creating WebGL context.");
      }
    } catch (y) {
      throw (console.error("THREE.WebGLRenderer: " + y.message), y);
    }
    let Ve,
      Ge,
      ge,
      qe,
      Te,
      we,
      b,
      x,
      V,
      Z,
      j,
      Y,
      ve,
      re,
      ce,
      Ce,
      Q,
      oe,
      De,
      Ee,
      he,
      Ae,
      Pe,
      ke;
    function L() {
      (Ve = new WebGLExtensions(R)),
        Ve.init(),
        (Ae = new WebGLUtils(R, Ve)),
        (Ge = new WebGLCapabilities(R, Ve, e, Ae)),
        (ge = new WebGLState(R)),
        (qe = new WebGLInfo(R)),
        (Te = new WebGLProperties()),
        (we = new WebGLTextures(R, Ve, ge, Te, Ge, Ae, qe)),
        (b = new WebGLCubeMaps(S)),
        (x = new WebGLCubeUVMaps(S)),
        (V = new WebGLAttributes(R)),
        (Pe = new WebGLBindingStates(R, V)),
        (Z = new WebGLGeometries(R, V, qe, Pe)),
        (j = new WebGLObjects(R, Z, V, qe)),
        (De = new WebGLMorphtargets(R, Ge, we)),
        (Ce = new WebGLClipping(Te)),
        (Y = new WebGLPrograms(S, b, x, Ve, Ge, Pe, Ce)),
        (ve = new WebGLMaterials(S, Te)),
        (re = new WebGLRenderLists()),
        (ce = new WebGLRenderStates(Ve)),
        (oe = new WebGLBackground(S, b, x, ge, j, f, c)),
        (Q = new WebGLShadowMap(S, j, Ge)),
        (ke = new WebGLUniformsGroups(R, qe, Ge, ge)),
        (Ee = new WebGLBufferRenderer(R, Ve, qe)),
        (he = new WebGLIndexedBufferRenderer(R, Ve, qe)),
        (qe.programs = Y.programs),
        (S.capabilities = Ge),
        (S.extensions = Ve),
        (S.properties = Te),
        (S.renderLists = re),
        (S.shadowMap = Q),
        (S.state = ge),
        (S.info = qe);
    }
    L();
    const ee = new WebXRManager(S, R);
    (this.xr = ee),
      (this.getContext = function () {
        return R;
      }),
      (this.getContextAttributes = function () {
        return R.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const y = Ve.get("WEBGL_lose_context");
        y && y.loseContext();
      }),
      (this.forceContextRestore = function () {
        const y = Ve.get("WEBGL_lose_context");
        y && y.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return K;
      }),
      (this.setPixelRatio = function (y) {
        y !== void 0 && ((K = y), this.setSize(X, k, !1));
      }),
      (this.getSize = function (y) {
        return y.set(X, k);
      }),
      (this.setSize = function (y, I, F = !0) {
        if (ee.isPresenting) {
          console.warn(
            "THREE.WebGLRenderer: Can't change size while VR device is presenting."
          );
          return;
        }
        (X = y),
          (k = I),
          (n.width = Math.floor(y * K)),
          (n.height = Math.floor(I * K)),
          F === !0 && ((n.style.width = y + "px"), (n.style.height = I + "px")),
          this.setViewport(0, 0, y, I);
      }),
      (this.getDrawingBufferSize = function (y) {
        return y.set(X * K, k * K).floor();
      }),
      (this.setDrawingBufferSize = function (y, I, F) {
        (X = y),
          (k = I),
          (K = F),
          (n.width = Math.floor(y * F)),
          (n.height = Math.floor(I * F)),
          this.setViewport(0, 0, y, I);
      }),
      (this.getCurrentViewport = function (y) {
        return y.copy(M);
      }),
      (this.getViewport = function (y) {
        return y.copy(pe);
      }),
      (this.setViewport = function (y, I, F, B) {
        y.isVector4 ? pe.set(y.x, y.y, y.z, y.w) : pe.set(y, I, F, B),
          ge.viewport(M.copy(pe).multiplyScalar(K).round());
      }),
      (this.getScissor = function (y) {
        return y.copy(me);
      }),
      (this.setScissor = function (y, I, F, B) {
        y.isVector4 ? me.set(y.x, y.y, y.z, y.w) : me.set(y, I, F, B),
          ge.scissor(P.copy(me).multiplyScalar(K).round());
      }),
      (this.getScissorTest = function () {
        return Ie;
      }),
      (this.setScissorTest = function (y) {
        ge.setScissorTest((Ie = y));
      }),
      (this.setOpaqueSort = function (y) {
        H = y;
      }),
      (this.setTransparentSort = function (y) {
        se = y;
      }),
      (this.getClearColor = function (y) {
        return y.copy(oe.getClearColor());
      }),
      (this.setClearColor = function () {
        oe.setClearColor.apply(oe, arguments);
      }),
      (this.getClearAlpha = function () {
        return oe.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        oe.setClearAlpha.apply(oe, arguments);
      }),
      (this.clear = function (y = !0, I = !0, F = !0) {
        let B = 0;
        if (y) {
          let D = !1;
          if (C !== null) {
            const ne = C.texture.format;
            D = ne === 1033 || ne === 1031 || ne === 1029;
          }
          if (D) {
            const ne = C.texture.type,
              ae =
                ne === 1009 ||
                ne === 1014 ||
                ne === 1012 ||
                ne === 1020 ||
                ne === 1017 ||
                ne === 1018,
              de = oe.getClearColor(),
              fe = oe.getClearAlpha(),
              Me = de.r,
              ye = de.g,
              xe = de.b;
            ae
              ? ((p[0] = Me),
                (p[1] = ye),
                (p[2] = xe),
                (p[3] = fe),
                R.clearBufferuiv(R.COLOR, 0, p))
              : ((g[0] = Me),
                (g[1] = ye),
                (g[2] = xe),
                (g[3] = fe),
                R.clearBufferiv(R.COLOR, 0, g));
          } else B |= R.COLOR_BUFFER_BIT;
        }
        I && (B |= R.DEPTH_BUFFER_BIT),
          F &&
            ((B |= R.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(4294967295)),
          R.clear(B);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        n.removeEventListener("webglcontextlost", $, !1),
          n.removeEventListener("webglcontextrestored", q, !1),
          n.removeEventListener("webglcontextcreationerror", ie, !1),
          re.dispose(),
          ce.dispose(),
          Te.dispose(),
          b.dispose(),
          x.dispose(),
          j.dispose(),
          Pe.dispose(),
          ke.dispose(),
          Y.dispose(),
          ee.dispose(),
          ee.removeEventListener("sessionstart", nt),
          ee.removeEventListener("sessionend", mt),
          st.stop();
      });
    function $(y) {
      y.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        (E = !0);
    }
    function q() {
      console.log("THREE.WebGLRenderer: Context Restored."), (E = !1);
      const y = qe.autoReset,
        I = Q.enabled,
        F = Q.autoUpdate,
        B = Q.needsUpdate,
        D = Q.type;
      L(),
        (qe.autoReset = y),
        (Q.enabled = I),
        (Q.autoUpdate = F),
        (Q.needsUpdate = B),
        (Q.type = D);
    }
    function ie(y) {
      console.error(
        "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
        y.statusMessage
      );
    }
    function Se(y) {
      const I = y.target;
      I.removeEventListener("dispose", Se), Ue(I);
    }
    function Ue(y) {
      Ye(y), Te.remove(y);
    }
    function Ye(y) {
      const I = Te.get(y).programs;
      I !== void 0 &&
        (I.forEach(function (F) {
          Y.releaseProgram(F);
        }),
        y.isShaderMaterial && Y.releaseShaderCache(y));
    }
    this.renderBufferDirect = function (y, I, F, B, D, ne) {
      I === null && (I = Re);
      const ae = D.isMesh && D.matrixWorld.determinant() < 0,
        de = Et(y, I, F, B, D);
      ge.setMaterial(B, ae);
      let fe = F.index,
        Me = 1;
      if (B.wireframe === !0) {
        if (((fe = Z.getWireframeAttribute(F)), fe === void 0)) return;
        Me = 2;
      }
      const ye = F.drawRange,
        xe = F.attributes.position;
      let Fe = ye.start * Me,
        We = (ye.start + ye.count) * Me;
      ne !== null &&
        ((Fe = Math.max(Fe, ne.start * Me)),
        (We = Math.min(We, (ne.start + ne.count) * Me))),
        fe !== null
          ? ((Fe = Math.max(Fe, 0)), (We = Math.min(We, fe.count)))
          : xe != null &&
            ((Fe = Math.max(Fe, 0)), (We = Math.min(We, xe.count)));
      const $e = We - Fe;
      if ($e < 0 || $e === 1 / 0) return;
      Pe.setup(D, B, de, F, fe);
      let Je,
        Oe = Ee;
      if (
        (fe !== null && ((Je = V.get(fe)), (Oe = he), Oe.setIndex(Je)),
        D.isMesh)
      )
        B.wireframe === !0
          ? (ge.setLineWidth(B.wireframeLinewidth * He()), Oe.setMode(R.LINES))
          : Oe.setMode(R.TRIANGLES);
      else if (D.isLine) {
        let _e = B.linewidth;
        _e === void 0 && (_e = 1),
          ge.setLineWidth(_e * He()),
          D.isLineSegments
            ? Oe.setMode(R.LINES)
            : D.isLineLoop
            ? Oe.setMode(R.LINE_LOOP)
            : Oe.setMode(R.LINE_STRIP);
      } else
        D.isPoints
          ? Oe.setMode(R.POINTS)
          : D.isSprite && Oe.setMode(R.TRIANGLES);
      if (D.isBatchedMesh)
        if (D._multiDrawInstances !== null)
          Oe.renderMultiDrawInstances(
            D._multiDrawStarts,
            D._multiDrawCounts,
            D._multiDrawCount,
            D._multiDrawInstances
          );
        else if (Ve.get("WEBGL_multi_draw"))
          Oe.renderMultiDraw(
            D._multiDrawStarts,
            D._multiDrawCounts,
            D._multiDrawCount
          );
        else {
          const _e = D._multiDrawStarts,
            je = D._multiDrawCounts,
            Be = D._multiDrawCount,
            tt = fe ? V.get(fe).bytesPerElement : 1,
            at = Te.get(B).currentProgram.getUniforms();
          for (let Qe = 0; Qe < Be; Qe++)
            at.setValue(R, "_gl_DrawID", Qe), Oe.render(_e[Qe] / tt, je[Qe]);
        }
      else if (D.isInstancedMesh) Oe.renderInstances(Fe, $e, D.count);
      else if (F.isInstancedBufferGeometry) {
        const _e = F._maxInstanceCount !== void 0 ? F._maxInstanceCount : 1 / 0,
          je = Math.min(F.instanceCount, _e);
        Oe.renderInstances(Fe, $e, je);
      } else Oe.render(Fe, $e);
    };
    function Ke(y, I, F) {
      y.transparent === !0 && y.side === 2 && y.forceSinglePass === !1
        ? ((y.side = 1),
          (y.needsUpdate = !0),
          lt(y, I, F),
          (y.side = 0),
          (y.needsUpdate = !0),
          lt(y, I, F),
          (y.side = 2))
        : lt(y, I, F);
    }
    (this.compile = function (y, I, F = null) {
      F === null && (F = y),
        (_ = ce.get(F)),
        _.init(I),
        A.push(_),
        F.traverseVisible(function (D) {
          D.isLight &&
            D.layers.test(I.layers) &&
            (_.pushLight(D), D.castShadow && _.pushShadow(D));
        }),
        y !== F &&
          y.traverseVisible(function (D) {
            D.isLight &&
              D.layers.test(I.layers) &&
              (_.pushLight(D), D.castShadow && _.pushShadow(D));
          }),
        _.setupLights();
      const B = /* @__PURE__ */ new Set();
      return (
        y.traverse(function (D) {
          const ne = D.material;
          if (ne)
            if (Array.isArray(ne))
              for (let ae = 0; ae < ne.length; ae++) {
                const de = ne[ae];
                Ke(de, F, D), B.add(de);
              }
            else Ke(ne, F, D), B.add(ne);
        }),
        A.pop(),
        (_ = null),
        B
      );
    }),
      (this.compileAsync = function (y, I, F = null) {
        const B = this.compile(y, I, F);
        return new Promise((D) => {
          function ne() {
            if (
              (B.forEach(function (ae) {
                Te.get(ae).currentProgram.isReady() && B.delete(ae);
              }),
              B.size === 0)
            ) {
              D(y);
              return;
            }
            setTimeout(ne, 10);
          }
          Ve.get("KHR_parallel_shader_compile") !== null
            ? ne()
            : setTimeout(ne, 10);
        });
      });
    let Ne = null;
    function it(y) {
      Ne && Ne(y);
    }
    function nt() {
      st.stop();
    }
    function mt() {
      st.start();
    }
    const st = new WebGLAnimation();
    st.setAnimationLoop(it),
      typeof self < "u" && st.setContext(self),
      (this.setAnimationLoop = function (y) {
        (Ne = y), ee.setAnimationLoop(y), y === null ? st.stop() : st.start();
      }),
      ee.addEventListener("sessionstart", nt),
      ee.addEventListener("sessionend", mt),
      (this.render = function (y, I) {
        if (I !== void 0 && I.isCamera !== !0) {
          console.error(
            "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
          );
          return;
        }
        if (E === !0) return;
        if (
          (y.matrixWorldAutoUpdate === !0 && y.updateMatrixWorld(),
          I.parent === null &&
            I.matrixWorldAutoUpdate === !0 &&
            I.updateMatrixWorld(),
          ee.enabled === !0 &&
            ee.isPresenting === !0 &&
            (ee.cameraAutoUpdate === !0 && ee.updateCamera(I),
            (I = ee.getCamera())),
          y.isScene === !0 && y.onBeforeRender(S, y, I, C),
          (_ = ce.get(y, A.length)),
          _.init(I),
          A.push(_),
          ue.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse),
          ze.setFromProjectionMatrix(ue),
          (J = this.localClippingEnabled),
          (W = Ce.init(this.clippingPlanes, J)),
          (v = re.get(y, m.length)),
          v.init(),
          m.push(v),
          ee.enabled === !0 && ee.isPresenting === !0)
        ) {
          const ne = S.xr.getDepthSensingMesh();
          ne !== null && ut(ne, I, -1 / 0, S.sortObjects);
        }
        ut(y, I, 0, S.sortObjects),
          v.finish(),
          S.sortObjects === !0 && v.sort(H, se),
          (Le =
            ee.enabled === !1 ||
            ee.isPresenting === !1 ||
            ee.hasDepthSensing() === !1),
          Le && oe.addToRenderList(v, y),
          this.info.render.frame++,
          W === !0 && Ce.beginShadows();
        const F = _.state.shadowsArray;
        Q.render(F, y, I),
          W === !0 && Ce.endShadows(),
          this.info.autoReset === !0 && this.info.reset();
        const B = v.opaque,
          D = v.transmissive;
        if ((_.setupLights(), I.isArrayCamera)) {
          const ne = I.cameras;
          if (D.length > 0)
            for (let ae = 0, de = ne.length; ae < de; ae++) {
              const fe = ne[ae];
              gt(B, D, y, fe);
            }
          Le && oe.render(y);
          for (let ae = 0, de = ne.length; ae < de; ae++) {
            const fe = ne[ae];
            _t(v, y, fe, fe.viewport);
          }
        } else D.length > 0 && gt(B, D, y, I), Le && oe.render(y), _t(v, y, I);
        C !== null &&
          (we.updateMultisampleRenderTarget(C), we.updateRenderTargetMipmap(C)),
          y.isScene === !0 && y.onAfterRender(S, y, I),
          Pe.resetDefaultState(),
          (U = -1),
          (T = null),
          A.pop(),
          A.length > 0
            ? ((_ = A[A.length - 1]),
              W === !0 && Ce.setGlobalState(S.clippingPlanes, _.state.camera))
            : (_ = null),
          m.pop(),
          m.length > 0 ? (v = m[m.length - 1]) : (v = null);
      });
    function ut(y, I, F, B) {
      if (y.visible === !1) return;
      if (y.layers.test(I.layers)) {
        if (y.isGroup) F = y.renderOrder;
        else if (y.isLOD) y.autoUpdate === !0 && y.update(I);
        else if (y.isLight) _.pushLight(y), y.castShadow && _.pushShadow(y);
        else if (y.isSprite) {
          if (!y.frustumCulled || ze.intersectsSprite(y)) {
            B && be.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ue);
            const ae = j.update(y),
              de = y.material;
            de.visible && v.push(y, ae, de, F, be.z, null);
          }
        } else if (
          (y.isMesh || y.isLine || y.isPoints) &&
          (!y.frustumCulled || ze.intersectsObject(y))
        ) {
          const ae = j.update(y),
            de = y.material;
          if (
            (B &&
              (y.boundingSphere !== void 0
                ? (y.boundingSphere === null && y.computeBoundingSphere(),
                  be.copy(y.boundingSphere.center))
                : (ae.boundingSphere === null && ae.computeBoundingSphere(),
                  be.copy(ae.boundingSphere.center)),
              be.applyMatrix4(y.matrixWorld).applyMatrix4(ue)),
            Array.isArray(de))
          ) {
            const fe = ae.groups;
            for (let Me = 0, ye = fe.length; Me < ye; Me++) {
              const xe = fe[Me],
                Fe = de[xe.materialIndex];
              Fe && Fe.visible && v.push(y, ae, Fe, F, be.z, xe);
            }
          } else de.visible && v.push(y, ae, de, F, be.z, null);
        }
      }
      const ne = y.children;
      for (let ae = 0, de = ne.length; ae < de; ae++) ut(ne[ae], I, F, B);
    }
    function _t(y, I, F, B) {
      const D = y.opaque,
        ne = y.transmissive,
        ae = y.transparent;
      _.setupLightsView(F),
        W === !0 && Ce.setGlobalState(S.clippingPlanes, F),
        B && ge.viewport(M.copy(B)),
        D.length > 0 && ot(D, I, F),
        ne.length > 0 && ot(ne, I, F),
        ae.length > 0 && ot(ae, I, F),
        ge.buffers.depth.setTest(!0),
        ge.buffers.depth.setMask(!0),
        ge.buffers.color.setMask(!0),
        ge.setPolygonOffset(!1);
    }
    function gt(y, I, F, B) {
      if ((F.isScene === !0 ? F.overrideMaterial : null) !== null) return;
      _.state.transmissionRenderTarget[B.id] === void 0 &&
        (_.state.transmissionRenderTarget[B.id] = new WebGLRenderTarget(1, 1, {
          generateMipmaps: !0,
          type:
            Ve.has("EXT_color_buffer_half_float") ||
            Ve.has("EXT_color_buffer_float")
              ? 1016
              : 1009,
          minFilter: 1008,
          samples: 4,
          stencilBuffer: a,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: ColorManagement.workingColorSpace,
        }));
      const ne = _.state.transmissionRenderTarget[B.id],
        ae = B.viewport || M;
      ne.setSize(ae.z, ae.w);
      const de = S.getRenderTarget();
      S.setRenderTarget(ne),
        S.getClearColor(O),
        (G = S.getClearAlpha()),
        G < 1 && S.setClearColor(16777215, 0.5),
        Le ? oe.render(F) : S.clear();
      const fe = S.toneMapping;
      S.toneMapping = 0;
      const Me = B.viewport;
      if (
        (B.viewport !== void 0 && (B.viewport = void 0),
        _.setupLightsView(B),
        W === !0 && Ce.setGlobalState(S.clippingPlanes, B),
        ot(y, F, B),
        we.updateMultisampleRenderTarget(ne),
        we.updateRenderTargetMipmap(ne),
        Ve.has("WEBGL_multisampled_render_to_texture") === !1)
      ) {
        let ye = !1;
        for (let xe = 0, Fe = I.length; xe < Fe; xe++) {
          const We = I[xe],
            $e = We.object,
            Je = We.geometry,
            Oe = We.material,
            _e = We.group;
          if (Oe.side === 2 && $e.layers.test(B.layers)) {
            const je = Oe.side;
            (Oe.side = 1),
              (Oe.needsUpdate = !0),
              vt($e, F, B, Je, Oe, _e),
              (Oe.side = je),
              (Oe.needsUpdate = !0),
              (ye = !0);
          }
        }
        ye === !0 &&
          (we.updateMultisampleRenderTarget(ne),
          we.updateRenderTargetMipmap(ne));
      }
      S.setRenderTarget(de),
        S.setClearColor(O, G),
        Me !== void 0 && (B.viewport = Me),
        (S.toneMapping = fe);
    }
    function ot(y, I, F) {
      const B = I.isScene === !0 ? I.overrideMaterial : null;
      for (let D = 0, ne = y.length; D < ne; D++) {
        const ae = y[D],
          de = ae.object,
          fe = ae.geometry,
          Me = B === null ? ae.material : B,
          ye = ae.group;
        de.layers.test(F.layers) && vt(de, I, F, fe, Me, ye);
      }
    }
    function vt(y, I, F, B, D, ne) {
      y.onBeforeRender(S, I, F, B, D, ne),
        y.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse, y.matrixWorld),
        y.normalMatrix.getNormalMatrix(y.modelViewMatrix),
        D.transparent === !0 && D.side === 2 && D.forceSinglePass === !1
          ? ((D.side = 1),
            (D.needsUpdate = !0),
            S.renderBufferDirect(F, I, B, D, y, ne),
            (D.side = 0),
            (D.needsUpdate = !0),
            S.renderBufferDirect(F, I, B, D, y, ne),
            (D.side = 2))
          : S.renderBufferDirect(F, I, B, D, y, ne),
        y.onAfterRender(S, I, F, B, D, ne);
    }
    function lt(y, I, F) {
      I.isScene !== !0 && (I = Re);
      const B = Te.get(y),
        D = _.state.lights,
        ne = _.state.shadowsArray,
        ae = D.state.version,
        de = Y.getParameters(y, D.state, ne, I, F),
        fe = Y.getProgramCacheKey(de);
      let Me = B.programs;
      (B.environment = y.isMeshStandardMaterial ? I.environment : null),
        (B.fog = I.fog),
        (B.envMap = (y.isMeshStandardMaterial ? x : b).get(
          y.envMap || B.environment
        )),
        (B.envMapRotation =
          B.environment !== null && y.envMap === null
            ? I.environmentRotation
            : y.envMapRotation),
        Me === void 0 &&
          (y.addEventListener("dispose", Se),
          (Me = /* @__PURE__ */ new Map()),
          (B.programs = Me));
      let ye = Me.get(fe);
      if (ye !== void 0) {
        if (B.currentProgram === ye && B.lightsStateVersion === ae)
          return St(y, de), ye;
      } else
        (de.uniforms = Y.getUniforms(y)),
          y.onBeforeCompile(de, S),
          (ye = Y.acquireProgram(de, fe)),
          Me.set(fe, ye),
          (B.uniforms = de.uniforms);
      const xe = B.uniforms;
      return (
        ((!y.isShaderMaterial && !y.isRawShaderMaterial) ||
          y.clipping === !0) &&
          (xe.clippingPlanes = Ce.uniform),
        St(y, de),
        (B.needsLights = At(y)),
        (B.lightsStateVersion = ae),
        B.needsLights &&
          ((xe.ambientLightColor.value = D.state.ambient),
          (xe.lightProbe.value = D.state.probe),
          (xe.directionalLights.value = D.state.directional),
          (xe.directionalLightShadows.value = D.state.directionalShadow),
          (xe.spotLights.value = D.state.spot),
          (xe.spotLightShadows.value = D.state.spotShadow),
          (xe.rectAreaLights.value = D.state.rectArea),
          (xe.ltc_1.value = D.state.rectAreaLTC1),
          (xe.ltc_2.value = D.state.rectAreaLTC2),
          (xe.pointLights.value = D.state.point),
          (xe.pointLightShadows.value = D.state.pointShadow),
          (xe.hemisphereLights.value = D.state.hemi),
          (xe.directionalShadowMap.value = D.state.directionalShadowMap),
          (xe.directionalShadowMatrix.value = D.state.directionalShadowMatrix),
          (xe.spotShadowMap.value = D.state.spotShadowMap),
          (xe.spotLightMatrix.value = D.state.spotLightMatrix),
          (xe.spotLightMap.value = D.state.spotLightMap),
          (xe.pointShadowMap.value = D.state.pointShadowMap),
          (xe.pointShadowMatrix.value = D.state.pointShadowMatrix)),
        (B.currentProgram = ye),
        (B.uniformsList = null),
        ye
      );
    }
    function xt(y) {
      if (y.uniformsList === null) {
        const I = y.currentProgram.getUniforms();
        y.uniformsList = WebGLUniforms.seqWithValue(I.seq, y.uniforms);
      }
      return y.uniformsList;
    }
    function St(y, I) {
      const F = Te.get(y);
      (F.outputColorSpace = I.outputColorSpace),
        (F.batching = I.batching),
        (F.batchingColor = I.batchingColor),
        (F.instancing = I.instancing),
        (F.instancingColor = I.instancingColor),
        (F.instancingMorph = I.instancingMorph),
        (F.skinning = I.skinning),
        (F.morphTargets = I.morphTargets),
        (F.morphNormals = I.morphNormals),
        (F.morphColors = I.morphColors),
        (F.morphTargetsCount = I.morphTargetsCount),
        (F.numClippingPlanes = I.numClippingPlanes),
        (F.numIntersection = I.numClipIntersection),
        (F.vertexAlphas = I.vertexAlphas),
        (F.vertexTangents = I.vertexTangents),
        (F.toneMapping = I.toneMapping);
    }
    function Et(y, I, F, B, D) {
      I.isScene !== !0 && (I = Re), we.resetTextureUnits();
      const ne = I.fog,
        ae = B.isMeshStandardMaterial ? I.environment : null,
        de =
          C === null
            ? S.outputColorSpace
            : C.isXRRenderTarget === !0
            ? C.texture.colorSpace
            : LinearSRGBColorSpace,
        fe = (B.isMeshStandardMaterial ? x : b).get(B.envMap || ae),
        Me =
          B.vertexColors === !0 &&
          !!F.attributes.color &&
          F.attributes.color.itemSize === 4,
        ye = !!F.attributes.tangent && (!!B.normalMap || B.anisotropy > 0),
        xe = !!F.morphAttributes.position,
        Fe = !!F.morphAttributes.normal,
        We = !!F.morphAttributes.color;
      let $e = 0;
      B.toneMapped &&
        (C === null || C.isXRRenderTarget === !0) &&
        ($e = S.toneMapping);
      const Je =
          F.morphAttributes.position ||
          F.morphAttributes.normal ||
          F.morphAttributes.color,
        Oe = Je !== void 0 ? Je.length : 0,
        _e = Te.get(B),
        je = _.state.lights;
      if (W === !0 && (J === !0 || y !== T)) {
        const et = y === T && B.id === U;
        Ce.setState(B, y, et);
      }
      let Be = !1;
      B.version === _e.__version
        ? ((_e.needsLights && _e.lightsStateVersion !== je.state.version) ||
            _e.outputColorSpace !== de ||
            (D.isBatchedMesh && _e.batching === !1) ||
            (!D.isBatchedMesh && _e.batching === !0) ||
            (D.isBatchedMesh &&
              _e.batchingColor === !0 &&
              D.colorTexture === null) ||
            (D.isBatchedMesh &&
              _e.batchingColor === !1 &&
              D.colorTexture !== null) ||
            (D.isInstancedMesh && _e.instancing === !1) ||
            (!D.isInstancedMesh && _e.instancing === !0) ||
            (D.isSkinnedMesh && _e.skinning === !1) ||
            (!D.isSkinnedMesh && _e.skinning === !0) ||
            (D.isInstancedMesh &&
              _e.instancingColor === !0 &&
              D.instanceColor === null) ||
            (D.isInstancedMesh &&
              _e.instancingColor === !1 &&
              D.instanceColor !== null) ||
            (D.isInstancedMesh &&
              _e.instancingMorph === !0 &&
              D.morphTexture === null) ||
            (D.isInstancedMesh &&
              _e.instancingMorph === !1 &&
              D.morphTexture !== null) ||
            _e.envMap !== fe ||
            (B.fog === !0 && _e.fog !== ne) ||
            (_e.numClippingPlanes !== void 0 &&
              (_e.numClippingPlanes !== Ce.numPlanes ||
                _e.numIntersection !== Ce.numIntersection)) ||
            _e.vertexAlphas !== Me ||
            _e.vertexTangents !== ye ||
            _e.morphTargets !== xe ||
            _e.morphNormals !== Fe ||
            _e.morphColors !== We ||
            _e.toneMapping !== $e ||
            _e.morphTargetsCount !== Oe) &&
          (Be = !0)
        : ((Be = !0), (_e.__version = B.version));
      let tt = _e.currentProgram;
      Be === !0 && (tt = lt(B, I, D));
      let at = !1,
        Qe = !1,
        dt = !1;
      const Ze = tt.getUniforms(),
        rt = _e.uniforms;
      if (
        (ge.useProgram(tt.program) && ((at = !0), (Qe = !0), (dt = !0)),
        B.id !== U && ((U = B.id), (Qe = !0)),
        at || T !== y)
      ) {
        Ze.setValue(R, "projectionMatrix", y.projectionMatrix),
          Ze.setValue(R, "viewMatrix", y.matrixWorldInverse);
        const et = Ze.map.cameraPosition;
        et !== void 0 &&
          et.setValue(R, le.setFromMatrixPosition(y.matrixWorld)),
          Ge.logarithmicDepthBuffer &&
            Ze.setValue(
              R,
              "logDepthBufFC",
              2 / (Math.log(y.far + 1) / Math.LN2)
            ),
          (B.isMeshPhongMaterial ||
            B.isMeshToonMaterial ||
            B.isMeshLambertMaterial ||
            B.isMeshBasicMaterial ||
            B.isMeshStandardMaterial ||
            B.isShaderMaterial) &&
            Ze.setValue(R, "isOrthographic", y.isOrthographicCamera === !0),
          T !== y && ((T = y), (Qe = !0), (dt = !0));
      }
      if (D.isSkinnedMesh) {
        Ze.setOptional(R, D, "bindMatrix"),
          Ze.setOptional(R, D, "bindMatrixInverse");
        const et = D.skeleton;
        et &&
          (et.boneTexture === null && et.computeBoneTexture(),
          Ze.setValue(R, "boneTexture", et.boneTexture, we));
      }
      D.isBatchedMesh &&
        (Ze.setOptional(R, D, "batchingTexture"),
        Ze.setValue(R, "batchingTexture", D._matricesTexture, we),
        Ze.setOptional(R, D, "batchingIdTexture"),
        Ze.setValue(R, "batchingIdTexture", D._indirectTexture, we),
        Ze.setOptional(R, D, "batchingColorTexture"),
        D._colorsTexture !== null &&
          Ze.setValue(R, "batchingColorTexture", D._colorsTexture, we));
      const ft = F.morphAttributes;
      if (
        ((ft.position !== void 0 ||
          ft.normal !== void 0 ||
          ft.color !== void 0) &&
          De.update(D, F, tt),
        (Qe || _e.receiveShadow !== D.receiveShadow) &&
          ((_e.receiveShadow = D.receiveShadow),
          Ze.setValue(R, "receiveShadow", D.receiveShadow)),
        B.isMeshGouraudMaterial &&
          B.envMap !== null &&
          ((rt.envMap.value = fe),
          (rt.flipEnvMap.value =
            fe.isCubeTexture && fe.isRenderTargetTexture === !1 ? -1 : 1)),
        B.isMeshStandardMaterial &&
          B.envMap === null &&
          I.environment !== null &&
          (rt.envMapIntensity.value = I.environmentIntensity),
        Qe &&
          (Ze.setValue(R, "toneMappingExposure", S.toneMappingExposure),
          _e.needsLights && Tt(rt, dt),
          ne && B.fog === !0 && ve.refreshFogUniforms(rt, ne),
          ve.refreshMaterialUniforms(
            rt,
            B,
            K,
            k,
            _.state.transmissionRenderTarget[y.id]
          ),
          WebGLUniforms.upload(R, xt(_e), rt, we)),
        B.isShaderMaterial &&
          B.uniformsNeedUpdate === !0 &&
          (WebGLUniforms.upload(R, xt(_e), rt, we),
          (B.uniformsNeedUpdate = !1)),
        B.isSpriteMaterial && Ze.setValue(R, "center", D.center),
        Ze.setValue(R, "modelViewMatrix", D.modelViewMatrix),
        Ze.setValue(R, "normalMatrix", D.normalMatrix),
        Ze.setValue(R, "modelMatrix", D.matrixWorld),
        B.isShaderMaterial || B.isRawShaderMaterial)
      ) {
        const et = B.uniformsGroups;
        for (let pt = 0, bt = et.length; pt < bt; pt++) {
          const Mt = et[pt];
          ke.update(Mt, tt), ke.bind(Mt, tt);
        }
      }
      return tt;
    }
    function Tt(y, I) {
      (y.ambientLightColor.needsUpdate = I),
        (y.lightProbe.needsUpdate = I),
        (y.directionalLights.needsUpdate = I),
        (y.directionalLightShadows.needsUpdate = I),
        (y.pointLights.needsUpdate = I),
        (y.pointLightShadows.needsUpdate = I),
        (y.spotLights.needsUpdate = I),
        (y.spotLightShadows.needsUpdate = I),
        (y.rectAreaLights.needsUpdate = I),
        (y.hemisphereLights.needsUpdate = I);
    }
    function At(y) {
      return (
        y.isMeshLambertMaterial ||
        y.isMeshToonMaterial ||
        y.isMeshPhongMaterial ||
        y.isMeshStandardMaterial ||
        y.isShadowMaterial ||
        (y.isShaderMaterial && y.lights === !0)
      );
    }
    (this.getActiveCubeFace = function () {
      return N;
    }),
      (this.getActiveMipmapLevel = function () {
        return w;
      }),
      (this.getRenderTarget = function () {
        return C;
      }),
      (this.setRenderTargetTextures = function (y, I, F) {
        (Te.get(y.texture).__webglTexture = I),
          (Te.get(y.depthTexture).__webglTexture = F);
        const B = Te.get(y);
        (B.__hasExternalTextures = !0),
          (B.__autoAllocateDepthBuffer = F === void 0),
          B.__autoAllocateDepthBuffer ||
            (Ve.has("WEBGL_multisampled_render_to_texture") === !0 &&
              (console.warn(
                "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
              ),
              (B.__useRenderToTexture = !1)));
      }),
      (this.setRenderTargetFramebuffer = function (y, I) {
        const F = Te.get(y);
        (F.__webglFramebuffer = I), (F.__useDefaultFramebuffer = I === void 0);
      }),
      (this.setRenderTarget = function (y, I = 0, F = 0) {
        (C = y), (N = I), (w = F);
        let B = !0,
          D = null,
          ne = !1,
          ae = !1;
        if (y) {
          const fe = Te.get(y);
          fe.__useDefaultFramebuffer !== void 0
            ? (ge.bindFramebuffer(R.FRAMEBUFFER, null), (B = !1))
            : fe.__webglFramebuffer === void 0
            ? we.setupRenderTarget(y)
            : fe.__hasExternalTextures &&
              we.rebindTextures(
                y,
                Te.get(y.texture).__webglTexture,
                Te.get(y.depthTexture).__webglTexture
              );
          const Me = y.texture;
          (Me.isData3DTexture ||
            Me.isDataArrayTexture ||
            Me.isCompressedArrayTexture) &&
            (ae = !0);
          const ye = Te.get(y).__webglFramebuffer;
          y.isWebGLCubeRenderTarget
            ? (Array.isArray(ye[I]) ? (D = ye[I][F]) : (D = ye[I]), (ne = !0))
            : y.samples > 0 && we.useMultisampledRTT(y) === !1
            ? (D = Te.get(y).__webglMultisampledFramebuffer)
            : Array.isArray(ye)
            ? (D = ye[F])
            : (D = ye),
            M.copy(y.viewport),
            P.copy(y.scissor),
            (z = y.scissorTest);
        } else
          M.copy(pe).multiplyScalar(K).floor(),
            P.copy(me).multiplyScalar(K).floor(),
            (z = Ie);
        if (
          (ge.bindFramebuffer(R.FRAMEBUFFER, D) && B && ge.drawBuffers(y, D),
          ge.viewport(M),
          ge.scissor(P),
          ge.setScissorTest(z),
          ne)
        ) {
          const fe = Te.get(y.texture);
          R.framebufferTexture2D(
            R.FRAMEBUFFER,
            R.COLOR_ATTACHMENT0,
            R.TEXTURE_CUBE_MAP_POSITIVE_X + I,
            fe.__webglTexture,
            F
          );
        } else if (ae) {
          const fe = Te.get(y.texture),
            Me = I || 0;
          R.framebufferTextureLayer(
            R.FRAMEBUFFER,
            R.COLOR_ATTACHMENT0,
            fe.__webglTexture,
            F || 0,
            Me
          );
        }
        U = -1;
      }),
      (this.readRenderTargetPixels = function (y, I, F, B, D, ne, ae) {
        if (!(y && y.isWebGLRenderTarget)) {
          console.error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
          return;
        }
        let de = Te.get(y).__webglFramebuffer;
        if ((y.isWebGLCubeRenderTarget && ae !== void 0 && (de = de[ae]), de)) {
          ge.bindFramebuffer(R.FRAMEBUFFER, de);
          try {
            const fe = y.texture,
              Me = fe.format,
              ye = fe.type;
            if (!Ge.textureFormatReadable(Me)) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
              );
              return;
            }
            if (!Ge.textureTypeReadable(ye)) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
              );
              return;
            }
            I >= 0 &&
              I <= y.width - B &&
              F >= 0 &&
              F <= y.height - D &&
              R.readPixels(I, F, B, D, Ae.convert(Me), Ae.convert(ye), ne);
          } finally {
            const fe = C !== null ? Te.get(C).__webglFramebuffer : null;
            ge.bindFramebuffer(R.FRAMEBUFFER, fe);
          }
        }
      }),
      (this.readRenderTargetPixelsAsync = async function (
        y,
        I,
        F,
        B,
        D,
        ne,
        ae
      ) {
        if (!(y && y.isWebGLRenderTarget))
          throw new Error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
        let de = Te.get(y).__webglFramebuffer;
        if ((y.isWebGLCubeRenderTarget && ae !== void 0 && (de = de[ae]), de)) {
          ge.bindFramebuffer(R.FRAMEBUFFER, de);
          try {
            const fe = y.texture,
              Me = fe.format,
              ye = fe.type;
            if (!Ge.textureFormatReadable(Me))
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format."
              );
            if (!Ge.textureTypeReadable(ye))
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type."
              );
            if (I >= 0 && I <= y.width - B && F >= 0 && F <= y.height - D) {
              const xe = R.createBuffer();
              R.bindBuffer(R.PIXEL_PACK_BUFFER, xe),
                R.bufferData(R.PIXEL_PACK_BUFFER, ne.byteLength, R.STREAM_READ),
                R.readPixels(I, F, B, D, Ae.convert(Me), Ae.convert(ye), 0),
                R.flush();
              const Fe = R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE, 0);
              await probeAsync(R, Fe, 4);
              try {
                R.bindBuffer(R.PIXEL_PACK_BUFFER, xe),
                  R.getBufferSubData(R.PIXEL_PACK_BUFFER, 0, ne);
              } finally {
                R.deleteBuffer(xe), R.deleteSync(Fe);
              }
              return ne;
            }
          } finally {
            const fe = C !== null ? Te.get(C).__webglFramebuffer : null;
            ge.bindFramebuffer(R.FRAMEBUFFER, fe);
          }
        }
      }),
      (this.copyFramebufferToTexture = function (y, I = null, F = 0) {
        y.isTexture !== !0 &&
          (console.warn(
            "WebGLRenderer: copyFramebufferToTexture function signature has changed."
          ),
          (I = arguments[0] || null),
          (y = arguments[1]));
        const B = Math.pow(2, -F),
          D = Math.floor(y.image.width * B),
          ne = Math.floor(y.image.height * B),
          ae = I !== null ? I.x : 0,
          de = I !== null ? I.y : 0;
        we.setTexture2D(y, 0),
          R.copyTexSubImage2D(R.TEXTURE_2D, F, 0, 0, ae, de, D, ne),
          ge.unbindTexture();
      }),
      (this.copyTextureToTexture = function (y, I, F = null, B = null, D = 0) {
        y.isTexture !== !0 &&
          (console.warn(
            "WebGLRenderer: copyTextureToTexture function signature has changed."
          ),
          (B = arguments[0] || null),
          (y = arguments[1]),
          (I = arguments[2]),
          (D = arguments[3] || 0),
          (F = null));
        let ne, ae, de, fe, Me, ye;
        F !== null
          ? ((ne = F.max.x - F.min.x),
            (ae = F.max.y - F.min.y),
            (de = F.min.x),
            (fe = F.min.y))
          : ((ne = y.image.width), (ae = y.image.height), (de = 0), (fe = 0)),
          B !== null ? ((Me = B.x), (ye = B.y)) : ((Me = 0), (ye = 0));
        const xe = Ae.convert(I.format),
          Fe = Ae.convert(I.type);
        we.setTexture2D(I, 0),
          R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL, I.flipY),
          R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL, I.premultiplyAlpha),
          R.pixelStorei(R.UNPACK_ALIGNMENT, I.unpackAlignment);
        const We = R.getParameter(R.UNPACK_ROW_LENGTH),
          $e = R.getParameter(R.UNPACK_IMAGE_HEIGHT),
          Je = R.getParameter(R.UNPACK_SKIP_PIXELS),
          Oe = R.getParameter(R.UNPACK_SKIP_ROWS),
          _e = R.getParameter(R.UNPACK_SKIP_IMAGES),
          je = y.isCompressedTexture ? y.mipmaps[D] : y.image;
        R.pixelStorei(R.UNPACK_ROW_LENGTH, je.width),
          R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, je.height),
          R.pixelStorei(R.UNPACK_SKIP_PIXELS, de),
          R.pixelStorei(R.UNPACK_SKIP_ROWS, fe),
          y.isDataTexture
            ? R.texSubImage2D(R.TEXTURE_2D, D, Me, ye, ne, ae, xe, Fe, je.data)
            : y.isCompressedTexture
            ? R.compressedTexSubImage2D(
                R.TEXTURE_2D,
                D,
                Me,
                ye,
                je.width,
                je.height,
                xe,
                je.data
              )
            : R.texSubImage2D(R.TEXTURE_2D, D, Me, ye, ne, ae, xe, Fe, je),
          R.pixelStorei(R.UNPACK_ROW_LENGTH, We),
          R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, $e),
          R.pixelStorei(R.UNPACK_SKIP_PIXELS, Je),
          R.pixelStorei(R.UNPACK_SKIP_ROWS, Oe),
          R.pixelStorei(R.UNPACK_SKIP_IMAGES, _e),
          D === 0 && I.generateMipmaps && R.generateMipmap(R.TEXTURE_2D),
          ge.unbindTexture();
      }),
      (this.copyTextureToTexture3D = function (
        y,
        I,
        F = null,
        B = null,
        D = 0
      ) {
        y.isTexture !== !0 &&
          (console.warn(
            "WebGLRenderer: copyTextureToTexture3D function signature has changed."
          ),
          (F = arguments[0] || null),
          (B = arguments[1] || null),
          (y = arguments[2]),
          (I = arguments[3]),
          (D = arguments[4] || 0));
        let ne, ae, de, fe, Me, ye, xe, Fe, We;
        const $e = y.isCompressedTexture ? y.mipmaps[D] : y.image;
        F !== null
          ? ((ne = F.max.x - F.min.x),
            (ae = F.max.y - F.min.y),
            (de = F.max.z - F.min.z),
            (fe = F.min.x),
            (Me = F.min.y),
            (ye = F.min.z))
          : ((ne = $e.width),
            (ae = $e.height),
            (de = $e.depth),
            (fe = 0),
            (Me = 0),
            (ye = 0)),
          B !== null
            ? ((xe = B.x), (Fe = B.y), (We = B.z))
            : ((xe = 0), (Fe = 0), (We = 0));
        const Je = Ae.convert(I.format),
          Oe = Ae.convert(I.type);
        let _e;
        if (I.isData3DTexture) we.setTexture3D(I, 0), (_e = R.TEXTURE_3D);
        else if (I.isDataArrayTexture || I.isCompressedArrayTexture)
          we.setTexture2DArray(I, 0), (_e = R.TEXTURE_2D_ARRAY);
        else {
          console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
          );
          return;
        }
        R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL, I.flipY),
          R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL, I.premultiplyAlpha),
          R.pixelStorei(R.UNPACK_ALIGNMENT, I.unpackAlignment);
        const je = R.getParameter(R.UNPACK_ROW_LENGTH),
          Be = R.getParameter(R.UNPACK_IMAGE_HEIGHT),
          tt = R.getParameter(R.UNPACK_SKIP_PIXELS),
          at = R.getParameter(R.UNPACK_SKIP_ROWS),
          Qe = R.getParameter(R.UNPACK_SKIP_IMAGES);
        R.pixelStorei(R.UNPACK_ROW_LENGTH, $e.width),
          R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, $e.height),
          R.pixelStorei(R.UNPACK_SKIP_PIXELS, fe),
          R.pixelStorei(R.UNPACK_SKIP_ROWS, Me),
          R.pixelStorei(R.UNPACK_SKIP_IMAGES, ye),
          y.isDataTexture || y.isData3DTexture
            ? R.texSubImage3D(_e, D, xe, Fe, We, ne, ae, de, Je, Oe, $e.data)
            : I.isCompressedArrayTexture
            ? R.compressedTexSubImage3D(
                _e,
                D,
                xe,
                Fe,
                We,
                ne,
                ae,
                de,
                Je,
                $e.data
              )
            : R.texSubImage3D(_e, D, xe, Fe, We, ne, ae, de, Je, Oe, $e),
          R.pixelStorei(R.UNPACK_ROW_LENGTH, je),
          R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, Be),
          R.pixelStorei(R.UNPACK_SKIP_PIXELS, tt),
          R.pixelStorei(R.UNPACK_SKIP_ROWS, at),
          R.pixelStorei(R.UNPACK_SKIP_IMAGES, Qe),
          D === 0 && I.generateMipmaps && R.generateMipmap(_e),
          ge.unbindTexture();
      }),
      (this.initRenderTarget = function (y) {
        Te.get(y).__webglFramebuffer === void 0 && we.setupRenderTarget(y);
      }),
      (this.initTexture = function (y) {
        y.isCubeTexture
          ? we.setTextureCube(y, 0)
          : y.isData3DTexture
          ? we.setTexture3D(y, 0)
          : y.isDataArrayTexture || y.isCompressedArrayTexture
          ? we.setTexture2DArray(y, 0)
          : we.setTexture2D(y, 0),
          ge.unbindTexture();
      }),
      (this.resetState = function () {
        (N = 0), (w = 0), (C = null), ge.reset(), Pe.reset();
      }),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  get coordinateSystem() {
    return 2e3;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const n = this.getContext();
    (n.drawingBufferColorSpace =
      e === DisplayP3ColorSpace ? "display-p3" : "srgb"),
      (n.unpackColorSpace =
        ColorManagement.workingColorSpace === LinearDisplayP3ColorSpace
          ? "display-p3"
          : "srgb");
  }
}
class Scene extends Object3D {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.backgroundRotation = new Euler()),
      (this.environmentIntensity = 1),
      (this.environmentRotation = new Euler()),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  copy(e, n) {
    return (
      super.copy(e, n),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      this.backgroundRotation.copy(e.backgroundRotation),
      (this.environmentIntensity = e.environmentIntensity),
      this.environmentRotation.copy(e.environmentRotation),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const n = super.toJSON(e);
    return (
      this.fog !== null && (n.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (n.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (n.object.backgroundIntensity = this.backgroundIntensity),
      (n.object.backgroundRotation = this.backgroundRotation.toArray()),
      this.environmentIntensity !== 1 &&
        (n.object.environmentIntensity = this.environmentIntensity),
      (n.object.environmentRotation = this.environmentRotation.toArray()),
      n
    );
  }
}
class Curve {
  constructor() {
    (this.type = "Curve"), (this.arcLengthDivisions = 200);
  }
  // Virtual base class method to overwrite and implement in subclasses
  //	- t [0 .. 1]
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  // Get point at relative position in curve according to arc length
  // - u [0 .. 1]
  getPointAt(e, n) {
    const i = this.getUtoTmapping(e);
    return this.getPoint(i, n);
  }
  // Get sequence of points using getPoint( t )
  getPoints(e = 5) {
    const n = [];
    for (let i = 0; i <= e; i++) n.push(this.getPoint(i / e));
    return n;
  }
  // Get sequence of points using getPointAt( u )
  getSpacedPoints(e = 5) {
    const n = [];
    for (let i = 0; i <= e; i++) n.push(this.getPointAt(i / e));
    return n;
  }
  // Get total curve arc length
  getLength() {
    const e = this.getLengths();
    return e[e.length - 1];
  }
  // Get list of cumulative segment lengths
  getLengths(e = this.arcLengthDivisions) {
    if (
      this.cacheArcLengths &&
      this.cacheArcLengths.length === e + 1 &&
      !this.needsUpdate
    )
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const n = [];
    let i,
      s = this.getPoint(0),
      a = 0;
    n.push(0);
    for (let o = 1; o <= e; o++)
      (i = this.getPoint(o / e)), (a += i.distanceTo(s)), n.push(a), (s = i);
    return (this.cacheArcLengths = n), n;
  }
  updateArcLengths() {
    (this.needsUpdate = !0), this.getLengths();
  }
  // Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant
  getUtoTmapping(e, n) {
    const i = this.getLengths();
    let s = 0;
    const a = i.length;
    let o;
    n ? (o = n) : (o = e * i[a - 1]);
    let l = 0,
      c = a - 1,
      h;
    for (; l <= c; )
      if (((s = Math.floor(l + (c - l) / 2)), (h = i[s] - o), h < 0)) l = s + 1;
      else if (h > 0) c = s - 1;
      else {
        c = s;
        break;
      }
    if (((s = c), i[s] === o)) return s / (a - 1);
    const u = i[s],
      f = i[s + 1] - u,
      p = (o - u) / f;
    return (s + p) / (a - 1);
  }
  // Returns a unit vector tangent at t
  // In case any sub curve does not implement its tangent derivation,
  // 2 points a small delta apart will be used to find its gradient
  // which seems to give a reasonable approximation
  getTangent(e, n) {
    let s = e - 1e-4,
      a = e + 1e-4;
    s < 0 && (s = 0), a > 1 && (a = 1);
    const o = this.getPoint(s),
      l = this.getPoint(a),
      c = n || (o.isVector2 ? new Vector2() : new Vector3());
    return c.copy(l).sub(o).normalize(), c;
  }
  getTangentAt(e, n) {
    const i = this.getUtoTmapping(e);
    return this.getTangent(i, n);
  }
  computeFrenetFrames(e, n) {
    const i = new Vector3(),
      s = [],
      a = [],
      o = [],
      l = new Vector3(),
      c = new Matrix4();
    for (let p = 0; p <= e; p++) {
      const g = p / e;
      s[p] = this.getTangentAt(g, new Vector3());
    }
    (a[0] = new Vector3()), (o[0] = new Vector3());
    let h = Number.MAX_VALUE;
    const u = Math.abs(s[0].x),
      d = Math.abs(s[0].y),
      f = Math.abs(s[0].z);
    u <= h && ((h = u), i.set(1, 0, 0)),
      d <= h && ((h = d), i.set(0, 1, 0)),
      f <= h && i.set(0, 0, 1),
      l.crossVectors(s[0], i).normalize(),
      a[0].crossVectors(s[0], l),
      o[0].crossVectors(s[0], a[0]);
    for (let p = 1; p <= e; p++) {
      if (
        ((a[p] = a[p - 1].clone()),
        (o[p] = o[p - 1].clone()),
        l.crossVectors(s[p - 1], s[p]),
        l.length() > Number.EPSILON)
      ) {
        l.normalize();
        const g = Math.acos(clamp$2(s[p - 1].dot(s[p]), -1, 1));
        a[p].applyMatrix4(c.makeRotationAxis(l, g));
      }
      o[p].crossVectors(s[p], a[p]);
    }
    if (n === !0) {
      let p = Math.acos(clamp$2(a[0].dot(a[e]), -1, 1));
      (p /= e), s[0].dot(l.crossVectors(a[0], a[e])) > 0 && (p = -p);
      for (let g = 1; g <= e; g++)
        a[g].applyMatrix4(c.makeRotationAxis(s[g], p * g)),
          o[g].crossVectors(s[g], a[g]);
    }
    return {
      tangents: s,
      normals: a,
      binormals: o,
    };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (this.arcLengthDivisions = e.arcLengthDivisions), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "Curve",
        generator: "Curve.toJSON",
      },
    };
    return (
      (e.arcLengthDivisions = this.arcLengthDivisions), (e.type = this.type), e
    );
  }
  fromJSON(e) {
    return (this.arcLengthDivisions = e.arcLengthDivisions), this;
  }
}
class EllipseCurve extends Curve {
  constructor(
    e = 0,
    n = 0,
    i = 1,
    s = 1,
    a = 0,
    o = Math.PI * 2,
    l = !1,
    c = 0
  ) {
    super(),
      (this.isEllipseCurve = !0),
      (this.type = "EllipseCurve"),
      (this.aX = e),
      (this.aY = n),
      (this.xRadius = i),
      (this.yRadius = s),
      (this.aStartAngle = a),
      (this.aEndAngle = o),
      (this.aClockwise = l),
      (this.aRotation = c);
  }
  getPoint(e, n = new Vector2()) {
    const i = n,
      s = Math.PI * 2;
    let a = this.aEndAngle - this.aStartAngle;
    const o = Math.abs(a) < Number.EPSILON;
    for (; a < 0; ) a += s;
    for (; a > s; ) a -= s;
    a < Number.EPSILON && (o ? (a = 0) : (a = s)),
      this.aClockwise === !0 && !o && (a === s ? (a = -s) : (a = a - s));
    const l = this.aStartAngle + e * a;
    let c = this.aX + this.xRadius * Math.cos(l),
      h = this.aY + this.yRadius * Math.sin(l);
    if (this.aRotation !== 0) {
      const u = Math.cos(this.aRotation),
        d = Math.sin(this.aRotation),
        f = c - this.aX,
        p = h - this.aY;
      (c = f * u - p * d + this.aX), (h = f * d + p * u + this.aY);
    }
    return i.set(c, h);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.aX = e.aX),
      (this.aY = e.aY),
      (this.xRadius = e.xRadius),
      (this.yRadius = e.yRadius),
      (this.aStartAngle = e.aStartAngle),
      (this.aEndAngle = e.aEndAngle),
      (this.aClockwise = e.aClockwise),
      (this.aRotation = e.aRotation),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.aX = this.aX),
      (e.aY = this.aY),
      (e.xRadius = this.xRadius),
      (e.yRadius = this.yRadius),
      (e.aStartAngle = this.aStartAngle),
      (e.aEndAngle = this.aEndAngle),
      (e.aClockwise = this.aClockwise),
      (e.aRotation = this.aRotation),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      (this.aX = e.aX),
      (this.aY = e.aY),
      (this.xRadius = e.xRadius),
      (this.yRadius = e.yRadius),
      (this.aStartAngle = e.aStartAngle),
      (this.aEndAngle = e.aEndAngle),
      (this.aClockwise = e.aClockwise),
      (this.aRotation = e.aRotation),
      this
    );
  }
}
class ArcCurve extends EllipseCurve {
  constructor(e, n, i, s, a, o) {
    super(e, n, i, i, s, a, o),
      (this.isArcCurve = !0),
      (this.type = "ArcCurve");
  }
}
function CubicPoly() {
  let r = 0,
    e = 0,
    n = 0,
    i = 0;
  function s(a, o, l, c) {
    (r = a),
      (e = l),
      (n = -3 * a + 3 * o - 2 * l - c),
      (i = 2 * a - 2 * o + l + c);
  }
  return {
    initCatmullRom: function (a, o, l, c, h) {
      s(o, l, h * (l - a), h * (c - o));
    },
    initNonuniformCatmullRom: function (a, o, l, c, h, u, d) {
      let f = (o - a) / h - (l - a) / (h + u) + (l - o) / u,
        p = (l - o) / u - (c - o) / (u + d) + (c - l) / d;
      (f *= u), (p *= u), s(o, l, f, p);
    },
    calc: function (a) {
      const o = a * a,
        l = o * a;
      return r + e * a + n * o + i * l;
    },
  };
}
const tmp = /* @__PURE__ */ new Vector3(),
  px = /* @__PURE__ */ new CubicPoly(),
  py = /* @__PURE__ */ new CubicPoly(),
  pz = /* @__PURE__ */ new CubicPoly();
class CatmullRomCurve3 extends Curve {
  constructor(e = [], n = !1, i = "centripetal", s = 0.5) {
    super(),
      (this.isCatmullRomCurve3 = !0),
      (this.type = "CatmullRomCurve3"),
      (this.points = e),
      (this.closed = n),
      (this.curveType = i),
      (this.tension = s);
  }
  getPoint(e, n = new Vector3()) {
    const i = n,
      s = this.points,
      a = s.length,
      o = (a - (this.closed ? 0 : 1)) * e;
    let l = Math.floor(o),
      c = o - l;
    this.closed
      ? (l += l > 0 ? 0 : (Math.floor(Math.abs(l) / a) + 1) * a)
      : c === 0 && l === a - 1 && ((l = a - 2), (c = 1));
    let h, u;
    this.closed || l > 0
      ? (h = s[(l - 1) % a])
      : (tmp.subVectors(s[0], s[1]).add(s[0]), (h = tmp));
    const d = s[l % a],
      f = s[(l + 1) % a];
    if (
      (this.closed || l + 2 < a
        ? (u = s[(l + 2) % a])
        : (tmp.subVectors(s[a - 1], s[a - 2]).add(s[a - 1]), (u = tmp)),
      this.curveType === "centripetal" || this.curveType === "chordal")
    ) {
      const p = this.curveType === "chordal" ? 0.5 : 0.25;
      let g = Math.pow(h.distanceToSquared(d), p),
        v = Math.pow(d.distanceToSquared(f), p),
        _ = Math.pow(f.distanceToSquared(u), p);
      v < 1e-4 && (v = 1),
        g < 1e-4 && (g = v),
        _ < 1e-4 && (_ = v),
        px.initNonuniformCatmullRom(h.x, d.x, f.x, u.x, g, v, _),
        py.initNonuniformCatmullRom(h.y, d.y, f.y, u.y, g, v, _),
        pz.initNonuniformCatmullRom(h.z, d.z, f.z, u.z, g, v, _);
    } else
      this.curveType === "catmullrom" &&
        (px.initCatmullRom(h.x, d.x, f.x, u.x, this.tension),
        py.initCatmullRom(h.y, d.y, f.y, u.y, this.tension),
        pz.initCatmullRom(h.z, d.z, f.z, u.z, this.tension));
    return i.set(px.calc(c), py.calc(c), pz.calc(c)), i;
  }
  copy(e) {
    super.copy(e), (this.points = []);
    for (let n = 0, i = e.points.length; n < i; n++) {
      const s = e.points[n];
      this.points.push(s.clone());
    }
    return (
      (this.closed = e.closed),
      (this.curveType = e.curveType),
      (this.tension = e.tension),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let n = 0, i = this.points.length; n < i; n++) {
      const s = this.points[n];
      e.points.push(s.toArray());
    }
    return (
      (e.closed = this.closed),
      (e.curveType = this.curveType),
      (e.tension = this.tension),
      e
    );
  }
  fromJSON(e) {
    super.fromJSON(e), (this.points = []);
    for (let n = 0, i = e.points.length; n < i; n++) {
      const s = e.points[n];
      this.points.push(new Vector3().fromArray(s));
    }
    return (
      (this.closed = e.closed),
      (this.curveType = e.curveType),
      (this.tension = e.tension),
      this
    );
  }
}
function CatmullRom(r, e, n, i, s) {
  const a = (i - e) * 0.5,
    o = (s - n) * 0.5,
    l = r * r,
    c = r * l;
  return (
    (2 * n - 2 * i + a + o) * c + (-3 * n + 3 * i - 2 * a - o) * l + a * r + n
  );
}
function QuadraticBezierP0(r, e) {
  const n = 1 - r;
  return n * n * e;
}
function QuadraticBezierP1(r, e) {
  return 2 * (1 - r) * r * e;
}
function QuadraticBezierP2(r, e) {
  return r * r * e;
}
function QuadraticBezier(r, e, n, i) {
  return (
    QuadraticBezierP0(r, e) + QuadraticBezierP1(r, n) + QuadraticBezierP2(r, i)
  );
}
function CubicBezierP0(r, e) {
  const n = 1 - r;
  return n * n * n * e;
}
function CubicBezierP1(r, e) {
  const n = 1 - r;
  return 3 * n * n * r * e;
}
function CubicBezierP2(r, e) {
  return 3 * (1 - r) * r * r * e;
}
function CubicBezierP3(r, e) {
  return r * r * r * e;
}
function CubicBezier(r, e, n, i, s) {
  return (
    CubicBezierP0(r, e) +
    CubicBezierP1(r, n) +
    CubicBezierP2(r, i) +
    CubicBezierP3(r, s)
  );
}
class CubicBezierCurve extends Curve {
  constructor(
    e = new Vector2(),
    n = new Vector2(),
    i = new Vector2(),
    s = new Vector2()
  ) {
    super(),
      (this.isCubicBezierCurve = !0),
      (this.type = "CubicBezierCurve"),
      (this.v0 = e),
      (this.v1 = n),
      (this.v2 = i),
      (this.v3 = s);
  }
  getPoint(e, n = new Vector2()) {
    const i = n,
      s = this.v0,
      a = this.v1,
      o = this.v2,
      l = this.v3;
    return (
      i.set(
        CubicBezier(e, s.x, a.x, o.x, l.x),
        CubicBezier(e, s.y, a.y, o.y, l.y)
      ),
      i
    );
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this.v3.copy(e.v3),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      (e.v3 = this.v3.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this.v3.fromArray(e.v3),
      this
    );
  }
}
class CubicBezierCurve3 extends Curve {
  constructor(
    e = new Vector3(),
    n = new Vector3(),
    i = new Vector3(),
    s = new Vector3()
  ) {
    super(),
      (this.isCubicBezierCurve3 = !0),
      (this.type = "CubicBezierCurve3"),
      (this.v0 = e),
      (this.v1 = n),
      (this.v2 = i),
      (this.v3 = s);
  }
  getPoint(e, n = new Vector3()) {
    const i = n,
      s = this.v0,
      a = this.v1,
      o = this.v2,
      l = this.v3;
    return (
      i.set(
        CubicBezier(e, s.x, a.x, o.x, l.x),
        CubicBezier(e, s.y, a.y, o.y, l.y),
        CubicBezier(e, s.z, a.z, o.z, l.z)
      ),
      i
    );
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this.v3.copy(e.v3),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      (e.v3 = this.v3.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this.v3.fromArray(e.v3),
      this
    );
  }
}
class LineCurve extends Curve {
  constructor(e = new Vector2(), n = new Vector2()) {
    super(),
      (this.isLineCurve = !0),
      (this.type = "LineCurve"),
      (this.v1 = e),
      (this.v2 = n);
  }
  getPoint(e, n = new Vector2()) {
    const i = n;
    return (
      e === 1
        ? i.copy(this.v2)
        : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(e).add(this.v1)),
      i
    );
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(e, n) {
    return this.getPoint(e, n);
  }
  getTangent(e, n = new Vector2()) {
    return n.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, n) {
    return this.getTangent(e, n);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e;
  }
  fromJSON(e) {
    return (
      super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    );
  }
}
class LineCurve3 extends Curve {
  constructor(e = new Vector3(), n = new Vector3()) {
    super(),
      (this.isLineCurve3 = !0),
      (this.type = "LineCurve3"),
      (this.v1 = e),
      (this.v2 = n);
  }
  getPoint(e, n = new Vector3()) {
    const i = n;
    return (
      e === 1
        ? i.copy(this.v2)
        : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(e).add(this.v1)),
      i
    );
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(e, n) {
    return this.getPoint(e, n);
  }
  getTangent(e, n = new Vector3()) {
    return n.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, n) {
    return this.getTangent(e, n);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e;
  }
  fromJSON(e) {
    return (
      super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    );
  }
}
class QuadraticBezierCurve extends Curve {
  constructor(e = new Vector2(), n = new Vector2(), i = new Vector2()) {
    super(),
      (this.isQuadraticBezierCurve = !0),
      (this.type = "QuadraticBezierCurve"),
      (this.v0 = e),
      (this.v1 = n),
      (this.v2 = i);
  }
  getPoint(e, n = new Vector2()) {
    const i = n,
      s = this.v0,
      a = this.v1,
      o = this.v2;
    return (
      i.set(
        QuadraticBezier(e, s.x, a.x, o.x),
        QuadraticBezier(e, s.y, a.y, o.y)
      ),
      i
    );
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this
    );
  }
}
class QuadraticBezierCurve3 extends Curve {
  constructor(e = new Vector3(), n = new Vector3(), i = new Vector3()) {
    super(),
      (this.isQuadraticBezierCurve3 = !0),
      (this.type = "QuadraticBezierCurve3"),
      (this.v0 = e),
      (this.v1 = n),
      (this.v2 = i);
  }
  getPoint(e, n = new Vector3()) {
    const i = n,
      s = this.v0,
      a = this.v1,
      o = this.v2;
    return (
      i.set(
        QuadraticBezier(e, s.x, a.x, o.x),
        QuadraticBezier(e, s.y, a.y, o.y),
        QuadraticBezier(e, s.z, a.z, o.z)
      ),
      i
    );
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this
    );
  }
}
class SplineCurve extends Curve {
  constructor(e = []) {
    super(),
      (this.isSplineCurve = !0),
      (this.type = "SplineCurve"),
      (this.points = e);
  }
  getPoint(e, n = new Vector2()) {
    const i = n,
      s = this.points,
      a = (s.length - 1) * e,
      o = Math.floor(a),
      l = a - o,
      c = s[o === 0 ? o : o - 1],
      h = s[o],
      u = s[o > s.length - 2 ? s.length - 1 : o + 1],
      d = s[o > s.length - 3 ? s.length - 1 : o + 2];
    return (
      i.set(
        CatmullRom(l, c.x, h.x, u.x, d.x),
        CatmullRom(l, c.y, h.y, u.y, d.y)
      ),
      i
    );
  }
  copy(e) {
    super.copy(e), (this.points = []);
    for (let n = 0, i = e.points.length; n < i; n++) {
      const s = e.points[n];
      this.points.push(s.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let n = 0, i = this.points.length; n < i; n++) {
      const s = this.points[n];
      e.points.push(s.toArray());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), (this.points = []);
    for (let n = 0, i = e.points.length; n < i; n++) {
      const s = e.points[n];
      this.points.push(new Vector2().fromArray(s));
    }
    return this;
  }
}
var Curves = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve,
  CatmullRomCurve3,
  CubicBezierCurve,
  CubicBezierCurve3,
  EllipseCurve,
  LineCurve,
  LineCurve3,
  QuadraticBezierCurve,
  QuadraticBezierCurve3,
  SplineCurve,
});
class CurvePath extends Curve {
  constructor() {
    super(),
      (this.type = "CurvePath"),
      (this.curves = []),
      (this.autoClose = !1);
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    const e = this.curves[0].getPoint(0),
      n = this.curves[this.curves.length - 1].getPoint(1);
    if (!e.equals(n)) {
      const i = e.isVector2 === !0 ? "LineCurve" : "LineCurve3";
      this.curves.push(new Curves[i](n, e));
    }
    return this;
  }
  // To get accurate point with reference to
  // entire path distance at time t,
  // following has to be done:
  // 1. Length of each sub path have to be known
  // 2. Locate and identify type of curve
  // 3. Get t for the curve
  // 4. Return curve.getPointAt(t')
  getPoint(e, n) {
    const i = e * this.getLength(),
      s = this.getCurveLengths();
    let a = 0;
    for (; a < s.length; ) {
      if (s[a] >= i) {
        const o = s[a] - i,
          l = this.curves[a],
          c = l.getLength(),
          h = c === 0 ? 0 : 1 - o / c;
        return l.getPointAt(h, n);
      }
      a++;
    }
    return null;
  }
  // We cannot use the default THREE.Curve getPoint() with getLength() because in
  // THREE.Curve, getLength() depends on getPoint() but in THREE.CurvePath
  // getPoint() depends on getLength
  getLength() {
    const e = this.getCurveLengths();
    return e[e.length - 1];
  }
  // cacheLengths must be recalculated.
  updateArcLengths() {
    (this.needsUpdate = !0), (this.cacheLengths = null), this.getCurveLengths();
  }
  // Compute lengths and cache them
  // We cannot overwrite getLengths() because UtoT mapping uses it.
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    const e = [];
    let n = 0;
    for (let i = 0, s = this.curves.length; i < s; i++)
      (n += this.curves[i].getLength()), e.push(n);
    return (this.cacheLengths = e), e;
  }
  getSpacedPoints(e = 40) {
    const n = [];
    for (let i = 0; i <= e; i++) n.push(this.getPoint(i / e));
    return this.autoClose && n.push(n[0]), n;
  }
  getPoints(e = 12) {
    const n = [];
    let i;
    for (let s = 0, a = this.curves; s < a.length; s++) {
      const o = a[s],
        l = o.isEllipseCurve
          ? e * 2
          : o.isLineCurve || o.isLineCurve3
          ? 1
          : o.isSplineCurve
          ? e * o.points.length
          : e,
        c = o.getPoints(l);
      for (let h = 0; h < c.length; h++) {
        const u = c[h];
        (i && i.equals(u)) || (n.push(u), (i = u));
      }
    }
    return (
      this.autoClose &&
        n.length > 1 &&
        !n[n.length - 1].equals(n[0]) &&
        n.push(n[0]),
      n
    );
  }
  copy(e) {
    super.copy(e), (this.curves = []);
    for (let n = 0, i = e.curves.length; n < i; n++) {
      const s = e.curves[n];
      this.curves.push(s.clone());
    }
    return (this.autoClose = e.autoClose), this;
  }
  toJSON() {
    const e = super.toJSON();
    (e.autoClose = this.autoClose), (e.curves = []);
    for (let n = 0, i = this.curves.length; n < i; n++) {
      const s = this.curves[n];
      e.curves.push(s.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), (this.autoClose = e.autoClose), (this.curves = []);
    for (let n = 0, i = e.curves.length; n < i; n++) {
      const s = e.curves[n];
      this.curves.push(new Curves[s.type]().fromJSON(s));
    }
    return this;
  }
}
class Path extends CurvePath {
  constructor(e) {
    super(),
      (this.type = "Path"),
      (this.currentPoint = new Vector2()),
      e && this.setFromPoints(e);
  }
  setFromPoints(e) {
    this.moveTo(e[0].x, e[0].y);
    for (let n = 1, i = e.length; n < i; n++) this.lineTo(e[n].x, e[n].y);
    return this;
  }
  moveTo(e, n) {
    return this.currentPoint.set(e, n), this;
  }
  lineTo(e, n) {
    const i = new LineCurve(this.currentPoint.clone(), new Vector2(e, n));
    return this.curves.push(i), this.currentPoint.set(e, n), this;
  }
  quadraticCurveTo(e, n, i, s) {
    const a = new QuadraticBezierCurve(
      this.currentPoint.clone(),
      new Vector2(e, n),
      new Vector2(i, s)
    );
    return this.curves.push(a), this.currentPoint.set(i, s), this;
  }
  bezierCurveTo(e, n, i, s, a, o) {
    const l = new CubicBezierCurve(
      this.currentPoint.clone(),
      new Vector2(e, n),
      new Vector2(i, s),
      new Vector2(a, o)
    );
    return this.curves.push(l), this.currentPoint.set(a, o), this;
  }
  splineThru(e) {
    const n = [this.currentPoint.clone()].concat(e),
      i = new SplineCurve(n);
    return this.curves.push(i), this.currentPoint.copy(e[e.length - 1]), this;
  }
  arc(e, n, i, s, a, o) {
    const l = this.currentPoint.x,
      c = this.currentPoint.y;
    return this.absarc(e + l, n + c, i, s, a, o), this;
  }
  absarc(e, n, i, s, a, o) {
    return this.absellipse(e, n, i, i, s, a, o), this;
  }
  ellipse(e, n, i, s, a, o, l, c) {
    const h = this.currentPoint.x,
      u = this.currentPoint.y;
    return this.absellipse(e + h, n + u, i, s, a, o, l, c), this;
  }
  absellipse(e, n, i, s, a, o, l, c) {
    const h = new EllipseCurve(e, n, i, s, a, o, l, c);
    if (this.curves.length > 0) {
      const d = h.getPoint(0);
      d.equals(this.currentPoint) || this.lineTo(d.x, d.y);
    }
    this.curves.push(h);
    const u = h.getPoint(1);
    return this.currentPoint.copy(u), this;
  }
  copy(e) {
    return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
  }
  toJSON() {
    const e = super.toJSON();
    return (e.currentPoint = this.currentPoint.toArray()), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
  }
}
class CircleGeometry extends BufferGeometry {
  constructor(e = 1, n = 32, i = 0, s = Math.PI * 2) {
    super(),
      (this.type = "CircleGeometry"),
      (this.parameters = {
        radius: e,
        segments: n,
        thetaStart: i,
        thetaLength: s,
      }),
      (n = Math.max(3, n));
    const a = [],
      o = [],
      l = [],
      c = [],
      h = new Vector3(),
      u = new Vector2();
    o.push(0, 0, 0), l.push(0, 0, 1), c.push(0.5, 0.5);
    for (let d = 0, f = 3; d <= n; d++, f += 3) {
      const p = i + (d / n) * s;
      (h.x = e * Math.cos(p)),
        (h.y = e * Math.sin(p)),
        o.push(h.x, h.y, h.z),
        l.push(0, 0, 1),
        (u.x = (o[f] / e + 1) / 2),
        (u.y = (o[f + 1] / e + 1) / 2),
        c.push(u.x, u.y);
    }
    for (let d = 1; d <= n; d++) a.push(d, d + 1, 0);
    this.setIndex(a),
      this.setAttribute("position", new Float32BufferAttribute(o, 3)),
      this.setAttribute("normal", new Float32BufferAttribute(l, 3)),
      this.setAttribute("uv", new Float32BufferAttribute(c, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new CircleGeometry(
      e.radius,
      e.segments,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class CylinderGeometry extends BufferGeometry {
  constructor(
    e = 1,
    n = 1,
    i = 1,
    s = 32,
    a = 1,
    o = !1,
    l = 0,
    c = Math.PI * 2
  ) {
    super(),
      (this.type = "CylinderGeometry"),
      (this.parameters = {
        radiusTop: e,
        radiusBottom: n,
        height: i,
        radialSegments: s,
        heightSegments: a,
        openEnded: o,
        thetaStart: l,
        thetaLength: c,
      });
    const h = this;
    (s = Math.floor(s)), (a = Math.floor(a));
    const u = [],
      d = [],
      f = [],
      p = [];
    let g = 0;
    const v = [],
      _ = i / 2;
    let m = 0;
    A(),
      o === !1 && (e > 0 && S(!0), n > 0 && S(!1)),
      this.setIndex(u),
      this.setAttribute("position", new Float32BufferAttribute(d, 3)),
      this.setAttribute("normal", new Float32BufferAttribute(f, 3)),
      this.setAttribute("uv", new Float32BufferAttribute(p, 2));
    function A() {
      const E = new Vector3(),
        N = new Vector3();
      let w = 0;
      const C = (n - e) / i;
      for (let U = 0; U <= a; U++) {
        const T = [],
          M = U / a,
          P = M * (n - e) + e;
        for (let z = 0; z <= s; z++) {
          const O = z / s,
            G = O * c + l,
            X = Math.sin(G),
            k = Math.cos(G);
          (N.x = P * X),
            (N.y = -M * i + _),
            (N.z = P * k),
            d.push(N.x, N.y, N.z),
            E.set(X, C, k).normalize(),
            f.push(E.x, E.y, E.z),
            p.push(O, 1 - M),
            T.push(g++);
        }
        v.push(T);
      }
      for (let U = 0; U < s; U++)
        for (let T = 0; T < a; T++) {
          const M = v[T][U],
            P = v[T + 1][U],
            z = v[T + 1][U + 1],
            O = v[T][U + 1];
          u.push(M, P, O), u.push(P, z, O), (w += 6);
        }
      h.addGroup(m, w, 0), (m += w);
    }
    function S(E) {
      const N = g,
        w = new Vector2(),
        C = new Vector3();
      let U = 0;
      const T = E === !0 ? e : n,
        M = E === !0 ? 1 : -1;
      for (let z = 1; z <= s; z++)
        d.push(0, _ * M, 0), f.push(0, M, 0), p.push(0.5, 0.5), g++;
      const P = g;
      for (let z = 0; z <= s; z++) {
        const G = (z / s) * c + l,
          X = Math.cos(G),
          k = Math.sin(G);
        (C.x = T * k),
          (C.y = _ * M),
          (C.z = T * X),
          d.push(C.x, C.y, C.z),
          f.push(0, M, 0),
          (w.x = X * 0.5 + 0.5),
          (w.y = k * 0.5 * M + 0.5),
          p.push(w.x, w.y),
          g++;
      }
      for (let z = 0; z < s; z++) {
        const O = N + z,
          G = P + z;
        E === !0 ? u.push(G, G + 1, O) : u.push(G + 1, G, O), (U += 3);
      }
      h.addGroup(m, U, E === !0 ? 1 : 2), (m += U);
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new CylinderGeometry(
      e.radiusTop,
      e.radiusBottom,
      e.height,
      e.radialSegments,
      e.heightSegments,
      e.openEnded,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class Shape extends Path {
  constructor(e) {
    super(e),
      (this.uuid = generateUUID()),
      (this.type = "Shape"),
      (this.holes = []);
  }
  getPointsHoles(e) {
    const n = [];
    for (let i = 0, s = this.holes.length; i < s; i++)
      n[i] = this.holes[i].getPoints(e);
    return n;
  }
  // get points of shape and holes (keypoints based on segments parameter)
  extractPoints(e) {
    return {
      shape: this.getPoints(e),
      holes: this.getPointsHoles(e),
    };
  }
  copy(e) {
    super.copy(e), (this.holes = []);
    for (let n = 0, i = e.holes.length; n < i; n++) {
      const s = e.holes[n];
      this.holes.push(s.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    (e.uuid = this.uuid), (e.holes = []);
    for (let n = 0, i = this.holes.length; n < i; n++) {
      const s = this.holes[n];
      e.holes.push(s.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), (this.uuid = e.uuid), (this.holes = []);
    for (let n = 0, i = e.holes.length; n < i; n++) {
      const s = e.holes[n];
      this.holes.push(new Path().fromJSON(s));
    }
    return this;
  }
}
const Earcut = {
  triangulate: function (r, e, n = 2) {
    const i = e && e.length,
      s = i ? e[0] * n : r.length;
    let a = linkedList(r, 0, s, n, !0);
    const o = [];
    if (!a || a.next === a.prev) return o;
    let l, c, h, u, d, f, p;
    if ((i && (a = eliminateHoles(r, e, a, n)), r.length > 80 * n)) {
      (l = h = r[0]), (c = u = r[1]);
      for (let g = n; g < s; g += n)
        (d = r[g]),
          (f = r[g + 1]),
          d < l && (l = d),
          f < c && (c = f),
          d > h && (h = d),
          f > u && (u = f);
      (p = Math.max(h - l, u - c)), (p = p !== 0 ? 32767 / p : 0);
    }
    return earcutLinked(a, o, n, l, c, p, 0), o;
  },
};
function linkedList(r, e, n, i, s) {
  let a, o;
  if (s === signedArea(r, e, n, i) > 0)
    for (a = e; a < n; a += i) o = insertNode(a, r[a], r[a + 1], o);
  else for (a = n - i; a >= e; a -= i) o = insertNode(a, r[a], r[a + 1], o);
  return o && equals(o, o.next) && (removeNode(o), (o = o.next)), o;
}
function filterPoints(r, e) {
  if (!r) return r;
  e || (e = r);
  let n = r,
    i;
  do
    if (
      ((i = !1),
      !n.steiner && (equals(n, n.next) || area(n.prev, n, n.next) === 0))
    ) {
      if ((removeNode(n), (n = e = n.prev), n === n.next)) break;
      i = !0;
    } else n = n.next;
  while (i || n !== e);
  return e;
}
function earcutLinked(r, e, n, i, s, a, o) {
  if (!r) return;
  !o && a && indexCurve(r, i, s, a);
  let l = r,
    c,
    h;
  for (; r.prev !== r.next; ) {
    if (((c = r.prev), (h = r.next), a ? isEarHashed(r, i, s, a) : isEar(r))) {
      e.push((c.i / n) | 0),
        e.push((r.i / n) | 0),
        e.push((h.i / n) | 0),
        removeNode(r),
        (r = h.next),
        (l = h.next);
      continue;
    }
    if (((r = h), r === l)) {
      o
        ? o === 1
          ? ((r = cureLocalIntersections(filterPoints(r), e, n)),
            earcutLinked(r, e, n, i, s, a, 2))
          : o === 2 && splitEarcut(r, e, n, i, s, a)
        : earcutLinked(filterPoints(r), e, n, i, s, a, 1);
      break;
    }
  }
}
function isEar(r) {
  const e = r.prev,
    n = r,
    i = r.next;
  if (area(e, n, i) >= 0) return !1;
  const s = e.x,
    a = n.x,
    o = i.x,
    l = e.y,
    c = n.y,
    h = i.y,
    u = s < a ? (s < o ? s : o) : a < o ? a : o,
    d = l < c ? (l < h ? l : h) : c < h ? c : h,
    f = s > a ? (s > o ? s : o) : a > o ? a : o,
    p = l > c ? (l > h ? l : h) : c > h ? c : h;
  let g = i.next;
  for (; g !== e; ) {
    if (
      g.x >= u &&
      g.x <= f &&
      g.y >= d &&
      g.y <= p &&
      pointInTriangle(s, l, a, c, o, h, g.x, g.y) &&
      area(g.prev, g, g.next) >= 0
    )
      return !1;
    g = g.next;
  }
  return !0;
}
function isEarHashed(r, e, n, i) {
  const s = r.prev,
    a = r,
    o = r.next;
  if (area(s, a, o) >= 0) return !1;
  const l = s.x,
    c = a.x,
    h = o.x,
    u = s.y,
    d = a.y,
    f = o.y,
    p = l < c ? (l < h ? l : h) : c < h ? c : h,
    g = u < d ? (u < f ? u : f) : d < f ? d : f,
    v = l > c ? (l > h ? l : h) : c > h ? c : h,
    _ = u > d ? (u > f ? u : f) : d > f ? d : f,
    m = zOrder(p, g, e, n, i),
    A = zOrder(v, _, e, n, i);
  let S = r.prevZ,
    E = r.nextZ;
  for (; S && S.z >= m && E && E.z <= A; ) {
    if (
      (S.x >= p &&
        S.x <= v &&
        S.y >= g &&
        S.y <= _ &&
        S !== s &&
        S !== o &&
        pointInTriangle(l, u, c, d, h, f, S.x, S.y) &&
        area(S.prev, S, S.next) >= 0) ||
      ((S = S.prevZ),
      E.x >= p &&
        E.x <= v &&
        E.y >= g &&
        E.y <= _ &&
        E !== s &&
        E !== o &&
        pointInTriangle(l, u, c, d, h, f, E.x, E.y) &&
        area(E.prev, E, E.next) >= 0)
    )
      return !1;
    E = E.nextZ;
  }
  for (; S && S.z >= m; ) {
    if (
      S.x >= p &&
      S.x <= v &&
      S.y >= g &&
      S.y <= _ &&
      S !== s &&
      S !== o &&
      pointInTriangle(l, u, c, d, h, f, S.x, S.y) &&
      area(S.prev, S, S.next) >= 0
    )
      return !1;
    S = S.prevZ;
  }
  for (; E && E.z <= A; ) {
    if (
      E.x >= p &&
      E.x <= v &&
      E.y >= g &&
      E.y <= _ &&
      E !== s &&
      E !== o &&
      pointInTriangle(l, u, c, d, h, f, E.x, E.y) &&
      area(E.prev, E, E.next) >= 0
    )
      return !1;
    E = E.nextZ;
  }
  return !0;
}
function cureLocalIntersections(r, e, n) {
  let i = r;
  do {
    const s = i.prev,
      a = i.next.next;
    !equals(s, a) &&
      intersects(s, i, i.next, a) &&
      locallyInside(s, a) &&
      locallyInside(a, s) &&
      (e.push((s.i / n) | 0),
      e.push((i.i / n) | 0),
      e.push((a.i / n) | 0),
      removeNode(i),
      removeNode(i.next),
      (i = r = a)),
      (i = i.next);
  } while (i !== r);
  return filterPoints(i);
}
function splitEarcut(r, e, n, i, s, a) {
  let o = r;
  do {
    let l = o.next.next;
    for (; l !== o.prev; ) {
      if (o.i !== l.i && isValidDiagonal(o, l)) {
        let c = splitPolygon(o, l);
        (o = filterPoints(o, o.next)),
          (c = filterPoints(c, c.next)),
          earcutLinked(o, e, n, i, s, a, 0),
          earcutLinked(c, e, n, i, s, a, 0);
        return;
      }
      l = l.next;
    }
    o = o.next;
  } while (o !== r);
}
function eliminateHoles(r, e, n, i) {
  const s = [];
  let a, o, l, c, h;
  for (a = 0, o = e.length; a < o; a++)
    (l = e[a] * i),
      (c = a < o - 1 ? e[a + 1] * i : r.length),
      (h = linkedList(r, l, c, i, !1)),
      h === h.next && (h.steiner = !0),
      s.push(getLeftmost(h));
  for (s.sort(compareX), a = 0; a < s.length; a++) n = eliminateHole(s[a], n);
  return n;
}
function compareX(r, e) {
  return r.x - e.x;
}
function eliminateHole(r, e) {
  const n = findHoleBridge(r, e);
  if (!n) return e;
  const i = splitPolygon(n, r);
  return filterPoints(i, i.next), filterPoints(n, n.next);
}
function findHoleBridge(r, e) {
  let n = e,
    i = -1 / 0,
    s;
  const a = r.x,
    o = r.y;
  do {
    if (o <= n.y && o >= n.next.y && n.next.y !== n.y) {
      const f = n.x + ((o - n.y) * (n.next.x - n.x)) / (n.next.y - n.y);
      if (
        f <= a &&
        f > i &&
        ((i = f), (s = n.x < n.next.x ? n : n.next), f === a)
      )
        return s;
    }
    n = n.next;
  } while (n !== e);
  if (!s) return null;
  const l = s,
    c = s.x,
    h = s.y;
  let u = 1 / 0,
    d;
  n = s;
  do
    a >= n.x &&
      n.x >= c &&
      a !== n.x &&
      pointInTriangle(o < h ? a : i, o, c, h, o < h ? i : a, o, n.x, n.y) &&
      ((d = Math.abs(o - n.y) / (a - n.x)),
      locallyInside(n, r) &&
        (d < u ||
          (d === u &&
            (n.x > s.x || (n.x === s.x && sectorContainsSector(s, n))))) &&
        ((s = n), (u = d))),
      (n = n.next);
  while (n !== l);
  return s;
}
function sectorContainsSector(r, e) {
  return area(r.prev, r, e.prev) < 0 && area(e.next, r, r.next) < 0;
}
function indexCurve(r, e, n, i) {
  let s = r;
  do
    s.z === 0 && (s.z = zOrder(s.x, s.y, e, n, i)),
      (s.prevZ = s.prev),
      (s.nextZ = s.next),
      (s = s.next);
  while (s !== r);
  (s.prevZ.nextZ = null), (s.prevZ = null), sortLinked(s);
}
function sortLinked(r) {
  let e,
    n,
    i,
    s,
    a,
    o,
    l,
    c,
    h = 1;
  do {
    for (n = r, r = null, a = null, o = 0; n; ) {
      for (o++, i = n, l = 0, e = 0; e < h && (l++, (i = i.nextZ), !!i); e++);
      for (c = h; l > 0 || (c > 0 && i); )
        l !== 0 && (c === 0 || !i || n.z <= i.z)
          ? ((s = n), (n = n.nextZ), l--)
          : ((s = i), (i = i.nextZ), c--),
          a ? (a.nextZ = s) : (r = s),
          (s.prevZ = a),
          (a = s);
      n = i;
    }
    (a.nextZ = null), (h *= 2);
  } while (o > 1);
  return r;
}
function zOrder(r, e, n, i, s) {
  return (
    (r = ((r - n) * s) | 0),
    (e = ((e - i) * s) | 0),
    (r = (r | (r << 8)) & 16711935),
    (r = (r | (r << 4)) & 252645135),
    (r = (r | (r << 2)) & 858993459),
    (r = (r | (r << 1)) & 1431655765),
    (e = (e | (e << 8)) & 16711935),
    (e = (e | (e << 4)) & 252645135),
    (e = (e | (e << 2)) & 858993459),
    (e = (e | (e << 1)) & 1431655765),
    r | (e << 1)
  );
}
function getLeftmost(r) {
  let e = r,
    n = r;
  do (e.x < n.x || (e.x === n.x && e.y < n.y)) && (n = e), (e = e.next);
  while (e !== r);
  return n;
}
function pointInTriangle(r, e, n, i, s, a, o, l) {
  return (
    (s - o) * (e - l) >= (r - o) * (a - l) &&
    (r - o) * (i - l) >= (n - o) * (e - l) &&
    (n - o) * (a - l) >= (s - o) * (i - l)
  );
}
function isValidDiagonal(r, e) {
  return (
    r.next.i !== e.i &&
    r.prev.i !== e.i &&
    !intersectsPolygon(r, e) && // dones't intersect other edges
    ((locallyInside(r, e) &&
      locallyInside(e, r) &&
      middleInside(r, e) && // locally visible
      (area(r.prev, r, e.prev) || area(r, e.prev, e))) || // does not create opposite-facing sectors
      (equals(r, e) &&
        area(r.prev, r, r.next) > 0 &&
        area(e.prev, e, e.next) > 0))
  );
}
function area(r, e, n) {
  return (e.y - r.y) * (n.x - e.x) - (e.x - r.x) * (n.y - e.y);
}
function equals(r, e) {
  return r.x === e.x && r.y === e.y;
}
function intersects(r, e, n, i) {
  const s = sign(area(r, e, n)),
    a = sign(area(r, e, i)),
    o = sign(area(n, i, r)),
    l = sign(area(n, i, e));
  return !!(
    (s !== a && o !== l) ||
    (s === 0 && onSegment(r, n, e)) ||
    (a === 0 && onSegment(r, i, e)) ||
    (o === 0 && onSegment(n, r, i)) ||
    (l === 0 && onSegment(n, e, i))
  );
}
function onSegment(r, e, n) {
  return (
    e.x <= Math.max(r.x, n.x) &&
    e.x >= Math.min(r.x, n.x) &&
    e.y <= Math.max(r.y, n.y) &&
    e.y >= Math.min(r.y, n.y)
  );
}
function sign(r) {
  return r > 0 ? 1 : r < 0 ? -1 : 0;
}
function intersectsPolygon(r, e) {
  let n = r;
  do {
    if (
      n.i !== r.i &&
      n.next.i !== r.i &&
      n.i !== e.i &&
      n.next.i !== e.i &&
      intersects(n, n.next, r, e)
    )
      return !0;
    n = n.next;
  } while (n !== r);
  return !1;
}
function locallyInside(r, e) {
  return area(r.prev, r, r.next) < 0
    ? area(r, e, r.next) >= 0 && area(r, r.prev, e) >= 0
    : area(r, e, r.prev) < 0 || area(r, r.next, e) < 0;
}
function middleInside(r, e) {
  let n = r,
    i = !1;
  const s = (r.x + e.x) / 2,
    a = (r.y + e.y) / 2;
  do
    n.y > a != n.next.y > a &&
      n.next.y !== n.y &&
      s < ((n.next.x - n.x) * (a - n.y)) / (n.next.y - n.y) + n.x &&
      (i = !i),
      (n = n.next);
  while (n !== r);
  return i;
}
function splitPolygon(r, e) {
  const n = new Node(r.i, r.x, r.y),
    i = new Node(e.i, e.x, e.y),
    s = r.next,
    a = e.prev;
  return (
    (r.next = e),
    (e.prev = r),
    (n.next = s),
    (s.prev = n),
    (i.next = n),
    (n.prev = i),
    (a.next = i),
    (i.prev = a),
    i
  );
}
function insertNode(r, e, n, i) {
  const s = new Node(r, e, n);
  return (
    i
      ? ((s.next = i.next), (s.prev = i), (i.next.prev = s), (i.next = s))
      : ((s.prev = s), (s.next = s)),
    s
  );
}
function removeNode(r) {
  (r.next.prev = r.prev),
    (r.prev.next = r.next),
    r.prevZ && (r.prevZ.nextZ = r.nextZ),
    r.nextZ && (r.nextZ.prevZ = r.prevZ);
}
function Node(r, e, n) {
  (this.i = r),
    (this.x = e),
    (this.y = n),
    (this.prev = null),
    (this.next = null),
    (this.z = 0),
    (this.prevZ = null),
    (this.nextZ = null),
    (this.steiner = !1);
}
function signedArea(r, e, n, i) {
  let s = 0;
  for (let a = e, o = n - i; a < n; a += i)
    (s += (r[o] - r[a]) * (r[a + 1] + r[o + 1])), (o = a);
  return s;
}
class ShapeUtils {
  // calculate area of the contour polygon
  static area(e) {
    const n = e.length;
    let i = 0;
    for (let s = n - 1, a = 0; a < n; s = a++)
      i += e[s].x * e[a].y - e[a].x * e[s].y;
    return i * 0.5;
  }
  static isClockWise(e) {
    return ShapeUtils.area(e) < 0;
  }
  static triangulateShape(e, n) {
    const i = [],
      s = [],
      a = [];
    removeDupEndPts(e), addContour(i, e);
    let o = e.length;
    n.forEach(removeDupEndPts);
    for (let c = 0; c < n.length; c++)
      s.push(o), (o += n[c].length), addContour(i, n[c]);
    const l = Earcut.triangulate(i, s);
    for (let c = 0; c < l.length; c += 3) a.push(l.slice(c, c + 3));
    return a;
  }
}
function removeDupEndPts(r) {
  const e = r.length;
  e > 2 && r[e - 1].equals(r[0]) && r.pop();
}
function addContour(r, e) {
  for (let n = 0; n < e.length; n++) r.push(e[n].x), r.push(e[n].y);
}
class ShapeGeometry extends BufferGeometry {
  constructor(
    e = new Shape([
      new Vector2(0, 0.5),
      new Vector2(-0.5, -0.5),
      new Vector2(0.5, -0.5),
    ]),
    n = 12
  ) {
    super(),
      (this.type = "ShapeGeometry"),
      (this.parameters = {
        shapes: e,
        curveSegments: n,
      });
    const i = [],
      s = [],
      a = [],
      o = [];
    let l = 0,
      c = 0;
    if (Array.isArray(e) === !1) h(e);
    else
      for (let u = 0; u < e.length; u++)
        h(e[u]), this.addGroup(l, c, u), (l += c), (c = 0);
    this.setIndex(i),
      this.setAttribute("position", new Float32BufferAttribute(s, 3)),
      this.setAttribute("normal", new Float32BufferAttribute(a, 3)),
      this.setAttribute("uv", new Float32BufferAttribute(o, 2));
    function h(u) {
      const d = s.length / 3,
        f = u.extractPoints(n);
      let p = f.shape;
      const g = f.holes;
      ShapeUtils.isClockWise(p) === !1 && (p = p.reverse());
      for (let _ = 0, m = g.length; _ < m; _++) {
        const A = g[_];
        ShapeUtils.isClockWise(A) === !0 && (g[_] = A.reverse());
      }
      const v = ShapeUtils.triangulateShape(p, g);
      for (let _ = 0, m = g.length; _ < m; _++) {
        const A = g[_];
        p = p.concat(A);
      }
      for (let _ = 0, m = p.length; _ < m; _++) {
        const A = p[_];
        s.push(A.x, A.y, 0), a.push(0, 0, 1), o.push(A.x, A.y);
      }
      for (let _ = 0, m = v.length; _ < m; _++) {
        const A = v[_],
          S = A[0] + d,
          E = A[1] + d,
          N = A[2] + d;
        i.push(S, E, N), (c += 3);
      }
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  toJSON() {
    const e = super.toJSON(),
      n = this.parameters.shapes;
    return toJSON(n, e);
  }
  static fromJSON(e, n) {
    const i = [];
    for (let s = 0, a = e.shapes.length; s < a; s++) {
      const o = n[e.shapes[s]];
      i.push(o);
    }
    return new ShapeGeometry(i, e.curveSegments);
  }
}
function toJSON(r, e) {
  if (((e.shapes = []), Array.isArray(r)))
    for (let n = 0, i = r.length; n < i; n++) {
      const s = r[n];
      e.shapes.push(s.uuid);
    }
  else e.shapes.push(r.uuid);
  return e;
}
class MeshStandardMaterial extends Material {
  constructor(e) {
    super(),
      (this.isMeshStandardMaterial = !0),
      (this.defines = { STANDARD: "" }),
      (this.type = "MeshStandardMaterial"),
      (this.color = new Color(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Color(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = 0),
      (this.normalScale = new Vector2(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new Euler()),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "" }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.envMapIntensity = e.envMapIntensity),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
class MeshPhysicalMaterial extends MeshStandardMaterial {
  constructor(e) {
    super(),
      (this.isMeshPhysicalMaterial = !0),
      (this.defines = {
        STANDARD: "",
        PHYSICAL: "",
      }),
      (this.type = "MeshPhysicalMaterial"),
      (this.anisotropyRotation = 0),
      (this.anisotropyMap = null),
      (this.clearcoatMap = null),
      (this.clearcoatRoughness = 0),
      (this.clearcoatRoughnessMap = null),
      (this.clearcoatNormalScale = new Vector2(1, 1)),
      (this.clearcoatNormalMap = null),
      (this.ior = 1.5),
      Object.defineProperty(this, "reflectivity", {
        get: function () {
          return clamp$2((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1);
        },
        set: function (n) {
          this.ior = (1 + 0.4 * n) / (1 - 0.4 * n);
        },
      }),
      (this.iridescenceMap = null),
      (this.iridescenceIOR = 1.3),
      (this.iridescenceThicknessRange = [100, 400]),
      (this.iridescenceThicknessMap = null),
      (this.sheenColor = new Color(0)),
      (this.sheenColorMap = null),
      (this.sheenRoughness = 1),
      (this.sheenRoughnessMap = null),
      (this.transmissionMap = null),
      (this.thickness = 0),
      (this.thicknessMap = null),
      (this.attenuationDistance = 1 / 0),
      (this.attenuationColor = new Color(1, 1, 1)),
      (this.specularIntensity = 1),
      (this.specularIntensityMap = null),
      (this.specularColor = new Color(1, 1, 1)),
      (this.specularColorMap = null),
      (this._anisotropy = 0),
      (this._clearcoat = 0),
      (this._dispersion = 0),
      (this._iridescence = 0),
      (this._sheen = 0),
      (this._transmission = 0),
      this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, (this._anisotropy = e);
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, (this._clearcoat = e);
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, (this._iridescence = e);
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(e) {
    this._dispersion > 0 != e > 0 && this.version++, (this._dispersion = e);
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, (this._sheen = e);
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, (this._transmission = e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = {
        STANDARD: "",
        PHYSICAL: "",
      }),
      (this.anisotropy = e.anisotropy),
      (this.anisotropyRotation = e.anisotropyRotation),
      (this.anisotropyMap = e.anisotropyMap),
      (this.clearcoat = e.clearcoat),
      (this.clearcoatMap = e.clearcoatMap),
      (this.clearcoatRoughness = e.clearcoatRoughness),
      (this.clearcoatRoughnessMap = e.clearcoatRoughnessMap),
      (this.clearcoatNormalMap = e.clearcoatNormalMap),
      this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
      (this.dispersion = e.dispersion),
      (this.ior = e.ior),
      (this.iridescence = e.iridescence),
      (this.iridescenceMap = e.iridescenceMap),
      (this.iridescenceIOR = e.iridescenceIOR),
      (this.iridescenceThicknessRange = [...e.iridescenceThicknessRange]),
      (this.iridescenceThicknessMap = e.iridescenceThicknessMap),
      (this.sheen = e.sheen),
      this.sheenColor.copy(e.sheenColor),
      (this.sheenColorMap = e.sheenColorMap),
      (this.sheenRoughness = e.sheenRoughness),
      (this.sheenRoughnessMap = e.sheenRoughnessMap),
      (this.transmission = e.transmission),
      (this.transmissionMap = e.transmissionMap),
      (this.thickness = e.thickness),
      (this.thicknessMap = e.thicknessMap),
      (this.attenuationDistance = e.attenuationDistance),
      this.attenuationColor.copy(e.attenuationColor),
      (this.specularIntensity = e.specularIntensity),
      (this.specularIntensityMap = e.specularIntensityMap),
      this.specularColor.copy(e.specularColor),
      (this.specularColorMap = e.specularColorMap),
      this
    );
  }
}
const Cache = {
  enabled: !1,
  files: {},
  add: function (r, e) {
    this.enabled !== !1 && (this.files[r] = e);
  },
  get: function (r) {
    if (this.enabled !== !1) return this.files[r];
  },
  remove: function (r) {
    delete this.files[r];
  },
  clear: function () {
    this.files = {};
  },
};
class LoadingManager {
  constructor(e, n, i) {
    const s = this;
    let a = !1,
      o = 0,
      l = 0,
      c;
    const h = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = n),
      (this.onError = i),
      (this.itemStart = function (u) {
        l++, a === !1 && s.onStart !== void 0 && s.onStart(u, o, l), (a = !0);
      }),
      (this.itemEnd = function (u) {
        o++,
          s.onProgress !== void 0 && s.onProgress(u, o, l),
          o === l && ((a = !1), s.onLoad !== void 0 && s.onLoad());
      }),
      (this.itemError = function (u) {
        s.onError !== void 0 && s.onError(u);
      }),
      (this.resolveURL = function (u) {
        return c ? c(u) : u;
      }),
      (this.setURLModifier = function (u) {
        return (c = u), this;
      }),
      (this.addHandler = function (u, d) {
        return h.push(u, d), this;
      }),
      (this.removeHandler = function (u) {
        const d = h.indexOf(u);
        return d !== -1 && h.splice(d, 2), this;
      }),
      (this.getHandler = function (u) {
        for (let d = 0, f = h.length; d < f; d += 2) {
          const p = h[d],
            g = h[d + 1];
          if ((p.global && (p.lastIndex = 0), p.test(u))) return g;
        }
        return null;
      });
  }
}
const DefaultLoadingManager = /* @__PURE__ */ new LoadingManager();
class Loader {
  constructor(e) {
    (this.manager = e !== void 0 ? e : DefaultLoadingManager),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, n) {
    const i = this;
    return new Promise(function (s, a) {
      i.load(e, s, n, a);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
}
Loader.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const loading = {};
class HttpError extends Error {
  constructor(e, n) {
    super(e), (this.response = n);
  }
}
class FileLoader extends Loader {
  constructor(e) {
    super(e);
  }
  load(e, n, i, s) {
    e === void 0 && (e = ""),
      this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const a = Cache.get(e);
    if (a !== void 0)
      return (
        this.manager.itemStart(e),
        setTimeout(() => {
          n && n(a), this.manager.itemEnd(e);
        }, 0),
        a
      );
    if (loading[e] !== void 0) {
      loading[e].push({
        onLoad: n,
        onProgress: i,
        onError: s,
      });
      return;
    }
    (loading[e] = []),
      loading[e].push({
        onLoad: n,
        onProgress: i,
        onError: s,
      });
    const o = new Request(e, {
        headers: new Headers(this.requestHeader),
        credentials: this.withCredentials ? "include" : "same-origin",
        // An abort controller could be added within a future PR
      }),
      l = this.mimeType,
      c = this.responseType;
    fetch(o)
      .then((h) => {
        if (h.status === 200 || h.status === 0) {
          if (
            (h.status === 0 &&
              console.warn("THREE.FileLoader: HTTP Status 0 received."),
            typeof ReadableStream > "u" ||
              h.body === void 0 ||
              h.body.getReader === void 0)
          )
            return h;
          const u = loading[e],
            d = h.body.getReader(),
            f = h.headers.get("X-File-Size") || h.headers.get("Content-Length"),
            p = f ? parseInt(f) : 0,
            g = p !== 0;
          let v = 0;
          const _ = new ReadableStream({
            start(m) {
              A();
              function A() {
                d.read().then(
                  ({ done: S, value: E }) => {
                    if (S) m.close();
                    else {
                      v += E.byteLength;
                      const N = new ProgressEvent("progress", {
                        lengthComputable: g,
                        loaded: v,
                        total: p,
                      });
                      for (let w = 0, C = u.length; w < C; w++) {
                        const U = u[w];
                        U.onProgress && U.onProgress(N);
                      }
                      m.enqueue(E), A();
                    }
                  },
                  (S) => {
                    m.error(S);
                  }
                );
              }
            },
          });
          return new Response(_);
        } else
          throw new HttpError(
            `fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,
            h
          );
      })
      .then((h) => {
        switch (c) {
          case "arraybuffer":
            return h.arrayBuffer();
          case "blob":
            return h.blob();
          case "document":
            return h.text().then((u) => new DOMParser().parseFromString(u, l));
          case "json":
            return h.json();
          default:
            if (l === void 0) return h.text();
            {
              const d = /charset="?([^;"\s]*)"?/i.exec(l),
                f = d && d[1] ? d[1].toLowerCase() : void 0,
                p = new TextDecoder(f);
              return h.arrayBuffer().then((g) => p.decode(g));
            }
        }
      })
      .then((h) => {
        Cache.add(e, h);
        const u = loading[e];
        delete loading[e];
        for (let d = 0, f = u.length; d < f; d++) {
          const p = u[d];
          p.onLoad && p.onLoad(h);
        }
      })
      .catch((h) => {
        const u = loading[e];
        if (u === void 0) throw (this.manager.itemError(e), h);
        delete loading[e];
        for (let d = 0, f = u.length; d < f; d++) {
          const p = u[d];
          p.onError && p.onError(h);
        }
        this.manager.itemError(e);
      })
      .finally(() => {
        this.manager.itemEnd(e);
      }),
      this.manager.itemStart(e);
  }
  setResponseType(e) {
    return (this.responseType = e), this;
  }
  setMimeType(e) {
    return (this.mimeType = e), this;
  }
}
class ImageLoader extends Loader {
  constructor(e) {
    super(e);
  }
  load(e, n, i, s) {
    this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const a = this,
      o = Cache.get(e);
    if (o !== void 0)
      return (
        a.manager.itemStart(e),
        setTimeout(function () {
          n && n(o), a.manager.itemEnd(e);
        }, 0),
        o
      );
    const l = createElementNS("img");
    function c() {
      u(), Cache.add(e, this), n && n(this), a.manager.itemEnd(e);
    }
    function h(d) {
      u(), s && s(d), a.manager.itemError(e), a.manager.itemEnd(e);
    }
    function u() {
      l.removeEventListener("load", c, !1),
        l.removeEventListener("error", h, !1);
    }
    return (
      l.addEventListener("load", c, !1),
      l.addEventListener("error", h, !1),
      e.slice(0, 5) !== "data:" &&
        this.crossOrigin !== void 0 &&
        (l.crossOrigin = this.crossOrigin),
      a.manager.itemStart(e),
      (l.src = e),
      l
    );
  }
}
class TextureLoader extends Loader {
  constructor(e) {
    super(e);
  }
  load(e, n, i, s) {
    const a = new Texture(),
      o = new ImageLoader(this.manager);
    return (
      o.setCrossOrigin(this.crossOrigin),
      o.setPath(this.path),
      o.load(
        e,
        function (l) {
          (a.image = l), (a.needsUpdate = !0), n !== void 0 && n(a);
        },
        i,
        s
      ),
      a
    );
  }
}
class Light extends Object3D {
  constructor(e, n = 1) {
    super(),
      (this.isLight = !0),
      (this.type = "Light"),
      (this.color = new Color(e)),
      (this.intensity = n);
  }
  dispose() {}
  copy(e, n) {
    return (
      super.copy(e, n),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    const n = super.toJSON(e);
    return (
      (n.object.color = this.color.getHex()),
      (n.object.intensity = this.intensity),
      this.groundColor !== void 0 &&
        (n.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (n.object.distance = this.distance),
      this.angle !== void 0 && (n.object.angle = this.angle),
      this.decay !== void 0 && (n.object.decay = this.decay),
      this.penumbra !== void 0 && (n.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (n.object.shadow = this.shadow.toJSON()),
      this.target !== void 0 && (n.object.target = this.target.uuid),
      n
    );
  }
}
const _projScreenMatrix$1 = /* @__PURE__ */ new Matrix4(),
  _lightPositionWorld$1 = /* @__PURE__ */ new Vector3(),
  _lookTarget$1 = /* @__PURE__ */ new Vector3();
class LightShadow {
  constructor(e) {
    (this.camera = e),
      (this.intensity = 1),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new Vector2(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new Matrix4()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new Frustum()),
      (this._frameExtents = new Vector2(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new Vector4(0, 0, 1, 1)]);
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const n = this.camera,
      i = this.matrix;
    _lightPositionWorld$1.setFromMatrixPosition(e.matrixWorld),
      n.position.copy(_lightPositionWorld$1),
      _lookTarget$1.setFromMatrixPosition(e.target.matrixWorld),
      n.lookAt(_lookTarget$1),
      n.updateMatrixWorld(),
      _projScreenMatrix$1.multiplyMatrices(
        n.projectionMatrix,
        n.matrixWorldInverse
      ),
      this._frustum.setFromProjectionMatrix(_projScreenMatrix$1),
      i.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      i.multiply(_projScreenMatrix$1);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return (
      (this.camera = e.camera.clone()),
      (this.intensity = e.intensity),
      (this.bias = e.bias),
      (this.radius = e.radius),
      this.mapSize.copy(e.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return (
      this.intensity !== 1 && (e.intensity = this.intensity),
      this.bias !== 0 && (e.bias = this.bias),
      this.normalBias !== 0 && (e.normalBias = this.normalBias),
      this.radius !== 1 && (e.radius = this.radius),
      (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
        (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
class SpotLightShadow extends LightShadow {
  constructor() {
    super(new PerspectiveCamera(50, 1, 0.5, 500)),
      (this.isSpotLightShadow = !0),
      (this.focus = 1);
  }
  updateMatrices(e) {
    const n = this.camera,
      i = RAD2DEG * 2 * e.angle * this.focus,
      s = this.mapSize.width / this.mapSize.height,
      a = e.distance || n.far;
    (i !== n.fov || s !== n.aspect || a !== n.far) &&
      ((n.fov = i), (n.aspect = s), (n.far = a), n.updateProjectionMatrix()),
      super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), (this.focus = e.focus), this;
  }
}
class SpotLight extends Light {
  constructor(e, n, i = 0, s = Math.PI / 3, a = 0, o = 2) {
    super(e, n),
      (this.isSpotLight = !0),
      (this.type = "SpotLight"),
      this.position.copy(Object3D.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new Object3D()),
      (this.distance = i),
      (this.angle = s),
      (this.penumbra = a),
      (this.decay = o),
      (this.map = null),
      (this.shadow = new SpotLightShadow());
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, n) {
    return (
      super.copy(e, n),
      (this.distance = e.distance),
      (this.angle = e.angle),
      (this.penumbra = e.penumbra),
      (this.decay = e.decay),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class AmbientLight extends Light {
  constructor(e, n) {
    super(e, n), (this.isAmbientLight = !0), (this.type = "AmbientLight");
  }
}
let _context;
class AudioContext {
  static getContext() {
    return (
      _context === void 0 &&
        (_context = new (window.AudioContext || window.webkitAudioContext)()),
      _context
    );
  }
  static setContext(e) {
    _context = e;
  }
}
class AudioLoader extends Loader {
  constructor(e) {
    super(e);
  }
  load(e, n, i, s) {
    const a = this,
      o = new FileLoader(this.manager);
    o.setResponseType("arraybuffer"),
      o.setPath(this.path),
      o.setRequestHeader(this.requestHeader),
      o.setWithCredentials(this.withCredentials),
      o.load(
        e,
        function (c) {
          try {
            const h = c.slice(0);
            AudioContext.getContext()
              .decodeAudioData(h, function (d) {
                n(d);
              })
              .catch(l);
          } catch (h) {
            l(h);
          }
        },
        i,
        s
      );
    function l(c) {
      s ? s(c) : console.error(c), a.manager.itemError(e);
    }
  }
}
class Clock {
  constructor(e = !0) {
    (this.autoStart = e),
      (this.startTime = 0),
      (this.oldTime = 0),
      (this.elapsedTime = 0),
      (this.running = !1);
  }
  start() {
    (this.startTime = now()),
      (this.oldTime = this.startTime),
      (this.elapsedTime = 0),
      (this.running = !0);
  }
  stop() {
    this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const n = now();
      (e = (n - this.oldTime) / 1e3),
        (this.oldTime = n),
        (this.elapsedTime += e);
    }
    return e;
  }
}
function now() {
  return (typeof performance > "u" ? Date : performance).now();
}
const _position$1 = /* @__PURE__ */ new Vector3(),
  _quaternion$1 = /* @__PURE__ */ new Quaternion(),
  _scale$1 = /* @__PURE__ */ new Vector3(),
  _orientation$1 = /* @__PURE__ */ new Vector3();
class AudioListener extends Object3D {
  constructor() {
    super(),
      (this.type = "AudioListener"),
      (this.context = AudioContext.getContext()),
      (this.gain = this.context.createGain()),
      this.gain.connect(this.context.destination),
      (this.filter = null),
      (this.timeDelta = 0),
      (this._clock = new Clock());
  }
  getInput() {
    return this.gain;
  }
  removeFilter() {
    return (
      this.filter !== null &&
        (this.gain.disconnect(this.filter),
        this.filter.disconnect(this.context.destination),
        this.gain.connect(this.context.destination),
        (this.filter = null)),
      this
    );
  }
  getFilter() {
    return this.filter;
  }
  setFilter(e) {
    return (
      this.filter !== null
        ? (this.gain.disconnect(this.filter),
          this.filter.disconnect(this.context.destination))
        : this.gain.disconnect(this.context.destination),
      (this.filter = e),
      this.gain.connect(this.filter),
      this.filter.connect(this.context.destination),
      this
    );
  }
  getMasterVolume() {
    return this.gain.gain.value;
  }
  setMasterVolume(e) {
    return (
      this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this
    );
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e);
    const n = this.context.listener,
      i = this.up;
    if (
      ((this.timeDelta = this._clock.getDelta()),
      this.matrixWorld.decompose(_position$1, _quaternion$1, _scale$1),
      _orientation$1.set(0, 0, -1).applyQuaternion(_quaternion$1),
      n.positionX)
    ) {
      const s = this.context.currentTime + this.timeDelta;
      n.positionX.linearRampToValueAtTime(_position$1.x, s),
        n.positionY.linearRampToValueAtTime(_position$1.y, s),
        n.positionZ.linearRampToValueAtTime(_position$1.z, s),
        n.forwardX.linearRampToValueAtTime(_orientation$1.x, s),
        n.forwardY.linearRampToValueAtTime(_orientation$1.y, s),
        n.forwardZ.linearRampToValueAtTime(_orientation$1.z, s),
        n.upX.linearRampToValueAtTime(i.x, s),
        n.upY.linearRampToValueAtTime(i.y, s),
        n.upZ.linearRampToValueAtTime(i.z, s);
    } else
      n.setPosition(_position$1.x, _position$1.y, _position$1.z),
        n.setOrientation(
          _orientation$1.x,
          _orientation$1.y,
          _orientation$1.z,
          i.x,
          i.y,
          i.z
        );
  }
}
class Audio extends Object3D {
  constructor(e) {
    super(),
      (this.type = "Audio"),
      (this.listener = e),
      (this.context = e.context),
      (this.gain = this.context.createGain()),
      this.gain.connect(e.getInput()),
      (this.autoplay = !1),
      (this.buffer = null),
      (this.detune = 0),
      (this.loop = !1),
      (this.loopStart = 0),
      (this.loopEnd = 0),
      (this.offset = 0),
      (this.duration = void 0),
      (this.playbackRate = 1),
      (this.isPlaying = !1),
      (this.hasPlaybackControl = !0),
      (this.source = null),
      (this.sourceType = "empty"),
      (this._startedAt = 0),
      (this._progress = 0),
      (this._connected = !1),
      (this.filters = []);
  }
  getOutput() {
    return this.gain;
  }
  setNodeSource(e) {
    return (
      (this.hasPlaybackControl = !1),
      (this.sourceType = "audioNode"),
      (this.source = e),
      this.connect(),
      this
    );
  }
  setMediaElementSource(e) {
    return (
      (this.hasPlaybackControl = !1),
      (this.sourceType = "mediaNode"),
      (this.source = this.context.createMediaElementSource(e)),
      this.connect(),
      this
    );
  }
  setMediaStreamSource(e) {
    return (
      (this.hasPlaybackControl = !1),
      (this.sourceType = "mediaStreamNode"),
      (this.source = this.context.createMediaStreamSource(e)),
      this.connect(),
      this
    );
  }
  setBuffer(e) {
    return (
      (this.buffer = e),
      (this.sourceType = "buffer"),
      this.autoplay && this.play(),
      this
    );
  }
  play(e = 0) {
    if (this.isPlaying === !0) {
      console.warn("THREE.Audio: Audio is already playing.");
      return;
    }
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    this._startedAt = this.context.currentTime + e;
    const n = this.context.createBufferSource();
    return (
      (n.buffer = this.buffer),
      (n.loop = this.loop),
      (n.loopStart = this.loopStart),
      (n.loopEnd = this.loopEnd),
      (n.onended = this.onEnded.bind(this)),
      n.start(this._startedAt, this._progress + this.offset, this.duration),
      (this.isPlaying = !0),
      (this.source = n),
      this.setDetune(this.detune),
      this.setPlaybackRate(this.playbackRate),
      this.connect()
    );
  }
  pause() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return (
      this.isPlaying === !0 &&
        ((this._progress +=
          Math.max(this.context.currentTime - this._startedAt, 0) *
          this.playbackRate),
        this.loop === !0 &&
          (this._progress =
            this._progress % (this.duration || this.buffer.duration)),
        this.source.stop(),
        (this.source.onended = null),
        (this.isPlaying = !1)),
      this
    );
  }
  stop() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return (
      (this._progress = 0),
      this.source !== null &&
        (this.source.stop(), (this.source.onended = null)),
      (this.isPlaying = !1),
      this
    );
  }
  connect() {
    if (this.filters.length > 0) {
      this.source.connect(this.filters[0]);
      for (let e = 1, n = this.filters.length; e < n; e++)
        this.filters[e - 1].connect(this.filters[e]);
      this.filters[this.filters.length - 1].connect(this.getOutput());
    } else this.source.connect(this.getOutput());
    return (this._connected = !0), this;
  }
  disconnect() {
    if (this._connected !== !1) {
      if (this.filters.length > 0) {
        this.source.disconnect(this.filters[0]);
        for (let e = 1, n = this.filters.length; e < n; e++)
          this.filters[e - 1].disconnect(this.filters[e]);
        this.filters[this.filters.length - 1].disconnect(this.getOutput());
      } else this.source.disconnect(this.getOutput());
      return (this._connected = !1), this;
    }
  }
  getFilters() {
    return this.filters;
  }
  setFilters(e) {
    return (
      e || (e = []),
      this._connected === !0
        ? (this.disconnect(), (this.filters = e.slice()), this.connect())
        : (this.filters = e.slice()),
      this
    );
  }
  setDetune(e) {
    return (
      (this.detune = e),
      this.isPlaying === !0 &&
        this.source.detune !== void 0 &&
        this.source.detune.setTargetAtTime(
          this.detune,
          this.context.currentTime,
          0.01
        ),
      this
    );
  }
  getDetune() {
    return this.detune;
  }
  getFilter() {
    return this.getFilters()[0];
  }
  setFilter(e) {
    return this.setFilters(e ? [e] : []);
  }
  setPlaybackRate(e) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return (
      (this.playbackRate = e),
      this.isPlaying === !0 &&
        this.source.playbackRate.setTargetAtTime(
          this.playbackRate,
          this.context.currentTime,
          0.01
        ),
      this
    );
  }
  getPlaybackRate() {
    return this.playbackRate;
  }
  onEnded() {
    this.isPlaying = !1;
  }
  getLoop() {
    return this.hasPlaybackControl === !1
      ? (console.warn("THREE.Audio: this Audio has no playback control."), !1)
      : this.loop;
  }
  setLoop(e) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return (
      (this.loop = e),
      this.isPlaying === !0 && (this.source.loop = this.loop),
      this
    );
  }
  setLoopStart(e) {
    return (this.loopStart = e), this;
  }
  setLoopEnd(e) {
    return (this.loopEnd = e), this;
  }
  getVolume() {
    return this.gain.gain.value;
  }
  setVolume(e) {
    return (
      this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this
    );
  }
}
const _matrix = /* @__PURE__ */ new Matrix4();
class Raycaster {
  constructor(e, n, i = 0, s = 1 / 0) {
    (this.ray = new Ray(e, n)),
      (this.near = i),
      (this.far = s),
      (this.camera = null),
      (this.layers = new Layers()),
      (this.params = {
        Mesh: {},
        Line: { threshold: 1 },
        LOD: {},
        Points: { threshold: 1 },
        Sprite: {},
      });
  }
  set(e, n) {
    this.ray.set(e, n);
  }
  setFromCamera(e, n) {
    n.isPerspectiveCamera
      ? (this.ray.origin.setFromMatrixPosition(n.matrixWorld),
        this.ray.direction
          .set(e.x, e.y, 0.5)
          .unproject(n)
          .sub(this.ray.origin)
          .normalize(),
        (this.camera = n))
      : n.isOrthographicCamera
      ? (this.ray.origin
          .set(e.x, e.y, (n.near + n.far) / (n.near - n.far))
          .unproject(n),
        this.ray.direction.set(0, 0, -1).transformDirection(n.matrixWorld),
        (this.camera = n))
      : console.error("THREE.Raycaster: Unsupported camera type: " + n.type);
  }
  setFromXRController(e) {
    return (
      _matrix.identity().extractRotation(e.matrixWorld),
      this.ray.origin.setFromMatrixPosition(e.matrixWorld),
      this.ray.direction.set(0, 0, -1).applyMatrix4(_matrix),
      this
    );
  }
  intersectObject(e, n = !0, i = []) {
    return intersect(e, this, i, n), i.sort(ascSort), i;
  }
  intersectObjects(e, n = !0, i = []) {
    for (let s = 0, a = e.length; s < a; s++) intersect(e[s], this, i, n);
    return i.sort(ascSort), i;
  }
}
function ascSort(r, e) {
  return r.distance - e.distance;
}
function intersect(r, e, n, i) {
  let s = !0;
  if (
    (r.layers.test(e.layers) && r.raycast(e, n) === !1 && (s = !1),
    s === !0 && i === !0)
  ) {
    const a = r.children;
    for (let o = 0, l = a.length; o < l; o++) intersect(a[o], e, n, !0);
  }
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", {
      detail: {
        revision: REVISION,
      },
    })
  );
typeof window < "u" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = REVISION));
class GalleryEntity {
  constructor(e, n = "wall") {
    te(this, "_position");
    te(this, "_mesh", new Mesh());
    te(this, "_collider");
    te(this, "_entityType");
    // methods
    te(this, "load", async () => {});
    te(this, "update", (e) => {});
    (this._entityType = n), (this._position = e);
    const { x: i, y: s, z: a } = e;
    this._mesh.position.set(i, s, a);
  }
  get mesh() {
    return this._mesh;
  }
  get collider() {
    return this._collider;
  }
  get entityType() {
    return this._entityType;
  }
}
const ct = class ct {
  constructor() {
    te(this, "_imageResources", /* @__PURE__ */ new Map());
    te(this, "_audioResources", /* @__PURE__ */ new Map());
    te(this, "load", (e) => {
      const n = e.filter(
          (s) =>
            s.type == "image" || s.type == "background" || s.type == "video"
        ),
        i = e.filter((s) => s.type === "audio");
      if (n.length > 0) {
        const s = new TextureLoader();
        this._loadImageResources(s, n);
      }
      if (i.length > 0) {
        const s = new AudioLoader(),
          a = new AudioListener();
        GalleryScene.instance.camera.add(a), this._loadAudioResources(s, a, i);
      }
    });
    te(this, "_loadImageResources", (e, n) => {
      n.forEach((i) => {
        const { id: s, url: a } = i,
          o = e.load(a);
        (o.colorSpace = SRGBColorSpace), this._imageResources.set(s, o);
      });
    });
    te(this, "_loadAudioResources", (e, n, i) => {
      i.forEach((s) => {
        const { id: a, url: o, mediaPlayer: l } = s,
          c = !!(l != null && l.loop),
          h = new Audio(n);
        e.load(o, (u) => {
          h.setBuffer(u), h.setLoop(c), h.setVolume(1);
        }),
          this._audioResources.set(a, h);
      });
    });
  }
  static get instance() {
    return this._instance;
  }
  getImageResource(e) {
    return this._imageResources.get(e);
  }
  getAudioResource(e) {
    return this._audioResources.get(e);
  }
  getAudioResourcesSize() {
    return this._audioResources.size;
  }
};
te(ct, "_instance", new ct());
let ResourceManager = ct,
  Wall$1 = class extends GalleryEntity {
    constructor(n, i, s, a, o = null, l = null, c = null) {
      super(n);
      te(this, "_size");
      te(this, "_angle");
      te(this, "_color");
      te(this, "_backgroundPatternId");
      te(this, "_backgroundImageId");
      te(this, "load", async (n = !1) => {
        const i = new BoxGeometry(...this._size);
        let s;
        n ? (s = new MeshBasicMaterial()) : (s = new MeshStandardMaterial()),
          s.color.set(this._color);
        const a = new Mesh(i, s);
        if (
          ((a.receiveShadow = !0),
          (a.userData.type = "wall"),
          a.position.set(this._size[0] / 2, this._size[1] / 2, this._size[2]),
          this._mesh.add(a),
          this._backgroundImageId)
        ) {
          const o = ResourceManager.instance.getImageResource(
            this._backgroundImageId
          );
          if (o) {
            const l = s.clone();
            l.color.set("white"), (l.map = o);
            const c = new Mesh(i, l);
            (c.userData.type = "wall"),
              c.position.set(
                this._size[0] / 2,
                this._size[1] / 2,
                this._size[2]
              ),
              this._mesh.add(c);
          }
        }
        this._mesh.rotateY(this._angle),
          (this._collider = new Box3().setFromObject(this._mesh));
      });
      (this._size = i),
        (this._angle = s),
        (this._color = a),
        (this._backgroundPatternId = o),
        (this._backgroundImageId = l),
        (this.mesh.userData.type = "wall"),
        (this.mesh.userData.audioId = c),
        (this.mesh.userData.angle = s);
    }
  };
const Wall$2 = Wall$1;
class Plane extends GalleryEntity {
  constructor(n, i, s, a = null) {
    super(n);
    te(this, "_center");
    te(this, "_size");
    te(this, "_color");
    te(this, "_backgroundImageId");
    te(this, "load", async (n = !1) => {
      const i = new BoxGeometry(this._size, this._size, 1);
      let s;
      n ? (s = new MeshBasicMaterial()) : (s = new MeshStandardMaterial()),
        s.color.set(this._color);
      const a = new Mesh(i, s);
      this._mesh.add(a);
      const o = this._center.y > 0 ? -1 : 1;
      if (this._backgroundImageId) {
        const l = ResourceManager.instance.getImageResource(
          this._backgroundImageId
        );
        if (l) {
          const c = s.clone();
          c.color.set("white"), (c.map = l);
          const h = new Mesh(i, c);
          h.position.set(0, o, 0), this._mesh.add(h);
        }
      }
      this._mesh.rotateX(Math.PI / 2),
        (this._collider = new Box3().setFromObject(this._mesh));
    });
    (this._center = n),
      (this._size = i),
      (this._color = s),
      (this._backgroundImageId = a);
  }
}
const Plane$1 = Plane;
class Content {
  constructor(e, n, i, s = null, a = !1) {
    te(this, "_wallIndex");
    te(this, "_resourceId");
    te(this, "_isVideo");
    te(this, "_size");
    te(this, "_frameData");
    te(this, "_mesh", new Mesh());
    te(this, "load", async (e = !1) => {
      const n = new BoxGeometry(...this._size);
      let i;
      e ? (i = new MeshBasicMaterial()) : (i = new MeshStandardMaterial());
      const s = ResourceManager.instance.getImageResource(this._resourceId);
      if (!s) return;
      i.map = s;
      const a = new Mesh(n, i);
      if (
        ((a.userData.type = "content"),
        (a.userData.id = this._resourceId),
        (a.userData.wallIndex = this._wallIndex),
        (a.castShadow = !0),
        this._mesh.add(a),
        this._frameData)
      ) {
        const {
            frameWidth: o,
            frameColor: l,
            matWidth: c,
            matColor: h,
            isGlassed: u,
          } = this._frameData,
          d = new BoxGeometry(this._size[0] + c / 10, c / 10, 0.1),
          f = new BoxGeometry(c / 10, this._size[1] + c / 10, 0.1),
          p = i.clone();
        (p.map = null), p.color.set(h);
        const g = new Mesh(d, p),
          v = new Mesh(d, p),
          _ = new Mesh(f, p),
          m = new Mesh(f, p);
        (g.castShadow = !0),
          (_.castShadow = !0),
          (m.castShadow = !0),
          (a.receiveShadow = !0),
          g.position.set(c / 20, this._size[1] / 2 + c / 20, 0.8),
          v.position.set(-c / 20, -this._size[1] / 2 - c / 20, 0.8),
          _.position.set(-this._size[0] / 2 - c / 20, c / 20, 0.8),
          m.position.set(this._size[0] / 2 + c / 20, -c / 20, 0.8),
          this._mesh.add(g, v, _, m);
        const A = new BoxGeometry(
            this._size[0] + (2 * c + o) / 10,
            o / 10,
            o / 10
          ),
          S = new BoxGeometry(o / 10, this._size[1] + (2 * c + o) / 10, o / 10),
          E = p.clone();
        E.color.set(l);
        const N = new Mesh(A, E),
          w = new Mesh(A, E),
          C = new Mesh(S, E),
          U = new Mesh(S, E);
        if (
          ((w.castShadow = !0),
          (U.castShadow = !0),
          (C.castShadow = !0),
          N.position.set(o / 20, this._size[1] / 2 + c / 10 + o / 20, 0.1),
          w.position.set(-o / 20, -this._size[1] / 2 - (c / 10 + o / 20), 0.1),
          C.position.set(-this._size[0] / 2 - (c / 10 + o / 20), o / 20, 0.1),
          U.position.set(this._size[0] / 2 + (c / 10 + o / 20), -o / 20, 0.1),
          this._mesh.add(N, w, C, U),
          u)
        ) {
          const T = new BoxGeometry(
              this._size[0] + (2 * c) / 10,
              this._size[1] + (2 * c) / 10,
              0.1
            ),
            M = new MeshPhysicalMaterial({
              roughness: 0,
              transmission: 1,
              reflectivity: 0,
            }),
            P = new Mesh(T, M);
          P.position.set(0, 0, 1),
            (P.userData.type = "content"),
            (P.userData.id = this._resourceId),
            (P.userData.wallIndex = this._wallIndex),
            this._mesh.add(P);
        }
      }
      if (this._isVideo) {
        const o = new MeshBasicMaterial({
            color: "white",
            opacity: 0.3,
            transparent: !0,
          }),
          l = new Mesh(new CircleGeometry(20, 40), o);
        l.position.set(0, 0, 2);
        const c = new Shape();
        c.moveTo(-10, -10),
          c.lineTo(10, 0),
          c.lineTo(-10, 10),
          c.lineTo(-10, -10);
        const h = new ShapeGeometry(c),
          u = new MeshBasicMaterial({
            color: "white",
            opacity: 0.6,
            transparent: !0,
          }),
          d = new Mesh(h, u);
        d.position.set(2.5, 0, -0.5),
          l.add(d),
          (l.userData.type = "video-player"),
          (l.userData.id = this._resourceId),
          this._mesh.add(l);
      }
      (this._mesh.userData.type = "content"),
        (this._mesh.userData.id = this._resourceId),
        (this._mesh.userData.wallIndex = this._wallIndex);
    });
    (this._wallIndex = e),
      (this._resourceId = n),
      (this._size = i),
      (this._frameData = s),
      (this._isVideo = a);
  }
  get mesh() {
    return this._mesh;
  }
}
const Content$1 = Content;
class AudioControl {
  constructor(e) {
    te(this, "_isPlayingAudio", !1);
    te(this, "_generalAudio", null);
    te(this, "_activeAudio", null);
    te(this, "_activeAudioId", null);
    te(this, "_audioButtom");
    const n = document.createElement("div");
    (n.id = "audio-control-buttom"),
      (n.className = "icon-audio-off"),
      e == null || e.appendChild(n),
      n.addEventListener(
        "click",
        () => {
          this.toggleAudio(n);
        },
        !1
      ),
      (this._audioButtom = n);
  }
  playNewAudioById(e, n = !1) {
    var s;
    if (this._activeAudioId === e) return;
    (s = this._activeAudio) == null || s.stop(),
      (this._audioButtom.className = "icon-audio-on");
    const i = ResourceManager.instance.getAudioResource(e);
    i &&
      (i.play(),
      (this._isPlayingAudio = !0),
      n
        ? (this._generalAudio = i)
        : ((this._activeAudio = i), (this._activeAudioId = e)));
  }
  toggleAudio(e) {
    var n, i, s, a;
    this._isPlayingAudio
      ? ((n = this._generalAudio) == null || n.pause(),
        (i = this._activeAudio) == null || i.pause(),
        (e.className = "icon-audio-off"))
      : ((s = this._generalAudio) == null || s.play(),
        (a = this._activeAudio) == null || a.play(),
        (e.className = "icon-audio-on")),
      (this._isPlayingAudio = !this._isPlayingAudio);
  }
  get generalAudio() {
    return this._generalAudio;
  }
}
class FullScreenControl {
  constructor(e) {
    const n = document.createElement("div");
    (n.id = "fullscreen-control-buttom"),
      (n.className = "icon-maximize"),
      e == null || e.appendChild(n),
      n.addEventListener(
        "click",
        () => {
          document.fullscreenElement
            ? document.exitFullscreen && document.exitFullscreen()
            : document.documentElement.requestFullscreen();
        },
        !1
      ),
      document.addEventListener("fullscreenchange", () => {
        document.fullscreenElement
          ? (n.className = "icon-minimize")
          : (n.className = "icon-maximize");
      });
  }
}
class Modal {
  constructor(e, n = () => {}) {
    te(this, "_modal");
    te(this, "_header");
    te(this, "_body");
    te(this, "_footer");
    const i = document.createElement("div");
    (i.id = e), (i.className = "modal hidden"), document.body.appendChild(i);
    const s = document.createElement("div");
    (s.className = "modal-background"),
      i.appendChild(s),
      s.addEventListener("click", () => {
        (i.className = "modal hidden"), n();
      });
    const a = document.createElement("div");
    (a.className = "modal-panel"), i.appendChild(a);
    const o = document.createElement("div");
    o.className = "modal-header";
    const l = document.createElement("div");
    l.style.width = "100%";
    const c = document.createElement("div");
    (c.style.width = "100%"),
      a.appendChild(o),
      a.appendChild(l),
      a.appendChild(c);
    const h = document.createElement("div");
    (h.innerHTML = '<span class="modal-close"></span>'),
      h.setAttribute("style", "display:inline-block;float:right"),
      o.appendChild(h),
      h.addEventListener(
        "click",
        () => {
          (i.className = "modal hidden"), n();
        },
        !1
      ),
      (this._modal = i),
      (this._header = o),
      (this._body = l),
      (this._footer = c);
  }
  show() {
    this._modal.classList.remove("hidden");
  }
  get header() {
    return this._header;
  }
  get body() {
    return this._body;
  }
  get footer() {
    return this._footer;
  }
}
const Close = "Cerrar",
  Options = "Opciones",
  Wall = "Pared",
  Turn = "Girar",
  es = {
    Close,
    "Share gallery": "Compartir galería",
    Options,
    "Open Link": "Abrir enlace",
    Wall,
    "See brochure": "Ver folleto",
    "Navigation Controls": "Controles de navegación",
    "Show placard": "Mostrar cartela",
    "Hide placard": "Ocultar cartela",
    "High performance": "Alto rendimiento",
    Turn,
    "Click and drag with the mouse or one finger over the gallery":
      "Haz click y arrastra con el ratón o un dedo sobre la galería",
    "Forward / Backward": "Moverte hacia delante / atrás",
    "Use the virtual joystick, mouse wheel or vertical arrows keys":
      "Usa el joystick virtual, la rueda del ratón o las flechas verticales",
    "Lateral movements": "Movimientos laterales",
    "Use the virtual joystick or the horizontal arrows keys":
      "Usa el joystick virtual o las flechas horizontales",
    "Change wall": "Cambiar de pared",
    "Use the arrow buttons or the spacebar":
      "Usa los botones de flechas o la barra espaciadora",
    "Activate Zoom Mode": "Activar Modo zoom",
    "Click on the zoom icon that appears when you are approaching to a content":
      "Haz clic en el icono de zoom que aparece cuando te acercas a un contenido",
  };
function t(r) {
  switch (navigator.language.slice(0, 2)) {
    case "es":
      return es[r];
    default:
      return r;
  }
}
const linkUrl = window.location.href;
class ShareControl {
  constructor(controlsBar) {
    const modal = new Modal("share-modal"),
      controlButtom = document.createElement("div");
    (controlButtom.id = "share-control-buttom"),
      (controlButtom.className = "icon-share"),
      controlsBar == null || controlsBar.appendChild(controlButtom),
      controlButtom.addEventListener(
        "click",
        () => {
          modal.show();
        },
        !1
      );
    const modalTitle = document.createElement("h3");
    (modalTitle.innerText = t("Share gallery")),
      modal.header.appendChild(modalTitle);
    const iframeText = document.createElement("p");
    (iframeText.innerText = `<iframe width='100%' height='100vh' frameborder='0' src='${window.location.href}' allowfullscreen webkitallowfullscreen mozallowfullscreen />`),
      iframeText.setAttribute(
        "style",
        "display:inline-block;padding:10px;margin:5px"
      ),
      modal.body.appendChild(iframeText);
    const shareLinks = [
      "twitterx",
      "whatsapp",
      "facebook",
      "linkedin",
      "reddit",
      "mail",
    ];
    shareLinks.forEach((name) => {
      const linkButtom = document.createElement("div");
      (linkButtom.className = "icon-" + name),
        modal.footer.appendChild(linkButtom),
        linkButtom.addEventListener(
          "click",
          eval("this._" + name + "Handler"),
          !1
        );
    });
  }
  _twitterxHandler() {
    var i, s;
    const r = (i = GalleryScene.instance.galleryData) == null ? void 0 : i.name,
      e =
        (s = GalleryScene.instance.galleryData) == null
          ? void 0
          : s.galleryTags.join(",");
    window.open(
      `https://twitter.com/intent/tweet?text=${r}&url=${encodeURI(
        linkUrl
      )}&hashtags=${e}&via=PeopleArtFty`,
      "_blank"
    );
  }
  _whatsappHandler() {
    window.open(
      `https://api.whatsapp.com/send/?text=${encodeURI(
        linkUrl
      )}&type=custom_url&app_absent=0`,
      "_blank"
    );
  }
  _facebookHandler() {
    window.open(
      `http://www.facebook.com/share.php?u=${encodeURI(linkUrl)}`,
      "_blank"
    );
  }
  _linkedinHandler() {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURI(
        linkUrl
      )}`,
      "_blank"
    );
  }
  _redditHandler() {
    var n;
    const r = (n = GalleryScene.instance.galleryData) == null ? void 0 : n.name;
    window.open(
      `https://www.reddit.com/submit?title=${r}&url=${encodeURI(linkUrl)}`,
      "_blank"
    );
  }
  _mailHandler() {
    var s, a, o;
    const r = (s = GalleryScene.instance.galleryData) == null ? void 0 : s.name,
      e = (a = GalleryScene.instance.galleryData) == null ? void 0 : a.synopsis,
      n =
        (o = GalleryScene.instance.galleryData) == null
          ? void 0
          : o.description;
    window.open(
      `mailto:?subject=${r}&body=${encodeURI(
        linkUrl
      )}%0D%0A%0D%0A${e}%0D%0A%0D%0A${n}`,
      "_blank"
    );
  }
}
class NavigationInfoModal {
  constructor() {
    te(this, "_modal");
    this._modal = new Modal(
      "navigation-info-modal",
      this._closeCallbackFunction
    );
    const e = document.createElement("h3");
    (e.innerText = t("Navigation Controls")), this._modal.header.appendChild(e);
    const n = `
        <p><strong>${t("Turn")}: </strong>${t(
      "Click and drag with the mouse or one finger over the gallery"
    )}.</p>
        <p><strong>${t("Forward / Backward")}: </strong>${t(
      "Use the virtual joystick, mouse wheel or vertical arrows keys"
    )}.</p>
        <p><strong>${t("Lateral movements")}: </strong>${t(
      "Use the virtual joystick or the horizontal arrows keys"
    )}.</p>
        <p><strong>${t("Change wall")}: </strong>${t(
      "Use the arrow buttons or the spacebar"
    )}.</p>
		<p><strong>${t("Activate Zoom Mode")}: </strong>${t(
      "Click on the zoom icon that appears when you are approaching to a content"
    )}.</p>`;
    this._modal.body.innerHTML = n;
  }
  show() {
    this._modal.show(), (GalleryScene.instance.isModalOpen = !0);
  }
  _closeCallbackFunction() {
    var e;
    (e = GalleryScene.instance.viewer) == null || e.controls.initRoomAudio(),
      (GalleryScene.instance.isModalOpen = !1);
  }
}
let BrochureModal$1 = class {
  constructor() {
    te(
      this,
      "_modal",
      new Modal("brochure-modal", this._closeCallbackFunction)
    );
    const e = GalleryScene.instance.galleryData;
    if (!e) return;
    const n = e.allResources[0].url,
      i = document.createElement("h3");
    (i.innerText = e.name), this._modal.header.appendChild(i);
    let s = `
        <div id='brochure-body'>
		<div>	
        	<img src='${n}'/>
		</div>
		<div>	
			<p><strong>${e.synopsis}</strong></p>
       		<p>${e.description}</p>
			<p><br>`;
    e.galleryTags.forEach((a) => {
      s += `<small class='brochure-tag' >${a}</small>`;
    }),
      (s += "</p></div></div>"),
      (this._modal.body.innerHTML = s);
  }
  show() {
    this._modal.show(), (GalleryScene.instance.isModalOpen = !0);
  }
  _closeCallbackFunction() {
    var e;
    (e = GalleryScene.instance.viewer) == null || e.controls.initRoomAudio(),
      (GalleryScene.instance.isModalOpen = !1);
  }
};
var yt;
class Menu {
  constructor(e) {
    te(this, "_isPlacardActived", !0);
    te(
      this,
      "_isHightPerformance",
      (yt = GalleryScene.instance.settings) == null
        ? void 0
        : yt.HIGH_PERFORMANCE
    );
    te(this, "_navigationInfoModal");
    te(this, "_brochureModal");
    (this._brochureModal = new BrochureModal$1()),
      (this._navigationInfoModal = new NavigationInfoModal());
    const n = document.createElement("div");
    (n.id = "menu-panel"),
      (n.className = "hidden"),
      document.body.appendChild(n),
      (n.innerHTML = "<strong><h1>Menu</h1></strong>");
    const i = document.createElement("div");
    (i.innerHTML = '<span class="modal-close"></span>'),
      n.appendChild(i),
      i.addEventListener(
        "click",
        () => {
          n.className = "hidden";
        },
        !1
      );
    const s = document.createElement("div");
    (s.className = "menu-link"),
      n.appendChild(s),
      (s.innerHTML = `${t("See brochure")}`),
      s.addEventListener(
        "click",
        () => {
          this._brochureModal.show();
        },
        !1
      );
    const a = document.createElement("div");
    (a.className = "menu-link"),
      n.appendChild(a),
      (a.innerHTML = `${t("Navigation Controls")}`),
      a.addEventListener(
        "click",
        () => {
          this._navigationInfoModal.show();
        },
        !1
      );
    const o = document.createElement("div");
    (o.className = "menu-link"),
      n.appendChild(o),
      (o.innerHTML = `<div class="switch  checked"></div>${t("Show placard")}`),
      o.addEventListener(
        "click",
        () => {
          this._isPlacardActived
            ? (o.innerHTML = `<div class="switch"></div>${t("Hide placard")}`)
            : (o.innerHTML = `<div class="switch checked"></div>${t(
                "Show placard"
              )}`),
            (this._isPlacardActived = !this._isPlacardActived);
        },
        !1
      );
    const l = document.createElement("div");
    (l.className = "menu-link"),
      n.appendChild(l),
      this._isHightPerformance
        ? (l.innerHTML = `<div class="switch checked"></div>${t(
            "High performance"
          )}`)
        : (l.innerHTML = `<div class="switch"></div>${t("High performance")}`),
      l.addEventListener(
        "click",
        () => {
          this._isHightPerformance
            ? (l.innerHTML = `<div class="switch "></div>${t(
                "High performance"
              )}`)
            : (l.innerHTML = `<div class="switch checked"></div>${t(
                "High performance"
              )}`),
            (this._isHightPerformance = !this._isHightPerformance),
            GalleryScene.instance.createRoom(this._isHightPerformance);
        },
        !1
      );
    const c = document.createElement("div");
    (c.id = "menu-control-buttom"),
      (c.className = "icon-menu"),
      e == null || e.appendChild(c),
      c.addEventListener(
        "click",
        () => {
          n.classList.remove("hidden");
        },
        !1
      );
  }
  get isPlacardActived() {
    return this._isPlacardActived;
  }
  setHightPerformance(e) {
    this._isHightPerformance = e;
  }
  get navigationInfoModal() {
    return this._navigationInfoModal;
  }
  get brochureModal() {
    return this._brochureModal;
  }
}
function _arrayLikeToArray(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var n = 0, i = Array(e); n < e; n++) i[n] = r[n];
  return i;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _assertThisInitialized(r) {
  if (r === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return r;
}
function _callSuper(r, e, n) {
  return (
    (e = _getPrototypeOf(e)),
    _possibleConstructorReturn(
      r,
      _isNativeReflectConstruct()
        ? Reflect.construct(e, n || [], _getPrototypeOf(r).constructor)
        : e.apply(r, n)
    )
  );
}
function _classCallCheck(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(r, e) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(r, _toPropertyKey(i.key), i);
  }
}
function _createClass(r, e, n) {
  return (
    e && _defineProperties(r.prototype, e),
    Object.defineProperty(r, "prototype", {
      writable: !1,
    }),
    r
  );
}
function _defineProperty(r, e, n) {
  return (
    (e = _toPropertyKey(e)) in r
      ? Object.defineProperty(r, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (r[e] = n),
    r
  );
}
function _get() {
  return (
    (_get =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (r, e, n) {
            var i = _superPropBase(r, e);
            if (i) {
              var s = Object.getOwnPropertyDescriptor(i, e);
              return s.get ? s.get.call(arguments.length < 3 ? r : n) : s.value;
            }
          }),
    _get.apply(null, arguments)
  );
}
function _getPrototypeOf(r) {
  return (
    (_getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    _getPrototypeOf(r)
  );
}
function _inherits(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (r.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: r,
      writable: !0,
      configurable: !0,
    },
  })),
    Object.defineProperty(r, "prototype", {
      writable: !1,
    }),
    e && _setPrototypeOf(r, e);
}
function _isNativeReflectConstruct() {
  try {
    var r = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (_isNativeReflectConstruct = function () {
    return !!r;
  })();
}
function _iterableToArrayLimit(r, e) {
  var n =
    r == null
      ? null
      : (typeof Symbol < "u" && r[Symbol.iterator]) || r["@@iterator"];
  if (n != null) {
    var i,
      s,
      a,
      o,
      l = [],
      c = !0,
      h = !1;
    try {
      if (((a = (n = n.call(r)).next), e !== 0))
        for (
          ;
          !(c = (i = a.call(n)).done) && (l.push(i.value), l.length !== e);
          c = !0
        );
    } catch (u) {
      (h = !0), (s = u);
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (h) throw s;
      }
    }
    return l;
  }
}
function _nonIterableRest() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ownKeys(r, e) {
  var n = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    e &&
      (i = i.filter(function (s) {
        return Object.getOwnPropertyDescriptor(r, s).enumerable;
      })),
      n.push.apply(n, i);
  }
  return n;
}
function _objectSpread2(r) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? ownKeys(Object(n), !0).forEach(function (i) {
          _defineProperty(r, i, n[i]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n))
      : ownKeys(Object(n)).forEach(function (i) {
          Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(n, i));
        });
  }
  return r;
}
function _possibleConstructorReturn(r, e) {
  if (e && (typeof e == "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return _assertThisInitialized(r);
}
function _setPrototypeOf(r, e) {
  return (
    (_setPrototypeOf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    _setPrototypeOf(r, e)
  );
}
function _slicedToArray(r, e) {
  return (
    _arrayWithHoles(r) ||
    _iterableToArrayLimit(r, e) ||
    _unsupportedIterableToArray(r, e) ||
    _nonIterableRest()
  );
}
function _superPropBase(r, e) {
  for (; !{}.hasOwnProperty.call(r, e) && (r = _getPrototypeOf(r)) !== null; );
  return r;
}
function _toPrimitive(r, e) {
  if (typeof r != "object" || !r) return r;
  var n = r[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(r, e);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
function _toPropertyKey(r) {
  var e = _toPrimitive(r, "string");
  return typeof e == "symbol" ? e : e + "";
}
function _unsupportedIterableToArray(r, e) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray(r, e);
    var n = {}.toString.call(r).slice(8, -1);
    return (
      n === "Object" && r.constructor && (n = r.constructor.name),
      n === "Map" || n === "Set"
        ? Array.from(r)
        : n === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? _arrayLikeToArray(r, e)
        : void 0
    );
  }
}
var ZOOM_CONSTANT = 15,
  MOUSE_WHEEL_COUNT = 5;
function noop() {}
function preventDefault(r) {
  r.preventDefault();
}
function easeOutQuart(r, e, n, i) {
  return (r /= i), (r -= 1), -n * (r * r * r * r - 1) + e;
}
function createElement(r) {
  var e = document.createElement(r.tagName);
  return (
    r.id && (e.id = r.id),
    r.html && (e.innerHTML = r.html),
    r.className && (e.className = r.className),
    r.src && (e.src = r.src),
    r.style && (e.style.cssText = r.style),
    r.child && e.appendChild(r.child),
    r.insertBefore
      ? r.parent.insertBefore(e, r.insertBefore)
      : r.parent.appendChild(e),
    e
  );
}
function addClass(r, e) {
  var n = e.split(" ");
  n.length > 1
    ? n.forEach(function (i) {
        return addClass(r, i);
      })
    : r.classList
    ? r.classList.add(e)
    : (r.className += " ".concat(e));
}
function removeClass(r, e) {
  var n = e.split(" ");
  n.length > 1
    ? n.forEach(function (i) {
        return removeClass(r, i);
      })
    : r.classList
    ? r.classList.remove(e)
    : (r.className = r.className.replace(
        new RegExp("(^|\\b)".concat(e.split(" ").join("|"), "(\\b|$)"), "gi"),
        " "
      ));
}
function imageLoaded(r) {
  return r.complete && (typeof r.naturalWidth > "u" || r.naturalWidth !== 0);
}
function toArray(r) {
  return r instanceof NodeList || r instanceof HTMLCollection
    ? Array.prototype.slice.call(r)
    : [r];
}
function css(r, e) {
  var n = toArray(r);
  if (typeof e == "string") return window.getComputedStyle(n[0])[e];
  n.forEach(function (i) {
    Object.keys(e).forEach(function (s) {
      var a = e[s];
      i.style[s] = a;
    });
  });
}
function removeCss(r, e) {
  r.style.removeProperty(e);
}
function wrap(r, e) {
  var n = e.tag,
    i = n === void 0 ? "div" : n,
    s = e.className,
    a = e.id,
    o = e.style,
    l = document.createElement(i);
  return (
    s && (l.className = s),
    a && (l.id = a),
    o && (l.style = o),
    r.parentNode.insertBefore(l, r),
    r.parentNode.removeChild(r),
    l.appendChild(r),
    l
  );
}
function unwrap(r) {
  var e = r.parentNode;
  e !== document.body &&
    (e.parentNode.insertBefore(r, e), e.parentNode.removeChild(e));
}
function remove(r) {
  var e = toArray(r);
  e.forEach(function (n) {
    n.parentNode.removeChild(n);
  });
}
function clamp$1(r, e, n) {
  return Math.min(Math.max(r, e), n);
}
function assignEvent(r, e, n) {
  return (
    typeof e == "string" && (e = [e]),
    e.forEach(function (i) {
      r.addEventListener(i, n);
    }),
    function () {
      e.forEach(function (i) {
        r.removeEventListener(i, n);
      });
    }
  );
}
function getTouchPointsDistance(r) {
  var e = r[0],
    n = r[1];
  return Math.sqrt(
    Math.pow(n.pageX - e.pageX, 2) + Math.pow(n.pageY - e.pageY, 2)
  );
}
var Slider = /* @__PURE__ */ (function () {
    function r(e, n) {
      var i = this,
        s = n.onStart,
        a = n.onMove,
        o = n.onEnd,
        l = n.isSliderEnabled;
      _classCallCheck(this, r),
        _defineProperty(this, "startHandler", function (c) {
          if (i.isSliderEnabled()) {
            i.removeListeners(), c.preventDefault();
            var h = i.moveHandler,
              u = i.endHandler,
              d = i.onStart,
              f = c.type === "touchstart" || c.type === "touchend";
            (i.touchMoveEvent = f ? "touchmove" : "mousemove"),
              (i.touchEndEvent = f ? "touchend" : "mouseup"),
              (i.sx = f ? c.touches[0].clientX : c.clientX),
              (i.sy = f ? c.touches[0].clientY : c.clientY),
              d(c, {
                x: i.sx,
                y: i.sy,
              }),
              document.addEventListener(i.touchMoveEvent, h),
              document.addEventListener(i.touchEndEvent, u),
              document.addEventListener("contextmenu", u);
          }
        }),
        _defineProperty(this, "moveHandler", function (c) {
          if (i.isSliderEnabled()) {
            c.preventDefault();
            var h = i.sx,
              u = i.sy,
              d = i.onMove,
              f = i.touchMoveEvent === "touchmove",
              p = f ? c.touches[0].clientX : c.clientX,
              g = f ? c.touches[0].clientY : c.clientY;
            d(c, {
              dx: p - h,
              dy: g - u,
              mx: p,
              my: g,
            });
          }
        }),
        _defineProperty(this, "endHandler", function () {
          i.isSliderEnabled() && (i.removeListeners(), i.onEnd());
        }),
        (this.container = e),
        (this.isSliderEnabled = l),
        (this.onStart = s || noop),
        (this.onMove = a || noop),
        (this.onEnd = o || noop);
    }
    return _createClass(r, [
      {
        key: "removeListeners",
        value:
          // remove previous events if it's not removed
          // - Case when while sliding mouse moved out of document and released there
          function () {
            this.touchMoveEvent &&
              (document.removeEventListener(
                this.touchMoveEvent,
                this.moveHandler
              ),
              document.removeEventListener(this.touchEndEvent, this.endHandler),
              document.removeEventListener("contextmenu", this.endHandler));
          },
      },
      {
        key: "init",
        value: function () {
          var n = this;
          ["touchstart", "mousedown"].forEach(function (i) {
            n.container.addEventListener(i, n.startHandler);
          });
        },
      },
      {
        key: "destroy",
        value: function () {
          var n = this;
          ["touchstart", "mousedown"].forEach(function (i) {
            n.container.removeEventListener(i, n.startHandler);
          }),
            this.removeListeners();
        },
      },
    ]);
  })(),
  ImageViewer = /* @__PURE__ */ (function () {
    function r(e) {
      var n = this,
        i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      _classCallCheck(this, r),
        _defineProperty(this, "zoom", function (h, u) {
          var d = n._options,
            f = n._elements,
            p = n._state,
            g = p.zoomValue,
            v = p.imageDim,
            _ = p.containerDim,
            m = p.zoomSliderLength,
            A = f.image,
            S = f.zoomHandle,
            E = d.maxZoom;
          (h = Math.round(Math.max(100, h))),
            (h = Math.min(E, h)),
            (u = u || {
              x: _.w / 2,
              y: _.h / 2,
            });
          var N = parseFloat(css(A, "left")),
            w = parseFloat(css(A, "top"));
          n._clearFrames();
          var C = 0,
            U = (_.w - v.w) / 2,
            T = (_.h - v.h) / 2,
            M = _.w - U,
            P = _.h - T,
            z = function O() {
              C++, C < 16 && (n._frames.zoomFrame = requestAnimationFrame(O));
              var G = easeOutQuart(C, g, h - g, 16);
              Math.abs(h - G) < 1 && (G = h);
              var X = G / g,
                k = (v.w * G) / 100,
                K = (v.h * G) / 100,
                H = -((u.x - N) * X - u.x),
                se = -((u.y - w) * X - u.y);
              (H = Math.min(H, U)),
                (se = Math.min(se, T)),
                H + k < M && (H = M - k),
                se + K < P && (se = P - K),
                css(A, {
                  height: "".concat(K, "px"),
                  width: "".concat(k, "px"),
                  left: "".concat(H, "px"),
                  top: "".concat(se, "px"),
                }),
                (n._state.zoomValue = G),
                n._resizeSnapHandle(k, K, H, se),
                css(S, {
                  left: "".concat(((G - 100) * m) / (E - 100), "px"),
                }),
                n._listeners.onZoomChange &&
                  n._listeners.onZoomChange(n._callbackData);
            };
          z();
        }),
        _defineProperty(this, "_clearFrames", function () {
          var h = n._frames,
            u = h.slideMomentumCheck,
            d = h.sliderMomentumFrame,
            f = h.zoomFrame;
          clearInterval(u), cancelAnimationFrame(d), cancelAnimationFrame(f);
        }),
        _defineProperty(this, "_resizeSnapHandle", function (h, u, d, f) {
          var p = n._elements,
            g = n._state,
            v = p.snapHandle,
            _ = p.image,
            m = g.imageDim,
            A = g.containerDim,
            S = g.zoomValue,
            E = g.snapImageDim,
            N = h || (m.w * S) / 100,
            w = u || (m.h * S) / 100,
            C = d || parseFloat(css(_, "left")),
            U = f || parseFloat(css(_, "top")),
            T = (-C * E.w) / N,
            M = (-U * E.h) / w,
            P = (A.w * E.w) / N,
            z = (A.h * E.h) / w;
          css(v, {
            top: "".concat(M, "px"),
            left: "".concat(T, "px"),
            width: "".concat(P, "px"),
            height: "".concat(z, "px"),
          }),
            (n._state.snapHandleDim = {
              w: P,
              h: z,
            });
        }),
        _defineProperty(this, "showSnapView", function (h) {
          var u = n._state,
            d = u.snapViewVisible,
            f = u.zoomValue,
            p = u.loaded,
            g = n._elements.snapView;
          n._options.snapView &&
            (d ||
              f <= 100 ||
              !p ||
              (clearTimeout(n._frames.snapViewTimeout),
              (n._state.snapViewVisible = !0),
              css(g, {
                opacity: 1,
                pointerEvents: "inherit",
              }),
              h ||
                (n._frames.snapViewTimeout = setTimeout(
                  n.hideSnapView,
                  1500
                ))));
        }),
        _defineProperty(this, "hideSnapView", function () {
          var h = n._elements.snapView;
          css(h, {
            opacity: 0,
            pointerEvents: "none",
          }),
            (n._state.snapViewVisible = !1);
        }),
        _defineProperty(this, "refresh", function () {
          var h =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
          n._calculateDimensions(), n.resetZoom(h);
        });
      var s = this._findContainerAndImageSrc(e, i),
        a = s.container,
        o = s.domElement,
        l = s.imageSrc,
        c = s.hiResImageSrc;
      (this._elements = {
        container: a,
        domElement: o,
      }),
        (this._options = _objectSpread2(_objectSpread2({}, r.defaults), i)),
        (this._events = {}),
        (this._listeners = this._options.listeners || {}),
        (this._frames = {}),
        (this._sliders = {}),
        (this._state = {
          zoomValue: this._options.zoomValue,
        }),
        (this._images = {
          imageSrc: l,
          hiResImageSrc: c,
        }),
        this._init(),
        l && this._loadImages(),
        (o._imageViewer = this);
    }
    return _createClass(r, [
      {
        key: "zoomInButton",
        get: function () {
          return this._options.hasZoomButtons
            ? '<div class="iv-button-zoom--in" role="button"></div>'
            : "";
        },
      },
      {
        key: "zoomOutButton",
        get: function () {
          return this._options.hasZoomButtons
            ? '<div class="iv-button-zoom--out" role="button"></div>'
            : "";
        },
      },
      {
        key: "imageViewHtml",
        get: function () {
          return `
    <div class="iv-loader"></div>
    <div class="iv-snap-view">
      <div class="iv-snap-image-wrap">
        <div class="iv-snap-handle"></div>
      </div>
      <div class="iv-zoom-actions `
            .concat(
              this._options.hasZoomButtons
                ? "iv-zoom-actions--has-buttons"
                : "",
              `">
        `
            )
            .concat(
              this.zoomInButton,
              `
        <div class="iv-zoom-slider">
          <div class="iv-zoom-handle"></div>
        </div>
        `
            )
            .concat(
              this.zoomOutButton,
              `
      </div>
    </div>
    <div class="iv-image-view" >
      <div class="iv-image-wrap" ></div>
    </div>
  `
            );
        },
      },
      {
        key: "_findContainerAndImageSrc",
        value: function (n) {
          var i = n,
            s,
            a;
          if (
            (typeof n == "string" && (i = document.querySelector(n)),
            i._imageViewer)
          )
            throw new Error(
              "An image viewer is already being initiated on the element."
            );
          var o = n;
          return (
            i.tagName === "IMG"
              ? ((s = i.src),
                (a =
                  i.getAttribute("high-res-src") ||
                  i.getAttribute("data-high-res-src")),
                (o = wrap(i, {
                  className: "iv-container iv-image-mode",
                  style: {
                    display: "inline-block",
                    overflow: "hidden",
                  },
                })),
                css(i, {
                  opacity: 0,
                  position: "relative",
                  zIndex: -1,
                }))
              : ((s = i.getAttribute("src") || i.getAttribute("data-src")),
                (a =
                  i.getAttribute("high-res-src") ||
                  i.getAttribute("data-high-res-src"))),
            {
              container: o,
              domElement: i,
              imageSrc: s,
              hiResImageSrc: a,
            }
          );
        },
      },
      {
        key: "_init",
        value: function () {
          this._initDom(),
            this._initImageSlider(),
            this._initSnapSlider(),
            this._initZoomSlider(),
            this._pinchAndZoom(),
            this._scrollZoom(),
            this._doubleTapToZoom(),
            this._initEvents();
        },
      },
      {
        key: "_initDom",
        value: function () {
          var n = this._elements.container;
          createElement({
            tagName: "div",
            className: "iv-wrap",
            html: this.imageViewHtml,
            parent: n,
          }),
            addClass(n, "iv-container"),
            css(n, "position") === "static" &&
              css(n, {
                position: "relative",
              }),
            (this._elements = _objectSpread2(
              _objectSpread2({}, this._elements),
              {},
              {
                snapView: n.querySelector(".iv-snap-view"),
                snapImageWrap: n.querySelector(".iv-snap-image-wrap"),
                imageWrap: n.querySelector(".iv-image-wrap"),
                snapHandle: n.querySelector(".iv-snap-handle"),
                zoomHandle: n.querySelector(".iv-zoom-handle"),
                zoomIn: n.querySelector(".iv-button-zoom--in"),
                zoomOut: n.querySelector(".iv-button-zoom--out"),
              }
            )),
            this._listeners.onInit &&
              this._listeners.onInit(this._callbackData);
        },
      },
      {
        key: "_initImageSlider",
        value: function () {
          var n = this,
            i = this._elements,
            s = i.imageWrap,
            a,
            o,
            l = new Slider(s, {
              isSliderEnabled: function () {
                var h = n._state,
                  u = h.loaded,
                  d = h.zooming,
                  f = h.zoomValue;
                return u && !d && f > 100;
              },
              onStart: function (h, u) {
                var d = n._sliders.snapSlider;
                n._clearFrames(),
                  d.onStart(),
                  (a = [u, u]),
                  (o = void 0),
                  (n._frames.slideMomentumCheck = setInterval(function () {
                    o &&
                      (a.shift(),
                      a.push({
                        x: o.mx,
                        y: o.my,
                      }));
                  }, 50));
              },
              onMove: function (h, u) {
                var d = n._state.snapImageDim,
                  f = n._sliders.snapSlider,
                  p = n._getImageCurrentDim();
                (o = u),
                  f.onMove(h, {
                    dx: (-u.dx * d.w) / p.w,
                    dy: (-u.dy * d.h) / p.h,
                  });
              },
              onEnd: function () {
                var h = n._state.snapImageDim,
                  u = n._sliders.snapSlider,
                  d = n._getImageCurrentDim();
                n._clearFrames();
                var f,
                  p,
                  g,
                  v = a[1].x - a[0].x,
                  _ = a[1].y - a[0].y,
                  m = function A() {
                    f <= 60 &&
                      (n._frames.sliderMomentumFrame =
                        requestAnimationFrame(A)),
                      (p += easeOutQuart(f, v / 3, -v / 3, 60)),
                      (g += easeOutQuart(f, _ / 3, -_ / 3, 60)),
                      u.onMove(null, {
                        dx: -((p * h.w) / d.w),
                        dy: -((g * h.h) / d.h),
                      }),
                      f++;
                  };
                (Math.abs(v) > 30 || Math.abs(_) > 30) &&
                  ((f = 1), (p = o.dx), (g = o.dy), m());
              },
            });
          l.init(), (this._sliders.imageSlider = l);
        },
      },
      {
        key: "_initSnapSlider",
        value: function () {
          var n = this,
            i = this._elements.snapHandle,
            s,
            a,
            o = new Slider(i, {
              isSliderEnabled: function () {
                return n._state.loaded;
              },
              onStart: function () {
                var c = n._frames,
                  h = c.slideMomentumCheck,
                  u = c.sliderMomentumFrame;
                (s = parseFloat(css(i, "top"))),
                  (a = parseFloat(css(i, "left"))),
                  clearInterval(h),
                  cancelAnimationFrame(u);
              },
              onMove: function (c, h) {
                var u = n._state,
                  d = u.snapHandleDim,
                  f = u.snapImageDim,
                  p = n._elements.image,
                  g = n._getImageCurrentDim(),
                  v = Math.max(f.w - d.w, a),
                  _ = Math.max(f.h - d.h, s),
                  m = Math.min(0, a),
                  A = Math.min(0, s),
                  S = clamp$1(a + h.dx, m, v),
                  E = clamp$1(s + h.dy, A, _),
                  N = (-S * g.w) / f.w,
                  w = (-E * g.h) / f.h;
                css(i, {
                  left: "".concat(S, "px"),
                  top: "".concat(E, "px"),
                }),
                  css(p, {
                    left: "".concat(N, "px"),
                    top: "".concat(w, "px"),
                  });
              },
            });
          o.init(), (this._sliders.snapSlider = o);
        },
      },
      {
        key: "_initZoomSlider",
        value: function () {
          var n = this,
            i = this._elements,
            s = i.snapView,
            a = i.zoomHandle,
            o = s.querySelector(".iv-zoom-slider"),
            l,
            c,
            h = new Slider(o, {
              isSliderEnabled: function () {
                return n._state.loaded;
              },
              onStart: function (d) {
                var f = n._sliders.zoomSlider;
                (l = o.getBoundingClientRect().left),
                  (c = parseInt(css(a, "width"), 10)),
                  f.onMove(d);
              },
              onMove: function (d) {
                var f = n._options.maxZoom,
                  p = n._state.zoomSliderLength,
                  g = d.clientX !== void 0 ? d.clientX : d.touches[0].clientX,
                  v = clamp$1(g - l - c / 2, 0, p),
                  _ = 100 + ((f - 100) * v) / p;
                n.zoom(_);
              },
            });
          h.init(), (this._sliders.zoomSlider = h);
        },
      },
      {
        key: "_initEvents",
        value: function () {
          this._snapViewEvents(),
            this._options.refreshOnResize &&
              (this._events.onWindowResize = assignEvent(
                window,
                "resize",
                this.refresh
              )),
            (this._events.onDragStart = assignEvent(
              this._elements.container,
              "dragstart",
              preventDefault
            ));
        },
      },
      {
        key: "_snapViewEvents",
        value: function () {
          var n = this,
            i = this._elements,
            s = i.imageWrap,
            a = i.snapView;
          if (
            ((this._events.snapViewOnMouseMove = assignEvent(
              s,
              ["touchmove", "mousemove"],
              function () {
                n.showSnapView();
              }
            )),
            (this._events.mouseEnterSnapView = assignEvent(
              a,
              ["mouseenter", "touchstart"],
              function () {
                (n._state.snapViewVisible = !1), n.showSnapView(!0);
              }
            )),
            (this._events.mouseLeaveSnapView = assignEvent(
              a,
              ["mouseleave", "touchend"],
              function () {
                (n._state.snapViewVisible = !1), n.showSnapView();
              }
            )),
            !!this._options.hasZoomButtons)
          ) {
            var o = this._elements,
              l = o.zoomOut,
              c = o.zoomIn;
            (this._events.zoomInClick = assignEvent(c, ["click"], function () {
              n.zoom(n._state.zoomValue + n._options.zoomStep || 50);
            })),
              (this._events.zoomOutClick = assignEvent(
                l,
                ["click"],
                function () {
                  n.zoom(n._state.zoomValue - n._options.zoomStep || 50);
                }
              ));
          }
        },
      },
      {
        key: "_pinchAndZoom",
        value: function () {
          var n = this,
            i = this._elements,
            s = i.imageWrap,
            a = i.container,
            o = function (c) {
              var h = n._state,
                u = h.loaded,
                d = h.zoomValue,
                f = n._events;
              if (u) {
                var p = c.touches[0],
                  g = c.touches[1];
                if (p && g) {
                  n._state.zooming = !0;
                  var v = a.getBoundingClientRect(),
                    _ = getTouchPointsDistance(c.touches),
                    m = {
                      x: (g.clientX + p.clientX) / 2 - v.left,
                      y: (g.clientY + p.clientY) / 2 - v.top,
                    },
                    A = function (N) {
                      var w = getTouchPointsDistance(N.touches),
                        C = d + (w - _) / 2;
                      n.zoom(C, m);
                    },
                    S = function (N) {
                      f.pinchMove(),
                        f.pinchEnd(),
                        (n._state.zooming = !1),
                        N.touches.length === 1 &&
                          n._sliders.imageSlider.startHandler(N);
                    };
                  f.pinchMove && f.pinchMove(),
                    f.pinchEnd && f.pinchEnd(),
                    (f.pinchMove = assignEvent(document, "touchmove", A)),
                    (f.pinchEnd = assignEvent(document, "touchend", S));
                }
              }
            };
          this._events.pinchStart = assignEvent(s, "touchstart", o);
        },
      },
      {
        key: "_scrollZoom",
        value: function () {
          var n = this,
            i = this._options,
            s = this._elements,
            a = s.container,
            o = s.imageWrap,
            l = 0,
            c = function (u) {
              var d = n._state,
                f = d.loaded,
                p = d.zoomValue;
              if (!(!i.zoomOnMouseWheel || !f)) {
                n._clearFrames();
                var g = Math.max(
                    -1,
                    Math.min(1, u.wheelDelta || -u.detail || -u.deltaY)
                  ),
                  v = (p * (100 + g * ZOOM_CONSTANT)) / 100;
                if (
                  (v >= 100 && v <= i.maxZoom ? (l = 0) : (l += Math.abs(g)),
                  u.preventDefault(),
                  !(l > MOUSE_WHEEL_COUNT))
                ) {
                  var _ = a.getBoundingClientRect(),
                    m = u.clientX - _.left,
                    A = u.clientY - _.top;
                  n.zoom(v, {
                    x: m,
                    y: A,
                  }),
                    n.showSnapView();
                }
              }
            };
          this._events.scrollZoom = assignEvent(o, "wheel", c);
        },
      },
      {
        key: "_doubleTapToZoom",
        value: function () {
          var n = this,
            i = this._elements.imageWrap,
            s = 0,
            a,
            o = function (c) {
              s === 0
                ? ((s = Date.now()),
                  (a = {
                    x: c.clientX,
                    y: c.clientY,
                  }))
                : (Date.now() - s < 500 &&
                    Math.abs(c.clientX - a.x) < 50 &&
                    Math.abs(c.clientY - a.y) < 50 &&
                    (n._state.zoomValue === n._options.zoomValue
                      ? n.zoom(200)
                      : n.resetZoom()),
                  (s = 0));
            };
          this._events.doubleTapToZoom = assignEvent(i, "click", o);
        },
      },
      {
        key: "_getImageCurrentDim",
        value: function () {
          var n = this._state,
            i = n.zoomValue,
            s = n.imageDim;
          return {
            w: s.w * (i / 100),
            h: s.h * (i / 100),
          };
        },
      },
      {
        key: "_loadImages",
        value: function () {
          var n = this,
            i = this._images,
            s = this._elements,
            a = i.imageSrc,
            o = i.hiResImageSrc,
            l = s.container,
            c = s.snapImageWrap,
            h = s.imageWrap,
            u = l.querySelector(".iv-loader");
          remove(l.querySelectorAll(".iv-snap-image, .iv-image"));
          var d = createElement({
              tagName: "img",
              className: "iv-snap-image",
              src: a,
              insertBefore: c.firstChild,
              parent: c,
            }),
            f = createElement({
              tagName: "img",
              className: "iv-image iv-small-image",
              src: a,
              parent: h,
            });
          (this._state.loaded = !1),
            (this._elements.image = f),
            (this._elements.snapImage = d),
            css(u, {
              display: "block",
            }),
            css(f, {
              visibility: "hidden",
            }),
            this.hideSnapView();
          var p = function () {
            css(u, {
              display: "none",
            }),
              css(f, {
                visibility: "visible",
              }),
              o && n._loadHighResImage(o),
              (n._state.loaded = !0),
              n._calculateDimensions(),
              n._listeners.onImageLoaded &&
                n._listeners.onImageLoaded(n._callbackData),
              n.resetZoom();
          };
          imageLoaded(f)
            ? p()
            : (typeof this._events.imageLoad == "function" &&
                this._events.imageLoad(),
              (this._events.imageLoad = assignEvent(f, "load", p)));
        },
      },
      {
        key: "_loadHighResImage",
        value: function (n) {
          var i = this,
            s = this._elements,
            a = s.imageWrap,
            o = s.container,
            l = this._elements.image,
            c = createElement({
              tagName: "img",
              className: "iv-image iv-large-image",
              src: n,
              parent: a,
              style: l.style.cssText,
            });
          (c.style.cssText = l.style.cssText),
            (this._elements.image = o.querySelectorAll(".iv-image"));
          var h = function () {
            remove(l), (i._elements.image = c);
          };
          imageLoaded(c)
            ? h()
            : (typeof this._events.hiResImageLoad == "function" &&
                this._events.hiResImageLoad(),
              (this._events.hiResImageLoad = assignEvent(c, "load", h)));
        },
      },
      {
        key: "_calculateDimensions",
        value: function () {
          var n = this._elements,
            i = n.image,
            s = n.container,
            a = n.snapView,
            o = n.snapImage,
            l = n.zoomHandle,
            c = parseInt(css(i, "width"), 10),
            h = parseInt(css(i, "height"), 10),
            u = parseInt(css(s, "width"), 10),
            d = parseInt(css(s, "height"), 10),
            f = a.clientWidth,
            p = a.clientHeight;
          this._state.containerDim = {
            w: u,
            h: d,
          };
          var g,
            v,
            _ = c / h;
          (g = (c > h && d >= u) || _ * d > u ? u : _ * d),
            (v = g / _),
            (this._state.imageDim = {
              w: g,
              h: v,
            }),
            css(i, {
              width: "".concat(g, "px"),
              height: "".concat(v, "px"),
              left: "".concat((u - g) / 2, "px"),
              top: "".concat((d - v) / 2, "px"),
              maxWidth: "none",
              maxHeight: "none",
            });
          var m = g > v ? f : (g * p) / v,
            A = v > g ? p : (v * f) / g;
          (this._state.snapImageDim = {
            w: m,
            h: A,
          }),
            css(o, {
              width: "".concat(m, "px"),
              height: "".concat(A, "px"),
            });
          var S = a.querySelector(".iv-zoom-slider").clientWidth;
          this._state.zoomSliderLength = S - l.offsetWidth;
        },
      },
      {
        key: "resetZoom",
        value: function () {
          var n =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : !0,
            i = this._options.zoomValue;
          n || (this._state.zoomValue = i), this.zoom(i);
        },
      },
      {
        key: "load",
        value: function (n, i) {
          (this._images = {
            imageSrc: n,
            hiResImageSrc: i,
          }),
            this._loadImages();
        },
      },
      {
        key: "destroy",
        value: function () {
          var n = this._elements,
            i = n.container,
            s = n.domElement;
          Object.entries(this._sliders).forEach(function (a) {
            var o = _slicedToArray(a, 2);
            o[0];
            var l = o[1];
            l.destroy();
          }),
            Object.entries(this._events).forEach(function (a) {
              var o = _slicedToArray(a, 2);
              o[0];
              var l = o[1];
              l();
            }),
            this._clearFrames(),
            remove(i.querySelector(".iv-wrap")),
            removeClass(i, "iv-container"),
            removeCss(document.querySelector("html"), "relative"),
            s !== i && unwrap(s),
            (s._imageViewer = null),
            this._listeners.onDestroy && this._listeners.onDestroy();
        },
        /**
         * Data will be passed to the callback registered with each new instance
         */
      },
      {
        key: "_callbackData",
        get: function () {
          return {
            container: this._elements.container,
            snapView: this._elements.snapView,
            zoomValue: this._state.zoomValue,
            reachedMin: Math.abs(this._state.zoomValue - 100) < 1,
            reachedMax:
              Math.abs(this._state.zoomValue - this._options.maxZoom) < 1,
            instance: this,
          };
        },
      },
    ]);
  })();
ImageViewer.defaults = {
  zoomValue: 100,
  snapView: !0,
  maxZoom: 500,
  refreshOnResize: !0,
  zoomOnMouseWheel: !0,
  hasZoomButtons: !1,
  zoomStep: 50,
  listeners: {
    onInit: null,
    onDestroy: null,
    onHide: null,
    onImageLoaded: null,
    onZoomChange: null,
  },
};
var fullScreenHtml = `
  <div class="iv-fullscreen-container"></div>
  <div class="iv-fullscreen-close"></div>
`,
  FullScreenViewer = /* @__PURE__ */ (function (r) {
    function e() {
      var n,
        i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _classCallCheck(this, e);
      var s = createElement({
          tagName: "div",
          className: "iv-fullscreen",
          html: fullScreenHtml,
          parent: document.body,
        }),
        a = s.querySelector(".iv-fullscreen-container");
      return (
        (n = _callSuper(this, e, [
          a,
          _objectSpread2(
            _objectSpread2({}, i),
            {},
            {
              refreshOnResize: !1,
            }
          ),
        ])),
        _defineProperty(n, "hide", function () {
          css(n._elements.fullScreen, {
            display: "none",
          }),
            n._listeners.onHide && n._listeners.onHide(this._callbackData),
            removeCss(document.querySelector("html"), "overflow"),
            n._events.onWindowResize();
        }),
        (n._elements.fullScreen = s),
        n._initFullScreenEvents(),
        n
      );
    }
    return (
      _inherits(e, r),
      _createClass(e, [
        {
          key: "_initFullScreenEvents",
          value: function () {
            var i = this._elements.fullScreen,
              s = i.querySelector(".iv-fullscreen-close");
            this._events.onCloseBtnClick = assignEvent(s, "click", this.hide);
          },
        },
        {
          key: "show",
          value: function (i, s) {
            css(this._elements.fullScreen, {
              display: "block",
            }),
              i && this.load(i, s),
              (this._events.onWindowResize = assignEvent(
                window,
                "resize",
                this.refresh
              )),
              css(document.querySelector("html"), {
                overflow: "hidden",
              });
          },
        },
        {
          key: "destroy",
          value: function () {
            var i = this._elements.fullScreen;
            _get(_getPrototypeOf(e.prototype), "destroy", this).call(this),
              remove(i);
          },
        },
      ])
    );
  })(ImageViewer);
class BrochureModal {
  constructor() {
    te(this, "_viewer");
    this._viewer = new FullScreenViewer({
      listeners: {
        onHide: () => {
          this._closeCallbackFunction();
        },
      },
    });
  }
  show(e, n = void 0) {
    this._viewer.show(e, n), (GalleryScene.instance.isModalOpen = !0);
  }
  _closeCallbackFunction() {
    GalleryScene.instance.isModalOpen = !1;
  }
}
function getFirstWallContentId(r, e = 1) {
  if (r.contents == null || r.contents.length == 0) return null;
  let n = (r.size[0] * (1 + e)) / 2,
    i = r.contents[0].resourceId;
  for (let s = 0; s < r.contents.length; s++)
    e > 0
      ? r.contents[s].position[0] < n &&
        ((n = r.contents[s].position[0]), (i = r.contents[s].resourceId))
      : r.contents[s].position[0] > n &&
        ((n = r.contents[s].position[0]), (i = r.contents[s].resourceId));
  return i;
}
class Controls {
  constructor() {
    te(
      this,
      "_wallsObj3D",
      GalleryScene.instance.children.filter((e) => e.userData.type === "wall")
    );
    te(this, "_activeWallIndex", -1);
    te(this, "_activeWallLabel");
    te(this, "_activeContentId", null);
    te(this, "_contentInfo");
    te(this, "_zoomButtom");
    te(this, "_audioControl", null);
    te(this, "_menuOptions");
    const e = document.createElement("div");
    (e.id = "content-info-div"),
      (e.className = "hidden"),
      document.body.appendChild(e),
      (this._contentInfo = e);
    const n = document.getElementById("controls-panel"),
      i = document.createElement("div");
    (i.id = "active-wall-label"),
      n == null || n.appendChild(i),
      (this._activeWallLabel = i),
      this.setActiveWallIndex(0);
    const s = document.createElement("div");
    (s.id = "gallery-controls-bar"),
      n == null || n.appendChild(s),
      (this._menuOptions = new Menu(s)),
      new ShareControl(s),
      ResourceManager.instance.getAudioResourcesSize() > 0 &&
        (this._audioControl = new AudioControl(s)),
      new FullScreenControl(s);
    const o = document.createElement("div");
    (o.id = "logo-paf"),
      s.appendChild(o),
      o.addEventListener(
        "click",
        () => {
          window.open("https://www.peopleartfactory.com", "_blank");
        },
        !1
      );
    const l = document.createElement("div");
    (l.id = "control-buttom-left"),
      l.classList.add("control-buttom"),
      n == null || n.appendChild(l),
      l.addEventListener(
        "click",
        () => {
          this.moveToNextContent(-1);
        },
        !1
      );
    const c = document.createElement("div");
    (c.id = "control-buttom-right"),
      c.classList.add("control-buttom"),
      n == null || n.appendChild(c),
      c.addEventListener(
        "click",
        () => {
          this.moveToNextContent(1);
        },
        !1
      );
    const h = new BrochureModal(),
      u = document.createElement("div");
    (u.id = "control-zoom"),
      (u.className = "hidden"),
      n == null || n.appendChild(u),
      (this._zoomButtom = u),
      u.addEventListener(
        "click",
        () => {
          var f, p;
          const d =
            (p =
              (f = GalleryScene.instance.galleryData) == null
                ? void 0
                : f.allResources.find((g) => g.id === this._activeContentId)) ==
            null
              ? void 0
              : p.url;
          d && h.show(d);
        },
        !1
      ),
      window.addEventListener(
        "keyup",
        (d) => {
          d.code == "Space" && this.moveToNextContent();
        },
        !1
      );
  }
  setActiveContent(e, n) {
    (this._activeContentId = e),
      this.showContentInfo(e),
      this.setActiveWallIndex(n);
  }
  setActiveWallIndex(e) {
    var s, a, o, l;
    if (this._activeWallIndex === e) return;
    const n =
      (a = (s = GalleryScene.instance.galleryData) == null ? void 0 : s.room) ==
      null
        ? void 0
        : a.walls.length;
    if (!n) return;
    (this._activeWallIndex = e),
      (this._activeWallLabel.innerHTML = `<p>${t("Wall")}: ${
        this._activeWallIndex + 1
      }<small> / ${n}</small></p>`);
    const i =
      (l = (o = GalleryScene.instance.galleryData) == null ? void 0 : o.room) ==
      null
        ? void 0
        : l.walls[e].audioId;
    i && this.playNewAudioById(i);
  }
  showContentInfo(e) {
    var s, a;
    if (!this._menuOptions.isPlacardActived) return;
    const n =
      (a =
        (s = GalleryScene.instance.galleryData) == null
          ? void 0
          : s.allResources) == null
        ? void 0
        : a.filter((o) => o.id === e)[0];
    if (!n) return;
    this._activeContentId = e;
    const i = n.info;
    if (i && !n.disabled) {
      this._contentInfo.classList.remove("hidden"),
        this._zoomButtom.classList.remove("hidden");
      let o = `<strong>${i.name}</strong>`;
      o += i.description ? `<p>${i.description}</p>` : "</br></br>";
      const {
        showDimensions: l,
        height: c,
        width: h,
        depth: u,
      } = {
        ...i.realDimensions,
      };
      l &&
        (c &&
          h &&
          u &&
          (o += `<small>${c} x ${h} x ${u} cm - 
					${(c * 0.39).toFixed(2)} x ${(h * 0.39).toFixed(2)} x ${(u * 0.39).toFixed(
            2
          )} in</small>`),
        c &&
          h &&
          (o += `<small>${c} x ${h} cm - ${(c * 0.39).toFixed(2)} x ${(
            h * 0.39
          ).toFixed(2)} in</small>`)),
        i.price && i.price != "0" && (o += `<p>${i.price}</p>`);
      const d = t("Open Link");
      i.refUrl &&
        (o += `</br></strong><a href="${i.refUrl}" target="_blank" style="display:flex;margin-top:15px;font-weight:bold"><div class="icon-external-link" style="margin-top:-3px" ></div>${d}</a></strong>`),
        (this._contentInfo.innerHTML = o);
    }
  }
  hideContentInfo() {
    (this._contentInfo.className = "hidden"),
      (this._zoomButtom.className = "hidden");
  }
  _moveToNextWall(e = 1) {
    var l, c, h, u;
    const n = this._wallsObj3D.length - 1;
    let i = this._activeWallIndex + e;
    (i = i < 0 ? n : i), (i = i > n ? 0 : i);
    const s =
      (c = (l = GalleryScene.instance.galleryData) == null ? void 0 : l.room) ==
      null
        ? void 0
        : c.walls[i];
    if (!s) return;
    this.castShadowWallLights(i);
    const a = getFirstWallContentId(s, e);
    this._activeContentId = a;
    let o = null;
    a
      ? (o = this._wallsObj3D[i].children.filter((d) => d.userData.id === a)[0])
      : (o = this._wallsObj3D[i]),
      (u = (h = GalleryScene.instance) == null ? void 0 : h.viewer) == null ||
        u.moveToObject3D(o);
  }
  castShadowWallLights(e = 0) {
    let n = 0,
      i = !1;
    this._wallsObj3D.forEach((s) => {
      s.children
        .filter((o) => o.userData.type === "spotLight")
        .forEach((o) => {
          (i = n === e),
            (o.children.filter((l) => l.type === "SpotLight")[0].castShadow =
              i);
        }),
        n++;
    });
  }
  moveToNextContent(e = 1) {
    var i, s, a, o;
    if ((this.hideContentInfo(), !this._activeContentId)) {
      const l =
        (s =
          (i = GalleryScene.instance.galleryData) == null ? void 0 : i.room) ==
        null
          ? void 0
          : s.walls[this._activeWallIndex];
      if (!l) return;
      const c = getFirstWallContentId(l, -e);
      let h = null;
      c
        ? ((this._activeContentId = c),
          (h = this._wallsObj3D[this._activeWallIndex].children.filter(
            (u) => u.userData.id === c
          )[0]),
          (o = (a = GalleryScene.instance) == null ? void 0 : a.viewer) ==
            null || o.moveToObject3D(h))
        : this._moveToNextWall(e);
      return;
    }
    const n = this._wallsObj3D[this._activeWallIndex].children.filter(
      (l) =>
        l.userData.type == "content" && l.userData.id !== this._activeContentId
    );
    if (n.length > 0) {
      const l = this._wallsObj3D[this._activeWallIndex].children.filter(
        (d) => d.userData.id === this._activeContentId
      )[0];
      if (!l) return;
      let c = 1 / 0,
        h = null,
        u = 0;
      n.forEach((d) => {
        var f, p;
        if (
          (Math.sign(d.position.x - l.position.x) == e &&
            c > Math.abs(d.position.x - l.position.x) &&
            (h = d),
          u === n.length - 1)
        )
          if (h) {
            (this._activeContentId = d.userData.id),
              (p = (f = GalleryScene.instance) == null ? void 0 : f.viewer) ==
                null || p.moveToObject3D(h);
            return;
          } else this._moveToNextWall(e);
        u++;
      });
    } else this._moveToNextWall(e);
  }
  playNewAudioById(e, n = !1) {
    var i;
    this.initRoomAudio(),
      (i = this._audioControl) == null || i.playNewAudioById(e, n);
  }
  initRoomAudio() {
    var i, s, a, o, l, c, h;
    if ((i = this._audioControl) != null && i.generalAudio) return;
    const e =
      (a = (s = GalleryScene.instance.galleryData) == null ? void 0 : s.room) ==
      null
        ? void 0
        : a.generalAudioId;
    e && ((o = this._audioControl) == null || o.playNewAudioById(e, !0));
    const n =
      (c = (l = GalleryScene.instance.galleryData) == null ? void 0 : l.room) ==
      null
        ? void 0
        : c.walls[this._activeWallIndex].audioId;
    n && ((h = this._audioControl) == null || h.playNewAudioById(n));
  }
  get menu() {
    return this._menuOptions;
  }
}
class VideoPlayer {
  constructor(e) {
    const { source: n, id: i } = e;
    let s;
    const a = new Modal(`video-player-modal-${i}`, () => {
        s();
      }),
      o = e.loop ? 1 : 0,
      l = document.createElement("div");
    (l.id = "video-player"),
      a.body.appendChild(l),
      (l.style.width = "80vw"),
      (l.style.height = "80vh");
    const c = document.createElement("div");
    (c.style.width = "100%"),
      (c.style.height = "100%"),
      (c.style.position = "relative"),
      (c.style.zIndex = "-10"),
      l.appendChild(c),
      n === "youTube" &&
        i &&
        (c.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${i}?autoplay=1&controls=0&showinfo=0&rel=0&loop=${o}&playlist=${i}" frameborder="0" allow="fullscreen; autoplay; encrypted-media" allowfullscreen/>`),
      a.show(),
      (GalleryScene.instance.isModalOpen = !0),
      (s = () => {
        const h = document.getElementById(`video-player-modal-${i}`);
        h && h.remove(), (GalleryScene.instance.isModalOpen = !1);
      });
  }
}
let POINTER_SLOW_SPEED_RANGE = 100,
  POINTER_SLOW_SPEED_CORRECTION_FACTOR = 0.5,
  POINTER_FAST_SPEED_CORRECTION_FACTOR = 10,
  POINTER_ROTATION_RANGE = 80,
  POINTER_ROTATION_CORRECTION_FACTOR = 50,
  KEYS_ARROWS_SPEED = 10,
  WHEEL_RANGE = 90,
  WHEEL_CORRECTION_FACTOR = 15,
  THETA_FACTOR = 20,
  TRANSLATION_SPEED = 30,
  FAST_TRANSLATION_SPEED = 60,
  FAST_TRANSLATION_RANGE = 500,
  PHI_SPEED = 0.9,
  THETA_SPEED = 0.5,
  COLLISION_DISTANCE = 20,
  CONTENT_DISTANCE = 250;
function clamp(r, e, n) {
  return Math.min(Math.max(r, e), n);
}
class InputController {
  constructor() {
    te(this, "_pointers");
    te(this, "_inputState");
    (this._pointers = []),
      (this._inputState = {
        deltaViewerRotation: new Vector2(),
        deltaViewerPosition: new Vector2(),
        pointerPosition: null,
      });
    const e = document.getElementById("gallery-scene");
    e == null ||
      e.addEventListener("pointerdown", (a) => this._onPointerDown(a)),
      e == null || e.addEventListener("pointerup", (a) => this._onPointerUp(a)),
      e == null ||
        e.addEventListener("pointermove", (a) => this._onPointerMove(a), !1);
    const n = document.createElement("div");
    (n.id = "controls-panel"),
      document.body.appendChild(n),
      n.addEventListener("pointerdown", (a) => this._onPointerDown(a)),
      n.addEventListener("pointerup", (a) => this._onPointerUp(a)),
      n.addEventListener("pointermove", (a) => this._onPointerMove(a), !1);
    const i = document.createElement("div");
    (i.id = "walk-control"), n.appendChild(i);
    const s = document.createElement("div");
    (s.id = "walk-control-ref"),
      i.appendChild(s),
      i.addEventListener("pointerdown", (a) => this._onPointerDown(a)),
      i.addEventListener("pointermove", (a) => this._onPointerMove(a)),
      window.addEventListener("keydown", (a) => this._onKeyDown(a)),
      window.addEventListener("keyup", (a) => this._onKeyUp(a)),
      window.addEventListener("wheel", (a) => this._onWheel(a));
  }
  _onPointerDown(e) {
    e.stopPropagation(), e.preventDefault();
    let n = !1;
    const i = e.target;
    (i.id === "walk-control" || i.id === "walk-control-ref") && (n = !0);
    const s = {
      id: e.pointerId,
      initPosition: new Vector2(e.pageX, e.pageY),
      isJostick: n,
    };
    this._pointers.push(s);
  }
  _onPointerUp(e) {
    const n = this._pointers.filter((s) => s.id === e.pointerId)[0],
      i = new Vector2();
    i.set(n.initPosition.x - e.pageX, n.initPosition.y - e.pageY),
      i.length() < 1 && this._setPointerPosition(e),
      this._inputState.deltaViewerPosition.set(0, 0),
      this._inputState.deltaViewerRotation.set(0, 0),
      (this._pointers = this._pointers.filter((s) => s.id != e.pointerId)),
      this._updateWalkRef(this._inputState.deltaViewerPosition);
  }
  _onPointerMove(e) {
    e.preventDefault();
    const n = this._pointers.filter((s) => s.id === e.pointerId)[0];
    if (!n) return;
    const i = new Vector2();
    if (n.isJostick)
      i.set(n.initPosition.x - e.pageX, n.initPosition.y - e.pageY),
        i.length() < POINTER_SLOW_SPEED_RANGE
          ? i.divideScalar(i.length() / POINTER_SLOW_SPEED_CORRECTION_FACTOR)
          : i.divideScalar(i.length() / POINTER_FAST_SPEED_CORRECTION_FACTOR),
        (this._inputState.deltaViewerPosition = i),
        this._updateWalkRef(i);
    else {
      i.set(e.pageX - n.initPosition.x, e.pageY - n.initPosition.y);
      const s = GalleryScene.instance.windowInnerWidth;
      i.length() > (POINTER_ROTATION_RANGE * s) / 1920 &&
        i.divideScalar(
          i.length() / ((POINTER_ROTATION_CORRECTION_FACTOR * s) / 1920)
        ),
        (this._inputState.deltaViewerRotation = i);
    }
  }
  _updateWalkRef(e) {
    const n = document.getElementById("walk-control-ref");
    n && ((n.style.left = -e.x * 2 + "px"), (n.style.top = -e.y * 2 + "px"));
  }
  _setPointerPosition(e) {
    const n = new Vector2();
    (n.x = (e.clientX / window.innerWidth) * 2 - 1),
      (n.y = -(e.clientY / window.innerHeight) * 2 + 1),
      (this._inputState.pointerPosition = n);
  }
  _onKeyDown(e) {
    switch (e.key) {
      case "ArrowLeft":
        this._inputState.deltaViewerPosition.x = KEYS_ARROWS_SPEED;
        break;
      case "ArrowRight":
        this._inputState.deltaViewerPosition.x = -KEYS_ARROWS_SPEED;
        break;
      case "ArrowUp":
        this._inputState.deltaViewerPosition.y = KEYS_ARROWS_SPEED;
        break;
      case "ArrowDown":
        this._inputState.deltaViewerPosition.y = -KEYS_ARROWS_SPEED;
        break;
    }
  }
  _onKeyUp(e) {
    switch (e.key) {
      case "ArrowLeft":
        this._inputState.deltaViewerPosition.x = 0;
        break;
      case "ArrowRight":
        this._inputState.deltaViewerPosition.x = 0;
        break;
      case "ArrowUp":
        this._inputState.deltaViewerPosition.y = 0;
        break;
      case "ArrowDown":
        this._inputState.deltaViewerPosition.y = 0;
        break;
    }
  }
  _onWheel(e) {
    (this._inputState.deltaViewerPosition.y = e.deltaY),
      this._inputState.deltaViewerPosition.length() > WHEEL_RANGE &&
        this._inputState.deltaViewerPosition.divideScalar(
          this._inputState.deltaViewerPosition.length() /
            WHEEL_CORRECTION_FACTOR
        ),
      setTimeout(() => {
        this._inputState.deltaViewerPosition.y = 0;
      }, 200);
  }
  reset() {
    this._inputState.pointerPosition = null;
  }
  get state() {
    return this._inputState;
  }
}
class Viewer {
  constructor(r, e = 0, n = -Math.PI / THETA_FACTOR) {
    te(this, "_position");
    te(this, "_input");
    te(this, "_camera");
    te(this, "_rotation");
    te(this, "_phi");
    te(this, "_theta");
    te(this, "_controls");
    te(this, "update", (r) => {
      this._updatePosition(r),
        this._updateRotation(),
        this._updateRayIntersections(),
        this._updateCamera(),
        this._input.reset();
    });
    (this._position = r),
      (this._camera = GalleryScene.instance.camera),
      (this._input = new InputController()),
      (this._rotation = new Quaternion()),
      (this._phi = e),
      (this._theta = n),
      (this._controls = new Controls());
  }
  setSettings(settings) {
    for (const [key, value] of Object.entries(settings))
      try {
        eval(`${key} = ${value};`);
      } catch (r) {}
  }
  _updatePosition(r) {
    if (GalleryScene.instance.isModalOpen) return;
    const e = this._input.state;
    e.deltaViewerPosition.length() > 1 && this._controls.hideContentInfo();
    let i = e.deltaViewerPosition.x,
      s = e.deltaViewerPosition.y;
    const a = new Quaternion();
    a.setFromAxisAngle(new Vector3(0, 1, 0), this._phi);
    let o;
    (o = new Vector3(0, 0, -1)),
      o.applyQuaternion(a),
      o.multiplyScalar(s * r * TRANSLATION_SPEED);
    const l = new Vector3(-1, 0, 0);
    l.applyQuaternion(a), l.multiplyScalar(i * r * TRANSLATION_SPEED);
    const c = this._position.clone();
    c.add(o).add(l);
    const h = new Sphere(c, COLLISION_DISTANCE);
    GalleryScene.instance.entities.filter((d) => {
      var f;
      return (f = d.collider) == null ? void 0 : f.intersectsSphere(h);
    }).length == 0 && this._position.copy(c);
  }
  _updateRotation() {
    if (GalleryScene.instance.isModalOpen) return;
    const r = this._input.state;
    r.deltaViewerRotation.length() > 10 && this._controls.hideContentInfo();
    const n = -r.deltaViewerRotation.x / window.innerWidth,
      i = -r.deltaViewerRotation.y / window.innerHeight;
    (this._phi += -n * PHI_SPEED),
      (this._theta = clamp(
        this._theta + -i * THETA_SPEED,
        -Math.PI / 10,
        Math.PI / 30
      )),
      Math.abs(this._phi) >= (2 * Math.PI * 3) / 4 &&
        (this._phi -= 2 * Math.PI * Math.sign(this._phi));
    const s = new Quaternion();
    s.setFromAxisAngle(new Vector3(0, 1, 0), this._phi);
    const a = new Quaternion();
    a.setFromAxisAngle(new Vector3(1, 0, 0), this._theta);
    const o = new Quaternion();
    o.multiply(s), o.multiply(a), this._rotation.copy(o);
  }
  _updateCamera() {
    this._camera.quaternion.copy(this._rotation),
      this._camera.position.copy(this._position);
  }
  _updateRayIntersections() {
    var i;
    if (GalleryScene.instance.isModalOpen) return;
    const r = new Raycaster();
    let e = this._input.state.pointerPosition;
    e
      ? r.setFromCamera(e, this._camera)
      : r.setFromCamera(new Vector2(), this._camera);
    const n = r.intersectObjects(GalleryScene.instance.children, !0);
    if (n.length) {
      if (e && n[0].object.userData.type === "video-player") {
        const s = n[0].object.userData.id,
          a =
            (i = GalleryScene.instance.galleryData) == null
              ? void 0
              : i.allResources.filter((o) => o.id === s)[0].mediaPlayer;
        a && new VideoPlayer(a);
        return;
      }
      if (n[0].object.userData.type === "content")
        if (e) this.moveToObject3D(n[0].object);
        else {
          const s = new Vector3();
          if (
            (n[0].object.getWorldPosition(s),
            s.distanceTo(this._position) < CONTENT_DISTANCE + 10)
          ) {
            const a = n[0].object.userData.id,
              o = n[0].object.userData.wallIndex;
            this._controls.setActiveContent(a, o);
          } else this._controls.hideContentInfo();
        }
    }
  }
  moveToObject3D(r) {
    var v, _;
    if (
      (this._controls.hideContentInfo(),
      GalleryScene.instance.isModalOpen || !r)
    )
      return;
    const e = r.userData.wallIndex,
      n = r.userData.type,
      i =
        (_ =
          (v = GalleryScene.instance.galleryData) == null ? void 0 : v.room) ==
        null
          ? void 0
          : _.walls[e];
    if (!i) return;
    let s = i.angle;
    const a = new Vector3();
    this._controls.castShadowWallLights(e), this._input.reset();
    let o = CONTENT_DISTANCE;
    r.getWorldPosition(a),
      n === "wall" &&
        ((a.x += (i.size[0] / 2) * Math.cos(s)),
        (a.z -= (i.size[0] / 2) * Math.sin(s)));
    const l = a.distanceTo(this._position),
      c =
        l < FAST_TRANSLATION_RANGE
          ? TRANSLATION_SPEED * 10
          : FAST_TRANSLATION_SPEED * 10,
      h = (l / c) * 1e3;
    Math.abs(s - this._phi) > Math.PI && (s -= Math.PI * 2);
    const u = performance.now(),
      d = this._phi,
      f = this._theta,
      p = this._position.clone(),
      g = () => {
        const m = performance.now(),
          A = Math.min(Math.sqrt((m - u) / h), 1);
        if (
          ((this._phi = d * (1 - A) + s * A),
          (this._theta = f * (1 - A) + (-Math.PI / 20) * A),
          (this._position.x = p.x * (1 - A) + (a.x + o * Math.sin(s)) * A),
          (this._position.z = p.z * (1 - A) + (a.z + o * Math.cos(s)) * A),
          A < 1)
        ) {
          const S = this._position.clone(),
            E = new Sphere(S, COLLISION_DISTANCE / 2);
          GalleryScene.instance.entities.filter((w) => {
            var C;
            return (C = w.collider) == null ? void 0 : C.intersectsSphere(E);
          }).length == 0 && requestAnimationFrame(g);
        } else {
          const S = r.userData.id;
          this._controls.setActiveContent(S, e);
        }
      };
    g();
  }
  get controls() {
    return this._controls;
  }
}
const Viewer$1 = Viewer;
function setAmbientLight(r = "white", e = 2) {
  return new AmbientLight(r, e);
}
function addSpotLight(r, e, n, i, s, a, o, l) {
  const c = new SpotLight(e, n, i, s, a, o);
  c.position.set(0, 50, 50), (c.target = l);
  const h = new BoxGeometry(5, 12, 20),
    u = new MeshStandardMaterial({
      color: r,
    }),
    d = new Mesh(h, u);
  d.rotateX(-Math.PI / 6);
  const f = new Mesh(
    new CylinderGeometry(3, 1, 4),
    new MeshStandardMaterial({ color: e })
  );
  return (
    f.position.set(0, 0, -9),
    f.rotateX(-Math.PI / 2),
    d.add(f, c),
    (d.userData.type = "spotLight"),
    d
  );
}
const ht = class ht {
  constructor() {
    te(this, "_scene", new Scene());
    te(this, "_camera");
    te(this, "_renderer");
    te(this, "_viewer", null);
    te(this, "_galleryData", null);
    te(this, "_settings", null);
    te(this, "_entities", []);
    te(this, "_clock", new Clock());
    te(this, "_maxWallPosition", new Vector3(0, 0, 0));
    te(this, "_minWallPosition", new Vector3(0, 0, 0));
    te(this, "_maxWallHight", 0);
    te(this, "_windowInnerWidth", 0);
    te(this, "isModalOpen", !1);
    te(this, "_resize", () => {
      const { innerWidth: e, innerHeight: n } = window;
      this._renderer.setSize(e, n),
        (this._camera.aspect = e / n),
        this._camera.updateProjectionMatrix(),
        (this._windowInnerWidth = e);
    });
    te(this, "_render", () => {
      var n;
      const e = this._clock.getDelta();
      (n = this._viewer) == null || n.update(e),
        this._renderer.render(this._scene, this._camera),
        requestAnimationFrame(this._render);
    });
    te(this, "_createWalls", async (e, n = !1) => {
      let i = 0;
      e.walls.forEach(async (s) => {
        var g;
        const {
            position: a,
            size: o,
            angle: l,
            color: c,
            backgroundPatternId: h,
            backgroundImageId: u,
            audioId: d,
          } = s,
          f = new Vector3(...a),
          p = new Wall$2(f, o, l, c, h, u, d);
        await p.load(n),
          this._maxWallPosition.max(f),
          this._minWallPosition.min(f),
          (this._maxWallHight = Math.max(this._maxWallHight, o[1])),
          (g = s.contents) == null ||
            g.forEach(async (v) => {
              const {
                resourceId: _,
                position: m,
                size: A,
                frameIndex: S,
                isVideo: E,
              } = v;
              let N = null;
              S != null && e.frames && (N = e.frames[S]);
              const w = new Content$1(i, _, A, N, E);
              if (
                (await w.load(n),
                w.mesh.position.set(
                  m[0] + A[0] / 2,
                  s.size[1] - m[1] - A[1] / 2,
                  m[2]
                ),
                p.mesh.add(w.mesh),
                v.spotLight && e.lights.spotLights && !n)
              ) {
                const {
                    color: C,
                    intensity: U,
                    distance: T,
                    angle: M,
                    penumbra: P,
                    decay: z,
                    positionZ: O,
                  } = e.lights.spotLights[v.spotLight.spotLightIndex],
                  G = addSpotLight(p._color, C, U, T, M, P, z, w.mesh),
                  X = O || 100;
                G.position.set(w.mesh.position.x, this._maxWallHight, X),
                  p.mesh.add(G);
              }
            }),
          (p.mesh.userData.wallIndex = i),
          this._scene.add(p.mesh),
          this._entities.push(p),
          (i += 1);
      });
    });
    te(this, "load", async (e, n = null) => {
      e &&
        ((this._galleryData = e),
        (this._settings = n),
        e.allResources && ResourceManager.instance.load(e.allResources),
        this.createRoom(n == null ? void 0 : n.HIGH_PERFORMANCE));
    });
    te(this, "createRoom", async (e = !1) => {
      var f, p;
      const n = this._galleryData,
        i = this._settings;
      if (!n || !n.room) return;
      this._scene.clear();
      const { ceiling: s, floor: a, lights: o } = n.room;
      await this._createWalls(n.room, e);
      const l = this._maxWallPosition.x + this._minWallPosition.x,
        c = this._maxWallPosition.z + this._minWallPosition.z,
        h = this._maxWallPosition.distanceTo(this._minWallPosition),
        u = new Plane$1(
          new Vector3(l / 2, this._maxWallHight, c / 2),
          h,
          s.color,
          s.backgroundImageId
        );
      await u.load(e), this._scene.add(u.mesh), this._entities.push(u);
      const d = new Plane$1(
        new Vector3(l / 2, 0, c / 2),
        h,
        a.color,
        a.backgroundImageId
      );
      if (
        (await d.load(e),
        (d.mesh.receiveShadow = !0),
        this._scene.add(d.mesh),
        this._entities.push(d),
        !this._viewer)
      ) {
        const g = (f = n.room) == null ? void 0 : f.walls[0].angle,
          v = ((p = n.room) == null ? void 0 : p.walls[0].size[0]) / 2,
          _ =
            i != null && i.VIEWER_HIGHT
              ? i == null
                ? void 0
                : i.VIEWER_HIGHT
              : 175,
          m =
            i != null && i.INITIAL_POSITION
              ? new Vector3(...(i == null ? void 0 : i.INITIAL_POSITION))
              : new Vector3(
                  v * (Math.sin(g) + Math.cos(g)),
                  _,
                  v * (Math.cos(g) - Math.sin(g))
                ),
          A =
            i != null && i.THETA_FACTOR
              ? i == null
                ? void 0
                : i.THETA_FACTOR
              : 20;
        (this._viewer = new Viewer$1(m, g, -Math.PI / A)),
          i && this._viewer.setSettings(i);
        const S =
          i != null && i.START_MODAL
            ? i == null
              ? void 0
              : i.START_MODAL
            : "navigation-info";
        S == "brochure" && this._viewer.controls.menu.brochureModal.show(),
          S == "navigation-info" &&
            this._viewer.controls.menu.navigationInfoModal.show();
      }
      if ((this._viewer.controls.menu.setHightPerformance(e), !e)) {
        const g = setAmbientLight(
          o.ambientLight.color,
          o.ambientLight.intensity
        );
        this._scene.add(g),
          (this._renderer.shadowMap.enabled = !0),
          (this._renderer.shadowMap.type = 2);
      }
      (this._camera.far = h),
        this.camera.updateProjectionMatrix(),
        this._render();
    });
    const { innerWidth: e, innerHeight: n, devicePixelRatio: i } = window;
    this._windowInnerWidth = e;
    const s = e / n,
      a = document.createElement("div");
    (a.id = "gallery-scene"),
      document.body.appendChild(a),
      (this._camera = new PerspectiveCamera(45, s)),
      (this._renderer = new WebGLRenderer({
        alpha: !0,
        antialias: !0,
      })),
      this._renderer.setPixelRatio(i),
      this._renderer.setSize(e, n),
      this._renderer.setClearColor(0, 1),
      a.appendChild(this._renderer.domElement),
      window.addEventListener("resize", this._resize, !1);
  }
  get galleryData() {
    return this._galleryData;
  }
  get settings() {
    return this._settings;
  }
  static get instance() {
    return this._instance;
  }
  get camera() {
    return this._camera;
  }
  get children() {
    return this._scene.children;
  }
  get entities() {
    return this._entities;
  }
  get viewer() {
    return this._viewer;
  }
  get windowInnerWidth() {
    return this._windowInnerWidth;
  }
};
te(ht, "_instance", new ht());
let GalleryScene = ht;
export { GalleryScene };
