import { DataTypes, Model } from "sequelize";
import sequelize from "../db/db";

interface InstructionAttributes {
    id: number;
    description: string;
    order: number;
    recipeId: number;
}

class Instruction extends Model<InstructionAttributes> {}

Instruction.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        order: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        recipeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'instructions',
    }
);

export default Instruction;