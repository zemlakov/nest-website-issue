import { Controller, Get, Param, Render, Req } from "@nestjs/common";

@Controller(["ch", "de", "en", "pt", "dk", "se"])
export class HomePageController {
  @Get()
  getPage() {
    return "home-page";
  }
}
