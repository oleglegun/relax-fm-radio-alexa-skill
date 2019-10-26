import { HandlerInput, RequestHandler, ResponseFactory } from 'ask-sdk-core'

import { Response } from 'ask-sdk-model'

export class SkillEventHandler implements RequestHandler {
    public async canHandle(handlerInput: HandlerInput): Promise<boolean> {
        return (
            handlerInput.requestEnvelope.request.type.startsWith('AlexaSkillEvent') ||
            handlerInput.requestEnvelope.request.type === 'SessionEndedRequest'
        )
    }

    public async handle(handleInput: HandlerInput): Promise<Response> {
        return ResponseFactory.init().getResponse()
    }
}
