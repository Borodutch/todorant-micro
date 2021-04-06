import { EventModel } from '@/models/event'
import { Body, Controller, Post } from 'koa-ts-controllers'

@Controller('/')
export default class PublicController {
  @Post('/')
  async event(@Body() body: any) {
    await new EventModel(body).save()
  }
}
