const express = require('express');
const app = express();

const studentdb = require('./studentData');

const PORT = process.env.PORT || 8000;


// console.log(studentdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'DUMMY CUNY API'});
});


app.get('/student_id/:student_id', (req, res) => {
  const records = studentdb.byStudentID[req.params.student_id];
  if(records===undefined){
  	res.sendStatus(404);
  }
  else {
  	res.json(records);
  }
});



app.get('/id/:RecordNumber', (req, res) => {
  const records = studentdb.byID[req.params.RecordNumber];

  if(records === undefined)
  {
    res.sendStatus(404);
  }
  else{
    res.json(records);
  }

});


app.listen(PORT, () => {
  console.log(`student-dummy-api is up and running on ${PORT}`);
});