"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addItem = exports.getList = void 0;
const operations_1 = require("./operations");
function getList(query) {
    const start = query.page * query.rowsPerPage;
    const end = start + query.rowsPerPage;
    const filtered = operations_1.operations
        .filter((operation) => query.operationTypes === undefined ||
        query.operationTypes.includes(operation.operationType))
        .filter((operation) => query.retailers === undefined ||
        query.retailers.includes(operation.retailer))
        .filter((operation) => query.clients === undefined || query.clients.includes(operation.client))
        .filter((operation) => query.multistore === undefined ||
        (query.multistore === true && operation.multistore === true) ||
        (query.multistore === false && !operation.multistore));
    return [filtered.slice(start, end), filtered.length];
}
exports.getList = getList;
function addItem(operation) {
    operations_1.operations.push(operation);
}
exports.addItem = addItem;
