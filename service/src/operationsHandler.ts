import { Request, Response } from "express";
import * as operationsRepository from "./operationsRepository";
import * as jiraClient from "./jiraClient";
import { negotiate } from "./utils";


export function handleGetList(req: Request, res: Response) {
  console.log(JSON.stringify(req.query));
  const operations = operationsRepository.getList();
  negotiate(res, operations, "operations");
}

export function handlePost(req: Request, res: Response) {
  res.sendStatus(200);
}

export function handleGet(req: Request, res: Response) {
  res.sendStatus(200);
}

export function handlePut(req: Request, res: Response) {
  res.sendStatus(200);
}

// const bomHandler = {
//   handleGetList: (req: Request, res: Response) => {
//     console.log("handleGetList");
//     res.format({
//       "application/json": function () {
//         const retailers = bomRepository.getAll();
//         res.json(retailers);
//       },
//       "text/html": function () {
//         res.sendFile(
//           path.join(__dirname, "..", "..", "app", "build", "index.html")
//         );
//       },
//     });
//   },

//   handlePost: (req: Request, res: Response) => {
//     console.log("handlePost");

//     console.log(
//       "SAVING SAVING SAVING SAVING SAVING SAVING SAVING SAVING SAVING "
//     );
//     res.sendStatus(200);
//   },

//   handlePut: (req: Request, res: Response) => {
//     const { id } = req.params;
//     const { name, countryCode } = req.body;

//     const retailer: Retailer = {
//       id,
//       name,
//       countryCode,
//     };

//     retailerRepository.add(retailer);
//     res.json(retailer);
//   },

//   handleGet: (req: Request, res: Response) => {
//     const { id } = req.params;
//     const { name, countryCode } = req.body;

//     const retailer: Retailer = {
//       id,
//       name,
//       countryCode,
//     };

//     retailerRepository.add(retailer);
//     res.json(retailer);
//   },

// };

// export default bomHandler;
