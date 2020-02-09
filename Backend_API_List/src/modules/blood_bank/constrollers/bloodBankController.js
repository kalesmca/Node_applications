import bloddBankService from "../services/bloodBankService";
import mongojs from "mongojs";
const db = mongojs("blood_bank", ["blood_bank"]);

export default class bloodBankController {
  constructor() {
  }
  // getTestResponse = req => {
  //   console.log("getallStudent list info", req.body);
  //   return new Promise((resolve, reject) => {
  //     resolve({ status: "getAllStudent Success" });

  //   });
  // };

  getAll = req => {
    console.log("getMyData", req.body);
    return new Promise((resolve, reject) => {
      db.blood_bank.find(function (err, res) {
        if (err) {
          console.log("error comming");
          res.send(err);
        }
        resolve({ status: "getALL Success", data: { data: res } });
      });
    });
  };

  addData = req => {
    console.log("addData", req.body);
    return new Promise((resolve, reject) => {
      db.blood_bank.save(req.body, function (err, res) {
        if (err) {
          console.log("error comming");
          res.send(err);
        }
        resolve({ status: "AddData Success", data: { data: res } });
      });
    });
  };
}
