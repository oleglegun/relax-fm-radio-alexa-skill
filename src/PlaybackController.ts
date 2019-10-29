import { ResponseFactory } from 'ask-sdk-core'

const RADIO_PLAYLIST_URL = 'https://relax-fm-radio.s3.amazonaws.com/playlist.m3u'

class PlaybackController {
    public play() {
        const result = ResponseFactory.init()

        result
            .addAudioPlayerPlayDirective('REPLACE_ALL', RADIO_PLAYLIST_URL, RADIO_PLAYLIST_URL, 0)
            .withShouldEndSession(true)

        return result.getResponse()
    }

    public stop() {
        const result = ResponseFactory.init()
        result.addAudioPlayerStopDirective()

        return result.getResponse()
    }
}

export const playbackController = new PlaybackController()
