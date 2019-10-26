import * as AWS from 'ask-sdk-core'

import { RequestEnvelope, ResponseEnvelope } from 'ask-sdk-model'

import { CheckAudioInterfaceHandler } from './handlers/CanPlayAudioCheck'
import { SkillEventHandler } from './handlers/SkillEventHandler'

export async function handler(event: RequestEnvelope, context: any, callback: any): Promise<void> {
    const factory = AWS.SkillBuilders.custom().addRequestHandlers(CheckAudioInterfaceHandler, new SkillEventHandler())

    const skill = factory.create()

    try {
        const responseEnvelope: ResponseEnvelope = await skill.invoke(event, context)
        return callback(null, responseEnvelope)
    } catch (err) {
        return callback(err)
    }
}
