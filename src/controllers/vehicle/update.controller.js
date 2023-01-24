import Vehicle from '../../schemas/vehicle.schema.js';

export const updateActiveVehicleController = async (req, res) => {
	try {
		const { id } = req.params;
		const active = req.query.active || false;

		await Vehicle.update(
			{
				active: active,
			},
			{
				where: {
					id: id,
				},
			}
		);
		return res.status(201).send('Estado de viaje actualizado');
	} catch (error) {
		return res.status(500);
	}
};
