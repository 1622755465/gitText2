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
module.exports = function(sequelize, DataTypes) {
    var breaker_key = sequelize.define('breaker_key', {
        key: {
            type: DataTypes.STRING
        },
        box:{
            type: DataTypes.STRING
        },
        loop:{
            type: DataTypes.STRING
        },
        event:{
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return breaker_key;
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
module.exports = function(sequelize, DataTypes) {
    var breaker_key = sequelize.define('breaker_key', {
        key: {
            type: DataTypes.STRING
        },
        box:{
            type: DataTypes.STRING
        },
        loop:{
            type: DataTypes.STRING
        },
        event:{
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return breaker_key;
>>>>>>> dedd623 (first)
>>>>>>> 19b8a9c (first)
>>>>>>> 8f5179a (first)
>>>>>>> 87a8fdf (first)
>>>>>>> 1e8021d (first)
>>>>>>> 5938de4 (first)
>>>>>>> c55f785 (first)
};