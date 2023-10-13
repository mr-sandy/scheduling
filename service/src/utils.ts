import { Response } from "express-serve-static-core";

export function negotiate(
  res: Response<any, Record<string, any>, number>,
  data: any,
  id: string
) {
  res.format({
    "application/json": function () {
      res.json(data);
    },
    "text/html": function () {
      res.render("index", { id, data });
    },
  });
}

export function parseBool(value: string | undefined): boolean | undefined {
  switch (value) {
    case "true":
      return true;
    case "false":
      return false;
    default:
      return undefined;
  }
}