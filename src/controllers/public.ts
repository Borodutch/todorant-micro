import { EventModel } from '@/models/event'
import { Context } from 'koa'
import { Body, Controller, Ctx, Post } from 'koa-ts-controllers'

@Controller('/')
export default class PublicController {
  @Post('/')
  async event(@Ctx() ctx: Context, @Body() body) {
    try {
      await new EventModel(body).save()
    } catch (err) {
      ctx.throw(400, err.message)
    }
  }
}
