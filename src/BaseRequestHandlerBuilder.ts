import { BaseRequestHandler } from './BaseRequestHandler'
import { IHandler } from './interfaces/IHandler'

export class BaseRequestHandlerBuilder {
    private _handlers: IHandler

    constructor() {
        this._handlers = {}
    }

    public get handlers(): IHandler {
        return this._handlers
    }

    public withHandlers(handlers: IHandler): this {
        this._handlers = { ...this._handlers, ...handlers }
        return this
    }

    public build(): BaseRequestHandler {
        return new BaseRequestHandler(this)
    }
}
