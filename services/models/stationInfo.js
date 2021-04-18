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
    var StationInfo = sequelize.define('StationInfo', {
        StationId: {
            type: DataTypes.INTEGER,
            primaryKey:true
        },
        StationName: {
            type: DataTypes.STRING
        },
        TransformerCount: {
            type: DataTypes.INTEGER
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
    return StationInfo;
};

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
    var StationInfo = sequelize.define('StationInfo', {
        StationId: {
            type: DataTypes.INTEGER,
            primaryKey:true
        },
        StationName: {
            type: DataTypes.STRING
        },
        TransformerCount: {
            type: DataTypes.INTEGER
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
    return StationInfo;
};

>>>>>>> dedd623 (first)
>>>>>>> 19b8a9c (first)
>>>>>>> 8f5179a (first)
>>>>>>> 87a8fdf (first)
>>>>>>> 1e8021d (first)
>>>>>>> 5938de4 (first)
>>>>>>> c55f785 (first)
