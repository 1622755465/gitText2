<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 19b8a9c (first)
>>>>>>> 8f5179a (first)
>>>>>>> 87a8fdf (first)
>>>>>>> 1e8021d (first)
>>>>>>> 5938de4 (first)
>>>>>>> c55f785 (first)
/**
 * Created by Friday on 2017/5/11.
 */
var Sequelize = require('sequelize');
var DatabaseInfo = require('../configs/credentials');

module.exports = DbConnection;

function DbConnection()
{

}

var conn;
var env = process.env.NODE_ENV || 'development';
if (env === 'development') {
    conn=DatabaseInfo.mssql.development;
} else if (env === 'production'){
    conn=DatabaseInfo.mssql.production;
} else if (env === 'test')
{
    conn=DatabaseInfo.mssql.test;
}
else {
    conn=DatabaseInfo.mssql.development;
}

DbConnection.prototype.sequelize= new Sequelize(conn.database,conn.username,conn.password,{
    host:conn.host,
    port:conn.port,
    dialect:'mssql',
    timezone:'+08:00',
    pool:{
        max: '10'
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
/**
 * Created by Friday on 2017/5/11.
 */
var Sequelize = require('sequelize');
var DatabaseInfo = require('../configs/credentials');

module.exports = DbConnection;

function DbConnection()
{

}

var conn;
var env = process.env.NODE_ENV || 'development';
if (env === 'development') {
    conn=DatabaseInfo.mssql.development;
} else if (env === 'production'){
    conn=DatabaseInfo.mssql.production;
} else if (env === 'test')
{
    conn=DatabaseInfo.mssql.test;
}
else {
    conn=DatabaseInfo.mssql.development;
}

DbConnection.prototype.sequelize= new Sequelize(conn.database,conn.username,conn.password,{
    host:conn.host,
    port:conn.port,
    dialect:'mssql',
    timezone:'+08:00',
    pool:{
        max: '10'
    }
>>>>>>> dedd623 (first)
>>>>>>> 19b8a9c (first)
>>>>>>> 8f5179a (first)
>>>>>>> 87a8fdf (first)
>>>>>>> 1e8021d (first)
>>>>>>> 5938de4 (first)
>>>>>>> c55f785 (first)
});