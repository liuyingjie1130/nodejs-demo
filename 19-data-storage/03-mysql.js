#!/usr/bin/node

const mysql=require('mysql');

const con=mysql.createConnection({
  host:'localhost',
      user:'root',
      password:'ddd',
      database:'test'
});

con.connect();

//opteration db
 /*查
const sql='select * from books where book_id=?';
con.query(sql,[100], function(err,result){
  if(err){
    console.error(err);
    process.exit(100);
  }
  console.log(result)
});
*/

/*插
const sql='insert into books(book_id,title,status) values(?,?,?)';

con.query(sql,[2,'Node.js实战',0],function(err,result){
if(err){
    console.error(err);
    process.exit(100);
  }
  console.log(result);

})
*/


/* 改
const sql='update books set title=? where book_id=?';

con.query(sql,['MySQL Programming',2],function(err,result){
if(err){
    console.error(err);
    process.exit(100);
  }
  console.log(result);


})
*/


/* 删
const sql='delete  books set title=? where book_id=?';

con.query(sql,[2],function(err,result){
if(err){
    console.error(err);
    process.exit(100);
  }
  console.log(result);


})
*/


con.end();
