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
    var XYL = sequelize.define('XYL', {
        DT: {
            type: DataTypes.DATE
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
    return XYL;
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
    var XYL = sequelize.define('XYL', {
        DT: {
            type: DataTypes.DATE
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
    return XYL;
>>>>>>> dedd623 (first)
>>>>>>> 19b8a9c (first)
>>>>>>> 8f5179a (first)
>>>>>>> 87a8fdf (first)
>>>>>>> 1e8021d (first)
>>>>>>> 5938de4 (first)
>>>>>>> c55f785 (first)
};