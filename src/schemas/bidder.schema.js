import DataTypes from 'sequelize';
import sequelize from '../config/db.js';
import bcrypt from 'bcrypt';

const Bidder = sequelize.define(
	'Bidder',
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		email: {
			type: DataTypes.STRING(50),
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		freezeTableName: true, // no change name
		tableName: 'bidders',
		timestamps: false, // no updateat, no createate
		hooks: {
			//to encrypt password
			beforeCreate: async bidder => {
				const salt = await bcrypt.genSaltSync(10, 'a');
				bidder.password = bcrypt.hashSync(bidder.password, salt);
			},
			beforeUpdate: async bidder => {
				const salt = await bcrypt.genSaltSync(10, 'a');
				bidder.password = bcrypt.hashSync(bidder.password, salt);
			},
		},
		instanceMethods: {
			validPassword: password => {
				return bcrypt.compareSync(password, this.password);
			},
		},
	}
);
/**
 * Validate the password
 * @param {string} password incoming password
 * @param {string} hash bidder.password
 * @returns the result of validation
 */
Bidder.prototype.validPassword = async (password, hash) => {
	return await bcrypt.compareSync(password, hash);
};

export default Bidder;
