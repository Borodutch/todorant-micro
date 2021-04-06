import { EventModel } from '@/models/event'
import { Body, Controller, Ctx, Post } from 'koa-ts-controllers'

@Controller('/')
export default class PublicController {
  @Post('/')
  async event(@Ctx() ctx, @Body() body) {
    try {
      await new EventModel(body).save()
    } catch (err) {
      return ctx.throw(400, err.message)
    }
  }
}
