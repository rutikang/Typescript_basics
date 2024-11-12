"use strict";
var _a;
let employee = {
    id: 1,
    name: 'Dan',
    retire: (date) => { console.log(date); }
};
console.log(employee.name);
function kgtolbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    return parseInt(weight) * 2.2;
}
let textbox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log('Hola');
    }
}
greet('dan');
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
//# sourceMappingURL=index.js.map