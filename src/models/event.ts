import { prop, getModelForClass } from '@typegoose/typegoose'

export class Event {
  @prop({ required: true, index: true })
  userId: string
  @prop({ required: true, index: true })
  name: string
  @prop({ required: true, index: true })
  timestamp: number
  @prop({ required: true, index: true })
  platform: string
  @prop({ required: true, index: true })
  language: string
  @prop({ required: true, index: true })
  userAgent: string
  @prop({ required: true, index: true, default: false })
  debug: boolean
  @prop({ required: true, index: true, default: false })
  isAnonymous: boolean
  @prop({ index: true })
  density?: string
  @prop({ index: true })
  installationId?: string
}

export const EventModel = getModelForClass(Event, {
  schemaOptions: { timestamps: true },
})
