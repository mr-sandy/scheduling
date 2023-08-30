"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.negotiate = void 0;
function negotiate(res, data, id) {
    res.format({
        "application/json": function () {
            res.json(data);
        },
        "text/html": function () {
            res.render("index", { id, data });
        },
    });
}
exports.negotiate = negotiate;
