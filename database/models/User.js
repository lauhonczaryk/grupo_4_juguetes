module.exports = (sequelize, dataTypes) => {
    let alias = "User";
    let cols = {
    id: {
    type: dataTypes.INTEGER,
    primaryKey : true,
    autoIncrement : true
    },
    name: {
        type: dataTypes.STRING(30)
    } ,
    username: {
        type: dataTypes.STRING(20)
    } ,
    password:{
        type: dataTypes.TEXT
    } ,
    email:{
        type: dataTypes.TEXT
    },
    privilege: {
        type: dataTypes.INTEGER
    }
    };
    let config = {
        tableName: "users",
        timestamps: false
    }
    
      
    const User = sequelize.define(alias, cols, config)
    

    User.associate = function(models) {
            User.belongsToMany(models.Products, {
            as: "products",
            through: "user_product",
            foreignKey: "user_id",
            otherKey: "product_id",
            timestamps: false
        })
    }
    return User;
    }