import mongojs from "mongojs";
const db = mongojs("budget", ["budget"]);

export default class BudgetController {
  constructor() {
  }

  getAll = req => {
    console.log("getMyData", req.body);
    return new Promise((resolve, reject) => {
      db.budget_entry_list.find(function (err, res) {
        if (err) {
          console.log("error comming");
          res.send(err);
        }
        resolve({ status: "Success", data: { data: res } });
      });
    });
  };

  addData = req => {
    console.log("addData", req.body);
    return new Promise((resolve, reject) => {
      db.budget_entry_list.save(req.body, function (err, res) {
        if (err) {
          console.log("error comming");
          res.send(err);
        }
        resolve({ status: "Success", data: { data: res } });
      });
    });
  };

  getDataByQuery = req => {
    let query = req.body;
    console.log("getDataByQuery: query :: ", query);
    return new Promise((resolve, reject) => {
      db.budget_entry_list.find(query, function (err, res) {
        if (err) {
          console.log("error comming");
          res.send(err);
        }
        resolve({ status: "Success", data: { data: res } });
      });
    });
  };


}
