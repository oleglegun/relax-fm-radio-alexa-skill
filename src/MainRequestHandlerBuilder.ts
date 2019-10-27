import { IHandler } from './interfaces/IHandler'
import { MainRequestHandler } from './MainRequestHandler'

export class MainRequestHandlerBuilder {
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

    public build(): MainRequestHandler {
        return new MainRequestHandler(this)
    }
}
