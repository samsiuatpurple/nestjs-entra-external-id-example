export const typeormConfig = {
  type: 'mysql',
  host: 'host.docker.internal',
  port: 3306,
  username: 'test',
  password: 'pass',
  database: 'nestjsrealworld',
  entities: ['src/**/**.entity{.ts,.js}'],
};
