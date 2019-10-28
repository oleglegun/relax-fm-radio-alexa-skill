import { HandlerInput } from 'ask-sdk-core'
import { Response } from 'ask-sdk-model'
import { IHandler } from '../interfaces/IHandler'

export const IntentHandlers: IHandler = {
    LaunchRequest: async function(handlerInput: HandlerInput): Promise<Response> {
        return this.PlayRelaxRadio(handlerInput)
    },
    PlayRelaxRadio: async function(handlerInput: HandlerInput): Promise<Response> {
        return null
    },

    'AMAZON.HelpIntent': async function(handlerInput: HandlerInput): Promise<Response> {
        return null
    },
    SessionEndedRequest: async function(handlerInput: HandlerInput): Promise<Response> {
        return Promise.resolve(handlerInput.responseBuilder.getResponse())
    },
    'System.ExceptionEncountered': async function(handlerInput: HandlerInput): Promise<Response> {
        console.log('Exception' + JSON.stringify(handlerInput.requestEnvelope, null, 2))
        return Promise.resolve(handlerInput.responseBuilder.getResponse())
    },
    Unhandled: async function(handlerInput: HandlerInput): Promise<Response> {
        return null
    },
    'AMAZON.NextIntent': async (handlerInput: HandlerInput): Promise<Response> => {
        handlerInput.responseBuilder.speak('Sorry, skip tracks is not supported.')
        return Promise.resolve(handlerInput.responseBuilder.withShouldEndSession(true).getResponse())
    },
    'AMAZON.PreviousIntent': async function(handlerInput: HandlerInput): Promise<Response> {
        return Promise.resolve(
            handlerInput.responseBuilder
                .speak('Sorry, skip tracks is not supported.')
                .withShouldEndSession(true)
                .getResponse()
        )
    },

    'AMAZON.PauseIntent': async function(handlerInput: HandlerInput): Promise<Response> {
        return this['AMAZON.StopIntent'](handlerInput)
    },
    'AMAZON.CancelIntent': async function(handlerInput: HandlerInput): Promise<Response> {
        return this['AMAZON.StopIntent'](handlerInput)
    },
    'AMAZON.StopIntent': async function(handlerInput: HandlerInput): Promise<Response> {
        return null
    },
    'AMAZON.ResumeIntent': async function(handlerInput: HandlerInput): Promise<Response> {
        return null
    },
    'AMAZON.LoopOnIntent': async function(handlerInput: HandlerInput): Promise<Response> {
        return this['AMAZON.StartOverIntent'](handlerInput)
    },
    'AMAZON.LoopOffIntent': async function(handlerInput: HandlerInput): Promise<Response> {
        return this['AMAZON.StartOverIntent'](handlerInput)
    },
    'AMAZON.ShuffleOnIntent': async function(handlerInput: HandlerInput): Promise<Response> {
        return this['AMAZON.StartOverIntent'](handlerInput)
    },
    'AMAZON.ShuffleOffIntent': async function(handlerInput: HandlerInput): Promise<Response> {
        return this['AMAZON.StartOverIntent'](handlerInput)
    },
    'AMAZON.StartOverIntent': async (handlerInput: HandlerInput): Promise<Response> => {
        return Promise.resolve(
            handlerInput.responseBuilder.speak('Sorry, this command is not supported.').getResponse()
        )
    },

    /*-----------------------------------------------------------------------------
     *  Remote Control commands
     *----------------------------------------------------------------------------*/
    'PlaybackController.PlayCommandIssued': async function(handlerInput: HandlerInput): Promise<Response> {
        return null
    },
    'PlaybackController.NextCommandIssued': async (handlerInput: HandlerInput): Promise<Response> => {
        return Promise.resolve(handlerInput.responseBuilder.getResponse())
    },
    'PlaybackController.PreviousCommandIssued': async (handlerInput: HandlerInput): Promise<Response> => {
        return Promise.resolve(handlerInput.responseBuilder.getResponse())
    },
    'PlaybackController.PauseCommandIssued': async function(handlerInput: HandlerInput): Promise<Response> {
        return null
    },
}
