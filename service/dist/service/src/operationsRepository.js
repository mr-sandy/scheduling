"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateItem = exports.addItem = exports.getItem = exports.getList = void 0;
function getList() {
    return [
        {
            id: "1",
            retailer: "Tesco",
            client: "Mars UK",
            schedule: "daily",
            operationType: "category",
        },
        {
            id: "2",
            retailer: "Amazon-DE",
            client: "Arla DE",
            schedule: "daily",
            operationType: "category",
        },
        {
            id: "3",
            retailer: "Walmart-US",
            client: "Kelloggs US",
            schedule: "daily",
            operationType: "category",
        },
    ];
}
exports.getList = getList;
function getItem(bomId) {
    return {};
}
exports.getItem = getItem;
function addItem() {
    return {};
}
exports.addItem = addItem;
function UpdateItem() {
    return {};
}
exports.UpdateItem = UpdateItem;
