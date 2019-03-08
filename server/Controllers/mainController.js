var fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

var query = new sqlite3.Database('./DB/morningstar.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the database.')
  });

module.exports = {
    getCompanies : function(req, res){
      query.all('SELECT * from company', (err, rows) => {
          if (err) {
            res.json({status:false,error:"Error quering DB"});
            throw err;
          }
          res.json({status:true,companies:rows});
        });
    },
    getCompany : function(req, res){
      let company = req.params.company;
      query.all(`SELECT * FROM company WHERE companyName LIKE '%${company}%' `, (err, rows) => {
          if (err) {
            res.json({status:false,error:"Error quering DB"});
            throw err;
          }
          res.json({status:true,companies:rows});
        });
    },


    getHoldings : function(req, res){
      let ticker = req.params.ticker;
      // res.json({status:true,companies:ticker});
      query.get('SELECT * from company WHERE companyTicker = ?',[ticker], (err, row) => {
        if (err) {
          res.json({status:false,error:"Error quering DB"});
          throw err;
        }

        query.all('SELECT * from holdings WHERE companyTicker = ?',[ticker], (err, holdings) => {
            if (err) {
              res.json({status:false,error:"Error quering DB"});
              throw err;
            }
            res.json({status:true,company:row, holdings: holdings});
          });
      });
    },

    get404 : function(req, res){
      res.json({status:true,message:"404"});
    },

}
