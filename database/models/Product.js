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

    return Product;
}