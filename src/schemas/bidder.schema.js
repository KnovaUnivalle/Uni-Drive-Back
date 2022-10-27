import DataTypes from 'sequelize';
import sequelize from '../config/db.js';
import bcrypt from 'bcrypt';
import Vehicle from './vehicle.schema.js';

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

//associations
Bidder.hasOne(Vehicle, { foreignKey: 'bidderId' });
Vehicle.belongsTo(Bidder);

export default Bidder;
