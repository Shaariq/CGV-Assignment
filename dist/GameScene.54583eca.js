/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ !function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define([
        "exports"
    ], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).THREE = {});
}(this, function(t8) {
    "use strict";
    const e1 = "139", n1 = 100, i1 = 300, r1 = 301, s1 = 302, a1 = 303, o1 = 304, l1 = 306, c1 = 1e3, h1 = 1001, u1 = 1002, d1 = 1003, p1 = 1004, m1 = 1005, f1 = 1006, g1 = 1007, v1 = 1008, y1 = 1009, x1 = 1012, _1 = 1014, b1 = 1015, M1 = 1016, w1 = 1020, S1 = 1023, T1 = 1026, E1 = 1027, A1 = 33776, R1 = 33777, C1 = 33778, L1 = 33779, P1 = 35840, D1 = 35841, I1 = 35842, N1 = 35843, B1 = 37492, O1 = 37496, z1 = 37808, U1 = 37809, F1 = 37810, H1 = 37811, G1 = 37812, k1 = 37813, V1 = 37814, W1 = 37815, j1 = 37816, q1 = 37817, X1 = 37818, J1 = 37819, Y1 = 37820, Z1 = 37821, K1 = 36492, Q1 = 2300, $1 = 2301, tt1 = 2302, et1 = 2400, nt1 = 2401, it1 = 2402, rt1 = 2500, st1 = 2501, at = 3e3, ot1 = 3001, lt1 = "srgb", ct1 = "srgb-linear", ht1 = 7680, ut1 = 35044, dt1 = 35048, pt1 = "300 es", mt1 = 1035;
    class ft1 {
        addEventListener(t, e) {
            void 0 === this._listeners && (this._listeners = {});
            const n = this._listeners;
            void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e);
        }
        hasEventListener(t, e) {
            if (void 0 === this._listeners) return !1;
            const n = this._listeners;
            return void 0 !== n[t] && -1 !== n[t].indexOf(e);
        }
        removeEventListener(t, e) {
            if (void 0 === this._listeners) return;
            const n = this._listeners[t];
            if (void 0 !== n) {
                const t = n.indexOf(e);
                -1 !== t && n.splice(t, 1);
            }
        }
        dispatchEvent(t) {
            if (void 0 === this._listeners) return;
            const e = this._listeners[t.type];
            if (void 0 !== e) {
                t.target = this;
                const n = e.slice(0);
                for(let e2 = 0, i = n.length; e2 < i; e2++)n[e2].call(this, t);
                t.target = null;
            }
        }
    }
    const gt1 = [];
    for(let t1 = 0; t1 < 256; t1++)gt1[t1] = (t1 < 16 ? "0" : "") + t1.toString(16);
    let vt1 = 1234567;
    const yt1 = Math.PI / 180, xt1 = 180 / Math.PI;
    function _t1() {
        const t = 4294967295 * Math.random() | 0, e = 4294967295 * Math.random() | 0, n = 4294967295 * Math.random() | 0, i = 4294967295 * Math.random() | 0;
        return (gt1[255 & t] + gt1[t >> 8 & 255] + gt1[t >> 16 & 255] + gt1[t >> 24 & 255] + "-" + gt1[255 & e] + gt1[e >> 8 & 255] + "-" + gt1[e >> 16 & 15 | 64] + gt1[e >> 24 & 255] + "-" + gt1[63 & n | 128] + gt1[n >> 8 & 255] + "-" + gt1[n >> 16 & 255] + gt1[n >> 24 & 255] + gt1[255 & i] + gt1[i >> 8 & 255] + gt1[i >> 16 & 255] + gt1[i >> 24 & 255]).toLowerCase();
    }
    function bt1(t, e, n) {
        return Math.max(e, Math.min(n, t));
    }
    function Mt1(t, e) {
        return (t % e + e) % e;
    }
    function wt1(t, e, n) {
        return (1 - n) * t + n * e;
    }
    function St1(t) {
        return 0 == (t & t - 1) && 0 !== t;
    }
    function Tt1(t) {
        return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2));
    }
    function Et(t) {
        return Math.pow(2, Math.floor(Math.log(t) / Math.LN2));
    }
    var At1 = Object.freeze({
        __proto__: null,
        DEG2RAD: yt1,
        RAD2DEG: xt1,
        generateUUID: _t1,
        clamp: bt1,
        euclideanModulo: Mt1,
        mapLinear: function(t, e, n, i, r) {
            return i + (t - e) * (r - i) / (n - e);
        },
        inverseLerp: function(t, e, n) {
            return t !== e ? (n - t) / (e - t) : 0;
        },
        lerp: wt1,
        damp: function(t, e, n, i) {
            return wt1(t, e, 1 - Math.exp(-n * i));
        },
        pingpong: function(t, e = 1) {
            return e - Math.abs(Mt1(t, 2 * e) - e);
        },
        smoothstep: function(t, e, n) {
            return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * (3 - 2 * t);
        },
        smootherstep: function(t, e, n) {
            return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10);
        },
        randInt: function(t, e) {
            return t + Math.floor(Math.random() * (e - t + 1));
        },
        randFloat: function(t, e) {
            return t + Math.random() * (e - t);
        },
        randFloatSpread: function(t) {
            return t * (.5 - Math.random());
        },
        seededRandom: function(t) {
            void 0 !== t && (vt1 = t);
            let e = vt1 += 1831565813;
            return e = Math.imul(e ^ e >>> 15, 1 | e), e ^= e + Math.imul(e ^ e >>> 7, 61 | e), ((e ^ e >>> 14) >>> 0) / 4294967296;
        },
        degToRad: function(t) {
            return t * yt1;
        },
        radToDeg: function(t) {
            return t * xt1;
        },
        isPowerOfTwo: St1,
        ceilPowerOfTwo: Tt1,
        floorPowerOfTwo: Et,
        setQuaternionFromProperEuler: function(t, e, n, i, r) {
            const s = Math.cos, a = Math.sin, o = s(n / 2), l = a(n / 2), c = s((e + i) / 2), h = a((e + i) / 2), u = s((e - i) / 2), d = a((e - i) / 2), p = s((i - e) / 2), m = a((i - e) / 2);
            switch(r){
                case "XYX":
                    t.set(o * h, l * u, l * d, o * c);
                    break;
                case "YZY":
                    t.set(l * d, o * h, l * u, o * c);
                    break;
                case "ZXZ":
                    t.set(l * u, l * d, o * h, o * c);
                    break;
                case "XZX":
                    t.set(o * h, l * m, l * p, o * c);
                    break;
                case "YXY":
                    t.set(l * p, o * h, l * m, o * c);
                    break;
                case "ZYZ":
                    t.set(l * m, l * p, o * h, o * c);
                    break;
                default:
                    console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
            }
        },
        normalize: function(t, e) {
            switch(e.constructor){
                case Float32Array:
                    return t;
                case Uint16Array:
                    return Math.round(65535 * t);
                case Uint8Array:
                    return Math.round(255 * t);
                case Int16Array:
                    return Math.round(32767 * t);
                case Int8Array:
                    return Math.round(127 * t);
                default:
                    throw new Error("Invalid component type.");
            }
        },
        denormalize: function(t, e) {
            switch(e.constructor){
                case Float32Array:
                    return t;
                case Uint16Array:
                    return t / 65535;
                case Uint8Array:
                    return t / 255;
                case Int16Array:
                    return Math.max(t / 32767, -1);
                case Int8Array:
                    return Math.max(t / 127, -1);
                default:
                    throw new Error("Invalid component type.");
            }
        }
    });
    class Rt {
        constructor(t = 0, e = 0){
            this.x = t, this.y = e;
        }
        get width() {
            return this.x;
        }
        set width(t) {
            this.x = t;
        }
        get height() {
            return this.y;
        }
        set height(t) {
            this.y = t;
        }
        set(t, e) {
            return this.x = t, this.y = e, this;
        }
        setScalar(t) {
            return this.x = t, this.y = t, this;
        }
        setX(t) {
            return this.x = t, this;
        }
        setY(t) {
            return this.y = t, this;
        }
        setComponent(t, e) {
            switch(t){
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t);
            }
            return this;
        }
        getComponent(t) {
            switch(t){
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw new Error("index is out of range: " + t);
            }
        }
        clone() {
            return new this.constructor(this.x, this.y);
        }
        copy(t) {
            return this.x = t.x, this.y = t.y, this;
        }
        add(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this);
        }
        addScalar(t) {
            return this.x += t, this.y += t, this;
        }
        addVectors(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this;
        }
        addScaledVector(t, e) {
            return this.x += t.x * e, this.y += t.y * e, this;
        }
        sub(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this);
        }
        subScalar(t) {
            return this.x -= t, this.y -= t, this;
        }
        subVectors(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this;
        }
        multiply(t) {
            return this.x *= t.x, this.y *= t.y, this;
        }
        multiplyScalar(t) {
            return this.x *= t, this.y *= t, this;
        }
        divide(t) {
            return this.x /= t.x, this.y /= t.y, this;
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t);
        }
        applyMatrix3(t) {
            const e = this.x, n = this.y, i = t.elements;
            return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this;
        }
        min(t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
        }
        max(t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
        }
        clamp(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this;
        }
        clampScalar(t, e) {
            return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this;
        }
        clampLength(t, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
        }
        floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
        }
        ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
        }
        round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
        }
        negate() {
            return this.x = -this.x, this.y = -this.y, this;
        }
        dot(t) {
            return this.x * t.x + this.y * t.y;
        }
        cross(t) {
            return this.x * t.y - this.y * t.x;
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
        distanceTo(t) {
            return Math.sqrt(this.distanceToSquared(t));
        }
        distanceToSquared(t) {
            const e = this.x - t.x, n = this.y - t.y;
            return e * e + n * n;
        }
        manhattanDistanceTo(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
        }
        setLength(t) {
            return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
        }
        lerpVectors(t, e, n) {
            return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this;
        }
        equals(t) {
            return t.x === this.x && t.y === this.y;
        }
        fromArray(t, e = 0) {
            return this.x = t[e], this.y = t[e + 1], this;
        }
        toArray(t = [], e = 0) {
            return t[e] = this.x, t[e + 1] = this.y, t;
        }
        fromBufferAttribute(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this;
        }
        rotateAround(t, e) {
            const n = Math.cos(e), i = Math.sin(e), r = this.x - t.x, s = this.y - t.y;
            return this.x = r * n - s * i + t.x, this.y = r * i + s * n + t.y, this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this;
        }
        *[Symbol.iterator]() {
            yield this.x, yield this.y;
        }
    }
    Rt.prototype.isVector2 = !0;
    class Ct1 {
        constructor(){
            this.elements = [
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1
            ], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");
        }
        set(t, e, n, i, r, s, a, o, l) {
            const c = this.elements;
            return c[0] = t, c[1] = i, c[2] = a, c[3] = e, c[4] = r, c[5] = o, c[6] = n, c[7] = s, c[8] = l, this;
        }
        identity() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
        }
        copy(t) {
            const e = this.elements, n = t.elements;
            return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
        }
        extractBasis(t, e, n) {
            return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
        }
        setFromMatrix4(t) {
            const e = t.elements;
            return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
        }
        multiply(t) {
            return this.multiplyMatrices(this, t);
        }
        premultiply(t) {
            return this.multiplyMatrices(t, this);
        }
        multiplyMatrices(t, e) {
            const n = t.elements, i = e.elements, r = this.elements, s = n[0], a = n[3], o = n[6], l = n[1], c = n[4], h = n[7], u = n[2], d = n[5], p = n[8], m = i[0], f = i[3], g = i[6], v = i[1], y = i[4], x = i[7], _ = i[2], b = i[5], M = i[8];
            return r[0] = s * m + a * v + o * _, r[3] = s * f + a * y + o * b, r[6] = s * g + a * x + o * M, r[1] = l * m + c * v + h * _, r[4] = l * f + c * y + h * b, r[7] = l * g + c * x + h * M, r[2] = u * m + d * v + p * _, r[5] = u * f + d * y + p * b, r[8] = u * g + d * x + p * M, this;
        }
        multiplyScalar(t) {
            const e = this.elements;
            return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
        }
        determinant() {
            const t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], s = t[4], a = t[5], o = t[6], l = t[7], c = t[8];
            return e * s * c - e * a * l - n * r * c + n * a * o + i * r * l - i * s * o;
        }
        invert() {
            const t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], s = t[4], a = t[5], o = t[6], l = t[7], c = t[8], h = c * s - a * l, u = a * o - c * r, d = l * r - s * o, p = e * h + n * u + i * d;
            if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
            const m = 1 / p;
            return t[0] = h * m, t[1] = (i * l - c * n) * m, t[2] = (a * n - i * s) * m, t[3] = u * m, t[4] = (c * e - i * o) * m, t[5] = (i * r - a * e) * m, t[6] = d * m, t[7] = (n * o - l * e) * m, t[8] = (s * e - n * r) * m, this;
        }
        transpose() {
            let t;
            const e = this.elements;
            return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
        }
        getNormalMatrix(t) {
            return this.setFromMatrix4(t).invert().transpose();
        }
        transposeIntoArray(t) {
            const e = this.elements;
            return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
        }
        setUvTransform(t, e, n, i, r, s, a) {
            const o = Math.cos(r), l = Math.sin(r);
            return this.set(n * o, n * l, -n * (o * s + l * a) + s + t, -i * l, i * o, -i * (-l * s + o * a) + a + e, 0, 0, 1), this;
        }
        scale(t, e) {
            const n = this.elements;
            return n[0] *= t, n[3] *= t, n[6] *= t, n[1] *= e, n[4] *= e, n[7] *= e, this;
        }
        rotate(t) {
            const e = Math.cos(t), n = Math.sin(t), i = this.elements, r = i[0], s = i[3], a = i[6], o = i[1], l = i[4], c = i[7];
            return i[0] = e * r + n * o, i[3] = e * s + n * l, i[6] = e * a + n * c, i[1] = -n * r + e * o, i[4] = -n * s + e * l, i[7] = -n * a + e * c, this;
        }
        translate(t, e) {
            const n = this.elements;
            return n[0] += t * n[2], n[3] += t * n[5], n[6] += t * n[8], n[1] += e * n[2], n[4] += e * n[5], n[7] += e * n[8], this;
        }
        equals(t) {
            const e = this.elements, n = t.elements;
            for(let t9 = 0; t9 < 9; t9++)if (e[t9] !== n[t9]) return !1;
            return !0;
        }
        fromArray(t, e = 0) {
            for(let n = 0; n < 9; n++)this.elements[n] = t[n + e];
            return this;
        }
        toArray(t = [], e = 0) {
            const n = this.elements;
            return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t;
        }
        clone() {
            return (new this.constructor).fromArray(this.elements);
        }
    }
    function Lt1(t) {
        for(let e = t.length - 1; e >= 0; --e)if (t[e] > 65535) return !0;
        return !1;
    }
    Ct1.prototype.isMatrix3 = !0;
    const Pt1 = {
        Int8Array: Int8Array,
        Uint8Array: Uint8Array,
        Uint8ClampedArray: Uint8ClampedArray,
        Int16Array: Int16Array,
        Uint16Array: Uint16Array,
        Int32Array: Int32Array,
        Uint32Array: Uint32Array,
        Float32Array: Float32Array,
        Float64Array: Float64Array
    };
    function Dt1(t, e) {
        return new Pt1[t](e);
    }
    function It(t) {
        return document.createElementNS("http://www.w3.org/1999/xhtml", t);
    }
    function Nt1(t) {
        return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4);
    }
    function Bt1(t) {
        return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055;
    }
    const Ot1 = {
        [lt1]: {
            [ct1]: Nt1
        },
        [ct1]: {
            [lt1]: Bt1
        }
    }, zt = {
        legacyMode: !0,
        get workingColorSpace () {
            return ct1;
        },
        set workingColorSpace (t){
            console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
        },
        convert: function(t, e, n) {
            if (this.legacyMode || e === n || !e || !n) return t;
            if (Ot1[e] && void 0 !== Ot1[e][n]) {
                const i = Ot1[e][n];
                return t.r = i(t.r), t.g = i(t.g), t.b = i(t.b), t;
            }
            throw new Error("Unsupported color space conversion.");
        },
        fromWorkingColorSpace: function(t, e) {
            return this.convert(t, this.workingColorSpace, e);
        },
        toWorkingColorSpace: function(t, e) {
            return this.convert(t, e, this.workingColorSpace);
        }
    }, Ut = {
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
        yellowgreen: 10145074
    }, Ft = {
        r: 0,
        g: 0,
        b: 0
    }, Ht = {
        h: 0,
        s: 0,
        l: 0
    }, Gt = {
        h: 0,
        s: 0,
        l: 0
    };
    function kt(t, e, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t;
    }
    function Vt(t, e) {
        return e.r = t.r, e.g = t.g, e.b = t.b, e;
    }
    class Wt {
        constructor(t, e, n){
            return void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n);
        }
        set(t) {
            return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this;
        }
        setScalar(t) {
            return this.r = t, this.g = t, this.b = t, this;
        }
        setHex(t, e = "srgb") {
            return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, zt.toWorkingColorSpace(this, e), this;
        }
        setRGB(t, e, n, i = "srgb-linear") {
            return this.r = t, this.g = e, this.b = n, zt.toWorkingColorSpace(this, i), this;
        }
        setHSL(t, e, n, i = "srgb-linear") {
            if (t = Mt1(t, 1), e = bt1(e, 0, 1), n = bt1(n, 0, 1), 0 === e) this.r = this.g = this.b = n;
            else {
                const i = n <= .5 ? n * (1 + e) : n + e - n * e, r = 2 * n - i;
                this.r = kt(r, i, t + 1 / 3), this.g = kt(r, i, t), this.b = kt(r, i, t - 1 / 3);
            }
            return zt.toWorkingColorSpace(this, i), this;
        }
        setStyle(t, e3 = "srgb") {
            function n(e) {
                void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
            }
            let i;
            if (i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)) {
                let t;
                const r = i[1], s = i[2];
                switch(r){
                    case "rgb":
                    case "rgba":
                        if (t = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return this.r = Math.min(255, parseInt(t[1], 10)) / 255, this.g = Math.min(255, parseInt(t[2], 10)) / 255, this.b = Math.min(255, parseInt(t[3], 10)) / 255, zt.toWorkingColorSpace(this, e3), n(t[4]), this;
                        if (t = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return this.r = Math.min(100, parseInt(t[1], 10)) / 100, this.g = Math.min(100, parseInt(t[2], 10)) / 100, this.b = Math.min(100, parseInt(t[3], 10)) / 100, zt.toWorkingColorSpace(this, e3), n(t[4]), this;
                        break;
                    case "hsl":
                    case "hsla":
                        if (t = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) {
                            const i = parseFloat(t[1]) / 360, r = parseInt(t[2], 10) / 100, s = parseInt(t[3], 10) / 100;
                            return n(t[4]), this.setHSL(i, r, s, e3);
                        }
                }
            } else if (i = /^\#([A-Fa-f\d]+)$/.exec(t)) {
                const t = i[1], n = t.length;
                if (3 === n) return this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255, this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255, this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255, zt.toWorkingColorSpace(this, e3), this;
                if (6 === n) return this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255, this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255, this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255, zt.toWorkingColorSpace(this, e3), this;
            }
            return t && t.length > 0 ? this.setColorName(t, e3) : this;
        }
        setColorName(t, e = "srgb") {
            const n = Ut[t.toLowerCase()];
            return void 0 !== n ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t), this;
        }
        clone() {
            return new this.constructor(this.r, this.g, this.b);
        }
        copy(t) {
            return this.r = t.r, this.g = t.g, this.b = t.b, this;
        }
        copySRGBToLinear(t) {
            return this.r = Nt1(t.r), this.g = Nt1(t.g), this.b = Nt1(t.b), this;
        }
        copyLinearToSRGB(t) {
            return this.r = Bt1(t.r), this.g = Bt1(t.g), this.b = Bt1(t.b), this;
        }
        convertSRGBToLinear() {
            return this.copySRGBToLinear(this), this;
        }
        convertLinearToSRGB() {
            return this.copyLinearToSRGB(this), this;
        }
        getHex(t = "srgb") {
            return zt.fromWorkingColorSpace(Vt(this, Ft), t), bt1(255 * Ft.r, 0, 255) << 16 ^ bt1(255 * Ft.g, 0, 255) << 8 ^ bt1(255 * Ft.b, 0, 255) << 0;
        }
        getHexString(t = "srgb") {
            return ("000000" + this.getHex(t).toString(16)).slice(-6);
        }
        getHSL(t, e = "srgb-linear") {
            zt.fromWorkingColorSpace(Vt(this, Ft), e);
            const n = Ft.r, i = Ft.g, r = Ft.b, s = Math.max(n, i, r), a = Math.min(n, i, r);
            let o, l;
            const c = (a + s) / 2;
            if (a === s) o = 0, l = 0;
            else {
                const t = s - a;
                switch(l = c <= .5 ? t / (s + a) : t / (2 - s - a), s){
                    case n:
                        o = (i - r) / t + (i < r ? 6 : 0);
                        break;
                    case i:
                        o = (r - n) / t + 2;
                        break;
                    case r:
                        o = (n - i) / t + 4;
                }
                o /= 6;
            }
            return t.h = o, t.s = l, t.l = c, t;
        }
        getRGB(t, e = "srgb-linear") {
            return zt.fromWorkingColorSpace(Vt(this, Ft), e), t.r = Ft.r, t.g = Ft.g, t.b = Ft.b, t;
        }
        getStyle(t = "srgb") {
            return zt.fromWorkingColorSpace(Vt(this, Ft), t), t !== lt1 ? `color(${t} ${Ft.r} ${Ft.g} ${Ft.b})` : `rgb(${255 * Ft.r | 0},${255 * Ft.g | 0},${255 * Ft.b | 0})`;
        }
        offsetHSL(t, e, n) {
            return this.getHSL(Ht), Ht.h += t, Ht.s += e, Ht.l += n, this.setHSL(Ht.h, Ht.s, Ht.l), this;
        }
        add(t) {
            return this.r += t.r, this.g += t.g, this.b += t.b, this;
        }
        addColors(t, e) {
            return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
        }
        addScalar(t) {
            return this.r += t, this.g += t, this.b += t, this;
        }
        sub(t) {
            return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
        }
        multiply(t) {
            return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
        }
        multiplyScalar(t) {
            return this.r *= t, this.g *= t, this.b *= t, this;
        }
        lerp(t, e) {
            return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
        }
        lerpColors(t, e, n) {
            return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this;
        }
        lerpHSL(t, e) {
            this.getHSL(Ht), t.getHSL(Gt);
            const n = wt1(Ht.h, Gt.h, e), i = wt1(Ht.s, Gt.s, e), r = wt1(Ht.l, Gt.l, e);
            return this.setHSL(n, i, r), this;
        }
        equals(t) {
            return t.r === this.r && t.g === this.g && t.b === this.b;
        }
        fromArray(t, e = 0) {
            return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
        }
        toArray(t = [], e = 0) {
            return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
        }
        fromBufferAttribute(t, e) {
            return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), !0 === t.normalized && (this.r /= 255, this.g /= 255, this.b /= 255), this;
        }
        toJSON() {
            return this.getHex();
        }
    }
    let jt;
    Wt.NAMES = Ut, Wt.prototype.isColor = !0, Wt.prototype.r = 1, Wt.prototype.g = 1, Wt.prototype.b = 1;
    class qt {
        static getDataURL(t) {
            if (/^data:/i.test(t.src)) return t.src;
            if ("undefined" == typeof HTMLCanvasElement) return t.src;
            let e;
            if (t instanceof HTMLCanvasElement) e = t;
            else {
                void 0 === jt && (jt = It("canvas")), jt.width = t.width, jt.height = t.height;
                const n = jt.getContext("2d");
                t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = jt;
            }
            return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png");
        }
        static sRGBToLinear(t) {
            if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
                const e = It("canvas");
                e.width = t.width, e.height = t.height;
                const n = e.getContext("2d");
                n.drawImage(t, 0, 0, t.width, t.height);
                const i = n.getImageData(0, 0, t.width, t.height), r = i.data;
                for(let t10 = 0; t10 < r.length; t10++)r[t10] = 255 * Nt1(r[t10] / 255);
                return n.putImageData(i, 0, 0), e;
            }
            if (t.data) {
                const e = t.data.slice(0);
                for(let t11 = 0; t11 < e.length; t11++)e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[t11] = Math.floor(255 * Nt1(e[t11] / 255)) : e[t11] = Nt1(e[t11]);
                return {
                    data: e,
                    width: t.width,
                    height: t.height
                };
            }
            return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
        }
    }
    class Xt {
        constructor(t = null){
            this.uuid = _t1(), this.data = t, this.version = 0;
        }
        set needsUpdate(t) {
            !0 === t && this.version++;
        }
        toJSON(t) {
            const e = void 0 === t || "string" == typeof t;
            if (!e && void 0 !== t.images[this.uuid]) return t.images[this.uuid];
            const n = {
                uuid: this.uuid,
                url: ""
            }, i = this.data;
            if (null !== i) {
                let t;
                if (Array.isArray(i)) {
                    t = [];
                    for(let e = 0, n = i.length; e < n; e++)i[e].isDataTexture ? t.push(Jt(i[e].image)) : t.push(Jt(i[e]));
                } else t = Jt(i);
                n.url = t;
            }
            return e || (t.images[this.uuid] = n), n;
        }
    }
    function Jt(t) {
        return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? qt.getDataURL(t) : t.data ? {
            data: Array.prototype.slice.call(t.data),
            width: t.width,
            height: t.height,
            type: t.data.constructor.name
        } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
    }
    Xt.prototype.isSource = !0;
    let Yt = 0;
    class Zt extends ft1 {
        constructor(t = Zt.DEFAULT_IMAGE, e = Zt.DEFAULT_MAPPING, n = 1001, i = 1001, r = 1006, s = 1008, a = 1023, o = 1009, l = 1, c = 3e3){
            super(), Object.defineProperty(this, "id", {
                value: Yt++
            }), this.uuid = _t1(), this.name = "", this.source = new Xt(t), this.mipmaps = [], this.mapping = e, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = s, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = o, this.offset = new Rt(0, 0), this.repeat = new Rt(1, 1), this.center = new Rt(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ct1, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = c, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
        }
        get image() {
            return this.source.data;
        }
        set image(t) {
            this.source.data = t;
        }
        updateMatrix() {
            this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t) {
            return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this;
        }
        toJSON(t) {
            const e = void 0 === t || "string" == typeof t;
            if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
            const n = {
                metadata: {
                    version: 4.5,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                image: this.source.toJSON(t).uuid,
                mapping: this.mapping,
                repeat: [
                    this.repeat.x,
                    this.repeat.y
                ],
                offset: [
                    this.offset.x,
                    this.offset.y
                ],
                center: [
                    this.center.x,
                    this.center.y
                ],
                rotation: this.rotation,
                wrap: [
                    this.wrapS,
                    this.wrapT
                ],
                format: this.format,
                type: this.type,
                encoding: this.encoding,
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY,
                premultiplyAlpha: this.premultiplyAlpha,
                unpackAlignment: this.unpackAlignment
            };
            return "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), e || (t.textures[this.uuid] = n), n;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
        transformUv(t) {
            if (this.mapping !== i1) return t;
            if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch(this.wrapS){
                case c1:
                    t.x = t.x - Math.floor(t.x);
                    break;
                case h1:
                    t.x = t.x < 0 ? 0 : 1;
                    break;
                case u1:
                    1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
            }
            if (t.y < 0 || t.y > 1) switch(this.wrapT){
                case c1:
                    t.y = t.y - Math.floor(t.y);
                    break;
                case h1:
                    t.y = t.y < 0 ? 0 : 1;
                    break;
                case u1:
                    1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
            }
            return this.flipY && (t.y = 1 - t.y), t;
        }
        set needsUpdate(t) {
            !0 === t && (this.version++, this.source.needsUpdate = !0);
        }
    }
    Zt.DEFAULT_IMAGE = null, Zt.DEFAULT_MAPPING = i1, Zt.prototype.isTexture = !0;
    class Kt {
        constructor(t = 0, e = 0, n = 0, i = 1){
            this.x = t, this.y = e, this.z = n, this.w = i;
        }
        get width() {
            return this.z;
        }
        set width(t) {
            this.z = t;
        }
        get height() {
            return this.w;
        }
        set height(t) {
            this.w = t;
        }
        set(t, e, n, i) {
            return this.x = t, this.y = e, this.z = n, this.w = i, this;
        }
        setScalar(t) {
            return this.x = t, this.y = t, this.z = t, this.w = t, this;
        }
        setX(t) {
            return this.x = t, this;
        }
        setY(t) {
            return this.y = t, this;
        }
        setZ(t) {
            return this.z = t, this;
        }
        setW(t) {
            return this.w = t, this;
        }
        setComponent(t, e) {
            switch(t){
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                case 3:
                    this.w = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t);
            }
            return this;
        }
        getComponent(t) {
            switch(t){
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw new Error("index is out of range: " + t);
            }
        }
        clone() {
            return new this.constructor(this.x, this.y, this.z, this.w);
        }
        copy(t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this;
        }
        add(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this);
        }
        addScalar(t) {
            return this.x += t, this.y += t, this.z += t, this.w += t, this;
        }
        addVectors(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
        }
        addScaledVector(t, e) {
            return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
        }
        sub(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this);
        }
        subScalar(t) {
            return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
        }
        subVectors(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
        }
        multiply(t) {
            return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
        }
        multiplyScalar(t) {
            return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
        }
        applyMatrix4(t) {
            const e = this.x, n = this.y, i = this.z, r = this.w, s = t.elements;
            return this.x = s[0] * e + s[4] * n + s[8] * i + s[12] * r, this.y = s[1] * e + s[5] * n + s[9] * i + s[13] * r, this.z = s[2] * e + s[6] * n + s[10] * i + s[14] * r, this.w = s[3] * e + s[7] * n + s[11] * i + s[15] * r, this;
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t);
        }
        setAxisAngleFromQuaternion(t) {
            this.w = 2 * Math.acos(t.w);
            const e = Math.sqrt(1 - t.w * t.w);
            return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
        }
        setAxisAngleFromRotationMatrix(t) {
            let e, n, i, r;
            const s = .01, a = .1, o = t.elements, l = o[0], c = o[4], h = o[8], u = o[1], d = o[5], p = o[9], m = o[2], f = o[6], g = o[10];
            if (Math.abs(c - u) < s && Math.abs(h - m) < s && Math.abs(p - f) < s) {
                if (Math.abs(c + u) < a && Math.abs(h + m) < a && Math.abs(p + f) < a && Math.abs(l + d + g - 3) < a) return this.set(1, 0, 0, 0), this;
                e = Math.PI;
                const t = (l + 1) / 2, o = (d + 1) / 2, v = (g + 1) / 2, y = (c + u) / 4, x = (h + m) / 4, _ = (p + f) / 4;
                return t > o && t > v ? t < s ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(t), i = y / n, r = x / n) : o > v ? o < s ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(o), n = y / i, r = _ / i) : v < s ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(v), n = x / r, i = _ / r), this.set(n, i, r, e), this;
            }
            let v = Math.sqrt((f - p) * (f - p) + (h - m) * (h - m) + (u - c) * (u - c));
            return Math.abs(v) < .001 && (v = 1), this.x = (f - p) / v, this.y = (h - m) / v, this.z = (u - c) / v, this.w = Math.acos((l + d + g - 1) / 2), this;
        }
        min(t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
        }
        max(t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
        }
        clamp(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this;
        }
        clampScalar(t, e) {
            return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this;
        }
        clampLength(t, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
        }
        floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
        }
        ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
        }
        round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
        }
        negate() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
        }
        dot(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
        }
        normalize() {
            return this.divideScalar(this.length() || 1);
        }
        setLength(t) {
            return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
        }
        lerpVectors(t, e, n) {
            return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this;
        }
        equals(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
        }
        fromArray(t, e = 0) {
            return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
        }
        toArray(t = [], e = 0) {
            return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
        }
        fromBufferAttribute(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
        }
        *[Symbol.iterator]() {
            yield this.x, yield this.y, yield this.z, yield this.w;
        }
    }
    Kt.prototype.isVector4 = !0;
    class Qt extends ft1 {
        constructor(t, e, n = {}){
            super(), this.width = t, this.height = e, this.depth = 1, this.scissor = new Kt(0, 0, t, e), this.scissorTest = !1, this.viewport = new Kt(0, 0, t, e);
            const i = {
                width: t,
                height: e,
                depth: 1
            };
            this.texture = new Zt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps, this.texture.internalFormat = void 0 !== n.internalFormat ? n.internalFormat : null, this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : f1, this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer, this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null, this.samples = void 0 !== n.samples ? n.samples : 0;
        }
        setSize(t, e, n = 1) {
            this.width === t && this.height === e && this.depth === n || (this.width = t, this.height = e, this.depth = n, this.texture.image.width = t, this.texture.image.height = e, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t) {
            return this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.texture.isRenderTargetTexture = !0, this.texture.image = Object.assign({}, t.texture.image), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, null !== t.depthTexture && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
    }
    Qt.prototype.isWebGLRenderTarget = !0;
    class $t extends Zt {
        constructor(t = null, e = 1, n = 1, i = 1){
            super(null), this.image = {
                data: t,
                width: e,
                height: n,
                depth: i
            }, this.magFilter = d1, this.minFilter = d1, this.wrapR = h1, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
        }
    }
    $t.prototype.isDataArrayTexture = !0;
    class te extends Qt {
        constructor(t, e, n){
            super(t, e), this.depth = n, this.texture = new $t(null, t, e, n), this.texture.isRenderTargetTexture = !0;
        }
    }
    te.prototype.isWebGLArrayRenderTarget = !0;
    class ee extends Zt {
        constructor(t = null, e = 1, n = 1, i = 1){
            super(null), this.image = {
                data: t,
                width: e,
                height: n,
                depth: i
            }, this.magFilter = d1, this.minFilter = d1, this.wrapR = h1, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
        }
    }
    ee.prototype.isData3DTexture = !0;
    class ne extends Qt {
        constructor(t, e, n){
            super(t, e), this.depth = n, this.texture = new ee(null, t, e, n), this.texture.isRenderTargetTexture = !0;
        }
    }
    ne.prototype.isWebGL3DRenderTarget = !0;
    class ie extends Qt {
        constructor(t, e, n, i = {}){
            super(t, e, i);
            const r = this.texture;
            this.texture = [];
            for(let t12 = 0; t12 < n; t12++)this.texture[t12] = r.clone(), this.texture[t12].isRenderTargetTexture = !0;
        }
        setSize(t, e, n = 1) {
            if (this.width !== t || this.height !== e || this.depth !== n) {
                this.width = t, this.height = e, this.depth = n;
                for(let i = 0, r = this.texture.length; i < r; i++)this.texture[i].image.width = t, this.texture[i].image.height = e, this.texture[i].image.depth = n;
                this.dispose();
            }
            return this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e), this;
        }
        copy(t) {
            this.dispose(), this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.set(0, 0, this.width, this.height), this.scissor.set(0, 0, this.width, this.height), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this.texture.length = 0;
            for(let e = 0, n = t.texture.length; e < n; e++)this.texture[e] = t.texture[e].clone();
            return this;
        }
    }
    ie.prototype.isWebGLMultipleRenderTargets = !0;
    class re {
        constructor(t = 0, e = 0, n = 0, i = 1){
            this._x = t, this._y = e, this._z = n, this._w = i;
        }
        static slerp(t, e, n, i) {
            return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."), n.slerpQuaternions(t, e, i);
        }
        static slerpFlat(t, e, n, i, r, s, a) {
            let o = n[i + 0], l = n[i + 1], c = n[i + 2], h = n[i + 3];
            const u = r[s + 0], d = r[s + 1], p = r[s + 2], m = r[s + 3];
            if (0 === a) return t[e + 0] = o, t[e + 1] = l, t[e + 2] = c, void (t[e + 3] = h);
            if (1 === a) return t[e + 0] = u, t[e + 1] = d, t[e + 2] = p, void (t[e + 3] = m);
            if (h !== m || o !== u || l !== d || c !== p) {
                let t = 1 - a;
                const e = o * u + l * d + c * p + h * m, n = e >= 0 ? 1 : -1, i = 1 - e * e;
                if (i > Number.EPSILON) {
                    const r = Math.sqrt(i), s = Math.atan2(r, e * n);
                    t = Math.sin(t * s) / r, a = Math.sin(a * s) / r;
                }
                const r = a * n;
                if (o = o * t + u * r, l = l * t + d * r, c = c * t + p * r, h = h * t + m * r, t === 1 - a) {
                    const t = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
                    o *= t, l *= t, c *= t, h *= t;
                }
            }
            t[e] = o, t[e + 1] = l, t[e + 2] = c, t[e + 3] = h;
        }
        static multiplyQuaternionsFlat(t, e, n, i, r, s) {
            const a = n[i], o = n[i + 1], l = n[i + 2], c = n[i + 3], h = r[s], u = r[s + 1], d = r[s + 2], p = r[s + 3];
            return t[e] = a * p + c * h + o * d - l * u, t[e + 1] = o * p + c * u + l * h - a * d, t[e + 2] = l * p + c * d + a * u - o * h, t[e + 3] = c * p - a * h - o * u - l * d, t;
        }
        get x() {
            return this._x;
        }
        set x(t) {
            this._x = t, this._onChangeCallback();
        }
        get y() {
            return this._y;
        }
        set y(t) {
            this._y = t, this._onChangeCallback();
        }
        get z() {
            return this._z;
        }
        set z(t) {
            this._z = t, this._onChangeCallback();
        }
        get w() {
            return this._w;
        }
        set w(t) {
            this._w = t, this._onChangeCallback();
        }
        set(t, e, n, i) {
            return this._x = t, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this;
        }
        clone() {
            return new this.constructor(this._x, this._y, this._z, this._w);
        }
        copy(t) {
            return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
        }
        setFromEuler(t, e) {
            if (!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
            const n = t._x, i = t._y, r = t._z, s = t._order, a = Math.cos, o = Math.sin, l = a(n / 2), c = a(i / 2), h = a(r / 2), u = o(n / 2), d = o(i / 2), p = o(r / 2);
            switch(s){
                case "XYZ":
                    this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
                    break;
                case "YXZ":
                    this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
                    break;
                case "ZXY":
                    this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
                    break;
                case "ZYX":
                    this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
                    break;
                case "YZX":
                    this._x = u * c * h + l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h - u * d * p;
                    break;
                case "XZY":
                    this._x = u * c * h - l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h + u * d * p;
                    break;
                default:
                    console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s);
            }
            return !1 !== e && this._onChangeCallback(), this;
        }
        setFromAxisAngle(t, e) {
            const n = e / 2, i = Math.sin(n);
            return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
        }
        setFromRotationMatrix(t) {
            const e = t.elements, n = e[0], i = e[4], r = e[8], s = e[1], a = e[5], o = e[9], l = e[2], c = e[6], h = e[10], u = n + a + h;
            if (u > 0) {
                const t = .5 / Math.sqrt(u + 1);
                this._w = .25 / t, this._x = (c - o) * t, this._y = (r - l) * t, this._z = (s - i) * t;
            } else if (n > a && n > h) {
                const t = 2 * Math.sqrt(1 + n - a - h);
                this._w = (c - o) / t, this._x = .25 * t, this._y = (i + s) / t, this._z = (r + l) / t;
            } else if (a > h) {
                const t = 2 * Math.sqrt(1 + a - n - h);
                this._w = (r - l) / t, this._x = (i + s) / t, this._y = .25 * t, this._z = (o + c) / t;
            } else {
                const t = 2 * Math.sqrt(1 + h - n - a);
                this._w = (s - i) / t, this._x = (r + l) / t, this._y = (o + c) / t, this._z = .25 * t;
            }
            return this._onChangeCallback(), this;
        }
        setFromUnitVectors(t, e) {
            let n = t.dot(e) + 1;
            return n < Number.EPSILON ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize();
        }
        angleTo(t) {
            return 2 * Math.acos(Math.abs(bt1(this.dot(t), -1, 1)));
        }
        rotateTowards(t, e) {
            const n = this.angleTo(t);
            if (0 === n) return this;
            const i = Math.min(1, e / n);
            return this.slerp(t, i), this;
        }
        identity() {
            return this.set(0, 0, 0, 1);
        }
        invert() {
            return this.conjugate();
        }
        conjugate() {
            return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
        }
        dot(t) {
            return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
        }
        lengthSq() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
        }
        length() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
        }
        normalize() {
            let t = this.length();
            return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
        }
        multiply(t, e) {
            return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t);
        }
        premultiply(t) {
            return this.multiplyQuaternions(t, this);
        }
        multiplyQuaternions(t, e) {
            const n = t._x, i = t._y, r = t._z, s = t._w, a = e._x, o = e._y, l = e._z, c = e._w;
            return this._x = n * c + s * a + i * l - r * o, this._y = i * c + s * o + r * a - n * l, this._z = r * c + s * l + n * o - i * a, this._w = s * c - n * a - i * o - r * l, this._onChangeCallback(), this;
        }
        slerp(t, e) {
            if (0 === e) return this;
            if (1 === e) return this.copy(t);
            const n = this._x, i = this._y, r = this._z, s = this._w;
            let a = s * t._w + n * t._x + i * t._y + r * t._z;
            if (a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1) return this._w = s, this._x = n, this._y = i, this._z = r, this;
            const o = 1 - a * a;
            if (o <= Number.EPSILON) {
                const t = 1 - e;
                return this._w = t * s + e * this._w, this._x = t * n + e * this._x, this._y = t * i + e * this._y, this._z = t * r + e * this._z, this.normalize(), this._onChangeCallback(), this;
            }
            const l = Math.sqrt(o), c = Math.atan2(l, a), h = Math.sin((1 - e) * c) / l, u = Math.sin(e * c) / l;
            return this._w = s * h + this._w * u, this._x = n * h + this._x * u, this._y = i * h + this._y * u, this._z = r * h + this._z * u, this._onChangeCallback(), this;
        }
        slerpQuaternions(t, e, n) {
            return this.copy(t).slerp(e, n);
        }
        random() {
            const t = Math.random(), e = Math.sqrt(1 - t), n = Math.sqrt(t), i = 2 * Math.PI * Math.random(), r = 2 * Math.PI * Math.random();
            return this.set(e * Math.cos(i), n * Math.sin(r), n * Math.cos(r), e * Math.sin(i));
        }
        equals(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
        }
        fromArray(t, e = 0) {
            return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
        }
        toArray(t = [], e = 0) {
            return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
        }
        fromBufferAttribute(t, e) {
            return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this;
        }
        _onChange(t) {
            return this._onChangeCallback = t, this;
        }
        _onChangeCallback() {}
    }
    re.prototype.isQuaternion = !0;
    class se {
        constructor(t = 0, e = 0, n = 0){
            this.x = t, this.y = e, this.z = n;
        }
        set(t, e, n) {
            return void 0 === n && (n = this.z), this.x = t, this.y = e, this.z = n, this;
        }
        setScalar(t) {
            return this.x = t, this.y = t, this.z = t, this;
        }
        setX(t) {
            return this.x = t, this;
        }
        setY(t) {
            return this.y = t, this;
        }
        setZ(t) {
            return this.z = t, this;
        }
        setComponent(t, e) {
            switch(t){
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t);
            }
            return this;
        }
        getComponent(t) {
            switch(t){
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw new Error("index is out of range: " + t);
            }
        }
        clone() {
            return new this.constructor(this.x, this.y, this.z);
        }
        copy(t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this;
        }
        add(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this);
        }
        addScalar(t) {
            return this.x += t, this.y += t, this.z += t, this;
        }
        addVectors(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
        }
        addScaledVector(t, e) {
            return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
        }
        sub(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this);
        }
        subScalar(t) {
            return this.x -= t, this.y -= t, this.z -= t, this;
        }
        subVectors(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
        }
        multiply(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this);
        }
        multiplyScalar(t) {
            return this.x *= t, this.y *= t, this.z *= t, this;
        }
        multiplyVectors(t, e) {
            return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
        }
        applyEuler(t) {
            return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(oe.setFromEuler(t));
        }
        applyAxisAngle(t, e) {
            return this.applyQuaternion(oe.setFromAxisAngle(t, e));
        }
        applyMatrix3(t) {
            const e = this.x, n = this.y, i = this.z, r = t.elements;
            return this.x = r[0] * e + r[3] * n + r[6] * i, this.y = r[1] * e + r[4] * n + r[7] * i, this.z = r[2] * e + r[5] * n + r[8] * i, this;
        }
        applyNormalMatrix(t) {
            return this.applyMatrix3(t).normalize();
        }
        applyMatrix4(t) {
            const e = this.x, n = this.y, i = this.z, r = t.elements, s = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
            return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * s, this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * s, this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * s, this;
        }
        applyQuaternion(t) {
            const e = this.x, n = this.y, i = this.z, r = t.x, s = t.y, a = t.z, o = t.w, l = o * e + s * i - a * n, c = o * n + a * e - r * i, h = o * i + r * n - s * e, u = -r * e - s * n - a * i;
            return this.x = l * o + u * -r + c * -a - h * -s, this.y = c * o + u * -s + h * -r - l * -a, this.z = h * o + u * -a + l * -s - c * -r, this;
        }
        project(t) {
            return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
        }
        unproject(t) {
            return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
        }
        transformDirection(t) {
            const e = this.x, n = this.y, i = this.z, r = t.elements;
            return this.x = r[0] * e + r[4] * n + r[8] * i, this.y = r[1] * e + r[5] * n + r[9] * i, this.z = r[2] * e + r[6] * n + r[10] * i, this.normalize();
        }
        divide(t) {
            return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t);
        }
        min(t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
        }
        max(t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
        }
        clamp(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this;
        }
        clampScalar(t, e) {
            return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this;
        }
        clampLength(t, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
        }
        floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
        }
        ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
        }
        round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
        }
        negate() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
        }
        dot(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z;
        }
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
        setLength(t) {
            return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
        }
        lerpVectors(t, e, n) {
            return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this;
        }
        cross(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)) : this.crossVectors(this, t);
        }
        crossVectors(t, e) {
            const n = t.x, i = t.y, r = t.z, s = e.x, a = e.y, o = e.z;
            return this.x = i * o - r * a, this.y = r * s - n * o, this.z = n * a - i * s, this;
        }
        projectOnVector(t) {
            const e = t.lengthSq();
            if (0 === e) return this.set(0, 0, 0);
            const n = t.dot(this) / e;
            return this.copy(t).multiplyScalar(n);
        }
        projectOnPlane(t) {
            return ae.copy(this).projectOnVector(t), this.sub(ae);
        }
        reflect(t) {
            return this.sub(ae.copy(t).multiplyScalar(2 * this.dot(t)));
        }
        angleTo(t) {
            const e = Math.sqrt(this.lengthSq() * t.lengthSq());
            if (0 === e) return Math.PI / 2;
            const n = this.dot(t) / e;
            return Math.acos(bt1(n, -1, 1));
        }
        distanceTo(t) {
            return Math.sqrt(this.distanceToSquared(t));
        }
        distanceToSquared(t) {
            const e = this.x - t.x, n = this.y - t.y, i = this.z - t.z;
            return e * e + n * n + i * i;
        }
        manhattanDistanceTo(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
        }
        setFromSpherical(t) {
            return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
        }
        setFromSphericalCoords(t, e, n) {
            const i = Math.sin(e) * t;
            return this.x = i * Math.sin(n), this.y = Math.cos(e) * t, this.z = i * Math.cos(n), this;
        }
        setFromCylindrical(t) {
            return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
        }
        setFromCylindricalCoords(t, e, n) {
            return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this;
        }
        setFromMatrixPosition(t) {
            const e = t.elements;
            return this.x = e[12], this.y = e[13], this.z = e[14], this;
        }
        setFromMatrixScale(t) {
            const e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(), i = this.setFromMatrixColumn(t, 2).length();
            return this.x = e, this.y = n, this.z = i, this;
        }
        setFromMatrixColumn(t, e) {
            return this.fromArray(t.elements, 4 * e);
        }
        setFromMatrix3Column(t, e) {
            return this.fromArray(t.elements, 3 * e);
        }
        setFromEuler(t) {
            return this.x = t._x, this.y = t._y, this.z = t._z, this;
        }
        equals(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z;
        }
        fromArray(t, e = 0) {
            return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
        }
        toArray(t = [], e = 0) {
            return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
        }
        fromBufferAttribute(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
        }
        randomDirection() {
            const t = 2 * (Math.random() - .5), e = Math.random() * Math.PI * 2, n = Math.sqrt(1 - t ** 2);
            return this.x = n * Math.cos(e), this.y = n * Math.sin(e), this.z = t, this;
        }
        *[Symbol.iterator]() {
            yield this.x, yield this.y, yield this.z;
        }
    }
    se.prototype.isVector3 = !0;
    const ae = new se, oe = new re;
    class le {
        constructor(t = new se(1 / 0, 1 / 0, 1 / 0), e = new se(-1 / 0, -1 / 0, -1 / 0)){
            this.min = t, this.max = e;
        }
        set(t, e) {
            return this.min.copy(t), this.max.copy(e), this;
        }
        setFromArray(t) {
            let e = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, s = -1 / 0, a = -1 / 0;
            for(let o = 0, l = t.length; o < l; o += 3){
                const l = t[o], c = t[o + 1], h = t[o + 2];
                l < e && (e = l), c < n && (n = c), h < i && (i = h), l > r && (r = l), c > s && (s = c), h > a && (a = h);
            }
            return this.min.set(e, n, i), this.max.set(r, s, a), this;
        }
        setFromBufferAttribute(t) {
            let e = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, s = -1 / 0, a = -1 / 0;
            for(let o = 0, l = t.count; o < l; o++){
                const l = t.getX(o), c = t.getY(o), h = t.getZ(o);
                l < e && (e = l), c < n && (n = c), h < i && (i = h), l > r && (r = l), c > s && (s = c), h > a && (a = h);
            }
            return this.min.set(e, n, i), this.max.set(r, s, a), this;
        }
        setFromPoints(t) {
            this.makeEmpty();
            for(let e = 0, n = t.length; e < n; e++)this.expandByPoint(t[e]);
            return this;
        }
        setFromCenterAndSize(t, e) {
            const n = he.copy(e).multiplyScalar(.5);
            return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
        }
        setFromObject(t, e = !1) {
            return this.makeEmpty(), this.expandByObject(t, e);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t) {
            return this.min.copy(t.min), this.max.copy(t.max), this;
        }
        makeEmpty() {
            return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
        }
        isEmpty() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
        }
        getCenter(t) {
            return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5);
        }
        getSize(t) {
            return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
        }
        expandByPoint(t) {
            return this.min.min(t), this.max.max(t), this;
        }
        expandByVector(t) {
            return this.min.sub(t), this.max.add(t), this;
        }
        expandByScalar(t) {
            return this.min.addScalar(-t), this.max.addScalar(t), this;
        }
        expandByObject(t, e = !1) {
            t.updateWorldMatrix(!1, !1);
            const n = t.geometry;
            if (void 0 !== n) {
                if (e && null != n.attributes && void 0 !== n.attributes.position) {
                    const e = n.attributes.position;
                    for(let n3 = 0, i = e.count; n3 < i; n3++)he.fromBufferAttribute(e, n3).applyMatrix4(t.matrixWorld), this.expandByPoint(he);
                } else null === n.boundingBox && n.computeBoundingBox(), ue.copy(n.boundingBox), ue.applyMatrix4(t.matrixWorld), this.union(ue);
            }
            const i = t.children;
            for(let t13 = 0, n2 = i.length; t13 < n2; t13++)this.expandByObject(i[t13], e);
            return this;
        }
        containsPoint(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z);
        }
        containsBox(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
        }
        getParameter(t, e) {
            return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z));
        }
        intersectsBox(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z);
        }
        intersectsSphere(t) {
            return this.clampPoint(t.center, he), he.distanceToSquared(t.center) <= t.radius * t.radius;
        }
        intersectsPlane(t) {
            let e, n;
            return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant;
        }
        intersectsTriangle(t) {
            if (this.isEmpty()) return !1;
            this.getCenter(ye), xe.subVectors(this.max, ye), de.subVectors(t.a, ye), pe.subVectors(t.b, ye), me.subVectors(t.c, ye), fe.subVectors(pe, de), ge.subVectors(me, pe), ve.subVectors(de, me);
            let e = [
                0,
                -fe.z,
                fe.y,
                0,
                -ge.z,
                ge.y,
                0,
                -ve.z,
                ve.y,
                fe.z,
                0,
                -fe.x,
                ge.z,
                0,
                -ge.x,
                ve.z,
                0,
                -ve.x,
                -fe.y,
                fe.x,
                0,
                -ge.y,
                ge.x,
                0,
                -ve.y,
                ve.x,
                0
            ];
            return !!Me(e, de, pe, me, xe) && (e = [
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1
            ], !!Me(e, de, pe, me, xe) && (_e.crossVectors(fe, ge), e = [
                _e.x,
                _e.y,
                _e.z
            ], Me(e, de, pe, me, xe)));
        }
        clampPoint(t, e) {
            return e.copy(t).clamp(this.min, this.max);
        }
        distanceToPoint(t) {
            return he.copy(t).clamp(this.min, this.max).sub(t).length();
        }
        getBoundingSphere(t) {
            return this.getCenter(t.center), t.radius = .5 * this.getSize(he).length(), t;
        }
        intersect(t) {
            return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
        }
        union(t) {
            return this.min.min(t.min), this.max.max(t.max), this;
        }
        applyMatrix4(t) {
            return this.isEmpty() || (ce[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), ce[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), ce[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), ce[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), ce[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), ce[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), ce[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), ce[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(ce)), this;
        }
        translate(t) {
            return this.min.add(t), this.max.add(t), this;
        }
        equals(t) {
            return t.min.equals(this.min) && t.max.equals(this.max);
        }
    }
    le.prototype.isBox3 = !0;
    const ce = [
        new se,
        new se,
        new se,
        new se,
        new se,
        new se,
        new se,
        new se
    ], he = new se, ue = new le, de = new se, pe = new se, me = new se, fe = new se, ge = new se, ve = new se, ye = new se, xe = new se, _e = new se, be = new se;
    function Me(t, e, n, i, r) {
        for(let s = 0, a = t.length - 3; s <= a; s += 3){
            be.fromArray(t, s);
            const a = r.x * Math.abs(be.x) + r.y * Math.abs(be.y) + r.z * Math.abs(be.z), o = e.dot(be), l = n.dot(be), c = i.dot(be);
            if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > a) return !1;
        }
        return !0;
    }
    const we = new le, Se = new se, Te = new se, Ee = new se;
    class Ae {
        constructor(t = new se, e = -1){
            this.center = t, this.radius = e;
        }
        set(t, e) {
            return this.center.copy(t), this.radius = e, this;
        }
        setFromPoints(t, e) {
            const n = this.center;
            void 0 !== e ? n.copy(e) : we.setFromPoints(t).getCenter(n);
            let i = 0;
            for(let e4 = 0, r = t.length; e4 < r; e4++)i = Math.max(i, n.distanceToSquared(t[e4]));
            return this.radius = Math.sqrt(i), this;
        }
        copy(t) {
            return this.center.copy(t.center), this.radius = t.radius, this;
        }
        isEmpty() {
            return this.radius < 0;
        }
        makeEmpty() {
            return this.center.set(0, 0, 0), this.radius = -1, this;
        }
        containsPoint(t) {
            return t.distanceToSquared(this.center) <= this.radius * this.radius;
        }
        distanceToPoint(t) {
            return t.distanceTo(this.center) - this.radius;
        }
        intersectsSphere(t) {
            const e = this.radius + t.radius;
            return t.center.distanceToSquared(this.center) <= e * e;
        }
        intersectsBox(t) {
            return t.intersectsSphere(this);
        }
        intersectsPlane(t) {
            return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
        }
        clampPoint(t, e) {
            const n = this.center.distanceToSquared(t);
            return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
        }
        getBoundingBox(t) {
            return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
        }
        applyMatrix4(t) {
            return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
        }
        translate(t) {
            return this.center.add(t), this;
        }
        expandByPoint(t) {
            Ee.subVectors(t, this.center);
            const e = Ee.lengthSq();
            if (e > this.radius * this.radius) {
                const t = Math.sqrt(e), n = .5 * (t - this.radius);
                this.center.add(Ee.multiplyScalar(n / t)), this.radius += n;
            }
            return this;
        }
        union(t) {
            return !0 === this.center.equals(t.center) ? Te.set(0, 0, 1).multiplyScalar(t.radius) : Te.subVectors(t.center, this.center).normalize().multiplyScalar(t.radius), this.expandByPoint(Se.copy(t.center).add(Te)), this.expandByPoint(Se.copy(t.center).sub(Te)), this;
        }
        equals(t) {
            return t.center.equals(this.center) && t.radius === this.radius;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    const Re = new se, Ce = new se, Le = new se, Pe = new se, De = new se, Ie = new se, Ne = new se;
    class Be {
        constructor(t = new se, e = new se(0, 0, -1)){
            this.origin = t, this.direction = e;
        }
        set(t, e) {
            return this.origin.copy(t), this.direction.copy(e), this;
        }
        copy(t) {
            return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
        }
        at(t, e) {
            return e.copy(this.direction).multiplyScalar(t).add(this.origin);
        }
        lookAt(t) {
            return this.direction.copy(t).sub(this.origin).normalize(), this;
        }
        recast(t) {
            return this.origin.copy(this.at(t, Re)), this;
        }
        closestPointToPoint(t, e) {
            e.subVectors(t, this.origin);
            const n = e.dot(this.direction);
            return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin);
        }
        distanceToPoint(t) {
            return Math.sqrt(this.distanceSqToPoint(t));
        }
        distanceSqToPoint(t) {
            const e = Re.subVectors(t, this.origin).dot(this.direction);
            return e < 0 ? this.origin.distanceToSquared(t) : (Re.copy(this.direction).multiplyScalar(e).add(this.origin), Re.distanceToSquared(t));
        }
        distanceSqToSegment(t, e, n, i) {
            Ce.copy(t).add(e).multiplyScalar(.5), Le.copy(e).sub(t).normalize(), Pe.copy(this.origin).sub(Ce);
            const r = .5 * t.distanceTo(e), s = -this.direction.dot(Le), a = Pe.dot(this.direction), o = -Pe.dot(Le), l = Pe.lengthSq(), c = Math.abs(1 - s * s);
            let h, u, d, p;
            if (c > 0) {
                if (h = s * o - a, u = s * a - o, p = r * c, h >= 0) {
                    if (u >= -p) {
                        if (u <= p) {
                            const t = 1 / c;
                            h *= t, u *= t, d = h * (h + s * u + 2 * a) + u * (s * h + u + 2 * o) + l;
                        } else u = r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
                    } else u = -r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
                } else u <= -p ? (h = Math.max(0, -(-s * r + a)), u = h > 0 ? -r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l) : u <= p ? (h = 0, u = Math.min(Math.max(-r, -o), r), d = u * (u + 2 * o) + l) : (h = Math.max(0, -(s * r + a)), u = h > 0 ? r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l);
            } else u = s > 0 ? -r : r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
            return n && n.copy(this.direction).multiplyScalar(h).add(this.origin), i && i.copy(Le).multiplyScalar(u).add(Ce), d;
        }
        intersectSphere(t, e) {
            Re.subVectors(t.center, this.origin);
            const n = Re.dot(this.direction), i = Re.dot(Re) - n * n, r = t.radius * t.radius;
            if (i > r) return null;
            const s = Math.sqrt(r - i), a = n - s, o = n + s;
            return a < 0 && o < 0 ? null : a < 0 ? this.at(o, e) : this.at(a, e);
        }
        intersectsSphere(t) {
            return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
        }
        distanceToPlane(t) {
            const e = t.normal.dot(this.direction);
            if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
            const n = -(this.origin.dot(t.normal) + t.constant) / e;
            return n >= 0 ? n : null;
        }
        intersectPlane(t, e) {
            const n = this.distanceToPlane(t);
            return null === n ? null : this.at(n, e);
        }
        intersectsPlane(t) {
            const e = t.distanceToPoint(this.origin);
            if (0 === e) return !0;
            return t.normal.dot(this.direction) * e < 0;
        }
        intersectBox(t, e) {
            let n, i, r, s, a, o;
            const l = 1 / this.direction.x, c = 1 / this.direction.y, h = 1 / this.direction.z, u = this.origin;
            return l >= 0 ? (n = (t.min.x - u.x) * l, i = (t.max.x - u.x) * l) : (n = (t.max.x - u.x) * l, i = (t.min.x - u.x) * l), c >= 0 ? (r = (t.min.y - u.y) * c, s = (t.max.y - u.y) * c) : (r = (t.max.y - u.y) * c, s = (t.min.y - u.y) * c), n > s || r > i ? null : ((r > n || n != n) && (n = r), (s < i || i != i) && (i = s), h >= 0 ? (a = (t.min.z - u.z) * h, o = (t.max.z - u.z) * h) : (a = (t.max.z - u.z) * h, o = (t.min.z - u.z) * h), n > o || a > i ? null : ((a > n || n != n) && (n = a), (o < i || i != i) && (i = o), i < 0 ? null : this.at(n >= 0 ? n : i, e)));
        }
        intersectsBox(t) {
            return null !== this.intersectBox(t, Re);
        }
        intersectTriangle(t, e, n, i, r) {
            De.subVectors(e, t), Ie.subVectors(n, t), Ne.crossVectors(De, Ie);
            let s, a = this.direction.dot(Ne);
            if (a > 0) {
                if (i) return null;
                s = 1;
            } else {
                if (!(a < 0)) return null;
                s = -1, a = -a;
            }
            Pe.subVectors(this.origin, t);
            const o = s * this.direction.dot(Ie.crossVectors(Pe, Ie));
            if (o < 0) return null;
            const l = s * this.direction.dot(De.cross(Pe));
            if (l < 0) return null;
            if (o + l > a) return null;
            const c = -s * Pe.dot(Ne);
            return c < 0 ? null : this.at(c / a, r);
        }
        applyMatrix4(t) {
            return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
        }
        equals(t) {
            return t.origin.equals(this.origin) && t.direction.equals(this.direction);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    class Oe {
        constructor(){
            this.elements = [
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1
            ], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");
        }
        set(t, e, n, i, r, s, a, o, l, c, h, u, d, p, m, f) {
            const g = this.elements;
            return g[0] = t, g[4] = e, g[8] = n, g[12] = i, g[1] = r, g[5] = s, g[9] = a, g[13] = o, g[2] = l, g[6] = c, g[10] = h, g[14] = u, g[3] = d, g[7] = p, g[11] = m, g[15] = f, this;
        }
        identity() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        }
        clone() {
            return (new Oe).fromArray(this.elements);
        }
        copy(t) {
            const e = this.elements, n = t.elements;
            return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
        }
        copyPosition(t) {
            const e = this.elements, n = t.elements;
            return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
        }
        setFromMatrix3(t) {
            const e = t.elements;
            return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this;
        }
        extractBasis(t, e, n) {
            return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
        }
        makeBasis(t, e, n) {
            return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this;
        }
        extractRotation(t) {
            const e = this.elements, n = t.elements, i = 1 / ze.setFromMatrixColumn(t, 0).length(), r = 1 / ze.setFromMatrixColumn(t, 1).length(), s = 1 / ze.setFromMatrixColumn(t, 2).length();
            return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * s, e[9] = n[9] * s, e[10] = n[10] * s, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
        }
        makeRotationFromEuler(t) {
            t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            const e = this.elements, n = t.x, i = t.y, r = t.z, s = Math.cos(n), a = Math.sin(n), o = Math.cos(i), l = Math.sin(i), c = Math.cos(r), h = Math.sin(r);
            if ("XYZ" === t.order) {
                const t = s * c, n = s * h, i = a * c, r = a * h;
                e[0] = o * c, e[4] = -o * h, e[8] = l, e[1] = n + i * l, e[5] = t - r * l, e[9] = -a * o, e[2] = r - t * l, e[6] = i + n * l, e[10] = s * o;
            } else if ("YXZ" === t.order) {
                const t = o * c, n = o * h, i = l * c, r = l * h;
                e[0] = t + r * a, e[4] = i * a - n, e[8] = s * l, e[1] = s * h, e[5] = s * c, e[9] = -a, e[2] = n * a - i, e[6] = r + t * a, e[10] = s * o;
            } else if ("ZXY" === t.order) {
                const t = o * c, n = o * h, i = l * c, r = l * h;
                e[0] = t - r * a, e[4] = -s * h, e[8] = i + n * a, e[1] = n + i * a, e[5] = s * c, e[9] = r - t * a, e[2] = -s * l, e[6] = a, e[10] = s * o;
            } else if ("ZYX" === t.order) {
                const t = s * c, n = s * h, i = a * c, r = a * h;
                e[0] = o * c, e[4] = i * l - n, e[8] = t * l + r, e[1] = o * h, e[5] = r * l + t, e[9] = n * l - i, e[2] = -l, e[6] = a * o, e[10] = s * o;
            } else if ("YZX" === t.order) {
                const t = s * o, n = s * l, i = a * o, r = a * l;
                e[0] = o * c, e[4] = r - t * h, e[8] = i * h + n, e[1] = h, e[5] = s * c, e[9] = -a * c, e[2] = -l * c, e[6] = n * h + i, e[10] = t - r * h;
            } else if ("XZY" === t.order) {
                const t = s * o, n = s * l, i = a * o, r = a * l;
                e[0] = o * c, e[4] = -h, e[8] = l * c, e[1] = t * h + r, e[5] = s * c, e[9] = n * h - i, e[2] = i * h - n, e[6] = a * c, e[10] = r * h + t;
            }
            return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
        }
        makeRotationFromQuaternion(t) {
            return this.compose(Fe, t, He);
        }
        lookAt(t, e, n) {
            const i = this.elements;
            return Ve.subVectors(t, e), 0 === Ve.lengthSq() && (Ve.z = 1), Ve.normalize(), Ge.crossVectors(n, Ve), 0 === Ge.lengthSq() && (1 === Math.abs(n.z) ? Ve.x += 1e-4 : Ve.z += 1e-4, Ve.normalize(), Ge.crossVectors(n, Ve)), Ge.normalize(), ke.crossVectors(Ve, Ge), i[0] = Ge.x, i[4] = ke.x, i[8] = Ve.x, i[1] = Ge.y, i[5] = ke.y, i[9] = Ve.y, i[2] = Ge.z, i[6] = ke.z, i[10] = Ve.z, this;
        }
        multiply(t, e) {
            return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t);
        }
        premultiply(t) {
            return this.multiplyMatrices(t, this);
        }
        multiplyMatrices(t, e) {
            const n = t.elements, i = e.elements, r = this.elements, s = n[0], a = n[4], o = n[8], l = n[12], c = n[1], h = n[5], u = n[9], d = n[13], p = n[2], m = n[6], f = n[10], g = n[14], v = n[3], y = n[7], x = n[11], _ = n[15], b = i[0], M = i[4], w = i[8], S = i[12], T = i[1], E = i[5], A = i[9], R = i[13], C = i[2], L = i[6], P = i[10], D = i[14], I = i[3], N = i[7], B = i[11], O = i[15];
            return r[0] = s * b + a * T + o * C + l * I, r[4] = s * M + a * E + o * L + l * N, r[8] = s * w + a * A + o * P + l * B, r[12] = s * S + a * R + o * D + l * O, r[1] = c * b + h * T + u * C + d * I, r[5] = c * M + h * E + u * L + d * N, r[9] = c * w + h * A + u * P + d * B, r[13] = c * S + h * R + u * D + d * O, r[2] = p * b + m * T + f * C + g * I, r[6] = p * M + m * E + f * L + g * N, r[10] = p * w + m * A + f * P + g * B, r[14] = p * S + m * R + f * D + g * O, r[3] = v * b + y * T + x * C + _ * I, r[7] = v * M + y * E + x * L + _ * N, r[11] = v * w + y * A + x * P + _ * B, r[15] = v * S + y * R + x * D + _ * O, this;
        }
        multiplyScalar(t) {
            const e = this.elements;
            return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
        }
        determinant() {
            const t = this.elements, e = t[0], n = t[4], i = t[8], r = t[12], s = t[1], a = t[5], o = t[9], l = t[13], c = t[2], h = t[6], u = t[10], d = t[14];
            return t[3] * (+r * o * h - i * l * h - r * a * u + n * l * u + i * a * d - n * o * d) + t[7] * (+e * o * d - e * l * u + r * s * u - i * s * d + i * l * c - r * o * c) + t[11] * (+e * l * h - e * a * d - r * s * h + n * s * d + r * a * c - n * l * c) + t[15] * (-i * a * c - e * o * h + e * a * u + i * s * h - n * s * u + n * o * c);
        }
        transpose() {
            const t = this.elements;
            let e;
            return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
        }
        setPosition(t, e, n) {
            const i = this.elements;
            return t.isVector3 ? (i[12] = t.x, i[13] = t.y, i[14] = t.z) : (i[12] = t, i[13] = e, i[14] = n), this;
        }
        invert() {
            const t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], s = t[4], a = t[5], o = t[6], l = t[7], c = t[8], h = t[9], u = t[10], d = t[11], p = t[12], m = t[13], f = t[14], g = t[15], v = h * f * l - m * u * l + m * o * d - a * f * d - h * o * g + a * u * g, y = p * u * l - c * f * l - p * o * d + s * f * d + c * o * g - s * u * g, x = c * m * l - p * h * l + p * a * d - s * m * d - c * a * g + s * h * g, _ = p * h * o - c * m * o - p * a * u + s * m * u + c * a * f - s * h * f, b = e * v + n * y + i * x + r * _;
            if (0 === b) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            const M = 1 / b;
            return t[0] = v * M, t[1] = (m * u * r - h * f * r - m * i * d + n * f * d + h * i * g - n * u * g) * M, t[2] = (a * f * r - m * o * r + m * i * l - n * f * l - a * i * g + n * o * g) * M, t[3] = (h * o * r - a * u * r - h * i * l + n * u * l + a * i * d - n * o * d) * M, t[4] = y * M, t[5] = (c * f * r - p * u * r + p * i * d - e * f * d - c * i * g + e * u * g) * M, t[6] = (p * o * r - s * f * r - p * i * l + e * f * l + s * i * g - e * o * g) * M, t[7] = (s * u * r - c * o * r + c * i * l - e * u * l - s * i * d + e * o * d) * M, t[8] = x * M, t[9] = (p * h * r - c * m * r - p * n * d + e * m * d + c * n * g - e * h * g) * M, t[10] = (s * m * r - p * a * r + p * n * l - e * m * l - s * n * g + e * a * g) * M, t[11] = (c * a * r - s * h * r - c * n * l + e * h * l + s * n * d - e * a * d) * M, t[12] = _ * M, t[13] = (c * m * i - p * h * i + p * n * u - e * m * u - c * n * f + e * h * f) * M, t[14] = (p * a * i - s * m * i - p * n * o + e * m * o + s * n * f - e * a * f) * M, t[15] = (s * h * i - c * a * i + c * n * o - e * h * o - s * n * u + e * a * u) * M, this;
        }
        scale(t) {
            const e = this.elements, n = t.x, i = t.y, r = t.z;
            return e[0] *= n, e[4] *= i, e[8] *= r, e[1] *= n, e[5] *= i, e[9] *= r, e[2] *= n, e[6] *= i, e[10] *= r, e[3] *= n, e[7] *= i, e[11] *= r, this;
        }
        getMaxScaleOnAxis() {
            const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
            return Math.sqrt(Math.max(e, n, i));
        }
        makeTranslation(t, e, n) {
            return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
        }
        makeRotationX(t) {
            const e = Math.cos(t), n = Math.sin(t);
            return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
        }
        makeRotationY(t) {
            const e = Math.cos(t), n = Math.sin(t);
            return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
        }
        makeRotationZ(t) {
            const e = Math.cos(t), n = Math.sin(t);
            return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        }
        makeRotationAxis(t, e) {
            const n = Math.cos(e), i = Math.sin(e), r = 1 - n, s = t.x, a = t.y, o = t.z, l = r * s, c = r * a;
            return this.set(l * s + n, l * a - i * o, l * o + i * a, 0, l * a + i * o, c * a + n, c * o - i * s, 0, l * o - i * a, c * o + i * s, r * o * o + n, 0, 0, 0, 0, 1), this;
        }
        makeScale(t, e, n) {
            return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
        }
        makeShear(t, e, n, i, r, s) {
            return this.set(1, n, r, 0, t, 1, s, 0, e, i, 1, 0, 0, 0, 0, 1), this;
        }
        compose(t, e, n) {
            const i = this.elements, r = e._x, s = e._y, a = e._z, o = e._w, l = r + r, c = s + s, h = a + a, u = r * l, d = r * c, p = r * h, m = s * c, f = s * h, g = a * h, v = o * l, y = o * c, x = o * h, _ = n.x, b = n.y, M = n.z;
            return i[0] = (1 - (m + g)) * _, i[1] = (d + x) * _, i[2] = (p - y) * _, i[3] = 0, i[4] = (d - x) * b, i[5] = (1 - (u + g)) * b, i[6] = (f + v) * b, i[7] = 0, i[8] = (p + y) * M, i[9] = (f - v) * M, i[10] = (1 - (u + m)) * M, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this;
        }
        decompose(t, e, n) {
            const i = this.elements;
            let r = ze.set(i[0], i[1], i[2]).length();
            const s = ze.set(i[4], i[5], i[6]).length(), a = ze.set(i[8], i[9], i[10]).length();
            this.determinant() < 0 && (r = -r), t.x = i[12], t.y = i[13], t.z = i[14], Ue.copy(this);
            const o = 1 / r, l = 1 / s, c = 1 / a;
            return Ue.elements[0] *= o, Ue.elements[1] *= o, Ue.elements[2] *= o, Ue.elements[4] *= l, Ue.elements[5] *= l, Ue.elements[6] *= l, Ue.elements[8] *= c, Ue.elements[9] *= c, Ue.elements[10] *= c, e.setFromRotationMatrix(Ue), n.x = r, n.y = s, n.z = a, this;
        }
        makePerspective(t, e, n, i, r, s) {
            void 0 === s && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
            const a = this.elements, o = 2 * r / (e - t), l = 2 * r / (n - i), c = (e + t) / (e - t), h = (n + i) / (n - i), u = -(s + r) / (s - r), d = -2 * s * r / (s - r);
            return a[0] = o, a[4] = 0, a[8] = c, a[12] = 0, a[1] = 0, a[5] = l, a[9] = h, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = u, a[14] = d, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this;
        }
        makeOrthographic(t, e, n, i, r, s) {
            const a = this.elements, o = 1 / (e - t), l = 1 / (n - i), c = 1 / (s - r), h = (e + t) * o, u = (n + i) * l, d = (s + r) * c;
            return a[0] = 2 * o, a[4] = 0, a[8] = 0, a[12] = -h, a[1] = 0, a[5] = 2 * l, a[9] = 0, a[13] = -u, a[2] = 0, a[6] = 0, a[10] = -2 * c, a[14] = -d, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this;
        }
        equals(t) {
            const e = this.elements, n = t.elements;
            for(let t14 = 0; t14 < 16; t14++)if (e[t14] !== n[t14]) return !1;
            return !0;
        }
        fromArray(t, e = 0) {
            for(let n = 0; n < 16; n++)this.elements[n] = t[n + e];
            return this;
        }
        toArray(t = [], e = 0) {
            const n = this.elements;
            return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t;
        }
    }
    Oe.prototype.isMatrix4 = !0;
    const ze = new se, Ue = new Oe, Fe = new se(0, 0, 0), He = new se(1, 1, 1), Ge = new se, ke = new se, Ve = new se, We = new Oe, je = new re;
    class qe {
        constructor(t = 0, e = 0, n = 0, i = qe.DefaultOrder){
            this._x = t, this._y = e, this._z = n, this._order = i;
        }
        get x() {
            return this._x;
        }
        set x(t) {
            this._x = t, this._onChangeCallback();
        }
        get y() {
            return this._y;
        }
        set y(t) {
            this._y = t, this._onChangeCallback();
        }
        get z() {
            return this._z;
        }
        set z(t) {
            this._z = t, this._onChangeCallback();
        }
        get order() {
            return this._order;
        }
        set order(t) {
            this._order = t, this._onChangeCallback();
        }
        set(t, e, n, i = this._order) {
            return this._x = t, this._y = e, this._z = n, this._order = i, this._onChangeCallback(), this;
        }
        clone() {
            return new this.constructor(this._x, this._y, this._z, this._order);
        }
        copy(t) {
            return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
        }
        setFromRotationMatrix(t, e = this._order, n = !0) {
            const i = t.elements, r = i[0], s = i[4], a = i[8], o = i[1], l = i[5], c = i[9], h = i[2], u = i[6], d = i[10];
            switch(e){
                case "XYZ":
                    this._y = Math.asin(bt1(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-c, d), this._z = Math.atan2(-s, r)) : (this._x = Math.atan2(u, l), this._z = 0);
                    break;
                case "YXZ":
                    this._x = Math.asin(-bt1(c, -1, 1)), Math.abs(c) < .9999999 ? (this._y = Math.atan2(a, d), this._z = Math.atan2(o, l)) : (this._y = Math.atan2(-h, r), this._z = 0);
                    break;
                case "ZXY":
                    this._x = Math.asin(bt1(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(-h, d), this._z = Math.atan2(-s, l)) : (this._y = 0, this._z = Math.atan2(o, r));
                    break;
                case "ZYX":
                    this._y = Math.asin(-bt1(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(u, d), this._z = Math.atan2(o, r)) : (this._x = 0, this._z = Math.atan2(-s, l));
                    break;
                case "YZX":
                    this._z = Math.asin(bt1(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-c, l), this._y = Math.atan2(-h, r)) : (this._x = 0, this._y = Math.atan2(a, d));
                    break;
                case "XZY":
                    this._z = Math.asin(-bt1(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(u, l), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-c, d), this._y = 0);
                    break;
                default:
                    console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
            }
            return this._order = e, !0 === n && this._onChangeCallback(), this;
        }
        setFromQuaternion(t, e, n) {
            return We.makeRotationFromQuaternion(t), this.setFromRotationMatrix(We, e, n);
        }
        setFromVector3(t, e = this._order) {
            return this.set(t.x, t.y, t.z, e);
        }
        reorder(t) {
            return je.setFromEuler(this), this.setFromQuaternion(je, t);
        }
        equals(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
        }
        fromArray(t) {
            return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this._onChangeCallback(), this;
        }
        toArray(t = [], e = 0) {
            return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
        }
        _onChange(t) {
            return this._onChangeCallback = t, this;
        }
        _onChangeCallback() {}
    }
    qe.prototype.isEuler = !0, qe.DefaultOrder = "XYZ", qe.RotationOrders = [
        "XYZ",
        "YZX",
        "ZXY",
        "XZY",
        "YXZ",
        "ZYX"
    ];
    class Xe {
        constructor(){
            this.mask = 1;
        }
        set(t) {
            this.mask = (1 << t | 0) >>> 0;
        }
        enable(t) {
            this.mask |= 1 << t | 0;
        }
        enableAll() {
            this.mask = -1;
        }
        toggle(t) {
            this.mask ^= 1 << t | 0;
        }
        disable(t) {
            this.mask &= ~(1 << t | 0);
        }
        disableAll() {
            this.mask = 0;
        }
        test(t) {
            return 0 != (this.mask & t.mask);
        }
        isEnabled(t) {
            return 0 != (this.mask & (1 << t | 0));
        }
    }
    let Je = 0;
    const Ye = new se, Ze = new re, Ke = new Oe, Qe = new se, $e = new se, tn = new se, en = new re, nn = new se(1, 0, 0), rn = new se(0, 1, 0), sn = new se(0, 0, 1), an = {
        type: "added"
    }, on = {
        type: "removed"
    };
    class ln extends ft1 {
        constructor(){
            super(), Object.defineProperty(this, "id", {
                value: Je++
            }), this.uuid = _t1(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ln.DefaultUp.clone();
            const t = new se, e = new qe, n = new re, i = new se(1, 1, 1);
            e._onChange(function() {
                n.setFromEuler(e, !1);
            }), n._onChange(function() {
                e.setFromQuaternion(n, void 0, !1);
            }), Object.defineProperties(this, {
                position: {
                    configurable: !0,
                    enumerable: !0,
                    value: t
                },
                rotation: {
                    configurable: !0,
                    enumerable: !0,
                    value: e
                },
                quaternion: {
                    configurable: !0,
                    enumerable: !0,
                    value: n
                },
                scale: {
                    configurable: !0,
                    enumerable: !0,
                    value: i
                },
                modelViewMatrix: {
                    value: new Oe
                },
                normalMatrix: {
                    value: new Ct1
                }
            }), this.matrix = new Oe, this.matrixWorld = new Oe, this.matrixAutoUpdate = ln.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Xe, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
        }
        onBeforeRender() {}
        onAfterRender() {}
        applyMatrix4(t) {
            this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
        }
        applyQuaternion(t) {
            return this.quaternion.premultiply(t), this;
        }
        setRotationFromAxisAngle(t, e) {
            this.quaternion.setFromAxisAngle(t, e);
        }
        setRotationFromEuler(t) {
            this.quaternion.setFromEuler(t, !0);
        }
        setRotationFromMatrix(t) {
            this.quaternion.setFromRotationMatrix(t);
        }
        setRotationFromQuaternion(t) {
            this.quaternion.copy(t);
        }
        rotateOnAxis(t, e) {
            return Ze.setFromAxisAngle(t, e), this.quaternion.multiply(Ze), this;
        }
        rotateOnWorldAxis(t, e) {
            return Ze.setFromAxisAngle(t, e), this.quaternion.premultiply(Ze), this;
        }
        rotateX(t) {
            return this.rotateOnAxis(nn, t);
        }
        rotateY(t) {
            return this.rotateOnAxis(rn, t);
        }
        rotateZ(t) {
            return this.rotateOnAxis(sn, t);
        }
        translateOnAxis(t, e) {
            return Ye.copy(t).applyQuaternion(this.quaternion), this.position.add(Ye.multiplyScalar(e)), this;
        }
        translateX(t) {
            return this.translateOnAxis(nn, t);
        }
        translateY(t) {
            return this.translateOnAxis(rn, t);
        }
        translateZ(t) {
            return this.translateOnAxis(sn, t);
        }
        localToWorld(t) {
            return t.applyMatrix4(this.matrixWorld);
        }
        worldToLocal(t) {
            return t.applyMatrix4(Ke.copy(this.matrixWorld).invert());
        }
        lookAt(t, e, n) {
            t.isVector3 ? Qe.copy(t) : Qe.set(t, e, n);
            const i = this.parent;
            this.updateWorldMatrix(!0, !1), $e.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Ke.lookAt($e, Qe, this.up) : Ke.lookAt(Qe, $e, this.up), this.quaternion.setFromRotationMatrix(Ke), i && (Ke.extractRotation(i.matrixWorld), Ze.setFromRotationMatrix(Ke), this.quaternion.premultiply(Ze.invert()));
        }
        add(t) {
            if (arguments.length > 1) {
                for(let t = 0; t < arguments.length; t++)this.add(arguments[t]);
                return this;
            }
            return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(an)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
        }
        remove(t) {
            if (arguments.length > 1) {
                for(let t = 0; t < arguments.length; t++)this.remove(arguments[t]);
                return this;
            }
            const e = this.children.indexOf(t);
            return -1 !== e && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(on)), this;
        }
        removeFromParent() {
            const t = this.parent;
            return null !== t && t.remove(this), this;
        }
        clear() {
            for(let t = 0; t < this.children.length; t++){
                const e = this.children[t];
                e.parent = null, e.dispatchEvent(on);
            }
            return this.children.length = 0, this;
        }
        attach(t) {
            return this.updateWorldMatrix(!0, !1), Ke.copy(this.matrixWorld).invert(), null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), Ke.multiply(t.parent.matrixWorld)), t.applyMatrix4(Ke), this.add(t), t.updateWorldMatrix(!1, !0), this;
        }
        getObjectById(t) {
            return this.getObjectByProperty("id", t);
        }
        getObjectByName(t) {
            return this.getObjectByProperty("name", t);
        }
        getObjectByProperty(t, e) {
            if (this[t] === e) return this;
            for(let n = 0, i = this.children.length; n < i; n++){
                const i = this.children[n].getObjectByProperty(t, e);
                if (void 0 !== i) return i;
            }
        }
        getWorldPosition(t) {
            return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
        }
        getWorldQuaternion(t) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose($e, t, tn), t;
        }
        getWorldScale(t) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose($e, en, t), t;
        }
        getWorldDirection(t) {
            this.updateWorldMatrix(!0, !1);
            const e = this.matrixWorld.elements;
            return t.set(e[8], e[9], e[10]).normalize();
        }
        raycast() {}
        traverse(t) {
            t(this);
            const e = this.children;
            for(let n = 0, i = e.length; n < i; n++)e[n].traverse(t);
        }
        traverseVisible(t) {
            if (!1 === this.visible) return;
            t(this);
            const e = this.children;
            for(let n = 0, i = e.length; n < i; n++)e[n].traverseVisible(t);
        }
        traverseAncestors(t) {
            const e = this.parent;
            null !== e && (t(e), e.traverseAncestors(t));
        }
        updateMatrix() {
            this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
        }
        updateMatrixWorld(t) {
            this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
            const e = this.children;
            for(let n = 0, i = e.length; n < i; n++)e[n].updateMatrixWorld(t);
        }
        updateWorldMatrix(t, e) {
            const n = this.parent;
            if (!0 === t && null !== n && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e) {
                const t = this.children;
                for(let e = 0, n = t.length; e < n; e++)t[e].updateWorldMatrix(!1, !0);
            }
        }
        toJSON(t15) {
            const e5 = void 0 === t15 || "string" == typeof t15, n5 = {};
            e5 && (t15 = {
                geometries: {},
                materials: {},
                textures: {},
                images: {},
                shapes: {},
                skeletons: {},
                animations: {},
                nodes: {}
            }, n5.metadata = {
                version: 4.5,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            const i4 = {};
            function r(e, n) {
                return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t15)), n.uuid;
            }
            if (i4.uuid = this.uuid, i4.type = this.type, "" !== this.name && (i4.name = this.name), !0 === this.castShadow && (i4.castShadow = !0), !0 === this.receiveShadow && (i4.receiveShadow = !0), !1 === this.visible && (i4.visible = !1), !1 === this.frustumCulled && (i4.frustumCulled = !1), 0 !== this.renderOrder && (i4.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (i4.userData = this.userData), i4.layers = this.layers.mask, i4.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (i4.matrixAutoUpdate = !1), this.isInstancedMesh && (i4.type = "InstancedMesh", i4.count = this.count, i4.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (i4.instanceColor = this.instanceColor.toJSON())), this.isScene) this.background && (this.background.isColor ? i4.background = this.background.toJSON() : this.background.isTexture && (i4.background = this.background.toJSON(t15).uuid)), this.environment && this.environment.isTexture && (i4.environment = this.environment.toJSON(t15).uuid);
            else if (this.isMesh || this.isLine || this.isPoints) {
                i4.geometry = r(t15.geometries, this.geometry);
                const e = this.geometry.parameters;
                if (void 0 !== e && void 0 !== e.shapes) {
                    const n = e.shapes;
                    if (Array.isArray(n)) for(let e6 = 0, i = n.length; e6 < i; e6++){
                        const i = n[e6];
                        r(t15.shapes, i);
                    }
                    else r(t15.shapes, n);
                }
            }
            if (this.isSkinnedMesh && (i4.bindMode = this.bindMode, i4.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(t15.skeletons, this.skeleton), i4.skeleton = this.skeleton.uuid)), void 0 !== this.material) {
                if (Array.isArray(this.material)) {
                    const e = [];
                    for(let n = 0, i2 = this.material.length; n < i2; n++)e.push(r(t15.materials, this.material[n]));
                    i4.material = e;
                } else i4.material = r(t15.materials, this.material);
            }
            if (this.children.length > 0) {
                i4.children = [];
                for(let e = 0; e < this.children.length; e++)i4.children.push(this.children[e].toJSON(t15).object);
            }
            if (this.animations.length > 0) {
                i4.animations = [];
                for(let e = 0; e < this.animations.length; e++){
                    const n = this.animations[e];
                    i4.animations.push(r(t15.animations, n));
                }
            }
            if (e5) {
                const e = s(t15.geometries), i = s(t15.materials), r = s(t15.textures), a = s(t15.images), o = s(t15.shapes), l = s(t15.skeletons), c = s(t15.animations), h = s(t15.nodes);
                e.length > 0 && (n5.geometries = e), i.length > 0 && (n5.materials = i), r.length > 0 && (n5.textures = r), a.length > 0 && (n5.images = a), o.length > 0 && (n5.shapes = o), l.length > 0 && (n5.skeletons = l), c.length > 0 && (n5.animations = c), h.length > 0 && (n5.nodes = h);
            }
            return n5.object = i4, n5;
            function s(t) {
                const e = [];
                for(const n in t){
                    const i = t[n];
                    delete i.metadata, e.push(i);
                }
                return e;
            }
        }
        clone(t) {
            return (new this.constructor).copy(this, t);
        }
        copy(t, e = !0) {
            if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e) for(let e7 = 0; e7 < t.children.length; e7++){
                const n = t.children[e7];
                this.add(n.clone());
            }
            return this;
        }
    }
    ln.DefaultUp = new se(0, 1, 0), ln.DefaultMatrixAutoUpdate = !0, ln.prototype.isObject3D = !0;
    const cn = new se, hn = new se, un = new se, dn = new se, pn = new se, mn = new se, fn = new se, gn = new se, vn = new se, yn = new se;
    class xn {
        constructor(t = new se, e = new se, n = new se){
            this.a = t, this.b = e, this.c = n;
        }
        static getNormal(t, e, n, i) {
            i.subVectors(n, e), cn.subVectors(t, e), i.cross(cn);
            const r = i.lengthSq();
            return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
        }
        static getBarycoord(t, e, n, i, r) {
            cn.subVectors(i, e), hn.subVectors(n, e), un.subVectors(t, e);
            const s = cn.dot(cn), a = cn.dot(hn), o = cn.dot(un), l = hn.dot(hn), c = hn.dot(un), h = s * l - a * a;
            if (0 === h) return r.set(-2, -1, -1);
            const u = 1 / h, d = (l * o - a * c) * u, p = (s * c - a * o) * u;
            return r.set(1 - d - p, p, d);
        }
        static containsPoint(t, e, n, i) {
            return this.getBarycoord(t, e, n, i, dn), dn.x >= 0 && dn.y >= 0 && dn.x + dn.y <= 1;
        }
        static getUV(t, e, n, i, r, s, a, o) {
            return this.getBarycoord(t, e, n, i, dn), o.set(0, 0), o.addScaledVector(r, dn.x), o.addScaledVector(s, dn.y), o.addScaledVector(a, dn.z), o;
        }
        static isFrontFacing(t, e, n, i) {
            return cn.subVectors(n, e), hn.subVectors(t, e), cn.cross(hn).dot(i) < 0;
        }
        set(t, e, n) {
            return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
        }
        setFromPointsAndIndices(t, e, n, i) {
            return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
        }
        setFromAttributeAndIndices(t, e, n, i) {
            return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, i), this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t) {
            return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
        }
        getArea() {
            return cn.subVectors(this.c, this.b), hn.subVectors(this.a, this.b), .5 * cn.cross(hn).length();
        }
        getMidpoint(t) {
            return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
        }
        getNormal(t) {
            return xn.getNormal(this.a, this.b, this.c, t);
        }
        getPlane(t) {
            return t.setFromCoplanarPoints(this.a, this.b, this.c);
        }
        getBarycoord(t, e) {
            return xn.getBarycoord(t, this.a, this.b, this.c, e);
        }
        getUV(t, e, n, i, r) {
            return xn.getUV(t, this.a, this.b, this.c, e, n, i, r);
        }
        containsPoint(t) {
            return xn.containsPoint(t, this.a, this.b, this.c);
        }
        isFrontFacing(t) {
            return xn.isFrontFacing(this.a, this.b, this.c, t);
        }
        intersectsBox(t) {
            return t.intersectsTriangle(this);
        }
        closestPointToPoint(t, e) {
            const n = this.a, i = this.b, r = this.c;
            let s, a;
            pn.subVectors(i, n), mn.subVectors(r, n), gn.subVectors(t, n);
            const o = pn.dot(gn), l = mn.dot(gn);
            if (o <= 0 && l <= 0) return e.copy(n);
            vn.subVectors(t, i);
            const c = pn.dot(vn), h = mn.dot(vn);
            if (c >= 0 && h <= c) return e.copy(i);
            const u = o * h - c * l;
            if (u <= 0 && o >= 0 && c <= 0) return s = o / (o - c), e.copy(n).addScaledVector(pn, s);
            yn.subVectors(t, r);
            const d = pn.dot(yn), p = mn.dot(yn);
            if (p >= 0 && d <= p) return e.copy(r);
            const m = d * l - o * p;
            if (m <= 0 && l >= 0 && p <= 0) return a = l / (l - p), e.copy(n).addScaledVector(mn, a);
            const f = c * p - d * h;
            if (f <= 0 && h - c >= 0 && d - p >= 0) return fn.subVectors(r, i), a = (h - c) / (h - c + (d - p)), e.copy(i).addScaledVector(fn, a);
            const g = 1 / (f + m + u);
            return s = m * g, a = u * g, e.copy(n).addScaledVector(pn, s).addScaledVector(mn, a);
        }
        equals(t) {
            return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
        }
    }
    let _n = 0;
    class bn extends ft1 {
        constructor(){
            super(), Object.defineProperty(this, "id", {
                value: _n++
            }), this.uuid = _t1(), this.name = "", this.type = "Material", this.fog = !0, this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = n1, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = ht1, this.stencilZFail = ht1, this.stencilZPass = ht1, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
        }
        get alphaTest() {
            return this._alphaTest;
        }
        set alphaTest(t) {
            this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t;
        }
        onBuild() {}
        onBeforeRender() {}
        onBeforeCompile() {}
        customProgramCacheKey() {
            return this.onBeforeCompile.toString();
        }
        setValues(t) {
            if (void 0 !== t) for(const e in t){
                const n = t[e];
                if (void 0 === n) {
                    console.warn("THREE.Material: '" + e + "' parameter is undefined.");
                    continue;
                }
                if ("shading" === e) {
                    console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === n;
                    continue;
                }
                const i = this[e];
                void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.");
            }
        }
        toJSON(t16) {
            const e8 = void 0 === t16 || "string" == typeof t16;
            e8 && (t16 = {
                textures: {},
                images: {}
            });
            const n6 = {
                metadata: {
                    version: 4.5,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };
            function i5(t) {
                const e = [];
                for(const n in t){
                    const i = t[n];
                    delete i.metadata, e.push(i);
                }
                return e;
            }
            if (n6.uuid = this.uuid, n6.type = this.type, "" !== this.name && (n6.name = this.name), this.color && this.color.isColor && (n6.color = this.color.getHex()), void 0 !== this.roughness && (n6.roughness = this.roughness), void 0 !== this.metalness && (n6.metalness = this.metalness), void 0 !== this.sheen && (n6.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n6.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (n6.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n6.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (n6.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n6.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (n6.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n6.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (n6.shininess = this.shininess), void 0 !== this.clearcoat && (n6.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n6.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n6.clearcoatMap = this.clearcoatMap.toJSON(t16).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n6.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t16).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n6.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t16).uuid, n6.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (n6.map = this.map.toJSON(t16).uuid), this.matcap && this.matcap.isTexture && (n6.matcap = this.matcap.toJSON(t16).uuid), this.alphaMap && this.alphaMap.isTexture && (n6.alphaMap = this.alphaMap.toJSON(t16).uuid), this.lightMap && this.lightMap.isTexture && (n6.lightMap = this.lightMap.toJSON(t16).uuid, n6.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n6.aoMap = this.aoMap.toJSON(t16).uuid, n6.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n6.bumpMap = this.bumpMap.toJSON(t16).uuid, n6.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n6.normalMap = this.normalMap.toJSON(t16).uuid, n6.normalMapType = this.normalMapType, n6.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n6.displacementMap = this.displacementMap.toJSON(t16).uuid, n6.displacementScale = this.displacementScale, n6.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n6.roughnessMap = this.roughnessMap.toJSON(t16).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n6.metalnessMap = this.metalnessMap.toJSON(t16).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n6.emissiveMap = this.emissiveMap.toJSON(t16).uuid), this.specularMap && this.specularMap.isTexture && (n6.specularMap = this.specularMap.toJSON(t16).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n6.specularIntensityMap = this.specularIntensityMap.toJSON(t16).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n6.specularColorMap = this.specularColorMap.toJSON(t16).uuid), this.envMap && this.envMap.isTexture && (n6.envMap = this.envMap.toJSON(t16).uuid, void 0 !== this.combine && (n6.combine = this.combine)), void 0 !== this.envMapIntensity && (n6.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (n6.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (n6.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n6.gradientMap = this.gradientMap.toJSON(t16).uuid), void 0 !== this.transmission && (n6.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n6.transmissionMap = this.transmissionMap.toJSON(t16).uuid), void 0 !== this.thickness && (n6.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n6.thicknessMap = this.thicknessMap.toJSON(t16).uuid), void 0 !== this.attenuationDistance && (n6.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (n6.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (n6.size = this.size), null !== this.shadowSide && (n6.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (n6.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (n6.blending = this.blending), 0 !== this.side && (n6.side = this.side), this.vertexColors && (n6.vertexColors = !0), this.opacity < 1 && (n6.opacity = this.opacity), !0 === this.transparent && (n6.transparent = this.transparent), n6.depthFunc = this.depthFunc, n6.depthTest = this.depthTest, n6.depthWrite = this.depthWrite, n6.colorWrite = this.colorWrite, n6.stencilWrite = this.stencilWrite, n6.stencilWriteMask = this.stencilWriteMask, n6.stencilFunc = this.stencilFunc, n6.stencilRef = this.stencilRef, n6.stencilFuncMask = this.stencilFuncMask, n6.stencilFail = this.stencilFail, n6.stencilZFail = this.stencilZFail, n6.stencilZPass = this.stencilZPass, void 0 !== this.rotation && 0 !== this.rotation && (n6.rotation = this.rotation), !0 === this.polygonOffset && (n6.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (n6.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n6.polygonOffsetUnits = this.polygonOffsetUnits), void 0 !== this.linewidth && 1 !== this.linewidth && (n6.linewidth = this.linewidth), void 0 !== this.dashSize && (n6.dashSize = this.dashSize), void 0 !== this.gapSize && (n6.gapSize = this.gapSize), void 0 !== this.scale && (n6.scale = this.scale), !0 === this.dithering && (n6.dithering = !0), this.alphaTest > 0 && (n6.alphaTest = this.alphaTest), !0 === this.alphaToCoverage && (n6.alphaToCoverage = this.alphaToCoverage), !0 === this.premultipliedAlpha && (n6.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (n6.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n6.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n6.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n6.wireframeLinejoin = this.wireframeLinejoin), !0 === this.flatShading && (n6.flatShading = this.flatShading), !1 === this.visible && (n6.visible = !1), !1 === this.toneMapped && (n6.toneMapped = !1), "{}" !== JSON.stringify(this.userData) && (n6.userData = this.userData), e8) {
                const e = i5(t16.textures), r = i5(t16.images);
                e.length > 0 && (n6.textures = e), r.length > 0 && (n6.images = r);
            }
            return n6;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t) {
            this.name = t.name, this.fog = t.fog, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
            const e = t.clippingPlanes;
            let n = null;
            if (null !== e) {
                const t = e.length;
                n = new Array(t);
                for(let i = 0; i !== t; ++i)n[i] = e[i].clone();
            }
            return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
        set needsUpdate(t) {
            !0 === t && this.version++;
        }
    }
    bn.prototype.isMaterial = !0, bn.fromType = function() {
        return null;
    };
    class Mn extends bn {
        constructor(t){
            super(), this.type = "MeshBasicMaterial", this.color = new Wt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this;
        }
    }
    Mn.prototype.isMeshBasicMaterial = !0;
    const wn = new se, Sn = new Rt;
    class Tn {
        constructor(t, e, n){
            if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === n, this.usage = ut1, this.updateRange = {
                offset: 0,
                count: -1
            }, this.version = 0;
        }
        onUploadCallback() {}
        set needsUpdate(t) {
            !0 === t && this.version++;
        }
        setUsage(t) {
            return this.usage = t, this;
        }
        copy(t) {
            return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this;
        }
        copyAt(t, e, n) {
            t *= this.itemSize, n *= e.itemSize;
            for(let i = 0, r = this.itemSize; i < r; i++)this.array[t + i] = e.array[n + i];
            return this;
        }
        copyArray(t) {
            return this.array.set(t), this;
        }
        copyColorsArray(t) {
            const e = this.array;
            let n = 0;
            for(let i = 0, r = t.length; i < r; i++){
                let r = t[i];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), r = new Wt), e[n++] = r.r, e[n++] = r.g, e[n++] = r.b;
            }
            return this;
        }
        copyVector2sArray(t) {
            const e = this.array;
            let n = 0;
            for(let i = 0, r = t.length; i < r; i++){
                let r = t[i];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), r = new Rt), e[n++] = r.x, e[n++] = r.y;
            }
            return this;
        }
        copyVector3sArray(t) {
            const e = this.array;
            let n = 0;
            for(let i = 0, r = t.length; i < r; i++){
                let r = t[i];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), r = new se), e[n++] = r.x, e[n++] = r.y, e[n++] = r.z;
            }
            return this;
        }
        copyVector4sArray(t) {
            const e = this.array;
            let n = 0;
            for(let i = 0, r = t.length; i < r; i++){
                let r = t[i];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), r = new Kt), e[n++] = r.x, e[n++] = r.y, e[n++] = r.z, e[n++] = r.w;
            }
            return this;
        }
        applyMatrix3(t) {
            if (2 === this.itemSize) for(let e = 0, n = this.count; e < n; e++)Sn.fromBufferAttribute(this, e), Sn.applyMatrix3(t), this.setXY(e, Sn.x, Sn.y);
            else if (3 === this.itemSize) for(let e9 = 0, n7 = this.count; e9 < n7; e9++)wn.fromBufferAttribute(this, e9), wn.applyMatrix3(t), this.setXYZ(e9, wn.x, wn.y, wn.z);
            return this;
        }
        applyMatrix4(t) {
            for(let e = 0, n = this.count; e < n; e++)wn.fromBufferAttribute(this, e), wn.applyMatrix4(t), this.setXYZ(e, wn.x, wn.y, wn.z);
            return this;
        }
        applyNormalMatrix(t) {
            for(let e = 0, n = this.count; e < n; e++)wn.fromBufferAttribute(this, e), wn.applyNormalMatrix(t), this.setXYZ(e, wn.x, wn.y, wn.z);
            return this;
        }
        transformDirection(t) {
            for(let e = 0, n = this.count; e < n; e++)wn.fromBufferAttribute(this, e), wn.transformDirection(t), this.setXYZ(e, wn.x, wn.y, wn.z);
            return this;
        }
        set(t, e = 0) {
            return this.array.set(t, e), this;
        }
        getX(t) {
            return this.array[t * this.itemSize];
        }
        setX(t, e) {
            return this.array[t * this.itemSize] = e, this;
        }
        getY(t) {
            return this.array[t * this.itemSize + 1];
        }
        setY(t, e) {
            return this.array[t * this.itemSize + 1] = e, this;
        }
        getZ(t) {
            return this.array[t * this.itemSize + 2];
        }
        setZ(t, e) {
            return this.array[t * this.itemSize + 2] = e, this;
        }
        getW(t) {
            return this.array[t * this.itemSize + 3];
        }
        setW(t, e) {
            return this.array[t * this.itemSize + 3] = e, this;
        }
        setXY(t, e, n) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this;
        }
        setXYZ(t, e, n, i) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this;
        }
        setXYZW(t, e, n, i, r) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this.array[t + 3] = r, this;
        }
        onUpload(t) {
            return this.onUploadCallback = t, this;
        }
        clone() {
            return new this.constructor(this.array, this.itemSize).copy(this);
        }
        toJSON() {
            const t = {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: Array.prototype.slice.call(this.array),
                normalized: this.normalized
            };
            return "" !== this.name && (t.name = this.name), this.usage !== ut1 && (t.usage = this.usage), 0 === this.updateRange.offset && -1 === this.updateRange.count || (t.updateRange = this.updateRange), t;
        }
    }
    Tn.prototype.isBufferAttribute = !0;
    class En extends Tn {
        constructor(t, e, n){
            super(new Int8Array(t), e, n);
        }
    }
    class An extends Tn {
        constructor(t, e, n){
            super(new Uint8Array(t), e, n);
        }
    }
    class Rn extends Tn {
        constructor(t, e, n){
            super(new Uint8ClampedArray(t), e, n);
        }
    }
    class Cn extends Tn {
        constructor(t, e, n){
            super(new Int16Array(t), e, n);
        }
    }
    class Ln extends Tn {
        constructor(t, e, n){
            super(new Uint16Array(t), e, n);
        }
    }
    class Pn extends Tn {
        constructor(t, e, n){
            super(new Int32Array(t), e, n);
        }
    }
    class Dn extends Tn {
        constructor(t, e, n){
            super(new Uint32Array(t), e, n);
        }
    }
    class In extends Tn {
        constructor(t, e, n){
            super(new Uint16Array(t), e, n);
        }
    }
    In.prototype.isFloat16BufferAttribute = !0;
    class Nn extends Tn {
        constructor(t, e, n){
            super(new Float32Array(t), e, n);
        }
    }
    class Bn extends Tn {
        constructor(t, e, n){
            super(new Float64Array(t), e, n);
        }
    }
    let On = 0;
    const zn = new Oe, Un = new ln, Fn = new se, Hn = new le, Gn = new le, kn = new se;
    class Vn extends ft1 {
        constructor(){
            super(), Object.defineProperty(this, "id", {
                value: On++
            }), this.uuid = _t1(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
                start: 0,
                count: 1 / 0
            }, this.userData = {};
        }
        getIndex() {
            return this.index;
        }
        setIndex(t) {
            return Array.isArray(t) ? this.index = new (Lt1(t) ? Dn : Ln)(t, 1) : this.index = t, this;
        }
        getAttribute(t) {
            return this.attributes[t];
        }
        setAttribute(t, e) {
            return this.attributes[t] = e, this;
        }
        deleteAttribute(t) {
            return delete this.attributes[t], this;
        }
        hasAttribute(t) {
            return void 0 !== this.attributes[t];
        }
        addGroup(t, e, n = 0) {
            this.groups.push({
                start: t,
                count: e,
                materialIndex: n
            });
        }
        clearGroups() {
            this.groups = [];
        }
        setDrawRange(t, e) {
            this.drawRange.start = t, this.drawRange.count = e;
        }
        applyMatrix4(t) {
            const e = this.attributes.position;
            void 0 !== e && (e.applyMatrix4(t), e.needsUpdate = !0);
            const n = this.attributes.normal;
            if (void 0 !== n) {
                const e = (new Ct1).getNormalMatrix(t);
                n.applyNormalMatrix(e), n.needsUpdate = !0;
            }
            const i = this.attributes.tangent;
            return void 0 !== i && (i.transformDirection(t), i.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this;
        }
        applyQuaternion(t) {
            return zn.makeRotationFromQuaternion(t), this.applyMatrix4(zn), this;
        }
        rotateX(t) {
            return zn.makeRotationX(t), this.applyMatrix4(zn), this;
        }
        rotateY(t) {
            return zn.makeRotationY(t), this.applyMatrix4(zn), this;
        }
        rotateZ(t) {
            return zn.makeRotationZ(t), this.applyMatrix4(zn), this;
        }
        translate(t, e, n) {
            return zn.makeTranslation(t, e, n), this.applyMatrix4(zn), this;
        }
        scale(t, e, n) {
            return zn.makeScale(t, e, n), this.applyMatrix4(zn), this;
        }
        lookAt(t) {
            return Un.lookAt(t), Un.updateMatrix(), this.applyMatrix4(Un.matrix), this;
        }
        center() {
            return this.computeBoundingBox(), this.boundingBox.getCenter(Fn).negate(), this.translate(Fn.x, Fn.y, Fn.z), this;
        }
        setFromPoints(t) {
            const e = [];
            for(let n = 0, i = t.length; n < i; n++){
                const i = t[n];
                e.push(i.x, i.y, i.z || 0);
            }
            return this.setAttribute("position", new Nn(e, 3)), this;
        }
        computeBoundingBox() {
            null === this.boundingBox && (this.boundingBox = new le);
            const t = this.attributes.position, e = this.morphAttributes.position;
            if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new se(-1 / 0, -1 / 0, -1 / 0), new se(1 / 0, 1 / 0, 1 / 0));
            if (void 0 !== t) {
                if (this.boundingBox.setFromBufferAttribute(t), e) for(let t17 = 0, n = e.length; t17 < n; t17++){
                    const n = e[t17];
                    Hn.setFromBufferAttribute(n), this.morphTargetsRelative ? (kn.addVectors(this.boundingBox.min, Hn.min), this.boundingBox.expandByPoint(kn), kn.addVectors(this.boundingBox.max, Hn.max), this.boundingBox.expandByPoint(kn)) : (this.boundingBox.expandByPoint(Hn.min), this.boundingBox.expandByPoint(Hn.max));
                }
            } else this.boundingBox.makeEmpty();
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
        }
        computeBoundingSphere() {
            null === this.boundingSphere && (this.boundingSphere = new Ae);
            const t = this.attributes.position, e = this.morphAttributes.position;
            if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new se, 1 / 0);
            if (t) {
                const n = this.boundingSphere.center;
                if (Hn.setFromBufferAttribute(t), e) for(let t18 = 0, n8 = e.length; t18 < n8; t18++){
                    const n = e[t18];
                    Gn.setFromBufferAttribute(n), this.morphTargetsRelative ? (kn.addVectors(Hn.min, Gn.min), Hn.expandByPoint(kn), kn.addVectors(Hn.max, Gn.max), Hn.expandByPoint(kn)) : (Hn.expandByPoint(Gn.min), Hn.expandByPoint(Gn.max));
                }
                Hn.getCenter(n);
                let i = 0;
                for(let e10 = 0, r = t.count; e10 < r; e10++)kn.fromBufferAttribute(t, e10), i = Math.max(i, n.distanceToSquared(kn));
                if (e) for(let r2 = 0, s = e.length; r2 < s; r2++){
                    const s = e[r2], a = this.morphTargetsRelative;
                    for(let e11 = 0, r = s.count; e11 < r; e11++)kn.fromBufferAttribute(s, e11), a && (Fn.fromBufferAttribute(t, e11), kn.add(Fn)), i = Math.max(i, n.distanceToSquared(kn));
                }
                this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
            }
        }
        computeTangents() {
            const t22 = this.index, e15 = this.attributes;
            if (null === t22 || void 0 === e15.position || void 0 === e15.normal || void 0 === e15.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
            const n9 = t22.array, i = e15.position.array, r3 = e15.normal.array, s = e15.uv.array, a = i.length / 3;
            !1 === this.hasAttribute("tangent") && this.setAttribute("tangent", new Tn(new Float32Array(4 * a), 4));
            const o = this.getAttribute("tangent").array, l = [], c = [];
            for(let t19 = 0; t19 < a; t19++)l[t19] = new se, c[t19] = new se;
            const h = new se, u = new se, d = new se, p = new Rt, m = new Rt, f = new Rt, g = new se, v = new se;
            function y(t, e, n) {
                h.fromArray(i, 3 * t), u.fromArray(i, 3 * e), d.fromArray(i, 3 * n), p.fromArray(s, 2 * t), m.fromArray(s, 2 * e), f.fromArray(s, 2 * n), u.sub(h), d.sub(h), m.sub(p), f.sub(p);
                const r = 1 / (m.x * f.y - f.x * m.y);
                isFinite(r) && (g.copy(u).multiplyScalar(f.y).addScaledVector(d, -m.y).multiplyScalar(r), v.copy(d).multiplyScalar(m.x).addScaledVector(u, -f.x).multiplyScalar(r), l[t].add(g), l[e].add(g), l[n].add(g), c[t].add(v), c[e].add(v), c[n].add(v));
            }
            let x = this.groups;
            0 === x.length && (x = [
                {
                    start: 0,
                    count: n9.length
                }
            ]);
            for(let t20 = 0, e13 = x.length; t20 < e13; ++t20){
                const e = x[t20], i = e.start;
                for(let t = i, r = i + e.count; t < r; t += 3)y(n9[t + 0], n9[t + 1], n9[t + 2]);
            }
            const _ = new se, b = new se, M = new se, w = new se;
            function S(t) {
                M.fromArray(r3, 3 * t), w.copy(M);
                const e = l[t];
                _.copy(e), _.sub(M.multiplyScalar(M.dot(e))).normalize(), b.crossVectors(w, e);
                const n = b.dot(c[t]) < 0 ? -1 : 1;
                o[4 * t] = _.x, o[4 * t + 1] = _.y, o[4 * t + 2] = _.z, o[4 * t + 3] = n;
            }
            for(let t21 = 0, e14 = x.length; t21 < e14; ++t21){
                const e = x[t21], i = e.start;
                for(let t = i, r = i + e.count; t < r; t += 3)S(n9[t + 0]), S(n9[t + 1]), S(n9[t + 2]);
            }
        }
        computeVertexNormals() {
            const t = this.index, e = this.getAttribute("position");
            if (void 0 !== e) {
                let n = this.getAttribute("normal");
                if (void 0 === n) n = new Tn(new Float32Array(3 * e.count), 3), this.setAttribute("normal", n);
                else for(let t24 = 0, e16 = n.count; t24 < e16; t24++)n.setXYZ(t24, 0, 0, 0);
                const i = new se, r = new se, s = new se, a = new se, o = new se, l = new se, c = new se, h = new se;
                if (t) for(let u = 0, d = t.count; u < d; u += 3){
                    const d = t.getX(u + 0), p = t.getX(u + 1), m = t.getX(u + 2);
                    i.fromBufferAttribute(e, d), r.fromBufferAttribute(e, p), s.fromBufferAttribute(e, m), c.subVectors(s, r), h.subVectors(i, r), c.cross(h), a.fromBufferAttribute(n, d), o.fromBufferAttribute(n, p), l.fromBufferAttribute(n, m), a.add(c), o.add(c), l.add(c), n.setXYZ(d, a.x, a.y, a.z), n.setXYZ(p, o.x, o.y, o.z), n.setXYZ(m, l.x, l.y, l.z);
                }
                else for(let t23 = 0, a2 = e.count; t23 < a2; t23 += 3)i.fromBufferAttribute(e, t23 + 0), r.fromBufferAttribute(e, t23 + 1), s.fromBufferAttribute(e, t23 + 2), c.subVectors(s, r), h.subVectors(i, r), c.cross(h), n.setXYZ(t23 + 0, c.x, c.y, c.z), n.setXYZ(t23 + 1, c.x, c.y, c.z), n.setXYZ(t23 + 2, c.x, c.y, c.z);
                this.normalizeNormals(), n.needsUpdate = !0;
            }
        }
        merge(t, e) {
            if (!t || !t.isBufferGeometry) return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t);
            void 0 === e && (e = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
            const n = this.attributes;
            for(const i in n){
                if (void 0 === t.attributes[i]) continue;
                const r = n[i].array, s = t.attributes[i], a = s.array, o = s.itemSize * e, l = Math.min(a.length, r.length - o);
                for(let t25 = 0, e17 = o; t25 < l; t25++, e17++)r[e17] = a[t25];
            }
            return this;
        }
        normalizeNormals() {
            const t = this.attributes.normal;
            for(let e = 0, n = t.count; e < n; e++)kn.fromBufferAttribute(t, e), kn.normalize(), t.setXYZ(e, kn.x, kn.y, kn.z);
        }
        toNonIndexed() {
            function t27(t, e) {
                const n = t.array, i = t.itemSize, r = t.normalized, s = new n.constructor(e.length * i);
                let a = 0, o = 0;
                for(let r5 = 0, l = e.length; r5 < l; r5++){
                    a = t.isInterleavedBufferAttribute ? e[r5] * t.data.stride + t.offset : e[r5] * i;
                    for(let t28 = 0; t28 < i; t28++)s[o++] = n[a++];
                }
                return new Tn(s, i, r);
            }
            if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
            const e18 = new Vn, n11 = this.index.array, i7 = this.attributes;
            for(const r6 in i7){
                const s = t27(i7[r6], n11);
                e18.setAttribute(r6, s);
            }
            const r4 = this.morphAttributes;
            for(const i6 in r4){
                const s = [], a = r4[i6];
                for(let e = 0, i = a.length; e < i; e++){
                    const i = t27(a[e], n11);
                    s.push(i);
                }
                e18.morphAttributes[i6] = s;
            }
            e18.morphTargetsRelative = this.morphTargetsRelative;
            const s2 = this.groups;
            for(let t26 = 0, n10 = s2.length; t26 < n10; t26++){
                const n = s2[t26];
                e18.addGroup(n.start, n.count, n.materialIndex);
            }
            return e18;
        }
        toJSON() {
            const t = {
                metadata: {
                    version: 4.5,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) {
                const e = this.parameters;
                for(const n in e)void 0 !== e[n] && (t[n] = e[n]);
                return t;
            }
            t.data = {
                attributes: {}
            };
            const e = this.index;
            null !== e && (t.data.index = {
                type: e.array.constructor.name,
                array: Array.prototype.slice.call(e.array)
            });
            const n = this.attributes;
            for(const e19 in n){
                const i = n[e19];
                t.data.attributes[e19] = i.toJSON(t.data);
            }
            const i = {};
            let r = !1;
            for(const e20 in this.morphAttributes){
                const n = this.morphAttributes[e20], s = [];
                for(let e = 0, i8 = n.length; e < i8; e++){
                    const i = n[e];
                    s.push(i.toJSON(t.data));
                }
                s.length > 0 && (i[e20] = s, r = !0);
            }
            r && (t.data.morphAttributes = i, t.data.morphTargetsRelative = this.morphTargetsRelative);
            const s = this.groups;
            s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
            const a = this.boundingSphere;
            return null !== a && (t.data.boundingSphere = {
                center: a.center.toArray(),
                radius: a.radius
            }), t;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t) {
            this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
            const e = {};
            this.name = t.name;
            const n = t.index;
            null !== n && this.setIndex(n.clone(e));
            const i = t.attributes;
            for(const t29 in i){
                const n = i[t29];
                this.setAttribute(t29, n.clone(e));
            }
            const r = t.morphAttributes;
            for(const t30 in r){
                const n = [], i = r[t30];
                for(let t = 0, r7 = i.length; t < r7; t++)n.push(i[t].clone(e));
                this.morphAttributes[t30] = n;
            }
            this.morphTargetsRelative = t.morphTargetsRelative;
            const s = t.groups;
            for(let t31 = 0, e21 = s.length; t31 < e21; t31++){
                const e = s[t31];
                this.addGroup(e.start, e.count, e.materialIndex);
            }
            const a = t.boundingBox;
            null !== a && (this.boundingBox = a.clone());
            const o = t.boundingSphere;
            return null !== o && (this.boundingSphere = o.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, void 0 !== t.parameters && (this.parameters = Object.assign({}, t.parameters)), this;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
    }
    Vn.prototype.isBufferGeometry = !0;
    const Wn = new Oe, jn = new Be, qn = new Ae, Xn = new se, Jn = new se, Yn = new se, Zn = new se, Kn = new se, Qn = new se, $n = new se, ti = new se, ei = new se, ni = new Rt, ii = new Rt, ri = new Rt, si = new se, ai = new se;
    class oi extends ln {
        constructor(t = new Vn, e = new Mn){
            super(), this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets();
        }
        copy(t) {
            return super.copy(t), void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = t.material, this.geometry = t.geometry, this;
        }
        updateMorphTargets() {
            const t = this.geometry;
            if (t.isBufferGeometry) {
                const e = t.morphAttributes, n = Object.keys(e);
                if (n.length > 0) {
                    const t = e[n[0]];
                    if (void 0 !== t) {
                        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                        for(let e = 0, n = t.length; e < n; e++){
                            const n = t[e].name || String(e);
                            this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = e;
                        }
                    }
                }
            } else {
                const e = t.morphTargets;
                void 0 !== e && e.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
            }
        }
        raycast(t, e) {
            const n = this.geometry, i = this.material, r = this.matrixWorld;
            if (void 0 === i) return;
            if (null === n.boundingSphere && n.computeBoundingSphere(), qn.copy(n.boundingSphere), qn.applyMatrix4(r), !1 === t.ray.intersectsSphere(qn)) return;
            if (Wn.copy(r).invert(), jn.copy(t.ray).applyMatrix4(Wn), null !== n.boundingBox && !1 === jn.intersectsBox(n.boundingBox)) return;
            let s;
            if (n.isBufferGeometry) {
                const r = n.index, a = n.attributes.position, o = n.morphAttributes.position, l = n.morphTargetsRelative, c = n.attributes.uv, h = n.attributes.uv2, u = n.groups, d = n.drawRange;
                if (null !== r) {
                    if (Array.isArray(i)) for(let n = 0, p = u.length; n < p; n++){
                        const p = u[n], m = i[p.materialIndex];
                        for(let n13 = Math.max(p.start, d.start), i9 = Math.min(r.count, Math.min(p.start + p.count, d.start + d.count)); n13 < i9; n13 += 3){
                            const i = r.getX(n13), u = r.getX(n13 + 1), d = r.getX(n13 + 2);
                            s = li(this, m, t, jn, a, o, l, c, h, i, u, d), s && (s.faceIndex = Math.floor(n13 / 3), s.face.materialIndex = p.materialIndex, e.push(s));
                        }
                    }
                    else for(let n12 = Math.max(0, d.start), u2 = Math.min(r.count, d.start + d.count); n12 < u2; n12 += 3){
                        const u = r.getX(n12), d = r.getX(n12 + 1), p = r.getX(n12 + 2);
                        s = li(this, i, t, jn, a, o, l, c, h, u, d, p), s && (s.faceIndex = Math.floor(n12 / 3), e.push(s));
                    }
                } else if (void 0 !== a) {
                    if (Array.isArray(i)) for(let n = 0, r = u.length; n < r; n++){
                        const r = u[n], p = i[r.materialIndex];
                        for(let n15 = Math.max(r.start, d.start), i12 = Math.min(a.count, Math.min(r.start + r.count, d.start + d.count)); n15 < i12; n15 += 3)s = li(this, p, t, jn, a, o, l, c, h, n15, n15 + 1, n15 + 2), s && (s.faceIndex = Math.floor(n15 / 3), s.face.materialIndex = r.materialIndex, e.push(s));
                    }
                    else for(let n14 = Math.max(0, d.start), r8 = Math.min(a.count, d.start + d.count); n14 < r8; n14 += 3)s = li(this, i, t, jn, a, o, l, c, h, n14, n14 + 1, n14 + 2), s && (s.faceIndex = Math.floor(n14 / 3), e.push(s));
                }
            } else n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        }
    }
    function li(t32, e22, n16, i15, r9, s3, a3, o2, l2, c2, h, u) {
        Xn.fromBufferAttribute(r9, c2), Jn.fromBufferAttribute(r9, h), Yn.fromBufferAttribute(r9, u);
        const d = t32.morphTargetInfluences;
        if (s3 && d) {
            $n.set(0, 0, 0), ti.set(0, 0, 0), ei.set(0, 0, 0);
            for(let t = 0, e = s3.length; t < e; t++){
                const e = d[t], n = s3[t];
                0 !== e && (Zn.fromBufferAttribute(n, c2), Kn.fromBufferAttribute(n, h), Qn.fromBufferAttribute(n, u), a3 ? ($n.addScaledVector(Zn, e), ti.addScaledVector(Kn, e), ei.addScaledVector(Qn, e)) : ($n.addScaledVector(Zn.sub(Xn), e), ti.addScaledVector(Kn.sub(Jn), e), ei.addScaledVector(Qn.sub(Yn), e)));
            }
            Xn.add($n), Jn.add(ti), Yn.add(ei);
        }
        t32.isSkinnedMesh && (t32.boneTransform(c2, Xn), t32.boneTransform(h, Jn), t32.boneTransform(u, Yn));
        const p = function(t, e, n, i, r, s, a, o) {
            let l;
            if (l = 1 === e.side ? i.intersectTriangle(a, s, r, !0, o) : i.intersectTriangle(r, s, a, 2 !== e.side, o), null === l) return null;
            ai.copy(o), ai.applyMatrix4(t.matrixWorld);
            const c = n.ray.origin.distanceTo(ai);
            return c < n.near || c > n.far ? null : {
                distance: c,
                point: ai.clone(),
                object: t
            };
        }(t32, e22, n16, i15, Xn, Jn, Yn, si);
        if (p) {
            o2 && (ni.fromBufferAttribute(o2, c2), ii.fromBufferAttribute(o2, h), ri.fromBufferAttribute(o2, u), p.uv = xn.getUV(si, Xn, Jn, Yn, ni, ii, ri, new Rt)), l2 && (ni.fromBufferAttribute(l2, c2), ii.fromBufferAttribute(l2, h), ri.fromBufferAttribute(l2, u), p.uv2 = xn.getUV(si, Xn, Jn, Yn, ni, ii, ri, new Rt));
            const t = {
                a: c2,
                b: h,
                c: u,
                normal: new se,
                materialIndex: 0
            };
            xn.getNormal(Xn, Jn, Yn, t.normal), p.face = t;
        }
        return p;
    }
    oi.prototype.isMesh = !0;
    class ci extends Vn {
        constructor(t34 = 1, e24 = 1, n17 = 1, i16 = 1, r10 = 1, s5 = 1){
            super(), this.type = "BoxGeometry", this.parameters = {
                width: t34,
                height: e24,
                depth: n17,
                widthSegments: i16,
                heightSegments: r10,
                depthSegments: s5
            };
            const a4 = this;
            i16 = Math.floor(i16), r10 = Math.floor(r10), s5 = Math.floor(s5);
            const o3 = [], l = [], c = [], h = [];
            let u3 = 0, d = 0;
            function p2(t, e, n, i, r, s, p, m, f, g, v) {
                const y = s / f, x = p / g, _ = s / 2, b = p / 2, M = m / 2, w = f + 1, S = g + 1;
                let T = 0, E = 0;
                const A = new se;
                for(let s4 = 0; s4 < S; s4++){
                    const a = s4 * x - b;
                    for(let o = 0; o < w; o++){
                        const u = o * y - _;
                        A[t] = u * i, A[e] = a * r, A[n] = M, l.push(A.x, A.y, A.z), A[t] = 0, A[e] = 0, A[n] = m > 0 ? 1 : -1, c.push(A.x, A.y, A.z), h.push(o / f), h.push(1 - s4 / g), T += 1;
                    }
                }
                for(let t33 = 0; t33 < g; t33++)for(let e23 = 0; e23 < f; e23++){
                    const n = u3 + e23 + w * t33, i = u3 + e23 + w * (t33 + 1), r = u3 + (e23 + 1) + w * (t33 + 1), s = u3 + (e23 + 1) + w * t33;
                    o3.push(n, i, s), o3.push(i, r, s), E += 6;
                }
                a4.addGroup(d, E, v), d += E, u3 += T;
            }
            p2("z", "y", "x", -1, -1, n17, e24, t34, s5, r10, 0), p2("z", "y", "x", 1, -1, n17, e24, -t34, s5, r10, 1), p2("x", "z", "y", 1, 1, t34, n17, e24, i16, s5, 2), p2("x", "z", "y", 1, -1, t34, n17, -e24, i16, s5, 3), p2("x", "y", "z", 1, -1, t34, e24, n17, i16, r10, 4), p2("x", "y", "z", -1, -1, t34, e24, -n17, i16, r10, 5), this.setIndex(o3), this.setAttribute("position", new Nn(l, 3)), this.setAttribute("normal", new Nn(c, 3)), this.setAttribute("uv", new Nn(h, 2));
        }
        static fromJSON(t) {
            return new ci(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
        }
    }
    function hi(t) {
        const e = {};
        for(const n in t){
            e[n] = {};
            for(const i in t[n]){
                const r = t[n][i];
                r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? e[n][i] = r.clone() : Array.isArray(r) ? e[n][i] = r.slice() : e[n][i] = r;
            }
        }
        return e;
    }
    function ui(t) {
        const e = {};
        for(let n = 0; n < t.length; n++){
            const i = hi(t[n]);
            for(const t35 in i)e[t35] = i[t35];
        }
        return e;
    }
    const di = {
        clone: hi,
        merge: ui
    };
    class pi extends bn {
        constructor(t){
            super(), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
                derivatives: !1,
                fragDepth: !1,
                drawBuffers: !1,
                shaderTextureLOD: !1
            }, this.defaultAttributeValues = {
                color: [
                    1,
                    1,
                    1
                ],
                uv: [
                    0,
                    0
                ],
                uv2: [
                    0,
                    0
                ]
            }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t));
        }
        copy(t) {
            return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = hi(t.uniforms), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
        }
        toJSON(t) {
            const e = super.toJSON(t);
            e.glslVersion = this.glslVersion, e.uniforms = {};
            for(const n in this.uniforms){
                const i = this.uniforms[n].value;
                i && i.isTexture ? e.uniforms[n] = {
                    type: "t",
                    value: i.toJSON(t).uuid
                } : i && i.isColor ? e.uniforms[n] = {
                    type: "c",
                    value: i.getHex()
                } : i && i.isVector2 ? e.uniforms[n] = {
                    type: "v2",
                    value: i.toArray()
                } : i && i.isVector3 ? e.uniforms[n] = {
                    type: "v3",
                    value: i.toArray()
                } : i && i.isVector4 ? e.uniforms[n] = {
                    type: "v4",
                    value: i.toArray()
                } : i && i.isMatrix3 ? e.uniforms[n] = {
                    type: "m3",
                    value: i.toArray()
                } : i && i.isMatrix4 ? e.uniforms[n] = {
                    type: "m4",
                    value: i.toArray()
                } : e.uniforms[n] = {
                    value: i
                };
            }
            Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader;
            const n18 = {};
            for(const t36 in this.extensions)!0 === this.extensions[t36] && (n18[t36] = !0);
            return Object.keys(n18).length > 0 && (e.extensions = n18), e;
        }
    }
    pi.prototype.isShaderMaterial = !0;
    class mi extends ln {
        constructor(){
            super(), this.type = "Camera", this.matrixWorldInverse = new Oe, this.projectionMatrix = new Oe, this.projectionMatrixInverse = new Oe;
        }
        copy(t, e) {
            return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this;
        }
        getWorldDirection(t) {
            this.updateWorldMatrix(!0, !1);
            const e = this.matrixWorld.elements;
            return t.set(-e[8], -e[9], -e[10]).normalize();
        }
        updateMatrixWorld(t) {
            super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
        }
        updateWorldMatrix(t, e) {
            super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    mi.prototype.isCamera = !0;
    class fi extends mi {
        constructor(t = 50, e = 1, n = .1, i = 2e3){
            super(), this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
        }
        copy(t, e) {
            return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
        }
        setFocalLength(t) {
            const e = .5 * this.getFilmHeight() / t;
            this.fov = 2 * xt1 * Math.atan(e), this.updateProjectionMatrix();
        }
        getFocalLength() {
            const t = Math.tan(.5 * yt1 * this.fov);
            return .5 * this.getFilmHeight() / t;
        }
        getEffectiveFOV() {
            return 2 * xt1 * Math.atan(Math.tan(.5 * yt1 * this.fov) / this.zoom);
        }
        getFilmWidth() {
            return this.filmGauge * Math.min(this.aspect, 1);
        }
        getFilmHeight() {
            return this.filmGauge / Math.max(this.aspect, 1);
        }
        setViewOffset(t, e, n, i, r, s) {
            this.aspect = t / e, null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
        }
        clearViewOffset() {
            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
        }
        updateProjectionMatrix() {
            const t = this.near;
            let e = t * Math.tan(.5 * yt1 * this.fov) / this.zoom, n = 2 * e, i = this.aspect * n, r = -0.5 * i;
            const s = this.view;
            if (null !== this.view && this.view.enabled) {
                const t = s.fullWidth, a = s.fullHeight;
                r += s.offsetX * i / t, e -= s.offsetY * n / a, i *= s.width / t, n *= s.height / a;
            }
            const a = this.filmOffset;
            0 !== a && (r += t * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
        }
    }
    fi.prototype.isPerspectiveCamera = !0;
    const gi = 90;
    class vi extends ln {
        constructor(t, e, n){
            if (super(), this.type = "CubeCamera", !0 !== n.isWebGLCubeRenderTarget) return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
            this.renderTarget = n;
            const i = new fi(gi, 1, t, e);
            i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new se(1, 0, 0)), this.add(i);
            const r = new fi(gi, 1, t, e);
            r.layers = this.layers, r.up.set(0, -1, 0), r.lookAt(new se(-1, 0, 0)), this.add(r);
            const s = new fi(gi, 1, t, e);
            s.layers = this.layers, s.up.set(0, 0, 1), s.lookAt(new se(0, 1, 0)), this.add(s);
            const a = new fi(gi, 1, t, e);
            a.layers = this.layers, a.up.set(0, 0, -1), a.lookAt(new se(0, -1, 0)), this.add(a);
            const o = new fi(gi, 1, t, e);
            o.layers = this.layers, o.up.set(0, -1, 0), o.lookAt(new se(0, 0, 1)), this.add(o);
            const l = new fi(gi, 1, t, e);
            l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new se(0, 0, -1)), this.add(l);
        }
        update(t, e) {
            null === this.parent && this.updateMatrixWorld();
            const n = this.renderTarget, [i, r, s, a, o, l] = this.children, c = t.getRenderTarget(), h = t.outputEncoding, u = t.toneMapping, d = t.xr.enabled;
            t.outputEncoding = at, t.toneMapping = 0, t.xr.enabled = !1;
            const p = n.texture.generateMipmaps;
            n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0), t.render(e, i), t.setRenderTarget(n, 1), t.render(e, r), t.setRenderTarget(n, 2), t.render(e, s), t.setRenderTarget(n, 3), t.render(e, a), t.setRenderTarget(n, 4), t.render(e, o), n.texture.generateMipmaps = p, t.setRenderTarget(n, 5), t.render(e, l), t.setRenderTarget(c), t.outputEncoding = h, t.toneMapping = u, t.xr.enabled = d, n.texture.needsPMREMUpdate = !0;
        }
    }
    class yi extends Zt {
        constructor(t, e, n, i, s, a, o, l, c, h){
            super(t = void 0 !== t ? t : [], e = void 0 !== e ? e : r1, n, i, s, a, o, l, c, h), this.flipY = !1;
        }
        get images() {
            return this.image;
        }
        set images(t) {
            this.image = t;
        }
    }
    yi.prototype.isCubeTexture = !0;
    class xi extends Qt {
        constructor(t, e = {}){
            super(t, t, e);
            const n = {
                width: t,
                height: t,
                depth: 1
            }, i = [
                n,
                n,
                n,
                n,
                n,
                n
            ];
            this.texture = new yi(i, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps, this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : f1;
        }
        fromEquirectangularTexture(t, e) {
            this.texture.type = e.type, this.texture.encoding = e.encoding, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
            const n = {
                uniforms: {
                    tEquirect: {
                        value: null
                    }
                },
                vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			",
                fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			"
            }, i = new ci(5, 5, 5), r = new pi({
                name: "CubemapFromEquirect",
                uniforms: hi(n.uniforms),
                vertexShader: n.vertexShader,
                fragmentShader: n.fragmentShader,
                side: 1,
                blending: 0
            });
            r.uniforms.tEquirect.value = e;
            const s = new oi(i, r), a = e.minFilter;
            e.minFilter === v1 && (e.minFilter = f1);
            return new vi(1, 10, this).update(t, s), e.minFilter = a, s.geometry.dispose(), s.material.dispose(), this;
        }
        clear(t, e, n, i) {
            const r = t.getRenderTarget();
            for(let r11 = 0; r11 < 6; r11++)t.setRenderTarget(this, r11), t.clear(e, n, i);
            t.setRenderTarget(r);
        }
    }
    xi.prototype.isWebGLCubeRenderTarget = !0;
    const _i = new se, bi = new se, Mi = new Ct1;
    class wi {
        constructor(t = new se(1, 0, 0), e = 0){
            this.normal = t, this.constant = e;
        }
        set(t, e) {
            return this.normal.copy(t), this.constant = e, this;
        }
        setComponents(t, e, n, i) {
            return this.normal.set(t, e, n), this.constant = i, this;
        }
        setFromNormalAndCoplanarPoint(t, e) {
            return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
        }
        setFromCoplanarPoints(t, e, n) {
            const i = _i.subVectors(n, e).cross(bi.subVectors(t, e)).normalize();
            return this.setFromNormalAndCoplanarPoint(i, t), this;
        }
        copy(t) {
            return this.normal.copy(t.normal), this.constant = t.constant, this;
        }
        normalize() {
            const t = 1 / this.normal.length();
            return this.normal.multiplyScalar(t), this.constant *= t, this;
        }
        negate() {
            return this.constant *= -1, this.normal.negate(), this;
        }
        distanceToPoint(t) {
            return this.normal.dot(t) + this.constant;
        }
        distanceToSphere(t) {
            return this.distanceToPoint(t.center) - t.radius;
        }
        projectPoint(t, e) {
            return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t);
        }
        intersectLine(t, e) {
            const n = t.delta(_i), i = this.normal.dot(n);
            if (0 === i) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
            const r = -(t.start.dot(this.normal) + this.constant) / i;
            return r < 0 || r > 1 ? null : e.copy(n).multiplyScalar(r).add(t.start);
        }
        intersectsLine(t) {
            const e = this.distanceToPoint(t.start), n = this.distanceToPoint(t.end);
            return e < 0 && n > 0 || n < 0 && e > 0;
        }
        intersectsBox(t) {
            return t.intersectsPlane(this);
        }
        intersectsSphere(t) {
            return t.intersectsPlane(this);
        }
        coplanarPoint(t) {
            return t.copy(this.normal).multiplyScalar(-this.constant);
        }
        applyMatrix4(t, e) {
            const n = e || Mi.getNormalMatrix(t), i = this.coplanarPoint(_i).applyMatrix4(t), r = this.normal.applyMatrix3(n).normalize();
            return this.constant = -i.dot(r), this;
        }
        translate(t) {
            return this.constant -= t.dot(this.normal), this;
        }
        equals(t) {
            return t.normal.equals(this.normal) && t.constant === this.constant;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    wi.prototype.isPlane = !0;
    const Si = new Ae, Ti = new se;
    class Ei {
        constructor(t = new wi, e = new wi, n = new wi, i = new wi, r = new wi, s = new wi){
            this.planes = [
                t,
                e,
                n,
                i,
                r,
                s
            ];
        }
        set(t, e, n, i, r, s) {
            const a = this.planes;
            return a[0].copy(t), a[1].copy(e), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(s), this;
        }
        copy(t) {
            const e = this.planes;
            for(let n = 0; n < 6; n++)e[n].copy(t.planes[n]);
            return this;
        }
        setFromProjectionMatrix(t) {
            const e = this.planes, n = t.elements, i = n[0], r = n[1], s = n[2], a = n[3], o = n[4], l = n[5], c = n[6], h = n[7], u = n[8], d = n[9], p = n[10], m = n[11], f = n[12], g = n[13], v = n[14], y = n[15];
            return e[0].setComponents(a - i, h - o, m - u, y - f).normalize(), e[1].setComponents(a + i, h + o, m + u, y + f).normalize(), e[2].setComponents(a + r, h + l, m + d, y + g).normalize(), e[3].setComponents(a - r, h - l, m - d, y - g).normalize(), e[4].setComponents(a - s, h - c, m - p, y - v).normalize(), e[5].setComponents(a + s, h + c, m + p, y + v).normalize(), this;
        }
        intersectsObject(t) {
            const e = t.geometry;
            return null === e.boundingSphere && e.computeBoundingSphere(), Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(Si);
        }
        intersectsSprite(t) {
            return Si.center.set(0, 0, 0), Si.radius = .7071067811865476, Si.applyMatrix4(t.matrixWorld), this.intersectsSphere(Si);
        }
        intersectsSphere(t) {
            const e = this.planes, n = t.center, i = -t.radius;
            for(let t37 = 0; t37 < 6; t37++){
                if (e[t37].distanceToPoint(n) < i) return !1;
            }
            return !0;
        }
        intersectsBox(t) {
            const e = this.planes;
            for(let n = 0; n < 6; n++){
                const i = e[n];
                if (Ti.x = i.normal.x > 0 ? t.max.x : t.min.x, Ti.y = i.normal.y > 0 ? t.max.y : t.min.y, Ti.z = i.normal.z > 0 ? t.max.z : t.min.z, i.distanceToPoint(Ti) < 0) return !1;
            }
            return !0;
        }
        containsPoint(t) {
            const e = this.planes;
            for(let n = 0; n < 6; n++)if (e[n].distanceToPoint(t) < 0) return !1;
            return !0;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    function Ai() {
        let t38 = null, e25 = !1, n = null, i = null;
        function r(e, s) {
            n(e, s), i = t38.requestAnimationFrame(r);
        }
        return {
            start: function() {
                !0 !== e25 && null !== n && (i = t38.requestAnimationFrame(r), e25 = !0);
            },
            stop: function() {
                t38.cancelAnimationFrame(i), e25 = !1;
            },
            setAnimationLoop: function(t) {
                n = t;
            },
            setContext: function(e) {
                t38 = e;
            }
        };
    }
    function Ri(t39, e26) {
        const n19 = e26.isWebGL2, i17 = new WeakMap;
        return {
            get: function(t) {
                return t.isInterleavedBufferAttribute && (t = t.data), i17.get(t);
            },
            remove: function(e) {
                e.isInterleavedBufferAttribute && (e = e.data);
                const n = i17.get(e);
                n && (t39.deleteBuffer(n.buffer), i17.delete(e));
            },
            update: function(e27, r12) {
                if (e27.isGLBufferAttribute) {
                    const t = i17.get(e27);
                    return void ((!t || t.version < e27.version) && i17.set(e27, {
                        buffer: e27.buffer,
                        type: e27.type,
                        bytesPerElement: e27.elementSize,
                        version: e27.version
                    }));
                }
                e27.isInterleavedBufferAttribute && (e27 = e27.data);
                const s6 = i17.get(e27);
                void 0 === s6 ? i17.set(e27, function(e, i) {
                    const r = e.array, s = e.usage, a = t39.createBuffer();
                    let o;
                    if (t39.bindBuffer(i, a), t39.bufferData(i, r, s), e.onUploadCallback(), r instanceof Float32Array) o = 5126;
                    else if (r instanceof Uint16Array) {
                        if (e.isFloat16BufferAttribute) {
                            if (!n19) throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
                            o = 5131;
                        } else o = 5123;
                    } else if (r instanceof Int16Array) o = 5122;
                    else if (r instanceof Uint32Array) o = 5125;
                    else if (r instanceof Int32Array) o = 5124;
                    else if (r instanceof Int8Array) o = 5120;
                    else if (r instanceof Uint8Array) o = 5121;
                    else {
                        if (!(r instanceof Uint8ClampedArray)) throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r);
                        o = 5121;
                    }
                    return {
                        buffer: a,
                        type: o,
                        bytesPerElement: r.BYTES_PER_ELEMENT,
                        version: e.version
                    };
                }(e27, r12)) : s6.version < e27.version && (!function(e, i, r) {
                    const s = i.array, a = i.updateRange;
                    t39.bindBuffer(r, e), -1 === a.count ? t39.bufferSubData(r, 0, s) : (n19 ? t39.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s, a.offset, a.count) : t39.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s.subarray(a.offset, a.offset + a.count)), a.count = -1);
                }(s6.buffer, e27, r12), s6.version = e27.version);
            }
        };
    }
    class Ci extends Vn {
        constructor(t = 1, e = 1, n = 1, i = 1){
            super(), this.type = "PlaneGeometry", this.parameters = {
                width: t,
                height: e,
                widthSegments: n,
                heightSegments: i
            };
            const r = t / 2, s = e / 2, a = Math.floor(n), o = Math.floor(i), l = a + 1, c = o + 1, h = t / a, u = e / o, d = [], p = [], m = [], f = [];
            for(let t40 = 0; t40 < c; t40++){
                const e = t40 * u - s;
                for(let n = 0; n < l; n++){
                    const i = n * h - r;
                    p.push(i, -e, 0), m.push(0, 0, 1), f.push(n / a), f.push(1 - t40 / o);
                }
            }
            for(let t41 = 0; t41 < o; t41++)for(let e28 = 0; e28 < a; e28++){
                const n = e28 + l * t41, i = e28 + l * (t41 + 1), r = e28 + 1 + l * (t41 + 1), s = e28 + 1 + l * t41;
                d.push(n, i, s), d.push(i, r, s);
            }
            this.setIndex(d), this.setAttribute("position", new Nn(p, 3)), this.setAttribute("normal", new Nn(m, 3)), this.setAttribute("uv", new Nn(f, 2));
        }
        static fromJSON(t) {
            return new Ci(t.width, t.height, t.widthSegments, t.heightSegments);
        }
    }
    const Li = {
        alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
        alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
        alphatest_fragment: "#ifdef USE_ALPHATEST\n	if ( diffuseColor.a < alphaTest ) discard;\n#endif",
        alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif",
        aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif",
        aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
        begin_vertex: "vec3 transformed = vec3( position );",
        beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif",
        bsdfs: "vec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n	float D = D_GGX( alpha, dotNH );\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\nfloat G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif",
        bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif",
        clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n		plane = clippingPlanes[ i ];\n		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n	}\n	#pragma unroll_loop_end\n	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n		bool clipped = true;\n		#pragma unroll_loop_start\n		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n		}\n		#pragma unroll_loop_end\n		if ( clipped ) discard;\n	#endif\n#endif",
        clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
        clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif",
        clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif",
        color_fragment: "#if defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#elif defined( USE_COLOR )\n	diffuseColor.rgb *= vColor;\n#endif",
        color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR )\n	varying vec3 vColor;\n#endif",
        color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	varying vec3 vColor;\n#endif",
        color_vertex: "#if defined( USE_COLOR_ALPHA )\n	vColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	vColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n	vColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.xyz *= instanceColor.xyz;\n#endif",
        common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\nstruct GeometricContext {\n	vec3 position;\n	vec3 normal;\n	vec3 viewDir;\n#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n	mat3 tmp;\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n	return tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n	return dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}",
        cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define r0 1.0\n	#define v0 0.339\n	#define m0 - 2.0\n	#define r1 0.8\n	#define v1 0.276\n	#define m1 - 1.0\n	#define r4 0.4\n	#define v4 0.046\n	#define m4 2.0\n	#define r5 0.305\n	#define v5 0.016\n	#define m5 3.0\n	#define r6 0.21\n	#define v6 0.0038\n	#define m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= r1 ) {\n			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n		} else if ( roughness >= r4 ) {\n			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n		} else if ( roughness >= r5 ) {\n			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n		} else if ( roughness >= r6 ) {\n			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif",
        defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n	mat3 m = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n	transformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif",
        displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif",
        displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
        emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vUv );\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
        emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif",
        encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
        encodings_pars_fragment: "vec4 LinearToLinear( in vec4 value ) {\n	return value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
        envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif",
        envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	\n#endif",
        envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif",
        envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif",
        envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#if defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#if defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n#endif",
        envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif",
        fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif",
        fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif",
        fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
        fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",
        gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n	#endif\n}",
        lightmap_fragment: "#ifdef USE_LIGHTMAP\n	vec4 lightMapTexel = texture2D( lightMap, vUv2 );\n	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n	reflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",
        lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
        lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n	vLightBack = vec3( 0.0 );\n	vIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );\n#ifdef DOUBLE_SIDED\n	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );\n#endif\n#if NUM_POINT_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		getPointLightInfo( pointLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		getSpotLightInfo( spotLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n		#ifdef DOUBLE_SIDED\n			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif",
        lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n		if ( cutoffDistance > 0.0 ) {\n			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n		}\n		return distanceFalloff;\n	#else\n		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n		}\n		return 1.0;\n	#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometry.position;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometry.position;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif",
        lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
        lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )	(0)",
        lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
        lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )	(0)",
        lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	#ifdef SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULARINTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n		#endif\n		#ifdef USE_SPECULARCOLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEENCOLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n	#ifdef USE_SHEENROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n	#endif\n#endif",
        lights_physical_pars_fragment: "struct PhysicalMaterial {\n	vec3 diffuseColor;\n	float roughness;\n	vec3 specularColor;\n	float specularF90;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n	return saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n	return fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	return specularColor * fab.x + specularF90 * fab.y;\n}\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometry.normal;\n		vec3 viewDir = geometry.viewDir;\n		vec3 position = geometry.position;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(		0, 1,		0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n	#endif\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n	reflectedLight.indirectSpecular += radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
        lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n	geometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
        lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vUv2 );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getIBLIrradiance( geometry.normal );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif",
        lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
        logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
        logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
        logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n		varying float vIsPerspective;\n	#else\n		uniform float logDepthBufFC;\n	#endif\n#endif",
        logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		vFragDepth = 1.0 + gl_Position.w;\n		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n	#else\n		if ( isPerspectiveMatrix( projectionMatrix ) ) {\n			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n			gl_Position.z *= gl_Position.w;\n		}\n	#endif\n#endif",
        map_fragment: "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif",
        map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif",
        map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
        map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	uniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
        metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vUv );\n	metalnessFactor *= texelMetalness.b;\n#endif",
        metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
        morphcolor_vertex: "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif",
        morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n		}\n	#else\n		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n	#endif\n#endif",
        morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	uniform float morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n		uniform sampler2DArray morphTargetsTexture;\n		uniform ivec2 morphTargetsTextureSize;\n		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n			int y = texelIndex / morphTargetsTextureSize.x;\n			int x = texelIndex - y * morphTargetsTextureSize.x;\n			ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n			return texelFetch( morphTargetsTexture, morphUV, 0 );\n		}\n	#else\n		#ifndef USE_MORPHNORMALS\n			uniform float morphTargetInfluences[ 8 ];\n		#else\n			uniform float morphTargetInfluences[ 4 ];\n		#endif\n	#endif\n#endif",
        morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n		}\n	#else\n		transformed += morphTarget0 * morphTargetInfluences[ 0 ];\n		transformed += morphTarget1 * morphTargetInfluences[ 1 ];\n		transformed += morphTarget2 * morphTargetInfluences[ 2 ];\n		transformed += morphTarget3 * morphTargetInfluences[ 3 ];\n		#ifndef USE_MORPHNORMALS\n			transformed += morphTarget4 * morphTargetInfluences[ 4 ];\n			transformed += morphTarget5 * morphTargetInfluences[ 5 ];\n			transformed += morphTarget6 * morphTargetInfluences[ 6 ];\n			transformed += morphTarget7 * morphTargetInfluences[ 7 ];\n		#endif\n	#endif\n#endif",
        normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	#ifdef USE_TANGENT\n		vec3 tangent = normalize( vTangent );\n		vec3 bitangent = normalize( vBitangent );\n		#ifdef DOUBLE_SIDED\n			tangent = tangent * faceDirection;\n			bitangent = bitangent * faceDirection;\n		#endif\n		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n			mat3 vTBN = mat3( tangent, bitangent, normal );\n		#endif\n	#endif\n#endif\nvec3 geometryNormal = normal;",
        normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	#ifdef USE_TANGENT\n		normal = normalize( vTBN * mapN );\n	#else\n		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n	#endif\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
        normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
        normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
        normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif",
        normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n	}\n#endif",
        clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = geometryNormal;\n#endif",
        clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	#ifdef USE_TANGENT\n		clearcoatNormal = normalize( vTBN * clearcoatMapN );\n	#else\n		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n	#endif\n#endif",
        clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif",
        output_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
        packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n	vec4 r = vec4( fract( v * PackFactors ), v );\n	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n	return linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
        premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif",
        project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
        dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
        dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif",
        roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vUv );\n	roughnessFactor *= texelRoughness.g;\n#endif",
        roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
        shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return unpackRGBATo2Half( texture2D( shadow, uv ) );\n	}\n	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		float hard_shadow = step( compare , distribution.x );\n		if (hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x ;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n		bool inFrustum = all( inFrustumVec );\n		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n		bool frustumTest = all( frustumTestVec );\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx = texelSize.x;\n			float dy = texelSize.y;\n			vec2 uv = shadowCoord.xy;\n			vec2 f = fract( uv * shadowMapSize + 0.5 );\n			uv -= f * texelSize;\n			shadow = (\n				texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n							texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n							f.x ),\n					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n							texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n							f.x ),\n					 f.y )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return shadow;\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n		vec3 lightToPosition = shadowCoord.xyz;\n		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;\n		vec3 bd3D = normalize( lightToPosition );\n		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n			return (\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n		#endif\n	}\n#endif",
        shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif",
        shadowmap_vertex: "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		vec4 shadowWorldPosition;\n	#endif\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n	#endif\n#endif",
        shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}",
        skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
        skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	#ifdef BONE_TEXTURE\n		uniform highp sampler2D boneTexture;\n		uniform int boneTextureSize;\n		mat4 getBoneMatrix( const in float i ) {\n			float j = i * 4.0;\n			float x = mod( j, float( boneTextureSize ) );\n			float y = floor( j / float( boneTextureSize ) );\n			float dx = 1.0 / float( boneTextureSize );\n			float dy = 1.0 / float( boneTextureSize );\n			y = dy * ( y + 0.5 );\n			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n			mat4 bone = mat4( v1, v2, v3, v4 );\n			return bone;\n		}\n	#else\n		uniform mat4 boneMatrices[ MAX_BONES ];\n		mat4 getBoneMatrix( const in float i ) {\n			mat4 bone = boneMatrices[ int(i) ];\n			return bone;\n		}\n	#endif\n#endif",
        skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
        skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif",
        specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
        specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
        tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
        tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(	1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,	1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,	1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
        transmission_fragment: "#ifdef USE_TRANSMISSION\n	float transmissionAlpha = 1.0;\n	float transmissionFactor = transmission;\n	float thicknessFactor = thickness;\n	#ifdef USE_TRANSMISSIONMAP\n		transmissionFactor *= texture2D( transmissionMap, vUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		thicknessFactor *= texture2D( thicknessMap, vUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmission = getIBLVolumeRefraction(\n		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,\n		attenuationColor, attenuationDistance );\n	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );\n	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );\n#endif",
        transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		#ifdef texture2DLodEXT\n			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n		#else\n			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n		#endif\n	}\n	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( attenuationDistance == 0.0 ) {\n			return radiance;\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n		vec3 refractedRayExit = position + transmissionRay;\n		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n		vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n		refractionCoords += 1.0;\n		refractionCoords /= 2.0;\n		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n	}\n#endif",
        uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n	varying vec2 vUv;\n#endif",
        uv_pars_vertex: "#ifdef USE_UV\n	#ifdef UVS_VERTEX_ONLY\n		vec2 vUv;\n	#else\n		varying vec2 vUv;\n	#endif\n	uniform mat3 uvTransform;\n#endif",
        uv_vertex: "#ifdef USE_UV\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
        uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	varying vec2 vUv2;\n#endif",
        uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	attribute vec2 uv2;\n	varying vec2 vUv2;\n	uniform mat3 uv2Transform;\n#endif",
        uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
        worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif",
        background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
        background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n	gl_FragColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );\n	#endif\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
        cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
        cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	vec3 vReflect = vWorldDirection;\n	#include <envmap_fragment>\n	gl_FragColor = envColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
        depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}",
        depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <logdepthbuf_fragment>\n	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#endif\n}",
        distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}",
        distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}",
        equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
        equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
        linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
        linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
        meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}",
        meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vUv2 );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n	varying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <lights_lambert_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
        meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n	varying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <emissivemap_fragment>\n	#ifdef DOUBLE_SIDED\n		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n	#else\n		reflectedLight.indirectDiffuse += vIndirectFront;\n	#endif\n	#include <lightmap_fragment>\n	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );\n	#ifdef DOUBLE_SIDED\n		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n	#else\n		reflectedLight.directDiffuse = vLightFront;\n	#endif\n	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}",
        meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}",
        meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}",
        meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
        meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}",
        meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULARINTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n	#ifdef USE_SPECULARCOLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEENCOLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEENROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n	#endif\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
        meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}",
        points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
        shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
        shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}",
        sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n	vec2 scale;\n	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
        sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}"
    }, Pi = {
        common: {
            diffuse: {
                value: new Wt(16777215)
            },
            opacity: {
                value: 1
            },
            map: {
                value: null
            },
            uvTransform: {
                value: new Ct1
            },
            uv2Transform: {
                value: new Ct1
            },
            alphaMap: {
                value: null
            },
            alphaTest: {
                value: 0
            }
        },
        specularmap: {
            specularMap: {
                value: null
            }
        },
        envmap: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            reflectivity: {
                value: 1
            },
            ior: {
                value: 1.5
            },
            refractionRatio: {
                value: .98
            }
        },
        aomap: {
            aoMap: {
                value: null
            },
            aoMapIntensity: {
                value: 1
            }
        },
        lightmap: {
            lightMap: {
                value: null
            },
            lightMapIntensity: {
                value: 1
            }
        },
        emissivemap: {
            emissiveMap: {
                value: null
            }
        },
        bumpmap: {
            bumpMap: {
                value: null
            },
            bumpScale: {
                value: 1
            }
        },
        normalmap: {
            normalMap: {
                value: null
            },
            normalScale: {
                value: new Rt(1, 1)
            }
        },
        displacementmap: {
            displacementMap: {
                value: null
            },
            displacementScale: {
                value: 1
            },
            displacementBias: {
                value: 0
            }
        },
        roughnessmap: {
            roughnessMap: {
                value: null
            }
        },
        metalnessmap: {
            metalnessMap: {
                value: null
            }
        },
        gradientmap: {
            gradientMap: {
                value: null
            }
        },
        fog: {
            fogDensity: {
                value: 25e-5
            },
            fogNear: {
                value: 1
            },
            fogFar: {
                value: 2e3
            },
            fogColor: {
                value: new Wt(16777215)
            }
        },
        lights: {
            ambientLightColor: {
                value: []
            },
            lightProbe: {
                value: []
            },
            directionalLights: {
                value: [],
                properties: {
                    direction: {},
                    color: {}
                }
            },
            directionalLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            directionalShadowMap: {
                value: []
            },
            directionalShadowMatrix: {
                value: []
            },
            spotLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    direction: {},
                    distance: {},
                    coneCos: {},
                    penumbraCos: {},
                    decay: {}
                }
            },
            spotLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            spotShadowMap: {
                value: []
            },
            spotShadowMatrix: {
                value: []
            },
            pointLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    decay: {},
                    distance: {}
                }
            },
            pointLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {},
                    shadowCameraNear: {},
                    shadowCameraFar: {}
                }
            },
            pointShadowMap: {
                value: []
            },
            pointShadowMatrix: {
                value: []
            },
            hemisphereLights: {
                value: [],
                properties: {
                    direction: {},
                    skyColor: {},
                    groundColor: {}
                }
            },
            rectAreaLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    width: {},
                    height: {}
                }
            },
            ltc_1: {
                value: null
            },
            ltc_2: {
                value: null
            }
        },
        points: {
            diffuse: {
                value: new Wt(16777215)
            },
            opacity: {
                value: 1
            },
            size: {
                value: 1
            },
            scale: {
                value: 1
            },
            map: {
                value: null
            },
            alphaMap: {
                value: null
            },
            alphaTest: {
                value: 0
            },
            uvTransform: {
                value: new Ct1
            }
        },
        sprite: {
            diffuse: {
                value: new Wt(16777215)
            },
            opacity: {
                value: 1
            },
            center: {
                value: new Rt(.5, .5)
            },
            rotation: {
                value: 0
            },
            map: {
                value: null
            },
            alphaMap: {
                value: null
            },
            alphaTest: {
                value: 0
            },
            uvTransform: {
                value: new Ct1
            }
        }
    }, Di = {
        basic: {
            uniforms: ui([
                Pi.common,
                Pi.specularmap,
                Pi.envmap,
                Pi.aomap,
                Pi.lightmap,
                Pi.fog
            ]),
            vertexShader: Li.meshbasic_vert,
            fragmentShader: Li.meshbasic_frag
        },
        lambert: {
            uniforms: ui([
                Pi.common,
                Pi.specularmap,
                Pi.envmap,
                Pi.aomap,
                Pi.lightmap,
                Pi.emissivemap,
                Pi.fog,
                Pi.lights,
                {
                    emissive: {
                        value: new Wt(0)
                    }
                }
            ]),
            vertexShader: Li.meshlambert_vert,
            fragmentShader: Li.meshlambert_frag
        },
        phong: {
            uniforms: ui([
                Pi.common,
                Pi.specularmap,
                Pi.envmap,
                Pi.aomap,
                Pi.lightmap,
                Pi.emissivemap,
                Pi.bumpmap,
                Pi.normalmap,
                Pi.displacementmap,
                Pi.fog,
                Pi.lights,
                {
                    emissive: {
                        value: new Wt(0)
                    },
                    specular: {
                        value: new Wt(1118481)
                    },
                    shininess: {
                        value: 30
                    }
                }
            ]),
            vertexShader: Li.meshphong_vert,
            fragmentShader: Li.meshphong_frag
        },
        standard: {
            uniforms: ui([
                Pi.common,
                Pi.envmap,
                Pi.aomap,
                Pi.lightmap,
                Pi.emissivemap,
                Pi.bumpmap,
                Pi.normalmap,
                Pi.displacementmap,
                Pi.roughnessmap,
                Pi.metalnessmap,
                Pi.fog,
                Pi.lights,
                {
                    emissive: {
                        value: new Wt(0)
                    },
                    roughness: {
                        value: 1
                    },
                    metalness: {
                        value: 0
                    },
                    envMapIntensity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: Li.meshphysical_vert,
            fragmentShader: Li.meshphysical_frag
        },
        toon: {
            uniforms: ui([
                Pi.common,
                Pi.aomap,
                Pi.lightmap,
                Pi.emissivemap,
                Pi.bumpmap,
                Pi.normalmap,
                Pi.displacementmap,
                Pi.gradientmap,
                Pi.fog,
                Pi.lights,
                {
                    emissive: {
                        value: new Wt(0)
                    }
                }
            ]),
            vertexShader: Li.meshtoon_vert,
            fragmentShader: Li.meshtoon_frag
        },
        matcap: {
            uniforms: ui([
                Pi.common,
                Pi.bumpmap,
                Pi.normalmap,
                Pi.displacementmap,
                Pi.fog,
                {
                    matcap: {
                        value: null
                    }
                }
            ]),
            vertexShader: Li.meshmatcap_vert,
            fragmentShader: Li.meshmatcap_frag
        },
        points: {
            uniforms: ui([
                Pi.points,
                Pi.fog
            ]),
            vertexShader: Li.points_vert,
            fragmentShader: Li.points_frag
        },
        dashed: {
            uniforms: ui([
                Pi.common,
                Pi.fog,
                {
                    scale: {
                        value: 1
                    },
                    dashSize: {
                        value: 1
                    },
                    totalSize: {
                        value: 2
                    }
                }
            ]),
            vertexShader: Li.linedashed_vert,
            fragmentShader: Li.linedashed_frag
        },
        depth: {
            uniforms: ui([
                Pi.common,
                Pi.displacementmap
            ]),
            vertexShader: Li.depth_vert,
            fragmentShader: Li.depth_frag
        },
        normal: {
            uniforms: ui([
                Pi.common,
                Pi.bumpmap,
                Pi.normalmap,
                Pi.displacementmap,
                {
                    opacity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: Li.meshnormal_vert,
            fragmentShader: Li.meshnormal_frag
        },
        sprite: {
            uniforms: ui([
                Pi.sprite,
                Pi.fog
            ]),
            vertexShader: Li.sprite_vert,
            fragmentShader: Li.sprite_frag
        },
        background: {
            uniforms: {
                uvTransform: {
                    value: new Ct1
                },
                t2D: {
                    value: null
                }
            },
            vertexShader: Li.background_vert,
            fragmentShader: Li.background_frag
        },
        cube: {
            uniforms: ui([
                Pi.envmap,
                {
                    opacity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: Li.cube_vert,
            fragmentShader: Li.cube_frag
        },
        equirect: {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: Li.equirect_vert,
            fragmentShader: Li.equirect_frag
        },
        distanceRGBA: {
            uniforms: ui([
                Pi.common,
                Pi.displacementmap,
                {
                    referencePosition: {
                        value: new se
                    },
                    nearDistance: {
                        value: 1
                    },
                    farDistance: {
                        value: 1e3
                    }
                }
            ]),
            vertexShader: Li.distanceRGBA_vert,
            fragmentShader: Li.distanceRGBA_frag
        },
        shadow: {
            uniforms: ui([
                Pi.lights,
                Pi.fog,
                {
                    color: {
                        value: new Wt(0)
                    },
                    opacity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: Li.shadow_vert,
            fragmentShader: Li.shadow_frag
        }
    };
    function Ii(t42, e29, n20, i, r13, s7) {
        const a = new Wt(0);
        let o, c, h = !0 === r13 ? 0 : 1, u = null, d = 0, p = null;
        function m(t, e) {
            n20.buffers.color.setClear(t.r, t.g, t.b, e, s7);
        }
        return {
            getClearColor: function() {
                return a;
            },
            setClearColor: function(t, e = 1) {
                a.set(t), h = e, m(a, h);
            },
            getClearAlpha: function() {
                return h;
            },
            setClearAlpha: function(t) {
                h = t, m(a, h);
            },
            render: function(n21, r) {
                let s = !1, f = !0 === r.isScene ? r.background : null;
                f && f.isTexture && (f = e29.get(f));
                const g = t42.xr, v = g.getSession && g.getSession();
                v && "additive" === v.environmentBlendMode && (f = null), null === f ? m(a, h) : f && f.isColor && (m(f, 1), s = !0), (t42.autoClear || s) && t42.clear(t42.autoClearColor, t42.autoClearDepth, t42.autoClearStencil), f && (f.isCubeTexture || f.mapping === l1) ? (void 0 === c && (c = new oi(new ci(1, 1, 1), new pi({
                    name: "BackgroundCubeMaterial",
                    uniforms: hi(Di.cube.uniforms),
                    vertexShader: Di.cube.vertexShader,
                    fragmentShader: Di.cube.fragmentShader,
                    side: 1,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1
                })), c.geometry.deleteAttribute("normal"), c.geometry.deleteAttribute("uv"), c.onBeforeRender = function(t, e, n) {
                    this.matrixWorld.copyPosition(n.matrixWorld);
                }, Object.defineProperty(c.material, "envMap", {
                    get: function() {
                        return this.uniforms.envMap.value;
                    }
                }), i.update(c)), c.material.uniforms.envMap.value = f, c.material.uniforms.flipEnvMap.value = f.isCubeTexture && !1 === f.isRenderTargetTexture ? -1 : 1, u === f && d === f.version && p === t42.toneMapping || (c.material.needsUpdate = !0, u = f, d = f.version, p = t42.toneMapping), n21.unshift(c, c.geometry, c.material, 0, 0, null)) : f && f.isTexture && (void 0 === o && (o = new oi(new Ci(2, 2), new pi({
                    name: "BackgroundMaterial",
                    uniforms: hi(Di.background.uniforms),
                    vertexShader: Di.background.vertexShader,
                    fragmentShader: Di.background.fragmentShader,
                    side: 0,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1
                })), o.geometry.deleteAttribute("normal"), Object.defineProperty(o.material, "map", {
                    get: function() {
                        return this.uniforms.t2D.value;
                    }
                }), i.update(o)), o.material.uniforms.t2D.value = f, !0 === f.matrixAutoUpdate && f.updateMatrix(), o.material.uniforms.uvTransform.value.copy(f.matrix), u === f && d === f.version && p === t42.toneMapping || (o.material.needsUpdate = !0, u = f, d = f.version, p = t42.toneMapping), n21.unshift(o, o.geometry, o.material, 0, 0, null));
            }
        };
    }
    function Ni(t44, e30, n22, i18) {
        const r14 = t44.getParameter(34921), s8 = i18.isWebGL2 ? null : e30.get("OES_vertex_array_object"), a5 = i18.isWebGL2 || null !== s8, o4 = {}, l3 = p(null);
        let c3 = l3, h2 = !1;
        function u4(e) {
            return i18.isWebGL2 ? t44.bindVertexArray(e) : s8.bindVertexArrayOES(e);
        }
        function d2(e) {
            return i18.isWebGL2 ? t44.deleteVertexArray(e) : s8.deleteVertexArrayOES(e);
        }
        function p(t) {
            const e = [], n = [], i = [];
            for(let t43 = 0; t43 < r14; t43++)e[t43] = 0, n[t43] = 0, i[t43] = 0;
            return {
                geometry: null,
                program: null,
                wireframe: !1,
                newAttributes: e,
                enabledAttributes: n,
                attributeDivisors: i,
                object: t,
                attributes: {},
                index: null
            };
        }
        function m() {
            const t = c3.newAttributes;
            for(let e = 0, n = t.length; e < n; e++)t[e] = 0;
        }
        function f(t) {
            g(t, 0);
        }
        function g(n, r) {
            const s = c3.newAttributes, a = c3.enabledAttributes, o = c3.attributeDivisors;
            if (s[n] = 1, 0 === a[n] && (t44.enableVertexAttribArray(n), a[n] = 1), o[n] !== r) (i18.isWebGL2 ? t44 : e30.get("ANGLE_instanced_arrays"))[i18.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r), o[n] = r;
        }
        function v() {
            const e = c3.newAttributes, n = c3.enabledAttributes;
            for(let i = 0, r = n.length; i < r; i++)n[i] !== e[i] && (t44.disableVertexAttribArray(i), n[i] = 0);
        }
        function y(e, n, r, s, a, o) {
            !0 !== i18.isWebGL2 || 5124 !== r && 5125 !== r ? t44.vertexAttribPointer(e, n, r, s, a, o) : t44.vertexAttribIPointer(e, n, r, a, o);
        }
        function x2() {
            _2(), h2 = !0, c3 !== l3 && (c3 = l3, u4(c3.object));
        }
        function _2() {
            l3.geometry = null, l3.program = null, l3.wireframe = !1;
        }
        return {
            setup: function(r15, l4, d3, x, _) {
                let b = !1;
                if (a5) {
                    const e31 = function(e, n, r) {
                        const a = !0 === r.wireframe;
                        let l = o4[e.id];
                        void 0 === l && (l = {}, o4[e.id] = l);
                        let c = l[n.id];
                        void 0 === c && (c = {}, l[n.id] = c);
                        let h = c[a];
                        void 0 === h && (h = p(i18.isWebGL2 ? t44.createVertexArray() : s8.createVertexArrayOES()), c[a] = h);
                        return h;
                    }(x, d3, l4);
                    c3 !== e31 && (c3 = e31, u4(c3.object)), b = function(t, e) {
                        const n = c3.attributes, i = t.attributes;
                        let r = 0;
                        for(const t45 in i){
                            const e = n[t45], s = i[t45];
                            if (void 0 === e) return !0;
                            if (e.attribute !== s) return !0;
                            if (e.data !== s.data) return !0;
                            r++;
                        }
                        return c3.attributesNum !== r || c3.index !== e;
                    }(x, _), b && function(t, e) {
                        const n = {}, i = t.attributes;
                        let r = 0;
                        for(const t46 in i){
                            const e = i[t46], s = {};
                            s.attribute = e, e.data && (s.data = e.data), n[t46] = s, r++;
                        }
                        c3.attributes = n, c3.attributesNum = r, c3.index = e;
                    }(x, _);
                } else {
                    const t = !0 === l4.wireframe;
                    c3.geometry === x.id && c3.program === d3.id && c3.wireframe === t || (c3.geometry = x.id, c3.program = d3.id, c3.wireframe = t, b = !0);
                }
                !0 === r15.isInstancedMesh && (b = !0), null !== _ && n22.update(_, 34963), (b || h2) && (h2 = !1, function(r, s, a, o) {
                    if (!1 === i18.isWebGL2 && (r.isInstancedMesh || o.isInstancedBufferGeometry) && null === e30.get("ANGLE_instanced_arrays")) return;
                    m();
                    const l = o.attributes, c = a.getAttributes(), h = s.defaultAttributeValues;
                    for(const e in c){
                        const i = c[e];
                        if (i.location >= 0) {
                            let s = l[e];
                            if (void 0 === s && ("instanceMatrix" === e && r.instanceMatrix && (s = r.instanceMatrix), "instanceColor" === e && r.instanceColor && (s = r.instanceColor)), void 0 !== s) {
                                const e = s.normalized, a = s.itemSize, l = n22.get(s);
                                if (void 0 === l) continue;
                                const c = l.buffer, h = l.type, u = l.bytesPerElement;
                                if (s.isInterleavedBufferAttribute) {
                                    const n = s.data, l = n.stride, d = s.offset;
                                    if (n.isInstancedInterleavedBuffer) {
                                        for(let t = 0; t < i.locationSize; t++)g(i.location + t, n.meshPerAttribute);
                                        !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = n.meshPerAttribute * n.count);
                                    } else for(let t = 0; t < i.locationSize; t++)f(i.location + t);
                                    t44.bindBuffer(34962, c);
                                    for(let t47 = 0; t47 < i.locationSize; t47++)y(i.location + t47, a / i.locationSize, h, e, l * u, (d + a / i.locationSize * t47) * u);
                                } else {
                                    if (s.isInstancedBufferAttribute) {
                                        for(let t = 0; t < i.locationSize; t++)g(i.location + t, s.meshPerAttribute);
                                        !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = s.meshPerAttribute * s.count);
                                    } else for(let t = 0; t < i.locationSize; t++)f(i.location + t);
                                    t44.bindBuffer(34962, c);
                                    for(let t48 = 0; t48 < i.locationSize; t48++)y(i.location + t48, a / i.locationSize, h, e, a * u, a / i.locationSize * t48 * u);
                                }
                            } else if (void 0 !== h) {
                                const n = h[e];
                                if (void 0 !== n) switch(n.length){
                                    case 2:
                                        t44.vertexAttrib2fv(i.location, n);
                                        break;
                                    case 3:
                                        t44.vertexAttrib3fv(i.location, n);
                                        break;
                                    case 4:
                                        t44.vertexAttrib4fv(i.location, n);
                                        break;
                                    default:
                                        t44.vertexAttrib1fv(i.location, n);
                                }
                            }
                        }
                    }
                    v();
                }(r15, l4, d3, x), null !== _ && t44.bindBuffer(34963, n22.get(_).buffer));
            },
            reset: x2,
            resetDefaultState: _2,
            dispose: function() {
                x2();
                for(const t in o4){
                    const e = o4[t];
                    for(const t49 in e){
                        const n = e[t49];
                        for(const t in n)d2(n[t].object), delete n[t];
                        delete e[t49];
                    }
                    delete o4[t];
                }
            },
            releaseStatesOfGeometry: function(t) {
                if (void 0 === o4[t.id]) return;
                const e = o4[t.id];
                for(const t50 in e){
                    const n = e[t50];
                    for(const t in n)d2(n[t].object), delete n[t];
                    delete e[t50];
                }
                delete o4[t.id];
            },
            releaseStatesOfProgram: function(t) {
                for(const e in o4){
                    const n = o4[e];
                    if (void 0 === n[t.id]) continue;
                    const i = n[t.id];
                    for(const t51 in i)d2(i[t51].object), delete i[t51];
                    delete n[t.id];
                }
            },
            initAttributes: m,
            enableAttribute: f,
            disableUnusedAttributes: v
        };
    }
    function Bi(t52, e33, n, i19) {
        const r = i19.isWebGL2;
        let s;
        this.setMode = function(t) {
            s = t;
        }, this.render = function(e, i) {
            t52.drawArrays(s, e, i), n.update(i, s, 1);
        }, this.renderInstances = function(i, a, o) {
            if (0 === o) return;
            let l, c;
            if (r) l = t52, c = "drawArraysInstanced";
            else if (l = e33.get("ANGLE_instanced_arrays"), c = "drawArraysInstancedANGLE", null === l) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            l[c](s, i, a, o), n.update(a, s, o);
        };
    }
    function Oi(t, e34, n23) {
        let i;
        function r(e) {
            if ("highp" === e) {
                if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
                e = "mediump";
            }
            return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
        }
        const s = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && t instanceof WebGL2ComputeRenderingContext;
        let a = void 0 !== n23.precision ? n23.precision : "highp";
        const o = r(a);
        o !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", o, "instead."), a = o);
        const l = s || e34.has("WEBGL_draw_buffers"), c = !0 === n23.logarithmicDepthBuffer, h = t.getParameter(34930), u = t.getParameter(35660), d = t.getParameter(3379), p = t.getParameter(34076), m = t.getParameter(34921), f = t.getParameter(36347), g = t.getParameter(36348), v = t.getParameter(36349), y = u > 0, x = s || e34.has("OES_texture_float");
        return {
            isWebGL2: s,
            drawBuffers: l,
            getMaxAnisotropy: function() {
                if (void 0 !== i) return i;
                if (!0 === e34.has("EXT_texture_filter_anisotropic")) {
                    const n = e34.get("EXT_texture_filter_anisotropic");
                    i = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                } else i = 0;
                return i;
            },
            getMaxPrecision: r,
            precision: a,
            logarithmicDepthBuffer: c,
            maxTextures: h,
            maxVertexTextures: u,
            maxTextureSize: d,
            maxCubemapSize: p,
            maxAttributes: m,
            maxVertexUniforms: f,
            maxVaryings: g,
            maxFragmentUniforms: v,
            vertexTextures: y,
            floatFragmentTextures: x,
            floatVertexTextures: y && x,
            maxSamples: s ? t.getParameter(36183) : 0
        };
    }
    function zi(t53) {
        const e36 = this;
        let n24 = null, i20 = 0, r16 = !1, s9 = !1;
        const a6 = new wi, o5 = new Ct1, l = {
            value: null,
            needsUpdate: !1
        };
        function c4() {
            l.value !== n24 && (l.value = n24, l.needsUpdate = i20 > 0), e36.numPlanes = i20, e36.numIntersection = 0;
        }
        function h(t, n, i, r) {
            const s = null !== t ? t.length : 0;
            let c = null;
            if (0 !== s) {
                if (c = l.value, !0 !== r || null === c) {
                    const e = i + 4 * s, r = n.matrixWorldInverse;
                    o5.getNormalMatrix(r), (null === c || c.length < e) && (c = new Float32Array(e));
                    for(let e35 = 0, n25 = i; e35 !== s; ++e35, n25 += 4)a6.copy(t[e35]).applyMatrix4(r, o5), a6.normal.toArray(c, n25), c[n25 + 3] = a6.constant;
                }
                l.value = c, l.needsUpdate = !0;
            }
            return e36.numPlanes = s, e36.numIntersection = 0, c;
        }
        this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t, e, s) {
            const a = 0 !== t.length || e || 0 !== i20 || r16;
            return r16 = e, n24 = h(t, s, 0), i20 = t.length, a;
        }, this.beginShadows = function() {
            s9 = !0, h(null);
        }, this.endShadows = function() {
            s9 = !1, c4();
        }, this.setState = function(e, a, o) {
            const u = e.clippingPlanes, d = e.clipIntersection, p = e.clipShadows, m = t53.get(e);
            if (!r16 || null === u || 0 === u.length || s9 && !p) s9 ? h(null) : c4();
            else {
                const t = s9 ? 0 : i20, e = 4 * t;
                let r = m.clippingState || null;
                l.value = r, r = h(u, a, e, o);
                for(let t54 = 0; t54 !== e; ++t54)r[t54] = n24[t54];
                m.clippingState = r, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += t;
            }
        };
    }
    function Ui(t55) {
        let e37 = new WeakMap;
        function n27(t, e) {
            return e === a1 ? t.mapping = r1 : e === o1 && (t.mapping = s1), t;
        }
        function i(t) {
            const n = t.target;
            n.removeEventListener("dispose", i);
            const r = e37.get(n);
            void 0 !== r && (e37.delete(n), r.dispose());
        }
        return {
            get: function(r) {
                if (r && r.isTexture && !1 === r.isRenderTargetTexture) {
                    const s = r.mapping;
                    if (s === a1 || s === o1) {
                        if (e37.has(r)) return n27(e37.get(r).texture, r.mapping);
                        {
                            const s = r.image;
                            if (s && s.height > 0) {
                                const a = new xi(s.height / 2);
                                return a.fromEquirectangularTexture(t55, r), e37.set(r, a), r.addEventListener("dispose", i), n27(a.texture, r.mapping);
                            }
                            return null;
                        }
                    }
                }
                return r;
            },
            dispose: function() {
                e37 = new WeakMap;
            }
        };
    }
    Di.physical = {
        uniforms: ui([
            Di.standard.uniforms,
            {
                clearcoat: {
                    value: 0
                },
                clearcoatMap: {
                    value: null
                },
                clearcoatRoughness: {
                    value: 0
                },
                clearcoatRoughnessMap: {
                    value: null
                },
                clearcoatNormalScale: {
                    value: new Rt(1, 1)
                },
                clearcoatNormalMap: {
                    value: null
                },
                sheen: {
                    value: 0
                },
                sheenColor: {
                    value: new Wt(0)
                },
                sheenColorMap: {
                    value: null
                },
                sheenRoughness: {
                    value: 1
                },
                sheenRoughnessMap: {
                    value: null
                },
                transmission: {
                    value: 0
                },
                transmissionMap: {
                    value: null
                },
                transmissionSamplerSize: {
                    value: new Rt
                },
                transmissionSamplerMap: {
                    value: null
                },
                thickness: {
                    value: 0
                },
                thicknessMap: {
                    value: null
                },
                attenuationDistance: {
                    value: 0
                },
                attenuationColor: {
                    value: new Wt(0)
                },
                specularIntensity: {
                    value: 1
                },
                specularIntensityMap: {
                    value: null
                },
                specularColor: {
                    value: new Wt(1, 1, 1)
                },
                specularColorMap: {
                    value: null
                }
            }
        ]),
        vertexShader: Li.meshphysical_vert,
        fragmentShader: Li.meshphysical_frag
    };
    class Fi extends mi {
        constructor(t = -1, e = 1, n = 1, i = -1, r = .1, s = 2e3){
            super(), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = i, this.near = r, this.far = s, this.updateProjectionMatrix();
        }
        copy(t, e) {
            return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this;
        }
        setViewOffset(t, e, n, i, r, s) {
            null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
        }
        clearViewOffset() {
            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
        }
        updateProjectionMatrix() {
            const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
            let r = n - t, s = n + t, a = i + e, o = i - e;
            if (null !== this.view && this.view.enabled) {
                const t = (this.right - this.left) / this.view.fullWidth / this.zoom, e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
                r += t * this.view.offsetX, s = r + t * this.view.width, a -= e * this.view.offsetY, o = a - e * this.view.height;
            }
            this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e;
        }
    }
    Fi.prototype.isOrthographicCamera = !0;
    const Hi = [
        .125,
        .215,
        .35,
        .446,
        .526,
        .582
    ], Gi = 20, ki = new Fi, Vi = new Wt;
    let Wi = null;
    const ji = (1 + Math.sqrt(5)) / 2, qi = 1 / ji, Xi = [
        new se(1, 1, 1),
        new se(-1, 1, 1),
        new se(1, 1, -1),
        new se(-1, 1, -1),
        new se(0, ji, qi),
        new se(0, ji, -qi),
        new se(qi, 0, ji),
        new se(-qi, 0, ji),
        new se(ji, qi, 0),
        new se(-ji, qi, 0)
    ];
    class Ji {
        constructor(t){
            this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
        }
        fromScene(t, e = 0, n = .1, i = 100) {
            Wi = this._renderer.getRenderTarget(), this._setSize(256);
            const r = this._allocateTargets();
            return r.depthBuffer = !0, this._sceneToCubeUV(t, n, i, r), e > 0 && this._blur(r, 0, 0, e), this._applyPMREM(r), this._cleanup(r), r;
        }
        fromEquirectangular(t, e = null) {
            return this._fromTexture(t, e);
        }
        fromCubemap(t, e = null) {
            return this._fromTexture(t, e);
        }
        compileCubemapShader() {
            null === this._cubemapMaterial && (this._cubemapMaterial = Qi(), this._compileMaterial(this._cubemapMaterial));
        }
        compileEquirectangularShader() {
            null === this._equirectMaterial && (this._equirectMaterial = Ki(), this._compileMaterial(this._equirectMaterial));
        }
        dispose() {
            this._dispose(), null !== this._cubemapMaterial && this._cubemapMaterial.dispose(), null !== this._equirectMaterial && this._equirectMaterial.dispose();
        }
        _setSize(t) {
            this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax);
        }
        _dispose() {
            null !== this._blurMaterial && this._blurMaterial.dispose(), null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose();
            for(let t = 0; t < this._lodPlanes.length; t++)this._lodPlanes[t].dispose();
        }
        _cleanup(t) {
            this._renderer.setRenderTarget(Wi), t.scissorTest = !1, Zi(t, 0, 0, t.width, t.height);
        }
        _fromTexture(t, e) {
            t.mapping === r1 || t.mapping === s1 ? this._setSize(0 === t.image.length ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), Wi = this._renderer.getRenderTarget();
            const n = e || this._allocateTargets();
            return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n;
        }
        _allocateTargets() {
            const t56 = 3 * Math.max(this._cubeSize, 112), e38 = 4 * this._cubeSize - 32, n28 = {
                magFilter: f1,
                minFilter: f1,
                generateMipmaps: !1,
                type: M1,
                format: S1,
                encoding: at,
                depthBuffer: !1
            }, i22 = Yi(t56, e38, n28);
            if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== t56) {
                null !== this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = Yi(t56, e38, n28);
                const { _lodMax: i21  } = this;
                ({ sizeLods: this._sizeLods , lodPlanes: this._lodPlanes , sigmas: this._sigmas  } = function(t) {
                    const e = [], n = [], i = [];
                    let r = t;
                    const s = t - 4 + 1 + Hi.length;
                    for(let a = 0; a < s; a++){
                        const s = Math.pow(2, r);
                        n.push(s);
                        let o = 1 / s;
                        a > t - 4 ? o = Hi[a - t + 4 - 1] : 0 === a && (o = 0), i.push(o);
                        const l = 1 / (s - 1), c = -l / 2, h = 1 + l / 2, u = [
                            c,
                            c,
                            h,
                            c,
                            h,
                            h,
                            c,
                            c,
                            h,
                            h,
                            c,
                            h
                        ], d = 6, p = 6, m = 3, f = 2, g = 1, v = new Float32Array(m * p * d), y = new Float32Array(f * p * d), x = new Float32Array(g * p * d);
                        for(let t57 = 0; t57 < d; t57++){
                            const e = t57 % 3 * 2 / 3 - 1, n = t57 > 2 ? 0 : -1, i = [
                                e,
                                n,
                                0,
                                e + 2 / 3,
                                n,
                                0,
                                e + 2 / 3,
                                n + 1,
                                0,
                                e,
                                n,
                                0,
                                e + 2 / 3,
                                n + 1,
                                0,
                                e,
                                n + 1,
                                0
                            ];
                            v.set(i, m * p * t57), y.set(u, f * p * t57);
                            const r = [
                                t57,
                                t57,
                                t57,
                                t57,
                                t57,
                                t57
                            ];
                            x.set(r, g * p * t57);
                        }
                        const _ = new Vn;
                        _.setAttribute("position", new Tn(v, m)), _.setAttribute("uv", new Tn(y, f)), _.setAttribute("faceIndex", new Tn(x, g)), e.push(_), r > 4 && r--;
                    }
                    return {
                        lodPlanes: e,
                        sizeLods: n,
                        sigmas: i
                    };
                }(i21)), this._blurMaterial = function(t, e, n) {
                    const i = new Float32Array(Gi), r = new se(0, 1, 0);
                    return new pi({
                        name: "SphericalGaussianBlur",
                        defines: {
                            n: Gi,
                            CUBEUV_TEXEL_WIDTH: 1 / e,
                            CUBEUV_TEXEL_HEIGHT: 1 / n,
                            CUBEUV_MAX_MIP: `${t}.0`
                        },
                        uniforms: {
                            envMap: {
                                value: null
                            },
                            samples: {
                                value: 1
                            },
                            weights: {
                                value: i
                            },
                            latitudinal: {
                                value: !1
                            },
                            dTheta: {
                                value: 0
                            },
                            mipInt: {
                                value: 0
                            },
                            poleAxis: {
                                value: r
                            }
                        },
                        vertexShader: $i(),
                        fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform int samples;\n			uniform float weights[ n ];\n			uniform bool latitudinal;\n			uniform float dTheta;\n			uniform float mipInt;\n			uniform vec3 poleAxis;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			vec3 getSample( float theta, vec3 axis ) {\n\n				float cosTheta = cos( theta );\n				// Rodrigues' axis-angle rotation\n				vec3 sampleDirection = vOutputDirection * cosTheta\n					+ cross( axis, vOutputDirection ) * sin( theta )\n					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n				return bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n			}\n\n			void main() {\n\n				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n				}\n\n				axis = normalize( axis );\n\n				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n				for ( int i = 1; i < n; i++ ) {\n\n					if ( i >= samples ) {\n\n						break;\n\n					}\n\n					float theta = dTheta * float( i );\n					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n				}\n\n			}\n		",
                        blending: 0,
                        depthTest: !1,
                        depthWrite: !1
                    });
                }(i21, t56, e38);
            }
            return i22;
        }
        _compileMaterial(t) {
            const e = new oi(this._lodPlanes[0], t);
            this._renderer.compile(e, ki);
        }
        _sceneToCubeUV(t, e, n, i) {
            const r = new fi(90, 1, e, n), s = [
                1,
                -1,
                1,
                1,
                1,
                1
            ], a = [
                1,
                1,
                1,
                -1,
                -1,
                -1
            ], o = this._renderer, l = o.autoClear, c = o.toneMapping;
            o.getClearColor(Vi), o.toneMapping = 0, o.autoClear = !1;
            const h = new Mn({
                name: "PMREM.Background",
                side: 1,
                depthWrite: !1,
                depthTest: !1
            }), u = new oi(new ci, h);
            let d = !1;
            const p = t.background;
            p ? p.isColor && (h.color.copy(p), t.background = null, d = !0) : (h.color.copy(Vi), d = !0);
            for(let e39 = 0; e39 < 6; e39++){
                const n = e39 % 3;
                0 === n ? (r.up.set(0, s[e39], 0), r.lookAt(a[e39], 0, 0)) : 1 === n ? (r.up.set(0, 0, s[e39]), r.lookAt(0, a[e39], 0)) : (r.up.set(0, s[e39], 0), r.lookAt(0, 0, a[e39]));
                const l = this._cubeSize;
                Zi(i, n * l, e39 > 2 ? l : 0, l, l), o.setRenderTarget(i), d && o.render(u, r), o.render(t, r);
            }
            u.geometry.dispose(), u.material.dispose(), o.toneMapping = c, o.autoClear = l, t.background = p;
        }
        _textureToCubeUV(t, e) {
            const n = this._renderer, i = t.mapping === r1 || t.mapping === s1;
            i ? (null === this._cubemapMaterial && (this._cubemapMaterial = Qi()), this._cubemapMaterial.uniforms.flipEnvMap.value = !1 === t.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = Ki());
            const a = i ? this._cubemapMaterial : this._equirectMaterial, o = new oi(this._lodPlanes[0], a);
            a.uniforms.envMap.value = t;
            const l = this._cubeSize;
            Zi(e, 0, 0, 3 * l, 2 * l), n.setRenderTarget(e), n.render(o, ki);
        }
        _applyPMREM(t) {
            const e = this._renderer, n = e.autoClear;
            e.autoClear = !1;
            for(let e40 = 1; e40 < this._lodPlanes.length; e40++){
                const n = Math.sqrt(this._sigmas[e40] * this._sigmas[e40] - this._sigmas[e40 - 1] * this._sigmas[e40 - 1]), i = Xi[(e40 - 1) % Xi.length];
                this._blur(t, e40 - 1, e40, n, i);
            }
            e.autoClear = n;
        }
        _blur(t, e, n, i, r) {
            const s = this._pingPongRenderTarget;
            this._halfBlur(t, s, e, n, i, "latitudinal", r), this._halfBlur(s, t, n, n, i, "longitudinal", r);
        }
        _halfBlur(t, e, n, i, r, s, a) {
            const o = this._renderer, l = this._blurMaterial;
            "latitudinal" !== s && "longitudinal" !== s && console.error("blur direction must be either latitudinal or longitudinal!");
            const c = new oi(this._lodPlanes[i], l), h = l.uniforms, u = this._sizeLods[n] - 1, d = isFinite(r) ? Math.PI / (2 * u) : 2 * Math.PI / 39, p = r / d, m = isFinite(r) ? 1 + Math.floor(3 * p) : Gi;
            m > Gi && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);
            const f = [];
            let g = 0;
            for(let t58 = 0; t58 < Gi; ++t58){
                const e = t58 / p, n = Math.exp(-e * e / 2);
                f.push(n), 0 === t58 ? g += n : t58 < m && (g += 2 * n);
            }
            for(let t59 = 0; t59 < f.length; t59++)f[t59] = f[t59] / g;
            h.envMap.value = t.texture, h.samples.value = m, h.weights.value = f, h.latitudinal.value = "latitudinal" === s, a && (h.poleAxis.value = a);
            const { _lodMax: v  } = this;
            h.dTheta.value = d, h.mipInt.value = v - n;
            const y = this._sizeLods[i];
            Zi(e, 3 * y * (i > v - 4 ? i - v + 4 : 0), 4 * (this._cubeSize - y), 3 * y, 2 * y), o.setRenderTarget(e), o.render(c, ki);
        }
    }
    function Yi(t, e, n) {
        const i = new Qt(t, e, n);
        return i.texture.mapping = l1, i.texture.name = "PMREM.cubeUv", i.scissorTest = !0, i;
    }
    function Zi(t, e, n, i, r) {
        t.viewport.set(e, n, i, r), t.scissor.set(e, n, i, r);
    }
    function Ki() {
        return new pi({
            name: "EquirectangularToCubeUV",
            uniforms: {
                envMap: {
                    value: null
                }
            },
            vertexShader: $i(),
            fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n\n			#include <common>\n\n			void main() {\n\n				vec3 outputDirection = normalize( vOutputDirection );\n				vec2 uv = equirectUv( outputDirection );\n\n				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n			}\n		",
            blending: 0,
            depthTest: !1,
            depthWrite: !1
        });
    }
    function Qi() {
        return new pi({
            name: "CubemapToCubeUV",
            uniforms: {
                envMap: {
                    value: null
                },
                flipEnvMap: {
                    value: -1
                }
            },
            vertexShader: $i(),
            fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			uniform float flipEnvMap;\n\n			varying vec3 vOutputDirection;\n\n			uniform samplerCube envMap;\n\n			void main() {\n\n				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n			}\n		",
            blending: 0,
            depthTest: !1,
            depthWrite: !1
        });
    }
    function $i() {
        return "\n\n		precision mediump float;\n		precision mediump int;\n\n		attribute float faceIndex;\n\n		varying vec3 vOutputDirection;\n\n		// RH coordinate system; PMREM face-indexing convention\n		vec3 getDirection( vec2 uv, float face ) {\n\n			uv = 2.0 * uv - 1.0;\n\n			vec3 direction = vec3( uv, 1.0 );\n\n			if ( face == 0.0 ) {\n\n				direction = direction.zyx; // ( 1, v, u ) pos x\n\n			} else if ( face == 1.0 ) {\n\n				direction = direction.xzy;\n				direction.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n			} else if ( face == 2.0 ) {\n\n				direction.x *= -1.0; // ( -u, v, 1 ) pos z\n\n			} else if ( face == 3.0 ) {\n\n				direction = direction.zyx;\n				direction.xz *= -1.0; // ( -1, v, -u ) neg x\n\n			} else if ( face == 4.0 ) {\n\n				direction = direction.xzy;\n				direction.xy *= -1.0; // ( -u, -1, v ) neg y\n\n			} else if ( face == 5.0 ) {\n\n				direction.z *= -1.0; // ( u, v, -1 ) neg z\n\n			}\n\n			return direction;\n\n		}\n\n		void main() {\n\n			vOutputDirection = getDirection( uv, faceIndex );\n			gl_Position = vec4( position, 1.0 );\n\n		}\n	";
    }
    function tr(t60) {
        let e41 = new WeakMap, n29 = null;
        function i23(t) {
            const n = t.target;
            n.removeEventListener("dispose", i23);
            const r = e41.get(n);
            void 0 !== r && (e41.delete(n), r.dispose());
        }
        return {
            get: function(l) {
                if (l && l.isTexture) {
                    const c = l.mapping, h = c === a1 || c === o1, u = c === r1 || c === s1;
                    if (h || u) {
                        if (l.isRenderTargetTexture && !0 === l.needsPMREMUpdate) {
                            l.needsPMREMUpdate = !1;
                            let i = e41.get(l);
                            return null === n29 && (n29 = new Ji(t60)), i = h ? n29.fromEquirectangular(l, i) : n29.fromCubemap(l, i), e41.set(l, i), i.texture;
                        }
                        if (e41.has(l)) return e41.get(l).texture;
                        {
                            const r = l.image;
                            if (h && r && r.height > 0 || u && r && function(t) {
                                let e = 0;
                                const n = 6;
                                for(let i = 0; i < n; i++)void 0 !== t[i] && e++;
                                return e === n;
                            }(r)) {
                                null === n29 && (n29 = new Ji(t60));
                                const r = h ? n29.fromEquirectangular(l) : n29.fromCubemap(l);
                                return e41.set(l, r), l.addEventListener("dispose", i23), r.texture;
                            }
                            return null;
                        }
                    }
                }
                return l;
            },
            dispose: function() {
                e41 = new WeakMap, null !== n29 && (n29.dispose(), n29 = null);
            }
        };
    }
    function er(t61) {
        const e42 = {};
        function n30(n) {
            if (void 0 !== e42[n]) return e42[n];
            let i;
            switch(n){
                case "WEBGL_depth_texture":
                    i = t61.getExtension("WEBGL_depth_texture") || t61.getExtension("MOZ_WEBGL_depth_texture") || t61.getExtension("WEBKIT_WEBGL_depth_texture");
                    break;
                case "EXT_texture_filter_anisotropic":
                    i = t61.getExtension("EXT_texture_filter_anisotropic") || t61.getExtension("MOZ_EXT_texture_filter_anisotropic") || t61.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                    break;
                case "WEBGL_compressed_texture_s3tc":
                    i = t61.getExtension("WEBGL_compressed_texture_s3tc") || t61.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t61.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                    break;
                case "WEBGL_compressed_texture_pvrtc":
                    i = t61.getExtension("WEBGL_compressed_texture_pvrtc") || t61.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                    break;
                default:
                    i = t61.getExtension(n);
            }
            return e42[n] = i, i;
        }
        return {
            has: function(t) {
                return null !== n30(t);
            },
            init: function(t) {
                t.isWebGL2 ? n30("EXT_color_buffer_float") : (n30("WEBGL_depth_texture"), n30("OES_texture_float"), n30("OES_texture_half_float"), n30("OES_texture_half_float_linear"), n30("OES_standard_derivatives"), n30("OES_element_index_uint"), n30("OES_vertex_array_object"), n30("ANGLE_instanced_arrays")), n30("OES_texture_float_linear"), n30("EXT_color_buffer_half_float"), n30("WEBGL_multisampled_render_to_texture");
            },
            get: function(t) {
                const e = n30(t);
                return null === e && console.warn("THREE.WebGLRenderer: " + t + " extension not supported."), e;
            }
        };
    }
    function nr(t63, e43, n31, i24) {
        const r17 = {}, s10 = new WeakMap;
        function a7(t) {
            const o = t.target;
            null !== o.index && e43.remove(o.index);
            for(const t62 in o.attributes)e43.remove(o.attributes[t62]);
            o.removeEventListener("dispose", a7), delete r17[o.id];
            const l = s10.get(o);
            l && (e43.remove(l), s10.delete(o)), i24.releaseStatesOfGeometry(o), !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount, n31.memory.geometries--;
        }
        function o6(t) {
            const n = [], i = t.index, r = t.attributes.position;
            let a = 0;
            if (null !== i) {
                const t = i.array;
                a = i.version;
                for(let e = 0, i25 = t.length; e < i25; e += 3){
                    const i = t[e + 0], r = t[e + 1], s = t[e + 2];
                    n.push(i, r, r, s, s, i);
                }
            } else {
                const t = r.array;
                a = r.version;
                for(let e = 0, i = t.length / 3 - 1; e < i; e += 3){
                    const t = e + 0, i = e + 1, r = e + 2;
                    n.push(t, i, i, r, r, t);
                }
            }
            const o = new (Lt1(n) ? Dn : Ln)(n, 1);
            o.version = a;
            const l = s10.get(t);
            l && e43.remove(l), s10.set(t, o);
        }
        return {
            get: function(t, e) {
                return !0 === r17[e.id] || (e.addEventListener("dispose", a7), r17[e.id] = !0, n31.memory.geometries++), e;
            },
            update: function(t) {
                const n = t.attributes;
                for(const t64 in n)e43.update(n[t64], 34962);
                const i = t.morphAttributes;
                for(const t65 in i){
                    const n = i[t65];
                    for(let t = 0, i26 = n.length; t < i26; t++)e43.update(n[t], 34962);
                }
            },
            getWireframeAttribute: function(t) {
                const e = s10.get(t);
                if (e) {
                    const n = t.index;
                    null !== n && e.version < n.version && o6(t);
                } else o6(t);
                return s10.get(t);
            }
        };
    }
    function ir(t66, e44, n, i27) {
        const r = i27.isWebGL2;
        let s, a, o;
        this.setMode = function(t) {
            s = t;
        }, this.setIndex = function(t) {
            a = t.type, o = t.bytesPerElement;
        }, this.render = function(e, i) {
            t66.drawElements(s, i, a, e * o), n.update(i, s, 1);
        }, this.renderInstances = function(i, l, c) {
            if (0 === c) return;
            let h, u;
            if (r) h = t66, u = "drawElementsInstanced";
            else if (h = e44.get("ANGLE_instanced_arrays"), u = "drawElementsInstancedANGLE", null === h) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            h[u](s, l, a, i * o, c), n.update(l, s, c);
        };
    }
    function rr(t67) {
        const e = {
            frame: 0,
            calls: 0,
            triangles: 0,
            points: 0,
            lines: 0
        };
        return {
            memory: {
                geometries: 0,
                textures: 0
            },
            render: e,
            programs: null,
            autoReset: !0,
            reset: function() {
                e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
            },
            update: function(t, n, i) {
                switch(e.calls++, n){
                    case 4:
                        e.triangles += i * (t / 3);
                        break;
                    case 1:
                        e.lines += i * (t / 2);
                        break;
                    case 3:
                        e.lines += i * (t - 1);
                        break;
                    case 2:
                        e.lines += i * t;
                        break;
                    case 0:
                        e.points += i * t;
                        break;
                    default:
                        console.error("THREE.WebGLInfo: Unknown draw mode:", n);
                }
            }
        };
    }
    function sr(t, e) {
        return t[0] - e[0];
    }
    function ar(t, e) {
        return Math.abs(e[1]) - Math.abs(t[1]);
    }
    function or(t, e) {
        let n = 1;
        const i = e.isInterleavedBufferAttribute ? e.data.array : e.array;
        i instanceof Int8Array ? n = 127 : i instanceof Int16Array ? n = 32767 : i instanceof Int32Array ? n = 2147483647 : console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ", i), t.divideScalar(n);
    }
    function lr(t, e, n) {
        const i = {}, r = new Float32Array(8), s = new WeakMap, a = new Kt, o = [];
        for(let t68 = 0; t68 < 8; t68++)o[t68] = [
            t68,
            0
        ];
        return {
            update: function(l, c, h, u) {
                const d = l.morphTargetInfluences;
                if (!0 === e.isWebGL2) {
                    const p = c.morphAttributes.position || c.morphAttributes.normal || c.morphAttributes.color, m = void 0 !== p ? p.length : 0;
                    let f = s.get(c);
                    if (void 0 === f || f.count !== m) {
                        void 0 !== f && f.texture.dispose();
                        const y = void 0 !== c.morphAttributes.position, x = void 0 !== c.morphAttributes.normal, _ = void 0 !== c.morphAttributes.color, M = c.morphAttributes.position || [], w = c.morphAttributes.normal || [], S = c.morphAttributes.color || [];
                        let T = 0;
                        !0 === y && (T = 1), !0 === x && (T = 2), !0 === _ && (T = 3);
                        let E = c.attributes.position.count * T, A = 1;
                        E > e.maxTextureSize && (A = Math.ceil(E / e.maxTextureSize), E = e.maxTextureSize);
                        const R = new Float32Array(E * A * 4 * m), C = new $t(R, E, A, m);
                        C.type = b1, C.needsUpdate = !0;
                        const L = 4 * T;
                        for(let D = 0; D < m; D++){
                            const I = M[D], N = w[D], B = S[D], O = E * A * 4 * D;
                            for(let z = 0; z < I.count; z++){
                                const U = z * L;
                                !0 === y && (a.fromBufferAttribute(I, z), !0 === I.normalized && or(a, I), R[O + U + 0] = a.x, R[O + U + 1] = a.y, R[O + U + 2] = a.z, R[O + U + 3] = 0), !0 === x && (a.fromBufferAttribute(N, z), !0 === N.normalized && or(a, N), R[O + U + 4] = a.x, R[O + U + 5] = a.y, R[O + U + 6] = a.z, R[O + U + 7] = 0), !0 === _ && (a.fromBufferAttribute(B, z), !0 === B.normalized && or(a, B), R[O + U + 8] = a.x, R[O + U + 9] = a.y, R[O + U + 10] = a.z, R[O + U + 11] = 4 === B.itemSize ? a.w : 1);
                            }
                        }
                        function P() {
                            C.dispose(), s.delete(c), c.removeEventListener("dispose", P);
                        }
                        f = {
                            count: m,
                            texture: C,
                            size: new Rt(E, A)
                        }, s.set(c, f), c.addEventListener("dispose", P);
                    }
                    let g = 0;
                    for(let F = 0; F < d.length; F++)g += d[F];
                    const v = c.morphTargetsRelative ? 1 : 1 - g;
                    u.getUniforms().setValue(t, "morphTargetBaseInfluence", v), u.getUniforms().setValue(t, "morphTargetInfluences", d), u.getUniforms().setValue(t, "morphTargetsTexture", f.texture, n), u.getUniforms().setValue(t, "morphTargetsTextureSize", f.size);
                } else {
                    const H = void 0 === d ? 0 : d.length;
                    let G = i[c.id];
                    if (void 0 === G || G.length !== H) {
                        G = [];
                        for(let q = 0; q < H; q++)G[q] = [
                            q,
                            0
                        ];
                        i[c.id] = G;
                    }
                    for(let X = 0; X < H; X++){
                        const J = G[X];
                        J[0] = X, J[1] = d[X];
                    }
                    G.sort(ar);
                    for(let Y = 0; Y < 8; Y++)Y < H && G[Y][1] ? (o[Y][0] = G[Y][0], o[Y][1] = G[Y][1]) : (o[Y][0] = Number.MAX_SAFE_INTEGER, o[Y][1] = 0);
                    o.sort(sr);
                    const k = c.morphAttributes.position, V = c.morphAttributes.normal;
                    let W = 0;
                    for(let Z = 0; Z < 8; Z++){
                        const K = o[Z], Q = K[0], $ = K[1];
                        Q !== Number.MAX_SAFE_INTEGER && $ ? (k && c.getAttribute("morphTarget" + Z) !== k[Q] && c.setAttribute("morphTarget" + Z, k[Q]), V && c.getAttribute("morphNormal" + Z) !== V[Q] && c.setAttribute("morphNormal" + Z, V[Q]), r[Z] = $, W += $) : (k && !0 === c.hasAttribute("morphTarget" + Z) && c.deleteAttribute("morphTarget" + Z), V && !0 === c.hasAttribute("morphNormal" + Z) && c.deleteAttribute("morphNormal" + Z), r[Z] = 0);
                    }
                    const j = c.morphTargetsRelative ? 1 : 1 - W;
                    u.getUniforms().setValue(t, "morphTargetBaseInfluence", j), u.getUniforms().setValue(t, "morphTargetInfluences", r);
                }
            }
        };
    }
    function cr(t69, e45, n, i) {
        let r = new WeakMap;
        function s(t) {
            const e = t.target;
            e.removeEventListener("dispose", s), n.remove(e.instanceMatrix), null !== e.instanceColor && n.remove(e.instanceColor);
        }
        return {
            update: function(t) {
                const a = i.render.frame, o = t.geometry, l = e45.get(t, o);
                return r.get(l) !== a && (e45.update(l), r.set(l, a)), t.isInstancedMesh && (!1 === t.hasEventListener("dispose", s) && t.addEventListener("dispose", s), n.update(t.instanceMatrix, 34962), null !== t.instanceColor && n.update(t.instanceColor, 34962)), l;
            },
            dispose: function() {
                r = new WeakMap;
            }
        };
    }
    const hr = new Zt, ur = new $t, dr = new ee, pr = new yi, mr = [], fr = [], gr = new Float32Array(16), vr = new Float32Array(9), yr = new Float32Array(4);
    function xr(t, e, n) {
        const i = t[0];
        if (i <= 0 || i > 0) return t;
        const r = e * n;
        let s = mr[r];
        if (void 0 === s && (s = new Float32Array(r), mr[r] = s), 0 !== e) {
            i.toArray(s, 0);
            for(let i28 = 1, r = 0; i28 !== e; ++i28)r += n, t[i28].toArray(s, r);
        }
        return s;
    }
    function _r(t, e) {
        if (t.length !== e.length) return !1;
        for(let n = 0, i = t.length; n < i; n++)if (t[n] !== e[n]) return !1;
        return !0;
    }
    function br(t, e) {
        for(let n = 0, i = e.length; n < i; n++)t[n] = e[n];
    }
    function Mr(t, e) {
        let n = fr[e];
        void 0 === n && (n = new Int32Array(e), fr[e] = n);
        for(let i = 0; i !== e; ++i)n[i] = t.allocateTextureUnit();
        return n;
    }
    function wr(t, e) {
        const n = this.cache;
        n[0] !== e && (t.uniform1f(this.addr, e), n[0] = e);
    }
    function Sr(t, e) {
        const n = this.cache;
        if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
        else {
            if (_r(n, e)) return;
            t.uniform2fv(this.addr, e), br(n, e);
        }
    }
    function Tr(t, e) {
        const n = this.cache;
        if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
        else if (void 0 !== e.r) n[0] === e.r && n[1] === e.g && n[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), n[0] = e.r, n[1] = e.g, n[2] = e.b);
        else {
            if (_r(n, e)) return;
            t.uniform3fv(this.addr, e), br(n, e);
        }
    }
    function Er(t, e) {
        const n = this.cache;
        if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
        else {
            if (_r(n, e)) return;
            t.uniform4fv(this.addr, e), br(n, e);
        }
    }
    function Ar(t, e) {
        const n = this.cache, i = e.elements;
        if (void 0 === i) {
            if (_r(n, e)) return;
            t.uniformMatrix2fv(this.addr, !1, e), br(n, e);
        } else {
            if (_r(n, i)) return;
            yr.set(i), t.uniformMatrix2fv(this.addr, !1, yr), br(n, i);
        }
    }
    function Rr(t, e) {
        const n = this.cache, i = e.elements;
        if (void 0 === i) {
            if (_r(n, e)) return;
            t.uniformMatrix3fv(this.addr, !1, e), br(n, e);
        } else {
            if (_r(n, i)) return;
            vr.set(i), t.uniformMatrix3fv(this.addr, !1, vr), br(n, i);
        }
    }
    function Cr(t, e) {
        const n = this.cache, i = e.elements;
        if (void 0 === i) {
            if (_r(n, e)) return;
            t.uniformMatrix4fv(this.addr, !1, e), br(n, e);
        } else {
            if (_r(n, i)) return;
            gr.set(i), t.uniformMatrix4fv(this.addr, !1, gr), br(n, i);
        }
    }
    function Lr(t, e) {
        const n = this.cache;
        n[0] !== e && (t.uniform1i(this.addr, e), n[0] = e);
    }
    function Pr(t, e) {
        const n = this.cache;
        _r(n, e) || (t.uniform2iv(this.addr, e), br(n, e));
    }
    function Dr(t, e) {
        const n = this.cache;
        _r(n, e) || (t.uniform3iv(this.addr, e), br(n, e));
    }
    function Ir(t, e) {
        const n = this.cache;
        _r(n, e) || (t.uniform4iv(this.addr, e), br(n, e));
    }
    function Nr(t, e) {
        const n = this.cache;
        n[0] !== e && (t.uniform1ui(this.addr, e), n[0] = e);
    }
    function Br(t, e) {
        const n = this.cache;
        _r(n, e) || (t.uniform2uiv(this.addr, e), br(n, e));
    }
    function Or(t, e) {
        const n = this.cache;
        _r(n, e) || (t.uniform3uiv(this.addr, e), br(n, e));
    }
    function zr(t, e) {
        const n = this.cache;
        _r(n, e) || (t.uniform4uiv(this.addr, e), br(n, e));
    }
    function Ur(t, e, n) {
        const i = this.cache, r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture2D(e || hr, r);
    }
    function Fr(t, e, n) {
        const i = this.cache, r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(e || dr, r);
    }
    function Hr(t, e, n) {
        const i = this.cache, r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTextureCube(e || pr, r);
    }
    function Gr(t, e, n) {
        const i = this.cache, r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(e || ur, r);
    }
    function kr(t, e) {
        t.uniform1fv(this.addr, e);
    }
    function Vr(t, e) {
        const n = xr(e, this.size, 2);
        t.uniform2fv(this.addr, n);
    }
    function Wr(t, e) {
        const n = xr(e, this.size, 3);
        t.uniform3fv(this.addr, n);
    }
    function jr(t, e) {
        const n = xr(e, this.size, 4);
        t.uniform4fv(this.addr, n);
    }
    function qr(t, e) {
        const n = xr(e, this.size, 4);
        t.uniformMatrix2fv(this.addr, !1, n);
    }
    function Xr(t, e) {
        const n = xr(e, this.size, 9);
        t.uniformMatrix3fv(this.addr, !1, n);
    }
    function Jr(t, e) {
        const n = xr(e, this.size, 16);
        t.uniformMatrix4fv(this.addr, !1, n);
    }
    function Yr(t, e) {
        t.uniform1iv(this.addr, e);
    }
    function Zr(t, e) {
        t.uniform2iv(this.addr, e);
    }
    function Kr(t, e) {
        t.uniform3iv(this.addr, e);
    }
    function Qr(t, e) {
        t.uniform4iv(this.addr, e);
    }
    function $r(t, e) {
        t.uniform1uiv(this.addr, e);
    }
    function ts(t, e) {
        t.uniform2uiv(this.addr, e);
    }
    function es(t, e) {
        t.uniform3uiv(this.addr, e);
    }
    function ns(t, e) {
        t.uniform4uiv(this.addr, e);
    }
    function is(t, e, n) {
        const i = e.length, r = Mr(n, i);
        t.uniform1iv(this.addr, r);
        for(let t70 = 0; t70 !== i; ++t70)n.setTexture2D(e[t70] || hr, r[t70]);
    }
    function rs(t, e, n) {
        const i = e.length, r = Mr(n, i);
        t.uniform1iv(this.addr, r);
        for(let t71 = 0; t71 !== i; ++t71)n.setTexture3D(e[t71] || dr, r[t71]);
    }
    function ss(t, e, n) {
        const i = e.length, r = Mr(n, i);
        t.uniform1iv(this.addr, r);
        for(let t72 = 0; t72 !== i; ++t72)n.setTextureCube(e[t72] || pr, r[t72]);
    }
    function as(t, e, n) {
        const i = e.length, r = Mr(n, i);
        t.uniform1iv(this.addr, r);
        for(let t73 = 0; t73 !== i; ++t73)n.setTexture2DArray(e[t73] || ur, r[t73]);
    }
    function os(t74, e, n) {
        this.id = t74, this.addr = n, this.cache = [], this.setValue = function(t) {
            switch(t){
                case 5126:
                    return wr;
                case 35664:
                    return Sr;
                case 35665:
                    return Tr;
                case 35666:
                    return Er;
                case 35674:
                    return Ar;
                case 35675:
                    return Rr;
                case 35676:
                    return Cr;
                case 5124:
                case 35670:
                    return Lr;
                case 35667:
                case 35671:
                    return Pr;
                case 35668:
                case 35672:
                    return Dr;
                case 35669:
                case 35673:
                    return Ir;
                case 5125:
                    return Nr;
                case 36294:
                    return Br;
                case 36295:
                    return Or;
                case 36296:
                    return zr;
                case 35678:
                case 36198:
                case 36298:
                case 36306:
                case 35682:
                    return Ur;
                case 35679:
                case 36299:
                case 36307:
                    return Fr;
                case 35680:
                case 36300:
                case 36308:
                case 36293:
                    return Hr;
                case 36289:
                case 36303:
                case 36311:
                case 36292:
                    return Gr;
            }
        }(e.type);
    }
    function ls(t75, e, n) {
        this.id = t75, this.addr = n, this.cache = [], this.size = e.size, this.setValue = function(t) {
            switch(t){
                case 5126:
                    return kr;
                case 35664:
                    return Vr;
                case 35665:
                    return Wr;
                case 35666:
                    return jr;
                case 35674:
                    return qr;
                case 35675:
                    return Xr;
                case 35676:
                    return Jr;
                case 5124:
                case 35670:
                    return Yr;
                case 35667:
                case 35671:
                    return Zr;
                case 35668:
                case 35672:
                    return Kr;
                case 35669:
                case 35673:
                    return Qr;
                case 5125:
                    return $r;
                case 36294:
                    return ts;
                case 36295:
                    return es;
                case 36296:
                    return ns;
                case 35678:
                case 36198:
                case 36298:
                case 36306:
                case 35682:
                    return is;
                case 35679:
                case 36299:
                case 36307:
                    return rs;
                case 35680:
                case 36300:
                case 36308:
                case 36293:
                    return ss;
                case 36289:
                case 36303:
                case 36311:
                case 36292:
                    return as;
            }
        }(e.type);
    }
    function cs(t) {
        this.id = t, this.seq = [], this.map = {};
    }
    ls.prototype.updateCache = function(t) {
        const e = this.cache;
        t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)), br(e, t);
    }, cs.prototype.setValue = function(t, e, n) {
        const i = this.seq;
        for(let r = 0, s = i.length; r !== s; ++r){
            const s = i[r];
            s.setValue(t, e[s.id], n);
        }
    };
    const hs = /(\w+)(\])?(\[|\.)?/g;
    function us(t, e) {
        t.seq.push(e), t.map[e.id] = e;
    }
    function ds(t, e, n) {
        const i = t.name, r = i.length;
        for(hs.lastIndex = 0;;){
            const s = hs.exec(i), a = hs.lastIndex;
            let o = s[1];
            const l = "]" === s[2], c = s[3];
            if (l && (o |= 0), void 0 === c || "[" === c && a + 2 === r) {
                us(n, void 0 === c ? new os(o, t, e) : new ls(o, t, e));
                break;
            }
            {
                let t = n.map[o];
                void 0 === t && (t = new cs(o), us(n, t)), n = t;
            }
        }
    }
    function ps(t, e) {
        this.seq = [], this.map = {};
        const n = t.getProgramParameter(e, 35718);
        for(let i = 0; i < n; ++i){
            const n = t.getActiveUniform(e, i);
            ds(n, t.getUniformLocation(e, n.name), this);
        }
    }
    function ms(t, e, n) {
        const i = t.createShader(e);
        return t.shaderSource(i, n), t.compileShader(i), i;
    }
    ps.prototype.setValue = function(t, e, n, i) {
        const r = this.map[e];
        void 0 !== r && r.setValue(t, n, i);
    }, ps.prototype.setOptional = function(t, e, n) {
        const i = e[n];
        void 0 !== i && this.setValue(t, n, i);
    }, ps.upload = function(t, e, n, i) {
        for(let r = 0, s = e.length; r !== s; ++r){
            const s = e[r], a = n[s.id];
            !1 !== a.needsUpdate && s.setValue(t, a.value, i);
        }
    }, ps.seqWithValue = function(t, e) {
        const n = [];
        for(let i = 0, r = t.length; i !== r; ++i){
            const r = t[i];
            r.id in e && n.push(r);
        }
        return n;
    };
    let fs = 0;
    function gs(t77, e46, n32) {
        const i29 = t77.getShaderParameter(e46, 35713), r18 = t77.getShaderInfoLog(e46).trim();
        if (i29 && "" === r18) return "";
        const s11 = parseInt(/ERROR: 0:(\d+)/.exec(r18)[1]);
        return n32.toUpperCase() + "\n\n" + r18 + "\n\n" + function(t, e) {
            const n = t.split("\n"), i = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, n.length);
            for(let t76 = r; t76 < s; t76++)i.push(t76 + 1 + ": " + n[t76]);
            return i.join("\n");
        }(t77.getShaderSource(e46), s11);
    }
    function vs(t78, e) {
        const n = function(t) {
            switch(t){
                case at:
                    return [
                        "Linear",
                        "( value )"
                    ];
                case ot1:
                    return [
                        "sRGB",
                        "( value )"
                    ];
                default:
                    return console.warn("THREE.WebGLProgram: Unsupported encoding:", t), [
                        "Linear",
                        "( value )"
                    ];
            }
        }(e);
        return "vec4 " + t78 + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }";
    }
    function ys(t, e) {
        let n;
        switch(e){
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
            case 5:
                n = "Custom";
                break;
            default:
                console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), n = "Linear";
        }
        return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
    }
    function xs(t) {
        return "" !== t;
    }
    function _s(t, e) {
        return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
    }
    function bs(t, e) {
        return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
    }
    const Ms = /^[ \t]*#include +<([\w\d./]+)>/gm;
    function ws(t) {
        return t.replace(Ms, Ss);
    }
    function Ss(t, e) {
        const n = Li[e];
        if (void 0 === n) throw new Error("Can not resolve #include <" + e + ">");
        return ws(n);
    }
    const Ts = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, Es = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
    function As(t) {
        return t.replace(Es, Cs).replace(Ts, Rs);
    }
    function Rs(t, e, n, i) {
        return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), Cs(t, e, n, i);
    }
    function Cs(t, e, n, i) {
        let r = "";
        for(let t79 = parseInt(e); t79 < parseInt(n); t79++)r += i.replace(/\[\s*i\s*\]/g, "[ " + t79 + " ]").replace(/UNROLLED_LOOP_INDEX/g, t79);
        return r;
    }
    function Ls(t) {
        let e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
        return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"), e;
    }
    function Ps(t80, e47, n33, i30) {
        const a8 = t80.getContext(), o = n33.defines;
        let c = n33.vertexShader, h = n33.fragmentShader;
        const u = function(t) {
            let e = "SHADOWMAP_TYPE_BASIC";
            return 1 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF" : 2 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"), e;
        }(n33), d = function(t) {
            let e = "ENVMAP_TYPE_CUBE";
            if (t.envMap) switch(t.envMapMode){
                case r1:
                case s1:
                    e = "ENVMAP_TYPE_CUBE";
                    break;
                case l1:
                    e = "ENVMAP_TYPE_CUBE_UV";
            }
            return e;
        }(n33), p = function(t) {
            let e = "ENVMAP_MODE_REFLECTION";
            t.envMap && t.envMapMode === s1 && (e = "ENVMAP_MODE_REFRACTION");
            return e;
        }(n33), m = function(t) {
            let e = "ENVMAP_BLENDING_NONE";
            if (t.envMap) switch(t.combine){
                case 0:
                    e = "ENVMAP_BLENDING_MULTIPLY";
                    break;
                case 1:
                    e = "ENVMAP_BLENDING_MIX";
                    break;
                case 2:
                    e = "ENVMAP_BLENDING_ADD";
            }
            return e;
        }(n33), f = function(t) {
            const e = t.envMapCubeUVHeight;
            if (null === e) return null;
            const n = Math.log2(e / 32 + 1) + 3, i = 1 / e;
            return {
                texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)),
                texelHeight: i,
                maxMip: n
            };
        }(n33), g = n33.isWebGL2 ? "" : function(t) {
            return [
                t.extensionDerivatives || t.envMapCubeUVHeight || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "",
                (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
                t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
                (t.extensionShaderTextureLOD || t.envMap || t.transmission) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
            ].filter(xs).join("\n");
        }(n33), v = function(t) {
            const e = [];
            for(const n in t){
                const i = t[n];
                !1 !== i && e.push("#define " + n + " " + i);
            }
            return e.join("\n");
        }(o), y = a8.createProgram();
        let x, _, b = n33.glslVersion ? "#version " + n33.glslVersion + "\n" : "";
        n33.isRawShaderMaterial ? (x = [
            v
        ].filter(xs).join("\n"), x.length > 0 && (x += "\n"), _ = [
            g,
            v
        ].filter(xs).join("\n"), _.length > 0 && (_ += "\n")) : (x = [
            Ls(n33),
            "#define SHADER_NAME " + n33.shaderName,
            v,
            n33.instancing ? "#define USE_INSTANCING" : "",
            n33.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
            n33.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
            "#define MAX_BONES " + n33.maxBones,
            n33.useFog && n33.fog ? "#define USE_FOG" : "",
            n33.useFog && n33.fogExp2 ? "#define FOG_EXP2" : "",
            n33.map ? "#define USE_MAP" : "",
            n33.envMap ? "#define USE_ENVMAP" : "",
            n33.envMap ? "#define " + p : "",
            n33.lightMap ? "#define USE_LIGHTMAP" : "",
            n33.aoMap ? "#define USE_AOMAP" : "",
            n33.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
            n33.bumpMap ? "#define USE_BUMPMAP" : "",
            n33.normalMap ? "#define USE_NORMALMAP" : "",
            n33.normalMap && n33.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
            n33.normalMap && n33.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
            n33.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
            n33.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
            n33.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
            n33.displacementMap && n33.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
            n33.specularMap ? "#define USE_SPECULARMAP" : "",
            n33.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
            n33.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
            n33.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
            n33.metalnessMap ? "#define USE_METALNESSMAP" : "",
            n33.alphaMap ? "#define USE_ALPHAMAP" : "",
            n33.transmission ? "#define USE_TRANSMISSION" : "",
            n33.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
            n33.thicknessMap ? "#define USE_THICKNESSMAP" : "",
            n33.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
            n33.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
            n33.vertexTangents ? "#define USE_TANGENT" : "",
            n33.vertexColors ? "#define USE_COLOR" : "",
            n33.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
            n33.vertexUvs ? "#define USE_UV" : "",
            n33.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
            n33.flatShading ? "#define FLAT_SHADED" : "",
            n33.skinning ? "#define USE_SKINNING" : "",
            n33.useVertexTexture ? "#define BONE_TEXTURE" : "",
            n33.morphTargets ? "#define USE_MORPHTARGETS" : "",
            n33.morphNormals && !1 === n33.flatShading ? "#define USE_MORPHNORMALS" : "",
            n33.morphColors && n33.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
            n33.morphTargetsCount > 0 && n33.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
            n33.morphTargetsCount > 0 && n33.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n33.morphTextureStride : "",
            n33.morphTargetsCount > 0 && n33.isWebGL2 ? "#define MORPHTARGETS_COUNT " + n33.morphTargetsCount : "",
            n33.doubleSided ? "#define DOUBLE_SIDED" : "",
            n33.flipSided ? "#define FLIP_SIDED" : "",
            n33.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
            n33.shadowMapEnabled ? "#define " + u : "",
            n33.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
            n33.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
            n33.logarithmicDepthBuffer && n33.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
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
            "attribute vec3 position;",
            "attribute vec3 normal;",
            "attribute vec2 uv;",
            "#ifdef USE_TANGENT",
            "	attribute vec4 tangent;",
            "#endif",
            "#if defined( USE_COLOR_ALPHA )",
            "	attribute vec4 color;",
            "#elif defined( USE_COLOR )",
            "	attribute vec3 color;",
            "#endif",
            "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
            "	attribute vec3 morphTarget0;",
            "	attribute vec3 morphTarget1;",
            "	attribute vec3 morphTarget2;",
            "	attribute vec3 morphTarget3;",
            "	#ifdef USE_MORPHNORMALS",
            "		attribute vec3 morphNormal0;",
            "		attribute vec3 morphNormal1;",
            "		attribute vec3 morphNormal2;",
            "		attribute vec3 morphNormal3;",
            "	#else",
            "		attribute vec3 morphTarget4;",
            "		attribute vec3 morphTarget5;",
            "		attribute vec3 morphTarget6;",
            "		attribute vec3 morphTarget7;",
            "	#endif",
            "#endif",
            "#ifdef USE_SKINNING",
            "	attribute vec4 skinIndex;",
            "	attribute vec4 skinWeight;",
            "#endif",
            "\n"
        ].filter(xs).join("\n"), _ = [
            g,
            Ls(n33),
            "#define SHADER_NAME " + n33.shaderName,
            v,
            n33.useFog && n33.fog ? "#define USE_FOG" : "",
            n33.useFog && n33.fogExp2 ? "#define FOG_EXP2" : "",
            n33.map ? "#define USE_MAP" : "",
            n33.matcap ? "#define USE_MATCAP" : "",
            n33.envMap ? "#define USE_ENVMAP" : "",
            n33.envMap ? "#define " + d : "",
            n33.envMap ? "#define " + p : "",
            n33.envMap ? "#define " + m : "",
            f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
            f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
            f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
            n33.lightMap ? "#define USE_LIGHTMAP" : "",
            n33.aoMap ? "#define USE_AOMAP" : "",
            n33.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
            n33.bumpMap ? "#define USE_BUMPMAP" : "",
            n33.normalMap ? "#define USE_NORMALMAP" : "",
            n33.normalMap && n33.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
            n33.normalMap && n33.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
            n33.clearcoat ? "#define USE_CLEARCOAT" : "",
            n33.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
            n33.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
            n33.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
            n33.specularMap ? "#define USE_SPECULARMAP" : "",
            n33.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
            n33.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
            n33.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
            n33.metalnessMap ? "#define USE_METALNESSMAP" : "",
            n33.alphaMap ? "#define USE_ALPHAMAP" : "",
            n33.alphaTest ? "#define USE_ALPHATEST" : "",
            n33.sheen ? "#define USE_SHEEN" : "",
            n33.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
            n33.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
            n33.transmission ? "#define USE_TRANSMISSION" : "",
            n33.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
            n33.thicknessMap ? "#define USE_THICKNESSMAP" : "",
            n33.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
            n33.vertexTangents ? "#define USE_TANGENT" : "",
            n33.vertexColors || n33.instancingColor ? "#define USE_COLOR" : "",
            n33.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
            n33.vertexUvs ? "#define USE_UV" : "",
            n33.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
            n33.gradientMap ? "#define USE_GRADIENTMAP" : "",
            n33.flatShading ? "#define FLAT_SHADED" : "",
            n33.doubleSided ? "#define DOUBLE_SIDED" : "",
            n33.flipSided ? "#define FLIP_SIDED" : "",
            n33.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
            n33.shadowMapEnabled ? "#define " + u : "",
            n33.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
            n33.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
            n33.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
            n33.logarithmicDepthBuffer && n33.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
            "uniform mat4 viewMatrix;",
            "uniform vec3 cameraPosition;",
            "uniform bool isOrthographic;",
            0 !== n33.toneMapping ? "#define TONE_MAPPING" : "",
            0 !== n33.toneMapping ? Li.tonemapping_pars_fragment : "",
            0 !== n33.toneMapping ? ys("toneMapping", n33.toneMapping) : "",
            n33.dithering ? "#define DITHERING" : "",
            n33.opaque ? "#define OPAQUE" : "",
            Li.encodings_pars_fragment,
            vs("linearToOutputTexel", n33.outputEncoding),
            n33.depthPacking ? "#define DEPTH_PACKING " + n33.depthPacking : "",
            "\n"
        ].filter(xs).join("\n")), c = ws(c), c = _s(c, n33), c = bs(c, n33), h = ws(h), h = _s(h, n33), h = bs(h, n33), c = As(c), h = As(h), n33.isWebGL2 && !0 !== n33.isRawShaderMaterial && (b = "#version 300 es\n", x = [
            "precision mediump sampler2DArray;",
            "#define attribute in",
            "#define varying out",
            "#define texture2D texture"
        ].join("\n") + "\n" + x, _ = [
            "#define varying in",
            n33.glslVersion === pt1 ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
            n33.glslVersion === pt1 ? "" : "#define gl_FragColor pc_fragColor",
            "#define gl_FragDepthEXT gl_FragDepth",
            "#define texture2D texture",
            "#define textureCube texture",
            "#define texture2DProj textureProj",
            "#define texture2DLodEXT textureLod",
            "#define texture2DProjLodEXT textureProjLod",
            "#define textureCubeLodEXT textureLod",
            "#define texture2DGradEXT textureGrad",
            "#define texture2DProjGradEXT textureProjGrad",
            "#define textureCubeGradEXT textureGrad"
        ].join("\n") + "\n" + _);
        const M = b + _ + h, w = ms(a8, 35633, b + x + c), S = ms(a8, 35632, M);
        if (a8.attachShader(y, w), a8.attachShader(y, S), void 0 !== n33.index0AttributeName ? a8.bindAttribLocation(y, 0, n33.index0AttributeName) : !0 === n33.morphTargets && a8.bindAttribLocation(y, 0, "position"), a8.linkProgram(y), t80.debug.checkShaderErrors) {
            const t = a8.getProgramInfoLog(y).trim(), e = a8.getShaderInfoLog(w).trim(), n = a8.getShaderInfoLog(S).trim();
            let i = !0, r = !0;
            if (!1 === a8.getProgramParameter(y, 35714)) {
                i = !1;
                const e = gs(a8, w, "vertex"), n = gs(a8, S, "fragment");
                console.error("THREE.WebGLProgram: Shader Error " + a8.getError() + " - VALIDATE_STATUS " + a8.getProgramParameter(y, 35715) + "\n\nProgram Info Log: " + t + "\n" + e + "\n" + n);
            } else "" !== t ? console.warn("THREE.WebGLProgram: Program Info Log:", t) : "" !== e && "" !== n || (r = !1);
            r && (this.diagnostics = {
                runnable: i,
                programLog: t,
                vertexShader: {
                    log: e,
                    prefix: x
                },
                fragmentShader: {
                    log: n,
                    prefix: _
                }
            });
        }
        let T, E;
        return a8.deleteShader(w), a8.deleteShader(S), this.getUniforms = function() {
            return void 0 === T && (T = new ps(a8, y)), T;
        }, this.getAttributes = function() {
            return void 0 === E && (E = function(t, e) {
                const n = {}, i = t.getProgramParameter(e, 35721);
                for(let r = 0; r < i; r++){
                    const i = t.getActiveAttrib(e, r), s = i.name;
                    let a = 1;
                    35674 === i.type && (a = 2), 35675 === i.type && (a = 3), 35676 === i.type && (a = 4), n[s] = {
                        type: i.type,
                        location: t.getAttribLocation(e, s),
                        locationSize: a
                    };
                }
                return n;
            }(a8, y)), E;
        }, this.destroy = function() {
            i30.releaseStatesOfProgram(this), a8.deleteProgram(y), this.program = void 0;
        }, this.name = n33.shaderName, this.id = fs++, this.cacheKey = e47, this.usedTimes = 1, this.program = y, this.vertexShader = w, this.fragmentShader = S, this;
    }
    let Ds = 0;
    class Is {
        constructor(){
            this.shaderCache = new Map, this.materialCache = new Map;
        }
        update(t) {
            const e = t.vertexShader, n = t.fragmentShader, i = this._getShaderStage(e), r = this._getShaderStage(n), s = this._getShaderCacheForMaterial(t);
            return !1 === s.has(i) && (s.add(i), i.usedTimes++), !1 === s.has(r) && (s.add(r), r.usedTimes++), this;
        }
        remove(t) {
            const e = this.materialCache.get(t);
            for (const t81 of e)t81.usedTimes--, 0 === t81.usedTimes && this.shaderCache.delete(t81.code);
            return this.materialCache.delete(t), this;
        }
        getVertexShaderID(t) {
            return this._getShaderStage(t.vertexShader).id;
        }
        getFragmentShaderID(t) {
            return this._getShaderStage(t.fragmentShader).id;
        }
        dispose() {
            this.shaderCache.clear(), this.materialCache.clear();
        }
        _getShaderCacheForMaterial(t) {
            const e = this.materialCache;
            return !1 === e.has(t) && e.set(t, new Set), e.get(t);
        }
        _getShaderStage(t) {
            const e = this.shaderCache;
            if (!1 === e.has(t)) {
                const n = new Ns(t);
                e.set(t, n);
            }
            return e.get(t);
        }
    }
    class Ns {
        constructor(t){
            this.id = Ds++, this.code = t, this.usedTimes = 0;
        }
    }
    function Bs(t82, e48, n34, i31, r, s12, a) {
        const o7 = new Xe, c = new Is, h3 = [], u = r.isWebGL2, d = r.logarithmicDepthBuffer, p = r.floatVertexTextures, m = r.maxVertexUniforms, f = r.vertexTextures;
        let g = r.precision;
        const v = {
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
            SpriteMaterial: "sprite"
        };
        return {
            getParameters: function(s, o, h, y, x) {
                const _ = y.fog, b = x.geometry, M = s.isMeshStandardMaterial ? y.environment : null, w = (s.isMeshStandardMaterial ? n34 : e48).get(s.envMap || M), S = w && w.mapping === l1 ? w.image.height : null, T = v[s.type], E = x.isSkinnedMesh ? function(t) {
                    const e = t.skeleton.bones;
                    if (p) return 1024;
                    {
                        const t = m, n = Math.floor((t - 20) / 4), i = Math.min(n, e.length);
                        return i < e.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + e.length + " bones. This GPU supports " + i + "."), 0) : i;
                    }
                }(x) : 0;
                null !== s.precision && (g = r.getMaxPrecision(s.precision), g !== s.precision && console.warn("THREE.WebGLProgram.getParameters:", s.precision, "not supported, using", g, "instead."));
                const A = b.morphAttributes.position || b.morphAttributes.normal || b.morphAttributes.color, R = void 0 !== A ? A.length : 0;
                let C, L, P, D, I = 0;
                if (void 0 !== b.morphAttributes.position && (I = 1), void 0 !== b.morphAttributes.normal && (I = 2), void 0 !== b.morphAttributes.color && (I = 3), T) {
                    const t = Di[T];
                    C = t.vertexShader, L = t.fragmentShader;
                } else C = s.vertexShader, L = s.fragmentShader, c.update(s), P = c.getVertexShaderID(s), D = c.getFragmentShaderID(s);
                const N = t82.getRenderTarget(), B = s.alphaTest > 0, O = s.clearcoat > 0;
                return {
                    isWebGL2: u,
                    shaderID: T,
                    shaderName: s.type,
                    vertexShader: C,
                    fragmentShader: L,
                    defines: s.defines,
                    customVertexShaderID: P,
                    customFragmentShaderID: D,
                    isRawShaderMaterial: !0 === s.isRawShaderMaterial,
                    glslVersion: s.glslVersion,
                    precision: g,
                    instancing: !0 === x.isInstancedMesh,
                    instancingColor: !0 === x.isInstancedMesh && null !== x.instanceColor,
                    supportsVertexTextures: f,
                    outputEncoding: null === N ? t82.outputEncoding : !0 === N.isXRRenderTarget ? N.texture.encoding : at,
                    map: !!s.map,
                    matcap: !!s.matcap,
                    envMap: !!w,
                    envMapMode: w && w.mapping,
                    envMapCubeUVHeight: S,
                    lightMap: !!s.lightMap,
                    aoMap: !!s.aoMap,
                    emissiveMap: !!s.emissiveMap,
                    bumpMap: !!s.bumpMap,
                    normalMap: !!s.normalMap,
                    objectSpaceNormalMap: 1 === s.normalMapType,
                    tangentSpaceNormalMap: 0 === s.normalMapType,
                    decodeVideoTexture: !!s.map && !0 === s.map.isVideoTexture && s.map.encoding === ot1,
                    clearcoat: O,
                    clearcoatMap: O && !!s.clearcoatMap,
                    clearcoatRoughnessMap: O && !!s.clearcoatRoughnessMap,
                    clearcoatNormalMap: O && !!s.clearcoatNormalMap,
                    displacementMap: !!s.displacementMap,
                    roughnessMap: !!s.roughnessMap,
                    metalnessMap: !!s.metalnessMap,
                    specularMap: !!s.specularMap,
                    specularIntensityMap: !!s.specularIntensityMap,
                    specularColorMap: !!s.specularColorMap,
                    opaque: !1 === s.transparent && 1 === s.blending,
                    alphaMap: !!s.alphaMap,
                    alphaTest: B,
                    gradientMap: !!s.gradientMap,
                    sheen: s.sheen > 0,
                    sheenColorMap: !!s.sheenColorMap,
                    sheenRoughnessMap: !!s.sheenRoughnessMap,
                    transmission: s.transmission > 0,
                    transmissionMap: !!s.transmissionMap,
                    thicknessMap: !!s.thicknessMap,
                    combine: s.combine,
                    vertexTangents: !!s.normalMap && !!b.attributes.tangent,
                    vertexColors: s.vertexColors,
                    vertexAlphas: !0 === s.vertexColors && !!b.attributes.color && 4 === b.attributes.color.itemSize,
                    vertexUvs: !!(s.map || s.bumpMap || s.normalMap || s.specularMap || s.alphaMap || s.emissiveMap || s.roughnessMap || s.metalnessMap || s.clearcoatMap || s.clearcoatRoughnessMap || s.clearcoatNormalMap || s.displacementMap || s.transmissionMap || s.thicknessMap || s.specularIntensityMap || s.specularColorMap || s.sheenColorMap || s.sheenRoughnessMap),
                    uvsVertexOnly: !(s.map || s.bumpMap || s.normalMap || s.specularMap || s.alphaMap || s.emissiveMap || s.roughnessMap || s.metalnessMap || s.clearcoatNormalMap || s.transmission > 0 || s.transmissionMap || s.thicknessMap || s.specularIntensityMap || s.specularColorMap || s.sheen > 0 || s.sheenColorMap || s.sheenRoughnessMap || !s.displacementMap),
                    fog: !!_,
                    useFog: s.fog,
                    fogExp2: _ && _.isFogExp2,
                    flatShading: !!s.flatShading,
                    sizeAttenuation: s.sizeAttenuation,
                    logarithmicDepthBuffer: d,
                    skinning: !0 === x.isSkinnedMesh && E > 0,
                    maxBones: E,
                    useVertexTexture: p,
                    morphTargets: void 0 !== b.morphAttributes.position,
                    morphNormals: void 0 !== b.morphAttributes.normal,
                    morphColors: void 0 !== b.morphAttributes.color,
                    morphTargetsCount: R,
                    morphTextureStride: I,
                    numDirLights: o.directional.length,
                    numPointLights: o.point.length,
                    numSpotLights: o.spot.length,
                    numRectAreaLights: o.rectArea.length,
                    numHemiLights: o.hemi.length,
                    numDirLightShadows: o.directionalShadowMap.length,
                    numPointLightShadows: o.pointShadowMap.length,
                    numSpotLightShadows: o.spotShadowMap.length,
                    numClippingPlanes: a.numPlanes,
                    numClipIntersection: a.numIntersection,
                    dithering: s.dithering,
                    shadowMapEnabled: t82.shadowMap.enabled && h.length > 0,
                    shadowMapType: t82.shadowMap.type,
                    toneMapping: s.toneMapped ? t82.toneMapping : 0,
                    physicallyCorrectLights: t82.physicallyCorrectLights,
                    premultipliedAlpha: s.premultipliedAlpha,
                    doubleSided: 2 === s.side,
                    flipSided: 1 === s.side,
                    depthPacking: void 0 !== s.depthPacking && s.depthPacking,
                    index0AttributeName: s.index0AttributeName,
                    extensionDerivatives: s.extensions && s.extensions.derivatives,
                    extensionFragDepth: s.extensions && s.extensions.fragDepth,
                    extensionDrawBuffers: s.extensions && s.extensions.drawBuffers,
                    extensionShaderTextureLOD: s.extensions && s.extensions.shaderTextureLOD,
                    rendererExtensionFragDepth: u || i31.has("EXT_frag_depth"),
                    rendererExtensionDrawBuffers: u || i31.has("WEBGL_draw_buffers"),
                    rendererExtensionShaderTextureLod: u || i31.has("EXT_shader_texture_lod"),
                    customProgramCacheKey: s.customProgramCacheKey()
                };
            },
            getProgramCacheKey: function(e49) {
                const n = [];
                if (e49.shaderID ? n.push(e49.shaderID) : (n.push(e49.customVertexShaderID), n.push(e49.customFragmentShaderID)), void 0 !== e49.defines) for(const t83 in e49.defines)n.push(t83), n.push(e49.defines[t83]);
                return !1 === e49.isRawShaderMaterial && (!function(t, e) {
                    t.push(e.precision), t.push(e.outputEncoding), t.push(e.envMapMode), t.push(e.envMapCubeUVHeight), t.push(e.combine), t.push(e.vertexUvs), t.push(e.fogExp2), t.push(e.sizeAttenuation), t.push(e.maxBones), t.push(e.morphTargetsCount), t.push(e.morphAttributeCount), t.push(e.numDirLights), t.push(e.numPointLights), t.push(e.numSpotLights), t.push(e.numHemiLights), t.push(e.numRectAreaLights), t.push(e.numDirLightShadows), t.push(e.numPointLightShadows), t.push(e.numSpotLightShadows), t.push(e.shadowMapType), t.push(e.toneMapping), t.push(e.numClippingPlanes), t.push(e.numClipIntersection);
                }(n, e49), function(t, e) {
                    o7.disableAll(), e.isWebGL2 && o7.enable(0);
                    e.supportsVertexTextures && o7.enable(1);
                    e.instancing && o7.enable(2);
                    e.instancingColor && o7.enable(3);
                    e.map && o7.enable(4);
                    e.matcap && o7.enable(5);
                    e.envMap && o7.enable(6);
                    e.lightMap && o7.enable(7);
                    e.aoMap && o7.enable(8);
                    e.emissiveMap && o7.enable(9);
                    e.bumpMap && o7.enable(10);
                    e.normalMap && o7.enable(11);
                    e.objectSpaceNormalMap && o7.enable(12);
                    e.tangentSpaceNormalMap && o7.enable(13);
                    e.clearcoat && o7.enable(14);
                    e.clearcoatMap && o7.enable(15);
                    e.clearcoatRoughnessMap && o7.enable(16);
                    e.clearcoatNormalMap && o7.enable(17);
                    e.displacementMap && o7.enable(18);
                    e.specularMap && o7.enable(19);
                    e.roughnessMap && o7.enable(20);
                    e.metalnessMap && o7.enable(21);
                    e.gradientMap && o7.enable(22);
                    e.alphaMap && o7.enable(23);
                    e.alphaTest && o7.enable(24);
                    e.vertexColors && o7.enable(25);
                    e.vertexAlphas && o7.enable(26);
                    e.vertexUvs && o7.enable(27);
                    e.vertexTangents && o7.enable(28);
                    e.uvsVertexOnly && o7.enable(29);
                    e.fog && o7.enable(30);
                    t.push(o7.mask), o7.disableAll(), e.useFog && o7.enable(0);
                    e.flatShading && o7.enable(1);
                    e.logarithmicDepthBuffer && o7.enable(2);
                    e.skinning && o7.enable(3);
                    e.useVertexTexture && o7.enable(4);
                    e.morphTargets && o7.enable(5);
                    e.morphNormals && o7.enable(6);
                    e.morphColors && o7.enable(7);
                    e.premultipliedAlpha && o7.enable(8);
                    e.shadowMapEnabled && o7.enable(9);
                    e.physicallyCorrectLights && o7.enable(10);
                    e.doubleSided && o7.enable(11);
                    e.flipSided && o7.enable(12);
                    e.depthPacking && o7.enable(13);
                    e.dithering && o7.enable(14);
                    e.specularIntensityMap && o7.enable(15);
                    e.specularColorMap && o7.enable(16);
                    e.transmission && o7.enable(17);
                    e.transmissionMap && o7.enable(18);
                    e.thicknessMap && o7.enable(19);
                    e.sheen && o7.enable(20);
                    e.sheenColorMap && o7.enable(21);
                    e.sheenRoughnessMap && o7.enable(22);
                    e.decodeVideoTexture && o7.enable(23);
                    e.opaque && o7.enable(24);
                    t.push(o7.mask);
                }(n, e49), n.push(t82.outputEncoding)), n.push(e49.customProgramCacheKey), n.join();
            },
            getUniforms: function(t) {
                const e = v[t.type];
                let n;
                if (e) {
                    const t = Di[e];
                    n = di.clone(t.uniforms);
                } else n = t.uniforms;
                return n;
            },
            acquireProgram: function(e, n) {
                let i;
                for(let t = 0, e50 = h3.length; t < e50; t++){
                    const e = h3[t];
                    if (e.cacheKey === n) {
                        i = e, ++i.usedTimes;
                        break;
                    }
                }
                return void 0 === i && (i = new Ps(t82, n, e, s12), h3.push(i)), i;
            },
            releaseProgram: function(t) {
                if (0 == --t.usedTimes) {
                    const e = h3.indexOf(t);
                    h3[e] = h3[h3.length - 1], h3.pop(), t.destroy();
                }
            },
            releaseShaderCache: function(t) {
                c.remove(t);
            },
            programs: h3,
            dispose: function() {
                c.dispose();
            }
        };
    }
    function Os() {
        let t = new WeakMap;
        return {
            get: function(e) {
                let n = t.get(e);
                return void 0 === n && (n = {}, t.set(e, n)), n;
            },
            remove: function(e) {
                t.delete(e);
            },
            update: function(e, n, i) {
                t.get(e)[n] = i;
            },
            dispose: function() {
                t = new WeakMap;
            }
        };
    }
    function zs(t, e) {
        return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id;
    }
    function Us(t, e) {
        return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id;
    }
    function Fs() {
        const t84 = [];
        let e51 = 0;
        const n35 = [], i32 = [], r19 = [];
        function s13(n, i, r, s, a, o) {
            let l = t84[e51];
            return void 0 === l ? (l = {
                id: n.id,
                object: n,
                geometry: i,
                material: r,
                groupOrder: s,
                renderOrder: n.renderOrder,
                z: a,
                group: o
            }, t84[e51] = l) : (l.id = n.id, l.object = n, l.geometry = i, l.material = r, l.groupOrder = s, l.renderOrder = n.renderOrder, l.z = a, l.group = o), e51++, l;
        }
        return {
            opaque: n35,
            transmissive: i32,
            transparent: r19,
            init: function() {
                e51 = 0, n35.length = 0, i32.length = 0, r19.length = 0;
            },
            push: function(t, e, a, o, l, c) {
                const h = s13(t, e, a, o, l, c);
                a.transmission > 0 ? i32.push(h) : !0 === a.transparent ? r19.push(h) : n35.push(h);
            },
            unshift: function(t, e, a, o, l, c) {
                const h = s13(t, e, a, o, l, c);
                a.transmission > 0 ? i32.unshift(h) : !0 === a.transparent ? r19.unshift(h) : n35.unshift(h);
            },
            finish: function() {
                for(let n = e51, i = t84.length; n < i; n++){
                    const e = t84[n];
                    if (null === e.id) break;
                    e.id = null, e.object = null, e.geometry = null, e.material = null, e.group = null;
                }
            },
            sort: function(t, e) {
                n35.length > 1 && n35.sort(t || zs), i32.length > 1 && i32.sort(e || Us), r19.length > 1 && r19.sort(e || Us);
            }
        };
    }
    function Hs() {
        let t = new WeakMap;
        return {
            get: function(e, n) {
                let i;
                return !1 === t.has(e) ? (i = new Fs, t.set(e, [
                    i
                ])) : n >= t.get(e).length ? (i = new Fs, t.get(e).push(i)) : i = t.get(e)[n], i;
            },
            dispose: function() {
                t = new WeakMap;
            }
        };
    }
    function Gs() {
        const t = {};
        return {
            get: function(e) {
                if (void 0 !== t[e.id]) return t[e.id];
                let n;
                switch(e.type){
                    case "DirectionalLight":
                        n = {
                            direction: new se,
                            color: new Wt
                        };
                        break;
                    case "SpotLight":
                        n = {
                            position: new se,
                            direction: new se,
                            color: new Wt,
                            distance: 0,
                            coneCos: 0,
                            penumbraCos: 0,
                            decay: 0
                        };
                        break;
                    case "PointLight":
                        n = {
                            position: new se,
                            color: new Wt,
                            distance: 0,
                            decay: 0
                        };
                        break;
                    case "HemisphereLight":
                        n = {
                            direction: new se,
                            skyColor: new Wt,
                            groundColor: new Wt
                        };
                        break;
                    case "RectAreaLight":
                        n = {
                            color: new Wt,
                            position: new se,
                            halfWidth: new se,
                            halfHeight: new se
                        };
                }
                return t[e.id] = n, n;
            }
        };
    }
    let ks = 0;
    function Vs(t, e) {
        return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0);
    }
    function Ws(t86, e52) {
        const n36 = new Gs, i33 = function() {
            const t = {};
            return {
                get: function(e) {
                    if (void 0 !== t[e.id]) return t[e.id];
                    let n;
                    switch(e.type){
                        case "DirectionalLight":
                        case "SpotLight":
                            n = {
                                shadowBias: 0,
                                shadowNormalBias: 0,
                                shadowRadius: 1,
                                shadowMapSize: new Rt
                            };
                            break;
                        case "PointLight":
                            n = {
                                shadowBias: 0,
                                shadowNormalBias: 0,
                                shadowRadius: 1,
                                shadowMapSize: new Rt,
                                shadowCameraNear: 1,
                                shadowCameraFar: 1e3
                            };
                    }
                    return t[e.id] = n, n;
                }
            };
        }(), r = {
            version: 0,
            hash: {
                directionalLength: -1,
                pointLength: -1,
                spotLength: -1,
                rectAreaLength: -1,
                hemiLength: -1,
                numDirectionalShadows: -1,
                numPointShadows: -1,
                numSpotShadows: -1
            },
            ambient: [
                0,
                0,
                0
            ],
            probe: [],
            directional: [],
            directionalShadow: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotShadow: [],
            spotShadowMap: [],
            spotShadowMatrix: [],
            rectArea: [],
            rectAreaLTC1: null,
            rectAreaLTC2: null,
            point: [],
            pointShadow: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: []
        };
        for(let t85 = 0; t85 < 9; t85++)r.probe.push(new se);
        const s14 = new se, a9 = new Oe, o8 = new Oe;
        return {
            setup: function(s, a) {
                let o = 0, l = 0, c = 0;
                for(let t = 0; t < 9; t++)r.probe[t].set(0, 0, 0);
                let h = 0, u = 0, d = 0, p = 0, m = 0, f = 0, g = 0, v = 0;
                s.sort(Vs);
                const y = !0 !== a ? Math.PI : 1;
                for(let t87 = 0, e = s.length; t87 < e; t87++){
                    const e = s[t87], a = e.color, x = e.intensity, _ = e.distance, b = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
                    if (e.isAmbientLight) o += a.r * x * y, l += a.g * x * y, c += a.b * x * y;
                    else if (e.isLightProbe) for(let t = 0; t < 9; t++)r.probe[t].addScaledVector(e.sh.coefficients[t], x);
                    else if (e.isDirectionalLight) {
                        const t = n36.get(e);
                        if (t.color.copy(e.color).multiplyScalar(e.intensity * y), e.castShadow) {
                            const t = e.shadow, n = i33.get(e);
                            n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, n.shadowMapSize = t.mapSize, r.directionalShadow[h] = n, r.directionalShadowMap[h] = b, r.directionalShadowMatrix[h] = e.shadow.matrix, f++;
                        }
                        r.directional[h] = t, h++;
                    } else if (e.isSpotLight) {
                        const t = n36.get(e);
                        if (t.position.setFromMatrixPosition(e.matrixWorld), t.color.copy(a).multiplyScalar(x * y), t.distance = _, t.coneCos = Math.cos(e.angle), t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra)), t.decay = e.decay, e.castShadow) {
                            const t = e.shadow, n = i33.get(e);
                            n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, n.shadowMapSize = t.mapSize, r.spotShadow[d] = n, r.spotShadowMap[d] = b, r.spotShadowMatrix[d] = e.shadow.matrix, v++;
                        }
                        r.spot[d] = t, d++;
                    } else if (e.isRectAreaLight) {
                        const t = n36.get(e);
                        t.color.copy(a).multiplyScalar(x), t.halfWidth.set(.5 * e.width, 0, 0), t.halfHeight.set(0, .5 * e.height, 0), r.rectArea[p] = t, p++;
                    } else if (e.isPointLight) {
                        const t = n36.get(e);
                        if (t.color.copy(e.color).multiplyScalar(e.intensity * y), t.distance = e.distance, t.decay = e.decay, e.castShadow) {
                            const t = e.shadow, n = i33.get(e);
                            n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, n.shadowMapSize = t.mapSize, n.shadowCameraNear = t.camera.near, n.shadowCameraFar = t.camera.far, r.pointShadow[u] = n, r.pointShadowMap[u] = b, r.pointShadowMatrix[u] = e.shadow.matrix, g++;
                        }
                        r.point[u] = t, u++;
                    } else if (e.isHemisphereLight) {
                        const t = n36.get(e);
                        t.skyColor.copy(e.color).multiplyScalar(x * y), t.groundColor.copy(e.groundColor).multiplyScalar(x * y), r.hemi[m] = t, m++;
                    }
                }
                p > 0 && (e52.isWebGL2 || !0 === t86.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = Pi.LTC_FLOAT_1, r.rectAreaLTC2 = Pi.LTC_FLOAT_2) : !0 === t86.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = Pi.LTC_HALF_1, r.rectAreaLTC2 = Pi.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = o, r.ambient[1] = l, r.ambient[2] = c;
                const x = r.hash;
                x.directionalLength === h && x.pointLength === u && x.spotLength === d && x.rectAreaLength === p && x.hemiLength === m && x.numDirectionalShadows === f && x.numPointShadows === g && x.numSpotShadows === v || (r.directional.length = h, r.spot.length = d, r.rectArea.length = p, r.point.length = u, r.hemi.length = m, r.directionalShadow.length = f, r.directionalShadowMap.length = f, r.pointShadow.length = g, r.pointShadowMap.length = g, r.spotShadow.length = v, r.spotShadowMap.length = v, r.directionalShadowMatrix.length = f, r.pointShadowMatrix.length = g, r.spotShadowMatrix.length = v, x.directionalLength = h, x.pointLength = u, x.spotLength = d, x.rectAreaLength = p, x.hemiLength = m, x.numDirectionalShadows = f, x.numPointShadows = g, x.numSpotShadows = v, r.version = ks++);
            },
            setupView: function(t, e) {
                let n = 0, i = 0, l = 0, c = 0, h = 0;
                const u = e.matrixWorldInverse;
                for(let e53 = 0, d = t.length; e53 < d; e53++){
                    const d = t[e53];
                    if (d.isDirectionalLight) {
                        const t = r.directional[n];
                        t.direction.setFromMatrixPosition(d.matrixWorld), s14.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(s14), t.direction.transformDirection(u), n++;
                    } else if (d.isSpotLight) {
                        const t = r.spot[l];
                        t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), t.direction.setFromMatrixPosition(d.matrixWorld), s14.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(s14), t.direction.transformDirection(u), l++;
                    } else if (d.isRectAreaLight) {
                        const t = r.rectArea[c];
                        t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), o8.identity(), a9.copy(d.matrixWorld), a9.premultiply(u), o8.extractRotation(a9), t.halfWidth.set(.5 * d.width, 0, 0), t.halfHeight.set(0, .5 * d.height, 0), t.halfWidth.applyMatrix4(o8), t.halfHeight.applyMatrix4(o8), c++;
                    } else if (d.isPointLight) {
                        const t = r.point[i];
                        t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), i++;
                    } else if (d.isHemisphereLight) {
                        const t = r.hemi[h];
                        t.direction.setFromMatrixPosition(d.matrixWorld), t.direction.transformDirection(u), t.direction.normalize(), h++;
                    }
                }
            },
            state: r
        };
    }
    function js(t88, e) {
        const n = new Ws(t88, e), i = [], r = [];
        return {
            init: function() {
                i.length = 0, r.length = 0;
            },
            state: {
                lightsArray: i,
                shadowsArray: r,
                lights: n
            },
            setupLights: function(t) {
                n.setup(i, t);
            },
            setupLightsView: function(t) {
                n.setupView(i, t);
            },
            pushLight: function(t) {
                i.push(t);
            },
            pushShadow: function(t) {
                r.push(t);
            }
        };
    }
    function qs(t, e) {
        let n = new WeakMap;
        return {
            get: function(i, r = 0) {
                let s;
                return !1 === n.has(i) ? (s = new js(t, e), n.set(i, [
                    s
                ])) : r >= n.get(i).length ? (s = new js(t, e), n.get(i).push(s)) : s = n.get(i)[r], s;
            },
            dispose: function() {
                n = new WeakMap;
            }
        };
    }
    class Xs extends bn {
        constructor(t){
            super(), this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
        }
    }
    Xs.prototype.isMeshDepthMaterial = !0;
    class Js extends bn {
        constructor(t){
            super(), this.type = "MeshDistanceMaterial", this.referencePosition = new se, this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
        }
    }
    Js.prototype.isMeshDistanceMaterial = !0;
    function Ys(t89, e54, n37) {
        let i34 = new Ei;
        const r20 = new Rt, s15 = new Rt, a10 = new Kt, o9 = new Xs({
            depthPacking: 3201
        }), l5 = new Js, c5 = {}, h4 = n37.maxTextureSize, u5 = {
            0: 1,
            1: 0,
            2: 2
        }, p3 = new pi({
            defines: {
                VSM_SAMPLES: 8
            },
            uniforms: {
                shadow_pass: {
                    value: null
                },
                resolution: {
                    value: new Rt
                },
                radius: {
                    value: 4
                }
            },
            vertexShader: "void main() {\n	gl_Position = vec4( position, 1.0 );\n}",
            fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( squared_mean - mean * mean );\n	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
        }), m2 = p3.clone();
        m2.defines.HORIZONTAL_PASS = 1;
        const f2 = new Vn;
        f2.setAttribute("position", new Tn(new Float32Array([
            -1,
            -1,
            .5,
            3,
            -1,
            .5,
            -1,
            3,
            .5
        ]), 3));
        const g = new oi(f2, p3), v = this;
        function y(n, i) {
            const r = e54.update(g);
            p3.defines.VSM_SAMPLES !== n.blurSamples && (p3.defines.VSM_SAMPLES = n.blurSamples, m2.defines.VSM_SAMPLES = n.blurSamples, p3.needsUpdate = !0, m2.needsUpdate = !0), p3.uniforms.shadow_pass.value = n.map.texture, p3.uniforms.resolution.value = n.mapSize, p3.uniforms.radius.value = n.radius, t89.setRenderTarget(n.mapPass), t89.clear(), t89.renderBufferDirect(i, null, r, p3, g, null), m2.uniforms.shadow_pass.value = n.mapPass.texture, m2.uniforms.resolution.value = n.mapSize, m2.uniforms.radius.value = n.radius, t89.setRenderTarget(n.map), t89.clear(), t89.renderBufferDirect(i, null, r, m2, g, null);
        }
        function x(e, n, i, r, s, a) {
            let h = null;
            const d = !0 === i.isPointLight ? e.customDistanceMaterial : e.customDepthMaterial;
            if (h = void 0 !== d ? d : !0 === i.isPointLight ? l5 : o9, t89.localClippingEnabled && !0 === n.clipShadows && 0 !== n.clippingPlanes.length || n.displacementMap && 0 !== n.displacementScale || n.alphaMap && n.alphaTest > 0) {
                const t = h.uuid, e = n.uuid;
                let i = c5[t];
                void 0 === i && (i = {}, c5[t] = i);
                let r = i[e];
                void 0 === r && (r = h.clone(), i[e] = r), h = r;
            }
            return h.visible = n.visible, h.wireframe = n.wireframe, h.side = 3 === a ? null !== n.shadowSide ? n.shadowSide : n.side : null !== n.shadowSide ? n.shadowSide : u5[n.side], h.alphaMap = n.alphaMap, h.alphaTest = n.alphaTest, h.clipShadows = n.clipShadows, h.clippingPlanes = n.clippingPlanes, h.clipIntersection = n.clipIntersection, h.displacementMap = n.displacementMap, h.displacementScale = n.displacementScale, h.displacementBias = n.displacementBias, h.wireframeLinewidth = n.wireframeLinewidth, h.linewidth = n.linewidth, !0 === i.isPointLight && !0 === h.isMeshDistanceMaterial && (h.referencePosition.setFromMatrixPosition(i.matrixWorld), h.nearDistance = r, h.farDistance = s), h;
        }
        function _(n, r, s, a, o) {
            if (!1 === n.visible) return;
            if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && 3 === o) && (!n.frustumCulled || i34.intersectsObject(n))) {
                n.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, n.matrixWorld);
                const i = e54.update(n), r = n.material;
                if (Array.isArray(r)) {
                    const e = i.groups;
                    for(let l = 0, c = e.length; l < c; l++){
                        const c = e[l], h = r[c.materialIndex];
                        if (h && h.visible) {
                            const e = x(n, h, a, s.near, s.far, o);
                            t89.renderBufferDirect(s, null, i, e, n, c);
                        }
                    }
                } else if (r.visible) {
                    const e = x(n, r, a, s.near, s.far, o);
                    t89.renderBufferDirect(s, null, i, e, n, null);
                }
            }
            const l = n.children;
            for(let t = 0, e = l.length; t < e; t++)_(l[t], r, s, a, o);
        }
        this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function(e, n, o) {
            if (!1 === v.enabled) return;
            if (!1 === v.autoUpdate && !1 === v.needsUpdate) return;
            if (0 === e.length) return;
            const l = t89.getRenderTarget(), c = t89.getActiveCubeFace(), u = t89.getActiveMipmapLevel(), p = t89.state;
            p.setBlending(0), p.buffers.color.setClear(1, 1, 1, 1), p.buffers.depth.setTest(!0), p.setScissorTest(!1);
            for(let l6 = 0, c6 = e.length; l6 < c6; l6++){
                const c = e[l6], u = c.shadow;
                if (void 0 === u) {
                    console.warn("THREE.WebGLShadowMap:", c, "has no shadow.");
                    continue;
                }
                if (!1 === u.autoUpdate && !1 === u.needsUpdate) continue;
                r20.copy(u.mapSize);
                const m = u.getFrameExtents();
                if (r20.multiply(m), s15.copy(u.mapSize), (r20.x > h4 || r20.y > h4) && (r20.x > h4 && (s15.x = Math.floor(h4 / m.x), r20.x = s15.x * m.x, u.mapSize.x = s15.x), r20.y > h4 && (s15.y = Math.floor(h4 / m.y), r20.y = s15.y * m.y, u.mapSize.y = s15.y)), null !== u.map || u.isPointLightShadow || 3 !== this.type || (u.map = new Qt(r20.x, r20.y), u.map.texture.name = c.name + ".shadowMap", u.mapPass = new Qt(r20.x, r20.y), u.camera.updateProjectionMatrix()), null === u.map) {
                    const t = {
                        minFilter: d1,
                        magFilter: d1,
                        format: S1
                    };
                    u.map = new Qt(r20.x, r20.y, t), u.map.texture.name = c.name + ".shadowMap", u.camera.updateProjectionMatrix();
                }
                t89.setRenderTarget(u.map), t89.clear();
                const f = u.getViewportCount();
                for(let t = 0; t < f; t++){
                    const e = u.getViewport(t);
                    a10.set(s15.x * e.x, s15.y * e.y, s15.x * e.z, s15.y * e.w), p.viewport(a10), u.updateMatrices(c, t), i34 = u.getFrustum(), _(n, o, u.camera, c, this.type);
                }
                u.isPointLightShadow || 3 !== this.type || y(u, o), u.needsUpdate = !1;
            }
            v.needsUpdate = !1, t89.setRenderTarget(l, c, u);
        };
    }
    function Zs(t90, e55, i35) {
        const r21 = i35.isWebGL2;
        const s16 = new function() {
            let e56 = !1;
            const n38 = new Kt;
            let i36 = null;
            const r = new Kt(0, 0, 0, 0);
            return {
                setMask: function(n) {
                    i36 === n || e56 || (t90.colorMask(n, n, n, n), i36 = n);
                },
                setLocked: function(t) {
                    e56 = t;
                },
                setClear: function(e, i, s, a, o) {
                    !0 === o && (e *= a, i *= a, s *= a), n38.set(e, i, s, a), !1 === r.equals(n38) && (t90.clearColor(e, i, s, a), r.copy(n38));
                },
                reset: function() {
                    e56 = !1, i36 = null, r.set(-1, 0, 0, 0);
                }
            };
        }, a11 = new function() {
            let e57 = !1, n = null, i37 = null, r = null;
            return {
                setTest: function(t) {
                    t ? F(2929) : H(2929);
                },
                setMask: function(i) {
                    n === i || e57 || (t90.depthMask(i), n = i);
                },
                setFunc: function(e) {
                    if (i37 !== e) {
                        if (e) switch(e){
                            case 0:
                                t90.depthFunc(512);
                                break;
                            case 1:
                                t90.depthFunc(519);
                                break;
                            case 2:
                                t90.depthFunc(513);
                                break;
                            case 3:
                            default:
                                t90.depthFunc(515);
                                break;
                            case 4:
                                t90.depthFunc(514);
                                break;
                            case 5:
                                t90.depthFunc(518);
                                break;
                            case 6:
                                t90.depthFunc(516);
                                break;
                            case 7:
                                t90.depthFunc(517);
                        }
                        else t90.depthFunc(515);
                        i37 = e;
                    }
                },
                setLocked: function(t) {
                    e57 = t;
                },
                setClear: function(e) {
                    r !== e && (t90.clearDepth(e), r = e);
                },
                reset: function() {
                    e57 = !1, n = null, i37 = null, r = null;
                }
            };
        }, o10 = new function() {
            let e58 = !1, n39 = null, i38 = null, r = null, s = null, a12 = null, o = null, l = null, c = null;
            return {
                setTest: function(t) {
                    e58 || (t ? F(2960) : H(2960));
                },
                setMask: function(i) {
                    n39 === i || e58 || (t90.stencilMask(i), n39 = i);
                },
                setFunc: function(e, n, a) {
                    i38 === e && r === n && s === a || (t90.stencilFunc(e, n, a), i38 = e, r = n, s = a);
                },
                setOp: function(e, n, i) {
                    a12 === e && o === n && l === i || (t90.stencilOp(e, n, i), a12 = e, o = n, l = i);
                },
                setLocked: function(t) {
                    e58 = t;
                },
                setClear: function(e) {
                    c !== e && (t90.clearStencil(e), c = e);
                },
                reset: function() {
                    e58 = !1, n39 = null, i38 = null, r = null, s = null, a12 = null, o = null, l = null, c = null;
                }
            };
        };
        let l7 = {}, c7 = {}, h = new WeakMap, u = [], d = null, p = !1, m = null, f = null, g = null, v = null, y = null, x = null, _ = null, b = !1, M = null, w = null, S = null, T = null, E = null;
        const A = t90.getParameter(35661);
        let R = !1, C = 0;
        const L = t90.getParameter(7938);
        -1 !== L.indexOf("WebGL") ? (C = parseFloat(/^WebGL (\d)/.exec(L)[1]), R = C >= 1) : -1 !== L.indexOf("OpenGL ES") && (C = parseFloat(/^OpenGL ES (\d)/.exec(L)[1]), R = C >= 2);
        let P = null, D = {};
        const I = t90.getParameter(3088), N = t90.getParameter(2978), B = (new Kt).fromArray(I), O = (new Kt).fromArray(N);
        function z(e, n, i) {
            const r = new Uint8Array(4), s = t90.createTexture();
            t90.bindTexture(e, s), t90.texParameteri(e, 10241, 9728), t90.texParameteri(e, 10240, 9728);
            for(let e59 = 0; e59 < i; e59++)t90.texImage2D(n + e59, 0, 6408, 1, 1, 0, 6408, 5121, r);
            return s;
        }
        const U = {};
        function F(e) {
            !0 !== l7[e] && (t90.enable(e), l7[e] = !0);
        }
        function H(e) {
            !1 !== l7[e] && (t90.disable(e), l7[e] = !1);
        }
        U[3553] = z(3553, 3553, 1), U[34067] = z(34067, 34069, 6), s16.setClear(0, 0, 0, 1), a11.setClear(1), o10.setClear(0), F(2929), a11.setFunc(3), W(!1), j(1), F(2884), V(0);
        const G = {
            [n1]: 32774,
            101: 32778,
            102: 32779
        };
        if (r21) G[103] = 32775, G[104] = 32776;
        else {
            const t = e55.get("EXT_blend_minmax");
            null !== t && (G[103] = t.MIN_EXT, G[104] = t.MAX_EXT);
        }
        const k = {
            200: 0,
            201: 1,
            202: 768,
            204: 770,
            210: 776,
            208: 774,
            206: 772,
            203: 769,
            205: 771,
            209: 775,
            207: 773
        };
        function V(e, i, r, s, a, o, l, c) {
            if (0 !== e) {
                if (!1 === p && (F(3042), p = !0), 5 === e) a = a || i, o = o || r, l = l || s, i === f && a === y || (t90.blendEquationSeparate(G[i], G[a]), f = i, y = a), r === g && s === v && o === x && l === _ || (t90.blendFuncSeparate(k[r], k[s], k[o], k[l]), g = r, v = s, x = o, _ = l), m = e, b = null;
                else if (e !== m || c !== b) {
                    if (f === n1 && y === n1 || (t90.blendEquation(32774), f = n1, y = n1), c) switch(e){
                        case 1:
                            t90.blendFuncSeparate(1, 771, 1, 771);
                            break;
                        case 2:
                            t90.blendFunc(1, 1);
                            break;
                        case 3:
                            t90.blendFuncSeparate(0, 769, 0, 1);
                            break;
                        case 4:
                            t90.blendFuncSeparate(0, 768, 0, 770);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", e);
                    }
                    else switch(e){
                        case 1:
                            t90.blendFuncSeparate(770, 771, 1, 771);
                            break;
                        case 2:
                            t90.blendFunc(770, 1);
                            break;
                        case 3:
                            t90.blendFuncSeparate(0, 769, 0, 1);
                            break;
                        case 4:
                            t90.blendFunc(0, 768);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", e);
                    }
                    g = null, v = null, x = null, _ = null, m = e, b = c;
                }
            } else !0 === p && (H(3042), p = !1);
        }
        function W(e) {
            M !== e && (e ? t90.frontFace(2304) : t90.frontFace(2305), M = e);
        }
        function j(e) {
            0 !== e ? (F(2884), e !== w && (1 === e ? t90.cullFace(1029) : 2 === e ? t90.cullFace(1028) : t90.cullFace(1032))) : H(2884), w = e;
        }
        function q(e, n, i) {
            e ? (F(32823), T === n && E === i || (t90.polygonOffset(n, i), T = n, E = i)) : H(32823);
        }
        function X(e) {
            void 0 === e && (e = 33984 + A - 1), P !== e && (t90.activeTexture(e), P = e);
        }
        return {
            buffers: {
                color: s16,
                depth: a11,
                stencil: o10
            },
            enable: F,
            disable: H,
            bindFramebuffer: function(e, n) {
                return c7[e] !== n && (t90.bindFramebuffer(e, n), c7[e] = n, r21 && (36009 === e && (c7[36160] = n), 36160 === e && (c7[36009] = n)), !0);
            },
            drawBuffers: function(n, r) {
                let s = u, a = !1;
                if (n) {
                    if (s = h.get(r), void 0 === s && (s = [], h.set(r, s)), n.isWebGLMultipleRenderTargets) {
                        const t = n.texture;
                        if (s.length !== t.length || 36064 !== s[0]) {
                            for(let e = 0, n = t.length; e < n; e++)s[e] = 36064 + e;
                            s.length = t.length, a = !0;
                        }
                    } else 36064 !== s[0] && (s[0] = 36064, a = !0);
                } else 1029 !== s[0] && (s[0] = 1029, a = !0);
                a && (i35.isWebGL2 ? t90.drawBuffers(s) : e55.get("WEBGL_draw_buffers").drawBuffersWEBGL(s));
            },
            useProgram: function(e) {
                return d !== e && (t90.useProgram(e), d = e, !0);
            },
            setBlending: V,
            setMaterial: function(t, e) {
                2 === t.side ? H(2884) : F(2884);
                let n = 1 === t.side;
                e && (n = !n), W(n), 1 === t.blending && !1 === t.transparent ? V(0) : V(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), a11.setFunc(t.depthFunc), a11.setTest(t.depthTest), a11.setMask(t.depthWrite), s16.setMask(t.colorWrite);
                const i = t.stencilWrite;
                o10.setTest(i), i && (o10.setMask(t.stencilWriteMask), o10.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), o10.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), q(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits), !0 === t.alphaToCoverage ? F(32926) : H(32926);
            },
            setFlipSided: W,
            setCullFace: j,
            setLineWidth: function(e) {
                e !== S && (R && t90.lineWidth(e), S = e);
            },
            setPolygonOffset: q,
            setScissorTest: function(t) {
                t ? F(3089) : H(3089);
            },
            activeTexture: X,
            bindTexture: function(e, n) {
                null === P && X();
                let i = D[P];
                void 0 === i && (i = {
                    type: void 0,
                    texture: void 0
                }, D[P] = i), i.type === e && i.texture === n || (t90.bindTexture(e, n || U[e]), i.type = e, i.texture = n);
            },
            unbindTexture: function() {
                const e = D[P];
                void 0 !== e && void 0 !== e.type && (t90.bindTexture(e.type, null), e.type = void 0, e.texture = void 0);
            },
            compressedTexImage2D: function() {
                try {
                    t90.compressedTexImage2D.apply(t90, arguments);
                } catch (t) {
                    console.error("THREE.WebGLState:", t);
                }
            },
            texImage2D: function() {
                try {
                    t90.texImage2D.apply(t90, arguments);
                } catch (t) {
                    console.error("THREE.WebGLState:", t);
                }
            },
            texImage3D: function() {
                try {
                    t90.texImage3D.apply(t90, arguments);
                } catch (t) {
                    console.error("THREE.WebGLState:", t);
                }
            },
            texStorage2D: function() {
                try {
                    t90.texStorage2D.apply(t90, arguments);
                } catch (t) {
                    console.error("THREE.WebGLState:", t);
                }
            },
            texStorage3D: function() {
                try {
                    t90.texStorage3D.apply(t90, arguments);
                } catch (t) {
                    console.error("THREE.WebGLState:", t);
                }
            },
            texSubImage2D: function() {
                try {
                    t90.texSubImage2D.apply(t90, arguments);
                } catch (t) {
                    console.error("THREE.WebGLState:", t);
                }
            },
            texSubImage3D: function() {
                try {
                    t90.texSubImage3D.apply(t90, arguments);
                } catch (t) {
                    console.error("THREE.WebGLState:", t);
                }
            },
            compressedTexSubImage2D: function() {
                try {
                    t90.compressedTexSubImage2D.apply(t90, arguments);
                } catch (t) {
                    console.error("THREE.WebGLState:", t);
                }
            },
            scissor: function(e) {
                !1 === B.equals(e) && (t90.scissor(e.x, e.y, e.z, e.w), B.copy(e));
            },
            viewport: function(e) {
                !1 === O.equals(e) && (t90.viewport(e.x, e.y, e.z, e.w), O.copy(e));
            },
            reset: function() {
                t90.disable(3042), t90.disable(2884), t90.disable(2929), t90.disable(32823), t90.disable(3089), t90.disable(2960), t90.disable(32926), t90.blendEquation(32774), t90.blendFunc(1, 0), t90.blendFuncSeparate(1, 0, 1, 0), t90.colorMask(!0, !0, !0, !0), t90.clearColor(0, 0, 0, 0), t90.depthMask(!0), t90.depthFunc(513), t90.clearDepth(1), t90.stencilMask(4294967295), t90.stencilFunc(519, 0, 4294967295), t90.stencilOp(7680, 7680, 7680), t90.clearStencil(0), t90.cullFace(1029), t90.frontFace(2305), t90.polygonOffset(0, 0), t90.activeTexture(33984), t90.bindFramebuffer(36160, null), !0 === r21 && (t90.bindFramebuffer(36009, null), t90.bindFramebuffer(36008, null)), t90.useProgram(null), t90.lineWidth(1), t90.scissor(0, 0, t90.canvas.width, t90.canvas.height), t90.viewport(0, 0, t90.canvas.width, t90.canvas.height), l7 = {}, P = null, D = {}, c7 = {}, h = new WeakMap, u = [], d = null, p = !1, m = null, f = null, g = null, v = null, y = null, x = null, _ = null, b = !1, M = null, w = null, S = null, T = null, E = null, B.set(0, 0, t90.canvas.width, t90.canvas.height), O.set(0, 0, t90.canvas.width, t90.canvas.height), s16.reset(), a11.reset(), o10.reset();
            }
        };
    }
    function Ks(t92, e60, n40, i39, r22, s17, a13) {
        const o11 = r22.isWebGL2, l8 = r22.maxTextures, A2 = r22.maxCubemapSize, R = r22.maxTextureSize, C2 = r22.maxSamples, L = e60.has("WEBGL_multisampled_render_to_texture") ? e60.get("WEBGL_multisampled_render_to_texture") : null, P = /OculusBrowser/g.test(navigator.userAgent), D = new WeakMap;
        let I;
        const N = new WeakMap;
        let B = !1;
        try {
            B = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
        } catch (t91) {}
        function O(t, e) {
            return B ? new OffscreenCanvas(t, e) : It("canvas");
        }
        function z(t, e, n, i) {
            let r = 1;
            if ((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)), r < 1 || !0 === e) {
                if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
                    const i = e ? Et : Math.floor, s = i(r * t.width), a = i(r * t.height);
                    void 0 === I && (I = O(s, a));
                    const o = n ? O(s, a) : I;
                    o.width = s, o.height = a;
                    return o.getContext("2d").drawImage(t, 0, 0, s, a), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + s + "x" + a + ")."), o;
                }
                return "data" in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."), t;
            }
            return t;
        }
        function U(t) {
            return St1(t.width) && St1(t.height);
        }
        function F(t, e) {
            return t.generateMipmaps && e && t.minFilter !== d1 && t.minFilter !== f1;
        }
        function H(e) {
            t92.generateMipmap(e);
        }
        function G(n, i, r, s, a = !1) {
            if (!1 === o11) return i;
            if (null !== n) {
                if (void 0 !== t92[n]) return t92[n];
                console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'");
            }
            let l = i;
            return 6403 === i && (5126 === r && (l = 33326), 5131 === r && (l = 33325), 5121 === r && (l = 33321)), 33319 === i && (5126 === r && (l = 33328), 5131 === r && (l = 33327), 5121 === r && (l = 33323)), 6408 === i && (5126 === r && (l = 34836), 5131 === r && (l = 34842), 5121 === r && (l = s === ot1 && !1 === a ? 35907 : 32856), 32819 === r && (l = 32854), 32820 === r && (l = 32855)), 33325 !== l && 33326 !== l && 33327 !== l && 33328 !== l && 34842 !== l && 34836 !== l || e60.get("EXT_color_buffer_float"), l;
        }
        function k(t, e, n) {
            return !0 === F(t, n) || t.isFramebufferTexture && t.minFilter !== d1 && t.minFilter !== f1 ? Math.log2(Math.max(e.width, e.height)) + 1 : void 0 !== t.mipmaps && t.mipmaps.length > 0 ? t.mipmaps.length : t.isCompressedTexture && Array.isArray(t.image) ? e.mipmaps.length : 1;
        }
        function V(t) {
            return t === d1 || t === p1 || t === m1 ? 9728 : 9729;
        }
        function W(t93) {
            const e61 = t93.target;
            e61.removeEventListener("dispose", W), function(t) {
                const e = i39.get(t);
                if (void 0 === e.__webglInit) return;
                const n = t.source, r = N.get(n);
                if (r) {
                    const i = r[e.__cacheKey];
                    i.usedTimes--, 0 === i.usedTimes && q(t), 0 === Object.keys(r).length && N.delete(n);
                }
                i39.remove(t);
            }(e61), e61.isVideoTexture && D.delete(e61);
        }
        function j(e64) {
            const n41 = e64.target;
            n41.removeEventListener("dispose", j), function(e) {
                const n = e.texture, r = i39.get(e), s = i39.get(n);
                void 0 !== s.__webglTexture && (t92.deleteTexture(s.__webglTexture), a13.memory.textures--);
                e.depthTexture && e.depthTexture.dispose();
                if (e.isWebGLCubeRenderTarget) for(let e62 = 0; e62 < 6; e62++)t92.deleteFramebuffer(r.__webglFramebuffer[e62]), r.__webglDepthbuffer && t92.deleteRenderbuffer(r.__webglDepthbuffer[e62]);
                else t92.deleteFramebuffer(r.__webglFramebuffer), r.__webglDepthbuffer && t92.deleteRenderbuffer(r.__webglDepthbuffer), r.__webglMultisampledFramebuffer && t92.deleteFramebuffer(r.__webglMultisampledFramebuffer), r.__webglColorRenderbuffer && t92.deleteRenderbuffer(r.__webglColorRenderbuffer), r.__webglDepthRenderbuffer && t92.deleteRenderbuffer(r.__webglDepthRenderbuffer);
                if (e.isWebGLMultipleRenderTargets) for(let e63 = 0, r23 = n.length; e63 < r23; e63++){
                    const r = i39.get(n[e63]);
                    r.__webglTexture && (t92.deleteTexture(r.__webglTexture), a13.memory.textures--), i39.remove(n[e63]);
                }
                i39.remove(n), i39.remove(e);
            }(n41);
        }
        function q(e) {
            const n = i39.get(e);
            t92.deleteTexture(n.__webglTexture);
            const r = e.source;
            delete N.get(r)[n.__cacheKey], a13.memory.textures--;
        }
        let X = 0;
        function J(t94, e65) {
            const r = i39.get(t94);
            if (t94.isVideoTexture && function(t) {
                const e = a13.render.frame;
                D.get(t) !== e && (D.set(t, e), t.update());
            }(t94), !1 === t94.isRenderTargetTexture && t94.version > 0 && r.__version !== t94.version) {
                const n = t94.image;
                if (null === n) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
                else {
                    if (!1 !== n.complete) return void $(r, t94, e65);
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
                }
            }
            n40.activeTexture(33984 + e65), n40.bindTexture(3553, r.__webglTexture);
        }
        const Y = {
            [c1]: 10497,
            [h1]: 33071,
            [u1]: 33648
        }, Z = {
            [d1]: 9728,
            [p1]: 9984,
            [m1]: 9986,
            [f1]: 9729,
            [g1]: 9985,
            [v1]: 9987
        };
        function K(n, s, a) {
            if (a ? (t92.texParameteri(n, 10242, Y[s.wrapS]), t92.texParameteri(n, 10243, Y[s.wrapT]), 32879 !== n && 35866 !== n || t92.texParameteri(n, 32882, Y[s.wrapR]), t92.texParameteri(n, 10240, Z[s.magFilter]), t92.texParameteri(n, 10241, Z[s.minFilter])) : (t92.texParameteri(n, 10242, 33071), t92.texParameteri(n, 10243, 33071), 32879 !== n && 35866 !== n || t92.texParameteri(n, 32882, 33071), s.wrapS === h1 && s.wrapT === h1 || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t92.texParameteri(n, 10240, V(s.magFilter)), t92.texParameteri(n, 10241, V(s.minFilter)), s.minFilter !== d1 && s.minFilter !== f1 && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), !0 === e60.has("EXT_texture_filter_anisotropic")) {
                const a = e60.get("EXT_texture_filter_anisotropic");
                if (s.type === b1 && !1 === e60.has("OES_texture_float_linear")) return;
                if (!1 === o11 && s.type === M1 && !1 === e60.has("OES_texture_half_float_linear")) return;
                (s.anisotropy > 1 || i39.get(s).__currentAnisotropy) && (t92.texParameterf(n, a.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s.anisotropy, r22.getMaxAnisotropy())), i39.get(s).__currentAnisotropy = s.anisotropy);
            }
        }
        function Q(e66, n) {
            let i = !1;
            void 0 === e66.__webglInit && (e66.__webglInit = !0, n.addEventListener("dispose", W));
            const r = n.source;
            let s = N.get(r);
            void 0 === s && (s = {}, N.set(r, s));
            const o = function(t) {
                const e = [];
                return e.push(t.wrapS), e.push(t.wrapT), e.push(t.magFilter), e.push(t.minFilter), e.push(t.anisotropy), e.push(t.internalFormat), e.push(t.format), e.push(t.type), e.push(t.generateMipmaps), e.push(t.premultiplyAlpha), e.push(t.flipY), e.push(t.unpackAlignment), e.push(t.encoding), e.join();
            }(n);
            if (o !== e66.__cacheKey) {
                void 0 === s[o] && (s[o] = {
                    texture: t92.createTexture(),
                    usedTimes: 0
                }, a13.memory.textures++, i = !0), s[o].usedTimes++;
                const r = s[e66.__cacheKey];
                void 0 !== r && (s[e66.__cacheKey].usedTimes--, 0 === r.usedTimes && q(n)), e66.__cacheKey = o, e66.__webglTexture = s[o].texture;
            }
            return i;
        }
        function $(e, i, r) {
            let a = 3553;
            i.isDataArrayTexture && (a = 35866), i.isData3DTexture && (a = 32879);
            const l = Q(e, i), c = i.source;
            if (n40.activeTexture(33984 + r), n40.bindTexture(a, e.__webglTexture), c.version !== c.__currentVersion || !0 === l) {
                t92.pixelStorei(37440, i.flipY), t92.pixelStorei(37441, i.premultiplyAlpha), t92.pixelStorei(3317, i.unpackAlignment), t92.pixelStorei(37443, 0);
                const r = function(t) {
                    return !o11 && (t.wrapS !== h1 || t.wrapT !== h1 || t.minFilter !== d1 && t.minFilter !== f1);
                }(i) && !1 === U(i.image);
                let l = z(i.image, r, !1, R);
                l = st(i, l);
                const u = U(l) || o11, p = s17.convert(i.format, i.encoding);
                let m, g = s17.convert(i.type), v = G(i.internalFormat, p, g, i.encoding, i.isVideoTexture);
                K(a, i, u);
                const y = i.mipmaps, M = o11 && !0 !== i.isVideoTexture, A = void 0 === e.__version, C = k(i, l, u);
                if (i.isDepthTexture) v = 6402, o11 ? v = i.type === b1 ? 36012 : i.type === _1 ? 33190 : i.type === w1 ? 35056 : 33189 : i.type === b1 && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), i.format === T1 && 6402 === v && i.type !== x1 && i.type !== _1 && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), i.type = x1, g = s17.convert(i.type)), i.format === E1 && 6402 === v && (v = 34041, i.type !== w1 && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), i.type = w1, g = s17.convert(i.type))), M && A ? n40.texStorage2D(3553, 1, v, l.width, l.height) : n40.texImage2D(3553, 0, v, l.width, l.height, 0, p, g, null);
                else if (i.isDataTexture) {
                    if (y.length > 0 && u) {
                        M && A && n40.texStorage2D(3553, C, v, y[0].width, y[0].height);
                        for(let t = 0, e = y.length; t < e; t++)m = y[t], M ? n40.texSubImage2D(3553, t, 0, 0, m.width, m.height, p, g, m.data) : n40.texImage2D(3553, t, v, m.width, m.height, 0, p, g, m.data);
                        i.generateMipmaps = !1;
                    } else M ? (A && n40.texStorage2D(3553, C, v, l.width, l.height), n40.texSubImage2D(3553, 0, 0, 0, l.width, l.height, p, g, l.data)) : n40.texImage2D(3553, 0, v, l.width, l.height, 0, p, g, l.data);
                } else if (i.isCompressedTexture) {
                    M && A && n40.texStorage2D(3553, C, v, y[0].width, y[0].height);
                    for(let t = 0, e = y.length; t < e; t++)m = y[t], i.format !== S1 ? null !== p ? M ? n40.compressedTexSubImage2D(3553, t, 0, 0, m.width, m.height, p, m.data) : n40.compressedTexImage2D(3553, t, v, m.width, m.height, 0, m.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : M ? n40.texSubImage2D(3553, t, 0, 0, m.width, m.height, p, g, m.data) : n40.texImage2D(3553, t, v, m.width, m.height, 0, p, g, m.data);
                } else if (i.isDataArrayTexture) M ? (A && n40.texStorage3D(35866, C, v, l.width, l.height, l.depth), n40.texSubImage3D(35866, 0, 0, 0, 0, l.width, l.height, l.depth, p, g, l.data)) : n40.texImage3D(35866, 0, v, l.width, l.height, l.depth, 0, p, g, l.data);
                else if (i.isData3DTexture) M ? (A && n40.texStorage3D(32879, C, v, l.width, l.height, l.depth), n40.texSubImage3D(32879, 0, 0, 0, 0, l.width, l.height, l.depth, p, g, l.data)) : n40.texImage3D(32879, 0, v, l.width, l.height, l.depth, 0, p, g, l.data);
                else if (i.isFramebufferTexture) M && A ? n40.texStorage2D(3553, C, v, l.width, l.height) : n40.texImage2D(3553, 0, v, l.width, l.height, 0, p, g, null);
                else if (y.length > 0 && u) {
                    M && A && n40.texStorage2D(3553, C, v, y[0].width, y[0].height);
                    for(let t = 0, e = y.length; t < e; t++)m = y[t], M ? n40.texSubImage2D(3553, t, 0, 0, p, g, m) : n40.texImage2D(3553, t, v, p, g, m);
                    i.generateMipmaps = !1;
                } else M ? (A && n40.texStorage2D(3553, C, v, l.width, l.height), n40.texSubImage2D(3553, 0, 0, 0, p, g, l)) : n40.texImage2D(3553, 0, v, p, g, l);
                F(i, u) && H(a), c.__currentVersion = c.version, i.onUpdate && i.onUpdate(i);
            }
            e.__version = i.version;
        }
        function tt(e, r, a, o, l) {
            const c = s17.convert(a.format, a.encoding), h = s17.convert(a.type), u = G(a.internalFormat, c, h, a.encoding);
            i39.get(r).__hasExternalTextures || (32879 === l || 35866 === l ? n40.texImage3D(l, 0, u, r.width, r.height, r.depth, 0, c, h, null) : n40.texImage2D(l, 0, u, r.width, r.height, 0, c, h, null)), n40.bindFramebuffer(36160, e), rt(r) ? L.framebufferTexture2DMultisampleEXT(36160, o, l, i39.get(a).__webglTexture, 0, it(r)) : t92.framebufferTexture2D(36160, o, l, i39.get(a).__webglTexture, 0), n40.bindFramebuffer(36160, null);
        }
        function et(e, n, i) {
            if (t92.bindRenderbuffer(36161, e), n.depthBuffer && !n.stencilBuffer) {
                let r = 33189;
                if (i || rt(n)) {
                    const e = n.depthTexture;
                    e && e.isDepthTexture && (e.type === b1 ? r = 36012 : e.type === _1 && (r = 33190));
                    const i = it(n);
                    rt(n) ? L.renderbufferStorageMultisampleEXT(36161, i, r, n.width, n.height) : t92.renderbufferStorageMultisample(36161, i, r, n.width, n.height);
                } else t92.renderbufferStorage(36161, r, n.width, n.height);
                t92.framebufferRenderbuffer(36160, 36096, 36161, e);
            } else if (n.depthBuffer && n.stencilBuffer) {
                const r = it(n);
                i && !1 === rt(n) ? t92.renderbufferStorageMultisample(36161, r, 35056, n.width, n.height) : rt(n) ? L.renderbufferStorageMultisampleEXT(36161, r, 35056, n.width, n.height) : t92.renderbufferStorage(36161, 34041, n.width, n.height), t92.framebufferRenderbuffer(36160, 33306, 36161, e);
            } else {
                const e = !0 === n.isWebGLMultipleRenderTargets ? n.texture[0] : n.texture, r = s17.convert(e.format, e.encoding), a = s17.convert(e.type), o = G(e.internalFormat, r, a, e.encoding), l = it(n);
                i && !1 === rt(n) ? t92.renderbufferStorageMultisample(36161, l, o, n.width, n.height) : rt(n) ? L.renderbufferStorageMultisampleEXT(36161, l, o, n.width, n.height) : t92.renderbufferStorage(36161, o, n.width, n.height);
            }
            t92.bindRenderbuffer(36161, null);
        }
        function nt(e67) {
            const r24 = i39.get(e67), s18 = !0 === e67.isWebGLCubeRenderTarget;
            if (e67.depthTexture && !r24.__autoAllocateDepthBuffer) {
                if (s18) throw new Error("target.depthTexture not supported in Cube render targets");
                !function(e, r) {
                    if (r && r.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
                    if (n40.bindFramebuffer(36160, e), !r.depthTexture || !r.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                    i39.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width, r.depthTexture.image.height = r.height, r.depthTexture.needsUpdate = !0), J(r.depthTexture, 0);
                    const s = i39.get(r.depthTexture).__webglTexture, a = it(r);
                    if (r.depthTexture.format === T1) rt(r) ? L.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, s, 0, a) : t92.framebufferTexture2D(36160, 36096, 3553, s, 0);
                    else {
                        if (r.depthTexture.format !== E1) throw new Error("Unknown depthTexture format");
                        rt(r) ? L.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, s, 0, a) : t92.framebufferTexture2D(36160, 33306, 3553, s, 0);
                    }
                }(r24.__webglFramebuffer, e67);
            } else if (s18) {
                r24.__webglDepthbuffer = [];
                for(let i = 0; i < 6; i++)n40.bindFramebuffer(36160, r24.__webglFramebuffer[i]), r24.__webglDepthbuffer[i] = t92.createRenderbuffer(), et(r24.__webglDepthbuffer[i], e67, !1);
            } else n40.bindFramebuffer(36160, r24.__webglFramebuffer), r24.__webglDepthbuffer = t92.createRenderbuffer(), et(r24.__webglDepthbuffer, e67, !1);
            n40.bindFramebuffer(36160, null);
        }
        function it(t) {
            return Math.min(C2, t.samples);
        }
        function rt(t) {
            const n = i39.get(t);
            return o11 && t.samples > 0 && !0 === e60.has("WEBGL_multisampled_render_to_texture") && !1 !== n.__useRenderToTexture;
        }
        function st(t, n) {
            const i = t.encoding, r = t.format, s = t.type;
            return !0 === t.isCompressedTexture || !0 === t.isVideoTexture || t.format === mt1 || i !== at && (i === ot1 ? !1 === o11 ? !0 === e60.has("EXT_sRGB") && r === S1 ? (t.format = mt1, t.minFilter = f1, t.generateMipmaps = !1) : n = qt.sRGBToLinear(n) : r === S1 && s === y1 || console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", i)), n;
        }
        this.allocateTextureUnit = function() {
            const t = X;
            return t >= l8 && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + l8), X += 1, t;
        }, this.resetTextureUnits = function() {
            X = 0;
        }, this.setTexture2D = J, this.setTexture2DArray = function(t, e) {
            const r = i39.get(t);
            t.version > 0 && r.__version !== t.version ? $(r, t, e) : (n40.activeTexture(33984 + e), n40.bindTexture(35866, r.__webglTexture));
        }, this.setTexture3D = function(t, e) {
            const r = i39.get(t);
            t.version > 0 && r.__version !== t.version ? $(r, t, e) : (n40.activeTexture(33984 + e), n40.bindTexture(32879, r.__webglTexture));
        }, this.setTextureCube = function(e68, r25) {
            const a14 = i39.get(e68);
            e68.version > 0 && a14.__version !== e68.version ? function(e, i, r) {
                if (6 !== i.image.length) return;
                const a = Q(e, i), l = i.source;
                if (n40.activeTexture(33984 + r), n40.bindTexture(34067, e.__webglTexture), l.version !== l.__currentVersion || !0 === a) {
                    t92.pixelStorei(37440, i.flipY), t92.pixelStorei(37441, i.premultiplyAlpha), t92.pixelStorei(3317, i.unpackAlignment), t92.pixelStorei(37443, 0);
                    const r = i.isCompressedTexture || i.image[0].isCompressedTexture, a = i.image[0] && i.image[0].isDataTexture, c = [];
                    for(let t = 0; t < 6; t++)c[t] = r || a ? a ? i.image[t].image : i.image[t] : z(i.image[t], !1, !0, A2), c[t] = st(i, c[t]);
                    const h = c[0], u = U(h) || o11, d = s17.convert(i.format, i.encoding), p = s17.convert(i.type), m = G(i.internalFormat, d, p, i.encoding), f = o11 && !0 !== i.isVideoTexture, g = void 0 === e.__version;
                    let v, y = k(i, h, u);
                    if (K(34067, i, u), r) {
                        f && g && n40.texStorage2D(34067, y, m, h.width, h.height);
                        for(let t = 0; t < 6; t++){
                            v = c[t].mipmaps;
                            for(let e = 0; e < v.length; e++){
                                const r = v[e];
                                i.format !== S1 ? null !== d ? f ? n40.compressedTexSubImage2D(34069 + t, e, 0, 0, r.width, r.height, d, r.data) : n40.compressedTexImage2D(34069 + t, e, m, r.width, r.height, 0, r.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : f ? n40.texSubImage2D(34069 + t, e, 0, 0, r.width, r.height, d, p, r.data) : n40.texImage2D(34069 + t, e, m, r.width, r.height, 0, d, p, r.data);
                            }
                        }
                    } else {
                        v = i.mipmaps, f && g && (v.length > 0 && y++, n40.texStorage2D(34067, y, m, c[0].width, c[0].height));
                        for(let t = 0; t < 6; t++)if (a) {
                            f ? n40.texSubImage2D(34069 + t, 0, 0, 0, c[t].width, c[t].height, d, p, c[t].data) : n40.texImage2D(34069 + t, 0, m, c[t].width, c[t].height, 0, d, p, c[t].data);
                            for(let e = 0; e < v.length; e++){
                                const i = v[e].image[t].image;
                                f ? n40.texSubImage2D(34069 + t, e + 1, 0, 0, i.width, i.height, d, p, i.data) : n40.texImage2D(34069 + t, e + 1, m, i.width, i.height, 0, d, p, i.data);
                            }
                        } else {
                            f ? n40.texSubImage2D(34069 + t, 0, 0, 0, d, p, c[t]) : n40.texImage2D(34069 + t, 0, m, d, p, c[t]);
                            for(let e = 0; e < v.length; e++){
                                const i = v[e];
                                f ? n40.texSubImage2D(34069 + t, e + 1, 0, 0, d, p, i.image[t]) : n40.texImage2D(34069 + t, e + 1, m, d, p, i.image[t]);
                            }
                        }
                    }
                    F(i, u) && H(34067), l.__currentVersion = l.version, i.onUpdate && i.onUpdate(i);
                }
                e.__version = i.version;
            }(a14, e68, r25) : (n40.activeTexture(33984 + r25), n40.bindTexture(34067, a14.__webglTexture));
        }, this.rebindTextures = function(t, e, n) {
            const r = i39.get(t);
            void 0 !== e && tt(r.__webglFramebuffer, t, t.texture, 36064, 3553), void 0 !== n && nt(t);
        }, this.setupRenderTarget = function(e) {
            const l = e.texture, c = i39.get(e), h = i39.get(l);
            e.addEventListener("dispose", j), !0 !== e.isWebGLMultipleRenderTargets && (void 0 === h.__webglTexture && (h.__webglTexture = t92.createTexture()), h.__version = l.version, a13.memory.textures++);
            const u = !0 === e.isWebGLCubeRenderTarget, d = !0 === e.isWebGLMultipleRenderTargets, p = U(e) || o11;
            if (u) {
                c.__webglFramebuffer = [];
                for(let e = 0; e < 6; e++)c.__webglFramebuffer[e] = t92.createFramebuffer();
            } else if (c.__webglFramebuffer = t92.createFramebuffer(), d) {
                if (r22.drawBuffers) {
                    const n = e.texture;
                    for(let e69 = 0, r = n.length; e69 < r; e69++){
                        const r = i39.get(n[e69]);
                        void 0 === r.__webglTexture && (r.__webglTexture = t92.createTexture(), a13.memory.textures++);
                    }
                } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
            } else if (o11 && e.samples > 0 && !1 === rt(e)) {
                c.__webglMultisampledFramebuffer = t92.createFramebuffer(), c.__webglColorRenderbuffer = t92.createRenderbuffer(), t92.bindRenderbuffer(36161, c.__webglColorRenderbuffer);
                const i = s17.convert(l.format, l.encoding), r = s17.convert(l.type), a = G(l.internalFormat, i, r, l.encoding), o = it(e);
                t92.renderbufferStorageMultisample(36161, o, a, e.width, e.height), n40.bindFramebuffer(36160, c.__webglMultisampledFramebuffer), t92.framebufferRenderbuffer(36160, 36064, 36161, c.__webglColorRenderbuffer), t92.bindRenderbuffer(36161, null), e.depthBuffer && (c.__webglDepthRenderbuffer = t92.createRenderbuffer(), et(c.__webglDepthRenderbuffer, e, !0)), n40.bindFramebuffer(36160, null);
            }
            if (u) {
                n40.bindTexture(34067, h.__webglTexture), K(34067, l, p);
                for(let t = 0; t < 6; t++)tt(c.__webglFramebuffer[t], e, l, 36064, 34069 + t);
                F(l, p) && H(34067), n40.unbindTexture();
            } else if (d) {
                const t = e.texture;
                for(let r = 0, s = t.length; r < s; r++){
                    const s = t[r], a = i39.get(s);
                    n40.bindTexture(3553, a.__webglTexture), K(3553, s, p), tt(c.__webglFramebuffer, e, s, 36064 + r, 3553), F(s, p) && H(3553);
                }
                n40.unbindTexture();
            } else {
                let t = 3553;
                (e.isWebGL3DRenderTarget || e.isWebGLArrayRenderTarget) && (o11 ? t = e.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), n40.bindTexture(t, h.__webglTexture), K(t, l, p), tt(c.__webglFramebuffer, e, l, 36064, t), F(l, p) && H(t), n40.unbindTexture();
            }
            e.depthBuffer && nt(e);
        }, this.updateRenderTargetMipmap = function(t) {
            const e = U(t) || o11, r = !0 === t.isWebGLMultipleRenderTargets ? t.texture : [
                t.texture
            ];
            for(let s = 0, a = r.length; s < a; s++){
                const a = r[s];
                if (F(a, e)) {
                    const e = t.isWebGLCubeRenderTarget ? 34067 : 3553, r = i39.get(a).__webglTexture;
                    n40.bindTexture(e, r), H(e), n40.unbindTexture();
                }
            }
        }, this.updateMultisampleRenderTarget = function(e) {
            if (o11 && e.samples > 0 && !1 === rt(e)) {
                const r = e.width, s = e.height;
                let a = 16384;
                const o = [
                    36064
                ], l = e.stencilBuffer ? 33306 : 36096;
                e.depthBuffer && o.push(l);
                const c = i39.get(e), h = void 0 !== c.__ignoreDepthValues && c.__ignoreDepthValues;
                !1 === h && (e.depthBuffer && (a |= 256), e.stencilBuffer && (a |= 1024)), n40.bindFramebuffer(36008, c.__webglMultisampledFramebuffer), n40.bindFramebuffer(36009, c.__webglFramebuffer), !0 === h && (t92.invalidateFramebuffer(36008, [
                    l
                ]), t92.invalidateFramebuffer(36009, [
                    l
                ])), t92.blitFramebuffer(0, 0, r, s, 0, 0, r, s, a, 9728), P && t92.invalidateFramebuffer(36008, o), n40.bindFramebuffer(36008, null), n40.bindFramebuffer(36009, c.__webglMultisampledFramebuffer);
            }
        }, this.setupDepthRenderbuffer = nt, this.setupFrameBufferTexture = tt, this.useMultisampledRTT = rt;
    }
    function Qs(t95, e, n42) {
        const i = n42.isWebGL2;
        return {
            convert: function(t, n = null) {
                let r;
                if (t === y1) return 5121;
                if (1017 === t) return 32819;
                if (1018 === t) return 32820;
                if (1010 === t) return 5120;
                if (1011 === t) return 5122;
                if (t === x1) return 5123;
                if (1013 === t) return 5124;
                if (t === _1) return 5125;
                if (t === b1) return 5126;
                if (t === M1) return i ? 5131 : (r = e.get("OES_texture_half_float"), null !== r ? r.HALF_FLOAT_OES : null);
                if (1021 === t) return 6406;
                if (t === S1) return 6408;
                if (1024 === t) return 6409;
                if (1025 === t) return 6410;
                if (t === T1) return 6402;
                if (t === E1) return 34041;
                if (1028 === t) return 6403;
                if (1022 === t) return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 6408;
                if (t === mt1) return r = e.get("EXT_sRGB"), null !== r ? r.SRGB_ALPHA_EXT : null;
                if (1029 === t) return 36244;
                if (1030 === t) return 33319;
                if (1031 === t) return 33320;
                if (1033 === t) return 36249;
                if (t === A1 || t === R1 || t === C1 || t === L1) {
                    if (n === ot1) {
                        if (r = e.get("WEBGL_compressed_texture_s3tc_srgb"), null === r) return null;
                        if (t === A1) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                        if (t === R1) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                        if (t === C1) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                        if (t === L1) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
                    } else {
                        if (r = e.get("WEBGL_compressed_texture_s3tc"), null === r) return null;
                        if (t === A1) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
                        if (t === R1) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                        if (t === C1) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                        if (t === L1) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
                    }
                }
                if (t === P1 || t === D1 || t === I1 || t === N1) {
                    if (r = e.get("WEBGL_compressed_texture_pvrtc"), null === r) return null;
                    if (t === P1) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if (t === D1) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if (t === I1) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if (t === N1) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
                }
                if (36196 === t) return r = e.get("WEBGL_compressed_texture_etc1"), null !== r ? r.COMPRESSED_RGB_ETC1_WEBGL : null;
                if (t === B1 || t === O1) {
                    if (r = e.get("WEBGL_compressed_texture_etc"), null === r) return null;
                    if (t === B1) return n === ot1 ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
                    if (t === O1) return n === ot1 ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
                }
                if (t === z1 || t === U1 || t === F1 || t === H1 || t === G1 || t === k1 || t === V1 || t === W1 || t === j1 || t === q1 || t === X1 || t === J1 || t === Y1 || t === Z1) {
                    if (r = e.get("WEBGL_compressed_texture_astc"), null === r) return null;
                    if (t === z1) return n === ot1 ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
                    if (t === U1) return n === ot1 ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
                    if (t === F1) return n === ot1 ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
                    if (t === H1) return n === ot1 ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
                    if (t === G1) return n === ot1 ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
                    if (t === k1) return n === ot1 ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
                    if (t === V1) return n === ot1 ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
                    if (t === W1) return n === ot1 ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
                    if (t === j1) return n === ot1 ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
                    if (t === q1) return n === ot1 ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
                    if (t === X1) return n === ot1 ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
                    if (t === J1) return n === ot1 ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
                    if (t === Y1) return n === ot1 ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
                    if (t === Z1) return n === ot1 ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
                }
                if (t === K1) {
                    if (r = e.get("EXT_texture_compression_bptc"), null === r) return null;
                    if (t === K1) return n === ot1 ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
                }
                return t === w1 ? i ? 34042 : (r = e.get("WEBGL_depth_texture"), null !== r ? r.UNSIGNED_INT_24_8_WEBGL : null) : void 0;
            }
        };
    }
    class $s extends fi {
        constructor(t = []){
            super(), this.cameras = t;
        }
    }
    $s.prototype.isArrayCamera = !0;
    class ta extends ln {
        constructor(){
            super(), this.type = "Group";
        }
    }
    ta.prototype.isGroup = !0;
    const ea = {
        type: "move"
    };
    class na {
        constructor(){
            this._targetRay = null, this._grip = null, this._hand = null;
        }
        getHandSpace() {
            return null === this._hand && (this._hand = new ta, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
                pinching: !1
            }), this._hand;
        }
        getTargetRaySpace() {
            return null === this._targetRay && (this._targetRay = new ta, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new se, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new se), this._targetRay;
        }
        getGripSpace() {
            return null === this._grip && (this._grip = new ta, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new se, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new se), this._grip;
        }
        dispatchEvent(t) {
            return null !== this._targetRay && this._targetRay.dispatchEvent(t), null !== this._grip && this._grip.dispatchEvent(t), null !== this._hand && this._hand.dispatchEvent(t), this;
        }
        disconnect(t) {
            return this.dispatchEvent({
                type: "disconnected",
                data: t
            }), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this;
        }
        update(t, e, n) {
            let i = null, r = null, s = null;
            const a = this._targetRay, o = this._grip, l = this._hand;
            if (t && "visible-blurred" !== e.session.visibilityState) {
                if (null !== a && (i = e.getPose(t.targetRaySpace, n), null !== i && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(ea))), l && t.hand) {
                    s = !0;
                    for (const i of t.hand.values()){
                        const t = e.getJointPose(i, n);
                        if (void 0 === l.joints[i.jointName]) {
                            const t = new ta;
                            t.matrixAutoUpdate = !1, t.visible = !1, l.joints[i.jointName] = t, l.add(t);
                        }
                        const r = l.joints[i.jointName];
                        null !== t && (r.matrix.fromArray(t.transform.matrix), r.matrix.decompose(r.position, r.rotation, r.scale), r.jointRadius = t.radius), r.visible = null !== t;
                    }
                    const i40 = l.joints["index-finger-tip"], r = l.joints["thumb-tip"], a = i40.position.distanceTo(r.position), o = .02, c = .005;
                    l.inputState.pinching && a > o + c ? (l.inputState.pinching = !1, this.dispatchEvent({
                        type: "pinchend",
                        handedness: t.handedness,
                        target: this
                    })) : !l.inputState.pinching && a <= o - c && (l.inputState.pinching = !0, this.dispatchEvent({
                        type: "pinchstart",
                        handedness: t.handedness,
                        target: this
                    }));
                } else null !== o && t.gripSpace && (r = e.getPose(t.gripSpace, n), null !== r && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1));
            }
            return null !== a && (a.visible = null !== i), null !== o && (o.visible = null !== r), null !== l && (l.visible = null !== s), this;
        }
    }
    class ia extends Zt {
        constructor(t, e, n, i, r, s, a, o, l, c){
            if ((c = void 0 !== c ? c : T1) !== T1 && c !== E1) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
            void 0 === n && c === T1 && (n = x1), void 0 === n && c === E1 && (n = w1), super(null, i, r, s, a, o, c, n, l), this.image = {
                width: t,
                height: e
            }, this.magFilter = void 0 !== a ? a : d1, this.minFilter = void 0 !== o ? o : d1, this.flipY = !1, this.generateMipmaps = !1;
        }
    }
    ia.prototype.isDepthTexture = !0;
    class ra extends ft1 {
        constructor(t96, e71){
            super();
            const n43 = this;
            let i41 = null, r26 = 1, s19 = null, a15 = "local-floor", o12 = null, l9 = null, c8 = null, h5 = null, u6 = null;
            const d4 = e71.getContextAttributes();
            let p4 = null, m3 = null;
            const f3 = [], g2 = new Map, v2 = new fi;
            v2.layers.enable(1), v2.viewport = new Kt;
            const _3 = new fi;
            _3.layers.enable(2), _3.viewport = new Kt;
            const b2 = [
                v2,
                _3
            ], M = new $s;
            M.layers.enable(1), M.layers.enable(2);
            let A = null, R = null;
            function C(t) {
                const e = g2.get(t.inputSource);
                e && e.dispatchEvent({
                    type: t.type,
                    data: t.inputSource
                });
            }
            function L() {
                g2.forEach(function(t, e) {
                    t.disconnect(e);
                }), g2.clear(), A = null, R = null, t96.setRenderTarget(p4), h5 = null, c8 = null, l9 = null, i41 = null, m3 = null, O.stop(), n43.isPresenting = !1, n43.dispatchEvent({
                    type: "sessionend"
                });
            }
            function P(t) {
                const e = i41.inputSources;
                for(let t97 = 0; t97 < f3.length; t97++)g2.set(e[t97], f3[t97]);
                for(let e72 = 0; e72 < t.removed.length; e72++){
                    const n = t.removed[e72], i = g2.get(n);
                    i && (i.dispatchEvent({
                        type: "disconnected",
                        data: n
                    }), g2.delete(n));
                }
                for(let e73 = 0; e73 < t.added.length; e73++){
                    const n = t.added[e73], i = g2.get(n);
                    i && i.dispatchEvent({
                        type: "connected",
                        data: n
                    });
                }
            }
            this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(t) {
                let e = f3[t];
                return void 0 === e && (e = new na, f3[t] = e), e.getTargetRaySpace();
            }, this.getControllerGrip = function(t) {
                let e = f3[t];
                return void 0 === e && (e = new na, f3[t] = e), e.getGripSpace();
            }, this.getHand = function(t) {
                let e = f3[t];
                return void 0 === e && (e = new na, f3[t] = e), e.getHandSpace();
            }, this.setFramebufferScaleFactor = function(t) {
                r26 = t, !0 === n43.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
            }, this.setReferenceSpaceType = function(t) {
                a15 = t, !0 === n43.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
            }, this.getReferenceSpace = function() {
                return s19;
            }, this.getBaseLayer = function() {
                return null !== c8 ? c8 : h5;
            }, this.getBinding = function() {
                return l9;
            }, this.getFrame = function() {
                return u6;
            }, this.getSession = function() {
                return i41;
            }, this.setSession = async function(o) {
                if (i41 = o, null !== i41) {
                    if (p4 = t96.getRenderTarget(), i41.addEventListener("select", C), i41.addEventListener("selectstart", C), i41.addEventListener("selectend", C), i41.addEventListener("squeeze", C), i41.addEventListener("squeezestart", C), i41.addEventListener("squeezeend", C), i41.addEventListener("end", L), i41.addEventListener("inputsourceschange", P), !0 !== d4.xrCompatible && await e71.makeXRCompatible(), void 0 === i41.renderState.layers || !1 === t96.capabilities.isWebGL2) {
                        const n = {
                            antialias: void 0 !== i41.renderState.layers || d4.antialias,
                            alpha: d4.alpha,
                            depth: d4.depth,
                            stencil: d4.stencil,
                            framebufferScaleFactor: r26
                        };
                        h5 = new XRWebGLLayer(i41, e71, n), i41.updateRenderState({
                            baseLayer: h5
                        }), m3 = new Qt(h5.framebufferWidth, h5.framebufferHeight, {
                            format: S1,
                            type: y1,
                            encoding: t96.outputEncoding
                        });
                    } else {
                        let n = null, s = null, a = null;
                        d4.depth && (a = d4.stencil ? 35056 : 33190, n = d4.stencil ? E1 : T1, s = d4.stencil ? w1 : x1);
                        const o = {
                            colorFormat: t96.outputEncoding === ot1 ? 35907 : 32856,
                            depthFormat: a,
                            scaleFactor: r26
                        };
                        l9 = new XRWebGLBinding(i41, e71), c8 = l9.createProjectionLayer(o), i41.updateRenderState({
                            layers: [
                                c8
                            ]
                        }), m3 = new Qt(c8.textureWidth, c8.textureHeight, {
                            format: S1,
                            type: y1,
                            depthTexture: new ia(c8.textureWidth, c8.textureHeight, s, void 0, void 0, void 0, void 0, void 0, void 0, n),
                            stencilBuffer: d4.stencil,
                            encoding: t96.outputEncoding,
                            samples: d4.antialias ? 4 : 0
                        });
                        t96.properties.get(m3).__ignoreDepthValues = c8.ignoreDepthValues;
                    }
                    m3.isXRRenderTarget = !0, this.setFoveation(1), s19 = await i41.requestReferenceSpace(a15), O.setContext(i41), O.start(), n43.isPresenting = !0, n43.dispatchEvent({
                        type: "sessionstart"
                    });
                }
            };
            const D = new se, I = new se;
            function N(t, e) {
                null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.copy(t.matrixWorld).invert();
            }
            this.updateCamera = function(t100) {
                if (null === i41) return;
                M.near = _3.near = v2.near = t100.near, M.far = _3.far = v2.far = t100.far, A === M.near && R === M.far || (i41.updateRenderState({
                    depthNear: M.near,
                    depthFar: M.far
                }), A = M.near, R = M.far);
                const e75 = t100.parent, n44 = M.cameras;
                N(M, e75);
                for(let t98 = 0; t98 < n44.length; t98++)N(n44[t98], e75);
                M.matrixWorld.decompose(M.position, M.quaternion, M.scale), t100.position.copy(M.position), t100.quaternion.copy(M.quaternion), t100.scale.copy(M.scale), t100.matrix.copy(M.matrix), t100.matrixWorld.copy(M.matrixWorld);
                const r27 = t100.children;
                for(let t99 = 0, e74 = r27.length; t99 < e74; t99++)r27[t99].updateMatrixWorld(!0);
                2 === n44.length ? function(t, e, n) {
                    D.setFromMatrixPosition(e.matrixWorld), I.setFromMatrixPosition(n.matrixWorld);
                    const i = D.distanceTo(I), r = e.projectionMatrix.elements, s = n.projectionMatrix.elements, a = r[14] / (r[10] - 1), o = r[14] / (r[10] + 1), l = (r[9] + 1) / r[5], c = (r[9] - 1) / r[5], h = (r[8] - 1) / r[0], u = (s[8] + 1) / s[0], d = a * h, p = a * u, m = i / (-h + u), f = m * -h;
                    e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(f), t.translateZ(m), t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.copy(t.matrixWorld).invert();
                    const g = a + m, v = o + m, y = d - f, x = p + (i - f), _ = l * o / v * g, b = c * o / v * g;
                    t.projectionMatrix.makePerspective(y, x, _, b, g, v);
                }(M, v2, _3) : M.projectionMatrix.copy(v2.projectionMatrix);
            }, this.getCamera = function() {
                return M;
            }, this.getFoveation = function() {
                return null !== c8 ? c8.fixedFoveation : null !== h5 ? h5.fixedFoveation : void 0;
            }, this.setFoveation = function(t) {
                null !== c8 && (c8.fixedFoveation = t), null !== h5 && void 0 !== h5.fixedFoveation && (h5.fixedFoveation = t);
            };
            let B = null;
            const O = new Ai;
            O.setAnimationLoop(function(e, n) {
                if (o12 = n.getViewerPose(s19), u6 = n, null !== o12) {
                    const e = o12.views;
                    null !== h5 && (t96.setRenderTargetFramebuffer(m3, h5.framebuffer), t96.setRenderTarget(m3));
                    let n = !1;
                    e.length !== M.cameras.length && (M.cameras.length = 0, n = !0);
                    for(let i = 0; i < e.length; i++){
                        const r = e[i];
                        let s = null;
                        if (null !== h5) s = h5.getViewport(r);
                        else {
                            const e = l9.getViewSubImage(c8, r);
                            s = e.viewport, 0 === i && (t96.setRenderTargetTextures(m3, e.colorTexture, c8.ignoreDepthValues ? void 0 : e.depthStencilTexture), t96.setRenderTarget(m3));
                        }
                        const a = b2[i];
                        a.matrix.fromArray(r.transform.matrix), a.projectionMatrix.fromArray(r.projectionMatrix), a.viewport.set(s.x, s.y, s.width, s.height), 0 === i && M.matrix.copy(a.matrix), !0 === n && M.cameras.push(a);
                    }
                }
                const r = i41.inputSources;
                for(let t = 0; t < f3.length; t++){
                    const e = f3[t], i = r[t];
                    e.update(i, n, s19);
                }
                B && B(e, n), u6 = null;
            }), this.setAnimationLoop = function(t) {
                B = t;
            }, this.dispose = function() {};
        }
    }
    function sa(t101, e76) {
        function n45(n, i) {
            n.opacity.value = i.opacity, i.color && n.diffuse.value.copy(i.color), i.emissive && n.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity), i.map && (n.map.value = i.map), i.alphaMap && (n.alphaMap.value = i.alphaMap), i.bumpMap && (n.bumpMap.value = i.bumpMap, n.bumpScale.value = i.bumpScale, 1 === i.side && (n.bumpScale.value *= -1)), i.displacementMap && (n.displacementMap.value = i.displacementMap, n.displacementScale.value = i.displacementScale, n.displacementBias.value = i.displacementBias), i.emissiveMap && (n.emissiveMap.value = i.emissiveMap), i.normalMap && (n.normalMap.value = i.normalMap, n.normalScale.value.copy(i.normalScale), 1 === i.side && n.normalScale.value.negate()), i.specularMap && (n.specularMap.value = i.specularMap), i.alphaTest > 0 && (n.alphaTest.value = i.alphaTest);
            const r = e76.get(i).envMap;
            if (r && (n.envMap.value = r, n.flipEnvMap.value = r.isCubeTexture && !1 === r.isRenderTargetTexture ? -1 : 1, n.reflectivity.value = i.reflectivity, n.ior.value = i.ior, n.refractionRatio.value = i.refractionRatio), i.lightMap) {
                n.lightMap.value = i.lightMap;
                const e = !0 !== t101.physicallyCorrectLights ? Math.PI : 1;
                n.lightMapIntensity.value = i.lightMapIntensity * e;
            }
            let s, a;
            i.aoMap && (n.aoMap.value = i.aoMap, n.aoMapIntensity.value = i.aoMapIntensity), i.map ? s = i.map : i.specularMap ? s = i.specularMap : i.displacementMap ? s = i.displacementMap : i.normalMap ? s = i.normalMap : i.bumpMap ? s = i.bumpMap : i.roughnessMap ? s = i.roughnessMap : i.metalnessMap ? s = i.metalnessMap : i.alphaMap ? s = i.alphaMap : i.emissiveMap ? s = i.emissiveMap : i.clearcoatMap ? s = i.clearcoatMap : i.clearcoatNormalMap ? s = i.clearcoatNormalMap : i.clearcoatRoughnessMap ? s = i.clearcoatRoughnessMap : i.specularIntensityMap ? s = i.specularIntensityMap : i.specularColorMap ? s = i.specularColorMap : i.transmissionMap ? s = i.transmissionMap : i.thicknessMap ? s = i.thicknessMap : i.sheenColorMap ? s = i.sheenColorMap : i.sheenRoughnessMap && (s = i.sheenRoughnessMap), void 0 !== s && (s.isWebGLRenderTarget && (s = s.texture), !0 === s.matrixAutoUpdate && s.updateMatrix(), n.uvTransform.value.copy(s.matrix)), i.aoMap ? a = i.aoMap : i.lightMap && (a = i.lightMap), void 0 !== a && (a.isWebGLRenderTarget && (a = a.texture), !0 === a.matrixAutoUpdate && a.updateMatrix(), n.uv2Transform.value.copy(a.matrix));
        }
        return {
            refreshFogUniforms: function(t, e) {
                t.fogColor.value.copy(e.color), e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density);
            },
            refreshMaterialUniforms: function(t102, i42, r28, s, a) {
                i42.isMeshBasicMaterial || i42.isMeshLambertMaterial ? n45(t102, i42) : i42.isMeshToonMaterial ? (n45(t102, i42), function(t, e) {
                    e.gradientMap && (t.gradientMap.value = e.gradientMap);
                }(t102, i42)) : i42.isMeshPhongMaterial ? (n45(t102, i42), function(t, e) {
                    t.specular.value.copy(e.specular), t.shininess.value = Math.max(e.shininess, 1e-4);
                }(t102, i42)) : i42.isMeshStandardMaterial ? (n45(t102, i42), function(t, n) {
                    t.roughness.value = n.roughness, t.metalness.value = n.metalness, n.roughnessMap && (t.roughnessMap.value = n.roughnessMap);
                    n.metalnessMap && (t.metalnessMap.value = n.metalnessMap);
                    e76.get(n).envMap && (t.envMapIntensity.value = n.envMapIntensity);
                }(t102, i42), i42.isMeshPhysicalMaterial && function(t, e, n) {
                    t.ior.value = e.ior, e.sheen > 0 && (t.sheenColor.value.copy(e.sheenColor).multiplyScalar(e.sheen), t.sheenRoughness.value = e.sheenRoughness, e.sheenColorMap && (t.sheenColorMap.value = e.sheenColorMap), e.sheenRoughnessMap && (t.sheenRoughnessMap.value = e.sheenRoughnessMap));
                    e.clearcoat > 0 && (t.clearcoat.value = e.clearcoat, t.clearcoatRoughness.value = e.clearcoatRoughness, e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap), e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap), e.clearcoatNormalMap && (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), t.clearcoatNormalMap.value = e.clearcoatNormalMap, 1 === e.side && t.clearcoatNormalScale.value.negate()));
                    e.transmission > 0 && (t.transmission.value = e.transmission, t.transmissionSamplerMap.value = n.texture, t.transmissionSamplerSize.value.set(n.width, n.height), e.transmissionMap && (t.transmissionMap.value = e.transmissionMap), t.thickness.value = e.thickness, e.thicknessMap && (t.thicknessMap.value = e.thicknessMap), t.attenuationDistance.value = e.attenuationDistance, t.attenuationColor.value.copy(e.attenuationColor));
                    t.specularIntensity.value = e.specularIntensity, t.specularColor.value.copy(e.specularColor), e.specularIntensityMap && (t.specularIntensityMap.value = e.specularIntensityMap);
                    e.specularColorMap && (t.specularColorMap.value = e.specularColorMap);
                }(t102, i42, a)) : i42.isMeshMatcapMaterial ? (n45(t102, i42), function(t, e) {
                    e.matcap && (t.matcap.value = e.matcap);
                }(t102, i42)) : i42.isMeshDepthMaterial ? n45(t102, i42) : i42.isMeshDistanceMaterial ? (n45(t102, i42), function(t, e) {
                    t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance;
                }(t102, i42)) : i42.isMeshNormalMaterial ? n45(t102, i42) : i42.isLineBasicMaterial ? (function(t, e) {
                    t.diffuse.value.copy(e.color), t.opacity.value = e.opacity;
                }(t102, i42), i42.isLineDashedMaterial && function(t, e) {
                    t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale;
                }(t102, i42)) : i42.isPointsMaterial ? function(t, e, n, i) {
                    t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.size.value = e.size * n, t.scale.value = .5 * i, e.map && (t.map.value = e.map);
                    e.alphaMap && (t.alphaMap.value = e.alphaMap);
                    e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest);
                    let r;
                    e.map ? r = e.map : e.alphaMap && (r = e.alphaMap);
                    void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(), t.uvTransform.value.copy(r.matrix));
                }(t102, i42, r28, s) : i42.isSpriteMaterial ? function(t, e) {
                    t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.rotation.value = e.rotation, e.map && (t.map.value = e.map);
                    e.alphaMap && (t.alphaMap.value = e.alphaMap);
                    e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest);
                    let n;
                    e.map ? n = e.map : e.alphaMap && (n = e.alphaMap);
                    void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(), t.uvTransform.value.copy(n.matrix));
                }(t102, i42) : i42.isShadowMaterial ? (t102.color.value.copy(i42.color), t102.opacity.value = i42.opacity) : i42.isShaderMaterial && (i42.uniformsNeedUpdate = !1);
            }
        };
    }
    function aa(t103 = {}) {
        const e77 = void 0 !== t103.canvas ? t103.canvas : function() {
            const t = It("canvas");
            return t.style.display = "block", t;
        }(), n46 = void 0 !== t103.context ? t103.context : null, i43 = void 0 === t103.depth || t103.depth, r29 = void 0 === t103.stencil || t103.stencil, s20 = void 0 !== t103.antialias && t103.antialias, a16 = void 0 === t103.premultipliedAlpha || t103.premultipliedAlpha, o13 = void 0 !== t103.preserveDrawingBuffer && t103.preserveDrawingBuffer, l10 = void 0 !== t103.powerPreference ? t103.powerPreference : "default", c9 = void 0 !== t103.failIfMajorPerformanceCaveat && t103.failIfMajorPerformanceCaveat;
        let h6;
        h6 = void 0 !== t103.context ? n46.getContextAttributes().alpha : void 0 !== t103.alpha && t103.alpha;
        let u7 = null, d5 = null;
        const p5 = [], m4 = [];
        this.domElement = e77, this.debug = {
            checkShaderErrors: !0
        }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = at, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1;
        const f = this;
        let g3 = !1, x3 = 0, _4 = 0, w = null, T = -1, E = null;
        const A3 = new Kt, R2 = new Kt;
        let C3 = null, L2 = e77.width, P = e77.height, D = 1, I2 = null, N2 = null;
        const B2 = new Kt(0, 0, L2, P), O = new Kt(0, 0, L2, P);
        let z = !1;
        const U = new Ei;
        let F = !1, H = !1, G = null;
        const k = new Oe, V = new Rt, W = new se, j = {
            background: null,
            fog: null,
            environment: null,
            overrideMaterial: null,
            isScene: !0
        };
        function q() {
            return null === w ? D : 1;
        }
        let X, J, Y, Z, K, Q, $, tt, et, nt, it, rt, st, ot, lt, ct, ht, ut, dt, pt, mt, ft, gt, vt = n46;
        function yt(t, n) {
            for(let i = 0; i < t.length; i++){
                const r = t[i], s = e77.getContext(r, n);
                if (null !== s) return s;
            }
            return null;
        }
        try {
            const t = {
                alpha: !0,
                depth: i43,
                stencil: r29,
                antialias: s20,
                premultipliedAlpha: a16,
                preserveDrawingBuffer: o13,
                powerPreference: l10,
                failIfMajorPerformanceCaveat: c9
            };
            if ("setAttribute" in e77 && e77.setAttribute("data-engine", "three.js r139"), e77.addEventListener("webglcontextlost", bt, !1), e77.addEventListener("webglcontextrestored", Mt, !1), null === vt) {
                const e = [
                    "webgl2",
                    "webgl",
                    "experimental-webgl"
                ];
                if (!0 === f.isWebGL1Renderer && e.shift(), vt = yt(e, t), null === vt) throw yt(e) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
            }
            void 0 === vt.getShaderPrecisionFormat && (vt.getShaderPrecisionFormat = function() {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                };
            });
        } catch (t104) {
            throw console.error("THREE.WebGLRenderer: " + t104.message), t104;
        }
        function xt() {
            X = new er(vt), J = new Oi(vt, X, t103), X.init(J), ft = new Qs(vt, X, J), Y = new Zs(vt, X, J), Z = new rr(vt), K = new Os, Q = new Ks(vt, X, Y, K, J, ft, Z), $ = new Ui(f), tt = new tr(f), et = new Ri(vt, J), gt = new Ni(vt, X, et, J), nt = new nr(vt, et, Z, gt), it = new cr(vt, nt, et, Z), dt = new lr(vt, J, Q), ct = new zi(K), rt = new Bs(f, $, tt, X, J, gt, ct), st = new sa(f, K), ot = new Hs, lt = new qs(X, J), ut = new Ii(f, $, Y, it, h6, a16), ht = new Ys(f, it, J), pt = new Bi(vt, X, Z, J), mt = new ir(vt, X, Z, J), Z.programs = rt.programs, f.capabilities = J, f.extensions = X, f.properties = K, f.renderLists = ot, f.shadowMap = ht, f.state = Y, f.info = Z;
        }
        xt();
        const _t = new ra(f, vt);
        function bt(t) {
            t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), g3 = !0;
        }
        function Mt() {
            console.log("THREE.WebGLRenderer: Context Restored."), g3 = !1;
            const t = Z.autoReset, e = ht.enabled, n = ht.autoUpdate, i = ht.needsUpdate, r = ht.type;
            xt(), Z.autoReset = t, ht.enabled = e, ht.autoUpdate = n, ht.needsUpdate = i, ht.type = r;
        }
        function wt(t105) {
            const e78 = t105.target;
            e78.removeEventListener("dispose", wt), function(t106) {
                (function(t107) {
                    const e = K.get(t107).programs;
                    void 0 !== e && (e.forEach(function(t) {
                        rt.releaseProgram(t);
                    }), t107.isShaderMaterial && rt.releaseShaderCache(t107));
                })(t106), K.remove(t106);
            }(e78);
        }
        this.xr = _t, this.getContext = function() {
            return vt;
        }, this.getContextAttributes = function() {
            return vt.getContextAttributes();
        }, this.forceContextLoss = function() {
            const t = X.get("WEBGL_lose_context");
            t && t.loseContext();
        }, this.forceContextRestore = function() {
            const t = X.get("WEBGL_lose_context");
            t && t.restoreContext();
        }, this.getPixelRatio = function() {
            return D;
        }, this.setPixelRatio = function(t) {
            void 0 !== t && (D = t, this.setSize(L2, P, !1));
        }, this.getSize = function(t) {
            return t.set(L2, P);
        }, this.setSize = function(t, n, i) {
            _t.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (L2 = t, P = n, e77.width = Math.floor(t * D), e77.height = Math.floor(n * D), !1 !== i && (e77.style.width = t + "px", e77.style.height = n + "px"), this.setViewport(0, 0, t, n));
        }, this.getDrawingBufferSize = function(t) {
            return t.set(L2 * D, P * D).floor();
        }, this.setDrawingBufferSize = function(t, n, i) {
            L2 = t, P = n, D = i, e77.width = Math.floor(t * i), e77.height = Math.floor(n * i), this.setViewport(0, 0, t, n);
        }, this.getCurrentViewport = function(t) {
            return t.copy(A3);
        }, this.getViewport = function(t) {
            return t.copy(B2);
        }, this.setViewport = function(t, e, n, i) {
            t.isVector4 ? B2.set(t.x, t.y, t.z, t.w) : B2.set(t, e, n, i), Y.viewport(A3.copy(B2).multiplyScalar(D).floor());
        }, this.getScissor = function(t) {
            return t.copy(O);
        }, this.setScissor = function(t, e, n, i) {
            t.isVector4 ? O.set(t.x, t.y, t.z, t.w) : O.set(t, e, n, i), Y.scissor(R2.copy(O).multiplyScalar(D).floor());
        }, this.getScissorTest = function() {
            return z;
        }, this.setScissorTest = function(t) {
            Y.setScissorTest(z = t);
        }, this.setOpaqueSort = function(t) {
            I2 = t;
        }, this.setTransparentSort = function(t) {
            N2 = t;
        }, this.getClearColor = function(t) {
            return t.copy(ut.getClearColor());
        }, this.setClearColor = function() {
            ut.setClearColor.apply(ut, arguments);
        }, this.getClearAlpha = function() {
            return ut.getClearAlpha();
        }, this.setClearAlpha = function() {
            ut.setClearAlpha.apply(ut, arguments);
        }, this.clear = function(t = !0, e = !0, n = !0) {
            let i = 0;
            t && (i |= 16384), e && (i |= 256), n && (i |= 1024), vt.clear(i);
        }, this.clearColor = function() {
            this.clear(!0, !1, !1);
        }, this.clearDepth = function() {
            this.clear(!1, !0, !1);
        }, this.clearStencil = function() {
            this.clear(!1, !1, !0);
        }, this.dispose = function() {
            e77.removeEventListener("webglcontextlost", bt, !1), e77.removeEventListener("webglcontextrestored", Mt, !1), ot.dispose(), lt.dispose(), K.dispose(), $.dispose(), tt.dispose(), it.dispose(), gt.dispose(), rt.dispose(), _t.dispose(), _t.removeEventListener("sessionstart", Tt), _t.removeEventListener("sessionend", At), G && (G.dispose(), G = null), Ct.stop();
        }, this.renderBufferDirect = function(t108, e79, n47, i44, r30, s21) {
            null === e79 && (e79 = j);
            const a17 = r30.isMesh && r30.matrixWorld.determinant() < 0, o14 = function(t, e, n, i, r) {
                !0 !== e.isScene && (e = j);
                Q.resetTextureUnits();
                const s = e.fog, a = i.isMeshStandardMaterial ? e.environment : null, o = null === w ? f.outputEncoding : !0 === w.isXRRenderTarget ? w.texture.encoding : at, l = (i.isMeshStandardMaterial ? tt : $).get(i.envMap || a), c = !0 === i.vertexColors && !!n.attributes.color && 4 === n.attributes.color.itemSize, h = !!i.normalMap && !!n.attributes.tangent, u = !!n.morphAttributes.position, p = !!n.morphAttributes.normal, m = !!n.morphAttributes.color, g = i.toneMapped ? f.toneMapping : 0, v = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color, y = void 0 !== v ? v.length : 0, x = K.get(i), _ = d5.state.lights;
                if (!0 === F && (!0 === H || t !== E)) {
                    const e = t === E && i.id === T;
                    ct.setState(i, t, e);
                }
                let b = !1;
                i.version === x.__version ? x.needsLights && x.lightsStateVersion !== _.state.version || x.outputEncoding !== o || r.isInstancedMesh && !1 === x.instancing ? b = !0 : r.isInstancedMesh || !0 !== x.instancing ? r.isSkinnedMesh && !1 === x.skinning ? b = !0 : r.isSkinnedMesh || !0 !== x.skinning ? x.envMap !== l || i.fog && x.fog !== s ? b = !0 : void 0 === x.numClippingPlanes || x.numClippingPlanes === ct.numPlanes && x.numIntersection === ct.numIntersection ? (x.vertexAlphas !== c || x.vertexTangents !== h || x.morphTargets !== u || x.morphNormals !== p || x.morphColors !== m || x.toneMapping !== g || !0 === J.isWebGL2 && x.morphTargetsCount !== y) && (b = !0) : b = !0 : b = !0 : b = !0 : (b = !0, x.__version = i.version);
                let M = x.currentProgram;
                !0 === b && (M = Bt(i, e, r));
                let S = !1, A = !1, R = !1;
                const C = M.getUniforms(), L = x.uniforms;
                Y.useProgram(M.program) && (S = !0, A = !0, R = !0);
                i.id !== T && (T = i.id, A = !0);
                if (S || E !== t) {
                    if (C.setValue(vt, "projectionMatrix", t.projectionMatrix), J.logarithmicDepthBuffer && C.setValue(vt, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), E !== t && (E = t, A = !0, R = !0), i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshStandardMaterial || i.envMap) {
                        const e = C.map.cameraPosition;
                        void 0 !== e && e.setValue(vt, W.setFromMatrixPosition(t.matrixWorld));
                    }
                    (i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial) && C.setValue(vt, "isOrthographic", !0 === t.isOrthographicCamera), (i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.isShadowMaterial || r.isSkinnedMesh) && C.setValue(vt, "viewMatrix", t.matrixWorldInverse);
                }
                if (r.isSkinnedMesh) {
                    C.setOptional(vt, r, "bindMatrix"), C.setOptional(vt, r, "bindMatrixInverse");
                    const t = r.skeleton;
                    t && (J.floatVertexTextures ? (null === t.boneTexture && t.computeBoneTexture(), C.setValue(vt, "boneTexture", t.boneTexture, Q), C.setValue(vt, "boneTextureSize", t.boneTextureSize)) : C.setOptional(vt, t, "boneMatrices"));
                }
                const I = n.morphAttributes;
                (void 0 !== I.position || void 0 !== I.normal || void 0 !== I.color && !0 === J.isWebGL2) && dt.update(r, n, i, M);
                (A || x.receiveShadow !== r.receiveShadow) && (x.receiveShadow = r.receiveShadow, C.setValue(vt, "receiveShadow", r.receiveShadow));
                A && (C.setValue(vt, "toneMappingExposure", f.toneMappingExposure), x.needsLights && (B = R, (N = L).ambientLightColor.needsUpdate = B, N.lightProbe.needsUpdate = B, N.directionalLights.needsUpdate = B, N.directionalLightShadows.needsUpdate = B, N.pointLights.needsUpdate = B, N.pointLightShadows.needsUpdate = B, N.spotLights.needsUpdate = B, N.spotLightShadows.needsUpdate = B, N.rectAreaLights.needsUpdate = B, N.hemisphereLights.needsUpdate = B), s && i.fog && st.refreshFogUniforms(L, s), st.refreshMaterialUniforms(L, i, D, P, G), ps.upload(vt, x.uniformsList, L, Q));
                var N, B;
                i.isShaderMaterial && !0 === i.uniformsNeedUpdate && (ps.upload(vt, x.uniformsList, L, Q), i.uniformsNeedUpdate = !1);
                i.isSpriteMaterial && C.setValue(vt, "center", r.center);
                return C.setValue(vt, "modelViewMatrix", r.modelViewMatrix), C.setValue(vt, "normalMatrix", r.normalMatrix), C.setValue(vt, "modelMatrix", r.matrixWorld), M;
            }(t108, e79, n47, i44, r30);
            Y.setMaterial(i44, a17);
            let l11 = n47.index;
            const c10 = n47.attributes.position;
            if (null === l11) {
                if (void 0 === c10 || 0 === c10.count) return;
            } else if (0 === l11.count) return;
            let h7, u8 = 1;
            !0 === i44.wireframe && (l11 = nt.getWireframeAttribute(n47), u8 = 2), gt.setup(r30, i44, o14, n47, l11);
            let p6 = pt;
            null !== l11 && (h7 = et.get(l11), p6 = mt, p6.setIndex(h7));
            const m5 = null !== l11 ? l11.count : c10.count, g4 = n47.drawRange.start * u8, v3 = n47.drawRange.count * u8, y2 = null !== s21 ? s21.start * u8 : 0, x4 = null !== s21 ? s21.count * u8 : 1 / 0, _5 = Math.max(g4, y2), b3 = Math.min(m5, g4 + v3, y2 + x4) - 1, M2 = Math.max(0, b3 - _5 + 1);
            if (0 !== M2) {
                if (r30.isMesh) !0 === i44.wireframe ? (Y.setLineWidth(i44.wireframeLinewidth * q()), p6.setMode(1)) : p6.setMode(4);
                else if (r30.isLine) {
                    let t = i44.linewidth;
                    void 0 === t && (t = 1), Y.setLineWidth(t * q()), r30.isLineSegments ? p6.setMode(1) : r30.isLineLoop ? p6.setMode(2) : p6.setMode(3);
                } else r30.isPoints ? p6.setMode(0) : r30.isSprite && p6.setMode(4);
                if (r30.isInstancedMesh) p6.renderInstances(_5, M2, r30.count);
                else if (n47.isInstancedBufferGeometry) {
                    const t = Math.min(n47.instanceCount, n47._maxInstanceCount);
                    p6.renderInstances(_5, M2, t);
                } else p6.render(_5, M2);
            }
        }, this.compile = function(t109, e80) {
            d5 = lt.get(t109), d5.init(), m4.push(d5), t109.traverseVisible(function(t) {
                t.isLight && t.layers.test(e80.layers) && (d5.pushLight(t), t.castShadow && d5.pushShadow(t));
            }), d5.setupLights(f.physicallyCorrectLights), t109.traverse(function(e) {
                const n = e.material;
                if (n) {
                    if (Array.isArray(n)) for(let i = 0; i < n.length; i++)Bt(n[i], t109, e);
                    else Bt(n, t109, e);
                }
            }), m4.pop(), d5 = null;
        };
        let St = null;
        function Tt() {
            Ct.stop();
        }
        function At() {
            Ct.start();
        }
        const Ct = new Ai;
        function Lt(t, e, n, i) {
            if (!1 === t.visible) return;
            if (t.layers.test(e.layers)) {
                if (t.isGroup) n = t.renderOrder;
                else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
                else if (t.isLight) d5.pushLight(t), t.castShadow && d5.pushShadow(t);
                else if (t.isSprite) {
                    if (!t.frustumCulled || U.intersectsSprite(t)) {
                        i && W.setFromMatrixPosition(t.matrixWorld).applyMatrix4(k);
                        const e = it.update(t), r = t.material;
                        r.visible && u7.push(t, e, r, n, W.z, null);
                    }
                } else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== Z.render.frame && (t.skeleton.update(), t.skeleton.frame = Z.render.frame), !t.frustumCulled || U.intersectsObject(t))) {
                    i && W.setFromMatrixPosition(t.matrixWorld).applyMatrix4(k);
                    const e = it.update(t), r = t.material;
                    if (Array.isArray(r)) {
                        const i = e.groups;
                        for(let s = 0, a = i.length; s < a; s++){
                            const a = i[s], o = r[a.materialIndex];
                            o && o.visible && u7.push(t, e, o, n, W.z, a);
                        }
                    } else r.visible && u7.push(t, e, r, n, W.z, null);
                }
            }
            const r = t.children;
            for(let t110 = 0, s = r.length; t110 < s; t110++)Lt(r[t110], e, n, i);
        }
        function Pt(t111, e81, n48, i45) {
            const r31 = t111.opaque, a18 = t111.transmissive, o = t111.transparent;
            d5.setupLightsView(n48), a18.length > 0 && function(t, e, n) {
                const i = J.isWebGL2;
                null === G && (G = new Qt(1, 1, {
                    generateMipmaps: !0,
                    type: null !== ft.convert(M1) ? M1 : y1,
                    minFilter: v1,
                    samples: i && !0 === s20 ? 4 : 0
                }));
                f.getDrawingBufferSize(V), i ? G.setSize(V.x, V.y) : G.setSize(Et(V.x), Et(V.y));
                const r = f.getRenderTarget();
                f.setRenderTarget(G), f.clear();
                const a = f.toneMapping;
                f.toneMapping = 0, Dt(t, e, n), f.toneMapping = a, Q.updateMultisampleRenderTarget(G), Q.updateRenderTargetMipmap(G), f.setRenderTarget(r);
            }(r31, e81, n48), i45 && Y.viewport(A3.copy(i45)), r31.length > 0 && Dt(r31, e81, n48), a18.length > 0 && Dt(a18, e81, n48), o.length > 0 && Dt(o, e81, n48), Y.buffers.depth.setTest(!0), Y.buffers.depth.setMask(!0), Y.buffers.color.setMask(!0), Y.setPolygonOffset(!1);
        }
        function Dt(t, e, n) {
            const i = !0 === e.isScene ? e.overrideMaterial : null;
            for(let r = 0, s = t.length; r < s; r++){
                const s = t[r], a = s.object, o = s.geometry, l = null === i ? s.material : i, c = s.group;
                a.layers.test(n.layers) && Nt(a, e, n, o, l, c);
            }
        }
        function Nt(t, e, n, i, r, s) {
            t.onBeforeRender(f, e, n, i, r, s), t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), r.onBeforeRender(f, e, n, i, t, s), !0 === r.transparent && 2 === r.side ? (r.side = 1, r.needsUpdate = !0, f.renderBufferDirect(n, e, i, r, t, s), r.side = 0, r.needsUpdate = !0, f.renderBufferDirect(n, e, i, r, t, s), r.side = 2) : f.renderBufferDirect(n, e, i, r, t, s), t.onAfterRender(f, e, n, i, r, s);
        }
        function Bt(t112, e, n) {
            !0 !== e.isScene && (e = j);
            const i = K.get(t112), r = d5.state.lights, s = d5.state.shadowsArray, a = r.state.version, o = rt.getParameters(t112, r.state, s, e, n), l = rt.getProgramCacheKey(o);
            let c = i.programs;
            i.environment = t112.isMeshStandardMaterial ? e.environment : null, i.fog = e.fog, i.envMap = (t112.isMeshStandardMaterial ? tt : $).get(t112.envMap || i.environment), void 0 === c && (t112.addEventListener("dispose", wt), c = new Map, i.programs = c);
            let h = c.get(l);
            if (void 0 !== h) {
                if (i.currentProgram === h && i.lightsStateVersion === a) return Ot(t112, o), h;
            } else o.uniforms = rt.getUniforms(t112), t112.onBuild(n, o, f), t112.onBeforeCompile(o, f), h = rt.acquireProgram(o, l), c.set(l, h), i.uniforms = o.uniforms;
            const u = i.uniforms;
            (t112.isShaderMaterial || t112.isRawShaderMaterial) && !0 !== t112.clipping || (u.clippingPlanes = ct.uniform), Ot(t112, o), i.needsLights = function(t) {
                return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights;
            }(t112), i.lightsStateVersion = a, i.needsLights && (u.ambientLightColor.value = r.state.ambient, u.lightProbe.value = r.state.probe, u.directionalLights.value = r.state.directional, u.directionalLightShadows.value = r.state.directionalShadow, u.spotLights.value = r.state.spot, u.spotLightShadows.value = r.state.spotShadow, u.rectAreaLights.value = r.state.rectArea, u.ltc_1.value = r.state.rectAreaLTC1, u.ltc_2.value = r.state.rectAreaLTC2, u.pointLights.value = r.state.point, u.pointLightShadows.value = r.state.pointShadow, u.hemisphereLights.value = r.state.hemi, u.directionalShadowMap.value = r.state.directionalShadowMap, u.directionalShadowMatrix.value = r.state.directionalShadowMatrix, u.spotShadowMap.value = r.state.spotShadowMap, u.spotShadowMatrix.value = r.state.spotShadowMatrix, u.pointShadowMap.value = r.state.pointShadowMap, u.pointShadowMatrix.value = r.state.pointShadowMatrix);
            const p = h.getUniforms(), m = ps.seqWithValue(p.seq, u);
            return i.currentProgram = h, i.uniformsList = m, h;
        }
        function Ot(t, e) {
            const n = K.get(t);
            n.outputEncoding = e.outputEncoding, n.instancing = e.instancing, n.skinning = e.skinning, n.morphTargets = e.morphTargets, n.morphNormals = e.morphNormals, n.morphColors = e.morphColors, n.morphTargetsCount = e.morphTargetsCount, n.numClippingPlanes = e.numClippingPlanes, n.numIntersection = e.numClipIntersection, n.vertexAlphas = e.vertexAlphas, n.vertexTangents = e.vertexTangents, n.toneMapping = e.toneMapping;
        }
        Ct.setAnimationLoop(function(t) {
            St && St(t);
        }), "undefined" != typeof self && Ct.setContext(self), this.setAnimationLoop = function(t) {
            St = t, _t.setAnimationLoop(t), null === t ? Ct.stop() : Ct.start();
        }, _t.addEventListener("sessionstart", Tt), _t.addEventListener("sessionend", At), this.render = function(t, e) {
            if (void 0 !== e && !0 !== e.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
            if (!0 === g3) return;
            !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), !0 === _t.enabled && !0 === _t.isPresenting && (!0 === _t.cameraAutoUpdate && _t.updateCamera(e), e = _t.getCamera()), !0 === t.isScene && t.onBeforeRender(f, t, e, w), d5 = lt.get(t, m4.length), d5.init(), m4.push(d5), k.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), U.setFromProjectionMatrix(k), H = this.localClippingEnabled, F = ct.init(this.clippingPlanes, H, e), u7 = ot.get(t, p5.length), u7.init(), p5.push(u7), Lt(t, e, 0, f.sortObjects), u7.finish(), !0 === f.sortObjects && u7.sort(I2, N2), !0 === F && ct.beginShadows();
            const n = d5.state.shadowsArray;
            if (ht.render(n, t, e), !0 === F && ct.endShadows(), !0 === this.info.autoReset && this.info.reset(), ut.render(u7, t), d5.setupLights(f.physicallyCorrectLights), e.isArrayCamera) {
                const n = e.cameras;
                for(let e82 = 0, i = n.length; e82 < i; e82++){
                    const i = n[e82];
                    Pt(u7, t, i, i.viewport);
                }
            } else Pt(u7, t, e);
            null !== w && (Q.updateMultisampleRenderTarget(w), Q.updateRenderTargetMipmap(w)), !0 === t.isScene && t.onAfterRender(f, t, e), gt.resetDefaultState(), T = -1, E = null, m4.pop(), d5 = m4.length > 0 ? m4[m4.length - 1] : null, p5.pop(), u7 = p5.length > 0 ? p5[p5.length - 1] : null;
        }, this.getActiveCubeFace = function() {
            return x3;
        }, this.getActiveMipmapLevel = function() {
            return _4;
        }, this.getRenderTarget = function() {
            return w;
        }, this.setRenderTargetTextures = function(t, e, n) {
            K.get(t.texture).__webglTexture = e, K.get(t.depthTexture).__webglTexture = n;
            const i = K.get(t);
            i.__hasExternalTextures = !0, i.__hasExternalTextures && (i.__autoAllocateDepthBuffer = void 0 === n, i.__autoAllocateDepthBuffer || !0 === X.has("WEBGL_multisampled_render_to_texture") && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), i.__useRenderToTexture = !1));
        }, this.setRenderTargetFramebuffer = function(t, e) {
            const n = K.get(t);
            n.__webglFramebuffer = e, n.__useDefaultFramebuffer = void 0 === e;
        }, this.setRenderTarget = function(t, e = 0, n = 0) {
            w = t, x3 = e, _4 = n;
            let i = !0;
            if (t) {
                const e = K.get(t);
                void 0 !== e.__useDefaultFramebuffer ? (Y.bindFramebuffer(36160, null), i = !1) : void 0 === e.__webglFramebuffer ? Q.setupRenderTarget(t) : e.__hasExternalTextures && Q.rebindTextures(t, K.get(t.texture).__webglTexture, K.get(t.depthTexture).__webglTexture);
            }
            let r = null, s = !1, a = !1;
            if (t) {
                const n = t.texture;
                (n.isData3DTexture || n.isDataArrayTexture) && (a = !0);
                const i = K.get(t).__webglFramebuffer;
                t.isWebGLCubeRenderTarget ? (r = i[e], s = !0) : r = J.isWebGL2 && t.samples > 0 && !1 === Q.useMultisampledRTT(t) ? K.get(t).__webglMultisampledFramebuffer : i, A3.copy(t.viewport), R2.copy(t.scissor), C3 = t.scissorTest;
            } else A3.copy(B2).multiplyScalar(D).floor(), R2.copy(O).multiplyScalar(D).floor(), C3 = z;
            if (Y.bindFramebuffer(36160, r) && J.drawBuffers && i && Y.drawBuffers(t, r), Y.viewport(A3), Y.scissor(R2), Y.setScissorTest(C3), s) {
                const i = K.get(t.texture);
                vt.framebufferTexture2D(36160, 36064, 34069 + e, i.__webglTexture, n);
            } else if (a) {
                const i = K.get(t.texture), r = e || 0;
                vt.framebufferTextureLayer(36160, 36064, i.__webglTexture, n || 0, r);
            }
            T = -1;
        }, this.readRenderTargetPixels = function(t, e, n, i, r, s, a) {
            if (!t || !t.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
            let o = K.get(t).__webglFramebuffer;
            if (t.isWebGLCubeRenderTarget && void 0 !== a && (o = o[a]), o) {
                Y.bindFramebuffer(36160, o);
                try {
                    const a = t.texture, o = a.format, l = a.type;
                    if (o !== S1 && ft.convert(o) !== vt.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                    const c = l === M1 && (X.has("EXT_color_buffer_half_float") || J.isWebGL2 && X.has("EXT_color_buffer_float"));
                    if (!(l === y1 || ft.convert(l) === vt.getParameter(35738) || l === b1 && (J.isWebGL2 || X.has("OES_texture_float") || X.has("WEBGL_color_buffer_float")) || c)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                    e >= 0 && e <= t.width - i && n >= 0 && n <= t.height - r && vt.readPixels(e, n, i, r, ft.convert(o), ft.convert(l), s);
                } finally{
                    const t = null !== w ? K.get(w).__webglFramebuffer : null;
                    Y.bindFramebuffer(36160, t);
                }
            }
        }, this.copyFramebufferToTexture = function(t, e, n = 0) {
            if (!0 !== e.isFramebufferTexture) return void console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");
            const i = Math.pow(2, -n), r = Math.floor(e.image.width * i), s = Math.floor(e.image.height * i);
            Q.setTexture2D(e, 0), vt.copyTexSubImage2D(3553, n, 0, 0, t.x, t.y, r, s), Y.unbindTexture();
        }, this.copyTextureToTexture = function(t, e, n, i = 0) {
            const r = e.image.width, s = e.image.height, a = ft.convert(n.format), o = ft.convert(n.type);
            Q.setTexture2D(n, 0), vt.pixelStorei(37440, n.flipY), vt.pixelStorei(37441, n.premultiplyAlpha), vt.pixelStorei(3317, n.unpackAlignment), e.isDataTexture ? vt.texSubImage2D(3553, i, t.x, t.y, r, s, a, o, e.image.data) : e.isCompressedTexture ? vt.compressedTexSubImage2D(3553, i, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, a, e.mipmaps[0].data) : vt.texSubImage2D(3553, i, t.x, t.y, a, o, e.image), 0 === i && n.generateMipmaps && vt.generateMipmap(3553), Y.unbindTexture();
        }, this.copyTextureToTexture3D = function(t, e, n, i, r = 0) {
            if (f.isWebGL1Renderer) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
            const s = t.max.x - t.min.x + 1, a = t.max.y - t.min.y + 1, o = t.max.z - t.min.z + 1, l = ft.convert(i.format), c = ft.convert(i.type);
            let h;
            if (i.isData3DTexture) Q.setTexture3D(i, 0), h = 32879;
            else {
                if (!i.isDataArrayTexture) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
                Q.setTexture2DArray(i, 0), h = 35866;
            }
            vt.pixelStorei(37440, i.flipY), vt.pixelStorei(37441, i.premultiplyAlpha), vt.pixelStorei(3317, i.unpackAlignment);
            const u = vt.getParameter(3314), d = vt.getParameter(32878), p = vt.getParameter(3316), m = vt.getParameter(3315), g = vt.getParameter(32877), v = n.isCompressedTexture ? n.mipmaps[0] : n.image;
            vt.pixelStorei(3314, v.width), vt.pixelStorei(32878, v.height), vt.pixelStorei(3316, t.min.x), vt.pixelStorei(3315, t.min.y), vt.pixelStorei(32877, t.min.z), n.isDataTexture || n.isData3DTexture ? vt.texSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, c, v.data) : n.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), vt.compressedTexSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, v.data)) : vt.texSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, c, v), vt.pixelStorei(3314, u), vt.pixelStorei(32878, d), vt.pixelStorei(3316, p), vt.pixelStorei(3315, m), vt.pixelStorei(32877, g), 0 === r && i.generateMipmaps && vt.generateMipmap(h), Y.unbindTexture();
        }, this.initTexture = function(t) {
            Q.setTexture2D(t, 0), Y.unbindTexture();
        }, this.resetState = function() {
            x3 = 0, _4 = 0, w = null, Y.reset(), gt.reset();
        }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
            detail: this
        }));
    }
    aa.prototype.isWebGLRenderer = !0;
    class oa extends aa {
    }
    oa.prototype.isWebGL1Renderer = !0;
    class la {
        constructor(t, e = 25e-5){
            this.name = "", this.color = new Wt(t), this.density = e;
        }
        clone() {
            return new la(this.color, this.density);
        }
        toJSON() {
            return {
                type: "FogExp2",
                color: this.color.getHex(),
                density: this.density
            };
        }
    }
    la.prototype.isFogExp2 = !0;
    class ca {
        constructor(t, e = 1, n = 1e3){
            this.name = "", this.color = new Wt(t), this.near = e, this.far = n;
        }
        clone() {
            return new ca(this.color, this.near, this.far);
        }
        toJSON() {
            return {
                type: "Fog",
                color: this.color.getHex(),
                near: this.near,
                far: this.far
            };
        }
    }
    ca.prototype.isFog = !0;
    class ha extends ln {
        constructor(){
            super(), this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                detail: this
            }));
        }
        copy(t, e) {
            return super.copy(t, e), null !== t.background && (this.background = t.background.clone()), null !== t.environment && (this.environment = t.environment.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this;
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return null !== this.fog && (e.object.fog = this.fog.toJSON()), e;
        }
    }
    ha.prototype.isScene = !0;
    class ua {
        constructor(t, e){
            this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.usage = ut1, this.updateRange = {
                offset: 0,
                count: -1
            }, this.version = 0, this.uuid = _t1();
        }
        onUploadCallback() {}
        set needsUpdate(t) {
            !0 === t && this.version++;
        }
        setUsage(t) {
            return this.usage = t, this;
        }
        copy(t) {
            return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this;
        }
        copyAt(t, e, n) {
            t *= this.stride, n *= e.stride;
            for(let i = 0, r = this.stride; i < r; i++)this.array[t + i] = e.array[n + i];
            return this;
        }
        set(t, e = 0) {
            return this.array.set(t, e), this;
        }
        clone(t) {
            void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = _t1()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
            const e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(e, this.stride);
            return n.setUsage(this.usage), n;
        }
        onUpload(t) {
            return this.onUploadCallback = t, this;
        }
        toJSON(t) {
            return void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = _t1()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), {
                uuid: this.uuid,
                buffer: this.array.buffer._uuid,
                type: this.array.constructor.name,
                stride: this.stride
            };
        }
    }
    ua.prototype.isInterleavedBuffer = !0;
    const da = new se;
    class pa {
        constructor(t, e, n, i = !1){
            this.name = "", this.data = t, this.itemSize = e, this.offset = n, this.normalized = !0 === i;
        }
        get count() {
            return this.data.count;
        }
        get array() {
            return this.data.array;
        }
        set needsUpdate(t) {
            this.data.needsUpdate = t;
        }
        applyMatrix4(t) {
            for(let e = 0, n = this.data.count; e < n; e++)da.fromBufferAttribute(this, e), da.applyMatrix4(t), this.setXYZ(e, da.x, da.y, da.z);
            return this;
        }
        applyNormalMatrix(t) {
            for(let e = 0, n = this.count; e < n; e++)da.fromBufferAttribute(this, e), da.applyNormalMatrix(t), this.setXYZ(e, da.x, da.y, da.z);
            return this;
        }
        transformDirection(t) {
            for(let e = 0, n = this.count; e < n; e++)da.fromBufferAttribute(this, e), da.transformDirection(t), this.setXYZ(e, da.x, da.y, da.z);
            return this;
        }
        setX(t, e) {
            return this.data.array[t * this.data.stride + this.offset] = e, this;
        }
        setY(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 1] = e, this;
        }
        setZ(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 2] = e, this;
        }
        setW(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 3] = e, this;
        }
        getX(t) {
            return this.data.array[t * this.data.stride + this.offset];
        }
        getY(t) {
            return this.data.array[t * this.data.stride + this.offset + 1];
        }
        getZ(t) {
            return this.data.array[t * this.data.stride + this.offset + 2];
        }
        getW(t) {
            return this.data.array[t * this.data.stride + this.offset + 3];
        }
        setXY(t, e, n) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this;
        }
        setXYZ(t, e, n, i) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this;
        }
        setXYZW(t, e, n, i, r) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this.data.array[t + 3] = r, this;
        }
        clone(t) {
            if (void 0 === t) {
                console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
                const t = [];
                for(let e = 0; e < this.count; e++){
                    const n = e * this.data.stride + this.offset;
                    for(let e83 = 0; e83 < this.itemSize; e83++)t.push(this.data.array[n + e83]);
                }
                return new Tn(new this.array.constructor(t), this.itemSize, this.normalized);
            }
            return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new pa(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
        }
        toJSON(t) {
            if (void 0 === t) {
                console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
                const t = [];
                for(let e = 0; e < this.count; e++){
                    const n = e * this.data.stride + this.offset;
                    for(let e84 = 0; e84 < this.itemSize; e84++)t.push(this.data.array[n + e84]);
                }
                return {
                    itemSize: this.itemSize,
                    type: this.array.constructor.name,
                    array: t,
                    normalized: this.normalized
                };
            }
            return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), {
                isInterleavedBufferAttribute: !0,
                itemSize: this.itemSize,
                data: this.data.uuid,
                offset: this.offset,
                normalized: this.normalized
            };
        }
    }
    pa.prototype.isInterleavedBufferAttribute = !0;
    class ma extends bn {
        constructor(t){
            super(), this.type = "SpriteMaterial", this.color = new Wt(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this;
        }
    }
    let fa;
    ma.prototype.isSpriteMaterial = !0;
    const ga = new se, va = new se, ya = new se, xa = new Rt, _a = new Rt, ba = new Oe, Ma = new se, wa = new se, Sa = new se, Ta = new Rt, Ea = new Rt, Aa = new Rt;
    class Ra extends ln {
        constructor(t){
            if (super(), this.type = "Sprite", void 0 === fa) {
                fa = new Vn;
                const t = new Float32Array([
                    -0.5,
                    -0.5,
                    0,
                    0,
                    0,
                    .5,
                    -0.5,
                    0,
                    1,
                    0,
                    .5,
                    .5,
                    0,
                    1,
                    1,
                    -0.5,
                    .5,
                    0,
                    0,
                    1
                ]), e = new ua(t, 5);
                fa.setIndex([
                    0,
                    1,
                    2,
                    0,
                    2,
                    3
                ]), fa.setAttribute("position", new pa(e, 3, 0, !1)), fa.setAttribute("uv", new pa(e, 2, 3, !1));
            }
            this.geometry = fa, this.material = void 0 !== t ? t : new ma, this.center = new Rt(.5, .5);
        }
        raycast(t, e) {
            null === t.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), va.setFromMatrixScale(this.matrixWorld), ba.copy(t.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld), ya.setFromMatrixPosition(this.modelViewMatrix), t.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && va.multiplyScalar(-ya.z);
            const n = this.material.rotation;
            let i, r;
            0 !== n && (r = Math.cos(n), i = Math.sin(n));
            const s = this.center;
            Ca(Ma.set(-0.5, -0.5, 0), ya, s, va, i, r), Ca(wa.set(.5, -0.5, 0), ya, s, va, i, r), Ca(Sa.set(.5, .5, 0), ya, s, va, i, r), Ta.set(0, 0), Ea.set(1, 0), Aa.set(1, 1);
            let a = t.ray.intersectTriangle(Ma, wa, Sa, !1, ga);
            if (null === a && (Ca(wa.set(-0.5, .5, 0), ya, s, va, i, r), Ea.set(0, 1), a = t.ray.intersectTriangle(Ma, Sa, wa, !1, ga), null === a)) return;
            const o = t.ray.origin.distanceTo(ga);
            o < t.near || o > t.far || e.push({
                distance: o,
                point: ga.clone(),
                uv: xn.getUV(ga, Ma, wa, Sa, Ta, Ea, Aa, new Rt),
                face: null,
                object: this
            });
        }
        copy(t) {
            return super.copy(t), void 0 !== t.center && this.center.copy(t.center), this.material = t.material, this;
        }
    }
    function Ca(t, e, n, i, r, s) {
        xa.subVectors(t, n).addScalar(.5).multiply(i), void 0 !== r ? (_a.x = s * xa.x - r * xa.y, _a.y = r * xa.x + s * xa.y) : _a.copy(xa), t.copy(e), t.x += _a.x, t.y += _a.y, t.applyMatrix4(ba);
    }
    Ra.prototype.isSprite = !0;
    const La = new se, Pa = new se;
    class Da extends ln {
        constructor(){
            super(), this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, {
                levels: {
                    enumerable: !0,
                    value: []
                },
                isLOD: {
                    value: !0
                }
            }), this.autoUpdate = !0;
        }
        copy(t) {
            super.copy(t, !1);
            const e = t.levels;
            for(let t113 = 0, n = e.length; t113 < n; t113++){
                const n = e[t113];
                this.addLevel(n.object.clone(), n.distance);
            }
            return this.autoUpdate = t.autoUpdate, this;
        }
        addLevel(t, e = 0) {
            e = Math.abs(e);
            const n = this.levels;
            let i;
            for(i = 0; i < n.length && !(e < n[i].distance); i++);
            return n.splice(i, 0, {
                distance: e,
                object: t
            }), this.add(t), this;
        }
        getCurrentLevel() {
            return this._currentLevel;
        }
        getObjectForDistance(t) {
            const e = this.levels;
            if (e.length > 0) {
                let n, i;
                for(n = 1, i = e.length; n < i && !(t < e[n].distance); n++);
                return e[n - 1].object;
            }
            return null;
        }
        raycast(t, e) {
            if (this.levels.length > 0) {
                La.setFromMatrixPosition(this.matrixWorld);
                const n = t.ray.origin.distanceTo(La);
                this.getObjectForDistance(n).raycast(t, e);
            }
        }
        update(t) {
            const e = this.levels;
            if (e.length > 1) {
                La.setFromMatrixPosition(t.matrixWorld), Pa.setFromMatrixPosition(this.matrixWorld);
                const n = La.distanceTo(Pa) / t.zoom;
                let i, r;
                for(e[0].object.visible = !0, i = 1, r = e.length; i < r && n >= e[i].distance; i++)e[i - 1].object.visible = !1, e[i].object.visible = !0;
                for(this._currentLevel = i - 1; i < r; i++)e[i].object.visible = !1;
            }
        }
        toJSON(t) {
            const e = super.toJSON(t);
            !1 === this.autoUpdate && (e.object.autoUpdate = !1), e.object.levels = [];
            const n = this.levels;
            for(let t114 = 0, i = n.length; t114 < i; t114++){
                const i = n[t114];
                e.object.levels.push({
                    object: i.object.uuid,
                    distance: i.distance
                });
            }
            return e;
        }
    }
    const Ia = new se, Na = new Kt, Ba = new Kt, Oa = new se, za = new Oe;
    class Ua extends oi {
        constructor(t, e){
            super(t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Oe, this.bindMatrixInverse = new Oe;
        }
        copy(t) {
            return super.copy(t), this.bindMode = t.bindMode, this.bindMatrix.copy(t.bindMatrix), this.bindMatrixInverse.copy(t.bindMatrixInverse), this.skeleton = t.skeleton, this;
        }
        bind(t, e) {
            this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.copy(e).invert();
        }
        pose() {
            this.skeleton.pose();
        }
        normalizeSkinWeights() {
            const t = new Kt, e = this.geometry.attributes.skinWeight;
            for(let n = 0, i = e.count; n < i; n++){
                t.fromBufferAttribute(e, n);
                const i = 1 / t.manhattanLength();
                i !== 1 / 0 ? t.multiplyScalar(i) : t.set(1, 0, 0, 0), e.setXYZW(n, t.x, t.y, t.z, t.w);
            }
        }
        updateMatrixWorld(t) {
            super.updateMatrixWorld(t), "attached" === this.bindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : "detached" === this.bindMode ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
        }
        boneTransform(t, e) {
            const n = this.skeleton, i = this.geometry;
            Na.fromBufferAttribute(i.attributes.skinIndex, t), Ba.fromBufferAttribute(i.attributes.skinWeight, t), Ia.copy(e).applyMatrix4(this.bindMatrix), e.set(0, 0, 0);
            for(let t115 = 0; t115 < 4; t115++){
                const i = Ba.getComponent(t115);
                if (0 !== i) {
                    const r = Na.getComponent(t115);
                    za.multiplyMatrices(n.bones[r].matrixWorld, n.boneInverses[r]), e.addScaledVector(Oa.copy(Ia).applyMatrix4(za), i);
                }
            }
            return e.applyMatrix4(this.bindMatrixInverse);
        }
    }
    Ua.prototype.isSkinnedMesh = !0;
    class Fa extends ln {
        constructor(){
            super(), this.type = "Bone";
        }
    }
    Fa.prototype.isBone = !0;
    class Ha extends Zt {
        constructor(t = null, e = 1, n = 1, i, r, s, a, o, l = 1003, c = 1003, h, u){
            super(null, s, a, o, l, c, i, r, h, u), this.image = {
                data: t,
                width: e,
                height: n
            }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
        }
    }
    Ha.prototype.isDataTexture = !0;
    const Ga = new Oe, ka = new Oe;
    class Va {
        constructor(t = [], e = []){
            this.uuid = _t1(), this.bones = t.slice(0), this.boneInverses = e, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init();
        }
        init() {
            const t = this.bones, e = this.boneInverses;
            if (this.boneMatrices = new Float32Array(16 * t.length), 0 === e.length) this.calculateInverses();
            else if (t.length !== e.length) {
                console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
                for(let t = 0, e = this.bones.length; t < e; t++)this.boneInverses.push(new Oe);
            }
        }
        calculateInverses() {
            this.boneInverses.length = 0;
            for(let t = 0, e = this.bones.length; t < e; t++){
                const e = new Oe;
                this.bones[t] && e.copy(this.bones[t].matrixWorld).invert(), this.boneInverses.push(e);
            }
        }
        pose() {
            for(let t = 0, e = this.bones.length; t < e; t++){
                const e = this.bones[t];
                e && e.matrixWorld.copy(this.boneInverses[t]).invert();
            }
            for(let t116 = 0, e85 = this.bones.length; t116 < e85; t116++){
                const e = this.bones[t116];
                e && (e.parent && e.parent.isBone ? (e.matrix.copy(e.parent.matrixWorld).invert(), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale));
            }
        }
        update() {
            const t = this.bones, e = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
            for(let i46 = 0, r = t.length; i46 < r; i46++){
                const r = t[i46] ? t[i46].matrixWorld : ka;
                Ga.multiplyMatrices(r, e[i46]), Ga.toArray(n, 16 * i46);
            }
            null !== i && (i.needsUpdate = !0);
        }
        clone() {
            return new Va(this.bones, this.boneInverses);
        }
        computeBoneTexture() {
            let t = Math.sqrt(4 * this.bones.length);
            t = Tt1(t), t = Math.max(t, 4);
            const e = new Float32Array(t * t * 4);
            e.set(this.boneMatrices);
            const n = new Ha(e, t, t, S1, b1);
            return n.needsUpdate = !0, this.boneMatrices = e, this.boneTexture = n, this.boneTextureSize = t, this;
        }
        getBoneByName(t) {
            for(let e = 0, n = this.bones.length; e < n; e++){
                const n = this.bones[e];
                if (n.name === t) return n;
            }
        }
        dispose() {
            null !== this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = null);
        }
        fromJSON(t, e) {
            this.uuid = t.uuid;
            for(let n = 0, i = t.bones.length; n < i; n++){
                const i = t.bones[n];
                let r = e[i];
                void 0 === r && (console.warn("THREE.Skeleton: No bone found with UUID:", i), r = new Fa), this.bones.push(r), this.boneInverses.push((new Oe).fromArray(t.boneInverses[n]));
            }
            return this.init(), this;
        }
        toJSON() {
            const t = {
                metadata: {
                    version: 4.5,
                    type: "Skeleton",
                    generator: "Skeleton.toJSON"
                },
                bones: [],
                boneInverses: []
            };
            t.uuid = this.uuid;
            const e = this.bones, n = this.boneInverses;
            for(let i = 0, r = e.length; i < r; i++){
                const r = e[i];
                t.bones.push(r.uuid);
                const s = n[i];
                t.boneInverses.push(s.toArray());
            }
            return t;
        }
    }
    class Wa extends Tn {
        constructor(t, e, n, i = 1){
            "number" == typeof n && (i = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), super(t, e, n), this.meshPerAttribute = i;
        }
        copy(t) {
            return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this;
        }
        toJSON() {
            const t = super.toJSON();
            return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, t;
        }
    }
    Wa.prototype.isInstancedBufferAttribute = !0;
    const ja = new Oe, qa = new Oe, Xa = [], Ja = new oi;
    class Ya extends oi {
        constructor(t, e, n){
            super(t, e), this.instanceMatrix = new Wa(new Float32Array(16 * n), 16), this.instanceColor = null, this.count = n, this.frustumCulled = !1;
        }
        copy(t) {
            return super.copy(t), this.instanceMatrix.copy(t.instanceMatrix), null !== t.instanceColor && (this.instanceColor = t.instanceColor.clone()), this.count = t.count, this;
        }
        getColorAt(t, e) {
            e.fromArray(this.instanceColor.array, 3 * t);
        }
        getMatrixAt(t, e) {
            e.fromArray(this.instanceMatrix.array, 16 * t);
        }
        raycast(t, e) {
            const n = this.matrixWorld, i = this.count;
            if (Ja.geometry = this.geometry, Ja.material = this.material, void 0 !== Ja.material) for(let r = 0; r < i; r++){
                this.getMatrixAt(r, ja), qa.multiplyMatrices(n, ja), Ja.matrixWorld = qa, Ja.raycast(t, Xa);
                for(let t117 = 0, n49 = Xa.length; t117 < n49; t117++){
                    const n = Xa[t117];
                    n.instanceId = r, n.object = this, e.push(n);
                }
                Xa.length = 0;
            }
        }
        setColorAt(t, e) {
            null === this.instanceColor && (this.instanceColor = new Wa(new Float32Array(3 * this.instanceMatrix.count), 3)), e.toArray(this.instanceColor.array, 3 * t);
        }
        setMatrixAt(t, e) {
            e.toArray(this.instanceMatrix.array, 16 * t);
        }
        updateMorphTargets() {}
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
    }
    Ya.prototype.isInstancedMesh = !0;
    class Za extends bn {
        constructor(t){
            super(), this.type = "LineBasicMaterial", this.color = new Wt(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this;
        }
    }
    Za.prototype.isLineBasicMaterial = !0;
    const Ka = new se, Qa = new se, $a = new Oe, to = new Be, eo = new Ae;
    class no extends ln {
        constructor(t = new Vn, e = new Za){
            super(), this.type = "Line", this.geometry = t, this.material = e, this.updateMorphTargets();
        }
        copy(t) {
            return super.copy(t), this.material = t.material, this.geometry = t.geometry, this;
        }
        computeLineDistances() {
            const t = this.geometry;
            if (t.isBufferGeometry) {
                if (null === t.index) {
                    const e = t.attributes.position, n = [
                        0
                    ];
                    for(let t118 = 1, i = e.count; t118 < i; t118++)Ka.fromBufferAttribute(e, t118 - 1), Qa.fromBufferAttribute(e, t118), n[t118] = n[t118 - 1], n[t118] += Ka.distanceTo(Qa);
                    t.setAttribute("lineDistance", new Nn(n, 1));
                } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            } else t.isGeometry && console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
            return this;
        }
        raycast(t, e) {
            const n = this.geometry, i = this.matrixWorld, r = t.params.Line.threshold, s = n.drawRange;
            if (null === n.boundingSphere && n.computeBoundingSphere(), eo.copy(n.boundingSphere), eo.applyMatrix4(i), eo.radius += r, !1 === t.ray.intersectsSphere(eo)) return;
            $a.copy(i).invert(), to.copy(t.ray).applyMatrix4($a);
            const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a, l = new se, c = new se, h = new se, u = new se, d = this.isLineSegments ? 2 : 1;
            if (n.isBufferGeometry) {
                const i = n.index, r = n.attributes.position;
                if (null !== i) for(let n51 = Math.max(0, s.start), a = Math.min(i.count, s.start + s.count) - 1; n51 < a; n51 += d){
                    const s = i.getX(n51), a = i.getX(n51 + 1);
                    l.fromBufferAttribute(r, s), c.fromBufferAttribute(r, a);
                    if (to.distanceSqToSegment(l, c, u, h) > o) continue;
                    u.applyMatrix4(this.matrixWorld);
                    const d = t.ray.origin.distanceTo(u);
                    d < t.near || d > t.far || e.push({
                        distance: d,
                        point: h.clone().applyMatrix4(this.matrixWorld),
                        index: n51,
                        face: null,
                        faceIndex: null,
                        object: this
                    });
                }
                else for(let n50 = Math.max(0, s.start), i47 = Math.min(r.count, s.start + s.count) - 1; n50 < i47; n50 += d){
                    l.fromBufferAttribute(r, n50), c.fromBufferAttribute(r, n50 + 1);
                    if (to.distanceSqToSegment(l, c, u, h) > o) continue;
                    u.applyMatrix4(this.matrixWorld);
                    const i = t.ray.origin.distanceTo(u);
                    i < t.near || i > t.far || e.push({
                        distance: i,
                        point: h.clone().applyMatrix4(this.matrixWorld),
                        index: n50,
                        face: null,
                        faceIndex: null,
                        object: this
                    });
                }
            } else n.isGeometry && console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        }
        updateMorphTargets() {
            const t = this.geometry;
            if (t.isBufferGeometry) {
                const e = t.morphAttributes, n = Object.keys(e);
                if (n.length > 0) {
                    const t = e[n[0]];
                    if (void 0 !== t) {
                        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                        for(let e = 0, n = t.length; e < n; e++){
                            const n = t[e].name || String(e);
                            this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = e;
                        }
                    }
                }
            } else {
                const e = t.morphTargets;
                void 0 !== e && e.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
            }
        }
    }
    no.prototype.isLine = !0;
    const io = new se, ro = new se;
    class so extends no {
        constructor(t, e){
            super(t, e), this.type = "LineSegments";
        }
        computeLineDistances() {
            const t = this.geometry;
            if (t.isBufferGeometry) {
                if (null === t.index) {
                    const e = t.attributes.position, n = [];
                    for(let t120 = 0, i = e.count; t120 < i; t120 += 2)io.fromBufferAttribute(e, t120), ro.fromBufferAttribute(e, t120 + 1), n[t120] = 0 === t120 ? 0 : n[t120 - 1], n[t120 + 1] = n[t120] + io.distanceTo(ro);
                    t.setAttribute("lineDistance", new Nn(n, 1));
                } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            } else t.isGeometry && console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
            return this;
        }
    }
    so.prototype.isLineSegments = !0;
    class ao extends no {
        constructor(t, e){
            super(t, e), this.type = "LineLoop";
        }
    }
    ao.prototype.isLineLoop = !0;
    class oo extends bn {
        constructor(t){
            super(), this.type = "PointsMaterial", this.color = new Wt(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this;
        }
    }
    oo.prototype.isPointsMaterial = !0;
    const lo = new Oe, co = new Be, ho = new Ae, uo = new se;
    class po extends ln {
        constructor(t = new Vn, e = new oo){
            super(), this.type = "Points", this.geometry = t, this.material = e, this.updateMorphTargets();
        }
        copy(t) {
            return super.copy(t), this.material = t.material, this.geometry = t.geometry, this;
        }
        raycast(t, e) {
            const n = this.geometry, i = this.matrixWorld, r = t.params.Points.threshold, s = n.drawRange;
            if (null === n.boundingSphere && n.computeBoundingSphere(), ho.copy(n.boundingSphere), ho.applyMatrix4(i), ho.radius += r, !1 === t.ray.intersectsSphere(ho)) return;
            lo.copy(i).invert(), co.copy(t.ray).applyMatrix4(lo);
            const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a;
            if (n.isBufferGeometry) {
                const r = n.index, a = n.attributes.position;
                if (null !== r) for(let n53 = Math.max(0, s.start), l = Math.min(r.count, s.start + s.count); n53 < l; n53++){
                    const s = r.getX(n53);
                    uo.fromBufferAttribute(a, s), mo(uo, s, o, i, t, e, this);
                }
                else for(let n52 = Math.max(0, s.start), r32 = Math.min(a.count, s.start + s.count); n52 < r32; n52++)uo.fromBufferAttribute(a, n52), mo(uo, n52, o, i, t, e, this);
            } else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        }
        updateMorphTargets() {
            const t = this.geometry;
            if (t.isBufferGeometry) {
                const e = t.morphAttributes, n = Object.keys(e);
                if (n.length > 0) {
                    const t = e[n[0]];
                    if (void 0 !== t) {
                        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                        for(let e = 0, n = t.length; e < n; e++){
                            const n = t[e].name || String(e);
                            this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = e;
                        }
                    }
                }
            } else {
                const e = t.morphTargets;
                void 0 !== e && e.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
            }
        }
    }
    function mo(t, e, n, i, r, s, a) {
        const o = co.distanceSqToPoint(t);
        if (o < n) {
            const n = new se;
            co.closestPointToPoint(t, n), n.applyMatrix4(i);
            const l = r.ray.origin.distanceTo(n);
            if (l < r.near || l > r.far) return;
            s.push({
                distance: l,
                distanceToRay: Math.sqrt(o),
                point: n,
                index: e,
                face: null,
                object: a
            });
        }
    }
    po.prototype.isPoints = !0;
    class fo extends Zt {
        constructor(t, e86, n, i, r, s, a, o, l){
            super(t, e86, n, i, r, s, a, o, l), this.minFilter = void 0 !== s ? s : f1, this.magFilter = void 0 !== r ? r : f1, this.generateMipmaps = !1;
            const c = this;
            "requestVideoFrameCallback" in t && t.requestVideoFrameCallback(function e() {
                c.needsUpdate = !0, t.requestVideoFrameCallback(e);
            });
        }
        clone() {
            return new this.constructor(this.image).copy(this);
        }
        update() {
            const t = this.image;
            !1 === "requestVideoFrameCallback" in t && t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
        }
    }
    fo.prototype.isVideoTexture = !0;
    class go extends Zt {
        constructor(t, e, n){
            super({
                width: t,
                height: e
            }), this.format = n, this.magFilter = d1, this.minFilter = d1, this.generateMipmaps = !1, this.needsUpdate = !0;
        }
    }
    go.prototype.isFramebufferTexture = !0;
    class vo extends Zt {
        constructor(t, e, n, i, r, s, a, o, l, c, h, u){
            super(null, s, a, o, l, c, i, r, h, u), this.image = {
                width: e,
                height: n
            }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1;
        }
    }
    vo.prototype.isCompressedTexture = !0;
    class yo extends Zt {
        constructor(t, e, n, i, r, s, a, o, l){
            super(t, e, n, i, r, s, a, o, l), this.needsUpdate = !0;
        }
    }
    yo.prototype.isCanvasTexture = !0;
    class xo {
        constructor(){
            this.type = "Curve", this.arcLengthDivisions = 200;
        }
        getPoint() {
            return console.warn("THREE.Curve: .getPoint() not implemented."), null;
        }
        getPointAt(t, e) {
            const n = this.getUtoTmapping(t);
            return this.getPoint(n, e);
        }
        getPoints(t = 5) {
            const e = [];
            for(let n = 0; n <= t; n++)e.push(this.getPoint(n / t));
            return e;
        }
        getSpacedPoints(t = 5) {
            const e = [];
            for(let n = 0; n <= t; n++)e.push(this.getPointAt(n / t));
            return e;
        }
        getLength() {
            const t = this.getLengths();
            return t[t.length - 1];
        }
        getLengths(t = this.arcLengthDivisions) {
            if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
            this.needsUpdate = !1;
            const e = [];
            let n, i = this.getPoint(0), r = 0;
            e.push(0);
            for(let s = 1; s <= t; s++)n = this.getPoint(s / t), r += n.distanceTo(i), e.push(r), i = n;
            return this.cacheArcLengths = e, e;
        }
        updateArcLengths() {
            this.needsUpdate = !0, this.getLengths();
        }
        getUtoTmapping(t, e) {
            const n = this.getLengths();
            let i = 0;
            const r = n.length;
            let s;
            s = e || t * n[r - 1];
            let a, o = 0, l = r - 1;
            for(; o <= l;)if (i = Math.floor(o + (l - o) / 2), a = n[i] - s, a < 0) o = i + 1;
            else {
                if (!(a > 0)) {
                    l = i;
                    break;
                }
                l = i - 1;
            }
            if (i = l, n[i] === s) return i / (r - 1);
            const c = n[i];
            return (i + (s - c) / (n[i + 1] - c)) / (r - 1);
        }
        getTangent(t, e) {
            const n = 1e-4;
            let i = t - n, r = t + n;
            i < 0 && (i = 0), r > 1 && (r = 1);
            const s = this.getPoint(i), a = this.getPoint(r), o = e || (s.isVector2 ? new Rt : new se);
            return o.copy(a).sub(s).normalize(), o;
        }
        getTangentAt(t, e) {
            const n = this.getUtoTmapping(t);
            return this.getTangent(n, e);
        }
        computeFrenetFrames(t, e) {
            const n = new se, i = [], r = [], s = [], a = new se, o = new Oe;
            for(let e87 = 0; e87 <= t; e87++){
                const n = e87 / t;
                i[e87] = this.getTangentAt(n, new se);
            }
            r[0] = new se, s[0] = new se;
            let l = Number.MAX_VALUE;
            const c = Math.abs(i[0].x), h = Math.abs(i[0].y), u = Math.abs(i[0].z);
            c <= l && (l = c, n.set(1, 0, 0)), h <= l && (l = h, n.set(0, 1, 0)), u <= l && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], a), s[0].crossVectors(i[0], r[0]);
            for(let e88 = 1; e88 <= t; e88++){
                if (r[e88] = r[e88 - 1].clone(), s[e88] = s[e88 - 1].clone(), a.crossVectors(i[e88 - 1], i[e88]), a.length() > Number.EPSILON) {
                    a.normalize();
                    const t = Math.acos(bt1(i[e88 - 1].dot(i[e88]), -1, 1));
                    r[e88].applyMatrix4(o.makeRotationAxis(a, t));
                }
                s[e88].crossVectors(i[e88], r[e88]);
            }
            if (!0 === e) {
                let e = Math.acos(bt1(r[0].dot(r[t]), -1, 1));
                e /= t, i[0].dot(a.crossVectors(r[0], r[t])) > 0 && (e = -e);
                for(let n = 1; n <= t; n++)r[n].applyMatrix4(o.makeRotationAxis(i[n], e * n)), s[n].crossVectors(i[n], r[n]);
            }
            return {
                tangents: i,
                normals: r,
                binormals: s
            };
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t) {
            return this.arcLengthDivisions = t.arcLengthDivisions, this;
        }
        toJSON() {
            const t = {
                metadata: {
                    version: 4.5,
                    type: "Curve",
                    generator: "Curve.toJSON"
                }
            };
            return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t;
        }
        fromJSON(t) {
            return this.arcLengthDivisions = t.arcLengthDivisions, this;
        }
    }
    class _o extends xo {
        constructor(t = 0, e = 0, n = 1, i = 1, r = 0, s = 2 * Math.PI, a = !1, o = 0){
            super(), this.type = "EllipseCurve", this.aX = t, this.aY = e, this.xRadius = n, this.yRadius = i, this.aStartAngle = r, this.aEndAngle = s, this.aClockwise = a, this.aRotation = o;
        }
        getPoint(t, e) {
            const n = e || new Rt, i = 2 * Math.PI;
            let r = this.aEndAngle - this.aStartAngle;
            const s = Math.abs(r) < Number.EPSILON;
            for(; r < 0;)r += i;
            for(; r > i;)r -= i;
            r < Number.EPSILON && (r = s ? 0 : i), !0 !== this.aClockwise || s || (r === i ? r = -i : r -= i);
            const a = this.aStartAngle + t * r;
            let o = this.aX + this.xRadius * Math.cos(a), l = this.aY + this.yRadius * Math.sin(a);
            if (0 !== this.aRotation) {
                const t = Math.cos(this.aRotation), e = Math.sin(this.aRotation), n = o - this.aX, i = l - this.aY;
                o = n * t - i * e + this.aX, l = n * e + i * t + this.aY;
            }
            return n.set(o, l);
        }
        copy(t) {
            return super.copy(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
        }
        toJSON() {
            const t = super.toJSON();
            return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t;
        }
        fromJSON(t) {
            return super.fromJSON(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
        }
    }
    _o.prototype.isEllipseCurve = !0;
    class bo extends _o {
        constructor(t, e, n, i, r, s){
            super(t, e, n, n, i, r, s), this.type = "ArcCurve";
        }
    }
    function Mo() {
        let t122 = 0, e89 = 0, n54 = 0, i48 = 0;
        function r33(r, s, a, o) {
            t122 = r, e89 = a, n54 = -3 * r + 3 * s - 2 * a - o, i48 = 2 * r - 2 * s + a + o;
        }
        return {
            initCatmullRom: function(t, e, n, i, s) {
                r33(e, n, s * (n - t), s * (i - e));
            },
            initNonuniformCatmullRom: function(t, e, n, i, s, a, o) {
                let l = (e - t) / s - (n - t) / (s + a) + (n - e) / a, c = (n - e) / a - (i - e) / (a + o) + (i - n) / o;
                l *= a, c *= a, r33(e, n, l, c);
            },
            calc: function(r) {
                const s = r * r;
                return t122 + e89 * r + n54 * s + i48 * (s * r);
            }
        };
    }
    bo.prototype.isArcCurve = !0;
    const wo = new se, So = new Mo, To = new Mo, Eo = new Mo;
    class Ao extends xo {
        constructor(t = [], e = !1, n = "centripetal", i = .5){
            super(), this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = n, this.tension = i;
        }
        getPoint(t, e = new se) {
            const n = e, i = this.points, r = i.length, s = (r - (this.closed ? 0 : 1)) * t;
            let a, o, l = Math.floor(s), c = s - l;
            this.closed ? l += l > 0 ? 0 : (Math.floor(Math.abs(l) / r) + 1) * r : 0 === c && l === r - 1 && (l = r - 2, c = 1), this.closed || l > 0 ? a = i[(l - 1) % r] : (wo.subVectors(i[0], i[1]).add(i[0]), a = wo);
            const h = i[l % r], u = i[(l + 1) % r];
            if (this.closed || l + 2 < r ? o = i[(l + 2) % r] : (wo.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), o = wo), "centripetal" === this.curveType || "chordal" === this.curveType) {
                const t = "chordal" === this.curveType ? .5 : .25;
                let e = Math.pow(a.distanceToSquared(h), t), n = Math.pow(h.distanceToSquared(u), t), i = Math.pow(u.distanceToSquared(o), t);
                n < 1e-4 && (n = 1), e < 1e-4 && (e = n), i < 1e-4 && (i = n), So.initNonuniformCatmullRom(a.x, h.x, u.x, o.x, e, n, i), To.initNonuniformCatmullRom(a.y, h.y, u.y, o.y, e, n, i), Eo.initNonuniformCatmullRom(a.z, h.z, u.z, o.z, e, n, i);
            } else "catmullrom" === this.curveType && (So.initCatmullRom(a.x, h.x, u.x, o.x, this.tension), To.initCatmullRom(a.y, h.y, u.y, o.y, this.tension), Eo.initCatmullRom(a.z, h.z, u.z, o.z, this.tension));
            return n.set(So.calc(c), To.calc(c), Eo.calc(c)), n;
        }
        copy(t) {
            super.copy(t), this.points = [];
            for(let e = 0, n = t.points.length; e < n; e++){
                const n = t.points[e];
                this.points.push(n.clone());
            }
            return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
        }
        toJSON() {
            const t = super.toJSON();
            t.points = [];
            for(let e = 0, n = this.points.length; e < n; e++){
                const n = this.points[e];
                t.points.push(n.toArray());
            }
            return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t;
        }
        fromJSON(t) {
            super.fromJSON(t), this.points = [];
            for(let e = 0, n = t.points.length; e < n; e++){
                const n = t.points[e];
                this.points.push((new se).fromArray(n));
            }
            return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
        }
    }
    function Ro(t, e, n, i, r) {
        const s = .5 * (i - e), a = .5 * (r - n), o = t * t;
        return (2 * n - 2 * i + s + a) * (t * o) + (-3 * n + 3 * i - 2 * s - a) * o + s * t + n;
    }
    function Co(t123, e90, n55, i) {
        return function(t, e) {
            const n = 1 - t;
            return n * n * e;
        }(t123, e90) + function(t, e) {
            return 2 * (1 - t) * t * e;
        }(t123, n55) + function(t, e) {
            return t * t * e;
        }(t123, i);
    }
    function Lo(t124, e91, n56, i, r) {
        return function(t, e) {
            const n = 1 - t;
            return n * n * n * e;
        }(t124, e91) + function(t, e) {
            const n = 1 - t;
            return 3 * n * n * t * e;
        }(t124, n56) + function(t, e) {
            return 3 * (1 - t) * t * t * e;
        }(t124, i) + function(t, e) {
            return t * t * t * e;
        }(t124, r);
    }
    Ao.prototype.isCatmullRomCurve3 = !0;
    class Po extends xo {
        constructor(t = new Rt, e = new Rt, n = new Rt, i = new Rt){
            super(), this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i;
        }
        getPoint(t, e = new Rt) {
            const n = e, i = this.v0, r = this.v1, s = this.v2, a = this.v3;
            return n.set(Lo(t, i.x, r.x, s.x, a.x), Lo(t, i.y, r.y, s.y, a.y)), n;
        }
        copy(t) {
            return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
        }
        toJSON() {
            const t = super.toJSON();
            return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
        }
        fromJSON(t) {
            return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
        }
    }
    Po.prototype.isCubicBezierCurve = !0;
    class Do extends xo {
        constructor(t = new se, e = new se, n = new se, i = new se){
            super(), this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i;
        }
        getPoint(t, e = new se) {
            const n = e, i = this.v0, r = this.v1, s = this.v2, a = this.v3;
            return n.set(Lo(t, i.x, r.x, s.x, a.x), Lo(t, i.y, r.y, s.y, a.y), Lo(t, i.z, r.z, s.z, a.z)), n;
        }
        copy(t) {
            return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
        }
        toJSON() {
            const t = super.toJSON();
            return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
        }
        fromJSON(t) {
            return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
        }
    }
    Do.prototype.isCubicBezierCurve3 = !0;
    class Io extends xo {
        constructor(t = new Rt, e = new Rt){
            super(), this.type = "LineCurve", this.v1 = t, this.v2 = e;
        }
        getPoint(t, e = new Rt) {
            const n = e;
            return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
        }
        getPointAt(t, e) {
            return this.getPoint(t, e);
        }
        getTangent(t, e) {
            const n = e || new Rt;
            return n.copy(this.v2).sub(this.v1).normalize(), n;
        }
        copy(t) {
            return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
        }
        toJSON() {
            const t = super.toJSON();
            return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
        }
        fromJSON(t) {
            return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
        }
    }
    Io.prototype.isLineCurve = !0;
    class No extends xo {
        constructor(t = new se, e = new se){
            super(), this.type = "LineCurve3", this.isLineCurve3 = !0, this.v1 = t, this.v2 = e;
        }
        getPoint(t, e = new se) {
            const n = e;
            return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
        }
        getPointAt(t, e) {
            return this.getPoint(t, e);
        }
        copy(t) {
            return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
        }
        toJSON() {
            const t = super.toJSON();
            return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
        }
        fromJSON(t) {
            return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
        }
    }
    class Bo extends xo {
        constructor(t = new Rt, e = new Rt, n = new Rt){
            super(), this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n;
        }
        getPoint(t, e = new Rt) {
            const n = e, i = this.v0, r = this.v1, s = this.v2;
            return n.set(Co(t, i.x, r.x, s.x), Co(t, i.y, r.y, s.y)), n;
        }
        copy(t) {
            return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
        }
        toJSON() {
            const t = super.toJSON();
            return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
        }
        fromJSON(t) {
            return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
        }
    }
    Bo.prototype.isQuadraticBezierCurve = !0;
    class Oo extends xo {
        constructor(t = new se, e = new se, n = new se){
            super(), this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n;
        }
        getPoint(t, e = new se) {
            const n = e, i = this.v0, r = this.v1, s = this.v2;
            return n.set(Co(t, i.x, r.x, s.x), Co(t, i.y, r.y, s.y), Co(t, i.z, r.z, s.z)), n;
        }
        copy(t) {
            return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
        }
        toJSON() {
            const t = super.toJSON();
            return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
        }
        fromJSON(t) {
            return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
        }
    }
    Oo.prototype.isQuadraticBezierCurve3 = !0;
    class zo extends xo {
        constructor(t = []){
            super(), this.type = "SplineCurve", this.points = t;
        }
        getPoint(t, e = new Rt) {
            const n = e, i = this.points, r = (i.length - 1) * t, s = Math.floor(r), a = r - s, o = i[0 === s ? s : s - 1], l = i[s], c = i[s > i.length - 2 ? i.length - 1 : s + 1], h = i[s > i.length - 3 ? i.length - 1 : s + 2];
            return n.set(Ro(a, o.x, l.x, c.x, h.x), Ro(a, o.y, l.y, c.y, h.y)), n;
        }
        copy(t) {
            super.copy(t), this.points = [];
            for(let e = 0, n = t.points.length; e < n; e++){
                const n = t.points[e];
                this.points.push(n.clone());
            }
            return this;
        }
        toJSON() {
            const t = super.toJSON();
            t.points = [];
            for(let e = 0, n = this.points.length; e < n; e++){
                const n = this.points[e];
                t.points.push(n.toArray());
            }
            return t;
        }
        fromJSON(t) {
            super.fromJSON(t), this.points = [];
            for(let e = 0, n = t.points.length; e < n; e++){
                const n = t.points[e];
                this.points.push((new Rt).fromArray(n));
            }
            return this;
        }
    }
    zo.prototype.isSplineCurve = !0;
    var Uo = Object.freeze({
        __proto__: null,
        ArcCurve: bo,
        CatmullRomCurve3: Ao,
        CubicBezierCurve: Po,
        CubicBezierCurve3: Do,
        EllipseCurve: _o,
        LineCurve: Io,
        LineCurve3: No,
        QuadraticBezierCurve: Bo,
        QuadraticBezierCurve3: Oo,
        SplineCurve: zo
    });
    class Fo extends xo {
        constructor(){
            super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
        }
        add(t) {
            this.curves.push(t);
        }
        closePath() {
            const t = this.curves[0].getPoint(0), e = this.curves[this.curves.length - 1].getPoint(1);
            t.equals(e) || this.curves.push(new Io(e, t));
        }
        getPoint(t, e) {
            const n = t * this.getLength(), i = this.getCurveLengths();
            let r = 0;
            for(; r < i.length;){
                if (i[r] >= n) {
                    const t = i[r] - n, s = this.curves[r], a = s.getLength(), o = 0 === a ? 0 : 1 - t / a;
                    return s.getPointAt(o, e);
                }
                r++;
            }
            return null;
        }
        getLength() {
            const t = this.getCurveLengths();
            return t[t.length - 1];
        }
        updateArcLengths() {
            this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
        }
        getCurveLengths() {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
            const t = [];
            let e = 0;
            for(let n = 0, i = this.curves.length; n < i; n++)e += this.curves[n].getLength(), t.push(e);
            return this.cacheLengths = t, t;
        }
        getSpacedPoints(t = 40) {
            const e = [];
            for(let n = 0; n <= t; n++)e.push(this.getPoint(n / t));
            return this.autoClose && e.push(e[0]), e;
        }
        getPoints(t = 12) {
            const e = [];
            let n;
            for(let i = 0, r = this.curves; i < r.length; i++){
                const s = r[i], a = s.isEllipseCurve ? 2 * t : s.isLineCurve || s.isLineCurve3 ? 1 : s.isSplineCurve ? t * s.points.length : t, o = s.getPoints(a);
                for(let t125 = 0; t125 < o.length; t125++){
                    const i = o[t125];
                    n && n.equals(i) || (e.push(i), n = i);
                }
            }
            return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e;
        }
        copy(t) {
            super.copy(t), this.curves = [];
            for(let e = 0, n = t.curves.length; e < n; e++){
                const n = t.curves[e];
                this.curves.push(n.clone());
            }
            return this.autoClose = t.autoClose, this;
        }
        toJSON() {
            const t = super.toJSON();
            t.autoClose = this.autoClose, t.curves = [];
            for(let e = 0, n = this.curves.length; e < n; e++){
                const n = this.curves[e];
                t.curves.push(n.toJSON());
            }
            return t;
        }
        fromJSON(t) {
            super.fromJSON(t), this.autoClose = t.autoClose, this.curves = [];
            for(let e = 0, n = t.curves.length; e < n; e++){
                const n = t.curves[e];
                this.curves.push((new Uo[n.type]).fromJSON(n));
            }
            return this;
        }
    }
    class Ho extends Fo {
        constructor(t){
            super(), this.type = "Path", this.currentPoint = new Rt, t && this.setFromPoints(t);
        }
        setFromPoints(t) {
            this.moveTo(t[0].x, t[0].y);
            for(let e = 1, n = t.length; e < n; e++)this.lineTo(t[e].x, t[e].y);
            return this;
        }
        moveTo(t, e) {
            return this.currentPoint.set(t, e), this;
        }
        lineTo(t, e) {
            const n = new Io(this.currentPoint.clone(), new Rt(t, e));
            return this.curves.push(n), this.currentPoint.set(t, e), this;
        }
        quadraticCurveTo(t, e, n, i) {
            const r = new Bo(this.currentPoint.clone(), new Rt(t, e), new Rt(n, i));
            return this.curves.push(r), this.currentPoint.set(n, i), this;
        }
        bezierCurveTo(t, e, n, i, r, s) {
            const a = new Po(this.currentPoint.clone(), new Rt(t, e), new Rt(n, i), new Rt(r, s));
            return this.curves.push(a), this.currentPoint.set(r, s), this;
        }
        splineThru(t) {
            const e = [
                this.currentPoint.clone()
            ].concat(t), n = new zo(e);
            return this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this;
        }
        arc(t, e, n, i, r, s) {
            const a = this.currentPoint.x, o = this.currentPoint.y;
            return this.absarc(t + a, e + o, n, i, r, s), this;
        }
        absarc(t, e, n, i, r, s) {
            return this.absellipse(t, e, n, n, i, r, s), this;
        }
        ellipse(t, e, n, i, r, s, a, o) {
            const l = this.currentPoint.x, c = this.currentPoint.y;
            return this.absellipse(t + l, e + c, n, i, r, s, a, o), this;
        }
        absellipse(t, e, n, i, r, s, a, o) {
            const l = new _o(t, e, n, i, r, s, a, o);
            if (this.curves.length > 0) {
                const t = l.getPoint(0);
                t.equals(this.currentPoint) || this.lineTo(t.x, t.y);
            }
            this.curves.push(l);
            const c = l.getPoint(1);
            return this.currentPoint.copy(c), this;
        }
        copy(t) {
            return super.copy(t), this.currentPoint.copy(t.currentPoint), this;
        }
        toJSON() {
            const t = super.toJSON();
            return t.currentPoint = this.currentPoint.toArray(), t;
        }
        fromJSON(t) {
            return super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this;
        }
    }
    class Go extends Vn {
        constructor(t = [
            new Rt(0, .5),
            new Rt(.5, 0),
            new Rt(0, -0.5)
        ], e = 12, n = 0, i = 2 * Math.PI){
            super(), this.type = "LatheGeometry", this.parameters = {
                points: t,
                segments: e,
                phiStart: n,
                phiLength: i
            }, e = Math.floor(e), i = bt1(i, 0, 2 * Math.PI);
            const r = [], s = [], a = [], o = [], l = [], c = 1 / e, h = new se, u = new Rt, d = new se, p = new se, m = new se;
            let f = 0, g = 0;
            for(let e92 = 0; e92 <= t.length - 1; e92++)switch(e92){
                case 0:
                    f = t[e92 + 1].x - t[e92].x, g = t[e92 + 1].y - t[e92].y, d.x = 1 * g, d.y = -f, d.z = 0 * g, m.copy(d), d.normalize(), o.push(d.x, d.y, d.z);
                    break;
                case t.length - 1:
                    o.push(m.x, m.y, m.z);
                    break;
                default:
                    f = t[e92 + 1].x - t[e92].x, g = t[e92 + 1].y - t[e92].y, d.x = 1 * g, d.y = -f, d.z = 0 * g, p.copy(d), d.x += m.x, d.y += m.y, d.z += m.z, d.normalize(), o.push(d.x, d.y, d.z), m.copy(p);
            }
            for(let r34 = 0; r34 <= e; r34++){
                const d = n + r34 * c * i, p = Math.sin(d), m = Math.cos(d);
                for(let n58 = 0; n58 <= t.length - 1; n58++){
                    h.x = t[n58].x * p, h.y = t[n58].y, h.z = t[n58].x * m, s.push(h.x, h.y, h.z), u.x = r34 / e, u.y = n58 / (t.length - 1), a.push(u.x, u.y);
                    const i = o[3 * n58 + 0] * p, c = o[3 * n58 + 1], d = o[3 * n58 + 0] * m;
                    l.push(i, c, d);
                }
            }
            for(let n57 = 0; n57 < e; n57++)for(let e93 = 0; e93 < t.length - 1; e93++){
                const i = e93 + n57 * t.length, s = i, a = i + t.length, o = i + t.length + 1, l = i + 1;
                r.push(s, a, l), r.push(o, l, a);
            }
            this.setIndex(r), this.setAttribute("position", new Nn(s, 3)), this.setAttribute("uv", new Nn(a, 2)), this.setAttribute("normal", new Nn(l, 3));
        }
        static fromJSON(t) {
            return new Go(t.points, t.segments, t.phiStart, t.phiLength);
        }
    }
    class ko extends Go {
        constructor(t = 1, e = 1, n = 4, i = 8){
            const r = new Ho;
            r.absarc(0, -e / 2, t, 1.5 * Math.PI, 0), r.absarc(0, e / 2, t, 0, .5 * Math.PI), super(r.getPoints(n), i), this.type = "CapsuleGeometry", this.parameters = {
                radius: t,
                height: e,
                capSegments: n,
                radialSegments: i
            };
        }
        static fromJSON(t) {
            return new ko(t.radius, t.length, t.capSegments, t.radialSegments);
        }
    }
    class Vo extends Vn {
        constructor(t = 1, e = 8, n = 0, i = 2 * Math.PI){
            super(), this.type = "CircleGeometry", this.parameters = {
                radius: t,
                segments: e,
                thetaStart: n,
                thetaLength: i
            }, e = Math.max(3, e);
            const r = [], s = [], a = [], o = [], l = new se, c = new Rt;
            s.push(0, 0, 0), a.push(0, 0, 1), o.push(.5, .5);
            for(let r35 = 0, h = 3; r35 <= e; r35++, h += 3){
                const u = n + r35 / e * i;
                l.x = t * Math.cos(u), l.y = t * Math.sin(u), s.push(l.x, l.y, l.z), a.push(0, 0, 1), c.x = (s[h] / t + 1) / 2, c.y = (s[h + 1] / t + 1) / 2, o.push(c.x, c.y);
            }
            for(let t126 = 1; t126 <= e; t126++)r.push(t126, t126 + 1, 0);
            this.setIndex(r), this.setAttribute("position", new Nn(s, 3)), this.setAttribute("normal", new Nn(a, 3)), this.setAttribute("uv", new Nn(o, 2));
        }
        static fromJSON(t) {
            return new Vo(t.radius, t.segments, t.thetaStart, t.thetaLength);
        }
    }
    class Wo extends Vn {
        constructor(t = 1, e94 = 1, n59 = 1, i49 = 8, r36 = 1, s22 = !1, a = 0, o = 2 * Math.PI){
            super(), this.type = "CylinderGeometry", this.parameters = {
                radiusTop: t,
                radiusBottom: e94,
                height: n59,
                radialSegments: i49,
                heightSegments: r36,
                openEnded: s22,
                thetaStart: a,
                thetaLength: o
            };
            const l12 = this;
            i49 = Math.floor(i49), r36 = Math.floor(r36);
            const c11 = [], h = [], u = [], d = [];
            let p = 0;
            const m6 = [], f = n59 / 2;
            let g5 = 0;
            function v4(n) {
                const r = p, s = new Rt, m = new se;
                let v = 0;
                const y = !0 === n ? t : e94, x = !0 === n ? 1 : -1;
                for(let t129 = 1; t129 <= i49; t129++)h.push(0, f * x, 0), u.push(0, x, 0), d.push(.5, .5), p++;
                const _ = p;
                for(let t127 = 0; t127 <= i49; t127++){
                    const e = t127 / i49 * o + a, n = Math.cos(e), r = Math.sin(e);
                    m.x = y * r, m.y = f * x, m.z = y * n, h.push(m.x, m.y, m.z), u.push(0, x, 0), s.x = .5 * n + .5, s.y = .5 * r * x + .5, d.push(s.x, s.y), p++;
                }
                for(let t128 = 0; t128 < i49; t128++){
                    const e = r + t128, i = _ + t128;
                    !0 === n ? c11.push(i, i + 1, e) : c11.push(i + 1, i, e), v += 3;
                }
                l12.addGroup(g5, v, !0 === n ? 1 : 2), g5 += v;
            }
            !function() {
                const s = new se, v = new se;
                let y = 0;
                const x = (e94 - t) / n59;
                for(let l = 0; l <= r36; l++){
                    const c = [], g = l / r36, y = g * (e94 - t) + t;
                    for(let t131 = 0; t131 <= i49; t131++){
                        const e = t131 / i49, r = e * o + a, l = Math.sin(r), m = Math.cos(r);
                        v.x = y * l, v.y = -g * n59 + f, v.z = y * m, h.push(v.x, v.y, v.z), s.set(l, x, m).normalize(), u.push(s.x, s.y, s.z), d.push(e, 1 - g), c.push(p++);
                    }
                    m6.push(c);
                }
                for(let t130 = 0; t130 < i49; t130++)for(let e = 0; e < r36; e++){
                    const n = m6[e][t130], i = m6[e + 1][t130], r = m6[e + 1][t130 + 1], s = m6[e][t130 + 1];
                    c11.push(n, i, s), c11.push(i, r, s), y += 6;
                }
                l12.addGroup(g5, y, 0), g5 += y;
            }(), !1 === s22 && (t > 0 && v4(!0), e94 > 0 && v4(!1)), this.setIndex(c11), this.setAttribute("position", new Nn(h, 3)), this.setAttribute("normal", new Nn(u, 3)), this.setAttribute("uv", new Nn(d, 2));
        }
        static fromJSON(t) {
            return new Wo(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
        }
    }
    class jo extends Wo {
        constructor(t = 1, e = 1, n = 8, i = 1, r = !1, s = 0, a = 2 * Math.PI){
            super(0, t, e, n, i, r, s, a), this.type = "ConeGeometry", this.parameters = {
                radius: t,
                height: e,
                radialSegments: n,
                heightSegments: i,
                openEnded: r,
                thetaStart: s,
                thetaLength: a
            };
        }
        static fromJSON(t) {
            return new jo(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
        }
    }
    class qo extends Vn {
        constructor(t134 = [], e96 = [], n60 = 1, i51 = 0){
            super(), this.type = "PolyhedronGeometry", this.parameters = {
                vertices: t134,
                indices: e96,
                radius: n60,
                detail: i51
            };
            const r37 = [], s23 = [];
            function a19(t, e, n, i) {
                const r = i + 1, s = [];
                for(let i50 = 0; i50 <= r; i50++){
                    s[i50] = [];
                    const a = t.clone().lerp(n, i50 / r), o = e.clone().lerp(n, i50 / r), l = r - i50;
                    for(let t135 = 0; t135 <= l; t135++)s[i50][t135] = 0 === t135 && i50 === r ? a : a.clone().lerp(o, t135 / l);
                }
                for(let t133 = 0; t133 < r; t133++)for(let e95 = 0; e95 < 2 * (r - t133) - 1; e95++){
                    const n = Math.floor(e95 / 2);
                    e95 % 2 == 0 ? (o15(s[t133][n + 1]), o15(s[t133 + 1][n]), o15(s[t133][n])) : (o15(s[t133][n + 1]), o15(s[t133 + 1][n + 1]), o15(s[t133 + 1][n]));
                }
            }
            function o15(t) {
                r37.push(t.x, t.y, t.z);
            }
            function l13(e, n) {
                const i = 3 * e;
                n.x = t134[i + 0], n.y = t134[i + 1], n.z = t134[i + 2];
            }
            function c(t, e, n, i) {
                i < 0 && 1 === t.x && (s23[e] = t.x - 1), 0 === n.x && 0 === n.z && (s23[e] = i / 2 / Math.PI + .5);
            }
            function h(t) {
                return Math.atan2(t.z, -t.x);
            }
            !function(t) {
                const n = new se, i = new se, r = new se;
                for(let s = 0; s < e96.length; s += 3)l13(e96[s + 0], n), l13(e96[s + 1], i), l13(e96[s + 2], r), a19(n, i, r, t);
            }(i51), function(t) {
                const e = new se;
                for(let n = 0; n < r37.length; n += 3)e.x = r37[n + 0], e.y = r37[n + 1], e.z = r37[n + 2], e.normalize().multiplyScalar(t), r37[n + 0] = e.x, r37[n + 1] = e.y, r37[n + 2] = e.z;
            }(n60), function() {
                const t136 = new se;
                for(let n61 = 0; n61 < r37.length; n61 += 3){
                    t136.x = r37[n61 + 0], t136.y = r37[n61 + 1], t136.z = r37[n61 + 2];
                    const i = h(t136) / 2 / Math.PI + .5, a = (e97 = t136, Math.atan2(-e97.y, Math.sqrt(e97.x * e97.x + e97.z * e97.z)) / Math.PI + .5);
                    s23.push(i, 1 - a);
                }
                var e97;
                (function() {
                    const t = new se, e = new se, n = new se, i = new se, a = new Rt, o = new Rt, l = new Rt;
                    for(let u = 0, d = 0; u < r37.length; u += 9, d += 6){
                        t.set(r37[u + 0], r37[u + 1], r37[u + 2]), e.set(r37[u + 3], r37[u + 4], r37[u + 5]), n.set(r37[u + 6], r37[u + 7], r37[u + 8]), a.set(s23[d + 0], s23[d + 1]), o.set(s23[d + 2], s23[d + 3]), l.set(s23[d + 4], s23[d + 5]), i.copy(t).add(e).add(n).divideScalar(3);
                        const p = h(i);
                        c(a, d + 0, t, p), c(o, d + 2, e, p), c(l, d + 4, n, p);
                    }
                })(), function() {
                    for(let t = 0; t < s23.length; t += 6){
                        const e = s23[t + 0], n = s23[t + 2], i = s23[t + 4], r = Math.max(e, n, i), a = Math.min(e, n, i);
                        r > .9 && a < .1 && (e < .2 && (s23[t + 0] += 1), n < .2 && (s23[t + 2] += 1), i < .2 && (s23[t + 4] += 1));
                    }
                }();
            }(), this.setAttribute("position", new Nn(r37, 3)), this.setAttribute("normal", new Nn(r37.slice(), 3)), this.setAttribute("uv", new Nn(s23, 2)), 0 === i51 ? this.computeVertexNormals() : this.normalizeNormals();
        }
        static fromJSON(t) {
            return new qo(t.vertices, t.indices, t.radius, t.details);
        }
    }
    class Xo extends qo {
        constructor(t = 1, e = 0){
            const n = (1 + Math.sqrt(5)) / 2, i = 1 / n;
            super([
                -1,
                -1,
                -1,
                -1,
                -1,
                1,
                -1,
                1,
                -1,
                -1,
                1,
                1,
                1,
                -1,
                -1,
                1,
                -1,
                1,
                1,
                1,
                -1,
                1,
                1,
                1,
                0,
                -i,
                -n,
                0,
                -i,
                n,
                0,
                i,
                -n,
                0,
                i,
                n,
                -i,
                -n,
                0,
                -i,
                n,
                0,
                i,
                -n,
                0,
                i,
                n,
                0,
                -n,
                0,
                -i,
                n,
                0,
                -i,
                -n,
                0,
                i,
                n,
                0,
                i
            ], [
                3,
                11,
                7,
                3,
                7,
                15,
                3,
                15,
                13,
                7,
                19,
                17,
                7,
                17,
                6,
                7,
                6,
                15,
                17,
                4,
                8,
                17,
                8,
                10,
                17,
                10,
                6,
                8,
                0,
                16,
                8,
                16,
                2,
                8,
                2,
                10,
                0,
                12,
                1,
                0,
                1,
                18,
                0,
                18,
                16,
                6,
                10,
                2,
                6,
                2,
                13,
                6,
                13,
                15,
                2,
                16,
                18,
                2,
                18,
                3,
                2,
                3,
                13,
                18,
                1,
                9,
                18,
                9,
                11,
                18,
                11,
                3,
                4,
                14,
                12,
                4,
                12,
                0,
                4,
                0,
                8,
                11,
                9,
                5,
                11,
                5,
                19,
                11,
                19,
                7,
                19,
                5,
                14,
                19,
                14,
                4,
                19,
                4,
                17,
                1,
                12,
                14,
                1,
                14,
                5,
                1,
                5,
                9
            ], t, e), this.type = "DodecahedronGeometry", this.parameters = {
                radius: t,
                detail: e
            };
        }
        static fromJSON(t) {
            return new Xo(t.radius, t.detail);
        }
    }
    const Jo = new se, Yo = new se, Zo = new se, Ko = new xn;
    class Qo extends Vn {
        constructor(t = null, e = 1){
            if (super(), this.type = "EdgesGeometry", this.parameters = {
                geometry: t,
                thresholdAngle: e
            }, null !== t) {
                const n = 4, i = Math.pow(10, n), r = Math.cos(yt1 * e), s = t.getIndex(), a = t.getAttribute("position"), o = s ? s.count : a.count, l = [
                    0,
                    0,
                    0
                ], c = [
                    "a",
                    "b",
                    "c"
                ], h = new Array(3), u = {}, d = [];
                for(let t138 = 0; t138 < o; t138 += 3){
                    s ? (l[0] = s.getX(t138), l[1] = s.getX(t138 + 1), l[2] = s.getX(t138 + 2)) : (l[0] = t138, l[1] = t138 + 1, l[2] = t138 + 2);
                    const { a: e , b: n , c: o  } = Ko;
                    if (e.fromBufferAttribute(a, l[0]), n.fromBufferAttribute(a, l[1]), o.fromBufferAttribute(a, l[2]), Ko.getNormal(Zo), h[0] = `${Math.round(e.x * i)},${Math.round(e.y * i)},${Math.round(e.z * i)}`, h[1] = `${Math.round(n.x * i)},${Math.round(n.y * i)},${Math.round(n.z * i)}`, h[2] = `${Math.round(o.x * i)},${Math.round(o.y * i)},${Math.round(o.z * i)}`, h[0] !== h[1] && h[1] !== h[2] && h[2] !== h[0]) for(let t = 0; t < 3; t++){
                        const e = (t + 1) % 3, n = h[t], i = h[e], s = Ko[c[t]], a = Ko[c[e]], o = `${n}_${i}`, p = `${i}_${n}`;
                        p in u && u[p] ? (Zo.dot(u[p].normal) <= r && (d.push(s.x, s.y, s.z), d.push(a.x, a.y, a.z)), u[p] = null) : o in u || (u[o] = {
                            index0: l[t],
                            index1: l[e],
                            normal: Zo.clone()
                        });
                    }
                }
                for(const t137 in u)if (u[t137]) {
                    const { index0: e , index1: n  } = u[t137];
                    Jo.fromBufferAttribute(a, e), Yo.fromBufferAttribute(a, n), d.push(Jo.x, Jo.y, Jo.z), d.push(Yo.x, Yo.y, Yo.z);
                }
                this.setAttribute("position", new Nn(d, 3));
            }
        }
    }
    class $o extends Ho {
        constructor(t){
            super(t), this.uuid = _t1(), this.type = "Shape", this.holes = [];
        }
        getPointsHoles(t) {
            const e = [];
            for(let n = 0, i = this.holes.length; n < i; n++)e[n] = this.holes[n].getPoints(t);
            return e;
        }
        extractPoints(t) {
            return {
                shape: this.getPoints(t),
                holes: this.getPointsHoles(t)
            };
        }
        copy(t) {
            super.copy(t), this.holes = [];
            for(let e = 0, n = t.holes.length; e < n; e++){
                const n = t.holes[e];
                this.holes.push(n.clone());
            }
            return this;
        }
        toJSON() {
            const t = super.toJSON();
            t.uuid = this.uuid, t.holes = [];
            for(let e = 0, n = this.holes.length; e < n; e++){
                const n = this.holes[e];
                t.holes.push(n.toJSON());
            }
            return t;
        }
        fromJSON(t) {
            super.fromJSON(t), this.uuid = t.uuid, this.holes = [];
            for(let e = 0, n = t.holes.length; e < n; e++){
                const n = t.holes[e];
                this.holes.push((new Ho).fromJSON(n));
            }
            return this;
        }
    }
    const tl = function(t139, e98, n62 = 2) {
        const i52 = e98 && e98.length, r38 = i52 ? e98[0] * n62 : t139.length;
        let s24 = el(t139, 0, r38, n62, !0);
        const a20 = [];
        if (!s24 || s24.next === s24.prev) return a20;
        let o16, l14, c12, h, u, d, p;
        if (i52 && (s24 = function(t, e, n, i) {
            const r = [];
            let s, a, o, l, c;
            for(s = 0, a = e.length; s < a; s++)o = e[s] * i, l = s < a - 1 ? e[s + 1] * i : t.length, c = el(t, o, l, i, !1), c === c.next && (c.steiner = !0), r.push(dl(c));
            for(r.sort(ll), s = 0; s < r.length; s++)cl(r[s], n), n = nl(n, n.next);
            return n;
        }(t139, e98, s24, n62)), t139.length > 80 * n62) {
            o16 = c12 = t139[0], l14 = h = t139[1];
            for(let e = n62; e < r38; e += n62)u = t139[e], d = t139[e + 1], u < o16 && (o16 = u), d < l14 && (l14 = d), u > c12 && (c12 = u), d > h && (h = d);
            p = Math.max(c12 - o16, h - l14), p = 0 !== p ? 1 / p : 0;
        }
        return il(s24, a20, n62, o16, l14, p), a20;
    };
    function el(t140, e99, n63, i53, r39) {
        let s25, a21;
        if (r39 === function(t, e, n, i) {
            let r = 0;
            for(let s = e, a = n - i; s < n; s += i)r += (t[a] - t[s]) * (t[s + 1] + t[a + 1]), a = s;
            return r;
        }(t140, e99, n63, i53) > 0) for(s25 = e99; s25 < n63; s25 += i53)a21 = Ml(s25, t140[s25], t140[s25 + 1], a21);
        else for(s25 = n63 - i53; s25 >= e99; s25 -= i53)a21 = Ml(s25, t140[s25], t140[s25 + 1], a21);
        return a21 && gl(a21, a21.next) && (wl(a21), a21 = a21.next), a21;
    }
    function nl(t, e) {
        if (!t) return t;
        e || (e = t);
        let n, i = t;
        do if (n = !1, i.steiner || !gl(i, i.next) && 0 !== fl(i.prev, i, i.next)) i = i.next;
        else {
            if (wl(i), i = e = i.prev, i === i.next) break;
            n = !0;
        }
        while (n || i !== e);
        return e;
    }
    function il(t141, e100, n64, i54, r40, s26, a22) {
        if (!t141) return;
        !a22 && s26 && function(t142, e101, n65, i55) {
            let r41 = t142;
            do null === r41.z && (r41.z = ul(r41.x, r41.y, e101, n65, i55)), r41.prevZ = r41.prev, r41.nextZ = r41.next, r41 = r41.next;
            while (r41 !== t142);
            r41.prevZ.nextZ = null, r41.prevZ = null, function(t) {
                let e, n, i, r, s, a, o, l, c = 1;
                do {
                    for(n = t, t = null, s = null, a = 0; n;){
                        for(a++, i = n, o = 0, e = 0; e < c && (o++, i = i.nextZ, i); e++);
                        for(l = c; o > 0 || l > 0 && i;)0 !== o && (0 === l || !i || n.z <= i.z) ? (r = n, n = n.nextZ, o--) : (r = i, i = i.nextZ, l--), s ? s.nextZ = r : t = r, r.prevZ = s, s = r;
                        n = i;
                    }
                    s.nextZ = null, c *= 2;
                }while (a > 1);
            }(r41);
        }(t141, i54, r40, s26);
        let o17, l15, c13 = t141;
        for(; t141.prev !== t141.next;)if (o17 = t141.prev, l15 = t141.next, s26 ? sl(t141, i54, r40, s26) : rl(t141)) e100.push(o17.i / n64), e100.push(t141.i / n64), e100.push(l15.i / n64), wl(t141), t141 = l15.next, c13 = l15.next;
        else if ((t141 = l15) === c13) {
            a22 ? 1 === a22 ? il(t141 = al(nl(t141), e100, n64), e100, n64, i54, r40, s26, 2) : 2 === a22 && ol(t141, e100, n64, i54, r40, s26) : il(nl(t141), e100, n64, i54, r40, s26, 1);
            break;
        }
    }
    function rl(t) {
        const e = t.prev, n = t, i = t.next;
        if (fl(e, n, i) >= 0) return !1;
        let r = t.next.next;
        for(; r !== t.prev;){
            if (pl(e.x, e.y, n.x, n.y, i.x, i.y, r.x, r.y) && fl(r.prev, r, r.next) >= 0) return !1;
            r = r.next;
        }
        return !0;
    }
    function sl(t, e, n, i) {
        const r = t.prev, s = t, a = t.next;
        if (fl(r, s, a) >= 0) return !1;
        const o = r.x < s.x ? r.x < a.x ? r.x : a.x : s.x < a.x ? s.x : a.x, l = r.y < s.y ? r.y < a.y ? r.y : a.y : s.y < a.y ? s.y : a.y, c = r.x > s.x ? r.x > a.x ? r.x : a.x : s.x > a.x ? s.x : a.x, h = r.y > s.y ? r.y > a.y ? r.y : a.y : s.y > a.y ? s.y : a.y, u = ul(o, l, e, n, i), d = ul(c, h, e, n, i);
        let p = t.prevZ, m = t.nextZ;
        for(; p && p.z >= u && m && m.z <= d;){
            if (p !== t.prev && p !== t.next && pl(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) && fl(p.prev, p, p.next) >= 0) return !1;
            if (p = p.prevZ, m !== t.prev && m !== t.next && pl(r.x, r.y, s.x, s.y, a.x, a.y, m.x, m.y) && fl(m.prev, m, m.next) >= 0) return !1;
            m = m.nextZ;
        }
        for(; p && p.z >= u;){
            if (p !== t.prev && p !== t.next && pl(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) && fl(p.prev, p, p.next) >= 0) return !1;
            p = p.prevZ;
        }
        for(; m && m.z <= d;){
            if (m !== t.prev && m !== t.next && pl(r.x, r.y, s.x, s.y, a.x, a.y, m.x, m.y) && fl(m.prev, m, m.next) >= 0) return !1;
            m = m.nextZ;
        }
        return !0;
    }
    function al(t, e, n) {
        let i = t;
        do {
            const r = i.prev, s = i.next.next;
            !gl(r, s) && vl(r, i, i.next, s) && _l(r, s) && _l(s, r) && (e.push(r.i / n), e.push(i.i / n), e.push(s.i / n), wl(i), wl(i.next), i = t = s), i = i.next;
        }while (i !== t);
        return nl(i);
    }
    function ol(t, e, n, i, r, s) {
        let a = t;
        do {
            let t = a.next.next;
            for(; t !== a.prev;){
                if (a.i !== t.i && ml(a, t)) {
                    let o = bl(a, t);
                    return a = nl(a, a.next), o = nl(o, o.next), il(a, e, n, i, r, s), void il(o, e, n, i, r, s);
                }
                t = t.next;
            }
            a = a.next;
        }while (a !== t);
    }
    function ll(t, e) {
        return t.x - e.x;
    }
    function cl(t143, e102) {
        if (e102 = function(t, e) {
            let n = e;
            const i = t.x, r = t.y;
            let s, a = -1 / 0;
            do {
                if (r <= n.y && r >= n.next.y && n.next.y !== n.y) {
                    const t = n.x + (r - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
                    if (t <= i && t > a) {
                        if (a = t, t === i) {
                            if (r === n.y) return n;
                            if (r === n.next.y) return n.next;
                        }
                        s = n.x < n.next.x ? n : n.next;
                    }
                }
                n = n.next;
            }while (n !== e);
            if (!s) return null;
            if (i === a) return s;
            const o = s, l = s.x, c = s.y;
            let h, u = 1 / 0;
            n = s;
            do i >= n.x && n.x >= l && i !== n.x && pl(r < c ? i : a, r, l, c, r < c ? a : i, r, n.x, n.y) && (h = Math.abs(r - n.y) / (i - n.x), _l(n, t) && (h < u || h === u && (n.x > s.x || n.x === s.x && hl(s, n))) && (s = n, u = h)), n = n.next;
            while (n !== o);
            return s;
        }(t143, e102), e102) {
            const n = bl(e102, t143);
            nl(e102, e102.next), nl(n, n.next);
        }
    }
    function hl(t, e) {
        return fl(t.prev, t, e.prev) < 0 && fl(e.next, t, t.next) < 0;
    }
    function ul(t, e, n, i, r) {
        return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1;
    }
    function dl(t) {
        let e = t, n = t;
        do (e.x < n.x || e.x === n.x && e.y < n.y) && (n = e), e = e.next;
        while (e !== t);
        return n;
    }
    function pl(t, e, n, i, r, s, a, o) {
        return (r - a) * (e - o) - (t - a) * (s - o) >= 0 && (t - a) * (i - o) - (n - a) * (e - o) >= 0 && (n - a) * (s - o) - (r - a) * (i - o) >= 0;
    }
    function ml(t144, e103) {
        return t144.next.i !== e103.i && t144.prev.i !== e103.i && !function(t, e) {
            let n = t;
            do {
                if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && vl(n, n.next, t, e)) return !0;
                n = n.next;
            }while (n !== t);
            return !1;
        }(t144, e103) && (_l(t144, e103) && _l(e103, t144) && function(t, e) {
            let n = t, i = !1;
            const r = (t.x + e.x) / 2, s = (t.y + e.y) / 2;
            do n.y > s != n.next.y > s && n.next.y !== n.y && r < (n.next.x - n.x) * (s - n.y) / (n.next.y - n.y) + n.x && (i = !i), n = n.next;
            while (n !== t);
            return i;
        }(t144, e103) && (fl(t144.prev, t144, e103.prev) || fl(t144, e103.prev, e103)) || gl(t144, e103) && fl(t144.prev, t144, t144.next) > 0 && fl(e103.prev, e103, e103.next) > 0);
    }
    function fl(t, e, n) {
        return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
    }
    function gl(t, e) {
        return t.x === e.x && t.y === e.y;
    }
    function vl(t, e, n, i) {
        const r = xl(fl(t, e, n)), s = xl(fl(t, e, i)), a = xl(fl(n, i, t)), o = xl(fl(n, i, e));
        return r !== s && a !== o || !(0 !== r || !yl(t, n, e)) || !(0 !== s || !yl(t, i, e)) || !(0 !== a || !yl(n, t, i)) || !(0 !== o || !yl(n, e, i));
    }
    function yl(t, e, n) {
        return e.x <= Math.max(t.x, n.x) && e.x >= Math.min(t.x, n.x) && e.y <= Math.max(t.y, n.y) && e.y >= Math.min(t.y, n.y);
    }
    function xl(t) {
        return t > 0 ? 1 : t < 0 ? -1 : 0;
    }
    function _l(t, e) {
        return fl(t.prev, t, t.next) < 0 ? fl(t, e, t.next) >= 0 && fl(t, t.prev, e) >= 0 : fl(t, e, t.prev) < 0 || fl(t, t.next, e) < 0;
    }
    function bl(t, e) {
        const n = new Sl(t.i, t.x, t.y), i = new Sl(e.i, e.x, e.y), r = t.next, s = e.prev;
        return t.next = e, e.prev = t, n.next = r, r.prev = n, i.next = n, n.prev = i, s.next = i, i.prev = s, i;
    }
    function Ml(t, e, n, i) {
        const r = new Sl(t, e, n);
        return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r;
    }
    function wl(t) {
        t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ);
    }
    function Sl(t, e, n) {
        this.i = t, this.x = e, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1;
    }
    class Tl {
        static area(t) {
            const e = t.length;
            let n = 0;
            for(let i = e - 1, r = 0; r < e; i = r++)n += t[i].x * t[r].y - t[r].x * t[i].y;
            return .5 * n;
        }
        static isClockWise(t) {
            return Tl.area(t) < 0;
        }
        static triangulateShape(t, e) {
            const n = [], i = [], r = [];
            El(t), Al(n, t);
            let s = t.length;
            e.forEach(El);
            for(let t145 = 0; t145 < e.length; t145++)i.push(s), s += e[t145].length, Al(n, e[t145]);
            const a = tl(n, i);
            for(let t146 = 0; t146 < a.length; t146 += 3)r.push(a.slice(t146, t146 + 3));
            return r;
        }
    }
    function El(t) {
        const e = t.length;
        e > 2 && t[e - 1].equals(t[0]) && t.pop();
    }
    function Al(t, e) {
        for(let n = 0; n < e.length; n++)t.push(e[n].x), t.push(e[n].y);
    }
    class Rl extends Vn {
        constructor(t154 = new $o([
            new Rt(.5, .5),
            new Rt(-0.5, .5),
            new Rt(-0.5, -0.5),
            new Rt(.5, -0.5)
        ]), e109 = {}){
            super(), this.type = "ExtrudeGeometry", this.parameters = {
                shapes: t154,
                options: e109
            }, t154 = Array.isArray(t154) ? t154 : [
                t154
            ];
            const n67 = this, i56 = [], r42 = [];
            for(let e104 = 0, n66 = t154.length; e104 < n66; e104++)s27(t154[e104]);
            function s27(t155) {
                const s28 = [], a23 = void 0 !== e109.curveSegments ? e109.curveSegments : 12, o18 = void 0 !== e109.steps ? e109.steps : 1;
                let l16 = void 0 !== e109.depth ? e109.depth : 1, c14 = void 0 === e109.bevelEnabled || e109.bevelEnabled, h8 = void 0 !== e109.bevelThickness ? e109.bevelThickness : .2, u9 = void 0 !== e109.bevelSize ? e109.bevelSize : h8 - .1, d6 = void 0 !== e109.bevelOffset ? e109.bevelOffset : 0, p7 = void 0 !== e109.bevelSegments ? e109.bevelSegments : 3;
                const m7 = e109.extrudePath, f4 = void 0 !== e109.UVGenerator ? e109.UVGenerator : Cl;
                void 0 !== e109.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), l16 = e109.amount);
                let g6, v, y, x, _, b = !1;
                m7 && (g6 = m7.getSpacedPoints(o18), b = !0, c14 = !1, v = m7.computeFrenetFrames(o18, !1), y = new se, x = new se, _ = new se), c14 || (p7 = 0, h8 = 0, u9 = 0, d6 = 0);
                const M = t155.extractPoints(a23);
                let w = M.shape;
                const S = M.holes;
                if (!Tl.isClockWise(w)) {
                    w = w.reverse();
                    for(let t = 0, e = S.length; t < e; t++){
                        const e = S[t];
                        Tl.isClockWise(e) && (S[t] = e.reverse());
                    }
                }
                const T = Tl.triangulateShape(w, S), E = w;
                for(let t147 = 0, e108 = S.length; t147 < e108; t147++){
                    const e = S[t147];
                    w = w.concat(e);
                }
                function A(t, e, n) {
                    return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(n).add(t);
                }
                const R = w.length, C = T.length;
                function L(t, e, n) {
                    let i, r, s;
                    const a = t.x - e.x, o = t.y - e.y, l = n.x - t.x, c = n.y - t.y, h = a * a + o * o, u = a * c - o * l;
                    if (Math.abs(u) > Number.EPSILON) {
                        const u = Math.sqrt(h), d = Math.sqrt(l * l + c * c), p = e.x - o / u, m = e.y + a / u, f = ((n.x - c / d - p) * c - (n.y + l / d - m) * l) / (a * c - o * l);
                        i = p + a * f - t.x, r = m + o * f - t.y;
                        const g = i * i + r * r;
                        if (g <= 2) return new Rt(i, r);
                        s = Math.sqrt(g / 2);
                    } else {
                        let t = !1;
                        a > Number.EPSILON ? l > Number.EPSILON && (t = !0) : a < -Number.EPSILON ? l < -Number.EPSILON && (t = !0) : Math.sign(o) === Math.sign(c) && (t = !0), t ? (i = -o, r = a, s = Math.sqrt(h)) : (i = a, r = o, s = Math.sqrt(h / 2));
                    }
                    return new Rt(i / s, r / s);
                }
                const P = [];
                for(let t148 = 0, e105 = E.length, n68 = e105 - 1, i57 = t148 + 1; t148 < e105; t148++, n68++, i57++)n68 === e105 && (n68 = 0), i57 === e105 && (i57 = 0), P[t148] = L(E[t148], E[n68], E[i57]);
                const D = [];
                let I, N = P.concat();
                for(let t149 = 0, e106 = S.length; t149 < e106; t149++){
                    const e = S[t149];
                    I = [];
                    for(let t = 0, n = e.length, i = n - 1, r = t + 1; t < n; t++, i++, r++)i === n && (i = 0), r === n && (r = 0), I[t] = L(e[t], e[i], e[r]);
                    D.push(I), N = N.concat(I);
                }
                for(let t150 = 0; t150 < p7; t150++){
                    const e = t150 / p7, n = h8 * Math.cos(e * Math.PI / 2), i = u9 * Math.sin(e * Math.PI / 2) + d6;
                    for(let t = 0, e110 = E.length; t < e110; t++){
                        const e = A(E[t], P[t], i);
                        z(e.x, e.y, -n);
                    }
                    for(let t156 = 0, e111 = S.length; t156 < e111; t156++){
                        const e = S[t156];
                        I = D[t156];
                        for(let t = 0, r = e.length; t < r; t++){
                            const r = A(e[t], I[t], i);
                            z(r.x, r.y, -n);
                        }
                    }
                }
                const B = u9 + d6;
                for(let t151 = 0; t151 < R; t151++){
                    const e = c14 ? A(w[t151], N[t151], B) : w[t151];
                    b ? (x.copy(v.normals[0]).multiplyScalar(e.x), y.copy(v.binormals[0]).multiplyScalar(e.y), _.copy(g6[0]).add(x).add(y), z(_.x, _.y, _.z)) : z(e.x, e.y, 0);
                }
                for(let t152 = 1; t152 <= o18; t152++)for(let e107 = 0; e107 < R; e107++){
                    const n = c14 ? A(w[e107], N[e107], B) : w[e107];
                    b ? (x.copy(v.normals[t152]).multiplyScalar(n.x), y.copy(v.binormals[t152]).multiplyScalar(n.y), _.copy(g6[t152]).add(x).add(y), z(_.x, _.y, _.z)) : z(n.x, n.y, l16 / o18 * t152);
                }
                for(let t153 = p7 - 1; t153 >= 0; t153--){
                    const e = t153 / p7, n = h8 * Math.cos(e * Math.PI / 2), i = u9 * Math.sin(e * Math.PI / 2) + d6;
                    for(let t = 0, e112 = E.length; t < e112; t++){
                        const e = A(E[t], P[t], i);
                        z(e.x, e.y, l16 + n);
                    }
                    for(let t157 = 0, e113 = S.length; t157 < e113; t157++){
                        const e = S[t157];
                        I = D[t157];
                        for(let t = 0, r = e.length; t < r; t++){
                            const r = A(e[t], I[t], i);
                            b ? z(r.x, r.y + g6[o18 - 1].y, g6[o18 - 1].x + n) : z(r.x, r.y, l16 + n);
                        }
                    }
                }
                function O(t, e) {
                    let n = t.length;
                    for(; --n >= 0;){
                        const i = n;
                        let r = n - 1;
                        r < 0 && (r = t.length - 1);
                        for(let t158 = 0, n69 = o18 + 2 * p7; t158 < n69; t158++){
                            const n = R * t158, s = R * (t158 + 1);
                            F(e + i + n, e + r + n, e + r + s, e + i + s);
                        }
                    }
                }
                function z(t, e, n) {
                    s28.push(t), s28.push(e), s28.push(n);
                }
                function U(t, e, r) {
                    H(t), H(e), H(r);
                    const s = i56.length / 3, a = f4.generateTopUV(n67, i56, s - 3, s - 2, s - 1);
                    G(a[0]), G(a[1]), G(a[2]);
                }
                function F(t, e, r, s) {
                    H(t), H(e), H(s), H(e), H(r), H(s);
                    const a = i56.length / 3, o = f4.generateSideWallUV(n67, i56, a - 6, a - 3, a - 2, a - 1);
                    G(o[0]), G(o[1]), G(o[3]), G(o[1]), G(o[2]), G(o[3]);
                }
                function H(t) {
                    i56.push(s28[3 * t + 0]), i56.push(s28[3 * t + 1]), i56.push(s28[3 * t + 2]);
                }
                function G(t) {
                    r42.push(t.x), r42.push(t.y);
                }
                !function() {
                    const t = i56.length / 3;
                    if (c14) {
                        let t = 0, e = R * t;
                        for(let t159 = 0; t159 < C; t159++){
                            const n = T[t159];
                            U(n[2] + e, n[1] + e, n[0] + e);
                        }
                        t = o18 + 2 * p7, e = R * t;
                        for(let t160 = 0; t160 < C; t160++){
                            const n = T[t160];
                            U(n[0] + e, n[1] + e, n[2] + e);
                        }
                    } else {
                        for(let t = 0; t < C; t++){
                            const e = T[t];
                            U(e[2], e[1], e[0]);
                        }
                        for(let t161 = 0; t161 < C; t161++){
                            const e = T[t161];
                            U(e[0] + R * o18, e[1] + R * o18, e[2] + R * o18);
                        }
                    }
                    n67.addGroup(t, i56.length / 3 - t, 0);
                }(), function() {
                    const t = i56.length / 3;
                    let e = 0;
                    O(E, e), e += E.length;
                    for(let t162 = 0, n = S.length; t162 < n; t162++){
                        const n = S[t162];
                        O(n, e), e += n.length;
                    }
                    n67.addGroup(t, i56.length / 3 - t, 1);
                }();
            }
            this.setAttribute("position", new Nn(i56, 3)), this.setAttribute("uv", new Nn(r42, 2)), this.computeVertexNormals();
        }
        toJSON() {
            const t163 = super.toJSON();
            return function(t, e, n) {
                if (n.shapes = [], Array.isArray(t)) for(let e114 = 0, i = t.length; e114 < i; e114++){
                    const i = t[e114];
                    n.shapes.push(i.uuid);
                }
                else n.shapes.push(t.uuid);
                void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON());
                return n;
            }(this.parameters.shapes, this.parameters.options, t163);
        }
        static fromJSON(t, e) {
            const n = [];
            for(let i = 0, r = t.shapes.length; i < r; i++){
                const r = e[t.shapes[i]];
                n.push(r);
            }
            const i58 = t.options.extrudePath;
            return void 0 !== i58 && (t.options.extrudePath = (new Uo[i58.type]).fromJSON(i58)), new Rl(n, t.options);
        }
    }
    const Cl = {
        generateTopUV: function(t, e, n, i, r) {
            const s = e[3 * n], a = e[3 * n + 1], o = e[3 * i], l = e[3 * i + 1], c = e[3 * r], h = e[3 * r + 1];
            return [
                new Rt(s, a),
                new Rt(o, l),
                new Rt(c, h)
            ];
        },
        generateSideWallUV: function(t, e, n, i, r, s) {
            const a = e[3 * n], o = e[3 * n + 1], l = e[3 * n + 2], c = e[3 * i], h = e[3 * i + 1], u = e[3 * i + 2], d = e[3 * r], p = e[3 * r + 1], m = e[3 * r + 2], f = e[3 * s], g = e[3 * s + 1], v = e[3 * s + 2];
            return Math.abs(o - h) < Math.abs(a - c) ? [
                new Rt(a, 1 - l),
                new Rt(c, 1 - u),
                new Rt(d, 1 - m),
                new Rt(f, 1 - v)
            ] : [
                new Rt(o, 1 - l),
                new Rt(h, 1 - u),
                new Rt(p, 1 - m),
                new Rt(g, 1 - v)
            ];
        }
    };
    class Ll extends qo {
        constructor(t = 1, e = 0){
            const n = (1 + Math.sqrt(5)) / 2;
            super([
                -1,
                n,
                0,
                1,
                n,
                0,
                -1,
                -n,
                0,
                1,
                -n,
                0,
                0,
                -1,
                n,
                0,
                1,
                n,
                0,
                -1,
                -n,
                0,
                1,
                -n,
                n,
                0,
                -1,
                n,
                0,
                1,
                -n,
                0,
                -1,
                -n,
                0,
                1
            ], [
                0,
                11,
                5,
                0,
                5,
                1,
                0,
                1,
                7,
                0,
                7,
                10,
                0,
                10,
                11,
                1,
                5,
                9,
                5,
                11,
                4,
                11,
                10,
                2,
                10,
                7,
                6,
                7,
                1,
                8,
                3,
                9,
                4,
                3,
                4,
                2,
                3,
                2,
                6,
                3,
                6,
                8,
                3,
                8,
                9,
                4,
                9,
                5,
                2,
                4,
                11,
                6,
                2,
                10,
                8,
                6,
                7,
                9,
                8,
                1
            ], t, e), this.type = "IcosahedronGeometry", this.parameters = {
                radius: t,
                detail: e
            };
        }
        static fromJSON(t) {
            return new Ll(t.radius, t.detail);
        }
    }
    class Pl extends qo {
        constructor(t = 1, e = 0){
            super([
                1,
                0,
                0,
                -1,
                0,
                0,
                0,
                1,
                0,
                0,
                -1,
                0,
                0,
                0,
                1,
                0,
                0,
                -1
            ], [
                0,
                2,
                4,
                0,
                4,
                3,
                0,
                3,
                5,
                0,
                5,
                2,
                1,
                2,
                5,
                1,
                5,
                3,
                1,
                3,
                4,
                1,
                4,
                2
            ], t, e), this.type = "OctahedronGeometry", this.parameters = {
                radius: t,
                detail: e
            };
        }
        static fromJSON(t) {
            return new Pl(t.radius, t.detail);
        }
    }
    class Dl extends Vn {
        constructor(t = .5, e = 1, n = 8, i = 1, r = 0, s = 2 * Math.PI){
            super(), this.type = "RingGeometry", this.parameters = {
                innerRadius: t,
                outerRadius: e,
                thetaSegments: n,
                phiSegments: i,
                thetaStart: r,
                thetaLength: s
            }, n = Math.max(3, n);
            const a = [], o = [], l = [], c = [];
            let h = t;
            const u = (e - t) / (i = Math.max(1, i)), d = new se, p = new Rt;
            for(let t164 = 0; t164 <= i; t164++){
                for(let t = 0; t <= n; t++){
                    const i = r + t / n * s;
                    d.x = h * Math.cos(i), d.y = h * Math.sin(i), o.push(d.x, d.y, d.z), l.push(0, 0, 1), p.x = (d.x / e + 1) / 2, p.y = (d.y / e + 1) / 2, c.push(p.x, p.y);
                }
                h += u;
            }
            for(let t165 = 0; t165 < i; t165++){
                const e = t165 * (n + 1);
                for(let t = 0; t < n; t++){
                    const i = t + e, r = i, s = i + n + 1, o = i + n + 2, l = i + 1;
                    a.push(r, s, l), a.push(s, o, l);
                }
            }
            this.setIndex(a), this.setAttribute("position", new Nn(o, 3)), this.setAttribute("normal", new Nn(l, 3)), this.setAttribute("uv", new Nn(c, 2));
        }
        static fromJSON(t) {
            return new Dl(t.innerRadius, t.outerRadius, t.thetaSegments, t.phiSegments, t.thetaStart, t.thetaLength);
        }
    }
    class Il extends Vn {
        constructor(t170 = new $o([
            new Rt(0, .5),
            new Rt(-0.5, -0.5),
            new Rt(.5, -0.5)
        ]), e120 = 12){
            super(), this.type = "ShapeGeometry", this.parameters = {
                shapes: t170,
                curveSegments: e120
            };
            const n = [], i59 = [], r43 = [], s29 = [];
            let a24 = 0, o = 0;
            if (!1 === Array.isArray(t170)) l17(t170);
            else for(let e115 = 0; e115 < t170.length; e115++)l17(t170[e115]), this.addGroup(a24, o, e115), a24 += o, o = 0;
            function l17(t) {
                const a = i59.length / 3, l = t.extractPoints(e120);
                let c = l.shape;
                const h = l.holes;
                !1 === Tl.isClockWise(c) && (c = c.reverse());
                for(let t166 = 0, e119 = h.length; t166 < e119; t166++){
                    const e = h[t166];
                    !0 === Tl.isClockWise(e) && (h[t166] = e.reverse());
                }
                const u = Tl.triangulateShape(c, h);
                for(let t167 = 0, e116 = h.length; t167 < e116; t167++){
                    const e = h[t167];
                    c = c.concat(e);
                }
                for(let t168 = 0, e117 = c.length; t168 < e117; t168++){
                    const e = c[t168];
                    i59.push(e.x, e.y, 0), r43.push(0, 0, 1), s29.push(e.x, e.y);
                }
                for(let t169 = 0, e118 = u.length; t169 < e118; t169++){
                    const e = u[t169], i = e[0] + a, r = e[1] + a, s = e[2] + a;
                    n.push(i, r, s), o += 3;
                }
            }
            this.setIndex(n), this.setAttribute("position", new Nn(i59, 3)), this.setAttribute("normal", new Nn(r43, 3)), this.setAttribute("uv", new Nn(s29, 2));
        }
        toJSON() {
            const t171 = super.toJSON();
            return function(t, e) {
                if (e.shapes = [], Array.isArray(t)) for(let n = 0, i = t.length; n < i; n++){
                    const i = t[n];
                    e.shapes.push(i.uuid);
                }
                else e.shapes.push(t.uuid);
                return e;
            }(this.parameters.shapes, t171);
        }
        static fromJSON(t, e) {
            const n = [];
            for(let i = 0, r = t.shapes.length; i < r; i++){
                const r = e[t.shapes[i]];
                n.push(r);
            }
            return new Il(n, t.curveSegments);
        }
    }
    class Nl extends Vn {
        constructor(t = 1, e = 32, n = 16, i = 0, r = 2 * Math.PI, s = 0, a = Math.PI){
            super(), this.type = "SphereGeometry", this.parameters = {
                radius: t,
                widthSegments: e,
                heightSegments: n,
                phiStart: i,
                phiLength: r,
                thetaStart: s,
                thetaLength: a
            }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
            const o = Math.min(s + a, Math.PI);
            let l = 0;
            const c = [], h = new se, u = new se, d = [], p = [], m = [], f = [];
            for(let d7 = 0; d7 <= n; d7++){
                const g = [], v = d7 / n;
                let y = 0;
                0 == d7 && 0 == s ? y = .5 / e : d7 == n && o == Math.PI && (y = -0.5 / e);
                for(let n70 = 0; n70 <= e; n70++){
                    const o = n70 / e;
                    h.x = -t * Math.cos(i + o * r) * Math.sin(s + v * a), h.y = t * Math.cos(s + v * a), h.z = t * Math.sin(i + o * r) * Math.sin(s + v * a), p.push(h.x, h.y, h.z), u.copy(h).normalize(), m.push(u.x, u.y, u.z), f.push(o + y, 1 - v), g.push(l++);
                }
                c.push(g);
            }
            for(let t172 = 0; t172 < n; t172++)for(let i60 = 0; i60 < e; i60++){
                const e = c[t172][i60 + 1], r = c[t172][i60], a = c[t172 + 1][i60], l = c[t172 + 1][i60 + 1];
                (0 !== t172 || s > 0) && d.push(e, r, l), (t172 !== n - 1 || o < Math.PI) && d.push(r, a, l);
            }
            this.setIndex(d), this.setAttribute("position", new Nn(p, 3)), this.setAttribute("normal", new Nn(m, 3)), this.setAttribute("uv", new Nn(f, 2));
        }
        static fromJSON(t) {
            return new Nl(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
        }
    }
    class Bl extends qo {
        constructor(t = 1, e = 0){
            super([
                1,
                1,
                1,
                -1,
                -1,
                1,
                -1,
                1,
                -1,
                1,
                -1,
                -1
            ], [
                2,
                1,
                0,
                0,
                3,
                2,
                1,
                3,
                0,
                2,
                3,
                1
            ], t, e), this.type = "TetrahedronGeometry", this.parameters = {
                radius: t,
                detail: e
            };
        }
        static fromJSON(t) {
            return new Bl(t.radius, t.detail);
        }
    }
    class Ol extends Vn {
        constructor(t = 1, e = .4, n = 8, i = 6, r = 2 * Math.PI){
            super(), this.type = "TorusGeometry", this.parameters = {
                radius: t,
                tube: e,
                radialSegments: n,
                tubularSegments: i,
                arc: r
            }, n = Math.floor(n), i = Math.floor(i);
            const s = [], a = [], o = [], l = [], c = new se, h = new se, u = new se;
            for(let s30 = 0; s30 <= n; s30++)for(let d = 0; d <= i; d++){
                const p = d / i * r, m = s30 / n * Math.PI * 2;
                h.x = (t + e * Math.cos(m)) * Math.cos(p), h.y = (t + e * Math.cos(m)) * Math.sin(p), h.z = e * Math.sin(m), a.push(h.x, h.y, h.z), c.x = t * Math.cos(p), c.y = t * Math.sin(p), u.subVectors(h, c).normalize(), o.push(u.x, u.y, u.z), l.push(d / i), l.push(s30 / n);
            }
            for(let t173 = 1; t173 <= n; t173++)for(let e121 = 1; e121 <= i; e121++){
                const n = (i + 1) * t173 + e121 - 1, r = (i + 1) * (t173 - 1) + e121 - 1, a = (i + 1) * (t173 - 1) + e121, o = (i + 1) * t173 + e121;
                s.push(n, r, o), s.push(r, a, o);
            }
            this.setIndex(s), this.setAttribute("position", new Nn(a, 3)), this.setAttribute("normal", new Nn(o, 3)), this.setAttribute("uv", new Nn(l, 2));
        }
        static fromJSON(t) {
            return new Ol(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc);
        }
    }
    class zl extends Vn {
        constructor(t176 = 1, e123 = .4, n71 = 64, i61 = 8, r44 = 2, s31 = 3){
            super(), this.type = "TorusKnotGeometry", this.parameters = {
                radius: t176,
                tube: e123,
                tubularSegments: n71,
                radialSegments: i61,
                p: r44,
                q: s31
            }, n71 = Math.floor(n71), i61 = Math.floor(i61);
            const a26 = [], o19 = [], l18 = [], c = [], h = new se, u = new se, d = new se, p = new se, m = new se, f = new se, g = new se;
            for(let a25 = 0; a25 <= n71; ++a25){
                const y = a25 / n71 * r44 * Math.PI * 2;
                v(y, r44, s31, t176, d), v(y + .01, r44, s31, t176, p), f.subVectors(p, d), g.addVectors(p, d), m.crossVectors(f, g), g.crossVectors(m, f), m.normalize(), g.normalize();
                for(let t175 = 0; t175 <= i61; ++t175){
                    const r = t175 / i61 * Math.PI * 2, s = -e123 * Math.cos(r), p = e123 * Math.sin(r);
                    h.x = d.x + (s * g.x + p * m.x), h.y = d.y + (s * g.y + p * m.y), h.z = d.z + (s * g.z + p * m.z), o19.push(h.x, h.y, h.z), u.subVectors(h, d).normalize(), l18.push(u.x, u.y, u.z), c.push(a25 / n71), c.push(t175 / i61);
                }
            }
            for(let t174 = 1; t174 <= n71; t174++)for(let e122 = 1; e122 <= i61; e122++){
                const n = (i61 + 1) * (t174 - 1) + (e122 - 1), r = (i61 + 1) * t174 + (e122 - 1), s = (i61 + 1) * t174 + e122, o = (i61 + 1) * (t174 - 1) + e122;
                a26.push(n, r, o), a26.push(r, s, o);
            }
            function v(t, e, n, i, r) {
                const s = Math.cos(t), a = Math.sin(t), o = n / e * t, l = Math.cos(o);
                r.x = i * (2 + l) * .5 * s, r.y = i * (2 + l) * a * .5, r.z = i * Math.sin(o) * .5;
            }
            this.setIndex(a26), this.setAttribute("position", new Nn(o19, 3)), this.setAttribute("normal", new Nn(l18, 3)), this.setAttribute("uv", new Nn(c, 2));
        }
        static fromJSON(t) {
            return new zl(t.radius, t.tube, t.tubularSegments, t.radialSegments, t.p, t.q);
        }
    }
    class Ul extends Vn {
        constructor(t178 = new Oo(new se(-1, -1, 0), new se(-1, 1, 0), new se(1, 1, 0)), e124 = 64, n72 = 1, i = 8, r45 = !1){
            super(), this.type = "TubeGeometry", this.parameters = {
                path: t178,
                tubularSegments: e124,
                radius: n72,
                radialSegments: i,
                closed: r45
            };
            const s32 = t178.computeFrenetFrames(e124, r45);
            this.tangents = s32.tangents, this.normals = s32.normals, this.binormals = s32.binormals;
            const a27 = new se, o = new se, l19 = new Rt;
            let c = new se;
            const h = [], u = [], d8 = [], p = [];
            function m(r) {
                c = t178.getPointAt(r / e124, c);
                const l = s32.normals[r], d = s32.binormals[r];
                for(let t177 = 0; t177 <= i; t177++){
                    const e = t177 / i * Math.PI * 2, r = Math.sin(e), s = -Math.cos(e);
                    o.x = s * l.x + r * d.x, o.y = s * l.y + r * d.y, o.z = s * l.z + r * d.z, o.normalize(), u.push(o.x, o.y, o.z), a27.x = c.x + n72 * o.x, a27.y = c.y + n72 * o.y, a27.z = c.z + n72 * o.z, h.push(a27.x, a27.y, a27.z);
                }
            }
            !function() {
                for(let t179 = 0; t179 < e124; t179++)m(t179);
                m(!1 === r45 ? e124 : 0), function() {
                    for(let t = 0; t <= e124; t++)for(let n = 0; n <= i; n++)l19.x = t / e124, l19.y = n / i, d8.push(l19.x, l19.y);
                }(), function() {
                    for(let t = 1; t <= e124; t++)for(let e = 1; e <= i; e++){
                        const n = (i + 1) * (t - 1) + (e - 1), r = (i + 1) * t + (e - 1), s = (i + 1) * t + e, a = (i + 1) * (t - 1) + e;
                        p.push(n, r, a), p.push(r, s, a);
                    }
                }();
            }(), this.setIndex(p), this.setAttribute("position", new Nn(h, 3)), this.setAttribute("normal", new Nn(u, 3)), this.setAttribute("uv", new Nn(d8, 2));
        }
        toJSON() {
            const t = super.toJSON();
            return t.path = this.parameters.path.toJSON(), t;
        }
        static fromJSON(t) {
            return new Ul((new Uo[t.path.type]).fromJSON(t.path), t.tubularSegments, t.radius, t.radialSegments, t.closed);
        }
    }
    class Fl extends Vn {
        constructor(t = null){
            if (super(), this.type = "WireframeGeometry", this.parameters = {
                geometry: t
            }, null !== t) {
                const e = [], n = new Set, i = new se, r = new se;
                if (null !== t.index) {
                    const s = t.attributes.position, a = t.index;
                    let o = t.groups;
                    0 === o.length && (o = [
                        {
                            start: 0,
                            count: a.count,
                            materialIndex: 0
                        }
                    ]);
                    for(let t180 = 0, l = o.length; t180 < l; ++t180){
                        const l = o[t180], c = l.start;
                        for(let t = c, o21 = c + l.count; t < o21; t += 3)for(let o20 = 0; o20 < 3; o20++){
                            const l = a.getX(t + o20), c = a.getX(t + (o20 + 1) % 3);
                            i.fromBufferAttribute(s, l), r.fromBufferAttribute(s, c), !0 === Hl(i, r, n) && (e.push(i.x, i.y, i.z), e.push(r.x, r.y, r.z));
                        }
                    }
                } else {
                    const s = t.attributes.position;
                    for(let t182 = 0, a = s.count / 3; t182 < a; t182++)for(let a28 = 0; a28 < 3; a28++){
                        const o = 3 * t182 + a28, l = 3 * t182 + (a28 + 1) % 3;
                        i.fromBufferAttribute(s, o), r.fromBufferAttribute(s, l), !0 === Hl(i, r, n) && (e.push(i.x, i.y, i.z), e.push(r.x, r.y, r.z));
                    }
                }
                this.setAttribute("position", new Nn(e, 3));
            }
        }
    }
    function Hl(t, e, n) {
        const i = `${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`, r = `${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;
        return !0 !== n.has(i) && !0 !== n.has(r) && (n.add(i), n.add(r), !0);
    }
    var Gl = Object.freeze({
        __proto__: null,
        BoxGeometry: ci,
        BoxBufferGeometry: ci,
        CapsuleGeometry: ko,
        CapsuleBufferGeometry: ko,
        CircleGeometry: Vo,
        CircleBufferGeometry: Vo,
        ConeGeometry: jo,
        ConeBufferGeometry: jo,
        CylinderGeometry: Wo,
        CylinderBufferGeometry: Wo,
        DodecahedronGeometry: Xo,
        DodecahedronBufferGeometry: Xo,
        EdgesGeometry: Qo,
        ExtrudeGeometry: Rl,
        ExtrudeBufferGeometry: Rl,
        IcosahedronGeometry: Ll,
        IcosahedronBufferGeometry: Ll,
        LatheGeometry: Go,
        LatheBufferGeometry: Go,
        OctahedronGeometry: Pl,
        OctahedronBufferGeometry: Pl,
        PlaneGeometry: Ci,
        PlaneBufferGeometry: Ci,
        PolyhedronGeometry: qo,
        PolyhedronBufferGeometry: qo,
        RingGeometry: Dl,
        RingBufferGeometry: Dl,
        ShapeGeometry: Il,
        ShapeBufferGeometry: Il,
        SphereGeometry: Nl,
        SphereBufferGeometry: Nl,
        TetrahedronGeometry: Bl,
        TetrahedronBufferGeometry: Bl,
        TorusGeometry: Ol,
        TorusBufferGeometry: Ol,
        TorusKnotGeometry: zl,
        TorusKnotBufferGeometry: zl,
        TubeGeometry: Ul,
        TubeBufferGeometry: Ul,
        WireframeGeometry: Fl
    });
    class kl extends bn {
        constructor(t){
            super(), this.type = "ShadowMaterial", this.color = new Wt(0), this.transparent = !0, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), this;
        }
    }
    kl.prototype.isShadowMaterial = !0;
    class Vl extends pi {
        constructor(t){
            super(t), this.type = "RawShaderMaterial";
        }
    }
    Vl.prototype.isRawShaderMaterial = !0;
    class Wl extends bn {
        constructor(t){
            super(), this.defines = {
                STANDARD: ""
            }, this.type = "MeshStandardMaterial", this.color = new Wt(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Wt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Rt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.defines = {
                STANDARD: ""
            }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this;
        }
    }
    Wl.prototype.isMeshStandardMaterial = !0;
    class jl extends Wl {
        constructor(t184){
            super(), this.defines = {
                STANDARD: "",
                PHYSICAL: ""
            }, this.type = "MeshPhysicalMaterial", this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Rt(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
                get: function() {
                    return bt1(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
                },
                set: function(t) {
                    this.ior = (1 + .4 * t) / (1 - .4 * t);
                }
            }), this.sheenColor = new Wt(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 0, this.attenuationColor = new Wt(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Wt(1, 1, 1), this.specularColorMap = null, this._sheen = 0, this._clearcoat = 0, this._transmission = 0, this.setValues(t184);
        }
        get sheen() {
            return this._sheen;
        }
        set sheen(t) {
            this._sheen > 0 != t > 0 && this.version++, this._sheen = t;
        }
        get clearcoat() {
            return this._clearcoat;
        }
        set clearcoat(t) {
            this._clearcoat > 0 != t > 0 && this.version++, this._clearcoat = t;
        }
        get transmission() {
            return this._transmission;
        }
        set transmission(t) {
            this._transmission > 0 != t > 0 && this.version++, this._transmission = t;
        }
        copy(t) {
            return super.copy(t), this.defines = {
                STANDARD: "",
                PHYSICAL: ""
            }, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.ior = t.ior, this.sheen = t.sheen, this.sheenColor.copy(t.sheenColor), this.sheenColorMap = t.sheenColorMap, this.sheenRoughness = t.sheenRoughness, this.sheenRoughnessMap = t.sheenRoughnessMap, this.transmission = t.transmission, this.transmissionMap = t.transmissionMap, this.thickness = t.thickness, this.thicknessMap = t.thicknessMap, this.attenuationDistance = t.attenuationDistance, this.attenuationColor.copy(t.attenuationColor), this.specularIntensity = t.specularIntensity, this.specularIntensityMap = t.specularIntensityMap, this.specularColor.copy(t.specularColor), this.specularColorMap = t.specularColorMap, this;
        }
    }
    jl.prototype.isMeshPhysicalMaterial = !0;
    class ql extends bn {
        constructor(t){
            super(), this.type = "MeshPhongMaterial", this.color = new Wt(16777215), this.specular = new Wt(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Wt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Rt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this;
        }
    }
    ql.prototype.isMeshPhongMaterial = !0;
    class Xl extends bn {
        constructor(t){
            super(), this.defines = {
                TOON: ""
            }, this.type = "MeshToonMaterial", this.color = new Wt(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Wt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Rt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), this.map = t.map, this.gradientMap = t.gradientMap, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this;
        }
    }
    Xl.prototype.isMeshToonMaterial = !0;
    class Jl extends bn {
        constructor(t){
            super(), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Rt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.flatShading = !1, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.flatShading = t.flatShading, this;
        }
    }
    Jl.prototype.isMeshNormalMaterial = !0;
    class Yl extends bn {
        constructor(t){
            super(), this.type = "MeshLambertMaterial", this.color = new Wt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Wt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this;
        }
    }
    Yl.prototype.isMeshLambertMaterial = !0;
    class Zl extends bn {
        constructor(t){
            super(), this.defines = {
                MATCAP: ""
            }, this.type = "MeshMatcapMaterial", this.color = new Wt(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Rt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = !1, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.defines = {
                MATCAP: ""
            }, this.color.copy(t.color), this.matcap = t.matcap, this.map = t.map, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.flatShading = t.flatShading, this;
        }
    }
    Zl.prototype.isMeshMatcapMaterial = !0;
    class Kl extends Za {
        constructor(t){
            super(), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this;
        }
    }
    Kl.prototype.isLineDashedMaterial = !0;
    const Ql = {
        ShadowMaterial: kl,
        SpriteMaterial: ma,
        RawShaderMaterial: Vl,
        ShaderMaterial: pi,
        PointsMaterial: oo,
        MeshPhysicalMaterial: jl,
        MeshStandardMaterial: Wl,
        MeshPhongMaterial: ql,
        MeshToonMaterial: Xl,
        MeshNormalMaterial: Jl,
        MeshLambertMaterial: Yl,
        MeshDepthMaterial: Xs,
        MeshDistanceMaterial: Js,
        MeshBasicMaterial: Mn,
        MeshMatcapMaterial: Zl,
        LineDashedMaterial: Kl,
        LineBasicMaterial: Za,
        Material: bn
    };
    bn.fromType = function(t) {
        return new Ql[t];
    };
    const $l = {
        arraySlice: function(t, e, n) {
            return $l.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length)) : t.slice(e, n);
        },
        convertArray: function(t, e, n) {
            return !t || !n && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t);
        },
        isTypedArray: function(t) {
            return ArrayBuffer.isView(t) && !(t instanceof DataView);
        },
        getKeyframeOrder: function(t) {
            const e125 = t.length, n73 = new Array(e125);
            for(let t185 = 0; t185 !== e125; ++t185)n73[t185] = t185;
            return n73.sort(function(e, n) {
                return t[e] - t[n];
            }), n73;
        },
        sortedArray: function(t, e, n) {
            const i = t.length, r = new t.constructor(i);
            for(let s = 0, a = 0; a !== i; ++s){
                const i = n[s] * e;
                for(let n74 = 0; n74 !== e; ++n74)r[a++] = t[i + n74];
            }
            return r;
        },
        flattenJSON: function(t, e, n, i) {
            let r = 1, s = t[0];
            for(; void 0 !== s && void 0 === s[i];)s = t[r++];
            if (void 0 === s) return;
            let a = s[i];
            if (void 0 !== a) {
                if (Array.isArray(a)) do a = s[i], void 0 !== a && (e.push(s.time), n.push.apply(n, a)), s = t[r++];
                while (void 0 !== s);
                else if (void 0 !== a.toArray) do a = s[i], void 0 !== a && (e.push(s.time), a.toArray(n, n.length)), s = t[r++];
                while (void 0 !== s);
                else do a = s[i], void 0 !== a && (e.push(s.time), n.push(a)), s = t[r++];
                while (void 0 !== s);
            }
        },
        subclip: function(t, e, n, i, r = 30) {
            const s = t.clone();
            s.name = e;
            const a = [];
            for(let t186 = 0; t186 < s.tracks.length; ++t186){
                const e = s.tracks[t186], o = e.getValueSize(), l = [], c = [];
                for(let t = 0; t < e.times.length; ++t){
                    const s = e.times[t] * r;
                    if (!(s < n || s >= i)) {
                        l.push(e.times[t]);
                        for(let n = 0; n < o; ++n)c.push(e.values[t * o + n]);
                    }
                }
                0 !== l.length && (e.times = $l.convertArray(l, e.times.constructor), e.values = $l.convertArray(c, e.values.constructor), a.push(e));
            }
            s.tracks = a;
            let o = 1 / 0;
            for(let t187 = 0; t187 < s.tracks.length; ++t187)o > s.tracks[t187].times[0] && (o = s.tracks[t187].times[0]);
            for(let t188 = 0; t188 < s.tracks.length; ++t188)s.tracks[t188].shift(-1 * o);
            return s.resetDuration(), s;
        },
        makeClipAdditive: function(t190, e = 0, n = t190, i = 30) {
            i <= 0 && (i = 30);
            const r = n.tracks.length, s = e / i;
            for(let e126 = 0; e126 < r; ++e126){
                const i = n.tracks[e126], r = i.ValueTypeName;
                if ("bool" === r || "string" === r) continue;
                const a = t190.tracks.find(function(t) {
                    return t.name === i.name && t.ValueTypeName === r;
                });
                if (void 0 === a) continue;
                let o = 0;
                const l = i.getValueSize();
                i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (o = l / 3);
                let c = 0;
                const h = a.getValueSize();
                a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (c = h / 3);
                const u = i.times.length - 1;
                let d;
                if (s <= i.times[0]) {
                    const t = o, e = l - o;
                    d = $l.arraySlice(i.values, t, e);
                } else if (s >= i.times[u]) {
                    const t = u * l + o, e = t + l - o;
                    d = $l.arraySlice(i.values, t, e);
                } else {
                    const t = i.createInterpolant(), e = o, n = l - o;
                    t.evaluate(s), d = $l.arraySlice(t.resultBuffer, e, n);
                }
                if ("quaternion" === r) (new re).fromArray(d).normalize().conjugate().toArray(d);
                const p = a.times.length;
                for(let t189 = 0; t189 < p; ++t189){
                    const e = t189 * h + c;
                    if ("quaternion" === r) re.multiplyQuaternionsFlat(a.values, e, d, 0, a.values, e);
                    else {
                        const t = h - 2 * c;
                        for(let n = 0; n < t; ++n)a.values[e + n] -= d[n];
                    }
                }
            }
            return t190.blendMode = st1, t190;
        }
    };
    class tc {
        constructor(t, e, n, i){
            this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new e.constructor(n), this.sampleValues = e, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
        }
        evaluate(t) {
            const e = this.parameterPositions;
            let n = this._cachedIndex, i = e[n], r = e[n - 1];
            t: {
                e: {
                    let s;
                    n: {
                        i: if (!(t < i)) {
                            for(let s33 = n + 2;;){
                                if (void 0 === i) {
                                    if (t < r) break i;
                                    return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, t, r);
                                }
                                if (n === s33) break;
                                if (r = i, i = e[++n], t < i) break e;
                            }
                            s = e.length;
                            break n;
                        }
                        if (t >= r) break t;
                        {
                            const a = e[1];
                            t < a && (n = 2, r = a);
                            for(let s35 = n - 2;;){
                                if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, i);
                                if (n === s35) break;
                                if (i = r, r = e[--n - 1], t >= r) break e;
                            }
                            s = n, n = 0;
                        }
                    }
                    for(; n < s;){
                        const i = n + s >>> 1;
                        t < e[i] ? s = i : n = i + 1;
                    }
                    if (i = e[n], r = e[n - 1], void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, i);
                    if (void 0 === i) return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, r, t);
                }
                this._cachedIndex = n, this.intervalChanged_(n, r, i);
            }
            return this.interpolate_(n, r, t, i);
        }
        getSettings_() {
            return this.settings || this.DefaultSettings_;
        }
        copySampleValue_(t) {
            const e = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = t * i;
            for(let t191 = 0; t191 !== i; ++t191)e[t191] = n[r + t191];
            return e;
        }
        interpolate_() {
            throw new Error("call to abstract method");
        }
        intervalChanged_() {}
    }
    tc.prototype.beforeStart_ = tc.prototype.copySampleValue_, tc.prototype.afterEnd_ = tc.prototype.copySampleValue_;
    class ec extends tc {
        constructor(t, e, n, i){
            super(t, e, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
                endingStart: et1,
                endingEnd: et1
            };
        }
        intervalChanged_(t, e, n) {
            const i = this.parameterPositions;
            let r = t - 2, s = t + 1, a = i[r], o = i[s];
            if (void 0 === a) switch(this.getSettings_().endingStart){
                case nt1:
                    r = t, a = 2 * e - n;
                    break;
                case it1:
                    r = i.length - 2, a = e + i[r] - i[r + 1];
                    break;
                default:
                    r = t, a = n;
            }
            if (void 0 === o) switch(this.getSettings_().endingEnd){
                case nt1:
                    s = t, o = 2 * n - e;
                    break;
                case it1:
                    s = 1, o = n + i[1] - i[0];
                    break;
                default:
                    s = t - 1, o = e;
            }
            const l = .5 * (n - e), c = this.valueSize;
            this._weightPrev = l / (e - a), this._weightNext = l / (o - n), this._offsetPrev = r * c, this._offsetNext = s * c;
        }
        interpolate_(t, e, n, i) {
            const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = t * a, l = o - a, c = this._offsetPrev, h = this._offsetNext, u = this._weightPrev, d = this._weightNext, p = (n - e) / (i - e), m = p * p, f = m * p, g = -u * f + 2 * u * m - u * p, v = (1 + u) * f + (-1.5 - 2 * u) * m + (-0.5 + u) * p + 1, y = (-1 - d) * f + (1.5 + d) * m + .5 * p, x = d * f - d * m;
            for(let t192 = 0; t192 !== a; ++t192)r[t192] = g * s[c + t192] + v * s[l + t192] + y * s[o + t192] + x * s[h + t192];
            return r;
        }
    }
    class nc extends tc {
        constructor(t, e, n, i){
            super(t, e, n, i);
        }
        interpolate_(t, e, n, i) {
            const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = t * a, l = o - a, c = (n - e) / (i - e), h = 1 - c;
            for(let t193 = 0; t193 !== a; ++t193)r[t193] = s[l + t193] * h + s[o + t193] * c;
            return r;
        }
    }
    class ic extends tc {
        constructor(t, e, n, i){
            super(t, e, n, i);
        }
        interpolate_(t) {
            return this.copySampleValue_(t - 1);
        }
    }
    class rc {
        constructor(t, e, n, i){
            if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
            if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
            this.name = t, this.times = $l.convertArray(e, this.TimeBufferType), this.values = $l.convertArray(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
        }
        static toJSON(t) {
            const e = t.constructor;
            let n;
            if (e.toJSON !== this.toJSON) n = e.toJSON(t);
            else {
                n = {
                    name: t.name,
                    times: $l.convertArray(t.times, Array),
                    values: $l.convertArray(t.values, Array)
                };
                const e = t.getInterpolation();
                e !== t.DefaultInterpolation && (n.interpolation = e);
            }
            return n.type = t.ValueTypeName, n;
        }
        InterpolantFactoryMethodDiscrete(t) {
            return new ic(this.times, this.values, this.getValueSize(), t);
        }
        InterpolantFactoryMethodLinear(t) {
            return new nc(this.times, this.values, this.getValueSize(), t);
        }
        InterpolantFactoryMethodSmooth(t) {
            return new ec(this.times, this.values, this.getValueSize(), t);
        }
        setInterpolation(t) {
            let e;
            switch(t){
                case Q1:
                    e = this.InterpolantFactoryMethodDiscrete;
                    break;
                case $1:
                    e = this.InterpolantFactoryMethodLinear;
                    break;
                case tt1:
                    e = this.InterpolantFactoryMethodSmooth;
            }
            if (void 0 === e) {
                const e = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                if (void 0 === this.createInterpolant) {
                    if (t === this.DefaultInterpolation) throw new Error(e);
                    this.setInterpolation(this.DefaultInterpolation);
                }
                return console.warn("THREE.KeyframeTrack:", e), this;
            }
            return this.createInterpolant = e, this;
        }
        getInterpolation() {
            switch(this.createInterpolant){
                case this.InterpolantFactoryMethodDiscrete:
                    return Q1;
                case this.InterpolantFactoryMethodLinear:
                    return $1;
                case this.InterpolantFactoryMethodSmooth:
                    return tt1;
            }
        }
        getValueSize() {
            return this.values.length / this.times.length;
        }
        shift(t) {
            if (0 !== t) {
                const e = this.times;
                for(let n = 0, i = e.length; n !== i; ++n)e[n] += t;
            }
            return this;
        }
        scale(t) {
            if (1 !== t) {
                const e = this.times;
                for(let n = 0, i = e.length; n !== i; ++n)e[n] *= t;
            }
            return this;
        }
        trim(t, e) {
            const n = this.times, i = n.length;
            let r = 0, s = i - 1;
            for(; r !== i && n[r] < t;)++r;
            for(; -1 !== s && n[s] > e;)--s;
            if (++s, 0 !== r || s !== i) {
                r >= s && (s = Math.max(s, 1), r = s - 1);
                const t = this.getValueSize();
                this.times = $l.arraySlice(n, r, s), this.values = $l.arraySlice(this.values, r * t, s * t);
            }
            return this;
        }
        validate() {
            let t = !0;
            const e = this.getValueSize();
            e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1);
            const n = this.times, i = this.values, r = n.length;
            0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);
            let s = null;
            for(let e127 = 0; e127 !== r; e127++){
                const i = n[e127];
                if ("number" == typeof i && isNaN(i)) {
                    console.error("THREE.KeyframeTrack: Time is not a valid number.", this, e127, i), t = !1;
                    break;
                }
                if (null !== s && s > i) {
                    console.error("THREE.KeyframeTrack: Out of order keys.", this, e127, i, s), t = !1;
                    break;
                }
                s = i;
            }
            if (void 0 !== i && $l.isTypedArray(i)) for(let e128 = 0, n75 = i.length; e128 !== n75; ++e128){
                const n = i[e128];
                if (isNaN(n)) {
                    console.error("THREE.KeyframeTrack: Value is not a valid number.", this, e128, n), t = !1;
                    break;
                }
            }
            return t;
        }
        optimize() {
            const t = $l.arraySlice(this.times), e = $l.arraySlice(this.values), n = this.getValueSize(), i = this.getInterpolation() === tt1, r = t.length - 1;
            let s = 1;
            for(let a = 1; a < r; ++a){
                let r = !1;
                const o = t[a];
                if (o !== t[a + 1] && (1 !== a || o !== t[0])) {
                    if (i) r = !0;
                    else {
                        const t = a * n, i = t - n, s = t + n;
                        for(let a29 = 0; a29 !== n; ++a29){
                            const n = e[t + a29];
                            if (n !== e[i + a29] || n !== e[s + a29]) {
                                r = !0;
                                break;
                            }
                        }
                    }
                }
                if (r) {
                    if (a !== s) {
                        t[s] = t[a];
                        const i = a * n, r = s * n;
                        for(let t194 = 0; t194 !== n; ++t194)e[r + t194] = e[i + t194];
                    }
                    ++s;
                }
            }
            if (r > 0) {
                t[s] = t[r];
                for(let t197 = r * n, i = s * n, a = 0; a !== n; ++a)e[i + a] = e[t197 + a];
                ++s;
            }
            return s !== t.length ? (this.times = $l.arraySlice(t, 0, s), this.values = $l.arraySlice(e, 0, s * n)) : (this.times = t, this.values = e), this;
        }
        clone() {
            const t = $l.arraySlice(this.times, 0), e = $l.arraySlice(this.values, 0), n = new this.constructor(this.name, t, e);
            return n.createInterpolant = this.createInterpolant, n;
        }
    }
    rc.prototype.TimeBufferType = Float32Array, rc.prototype.ValueBufferType = Float32Array, rc.prototype.DefaultInterpolation = $1;
    class sc extends rc {
    }
    sc.prototype.ValueTypeName = "bool", sc.prototype.ValueBufferType = Array, sc.prototype.DefaultInterpolation = Q1, sc.prototype.InterpolantFactoryMethodLinear = void 0, sc.prototype.InterpolantFactoryMethodSmooth = void 0;
    class ac extends rc {
    }
    ac.prototype.ValueTypeName = "color";
    class oc extends rc {
    }
    oc.prototype.ValueTypeName = "number";
    class lc extends tc {
        constructor(t, e, n, i){
            super(t, e, n, i);
        }
        interpolate_(t, e, n, i) {
            const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = (n - e) / (i - e);
            let l = t * a;
            for(let t198 = l + a; l !== t198; l += 4)re.slerpFlat(r, 0, s, l - a, s, l, o);
            return r;
        }
    }
    class cc extends rc {
        InterpolantFactoryMethodLinear(t) {
            return new lc(this.times, this.values, this.getValueSize(), t);
        }
    }
    cc.prototype.ValueTypeName = "quaternion", cc.prototype.DefaultInterpolation = $1, cc.prototype.InterpolantFactoryMethodSmooth = void 0;
    class hc extends rc {
    }
    hc.prototype.ValueTypeName = "string", hc.prototype.ValueBufferType = Array, hc.prototype.DefaultInterpolation = Q1, hc.prototype.InterpolantFactoryMethodLinear = void 0, hc.prototype.InterpolantFactoryMethodSmooth = void 0;
    class uc extends rc {
    }
    uc.prototype.ValueTypeName = "vector";
    class dc {
        constructor(t, e = -1, n, i = 2500){
            this.name = t, this.tracks = n, this.duration = e, this.blendMode = i, this.uuid = _t1(), this.duration < 0 && this.resetDuration();
        }
        static parse(t) {
            const e = [], n = t.tracks, i = 1 / (t.fps || 1);
            for(let t199 = 0, r = n.length; t199 !== r; ++t199)e.push(pc(n[t199]).scale(i));
            const r46 = new this(t.name, t.duration, e, t.blendMode);
            return r46.uuid = t.uuid, r46;
        }
        static toJSON(t) {
            const e = [], n = t.tracks, i = {
                name: t.name,
                duration: t.duration,
                tracks: e,
                uuid: t.uuid,
                blendMode: t.blendMode
            };
            for(let t200 = 0, i62 = n.length; t200 !== i62; ++t200)e.push(rc.toJSON(n[t200]));
            return i;
        }
        static CreateFromMorphTargetSequence(t, e, n, i) {
            const r = e.length, s = [];
            for(let t201 = 0; t201 < r; t201++){
                let a = [], o = [];
                a.push((t201 + r - 1) % r, t201, (t201 + 1) % r), o.push(0, 1, 0);
                const l = $l.getKeyframeOrder(a);
                a = $l.sortedArray(a, 1, l), o = $l.sortedArray(o, 1, l), i || 0 !== a[0] || (a.push(r), o.push(o[0])), s.push(new oc(".morphTargetInfluences[" + e[t201].name + "]", a, o).scale(1 / n));
            }
            return new this(t, -1, s);
        }
        static findByName(t, e) {
            let n = t;
            if (!Array.isArray(t)) {
                const e = t;
                n = e.geometry && e.geometry.animations || e.animations;
            }
            for(let t202 = 0; t202 < n.length; t202++)if (n[t202].name === e) return n[t202];
            return null;
        }
        static CreateClipsFromMorphTargetSequences(t, e, n) {
            const i = {}, r = /^([\w-]*?)([\d]+)$/;
            for(let e129 = 0, n76 = t.length; e129 < n76; e129++){
                const n = t[e129], s = n.name.match(r);
                if (s && s.length > 1) {
                    const t = s[1];
                    let e = i[t];
                    e || (i[t] = e = []), e.push(n);
                }
            }
            const s = [];
            for(const t203 in i)s.push(this.CreateFromMorphTargetSequence(t203, i[t203], e, n));
            return s;
        }
        static parseAnimation(t205, e130) {
            if (!t205) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
            const n77 = function(t, e, n, i, r) {
                if (0 !== n.length) {
                    const s = [], a = [];
                    $l.flattenJSON(n, s, a, i), 0 !== s.length && r.push(new t(e, s, a));
                }
            }, i63 = [], r47 = t205.name || "default", s37 = t205.fps || 30, a32 = t205.blendMode;
            let o = t205.length || -1;
            const l = t205.hierarchy || [];
            for(let t204 = 0; t204 < l.length; t204++){
                const r = l[t204].keys;
                if (r && 0 !== r.length) {
                    if (r[0].morphTargets) {
                        const t = {};
                        let e;
                        for(e = 0; e < r.length; e++)if (r[e].morphTargets) for(let n = 0; n < r[e].morphTargets.length; n++)t[r[e].morphTargets[n]] = -1;
                        for(const n78 in t){
                            const t = [], s = [];
                            for(let i = 0; i !== r[e].morphTargets.length; ++i){
                                const i = r[e];
                                t.push(i.time), s.push(i.morphTarget === n78 ? 1 : 0);
                            }
                            i63.push(new oc(".morphTargetInfluence[" + n78 + "]", t, s));
                        }
                        o = t.length * s37;
                    } else {
                        const s = ".bones[" + e130[t204].name + "]";
                        n77(uc, s + ".position", r, "pos", i63), n77(cc, s + ".quaternion", r, "rot", i63), n77(uc, s + ".scale", r, "scl", i63);
                    }
                }
            }
            if (0 === i63.length) return null;
            return new this(r47, o, i63, a32);
        }
        resetDuration() {
            let t = 0;
            for(let e = 0, n = this.tracks.length; e !== n; ++e){
                const n = this.tracks[e];
                t = Math.max(t, n.times[n.times.length - 1]);
            }
            return this.duration = t, this;
        }
        trim() {
            for(let t = 0; t < this.tracks.length; t++)this.tracks[t].trim(0, this.duration);
            return this;
        }
        validate() {
            let t = !0;
            for(let e = 0; e < this.tracks.length; e++)t = t && this.tracks[e].validate();
            return t;
        }
        optimize() {
            for(let t = 0; t < this.tracks.length; t++)this.tracks[t].optimize();
            return this;
        }
        clone() {
            const t = [];
            for(let e = 0; e < this.tracks.length; e++)t.push(this.tracks[e].clone());
            return new this.constructor(this.name, this.duration, t, this.blendMode);
        }
        toJSON() {
            return this.constructor.toJSON(this);
        }
    }
    function pc(t206) {
        if (void 0 === t206.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
        const e = function(t) {
            switch(t.toLowerCase()){
                case "scalar":
                case "double":
                case "float":
                case "number":
                case "integer":
                    return oc;
                case "vector":
                case "vector2":
                case "vector3":
                case "vector4":
                    return uc;
                case "color":
                    return ac;
                case "quaternion":
                    return cc;
                case "bool":
                case "boolean":
                    return sc;
                case "string":
                    return hc;
            }
            throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t);
        }(t206.type);
        if (void 0 === t206.times) {
            const e = [], n = [];
            $l.flattenJSON(t206.keys, e, n, "value"), t206.times = e, t206.values = n;
        }
        return void 0 !== e.parse ? e.parse(t206) : new e(t206.name, t206.times, t206.values, t206.interpolation);
    }
    const mc = {
        enabled: !1,
        files: {},
        add: function(t, e) {
            !1 !== this.enabled && (this.files[t] = e);
        },
        get: function(t) {
            if (!1 !== this.enabled) return this.files[t];
        },
        remove: function(t) {
            delete this.files[t];
        },
        clear: function() {
            this.files = {};
        }
    };
    class fc {
        constructor(t207, e131, n79){
            const i64 = this;
            let r, s = !1, a = 0, o = 0;
            const l = [];
            this.onStart = void 0, this.onLoad = t207, this.onProgress = e131, this.onError = n79, this.itemStart = function(t) {
                o++, !1 === s && void 0 !== i64.onStart && i64.onStart(t, a, o), s = !0;
            }, this.itemEnd = function(t) {
                a++, void 0 !== i64.onProgress && i64.onProgress(t, a, o), a === o && (s = !1, void 0 !== i64.onLoad && i64.onLoad());
            }, this.itemError = function(t) {
                void 0 !== i64.onError && i64.onError(t);
            }, this.resolveURL = function(t) {
                return r ? r(t) : t;
            }, this.setURLModifier = function(t) {
                return r = t, this;
            }, this.addHandler = function(t, e) {
                return l.push(t, e), this;
            }, this.removeHandler = function(t) {
                const e = l.indexOf(t);
                return -1 !== e && l.splice(e, 2), this;
            }, this.getHandler = function(t) {
                for(let e = 0, n = l.length; e < n; e += 2){
                    const n = l[e], i = l[e + 1];
                    if (n.global && (n.lastIndex = 0), n.test(t)) return i;
                }
                return null;
            };
        }
    }
    const gc = new fc;
    class vc {
        constructor(t){
            this.manager = void 0 !== t ? t : gc, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
        }
        load() {}
        loadAsync(t, e) {
            const n = this;
            return new Promise(function(i, r) {
                n.load(t, i, e, r);
            });
        }
        parse() {}
        setCrossOrigin(t) {
            return this.crossOrigin = t, this;
        }
        setWithCredentials(t) {
            return this.withCredentials = t, this;
        }
        setPath(t) {
            return this.path = t, this;
        }
        setResourcePath(t) {
            return this.resourcePath = t, this;
        }
        setRequestHeader(t) {
            return this.requestHeader = t, this;
        }
    }
    const yc = {};
    class xc extends vc {
        constructor(t){
            super(t);
        }
        load(t208, e132, n80, i65) {
            void 0 === t208 && (t208 = ""), void 0 !== this.path && (t208 = this.path + t208), t208 = this.manager.resolveURL(t208);
            const r48 = mc.get(t208);
            if (void 0 !== r48) return this.manager.itemStart(t208), setTimeout(()=>{
                e132 && e132(r48), this.manager.itemEnd(t208);
            }, 0), r48;
            if (void 0 !== yc[t208]) return void yc[t208].push({
                onLoad: e132,
                onProgress: n80,
                onError: i65
            });
            yc[t208] = [], yc[t208].push({
                onLoad: e132,
                onProgress: n80,
                onError: i65
            });
            const s38 = new Request(t208, {
                headers: new Headers(this.requestHeader),
                credentials: this.withCredentials ? "include" : "same-origin"
            }), a33 = this.mimeType, o22 = this.responseType;
            fetch(s38).then((e133)=>{
                if (200 === e133.status || 0 === e133.status) {
                    if (0 === e133.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), "undefined" == typeof ReadableStream || void 0 === e133.body || void 0 === e133.body.getReader) return e133;
                    const n = yc[t208], i66 = e133.body.getReader(), r49 = e133.headers.get("Content-Length"), s = r49 ? parseInt(r49) : 0, a = 0 !== s;
                    let o = 0;
                    const l = new ReadableStream({
                        start (t209) {
                            !function e134() {
                                i66.read().then(({ done: i , value: r  })=>{
                                    if (i) t209.close();
                                    else {
                                        o += r.byteLength;
                                        const i = new ProgressEvent("progress", {
                                            lengthComputable: a,
                                            loaded: o,
                                            total: s
                                        });
                                        for(let t = 0, e = n.length; t < e; t++){
                                            const e = n[t];
                                            e.onProgress && e.onProgress(i);
                                        }
                                        t209.enqueue(r), e134();
                                    }
                                });
                            }();
                        }
                    });
                    return new Response(l);
                }
                throw Error(`fetch for "${e133.url}" responded with ${e133.status}: ${e133.statusText}`);
            }).then((t210)=>{
                switch(o22){
                    case "arraybuffer":
                        return t210.arrayBuffer();
                    case "blob":
                        return t210.blob();
                    case "document":
                        return t210.text().then((t)=>(new DOMParser).parseFromString(t, a33));
                    case "json":
                        return t210.json();
                    default:
                        if (void 0 === a33) return t210.text();
                        {
                            const e = /charset="?([^;"\s]*)"?/i.exec(a33), n = e && e[1] ? e[1].toLowerCase() : void 0, i = new TextDecoder(n);
                            return t210.arrayBuffer().then((t)=>i.decode(t));
                        }
                }
            }).then((e)=>{
                mc.add(t208, e);
                const n = yc[t208];
                delete yc[t208];
                for(let t = 0, i = n.length; t < i; t++){
                    const i = n[t];
                    i.onLoad && i.onLoad(e);
                }
            }).catch((e)=>{
                const n = yc[t208];
                if (void 0 === n) throw this.manager.itemError(t208), e;
                delete yc[t208];
                for(let t = 0, i = n.length; t < i; t++){
                    const i = n[t];
                    i.onError && i.onError(e);
                }
                this.manager.itemError(t208);
            }).finally(()=>{
                this.manager.itemEnd(t208);
            }), this.manager.itemStart(t208);
        }
        setResponseType(t) {
            return this.responseType = t, this;
        }
        setMimeType(t) {
            return this.mimeType = t, this;
        }
    }
    class _c extends vc {
        constructor(t){
            super(t);
        }
        load(t, e135, n, i) {
            void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
            const r = this, s = mc.get(t);
            if (void 0 !== s) return r.manager.itemStart(t), setTimeout(function() {
                e135 && e135(s), r.manager.itemEnd(t);
            }, 0), s;
            const a = It("img");
            function o() {
                c(), mc.add(t, this), e135 && e135(this), r.manager.itemEnd(t);
            }
            function l(e) {
                c(), i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
            }
            function c() {
                a.removeEventListener("load", o, !1), a.removeEventListener("error", l, !1);
            }
            return a.addEventListener("load", o, !1), a.addEventListener("error", l, !1), "data:" !== t.slice(0, 5) && void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(t), a.src = t, a;
        }
    }
    class bc extends vc {
        constructor(t){
            super(t);
        }
        load(t211, e, n81, i) {
            const r = new yi, s = new _c(this.manager);
            s.setCrossOrigin(this.crossOrigin), s.setPath(this.path);
            let a = 0;
            function o(n) {
                s.load(t211[n], function(t) {
                    r.images[n] = t, a++, 6 === a && (r.needsUpdate = !0, e && e(r));
                }, void 0, i);
            }
            for(let e136 = 0; e136 < t211.length; ++e136)o(e136);
            return r;
        }
    }
    class Mc extends vc {
        constructor(t){
            super(t);
        }
        load(t212, e, n82, i) {
            const r = this, s = new Ha, a = new xc(this.manager);
            return a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setPath(this.path), a.setWithCredentials(r.withCredentials), a.load(t212, function(t) {
                const n = r.parse(t);
                n && (void 0 !== n.image ? s.image = n.image : void 0 !== n.data && (s.image.width = n.width, s.image.height = n.height, s.image.data = n.data), s.wrapS = void 0 !== n.wrapS ? n.wrapS : h1, s.wrapT = void 0 !== n.wrapT ? n.wrapT : h1, s.magFilter = void 0 !== n.magFilter ? n.magFilter : f1, s.minFilter = void 0 !== n.minFilter ? n.minFilter : f1, s.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1, void 0 !== n.encoding && (s.encoding = n.encoding), void 0 !== n.flipY && (s.flipY = n.flipY), void 0 !== n.format && (s.format = n.format), void 0 !== n.type && (s.type = n.type), void 0 !== n.mipmaps && (s.mipmaps = n.mipmaps, s.minFilter = v1), 1 === n.mipmapCount && (s.minFilter = f1), void 0 !== n.generateMipmaps && (s.generateMipmaps = n.generateMipmaps), s.needsUpdate = !0, e && e(s, n));
            }, n82, i), s;
        }
    }
    class wc extends vc {
        constructor(t){
            super(t);
        }
        load(t213, e, n, i) {
            const r = new Zt, s = new _c(this.manager);
            return s.setCrossOrigin(this.crossOrigin), s.setPath(this.path), s.load(t213, function(t) {
                r.image = t, r.needsUpdate = !0, void 0 !== e && e(r);
            }, n, i), r;
        }
    }
    class Sc extends ln {
        constructor(t, e = 1){
            super(), this.type = "Light", this.color = new Wt(t), this.intensity = e;
        }
        dispose() {}
        copy(t) {
            return super.copy(t), this.color.copy(t.color), this.intensity = t.intensity, this;
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e;
        }
    }
    Sc.prototype.isLight = !0;
    class Tc extends Sc {
        constructor(t, e, n){
            super(t, n), this.type = "HemisphereLight", this.position.copy(ln.DefaultUp), this.updateMatrix(), this.groundColor = new Wt(e);
        }
        copy(t) {
            return Sc.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this;
        }
    }
    Tc.prototype.isHemisphereLight = !0;
    const Ec = new Oe, Ac = new se, Rc = new se;
    class Cc {
        constructor(t){
            this.camera = t, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Rt(512, 512), this.map = null, this.mapPass = null, this.matrix = new Oe, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Ei, this._frameExtents = new Rt(1, 1), this._viewportCount = 1, this._viewports = [
                new Kt(0, 0, 1, 1)
            ];
        }
        getViewportCount() {
            return this._viewportCount;
        }
        getFrustum() {
            return this._frustum;
        }
        updateMatrices(t) {
            const e = this.camera, n = this.matrix;
            Ac.setFromMatrixPosition(t.matrixWorld), e.position.copy(Ac), Rc.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(Rc), e.updateMatrixWorld(), Ec.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Ec), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(e.projectionMatrix), n.multiply(e.matrixWorldInverse);
        }
        getViewport(t) {
            return this._viewports[t];
        }
        getFrameExtents() {
            return this._frameExtents;
        }
        dispose() {
            this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
        }
        copy(t) {
            return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        toJSON() {
            const t = {};
            return 0 !== this.bias && (t.bias = this.bias), 0 !== this.normalBias && (t.normalBias = this.normalBias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t;
        }
    }
    class Lc extends Cc {
        constructor(){
            super(new fi(50, 1, .5, 500)), this.focus = 1;
        }
        updateMatrices(t) {
            const e = this.camera, n = 2 * xt1 * t.angle * this.focus, i = this.mapSize.width / this.mapSize.height, r = t.distance || e.far;
            n === e.fov && i === e.aspect && r === e.far || (e.fov = n, e.aspect = i, e.far = r, e.updateProjectionMatrix()), super.updateMatrices(t);
        }
        copy(t) {
            return super.copy(t), this.focus = t.focus, this;
        }
    }
    Lc.prototype.isSpotLightShadow = !0;
    class Pc extends Sc {
        constructor(t, e, n = 0, i = Math.PI / 3, r = 0, s = 1){
            super(t, e), this.type = "SpotLight", this.position.copy(ln.DefaultUp), this.updateMatrix(), this.target = new ln, this.distance = n, this.angle = i, this.penumbra = r, this.decay = s, this.shadow = new Lc;
        }
        get power() {
            return this.intensity * Math.PI;
        }
        set power(t) {
            this.intensity = t / Math.PI;
        }
        dispose() {
            this.shadow.dispose();
        }
        copy(t) {
            return super.copy(t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
        }
    }
    Pc.prototype.isSpotLight = !0;
    const Dc = new Oe, Ic = new se, Nc = new se;
    class Bc extends Cc {
        constructor(){
            super(new fi(90, 1, .5, 500)), this._frameExtents = new Rt(4, 2), this._viewportCount = 6, this._viewports = [
                new Kt(2, 1, 1, 1),
                new Kt(0, 1, 1, 1),
                new Kt(3, 1, 1, 1),
                new Kt(1, 1, 1, 1),
                new Kt(3, 0, 1, 1),
                new Kt(1, 0, 1, 1)
            ], this._cubeDirections = [
                new se(1, 0, 0),
                new se(-1, 0, 0),
                new se(0, 0, 1),
                new se(0, 0, -1),
                new se(0, 1, 0),
                new se(0, -1, 0)
            ], this._cubeUps = [
                new se(0, 1, 0),
                new se(0, 1, 0),
                new se(0, 1, 0),
                new se(0, 1, 0),
                new se(0, 0, 1),
                new se(0, 0, -1)
            ];
        }
        updateMatrices(t, e = 0) {
            const n = this.camera, i = this.matrix, r = t.distance || n.far;
            r !== n.far && (n.far = r, n.updateProjectionMatrix()), Ic.setFromMatrixPosition(t.matrixWorld), n.position.copy(Ic), Nc.copy(n.position), Nc.add(this._cubeDirections[e]), n.up.copy(this._cubeUps[e]), n.lookAt(Nc), n.updateMatrixWorld(), i.makeTranslation(-Ic.x, -Ic.y, -Ic.z), Dc.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Dc);
        }
    }
    Bc.prototype.isPointLightShadow = !0;
    class Oc extends Sc {
        constructor(t, e, n = 0, i = 1){
            super(t, e), this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new Bc;
        }
        get power() {
            return 4 * this.intensity * Math.PI;
        }
        set power(t) {
            this.intensity = t / (4 * Math.PI);
        }
        dispose() {
            this.shadow.dispose();
        }
        copy(t) {
            return super.copy(t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this;
        }
    }
    Oc.prototype.isPointLight = !0;
    class zc extends Cc {
        constructor(){
            super(new Fi(-5, 5, 5, -5, .5, 500));
        }
    }
    zc.prototype.isDirectionalLightShadow = !0;
    class Uc extends Sc {
        constructor(t, e){
            super(t, e), this.type = "DirectionalLight", this.position.copy(ln.DefaultUp), this.updateMatrix(), this.target = new ln, this.shadow = new zc;
        }
        dispose() {
            this.shadow.dispose();
        }
        copy(t) {
            return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
        }
    }
    Uc.prototype.isDirectionalLight = !0;
    class Fc extends Sc {
        constructor(t, e){
            super(t, e), this.type = "AmbientLight";
        }
    }
    Fc.prototype.isAmbientLight = !0;
    class Hc extends Sc {
        constructor(t, e, n = 10, i = 10){
            super(t, e), this.type = "RectAreaLight", this.width = n, this.height = i;
        }
        get power() {
            return this.intensity * this.width * this.height * Math.PI;
        }
        set power(t) {
            this.intensity = t / (this.width * this.height * Math.PI);
        }
        copy(t) {
            return super.copy(t), this.width = t.width, this.height = t.height, this;
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.object.width = this.width, e.object.height = this.height, e;
        }
    }
    Hc.prototype.isRectAreaLight = !0;
    class Gc {
        constructor(){
            this.coefficients = [];
            for(let t = 0; t < 9; t++)this.coefficients.push(new se);
        }
        set(t) {
            for(let e = 0; e < 9; e++)this.coefficients[e].copy(t[e]);
            return this;
        }
        zero() {
            for(let t = 0; t < 9; t++)this.coefficients[t].set(0, 0, 0);
            return this;
        }
        getAt(t, e) {
            const n = t.x, i = t.y, r = t.z, s = this.coefficients;
            return e.copy(s[0]).multiplyScalar(.282095), e.addScaledVector(s[1], .488603 * i), e.addScaledVector(s[2], .488603 * r), e.addScaledVector(s[3], .488603 * n), e.addScaledVector(s[4], n * i * 1.092548), e.addScaledVector(s[5], i * r * 1.092548), e.addScaledVector(s[6], .315392 * (3 * r * r - 1)), e.addScaledVector(s[7], n * r * 1.092548), e.addScaledVector(s[8], .546274 * (n * n - i * i)), e;
        }
        getIrradianceAt(t, e) {
            const n = t.x, i = t.y, r = t.z, s = this.coefficients;
            return e.copy(s[0]).multiplyScalar(.886227), e.addScaledVector(s[1], 1.023328 * i), e.addScaledVector(s[2], 1.023328 * r), e.addScaledVector(s[3], 1.023328 * n), e.addScaledVector(s[4], .858086 * n * i), e.addScaledVector(s[5], .858086 * i * r), e.addScaledVector(s[6], .743125 * r * r - .247708), e.addScaledVector(s[7], .858086 * n * r), e.addScaledVector(s[8], .429043 * (n * n - i * i)), e;
        }
        add(t) {
            for(let e = 0; e < 9; e++)this.coefficients[e].add(t.coefficients[e]);
            return this;
        }
        addScaledSH(t, e) {
            for(let n = 0; n < 9; n++)this.coefficients[n].addScaledVector(t.coefficients[n], e);
            return this;
        }
        scale(t) {
            for(let e = 0; e < 9; e++)this.coefficients[e].multiplyScalar(t);
            return this;
        }
        lerp(t, e) {
            for(let n = 0; n < 9; n++)this.coefficients[n].lerp(t.coefficients[n], e);
            return this;
        }
        equals(t) {
            for(let e = 0; e < 9; e++)if (!this.coefficients[e].equals(t.coefficients[e])) return !1;
            return !0;
        }
        copy(t) {
            return this.set(t.coefficients);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        fromArray(t, e = 0) {
            const n = this.coefficients;
            for(let i = 0; i < 9; i++)n[i].fromArray(t, e + 3 * i);
            return this;
        }
        toArray(t = [], e = 0) {
            const n = this.coefficients;
            for(let i = 0; i < 9; i++)n[i].toArray(t, e + 3 * i);
            return t;
        }
        static getBasisAt(t, e) {
            const n = t.x, i = t.y, r = t.z;
            e[0] = .282095, e[1] = .488603 * i, e[2] = .488603 * r, e[3] = .488603 * n, e[4] = 1.092548 * n * i, e[5] = 1.092548 * i * r, e[6] = .315392 * (3 * r * r - 1), e[7] = 1.092548 * n * r, e[8] = .546274 * (n * n - i * i);
        }
    }
    Gc.prototype.isSphericalHarmonics3 = !0;
    class kc extends Sc {
        constructor(t = new Gc, e = 1){
            super(void 0, e), this.sh = t;
        }
        copy(t) {
            return super.copy(t), this.sh.copy(t.sh), this;
        }
        fromJSON(t) {
            return this.intensity = t.intensity, this.sh.fromArray(t.sh), this;
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.object.sh = this.sh.toArray(), e;
        }
    }
    kc.prototype.isLightProbe = !0;
    class Vc extends vc {
        constructor(t){
            super(t), this.textures = {};
        }
        load(t, e137, n83, i) {
            const r = this, s = new xc(r.manager);
            s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t, function(n) {
                try {
                    e137(r.parse(JSON.parse(n)));
                } catch (e) {
                    i ? i(e) : console.error(e), r.manager.itemError(t);
                }
            }, n83, i);
        }
        parse(t214) {
            const e = this.textures;
            function n(t) {
                return void 0 === e[t] && console.warn("THREE.MaterialLoader: Undefined texture", t), e[t];
            }
            const i = bn.fromType(t214.type);
            if (void 0 !== t214.uuid && (i.uuid = t214.uuid), void 0 !== t214.name && (i.name = t214.name), void 0 !== t214.color && void 0 !== i.color && i.color.setHex(t214.color), void 0 !== t214.roughness && (i.roughness = t214.roughness), void 0 !== t214.metalness && (i.metalness = t214.metalness), void 0 !== t214.sheen && (i.sheen = t214.sheen), void 0 !== t214.sheenColor && (i.sheenColor = (new Wt).setHex(t214.sheenColor)), void 0 !== t214.sheenRoughness && (i.sheenRoughness = t214.sheenRoughness), void 0 !== t214.emissive && void 0 !== i.emissive && i.emissive.setHex(t214.emissive), void 0 !== t214.specular && void 0 !== i.specular && i.specular.setHex(t214.specular), void 0 !== t214.specularIntensity && (i.specularIntensity = t214.specularIntensity), void 0 !== t214.specularColor && void 0 !== i.specularColor && i.specularColor.setHex(t214.specularColor), void 0 !== t214.shininess && (i.shininess = t214.shininess), void 0 !== t214.clearcoat && (i.clearcoat = t214.clearcoat), void 0 !== t214.clearcoatRoughness && (i.clearcoatRoughness = t214.clearcoatRoughness), void 0 !== t214.transmission && (i.transmission = t214.transmission), void 0 !== t214.thickness && (i.thickness = t214.thickness), void 0 !== t214.attenuationDistance && (i.attenuationDistance = t214.attenuationDistance), void 0 !== t214.attenuationColor && void 0 !== i.attenuationColor && i.attenuationColor.setHex(t214.attenuationColor), void 0 !== t214.fog && (i.fog = t214.fog), void 0 !== t214.flatShading && (i.flatShading = t214.flatShading), void 0 !== t214.blending && (i.blending = t214.blending), void 0 !== t214.combine && (i.combine = t214.combine), void 0 !== t214.side && (i.side = t214.side), void 0 !== t214.shadowSide && (i.shadowSide = t214.shadowSide), void 0 !== t214.opacity && (i.opacity = t214.opacity), void 0 !== t214.transparent && (i.transparent = t214.transparent), void 0 !== t214.alphaTest && (i.alphaTest = t214.alphaTest), void 0 !== t214.depthTest && (i.depthTest = t214.depthTest), void 0 !== t214.depthWrite && (i.depthWrite = t214.depthWrite), void 0 !== t214.colorWrite && (i.colorWrite = t214.colorWrite), void 0 !== t214.stencilWrite && (i.stencilWrite = t214.stencilWrite), void 0 !== t214.stencilWriteMask && (i.stencilWriteMask = t214.stencilWriteMask), void 0 !== t214.stencilFunc && (i.stencilFunc = t214.stencilFunc), void 0 !== t214.stencilRef && (i.stencilRef = t214.stencilRef), void 0 !== t214.stencilFuncMask && (i.stencilFuncMask = t214.stencilFuncMask), void 0 !== t214.stencilFail && (i.stencilFail = t214.stencilFail), void 0 !== t214.stencilZFail && (i.stencilZFail = t214.stencilZFail), void 0 !== t214.stencilZPass && (i.stencilZPass = t214.stencilZPass), void 0 !== t214.wireframe && (i.wireframe = t214.wireframe), void 0 !== t214.wireframeLinewidth && (i.wireframeLinewidth = t214.wireframeLinewidth), void 0 !== t214.wireframeLinecap && (i.wireframeLinecap = t214.wireframeLinecap), void 0 !== t214.wireframeLinejoin && (i.wireframeLinejoin = t214.wireframeLinejoin), void 0 !== t214.rotation && (i.rotation = t214.rotation), 1 !== t214.linewidth && (i.linewidth = t214.linewidth), void 0 !== t214.dashSize && (i.dashSize = t214.dashSize), void 0 !== t214.gapSize && (i.gapSize = t214.gapSize), void 0 !== t214.scale && (i.scale = t214.scale), void 0 !== t214.polygonOffset && (i.polygonOffset = t214.polygonOffset), void 0 !== t214.polygonOffsetFactor && (i.polygonOffsetFactor = t214.polygonOffsetFactor), void 0 !== t214.polygonOffsetUnits && (i.polygonOffsetUnits = t214.polygonOffsetUnits), void 0 !== t214.dithering && (i.dithering = t214.dithering), void 0 !== t214.alphaToCoverage && (i.alphaToCoverage = t214.alphaToCoverage), void 0 !== t214.premultipliedAlpha && (i.premultipliedAlpha = t214.premultipliedAlpha), void 0 !== t214.visible && (i.visible = t214.visible), void 0 !== t214.toneMapped && (i.toneMapped = t214.toneMapped), void 0 !== t214.userData && (i.userData = t214.userData), void 0 !== t214.vertexColors && ("number" == typeof t214.vertexColors ? i.vertexColors = t214.vertexColors > 0 : i.vertexColors = t214.vertexColors), void 0 !== t214.uniforms) for(const e138 in t214.uniforms){
                const r = t214.uniforms[e138];
                switch(i.uniforms[e138] = {}, r.type){
                    case "t":
                        i.uniforms[e138].value = n(r.value);
                        break;
                    case "c":
                        i.uniforms[e138].value = (new Wt).setHex(r.value);
                        break;
                    case "v2":
                        i.uniforms[e138].value = (new Rt).fromArray(r.value);
                        break;
                    case "v3":
                        i.uniforms[e138].value = (new se).fromArray(r.value);
                        break;
                    case "v4":
                        i.uniforms[e138].value = (new Kt).fromArray(r.value);
                        break;
                    case "m3":
                        i.uniforms[e138].value = (new Ct1).fromArray(r.value);
                        break;
                    case "m4":
                        i.uniforms[e138].value = (new Oe).fromArray(r.value);
                        break;
                    default:
                        i.uniforms[e138].value = r.value;
                }
            }
            if (void 0 !== t214.defines && (i.defines = t214.defines), void 0 !== t214.vertexShader && (i.vertexShader = t214.vertexShader), void 0 !== t214.fragmentShader && (i.fragmentShader = t214.fragmentShader), void 0 !== t214.extensions) for(const e139 in t214.extensions)i.extensions[e139] = t214.extensions[e139];
            if (void 0 !== t214.shading && (i.flatShading = 1 === t214.shading), void 0 !== t214.size && (i.size = t214.size), void 0 !== t214.sizeAttenuation && (i.sizeAttenuation = t214.sizeAttenuation), void 0 !== t214.map && (i.map = n(t214.map)), void 0 !== t214.matcap && (i.matcap = n(t214.matcap)), void 0 !== t214.alphaMap && (i.alphaMap = n(t214.alphaMap)), void 0 !== t214.bumpMap && (i.bumpMap = n(t214.bumpMap)), void 0 !== t214.bumpScale && (i.bumpScale = t214.bumpScale), void 0 !== t214.normalMap && (i.normalMap = n(t214.normalMap)), void 0 !== t214.normalMapType && (i.normalMapType = t214.normalMapType), void 0 !== t214.normalScale) {
                let e = t214.normalScale;
                !1 === Array.isArray(e) && (e = [
                    e,
                    e
                ]), i.normalScale = (new Rt).fromArray(e);
            }
            return void 0 !== t214.displacementMap && (i.displacementMap = n(t214.displacementMap)), void 0 !== t214.displacementScale && (i.displacementScale = t214.displacementScale), void 0 !== t214.displacementBias && (i.displacementBias = t214.displacementBias), void 0 !== t214.roughnessMap && (i.roughnessMap = n(t214.roughnessMap)), void 0 !== t214.metalnessMap && (i.metalnessMap = n(t214.metalnessMap)), void 0 !== t214.emissiveMap && (i.emissiveMap = n(t214.emissiveMap)), void 0 !== t214.emissiveIntensity && (i.emissiveIntensity = t214.emissiveIntensity), void 0 !== t214.specularMap && (i.specularMap = n(t214.specularMap)), void 0 !== t214.specularIntensityMap && (i.specularIntensityMap = n(t214.specularIntensityMap)), void 0 !== t214.specularColorMap && (i.specularColorMap = n(t214.specularColorMap)), void 0 !== t214.envMap && (i.envMap = n(t214.envMap)), void 0 !== t214.envMapIntensity && (i.envMapIntensity = t214.envMapIntensity), void 0 !== t214.reflectivity && (i.reflectivity = t214.reflectivity), void 0 !== t214.refractionRatio && (i.refractionRatio = t214.refractionRatio), void 0 !== t214.lightMap && (i.lightMap = n(t214.lightMap)), void 0 !== t214.lightMapIntensity && (i.lightMapIntensity = t214.lightMapIntensity), void 0 !== t214.aoMap && (i.aoMap = n(t214.aoMap)), void 0 !== t214.aoMapIntensity && (i.aoMapIntensity = t214.aoMapIntensity), void 0 !== t214.gradientMap && (i.gradientMap = n(t214.gradientMap)), void 0 !== t214.clearcoatMap && (i.clearcoatMap = n(t214.clearcoatMap)), void 0 !== t214.clearcoatRoughnessMap && (i.clearcoatRoughnessMap = n(t214.clearcoatRoughnessMap)), void 0 !== t214.clearcoatNormalMap && (i.clearcoatNormalMap = n(t214.clearcoatNormalMap)), void 0 !== t214.clearcoatNormalScale && (i.clearcoatNormalScale = (new Rt).fromArray(t214.clearcoatNormalScale)), void 0 !== t214.transmissionMap && (i.transmissionMap = n(t214.transmissionMap)), void 0 !== t214.thicknessMap && (i.thicknessMap = n(t214.thicknessMap)), void 0 !== t214.sheenColorMap && (i.sheenColorMap = n(t214.sheenColorMap)), void 0 !== t214.sheenRoughnessMap && (i.sheenRoughnessMap = n(t214.sheenRoughnessMap)), i;
        }
        setTextures(t) {
            return this.textures = t, this;
        }
    }
    class Wc {
        static decodeText(t) {
            if ("undefined" != typeof TextDecoder) return (new TextDecoder).decode(t);
            let e = "";
            for(let n = 0, i = t.length; n < i; n++)e += String.fromCharCode(t[n]);
            try {
                return decodeURIComponent(escape(e));
            } catch (t215) {
                return e;
            }
        }
        static extractUrlBase(t) {
            const e = t.lastIndexOf("/");
            return -1 === e ? "./" : t.slice(0, e + 1);
        }
        static resolveURL(t, e) {
            return "string" != typeof t || "" === t ? "" : (/^https?:\/\//i.test(e) && /^\//.test(t) && (e = e.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(t) || /^data:.*,.*$/i.test(t) || /^blob:.*$/i.test(t) ? t : e + t);
        }
    }
    class jc extends Vn {
        constructor(){
            super(), this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
        }
        copy(t) {
            return super.copy(t), this.instanceCount = t.instanceCount, this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        toJSON() {
            const t = super.toJSON(this);
            return t.instanceCount = this.instanceCount, t.isInstancedBufferGeometry = !0, t;
        }
    }
    jc.prototype.isInstancedBufferGeometry = !0;
    class qc extends vc {
        constructor(t){
            super(t);
        }
        load(t, e140, n84, i) {
            const r = this, s = new xc(r.manager);
            s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t, function(n) {
                try {
                    e140(r.parse(JSON.parse(n)));
                } catch (e) {
                    i ? i(e) : console.error(e), r.manager.itemError(t);
                }
            }, n84, i);
        }
        parse(t217) {
            const e144 = {}, n = {};
            function i68(t218, i69) {
                if (void 0 !== e144[i69]) return e144[i69];
                const r52 = t218.interleavedBuffers[i69], s = function(t, e) {
                    if (void 0 !== n[e]) return n[e];
                    const i = t.arrayBuffers[e], r = new Uint32Array(i).buffer;
                    return n[e] = r, r;
                }(t218, r52.buffer), a = Dt1(r52.type, s), o = new ua(a, r52.stride);
                return o.uuid = r52.uuid, e144[i69] = o, o;
            }
            const r51 = t217.isInstancedBufferGeometry ? new jc : new Vn, s39 = t217.data.index;
            if (void 0 !== s39) {
                const t = Dt1(s39.type, s39.array);
                r51.setIndex(new Tn(t, 1));
            }
            const a34 = t217.data.attributes;
            for(const e141 in a34){
                const n = a34[e141];
                let s;
                if (n.isInterleavedBufferAttribute) {
                    const e = i68(t217.data, n.data);
                    s = new pa(e, n.itemSize, n.offset, n.normalized);
                } else {
                    const t = Dt1(n.type, n.array);
                    s = new (n.isInstancedBufferAttribute ? Wa : Tn)(t, n.itemSize, n.normalized);
                }
                void 0 !== n.name && (s.name = n.name), void 0 !== n.usage && s.setUsage(n.usage), void 0 !== n.updateRange && (s.updateRange.offset = n.updateRange.offset, s.updateRange.count = n.updateRange.count), r51.setAttribute(e141, s);
            }
            const o23 = t217.data.morphAttributes;
            if (o23) for(const e142 in o23){
                const n = o23[e142], s = [];
                for(let e = 0, r = n.length; e < r; e++){
                    const r = n[e];
                    let a;
                    if (r.isInterleavedBufferAttribute) {
                        const e = i68(t217.data, r.data);
                        a = new pa(e, r.itemSize, r.offset, r.normalized);
                    } else {
                        const t = Dt1(r.type, r.array);
                        a = new Tn(t, r.itemSize, r.normalized);
                    }
                    void 0 !== r.name && (a.name = r.name), s.push(a);
                }
                r51.morphAttributes[e142] = s;
            }
            t217.data.morphTargetsRelative && (r51.morphTargetsRelative = !0);
            const l = t217.data.groups || t217.data.drawcalls || t217.data.offsets;
            if (void 0 !== l) for(let t216 = 0, e143 = l.length; t216 !== e143; ++t216){
                const e = l[t216];
                r51.addGroup(e.start, e.count, e.materialIndex);
            }
            const c = t217.data.boundingSphere;
            if (void 0 !== c) {
                const t = new se;
                void 0 !== c.center && t.fromArray(c.center), r51.boundingSphere = new Ae(t, c.radius);
            }
            return t217.name && (r51.name = t217.name), t217.userData && (r51.userData = t217.userData), r51;
        }
    }
    const Xc = {
        UVMapping: i1,
        CubeReflectionMapping: r1,
        CubeRefractionMapping: s1,
        EquirectangularReflectionMapping: a1,
        EquirectangularRefractionMapping: o1,
        CubeUVReflectionMapping: l1
    }, Jc = {
        RepeatWrapping: c1,
        ClampToEdgeWrapping: h1,
        MirroredRepeatWrapping: u1
    }, Yc = {
        NearestFilter: d1,
        NearestMipmapNearestFilter: p1,
        NearestMipmapLinearFilter: m1,
        LinearFilter: f1,
        LinearMipmapNearestFilter: g1,
        LinearMipmapLinearFilter: v1
    };
    class Zc extends vc {
        constructor(t){
            super(t), "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = {
                premultiplyAlpha: "none"
            };
        }
        setOptions(t) {
            return this.options = t, this;
        }
        load(t219, e145, n85, i) {
            void 0 === t219 && (t219 = ""), void 0 !== this.path && (t219 = this.path + t219), t219 = this.manager.resolveURL(t219);
            const r = this, s = mc.get(t219);
            if (void 0 !== s) return r.manager.itemStart(t219), setTimeout(function() {
                e145 && e145(s), r.manager.itemEnd(t219);
            }, 0), s;
            const a = {};
            a.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include", a.headers = this.requestHeader, fetch(t219, a).then(function(t) {
                return t.blob();
            }).then(function(t) {
                return createImageBitmap(t, Object.assign(r.options, {
                    colorSpaceConversion: "none"
                }));
            }).then(function(n) {
                mc.add(t219, n), e145 && e145(n), r.manager.itemEnd(t219);
            }).catch(function(e) {
                i && i(e), r.manager.itemError(t219), r.manager.itemEnd(t219);
            }), r.manager.itemStart(t219);
        }
    }
    let Kc;
    Zc.prototype.isImageBitmapLoader = !0;
    const Qc = {
        getContext: function() {
            return void 0 === Kc && (Kc = new (window.AudioContext || window.webkitAudioContext)), Kc;
        },
        setContext: function(t) {
            Kc = t;
        }
    };
    class $c extends vc {
        constructor(t){
            super(t);
        }
        load(t220, e146, n86, i) {
            const r = this, s = new xc(this.manager);
            s.setResponseType("arraybuffer"), s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(t220, function(n) {
                try {
                    const t221 = n.slice(0);
                    Qc.getContext().decodeAudioData(t221, function(t) {
                        e146(t);
                    });
                } catch (e) {
                    i ? i(e) : console.error(e), r.manager.itemError(t220);
                }
            }, n86, i);
        }
    }
    class th extends kc {
        constructor(t, e, n = 1){
            super(void 0, n);
            const i = (new Wt).set(t), r = (new Wt).set(e), s = new se(i.r, i.g, i.b), a = new se(r.r, r.g, r.b), o = Math.sqrt(Math.PI), l = o * Math.sqrt(.75);
            this.sh.coefficients[0].copy(s).add(a).multiplyScalar(o), this.sh.coefficients[1].copy(s).sub(a).multiplyScalar(l);
        }
    }
    th.prototype.isHemisphereLightProbe = !0;
    class eh extends kc {
        constructor(t, e = 1){
            super(void 0, e);
            const n = (new Wt).set(t);
            this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI));
        }
    }
    eh.prototype.isAmbientLightProbe = !0;
    const nh = new Oe, ih = new Oe, rh = new Oe;
    class sh {
        constructor(t = !0){
            this.autoStart = t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
        }
        start() {
            this.startTime = ah(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
        }
        stop() {
            this.getElapsedTime(), this.running = !1, this.autoStart = !1;
        }
        getElapsedTime() {
            return this.getDelta(), this.elapsedTime;
        }
        getDelta() {
            let t = 0;
            if (this.autoStart && !this.running) return this.start(), 0;
            if (this.running) {
                const e = ah();
                t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t;
            }
            return t;
        }
    }
    function ah() {
        return ("undefined" == typeof performance ? Date : performance).now();
    }
    const oh = new se, lh = new re, ch = new se, hh = new se;
    class uh extends ln {
        constructor(t){
            super(), this.type = "Audio", this.listener = t, this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = [];
        }
        getOutput() {
            return this.gain;
        }
        setNodeSource(t) {
            return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this;
        }
        setMediaElementSource(t) {
            return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this;
        }
        setMediaStreamSource(t) {
            return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(t), this.connect(), this;
        }
        setBuffer(t) {
            return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this;
        }
        play(t = 0) {
            if (!0 === this.isPlaying) return void console.warn("THREE.Audio: Audio is already playing.");
            if (!1 === this.hasPlaybackControl) return void console.warn("THREE.Audio: this Audio has no playback control.");
            this._startedAt = this.context.currentTime + t;
            const e = this.context.createBufferSource();
            return e.buffer = this.buffer, e.loop = this.loop, e.loopStart = this.loopStart, e.loopEnd = this.loopEnd, e.onended = this.onEnded.bind(this), e.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = e, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
        }
        pause() {
            if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, !0 === this.loop && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
            console.warn("THREE.Audio: this Audio has no playback control.");
        }
        stop() {
            if (!1 !== this.hasPlaybackControl) return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this;
            console.warn("THREE.Audio: this Audio has no playback control.");
        }
        connect() {
            if (this.filters.length > 0) {
                this.source.connect(this.filters[0]);
                for(let t = 1, e = this.filters.length; t < e; t++)this.filters[t - 1].connect(this.filters[t]);
                this.filters[this.filters.length - 1].connect(this.getOutput());
            } else this.source.connect(this.getOutput());
            return this._connected = !0, this;
        }
        disconnect() {
            if (this.filters.length > 0) {
                this.source.disconnect(this.filters[0]);
                for(let t = 1, e = this.filters.length; t < e; t++)this.filters[t - 1].disconnect(this.filters[t]);
                this.filters[this.filters.length - 1].disconnect(this.getOutput());
            } else this.source.disconnect(this.getOutput());
            return this._connected = !1, this;
        }
        getFilters() {
            return this.filters;
        }
        setFilters(t) {
            return t || (t = []), !0 === this._connected ? (this.disconnect(), this.filters = t.slice(), this.connect()) : this.filters = t.slice(), this;
        }
        setDetune(t) {
            if (this.detune = t, void 0 !== this.source.detune) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this;
        }
        getDetune() {
            return this.detune;
        }
        getFilter() {
            return this.getFilters()[0];
        }
        setFilter(t) {
            return this.setFilters(t ? [
                t
            ] : []);
        }
        setPlaybackRate(t) {
            if (!1 !== this.hasPlaybackControl) return this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
            console.warn("THREE.Audio: this Audio has no playback control.");
        }
        getPlaybackRate() {
            return this.playbackRate;
        }
        onEnded() {
            this.isPlaying = !1;
        }
        getLoop() {
            return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop;
        }
        setLoop(t) {
            if (!1 !== this.hasPlaybackControl) return this.loop = t, !0 === this.isPlaying && (this.source.loop = this.loop), this;
            console.warn("THREE.Audio: this Audio has no playback control.");
        }
        setLoopStart(t) {
            return this.loopStart = t, this;
        }
        setLoopEnd(t) {
            return this.loopEnd = t, this;
        }
        getVolume() {
            return this.gain.gain.value;
        }
        setVolume(t) {
            return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this;
        }
    }
    const dh = new se, ph = new re, mh = new se, fh = new se;
    class gh {
        constructor(t, e = 2048){
            this.analyser = t.context.createAnalyser(), this.analyser.fftSize = e, this.data = new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser);
        }
        getFrequencyData() {
            return this.analyser.getByteFrequencyData(this.data), this.data;
        }
        getAverageFrequency() {
            let t = 0;
            const e = this.getFrequencyData();
            for(let n = 0; n < e.length; n++)t += e[n];
            return t / e.length;
        }
    }
    class vh {
        constructor(t, e, n){
            let i, r, s;
            switch(this.binding = t, this.valueSize = n, e){
                case "quaternion":
                    i = this._slerp, r = this._slerpAdditive, s = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(6 * n), this._workIndex = 5;
                    break;
                case "string":
                case "bool":
                    i = this._select, r = this._select, s = this._setAdditiveIdentityOther, this.buffer = new Array(5 * n);
                    break;
                default:
                    i = this._lerp, r = this._lerpAdditive, s = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(5 * n);
            }
            this._mixBufferRegion = i, this._mixBufferRegionAdditive = r, this._setIdentity = s, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
        }
        accumulate(t, e) {
            const n = this.buffer, i = this.valueSize, r = t * i + i;
            let s = this.cumulativeWeight;
            if (0 === s) {
                for(let t = 0; t !== i; ++t)n[r + t] = n[t];
                s = e;
            } else {
                s += e;
                const t = e / s;
                this._mixBufferRegion(n, r, 0, t, i);
            }
            this.cumulativeWeight = s;
        }
        accumulateAdditive(t) {
            const e = this.buffer, n = this.valueSize, i = n * this._addIndex;
            0 === this.cumulativeWeightAdditive && this._setIdentity(), this._mixBufferRegionAdditive(e, i, 0, t, n), this.cumulativeWeightAdditive += t;
        }
        apply(t) {
            const e = this.valueSize, n = this.buffer, i = t * e + e, r = this.cumulativeWeight, s = this.cumulativeWeightAdditive, a = this.binding;
            if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
                const t = e * this._origIndex;
                this._mixBufferRegion(n, i, t, 1 - r, e);
            }
            s > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * e, 1, e);
            for(let t223 = e, r53 = e + e; t223 !== r53; ++t223)if (n[t223] !== n[t223 + e]) {
                a.setValue(n, i);
                break;
            }
        }
        saveOriginalState() {
            const t = this.binding, e = this.buffer, n = this.valueSize, i = n * this._origIndex;
            t.getValue(e, i);
            for(let t224 = n, r = i; t224 !== r; ++t224)e[t224] = e[i + t224 % n];
            this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
        }
        restoreOriginalState() {
            const t = 3 * this.valueSize;
            this.binding.setValue(this.buffer, t);
        }
        _setAdditiveIdentityNumeric() {
            const t = this._addIndex * this.valueSize, e = t + this.valueSize;
            for(let n = t; n < e; n++)this.buffer[n] = 0;
        }
        _setAdditiveIdentityQuaternion() {
            this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
        }
        _setAdditiveIdentityOther() {
            const t = this._origIndex * this.valueSize, e = this._addIndex * this.valueSize;
            for(let n = 0; n < this.valueSize; n++)this.buffer[e + n] = this.buffer[t + n];
        }
        _select(t, e, n, i, r) {
            if (i >= .5) for(let i70 = 0; i70 !== r; ++i70)t[e + i70] = t[n + i70];
        }
        _slerp(t, e, n, i) {
            re.slerpFlat(t, e, t, e, t, n, i);
        }
        _slerpAdditive(t, e, n, i, r) {
            const s = this._workIndex * r;
            re.multiplyQuaternionsFlat(t, s, t, e, t, n), re.slerpFlat(t, e, t, e, t, s, i);
        }
        _lerp(t, e, n, i, r) {
            const s = 1 - i;
            for(let a = 0; a !== r; ++a){
                const r = e + a;
                t[r] = t[r] * s + t[n + a] * i;
            }
        }
        _lerpAdditive(t, e, n, i, r) {
            for(let s = 0; s !== r; ++s){
                const r = e + s;
                t[r] = t[r] + t[n + s] * i;
            }
        }
    }
    const yh = "\\[\\]\\.:\\/", xh = new RegExp("[\\[\\]\\.:\\/]", "g"), _h = "[^\\[\\]\\.:\\/]", bh = "[^" + yh.replace("\\.", "") + "]", Mh = /((?:WC+[\/:])*)/.source.replace("WC", _h), wh = /(WCOD+)?/.source.replace("WCOD", bh), Sh = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", _h), Th = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", _h), Eh = new RegExp("^" + Mh + wh + Sh + Th + "$"), Ah = [
        "material",
        "materials",
        "bones"
    ];
    class Rh {
        constructor(t, e, n){
            this.path = e, this.parsedPath = n || Rh.parseTrackName(e), this.node = Rh.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
        }
        static create(t, e, n) {
            return t && t.isAnimationObjectGroup ? new Rh.Composite(t, e, n) : new Rh(t, e, n);
        }
        static sanitizeNodeName(t) {
            return t.replace(/\s/g, "_").replace(xh, "");
        }
        static parseTrackName(t) {
            const e = Eh.exec(t);
            if (null === e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
            const n = {
                nodeName: e[2],
                objectName: e[3],
                objectIndex: e[4],
                propertyName: e[5],
                propertyIndex: e[6]
            }, i = n.nodeName && n.nodeName.lastIndexOf(".");
            if (void 0 !== i && -1 !== i) {
                const t = n.nodeName.substring(i + 1);
                -1 !== Ah.indexOf(t) && (n.nodeName = n.nodeName.substring(0, i), n.objectName = t);
            }
            if (null === n.propertyName || 0 === n.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
            return n;
        }
        static findNode(t225, e) {
            if (void 0 === e || "" === e || "." === e || -1 === e || e === t225.name || e === t225.uuid) return t225;
            if (t225.skeleton) {
                const n = t225.skeleton.getBoneByName(e);
                if (void 0 !== n) return n;
            }
            if (t225.children) {
                const n = function(t) {
                    for(let i = 0; i < t.length; i++){
                        const r = t[i];
                        if (r.name === e || r.uuid === e) return r;
                        const s = n(r.children);
                        if (s) return s;
                    }
                    return null;
                }, i71 = n(t225.children);
                if (i71) return i71;
            }
            return null;
        }
        _getValue_unavailable() {}
        _setValue_unavailable() {}
        _getValue_direct(t, e) {
            t[e] = this.targetObject[this.propertyName];
        }
        _getValue_array(t, e) {
            const n = this.resolvedProperty;
            for(let i = 0, r = n.length; i !== r; ++i)t[e++] = n[i];
        }
        _getValue_arrayElement(t, e) {
            t[e] = this.resolvedProperty[this.propertyIndex];
        }
        _getValue_toArray(t, e) {
            this.resolvedProperty.toArray(t, e);
        }
        _setValue_direct(t, e) {
            this.targetObject[this.propertyName] = t[e];
        }
        _setValue_direct_setNeedsUpdate(t, e) {
            this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0;
        }
        _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
            this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _setValue_array(t, e) {
            const n = this.resolvedProperty;
            for(let i = 0, r = n.length; i !== r; ++i)n[i] = t[e++];
        }
        _setValue_array_setNeedsUpdate(t, e) {
            const n = this.resolvedProperty;
            for(let i = 0, r = n.length; i !== r; ++i)n[i] = t[e++];
            this.targetObject.needsUpdate = !0;
        }
        _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
            const n = this.resolvedProperty;
            for(let i = 0, r = n.length; i !== r; ++i)n[i] = t[e++];
            this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _setValue_arrayElement(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e];
        }
        _setValue_arrayElement_setNeedsUpdate(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0;
        }
        _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _setValue_fromArray(t, e) {
            this.resolvedProperty.fromArray(t, e);
        }
        _setValue_fromArray_setNeedsUpdate(t, e) {
            this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0;
        }
        _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
            this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _getValue_unbound(t, e) {
            this.bind(), this.getValue(t, e);
        }
        _setValue_unbound(t, e) {
            this.bind(), this.setValue(t, e);
        }
        bind() {
            let t = this.node;
            const e = this.parsedPath, n = e.objectName, i = e.propertyName;
            let r = e.propertyIndex;
            if (t || (t = Rh.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) return void console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
            if (n) {
                let i = e.objectIndex;
                switch(n){
                    case "materials":
                        if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                        if (!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                        t = t.material.materials;
                        break;
                    case "bones":
                        if (!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                        t = t.skeleton.bones;
                        for(let e147 = 0; e147 < t.length; e147++)if (t[e147].name === i) {
                            i = e147;
                            break;
                        }
                        break;
                    default:
                        if (void 0 === t[n]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                        t = t[n];
                }
                if (void 0 !== i) {
                    if (void 0 === t[i]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
                    t = t[i];
                }
            }
            const s = t[i];
            if (void 0 === s) {
                const n = e.nodeName;
                return void console.error("THREE.PropertyBinding: Trying to update property for track: " + n + "." + i + " but it wasn't found.", t);
            }
            let a = this.Versioning.None;
            this.targetObject = t, void 0 !== t.needsUpdate ? a = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (a = this.Versioning.MatrixWorldNeedsUpdate);
            let o = this.BindingType.Direct;
            if (void 0 !== r) {
                if ("morphTargetInfluences" === i) {
                    if (!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                    if (!t.geometry.isBufferGeometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this);
                    if (!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                    void 0 !== t.morphTargetDictionary[r] && (r = t.morphTargetDictionary[r]);
                }
                o = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r;
            } else void 0 !== s.fromArray && void 0 !== s.toArray ? (o = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (o = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = i;
            this.getValue = this.GetterByBindingType[o], this.setValue = this.SetterByBindingTypeAndVersioning[o][a];
        }
        unbind() {
            this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
        }
    }
    Rh.Composite = class {
        constructor(t, e, n){
            const i = n || Rh.parseTrackName(e);
            this._targetGroup = t, this._bindings = t.subscribe_(e, i);
        }
        getValue(t, e) {
            this.bind();
            const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
            void 0 !== i && i.getValue(t, e);
        }
        setValue(t, e) {
            const n = this._bindings;
            for(let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)n[i].setValue(t, e);
        }
        bind() {
            const t = this._bindings;
            for(let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)t[e].bind();
        }
        unbind() {
            const t = this._bindings;
            for(let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)t[e].unbind();
        }
    }, Rh.prototype.BindingType = {
        Direct: 0,
        EntireArray: 1,
        ArrayElement: 2,
        HasFromToArray: 3
    }, Rh.prototype.Versioning = {
        None: 0,
        NeedsUpdate: 1,
        MatrixWorldNeedsUpdate: 2
    }, Rh.prototype.GetterByBindingType = [
        Rh.prototype._getValue_direct,
        Rh.prototype._getValue_array,
        Rh.prototype._getValue_arrayElement,
        Rh.prototype._getValue_toArray
    ], Rh.prototype.SetterByBindingTypeAndVersioning = [
        [
            Rh.prototype._setValue_direct,
            Rh.prototype._setValue_direct_setNeedsUpdate,
            Rh.prototype._setValue_direct_setMatrixWorldNeedsUpdate
        ],
        [
            Rh.prototype._setValue_array,
            Rh.prototype._setValue_array_setNeedsUpdate,
            Rh.prototype._setValue_array_setMatrixWorldNeedsUpdate
        ],
        [
            Rh.prototype._setValue_arrayElement,
            Rh.prototype._setValue_arrayElement_setNeedsUpdate,
            Rh.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
        ],
        [
            Rh.prototype._setValue_fromArray,
            Rh.prototype._setValue_fromArray_setNeedsUpdate,
            Rh.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
        ]
    ];
    class Ch {
        constructor(){
            this.uuid = _t1(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
            const t = {};
            this._indicesByUUID = t;
            for(let e = 0, n = arguments.length; e !== n; ++e)t[arguments[e].uuid] = e;
            this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
            const e148 = this;
            this.stats = {
                objects: {
                    get total () {
                        return e148._objects.length;
                    },
                    get inUse () {
                        return this.total - e148.nCachedObjects_;
                    }
                },
                get bindingsPerObject () {
                    return e148._bindings.length;
                }
            };
        }
        add() {
            const t = this._objects, e = this._indicesByUUID, n = this._paths, i = this._parsedPaths, r = this._bindings, s = r.length;
            let a, o = t.length, l = this.nCachedObjects_;
            for(let c = 0, h = arguments.length; c !== h; ++c){
                const h = arguments[c], u = h.uuid;
                let d = e[u];
                if (void 0 === d) {
                    d = o++, e[u] = d, t.push(h);
                    for(let t226 = 0, e149 = s; t226 !== e149; ++t226)r[t226].push(new Rh(h, n[t226], i[t226]));
                } else if (d < l) {
                    a = t[d];
                    const o = --l, c = t[o];
                    e[c.uuid] = d, t[d] = c, e[u] = o, t[o] = h;
                    for(let t228 = 0, e151 = s; t228 !== e151; ++t228){
                        const e = r[t228], s = e[o];
                        let a = e[d];
                        e[d] = s, void 0 === a && (a = new Rh(h, n[t228], i[t228])), e[o] = a;
                    }
                } else t[d] !== a && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
            }
            this.nCachedObjects_ = l;
        }
        remove() {
            const t = this._objects, e = this._indicesByUUID, n = this._bindings, i = n.length;
            let r = this.nCachedObjects_;
            for(let s = 0, a = arguments.length; s !== a; ++s){
                const a = arguments[s], o = a.uuid, l = e[o];
                if (void 0 !== l && l >= r) {
                    const s = r++, c = t[s];
                    e[c.uuid] = l, t[l] = c, e[o] = s, t[s] = a;
                    for(let t230 = 0, e153 = i; t230 !== e153; ++t230){
                        const e = n[t230], i = e[s], r = e[l];
                        e[l] = i, e[s] = r;
                    }
                }
            }
            this.nCachedObjects_ = r;
        }
        uncache() {
            const t = this._objects, e = this._indicesByUUID, n = this._bindings, i = n.length;
            let r = this.nCachedObjects_, s = t.length;
            for(let a = 0, o = arguments.length; a !== o; ++a){
                const o = arguments[a].uuid, l = e[o];
                if (void 0 !== l) {
                    if (delete e[o], l < r) {
                        const a = --r, o = t[a], c = --s, h = t[c];
                        e[o.uuid] = l, t[l] = o, e[h.uuid] = a, t[a] = h, t.pop();
                        for(let t232 = 0, e155 = i; t232 !== e155; ++t232){
                            const e = n[t232], i = e[a], r = e[c];
                            e[l] = i, e[a] = r, e.pop();
                        }
                    } else {
                        const r = --s, a = t[r];
                        r > 0 && (e[a.uuid] = l), t[l] = a, t.pop();
                        for(let t235 = 0, e158 = i; t235 !== e158; ++t235){
                            const e = n[t235];
                            e[l] = e[r], e.pop();
                        }
                    }
                }
            }
            this.nCachedObjects_ = r;
        }
        subscribe_(t, e) {
            const n = this._bindingsIndicesByPath;
            let i = n[t];
            const r = this._bindings;
            if (void 0 !== i) return r[i];
            const s = this._paths, a = this._parsedPaths, o = this._objects, l = o.length, c = this.nCachedObjects_, h = new Array(l);
            i = r.length, n[t] = i, s.push(t), a.push(e), r.push(h);
            for(let n87 = c, i73 = o.length; n87 !== i73; ++n87){
                const i = o[n87];
                h[n87] = new Rh(i, t, e);
            }
            return h;
        }
        unsubscribe_(t) {
            const e = this._bindingsIndicesByPath, n = e[t];
            if (void 0 !== n) {
                const i = this._paths, r = this._parsedPaths, s = this._bindings, a = s.length - 1, o = s[a];
                e[t[a]] = n, s[n] = o, s.pop(), r[n] = r[a], r.pop(), i[n] = i[a], i.pop();
            }
        }
    }
    Ch.prototype.isAnimationObjectGroup = !0;
    class Lh {
        constructor(t, e, n = null, i = e.blendMode){
            this._mixer = t, this._clip = e, this._localRoot = n, this.blendMode = i;
            const r = e.tracks, s = r.length, a = new Array(s), o = {
                endingStart: et1,
                endingEnd: et1
            };
            for(let t238 = 0; t238 !== s; ++t238){
                const e = r[t238].createInterpolant(null);
                a[t238] = e, e.settings = o;
            }
            this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(s), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
        }
        play() {
            return this._mixer._activateAction(this), this;
        }
        stop() {
            return this._mixer._deactivateAction(this), this.reset();
        }
        reset() {
            return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
        }
        isRunning() {
            return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this);
        }
        isScheduled() {
            return this._mixer._isActiveAction(this);
        }
        startAt(t) {
            return this._startTime = t, this;
        }
        setLoop(t, e) {
            return this.loop = t, this.repetitions = e, this;
        }
        setEffectiveWeight(t) {
            return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading();
        }
        getEffectiveWeight() {
            return this._effectiveWeight;
        }
        fadeIn(t) {
            return this._scheduleFading(t, 0, 1);
        }
        fadeOut(t) {
            return this._scheduleFading(t, 1, 0);
        }
        crossFadeFrom(t, e, n) {
            if (t.fadeOut(e), this.fadeIn(e), n) {
                const n = this._clip.duration, i = t._clip.duration, r = i / n, s = n / i;
                t.warp(1, r, e), this.warp(s, 1, e);
            }
            return this;
        }
        crossFadeTo(t, e, n) {
            return t.crossFadeFrom(this, e, n);
        }
        stopFading() {
            const t = this._weightInterpolant;
            return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this;
        }
        setEffectiveTimeScale(t) {
            return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping();
        }
        getEffectiveTimeScale() {
            return this._effectiveTimeScale;
        }
        setDuration(t) {
            return this.timeScale = this._clip.duration / t, this.stopWarping();
        }
        syncWith(t) {
            return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping();
        }
        halt(t) {
            return this.warp(this._effectiveTimeScale, 0, t);
        }
        warp(t, e, n) {
            const i = this._mixer, r = i.time, s = this.timeScale;
            let a = this._timeScaleInterpolant;
            null === a && (a = i._lendControlInterpolant(), this._timeScaleInterpolant = a);
            const o = a.parameterPositions, l = a.sampleValues;
            return o[0] = r, o[1] = r + n, l[0] = t / s, l[1] = e / s, this;
        }
        stopWarping() {
            const t = this._timeScaleInterpolant;
            return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this;
        }
        getMixer() {
            return this._mixer;
        }
        getClip() {
            return this._clip;
        }
        getRoot() {
            return this._localRoot || this._mixer._root;
        }
        _update(t, e, n, i) {
            if (!this.enabled) return void this._updateWeight(t);
            const r = this._startTime;
            if (null !== r) {
                const i = (t - r) * n;
                if (i < 0 || 0 === n) return;
                this._startTime = null, e = n * i;
            }
            e *= this._updateTimeScale(t);
            const s = this._updateTime(e), a = this._updateWeight(t);
            if (a > 0) {
                const t = this._interpolants, e = this._propertyBindings;
                if (this.blendMode === st1) for(let n = 0, i74 = t.length; n !== i74; ++n)t[n].evaluate(s), e[n].accumulateAdditive(a);
                else for(let n88 = 0, r = t.length; n88 !== r; ++n88)t[n88].evaluate(s), e[n88].accumulate(i, a);
            }
        }
        _updateWeight(t) {
            let e = 0;
            if (this.enabled) {
                e = this.weight;
                const n = this._weightInterpolant;
                if (null !== n) {
                    const i = n.evaluate(t)[0];
                    e *= i, t > n.parameterPositions[1] && (this.stopFading(), 0 === i && (this.enabled = !1));
                }
            }
            return this._effectiveWeight = e, e;
        }
        _updateTimeScale(t) {
            let e = 0;
            if (!this.paused) {
                e = this.timeScale;
                const n = this._timeScaleInterpolant;
                if (null !== n) e *= n.evaluate(t)[0], t > n.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e);
            }
            return this._effectiveTimeScale = e, e;
        }
        _updateTime(t) {
            const e = this._clip.duration, n = this.loop;
            let i = this.time + t, r = this._loopCount;
            const s = 2202 === n;
            if (0 === t) return -1 === r ? i : s && 1 == (1 & r) ? e - i : i;
            if (2200 === n) {
                -1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
                t: {
                    if (i >= e) i = e;
                    else {
                        if (!(i < 0)) {
                            this.time = i;
                            break t;
                        }
                        i = 0;
                    }
                    this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = i, this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: t < 0 ? -1 : 1
                    });
                }
            } else {
                if (-1 === r && (t >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, s)) : this._setEndings(0 === this.repetitions, !0, s)), i >= e || i < 0) {
                    const n = Math.floor(i / e);
                    i -= e * n, r += Math.abs(n);
                    const a = this.repetitions - r;
                    if (a <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = t > 0 ? e : 0, this.time = i, this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: t > 0 ? 1 : -1
                    });
                    else {
                        if (1 === a) {
                            const e = t < 0;
                            this._setEndings(e, !e, s);
                        } else this._setEndings(!1, !1, s);
                        this._loopCount = r, this.time = i, this._mixer.dispatchEvent({
                            type: "loop",
                            action: this,
                            loopDelta: n
                        });
                    }
                } else this.time = i;
                if (s && 1 == (1 & r)) return e - i;
            }
            return i;
        }
        _setEndings(t, e, n) {
            const i = this._interpolantSettings;
            n ? (i.endingStart = nt1, i.endingEnd = nt1) : (i.endingStart = t ? this.zeroSlopeAtStart ? nt1 : et1 : it1, i.endingEnd = e ? this.zeroSlopeAtEnd ? nt1 : et1 : it1);
        }
        _scheduleFading(t, e, n) {
            const i = this._mixer, r = i.time;
            let s = this._weightInterpolant;
            null === s && (s = i._lendControlInterpolant(), this._weightInterpolant = s);
            const a = s.parameterPositions, o = s.sampleValues;
            return a[0] = r, o[0] = e, a[1] = r + t, o[1] = n, this;
        }
    }
    class Ph extends ft1 {
        constructor(t){
            super(), this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
        }
        _bindAction(t, e) {
            const n = t._localRoot || this._root, i = t._clip.tracks, r = i.length, s = t._propertyBindings, a = t._interpolants, o = n.uuid, l = this._bindingsByRootAndName;
            let c = l[o];
            void 0 === c && (c = {}, l[o] = c);
            for(let t239 = 0; t239 !== r; ++t239){
                const r = i[t239], l = r.name;
                let h = c[l];
                if (void 0 !== h) ++h.referenceCount, s[t239] = h;
                else {
                    if (h = s[t239], void 0 !== h) {
                        null === h._cacheIndex && (++h.referenceCount, this._addInactiveBinding(h, o, l));
                        continue;
                    }
                    const i = e && e._propertyBindings[t239].binding.parsedPath;
                    h = new vh(Rh.create(n, l, i), r.ValueTypeName, r.getValueSize()), ++h.referenceCount, this._addInactiveBinding(h, o, l), s[t239] = h;
                }
                a[t239].resultBuffer = h.buffer;
            }
        }
        _activateAction(t) {
            if (!this._isActiveAction(t)) {
                if (null === t._cacheIndex) {
                    const e = (t._localRoot || this._root).uuid, n = t._clip.uuid, i = this._actionsByClip[n];
                    this._bindAction(t, i && i.knownActions[0]), this._addInactiveAction(t, n, e);
                }
                const e = t._propertyBindings;
                for(let t240 = 0, n = e.length; t240 !== n; ++t240){
                    const n = e[t240];
                    0 == n.useCount++ && (this._lendBinding(n), n.saveOriginalState());
                }
                this._lendAction(t);
            }
        }
        _deactivateAction(t) {
            if (this._isActiveAction(t)) {
                const e = t._propertyBindings;
                for(let t241 = 0, n = e.length; t241 !== n; ++t241){
                    const n = e[t241];
                    0 == --n.useCount && (n.restoreOriginalState(), this._takeBackBinding(n));
                }
                this._takeBackAction(t);
            }
        }
        _initMemoryManager() {
            this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
            const t = this;
            this.stats = {
                actions: {
                    get total () {
                        return t._actions.length;
                    },
                    get inUse () {
                        return t._nActiveActions;
                    }
                },
                bindings: {
                    get total () {
                        return t._bindings.length;
                    },
                    get inUse () {
                        return t._nActiveBindings;
                    }
                },
                controlInterpolants: {
                    get total () {
                        return t._controlInterpolants.length;
                    },
                    get inUse () {
                        return t._nActiveControlInterpolants;
                    }
                }
            };
        }
        _isActiveAction(t) {
            const e = t._cacheIndex;
            return null !== e && e < this._nActiveActions;
        }
        _addInactiveAction(t, e, n) {
            const i = this._actions, r = this._actionsByClip;
            let s = r[e];
            if (void 0 === s) s = {
                knownActions: [
                    t
                ],
                actionByRoot: {}
            }, t._byClipCacheIndex = 0, r[e] = s;
            else {
                const e = s.knownActions;
                t._byClipCacheIndex = e.length, e.push(t);
            }
            t._cacheIndex = i.length, i.push(t), s.actionByRoot[n] = t;
        }
        _removeInactiveAction(t) {
            const e = this._actions, n = e[e.length - 1], i = t._cacheIndex;
            n._cacheIndex = i, e[i] = n, e.pop(), t._cacheIndex = null;
            const r = t._clip.uuid, s = this._actionsByClip, a = s[r], o = a.knownActions, l = o[o.length - 1], c = t._byClipCacheIndex;
            l._byClipCacheIndex = c, o[c] = l, o.pop(), t._byClipCacheIndex = null;
            delete a.actionByRoot[(t._localRoot || this._root).uuid], 0 === o.length && delete s[r], this._removeInactiveBindingsForAction(t);
        }
        _removeInactiveBindingsForAction(t) {
            const e = t._propertyBindings;
            for(let t242 = 0, n = e.length; t242 !== n; ++t242){
                const n = e[t242];
                0 == --n.referenceCount && this._removeInactiveBinding(n);
            }
        }
        _lendAction(t) {
            const e = this._actions, n = t._cacheIndex, i = this._nActiveActions++, r = e[i];
            t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r;
        }
        _takeBackAction(t) {
            const e = this._actions, n = t._cacheIndex, i = --this._nActiveActions, r = e[i];
            t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r;
        }
        _addInactiveBinding(t, e, n) {
            const i = this._bindingsByRootAndName, r = this._bindings;
            let s = i[e];
            void 0 === s && (s = {}, i[e] = s), s[n] = t, t._cacheIndex = r.length, r.push(t);
        }
        _removeInactiveBinding(t) {
            const e = this._bindings, n = t.binding, i = n.rootNode.uuid, r = n.path, s = this._bindingsByRootAndName, a = s[i], o = e[e.length - 1], l = t._cacheIndex;
            o._cacheIndex = l, e[l] = o, e.pop(), delete a[r], 0 === Object.keys(a).length && delete s[i];
        }
        _lendBinding(t) {
            const e = this._bindings, n = t._cacheIndex, i = this._nActiveBindings++, r = e[i];
            t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r;
        }
        _takeBackBinding(t) {
            const e = this._bindings, n = t._cacheIndex, i = --this._nActiveBindings, r = e[i];
            t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r;
        }
        _lendControlInterpolant() {
            const t = this._controlInterpolants, e = this._nActiveControlInterpolants++;
            let n = t[e];
            return void 0 === n && (n = new nc(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), n.__cacheIndex = e, t[e] = n), n;
        }
        _takeBackControlInterpolant(t) {
            const e = this._controlInterpolants, n = t.__cacheIndex, i = --this._nActiveControlInterpolants, r = e[i];
            t.__cacheIndex = i, e[i] = t, r.__cacheIndex = n, e[n] = r;
        }
        clipAction(t, e, n) {
            const i = e || this._root, r = i.uuid;
            let s = "string" == typeof t ? dc.findByName(i, t) : t;
            const a = null !== s ? s.uuid : t, o = this._actionsByClip[a];
            let l = null;
            if (void 0 === n && (n = null !== s ? s.blendMode : rt1), void 0 !== o) {
                const t = o.actionByRoot[r];
                if (void 0 !== t && t.blendMode === n) return t;
                l = o.knownActions[0], null === s && (s = l._clip);
            }
            if (null === s) return null;
            const c = new Lh(this, s, e, n);
            return this._bindAction(c, l), this._addInactiveAction(c, a, r), c;
        }
        existingAction(t, e) {
            const n = e || this._root, i = n.uuid, r = "string" == typeof t ? dc.findByName(n, t) : t, s = r ? r.uuid : t, a = this._actionsByClip[s];
            return void 0 !== a && a.actionByRoot[i] || null;
        }
        stopAllAction() {
            const t = this._actions;
            for(let e = this._nActiveActions - 1; e >= 0; --e)t[e].stop();
            return this;
        }
        update(t) {
            t *= this.timeScale;
            const e = this._actions, n = this._nActiveActions, i = this.time += t, r = Math.sign(t), s = this._accuIndex ^= 1;
            for(let a = 0; a !== n; ++a)e[a]._update(i, t, r, s);
            const a35 = this._bindings, o = this._nActiveBindings;
            for(let t243 = 0; t243 !== o; ++t243)a35[t243].apply(s);
            return this;
        }
        setTime(t) {
            this.time = 0;
            for(let t244 = 0; t244 < this._actions.length; t244++)this._actions[t244].time = 0;
            return this.update(t);
        }
        getRoot() {
            return this._root;
        }
        uncacheClip(t) {
            const e = this._actions, n = t.uuid, i = this._actionsByClip, r = i[n];
            if (void 0 !== r) {
                const t = r.knownActions;
                for(let n89 = 0, i75 = t.length; n89 !== i75; ++n89){
                    const i = t[n89];
                    this._deactivateAction(i);
                    const r = i._cacheIndex, s = e[e.length - 1];
                    i._cacheIndex = null, i._byClipCacheIndex = null, s._cacheIndex = r, e[r] = s, e.pop(), this._removeInactiveBindingsForAction(i);
                }
                delete i[n];
            }
        }
        uncacheRoot(t) {
            const e = t.uuid, n = this._actionsByClip;
            for(const t245 in n){
                const i = n[t245].actionByRoot[e];
                void 0 !== i && (this._deactivateAction(i), this._removeInactiveAction(i));
            }
            const i = this._bindingsByRootAndName[e];
            if (void 0 !== i) for(const t246 in i){
                const e = i[t246];
                e.restoreOriginalState(), this._removeInactiveBinding(e);
            }
        }
        uncacheAction(t, e) {
            const n = this.existingAction(t, e);
            null !== n && (this._deactivateAction(n), this._removeInactiveAction(n));
        }
    }
    Ph.prototype._controlInterpolantsResultBuffer = new Float32Array(1);
    class Dh {
        constructor(t){
            "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), t = arguments[1]), this.value = t;
        }
        clone() {
            return new Dh(void 0 === this.value.clone ? this.value : this.value.clone());
        }
    }
    class Ih extends ua {
        constructor(t, e, n = 1){
            super(t, e), this.meshPerAttribute = n;
        }
        copy(t) {
            return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this;
        }
        clone(t) {
            const e = super.clone(t);
            return e.meshPerAttribute = this.meshPerAttribute, e;
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.isInstancedInterleavedBuffer = !0, e.meshPerAttribute = this.meshPerAttribute, e;
        }
    }
    Ih.prototype.isInstancedInterleavedBuffer = !0;
    class Nh {
        constructor(t, e, n, i, r){
            this.buffer = t, this.type = e, this.itemSize = n, this.elementSize = i, this.count = r, this.version = 0;
        }
        set needsUpdate(t) {
            !0 === t && this.version++;
        }
        setBuffer(t) {
            return this.buffer = t, this;
        }
        setType(t, e) {
            return this.type = t, this.elementSize = e, this;
        }
        setItemSize(t) {
            return this.itemSize = t, this;
        }
        setCount(t) {
            return this.count = t, this;
        }
    }
    Nh.prototype.isGLBufferAttribute = !0;
    function Bh(t, e) {
        return t.distance - e.distance;
    }
    function Oh(t, e, n, i) {
        if (t.layers.test(e.layers) && t.raycast(e, n), !0 === i) {
            const i = t.children;
            for(let t247 = 0, r = i.length; t247 < r; t247++)Oh(i[t247], e, n, !0);
        }
    }
    const zh = new Rt;
    class Uh {
        constructor(t = new Rt(1 / 0, 1 / 0), e = new Rt(-1 / 0, -1 / 0)){
            this.min = t, this.max = e;
        }
        set(t, e) {
            return this.min.copy(t), this.max.copy(e), this;
        }
        setFromPoints(t) {
            this.makeEmpty();
            for(let e = 0, n = t.length; e < n; e++)this.expandByPoint(t[e]);
            return this;
        }
        setFromCenterAndSize(t, e) {
            const n = zh.copy(e).multiplyScalar(.5);
            return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t) {
            return this.min.copy(t.min), this.max.copy(t.max), this;
        }
        makeEmpty() {
            return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this;
        }
        isEmpty() {
            return this.max.x < this.min.x || this.max.y < this.min.y;
        }
        getCenter(t) {
            return this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5);
        }
        getSize(t) {
            return this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min);
        }
        expandByPoint(t) {
            return this.min.min(t), this.max.max(t), this;
        }
        expandByVector(t) {
            return this.min.sub(t), this.max.add(t), this;
        }
        expandByScalar(t) {
            return this.min.addScalar(-t), this.max.addScalar(t), this;
        }
        containsPoint(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y);
        }
        containsBox(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y;
        }
        getParameter(t, e) {
            return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y));
        }
        intersectsBox(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y);
        }
        clampPoint(t, e) {
            return e.copy(t).clamp(this.min, this.max);
        }
        distanceToPoint(t) {
            return zh.copy(t).clamp(this.min, this.max).sub(t).length();
        }
        intersect(t) {
            return this.min.max(t.min), this.max.min(t.max), this;
        }
        union(t) {
            return this.min.min(t.min), this.max.max(t.max), this;
        }
        translate(t) {
            return this.min.add(t), this.max.add(t), this;
        }
        equals(t) {
            return t.min.equals(this.min) && t.max.equals(this.max);
        }
    }
    Uh.prototype.isBox2 = !0;
    const Fh = new se, Hh = new se;
    class Gh {
        constructor(t = new se, e = new se){
            this.start = t, this.end = e;
        }
        set(t, e) {
            return this.start.copy(t), this.end.copy(e), this;
        }
        copy(t) {
            return this.start.copy(t.start), this.end.copy(t.end), this;
        }
        getCenter(t) {
            return t.addVectors(this.start, this.end).multiplyScalar(.5);
        }
        delta(t) {
            return t.subVectors(this.end, this.start);
        }
        distanceSq() {
            return this.start.distanceToSquared(this.end);
        }
        distance() {
            return this.start.distanceTo(this.end);
        }
        at(t, e) {
            return this.delta(e).multiplyScalar(t).add(this.start);
        }
        closestPointToPointParameter(t, e) {
            Fh.subVectors(t, this.start), Hh.subVectors(this.end, this.start);
            const n = Hh.dot(Hh);
            let i = Hh.dot(Fh) / n;
            return e && (i = bt1(i, 0, 1)), i;
        }
        closestPointToPoint(t, e, n) {
            const i = this.closestPointToPointParameter(t, e);
            return this.delta(n).multiplyScalar(i).add(this.start);
        }
        applyMatrix4(t) {
            return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this;
        }
        equals(t) {
            return t.start.equals(this.start) && t.end.equals(this.end);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    const kh = new se;
    const Vh = new se, Wh = new Oe, jh = new Oe;
    class qh extends so {
        constructor(t){
            const e = Xh(t), n = new Vn, i = [], r = [], s = new Wt(0, 0, 1), a = new Wt(0, 1, 0);
            for(let t248 = 0; t248 < e.length; t248++){
                const n = e[t248];
                n.parent && n.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), r.push(s.r, s.g, s.b), r.push(a.r, a.g, a.b));
            }
            n.setAttribute("position", new Nn(i, 3)), n.setAttribute("color", new Nn(r, 3));
            super(n, new Za({
                vertexColors: !0,
                depthTest: !1,
                depthWrite: !1,
                toneMapped: !1,
                transparent: !0
            })), this.type = "SkeletonHelper", this.isSkeletonHelper = !0, this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1;
        }
        updateMatrixWorld(t) {
            const e = this.bones, n = this.geometry, i = n.getAttribute("position");
            jh.copy(this.root.matrixWorld).invert();
            for(let t249 = 0, n90 = 0; t249 < e.length; t249++){
                const r = e[t249];
                r.parent && r.parent.isBone && (Wh.multiplyMatrices(jh, r.matrixWorld), Vh.setFromMatrixPosition(Wh), i.setXYZ(n90, Vh.x, Vh.y, Vh.z), Wh.multiplyMatrices(jh, r.parent.matrixWorld), Vh.setFromMatrixPosition(Wh), i.setXYZ(n90 + 1, Vh.x, Vh.y, Vh.z), n90 += 2);
            }
            n.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(t);
        }
    }
    function Xh(t) {
        const e = [];
        !0 === t.isBone && e.push(t);
        for(let n = 0; n < t.children.length; n++)e.push.apply(e, Xh(t.children[n]));
        return e;
    }
    const Jh = new se, Yh = new Wt, Zh = new Wt;
    class Kh extends so {
        constructor(t = 10, e = 10, n = 4473924, i = 8947848){
            n = new Wt(n), i = new Wt(i);
            const r = e / 2, s = t / e, a = t / 2, o = [], l = [];
            for(let t250 = 0, c = 0, h = -a; t250 <= e; t250++, h += s){
                o.push(-a, 0, h, a, 0, h), o.push(h, 0, -a, h, 0, a);
                const e = t250 === r ? n : i;
                e.toArray(l, c), c += 3, e.toArray(l, c), c += 3, e.toArray(l, c), c += 3, e.toArray(l, c), c += 3;
            }
            const c15 = new Vn;
            c15.setAttribute("position", new Nn(o, 3)), c15.setAttribute("color", new Nn(l, 3));
            super(c15, new Za({
                vertexColors: !0,
                toneMapped: !1
            })), this.type = "GridHelper";
        }
    }
    const Qh = new se, $h = new se, tu = new se;
    const eu = new se, nu = new mi;
    function iu(t, e, n, i, r, s, a) {
        eu.set(r, s, a).unproject(i);
        const o = e[t];
        if (void 0 !== o) {
            const t = n.getAttribute("position");
            for(let e = 0, n91 = o.length; e < n91; e++)t.setXYZ(o[e], eu.x, eu.y, eu.z);
        }
    }
    const ru = new le;
    class su extends so {
        constructor(t, e = 16776960){
            const n = new Uint16Array([
                0,
                1,
                1,
                2,
                2,
                3,
                3,
                0,
                4,
                5,
                5,
                6,
                6,
                7,
                7,
                4,
                0,
                4,
                1,
                5,
                2,
                6,
                3,
                7
            ]), i = new Float32Array(24), r = new Vn;
            r.setIndex(new Tn(n, 1)), r.setAttribute("position", new Tn(i, 3)), super(r, new Za({
                color: e,
                toneMapped: !1
            })), this.object = t, this.type = "BoxHelper", this.matrixAutoUpdate = !1, this.update();
        }
        update(t) {
            if (void 0 !== t && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && ru.setFromObject(this.object), ru.isEmpty()) return;
            const e = ru.min, n = ru.max, i = this.geometry.attributes.position, r = i.array;
            r[0] = n.x, r[1] = n.y, r[2] = n.z, r[3] = e.x, r[4] = n.y, r[5] = n.z, r[6] = e.x, r[7] = e.y, r[8] = n.z, r[9] = n.x, r[10] = e.y, r[11] = n.z, r[12] = n.x, r[13] = n.y, r[14] = e.z, r[15] = e.x, r[16] = n.y, r[17] = e.z, r[18] = e.x, r[19] = e.y, r[20] = e.z, r[21] = n.x, r[22] = e.y, r[23] = e.z, i.needsUpdate = !0, this.geometry.computeBoundingSphere();
        }
        setFromObject(t) {
            return this.object = t, this.update(), this;
        }
        copy(t) {
            return so.prototype.copy.call(this, t), this.object = t.object, this;
        }
    }
    const au = new se;
    let ou, lu;
    class cu extends so {
        constructor(t = 1){
            const e = [
                0,
                0,
                0,
                t,
                0,
                0,
                0,
                0,
                0,
                0,
                t,
                0,
                0,
                0,
                0,
                0,
                0,
                t
            ], n = new Vn;
            n.setAttribute("position", new Nn(e, 3)), n.setAttribute("color", new Nn([
                1,
                0,
                0,
                1,
                .6,
                0,
                0,
                1,
                0,
                .6,
                1,
                0,
                0,
                0,
                1,
                0,
                .6,
                1
            ], 3));
            super(n, new Za({
                vertexColors: !0,
                toneMapped: !1
            })), this.type = "AxesHelper";
        }
        setColors(t, e, n) {
            const i = new Wt, r = this.geometry.attributes.color.array;
            return i.set(t), i.toArray(r, 0), i.toArray(r, 3), i.set(e), i.toArray(r, 6), i.toArray(r, 9), i.set(n), i.toArray(r, 12), i.toArray(r, 15), this.geometry.attributes.color.needsUpdate = !0, this;
        }
        dispose() {
            this.geometry.dispose(), this.material.dispose();
        }
    }
    const hu = new ArrayBuffer(4), uu = new Float32Array(hu), du = new Uint32Array(hu), pu = new Uint32Array(512), mu = new Uint32Array(512);
    for(let t2 = 0; t2 < 256; ++t2){
        const e = t2 - 127;
        e < -27 ? (pu[t2] = 0, pu[256 | t2] = 32768, mu[t2] = 24, mu[256 | t2] = 24) : e < -14 ? (pu[t2] = 1024 >> -e - 14, pu[256 | t2] = 1024 >> -e - 14 | 32768, mu[t2] = -e - 1, mu[256 | t2] = -e - 1) : e <= 15 ? (pu[t2] = e + 15 << 10, pu[256 | t2] = e + 15 << 10 | 32768, mu[t2] = 13, mu[256 | t2] = 13) : e < 128 ? (pu[t2] = 31744, pu[256 | t2] = 64512, mu[t2] = 24, mu[256 | t2] = 24) : (pu[t2] = 31744, pu[256 | t2] = 64512, mu[t2] = 13, mu[256 | t2] = 13);
    }
    const fu = new Uint32Array(2048), gu = new Uint32Array(64), vu = new Uint32Array(64);
    for(let t3 = 1; t3 < 1024; ++t3){
        let e = t3 << 13, n = 0;
        for(; 0 == (8388608 & e);)e <<= 1, n -= 8388608;
        e &= -8388609, n += 947912704, fu[t3] = e | n;
    }
    for(let t4 = 1024; t4 < 2048; ++t4)fu[t4] = 939524096 + (t4 - 1024 << 13);
    for(let t5 = 1; t5 < 31; ++t5)gu[t5] = t5 << 23;
    gu[31] = 1199570944, gu[32] = 2147483648;
    for(let t6 = 33; t6 < 63; ++t6)gu[t6] = 2147483648 + (t6 - 32 << 23);
    gu[63] = 3347054592;
    for(let t7 = 1; t7 < 64; ++t7)32 !== t7 && (vu[t7] = 1024);
    xo.create = function(t, e) {
        return console.log("THREE.Curve.create() has been deprecated"), t.prototype = Object.create(xo.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t;
    }, Ho.prototype.fromPoints = function(t) {
        return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(t);
    };
    Kh.prototype.setColors = function() {
        console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.");
    }, qh.prototype.update = function() {
        console.error("THREE.SkeletonHelper: update() no longer needs to be called.");
    };
    vc.prototype.extractUrlBase = function(t) {
        return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), Wc.extractUrlBase(t);
    }, vc.Handlers = {
        add: function() {
            console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.");
        },
        get: function() {
            console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.");
        }
    };
    Uh.prototype.center = function(t) {
        return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(t);
    }, Uh.prototype.empty = function() {
        return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty();
    }, Uh.prototype.isIntersectionBox = function(t) {
        return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t);
    }, Uh.prototype.size = function(t) {
        return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(t);
    }, le.prototype.center = function(t) {
        return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(t);
    }, le.prototype.empty = function() {
        return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty();
    }, le.prototype.isIntersectionBox = function(t) {
        return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t);
    }, le.prototype.isIntersectionSphere = function(t) {
        return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t);
    }, le.prototype.size = function(t) {
        return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(t);
    }, qe.prototype.toVector3 = function() {
        console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead");
    }, Ae.prototype.empty = function() {
        return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty();
    }, Ei.prototype.setFromMatrix = function(t) {
        return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(t);
    }, Gh.prototype.center = function(t) {
        return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(t);
    }, Ct1.prototype.flattenToArrayOffset = function(t, e) {
        return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e);
    }, Ct1.prototype.multiplyVector3 = function(t) {
        return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), t.applyMatrix3(this);
    }, Ct1.prototype.multiplyVector3Array = function() {
        console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
    }, Ct1.prototype.applyToBufferAttribute = function(t) {
        return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), t.applyMatrix3(this);
    }, Ct1.prototype.applyToVector3Array = function() {
        console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
    }, Ct1.prototype.getInverse = function(t) {
        return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(t).invert();
    }, Oe.prototype.extractPosition = function(t) {
        return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(t);
    }, Oe.prototype.flattenToArrayOffset = function(t, e) {
        return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e);
    }, Oe.prototype.getPosition = function() {
        return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), (new se).setFromMatrixColumn(this, 3);
    }, Oe.prototype.setRotationFromQuaternion = function(t) {
        return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(t);
    }, Oe.prototype.multiplyToArray = function() {
        console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
    }, Oe.prototype.multiplyVector3 = function(t) {
        return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this);
    }, Oe.prototype.multiplyVector4 = function(t) {
        return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this);
    }, Oe.prototype.multiplyVector3Array = function() {
        console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
    }, Oe.prototype.rotateAxis = function(t) {
        console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), t.transformDirection(this);
    }, Oe.prototype.crossVector = function(t) {
        return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this);
    }, Oe.prototype.translate = function() {
        console.error("THREE.Matrix4: .translate() has been removed.");
    }, Oe.prototype.rotateX = function() {
        console.error("THREE.Matrix4: .rotateX() has been removed.");
    }, Oe.prototype.rotateY = function() {
        console.error("THREE.Matrix4: .rotateY() has been removed.");
    }, Oe.prototype.rotateZ = function() {
        console.error("THREE.Matrix4: .rotateZ() has been removed.");
    }, Oe.prototype.rotateByAxis = function() {
        console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
    }, Oe.prototype.applyToBufferAttribute = function(t) {
        return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), t.applyMatrix4(this);
    }, Oe.prototype.applyToVector3Array = function() {
        console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
    }, Oe.prototype.makeFrustum = function(t, e, n, i, r, s) {
        return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(t, e, i, n, r, s);
    }, Oe.prototype.getInverse = function(t) {
        return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(t).invert();
    }, wi.prototype.isIntersectionLine = function(t) {
        return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(t);
    }, re.prototype.multiplyVector3 = function(t) {
        return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), t.applyQuaternion(this);
    }, re.prototype.inverse = function() {
        return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."), this.invert();
    }, Be.prototype.isIntersectionBox = function(t) {
        return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t);
    }, Be.prototype.isIntersectionPlane = function(t) {
        return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(t);
    }, Be.prototype.isIntersectionSphere = function(t) {
        return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t);
    }, xn.prototype.area = function() {
        return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea();
    }, xn.prototype.barycoordFromPoint = function(t, e) {
        return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(t, e);
    }, xn.prototype.midpoint = function(t) {
        return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(t);
    }, xn.prototypenormal = function(t) {
        return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(t);
    }, xn.prototype.plane = function(t) {
        return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(t);
    }, xn.barycoordFromPoint = function(t, e, n, i, r) {
        return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), xn.getBarycoord(t, e, n, i, r);
    }, xn.normal = function(t, e, n, i) {
        return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), xn.getNormal(t, e, n, i);
    }, $o.prototype.extractAllPoints = function(t) {
        return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(t);
    }, $o.prototype.extrude = function(t) {
        return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new Rl(this, t);
    }, $o.prototype.makeGeometry = function(t) {
        return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new Il(this, t);
    }, Rt.prototype.fromAttribute = function(t, e, n) {
        return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n);
    }, Rt.prototype.distanceToManhattan = function(t) {
        return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t);
    }, Rt.prototype.lengthManhattan = function() {
        return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
    }, se.prototype.setEulerFromRotationMatrix = function() {
        console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.");
    }, se.prototype.setEulerFromQuaternion = function() {
        console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");
    }, se.prototype.getPositionFromMatrix = function(t) {
        return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(t);
    }, se.prototype.getScaleFromMatrix = function(t) {
        return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(t);
    }, se.prototype.getColumnFromMatrix = function(t, e) {
        return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t);
    }, se.prototype.applyProjection = function(t) {
        return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(t);
    }, se.prototype.fromAttribute = function(t, e, n) {
        return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n);
    }, se.prototype.distanceToManhattan = function(t) {
        return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t);
    }, se.prototype.lengthManhattan = function() {
        return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
    }, Kt.prototype.fromAttribute = function(t, e, n) {
        return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n);
    }, Kt.prototype.lengthManhattan = function() {
        return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
    }, ln.prototype.getChildByName = function(t) {
        return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(t);
    }, ln.prototype.renderDepth = function() {
        console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.");
    }, ln.prototype.translate = function(t, e) {
        return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, t);
    }, ln.prototype.getWorldRotation = function() {
        console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.");
    }, ln.prototype.applyMatrix = function(t) {
        return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t);
    }, Object.defineProperties(ln.prototype, {
        eulerOrder: {
            get: function() {
                return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order;
            },
            set: function(t) {
                console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = t;
            }
        },
        useQuaternion: {
            get: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
            },
            set: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
            }
        }
    }), oi.prototype.setDrawMode = function() {
        console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
    }, Object.defineProperties(oi.prototype, {
        drawMode: {
            get: function() {
                return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), 0;
            },
            set: function() {
                console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
            }
        }
    }), Ua.prototype.initBones = function() {
        console.error("THREE.SkinnedMesh: initBones() has been removed.");
    }, fi.prototype.setLens = function(t, e) {
        console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== e && (this.filmGauge = e), this.setFocalLength(t);
    }, Object.defineProperties(Sc.prototype, {
        onlyShadow: {
            set: function() {
                console.warn("THREE.Light: .onlyShadow has been removed.");
            }
        },
        shadowCameraFov: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = t;
            }
        },
        shadowCameraLeft: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = t;
            }
        },
        shadowCameraRight: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = t;
            }
        },
        shadowCameraTop: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = t;
            }
        },
        shadowCameraBottom: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = t;
            }
        },
        shadowCameraNear: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = t;
            }
        },
        shadowCameraFar: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = t;
            }
        },
        shadowCameraVisible: {
            set: function() {
                console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.");
            }
        },
        shadowBias: {
            set: function(t) {
                console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = t;
            }
        },
        shadowDarkness: {
            set: function() {
                console.warn("THREE.Light: .shadowDarkness has been removed.");
            }
        },
        shadowMapWidth: {
            set: function(t) {
                console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = t;
            }
        },
        shadowMapHeight: {
            set: function(t) {
                console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = t;
            }
        }
    }), Object.defineProperties(Tn.prototype, {
        length: {
            get: function() {
                return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length;
            }
        },
        dynamic: {
            get: function() {
                return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.usage === dt1;
            },
            set: function() {
                console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(dt1);
            }
        }
    }), Tn.prototype.setDynamic = function(t) {
        return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === t ? dt1 : ut1), this;
    }, Tn.prototype.copyIndicesArray = function() {
        console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");
    }, Tn.prototype.setArray = function() {
        console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
    }, Vn.prototype.addIndex = function(t) {
        console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(t);
    }, Vn.prototype.addAttribute = function(t, e) {
        return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : this.setAttribute(t, e) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(t, new Tn(arguments[1], arguments[2])));
    }, Vn.prototype.addDrawCall = function(t, e, n) {
        void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(t, e);
    }, Vn.prototype.clearDrawCalls = function() {
        console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups();
    }, Vn.prototype.computeOffsets = function() {
        console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
    }, Vn.prototype.removeAttribute = function(t) {
        return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(t);
    }, Vn.prototype.applyMatrix = function(t) {
        return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t);
    }, Object.defineProperties(Vn.prototype, {
        drawcalls: {
            get: function() {
                return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups;
            }
        },
        offsets: {
            get: function() {
                return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups;
            }
        }
    }), ua.prototype.setDynamic = function(t) {
        return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === t ? dt1 : ut1), this;
    }, ua.prototype.setArray = function() {
        console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
    }, Rl.prototype.getArrays = function() {
        console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.");
    }, Rl.prototype.addShapeList = function() {
        console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.");
    }, Rl.prototype.addShape = function() {
        console.error("THREE.ExtrudeGeometry: .addShape() has been removed.");
    }, ha.prototype.dispose = function() {
        console.error("THREE.Scene: .dispose() has been removed.");
    }, Dh.prototype.onUpdate = function() {
        return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this;
    }, Object.defineProperties(bn.prototype, {
        wrapAround: {
            get: function() {
                console.warn("THREE.Material: .wrapAround has been removed.");
            },
            set: function() {
                console.warn("THREE.Material: .wrapAround has been removed.");
            }
        },
        overdraw: {
            get: function() {
                console.warn("THREE.Material: .overdraw has been removed.");
            },
            set: function() {
                console.warn("THREE.Material: .overdraw has been removed.");
            }
        },
        wrapRGB: {
            get: function() {
                return console.warn("THREE.Material: .wrapRGB has been removed."), new Wt;
            }
        },
        shading: {
            get: function() {
                console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
            },
            set: function(t) {
                console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === t;
            }
        },
        stencilMask: {
            get: function() {
                return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask;
            },
            set: function(t) {
                console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = t;
            }
        },
        vertexTangents: {
            get: function() {
                console.warn("THREE." + this.type + ": .vertexTangents has been removed.");
            },
            set: function() {
                console.warn("THREE." + this.type + ": .vertexTangents has been removed.");
            }
        }
    }), Object.defineProperties(pi.prototype, {
        derivatives: {
            get: function() {
                return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives;
            },
            set: function(t) {
                console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = t;
            }
        }
    }), aa.prototype.clearTarget = function(t, e, n, i) {
        console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(t), this.clear(e, n, i);
    }, aa.prototype.animate = function(t) {
        console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(t);
    }, aa.prototype.getCurrentRenderTarget = function() {
        return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget();
    }, aa.prototype.getMaxAnisotropy = function() {
        return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy();
    }, aa.prototype.getPrecision = function() {
        return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision;
    }, aa.prototype.resetGLState = function() {
        return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset();
    }, aa.prototype.supportsFloatTextures = function() {
        return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float");
    }, aa.prototype.supportsHalfFloatTextures = function() {
        return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float");
    }, aa.prototype.supportsStandardDerivatives = function() {
        return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives");
    }, aa.prototype.supportsCompressedTextureS3TC = function() {
        return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc");
    }, aa.prototype.supportsCompressedTexturePVRTC = function() {
        return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc");
    }, aa.prototype.supportsBlendMinMax = function() {
        return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax");
    }, aa.prototype.supportsVertexTextures = function() {
        return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures;
    }, aa.prototype.supportsInstancedArrays = function() {
        return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays");
    }, aa.prototype.enableScissorTest = function(t) {
        console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(t);
    }, aa.prototype.initMaterial = function() {
        console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
    }, aa.prototype.addPrePlugin = function() {
        console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
    }, aa.prototype.addPostPlugin = function() {
        console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
    }, aa.prototype.updateShadowMap = function() {
        console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
    }, aa.prototype.setFaceCulling = function() {
        console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");
    }, aa.prototype.allocTextureUnit = function() {
        console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");
    }, aa.prototype.setTexture = function() {
        console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
    }, aa.prototype.setTexture2D = function() {
        console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
    }, aa.prototype.setTextureCube = function() {
        console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");
    }, aa.prototype.getActiveMipMapLevel = function() {
        return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel();
    }, Object.defineProperties(aa.prototype, {
        shadowMapEnabled: {
            get: function() {
                return this.shadowMap.enabled;
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = t;
            }
        },
        shadowMapType: {
            get: function() {
                return this.shadowMap.type;
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = t;
            }
        },
        shadowMapCullFace: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
            }
        },
        context: {
            get: function() {
                return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext();
            }
        },
        vr: {
            get: function() {
                return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr;
            }
        },
        gammaInput: {
            get: function() {
                return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1;
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.");
            }
        },
        gammaOutput: {
            get: function() {
                return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1;
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = !0 === t ? ot1 : at;
            }
        },
        toneMappingWhitePoint: {
            get: function() {
                return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."), 1;
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.");
            }
        },
        gammaFactor: {
            get: function() {
                return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."), 2;
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.");
            }
        }
    }), Object.defineProperties(Ys.prototype, {
        cullFace: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
            }
        },
        renderReverseSided: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
            }
        },
        renderSingleSided: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
            }
        }
    });
    Object.defineProperties(Qt.prototype, {
        wrapS: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS;
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = t;
            }
        },
        wrapT: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT;
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = t;
            }
        },
        magFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter;
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = t;
            }
        },
        minFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter;
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = t;
            }
        },
        anisotropy: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy;
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = t;
            }
        },
        offset: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset;
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = t;
            }
        },
        repeat: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat;
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = t;
            }
        },
        format: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format;
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = t;
            }
        },
        type: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type;
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = t;
            }
        },
        generateMipmaps: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps;
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = t;
            }
        }
    }), uh.prototype.load = function(t251) {
        console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
        const e = this;
        return (new $c).load(t251, function(t) {
            e.setBuffer(t);
        }), this;
    }, gh.prototype.getData = function() {
        return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData();
    }, vi.prototype.updateCubeMap = function(t, e) {
        return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(t, e);
    }, vi.prototype.clear = function(t, e, n, i) {
        return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."), this.renderTarget.clear(t, e, n, i);
    }, qt.crossOrigin = void 0, qt.loadTexture = function(t, e, n, i) {
        console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
        const r = new wc;
        r.setCrossOrigin(this.crossOrigin);
        const s = r.load(t, n, void 0, i);
        return e && (s.mapping = e), s;
    }, qt.loadTextureCube = function(t, e, n, i) {
        console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
        const r = new bc;
        r.setCrossOrigin(this.crossOrigin);
        const s = r.load(t, n, void 0, i);
        return e && (s.mapping = e), s;
    }, qt.loadCompressedTexture = function() {
        console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");
    }, qt.loadCompressedTextureCube = function() {
        console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");
    };
    const yu = {
        createMultiMaterialObject: function() {
            console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js");
        },
        detach: function() {
            console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js");
        },
        attach: function() {
            console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js");
        }
    };
    "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
        detail: {
            revision: e1
        }
    })), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = e1), t8.ACESFilmicToneMapping = 4, t8.AddEquation = n1, t8.AddOperation = 2, t8.AdditiveAnimationBlendMode = st1, t8.AdditiveBlending = 2, t8.AlphaFormat = 1021, t8.AlwaysDepth = 1, t8.AlwaysStencilFunc = 519, t8.AmbientLight = Fc, t8.AmbientLightProbe = eh, t8.AnimationClip = dc, t8.AnimationLoader = class extends vc {
        constructor(t){
            super(t);
        }
        load(t, e161, n92, i) {
            const r = this, s = new xc(this.manager);
            s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(t, function(n) {
                try {
                    e161(r.parse(JSON.parse(n)));
                } catch (e) {
                    i ? i(e) : console.error(e), r.manager.itemError(t);
                }
            }, n92, i);
        }
        parse(t) {
            const e = [];
            for(let n = 0; n < t.length; n++){
                const i = dc.parse(t[n]);
                e.push(i);
            }
            return e;
        }
    }, t8.AnimationMixer = Ph, t8.AnimationObjectGroup = Ch, t8.AnimationUtils = $l, t8.ArcCurve = bo, t8.ArrayCamera = $s, t8.ArrowHelper = class extends ln {
        constructor(t = new se(0, 0, 1), e = new se(0, 0, 0), n = 1, i = 16776960, r = .2 * n, s = .2 * r){
            super(), this.type = "ArrowHelper", void 0 === ou && (ou = new Vn, ou.setAttribute("position", new Nn([
                0,
                0,
                0,
                0,
                1,
                0
            ], 3)), lu = new Wo(0, .5, 1, 5, 1), lu.translate(0, -0.5, 0)), this.position.copy(e), this.line = new no(ou, new Za({
                color: i,
                toneMapped: !1
            })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new oi(lu, new Mn({
                color: i,
                toneMapped: !1
            })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(n, r, s);
        }
        setDirection(t) {
            if (t.y > .99999) this.quaternion.set(0, 0, 0, 1);
            else if (t.y < -0.99999) this.quaternion.set(1, 0, 0, 0);
            else {
                au.set(t.z, 0, -t.x).normalize();
                const e = Math.acos(t.y);
                this.quaternion.setFromAxisAngle(au, e);
            }
        }
        setLength(t, e = .2 * t, n = .2 * e) {
            this.line.scale.set(1, Math.max(1e-4, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(n, e, n), this.cone.position.y = t, this.cone.updateMatrix();
        }
        setColor(t) {
            this.line.material.color.set(t), this.cone.material.color.set(t);
        }
        copy(t) {
            return super.copy(t, !1), this.line.copy(t.line), this.cone.copy(t.cone), this;
        }
    }, t8.Audio = uh, t8.AudioAnalyser = gh, t8.AudioContext = Qc, t8.AudioListener = class extends ln {
        constructor(){
            super(), this.type = "AudioListener", this.context = Qc.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new sh;
        }
        getInput() {
            return this.gain;
        }
        removeFilter() {
            return null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this;
        }
        getFilter() {
            return this.filter;
        }
        setFilter(t) {
            return null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this;
        }
        getMasterVolume() {
            return this.gain.gain.value;
        }
        setMasterVolume(t) {
            return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this;
        }
        updateMatrixWorld(t) {
            super.updateMatrixWorld(t);
            const e = this.context.listener, n = this.up;
            if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(oh, lh, ch), hh.set(0, 0, -1).applyQuaternion(lh), e.positionX) {
                const t = this.context.currentTime + this.timeDelta;
                e.positionX.linearRampToValueAtTime(oh.x, t), e.positionY.linearRampToValueAtTime(oh.y, t), e.positionZ.linearRampToValueAtTime(oh.z, t), e.forwardX.linearRampToValueAtTime(hh.x, t), e.forwardY.linearRampToValueAtTime(hh.y, t), e.forwardZ.linearRampToValueAtTime(hh.z, t), e.upX.linearRampToValueAtTime(n.x, t), e.upY.linearRampToValueAtTime(n.y, t), e.upZ.linearRampToValueAtTime(n.z, t);
            } else e.setPosition(oh.x, oh.y, oh.z), e.setOrientation(hh.x, hh.y, hh.z, n.x, n.y, n.z);
        }
    }, t8.AudioLoader = $c, t8.AxesHelper = cu, t8.AxisHelper = class extends cu {
        constructor(t){
            console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."), super(t);
        }
    }, t8.BackSide = 1, t8.BasicDepthPacking = 3200, t8.BasicShadowMap = 0, t8.BinaryTextureLoader = class extends Mc {
        constructor(t){
            console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."), super(t);
        }
    }, t8.Bone = Fa, t8.BooleanKeyframeTrack = sc, t8.BoundingBoxHelper = class extends su {
        constructor(t, e){
            console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."), super(t, e);
        }
    }, t8.Box2 = Uh, t8.Box3 = le, t8.Box3Helper = class extends so {
        constructor(t, e = 16776960){
            const n = new Uint16Array([
                0,
                1,
                1,
                2,
                2,
                3,
                3,
                0,
                4,
                5,
                5,
                6,
                6,
                7,
                7,
                4,
                0,
                4,
                1,
                5,
                2,
                6,
                3,
                7
            ]), i = new Vn;
            i.setIndex(new Tn(n, 1)), i.setAttribute("position", new Nn([
                1,
                1,
                1,
                -1,
                1,
                1,
                -1,
                -1,
                1,
                1,
                -1,
                1,
                1,
                1,
                -1,
                -1,
                1,
                -1,
                -1,
                -1,
                -1,
                1,
                -1,
                -1
            ], 3)), super(i, new Za({
                color: e,
                toneMapped: !1
            })), this.box = t, this.type = "Box3Helper", this.geometry.computeBoundingSphere();
        }
        updateMatrixWorld(t) {
            const e = this.box;
            e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(.5), super.updateMatrixWorld(t));
        }
    }, t8.BoxBufferGeometry = ci, t8.BoxGeometry = ci, t8.BoxHelper = su, t8.BufferAttribute = Tn, t8.BufferGeometry = Vn, t8.BufferGeometryLoader = qc, t8.ByteType = 1010, t8.Cache = mc, t8.Camera = mi, t8.CameraHelper = class extends so {
        constructor(t252){
            const e162 = new Vn, n93 = new Za({
                color: 16777215,
                vertexColors: !0,
                toneMapped: !1
            }), i = [], r = [], s = {}, a = new Wt(16755200), o = new Wt(16711680), l = new Wt(43775), c = new Wt(16777215), h = new Wt(3355443);
            function u(t, e, n) {
                d(t, n), d(e, n);
            }
            function d(t, e) {
                i.push(0, 0, 0), r.push(e.r, e.g, e.b), void 0 === s[t] && (s[t] = []), s[t].push(i.length / 3 - 1);
            }
            u("n1", "n2", a), u("n2", "n4", a), u("n4", "n3", a), u("n3", "n1", a), u("f1", "f2", a), u("f2", "f4", a), u("f4", "f3", a), u("f3", "f1", a), u("n1", "f1", a), u("n2", "f2", a), u("n3", "f3", a), u("n4", "f4", a), u("p", "n1", o), u("p", "n2", o), u("p", "n3", o), u("p", "n4", o), u("u1", "u2", l), u("u2", "u3", l), u("u3", "u1", l), u("c", "t", c), u("p", "c", h), u("cn1", "cn2", h), u("cn3", "cn4", h), u("cf1", "cf2", h), u("cf3", "cf4", h), e162.setAttribute("position", new Nn(i, 3)), e162.setAttribute("color", new Nn(r, 3)), super(e162, n93), this.type = "CameraHelper", this.camera = t252, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t252.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = s, this.update();
        }
        update() {
            const t = this.geometry, e = this.pointMap;
            nu.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), iu("c", e, t, nu, 0, 0, -1), iu("t", e, t, nu, 0, 0, 1), iu("n1", e, t, nu, -1, -1, -1), iu("n2", e, t, nu, 1, -1, -1), iu("n3", e, t, nu, -1, 1, -1), iu("n4", e, t, nu, 1, 1, -1), iu("f1", e, t, nu, -1, -1, 1), iu("f2", e, t, nu, 1, -1, 1), iu("f3", e, t, nu, -1, 1, 1), iu("f4", e, t, nu, 1, 1, 1), iu("u1", e, t, nu, .7, 1.1, -1), iu("u2", e, t, nu, -0.7, 1.1, -1), iu("u3", e, t, nu, 0, 2, -1), iu("cf1", e, t, nu, -1, 0, 1), iu("cf2", e, t, nu, 1, 0, 1), iu("cf3", e, t, nu, 0, -1, 1), iu("cf4", e, t, nu, 0, 1, 1), iu("cn1", e, t, nu, -1, 0, -1), iu("cn2", e, t, nu, 1, 0, -1), iu("cn3", e, t, nu, 0, -1, -1), iu("cn4", e, t, nu, 0, 1, -1), t.getAttribute("position").needsUpdate = !0;
        }
        dispose() {
            this.geometry.dispose(), this.material.dispose();
        }
    }, t8.CanvasRenderer = function() {
        console.error("THREE.CanvasRenderer has been removed");
    }, t8.CanvasTexture = yo, t8.CapsuleBufferGeometry = ko, t8.CapsuleGeometry = ko, t8.CatmullRomCurve3 = Ao, t8.CineonToneMapping = 3, t8.CircleBufferGeometry = Vo, t8.CircleGeometry = Vo, t8.ClampToEdgeWrapping = h1, t8.Clock = sh, t8.Color = Wt, t8.ColorKeyframeTrack = ac, t8.ColorManagement = zt, t8.CompressedTexture = vo, t8.CompressedTextureLoader = class extends vc {
        constructor(t){
            super(t);
        }
        load(t253, e164, n95, i) {
            const r = this, s = [], a = new vo, o = new xc(this.manager);
            o.setPath(this.path), o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setWithCredentials(r.withCredentials);
            let l = 0;
            function c16(c) {
                o.load(t253[c], function(t) {
                    const n = r.parse(t, !0);
                    s[c] = {
                        width: n.width,
                        height: n.height,
                        format: n.format,
                        mipmaps: n.mipmaps
                    }, l += 1, 6 === l && (1 === n.mipmapCount && (a.minFilter = f1), a.image = s, a.format = n.format, a.needsUpdate = !0, e164 && e164(a));
                }, n95, i);
            }
            if (Array.isArray(t253)) for(let e163 = 0, n94 = t253.length; e163 < n94; ++e163)c16(e163);
            else o.load(t253, function(t) {
                const n = r.parse(t, !0);
                if (n.isCubemap) {
                    const t = n.mipmaps.length / n.mipmapCount;
                    for(let e = 0; e < t; e++){
                        s[e] = {
                            mipmaps: []
                        };
                        for(let t = 0; t < n.mipmapCount; t++)s[e].mipmaps.push(n.mipmaps[e * n.mipmapCount + t]), s[e].format = n.format, s[e].width = n.width, s[e].height = n.height;
                    }
                    a.image = s;
                } else a.image.width = n.width, a.image.height = n.height, a.mipmaps = n.mipmaps;
                1 === n.mipmapCount && (a.minFilter = f1), a.format = n.format, a.needsUpdate = !0, e164 && e164(a);
            }, n95, i);
            return a;
        }
    }, t8.ConeBufferGeometry = jo, t8.ConeGeometry = jo, t8.CubeCamera = vi, t8.CubeReflectionMapping = r1, t8.CubeRefractionMapping = s1, t8.CubeTexture = yi, t8.CubeTextureLoader = bc, t8.CubeUVReflectionMapping = l1, t8.CubicBezierCurve = Po, t8.CubicBezierCurve3 = Do, t8.CubicInterpolant = ec, t8.CullFaceBack = 1, t8.CullFaceFront = 2, t8.CullFaceFrontBack = 3, t8.CullFaceNone = 0, t8.Curve = xo, t8.CurvePath = Fo, t8.CustomBlending = 5, t8.CustomToneMapping = 5, t8.CylinderBufferGeometry = Wo, t8.CylinderGeometry = Wo, t8.Cylindrical = class {
        constructor(t = 1, e = 0, n = 0){
            return this.radius = t, this.theta = e, this.y = n, this;
        }
        set(t, e, n) {
            return this.radius = t, this.theta = e, this.y = n, this;
        }
        copy(t) {
            return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this;
        }
        setFromVector3(t) {
            return this.setFromCartesianCoords(t.x, t.y, t.z);
        }
        setFromCartesianCoords(t, e, n) {
            return this.radius = Math.sqrt(t * t + n * n), this.theta = Math.atan2(t, n), this.y = e, this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }, t8.Data3DTexture = ee, t8.DataArrayTexture = $t, t8.DataTexture = Ha, t8.DataTexture2DArray = class extends $t {
        constructor(t, e, n, i){
            console.warn("THREE.DataTexture2DArray has been renamed to DataArrayTexture."), super(t, e, n, i);
        }
    }, t8.DataTexture3D = class extends ee {
        constructor(t, e, n, i){
            console.warn("THREE.DataTexture3D has been renamed to Data3DTexture."), super(t, e, n, i);
        }
    }, t8.DataTextureLoader = Mc, t8.DataUtils = class {
        static toHalfFloat(t) {
            Math.abs(t) > 65504 && console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."), t = bt1(t, -65504, 65504), uu[0] = t;
            const e = du[0], n = e >> 23 & 511;
            return pu[n] + ((8388607 & e) >> mu[n]);
        }
        static fromHalfFloat(t) {
            const e = t >> 10;
            return du[0] = fu[vu[e] + (1023 & t)] + gu[e], uu[0];
        }
    }, t8.DecrementStencilOp = 7683, t8.DecrementWrapStencilOp = 34056, t8.DefaultLoadingManager = gc, t8.DepthFormat = T1, t8.DepthStencilFormat = E1, t8.DepthTexture = ia, t8.DirectionalLight = Uc, t8.DirectionalLightHelper = class extends ln {
        constructor(t, e, n){
            super(), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, void 0 === e && (e = 1);
            let i = new Vn;
            i.setAttribute("position", new Nn([
                -e,
                e,
                0,
                e,
                e,
                0,
                e,
                -e,
                0,
                -e,
                -e,
                0,
                -e,
                e,
                0
            ], 3));
            const r = new Za({
                fog: !1,
                toneMapped: !1
            });
            this.lightPlane = new no(i, r), this.add(this.lightPlane), i = new Vn, i.setAttribute("position", new Nn([
                0,
                0,
                0,
                0,
                0,
                1
            ], 3)), this.targetLine = new no(i, r), this.add(this.targetLine), this.update();
        }
        dispose() {
            this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose();
        }
        update() {
            Qh.setFromMatrixPosition(this.light.matrixWorld), $h.setFromMatrixPosition(this.light.target.matrixWorld), tu.subVectors($h, Qh), this.lightPlane.lookAt($h), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt($h), this.targetLine.scale.z = tu.length();
        }
    }, t8.DiscreteInterpolant = ic, t8.DodecahedronBufferGeometry = Xo, t8.DodecahedronGeometry = Xo, t8.DoubleSide = 2, t8.DstAlphaFactor = 206, t8.DstColorFactor = 208, t8.DynamicBufferAttribute = class extends Tn {
        constructor(t, e){
            console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead."), super(t, e), this.setUsage(dt1);
        }
    }, t8.DynamicCopyUsage = 35050, t8.DynamicDrawUsage = dt1, t8.DynamicReadUsage = 35049, t8.EdgesGeometry = Qo, t8.EdgesHelper = class extends so {
        constructor(t, e){
            console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."), super(new Qo(t.geometry), new Za({
                color: void 0 !== e ? e : 16777215
            }));
        }
    }, t8.EllipseCurve = _o, t8.EqualDepth = 4, t8.EqualStencilFunc = 514, t8.EquirectangularReflectionMapping = a1, t8.EquirectangularRefractionMapping = o1, t8.Euler = qe, t8.EventDispatcher = ft1, t8.ExtrudeBufferGeometry = Rl, t8.ExtrudeGeometry = Rl, t8.FaceColors = 1, t8.FileLoader = xc, t8.FlatShading = 1, t8.Float16BufferAttribute = In, t8.Float32Attribute = class extends Nn {
        constructor(t, e){
            console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."), super(t, e);
        }
    }, t8.Float32BufferAttribute = Nn, t8.Float64Attribute = class extends Bn {
        constructor(t, e){
            console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."), super(t, e);
        }
    }, t8.Float64BufferAttribute = Bn, t8.FloatType = b1, t8.Fog = ca, t8.FogExp2 = la, t8.Font = function() {
        console.error("THREE.Font has been moved to /examples/jsm/loaders/FontLoader.js");
    }, t8.FontLoader = function() {
        console.error("THREE.FontLoader has been moved to /examples/jsm/loaders/FontLoader.js");
    }, t8.FramebufferTexture = go, t8.FrontSide = 0, t8.Frustum = Ei, t8.GLBufferAttribute = Nh, t8.GLSL1 = "100", t8.GLSL3 = pt1, t8.GreaterDepth = 6, t8.GreaterEqualDepth = 5, t8.GreaterEqualStencilFunc = 518, t8.GreaterStencilFunc = 516, t8.GridHelper = Kh, t8.Group = ta, t8.HalfFloatType = M1, t8.HemisphereLight = Tc, t8.HemisphereLightHelper = class extends ln {
        constructor(t, e, n){
            super(), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = n;
            const i = new Pl(e);
            i.rotateY(.5 * Math.PI), this.material = new Mn({
                wireframe: !0,
                fog: !1,
                toneMapped: !1
            }), void 0 === this.color && (this.material.vertexColors = !0);
            const r = i.getAttribute("position"), s = new Float32Array(3 * r.count);
            i.setAttribute("color", new Tn(s, 3)), this.add(new oi(i, this.material)), this.update();
        }
        dispose() {
            this.children[0].geometry.dispose(), this.children[0].material.dispose();
        }
        update() {
            const t = this.children[0];
            if (void 0 !== this.color) this.material.color.set(this.color);
            else {
                const e = t.geometry.getAttribute("color");
                Yh.copy(this.light.color), Zh.copy(this.light.groundColor);
                for(let t254 = 0, n = e.count; t254 < n; t254++){
                    const i = t254 < n / 2 ? Yh : Zh;
                    e.setXYZ(t254, i.r, i.g, i.b);
                }
                e.needsUpdate = !0;
            }
            t.lookAt(Jh.setFromMatrixPosition(this.light.matrixWorld).negate());
        }
    }, t8.HemisphereLightProbe = th, t8.IcosahedronBufferGeometry = Ll, t8.IcosahedronGeometry = Ll, t8.ImageBitmapLoader = Zc, t8.ImageLoader = _c, t8.ImageUtils = qt, t8.ImmediateRenderObject = function() {
        console.error("THREE.ImmediateRenderObject has been removed.");
    }, t8.IncrementStencilOp = 7682, t8.IncrementWrapStencilOp = 34055, t8.InstancedBufferAttribute = Wa, t8.InstancedBufferGeometry = jc, t8.InstancedInterleavedBuffer = Ih, t8.InstancedMesh = Ya, t8.Int16Attribute = class extends Cn {
        constructor(t, e){
            console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."), super(t, e);
        }
    }, t8.Int16BufferAttribute = Cn, t8.Int32Attribute = class extends Pn {
        constructor(t, e){
            console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."), super(t, e);
        }
    }, t8.Int32BufferAttribute = Pn, t8.Int8Attribute = class extends En {
        constructor(t, e){
            console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."), super(t, e);
        }
    }, t8.Int8BufferAttribute = En, t8.IntType = 1013, t8.InterleavedBuffer = ua, t8.InterleavedBufferAttribute = pa, t8.Interpolant = tc, t8.InterpolateDiscrete = Q1, t8.InterpolateLinear = $1, t8.InterpolateSmooth = tt1, t8.InvertStencilOp = 5386, t8.JSONLoader = function() {
        console.error("THREE.JSONLoader has been removed.");
    }, t8.KeepStencilOp = ht1, t8.KeyframeTrack = rc, t8.LOD = Da, t8.LatheBufferGeometry = Go, t8.LatheGeometry = Go, t8.Layers = Xe, t8.LensFlare = function() {
        console.error("THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js");
    }, t8.LessDepth = 2, t8.LessEqualDepth = 3, t8.LessEqualStencilFunc = 515, t8.LessStencilFunc = 513, t8.Light = Sc, t8.LightProbe = kc, t8.Line = no, t8.Line3 = Gh, t8.LineBasicMaterial = Za, t8.LineCurve = Io, t8.LineCurve3 = No, t8.LineDashedMaterial = Kl, t8.LineLoop = ao, t8.LinePieces = 1, t8.LineSegments = so, t8.LineStrip = 0, t8.LinearEncoding = at, t8.LinearFilter = f1, t8.LinearInterpolant = nc, t8.LinearMipMapLinearFilter = 1008, t8.LinearMipMapNearestFilter = 1007, t8.LinearMipmapLinearFilter = v1, t8.LinearMipmapNearestFilter = g1, t8.LinearSRGBColorSpace = ct1, t8.LinearToneMapping = 1, t8.Loader = vc, t8.LoaderUtils = Wc, t8.LoadingManager = fc, t8.LoopOnce = 2200, t8.LoopPingPong = 2202, t8.LoopRepeat = 2201, t8.LuminanceAlphaFormat = 1025, t8.LuminanceFormat = 1024, t8.MOUSE = {
        LEFT: 0,
        MIDDLE: 1,
        RIGHT: 2,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2
    }, t8.Material = bn, t8.MaterialLoader = Vc, t8.Math = At1, t8.MathUtils = At1, t8.Matrix3 = Ct1, t8.Matrix4 = Oe, t8.MaxEquation = 104, t8.Mesh = oi, t8.MeshBasicMaterial = Mn, t8.MeshDepthMaterial = Xs, t8.MeshDistanceMaterial = Js, t8.MeshFaceMaterial = function(t) {
        return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."), t;
    }, t8.MeshLambertMaterial = Yl, t8.MeshMatcapMaterial = Zl, t8.MeshNormalMaterial = Jl, t8.MeshPhongMaterial = ql, t8.MeshPhysicalMaterial = jl, t8.MeshStandardMaterial = Wl, t8.MeshToonMaterial = Xl, t8.MinEquation = 103, t8.MirroredRepeatWrapping = u1, t8.MixOperation = 1, t8.MultiMaterial = function(t = []) {
        return console.warn("THREE.MultiMaterial has been removed. Use an Array instead."), t.isMultiMaterial = !0, t.materials = t, t.clone = function() {
            return t.slice();
        }, t;
    }, t8.MultiplyBlending = 4, t8.MultiplyOperation = 0, t8.NearestFilter = d1, t8.NearestMipMapLinearFilter = 1005, t8.NearestMipMapNearestFilter = 1004, t8.NearestMipmapLinearFilter = m1, t8.NearestMipmapNearestFilter = p1, t8.NeverDepth = 0, t8.NeverStencilFunc = 512, t8.NoBlending = 0, t8.NoColorSpace = "", t8.NoColors = 0, t8.NoToneMapping = 0, t8.NormalAnimationBlendMode = rt1, t8.NormalBlending = 1, t8.NotEqualDepth = 7, t8.NotEqualStencilFunc = 517, t8.NumberKeyframeTrack = oc, t8.Object3D = ln, t8.ObjectLoader = class extends vc {
        constructor(t){
            super(t);
        }
        load(t, e165, n96, i) {
            const r = this, s40 = "" === this.path ? Wc.extractUrlBase(t) : this.path;
            this.resourcePath = this.resourcePath || s40;
            const a36 = new xc(this.manager);
            a36.setPath(this.path), a36.setRequestHeader(this.requestHeader), a36.setWithCredentials(this.withCredentials), a36.load(t, function(n) {
                let s = null;
                try {
                    s = JSON.parse(n);
                } catch (e) {
                    return void 0 !== i && i(e), void console.error("THREE:ObjectLoader: Can't parse " + t + ".", e.message);
                }
                const a = s.metadata;
                void 0 !== a && void 0 !== a.type && "geometry" !== a.type.toLowerCase() ? r.parse(s, e165) : console.error("THREE.ObjectLoader: Can't load " + t);
            }, n96, i);
        }
        async loadAsync(t, e) {
            const n = "" === this.path ? Wc.extractUrlBase(t) : this.path;
            this.resourcePath = this.resourcePath || n;
            const i = new xc(this.manager);
            i.setPath(this.path), i.setRequestHeader(this.requestHeader), i.setWithCredentials(this.withCredentials);
            const r = await i.loadAsync(t, e), s = JSON.parse(r), a = s.metadata;
            if (void 0 === a || void 0 === a.type || "geometry" === a.type.toLowerCase()) throw new Error("THREE.ObjectLoader: Can't load " + t);
            return await this.parseAsync(s);
        }
        parse(t, e) {
            const n = this.parseAnimations(t.animations), i = this.parseShapes(t.shapes), r = this.parseGeometries(t.geometries, i), s = this.parseImages(t.images, function() {
                void 0 !== e && e(l);
            }), a = this.parseTextures(t.textures, s), o = this.parseMaterials(t.materials, a), l = this.parseObject(t.object, r, o, a, n), c = this.parseSkeletons(t.skeletons, l);
            if (this.bindSkeletons(l, c), void 0 !== e) {
                let t = !1;
                for(const e166 in s)if (s[e166] instanceof HTMLImageElement) {
                    t = !0;
                    break;
                }
                !1 === t && e(l);
            }
            return l;
        }
        async parseAsync(t) {
            const e = this.parseAnimations(t.animations), n = this.parseShapes(t.shapes), i = this.parseGeometries(t.geometries, n), r = await this.parseImagesAsync(t.images), s = this.parseTextures(t.textures, r), a = this.parseMaterials(t.materials, s), o = this.parseObject(t.object, i, a, s, e), l = this.parseSkeletons(t.skeletons, o);
            return this.bindSkeletons(o, l), o;
        }
        parseShapes(t) {
            const e = {};
            if (void 0 !== t) for(let n = 0, i = t.length; n < i; n++){
                const i = (new $o).fromJSON(t[n]);
                e[i.uuid] = i;
            }
            return e;
        }
        parseSkeletons(t255, e) {
            const n = {}, i = {};
            if (e.traverse(function(t) {
                t.isBone && (i[t.uuid] = t);
            }), void 0 !== t255) for(let e167 = 0, r = t255.length; e167 < r; e167++){
                const r = (new Va).fromJSON(t255[e167], i);
                n[r.uuid] = r;
            }
            return n;
        }
        parseGeometries(t, e) {
            const n = {};
            if (void 0 !== t) {
                const i = new qc;
                for(let r = 0, s = t.length; r < s; r++){
                    let s;
                    const a = t[r];
                    switch(a.type){
                        case "BufferGeometry":
                        case "InstancedBufferGeometry":
                            s = i.parse(a);
                            break;
                        case "Geometry":
                            console.error("THREE.ObjectLoader: The legacy Geometry type is no longer supported.");
                            break;
                        default:
                            a.type in Gl ? s = Gl[a.type].fromJSON(a, e) : console.warn(`THREE.ObjectLoader: Unsupported geometry type "${a.type}"`);
                    }
                    s.uuid = a.uuid, void 0 !== a.name && (s.name = a.name), !0 === s.isBufferGeometry && void 0 !== a.userData && (s.userData = a.userData), n[a.uuid] = s;
                }
            }
            return n;
        }
        parseMaterials(t, e) {
            const n = {}, i = {};
            if (void 0 !== t) {
                const r = new Vc;
                r.setTextures(e);
                for(let e168 = 0, s = t.length; e168 < s; e168++){
                    const s = t[e168];
                    if ("MultiMaterial" === s.type) {
                        const t = [];
                        for(let e = 0; e < s.materials.length; e++){
                            const i = s.materials[e];
                            void 0 === n[i.uuid] && (n[i.uuid] = r.parse(i)), t.push(n[i.uuid]);
                        }
                        i[s.uuid] = t;
                    } else void 0 === n[s.uuid] && (n[s.uuid] = r.parse(s)), i[s.uuid] = n[s.uuid];
                }
            }
            return i;
        }
        parseAnimations(t) {
            const e = {};
            if (void 0 !== t) for(let n = 0; n < t.length; n++){
                const i = t[n], r = dc.parse(i);
                e[r.uuid] = r;
            }
            return e;
        }
        parseImages(t256, e169) {
            const n = this, i = {};
            let r;
            function s(t257) {
                if ("string" == typeof t257) {
                    const e = t257;
                    return function(t) {
                        return n.manager.itemStart(t), r.load(t, function() {
                            n.manager.itemEnd(t);
                        }, void 0, function() {
                            n.manager.itemError(t), n.manager.itemEnd(t);
                        });
                    }(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(e) ? e : n.resourcePath + e);
                }
                return t257.data ? {
                    data: Dt1(t257.type, t257.data),
                    width: t257.width,
                    height: t257.height
                } : null;
            }
            if (void 0 !== t256 && t256.length > 0) {
                const n = new fc(e169);
                r = new _c(n), r.setCrossOrigin(this.crossOrigin);
                for(let e = 0, n97 = t256.length; e < n97; e++){
                    const n = t256[e], r = n.url;
                    if (Array.isArray(r)) {
                        const t = [];
                        for(let e = 0, n98 = r.length; e < n98; e++){
                            const n = s(r[e]);
                            null !== n && (n instanceof HTMLImageElement ? t.push(n) : t.push(new Ha(n.data, n.width, n.height)));
                        }
                        i[n.uuid] = new Xt(t);
                    } else {
                        const t = s(n.url);
                        i[n.uuid] = new Xt(t);
                    }
                }
            }
            return i;
        }
        async parseImagesAsync(t258) {
            const e = this, n99 = {};
            let i;
            async function r54(t) {
                if ("string" == typeof t) {
                    const n = t, r = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(n) ? n : e.resourcePath + n;
                    return await i.loadAsync(r);
                }
                return t.data ? {
                    data: Dt1(t.type, t.data),
                    width: t.width,
                    height: t.height
                } : null;
            }
            if (void 0 !== t258 && t258.length > 0) {
                i = new _c(this.manager), i.setCrossOrigin(this.crossOrigin);
                for(let e = 0, i76 = t258.length; e < i76; e++){
                    const i = t258[e], s = i.url;
                    if (Array.isArray(s)) {
                        const t = [];
                        for(let e = 0, n = s.length; e < n; e++){
                            const n = s[e], i = await r54(n);
                            null !== i && (i instanceof HTMLImageElement ? t.push(i) : t.push(new Ha(i.data, i.width, i.height)));
                        }
                        n99[i.uuid] = new Xt(t);
                    } else {
                        const t = await r54(i.url);
                        n99[i.uuid] = new Xt(t);
                    }
                }
            }
            return n99;
        }
        parseTextures(t259, e170) {
            function n(t, e) {
                return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t), e[t]);
            }
            const i = {};
            if (void 0 !== t259) for(let r = 0, s = t259.length; r < s; r++){
                const s = t259[r];
                void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid), void 0 === e170[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image);
                const a = e170[s.image], o = a.data;
                let l;
                Array.isArray(o) ? (l = new yi, 6 === o.length && (l.needsUpdate = !0)) : (l = o && o.data ? new Ha : new Zt, o && (l.needsUpdate = !0)), l.source = a, l.uuid = s.uuid, void 0 !== s.name && (l.name = s.name), void 0 !== s.mapping && (l.mapping = n(s.mapping, Xc)), void 0 !== s.offset && l.offset.fromArray(s.offset), void 0 !== s.repeat && l.repeat.fromArray(s.repeat), void 0 !== s.center && l.center.fromArray(s.center), void 0 !== s.rotation && (l.rotation = s.rotation), void 0 !== s.wrap && (l.wrapS = n(s.wrap[0], Jc), l.wrapT = n(s.wrap[1], Jc)), void 0 !== s.format && (l.format = s.format), void 0 !== s.type && (l.type = s.type), void 0 !== s.encoding && (l.encoding = s.encoding), void 0 !== s.minFilter && (l.minFilter = n(s.minFilter, Yc)), void 0 !== s.magFilter && (l.magFilter = n(s.magFilter, Yc)), void 0 !== s.anisotropy && (l.anisotropy = s.anisotropy), void 0 !== s.flipY && (l.flipY = s.flipY), void 0 !== s.premultiplyAlpha && (l.premultiplyAlpha = s.premultiplyAlpha), void 0 !== s.unpackAlignment && (l.unpackAlignment = s.unpackAlignment), void 0 !== s.userData && (l.userData = s.userData), i[s.uuid] = l;
            }
            return i;
        }
        parseObject(t260, e172, n, i78, r55) {
            let s, a, o;
            function l(t) {
                return void 0 === e172[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t), e172[t];
            }
            function c(t) {
                if (void 0 !== t) {
                    if (Array.isArray(t)) {
                        const e = [];
                        for(let i = 0, r = t.length; i < r; i++){
                            const r = t[i];
                            void 0 === n[r] && console.warn("THREE.ObjectLoader: Undefined material", r), e.push(n[r]);
                        }
                        return e;
                    }
                    return void 0 === n[t] && console.warn("THREE.ObjectLoader: Undefined material", t), n[t];
                }
            }
            function h(t) {
                return void 0 === i78[t] && console.warn("THREE.ObjectLoader: Undefined texture", t), i78[t];
            }
            switch(t260.type){
                case "Scene":
                    s = new ha, void 0 !== t260.background && (Number.isInteger(t260.background) ? s.background = new Wt(t260.background) : s.background = h(t260.background)), void 0 !== t260.environment && (s.environment = h(t260.environment)), void 0 !== t260.fog && ("Fog" === t260.fog.type ? s.fog = new ca(t260.fog.color, t260.fog.near, t260.fog.far) : "FogExp2" === t260.fog.type && (s.fog = new la(t260.fog.color, t260.fog.density)));
                    break;
                case "PerspectiveCamera":
                    s = new fi(t260.fov, t260.aspect, t260.near, t260.far), void 0 !== t260.focus && (s.focus = t260.focus), void 0 !== t260.zoom && (s.zoom = t260.zoom), void 0 !== t260.filmGauge && (s.filmGauge = t260.filmGauge), void 0 !== t260.filmOffset && (s.filmOffset = t260.filmOffset), void 0 !== t260.view && (s.view = Object.assign({}, t260.view));
                    break;
                case "OrthographicCamera":
                    s = new Fi(t260.left, t260.right, t260.top, t260.bottom, t260.near, t260.far), void 0 !== t260.zoom && (s.zoom = t260.zoom), void 0 !== t260.view && (s.view = Object.assign({}, t260.view));
                    break;
                case "AmbientLight":
                    s = new Fc(t260.color, t260.intensity);
                    break;
                case "DirectionalLight":
                    s = new Uc(t260.color, t260.intensity);
                    break;
                case "PointLight":
                    s = new Oc(t260.color, t260.intensity, t260.distance, t260.decay);
                    break;
                case "RectAreaLight":
                    s = new Hc(t260.color, t260.intensity, t260.width, t260.height);
                    break;
                case "SpotLight":
                    s = new Pc(t260.color, t260.intensity, t260.distance, t260.angle, t260.penumbra, t260.decay);
                    break;
                case "HemisphereLight":
                    s = new Tc(t260.color, t260.groundColor, t260.intensity);
                    break;
                case "LightProbe":
                    s = (new kc).fromJSON(t260);
                    break;
                case "SkinnedMesh":
                    a = l(t260.geometry), o = c(t260.material), s = new Ua(a, o), void 0 !== t260.bindMode && (s.bindMode = t260.bindMode), void 0 !== t260.bindMatrix && s.bindMatrix.fromArray(t260.bindMatrix), void 0 !== t260.skeleton && (s.skeleton = t260.skeleton);
                    break;
                case "Mesh":
                    a = l(t260.geometry), o = c(t260.material), s = new oi(a, o);
                    break;
                case "InstancedMesh":
                    a = l(t260.geometry), o = c(t260.material);
                    const e171 = t260.count, n100 = t260.instanceMatrix, i77 = t260.instanceColor;
                    s = new Ya(a, o, e171), s.instanceMatrix = new Wa(new Float32Array(n100.array), 16), void 0 !== i77 && (s.instanceColor = new Wa(new Float32Array(i77.array), i77.itemSize));
                    break;
                case "LOD":
                    s = new Da;
                    break;
                case "Line":
                    s = new no(l(t260.geometry), c(t260.material));
                    break;
                case "LineLoop":
                    s = new ao(l(t260.geometry), c(t260.material));
                    break;
                case "LineSegments":
                    s = new so(l(t260.geometry), c(t260.material));
                    break;
                case "PointCloud":
                case "Points":
                    s = new po(l(t260.geometry), c(t260.material));
                    break;
                case "Sprite":
                    s = new Ra(c(t260.material));
                    break;
                case "Group":
                    s = new ta;
                    break;
                case "Bone":
                    s = new Fa;
                    break;
                default:
                    s = new ln;
            }
            if (s.uuid = t260.uuid, void 0 !== t260.name && (s.name = t260.name), void 0 !== t260.matrix ? (s.matrix.fromArray(t260.matrix), void 0 !== t260.matrixAutoUpdate && (s.matrixAutoUpdate = t260.matrixAutoUpdate), s.matrixAutoUpdate && s.matrix.decompose(s.position, s.quaternion, s.scale)) : (void 0 !== t260.position && s.position.fromArray(t260.position), void 0 !== t260.rotation && s.rotation.fromArray(t260.rotation), void 0 !== t260.quaternion && s.quaternion.fromArray(t260.quaternion), void 0 !== t260.scale && s.scale.fromArray(t260.scale)), void 0 !== t260.castShadow && (s.castShadow = t260.castShadow), void 0 !== t260.receiveShadow && (s.receiveShadow = t260.receiveShadow), t260.shadow && (void 0 !== t260.shadow.bias && (s.shadow.bias = t260.shadow.bias), void 0 !== t260.shadow.normalBias && (s.shadow.normalBias = t260.shadow.normalBias), void 0 !== t260.shadow.radius && (s.shadow.radius = t260.shadow.radius), void 0 !== t260.shadow.mapSize && s.shadow.mapSize.fromArray(t260.shadow.mapSize), void 0 !== t260.shadow.camera && (s.shadow.camera = this.parseObject(t260.shadow.camera))), void 0 !== t260.visible && (s.visible = t260.visible), void 0 !== t260.frustumCulled && (s.frustumCulled = t260.frustumCulled), void 0 !== t260.renderOrder && (s.renderOrder = t260.renderOrder), void 0 !== t260.userData && (s.userData = t260.userData), void 0 !== t260.layers && (s.layers.mask = t260.layers), void 0 !== t260.children) {
                const a = t260.children;
                for(let t = 0; t < a.length; t++)s.add(this.parseObject(a[t], e172, n, i78, r55));
            }
            if (void 0 !== t260.animations) {
                const e = t260.animations;
                for(let t = 0; t < e.length; t++){
                    const n = e[t];
                    s.animations.push(r55[n]);
                }
            }
            if ("LOD" === t260.type) {
                void 0 !== t260.autoUpdate && (s.autoUpdate = t260.autoUpdate);
                const e = t260.levels;
                for(let t = 0; t < e.length; t++){
                    const n = e[t], i = s.getObjectByProperty("uuid", n.object);
                    void 0 !== i && s.addLevel(i, n.distance);
                }
            }
            return s;
        }
        bindSkeletons(t261, e) {
            0 !== Object.keys(e).length && t261.traverse(function(t) {
                if (!0 === t.isSkinnedMesh && void 0 !== t.skeleton) {
                    const n = e[t.skeleton];
                    void 0 === n ? console.warn("THREE.ObjectLoader: No skeleton found with UUID:", t.skeleton) : t.bind(n, t.bindMatrix);
                }
            });
        }
        setTexturePath(t) {
            return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."), this.setResourcePath(t);
        }
    }, t8.ObjectSpaceNormalMap = 1, t8.OctahedronBufferGeometry = Pl, t8.OctahedronGeometry = Pl, t8.OneFactor = 201, t8.OneMinusDstAlphaFactor = 207, t8.OneMinusDstColorFactor = 209, t8.OneMinusSrcAlphaFactor = 205, t8.OneMinusSrcColorFactor = 203, t8.OrthographicCamera = Fi, t8.PCFShadowMap = 1, t8.PCFSoftShadowMap = 2, t8.PMREMGenerator = Ji, t8.ParametricGeometry = class extends Vn {
        constructor(){
            console.error("THREE.ParametricGeometry has been moved to /examples/jsm/geometries/ParametricGeometry.js"), super();
        }
    }, t8.Particle = class extends Ra {
        constructor(t){
            console.warn("THREE.Particle has been renamed to THREE.Sprite."), super(t);
        }
    }, t8.ParticleBasicMaterial = class extends oo {
        constructor(t){
            console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), super(t);
        }
    }, t8.ParticleSystem = class extends po {
        constructor(t, e){
            console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), super(t, e);
        }
    }, t8.ParticleSystemMaterial = class extends oo {
        constructor(t){
            console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), super(t);
        }
    }, t8.Path = Ho, t8.PerspectiveCamera = fi, t8.Plane = wi, t8.PlaneBufferGeometry = Ci, t8.PlaneGeometry = Ci, t8.PlaneHelper = class extends no {
        constructor(t, e = 1, n = 16776960){
            const i = n, r = new Vn;
            r.setAttribute("position", new Nn([
                1,
                -1,
                1,
                -1,
                1,
                1,
                -1,
                -1,
                1,
                1,
                1,
                1,
                -1,
                1,
                1,
                -1,
                -1,
                1,
                1,
                -1,
                1,
                1,
                1,
                1,
                0,
                0,
                1,
                0,
                0,
                0
            ], 3)), r.computeBoundingSphere(), super(r, new Za({
                color: i,
                toneMapped: !1
            })), this.type = "PlaneHelper", this.plane = t, this.size = e;
            const s = new Vn;
            s.setAttribute("position", new Nn([
                1,
                1,
                1,
                -1,
                1,
                1,
                -1,
                -1,
                1,
                1,
                1,
                1,
                -1,
                -1,
                1,
                1,
                -1,
                1
            ], 3)), s.computeBoundingSphere(), this.add(new oi(s, new Mn({
                color: i,
                opacity: .2,
                transparent: !0,
                depthWrite: !1,
                toneMapped: !1
            })));
        }
        updateMatrixWorld(t) {
            let e = -this.plane.constant;
            Math.abs(e) < 1e-8 && (e = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, e), this.children[0].material.side = e < 0 ? 1 : 0, this.lookAt(this.plane.normal), super.updateMatrixWorld(t);
        }
    }, t8.PointCloud = class extends po {
        constructor(t, e){
            console.warn("THREE.PointCloud has been renamed to THREE.Points."), super(t, e);
        }
    }, t8.PointCloudMaterial = class extends oo {
        constructor(t){
            console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), super(t);
        }
    }, t8.PointLight = Oc, t8.PointLightHelper = class extends oi {
        constructor(t, e, n){
            super(new Nl(e, 4, 2), new Mn({
                wireframe: !0,
                fog: !1,
                toneMapped: !1
            })), this.light = t, this.light.updateMatrixWorld(), this.color = n, this.type = "PointLightHelper", this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update();
        }
        dispose() {
            this.geometry.dispose(), this.material.dispose();
        }
        update() {
            void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color);
        }
    }, t8.Points = po, t8.PointsMaterial = oo, t8.PolarGridHelper = class extends so {
        constructor(t = 10, e = 16, n = 8, i = 64, r = 4473924, s = 8947848){
            r = new Wt(r), s = new Wt(s);
            const a = [], o = [];
            for(let n101 = 0; n101 <= e; n101++){
                const i = n101 / e * (2 * Math.PI), l = Math.sin(i) * t, c = Math.cos(i) * t;
                a.push(0, 0, 0), a.push(l, 0, c);
                const h = 1 & n101 ? r : s;
                o.push(h.r, h.g, h.b), o.push(h.r, h.g, h.b);
            }
            for(let e173 = 0; e173 <= n; e173++){
                const l = 1 & e173 ? r : s, c = t - t / n * e173;
                for(let t262 = 0; t262 < i; t262++){
                    let e = t262 / i * (2 * Math.PI), n = Math.sin(e) * c, r = Math.cos(e) * c;
                    a.push(n, 0, r), o.push(l.r, l.g, l.b), e = (t262 + 1) / i * (2 * Math.PI), n = Math.sin(e) * c, r = Math.cos(e) * c, a.push(n, 0, r), o.push(l.r, l.g, l.b);
                }
            }
            const l = new Vn;
            l.setAttribute("position", new Nn(a, 3)), l.setAttribute("color", new Nn(o, 3));
            super(l, new Za({
                vertexColors: !0,
                toneMapped: !1
            })), this.type = "PolarGridHelper";
        }
    }, t8.PolyhedronBufferGeometry = qo, t8.PolyhedronGeometry = qo, t8.PositionalAudio = class extends uh {
        constructor(t){
            super(t), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain);
        }
        disconnect() {
            super.disconnect(), this.panner.disconnect(this.gain);
        }
        getOutput() {
            return this.panner;
        }
        getRefDistance() {
            return this.panner.refDistance;
        }
        setRefDistance(t) {
            return this.panner.refDistance = t, this;
        }
        getRolloffFactor() {
            return this.panner.rolloffFactor;
        }
        setRolloffFactor(t) {
            return this.panner.rolloffFactor = t, this;
        }
        getDistanceModel() {
            return this.panner.distanceModel;
        }
        setDistanceModel(t) {
            return this.panner.distanceModel = t, this;
        }
        getMaxDistance() {
            return this.panner.maxDistance;
        }
        setMaxDistance(t) {
            return this.panner.maxDistance = t, this;
        }
        setDirectionalCone(t, e, n) {
            return this.panner.coneInnerAngle = t, this.panner.coneOuterAngle = e, this.panner.coneOuterGain = n, this;
        }
        updateMatrixWorld(t) {
            if (super.updateMatrixWorld(t), !0 === this.hasPlaybackControl && !1 === this.isPlaying) return;
            this.matrixWorld.decompose(dh, ph, mh), fh.set(0, 0, 1).applyQuaternion(ph);
            const e = this.panner;
            if (e.positionX) {
                const t = this.context.currentTime + this.listener.timeDelta;
                e.positionX.linearRampToValueAtTime(dh.x, t), e.positionY.linearRampToValueAtTime(dh.y, t), e.positionZ.linearRampToValueAtTime(dh.z, t), e.orientationX.linearRampToValueAtTime(fh.x, t), e.orientationY.linearRampToValueAtTime(fh.y, t), e.orientationZ.linearRampToValueAtTime(fh.z, t);
            } else e.setPosition(dh.x, dh.y, dh.z), e.setOrientation(fh.x, fh.y, fh.z);
        }
    }, t8.PropertyBinding = Rh, t8.PropertyMixer = vh, t8.QuadraticBezierCurve = Bo, t8.QuadraticBezierCurve3 = Oo, t8.Quaternion = re, t8.QuaternionKeyframeTrack = cc, t8.QuaternionLinearInterpolant = lc, t8.REVISION = e1, t8.RGBADepthPacking = 3201, t8.RGBAFormat = S1, t8.RGBAIntegerFormat = 1033, t8.RGBA_ASTC_10x10_Format = J1, t8.RGBA_ASTC_10x5_Format = j1, t8.RGBA_ASTC_10x6_Format = q1, t8.RGBA_ASTC_10x8_Format = X1, t8.RGBA_ASTC_12x10_Format = Y1, t8.RGBA_ASTC_12x12_Format = Z1, t8.RGBA_ASTC_4x4_Format = z1, t8.RGBA_ASTC_5x4_Format = U1, t8.RGBA_ASTC_5x5_Format = F1, t8.RGBA_ASTC_6x5_Format = H1, t8.RGBA_ASTC_6x6_Format = G1, t8.RGBA_ASTC_8x5_Format = k1, t8.RGBA_ASTC_8x6_Format = V1, t8.RGBA_ASTC_8x8_Format = W1, t8.RGBA_BPTC_Format = K1, t8.RGBA_ETC2_EAC_Format = O1, t8.RGBA_PVRTC_2BPPV1_Format = N1, t8.RGBA_PVRTC_4BPPV1_Format = I1, t8.RGBA_S3TC_DXT1_Format = R1, t8.RGBA_S3TC_DXT3_Format = C1, t8.RGBA_S3TC_DXT5_Format = L1, t8.RGBFormat = 1022, t8.RGB_ETC1_Format = 36196, t8.RGB_ETC2_Format = B1, t8.RGB_PVRTC_2BPPV1_Format = D1, t8.RGB_PVRTC_4BPPV1_Format = P1, t8.RGB_S3TC_DXT1_Format = A1, t8.RGFormat = 1030, t8.RGIntegerFormat = 1031, t8.RawShaderMaterial = Vl, t8.Ray = Be, t8.Raycaster = class {
        constructor(t, e, n = 0, i = 1 / 0){
            this.ray = new Be(t, e), this.near = n, this.far = i, this.camera = null, this.layers = new Xe, this.params = {
                Mesh: {},
                Line: {
                    threshold: 1
                },
                LOD: {},
                Points: {
                    threshold: 1
                },
                Sprite: {}
            };
        }
        set(t, e) {
            this.ray.set(t, e);
        }
        setFromCamera(t, e) {
            e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type);
        }
        intersectObject(t, e = !0, n = []) {
            return Oh(t, this, n, e), n.sort(Bh), n;
        }
        intersectObjects(t, e = !0, n = []) {
            for(let i = 0, r = t.length; i < r; i++)Oh(t[i], this, n, e);
            return n.sort(Bh), n;
        }
    }, t8.RectAreaLight = Hc, t8.RedFormat = 1028, t8.RedIntegerFormat = 1029, t8.ReinhardToneMapping = 2, t8.RepeatWrapping = c1, t8.ReplaceStencilOp = 7681, t8.ReverseSubtractEquation = 102, t8.RingBufferGeometry = Dl, t8.RingGeometry = Dl, t8.SRGBColorSpace = lt1, t8.Scene = ha, t8.SceneUtils = yu, t8.ShaderChunk = Li, t8.ShaderLib = Di, t8.ShaderMaterial = pi, t8.ShadowMaterial = kl, t8.Shape = $o, t8.ShapeBufferGeometry = Il, t8.ShapeGeometry = Il, t8.ShapePath = class {
        constructor(){
            this.type = "ShapePath", this.color = new Wt, this.subPaths = [], this.currentPath = null;
        }
        moveTo(t, e) {
            return this.currentPath = new Ho, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e), this;
        }
        lineTo(t, e) {
            return this.currentPath.lineTo(t, e), this;
        }
        quadraticCurveTo(t, e, n, i) {
            return this.currentPath.quadraticCurveTo(t, e, n, i), this;
        }
        bezierCurveTo(t, e, n, i, r, s) {
            return this.currentPath.bezierCurveTo(t, e, n, i, r, s), this;
        }
        splineThru(t) {
            return this.currentPath.splineThru(t), this;
        }
        toShapes(t264, e176) {
            function n103(t) {
                const e = [];
                for(let n = 0, i = t.length; n < i; n++){
                    const i = t[n], r = new $o;
                    r.curves = i.curves, e.push(r);
                }
                return e;
            }
            function i79(t, e) {
                const n = e.length;
                let i = !1;
                for(let r = n - 1, s = 0; s < n; r = s++){
                    let n = e[r], a = e[s], o = a.x - n.x, l = a.y - n.y;
                    if (Math.abs(l) > Number.EPSILON) {
                        if (l < 0 && (n = e[s], o = -o, a = e[r], l = -l), t.y < n.y || t.y > a.y) continue;
                        if (t.y === n.y) {
                            if (t.x === n.x) return !0;
                        } else {
                            const e = l * (t.x - n.x) - o * (t.y - n.y);
                            if (0 === e) return !0;
                            if (e < 0) continue;
                            i = !i;
                        }
                    } else {
                        if (t.y !== n.y) continue;
                        if (a.x <= t.x && t.x <= n.x || n.x <= t.x && t.x <= a.x) return !0;
                    }
                }
                return i;
            }
            const r56 = Tl.isClockWise, s41 = this.subPaths;
            if (0 === s41.length) return [];
            if (!0 === e176) return n103(s41);
            let a37, o24, l20;
            const c = [];
            if (1 === s41.length) return o24 = s41[0], l20 = new $o, l20.curves = o24.curves, c.push(l20), c;
            let h = !r56(s41[0].getPoints());
            h = t264 ? !h : h;
            const u = [], d = [];
            let p, m, f = [], g = 0;
            d[g] = void 0, f[g] = [];
            for(let e174 = 0, n102 = s41.length; e174 < n102; e174++)o24 = s41[e174], p = o24.getPoints(), a37 = r56(p), a37 = t264 ? !a37 : a37, a37 ? (!h && d[g] && g++, d[g] = {
                s: new $o,
                p: p
            }, d[g].s.curves = o24.curves, h && g++, f[g] = []) : f[g].push({
                h: o24,
                p: p[0]
            });
            if (!d[0]) return n103(s41);
            if (d.length > 1) {
                let t = !1, e = 0;
                for(let t265 = 0, e177 = d.length; t265 < e177; t265++)u[t265] = [];
                for(let n = 0, r = d.length; n < r; n++){
                    const r = f[n];
                    for(let s = 0; s < r.length; s++){
                        const a = r[s];
                        let o = !0;
                        for(let r57 = 0; r57 < d.length; r57++)i79(a.p, d[r57].p) && (n !== r57 && e++, o ? (o = !1, u[r57].push(a)) : t = !0);
                        o && u[n].push(a);
                    }
                }
                e > 0 && !1 === t && (f = u);
            }
            for(let t263 = 0, e175 = d.length; t263 < e175; t263++){
                l20 = d[t263].s, c.push(l20), m = f[t263];
                for(let t = 0, e = m.length; t < e; t++)l20.holes.push(m[t].h);
            }
            return c;
        }
    }, t8.ShapeUtils = Tl, t8.ShortType = 1011, t8.Skeleton = Va, t8.SkeletonHelper = qh, t8.SkinnedMesh = Ua, t8.SmoothShading = 2, t8.Source = Xt, t8.Sphere = Ae, t8.SphereBufferGeometry = Nl, t8.SphereGeometry = Nl, t8.Spherical = class {
        constructor(t = 1, e = 0, n = 0){
            return this.radius = t, this.phi = e, this.theta = n, this;
        }
        set(t, e, n) {
            return this.radius = t, this.phi = e, this.theta = n, this;
        }
        copy(t) {
            return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this;
        }
        makeSafe() {
            const t = 1e-6;
            return this.phi = Math.max(t, Math.min(Math.PI - t, this.phi)), this;
        }
        setFromVector3(t) {
            return this.setFromCartesianCoords(t.x, t.y, t.z);
        }
        setFromCartesianCoords(t, e, n) {
            return this.radius = Math.sqrt(t * t + e * e + n * n), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(bt1(e / this.radius, -1, 1))), this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }, t8.SphericalHarmonics3 = Gc, t8.SplineCurve = zo, t8.SpotLight = Pc, t8.SpotLightHelper = class extends ln {
        constructor(t, e){
            super(), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e;
            const n = new Vn, i = [
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1,
                0,
                1,
                0,
                0,
                0,
                -1,
                0,
                1,
                0,
                0,
                0,
                0,
                1,
                1,
                0,
                0,
                0,
                0,
                -1,
                1
            ];
            for(let t266 = 0, e178 = 1, n104 = 32; t266 < n104; t266++, e178++){
                const r = t266 / n104 * Math.PI * 2, s = e178 / n104 * Math.PI * 2;
                i.push(Math.cos(r), Math.sin(r), 1, Math.cos(s), Math.sin(s), 1);
            }
            n.setAttribute("position", new Nn(i, 3));
            const r = new Za({
                fog: !1,
                toneMapped: !1
            });
            this.cone = new so(n, r), this.add(this.cone), this.update();
        }
        dispose() {
            this.cone.geometry.dispose(), this.cone.material.dispose();
        }
        update() {
            this.light.updateMatrixWorld();
            const t = this.light.distance ? this.light.distance : 1e3, e = t * Math.tan(this.light.angle);
            this.cone.scale.set(e, e, t), kh.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(kh), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
        }
    }, t8.Sprite = Ra, t8.SpriteMaterial = ma, t8.SrcAlphaFactor = 204, t8.SrcAlphaSaturateFactor = 210, t8.SrcColorFactor = 202, t8.StaticCopyUsage = 35046, t8.StaticDrawUsage = ut1, t8.StaticReadUsage = 35045, t8.StereoCamera = class {
        constructor(){
            this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new fi, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new fi, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
                focus: null,
                fov: null,
                aspect: null,
                near: null,
                far: null,
                zoom: null,
                eyeSep: null
            };
        }
        update(t) {
            const e = this._cache;
            if (e.focus !== t.focus || e.fov !== t.fov || e.aspect !== t.aspect * this.aspect || e.near !== t.near || e.far !== t.far || e.zoom !== t.zoom || e.eyeSep !== this.eyeSep) {
                e.focus = t.focus, e.fov = t.fov, e.aspect = t.aspect * this.aspect, e.near = t.near, e.far = t.far, e.zoom = t.zoom, e.eyeSep = this.eyeSep, rh.copy(t.projectionMatrix);
                const n = e.eyeSep / 2, i = n * e.near / e.focus, r = e.near * Math.tan(yt1 * e.fov * .5) / e.zoom;
                let s, a;
                ih.elements[12] = -n, nh.elements[12] = n, s = -r * e.aspect + i, a = r * e.aspect + i, rh.elements[0] = 2 * e.near / (a - s), rh.elements[8] = (a + s) / (a - s), this.cameraL.projectionMatrix.copy(rh), s = -r * e.aspect - i, a = r * e.aspect - i, rh.elements[0] = 2 * e.near / (a - s), rh.elements[8] = (a + s) / (a - s), this.cameraR.projectionMatrix.copy(rh);
            }
            this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(ih), this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(nh);
        }
    }, t8.StreamCopyUsage = 35042, t8.StreamDrawUsage = 35040, t8.StreamReadUsage = 35041, t8.StringKeyframeTrack = hc, t8.SubtractEquation = 101, t8.SubtractiveBlending = 3, t8.TOUCH = {
        ROTATE: 0,
        PAN: 1,
        DOLLY_PAN: 2,
        DOLLY_ROTATE: 3
    }, t8.TangentSpaceNormalMap = 0, t8.TetrahedronBufferGeometry = Bl, t8.TetrahedronGeometry = Bl, t8.TextGeometry = class extends Vn {
        constructor(){
            console.error("THREE.TextGeometry has been moved to /examples/jsm/geometries/TextGeometry.js"), super();
        }
    }, t8.Texture = Zt, t8.TextureLoader = wc, t8.TorusBufferGeometry = Ol, t8.TorusGeometry = Ol, t8.TorusKnotBufferGeometry = zl, t8.TorusKnotGeometry = zl, t8.Triangle = xn, t8.TriangleFanDrawMode = 2, t8.TriangleStripDrawMode = 1, t8.TrianglesDrawMode = 0, t8.TubeBufferGeometry = Ul, t8.TubeGeometry = Ul, t8.UVMapping = i1, t8.Uint16Attribute = class extends Ln {
        constructor(t, e){
            console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."), super(t, e);
        }
    }, t8.Uint16BufferAttribute = Ln, t8.Uint32Attribute = class extends Dn {
        constructor(t, e){
            console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."), super(t, e);
        }
    }, t8.Uint32BufferAttribute = Dn, t8.Uint8Attribute = class extends An {
        constructor(t, e){
            console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."), super(t, e);
        }
    }, t8.Uint8BufferAttribute = An, t8.Uint8ClampedAttribute = class extends Rn {
        constructor(t, e){
            console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."), super(t, e);
        }
    }, t8.Uint8ClampedBufferAttribute = Rn, t8.Uniform = Dh, t8.UniformsLib = Pi, t8.UniformsUtils = di, t8.UnsignedByteType = y1, t8.UnsignedInt248Type = w1, t8.UnsignedIntType = _1, t8.UnsignedShort4444Type = 1017, t8.UnsignedShort5551Type = 1018, t8.UnsignedShortType = x1, t8.VSMShadowMap = 3, t8.Vector2 = Rt, t8.Vector3 = se, t8.Vector4 = Kt, t8.VectorKeyframeTrack = uc, t8.Vertex = class extends se {
        constructor(t, e, n){
            console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."), super(t, e, n);
        }
    }, t8.VertexColors = 2, t8.VideoTexture = fo, t8.WebGL1Renderer = oa, t8.WebGL3DRenderTarget = ne, t8.WebGLArrayRenderTarget = te, t8.WebGLCubeRenderTarget = xi, t8.WebGLMultipleRenderTargets = ie, t8.WebGLMultisampleRenderTarget = class extends Qt {
        constructor(t, e, n){
            console.error('THREE.WebGLMultisampleRenderTarget has been removed. Use a normal render target and set the "samples" property to greater 0 to enable multisampling.'), super(t, e, n), this.samples = 4;
        }
    }, t8.WebGLRenderTarget = Qt, t8.WebGLRenderTargetCube = class extends xi {
        constructor(t, e, n){
            console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options )."), super(t, n);
        }
    }, t8.WebGLRenderer = aa, t8.WebGLUtils = Qs, t8.WireframeGeometry = Fl, t8.WireframeHelper = class extends so {
        constructor(t, e){
            console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."), super(new Fl(t.geometry), new Za({
                color: void 0 !== e ? e : 16777215
            }));
        }
    }, t8.WrapAroundEnding = it1, t8.XHRLoader = class extends xc {
        constructor(t){
            console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."), super(t);
        }
    }, t8.ZeroCurvatureEnding = et1, t8.ZeroFactor = 200, t8.ZeroSlopeEnding = nt1, t8.ZeroStencilOp = 0, t8._SRGBAFormat = mt1, t8.sRGBEncoding = ot1, Object.defineProperty(t8, "__esModule", {
        value: !0
    });
});

//# sourceMappingURL=GameScene.54583eca.js.map
