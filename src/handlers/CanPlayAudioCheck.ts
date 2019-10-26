import { HandlerInput } from 'ask-sdk-core'
import { Response } from 'ask-sdk-model'

export const CheckAudioInterfaceHandler = {
    canHandle(handlerInput: HandlerInput): boolean {
        let result = false
        try {
            result = handlerInput.requestEnvelope.context.System.device.supportedInterfaces.AudioPlayer === undefined
        } catch (err) {
            // system.device or system.device.supportedInterfaces is undefined.
            // this happens when the skill receives audio player event or skill lifecycle events
        }
        return result
    },

    handle(handlerInput: HandlerInput): Response {
        return handlerInput.responseBuilder
            .speak('Sorry. Playing audio on this device is not supported.')
            .withShouldEndSession(true)
            .getResponse()
    },
}
