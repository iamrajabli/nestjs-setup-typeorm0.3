import { ConfigService } from '@nestjs/config';
import { typeOrmConfig } from '../config/typeorm.config';
import { DataSource, DataSourceOptions } from 'typeorm';

export default (async function () {
	const configService = new ConfigService();

	const config = await typeOrmConfig(configService);

	return new DataSource(config as DataSourceOptions);
})();
