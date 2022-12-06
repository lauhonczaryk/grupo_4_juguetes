module.exports = (sequelize, dataTypes) => {
    let alias = "Products";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(50)
        },
        price: {
            type: dataTypes.INTEGER
        },
        filename: {
            type: dataTypes.TEXT
        },
        description: {
            type: dataTypes.TEXT
        },
        category_id: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "products",
        timestamps: false
    }



    const Product = sequelize.define(alias, cols, config)

   Product.associate = function(models) {
        Product.belongsTo(models.Categories, {
            as: "categories",
            foreignKey: "category_id"
        })

        Product.belongsToMany(models.Users, {
            as: "users",
            through: "user_product",
            foreignKey: "product_id",
            otherKey: "user_id",
            timestamps: false
        })
    }


    return Product;
}