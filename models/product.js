import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/db';


const Product = sequelize.define('products', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, },
    price: { type: DataTypes.STRING, allowNull: true, },
    imgSrc: { type: DataTypes.STRING, allowNull: true, },
    img2: { type: DataTypes.STRING, allowNull: true, },
    img3: { type: DataTypes.STRING, allowNull: true, },
    img4: { type: DataTypes.STRING, allowNull: true, },
    img5: { type: DataTypes.STRING, allowNull: true, },
    img6: { type: DataTypes.STRING, allowNull: true, },
    img7: { type: DataTypes.STRING, allowNull: true, },
    img8: { type: DataTypes.STRING, allowNull: true, },
    img9: { type: DataTypes.STRING, allowNull: true, },
    img10: { type: DataTypes.STRING, allowNull: true, },
    description: { type: DataTypes.STRING, allowNull: true, },
    list1: { type: DataTypes.STRING, allowNull: true, },
    list2: { type: DataTypes.STRING, allowNull: true, },
    list3: { type: DataTypes.STRING, allowNull: true, },
    list4: { type: DataTypes.STRING, allowNull: true, },
    list5: { type: DataTypes.STRING, allowNull: true, },
    list6: { type: DataTypes.STRING, allowNull: true, },
    list7: { type: DataTypes.STRING, allowNull: true, },
    list8: { type: DataTypes.STRING, allowNull: true, },
    list9: { type: DataTypes.STRING, allowNull: true, },
    list10: { type: DataTypes.STRING, allowNull: true, },
    list11: { type: DataTypes.STRING, allowNull: true, },
    list12: { type: DataTypes.STRING, allowNull: true, },
    list13: { type: DataTypes.STRING, allowNull: true, },
    list14: { type: DataTypes.STRING, allowNull: true, },
    list15: { type: DataTypes.STRING, allowNull: true, },
    list16: { type: DataTypes.STRING, allowNull: true, },
    list17: { type: DataTypes.STRING, allowNull: true, },
    list18: { type: DataTypes.STRING, allowNull: true, },
    list19: { type: DataTypes.STRING, allowNull: true, },
    list20: { type: DataTypes.STRING, allowNull: true, },
    category: { type: DataTypes.STRING, allowNull: true, },
    page_name: { type: DataTypes.STRING, allowNull: true },
    product_category: { type: DataTypes.STRING, allowNull: true, },
});

export default Product;



