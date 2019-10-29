import { HandlerInput } from 'ask-sdk-core'
import { Response } from 'ask-sdk-model'
import { IHandler } from '../interfaces/IHandler'

import { radioPlaybackController } from '../RadioPlaybackController'

export const AudioPlayerHandlers: IHandler = {
    'AudioPlayer.PlaybackStarted': async function(handlerInput: HandlerInput): Promise<Response> {
        return Promise.resolve(handlerInput.responseBuilder.getResponse())
    },
    'AudioPlayer.PlaybackFinished': async function(handlerInput: HandlerInput): Promise<Response> {
        return Promise.resolve(handlerInput.responseBuilder.getResponse())
    },
    'AudioPlayer.PlaybackStopped': async function(handlerInput: HandlerInput): Promise<Response> {
        return Promise.resolve(handlerInput.responseBuilder.getResponse())
    },
    'AudioPlayer.PlaybackNearlyFinished': async function(handlerInput: HandlerInput): Promise<Response> {
        return Promise.resolve(handlerInput.responseBuilder.getResponse())
    },
    'AudioPlayer.PlaybackFailed': async function(handlerInput: HandlerInput): Promise<Response> {
        return Promise.resolve(radioPlaybackController.play())
    },
}
