import bloddBankService from "../services/bloodBankService";
import mongojs from "mongojs";
const db = mongojs("Testing", ["Testing"]);

export default class bloodBankController {
  constructor() {
  }
  getTestResponse = req => {
    console.log("getallStudent list info", req.body);
    return new Promise((resolve, reject) => {
      resolve({ status: "getAllStudent Success" });

    });
  };

  // getMyData = req => {
  //   console.log("getMyData", req.body);
  //   return new Promise((resolve, reject) => {
  //     db.savings.find(function(err, tasks) {
  //       if (err) {
  //         console.log("error comming");
  //         res.send(err);
  //       }
  //       resolve({ status: "getMyData Success", data: { data: tasks } });
  //     });
  //   });
  // };

  // addData = req => {
  //   console.log("addData", req.body);
  //   return new Promise((resolve, reject) => {
  //     db.savings.save(req.body, function(err, res) {
  //       if (err) {
  //         console.log("error comming");
  //         res.send(err);
  //       }
  //       resolve({ status: "AddData Success", data: { data: res } });
  //     });
  //   });
  // };
}
