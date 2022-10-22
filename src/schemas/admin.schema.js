import DataTypes from 'sequelize';
import sequelize from '../config/db.js';
import bcrypt from 'bcrypt';

const Admin = sequelize.define(
	'Admin',
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
		tableName: 'admins',
		timestamps: false, // no updateat, no createate
		hooks: {
			//to encrypt password
			beforeCreate: async admin => {
				const salt = await bcrypt.genSaltSync(10, 'a');
				admin.password = bcrypt.hashSync(admin.password, salt);
			},
			beforeUpdate: async admin => {
				const salt = await bcrypt.genSaltSync(10, 'a');
				admin.password = bcrypt.hashSync(admin.password, salt);
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
 * @param {string} hash admin.password
 * @returns the result of validation
 */
Admin.prototype.validPassword = async (password, hash) => {
	return await bcrypt.compareSync(password, hash);
};

export default Admin;
