module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
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
            through: "product_id",
            foreignKey: "user_product",
            otherKey: "user_id",
            timestamps: false
        })
    }
    return User;
    }