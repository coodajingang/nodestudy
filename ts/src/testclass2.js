"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _name;
class Animal {
    constructor(name) {
        // 成员默认是public权限，#开头表示privatte
        _name.set(this, void 0);
        this.age = 10;
        __classPrivateFieldSet(this, _name, name);
    }
}
_name = new WeakMap();
let h = new Animal('mmm');
