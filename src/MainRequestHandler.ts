import { HandlerInput, RequestHandler } from 'ask-sdk-core'
import { Response } from 'ask-sdk-model'

import { IHandler } from './interfaces/IHandler'
import { MainRequestHandlerBuilder } from './MainRequestHandlerBuilder'

export class MainRequestHandler implements RequestHandler {
    public static builder(): MainRequestHandlerBuilder {
        return new MainRequestHandlerBuilder()
    }

    private handlers: IHandler

    constructor(builder: MainRequestHandlerBuilder) {
        this.handlers = builder.handlers
    }

    public async canHandle(handlerInput: HandlerInput): Promise<boolean> {
        return Object.prototype.hasOwnProperty.call(this.handlers, this.getTargetHandlerName(handlerInput))
    }

    public async handle(handlerInput: HandlerInput): Promise<Response> {
        return this.handlers[this.getTargetHandlerName(handlerInput)](handlerInput)
    }

    private getTargetHandlerName(handlerInput: HandlerInput): string {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            ? handlerInput.requestEnvelope.request.intent.name
            : handlerInput.requestEnvelope.request.type
    }
}
