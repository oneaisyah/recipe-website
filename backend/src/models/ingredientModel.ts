import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/db';

interface IngredientAttributes {
  id: number;
  name: string;
}

class Ingredient extends Model<IngredientAttributes> {}

Ingredient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'ingredients',
  }
);

export default Ingredient;
