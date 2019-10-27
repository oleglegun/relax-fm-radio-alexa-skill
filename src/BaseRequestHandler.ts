import { HandlerInput, RequestHandler } from 'ask-sdk-core'
import { Response } from 'ask-sdk-model'

import { BaseRequestHandlerBuilder } from './BaseRequestHandlerBuilder'
import { IHandler } from './interfaces/IHandler'

export class BaseRequestHandler implements RequestHandler {
    public static builder(): BaseRequestHandlerBuilder {
        return new BaseRequestHandlerBuilder()
    }

    private handlers: IHandler

    constructor(builder: BaseRequestHandlerBuilder) {
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
