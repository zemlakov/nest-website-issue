import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { StoreMiddleware } from "./store.middleware";
import { HomePageController } from "./home-page.controller";

@Module({
  controllers: [HomePageController]
})
export class HomePageModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(StoreMiddleware)
      .forRoutes(HomePageController);
  }
}
