const fs = require('fs');
const parse = require('csv-parse/lib/sync');

const data = fs.readFileSync('./data/sample-student-database.csv');
const records = parse(data, { columns: true });


const byStudentID = {};
const byID = {};

records.forEach((rec) => {
  if(byStudentID[rec.student_id] === undefined) {
    byStudentID[rec.student_id] = [];
  }
  byStudentID[rec.student_id].push(rec);

  if(byID[rec.RecordNumber] === undefined) {
    byID[rec.RecordNumber] = [];
  }
  byID[rec.RecordNumber].push(rec);
});


module.exports = { byStudentID, byID };
