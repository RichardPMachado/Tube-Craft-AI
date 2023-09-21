import { FFmpeg } from '@ffmpeg/ffmpeg'
import coreURL from '../../../web/src/ffmpeg/ffmpeg-core.js?url'
import wasmURL from '../../../web/src/ffmpeg/ffmpeg-core.wasm?url'
import workerURL from '../../../web/src/ffmpeg/ffmpeg-worker.js?url'

let ffmpeg: FFmpeg | null 

export async function getFFmpeg() {
  if (ffmpeg) return ffmpeg
  
  ffmpeg = new FFmpeg()

  if(!ffmpeg.loaded) {
    await ffmpeg.load({
      coreURL,
      wasmURL,
      workerURL,
    })
  } 

  return ffmpeg
} 