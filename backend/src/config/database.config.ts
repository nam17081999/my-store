import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost', // Thay đổi thành địa chỉ máy chủ cơ sở dữ liệu của bạn
  port: 5432, // Cổng mặc định cho PostgreSQL
  username: 'postgres', // Tên người dùng của cơ sở dữ liệu
  password: 'password', // Mật khẩu của cơ sở dữ liệu
  database: 'mydb', // Tên cơ sở dữ liệu
  synchronize: true, // Chế độ đồng bộ hóa sẽ tạo lại cơ sở dữ liệu trong môi trường phát triển, không nên sử dụng trong môi trường sản phẩm
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
};