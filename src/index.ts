import * as AWS from 'ask-sdk-core'
import { AudioPlayerHandlers } from './handlers/AudioPlayerHandlers'
import { IntentHandlers } from './handlers/IntentHandlers'

import { RequestEnvelope, ResponseEnvelope } from 'ask-sdk-model'

import { CheckAudioInterfaceHandler } from './handlers/CanPlayAudioCheck'
import { SkillEventHandler } from './handlers/SkillEventHandler'
import { MainRequestHandler } from './MainRequestHandler'

export async function handler(event: RequestEnvelope, context: any, callback: any): Promise<void> {
    const factory = AWS.SkillBuilders.custom().addRequestHandlers(
        CheckAudioInterfaceHandler,
        new SkillEventHandler(),
        MainRequestHandler.builder()
            .withHandlers(IntentHandlers)
            .withHandlers(AudioPlayerHandlers)
            .build()
    )

    const skill = factory.create()

    try {
        const responseEnvelope: ResponseEnvelope = await skill.invoke(event, context)
        return callback(null, responseEnvelope)
    } catch (err) {
        console.log(JSON.stringify(err, null, 2))
        return callback(err)
    }
}
