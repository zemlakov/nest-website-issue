import { Module } from '@nestjs/common';
import { HomePageModule } from "./home-page/home-page.module";

@Module({
  imports: [HomePageModule]
})
export class AppModule {}
