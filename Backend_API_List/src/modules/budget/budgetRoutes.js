import { Router } from "express";
const budgetRoutes = Router();
import BudgetController from "./constrollers/budgetController";


let getAll = (req, res) => {
  console.log("getall routes calling");
  let controller = new BudgetController({});
  console.log("getA;; :req::", req.headers);
  controller.getAll(req).then(getRes => {
    console.log("res router ::", getRes);
    res.json(getRes);
  });
};

let addData = (req, res) => {
  console.log("addData routes calling");
  let controller = new BudgetController({});
  console.log("addData :req::", req.headers);
  controller.addData(req).then(addedRes => {
    // res.sendStatus(200);
    console.log("add data router ::", addedRes);
    res.json(addedRes);
  });
};

budgetRoutes.get("/getAll", getAll);
budgetRoutes.post("/save", addData);


export default budgetRoutes;
