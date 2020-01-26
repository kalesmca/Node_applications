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

// let getAllStudents = (req, res) => {
//   console.log("getall student routes calling");
//   let studentInfo = new Students({});
//   studentInfo.getAllStudentList(req).then(studentRes => {
//     // res.sendStatus(200);
//     console.log("student res router ::", studentRes);
//     res.json(studentRes);
//   });
// };
// let getMyData = (req, res) => {
//   console.log("getall student routes calling");
//   let studentInfo = new Students({});
//   console.log("getMyData :req::", req.headers);
//   studentInfo.getMyData(req).then(studentRes => {
//     // res.sendStatus(200);
//     console.log("student res router ::", studentRes);
//     res.json(studentRes);
//   });
// };

// let addData = (req, res) => {
//   console.log("addData routes calling");
//   let studentInfo = new Students({});
//   console.log("addData :req::", req.headers);
//   studentInfo.addData(req).then(addedRes => {
//     // res.sendStatus(200);
//     console.log("add data router ::", addedRes);
//     res.json(addedRes);
//   });
// };

//studentRoutes.post("/getAll", getAllStudents);
// studentRoutes.post("/getAllSavings", getMyData);
// studentRoutes.post("/addSavings", addData);

bloodBankRoutes.post("/getTestData", getAllTestData);

export default bloodBankRoutes;
