import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const typeOrmConfig = async (
	configService: ConfigService,
): Promise<PostgresConnectionOptions> => {
	return {
		migrations: [join(__dirname, '..', 'db/migrations/**/*{.js,.ts}')],
		entities: [join(__dirname, '..', '/**/*.entity{.js,.ts}')],
		host: configService.get('DB_HOST'),
		type: configService.get('DB_TYPE'),
		username: configService.get('DB_USERNAME'),
		password: configService.get('DB_PASSWORD'),
		port: configService.get('DB_PORT'),
		database: configService.get('DB_DATABASE'),
		synchronize: false,
	};
};
