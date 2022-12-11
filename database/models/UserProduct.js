module.exports = (sequelize, dataTypes) => {
    let alias = "user_product";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: dataTypes.INTEGER,
            references: { model: 'Products', key: 'id' }
        },
        user_id: {
            type: dataTypes.INTEGER,
            references: { model: 'Users', key: 'id' }
        }
    };
    let config = {
        tableName: "users",
        timestamps: false
    }
    const UserProduct = sequelize.define(alias, cols, config)

    UserProduct.associate = function (models) {
        UserProduct.belongsTo(models.Products, {
            foreignKey: "product_id"
        })
        UserProduct.belongsTo(models.User, {
            foreignKey: "user_id"
        })
    }
    return UserProduct;
}