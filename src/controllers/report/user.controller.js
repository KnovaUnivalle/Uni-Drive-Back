import sequelize from '../../config/db.js';
import Bidder from '../../schemas/bidder.schema.js';
import Rider from '../../schemas/rider.schema.js';
import RiderInTrip from '../../schemas/riderInTrip.schema.js';
import Trip from '../../schemas/trip.schema.js';
import {
	formatActiveReport,
	formatFrequentIDReport,
} from '../../utils/arrayMethods.js';

const limit = 5;

/**
 * send the most frequent birthDays from bidder
 * @param {Object} req
 * @param {Object} res
 * @returns
 */
export const birthBidderDayController = async (req, res) => {
	try {
		const data = await Bidder.findAll({
			attributes: [
				'birthDate',
				[sequelize.fn('COUNT', sequelize.col('birthDate')), 'count'],
			],
			group: 'birthDate',
			limit: limit,
			order: [['count', 'DESC']],
		});
		if (data.length === 0) return res.status(404).json(data);
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};
/**
 * send the most frequent birthDays from rider
 * @param {Object} req
 * @param {Object} res
 * @returns
 */
export const birthRiderDayController = async (req, res) => {
	try {
		const data = await Rider.findAll({
			attributes: [
				'birthDate',
				[sequelize.fn('COUNT', sequelize.col('birthDate')), 'count'],
			],
			group: 'birthDate',
			limit: limit,
			order: ['count', 'DESC'],
		});
		if (data.length === 0) return res.status(404).json(data);
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};

/**
 *
 * @param {*} req
 * @param {*} res
 */
export const frequentBidderController = async (req, res) => {
	try {
		const bidders = await Trip.findAll({
			attributes: [
				'BidderId',
				[sequelize.fn('COUNT', sequelize.col('BidderId')), 'count'],
			],
			group: ['BidderId', 'Bidder.id'],
			limit: limit,
			order: [['count', 'DESC']],
			include: [{ model: Bidder, attributes: ['id'] }],
		});
		console.log(bidders[0]['dataValues']['Bidder']['id']);
		if (bidders.length === 0) return res.status(404).json([]);
		const data = formatFrequentIDReport(bidders, 'BidderId');
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};

/**
 *send the most frequent riders on a trip
 * @param {Object} req
 * @param {Object} res
 * @returns
 */
export const frequentRiderController = async (req, res) => {
	try {
		const riders = await RiderInTrip.findAll({
			attributes: [
				'RiderId',
				[sequelize.fn('COUNT', sequelize.col('RiderId')), 'count'],
			],
			group: ['RiderId', 'Rider.id'],
			limit: limit,
			order: [['count', 'DESC']],
			include: [{ model: Rider, attributes: ['id'] }],
		});
		if (riders.length === 0) return res.status(404).json([]);
		const data = formatFrequentReport(riders, 'BidderId');
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};

/**
 * send the number of actives and inactive bidders
 * @param {Object} req
 * @param {Object} res
 * @returns
 */
export const activeBidderController = async (req, res) => {
	try {
		const total = await Bidder.count();
		if (total === 0) return res.status(404).send({ errors: ['Sin datos'] });

		const active = await Bidder.count({ where: { active: true } });
		const noActive = total - active;

		const data = formatActiveReport(active, noActive);
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};

/**
 * send the number of actives and inactive riders
 * @param {Object} req
 * @param {Object} res
 * @returns
 */
export const activeRiderController = async (req, res) => {
	try {
		const total = await Rider.count();
		if (total === 0) return res.status(404).send({ errors: ['Sin datos'] });

		const active = await Rider.count({ where: { active: true } });
		const noActive = total - active;

		const data = formatActiveReport(active, noActive);
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};
