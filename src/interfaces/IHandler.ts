import { HandlerInput } from 'ask-sdk-core'
import { Response } from 'ask-sdk-model'

export interface IHandler {
    [key: string]: (handlerInput: HandlerInput) => Promise<Response>
}
