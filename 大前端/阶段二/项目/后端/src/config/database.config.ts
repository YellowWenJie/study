import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const MYSQL: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '106.55.4.201',
  port: 3306,
  username: 'root',
  password: 'huangwenjie',
  database: 'Yellowwenjie',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true, // 如果true, 自动加载的模型将被同步 (默认: true)
};
