module.exports = (sequelize, dataTypes) => {
    let alias = "Categories";
    let cols = {
    id: {
        type: dataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true 
    },
    name: {
        type: dataTypes.STRING(40)
    }
    };
    let config = {
        tableName: "categories",
        timestamps: false
    }
    
    
    
    const Category = sequelize.define(alias, cols, config)
    
  /*  Category.associate = function(models) {
        Category.hasMany(models.Product, {
            as: "productos",
            foreignKey: "category_id"
        })
    }*/
    return Category;
    }