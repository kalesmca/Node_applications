import { Router } from "express";
const bloodBankRoutes = Router();
import bloodBankController from "./constrollers/bloodBankController";


let getAllTestData = (req, res) => {
  console.log("getall Test routes calling");
  let controller = new bloodBankController({});
  controller.getTestResponse(req).then(testRes => {
    // res.sendStatus(200);
    console.log("student res router ::", testRes);
    res.json(testRes);
  });
};


let getAll = (req, res) => {
  console.log("getall routes calling");
  let controller = new bloodBankController({});
  console.log("getA;; :req::", req.headers);
  controller.getAll(req).then(getRes => {
    console.log("res router ::", getRes);
    res.json(getRes);
  });
};

let addData = (req, res) => {
  console.log("addData routes calling");
  let controller = new bloodBankController({});
  console.log("addData :req::", req.headers);
  controller.addData(req).then(addedRes => {
    // res.sendStatus(200);
    console.log("add data router ::", addedRes);
    res.json(addedRes);
  });
};

bloodBankRoutes.get("/getAll", getAll);
bloodBankRoutes.post("/save", addData);

bloodBankRoutes.post("/getTestData", getAllTestData);

export default bloodBankRoutes;
