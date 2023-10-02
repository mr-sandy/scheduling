"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateItem = exports.addItem = exports.getItem = exports.getList = void 0;
const operations_1 = require("./operations");
function getList(query) {
    return [
        operations_1.operations
            .filter((operation) => query.operationTypes === undefined ||
            query.operationTypes.includes(operation.operationType))
            .slice(0, query.rowsPerPage),
        operations_1.operations.length,
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
