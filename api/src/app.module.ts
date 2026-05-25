import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Report } from './report.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Report],
      synchronize: true, // 🔥 WAJIB FALSE (biar data tidak hilang lagi)
    }),
    TypeOrmModule.forFeature([Report]),
  ],
  controllers: [AppController],
})
export class AppModule {}
