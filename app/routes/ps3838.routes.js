module.exports = app => {
  const ps3838 = require("../controllers/ps3838.controller.js");

  var router = require("express").Router();

  // Retrieve all Ps3838 Odds by SportIds
  router.get("/", ps3838.GetOdds);

  // Retrieve all Ps3838 fixtures by SportIds
  router.get("/getfixtures", ps3838.GetFixtures);

  // Add Alert config into Sqlite3.
  router.post("/addalert", ps3838.AddAlert);

  // Update Alert 
  router.put("/addalert/:id", ps3838.UpdateAlert);

  app.use('/api/ps3838', router);
};
