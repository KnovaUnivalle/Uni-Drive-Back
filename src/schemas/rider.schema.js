import DataTypes from 'sequelize';
import sequelize from '../config/db.js';
import bcrypt from 'bcrypt';

const Rider = sequelize.define(
	'Rider',
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
		birthDate: {
			type: DataTypes.DATEONLY,
			allowNull: false,
		},
		firsName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		secondName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		numberPhone: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		timestamps: false, // no update at, no create at
		hooks: {
			//to encrypt password
			beforeCreate: async rider => {
				const salt = await bcrypt.genSaltSync(10, 'a');
				rider.password = bcrypt.hashSync(rider.password, salt);
			},
			beforeUpdate: async rider => {
				const salt = await bcrypt.genSaltSync(10, 'a');
				rider.password = bcrypt.hashSync(rider.password, salt);
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
 * @param {string} hash rider.password
 * @returns the result of validation
 */
Rider.prototype.validPassword = async (password, hash) => {
	return await bcrypt.compareSync(password, hash);
};

export default Rider;
