# CPU Profile

| Duration | Samples | Interval | Functions |
|----------|---------|----------|----------|
| 229.47s | 63063 | 1.0ms | 1055 |

**Top 10:** `async _callWithConfig` 15.7%, `ReadableState` 7.7%, `(anonymous)` 7.2%, `.wasm-function[8869]` 6.1%, `.wasm-function[8901]` 6.1%, `.wasm-function[8885]` 5.8%, `reduce` 4.8%, `.wasm-function[8918]` 4.8%, `metadata` 2.5%, `all` 2.0%

## Hot Functions (Self Time)

| Self% | Self | Total% | Total | Function | Location |
|------:|-----:|-------:|------:|----------|----------|
| 15.7% | 36.13s | 15.7% | 36.13s | `async _callWithConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:157` |
| 7.7% | 17.75s | 7.7% | 17.75s | `ReadableState` | `internal:streams/readable` |
| 7.2% | 16.55s | 10.4% | 24.00s | `(anonymous)` | `[native code]` |
| 6.1% | 14.13s | 6.1% | 14.13s | `.wasm-function[8869]` | `[native code]` |
| 6.1% | 14.12s | 6.1% | 14.12s | `.wasm-function[8901]` | `[native code]` |
| 5.8% | 13.35s | 5.8% | 13.35s | `.wasm-function[8885]` | `[native code]` |
| 4.8% | 11.16s | 4.9% | 11.39s | `reduce` | `[native code]` |
| 4.8% | 11.06s | 4.8% | 11.06s | `.wasm-function[8918]` | `[native code]` |
| 2.5% | 5.84s | 2.5% | 5.84s | `metadata` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:642` |
| 2.0% | 4.77s | 2.0% | 4.77s | `all` | `[native code]` |
| 1.8% | 4.28s | 17.4% | 40.15s | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:35` |
| 1.7% | 4.11s | 1.7% | 4.11s | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:272` |
| 1.6% | 3.81s | 1.6% | 3.81s | `async call` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:113` |
| 1.6% | 3.78s | 1.6% | 3.78s | `runChecks` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js` |
| 1.5% | 3.55s | 1.5% | 3.55s | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:426` |
| 1.5% | 3.48s | 1.5% | 3.48s | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/parse.js:21` |
| 1.4% | 3.37s | 1.4% | 3.37s | `async normalizeCoords` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/normalizeCoords.ts:10` |
| 1.4% | 3.30s | 1.4% | 3.30s | `convertOpenRouterResponseToBaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/converters/messages.js:34` |
| 1.2% | 2.93s | 1.2% | 2.93s | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:333` |
| 1.2% | 2.92s | 1.2% | 2.92s | `_next` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:47` |
| 1.2% | 2.84s | 1.2% | 2.84s | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:83` |
| 1.1% | 2.71s | 1.1% | 2.71s | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:324` |
| 1.0% | 2.49s | 1.0% | 2.49s | `Uint8Array` | `[native code]` |
| 0.9% | 2.16s | 0.9% | 2.16s | `json` | `[native code]` |
| 0.9% | 2.12s | 27.8% | 63.89s | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.8% | 1.99s | 0.8% | 1.99s | `convertOpenRouterResponseToBaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/converters/messages.js` |
| 0.8% | 1.89s | 0.8% | 1.89s | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:58` |
| 0.8% | 1.84s | 0.8% | 1.84s | `async extract` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts` |
| 0.7% | 1.80s | 0.7% | 1.80s | `BaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/base.js:140` |
| 0.7% | 1.76s | 0.7% | 1.76s | `AIMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/ai.js:67` |
| 0.7% | 1.66s | 2.1% | 5.04s | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:304` |
| 0.6% | 1.49s | 0.6% | 1.49s | `convertUsageMetadata` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/converters/messages.js:93` |
| 0.6% | 1.47s | 0.6% | 1.47s | `cloneObject` | `[native code]` |
| 0.5% | 1.27s | 1.4% | 3.44s | `async _generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:281` |
| 0.5% | 1.27s | 0.5% | 1.27s | `BaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/base.js:126` |
| 0.5% | 1.15s | 0.5% | 1.18s | `anonymous` | `[native code]` |
| 0.4% | 1.10s | 0.4% | 1.10s | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts` |
| 0.4% | 1.05s | 0.4% | 1.05s | `isArray` | `[native code]` |
| 0.3% | 844.8ms | 0.5% | 1.32s | `emval_returnValue` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.3% | 770.8ms | 0.3% | 770.8ms | `parse` | `[native code]` |
| 0.3% | 730.2ms | 0.4% | 1.02s | `bound toWireType` | `[native code]` |
| 0.3% | 714.5ms | 1.6% | 3.75s | `decodeMemoryView` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.3% | 708.6ms | 0.7% | 1.76s | `AIMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/ai.js:31` |
| 0.2% | 658.8ms | 0.2% | 658.8ms | `isResizeExpected` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs` |
| 0.2% | 584.9ms | 0.3% | 717.4ms | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.2% | 552.5ms | 0.2% | 552.5ms | `get buffer` | `[native code]` |
| 0.2% | 539.1ms | 0.2% | 539.1ms | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:350` |
| 0.2% | 533.9ms | 0.2% | 533.9ms | `.wasm-function[9388]` | `[native code]` |
| 0.2% | 530.8ms | 0.2% | 530.8ms | `fetch` | `[native code]` |
| 0.2% | 493.5ms | 0.2% | 493.5ms | `.wasm-function[2953]` | `[native code]` |
| 0.1% | 398.4ms | 2.3% | 5.41s | `Mat.ucharPtr` | `[native code]` |
| 0.1% | 373.2ms | 2.4% | 5.60s | `.wasm-function[6148]` | `[native code]` |
| 0.1% | 348.7ms | 0.3% | 901.9ms | `mupdf-wasm.wasm.wasm-function[deflate_slow]` | `[native code]` |
| 0.1% | 323.0ms | 0.1% | 389.5ms | `mupdf-wasm.wasm.wasm-function[fill_window]` | `[native code]` |
| 0.1% | 313.4ms | 0.1% | 313.4ms | `BaseChatModel` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` |
| 0.1% | 297.3ms | 0.2% | 518.1ms | `bound fromWireType` | `[native code]` |
| 0.1% | 292.7ms | 3.3% | 7.67s | `async call` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:249` |
| 0.1% | 290.1ms | 0.1% | 290.1ms | `defineProperty` | `[native code]` |
| 0.1% | 265.6ms | 0.1% | 436.0ms | `bound nonConstNoSmartPtrRawPointerToWireType` | `[native code]` |
| 0.1% | 260.8ms | 2.5% | 5.86s | `.wasm-function[6137]` | `[native code]` |
| 0.1% | 237.6ms | 0.4% | 1.14s | `mupdf-wasm.wasm.wasm-function[png_write_band]` | `[native code]` |
| 0.1% | 236.8ms | 0.1% | 236.8ms | `fromWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.1% | 235.7ms | 0.1% | 235.7ms | `toWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 223.6ms | 0.0% | 223.6ms | `async call` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:127` |
| 0.0% | 203.2ms | 0.0% | 203.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:49` |
| 0.0% | 201.8ms | 0.0% | 201.8ms | `getLangSmithEnvironmentVariable` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/env.js:162` |
| 0.0% | 185.0ms | 0.0% | 185.0ms | `stringify` | `[native code]` |
| 0.0% | 170.3ms | 0.0% | 170.3ms | `nonConstNoSmartPtrRawPointerToWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 161.8ms | 0.0% | 161.8ms | `set` | `[native code]` |
| 0.0% | 161.6ms | 3.0% | 6.97s | `wasm-stub` | `[native code]` |
| 0.0% | 156.7ms | 0.0% | 156.7ms | `.wasm-function[9672]` | `[native code]` |
| 0.0% | 152.4ms | 0.0% | 152.4ms | `findWasmBinary` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 151.6ms | 0.0% | 151.6ms | `mupdf-wasm.wasm.wasm-function[longest_match]` | `[native code]` |
| 0.0% | 148.9ms | 0.0% | 148.9ms | `interopZodObjectStrict` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:310` |
| 0.0% | 147.1ms | 23.8% | 54.63s | `(unknown)` | `[native code]` |
| 0.0% | 120.4ms | 0.0% | 195.4ms | `.wasm-function[1543]` | `[native code]` |
| 0.0% | 114.9ms | 0.0% | 114.9ms | `.wasm-function[12009]` | `[native code]` |
| 0.0% | 114.2ms | 0.0% | 114.2ms | `.wasm-function[12303]` | `[native code]` |
| 0.0% | 112.5ms | 0.0% | 112.5ms | `WritableState` | `internal:streams/writable:139` |
| 0.0% | 105.1ms | 0.0% | 105.1ms | `WritableState` | `internal:streams/writable:147` |
| 0.0% | 101.9ms | 0.0% | 101.9ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js` |
| 0.0% | 101.2ms | 0.0% | 102.2ms | `bound RegisteredPointer_fromWireType` | `[native code]` |
| 0.0% | 89.4ms | 0.0% | 89.4ms | `invocationParams` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:219` |
| 0.0% | 89.3ms | 0.0% | 89.3ms | `.wasm-function[8596]` | `[native code]` |
| 0.0% | 83.8ms | 0.0% | 83.8ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:2` |
| 0.0% | 75.9ms | 0.0% | 75.9ms | `push` | `[native code]` |
| 0.0% | 70.5ms | 0.0% | 70.5ms | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:229` |
| 0.0% | 68.7ms | 0.0% | 68.7ms | `grow` | `[native code]` |
| 0.0% | 66.5ms | 0.0% | 66.5ms | `log` | `[native code]` |
| 0.0% | 66.4ms | 0.0% | 66.4ms | `mupdf-wasm.wasm.wasm-function[adler32]` | `[native code]` |
| 0.0% | 65.8ms | 0.0% | 65.8ms | `WritableState` | `internal:streams/writable:140` |
| 0.0% | 62.7ms | 0.0% | 62.7ms | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:269` |
| 0.0% | 62.4ms | 23.4% | 53.76s | `.wasm-function[2968]` | `[native code]` |
| 0.0% | 61.5ms | 0.0% | 66.7ms | `bound decodeMemoryView` | `[native code]` |
| 0.0% | 56.9ms | 0.0% | 56.9ms | `toHandle` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 51.5ms | 0.0% | 51.5ms | `slice` | `[native code]` |
| 0.0% | 49.9ms | 0.0% | 49.9ms | `.wasm-function[12680]` | `[native code]` |
| 0.0% | 45.1ms | 0.0% | 45.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/composite.mjs` |
| 0.0% | 42.3ms | 9.7% | 22.46s | `Promise` | `[native code]` |
| 0.0% | 42.3ms | 0.0% | 42.3ms | `async writeFile` | `node:fs/promises` |
| 0.0% | 40.8ms | 0.0% | 40.8ms | `Duplex` | `internal:streams/duplex:6` |
| 0.0% | 39.7ms | 0.0% | 129.1ms | `.wasm-function[510]` | `[native code]` |
| 0.0% | 38.8ms | 0.0% | 38.8ms | `async _mergeConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:622` |
| 0.0% | 36.6ms | 0.0% | 36.6ms | `mupdf-wasm.wasm.wasm-function[paint_span_with_color_3_solid]` | `[native code]` |
| 0.0% | 35.6ms | 0.0% | 35.6ms | `async pRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js:111` |
| 0.0% | 35.6ms | 0.5% | 1.29s | `.wasm-function[934]` | `[native code]` |
| 0.0% | 35.4ms | 0.0% | 35.4ms | `.wasm-function[549]` | `[native code]` |
| 0.0% | 34.6ms | 0.0% | 34.6ms | `ReadableState` | `internal:streams/readable:30` |
| 0.0% | 32.8ms | 0.0% | 65.3ms | `_convertInputToPromptValue` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:225` |
| 0.0% | 32.4ms | 20.3% | 46.76s | `map` | `[native code]` |
| 0.0% | 32.2ms | 0.0% | 32.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/serializable.js:1` |
| 0.0% | 31.5ms | 0.0% | 31.5ms | `instantiate` | `[native code]` |
| 0.0% | 30.5ms | 0.0% | 30.5ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:489` |
| 0.0% | 29.8ms | 0.0% | 29.8ms | `.wasm-function[11510]` | `[native code]` |
| 0.0% | 29.6ms | 0.0% | 29.6ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:73` |
| 0.0% | 29.2ms | 0.0% | 68.1ms | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:645` |
| 0.0% | 28.8ms | 0.0% | 28.8ms | `Error` | `[native code]` |
| 0.0% | 27.5ms | 0.0% | 27.5ms | `binaryDecode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 27.5ms | 0.0% | 27.5ms | `padStart` | `[native code]` |
| 0.0% | 27.0ms | 7.9% | 18.16s | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:232` |
| 0.0% | 24.5ms | 0.0% | 24.5ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js:91` |
| 0.0% | 22.4ms | 0.0% | 58.9ms | `mupdf-wasm.wasm.wasm-function[fz_convert_gel]` | `[native code]` |
| 0.0% | 22.1ms | 0.0% | 22.1ms | `emit` | `node:events:86` |
| 0.0% | 21.9ms | 0.0% | 21.9ms | `ReadableState` | `internal:streams/readable:45` |
| 0.0% | 16.6ms | 0.0% | 16.6ms | `isSafeInteger` | `[native code]` |
| 0.0% | 15.7ms | 0.0% | 15.7ms | `process` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:80` |
| 0.0% | 15.3ms | 0.0% | 15.3ms | `Int8Array` | `[native code]` |
| 0.0% | 14.9ms | 0.0% | 14.9ms | `.wasm-function[2992]` | `[native code]` |
| 0.0% | 14.6ms | 0.0% | 14.6ms | `EventEmitter` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/eventemitter3/index.js:94` |
| 0.0% | 14.1ms | 2.1% | 4.90s | `detectVerticalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:575` |
| 0.0% | 13.7ms | 0.0% | 13.7ms | `validateThis` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 12.7ms | 0.0% | 12.7ms | `_never` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:459` |
| 0.0% | 12.6ms | 0.0% | 12.6ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:277` |
| 0.0% | 12.5ms | 0.0% | 16.1ms | `mupdf-wasm.wasm.wasm-function[draw_glyph]` | `[native code]` |
| 0.0% | 12.4ms | 3.4% | 7.98s | `init` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:22` |
| 0.0% | 12.2ms | 0.0% | 12.2ms | `toString` | `[native code]` |
| 0.0% | 12.0ms | 0.0% | 12.0ms | `Function` | `[native code]` |
| 0.0% | 10.9ms | 0.0% | 10.9ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:1734` |
| 0.0% | 10.8ms | 2.3% | 5.42s | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:500` |
| 0.0% | 7.6ms | 0.0% | 7.6ms | `assignWasmExports` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 7.4ms | 0.0% | 7.4ms | `getFullYear` | `[native code]` |
| 0.0% | 6.6ms | 0.1% | 422.6ms | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:499` |
| 0.0% | 6.5ms | 0.0% | 6.5ms | `mupdf-wasm.wasm.wasm-function[compress_block]` | `[native code]` |
| 0.0% | 5.6ms | 0.0% | 5.6ms | `fromWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 5.2ms | 0.0% | 5.2ms | `fileURLToPath` | `node:url` |
| 0.0% | 4.6ms | 0.0% | 4.6ms | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:68` |
| 0.0% | 4.5ms | 0.0% | 4.5ms | `PQueue` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js` |
| 0.0% | 4.3ms | 0.0% | 7.3ms | `sharedRegisterType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 4.2ms | 0.0% | 4.2ms | `dlopen` | `[native code]` |
| 0.0% | 3.9ms | 0.0% | 3.9ms | `mupdf-wasm.wasm.wasm-function[inflate]` | `[native code]` |
| 0.0% | 3.9ms | 0.0% | 3.9ms | `mupdf-wasm.wasm.wasm-function[scale_row_from_temp]` | `[native code]` |
| 0.0% | 3.6ms | 0.0% | 3.6ms | `get` | `[native code]` |
| 0.0% | 3.5ms | 0.0% | 3.5ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 3.4ms | 0.0% | 3.4ms | `mupdf-wasm.wasm.wasm-function[insert_active]` | `[native code]` |
| 0.0% | 3.3ms | 0.0% | 4.5ms | `mupdf-wasm.wasm.wasm-function[gray_render_line]` | `[native code]` |
| 0.0% | 3.2ms | 0.0% | 3.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/checks.js` |
| 0.0% | 3.2ms | 0.0% | 3.2ms | `copyDataProperties` | `[native code]` |
| 0.0% | 3.1ms | 0.0% | 3.1ms | `warn` | `[native code]` |
| 0.0% | 2.9ms | 0.0% | 51.2ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 2.9ms | 0.0% | 2.9ms | `create` | `[native code]` |
| 0.0% | 2.8ms | 0.0% | 2.8ms | `mupdf-wasm.wasm.wasm-function[crc32_z]` | `[native code]` |
| 0.0% | 2.6ms | 0.0% | 5.2ms | `readFileSync` | `[native code]` |
| 0.0% | 2.5ms | 0.0% | 4.6ms | `mupdf-wasm.wasm.wasm-function[decompress_onepass]` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 37.1ms | `forEach` | `[native code]` |
| 0.0% | 2.3ms | 0.0% | 2.3ms | `EventEmitter` | `node:events` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `init` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:21` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `hasOwnProperty` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `async finishAndHandleError` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 2.2ms | 0.0% | 42.0ms | `whenDependentTypesAreResolved` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `mupdf-wasm.wasm.wasm-function[send_tree]` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 7.7ms | `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect]` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 30.1ms | `mupdf-wasm.wasm.wasm-function[fz_draw_fill_text]` | `[native code]` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js:90` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `_encode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/parse.js` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `attachCropImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:97` |
| 0.0% | 2.1ms | 0.0% | 4.3ms | `binaryDecode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `MatVector.size` | `[native code]` |
| 0.0% | 2.1ms | 0.0% | 3.2ms | `next` | `[native code]` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `async _first` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `entries` | `[native code]` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `mupdf-wasm.wasm.wasm-function[begin_softmask]` | `[native code]` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 2.0ms | 0.0% | 20.3ms | `craftInvokerFunction` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.0ms | 2.2% | 5.14s | `__emval_invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.9ms | 0.1% | 424.8ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.9ms | 0.0% | 3.1ms | `mupdf-wasm.wasm.wasm-function[build_tree]` | `[native code]` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `toISOString` | `[native code]` |
| 0.0% | 1.4ms | 0.0% | 3.4ms | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:66` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:257` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `mupdf-wasm.wasm.wasm-function[FT_Vector_Transform]` | `[native code]` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `async withRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `bound _invoke` | `[native code]` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `async _getUpdates` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `mupdf-wasm.wasm.wasm-function[fz_add_line_join]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 7.0ms | `mupdf-wasm.wasm.wasm-function[FT_Outline_Decompose]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `stringProcessor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:13` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `mupdf-wasm.wasm.wasm-function[FT_DivFix]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:542` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `_getTracingMetadataDefaults` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js` |
| 0.0% | 1.2ms | 0.0% | 3.6ms | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:496` |
| 0.0% | 1.2ms | 0.3% | 802.6ms | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:308` |
| 0.0% | 1.2ms | 0.0% | 3.4ms | `MatVector.get` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `mupdf-wasm.wasm.wasm-function[ycc_rgb_convert]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `union` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:20` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `isZodNullableV4` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:228` |
| 0.0% | 1.2ms | 3.1% | 7.21s | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:1730` |
| 0.0% | 1.2ms | 0.0% | 2.4ms | `writeFileSync` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `mupdf-wasm.wasm.wasm-function[pdf_new_array]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `getInheritedInstance` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `async func` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `_prepareSingleTask` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:518` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `async classifyImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts` |
| 0.0% | 1.2ms | 0.0% | 2.1ms | `mupdf-wasm.wasm.wasm-function[fz_read_byte]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[FT_Stream_ReadUShort]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `get _doesConcurrentAllowAnother` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[pdf_dict_find]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `resetBuffer` | `internal:streams/writable:155` |
| 0.0% | 1.1ms | 0.0% | 3.2ms | `mupdf-wasm.wasm.wasm-function[gray_conic_to]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[gray_set_cell]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:104` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async call` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async next` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js` |
| 0.0% | 1.1ms | 0.0% | 4.1ms | `.wasm-function[280]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:82` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `normalizeHeaders` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[pdf_run_BT]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `update` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/channels/last_value.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[jpeg_idct_16x16]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[tt_face_build_cmaps]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[pqdownheap]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `cache` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/utility.mjs` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `optionalKeys` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:507` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `.wasm-function[11387]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `_configureSync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/callbacks/manager.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/sax-js/sax.js:521` |
| 0.0% | 1.1ms | 0.0% | 13.1ms | `createJsInvoker` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/prompts/chat.js:24` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async func` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:740` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `uuid5` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph-checkpoint/dist/id.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:1692` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `isInstance` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/ai.js:121` |
| 0.0% | 1.1ms | 0.0% | 14.2ms | `__embind_register_function` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `toJsonSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/json_schema.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:1` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `ensureLangGraphConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/utils/config.js:139` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `initializeGlobalInstance` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async doWrite` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `find` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v3/ZodError.js:20` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `_getWriteReplicasFromEnv` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `isInstance` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/tool.js:55` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `tool` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:266` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `_prepareSingleTask` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `greyscale` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/colour.mjs:54` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:100` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async _validateInput` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[pdf_new_name]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:809` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `open` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `addConditionalEdges` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:105` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[pdf_lookup_cmap_full]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `flattenRef` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:247` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async run` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `resize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1211` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async _generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js` |
| 0.0% | 1.0ms | 0.0% | 199.8ms | `toJsonSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/json_schema.js:48` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[pdf_get_indirect_document]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `.wasm-function[3272]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `replacePublicSymbol` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `AsciiToString` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `Duplex` | `internal:streams/duplex` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `v1Bytes` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/v1.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/parse.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `resolvePromiseWithFirstResolvingFunctionCallCheck` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:214` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `q` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 1.0ms | 0.0% | 34.1ms | `mupdf-wasm.wasm.wasm-function[pdf_flush_text_imp]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 6.8ms | `mupdf-wasm.wasm.wasm-function[fz_get_pixmap_from_image]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `interpreterPath` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/elf.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `filter` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[fz_show_glyph_aux]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `.wasm-function[1310]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `_indexPendingWrites` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `AsciiToString` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[fz_strtof]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `getEnvironmentVariable` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/env.js:38` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `objectProcessor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:308` |
| 0.0% | 1.0ms | 0.0% | 2.1ms | `.wasm-function[52]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `ZodNumberFormat` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:43` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `_scratchpad` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `getOwnPropertyDescriptors` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async pRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js:89` |
| 0.0% | 1.0ms | 0.0% | 57.9ms | `toWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1205` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[body]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `Point` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async _runWithRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/retry.js` |
| 0.0% | 994us | 0.0% | 994us | `requireRegisteredType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 993us | 0.0% | 993us | `assign` | `[native code]` |
| 0.0% | 988us | 0.0% | 3.1ms | `ZodObject` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` |
| 0.0% | 984us | 0.0% | 984us | `createNode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 983us | 0.0% | 983us | `defined` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/is.mjs` |
| 0.0% | 981us | 0.0% | 981us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/composite.mjs:13` |
| 0.0% | 978us | 0.0% | 978us | `mupdf-wasm.wasm.wasm-function[fz_new_glyph_from_8bpp_data]` | `[native code]` |
| 0.0% | 975us | 0.0% | 975us | `async compressImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:20` |
| 0.0% | 975us | 0.0% | 975us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:14` |
| 0.0% | 974us | 0.0% | 974us | `mupdf-wasm.wasm.wasm-function[pdf_clear_stack]` | `[native code]` |
| 0.0% | 967us | 0.0% | 967us | `async mapBatched` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts` |
| 0.0% | 957us | 0.0% | 1.9ms | `__embind_register_constant` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 953us | 0.0% | 953us | `set concurrency` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:145` |
| 0.0% | 953us | 0.0% | 2.0ms | `_configureSync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/callbacks/manager.js:523` |
| 0.0% | 951us | 0.0% | 31.6ms | `countNonZero` | `[native code]` |
| 0.0% | 951us | 0.0% | 951us | `async detectAndCropBbs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts` |
| 0.0% | 940us | 0.0% | 31.0ms | `mupdf-wasm.wasm.wasm-function[fz_fill_text]` | `[native code]` |
| 0.0% | 939us | 0.0% | 939us | `mupdf-wasm.wasm.wasm-function[decode_mcu_8778]` | `[native code]` |
| 0.0% | 937us | 0.0% | 937us | `getVerbosity` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js` |
| 0.0% | 933us | 0.0% | 933us | `mupdf-wasm.wasm.wasm-function[fz_do_catch]` | `[native code]` |
| 0.0% | 916us | 0.0% | 127.1ms | `mupdf-wasm.wasm.wasm-function[pdf_process_stream]` | `[native code]` |
| 0.0% | 914us | 0.0% | 914us | `async initialize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 909us | 0.0% | 11.7ms | `.wasm-function[2969]` | `[native code]` |
| 0.0% | 907us | 0.0% | 907us | `mupdf-wasm.wasm.wasm-function[fz_malloc]` | `[native code]` |
| 0.0% | 899us | 0.0% | 4.4ms | `embind__requireFunction` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 895us | 0.0% | 895us | `Client` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js` |
| 0.0% | 894us | 0.0% | 894us | `mupdf-wasm.wasm.wasm-function[add_range]` | `[native code]` |
| 0.0% | 887us | 0.0% | 887us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js` |
| 0.0% | 886us | 0.0% | 886us | `mupdf-wasm.wasm.wasm-function[fz_reset_rasterizer]` | `[native code]` |
| 0.0% | 879us | 0.0% | 879us | `_currentCheckpointMeta` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 878us | 0.0% | 30.6ms | `.wasm-function[466]` | `[native code]` |
| 0.0% | 874us | 0.0% | 874us | `decodeMemoryView` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 870us | 0.0% | 870us | `AsyncCaller` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js:180` |
| 0.0% | 869us | 0.0% | 869us | `isStandardJsonSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/standard_schema.js` |
| 0.0% | 866us | 0.0% | 866us | `Mat.roi` | `[native code]` |
| 0.0% | 866us | 0.0% | 866us | `performIteration` | `[native code]` |
| 0.0% | 864us | 0.0% | 864us | `combineAbortSignals` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/utils/index.js` |
| 0.0% | 842us | 0.0% | 842us | `RegExp` | `[native code]` |
| 0.0% | 842us | 0.0% | 842us | `async loadImageForOpenCV` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts` |

## Call Tree (Total Time)

| Total% | Total | Self% | Self | Function | Location |
|-------:|------:|------:|-----:|----------|----------|
| 27.8% | 63.89s | 0.9% | 2.12s | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 23.8% | 54.63s | 0.0% | 147.1ms | `(unknown)` | `[native code]` |
| 23.4% | 53.77s | 0.0% | 0us | `.wasm-function[9540]` | `[native code]` |
| 23.4% | 53.76s | 0.0% | 62.4ms | `.wasm-function[2968]` | `[native code]` |
| 22.9% | 52.74s | 0.0% | 0us | `.wasm-function[557]` | `[native code]` |
| 22.9% | 52.67s | 0.0% | 0us | `morphologyEx` | `[native code]` |
| 22.9% | 52.63s | 0.0% | 0us | `.wasm-function[1308]` | `[native code]` |
| 22.9% | 52.63s | 0.0% | 0us | `.wasm-function[10385]` | `[native code]` |
| 22.9% | 52.63s | 0.0% | 0us | `.wasm-function[505]` | `[native code]` |
| 20.3% | 46.76s | 0.0% | 32.4ms | `map` | `[native code]` |
| 17.4% | 40.15s | 0.0% | 0us | `async mapBatched` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:86` |
| 17.4% | 40.15s | 1.8% | 4.28s | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:35` |
| 15.7% | 36.13s | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:936` |
| 15.7% | 36.13s | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/base.js:43` |
| 15.7% | 36.13s | 15.7% | 36.13s | `async _callWithConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:157` |
| 15.7% | 36.13s | 0.0% | 0us | `async _callWithConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:156` |
| 15.6% | 35.86s | 0.0% | 0us | `async compressImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:12` |
| 15.6% | 35.86s | 0.0% | 0us | `async compressImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:9` |
| 15.6% | 35.86s | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:39` |
| 10.9% | 25.15s | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:631` |
| 10.4% | 24.00s | 7.2% | 16.55s | `(anonymous)` | `[native code]` |
| 9.8% | 22.64s | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:630` |
| 9.7% | 22.46s | 0.0% | 42.3ms | `Promise` | `[native code]` |
| 9.4% | 21.78s | 0.0% | 0us | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:230` |
| 8.6% | 19.95s | 0.0% | 0us | `detectVerticalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:566` |
| 7.9% | 18.16s | 0.0% | 27.0ms | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:232` |
| 7.8% | 18.09s | 0.0% | 0us | `Duplex` | `internal:streams/duplex:15` |
| 7.7% | 17.84s | 0.0% | 0us | `async cropBbsRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:840` |
| 7.7% | 17.75s | 7.7% | 17.75s | `ReadableState` | `internal:streams/readable` |
| 7.2% | 16.71s | 0.0% | 0us | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:482` |
| 6.1% | 14.15s | 0.0% | 0us | `async _generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:284` |
| 6.1% | 14.13s | 6.1% | 14.13s | `.wasm-function[8869]` | `[native code]` |
| 6.1% | 14.12s | 6.1% | 14.12s | `.wasm-function[8901]` | `[native code]` |
| 5.8% | 13.35s | 5.8% | 13.35s | `.wasm-function[8885]` | `[native code]` |
| 4.9% | 11.39s | 4.8% | 11.16s | `reduce` | `[native code]` |
| 4.9% | 11.36s | 0.0% | 0us | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:49` |
| 4.8% | 11.06s | 4.8% | 11.06s | `.wasm-function[8918]` | `[native code]` |
| 4.5% | 10.51s | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:150` |
| 4.5% | 10.41s | 0.0% | 0us | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:316` |
| 3.8% | 8.93s | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:686` |
| 3.8% | 8.93s | 0.0% | 0us | `metadata` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:685` |
| 3.6% | 8.47s | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:155` |
| 3.4% | 7.98s | 0.0% | 12.4ms | `init` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:22` |
| 3.3% | 7.67s | 0.1% | 292.7ms | `async call` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:249` |
| 3.3% | 7.67s | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:91` |
| 3.2% | 7.53s | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:182` |
| 3.2% | 7.38s | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/parse.js:18` |
| 3.2% | 7.38s | 0.0% | 0us | `async call` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:104` |
| 3.2% | 7.37s | 0.0% | 0us | `convertOpenRouterResponseToBaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/converters/messages.js:33` |
| 3.2% | 7.37s | 0.0% | 0us | `async interopParseAsync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:90` |
| 3.2% | 7.37s | 0.0% | 0us | `async interopParseAsync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:91` |
| 3.2% | 7.37s | 0.0% | 0us | `async call` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:108` |
| 3.1% | 7.21s | 0.0% | 0us | `_pipeline` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:1729` |
| 3.1% | 7.21s | 0.0% | 1.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:1730` |
| 3.0% | 6.97s | 0.0% | 161.6ms | `wasm-stub` | `[native code]` |
| 2.8% | 6.60s | 0.0% | 0us | `convertCompletionsMessageToBaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:183` |
| 2.5% | 5.86s | 0.1% | 260.8ms | `.wasm-function[6137]` | `[native code]` |
| 2.5% | 5.84s | 2.5% | 5.84s | `metadata` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:642` |
| 2.4% | 5.64s | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:316` |
| 2.4% | 5.60s | 0.1% | 373.2ms | `.wasm-function[6148]` | `[native code]` |
| 2.4% | 5.54s | 0.0% | 0us | `async call` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:133` |
| 2.4% | 5.54s | 0.0% | 0us | `async func` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:291` |
| 2.4% | 5.53s | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:304` |
| 2.3% | 5.42s | 0.0% | 10.8ms | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:500` |
| 2.3% | 5.41s | 0.1% | 398.4ms | `Mat.ucharPtr` | `[native code]` |
| 2.2% | 5.14s | 0.0% | 2.0ms | `__emval_invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 2.2% | 5.05s | 0.0% | 0us | `run` | `node:async_hooks:99` |
| 2.1% | 5.04s | 0.7% | 1.66s | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:304` |
| 2.1% | 4.90s | 0.0% | 14.1ms | `detectVerticalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:575` |
| 2.0% | 4.77s | 2.0% | 4.77s | `all` | `[native code]` |
| 1.7% | 4.12s | 0.0% | 0us | `ZodString` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` |
| 1.7% | 4.12s | 0.0% | 0us | `_string` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:7` |
| 1.7% | 4.12s | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:111` |
| 1.7% | 4.11s | 1.7% | 4.11s | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:272` |
| 1.6% | 3.89s | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:852` |
| 1.6% | 3.89s | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/parse.js:20` |
| 1.6% | 3.81s | 1.6% | 3.81s | `async call` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:113` |
| 1.6% | 3.78s | 1.6% | 3.78s | `runChecks` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js` |
| 1.6% | 3.75s | 0.3% | 714.5ms | `decodeMemoryView` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 1.5% | 3.55s | 1.5% | 3.55s | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:426` |
| 1.5% | 3.48s | 1.5% | 3.48s | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/parse.js:21` |
| 1.4% | 3.44s | 0.5% | 1.27s | `async _generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:281` |
| 1.4% | 3.37s | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:45` |
| 1.4% | 3.37s | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:306` |
| 1.4% | 3.37s | 0.0% | 0us | `async normalizeCoords` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/normalizeCoords.ts:4` |
| 1.4% | 3.37s | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:46` |
| 1.4% | 3.37s | 1.4% | 3.37s | `async normalizeCoords` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/normalizeCoords.ts:10` |
| 1.4% | 3.31s | 0.0% | 0us | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:73` |
| 1.4% | 3.30s | 1.4% | 3.30s | `convertOpenRouterResponseToBaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/converters/messages.js:34` |
| 1.4% | 3.22s | 0.0% | 0us | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:46` |
| 1.3% | 3.07s | 0.0% | 0us | `AIMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/ai.js:84` |
| 1.2% | 2.93s | 1.2% | 2.93s | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:333` |
| 1.2% | 2.92s | 1.2% | 2.92s | `_next` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:47` |
| 1.2% | 2.92s | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:168` |
| 1.2% | 2.84s | 1.2% | 2.84s | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:83` |
| 1.1% | 2.71s | 1.1% | 2.71s | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:324` |
| 1.0% | 2.49s | 1.0% | 2.49s | `Uint8Array` | `[native code]` |
| 0.9% | 2.16s | 0.9% | 2.16s | `json` | `[native code]` |
| 0.8% | 1.99s | 0.8% | 1.99s | `convertOpenRouterResponseToBaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/converters/messages.js` |
| 0.8% | 1.92s | 0.0% | 0us | `ZodNumber` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` |
| 0.8% | 1.91s | 0.0% | 0us | `bound int` | `[native code]` |
| 0.8% | 1.90s | 0.0% | 0us | `clone` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:262` |
| 0.8% | 1.90s | 0.0% | 0us | `bound clone` | `[native code]` |
| 0.8% | 1.90s | 0.0% | 0us | `bound check` | `[native code]` |
| 0.8% | 1.90s | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:102` |
| 0.8% | 1.90s | 0.0% | 0us | `clone` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:106` |
| 0.8% | 1.89s | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:508` |
| 0.8% | 1.89s | 0.8% | 1.89s | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:58` |
| 0.8% | 1.84s | 0.0% | 0us | `async extract` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:117` |
| 0.8% | 1.84s | 0.8% | 1.84s | `async extract` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts` |
| 0.8% | 1.84s | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:76` |
| 0.7% | 1.80s | 0.7% | 1.80s | `BaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/base.js:140` |
| 0.7% | 1.76s | 0.7% | 1.76s | `AIMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/ai.js:67` |
| 0.7% | 1.76s | 0.3% | 708.6ms | `AIMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/ai.js:31` |
| 0.6% | 1.49s | 0.6% | 1.49s | `convertUsageMetadata` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/converters/messages.js:93` |
| 0.6% | 1.49s | 0.0% | 0us | `async _generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:285` |
| 0.6% | 1.47s | 0.6% | 1.47s | `cloneObject` | `[native code]` |
| 0.6% | 1.47s | 0.0% | 0us | `convertOpenRouterResponseToBaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/converters/messages.js:40` |
| 0.5% | 1.34s | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:60` |
| 0.5% | 1.32s | 0.3% | 844.8ms | `emval_returnValue` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.5% | 1.29s | 0.0% | 0us | `.wasm-function[16092]` | `[native code]` |
| 0.5% | 1.29s | 0.0% | 35.6ms | `.wasm-function[934]` | `[native code]` |
| 0.5% | 1.29s | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:127` |
| 0.5% | 1.29s | 0.0% | 0us | `adaptiveThreshold` | `[native code]` |
| 0.5% | 1.29s | 0.0% | 0us | `.wasm-function[5841]` | `[native code]` |
| 0.5% | 1.27s | 0.5% | 1.27s | `BaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/base.js:126` |
| 0.5% | 1.18s | 0.5% | 1.15s | `anonymous` | `[native code]` |
| 0.4% | 1.14s | 0.0% | 0us | `async convertPdfToImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:76` |
| 0.4% | 1.14s | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_write_band]` | `[native code]` |
| 0.4% | 1.14s | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[wasm_new_buffer_from_pixmap_as_png]` | `[native code]` |
| 0.4% | 1.14s | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_new_buffer_from_pixmap_as_png]` | `[native code]` |
| 0.4% | 1.14s | 0.0% | 0us | `asPNG` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:1045` |
| 0.4% | 1.14s | 0.1% | 237.6ms | `mupdf-wasm.wasm.wasm-function[png_write_band]` | `[native code]` |
| 0.4% | 1.14s | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_write_pixmap_as_png]` | `[native code]` |
| 0.4% | 1.14s | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[png_from_pixmap]` | `[native code]` |
| 0.4% | 1.10s | 0.4% | 1.10s | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts` |
| 0.4% | 1.10s | 0.0% | 0us | `async cropBbsRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:869` |
| 0.4% | 1.10s | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:596` |
| 0.4% | 1.09s | 0.0% | 0us | `bound require` | `[native code]` |
| 0.4% | 1.06s | 0.0% | 0us | `require` | `[native code]` |
| 0.4% | 1.05s | 0.4% | 1.05s | `isArray` | `[native code]` |
| 0.4% | 1.04s | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:4` |
| 0.4% | 1.03s | 0.0% | 0us | `.wasm-function[581]` | `[native code]` |
| 0.4% | 1.02s | 0.0% | 0us | `.wasm-function[1037]` | `[native code]` |
| 0.4% | 1.02s | 0.3% | 730.2ms | `bound toWireType` | `[native code]` |
| 0.3% | 901.9ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[deflate]` | `[native code]` |
| 0.3% | 901.9ms | 0.1% | 348.7ms | `mupdf-wasm.wasm.wasm-function[deflate_slow]` | `[native code]` |
| 0.3% | 802.6ms | 0.0% | 1.2ms | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:308` |
| 0.3% | 801.4ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:308` |
| 0.3% | 801.4ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:309` |
| 0.3% | 800.3ms | 0.0% | 0us | `async _generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:266` |
| 0.3% | 770.8ms | 0.0% | 0us | `convertCompletionsMessageToBaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:166` |
| 0.3% | 770.8ms | 0.3% | 770.8ms | `parse` | `[native code]` |
| 0.3% | 770.8ms | 0.0% | 0us | `parseToolCall` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:17` |
| 0.3% | 768.3ms | 0.0% | 0us | `async _generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:272` |
| 0.3% | 768.3ms | 0.0% | 0us | `async add` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:152` |
| 0.3% | 725.0ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:171` |
| 0.3% | 723.8ms | 0.0% | 0us | `_tryToStartAnother` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:105` |
| 0.3% | 722.7ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:157` |
| 0.3% | 722.7ms | 0.0% | 0us | `async run` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:153` |
| 0.3% | 722.7ms | 0.0% | 0us | `async pRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js:86` |
| 0.3% | 717.4ms | 0.2% | 584.9ms | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.2% | 686.0ms | 0.0% | 0us | `async pRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js:124` |
| 0.2% | 686.0ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:272` |
| 0.2% | 686.0ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js:191` |
| 0.2% | 658.8ms | 0.0% | 0us | `extract` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:482` |
| 0.2% | 658.8ms | 0.2% | 658.8ms | `isResizeExpected` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs` |
| 0.2% | 649.7ms | 0.0% | 0us | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:43` |
| 0.2% | 552.5ms | 0.2% | 552.5ms | `get buffer` | `[native code]` |
| 0.2% | 539.1ms | 0.2% | 539.1ms | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:350` |
| 0.2% | 533.9ms | 0.2% | 533.9ms | `.wasm-function[9388]` | `[native code]` |
| 0.2% | 530.8ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:273` |
| 0.2% | 530.8ms | 0.2% | 530.8ms | `fetch` | `[native code]` |
| 0.2% | 518.1ms | 0.1% | 297.3ms | `bound fromWireType` | `[native code]` |
| 0.2% | 506.7ms | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:693` |
| 0.2% | 495.8ms | 0.0% | 0us | `runWithConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js:29` |
| 0.2% | 493.5ms | 0.2% | 493.5ms | `.wasm-function[2953]` | `[native code]` |
| 0.1% | 436.0ms | 0.1% | 265.6ms | `bound nonConstNoSmartPtrRawPointerToWireType` | `[native code]` |
| 0.1% | 424.8ms | 0.0% | 1.9ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.1% | 422.6ms | 0.0% | 6.6ms | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:499` |
| 0.1% | 389.5ms | 0.1% | 323.0ms | `mupdf-wasm.wasm.wasm-function[fill_window]` | `[native code]` |
| 0.1% | 376.2ms | 0.0% | 0us | `async createWasm` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.1% | 333.2ms | 0.0% | 0us | `ChatOpenRouter` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:154` |
| 0.1% | 331.7ms | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:690` |
| 0.1% | 313.4ms | 0.0% | 0us | `async classifyImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:28` |
| 0.1% | 313.4ms | 0.1% | 313.4ms | `BaseChatModel` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` |
| 0.1% | 290.1ms | 0.1% | 290.1ms | `defineProperty` | `[native code]` |
| 0.1% | 288.1ms | 0.0% | 0us | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:17` |
| 0.1% | 288.1ms | 0.0% | 0us | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:11` |
| 0.1% | 288.1ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:49` |
| 0.1% | 273.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:20` |
| 0.1% | 246.1ms | 0.0% | 0us | `.wasm-function[68]` | `[native code]` |
| 0.1% | 236.8ms | 0.1% | 236.8ms | `fromWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.1% | 236.2ms | 0.0% | 0us | `detectVerticalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:574` |
| 0.1% | 235.7ms | 0.1% | 235.7ms | `toWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.1% | 232.1ms | 0.0% | 0us | `.wasm-function[76]` | `[native code]` |
| 0.0% | 227.0ms | 0.0% | 0us | `findContours` | `[native code]` |
| 0.0% | 227.0ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:226` |
| 0.0% | 223.6ms | 0.0% | 223.6ms | `async call` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:127` |
| 0.0% | 217.3ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:82` |
| 0.0% | 212.3ms | 0.0% | 0us | `async loadImageForOpenCV` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:79` |
| 0.0% | 206.7ms | 0.0% | 0us | `.wasm-function[674]` | `[native code]` |
| 0.0% | 203.2ms | 0.0% | 203.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:49` |
| 0.0% | 201.8ms | 0.0% | 201.8ms | `getLangSmithEnvironmentVariable` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/env.js:162` |
| 0.0% | 201.8ms | 0.0% | 0us | `getDefaultConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:387` |
| 0.0% | 201.8ms | 0.0% | 0us | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:329` |
| 0.0% | 201.8ms | 0.0% | 0us | `getDefaultProjectName` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/project.js:3` |
| 0.0% | 199.8ms | 0.0% | 1.0ms | `toJsonSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/json_schema.js:48` |
| 0.0% | 197.3ms | 0.0% | 0us | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:197` |
| 0.0% | 196.9ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_run_page_with_usage]` | `[native code]` |
| 0.0% | 196.9ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_new_pixmap_from_page_with_separations_and_usage]` | `[native code]` |
| 0.0% | 196.9ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[wasm_pdf_new_pixmap_from_page_with_usage]` | `[native code]` |
| 0.0% | 196.9ms | 0.0% | 0us | `toPixmap` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:2231` |
| 0.0% | 196.9ms | 0.0% | 0us | `async convertPdfToImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:74` |
| 0.0% | 196.9ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_run_page_contents_with_usage_imp]` | `[native code]` |
| 0.0% | 195.4ms | 0.0% | 120.4ms | `.wasm-function[1543]` | `[native code]` |
| 0.0% | 195.4ms | 0.0% | 0us | `.wasm-function[491]` | `[native code]` |
| 0.0% | 195.4ms | 0.0% | 0us | `.wasm-function[10948]` | `[native code]` |
| 0.0% | 189.8ms | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:715` |
| 0.0% | 189.3ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:11` |
| 0.0% | 189.3ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:28` |
| 0.0% | 185.0ms | 0.0% | 185.0ms | `stringify` | `[native code]` |
| 0.0% | 170.3ms | 0.0% | 170.3ms | `nonConstNoSmartPtrRawPointerToWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 161.8ms | 0.0% | 161.8ms | `set` | `[native code]` |
| 0.0% | 156.7ms | 0.0% | 156.7ms | `.wasm-function[9672]` | `[native code]` |
| 0.0% | 156.7ms | 0.0% | 0us | `.wasm-function[11624]` | `[native code]` |
| 0.0% | 156.7ms | 0.0% | 0us | `.wasm-function[390]` | `[native code]` |
| 0.0% | 156.7ms | 0.0% | 0us | `cvtColor` | `[native code]` |
| 0.0% | 155.2ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:276` |
| 0.0% | 152.4ms | 0.0% | 152.4ms | `findWasmBinary` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 152.0ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:84` |
| 0.0% | 152.0ms | 0.0% | 0us | `async generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:427` |
| 0.0% | 152.0ms | 0.0% | 0us | `async generatePrompt` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:484` |
| 0.0% | 151.6ms | 0.0% | 151.6ms | `mupdf-wasm.wasm.wasm-function[longest_match]` | `[native code]` |
| 0.0% | 150.9ms | 0.0% | 0us | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:205` |
| 0.0% | 150.0ms | 0.0% | 0us | `async extract` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:143` |
| 0.0% | 150.0ms | 0.0% | 0us | `withStructuredOutput` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:397` |
| 0.0% | 148.9ms | 0.0% | 148.9ms | `interopZodObjectStrict` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:310` |
| 0.0% | 144.7ms | 0.0% | 0us | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:212` |
| 0.0% | 144.7ms | 0.0% | 0us | `getLsParamsWithDefaults` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:200` |
| 0.0% | 144.7ms | 0.0% | 0us | `getLsParams` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:252` |
| 0.0% | 142.9ms | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:707` |
| 0.0% | 129.1ms | 0.0% | 39.7ms | `.wasm-function[510]` | `[native code]` |
| 0.0% | 127.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_process_raw_contents]` | `[native code]` |
| 0.0% | 127.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_process_contents]` | `[native code]` |
| 0.0% | 127.1ms | 0.0% | 916us | `mupdf-wasm.wasm.wasm-function[pdf_process_stream]` | `[native code]` |
| 0.0% | 123.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` | `[native code]` |
| 0.0% | 116.0ms | 0.0% | 0us | `dilate` | `[native code]` |
| 0.0% | 116.0ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:211` |
| 0.0% | 114.9ms | 0.0% | 114.9ms | `.wasm-function[12009]` | `[native code]` |
| 0.0% | 114.2ms | 0.0% | 114.2ms | `.wasm-function[12303]` | `[native code]` |
| 0.0% | 112.5ms | 0.0% | 112.5ms | `WritableState` | `internal:streams/writable:139` |
| 0.0% | 111.6ms | 0.0% | 0us | `.wasm-function[11526]` | `[native code]` |
| 0.0% | 111.6ms | 0.0% | 0us | `.wasm-function[635]` | `[native code]` |
| 0.0% | 111.6ms | 0.0% | 0us | `.wasm-function[4377]` | `[native code]` |
| 0.0% | 111.0ms | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:623` |
| 0.0% | 105.1ms | 0.0% | 105.1ms | `WritableState` | `internal:streams/writable:147` |
| 0.0% | 104.1ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:117` |
| 0.0% | 102.2ms | 0.0% | 0us | `constructor Mat` | `[native code]` |
| 0.0% | 102.2ms | 0.0% | 101.2ms | `bound RegisteredPointer_fromWireType` | `[native code]` |
| 0.0% | 102.2ms | 0.0% | 0us | `Mat` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 101.9ms | 0.0% | 101.9ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js` |
| 0.0% | 98.4ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:108` |
| 0.0% | 89.4ms | 0.0% | 0us | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:173` |
| 0.0% | 89.4ms | 0.0% | 89.4ms | `invocationParams` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:219` |
| 0.0% | 89.3ms | 0.0% | 89.3ms | `.wasm-function[8596]` | `[native code]` |
| 0.0% | 83.8ms | 0.0% | 83.8ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:2` |
| 0.0% | 75.9ms | 0.0% | 0us | `async cropBbsRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:879` |
| 0.0% | 75.9ms | 0.0% | 75.9ms | `push` | `[native code]` |
| 0.0% | 73.3ms | 0.0% | 0us | `Z` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 73.3ms | 0.0% | 0us | `h` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 73.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[emscripten_builtin_malloc]` | `[native code]` |
| 0.0% | 70.5ms | 0.0% | 70.5ms | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:229` |
| 0.0% | 70.3ms | 0.0% | 0us | `async withRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:31` |
| 0.0% | 70.3ms | 0.0% | 0us | `async withRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:38` |
| 0.0% | 69.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[sbrk]` | `[native code]` |
| 0.0% | 69.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_calloc]` | `[native code]` |
| 0.0% | 69.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_new_run_processor]` | `[native code]` |
| 0.0% | 69.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[do_scavenging_malloc]` | `[native code]` |
| 0.0% | 69.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_malloc_default]` | `[native code]` |
| 0.0% | 69.0ms | 0.0% | 0us | `.wasm-function[14700]` | `[native code]` |
| 0.0% | 69.0ms | 0.0% | 0us | `.wasm-function[9595]` | `[native code]` |
| 0.0% | 69.0ms | 0.0% | 0us | `threshold` | `[native code]` |
| 0.0% | 68.7ms | 0.0% | 68.7ms | `grow` | `[native code]` |
| 0.0% | 68.1ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:170` |
| 0.0% | 68.1ms | 0.0% | 29.2ms | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:645` |
| 0.0% | 68.1ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:644` |
| 0.0% | 66.7ms | 0.0% | 61.5ms | `bound decodeMemoryView` | `[native code]` |
| 0.0% | 66.5ms | 0.0% | 66.5ms | `log` | `[native code]` |
| 0.0% | 66.4ms | 0.0% | 66.4ms | `mupdf-wasm.wasm.wasm-function[adler32]` | `[native code]` |
| 0.0% | 65.8ms | 0.0% | 65.8ms | `WritableState` | `internal:streams/writable:140` |
| 0.0% | 65.3ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:83` |
| 0.0% | 65.3ms | 0.0% | 32.8ms | `_convertInputToPromptValue` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:225` |
| 0.0% | 64.4ms | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:729` |
| 0.0% | 62.7ms | 0.0% | 62.7ms | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:269` |
| 0.0% | 62.4ms | 0.0% | 0us | `methodCaller<(emscripten::memory_view<unsigned char>) => emscripten::val>` | `[native code]` |
| 0.0% | 62.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_show_path]` | `[native code]` |
| 0.0% | 62.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_run_S]` | `[native code]` |
| 0.0% | 61.5ms | 0.0% | 0us | `.wasm-function[6551]` | `[native code]` |
| 0.0% | 61.5ms | 0.0% | 0us | `.wasm-function[6535]` | `[native code]` |
| 0.0% | 61.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_draw_stroke_path_aux]` | `[native code]` |
| 0.0% | 61.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_draw_stroke_path]` | `[native code]` |
| 0.0% | 61.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_stroke_path]` | `[native code]` |
| 0.0% | 58.9ms | 0.0% | 22.4ms | `mupdf-wasm.wasm.wasm-function[fz_convert_gel]` | `[native code]` |
| 0.0% | 58.9ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_convert_rasterizer]` | `[native code]` |
| 0.0% | 57.9ms | 0.0% | 1.0ms | `toWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 56.9ms | 0.0% | 56.9ms | `toHandle` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 55.2ms | 0.0% | 0us | `convertToOpenAITool` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/function_calling.js:45` |
| 0.0% | 55.2ms | 0.0% | 0us | `invocationParams` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:216` |
| 0.0% | 55.2ms | 0.0% | 0us | `convertToOpenAIFunction` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/function_calling.js:27` |
| 0.0% | 51.5ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/stringify.js:8` |
| 0.0% | 51.5ms | 0.0% | 51.5ms | `slice` | `[native code]` |
| 0.0% | 51.2ms | 0.0% | 2.9ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 49.9ms | 0.0% | 0us | `.wasm-function[1260]` | `[native code]` |
| 0.0% | 49.9ms | 0.0% | 49.9ms | `.wasm-function[12680]` | `[native code]` |
| 0.0% | 49.9ms | 0.0% | 0us | `bitwise_or` | `[native code]` |
| 0.0% | 49.9ms | 0.0% | 0us | `.wasm-function[15702]` | `[native code]` |
| 0.0% | 49.9ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:195` |
| 0.0% | 49.9ms | 0.0% | 0us | `.wasm-function[503]` | `[native code]` |
| 0.0% | 48.1ms | 0.0% | 0us | `run` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 48.1ms | 0.0% | 0us | `doRun` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 48.1ms | 0.0% | 0us | `initRuntime` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 47.0ms | 0.0% | 0us | `.wasm-function[16862]` | `[native code]` |
| 0.0% | 45.1ms | 0.0% | 0us | `async createDebugImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:796` |
| 0.0% | 45.1ms | 0.0% | 45.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/composite.mjs` |
| 0.0% | 45.1ms | 0.0% | 0us | `composite` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/composite.mjs:136` |
| 0.0% | 43.1ms | 0.0% | 0us | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:464` |
| 0.0% | 42.3ms | 0.0% | 42.3ms | `async writeFile` | `node:fs/promises` |
| 0.0% | 42.3ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:61` |
| 0.0% | 42.0ms | 0.0% | 2.2ms | `whenDependentTypesAreResolved` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 40.8ms | 0.0% | 40.8ms | `Duplex` | `internal:streams/duplex:6` |
| 0.0% | 40.5ms | 0.0% | 0us | `onComplete` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 38.8ms | 0.0% | 0us | `async _mergeConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:621` |
| 0.0% | 38.8ms | 0.0% | 38.8ms | `async _mergeConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:622` |
| 0.0% | 38.3ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:934` |
| 0.0% | 37.1ms | 0.0% | 2.4ms | `forEach` | `[native code]` |
| 0.0% | 36.6ms | 0.0% | 36.6ms | `mupdf-wasm.wasm.wasm-function[paint_span_with_color_3_solid]` | `[native code]` |
| 0.0% | 35.6ms | 0.0% | 35.6ms | `async pRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js:111` |
| 0.0% | 35.4ms | 0.0% | 35.4ms | `.wasm-function[549]` | `[native code]` |
| 0.0% | 34.6ms | 0.0% | 34.6ms | `ReadableState` | `internal:streams/readable:30` |
| 0.0% | 34.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_run_ET]` | `[native code]` |
| 0.0% | 34.1ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[pdf_flush_text_imp]` | `[native code]` |
| 0.0% | 32.2ms | 0.0% | 0us | `BaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/base.js:125` |
| 0.0% | 32.2ms | 0.0% | 0us | `ToolMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/tool.js:48` |
| 0.0% | 32.2ms | 0.0% | 0us | `Serializable` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/serializable.js:82` |
| 0.0% | 32.2ms | 0.0% | 32.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/serializable.js:1` |
| 0.0% | 32.2ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:157` |
| 0.0% | 31.9ms | 0.0% | 0us | `flatIntoArrayWithCallback` | `[native code]` |
| 0.0% | 31.9ms | 0.0% | 0us | `async _generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:269` |
| 0.0% | 31.9ms | 0.0% | 0us | `extract` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:486` |
| 0.0% | 31.8ms | 0.0% | 0us | `findWasmBinary` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 31.7ms | 0.0% | 0us | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:462` |
| 0.0% | 31.6ms | 0.0% | 951us | `countNonZero` | `[native code]` |
| 0.0% | 31.5ms | 0.0% | 31.5ms | `instantiate` | `[native code]` |
| 0.0% | 31.0ms | 0.0% | 940us | `mupdf-wasm.wasm.wasm-function[fz_fill_text]` | `[native code]` |
| 0.0% | 30.8ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:587` |
| 0.0% | 30.6ms | 0.0% | 0us | `node:util` | `node:util:2` |
| 0.0% | 30.6ms | 0.0% | 0us | `.wasm-function[1293]` | `[native code]` |
| 0.0% | 30.6ms | 0.0% | 878us | `.wasm-function[466]` | `[native code]` |
| 0.0% | 30.6ms | 0.0% | 0us | `.wasm-function[11668]` | `[native code]` |
| 0.0% | 30.5ms | 0.0% | 30.5ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:489` |
| 0.0% | 30.5ms | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:691` |
| 0.0% | 30.1ms | 0.0% | 2.2ms | `mupdf-wasm.wasm.wasm-function[fz_draw_fill_text]` | `[native code]` |
| 0.0% | 29.8ms | 0.0% | 29.8ms | `.wasm-function[11510]` | `[native code]` |
| 0.0% | 29.7ms | 0.0% | 0us | `convertLangChainToolCallToOpenAI` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:43` |
| 0.0% | 29.6ms | 0.0% | 29.6ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:73` |
| 0.0% | 29.0ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/detect-libc.js:6` |
| 0.0% | 28.8ms | 0.0% | 28.8ms | `Error` | `[native code]` |
| 0.0% | 28.3ms | 0.0% | 0us | `.wasm-function[4417]` | `[native code]` |
| 0.0% | 27.7ms | 0.0% | 0us | `ensureConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js:90` |
| 0.0% | 27.5ms | 0.0% | 27.5ms | `binaryDecode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 27.5ms | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:703` |
| 0.0% | 27.5ms | 0.0% | 27.5ms | `padStart` | `[native code]` |
| 0.0% | 26.7ms | 0.0% | 0us | `patchConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js:128` |
| 0.0% | 25.8ms | 0.0% | 0us | `detectVerticalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:557` |
| 0.0% | 24.5ms | 0.0% | 24.5ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js:91` |
| 0.0% | 24.3ms | 0.0% | 0us | `node:worker_threads` | `node:worker_threads:206` |
| 0.0% | 22.4ms | 0.0% | 0us | `toFile` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:90` |
| 0.0% | 22.1ms | 0.0% | 0us | `queueListener` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:16` |
| 0.0% | 22.1ms | 0.0% | 22.1ms | `emit` | `node:events:86` |
| 0.0% | 22.0ms | 0.0% | 0us | `detectVerticalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:556` |
| 0.0% | 21.9ms | 0.0% | 21.9ms | `ReadableState` | `internal:streams/readable:45` |
| 0.0% | 20.8ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:118` |
| 0.0% | 20.3ms | 0.0% | 2.0ms | `craftInvokerFunction` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 20.1ms | 0.0% | 0us | `AsyncCaller` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js:185` |
| 0.0% | 19.1ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:302` |
| 0.0% | 19.1ms | 0.0% | 0us | `toJSONSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:598` |
| 0.0% | 18.9ms | 0.0% | 0us | `_number` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:307` |
| 0.0% | 18.7ms | 0.0% | 0us | `BaseChatModel` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:64` |
| 0.0% | 17.3ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:32` |
| 0.0% | 16.6ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:101` |
| 0.0% | 16.6ms | 0.0% | 16.6ms | `isSafeInteger` | `[native code]` |
| 0.0% | 16.6ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:562` |
| 0.0% | 16.5ms | 0.0% | 0us | `BaseLanguageModel` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:186` |
| 0.0% | 16.3ms | 0.0% | 0us | `async instantiateArrayBuffer` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 16.1ms | 0.0% | 12.5ms | `mupdf-wasm.wasm.wasm-function[draw_glyph]` | `[native code]` |
| 0.0% | 15.7ms | 0.0% | 15.7ms | `process` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:80` |
| 0.0% | 15.3ms | 0.0% | 15.3ms | `Int8Array` | `[native code]` |
| 0.0% | 15.0ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:37` |
| 0.0% | 14.9ms | 0.0% | 14.9ms | `.wasm-function[2992]` | `[native code]` |
| 0.0% | 14.9ms | 0.0% | 0us | `toJSONSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:597` |
| 0.0% | 14.9ms | 0.0% | 0us | `initializeContext` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js` |
| 0.0% | 14.6ms | 0.0% | 14.6ms | `EventEmitter` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/eventemitter3/index.js:94` |
| 0.0% | 14.6ms | 0.0% | 0us | `PQueue` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:15` |
| 0.0% | 14.6ms | 0.0% | 0us | `int` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:530` |
| 0.0% | 14.6ms | 0.0% | 0us | `_int` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:324` |
| 0.0% | 14.2ms | 0.0% | 1.1ms | `__embind_register_function` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 13.7ms | 0.0% | 13.7ms | `validateThis` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 13.6ms | 0.0% | 0us | `ZodNumberFormat` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` |
| 0.0% | 13.3ms | 0.0% | 0us | `async F` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 13.3ms | 0.0% | 0us | `.wasm-function[2667]` | `[native code]` |
| 0.0% | 13.1ms | 0.0% | 1.1ms | `createJsInvoker` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 12.7ms | 0.0% | 12.7ms | `_never` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:459` |
| 0.0% | 12.7ms | 0.0% | 0us | `interopZodObjectStrict` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:315` |
| 0.0% | 12.6ms | 0.0% | 12.6ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:277` |
| 0.0% | 12.4ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:316` |
| 0.0% | 12.4ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:107` |
| 0.0% | 12.4ms | 0.0% | 0us | `R` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 12.2ms | 0.0% | 12.2ms | `toString` | `[native code]` |
| 0.0% | 12.2ms | 0.0% | 0us | `async compressImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:25` |
| 0.0% | 12.0ms | 0.0% | 12.0ms | `Function` | `[native code]` |
| 0.0% | 11.9ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[_tr_flush_block]` | `[native code]` |
| 0.0% | 11.7ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_render_ft_glyph]` | `[native code]` |
| 0.0% | 11.7ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_render_glyph]` | `[native code]` |
| 0.0% | 11.7ms | 0.0% | 909us | `.wasm-function[2969]` | `[native code]` |
| 0.0% | 10.9ms | 0.0% | 10.9ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:1734` |
| 0.0% | 10.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_run_Do_image]` | `[native code]` |
| 0.0% | 10.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_draw_fill_image]` | `[native code]` |
| 0.0% | 10.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_show_image]` | `[native code]` |
| 0.0% | 10.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_process_Do]` | `[native code]` |
| 0.0% | 10.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_show_image_imp]` | `[native code]` |
| 0.0% | 10.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_fill_image]` | `[native code]` |
| 0.0% | 10.7ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:37` |
| 0.0% | 10.5ms | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:708` |
| 0.0% | 9.8ms | 0.0% | 0us | `__embind_register_class_function` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 9.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_available_1592]` | `[native code]` |
| 0.0% | 8.9ms | 0.0% | 0us | `_` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 8.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_read]` | `[native code]` |
| 0.0% | 8.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_new_colorspace_context]` | `[native code]` |
| 0.0% | 8.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_new_context_imp]` | `[native code]` |
| 0.0% | 8.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[wasm_init_context]` | `[native code]` |
| 0.0% | 8.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_new_icc_colorspace]` | `[native code]` |
| 0.0% | 8.4ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:28` |
| 0.0% | 7.7ms | 0.0% | 2.2ms | `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect]` | `[native code]` |
| 0.0% | 7.6ms | 0.0% | 0us | `process` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:60` |
| 0.0% | 7.6ms | 0.0% | 0us | `receiveInstance` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 7.6ms | 0.0% | 7.6ms | `assignWasmExports` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 7.6ms | 0.0% | 0us | `receiveInstantiationResult` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 7.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[gmtime]` | `[native code]` |
| 0.0% | 7.4ms | 0.0% | 0us | `k` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 7.4ms | 0.0% | 7.4ms | `getFullYear` | `[native code]` |
| 0.0% | 7.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[do_tzset]` | `[native code]` |
| 0.0% | 7.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[lcms2mt_cmsCreateProfilePlaceholder]` | `[native code]` |
| 0.0% | 7.3ms | 0.0% | 0us | `registerType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 7.3ms | 0.0% | 4.3ms | `sharedRegisterType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 7.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_font]` | `[native code]` |
| 0.0% | 7.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_try_load_font]` | `[native code]` |
| 0.0% | 7.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[load_cid_font]` | `[native code]` |
| 0.0% | 7.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_type0_font]` | `[native code]` |
| 0.0% | 7.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[FT_Render_Glyph_Internal]` | `[native code]` |
| 0.0% | 7.0ms | 0.0% | 1.2ms | `mupdf-wasm.wasm.wasm-function[FT_Outline_Decompose]` | `[native code]` |
| 0.0% | 7.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[gray_raster_render]` | `[native code]` |
| 0.0% | 7.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[ft_smooth_render]` | `[native code]` |
| 0.0% | 6.8ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[fz_get_pixmap_from_image]` | `[native code]` |
| 0.0% | 6.6ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect_chain]` | `[native code]` |
| 0.0% | 6.5ms | 0.0% | 6.5ms | `mupdf-wasm.wasm.wasm-function[compress_block]` | `[native code]` |
| 0.0% | 6.4ms | 0.0% | 0us | `async extract` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:154` |
| 0.0% | 6.4ms | 0.0% | 0us | `toBuffer` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:159` |
| 0.0% | 6.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[putchunk]` | `[native code]` |
| 0.0% | 6.1ms | 0.0% | 0us | `async detectAndCropBbs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:118` |
| 0.0% | 6.1ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:68` |
| 0.0% | 5.9ms | 0.0% | 0us | `async compressImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:23` |
| 0.0% | 5.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[process_data_simple_main_8796]` | `[native code]` |
| 0.0% | 5.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[next_dctd]` | `[native code]` |
| 0.0% | 5.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[compressed_image_get_pixmap]` | `[native code]` |
| 0.0% | 5.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[jpeg_read_scanlines]` | `[native code]` |
| 0.0% | 5.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_decomp_image_from_stream]` | `[native code]` |
| 0.0% | 5.6ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:488` |
| 0.0% | 5.6ms | 0.0% | 5.6ms | `fromWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 5.5ms | 0.0% | 0us | `async _runLoop` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1208` |
| 0.0% | 5.4ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/index.cjs:1` |
| 0.0% | 5.2ms | 0.0% | 2.6ms | `readFileSync` | `[native code]` |
| 0.0% | 5.2ms | 0.0% | 0us | `async detectAndCropBbs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:121` |
| 0.0% | 5.2ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1181` |
| 0.0% | 5.2ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1172` |
| 0.0% | 5.2ms | 0.0% | 0us | `async stream` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:924` |
| 0.0% | 5.2ms | 0.0% | 5.2ms | `fileURLToPath` | `node:url` |
| 0.0% | 4.7ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_parse_dict]` | `[native code]` |
| 0.0% | 4.7ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:507` |
| 0.0% | 4.6ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_dict_get]` | `[native code]` |
| 0.0% | 4.6ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[emscripten_builtin_realloc]` | `[native code]` |
| 0.0% | 4.6ms | 0.0% | 2.5ms | `mupdf-wasm.wasm.wasm-function[decompress_onepass]` | `[native code]` |
| 0.0% | 4.6ms | 0.0% | 4.6ms | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:68` |
| 0.0% | 4.5ms | 0.0% | 0us | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:47` |
| 0.0% | 4.5ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/tiktoken.js:10` |
| 0.0% | 4.5ms | 0.0% | 4.5ms | `PQueue` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js` |
| 0.0% | 4.5ms | 0.0% | 3.3ms | `mupdf-wasm.wasm.wasm-function[gray_render_line]` | `[native code]` |
| 0.0% | 4.4ms | 0.0% | 0us | `_prepareNextTasks` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:247` |
| 0.0% | 4.4ms | 0.0% | 0us | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:487` |
| 0.0% | 4.4ms | 0.0% | 0us | `async _runLoop` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1204` |
| 0.0% | 4.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_cache_object]` | `[native code]` |
| 0.0% | 4.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_parse_ind_obj]` | `[native code]` |
| 0.0% | 4.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_parse_ind_obj_or_newobj]` | `[native code]` |
| 0.0% | 4.4ms | 0.0% | 899us | `embind__requireFunction` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 4.3ms | 0.0% | 0us | `node:fs` | `node:fs:2` |
| 0.0% | 4.3ms | 0.0% | 0us | `AsyncGeneratorWithSetup` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js:132` |
| 0.0% | 4.3ms | 0.0% | 0us | `async stream` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:121` |
| 0.0% | 4.3ms | 0.0% | 0us | `async stream` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:939` |
| 0.0% | 4.3ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js:133` |
| 0.0% | 4.3ms | 0.0% | 0us | `async stream` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:119` |
| 0.0% | 4.3ms | 0.0% | 2.1ms | `binaryDecode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 4.3ms | 0.0% | 0us | `.wasm-function[3389]` | `[native code]` |
| 0.0% | 4.2ms | 0.0% | 4.2ms | `dlopen` | `[native code]` |
| 0.0% | 4.2ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/sharp.mjs:61` |
| 0.0% | 4.2ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/sharp-linux-x64/index.cjs:2` |
| 0.0% | 4.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_font_descriptor]` | `[native code]` |
| 0.0% | 4.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_font]` | `[native code]` |
| 0.0% | 4.1ms | 0.0% | 1.1ms | `.wasm-function[280]` | `[native code]` |
| 0.0% | 3.9ms | 0.0% | 3.9ms | `mupdf-wasm.wasm.wasm-function[inflate]` | `[native code]` |
| 0.0% | 3.9ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[next_flated]` | `[native code]` |
| 0.0% | 3.9ms | 0.0% | 3.9ms | `mupdf-wasm.wasm.wasm-function[scale_row_from_temp]` | `[native code]` |
| 0.0% | 3.9ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_transform_pixmap]` | `[native code]` |
| 0.0% | 3.9ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_scale_pixmap_cached]` | `[native code]` |
| 0.0% | 3.7ms | 0.0% | 0us | `internal:stream` | `internal:stream:2` |
| 0.0% | 3.7ms | 0.0% | 0us | `node:stream` | `node:stream:2` |
| 0.0% | 3.6ms | 0.0% | 3.6ms | `get` | `[native code]` |
| 0.0% | 3.6ms | 0.0% | 1.2ms | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:496` |
| 0.0% | 3.6ms | 0.0% | 0us | `async classifyImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:24` |
| 0.0% | 3.6ms | 0.0% | 0us | `async classifyImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:26` |
| 0.0% | 3.5ms | 0.0% | 0us | `node:path` | `node:path:2` |
| 0.0% | 3.5ms | 0.0% | 0us | `internal:validators` | `internal:validators:2` |
| 0.0% | 3.5ms | 0.0% | 0us | `async classifyImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:61` |
| 0.0% | 3.5ms | 0.0% | 3.5ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 3.5ms | 0.0% | 0us | `toJsonSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/json_schema.js:47` |
| 0.0% | 3.4ms | 0.0% | 3.4ms | `mupdf-wasm.wasm.wasm-function[insert_active]` | `[native code]` |
| 0.0% | 3.4ms | 0.0% | 1.4ms | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:66` |
| 0.0% | 3.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[do_scavenging_realloc]` | `[native code]` |
| 0.0% | 3.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_realloc]` | `[native code]` |
| 0.0% | 3.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_realloc_default]` | `[native code]` |
| 0.0% | 3.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[buffer_write]` | `[native code]` |
| 0.0% | 3.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_write_data]` | `[native code]` |
| 0.0% | 3.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_ensure_buffer]` | `[native code]` |
| 0.0% | 3.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_resize_buffer]` | `[native code]` |
| 0.0% | 3.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_append_data]` | `[native code]` |
| 0.0% | 3.4ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:252` |
| 0.0% | 3.4ms | 0.0% | 1.2ms | `MatVector.get` | `[native code]` |
| 0.0% | 3.4ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:1820` |
| 0.0% | 3.3ms | 0.0% | 0us | `__embind_register_void` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 3.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_parse_array]` | `[native code]` |
| 0.0% | 3.2ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[gray_conic_to]` | `[native code]` |
| 0.0% | 3.2ms | 0.0% | 0us | `__embind_register_class` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 3.2ms | 0.0% | 3.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/checks.js` |
| 0.0% | 3.2ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1102` |
| 0.0% | 3.2ms | 0.0% | 0us | `async _runLoop` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1200` |
| 0.0% | 3.2ms | 0.0% | 0us | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:447` |
| 0.0% | 3.2ms | 0.0% | 3.2ms | `copyDataProperties` | `[native code]` |
| 0.0% | 3.2ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js:134` |
| 0.0% | 3.2ms | 0.0% | 2.1ms | `next` | `[native code]` |
| 0.0% | 3.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_lex]` | `[native code]` |
| 0.0% | 3.1ms | 0.0% | 3.1ms | `warn` | `[native code]` |
| 0.0% | 3.1ms | 0.0% | 0us | `attachCropImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:109` |
| 0.0% | 3.1ms | 0.0% | 988us | `ZodObject` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` |
| 0.0% | 3.1ms | 0.0% | 1.9ms | `mupdf-wasm.wasm.wasm-function[build_tree]` | `[native code]` |
| 0.0% | 3.1ms | 0.0% | 0us | `async convertPdfToImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:85` |
| 0.0% | 3.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_read_best]` | `[native code]` |
| 0.0% | 3.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_stream]` | `[native code]` |
| 0.0% | 3.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_image_stream]` | `[native code]` |
| 0.0% | 2.9ms | 0.0% | 0us | `.wasm-function[11375]` | `[native code]` |
| 0.0% | 2.9ms | 0.0% | 0us | `.wasm-function[1199]` | `[native code]` |
| 0.0% | 2.9ms | 0.0% | 0us | `.wasm-function[585]` | `[native code]` |
| 0.0% | 2.9ms | 0.0% | 0us | `.wasm-function[584]` | `[native code]` |
| 0.0% | 2.9ms | 0.0% | 0us | `.wasm-function[12008]` | `[native code]` |
| 0.0% | 2.9ms | 0.0% | 0us | `.wasm-function[182]` | `[native code]` |
| 0.0% | 2.9ms | 0.0% | 0us | `_emscripten_resize_heap` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.9ms | 0.0% | 0us | `updateMemoryViews` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.9ms | 0.0% | 0us | `growMemory` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.9ms | 0.0% | 0us | `.wasm-function[734]` | `[native code]` |
| 0.0% | 2.9ms | 0.0% | 0us | `__embind_register_enum_value` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.9ms | 0.0% | 2.9ms | `create` | `[native code]` |
| 0.0% | 2.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[crc32]` | `[native code]` |
| 0.0% | 2.8ms | 0.0% | 2.8ms | `mupdf-wasm.wasm.wasm-function[crc32_z]` | `[native code]` |
| 0.0% | 2.8ms | 0.0% | 0us | `__embind_register_class_constructor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.8ms | 0.0% | 0us | `internal:streams/compose` | `internal:streams/compose:2` |
| 0.0% | 2.8ms | 0.0% | 0us | `internal:streams/pipeline` | `internal:streams/pipeline:2` |
| 0.0% | 2.6ms | 0.0% | 0us | `async I` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 2.6ms | 0.0% | 0us | `async r` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 2.5ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_stroke_bezier]` | `[native code]` |
| 0.0% | 2.5ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[FT_Load_Glyph]` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 0us | `getWasmTableEntry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.4ms | 0.0% | 0us | `makeDynCaller` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[gray_line_to]` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 1.2ms | `writeFileSync` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_page_tree_imp]` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 0us | `async _write` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:50` |
| 0.0% | 2.4ms | 0.0% | 0us | `async _write` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:36` |
| 0.0% | 2.4ms | 0.0% | 0us | `async func` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:31` |
| 0.0% | 2.4ms | 0.0% | 0us | `async doWrite` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:53` |
| 0.0% | 2.4ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/utility.mjs:27` |
| 0.0% | 2.3ms | 0.0% | 0us | `interopZodTransformInputSchemaImpl` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:405` |
| 0.0% | 2.3ms | 0.0% | 0us | `node:fs/promises` | `node:fs/promises:2` |
| 0.0% | 2.3ms | 0.0% | 2.3ms | `EventEmitter` | `node:events` |
| 0.0% | 2.3ms | 0.0% | 0us | `Duplex` | `internal:streams/duplex:37` |
| 0.0% | 2.3ms | 0.0% | 0us | `Stream` | `internal:streams/legacy:4` |
| 0.0% | 2.3ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:697` |
| 0.0% | 2.3ms | 0.0% | 0us | `async interopSafeParseAsync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:65` |
| 0.0% | 2.3ms | 0.0% | 0us | `async _validateResult` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:147` |
| 0.0% | 2.3ms | 0.0% | 0us | `async interopSafeParseAsync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:69` |
| 0.0% | 2.3ms | 0.0% | 0us | `async _validateResult` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:154` |
| 0.0% | 2.2ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/extractSchema.ts:71` |
| 0.0% | 2.2ms | 0.0% | 0us | `ZodDefault` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` |
| 0.0% | 2.2ms | 0.0% | 0us | `bound describe` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `init` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:21` |
| 0.0% | 2.2ms | 0.0% | 0us | `describe` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:167` |
| 0.0% | 2.2ms | 0.0% | 0us | `objectProcessor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:282` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `hasOwnProperty` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `async finishAndHandleError` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 2.2ms | 0.0% | 0us | `async finishAndHandleError` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:528` |
| 0.0% | 2.2ms | 0.0% | 0us | `async _runLoop` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1231` |
| 0.0% | 2.2ms | 0.0% | 0us | `bound min` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `mupdf-wasm.wasm.wasm-function[send_tree]` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 0us | `__embind_register_class_property` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.2ms | 0.0% | 0us | `methodCaller<(Mat) => emscripten::val>` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 0us | `.wasm-function[4554]` | `[native code]` |
| 0.0% | 2.1ms | 0.0% | 0us | `RegisteredPointer_fromWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.1ms | 0.0% | 0us | `ZodOptional` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js:90` |
| 0.0% | 2.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:303` |
| 0.0% | 2.1ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/parse.js:62` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `_encode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/parse.js` |
| 0.0% | 2.1ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:5` |
| 0.0% | 2.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_is_dict]` | `[native code]` |
| 0.0% | 2.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:570` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `attachCropImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:97` |
| 0.0% | 2.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_flatten_stroke_path]` | `[native code]` |
| 0.0% | 2.1ms | 0.0% | 0us | `runDestructor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.1ms | 0.0% | 0us | `releaseClassHandle` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.1ms | 0.0% | 0us | `delete` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.1ms | 0.0% | 1.0ms | `.wasm-function[52]` | `[native code]` |
| 0.0% | 2.1ms | 0.0% | 1.2ms | `mupdf-wasm.wasm.wasm-function[fz_read_byte]` | `[native code]` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `MatVector.size` | `[native code]` |
| 0.0% | 2.1ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:248` |
| 0.0% | 2.1ms | 0.0% | 0us | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:451` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `async _first` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 2.1ms | 0.0% | 0us | `generatorResume` | `[native code]` |
| 0.0% | 2.0ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:4` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `entries` | `[native code]` |
| 0.0% | 2.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_begin_group]` | `[native code]` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `mupdf-wasm.wasm.wasm-function[begin_softmask]` | `[native code]` |
| 0.0% | 2.0ms | 0.0% | 0us | `tool` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:286` |
| 0.0% | 2.0ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:91` |
| 0.0% | 2.0ms | 0.0% | 953us | `_configureSync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/callbacks/manager.js:523` |
| 0.0% | 2.0ms | 0.0% | 0us | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:215` |
| 0.0% | 2.0ms | 0.0% | 0us | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:331` |
| 0.0% | 2.0ms | 0.0% | 0us | `getSharedClient` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:400` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` |
| 0.0% | 2.0ms | 0.0% | 0us | `async _` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 2.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:27` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 2.0ms | 0.0% | 0us | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:58` |
| 0.0% | 2.0ms | 0.0% | 0us | `callWithOptions` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js:204` |
| 0.0% | 2.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:70` |
| 0.0% | 2.0ms | 0.0% | 0us | `async cropperBatch` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:202` |
| 0.0% | 2.0ms | 0.0% | 0us | `async _executeTasksWithRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:139` |
| 0.0% | 2.0ms | 0.0% | 0us | `async _runWithRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/retry.js:26` |
| 0.0% | 1.9ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_to_unicode]` | `[native code]` |
| 0.0% | 1.9ms | 0.0% | 0us | `async initialize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:245` |
| 0.0% | 1.9ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1076` |
| 0.0% | 1.9ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1074` |
| 0.0% | 1.9ms | 0.0% | 0us | `async _streamIterator` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1126` |
| 0.0% | 1.9ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[lex_number]` | `[native code]` |
| 0.0% | 1.9ms | 0.0% | 0us | `mknod` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.9ms | 0.0% | 0us | `_filterInvocationParamsForTracing` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:279` |
| 0.0% | 1.9ms | 0.0% | 0us | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:217` |
| 0.0% | 1.9ms | 0.0% | 0us | `internal:streams/duplex` | `internal:streams/duplex:2` |
| 0.0% | 1.9ms | 0.0% | 957us | `__embind_register_constant` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.4ms | 0.0% | 0us | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:345` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `toISOString` | `[native code]` |
| 0.0% | 1.4ms | 0.0% | 0us | `getMicrosecondPrecisionDatestring` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:32` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:257` |
| 0.0% | 1.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[FT_Outline_Transform]` | `[native code]` |
| 0.0% | 1.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[ft_raster1_transform]` | `[native code]` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `mupdf-wasm.wasm.wasm-function[FT_Vector_Transform]` | `[native code]` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `async withRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `bound _invoke` | `[native code]` |
| 0.0% | 1.3ms | 0.0% | 0us | `async _callWithConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:162` |
| 0.0% | 1.3ms | 0.0% | 0us | `BaseLanguageModel` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:178` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `async _getUpdates` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` |
| 0.0% | 1.3ms | 0.0% | 0us | `async doWrite` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:66` |
| 0.0% | 1.3ms | 0.0% | 0us | `async _getUpdates` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:610` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[stroke_curveto]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[do_flatten_stroke]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_walk_path]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_stroke_lineto_aux]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `mupdf-wasm.wasm.wasm-function[fz_add_line_join]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `stringProcessor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js` |
| 0.0% | 1.2ms | 0.0% | 0us | `__embind_finalize_value_array` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.2ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:103` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:13` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[FT_Set_Char_Size]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `mupdf-wasm.wasm.wasm-function[FT_DivFix]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[tt_size_request]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:542` |
| 0.0% | 1.2ms | 0.0% | 0us | `detectVerticalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:584` |
| 0.0% | 1.2ms | 0.0% | 0us | `async _streamIterator` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1061` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `_getTracingMetadataDefaults` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js` |
| 0.0% | 1.2ms | 0.0% | 0us | `internal:util/inspect` | `internal:util/inspect:2` |
| 0.0% | 1.2ms | 0.0% | 0us | `detectVerticalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:572` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `mupdf-wasm.wasm.wasm-function[ycc_rgb_convert]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[sep_upsample]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:61` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `union` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js` |
| 0.0% | 1.2ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:106` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:20` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `isZodNullableV4` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:228` |
| 0.0% | 1.2ms | 0.0% | 0us | `interopZodTransformInputSchemaImpl` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:422` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `mupdf-wasm.wasm.wasm-function[pdf_new_array]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `loadPage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:1536` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_page_imp]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[wasm_load_page]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_page_tree_internal]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_load_page]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_lookup_page_obj]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `async convertPdfToImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:56` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `getInheritedInstance` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.2ms | 0.0% | 0us | `readPointer` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.2ms | 0.0% | 0us | `bound readPointer` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `async func` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `_prepareSingleTask` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:518` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `async classifyImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[lex_name]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_select_layer_config]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_is_ocg_hidden_imp]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_read_ocg]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_is_array]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_is_ocg_hidden]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[load_ui]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[count_entries]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/checks.js:98` |
| 0.0% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:518` |
| 0.0% | 1.1ms | 0.0% | 0us | `async convertPdfToImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:33` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/classes/comparator.js:138` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:32` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[tt_glyph_load]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[FT_Stream_ReadUShort]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[load_truetype_glyph]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[tt_face_get_metrics]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `get _doesConcurrentAllowAnother` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `_tryToStartAnother` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:99` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_lookup_resource]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[pdf_dict_find]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `resetBuffer` | `internal:streams/writable:155` |
| 0.0% | 1.1ms | 0.0% | 0us | `WritableState` | `internal:streams/writable:152` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:13` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[gray_set_cell]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:104` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:43` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async call` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `async _streamIterator` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1131` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async next` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `async next` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js:19` |
| 0.0% | 1.1ms | 0.0% | 0us | `__embind_register_smart_ptr` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1029` |
| 0.0% | 1.1ms | 0.0% | 0us | `ZodLiteral` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` |
| 0.0% | 1.1ms | 0.0% | 0us | `literal` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1043` |
| 0.0% | 1.1ms | 0.0% | 0us | `.wasm-function[10719]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `.wasm-function[4341]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `getStructuringElement` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `.wasm-function[444]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:477` |
| 0.0% | 1.1ms | 0.0% | 0us | `.wasm-function[1530]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `interopZodTransformInputSchemaImpl` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:418` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1105` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:82` |
| 0.0% | 1.1ms | 0.0% | 0us | `Client` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js:871` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `normalizeHeaders` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:143` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[pdf_run_BT]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `update` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/channels/last_value.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:458` |
| 0.0% | 1.1ms | 0.0% | 0us | `_applyWrites` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:148` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[jpeg_idct_16x16]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_opj_info_callback]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[emscripten_builtin_free]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_new_font_from_buffer]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[sfnt_load_face]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[open_face]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[tt_face_build_cmaps]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[FT_New_Memory_Face]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[tt_face_init]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[pqdownheap]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `normalizeDef` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:750` |
| 0.0% | 1.1ms | 0.0% | 0us | `get value` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:34` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `optionalKeys` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:976` |
| 0.0% | 1.1ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/utility.mjs:128` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `cache` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/utility.mjs` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:507` |
| 0.0% | 1.1ms | 0.0% | 0us | `runWithConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js:22` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `.wasm-function[11387]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:484` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/sax-js/sax.js:521` |
| 0.0% | 1.1ms | 0.0% | 0us | `initializeSax` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/sax-js/sax.js:520` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `_configureSync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/callbacks/manager.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/sax-js/sax.js:1197` |
| 0.0% | 1.1ms | 0.0% | 0us | `.wasm-function[2663]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_run_BDC]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[push_marked_content]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[begin_metatext]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/prompts/chat.js:24` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async func` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `node:events` | `node:events:10` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:21` |
| 0.0% | 1.1ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/imageSchema.ts:10` |
| 0.0% | 1.1ms | 0.0% | 0us | `bound max` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:740` |
| 0.0% | 1.1ms | 0.0% | 0us | `interopZodTransformInputSchemaImpl` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:406` |
| 0.0% | 1.1ms | 0.0% | 0us | `defineLazy` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:62` |
| 0.0% | 1.1ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:34` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:118` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `uuid5` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph-checkpoint/dist/id.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `_prepareSingleTask` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:493` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:1692` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `isInstance` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/ai.js:121` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `toJsonSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/json_schema.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:1` |
| 0.0% | 1.1ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:34` |
| 0.0% | 1.1ms | 0.0% | 0us | `async func` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:29` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `ensureLangGraphConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/utils/config.js:139` |
| 0.0% | 1.1ms | 0.0% | 0us | `async _route` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:40` |
| 0.0% | 1.1ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:31` |
| 0.0% | 1.1ms | 0.0% | 0us | `attachCropImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:107` |
| 0.0% | 1.1ms | 0.0% | 0us | `async _route` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:39` |
| 0.0% | 1.1ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/index.js:37` |
| 0.0% | 1.1ms | 0.0% | 0us | `initializeAsyncLocalStorageSingleton` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/node.js:5` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `initializeGlobalInstance` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async doWrite` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `find` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `isTracingEnabled` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/callbacks.js:10` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v3/ZodError.js:20` |
| 0.0% | 1.1ms | 0.0% | 0us | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:359` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `_getWriteReplicasFromEnv` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `_ensureWriteReplicas` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:1080` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:590` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `isInstance` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/tool.js:55` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `tool` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:266` |
| 0.0% | 1.1ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:44` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `_prepareSingleTask` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:44` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `greyscale` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/colour.mjs:54` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:100` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[pdf_new_name]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `compile` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:439` |
| 0.0% | 1.1ms | 0.0% | 0us | `attachNode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:564` |
| 0.0% | 1.1ms | 0.0% | 0us | `objectProcessor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:280` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `async _streamIterator` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1012` |
| 0.0% | 1.1ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:113` |
| 0.0% | 1.1ms | 0.0% | 0us | `async _validateInput` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:706` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:809` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async _validateInput` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `_compileResolved` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:484` |
| 0.0% | 1.1ms | 0.0% | 0us | `init` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `open` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `createStandardStreams` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `addConditionalEdges` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:105` |
| 0.0% | 1.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:108` |
| 0.0% | 1.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pop_marked_content]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `flattenRef` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:247` |
| 0.0% | 1.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_run_EMC]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[pdf_lookup_cmap_full]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_remap_cmap]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_remap_cmap_range]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `finalize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:296` |
| 0.0% | 1.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[end_metatext]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async run` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js` |
| 0.0% | 1.0ms | 0.0% | 0us | `async compressImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:21` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `resize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1211` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async _generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[pdf_get_indirect_document]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `async convertPdfToImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:34` |
| 0.0% | 1.0ms | 0.0% | 0us | `openDocument` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:1475` |
| 0.0% | 1.0ms | 0.0% | 0us | `.wasm-function[1941]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `.wasm-function[391]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `.wasm-function[3272]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `.wasm-function[3271]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `.wasm-function[2904]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:35` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `replacePublicSymbol` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `AsciiToString` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.0ms | 0.0% | 0us | `v1` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/v1.js:12` |
| 0.0% | 1.0ms | 0.0% | 0us | `async initialize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:273` |
| 0.0% | 1.0ms | 0.0% | 0us | `emptyCheckpoint` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph-checkpoint/dist/base.js:15` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `v1Bytes` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/v1.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `Duplex` | `internal:streams/duplex` |
| 0.0% | 1.0ms | 0.0% | 0us | `v6` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/v6.js:8` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/parse.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `resolvePromiseWithFirstResolvingFunctionCallCheck` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `async _first` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:699` |
| 0.0% | 1.0ms | 0.0% | 0us | `_applyWrites` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:131` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:214` |
| 0.0% | 1.0ms | 0.0% | 0us | `node:fs` | `node:fs:299` |
| 0.0% | 1.0ms | 0.0% | 0us | `internal:promisify` | `internal:promisify:53` |
| 0.0% | 1.0ms | 0.0% | 0us | `async mapBatched` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:71` |
| 0.0% | 1.0ms | 0.0% | 0us | `e` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `q` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 1.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[__wasm_call_ctors]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `putWrites` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:390` |
| 0.0% | 1.0ms | 0.0% | 0us | `_outputWrites` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:410` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `interpreterPath` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/elf.js` |
| 0.0% | 1.0ms | 0.0% | 0us | `runtimePlatformArch` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/libvips.mjs:41` |
| 0.0% | 1.0ms | 0.0% | 0us | `prefixGenerator` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:44` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `filter` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `isNonGlibcLinuxSync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/detect-libc.js:213` |
| 0.0% | 1.0ms | 0.0% | 0us | `familySync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/detect-libc.js:188` |
| 0.0% | 1.0ms | 0.0% | 0us | `_commit` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:217` |
| 0.0% | 1.0ms | 0.0% | 0us | `gatherIteratorSync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:53` |
| 0.0% | 1.0ms | 0.0% | 0us | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:67` |
| 0.0% | 1.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/sharp.mjs:18` |
| 0.0% | 1.0ms | 0.0% | 0us | `mapOutputUpdates` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/io.js:104` |
| 0.0% | 1.0ms | 0.0% | 0us | `runtimeLibc` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/libvips.mjs:39` |
| 0.0% | 1.0ms | 0.0% | 0us | `familyFromInterpreterSync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/detect-libc.js:153` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts` |
| 0.0% | 1.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_show_string]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[fz_show_glyph_aux]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_show_char]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_run_Tj]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[show_string]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `.wasm-function[1310]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` |
| 0.0% | 1.0ms | 0.0% | 0us | `internal:primordials` | `internal:primordials:80` |
| 0.0% | 1.0ms | 0.0% | 0us | `makeSafe` | `internal:primordials:31` |
| 0.0% | 1.0ms | 0.0% | 0us | `internal:shared` | `internal:shared:2` |
| 0.0% | 1.0ms | 0.0% | 0us | `bound call` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `_prepareNextTasks` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:236` |
| 0.0% | 1.0ms | 0.0% | 0us | `async _first` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:698` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `_indexPendingWrites` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `AsciiToString` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.0ms | 0.0% | 0us | `__embind_register_enum` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_atof]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[fz_strtof]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `bound optional` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:112` |
| 0.0% | 1.0ms | 0.0% | 0us | `optional` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1110` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `getEnvironmentVariable` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/env.js:38` |
| 0.0% | 1.0ms | 0.0% | 0us | `ChatOpenRouter` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:181` |
| 0.0% | 1.0ms | 0.0% | 0us | `defaultProcessor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:461` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `objectProcessor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:308` |
| 0.0% | 1.0ms | 0.0% | 0us | `arrayProcessor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:270` |
| 0.0% | 1.0ms | 0.0% | 0us | `.wasm-function[4618]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:396` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `ZodNumberFormat` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:43` |
| 0.0% | 1.0ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:926` |
| 0.0% | 1.0ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:927` |
| 0.0% | 1.0ms | 0.0% | 0us | `async _runWithRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/retry.js:48` |
| 0.0% | 1.0ms | 0.0% | 0us | `_prepareSingleTask` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:555` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `_scratchpad` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js` |
| 0.0% | 1.0ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:108` |
| 0.0% | 1.0ms | 0.0% | 0us | `mergeDefs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:98` |
| 0.0% | 1.0ms | 0.0% | 0us | `check` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:95` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `getOwnPropertyDescriptors` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async pRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js:89` |
| 0.0% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:92` |
| 0.0% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:738` |
| 0.0% | 1.0ms | 0.0% | 0us | `_installLazyMethods` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:32` |
| 0.0% | 1.0ms | 0.0% | 0us | `object` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:791` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1205` |
| 0.0% | 1.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_md5_buffer]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[body]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_md5_final]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:215` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `Point` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async _runWithRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/retry.js` |
| 0.0% | 995us | 0.0% | 0us | `node:util` | `node:util:8` |
| 0.0% | 994us | 0.0% | 994us | `requireRegisteredType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 993us | 0.0% | 993us | `assign` | `[native code]` |
| 0.0% | 993us | 0.0% | 0us | `enqueue` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/priority-queue.js:9` |
| 0.0% | 993us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:170` |
| 0.0% | 988us | 0.0% | 0us | `interopZodObjectStrict` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:312` |
| 0.0% | 986us | 0.0% | 0us | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:457` |
| 0.0% | 986us | 0.0% | 0us | `makeClassHandle` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 984us | 0.0% | 0us | `createDefaultDirectories` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 984us | 0.0% | 0us | `mkdir` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 984us | 0.0% | 0us | `staticInit` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 984us | 0.0% | 984us | `createNode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 984us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:29` |
| 0.0% | 983us | 0.0% | 983us | `defined` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/is.mjs` |
| 0.0% | 983us | 0.0% | 0us | `_createInputDescriptor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:518` |
| 0.0% | 981us | 0.0% | 981us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/composite.mjs:13` |
| 0.0% | 980us | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:81` |
| 0.0% | 978us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[glyph_from_ft_bitmap]` | `[native code]` |
| 0.0% | 978us | 0.0% | 978us | `mupdf-wasm.wasm.wasm-function[fz_new_glyph_from_8bpp_data]` | `[native code]` |
| 0.0% | 975us | 0.0% | 975us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:14` |
| 0.0% | 975us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:519` |
| 0.0% | 975us | 0.0% | 975us | `async compressImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:20` |
| 0.0% | 974us | 0.0% | 974us | `mupdf-wasm.wasm.wasm-function[pdf_clear_stack]` | `[native code]` |
| 0.0% | 967us | 0.0% | 967us | `async mapBatched` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts` |
| 0.0% | 953us | 0.0% | 953us | `set concurrency` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:145` |
| 0.0% | 953us | 0.0% | 0us | `PQueue` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:35` |
| 0.0% | 951us | 0.0% | 951us | `async detectAndCropBbs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts` |
| 0.0% | 947us | 0.0% | 0us | `__embind_register_memory_view` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 945us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[next_concat]` | `[native code]` |
| 0.0% | 941us | 0.0% | 0us | `runChecks` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:48` |
| 0.0% | 939us | 0.0% | 939us | `mupdf-wasm.wasm.wasm-function[decode_mcu_8778]` | `[native code]` |
| 0.0% | 937us | 0.0% | 0us | `StructuredTool` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:68` |
| 0.0% | 937us | 0.0% | 0us | `DynamicStructuredTool` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:236` |
| 0.0% | 937us | 0.0% | 0us | `BaseLangChain` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:137` |
| 0.0% | 937us | 0.0% | 937us | `getVerbosity` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js` |
| 0.0% | 935us | 0.0% | 0us | `internal:streams/destroy` | `internal:streams/destroy:2` |
| 0.0% | 933us | 0.0% | 933us | `mupdf-wasm.wasm.wasm-function[fz_do_catch]` | `[native code]` |
| 0.0% | 914us | 0.0% | 914us | `async initialize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 907us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_array_push_int]` | `[native code]` |
| 0.0% | 907us | 0.0% | 907us | `mupdf-wasm.wasm.wasm-function[fz_malloc]` | `[native code]` |
| 0.0% | 907us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_array_len]` | `[native code]` |
| 0.0% | 895us | 0.0% | 895us | `Client` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js` |
| 0.0% | 894us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_map_one_to_many]` | `[native code]` |
| 0.0% | 894us | 0.0% | 894us | `mupdf-wasm.wasm.wasm-function[add_range]` | `[native code]` |
| 0.0% | 894us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_cmap_imp]` | `[native code]` |
| 0.0% | 894us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_cmap]` | `[native code]` |
| 0.0% | 894us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_cmap]` | `[native code]` |
| 0.0% | 890us | 0.0% | 0us | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:42` |
| 0.0% | 887us | 0.0% | 887us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js` |
| 0.0% | 887us | 0.0% | 0us | `BaseLanguageModel` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:179` |
| 0.0% | 887us | 0.0% | 0us | `BaseLangChain` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:136` |
| 0.0% | 887us | 0.0% | 0us | `Runnable` | `[native code]` |
| 0.0% | 886us | 0.0% | 886us | `mupdf-wasm.wasm.wasm-function[fz_reset_rasterizer]` | `[native code]` |
| 0.0% | 885us | 0.0% | 0us | `__embind_finalize_value_object` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 879us | 0.0% | 0us | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:476` |
| 0.0% | 879us | 0.0% | 879us | `_currentCheckpointMeta` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 879us | 0.0% | 0us | `_emitValuesWithCheckpointMeta` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:791` |
| 0.0% | 874us | 0.0% | 874us | `decodeMemoryView` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 872us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:6` |
| 0.0% | 872us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:20` |
| 0.0% | 870us | 0.0% | 870us | `AsyncCaller` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js:180` |
| 0.0% | 869us | 0.0% | 0us | `toJsonSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/json_schema.js:45` |
| 0.0% | 869us | 0.0% | 869us | `isStandardJsonSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/standard_schema.js` |
| 0.0% | 867us | 0.0% | 0us | `internal:streams/operators` | `internal:streams/operators:2` |
| 0.0% | 866us | 0.0% | 866us | `performIteration` | `[native code]` |
| 0.0% | 866us | 0.0% | 0us | `finalize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:295` |
| 0.0% | 866us | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:299` |
| 0.0% | 866us | 0.0% | 866us | `Mat.roi` | `[native code]` |
| 0.0% | 864us | 0.0% | 864us | `combineAbortSignals` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/utils/index.js` |
| 0.0% | 864us | 0.0% | 0us | `async stream` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:937` |
| 0.0% | 856us | 0.0% | 0us | `async _first` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:647` |
| 0.0% | 842us | 0.0% | 842us | `async loadImageForOpenCV` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts` |
| 0.0% | 842us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/internal/re.js:121` |
| 0.0% | 842us | 0.0% | 0us | `createToken` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/internal/re.js:49` |
| 0.0% | 842us | 0.0% | 0us | `async loadImageForOpenCV` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:68` |
| 0.0% | 842us | 0.0% | 0us | `async cropBbsRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:835` |
| 0.0% | 842us | 0.0% | 842us | `RegExp` | `[native code]` |

## Function Details

### `async _callWithConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:157` | Self: 15.7% (36.13s) | Total: 15.7% (36.13s) | Samples: 1

**Called by:**
- `async _callWithConfig` (1)

### `ReadableState`
`internal:streams/readable` | Self: 7.7% (17.75s) | Total: 7.7% (17.75s) | Samples: 2

**Called by:**
- `Duplex` (2)

### `(anonymous)`
`[native code]` | Self: 7.2% (16.55s) | Total: 10.4% (24.00s) | Samples: 429

**Called by:**
- `__emval_invoke` (4698)
- `(anonymous)` (2577)
- `(anonymous)` (29)
- `(anonymous)` (5)
- `bound require` (4)
- `(module)` (2)
- `async convertPdfToImages` (1)

**Calls:**
- `decodeMemoryView` (3479)
- `.wasm-function[6137]` (1781)
- `emval_returnValue` (1215)
- `bound toWireType` (154)
- `bound fromWireType` (135)
- `bound nonConstNoSmartPtrRawPointerToWireType` (114)
- `dlopen` (4)
- `bound decodeMemoryView` (4)
- `queueListener` (1)

### `.wasm-function[8869]`
`[native code]` | Self: 6.1% (14.13s) | Total: 6.1% (14.13s) | Samples: 13256

**Called by:**
- `.wasm-function[2968]` (13256)

### `.wasm-function[8901]`
`[native code]` | Self: 6.1% (14.12s) | Total: 6.1% (14.12s) | Samples: 13196

**Called by:**
- `.wasm-function[2968]` (13191)
- `.wasm-function[2969]` (5)

### `.wasm-function[8885]`
`[native code]` | Self: 5.8% (13.35s) | Total: 5.8% (13.35s) | Samples: 12390

**Called by:**
- `.wasm-function[2968]` (12390)

### `reduce`
`[native code]` | Self: 4.8% (11.16s) | Total: 4.9% (11.39s) | Samples: 17

**Called by:**
- `async cropAndZoom` (23)
- `ensureConfig` (2)

**Calls:**
- `(anonymous)` (6)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `.wasm-function[8918]`
`[native code]` | Self: 4.8% (11.06s) | Total: 4.8% (11.06s) | Samples: 10300

**Called by:**
- `.wasm-function[2968]` (10295)
- `.wasm-function[2969]` (5)

### `metadata`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:642` | Self: 2.5% (5.84s) | Total: 2.5% (5.84s) | Samples: 1

**Called by:**
- `async compressImage` (1)

### `all`
`[native code]` | Self: 2.0% (4.77s) | Total: 2.0% (4.77s) | Samples: 1

**Called by:**
- `async _generateUncached` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:35` | Self: 1.8% (4.28s) | Total: 17.4% (40.15s) | Samples: 1

**Called by:**
- `map` (9)

**Calls:**
- `async cropper` (8)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:272` | Self: 1.7% (4.11s) | Total: 1.7% (4.11s) | Samples: 1

**Called by:**
- `init` (1)

### `async call`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:113` | Self: 1.6% (3.81s) | Total: 1.6% (3.81s) | Samples: 1

### `runChecks`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js` | Self: 1.6% (3.78s) | Total: 1.6% (3.78s) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `Sharp`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:426` | Self: 1.5% (3.55s) | Total: 1.5% (3.55s) | Samples: 2

**Called by:**
- `Sharp` (3)

**Calls:**
- `_createInputDescriptor` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/parse.js:21` | Self: 1.5% (3.48s) | Total: 1.5% (3.48s) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `async normalizeCoords`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/normalizeCoords.ts:10` | Self: 1.4% (3.37s) | Total: 1.4% (3.37s) | Samples: 1

**Called by:**
- `async normalizeCoords` (1)

### `convertOpenRouterResponseToBaseMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/converters/messages.js:34` | Self: 1.4% (3.30s) | Total: 1.4% (3.30s) | Samples: 1

**Called by:**
- `async _generate` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:333` | Self: 1.2% (2.93s) | Total: 1.2% (2.93s) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `_next`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:47` | Self: 1.2% (2.92s) | Total: 1.2% (2.92s) | Samples: 2

**Called by:**
- `async (anonymous)` (2)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:83` | Self: 1.2% (2.84s) | Total: 1.2% (2.84s) | Samples: 1

**Called by:**
- `async cropper` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:324` | Self: 1.1% (2.71s) | Total: 1.1% (2.71s) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `Uint8Array`
`[native code]` | Self: 1.0% (2.49s) | Total: 1.0% (2.49s) | Samples: 2306

**Called by:**
- `decodeMemoryView` (2299)
- `async F` (5)
- `binaryDecode` (2)

### `json`
`[native code]` | Self: 0.9% (2.16s) | Total: 0.9% (2.16s) | Samples: 2

**Called by:**
- `async _generate` (2)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.9% (2.12s) | Total: 27.8% (63.89s) | Samples: 1988

**Called by:**
- `detectVerticalLines` (18743)
- `detectHorizontalLines` (15598)
- `detectTables` (7889)
- `detectTables` (6914)
- `detectHorizontalLines` (5050)
- `detectVerticalLines` (4544)
- `detectTables` (204)
- `detectTables` (103)
- `async loadImageForOpenCV` (99)
- `detectTables` (94)
- `detectTables` (44)
- `onComplete` (33)
- `detectHorizontalLines` (28)
- `detectVerticalLines` (21)
- `async cropTableRows` (13)
- `(anonymous)` (3)
- `forEach` (3)
- `detectHorizontalLines` (1)

**Calls:**
- `morphologyEx` (49144)
- `Mat.ucharPtr` (5032)
- `(anonymous)` (2577)
- `findContours` (204)
- `cvtColor` (143)
- `set` (110)
- `dilate` (103)
- `bitwise_or` (44)
- `craftInvokerFunction` (19)
- `whenDependentTypesAreResolved` (10)
- `onComplete` (3)
- `(anonymous)` (3)
- `Mat` (1)
- `get` (1)
- `replacePublicSymbol` (1)
- `getStructuringElement` (1)

### `convertOpenRouterResponseToBaseMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/converters/messages.js` | Self: 0.8% (1.99s) | Total: 0.8% (1.99s) | Samples: 1

**Called by:**
- `async _generate` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:58` | Self: 0.8% (1.89s) | Total: 0.8% (1.89s) | Samples: 1

**Called by:**
- `init` (1)

### `async extract`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts` | Self: 0.8% (1.84s) | Total: 0.8% (1.84s) | Samples: 1

**Called by:**
- `async extract` (1)

### `BaseMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/base.js:140` | Self: 0.7% (1.80s) | Total: 0.7% (1.80s) | Samples: 1

**Called by:**
- `AIMessage` (1)

### `AIMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/ai.js:67` | Self: 0.7% (1.76s) | Total: 0.7% (1.76s) | Samples: 1

**Called by:**
- `convertCompletionsMessageToBaseMessage` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:304` | Self: 0.7% (1.66s) | Total: 2.1% (5.04s) | Samples: 1

**Called by:**
- `run` (4)

**Calls:**
- `async (anonymous)` (3)

### `convertUsageMetadata`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/converters/messages.js:93` | Self: 0.6% (1.49s) | Total: 0.6% (1.49s) | Samples: 1

**Called by:**
- `async _generate` (1)

### `cloneObject`
`[native code]` | Self: 0.6% (1.47s) | Total: 0.6% (1.47s) | Samples: 2

**Called by:**
- `convertOpenRouterResponseToBaseMessage` (1)
- `tool` (1)

### `async _generate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:281` | Self: 0.5% (1.27s) | Total: 1.4% (3.44s) | Samples: 1

**Calls:**
- `json` (2)

### `BaseMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/base.js:126` | Self: 0.5% (1.27s) | Total: 0.5% (1.27s) | Samples: 1

**Called by:**
- `AIMessage` (1)

### `anonymous`
`[native code]` | Self: 0.5% (1.15s) | Total: 0.5% (1.18s) | Samples: 30

**Called by:**
- `require` (18)
- `craftInvokerFunction` (5)
- `node:stream` (4)
- `internal:stream` (4)
- `node:util` (3)
- `node:fs` (3)
- `internal:streams/pipeline` (3)
- `internal:streams/compose` (3)
- `internal:validators` (2)
- `internal:streams/duplex` (2)
- `node:path` (2)
- `node:fs/promises` (2)
- `internal:shared` (1)
- `internal:util/inspect` (1)
- `internal:streams/operators` (1)
- `internal:promisify` (1)
- `bound require` (1)
- `node:worker_threads` (1)
- `node:util` (1)
- `node:fs` (1)
- `node:events` (1)
- `internal:streams/destroy` (1)

**Calls:**
- `internal:stream` (4)
- `(anonymous)` (4)
- `internal:streams/compose` (3)
- `internal:streams/pipeline` (3)
- `internal:validators` (2)
- `internal:streams/duplex` (2)
- `node:fs/promises` (2)
- `internal:util/inspect` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `internal:streams/operators` (1)
- `internal:primordials` (1)
- `internal:shared` (1)
- `internal:promisify` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `node:events` (1)
- `internal:streams/destroy` (1)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts` | Self: 0.4% (1.10s) | Total: 0.4% (1.10s) | Samples: 1

**Called by:**
- `async cropTableRows` (1)

### `isArray`
`[native code]` | Self: 0.4% (1.05s) | Total: 0.4% (1.05s) | Samples: 1

**Called by:**
- `AIMessage` (1)

### `emval_returnValue`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.3% (844.8ms) | Total: 0.5% (1.32s) | Samples: 766

**Called by:**
- `(anonymous)` (1215)
- `methodCaller<(Mat) => emscripten::val>` (1)

**Calls:**
- `bound toWireType` (450)

### `parse`
`[native code]` | Self: 0.3% (770.8ms) | Total: 0.3% (770.8ms) | Samples: 1

**Called by:**
- `parseToolCall` (1)

### `bound toWireType`
`[native code]` | Self: 0.3% (730.2ms) | Total: 0.4% (1.02s) | Samples: 687

**Called by:**
- `emval_returnValue` (450)
- `Mat.ucharPtr` (358)
- `(anonymous)` (154)
- `(unknown)` (4)

**Calls:**
- `toWireType` (224)
- `toWireType` (55)

### `decodeMemoryView`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.3% (714.5ms) | Total: 1.6% (3.75s) | Samples: 665

**Called by:**
- `(anonymous)` (3479)
- `bound decodeMemoryView` (4)

**Calls:**
- `Uint8Array` (2299)
- `get buffer` (519)

### `AIMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/ai.js:31` | Self: 0.3% (708.6ms) | Total: 0.7% (1.76s) | Samples: 1

**Called by:**
- `convertCompletionsMessageToBaseMessage` (2)

**Calls:**
- `isArray` (1)

### `isResizeExpected`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs` | Self: 0.2% (658.8ms) | Total: 0.2% (658.8ms) | Samples: 2

**Called by:**
- `extract` (2)

### `get`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.2% (584.9ms) | Total: 0.3% (717.4ms) | Samples: 540

**Called by:**
- `detectHorizontalLines` (381)
- `detectVerticalLines` (223)
- `detectHorizontalLines` (2)
- `detectVerticalLines` (1)
- `(anonymous)` (1)

**Calls:**
- `.wasm-function[549]` (34)
- `fromWireType` (15)
- `validateThis` (13)
- `fromWireType` (5)
- `wasm-stub` (1)

### `get buffer`
`[native code]` | Self: 0.2% (552.5ms) | Total: 0.2% (552.5ms) | Samples: 519

**Called by:**
- `decodeMemoryView` (519)

### `async _generateUncached`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:350` | Self: 0.2% (539.1ms) | Total: 0.2% (539.1ms) | Samples: 1

### `.wasm-function[9388]`
`[native code]` | Self: 0.2% (533.9ms) | Total: 0.2% (533.9ms) | Samples: 490

**Called by:**
- `.wasm-function[2968]` (490)

### `fetch`
`[native code]` | Self: 0.2% (530.8ms) | Total: 0.2% (530.8ms) | Samples: 3

**Called by:**
- `async (anonymous)` (3)

### `.wasm-function[2953]`
`[native code]` | Self: 0.2% (493.5ms) | Total: 0.2% (493.5ms) | Samples: 459

**Called by:**
- `.wasm-function[2968]` (459)

### `Mat.ucharPtr`
`[native code]` | Self: 0.1% (398.4ms) | Total: 2.3% (5.41s) | Samples: 373

**Called by:**
- `(anonymous)` (5032)

**Calls:**
- `.wasm-function[6137]` (3654)
- `bound toWireType` (358)
- `bound fromWireType` (346)
- `bound nonConstNoSmartPtrRawPointerToWireType` (295)
- `wasm-stub` (6)

### `.wasm-function[6148]`
`[native code]` | Self: 0.1% (373.2ms) | Total: 2.4% (5.60s) | Samples: 348

**Called by:**
- `.wasm-function[6137]` (5196)

**Calls:**
- `wasm-stub` (4848)

### `mupdf-wasm.wasm.wasm-function[deflate_slow]`
`[native code]` | Self: 0.1% (348.7ms) | Total: 0.3% (901.9ms) | Samples: 305

**Called by:**
- `mupdf-wasm.wasm.wasm-function[deflate]` (802)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fill_window]` (346)
- `mupdf-wasm.wasm.wasm-function[longest_match]` (140)
- `mupdf-wasm.wasm.wasm-function[_tr_flush_block]` (11)

### `mupdf-wasm.wasm.wasm-function[fill_window]`
`[native code]` | Self: 0.1% (323.0ms) | Total: 0.1% (389.5ms) | Samples: 285

**Called by:**
- `mupdf-wasm.wasm.wasm-function[deflate_slow]` (346)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[adler32]` (61)

### `BaseChatModel`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` | Self: 0.1% (313.4ms) | Total: 0.1% (313.4ms) | Samples: 1

**Called by:**
- `ChatOpenRouter` (1)

### `bound fromWireType`
`[native code]` | Self: 0.1% (297.3ms) | Total: 0.2% (518.1ms) | Samples: 275

**Called by:**
- `Mat.ucharPtr` (346)
- `(anonymous)` (135)

**Calls:**
- `fromWireType` (206)

### `async call`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:249` | Self: 0.1% (292.7ms) | Total: 3.3% (7.67s) | Samples: 1

**Called by:**
- `async invoke` (8)

**Calls:**
- `async call` (7)

### `defineProperty`
`[native code]` | Self: 0.1% (290.1ms) | Total: 0.1% (290.1ms) | Samples: 5

**Called by:**
- `RunTree` (1)
- `_installLazyMethods` (1)
- `defineLazy` (1)
- `RunTree` (1)
- `RunTree` (1)

### `bound nonConstNoSmartPtrRawPointerToWireType`
`[native code]` | Self: 0.1% (265.6ms) | Total: 0.1% (436.0ms) | Samples: 250

**Called by:**
- `Mat.ucharPtr` (295)
- `(anonymous)` (114)

**Calls:**
- `nonConstNoSmartPtrRawPointerToWireType` (159)

### `.wasm-function[6137]`
`[native code]` | Self: 0.1% (260.8ms) | Total: 2.5% (5.86s) | Samples: 245

**Called by:**
- `Mat.ucharPtr` (3654)
- `(anonymous)` (1781)
- `wasm-stub` (6)

**Calls:**
- `.wasm-function[6148]` (5196)

### `mupdf-wasm.wasm.wasm-function[png_write_band]`
`[native code]` | Self: 0.1% (237.6ms) | Total: 0.4% (1.14s) | Samples: 196

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_write_band]` (1002)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[deflate]` (802)
- `mupdf-wasm.wasm.wasm-function[putchunk]` (4)

### `fromWireType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.1% (236.8ms) | Total: 0.1% (236.8ms) | Samples: 221

**Called by:**
- `bound fromWireType` (206)
- `get` (15)

### `toWireType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.1% (235.7ms) | Total: 0.1% (235.7ms) | Samples: 224

**Called by:**
- `bound toWireType` (224)

### `async call`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:127` | Self: 0.0% (223.6ms) | Total: 0.0% (223.6ms) | Samples: 1

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:49` | Self: 0.0% (203.2ms) | Total: 0.0% (203.2ms) | Samples: 6

**Called by:**
- `reduce` (6)

### `getLangSmithEnvironmentVariable`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/env.js:162` | Self: 0.0% (201.8ms) | Total: 0.0% (201.8ms) | Samples: 1

**Called by:**
- `getDefaultProjectName` (1)

### `stringify`
`[native code]` | Self: 0.0% (185.0ms) | Total: 0.0% (185.0ms) | Samples: 9

**Called by:**
- `async (anonymous)` (8)
- `convertLangChainToolCallToOpenAI` (1)

### `nonConstNoSmartPtrRawPointerToWireType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (170.3ms) | Total: 0.0% (170.3ms) | Samples: 159

**Called by:**
- `bound nonConstNoSmartPtrRawPointerToWireType` (159)

### `set`
`[native code]` | Self: 0.0% (161.8ms) | Total: 0.0% (161.8ms) | Samples: 111

**Called by:**
- `(anonymous)` (110)
- `async convertPdfToImages` (1)

### `wasm-stub`
`[native code]` | Self: 0.0% (161.6ms) | Total: 3.0% (6.97s) | Samples: 153

**Called by:**
- `.wasm-function[6148]` (4848)
- `asPNG` (1002)
- `dilate` (103)
- `threshold` (63)
- `bitwise_or` (44)
- `initRuntime` (42)
- `countNonZero` (28)
- `.wasm-function[4417]` (26)
- `.wasm-function[2667]` (13)
- `(module)` (8)
- `mupdf-wasm.wasm.wasm-function[do_tzset]` (7)
- `Mat.ucharPtr` (6)
- `mupdf-wasm.wasm.wasm-function[sbrk]` (5)
- `.wasm-function[1199]` (3)
- `.wasm-function[4554]` (2)
- `MatVector.get` (2)
- `runDestructor` (2)
- `.wasm-function[3389]` (2)
- `e` (1)
- `loadPage` (1)
- `mupdf-wasm.wasm.wasm-function[emscripten_builtin_malloc]` (1)
- `mupdf-wasm.wasm.wasm-function[emscripten_builtin_free]` (1)
- `openDocument` (1)
- `mupdf-wasm.wasm.wasm-function[__wasm_call_ctors]` (1)
- `.wasm-function[6535]` (1)
- `get` (1)

**Calls:**
- `__emval_invoke` (4704)
- `mupdf-wasm.wasm.wasm-function[wasm_new_buffer_from_pixmap_as_png]` (1002)
- `.wasm-function[4377]` (99)
- `.wasm-function[14700]` (63)
- `.wasm-function[674]` (44)
- `.wasm-function[16862]` (42)
- `.wasm-function[1293]` (28)
- `__embind_register_function` (13)
- `__embind_register_class_function` (9)
- `mupdf-wasm.wasm.wasm-function[wasm_init_context]` (8)
- `k` (7)
- `.wasm-function[6137]` (6)
- `h` (6)
- `_emscripten_resize_heap` (3)
- `__embind_register_enum_value` (3)
- `__embind_register_class_constructor` (3)
- `__embind_register_class` (3)
- `__embind_register_constant` (2)
- `.wasm-function[4554]` (2)
- `__embind_register_class_property` (2)
- `__embind_register_smart_ptr` (1)
- `.wasm-function[6551]` (1)
- `q` (1)
- `__embind_register_void` (1)
- `__embind_register_memory_view` (1)
- `__embind_register_enum` (1)
- `.wasm-function[4618]` (1)
- `__embind_finalize_value_array` (1)
- `.wasm-function[2663]` (1)
- `__embind_finalize_value_object` (1)
- `mupdf-wasm.wasm.wasm-function[__wasm_call_ctors]` (1)
- `mupdf-wasm.wasm.wasm-function[wasm_load_page]` (1)

### `.wasm-function[9672]`
`[native code]` | Self: 0.0% (156.7ms) | Total: 0.0% (156.7ms) | Samples: 143

**Called by:**
- `.wasm-function[68]` (143)

### `findWasmBinary`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (152.4ms) | Total: 0.0% (152.4ms) | Samples: 142

**Called by:**
- `async createWasm` (142)

### `mupdf-wasm.wasm.wasm-function[longest_match]`
`[native code]` | Self: 0.0% (151.6ms) | Total: 0.0% (151.6ms) | Samples: 140

**Called by:**
- `mupdf-wasm.wasm.wasm-function[deflate_slow]` (140)

### `interopZodObjectStrict`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:310` | Self: 0.0% (148.9ms) | Total: 0.0% (148.9ms) | Samples: 1

**Called by:**
- `toJsonSchema` (1)

### `(unknown)`
`[native code]` | Self: 0.0% (147.1ms) | Total: 23.8% (54.63s) | Samples: 119

**Called by:**
- `morphologyEx` (49144)
- `adaptiveThreshold` (1196)
- `findContours` (204)
- `cvtColor` (143)
- `toPixmap` (115)
- `getStructuringElement` (1)
- `initializeContext` (1)

**Calls:**
- `.wasm-function[505]` (49100)
- `.wasm-function[16092]` (1196)
- `.wasm-function[491]` (177)
- `.wasm-function[674]` (143)
- `mupdf-wasm.wasm.wasm-function[wasm_pdf_new_pixmap_from_page_with_usage]` (115)
- `bound toWireType` (4)
- `.wasm-function[4341]` (1)

### `.wasm-function[1543]`
`[native code]` | Self: 0.0% (120.4ms) | Total: 0.0% (195.4ms) | Samples: 110

**Called by:**
- `.wasm-function[10948]` (177)

**Calls:**
- `.wasm-function[510]` (53)
- `.wasm-function[2992]` (14)

### `.wasm-function[12009]`
`[native code]` | Self: 0.0% (114.9ms) | Total: 0.0% (114.9ms) | Samples: 101

**Called by:**
- `.wasm-function[76]` (101)

### `.wasm-function[12303]`
`[native code]` | Self: 0.0% (114.2ms) | Total: 0.0% (114.2ms) | Samples: 108

**Called by:**
- `.wasm-function[76]` (108)

### `WritableState`
`internal:streams/writable:139` | Self: 0.0% (112.5ms) | Total: 0.0% (112.5ms) | Samples: 1

**Called by:**
- `Duplex` (1)

### `WritableState`
`internal:streams/writable:147` | Self: 0.0% (105.1ms) | Total: 0.0% (105.1ms) | Samples: 1

**Called by:**
- `Duplex` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js` | Self: 0.0% (101.9ms) | Total: 0.0% (101.9ms) | Samples: 4

**Called by:**
- `init` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `bound RegisteredPointer_fromWireType`
`[native code]` | Self: 0.0% (101.2ms) | Total: 0.0% (102.2ms) | Samples: 1

**Called by:**
- `constructor Mat` (2)

**Calls:**
- `RegisteredPointer_fromWireType` (1)

### `invocationParams`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:219` | Self: 0.0% (89.4ms) | Total: 0.0% (89.4ms) | Samples: 2

**Called by:**
- `getLsParams` (2)

### `.wasm-function[8596]`
`[native code]` | Self: 0.0% (89.3ms) | Total: 0.0% (89.3ms) | Samples: 79

**Called by:**
- `.wasm-function[68]` (79)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:2` | Self: 0.0% (83.8ms) | Total: 0.0% (83.8ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `push`
`[native code]` | Self: 0.0% (75.9ms) | Total: 0.0% (75.9ms) | Samples: 1

**Called by:**
- `async cropBbsRows` (1)

### `Sharp`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:229` | Self: 0.0% (70.5ms) | Total: 0.0% (70.5ms) | Samples: 2

**Called by:**
- `Sharp` (1)
- `async cropTableRows` (1)

### `grow`
`[native code]` | Self: 0.0% (68.7ms) | Total: 0.0% (68.7ms) | Samples: 2

**Called by:**
- `Z` (2)

### `log`
`[native code]` | Self: 0.0% (66.5ms) | Total: 0.0% (66.5ms) | Samples: 3

**Called by:**
- `attachCropImages` (1)
- `async cropTableRows` (1)
- `(module)` (1)

### `mupdf-wasm.wasm.wasm-function[adler32]`
`[native code]` | Self: 0.0% (66.4ms) | Total: 0.0% (66.4ms) | Samples: 61

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fill_window]` (61)

### `WritableState`
`internal:streams/writable:140` | Self: 0.0% (65.8ms) | Total: 0.0% (65.8ms) | Samples: 1

**Called by:**
- `Duplex` (1)

### `Sharp`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:269` | Self: 0.0% (62.7ms) | Total: 0.0% (62.7ms) | Samples: 5

**Called by:**
- `Sharp` (5)

### `.wasm-function[2968]`
`[native code]` | Self: 0.0% (62.4ms) | Total: 23.4% (53.76s) | Samples: 58

**Called by:**
- `.wasm-function[9540]` (50139)

**Calls:**
- `.wasm-function[8869]` (13256)
- `.wasm-function[8901]` (13191)
- `.wasm-function[8885]` (12390)
- `.wasm-function[8918]` (10295)
- `.wasm-function[9388]` (490)
- `.wasm-function[2953]` (459)

### `bound decodeMemoryView`
`[native code]` | Self: 0.0% (61.5ms) | Total: 0.0% (66.7ms) | Samples: 1

**Called by:**
- `(anonymous)` (4)
- `methodCaller<(emscripten::memory_view<unsigned char>) => emscripten::val>` (2)

**Calls:**
- `decodeMemoryView` (4)
- `decodeMemoryView` (1)

### `toHandle`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (56.9ms) | Total: 0.0% (56.9ms) | Samples: 54

**Called by:**
- `toWireType` (54)

### `slice`
`[native code]` | Self: 0.0% (51.5ms) | Total: 0.0% (51.5ms) | Samples: 1

**Called by:**
- `(module)` (1)

### `.wasm-function[12680]`
`[native code]` | Self: 0.0% (49.9ms) | Total: 0.0% (49.9ms) | Samples: 44

**Called by:**
- `.wasm-function[503]` (44)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/composite.mjs` | Self: 0.0% (45.1ms) | Total: 0.0% (45.1ms) | Samples: 1

**Called by:**
- `map` (1)

### `Promise`
`[native code]` | Self: 0.0% (42.3ms) | Total: 9.7% (22.46s) | Samples: 1

**Called by:**
- `_pipeline` (30)
- `async add` (17)
- `async func` (10)
- `metadata` (5)
- `AsyncGeneratorWithSetup` (4)

**Calls:**
- `(anonymous)` (30)
- `(anonymous)` (15)
- `(anonymous)` (9)
- `(anonymous)` (5)
- `(anonymous)` (4)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `async writeFile`
`node:fs/promises` | Self: 0.0% (42.3ms) | Total: 0.0% (42.3ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `Duplex`
`internal:streams/duplex:6` | Self: 0.0% (40.8ms) | Total: 0.0% (40.8ms) | Samples: 1

**Called by:**
- `Sharp` (1)

### `.wasm-function[510]`
`[native code]` | Self: 0.0% (39.7ms) | Total: 0.0% (129.1ms) | Samples: 37

**Called by:**
- `.wasm-function[9595]` (63)
- `.wasm-function[1543]` (53)

**Calls:**
- `.wasm-function[68]` (79)

### `async _mergeConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:622` | Self: 0.0% (38.8ms) | Total: 0.0% (38.8ms) | Samples: 1

**Called by:**
- `async _mergeConfig` (1)

### `mupdf-wasm.wasm.wasm-function[paint_span_with_color_3_solid]`
`[native code]` | Self: 0.0% (36.6ms) | Total: 0.0% (36.6ms) | Samples: 34

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_convert_gel]` (31)
- `mupdf-wasm.wasm.wasm-function[draw_glyph]` (3)

### `async pRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js:111` | Self: 0.0% (35.6ms) | Total: 0.0% (35.6ms) | Samples: 1

**Called by:**
- `async pRetry` (1)

### `.wasm-function[934]`
`[native code]` | Self: 0.0% (35.6ms) | Total: 0.5% (1.29s) | Samples: 32

**Called by:**
- `.wasm-function[5841]` (1196)

**Calls:**
- `.wasm-function[581]` (952)
- `.wasm-function[76]` (212)

### `.wasm-function[549]`
`[native code]` | Self: 0.0% (35.4ms) | Total: 0.0% (35.4ms) | Samples: 34

**Called by:**
- `get` (34)

### `ReadableState`
`internal:streams/readable:30` | Self: 0.0% (34.6ms) | Total: 0.0% (34.6ms) | Samples: 1

**Called by:**
- `Duplex` (1)

### `_convertInputToPromptValue`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:225` | Self: 0.0% (32.8ms) | Total: 0.0% (65.3ms) | Samples: 1

**Called by:**
- `async invoke` (2)

**Calls:**
- `map` (1)

### `map`
`[native code]` | Self: 0.0% (32.4ms) | Total: 20.3% (46.76s) | Samples: 1

**Called by:**
- `async _generateUncached` (21)
- `invocationParams` (14)
- `async mapBatched` (9)
- `async _generateUncached` (3)
- `composite` (1)
- `_convertInputToPromptValue` (1)
- `detectVerticalLines` (1)
- `(anonymous)` (1)
- `attachNode` (1)

**Calls:**
- `async (anonymous)` (21)
- `convertToOpenAITool` (14)
- `async cropper` (9)
- `async (anonymous)` (3)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `convertLangChainToolCallToOpenAI` (1)
- `(anonymous)` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/serializable.js:1` | Self: 0.0% (32.2ms) | Total: 0.0% (32.2ms) | Samples: 1

**Called by:**
- `Serializable` (1)

### `instantiate`
`[native code]` | Self: 0.0% (31.5ms) | Total: 0.0% (31.5ms) | Samples: 30

**Called by:**
- `async instantiateArrayBuffer` (16)
- `async (anonymous)` (14)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:489` | Self: 0.0% (30.5ms) | Total: 0.0% (30.5ms) | Samples: 1

**Called by:**
- `forEach` (1)

### `.wasm-function[11510]`
`[native code]` | Self: 0.0% (29.8ms) | Total: 0.0% (29.8ms) | Samples: 27

**Called by:**
- `.wasm-function[466]` (27)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:73` | Self: 0.0% (29.6ms) | Total: 0.0% (29.6ms) | Samples: 1

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:645` | Self: 0.0% (29.2ms) | Total: 0.0% (68.1ms) | Samples: 1

**Called by:**
- `async invoke` (2)

**Calls:**
- `async _mergeConfig` (1)

### `Error`
`[native code]` | Self: 0.0% (28.8ms) | Total: 0.0% (28.8ms) | Samples: 3

**Called by:**
- `toBuffer` (2)
- `toFile` (1)

### `binaryDecode`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (27.5ms) | Total: 0.0% (27.5ms) | Samples: 25

**Called by:**
- `findWasmBinary` (25)

### `padStart`
`[native code]` | Self: 0.0% (27.5ms) | Total: 0.0% (27.5ms) | Samples: 1

**Called by:**
- `async cropTableRows` (1)

### `Sharp`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:232` | Self: 0.0% (27.0ms) | Total: 7.9% (18.16s) | Samples: 2

**Called by:**
- `Sharp` (14)

**Calls:**
- `Duplex` (8)
- `Duplex` (2)
- `Duplex` (1)
- `Duplex` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js:91` | Self: 0.0% (24.5ms) | Total: 0.0% (24.5ms) | Samples: 1

**Called by:**
- `reduce` (1)

### `mupdf-wasm.wasm.wasm-function[fz_convert_gel]`
`[native code]` | Self: 0.0% (22.4ms) | Total: 0.0% (58.9ms) | Samples: 19

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_convert_rasterizer]` (53)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[paint_span_with_color_3_solid]` (31)
- `mupdf-wasm.wasm.wasm-function[insert_active]` (3)

### `emit`
`node:events:86` | Self: 0.0% (22.1ms) | Total: 0.0% (22.1ms) | Samples: 1

**Called by:**
- `queueListener` (1)

### `ReadableState`
`internal:streams/readable:45` | Self: 0.0% (21.9ms) | Total: 0.0% (21.9ms) | Samples: 1

**Called by:**
- `Duplex` (1)

### `isSafeInteger`
`[native code]` | Self: 0.0% (16.6ms) | Total: 0.0% (16.6ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `process`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:80` | Self: 0.0% (15.7ms) | Total: 0.0% (15.7ms) | Samples: 1

**Called by:**
- `toJSONSchema` (1)

### `Int8Array`
`[native code]` | Self: 0.0% (15.3ms) | Total: 0.0% (15.3ms) | Samples: 9

**Called by:**
- `R` (6)
- `updateMemoryViews` (3)

### `.wasm-function[2992]`
`[native code]` | Self: 0.0% (14.9ms) | Total: 0.0% (14.9ms) | Samples: 14

**Called by:**
- `.wasm-function[1543]` (14)

### `EventEmitter`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/eventemitter3/index.js:94` | Self: 0.0% (14.6ms) | Total: 0.0% (14.6ms) | Samples: 1

**Called by:**
- `PQueue` (1)

### `detectVerticalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:575` | Self: 0.0% (14.1ms) | Total: 2.1% (4.90s) | Samples: 13

**Called by:**
- `async cropTableRows` (4557)

**Calls:**
- `(anonymous)` (4544)

### `validateThis`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (13.7ms) | Total: 0.0% (13.7ms) | Samples: 13

**Called by:**
- `get` (13)

### `_never`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:459` | Self: 0.0% (12.7ms) | Total: 0.0% (12.7ms) | Samples: 1

**Called by:**
- `interopZodObjectStrict` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:277` | Self: 0.0% (12.6ms) | Total: 0.0% (12.6ms) | Samples: 1

**Called by:**
- `init` (1)

### `mupdf-wasm.wasm.wasm-function[draw_glyph]`
`[native code]` | Self: 0.0% (12.5ms) | Total: 0.0% (16.1ms) | Samples: 11

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_fill_text]` (14)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[paint_span_with_color_3_solid]` (3)

### `init`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:22` | Self: 0.0% (12.4ms) | Total: 3.4% (7.98s) | Samples: 2

**Called by:**
- `ZodNumber` (6)
- `(anonymous)` (5)
- `(anonymous)` (4)
- `ZodNumberFormat` (3)
- `ZodOptional` (2)
- `ZodString` (2)
- `ZodObject` (2)
- `(anonymous)` (2)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `ZodLiteral` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

**Calls:**
- `(anonymous)` (5)
- `(anonymous)` (4)
- `(anonymous)` (2)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `toString`
`[native code]` | Self: 0.0% (12.2ms) | Total: 0.0% (12.2ms) | Samples: 1

**Called by:**
- `async compressImage` (1)

### `Function`
`[native code]` | Self: 0.0% (12.0ms) | Total: 0.0% (12.0ms) | Samples: 11

**Called by:**
- `createJsInvoker` (11)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:1734` | Self: 0.0% (10.9ms) | Total: 0.0% (10.9ms) | Samples: 1

### `detectHorizontalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:500` | Self: 0.0% (10.8ms) | Total: 2.3% (5.42s) | Samples: 10

**Called by:**
- `async cropTableRows` (5060)

**Calls:**
- `(anonymous)` (5050)

### `assignWasmExports`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (7.6ms) | Total: 0.0% (7.6ms) | Samples: 1

**Called by:**
- `receiveInstance` (1)

### `getFullYear`
`[native code]` | Self: 0.0% (7.4ms) | Total: 0.0% (7.4ms) | Samples: 7

**Called by:**
- `k` (7)

### `detectHorizontalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:499` | Self: 0.0% (6.6ms) | Total: 0.1% (422.6ms) | Samples: 6

**Called by:**
- `async cropTableRows` (387)

**Calls:**
- `get` (381)

### `mupdf-wasm.wasm.wasm-function[compress_block]`
`[native code]` | Self: 0.0% (6.5ms) | Total: 0.0% (6.5ms) | Samples: 6

**Called by:**
- `mupdf-wasm.wasm.wasm-function[_tr_flush_block]` (6)

### `fromWireType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (5.6ms) | Total: 0.0% (5.6ms) | Samples: 5

**Called by:**
- `get` (5)

### `fileURLToPath`
`node:url` | Self: 0.0% (5.2ms) | Total: 0.0% (5.2ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `async cropAndZoom`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:68` | Self: 0.0% (4.6ms) | Total: 0.0% (4.6ms) | Samples: 1

### `PQueue`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js` | Self: 0.0% (4.5ms) | Total: 0.0% (4.5ms) | Samples: 1

**Called by:**
- `AsyncCaller` (1)

### `sharedRegisterType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (4.3ms) | Total: 0.0% (7.3ms) | Samples: 2

**Called by:**
- `registerType` (5)

**Calls:**
- `forEach` (3)

### `dlopen`
`[native code]` | Self: 0.0% (4.2ms) | Total: 0.0% (4.2ms) | Samples: 4

**Called by:**
- `(anonymous)` (4)

### `mupdf-wasm.wasm.wasm-function[inflate]`
`[native code]` | Self: 0.0% (3.9ms) | Total: 0.0% (3.9ms) | Samples: 3

**Called by:**
- `mupdf-wasm.wasm.wasm-function[next_flated]` (3)

### `mupdf-wasm.wasm.wasm-function[scale_row_from_temp]`
`[native code]` | Self: 0.0% (3.9ms) | Total: 0.0% (3.9ms) | Samples: 2

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_scale_pixmap_cached]` (2)

### `get`
`[native code]` | Self: 0.0% (3.6ms) | Total: 0.0% (3.6ms) | Samples: 3

**Called by:**
- `getWasmTableEntry` (2)
- `require` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (3.5ms) | Total: 0.0% (3.5ms) | Samples: 3

**Called by:**
- `onComplete` (2)
- `detectTables` (1)

### `mupdf-wasm.wasm.wasm-function[insert_active]`
`[native code]` | Self: 0.0% (3.4ms) | Total: 0.0% (3.4ms) | Samples: 3

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_convert_gel]` (3)

### `mupdf-wasm.wasm.wasm-function[gray_render_line]`
`[native code]` | Self: 0.0% (3.3ms) | Total: 0.0% (4.5ms) | Samples: 3

**Called by:**
- `mupdf-wasm.wasm.wasm-function[gray_conic_to]` (2)
- `mupdf-wasm.wasm.wasm-function[gray_line_to]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[gray_set_cell]` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/checks.js` | Self: 0.0% (3.2ms) | Total: 0.0% (3.2ms) | Samples: 3

**Called by:**
- `init` (1)
- `runChecks` (1)
- `(anonymous)` (1)

### `copyDataProperties`
`[native code]` | Self: 0.0% (3.2ms) | Total: 0.0% (3.2ms) | Samples: 2

**Called by:**
- `_filterInvocationParamsForTracing` (1)
- `BaseLanguageModel` (1)

### `warn`
`[native code]` | Self: 0.0% (3.1ms) | Total: 0.0% (3.1ms) | Samples: 3

**Called by:**
- `attachCropImages` (3)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (2.9ms) | Total: 0.0% (51.2ms) | Samples: 3

**Called by:**
- `async (anonymous)` (12)
- `async I` (2)

**Calls:**
- `instantiate` (14)
- `async (anonymous)` (12)
- `_` (3)
- `async I` (2)
- `async F` (2)
- `fileURLToPath` (1)

### `create`
`[native code]` | Self: 0.0% (2.9ms) | Total: 0.0% (2.9ms) | Samples: 3

**Called by:**
- `__embind_register_enum_value` (2)
- `makeClassHandle` (1)

### `mupdf-wasm.wasm.wasm-function[crc32_z]`
`[native code]` | Self: 0.0% (2.8ms) | Total: 0.0% (2.8ms) | Samples: 3

**Called by:**
- `mupdf-wasm.wasm.wasm-function[crc32]` (3)

### `readFileSync`
`[native code]` | Self: 0.0% (2.6ms) | Total: 0.0% (5.2ms) | Samples: 2

**Called by:**
- `readFileSync` (2)
- `async r` (2)

**Calls:**
- `readFileSync` (2)

### `mupdf-wasm.wasm.wasm-function[decompress_onepass]`
`[native code]` | Self: 0.0% (2.5ms) | Total: 0.0% (4.6ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[process_data_simple_main_8796]` (3)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[decode_mcu_8778]` (1)
- `mupdf-wasm.wasm.wasm-function[jpeg_idct_16x16]` (1)

### `forEach`
`[native code]` | Self: 0.0% (2.4ms) | Total: 0.0% (37.1ms) | Samples: 2

**Called by:**
- `sharedRegisterType` (3)
- `extract` (2)
- `bound call` (1)
- `initializeSax` (1)

**Calls:**
- `(anonymous)` (3)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `EventEmitter`
`node:events` | Self: 0.0% (2.3ms) | Total: 0.0% (2.3ms) | Samples: 2

**Called by:**
- `Stream` (2)

### `init`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:21` | Self: 0.0% (2.2ms) | Total: 0.0% (2.2ms) | Samples: 1

**Called by:**
- `ZodDefault` (1)

### `hasOwnProperty`
`[native code]` | Self: 0.0% (2.2ms) | Total: 0.0% (2.2ms) | Samples: 2

**Called by:**
- `whenDependentTypesAreResolved` (2)

### `async finishAndHandleError`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` | Self: 0.0% (2.2ms) | Total: 0.0% (2.2ms) | Samples: 1

**Called by:**
- `async finishAndHandleError` (1)

### `whenDependentTypesAreResolved`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (2.2ms) | Total: 0.0% (42.0ms) | Samples: 2

**Called by:**
- `(anonymous)` (10)
- `__embind_register_function` (10)
- `__embind_register_class_function` (7)
- `__embind_register_class_constructor` (3)
- `__embind_register_class` (3)
- `__embind_register_class_property` (2)
- `__embind_register_constant` (1)
- `__embind_register_smart_ptr` (1)
- `__embind_finalize_value_object` (1)
- `__embind_finalize_value_array` (1)

**Calls:**
- `onComplete` (35)
- `hasOwnProperty` (2)

### `mupdf-wasm.wasm.wasm-function[send_tree]`
`[native code]` | Self: 0.0% (2.2ms) | Total: 0.0% (2.2ms) | Samples: 2

**Called by:**
- `mupdf-wasm.wasm.wasm-function[_tr_flush_block]` (2)

### `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect]`
`[native code]` | Self: 0.0% (2.2ms) | Total: 0.0% (7.7ms) | Samples: 2

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect_chain]` (6)
- `mupdf-wasm.wasm.wasm-function[pdf_dict_get]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_cache_object]` (4)
- `mupdf-wasm.wasm.wasm-function[pdf_get_indirect_document]` (1)

### `mupdf-wasm.wasm.wasm-function[fz_draw_fill_text]`
`[native code]` | Self: 0.0% (2.2ms) | Total: 0.0% (30.1ms) | Samples: 2

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_fill_text]` (26)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[draw_glyph]` (14)
- `mupdf-wasm.wasm.wasm-function[fz_render_glyph]` (10)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js:90` | Self: 0.0% (2.1ms) | Total: 0.0% (2.1ms) | Samples: 1

**Called by:**
- `reduce` (1)

### `_encode`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/parse.js` | Self: 0.0% (2.1ms) | Total: 0.0% (2.1ms) | Samples: 1

**Called by:**
- `(module)` (1)

### `attachCropImages`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:97` | Self: 0.0% (2.1ms) | Total: 0.0% (2.1ms) | Samples: 2

**Called by:**
- `async extract` (2)

### `binaryDecode`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (2.1ms) | Total: 0.0% (4.3ms) | Samples: 2

**Called by:**
- `findWasmBinary` (4)

**Calls:**
- `Uint8Array` (2)

### `MatVector.size`
`[native code]` | Self: 0.0% (2.1ms) | Total: 0.0% (2.1ms) | Samples: 2

**Called by:**
- `detectTables` (2)

### `next`
`[native code]` | Self: 0.0% (2.1ms) | Total: 0.0% (3.2ms) | Samples: 2

**Called by:**
- `async (anonymous)` (3)

**Calls:**
- `async _streamIterator` (1)

### `async _first`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` | Self: 0.0% (2.1ms) | Total: 0.0% (2.1ms) | Samples: 2

**Called by:**
- `async tick` (1)
- `async _first` (1)

### `async tick`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js` | Self: 0.0% (2.0ms) | Total: 0.0% (2.0ms) | Samples: 2

**Called by:**
- `async _runLoop` (1)
- `async tick` (1)

### `entries`
`[native code]` | Self: 0.0% (2.0ms) | Total: 0.0% (2.0ms) | Samples: 2

**Called by:**
- `ensureConfig` (1)
- `_applyWrites` (1)

### `mupdf-wasm.wasm.wasm-function[begin_softmask]`
`[native code]` | Self: 0.0% (2.0ms) | Total: 0.0% (2.0ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_begin_group]` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` | Self: 0.0% (2.0ms) | Total: 0.0% (2.0ms) | Samples: 2

**Called by:**
- `async _` (2)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (2.0ms) | Total: 0.0% (2.0ms) | Samples: 2

**Called by:**
- `async (anonymous)` (2)

### `craftInvokerFunction`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (2.0ms) | Total: 0.0% (20.3ms) | Samples: 2

**Called by:**
- `(anonymous)` (19)

**Calls:**
- `createJsInvoker` (12)
- `anonymous` (5)

### `__emval_invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (2.0ms) | Total: 2.2% (5.14s) | Samples: 2

**Called by:**
- `wasm-stub` (4704)

**Calls:**
- `(anonymous)` (4698)
- `methodCaller<(emscripten::memory_view<unsigned char>) => emscripten::val>` (2)
- `methodCaller<(Mat) => emscripten::val>` (2)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (1.9ms) | Total: 0.1% (424.8ms) | Samples: 2

**Called by:**
- `(anonymous)` (176)
- `async (anonymous)` (174)

**Calls:**
- `async (anonymous)` (174)
- `async createWasm` (171)
- `run` (43)
- `async (anonymous)` (2)
- `staticInit` (1)

### `mupdf-wasm.wasm.wasm-function[build_tree]`
`[native code]` | Self: 0.0% (1.9ms) | Total: 0.0% (3.1ms) | Samples: 2

**Called by:**
- `mupdf-wasm.wasm.wasm-function[_tr_flush_block]` (3)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pqdownheap]` (1)

### `toISOString`
`[native code]` | Self: 0.0% (1.4ms) | Total: 0.0% (1.4ms) | Samples: 1

**Called by:**
- `getMicrosecondPrecisionDatestring` (1)

### `async tick`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:66` | Self: 0.0% (1.4ms) | Total: 0.0% (3.4ms) | Samples: 1

**Called by:**
- `async tick` (3)

**Calls:**
- `async _executeTasksWithRetry` (2)

### `RunTree`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:257` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `runWithConfig` (1)

### `mupdf-wasm.wasm.wasm-function[FT_Vector_Transform]`
`[native code]` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[FT_Outline_Transform]` (1)

### `async withRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `async classifyImage` (1)

### `bound _invoke`
`[native code]` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `async _callWithConfig` (1)

### `async _getUpdates`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `async _getUpdates` (1)

### `mupdf-wasm.wasm.wasm-function[fz_add_line_join]`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_stroke_lineto_aux]` (1)

### `mupdf-wasm.wasm.wasm-function[FT_Outline_Decompose]`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (7.0ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[gray_raster_render]` (6)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[gray_conic_to]` (3)
- `mupdf-wasm.wasm.wasm-function[gray_line_to]` (2)

### `stringProcessor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `process` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:13` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `init` (1)

### `mupdf-wasm.wasm.wasm-function[FT_DivFix]`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[tt_size_request]` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:542` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `map` (1)

### `_getTracingMetadataDefaults`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `async _streamIterator` (1)

### `detectHorizontalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:496` | Self: 0.0% (1.2ms) | Total: 0.0% (3.6ms) | Samples: 1

**Called by:**
- `async cropTableRows` (3)

**Calls:**
- `get` (2)

### `async _generateUncached`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:308` | Self: 0.0% (1.2ms) | Total: 0.3% (802.6ms) | Samples: 1

**Calls:**
- `map` (21)

### `MatVector.get`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (3.4ms) | Samples: 1

**Called by:**
- `detectTables` (3)

**Calls:**
- `wasm-stub` (2)

### `mupdf-wasm.wasm.wasm-function[ycc_rgb_convert]`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[sep_upsample]` (1)

### `union`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `(module)` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:20` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `init` (1)

### `isZodNullableV4`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:228` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `interopZodTransformInputSchemaImpl` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:1730` | Self: 0.0% (1.2ms) | Total: 3.1% (7.21s) | Samples: 1

**Called by:**
- `Promise` (30)

**Calls:**
- `(anonymous)` (29)

### `writeFileSync`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (2.4ms) | Samples: 1

**Called by:**
- `writeFileSync` (1)
- `async convertPdfToImages` (1)

**Calls:**
- `writeFileSync` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_new_array]`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_parse_array]` (1)

### `getInheritedInstance`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `RegisteredPointer_fromWireType` (1)

### `async func`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `async call` (1)

### `_prepareSingleTask`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:518` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `_prepareNextTasks` (1)

### `async classifyImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `mupdf-wasm.wasm.wasm-function[fz_read_byte]`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (2.1ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[lex_name]` (1)
- `mupdf-wasm.wasm.wasm-function[lex_number]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[next_concat]` (1)

### `mupdf-wasm.wasm.wasm-function[FT_Stream_ReadUShort]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[tt_face_get_metrics]` (1)

### `get _doesConcurrentAllowAnother`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `_tryToStartAnother` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_dict_find]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_dict_get]` (1)

### `resetBuffer`
`internal:streams/writable:155` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `WritableState` (1)

### `mupdf-wasm.wasm.wasm-function[gray_conic_to]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (3.2ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[FT_Outline_Decompose]` (3)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[gray_render_line]` (2)

### `mupdf-wasm.wasm.wasm-function[gray_set_cell]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[gray_render_line]` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:104` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

### `async call`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async call` (1)

### `async next`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async next` (1)

### `.wasm-function[280]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (4.1ms) | Samples: 1

**Called by:**
- `.wasm-function[585]` (3)
- `.wasm-function[444]` (1)

**Calls:**
- `.wasm-function[11375]` (3)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:82` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `init` (1)

### `normalizeHeaders`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `Client` (1)

### `async tick`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async _runLoop` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_run_BT]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (1)

### `update`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/channels/last_value.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `_applyWrites` (1)

### `mupdf-wasm.wasm.wasm-function[jpeg_idct_16x16]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[decompress_onepass]` (1)

### `mupdf-wasm.wasm.wasm-function[tt_face_build_cmaps]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[sfnt_load_face]` (1)

### `async _generateUncached`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async _generateUncached` (1)

### `mupdf-wasm.wasm.wasm-function[pqdownheap]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[build_tree]` (1)

### `cache`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/utility.mjs` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `(module)` (1)

### `optionalKeys`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `normalizeDef` (1)

### `detectHorizontalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:507` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async cropTableRows` (1)

### `.wasm-function[11387]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `.wasm-function[52]` (1)

### `_configureSync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/callbacks/manager.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `runWithConfig` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/sax-js/sax.js:521` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `forEach` (1)

### `createJsInvoker`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (1.1ms) | Total: 0.0% (13.1ms) | Samples: 1

**Called by:**
- `craftInvokerFunction` (12)

**Calls:**
- `Function` (11)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/prompts/chat.js:24` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

### `async func`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:740` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `init` (1)

### `uuid5`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph-checkpoint/dist/id.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `_prepareSingleTask` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:1692` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async invoke` (1)

### `isInstance`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/ai.js:121` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `__embind_register_function`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (1.1ms) | Total: 0.0% (14.2ms) | Samples: 1

**Called by:**
- `wasm-stub` (13)

**Calls:**
- `whenDependentTypesAreResolved` (10)
- `embind__requireFunction` (2)

### `toJsonSchema`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/json_schema.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `convertToOpenAIFunction` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:1` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `ChatOpenRouter` (1)

### `ensureLangGraphConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/utils/config.js:139` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async invoke` (1)

### `initializeGlobalInstance`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `initializeAsyncLocalStorageSingleton` (1)

### `async doWrite`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async doWrite` (1)

### `find`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `isTracingEnabled` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v3/ZodError.js:20` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

### `_getWriteReplicasFromEnv`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `_ensureWriteReplicas` (1)

### `isInstance`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/tool.js:55` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `tool`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:266` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async cropper` (1)

### `_prepareSingleTask`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `_prepareNextTasks` (1)

### `greyscale`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/colour.mjs:54` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async cropAndZoom` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:100` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `map` (1)

### `async _validateInput`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async _validateInput` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_new_name]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_parse_dict]` (1)

### `get`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:809` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `objectProcessor` (1)

### `open`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `createStandardStreams` (1)

### `addConditionalEdges`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:105` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `(module)` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_lookup_cmap_full]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_remap_cmap_range]` (1)

### `flattenRef`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:247` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `finalize` (1)

### `async run`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `_tryToStartAnother` (1)

### `resize`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `async compressImage` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1211` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `anonymous` (1)

### `async _generate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `toJsonSchema`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/json_schema.js:48` | Self: 0.0% (1.0ms) | Total: 0.0% (199.8ms) | Samples: 1

**Called by:**
- `convertToOpenAIFunction` (9)
- `withStructuredOutput` (2)

**Calls:**
- `toJSONSchema` (4)
- `interopZodObjectStrict` (1)
- `finalize` (1)
- `interopZodObjectStrict` (1)
- `finalize` (1)
- `interopZodObjectStrict` (1)
- `toJSONSchema` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_get_indirect_document]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect]` (1)

### `.wasm-function[3272]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `.wasm-function[391]` (1)

### `replacePublicSymbol`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `AsciiToString`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `embind__requireFunction` (1)

### `Duplex`
`internal:streams/duplex` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `Sharp` (1)

### `v1Bytes`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/v1.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `v1` (1)

### `async generate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `async generate` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/parse.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `async interopParseAsync` (1)

### `resolvePromiseWithFirstResolvingFunctionCallCheck`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `async normalizeCoords` (1)

### `async _generateUncached`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:214` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `async _generateUncached` (1)

### `q`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `wasm-stub` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_flush_text_imp]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (34.1ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_ET]` (29)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_fill_text]` (27)
- `mupdf-wasm.wasm.wasm-function[pdf_begin_group]` (1)

### `mupdf-wasm.wasm.wasm-function[fz_get_pixmap_from_image]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (6.8ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_fill_image]` (5)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[compressed_image_get_pixmap]` (4)

### `interpreterPath`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/elf.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `familyFromInterpreterSync` (1)

### `filter`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `mapOutputUpdates` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `mupdf-wasm.wasm.wasm-function[fz_show_glyph_aux]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_char]` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `.wasm-function[1310]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `.wasm-function[16862]` (1)

### `_indexPendingWrites`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `_prepareNextTasks` (1)

### `AsciiToString`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `__embind_register_enum` (1)

### `mupdf-wasm.wasm.wasm-function[fz_strtof]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_atof]` (1)

### `getEnvironmentVariable`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/env.js:38` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `ChatOpenRouter` (1)

### `objectProcessor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:308` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `process` (1)

### `.wasm-function[52]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (2.1ms) | Samples: 1

**Called by:**
- `.wasm-function[2663]` (1)
- `.wasm-function[4618]` (1)

**Calls:**
- `.wasm-function[11387]` (1)

### `ZodNumberFormat`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:43` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `_int` (1)

### `_scratchpad`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `_prepareSingleTask` (1)

### `getOwnPropertyDescriptors`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `mergeDefs` (1)

### `async pRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js:89` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `async pRetry` (1)

### `toWireType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (1.0ms) | Total: 0.0% (57.9ms) | Samples: 1

**Called by:**
- `bound toWireType` (55)

**Calls:**
- `toHandle` (54)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1205` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `anonymous` (1)

### `mupdf-wasm.wasm.wasm-function[body]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_md5_final]` (1)

### `Point`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `detectTables` (1)

### `async _runWithRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/retry.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `async _runWithRetry` (1)

### `requireRegisteredType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (994us) | Total: 0.0% (994us) | Samples: 1

**Called by:**
- `__embind_register_enum_value` (1)

### `assign`
`[native code]` | Self: 0.0% (993us) | Total: 0.0% (993us) | Samples: 1

**Called by:**
- `enqueue` (1)

### `ZodObject`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` | Self: 0.0% (988us) | Total: 0.0% (3.1ms) | Samples: 1

**Called by:**
- `clone` (2)
- `object` (1)

**Calls:**
- `init` (2)

### `createNode`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (984us) | Total: 0.0% (984us) | Samples: 1

**Called by:**
- `mknod` (1)

### `defined`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/is.mjs` | Self: 0.0% (983us) | Total: 0.0% (983us) | Samples: 1

**Called by:**
- `_createInputDescriptor` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/composite.mjs:13` | Self: 0.0% (981us) | Total: 0.0% (981us) | Samples: 1

### `mupdf-wasm.wasm.wasm-function[fz_new_glyph_from_8bpp_data]`
`[native code]` | Self: 0.0% (978us) | Total: 0.0% (978us) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[glyph_from_ft_bitmap]` (1)

### `async compressImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:20` | Self: 0.0% (975us) | Total: 0.0% (975us) | Samples: 1

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:14` | Self: 0.0% (975us) | Total: 0.0% (975us) | Samples: 1

**Called by:**
- `init` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_clear_stack]`
`[native code]` | Self: 0.0% (974us) | Total: 0.0% (974us) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_stream]` (1)

### `async mapBatched`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts` | Self: 0.0% (967us) | Total: 0.0% (967us) | Samples: 1

**Called by:**
- `async cropperBatch` (1)

### `__embind_register_constant`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (957us) | Total: 0.0% (1.9ms) | Samples: 1

**Called by:**
- `wasm-stub` (2)

**Calls:**
- `whenDependentTypesAreResolved` (1)

### `set concurrency`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:145` | Self: 0.0% (953us) | Total: 0.0% (953us) | Samples: 1

**Called by:**
- `PQueue` (1)

### `_configureSync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/callbacks/manager.js:523` | Self: 0.0% (953us) | Total: 0.0% (2.0ms) | Samples: 1

**Called by:**
- `async _generateUncached` (2)

**Calls:**
- `isTracingEnabled` (1)

### `countNonZero`
`[native code]` | Self: 0.0% (951us) | Total: 0.0% (31.6ms) | Samples: 1

**Called by:**
- `detectTables` (17)
- `detectTables` (12)

**Calls:**
- `wasm-stub` (28)

### `async detectAndCropBbs`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts` | Self: 0.0% (951us) | Total: 0.0% (951us) | Samples: 1

**Called by:**
- `async detectAndCropBbs` (1)

### `mupdf-wasm.wasm.wasm-function[fz_fill_text]`
`[native code]` | Self: 0.0% (940us) | Total: 0.0% (31.0ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_flush_text_imp]` (27)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_fill_text]` (26)

### `mupdf-wasm.wasm.wasm-function[decode_mcu_8778]`
`[native code]` | Self: 0.0% (939us) | Total: 0.0% (939us) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[decompress_onepass]` (1)

### `getVerbosity`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js` | Self: 0.0% (937us) | Total: 0.0% (937us) | Samples: 1

**Called by:**
- `BaseLangChain` (1)

### `mupdf-wasm.wasm.wasm-function[fz_do_catch]`
`[native code]` | Self: 0.0% (933us) | Total: 0.0% (933us) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_path]` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_process_stream]`
`[native code]` | Self: 0.0% (916us) | Total: 0.0% (127.1ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_raw_contents]` (110)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (106)
- `mupdf-wasm.wasm.wasm-function[pdf_lex]` (2)
- `mupdf-wasm.wasm.wasm-function[pdf_clear_stack]` (1)

### `async initialize`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` | Self: 0.0% (914us) | Total: 0.0% (914us) | Samples: 1

**Called by:**
- `async initialize` (1)

### `.wasm-function[2969]`
`[native code]` | Self: 0.0% (909us) | Total: 0.0% (11.7ms) | Samples: 1

**Called by:**
- `.wasm-function[9540]` (11)

**Calls:**
- `.wasm-function[8918]` (5)
- `.wasm-function[8901]` (5)

### `mupdf-wasm.wasm.wasm-function[fz_malloc]`
`[native code]` | Self: 0.0% (907us) | Total: 0.0% (907us) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_array_push_int]` (1)

### `embind__requireFunction`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (899us) | Total: 0.0% (4.4ms) | Samples: 1

**Called by:**
- `__embind_register_class_function` (2)
- `__embind_register_function` (2)

**Calls:**
- `makeDynCaller` (2)
- `AsciiToString` (1)

### `Client`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js` | Self: 0.0% (895us) | Total: 0.0% (895us) | Samples: 1

**Called by:**
- `getSharedClient` (1)

### `mupdf-wasm.wasm.wasm-function[add_range]`
`[native code]` | Self: 0.0% (894us) | Total: 0.0% (894us) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_map_one_to_many]` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js` | Self: 0.0% (887us) | Total: 0.0% (887us) | Samples: 1

**Called by:**
- `Runnable` (1)

### `mupdf-wasm.wasm.wasm-function[fz_reset_rasterizer]`
`[native code]` | Self: 0.0% (886us) | Total: 0.0% (886us) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_flatten_stroke_path]` (1)

### `_currentCheckpointMeta`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` | Self: 0.0% (879us) | Total: 0.0% (879us) | Samples: 1

**Called by:**
- `_emitValuesWithCheckpointMeta` (1)

### `.wasm-function[466]`
`[native code]` | Self: 0.0% (878us) | Total: 0.0% (30.6ms) | Samples: 1

**Called by:**
- `.wasm-function[11668]` (28)

**Calls:**
- `.wasm-function[11510]` (27)

### `decodeMemoryView`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (874us) | Total: 0.0% (874us) | Samples: 1

**Called by:**
- `bound decodeMemoryView` (1)

### `AsyncCaller`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js:180` | Self: 0.0% (870us) | Total: 0.0% (870us) | Samples: 1

**Called by:**
- `BaseLanguageModel` (1)

### `isStandardJsonSchema`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/standard_schema.js` | Self: 0.0% (869us) | Total: 0.0% (869us) | Samples: 1

**Called by:**
- `toJsonSchema` (1)

### `Mat.roi`
`[native code]` | Self: 0.0% (866us) | Total: 0.0% (866us) | Samples: 1

**Called by:**
- `detectTables` (1)

### `performIteration`
`[native code]` | Self: 0.0% (866us) | Total: 0.0% (866us) | Samples: 1

**Called by:**
- `finalize` (1)

### `combineAbortSignals`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/utils/index.js` | Self: 0.0% (864us) | Total: 0.0% (864us) | Samples: 1

**Called by:**
- `async stream` (1)

### `RegExp`
`[native code]` | Self: 0.0% (842us) | Total: 0.0% (842us) | Samples: 1

**Called by:**
- `createToken` (1)

### `async loadImageForOpenCV`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts` | Self: 0.0% (842us) | Total: 0.0% (842us) | Samples: 1

**Called by:**
- `async loadImageForOpenCV` (1)

### `.wasm-function[16862]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (47.0ms) | Samples: 0

**Called by:**
- `wasm-stub` (42)

**Calls:**
- `.wasm-function[4417]` (26)
- `.wasm-function[2667]` (13)
- `.wasm-function[3389]` (2)
- `.wasm-function[1310]` (1)

### `async _streamIterator`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1126` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Calls:**
- `async (anonymous)` (2)

### `mupdf-wasm.wasm.wasm-function[pdf_parse_ind_obj]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (4.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_cache_object]` (4)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_parse_ind_obj_or_newobj]` (4)

### `toJSONSchema`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:598` | Self: 0.0% (0us) | Total: 0.0% (19.1ms) | Samples: 0

**Called by:**
- `toJsonSchema` (4)

**Calls:**
- `process` (3)
- `process` (1)

### `async classifyImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:24` | Self: 0.0% (0us) | Total: 0.0% (3.6ms) | Samples: 0

**Called by:**
- `async (anonymous)` (3)

**Calls:**
- `async classifyImage` (3)

### `openDocument`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:1475` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async convertPdfToImages` (1)

**Calls:**
- `wasm-stub` (1)

### `RunTree`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:143` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `runWithConfig` (1)

**Calls:**
- `defineProperty` (1)

### `__embind_register_class_property`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `wasm-stub` (2)

**Calls:**
- `whenDependentTypesAreResolved` (2)

### `clone`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:262` | Self: 0.0% (0us) | Total: 0.8% (1.90s) | Samples: 0

**Called by:**
- `clone` (2)
- `bound clone` (2)
- `interopZodObjectStrict` (1)
- `interopZodTransformInputSchemaImpl` (1)
- `interopZodTransformInputSchemaImpl` (1)

**Calls:**
- `ZodNumber` (3)
- `ZodObject` (2)
- `ZodOptional` (1)
- `ZodDefault` (1)

### `getSharedClient`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:400` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `RunTree` (2)

**Calls:**
- `Client` (1)
- `Client` (1)

### `BaseMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/base.js:125` | Self: 0.0% (0us) | Total: 0.0% (32.2ms) | Samples: 0

**Called by:**
- `ToolMessage` (1)

**Calls:**
- `Serializable` (1)

### `mupdf-wasm.wasm.wasm-function[fz_atof]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[lex_number]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_strtof]` (1)

### `runWithConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js:22` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `_configureSync` (1)

### `dilate`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (116.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (103)

**Calls:**
- `wasm-stub` (103)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js:191` | Self: 0.0% (0us) | Total: 0.2% (686.0ms) | Samples: 0

**Called by:**
- `async pRetry` (11)

**Calls:**
- `async (anonymous)` (11)

### `node:events`
`node:events:10` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `defaultProcessor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:461` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `process` (1)

**Calls:**
- `process` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_lookup_resource]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_dict_get]` (1)

### `async extract`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:117` | Self: 0.0% (0us) | Total: 0.8% (1.84s) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `async extract` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_is_array]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[count_entries]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect_chain]` (1)

### `.wasm-function[6535]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (61.5ms) | Samples: 0

**Called by:**
- `.wasm-function[6551]` (1)

**Calls:**
- `wasm-stub` (1)

### `convertToOpenAITool`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/function_calling.js:45` | Self: 0.0% (0us) | Total: 0.0% (55.2ms) | Samples: 0

**Called by:**
- `map` (14)

**Calls:**
- `convertToOpenAIFunction` (14)

### `enqueue`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/priority-queue.js:9` | Self: 0.0% (0us) | Total: 0.0% (993us) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `assign` (1)

### `async add`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:152` | Self: 0.0% (0us) | Total: 0.3% (768.3ms) | Samples: 0

**Called by:**
- `async _generate` (15)
- `callWithOptions` (2)

**Calls:**
- `Promise` (17)

### `mupdf-wasm.wasm.wasm-function[ft_raster1_transform]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[FT_Load_Glyph]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[FT_Outline_Transform]` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_process_Do]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (10.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (7)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_Do_image]` (7)

### `__embind_finalize_value_object`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (885us) | Samples: 0

**Called by:**
- `wasm-stub` (1)

**Calls:**
- `whenDependentTypesAreResolved` (1)

### `.wasm-function[11375]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `.wasm-function[280]` (3)

**Calls:**
- `.wasm-function[734]` (3)

### `getMicrosecondPrecisionDatestring`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:32` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `RunTree` (1)

**Calls:**
- `toISOString` (1)

### `mupdf-wasm.wasm.wasm-function[putchunk]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (6.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[png_write_band]` (4)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[crc32]` (3)
- `mupdf-wasm.wasm.wasm-function[fz_write_data]` (1)

### `_prepareNextTasks`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:236` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async _first` (1)

**Calls:**
- `_indexPendingWrites` (1)

### `mupdf-wasm.wasm.wasm-function[_tr_flush_block]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (11.9ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[deflate_slow]` (11)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[compress_block]` (6)
- `mupdf-wasm.wasm.wasm-function[build_tree]` (3)
- `mupdf-wasm.wasm.wasm-function[send_tree]` (2)

### `internal:primordials`
`internal:primordials:80` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `makeSafe` (1)

### `mupdf-wasm.wasm.wasm-function[png_from_pixmap]`
`[native code]` | Self: 0.0% (0us) | Total: 0.4% (1.14s) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_new_buffer_from_pixmap_as_png]` (1002)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_write_pixmap_as_png]` (1002)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:562` | Self: 0.0% (0us) | Total: 0.0% (16.6ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `isSafeInteger` (1)

### `mupdf-wasm.wasm.wasm-function[wasm_pdf_new_pixmap_from_page_with_usage]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (196.9ms) | Samples: 0

**Called by:**
- `(unknown)` (115)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_new_pixmap_from_page_with_separations_and_usage]` (115)

### `mupdf-wasm.wasm.wasm-function[count_entries]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[load_ui]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_is_array]` (1)

### `invocationParams`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:216` | Self: 0.0% (0us) | Total: 0.0% (55.2ms) | Samples: 0

**Called by:**
- `getLsParams` (14)

**Calls:**
- `map` (14)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:118` | Self: 0.0% (0us) | Total: 0.0% (20.8ms) | Samples: 0

**Calls:**
- `ChatOpenRouter` (6)
- `ChatOpenRouter` (1)

### `runDestructor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `releaseClassHandle` (2)

**Calls:**
- `wasm-stub` (2)

### `mupdf-wasm.wasm.wasm-function[FT_New_Memory_Face]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_new_font_from_buffer]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[open_face]` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:113` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `compile` (1)

### `async compressImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:21` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `resize` (1)

### `.wasm-function[9595]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (69.0ms) | Samples: 0

**Called by:**
- `.wasm-function[14700]` (63)

**Calls:**
- `.wasm-function[510]` (63)

### `async convertPdfToImages`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:74` | Self: 0.0% (0us) | Total: 0.0% (196.9ms) | Samples: 0

**Called by:**
- `(module)` (115)

**Calls:**
- `toPixmap` (115)

### `.wasm-function[76]`
`[native code]` | Self: 0.0% (0us) | Total: 0.1% (232.1ms) | Samples: 0

**Called by:**
- `.wasm-function[934]` (212)

**Calls:**
- `.wasm-function[12303]` (108)
- `.wasm-function[12009]` (101)
- `.wasm-function[584]` (3)

### `mupdf-wasm.wasm.wasm-function[next_dctd]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (5.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_available_1592]` (4)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[jpeg_read_scanlines]` (4)

### `.wasm-function[503]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (49.9ms) | Samples: 0

**Called by:**
- `.wasm-function[1260]` (44)

**Calls:**
- `.wasm-function[12680]` (44)

### `mupdf-wasm.wasm.wasm-function[do_flatten_stroke]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_flatten_stroke_path]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_walk_path]` (1)

### `ToolMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/tool.js:48` | Self: 0.0% (0us) | Total: 0.0% (32.2ms) | Samples: 0

**Called by:**
- `async cropper` (1)

**Calls:**
- `BaseMessage` (1)

### `interopZodTransformInputSchemaImpl`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:422` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `interopZodTransformInputSchemaImpl` (1)

**Calls:**
- `isZodNullableV4` (1)

### `mupdf-wasm.wasm.wasm-function[fz_scale_pixmap_cached]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.9ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_transform_pixmap]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[scale_row_from_temp]` (2)

### `mupdf-wasm.wasm.wasm-function[wasm_load_page]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `wasm-stub` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_load_page]` (1)

### `async doWrite`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:53` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `async _write` (2)

**Calls:**
- `async doWrite` (1)
- `async doWrite` (1)

### `mupdf-wasm.wasm.wasm-function[push_marked_content]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_BDC]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[begin_metatext]` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_load_stream]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_font]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_image_stream]` (2)

### `.wasm-function[1941]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `.wasm-function[2904]` (1)

**Calls:**
- `.wasm-function[3271]` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_load_image_stream]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_stream]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_read_best]` (2)

### `mupdf-wasm.wasm.wasm-function[pdf_begin_group]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_flush_text_imp]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[begin_softmask]` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1074` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Called by:**
- `async _streamIterator` (2)

**Calls:**
- `async (anonymous)` (2)

### `async call`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:108` | Self: 0.0% (0us) | Total: 3.2% (7.37s) | Samples: 0

**Called by:**
- `async call` (6)

**Calls:**
- `async interopParseAsync` (6)

### `bound require`
`[native code]` | Self: 0.0% (0us) | Total: 0.4% (1.09s) | Samples: 0

**Called by:**
- `(anonymous)` (4)
- `(anonymous)` (4)
- `(module)` (4)
- `(anonymous)` (2)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

**Calls:**
- `require` (19)
- `(anonymous)` (4)
- `anonymous` (1)

### `async withRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:38` | Self: 0.0% (0us) | Total: 0.0% (70.3ms) | Samples: 0

**Called by:**
- `async withRetry` (4)

**Calls:**
- `async invoke` (2)
- `async invoke` (2)

### `async loadImageForOpenCV`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:79` | Self: 0.0% (0us) | Total: 0.0% (212.3ms) | Samples: 0

**Calls:**
- `(anonymous)` (99)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/tiktoken.js:10` | Self: 0.0% (0us) | Total: 0.0% (4.5ms) | Samples: 0

**Calls:**
- `AsyncCaller` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:306` | Self: 0.0% (0us) | Total: 1.4% (3.37s) | Samples: 0

**Called by:**
- `async (anonymous)` (3)

**Calls:**
- `async (anonymous)` (3)

### `async _generate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:266` | Self: 0.0% (0us) | Total: 0.3% (800.3ms) | Samples: 0

**Called by:**
- `async (anonymous)` (20)

**Calls:**
- `async _generate` (17)
- `async _generate` (3)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:34` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async invoke` (1)

**Calls:**
- `ensureLangGraphConfig` (1)

### `.wasm-function[734]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `.wasm-function[11375]` (3)

**Calls:**
- `.wasm-function[12008]` (3)

### `mupdf-wasm.wasm.wasm-function[wasm_init_context]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (8.4ms) | Samples: 0

**Called by:**
- `wasm-stub` (8)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_new_context_imp]` (8)

### `cvtColor`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (156.7ms) | Samples: 0

**Called by:**
- `(anonymous)` (143)

**Calls:**
- `(unknown)` (143)

### `RegisteredPointer_fromWireType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `readPointer` (1)
- `bound RegisteredPointer_fromWireType` (1)

**Calls:**
- `makeClassHandle` (1)
- `getInheritedInstance` (1)

### `async I`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.0% (2.6ms) | Samples: 0

**Called by:**
- `async (anonymous)` (2)

**Calls:**
- `async (anonymous)` (2)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:508` | Self: 0.0% (0us) | Total: 0.8% (1.89s) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `init` (1)

### `async classifyImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:28` | Self: 0.0% (0us) | Total: 0.1% (313.4ms) | Samples: 0

**Calls:**
- `ChatOpenRouter` (1)

### `onComplete`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (40.5ms) | Samples: 0

**Called by:**
- `whenDependentTypesAreResolved` (35)
- `(anonymous)` (3)

**Calls:**
- `(anonymous)` (33)
- `registerType` (3)
- `(anonymous)` (2)

### `ZodOptional`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `optional` (1)
- `clone` (1)

**Calls:**
- `init` (2)

### `mupdf-wasm.wasm.wasm-function[pdf_load_font]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (7.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_try_load_font]` (6)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_type0_font]` (6)

### `mupdf-wasm.wasm.wasm-function[sep_upsample]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[process_data_simple_main_8796]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[ycc_rgb_convert]` (1)

### `releaseClassHandle`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `delete` (2)

**Calls:**
- `runDestructor` (2)

### `node:util`
`node:util:8` | Self: 0.0% (0us) | Total: 0.0% (995us) | Samples: 0

**Calls:**
- `anonymous` (1)

### `detectVerticalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:574` | Self: 0.0% (0us) | Total: 0.1% (236.2ms) | Samples: 0

**Called by:**
- `async cropTableRows` (223)

**Calls:**
- `get` (223)

### `v6`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/v6.js:8` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `emptyCheckpoint` (1)

**Calls:**
- `v1` (1)

### `async generatePrompt`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:484` | Self: 0.0% (0us) | Total: 0.0% (152.0ms) | Samples: 0

**Called by:**
- `async invoke` (22)

**Calls:**
- `async generate` (22)

### `mupdf-wasm.wasm.wasm-function[fz_resize_buffer]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_ensure_buffer]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_realloc]` (1)

### `initializeContext`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js` | Self: 0.0% (0us) | Total: 0.0% (14.9ms) | Samples: 0

**Called by:**
- `toJSONSchema` (1)

**Calls:**
- `(unknown)` (1)

### `.wasm-function[12008]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `.wasm-function[734]` (3)

**Calls:**
- `.wasm-function[182]` (3)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:39` | Self: 0.0% (0us) | Total: 15.6% (35.86s) | Samples: 0

**Called by:**
- `async cropper` (8)

**Calls:**
- `async compressImage` (8)

### `mupdf-wasm.wasm.wasm-function[do_scavenging_malloc]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (69.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_calloc]` (5)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_malloc_default]` (5)

### `node:fs`
`node:fs:2` | Self: 0.0% (0us) | Total: 0.0% (4.3ms) | Samples: 0

**Calls:**
- `anonymous` (3)

### `async cropAndZoom`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:42` | Self: 0.0% (0us) | Total: 0.0% (890us) | Samples: 0

**Calls:**
- `Sharp` (1)

### `detectVerticalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:557` | Self: 0.0% (0us) | Total: 0.0% (25.8ms) | Samples: 0

**Called by:**
- `async cropTableRows` (24)

**Calls:**
- `threshold` (24)

### `async call`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:104` | Self: 0.0% (0us) | Total: 3.2% (7.38s) | Samples: 0

**Called by:**
- `async call` (7)

**Calls:**
- `async call` (6)
- `async call` (1)

### `async next`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js:19` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async _streamIterator` (1)

**Calls:**
- `async next` (1)

### `getDefaultConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:387` | Self: 0.0% (0us) | Total: 0.0% (201.8ms) | Samples: 0

**Called by:**
- `RunTree` (1)

**Calls:**
- `getDefaultProjectName` (1)

### `__embind_register_enum`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `wasm-stub` (1)

**Calls:**
- `AsciiToString` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:32` | Self: 0.0% (0us) | Total: 0.0% (17.3ms) | Samples: 0

**Called by:**
- `async invoke` (12)
- `async _route` (1)
- `async doWrite` (1)
- `async invoke` (1)

**Calls:**
- `async invoke` (13)
- `async invoke` (1)
- `async invoke` (1)

### `growMemory`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `_emscripten_resize_heap` (3)

**Calls:**
- `updateMemoryViews` (3)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:934` | Self: 0.0% (0us) | Total: 0.0% (38.3ms) | Samples: 0

**Calls:**
- `async invoke` (12)
- `patchConfig` (1)

### `mupdf-wasm.wasm.wasm-function[lex_name]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_lex]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_read_byte]` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:309` | Self: 0.0% (0us) | Total: 0.3% (801.4ms) | Samples: 0

**Called by:**
- `async (anonymous)` (21)

**Calls:**
- `async _generate` (20)
- `async _generate` (1)

### `async tick`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:447` | Self: 0.0% (0us) | Total: 0.0% (3.2ms) | Samples: 0

**Called by:**
- `async _runLoop` (3)

**Calls:**
- `async tick` (2)
- `async tick` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect_chain]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (6.6ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_dict_get]` (2)
- `mupdf-wasm.wasm.wasm-function[pdf_is_dict]` (2)
- `mupdf-wasm.wasm.wasm-function[pdf_is_array]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_array_len]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect]` (6)

### `.wasm-function[584]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `.wasm-function[76]` (3)

**Calls:**
- `.wasm-function[585]` (3)

### `mupdf-wasm.wasm.wasm-function[fz_render_ft_glyph]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (11.7ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_render_glyph]` (10)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[FT_Render_Glyph_Internal]` (6)
- `mupdf-wasm.wasm.wasm-function[FT_Load_Glyph]` (2)
- `mupdf-wasm.wasm.wasm-function[FT_Set_Char_Size]` (1)
- `mupdf-wasm.wasm.wasm-function[glyph_from_ft_bitmap]` (1)

### `BaseLanguageModel`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:178` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `BaseChatModel` (1)

**Calls:**
- `copyDataProperties` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:106` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Calls:**
- `_number` (1)

### `async extract`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:154` | Self: 0.0% (0us) | Total: 0.0% (6.4ms) | Samples: 0

**Calls:**
- `attachCropImages` (3)
- `attachCropImages` (2)
- `attachCropImages` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1181` | Self: 0.0% (0us) | Total: 0.0% (5.2ms) | Samples: 0

**Called by:**
- `async invoke` (5)

**Calls:**
- `async stream` (5)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:715` | Self: 0.0% (0us) | Total: 0.0% (189.8ms) | Samples: 0

**Calls:**
- `_pipeline` (3)
- `toFile` (1)

### `async cropBbsRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:840` | Self: 0.0% (0us) | Total: 7.7% (17.84s) | Samples: 0

**Calls:**
- `detectTables` (7889)
- `detectTables` (6914)
- `detectTables` (1196)
- `detectTables` (204)
- `detectTables` (103)
- `detectTables` (95)
- `detectTables` (44)
- `detectTables` (17)
- `detectTables` (12)
- `detectTables` (3)
- `detectTables` (2)
- `detectTables` (1)
- `detectTables` (1)
- `detectTables` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_is_ocg_hidden_imp]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_is_ocg_hidden]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_read_ocg]` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:644` | Self: 0.0% (0us) | Total: 0.0% (68.1ms) | Samples: 0

**Called by:**
- `async withRetry` (2)

**Calls:**
- `async invoke` (2)

### `async stream`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:937` | Self: 0.0% (0us) | Total: 0.0% (864us) | Samples: 0

**Called by:**
- `async stream` (1)

**Calls:**
- `combineAbortSignals` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/sharp-linux-x64/index.cjs:2` | Self: 0.0% (0us) | Total: 0.0% (4.2ms) | Samples: 0

**Called by:**
- `anonymous` (4)

**Calls:**
- `bound require` (4)

### `mupdf-wasm.wasm.wasm-function[pdf_show_string]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_Tj]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[show_string]` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_font]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (4.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_font_descriptor]` (3)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_stream]` (2)
- `mupdf-wasm.wasm.wasm-function[fz_new_font_from_buffer]` (1)

### `detectVerticalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:556` | Self: 0.0% (0us) | Total: 0.0% (22.0ms) | Samples: 0

**Called by:**
- `async cropTableRows` (21)

**Calls:**
- `(anonymous)` (21)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:107` | Self: 0.0% (0us) | Total: 0.0% (12.4ms) | Samples: 0

**Calls:**
- `bound int` (2)

### `ZodLiteral`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `literal` (1)

**Calls:**
- `init` (1)

### `PQueue`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:35` | Self: 0.0% (0us) | Total: 0.0% (953us) | Samples: 0

**Called by:**
- `AsyncCaller` (1)

**Calls:**
- `set concurrency` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:61` | Self: 0.0% (0us) | Total: 0.0% (42.3ms) | Samples: 0

**Calls:**
- `async writeFile` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_lookup_page_obj]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_page_imp]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_page_tree_internal]` (1)

### `_tryToStartAnother`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:99` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `get _doesConcurrentAllowAnother` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_cmap_imp]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (894us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_cmap]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_cmap]` (1)

### `mupdf-wasm.wasm.wasm-function[compressed_image_get_pixmap]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (5.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_get_pixmap_from_image]` (4)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_decomp_image_from_stream]` (4)

### `.wasm-function[10948]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (195.4ms) | Samples: 0

**Called by:**
- `.wasm-function[491]` (177)

**Calls:**
- `.wasm-function[1543]` (177)

### `RunTree`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:329` | Self: 0.0% (0us) | Total: 0.0% (201.8ms) | Samples: 0

**Called by:**
- `runWithConfig` (1)

**Calls:**
- `getDefaultConfig` (1)

### `detectHorizontalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:464` | Self: 0.0% (0us) | Total: 0.0% (43.1ms) | Samples: 0

**Called by:**
- `async cropTableRows` (39)

**Calls:**
- `threshold` (39)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:157` | Self: 0.0% (0us) | Total: 0.0% (32.2ms) | Samples: 0

**Calls:**
- `ToolMessage` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:697` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `(anonymous)` (2)

### `__embind_register_enum_value`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `wasm-stub` (3)

**Calls:**
- `create` (2)
- `requireRegisteredType` (1)

### `mupdf-wasm.wasm.wasm-function[sfnt_load_face]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[tt_face_init]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[tt_face_build_cmaps]` (1)

### `.wasm-function[6551]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (61.5ms) | Samples: 0

**Called by:**
- `wasm-stub` (1)

**Calls:**
- `.wasm-function[6535]` (1)

### `getLsParamsWithDefaults`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:200` | Self: 0.0% (0us) | Total: 0.0% (144.7ms) | Samples: 0

**Called by:**
- `async _generateUncached` (16)

**Calls:**
- `getLsParams` (16)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/index.js:37` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `initializeAsyncLocalStorageSingleton` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1076` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Called by:**
- `async (anonymous)` (2)

**Calls:**
- `async initialize` (2)

### `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (123.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_stream]` (106)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_S]` (56)
- `mupdf-wasm.wasm.wasm-function[pdf_run_ET]` (29)
- `mupdf-wasm.wasm.wasm-function[pdf_process_Do]` (7)
- `mupdf-wasm.wasm.wasm-function[pdf_try_load_font]` (6)
- `mupdf-wasm.wasm.wasm-function[pdf_is_dict]` (2)
- `mupdf-wasm.wasm.wasm-function[pdf_lookup_resource]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_run_EMC]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_is_ocg_hidden]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_run_BDC]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_run_Tj]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_run_BT]` (1)

### `async _mergeConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:621` | Self: 0.0% (0us) | Total: 0.0% (38.8ms) | Samples: 0

**Called by:**
- `async invoke` (1)

**Calls:**
- `async _mergeConfig` (1)

### `staticInit`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (984us) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `createDefaultDirectories` (1)

### `_commit`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:217` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async tick` (1)

**Calls:**
- `putWrites` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:31` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async func` (1)

**Calls:**
- `async _route` (1)

### `familyFromInterpreterSync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/detect-libc.js:153` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `familySync` (1)

**Calls:**
- `interpreterPath` (1)

### `async _streamIterator`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1012` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `next` (1)

**Calls:**
- `async _validateInput` (1)

### `getStructuringElement`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `(unknown)` (1)

### `mupdf-wasm.wasm.wasm-function[fz_stroke_path]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (61.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_path]` (55)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_stroke_path]` (55)

### `Duplex`
`internal:streams/duplex:15` | Self: 0.0% (0us) | Total: 7.8% (18.09s) | Samples: 0

**Called by:**
- `Sharp` (8)

**Calls:**
- `ReadableState` (2)
- `WritableState` (1)
- `WritableState` (1)
- `ReadableState` (1)
- `ReadableState` (1)
- `WritableState` (1)
- `WritableState` (1)

### `_prepareSingleTask`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:493` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `_prepareNextTasks` (1)

**Calls:**
- `uuid5` (1)

### `internal:validators`
`internal:validators:2` | Self: 0.0% (0us) | Total: 0.0% (3.5ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `anonymous` (2)

### `async _validateResult`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:154` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Called by:**
- `async _validateResult` (2)

**Calls:**
- `async interopSafeParseAsync` (2)

### `async interopSafeParseAsync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:69` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Called by:**
- `async interopSafeParseAsync` (2)

**Calls:**
- `async (anonymous)` (2)

### `clone`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:106` | Self: 0.0% (0us) | Total: 0.8% (1.90s) | Samples: 0

**Called by:**
- `bound clone` (2)

**Calls:**
- `clone` (2)

### `mupdf-wasm.wasm.wasm-function[fz_draw_stroke_path_aux]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (61.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_stroke_path]` (55)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_convert_rasterizer]` (53)
- `mupdf-wasm.wasm.wasm-function[fz_flatten_stroke_path]` (2)

### `.wasm-function[557]`
`[native code]` | Self: 0.0% (0us) | Total: 22.9% (52.74s) | Samples: 0

**Called by:**
- `.wasm-function[1308]` (49100)
- `.wasm-function[635]` (99)

**Calls:**
- `.wasm-function[9540]` (49199)

### `.wasm-function[4377]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (111.6ms) | Samples: 0

**Called by:**
- `wasm-stub` (99)

**Calls:**
- `.wasm-function[11526]` (99)

### `internal:streams/compose`
`internal:streams/compose:2` | Self: 0.0% (0us) | Total: 0.0% (2.8ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `anonymous` (3)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:82` | Self: 0.0% (0us) | Total: 0.0% (217.3ms) | Samples: 0

**Called by:**
- `async withRetry` (2)

**Calls:**
- `async invoke` (22)
- `async invoke` (2)

### `updateMemoryViews`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `growMemory` (3)

**Calls:**
- `Int8Array` (3)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:44` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `tool` (1)

### `.wasm-function[3271]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `.wasm-function[1941]` (1)

**Calls:**
- `.wasm-function[391]` (1)

### `async _callWithConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:162` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Calls:**
- `bound _invoke` (1)

### `async _first`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:699` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `_applyWrites` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:308` | Self: 0.0% (0us) | Total: 0.3% (801.4ms) | Samples: 0

**Called by:**
- `map` (21)

**Calls:**
- `async (anonymous)` (21)

### `convertLangChainToolCallToOpenAI`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:43` | Self: 0.0% (0us) | Total: 0.0% (29.7ms) | Samples: 0

**Called by:**
- `map` (1)

**Calls:**
- `stringify` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1105` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `init` (1)

### `async _getUpdates`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:610` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `async _getUpdates` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:852` | Self: 0.0% (0us) | Total: 1.6% (3.89s) | Samples: 0

**Called by:**
- `async (anonymous)` (5)
- `(anonymous)` (2)

**Calls:**
- `(anonymous)` (3)
- `runChecks` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `runChecks` (1)

### `parseToolCall`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:17` | Self: 0.0% (0us) | Total: 0.3% (770.8ms) | Samples: 0

**Called by:**
- `convertCompletionsMessageToBaseMessage` (1)

**Calls:**
- `parse` (1)

### `async tick`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:451` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `async tick` (2)

**Calls:**
- `async _first` (1)
- `async _first` (1)

### `mupdf-wasm.wasm.wasm-function[next_flated]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.9ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_available_1592]` (3)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[inflate]` (3)

### `mupdf-wasm.wasm.wasm-function[pdf_is_dict]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect_chain]` (2)

### `BaseLanguageModel`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:186` | Self: 0.0% (0us) | Total: 0.0% (16.5ms) | Samples: 0

**Called by:**
- `BaseChatModel` (3)

**Calls:**
- `AsyncCaller` (2)
- `AsyncCaller` (1)

### `toFile`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:90` | Self: 0.0% (0us) | Total: 0.0% (22.4ms) | Samples: 0

**Called by:**
- `async cropTableRows` (1)

**Calls:**
- `Error` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_process_contents]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (127.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_page_contents_with_usage_imp]` (110)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_raw_contents]` (110)

### `async _first`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:698` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `_prepareNextTasks` (1)

### `makeDynCaller`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `embind__requireFunction` (2)

**Calls:**
- `getWasmTableEntry` (2)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:70` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Calls:**
- `async cropperBatch` (2)

### `async compressImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:9` | Self: 0.0% (0us) | Total: 15.6% (35.86s) | Samples: 0

**Called by:**
- `async cropper` (8)
- `async classifyImage` (3)

**Calls:**
- `async compressImage` (11)

### `mupdf-wasm.wasm.wasm-function[pdf_load_page_tree_imp]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_page_tree_imp]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_load_page_tree_internal]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_dict_get]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_load_page_tree_imp]` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_run_page_contents_with_usage_imp]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (196.9ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_page_with_usage]` (115)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_contents]` (110)
- `mupdf-wasm.wasm.wasm-function[pdf_new_run_processor]` (5)

### `mupdf-wasm.wasm.wasm-function[fz_new_context_imp]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (8.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[wasm_init_context]` (8)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_new_colorspace_context]` (8)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:20` | Self: 0.0% (0us) | Total: 0.0% (872us) | Samples: 0

**Calls:**
- `bound require` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:272` | Self: 0.0% (0us) | Total: 0.2% (686.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (11)

**Calls:**
- `async (anonymous)` (8)
- `async (anonymous)` (3)

### `AsyncGeneratorWithSetup`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js:132` | Self: 0.0% (0us) | Total: 0.0% (4.3ms) | Samples: 0

**Called by:**
- `async stream` (4)

**Calls:**
- `Promise` (4)

### `mupdf-wasm.wasm.wasm-function[lex_number]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_lex]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_read_byte]` (1)
- `mupdf-wasm.wasm.wasm-function[fz_atof]` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_try_load_font]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (7.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (6)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_font]` (6)

### `_installLazyMethods`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:32` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `defineProperty` (1)

### `async tick`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:67` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `_commit` (1)

### `mupdf-wasm.wasm.wasm-function[sbrk]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (69.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[emscripten_builtin_malloc]` (5)

**Calls:**
- `wasm-stub` (5)

### `async _generateUncached`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:217` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Called by:**
- `async _generateUncached` (1)

**Calls:**
- `_filterInvocationParamsForTracing` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:488` | Self: 0.0% (0us) | Total: 0.0% (5.6ms) | Samples: 0

**Called by:**
- `init` (5)

**Calls:**
- `init` (5)

### `arrayProcessor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:270` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `process` (1)

**Calls:**
- `process` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:590` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `flatIntoArrayWithCallback` (1)

**Calls:**
- `isInstance` (1)

### `async _generate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:285` | Self: 0.0% (0us) | Total: 0.6% (1.49s) | Samples: 0

**Calls:**
- `convertUsageMetadata` (1)

### `async extract`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:143` | Self: 0.0% (0us) | Total: 0.0% (150.0ms) | Samples: 0

**Calls:**
- `withStructuredOutput` (2)

### `__embind_register_memory_view`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (947us) | Samples: 0

**Called by:**
- `wasm-stub` (1)

**Calls:**
- `registerType` (1)

### `ZodNumber`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` | Self: 0.0% (0us) | Total: 0.8% (1.92s) | Samples: 0

**Called by:**
- `_number` (3)
- `clone` (3)

**Calls:**
- `init` (6)

### `isNonGlibcLinuxSync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/detect-libc.js:213` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `runtimeLibc` (1)

**Calls:**
- `familySync` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:507` | Self: 0.0% (0us) | Total: 0.0% (4.7ms) | Samples: 0

**Called by:**
- `init` (4)

**Calls:**
- `init` (4)

### `mupdf-wasm.wasm.wasm-function[pdf_cache_object]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (4.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect]` (4)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_parse_ind_obj]` (4)

### `async normalizeCoords`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/normalizeCoords.ts:4` | Self: 0.0% (0us) | Total: 1.4% (3.37s) | Samples: 0

**Called by:**
- `async (anonymous)` (2)

**Calls:**
- `resolvePromiseWithFirstResolvingFunctionCallCheck` (1)
- `async normalizeCoords` (1)

### `Sharp`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:230` | Self: 0.0% (0us) | Total: 9.4% (21.78s) | Samples: 0

**Called by:**
- `async cropTableRows` (8)
- `async compressImage` (7)
- `async cropTableRows` (3)
- `async cropAndZoom` (2)
- `async cropAndZoom` (2)
- `async cropAndZoom` (1)

**Calls:**
- `Sharp` (14)
- `Sharp` (5)
- `Sharp` (3)
- `Sharp` (1)

### `mupdf-wasm.wasm.wasm-function[do_tzset]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (7.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[gmtime]` (7)

**Calls:**
- `wasm-stub` (7)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:68` | Self: 0.0% (0us) | Total: 0.0% (6.1ms) | Samples: 0

**Calls:**
- `async detectAndCropBbs` (6)

### `mupdf-wasm.wasm.wasm-function[fz_new_icc_colorspace]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (8.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_new_colorspace_context]` (8)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[lcms2mt_cmsCreateProfilePlaceholder]` (7)
- `mupdf-wasm.wasm.wasm-function[fz_md5_buffer]` (1)

### `Runnable`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (887us) | Samples: 0

**Called by:**
- `BaseLangChain` (1)

**Calls:**
- `(anonymous)` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_dict_get]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (4.6ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_lookup_resource]` (1)
- `mupdf-wasm.wasm.wasm-function[end_metatext]` (1)
- `mupdf-wasm.wasm.wasm-function[begin_metatext]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_load_page_tree_imp]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect_chain]` (2)
- `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_dict_find]` (1)

### `BaseLangChain`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:136` | Self: 0.0% (0us) | Total: 0.0% (887us) | Samples: 0

**Called by:**
- `BaseLanguageModel` (1)

**Calls:**
- `Runnable` (1)

### `.wasm-function[1308]`
`[native code]` | Self: 0.0% (0us) | Total: 22.9% (52.63s) | Samples: 0

**Called by:**
- `.wasm-function[10385]` (49100)

**Calls:**
- `.wasm-function[557]` (49100)

### `methodCaller<(Mat) => emscripten::val>`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `__emval_invoke` (2)

**Calls:**
- `bound readPointer` (1)
- `emval_returnValue` (1)

### `detectVerticalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:566` | Self: 0.0% (0us) | Total: 8.6% (19.95s) | Samples: 0

**Called by:**
- `async cropTableRows` (18743)

**Calls:**
- `(anonymous)` (18743)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:273` | Self: 0.0% (0us) | Total: 0.2% (530.8ms) | Samples: 0

**Called by:**
- `async (anonymous)` (3)

**Calls:**
- `fetch` (3)

### `Duplex`
`internal:streams/duplex:37` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Called by:**
- `Sharp` (2)

**Calls:**
- `Stream` (2)

### `_emitValuesWithCheckpointMeta`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:791` | Self: 0.0% (0us) | Total: 0.0% (879us) | Samples: 0

**Called by:**
- `async tick` (1)

**Calls:**
- `_currentCheckpointMeta` (1)

### `check`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:95` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `bound check` (1)

**Calls:**
- `mergeDefs` (1)

### `.wasm-function[2667]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (13.3ms) | Samples: 0

**Called by:**
- `.wasm-function[16862]` (13)

**Calls:**
- `wasm-stub` (13)

### `mupdf-wasm.wasm.wasm-function[load_truetype_glyph]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[tt_glyph_load]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[tt_face_get_metrics]` (1)

### `async createWasm`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.1% (376.2ms) | Samples: 0

**Called by:**
- `async createWasm` (171)
- `async (anonymous)` (171)

**Calls:**
- `async createWasm` (171)
- `findWasmBinary` (142)
- `findWasmBinary` (29)
- `receiveInstantiationResult` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:46` | Self: 0.0% (0us) | Total: 1.4% (3.37s) | Samples: 0

**Called by:**
- `async (anonymous)` (2)

**Calls:**
- `async normalizeCoords` (2)

### `mupdf-wasm.wasm.wasm-function[jpeg_read_scanlines]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (5.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[next_dctd]` (4)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[process_data_simple_main_8796]` (4)

### `convertOpenRouterResponseToBaseMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/converters/messages.js:33` | Self: 0.0% (0us) | Total: 3.2% (7.37s) | Samples: 0

**Called by:**
- `async _generate` (6)

**Calls:**
- `convertCompletionsMessageToBaseMessage` (5)
- `convertCompletionsMessageToBaseMessage` (1)

### `mupdf-wasm.wasm.wasm-function[next_concat]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (945us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_read_byte]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_available_1592]` (1)

### `BaseLanguageModel`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:179` | Self: 0.0% (0us) | Total: 0.0% (887us) | Samples: 0

**Called by:**
- `BaseChatModel` (1)

**Calls:**
- `BaseLangChain` (1)

### `detectVerticalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:572` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `async cropTableRows` (1)

**Calls:**
- `get` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:49` | Self: 0.0% (0us) | Total: 0.1% (288.1ms) | Samples: 0

**Calls:**
- `async cropAndZoom` (4)

### `async cropAndZoom`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:46` | Self: 0.0% (0us) | Total: 1.4% (3.22s) | Samples: 0

**Calls:**
- `_pipeline` (7)

### `node:fs`
`node:fs:299` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `anonymous` (1)

### `loadPage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:1536` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `async convertPdfToImages` (1)

**Calls:**
- `wasm-stub` (1)

### `createDefaultDirectories`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (984us) | Samples: 0

**Called by:**
- `staticInit` (1)

**Calls:**
- `mkdir` (1)

### `.wasm-function[1037]`
`[native code]` | Self: 0.0% (0us) | Total: 0.4% (1.02s) | Samples: 0

**Called by:**
- `.wasm-function[581]` (951)

**Calls:**
- `.wasm-function[9540]` (951)

### `run`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (48.1ms) | Samples: 0

**Called by:**
- `async (anonymous)` (43)

**Calls:**
- `doRun` (43)

### `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_cmap]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (894us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_to_unicode]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_cmap_imp]` (1)

### `mupdf-wasm.wasm.wasm-function[process_data_simple_main_8796]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (5.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[jpeg_read_scanlines]` (4)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[decompress_onepass]` (3)
- `mupdf-wasm.wasm.wasm-function[sep_upsample]` (1)

### `mupdf-wasm.wasm.wasm-function[fz_realloc]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_resize_buffer]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[do_scavenging_realloc]` (1)

### `Client`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js:871` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `getSharedClient` (1)

**Calls:**
- `normalizeHeaders` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_run_Tj]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_string]` (1)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:316` | Self: 0.0% (0us) | Total: 0.0% (12.4ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (12)

**Calls:**
- `countNonZero` (12)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:118` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `defineLazy` (1)

### `async mapBatched`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:71` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async cropperBatch` (1)

**Calls:**
- `async mapBatched` (1)

### `queueListener`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:16` | Self: 0.0% (0us) | Total: 0.0% (22.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `emit` (1)

### `async _route`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:39` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `async _route` (1)

### `ChatOpenRouter`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:181` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async cropper` (1)

**Calls:**
- `getEnvironmentVariable` (1)

### `async tick`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:47` | Self: 0.0% (0us) | Total: 0.0% (4.5ms) | Samples: 0

**Called by:**
- `async _runLoop` (4)

**Calls:**
- `async tick` (3)
- `async tick` (1)

### `.wasm-function[1260]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (49.9ms) | Samples: 0

**Called by:**
- `.wasm-function[15702]` (44)

**Calls:**
- `.wasm-function[503]` (44)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:211` | Self: 0.0% (0us) | Total: 0.0% (116.0ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (103)

**Calls:**
- `(anonymous)` (103)

### `_number`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:307` | Self: 0.0% (0us) | Total: 0.0% (18.9ms) | Samples: 0

**Called by:**
- `(module)` (1)
- `async cropper` (1)
- `async cropper` (1)

**Calls:**
- `ZodNumber` (3)

### `internal:streams/duplex`
`internal:streams/duplex:2` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `anonymous` (2)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:570` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `init` (2)

**Calls:**
- `init` (2)

### `async _`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `(module)` (2)

**Calls:**
- `async (anonymous)` (2)

### `mupdf-wasm.wasm.wasm-function[pdf_select_layer_config]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_read_ocg]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[load_ui]` (1)

### `async compressImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:12` | Self: 0.0% (0us) | Total: 15.6% (35.86s) | Samples: 0

**Called by:**
- `async compressImage` (11)

**Calls:**
- `Sharp` (7)
- `metadata` (3)
- `metadata` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_read_ocg]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_is_ocg_hidden_imp]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_select_layer_config]` (1)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:623` | Self: 0.0% (0us) | Total: 0.0% (111.0ms) | Samples: 0

**Calls:**
- `(anonymous)` (13)

### `async _validateInput`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:706` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async _streamIterator` (1)

**Calls:**
- `async _validateInput` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_load_to_unicode]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[load_cid_font]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_cmap]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_remap_cmap]` (1)

### `bound clone`
`[native code]` | Self: 0.0% (0us) | Total: 0.8% (1.90s) | Samples: 0

**Called by:**
- `bound check` (3)
- `describe` (1)

**Calls:**
- `clone` (2)
- `clone` (2)

### `mupdf-wasm.wasm.wasm-function[fz_new_font_from_buffer]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_font]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[FT_New_Memory_Face]` (1)

### `toJSONSchema`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:597` | Self: 0.0% (0us) | Total: 0.0% (14.9ms) | Samples: 0

**Called by:**
- `toJsonSchema` (1)

**Calls:**
- `initializeContext` (1)

### `process`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:60` | Self: 0.0% (0us) | Total: 0.0% (7.6ms) | Samples: 0

**Called by:**
- `toJSONSchema` (3)
- `objectProcessor` (2)
- `arrayProcessor` (1)
- `defaultProcessor` (1)

**Calls:**
- `objectProcessor` (2)
- `stringProcessor` (1)
- `arrayProcessor` (1)
- `objectProcessor` (1)
- `objectProcessor` (1)
- `defaultProcessor` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js:134` | Self: 0.0% (0us) | Total: 0.0% (3.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (3)

**Calls:**
- `next` (3)

### `mupdf-wasm.wasm.wasm-function[pdf_run_ET]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (34.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (29)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_flush_text_imp]` (29)

### `async _generateUncached`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:215` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `async _generateUncached` (2)

**Calls:**
- `_configureSync` (2)

### `mupdf-wasm.wasm.wasm-function[gray_raster_render]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (7.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[ft_smooth_render]` (6)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[FT_Outline_Decompose]` (6)

### `__embind_register_void`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (3.3ms) | Samples: 0

**Called by:**
- `wasm-stub` (1)

**Calls:**
- `registerType` (1)

### `mupdf-wasm.wasm.wasm-function[tt_face_init]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[open_face]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[sfnt_load_face]` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:102` | Self: 0.0% (0us) | Total: 0.8% (1.90s) | Samples: 0

**Calls:**
- `bound int` (3)

### `async F`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.0% (13.3ms) | Samples: 0

**Called by:**
- `async (anonymous)` (2)
- `async F` (2)

**Calls:**
- `Uint8Array` (5)
- `async F` (2)
- `async r` (2)

### `metadata`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:685` | Self: 0.0% (0us) | Total: 3.8% (8.93s) | Samples: 0

**Called by:**
- `async compressImage` (3)
- `async cropAndZoom` (2)

**Calls:**
- `Promise` (5)

### `runChecks`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:48` | Self: 0.0% (0us) | Total: 0.0% (941us) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `(anonymous)` (1)

### `mknod`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Called by:**
- `mkdir` (1)
- `mknod` (1)

**Calls:**
- `createNode` (1)
- `mknod` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:91` | Self: 0.0% (0us) | Total: 3.3% (7.67s) | Samples: 0

**Called by:**
- `async cropper` (8)

**Calls:**
- `async call` (8)

### `convertToOpenAIFunction`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/function_calling.js:27` | Self: 0.0% (0us) | Total: 0.0% (55.2ms) | Samples: 0

**Called by:**
- `convertToOpenAITool` (14)

**Calls:**
- `toJsonSchema` (9)
- `toJsonSchema` (3)
- `toJsonSchema` (1)
- `toJsonSchema` (1)

### `detectHorizontalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:482` | Self: 0.0% (0us) | Total: 7.2% (16.71s) | Samples: 0

**Called by:**
- `async cropTableRows` (15598)

**Calls:**
- `(anonymous)` (15598)

### `async compressImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:25` | Self: 0.0% (0us) | Total: 0.0% (12.2ms) | Samples: 0

**Calls:**
- `toString` (1)

### `async r`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.0% (2.6ms) | Samples: 0

**Called by:**
- `async F` (2)

**Calls:**
- `readFileSync` (2)

### `AsyncCaller`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js:185` | Self: 0.0% (0us) | Total: 0.0% (20.1ms) | Samples: 0

**Called by:**
- `BaseLanguageModel` (2)
- `(module)` (1)

**Calls:**
- `PQueue` (1)
- `PQueue` (1)
- `PQueue` (1)

### `describe`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:167` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `bound describe` (1)

**Calls:**
- `bound clone` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_new_run_processor]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (69.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_page_contents_with_usage_imp]` (5)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_calloc]` (5)

### `async initialize`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:245` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Called by:**
- `async (anonymous)` (2)

**Calls:**
- `async initialize` (1)
- `async initialize` (1)

### `mupdf-wasm.wasm.wasm-function[fz_read]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (8.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_decomp_image_from_stream]` (4)
- `mupdf-wasm.wasm.wasm-function[fz_read_best]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_available_1592]` (6)

### `threshold`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (69.0ms) | Samples: 0

**Called by:**
- `detectHorizontalLines` (39)
- `detectVerticalLines` (24)

**Calls:**
- `wasm-stub` (63)

### `mupdf-wasm.wasm.wasm-function[tt_glyph_load]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[FT_Load_Glyph]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[load_truetype_glyph]` (1)

### `__embind_register_class_constructor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.8ms) | Samples: 0

**Called by:**
- `wasm-stub` (3)

**Calls:**
- `whenDependentTypesAreResolved` (3)

### `.wasm-function[9540]`
`[native code]` | Self: 0.0% (0us) | Total: 23.4% (53.77s) | Samples: 0

**Called by:**
- `.wasm-function[557]` (49199)
- `.wasm-function[1037]` (951)

**Calls:**
- `.wasm-function[2968]` (50139)
- `.wasm-function[2969]` (11)

### `async convertPdfToImages`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:76` | Self: 0.0% (0us) | Total: 0.4% (1.14s) | Samples: 0

**Called by:**
- `(module)` (1002)

**Calls:**
- `asPNG` (1002)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:27` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Calls:**
- `async _` (2)

### `h`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.0% (73.3ms) | Samples: 0

**Called by:**
- `wasm-stub` (6)

**Calls:**
- `Z` (6)

### `mapOutputUpdates`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/io.js:104` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `generatorResume` (1)

**Calls:**
- `filter` (1)

### `async _generateUncached`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:205` | Self: 0.0% (0us) | Total: 0.0% (150.9ms) | Samples: 0

**Called by:**
- `async generate` (21)

**Calls:**
- `async _generateUncached` (16)
- `async _generateUncached` (2)
- `async _generateUncached` (1)
- `async _generateUncached` (1)
- `async _generateUncached` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:112` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `bound optional` (1)

### `_ensureWriteReplicas`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:1080` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `RunTree` (1)

**Calls:**
- `_getWriteReplicasFromEnv` (1)

### `mupdf-wasm.wasm.wasm-function[pop_marked_content]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_EMC]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[end_metatext]` (1)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:729` | Self: 0.0% (0us) | Total: 0.0% (64.4ms) | Samples: 0

**Calls:**
- `log` (1)

### `Stream`
`internal:streams/legacy:4` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Called by:**
- `Duplex` (2)

**Calls:**
- `EventEmitter` (2)

### `_string`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:7` | Self: 0.0% (0us) | Total: 1.7% (4.12s) | Samples: 0

**Called by:**
- `async cropper` (2)

**Calls:**
- `ZodString` (2)

### `RunTree`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:331` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `runWithConfig` (2)

**Calls:**
- `getSharedClient` (2)

### `delete`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `detectHorizontalLines` (1)
- `detectTables` (1)

**Calls:**
- `releaseClassHandle` (2)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:117` | Self: 0.0% (0us) | Total: 0.0% (104.1ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (95)

**Calls:**
- `(anonymous)` (94)
- `(anonymous)` (1)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:631` | Self: 0.0% (0us) | Total: 10.9% (25.15s) | Samples: 0

**Calls:**
- `detectVerticalLines` (18743)
- `detectVerticalLines` (4557)
- `detectVerticalLines` (223)
- `detectVerticalLines` (24)
- `detectVerticalLines` (21)
- `detectVerticalLines` (1)
- `detectVerticalLines` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:101` | Self: 0.0% (0us) | Total: 0.0% (16.6ms) | Samples: 0

**Calls:**
- `_number` (1)

### `objectProcessor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:282` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `process` (2)

**Calls:**
- `process` (2)

### `async call`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:133` | Self: 0.0% (0us) | Total: 2.4% (5.54s) | Samples: 0

**Calls:**
- `async func` (10)
- `async func` (1)

### `adaptiveThreshold`
`[native code]` | Self: 0.0% (0us) | Total: 0.5% (1.29s) | Samples: 0

**Called by:**
- `detectTables` (1196)

**Calls:**
- `(unknown)` (1196)

### `async cropBbsRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:835` | Self: 0.0% (0us) | Total: 0.0% (842us) | Samples: 0

**Calls:**
- `async loadImageForOpenCV` (1)

### `async pRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js:86` | Self: 0.0% (0us) | Total: 0.3% (722.7ms) | Samples: 0

**Called by:**
- `async (anonymous)` (13)

**Calls:**
- `async pRetry` (11)
- `async pRetry` (1)
- `async pRetry` (1)

### `toPixmap`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:2231` | Self: 0.0% (0us) | Total: 0.0% (196.9ms) | Samples: 0

**Called by:**
- `async convertPdfToImages` (115)

**Calls:**
- `(unknown)` (115)

### `isTracingEnabled`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/callbacks.js:10` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `_configureSync` (1)

**Calls:**
- `find` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_map_one_to_many]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (894us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_cmap]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[add_range]` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:686` | Self: 0.0% (0us) | Total: 3.8% (8.93s) | Samples: 0

**Called by:**
- `Promise` (5)

**Calls:**
- `(anonymous)` (5)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:35` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `.wasm-function[635]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (111.6ms) | Samples: 0

**Called by:**
- `.wasm-function[11526]` (99)

**Calls:**
- `.wasm-function[557]` (99)

### `async run`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:153` | Self: 0.0% (0us) | Total: 0.3% (722.7ms) | Samples: 0

**Called by:**
- `_tryToStartAnother` (13)

**Calls:**
- `async (anonymous)` (13)

### `withStructuredOutput`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:397` | Self: 0.0% (0us) | Total: 0.0% (150.0ms) | Samples: 0

**Called by:**
- `async extract` (2)

**Calls:**
- `toJsonSchema` (2)

### `mupdf-wasm.wasm.wasm-function[FT_Outline_Transform]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[ft_raster1_transform]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[FT_Vector_Transform]` (1)

### `mupdf-wasm.wasm.wasm-function[wasm_new_buffer_from_pixmap_as_png]`
`[native code]` | Self: 0.0% (0us) | Total: 0.4% (1.14s) | Samples: 0

**Called by:**
- `wasm-stub` (1002)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_new_buffer_from_pixmap_as_png]` (1002)

### `object`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:791` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `ZodObject` (1)

### `async _first`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:647` | Self: 0.0% (0us) | Total: 0.0% (856us) | Samples: 0

**Called by:**
- `async tick` (1)

**Calls:**
- `async _first` (1)

### `.wasm-function[10385]`
`[native code]` | Self: 0.0% (0us) | Total: 22.9% (52.63s) | Samples: 0

**Called by:**
- `.wasm-function[505]` (49100)

**Calls:**
- `.wasm-function[1308]` (49100)

### `async _write`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:50` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `async _write` (2)

**Calls:**
- `async doWrite` (2)

### `mupdf-wasm.wasm.wasm-function[pdf_load_font_descriptor]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (4.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[load_cid_font]` (3)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_font]` (3)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:738` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `init` (1)

### `makeSafe`
`internal:primordials:31` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `internal:primordials` (1)

**Calls:**
- `bound call` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_remap_cmap]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_to_unicode]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_remap_cmap_range]` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:20` | Self: 0.0% (0us) | Total: 0.1% (273.1ms) | Samples: 0

**Calls:**
- `(anonymous)` (176)
- `(anonymous)` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:60` | Self: 0.0% (0us) | Total: 0.5% (1.34s) | Samples: 0

**Calls:**
- `async convertPdfToImages` (1002)
- `async convertPdfToImages` (115)
- `async convertPdfToImages` (2)
- `async convertPdfToImages` (1)
- `async convertPdfToImages` (1)
- `async convertPdfToImages` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_remap_cmap_range]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_remap_cmap]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_lookup_cmap_full]` (1)

### `mupdf-wasm.wasm.wasm-function[do_scavenging_realloc]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_realloc]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_realloc_default]` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_parse_ind_obj_or_newobj]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (4.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_parse_ind_obj]` (4)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_parse_dict]` (2)
- `mupdf-wasm.wasm.wasm-function[pdf_parse_array]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_lex]` (1)

### `.wasm-function[1199]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `.wasm-function[182]` (3)

**Calls:**
- `wasm-stub` (3)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:587` | Self: 0.0% (0us) | Total: 0.0% (30.8ms) | Samples: 0

**Called by:**
- `flatIntoArrayWithCallback` (2)

**Calls:**
- `isInstance` (1)
- `map` (1)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:707` | Self: 0.0% (0us) | Total: 0.0% (142.9ms) | Samples: 0

**Calls:**
- `Sharp` (3)

### `async _generate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:284` | Self: 0.0% (0us) | Total: 6.1% (14.15s) | Samples: 0

**Calls:**
- `convertOpenRouterResponseToBaseMessage` (6)
- `convertOpenRouterResponseToBaseMessage` (1)
- `convertOpenRouterResponseToBaseMessage` (1)
- `convertOpenRouterResponseToBaseMessage` (1)

### `mupdf-wasm.wasm.wasm-function[fz_render_glyph]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (11.7ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_fill_text]` (10)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_render_ft_glyph]` (10)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:61` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Calls:**
- `union` (1)

### `detectHorizontalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:484` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async cropTableRows` (1)

**Calls:**
- `delete` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_load_cmap]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (894us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_cmap_imp]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_map_one_to_many]` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:168` | Self: 0.0% (0us) | Total: 1.2% (2.92s) | Samples: 0

**Calls:**
- `_next` (2)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:703` | Self: 0.0% (0us) | Total: 0.0% (27.5ms) | Samples: 0

**Calls:**
- `padStart` (1)

### `findContours`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (227.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (204)

**Calls:**
- `(unknown)` (204)

### `internal:streams/destroy`
`internal:streams/destroy:2` | Self: 0.0% (0us) | Total: 0.0% (935us) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `internal:streams/pipeline`
`internal:streams/pipeline:2` | Self: 0.0% (0us) | Total: 0.0% (2.8ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `anonymous` (3)

### `detectHorizontalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:462` | Self: 0.0% (0us) | Total: 0.0% (31.7ms) | Samples: 0

**Called by:**
- `async cropTableRows` (28)

**Calls:**
- `(anonymous)` (28)

### `mupdf-wasm.wasm.wasm-function[pdf_run_S]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (62.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (56)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_path]` (56)

### `async _route`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:40` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async _route` (1)

**Calls:**
- `async invoke` (1)

### `bound int`
`[native code]` | Self: 0.0% (0us) | Total: 0.8% (1.91s) | Samples: 0

**Called by:**
- `async cropper` (3)
- `async cropper` (2)

**Calls:**
- `int` (4)
- `bound check` (1)

### `mupdf-wasm.wasm.wasm-function[gmtime]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (7.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[lcms2mt_cmsCreateProfilePlaceholder]` (7)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[do_tzset]` (7)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/internal/re.js:121` | Self: 0.0% (0us) | Total: 0.0% (842us) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `createToken` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:157` | Self: 0.0% (0us) | Total: 0.3% (722.7ms) | Samples: 0

**Called by:**
- `async run` (13)

**Calls:**
- `async pRetry` (13)

### `mupdf-wasm.wasm.wasm-function[fz_transform_pixmap]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.9ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_fill_image]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_scale_pixmap_cached]` (2)

### `mupdf-wasm.wasm.wasm-function[FT_Set_Char_Size]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_render_ft_glyph]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[tt_size_request]` (1)

### `async cropAndZoom`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:17` | Self: 0.0% (0us) | Total: 0.1% (288.1ms) | Samples: 0

**Called by:**
- `async cropAndZoom` (4)

**Calls:**
- `Sharp` (2)
- `metadata` (2)

### `toBuffer`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:159` | Self: 0.0% (0us) | Total: 0.0% (6.4ms) | Samples: 0

**Called by:**
- `async compressImage` (1)
- `async cropAndZoom` (1)

**Calls:**
- `Error` (2)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/utility.mjs:128` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `cache` (1)

### `e`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `_` (1)

**Calls:**
- `wasm-stub` (1)

### `mupdf-wasm.wasm.wasm-function[fz_stroke_lineto_aux]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_stroke_bezier]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_add_line_join]` (1)

### `flatIntoArrayWithCallback`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (31.9ms) | Samples: 0

**Called by:**
- `async _generate` (3)

**Calls:**
- `(anonymous)` (2)
- `(anonymous)` (1)

### `bound optional`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async cropper` (1)

**Calls:**
- `optional` (1)

### `internal:shared`
`internal:shared:2` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `asPNG`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:1045` | Self: 0.0% (0us) | Total: 0.4% (1.14s) | Samples: 0

**Called by:**
- `async convertPdfToImages` (1002)

**Calls:**
- `wasm-stub` (1002)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:37` | Self: 0.0% (0us) | Total: 0.0% (10.7ms) | Samples: 0

**Called by:**
- `run` (9)

**Calls:**
- `async classifyImage` (3)
- `async func` (2)
- `async classifyImage` (1)
- `async func` (1)
- `async _getUpdates` (1)
- `async func` (1)

### `node:worker_threads`
`node:worker_threads:206` | Self: 0.0% (0us) | Total: 0.0% (24.3ms) | Samples: 0

**Calls:**
- `anonymous` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:13` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1172` | Self: 0.0% (0us) | Total: 0.0% (5.2ms) | Samples: 0

**Called by:**
- `async detectAndCropBbs` (5)

**Calls:**
- `async invoke` (5)

### `mupdf-wasm.wasm.wasm-function[pdf_run_BDC]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[push_marked_content]` (1)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:155` | Self: 0.0% (0us) | Total: 3.6% (8.47s) | Samples: 0

**Called by:**
- `async cropBbsRows` (7889)

**Calls:**
- `(anonymous)` (7889)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:76` | Self: 0.0% (0us) | Total: 0.8% (1.84s) | Samples: 0

**Calls:**
- `async extract` (1)

### `interopZodObjectStrict`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:315` | Self: 0.0% (0us) | Total: 0.0% (12.7ms) | Samples: 0

**Called by:**
- `toJsonSchema` (1)

**Calls:**
- `_never` (1)

### `async classifyImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:61` | Self: 0.0% (0us) | Total: 0.0% (3.5ms) | Samples: 0

**Calls:**
- `async withRetry` (2)
- `async withRetry` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:518` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `init` (1)

### `createToken`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/internal/re.js:49` | Self: 0.0% (0us) | Total: 0.0% (842us) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `RegExp` (1)

### `async _generate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:269` | Self: 0.0% (0us) | Total: 0.0% (31.9ms) | Samples: 0

**Called by:**
- `async _generate` (3)

**Calls:**
- `flatIntoArrayWithCallback` (3)

### `async stream`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:121` | Self: 0.0% (0us) | Total: 0.0% (4.3ms) | Samples: 0

**Called by:**
- `async stream` (4)

**Calls:**
- `AsyncGeneratorWithSetup` (4)

### `extract`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:482` | Self: 0.0% (0us) | Total: 0.2% (658.8ms) | Samples: 0

**Called by:**
- `async cropTableRows` (1)
- `async cropAndZoom` (1)

**Calls:**
- `isResizeExpected` (2)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:83` | Self: 0.0% (0us) | Total: 0.0% (65.3ms) | Samples: 0

**Called by:**
- `async invoke` (2)

**Calls:**
- `_convertInputToPromptValue` (2)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:37` | Self: 0.0% (0us) | Total: 0.0% (15.0ms) | Samples: 0

**Called by:**
- `async invoke` (13)

**Calls:**
- `run` (9)
- `runWithConfig` (4)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:45` | Self: 0.0% (0us) | Total: 1.4% (3.37s) | Samples: 0

**Called by:**
- `async (anonymous)` (3)

**Calls:**
- `async (anonymous)` (2)
- `async (anonymous)` (1)

### `mupdf-wasm.wasm.wasm-function[fz_opj_info_callback]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `mupdf-wasm.wasm.wasm-function[emscripten_builtin_realloc]` (1)

### `async func`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:29` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `async (anonymous)` (1)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:708` | Self: 0.0% (0us) | Total: 0.0% (10.5ms) | Samples: 0

**Calls:**
- `extract` (1)

### `async createDebugImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:796` | Self: 0.0% (0us) | Total: 0.0% (45.1ms) | Samples: 0

**Calls:**
- `composite` (1)

### `async tick`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:458` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async tick` (1)

**Calls:**
- `_applyWrites` (1)

### `bound check`
`[native code]` | Self: 0.0% (0us) | Total: 0.8% (1.90s) | Samples: 0

**Called by:**
- `bound min` (2)
- `bound max` (1)
- `bound int` (1)

**Calls:**
- `bound clone` (3)
- `check` (1)

### `mupdf-wasm.wasm.wasm-function[tt_face_get_metrics]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[load_truetype_glyph]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[FT_Stream_ReadUShort]` (1)

### `async _generateUncached`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:316` | Self: 0.0% (0us) | Total: 4.5% (10.41s) | Samples: 0

**Calls:**
- `map` (3)
- `all` (1)

### `async stream`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:924` | Self: 0.0% (0us) | Total: 0.0% (5.2ms) | Samples: 0

**Called by:**
- `async invoke` (5)

**Calls:**
- `async stream` (4)
- `async stream` (1)

### `async func`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:291` | Self: 0.0% (0us) | Total: 2.4% (5.54s) | Samples: 0

**Called by:**
- `async call` (10)

**Calls:**
- `Promise` (10)

### `async cropAndZoom`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:58` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Calls:**
- `Sharp` (2)

### `mupdf-wasm.wasm.wasm-function[pdf_run_page_with_usage]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (196.9ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_new_pixmap_from_page_with_separations_and_usage]` (115)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_page_contents_with_usage_imp]` (115)

### `_outputWrites`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:410` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `putWrites` (1)

**Calls:**
- `gatherIteratorSync` (1)

### `async cropBbsRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:869` | Self: 0.0% (0us) | Total: 0.4% (1.10s) | Samples: 0

**Calls:**
- `async cropTableRows` (1)

### `__embind_register_class_function`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (9.8ms) | Samples: 0

**Called by:**
- `wasm-stub` (9)

**Calls:**
- `whenDependentTypesAreResolved` (7)
- `embind__requireFunction` (2)

### `mupdf-wasm.wasm.wasm-function[load_ui]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_select_layer_config]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[count_entries]` (1)

### `async cropAndZoom`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:44` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `greyscale` (1)

### `getWasmTableEntry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `makeDynCaller` (2)

**Calls:**
- `get` (2)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:91` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Calls:**
- `tool` (2)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:299` | Self: 0.0% (0us) | Total: 0.0% (866us) | Samples: 0

**Called by:**
- `async cropBbsRows` (1)

**Calls:**
- `Mat.roi` (1)

### `async cropAndZoom`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:43` | Self: 0.0% (0us) | Total: 0.2% (649.7ms) | Samples: 0

**Calls:**
- `extract` (1)
- `extract` (1)

### `familySync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/detect-libc.js:188` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `isNonGlibcLinuxSync` (1)

**Calls:**
- `familyFromInterpreterSync` (1)

### `methodCaller<(emscripten::memory_view<unsigned char>) => emscripten::val>`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (62.4ms) | Samples: 0

**Called by:**
- `__emval_invoke` (2)

**Calls:**
- `bound decodeMemoryView` (2)

### `mupdf-wasm.wasm.wasm-function[fz_read_best]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_image_stream]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_read]` (2)

### `async convertPdfToImages`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:85` | Self: 0.0% (0us) | Total: 0.0% (3.1ms) | Samples: 0

**Called by:**
- `(module)` (2)

**Calls:**
- `writeFileSync` (1)
- `(anonymous)` (1)

### `async pRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js:124` | Self: 0.0% (0us) | Total: 0.2% (686.0ms) | Samples: 0

**Called by:**
- `async pRetry` (11)

**Calls:**
- `(anonymous)` (11)

### `mupdf-wasm.wasm.wasm-function[pdf_load_type0_font]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (7.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_font]` (6)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[load_cid_font]` (6)

### `patchConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js:128` | Self: 0.0% (0us) | Total: 0.0% (26.7ms) | Samples: 0

**Called by:**
- `async invoke` (1)
- `(anonymous)` (1)

**Calls:**
- `ensureConfig` (2)

### `mupdf-wasm.wasm.wasm-function[pdf_show_image_imp]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (10.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_image]` (7)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_fill_image]` (7)

### `mupdf-wasm.wasm.wasm-function[pdf_array_len]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (907us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[load_cid_font]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect_chain]` (1)

### `initRuntime`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (48.1ms) | Samples: 0

**Called by:**
- `doRun` (43)

**Calls:**
- `wasm-stub` (42)
- `init` (1)

### `interopZodObjectStrict`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:312` | Self: 0.0% (0us) | Total: 0.0% (988us) | Samples: 0

**Called by:**
- `toJsonSchema` (1)

**Calls:**
- `clone` (1)

### `StructuredTool`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:68` | Self: 0.0% (0us) | Total: 0.0% (937us) | Samples: 0

**Called by:**
- `DynamicStructuredTool` (1)

**Calls:**
- `BaseLangChain` (1)

### `initializeAsyncLocalStorageSingleton`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/node.js:5` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `initializeGlobalInstance` (1)

### `_prepareSingleTask`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:555` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `_prepareNextTasks` (1)

**Calls:**
- `_scratchpad` (1)

### `initializeSax`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/sax-js/sax.js:520` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `forEach` (1)

### `finalize`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:295` | Self: 0.0% (0us) | Total: 0.0% (866us) | Samples: 0

**Called by:**
- `toJsonSchema` (1)

**Calls:**
- `performIteration` (1)

### `getLsParams`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:252` | Self: 0.0% (0us) | Total: 0.0% (144.7ms) | Samples: 0

**Called by:**
- `getLsParamsWithDefaults` (16)

**Calls:**
- `invocationParams` (14)
- `invocationParams` (2)

### `readPointer`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `bound readPointer` (1)

**Calls:**
- `RegisteredPointer_fromWireType` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:170` | Self: 0.0% (0us) | Total: 0.0% (68.1ms) | Samples: 0

**Calls:**
- `async withRetry` (2)

### `R`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.0% (12.4ms) | Samples: 0

**Called by:**
- `Z` (4)
- `_` (2)

**Calls:**
- `Int8Array` (6)

### `mupdf-wasm.wasm.wasm-function[fz_load_page]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[wasm_load_page]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_page_imp]` (1)

### `mupdf-wasm.wasm.wasm-function[fz_realloc_default]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[do_scavenging_realloc]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[emscripten_builtin_realloc]` (1)

### `async classifyImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:26` | Self: 0.0% (0us) | Total: 0.0% (3.6ms) | Samples: 0

**Called by:**
- `async classifyImage` (3)

**Calls:**
- `async compressImage` (3)

### `constructor Mat`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (102.2ms) | Samples: 0

**Called by:**
- `Mat` (2)

**Calls:**
- `bound RegisteredPointer_fromWireType` (2)

### `async _generate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:272` | Self: 0.0% (0us) | Total: 0.3% (768.3ms) | Samples: 0

**Called by:**
- `async _generate` (17)

**Calls:**
- `async add` (15)
- `callWithOptions` (2)

### `async cropAndZoom`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:49` | Self: 0.0% (0us) | Total: 4.9% (11.36s) | Samples: 0

**Calls:**
- `reduce` (23)

### `.wasm-function[390]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (156.7ms) | Samples: 0

**Called by:**
- `.wasm-function[11624]` (143)

**Calls:**
- `.wasm-function[68]` (143)

### `interopZodTransformInputSchemaImpl`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:405` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Called by:**
- `toJsonSchema` (2)

**Calls:**
- `interopZodTransformInputSchemaImpl` (1)
- `interopZodTransformInputSchemaImpl` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:111` | Self: 0.0% (0us) | Total: 1.7% (4.12s) | Samples: 0

**Calls:**
- `_string` (2)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:316` | Self: 0.0% (0us) | Total: 2.4% (5.64s) | Samples: 0

**Called by:**
- `map` (3)

**Calls:**
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `async (anonymous)` (1)

### `async stream`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:119` | Self: 0.0% (0us) | Total: 0.0% (4.3ms) | Samples: 0

**Called by:**
- `async stream` (4)

**Calls:**
- `async stream` (4)

### `async _executeTasksWithRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:139` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `async tick` (2)

**Calls:**
- `async _runWithRetry` (2)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:936` | Self: 0.0% (0us) | Total: 15.7% (36.13s) | Samples: 0

**Calls:**
- `async invoke` (1)
- `async invoke` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/classes/comparator.js:138` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `async mapBatched`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:86` | Self: 0.0% (0us) | Total: 17.4% (40.15s) | Samples: 0

**Called by:**
- `async mapBatched` (1)

**Calls:**
- `map` (9)

### `_int`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:324` | Self: 0.0% (0us) | Total: 0.0% (14.6ms) | Samples: 0

**Called by:**
- `int` (4)

**Calls:**
- `ZodNumberFormat` (3)
- `ZodNumberFormat` (1)

### `mupdf-wasm.wasm.wasm-function[fz_decomp_image_from_stream]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (5.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[compressed_image_get_pixmap]` (4)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_read]` (4)

### `mupdf-wasm.wasm.wasm-function[emscripten_builtin_free]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[emscripten_builtin_realloc]` (1)

**Calls:**
- `wasm-stub` (1)

### `mupdf-wasm.wasm.wasm-function[begin_metatext]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[push_marked_content]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_dict_get]` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_lex]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_stream]` (2)
- `mupdf-wasm.wasm.wasm-function[pdf_parse_ind_obj_or_newobj]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[lex_number]` (2)
- `mupdf-wasm.wasm.wasm-function[lex_name]` (1)

### `_filterInvocationParamsForTracing`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:279` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Called by:**
- `async _generateUncached` (1)

**Calls:**
- `copyDataProperties` (1)

### `emptyCheckpoint`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph-checkpoint/dist/base.js:15` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async initialize` (1)

**Calls:**
- `v6` (1)

### `mupdf-wasm.wasm.wasm-function[fz_write_band]`
`[native code]` | Self: 0.0% (0us) | Total: 0.4% (1.14s) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_write_pixmap_as_png]` (1002)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[png_write_band]` (1002)

### `async detectAndCropBbs`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:118` | Self: 0.0% (0us) | Total: 0.0% (6.1ms) | Samples: 0

**Called by:**
- `(module)` (6)

**Calls:**
- `async detectAndCropBbs` (5)
- `async detectAndCropBbs` (1)

### `mupdf-wasm.wasm.wasm-function[stroke_curveto]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_walk_path]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_stroke_bezier]` (1)

### `mupdf-wasm.wasm.wasm-function[ft_smooth_render]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (7.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[FT_Render_Glyph_Internal]` (6)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[gray_raster_render]` (6)

### `k`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.0% (7.4ms) | Samples: 0

**Called by:**
- `wasm-stub` (7)

**Calls:**
- `getFullYear` (7)

### `mupdf-wasm.wasm.wasm-function[pdf_show_image]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (10.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_Do_image]` (7)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_image_imp]` (7)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:276` | Self: 0.0% (0us) | Total: 0.0% (155.2ms) | Samples: 0

**Called by:**
- `async (anonymous)` (8)

**Calls:**
- `stringify` (8)

### `async finishAndHandleError`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:528` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `async _runLoop` (1)

**Calls:**
- `async finishAndHandleError` (1)

### `async doWrite`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:66` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `async doWrite` (1)

**Calls:**
- `async invoke` (1)

### `mupdf-wasm.wasm.wasm-function[fz_calloc]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (69.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_new_run_processor]` (5)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[do_scavenging_malloc]` (5)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:171` | Self: 0.0% (0us) | Total: 0.3% (725.0ms) | Samples: 0

**Called by:**
- `Promise` (15)

**Calls:**
- `_tryToStartAnother` (14)
- `_tryToStartAnother` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:34` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `_number` (1)

### `async cropAndZoom`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:11` | Self: 0.0% (0us) | Total: 0.1% (288.1ms) | Samples: 0

**Called by:**
- `async (anonymous)` (4)

**Calls:**
- `async cropAndZoom` (4)

### `.wasm-function[14700]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (69.0ms) | Samples: 0

**Called by:**
- `wasm-stub` (63)

**Calls:**
- `.wasm-function[9595]` (63)

### `mupdf-wasm.wasm.wasm-function[pdf_parse_array]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_parse_dict]` (2)
- `mupdf-wasm.wasm.wasm-function[pdf_parse_ind_obj_or_newobj]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_array_push_int]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_parse_dict]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_new_array]` (1)

### `.wasm-function[1530]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `.wasm-function[10719]` (1)

**Calls:**
- `.wasm-function[444]` (1)

### `mupdf-wasm.wasm.wasm-function[fz_md5_final]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_md5_buffer]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[body]` (1)

### `interopZodTransformInputSchemaImpl`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:406` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `toJsonSchema` (1)

**Calls:**
- `clone` (1)

### `objectProcessor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:280` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `process` (1)

**Calls:**
- `get` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_show_path]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (62.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_S]` (56)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_stroke_path]` (55)
- `mupdf-wasm.wasm.wasm-function[fz_do_catch]` (1)

### `async stream`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:939` | Self: 0.0% (0us) | Total: 0.0% (4.3ms) | Samples: 0

**Called by:**
- `async stream` (4)

**Calls:**
- `async stream` (4)

### `mupdf-wasm.wasm.wasm-function[pdf_process_raw_contents]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (127.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_contents]` (110)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_stream]` (110)

### `finalize`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:296` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `toJsonSchema` (1)

**Calls:**
- `flattenRef` (1)

### `findWasmBinary`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (31.8ms) | Samples: 0

**Called by:**
- `async createWasm` (29)

**Calls:**
- `binaryDecode` (25)
- `binaryDecode` (4)

### `.wasm-function[68]`
`[native code]` | Self: 0.0% (0us) | Total: 0.1% (246.1ms) | Samples: 0

**Called by:**
- `.wasm-function[390]` (143)
- `.wasm-function[510]` (79)

**Calls:**
- `.wasm-function[9672]` (143)
- `.wasm-function[8596]` (79)

### `node:stream`
`node:stream:2` | Self: 0.0% (0us) | Total: 0.0% (3.7ms) | Samples: 0

**Calls:**
- `anonymous` (4)

### `internal:util/inspect`
`internal:util/inspect:2` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:302` | Self: 0.0% (0us) | Total: 0.0% (19.1ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (17)

**Calls:**
- `countNonZero` (17)

### `mupdf-wasm.wasm.wasm-function[pdf_new_pixmap_from_page_with_separations_and_usage]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (196.9ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[wasm_pdf_new_pixmap_from_page_with_usage]` (115)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_page_with_usage]` (115)

### `async _runLoop`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1204` | Self: 0.0% (0us) | Total: 0.0% (4.4ms) | Samples: 0

**Called by:**
- `async _runLoop` (3)

**Calls:**
- `async tick` (3)
- `async tick` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:21` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `(anonymous)` (1)

### `.wasm-function[2904]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `.wasm-function[581]` (1)

**Calls:**
- `.wasm-function[1941]` (1)

### `mupdf-wasm.wasm.wasm-function[tt_size_request]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[FT_Set_Char_Size]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[FT_DivFix]` (1)

### `require`
`[native code]` | Self: 0.0% (0us) | Total: 0.4% (1.06s) | Samples: 0

**Called by:**
- `bound require` (19)

**Calls:**
- `anonymous` (18)
- `get` (1)

### `PQueue`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:15` | Self: 0.0% (0us) | Total: 0.0% (14.6ms) | Samples: 0

**Called by:**
- `AsyncCaller` (1)

**Calls:**
- `EventEmitter` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_load_page_imp]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_load_page]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_lookup_page_obj]` (1)

### `__embind_register_class`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (3.2ms) | Samples: 0

**Called by:**
- `wasm-stub` (3)

**Calls:**
- `whenDependentTypesAreResolved` (3)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/extractSchema.ts:71` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Calls:**
- `bound describe` (1)

### `async _runWithRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/retry.js:26` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `async _executeTasksWithRetry` (2)

**Calls:**
- `async _runWithRetry` (1)
- `async _runWithRetry` (1)

### `convertCompletionsMessageToBaseMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:183` | Self: 0.0% (0us) | Total: 2.8% (6.60s) | Samples: 0

**Called by:**
- `convertOpenRouterResponseToBaseMessage` (5)

**Calls:**
- `AIMessage` (2)
- `AIMessage` (2)
- `AIMessage` (1)

### `mupdf-wasm.wasm.wasm-function[deflate]`
`[native code]` | Self: 0.0% (0us) | Total: 0.3% (901.9ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[png_write_band]` (802)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[deflate_slow]` (802)

### `mupdf-wasm.wasm.wasm-function[crc32]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[putchunk]` (3)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[crc32_z]` (3)

### `mupdf-wasm.wasm.wasm-function[fz_stroke_bezier]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.5ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_stroke_bezier]` (1)
- `mupdf-wasm.wasm.wasm-function[stroke_curveto]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_stroke_lineto_aux]` (1)
- `mupdf-wasm.wasm.wasm-function[fz_stroke_bezier]` (1)

### `runtimeLibc`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/libvips.mjs:39` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `runtimePlatformArch` (1)

**Calls:**
- `isNonGlibcLinuxSync` (1)

### `async tick`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:487` | Self: 0.0% (0us) | Total: 0.0% (4.4ms) | Samples: 0

**Calls:**
- `_prepareNextTasks` (4)

### `.wasm-function[11668]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (30.6ms) | Samples: 0

**Called by:**
- `.wasm-function[1293]` (28)

**Calls:**
- `.wasm-function[466]` (28)

### `async _write`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:36` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `async func` (2)

**Calls:**
- `async _write` (2)

### `literal`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1043` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `ZodLiteral` (1)

### `mupdf-wasm.wasm.wasm-function[fz_write_data]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[putchunk]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[buffer_write]` (1)

### `Z`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.0% (73.3ms) | Samples: 0

**Called by:**
- `h` (6)

**Calls:**
- `R` (4)
- `grow` (2)

### `WritableState`
`internal:streams/writable:152` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `Duplex` (1)

**Calls:**
- `resetBuffer` (1)

### `.wasm-function[15702]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (49.9ms) | Samples: 0

**Called by:**
- `.wasm-function[674]` (44)

**Calls:**
- `.wasm-function[1260]` (44)

### `mupdf-wasm.wasm.wasm-function[pdf_array_push_int]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (907us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_parse_array]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_malloc]` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:92` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `_installLazyMethods` (1)

### `bound describe`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `describe` (1)

### `putWrites`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:390` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `_commit` (1)

**Calls:**
- `_outputWrites` (1)

### `toJsonSchema`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/json_schema.js:47` | Self: 0.0% (0us) | Total: 0.0% (3.5ms) | Samples: 0

**Called by:**
- `convertToOpenAIFunction` (3)

**Calls:**
- `interopZodTransformInputSchemaImpl` (2)
- `interopZodTransformInputSchemaImpl` (1)

### `mergeDefs`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:98` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `check` (1)

**Calls:**
- `getOwnPropertyDescriptors` (1)

### `async instantiateArrayBuffer`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (16.3ms) | Samples: 0

**Calls:**
- `instantiate` (16)

### `Serializable`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/serializable.js:82` | Self: 0.0% (0us) | Total: 0.0% (32.2ms) | Samples: 0

**Called by:**
- `BaseMessage` (1)

**Calls:**
- `(anonymous)` (1)

### `mupdf-wasm.wasm.wasm-function[fz_ensure_buffer]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_append_data]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_resize_buffer]` (1)

### `async convertPdfToImages`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:34` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `openDocument` (1)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:690` | Self: 0.0% (0us) | Total: 0.1% (331.7ms) | Samples: 0

**Calls:**
- `Sharp` (8)
- `Sharp` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:304` | Self: 0.0% (0us) | Total: 2.4% (5.53s) | Samples: 0

**Called by:**
- `Promise` (9)

**Calls:**
- `runWithConfig` (5)
- `run` (4)

### `_emscripten_resize_heap`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `wasm-stub` (3)

**Calls:**
- `growMemory` (3)

### `mupdf-wasm.wasm.wasm-function[fz_append_data]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[buffer_write]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_ensure_buffer]` (1)

### `node:path`
`node:path:2` | Self: 0.0% (0us) | Total: 0.0% (3.5ms) | Samples: 0

**Calls:**
- `anonymous` (2)

### `generatorResume`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `gatherIteratorSync` (1)
- `prefixGenerator` (1)

**Calls:**
- `mapOutputUpdates` (1)
- `prefixGenerator` (1)

### `internal:promisify`
`internal:promisify:53` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `prefixGenerator`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:44` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `generatorResume` (1)

**Calls:**
- `generatorResume` (1)

### `bound max`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `bound check` (1)

### `async withRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:31` | Self: 0.0% (0us) | Total: 0.0% (70.3ms) | Samples: 0

**Called by:**
- `async classifyImage` (2)
- `async cropper` (2)

**Calls:**
- `async withRetry` (4)

### `mupdf-wasm.wasm.wasm-function[pdf_parse_dict]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (4.7ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_parse_ind_obj_or_newobj]` (2)
- `mupdf-wasm.wasm.wasm-function[pdf_parse_array]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_parse_dict]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_parse_array]` (2)
- `mupdf-wasm.wasm.wasm-function[pdf_new_name]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_parse_dict]` (1)

### `mupdf-wasm.wasm.wasm-function[fz_convert_rasterizer]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (58.9ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_stroke_path_aux]` (53)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_convert_gel]` (53)

### `.wasm-function[3389]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (4.3ms) | Samples: 0

**Called by:**
- `.wasm-function[16862]` (2)

**Calls:**
- `wasm-stub` (2)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:28` | Self: 0.0% (0us) | Total: 0.0% (189.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (176)

**Calls:**
- `async (anonymous)` (176)

### `compile`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:439` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `_compileResolved` (1)

### `runWithConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js:29` | Self: 0.0% (0us) | Total: 0.2% (495.8ms) | Samples: 0

**Called by:**
- `(anonymous)` (5)
- `async invoke` (4)

**Calls:**
- `RunTree` (2)
- `RunTree` (1)
- `RunTree` (1)
- `RunTree` (1)
- `RunTree` (1)
- `RunTree` (1)
- `RunTree` (1)
- `RunTree` (1)

### `mupdf-wasm.wasm.wasm-function[fz_new_buffer_from_pixmap_as_png]`
`[native code]` | Self: 0.0% (0us) | Total: 0.4% (1.14s) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[wasm_new_buffer_from_pixmap_as_png]` (1002)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[png_from_pixmap]` (1002)

### `async _runLoop`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1200` | Self: 0.0% (0us) | Total: 0.0% (3.2ms) | Samples: 0

**Called by:**
- `async (anonymous)` (3)

**Calls:**
- `async _runLoop` (3)

### `.wasm-function[10719]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `.wasm-function[4341]` (1)

**Calls:**
- `.wasm-function[1530]` (1)

### `RunTree`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:173` | Self: 0.0% (0us) | Total: 0.0% (89.4ms) | Samples: 0

**Called by:**
- `runWithConfig` (1)

**Calls:**
- `defineProperty` (1)

### `doRun`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (48.1ms) | Samples: 0

**Called by:**
- `run` (43)

**Calls:**
- `initRuntime` (43)

### `async _validateResult`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:147` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Calls:**
- `async _validateResult` (2)

### `normalizeDef`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:750` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `get value` (1)

**Calls:**
- `optionalKeys` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:926` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async _runWithRetry` (1)

**Calls:**
- `async invoke` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/base.js:43` | Self: 0.0% (0us) | Total: 15.7% (36.13s) | Samples: 0

**Called by:**
- `async invoke` (1)

**Calls:**
- `async _callWithConfig` (1)

### `attachNode`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:564` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `_compileResolved` (1)

**Calls:**
- `map` (1)

### `mupdf-wasm.wasm.wasm-function[fz_draw_stroke_path]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (61.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_stroke_path]` (55)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_stroke_path_aux]` (55)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:519` | Self: 0.0% (0us) | Total: 0.0% (975us) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `init` (1)

### `receiveInstantiationResult`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (7.6ms) | Samples: 0

**Called by:**
- `async createWasm` (1)

**Calls:**
- `receiveInstance` (1)

### `mupdf-wasm.wasm.wasm-function[FT_Render_Glyph_Internal]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (7.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_render_ft_glyph]` (6)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[ft_smooth_render]` (6)

### `RunTree`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:359` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `runWithConfig` (1)

**Calls:**
- `_ensureWriteReplicas` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:81` | Self: 0.0% (0us) | Total: 0.0% (980us) | Samples: 0

**Calls:**
- `log` (1)

### `bound readPointer`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `methodCaller<(Mat) => emscripten::val>` (1)

**Calls:**
- `readPointer` (1)

### `extract`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:486` | Self: 0.0% (0us) | Total: 0.0% (31.9ms) | Samples: 0

**Called by:**
- `async cropTableRows` (1)
- `async cropAndZoom` (1)

**Calls:**
- `forEach` (2)

### `mupdf-wasm.wasm.wasm-function[FT_Load_Glyph]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.5ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_render_ft_glyph]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[ft_raster1_transform]` (1)
- `mupdf-wasm.wasm.wasm-function[tt_glyph_load]` (1)

### `.wasm-function[182]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `.wasm-function[12008]` (3)

**Calls:**
- `.wasm-function[1199]` (3)

### `async compressImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:23` | Self: 0.0% (0us) | Total: 0.0% (5.9ms) | Samples: 0

**Calls:**
- `_pipeline` (5)
- `toBuffer` (1)

### `getDefaultProjectName`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/project.js:3` | Self: 0.0% (0us) | Total: 0.0% (201.8ms) | Samples: 0

**Called by:**
- `getDefaultConfig` (1)

**Calls:**
- `getLangSmithEnvironmentVariable` (1)

### `async _runLoop`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1231` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Calls:**
- `async finishAndHandleError` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:150` | Self: 0.0% (0us) | Total: 4.5% (10.51s) | Samples: 0

**Calls:**
- `async invoke` (8)
- `async invoke` (1)

### `receiveInstance`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (7.6ms) | Samples: 0

**Called by:**
- `receiveInstantiationResult` (1)

**Calls:**
- `assignWasmExports` (1)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:248` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (2)

**Calls:**
- `MatVector.size` (2)

### `mupdf-wasm.wasm.wasm-function[pdf_run_EMC]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pop_marked_content]` (1)

### `callWithOptions`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js:204` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `async _generate` (2)

**Calls:**
- `async add` (2)

### `detectHorizontalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:457` | Self: 0.0% (0us) | Total: 0.0% (986us) | Samples: 0

**Called by:**
- `async cropTableRows` (1)

**Calls:**
- `Mat` (1)

### `createStandardStreams`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `open` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/index.cjs:1` | Self: 0.0% (0us) | Total: 0.0% (5.4ms) | Samples: 0

**Calls:**
- `bound require` (4)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:28` | Self: 0.0% (0us) | Total: 0.0% (8.4ms) | Samples: 0

**Calls:**
- `wasm-stub` (8)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:4` | Self: 0.0% (0us) | Total: 0.4% (1.04s) | Samples: 0

**Calls:**
- `bound require` (2)

### `mupdf-wasm.wasm.wasm-function[emscripten_builtin_malloc]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (73.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_malloc_default]` (5)
- `mupdf-wasm.wasm.wasm-function[emscripten_builtin_realloc]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[sbrk]` (5)
- `wasm-stub` (1)

### `.wasm-function[444]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `.wasm-function[1530]` (1)

**Calls:**
- `.wasm-function[280]` (1)

### `mupdf-wasm.wasm.wasm-function[fz_flatten_stroke_path]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_stroke_path_aux]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_reset_rasterizer]` (1)
- `mupdf-wasm.wasm.wasm-function[do_flatten_stroke]` (1)

### `v1`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/v1.js:12` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `v6` (1)

**Calls:**
- `v1Bytes` (1)

### `ZodDefault`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `clone` (1)

**Calls:**
- `init` (1)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:215` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (1)

**Calls:**
- `Point` (1)

### `.wasm-function[11526]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (111.6ms) | Samples: 0

**Called by:**
- `.wasm-function[4377]` (99)

**Calls:**
- `.wasm-function[635]` (99)

### `DynamicStructuredTool`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:236` | Self: 0.0% (0us) | Total: 0.0% (937us) | Samples: 0

**Called by:**
- `tool` (1)

**Calls:**
- `StructuredTool` (1)

### `node:util`
`node:util:2` | Self: 0.0% (0us) | Total: 0.0% (30.6ms) | Samples: 0

**Calls:**
- `anonymous` (3)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:976` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `get value` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/parse.js:20` | Self: 0.0% (0us) | Total: 1.6% (3.89s) | Samples: 0

**Called by:**
- `async (anonymous)` (6)

**Calls:**
- `(anonymous)` (5)
- `(anonymous)` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:108` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `addConditionalEdges` (1)

### `mupdf-wasm.wasm.wasm-function[emscripten_builtin_realloc]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (4.6ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_opj_info_callback]` (1)
- `mupdf-wasm.wasm.wasm-function[fz_realloc_default]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[emscripten_builtin_malloc]` (1)
- `mupdf-wasm.wasm.wasm-function[emscripten_builtin_free]` (1)

### `async cropAndZoom`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:73` | Self: 0.0% (0us) | Total: 1.4% (3.31s) | Samples: 0

**Calls:**
- `_pipeline` (2)
- `toBuffer` (1)

### `async interopSafeParseAsync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:65` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Called by:**
- `async _validateResult` (2)

**Calls:**
- `async interopSafeParseAsync` (2)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:43` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `_`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.0% (8.9ms) | Samples: 0

**Called by:**
- `async (anonymous)` (3)

**Calls:**
- `R` (2)
- `e` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/parse.js:62` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Calls:**
- `_encode` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:927` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async invoke` (1)

**Calls:**
- `ensureConfig` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:32` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `RunTree`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:345` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `runWithConfig` (1)

**Calls:**
- `getMicrosecondPrecisionDatestring` (1)

### `interopZodTransformInputSchemaImpl`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:418` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `interopZodTransformInputSchemaImpl` (1)

**Calls:**
- `clone` (1)

### `async loadImageForOpenCV`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:68` | Self: 0.0% (0us) | Total: 0.0% (842us) | Samples: 0

**Called by:**
- `async cropBbsRows` (1)

**Calls:**
- `async loadImageForOpenCV` (1)

### `get value`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:34` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `normalizeDef` (1)

### `BaseLangChain`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:137` | Self: 0.0% (0us) | Total: 0.0% (937us) | Samples: 0

**Called by:**
- `StructuredTool` (1)

**Calls:**
- `getVerbosity` (1)

### `ChatOpenRouter`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:154` | Self: 0.0% (0us) | Total: 0.1% (333.2ms) | Samples: 0

**Called by:**
- `async cropper` (6)
- `async classifyImage` (1)

**Calls:**
- `BaseChatModel` (5)
- `BaseChatModel` (1)
- `(anonymous)` (1)

### `mupdf-wasm.wasm.wasm-function[open_face]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[FT_New_Memory_Face]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[tt_face_init]` (1)

### `async initialize`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:273` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async initialize` (1)

**Calls:**
- `emptyCheckpoint` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js:133` | Self: 0.0% (0us) | Total: 0.0% (4.3ms) | Samples: 0

**Called by:**
- `Promise` (4)

**Calls:**
- `async (anonymous)` (3)
- `runWithConfig` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:170` | Self: 0.0% (0us) | Total: 0.0% (993us) | Samples: 0

**Called by:**
- `Promise` (1)

**Calls:**
- `enqueue` (1)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:182` | Self: 0.0% (0us) | Total: 3.2% (7.53s) | Samples: 0

**Called by:**
- `async cropBbsRows` (6914)

**Calls:**
- `(anonymous)` (6914)

### `async tick`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:476` | Self: 0.0% (0us) | Total: 0.0% (879us) | Samples: 0

**Calls:**
- `_emitValuesWithCheckpointMeta` (1)

### `Mat`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (102.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)
- `detectHorizontalLines` (1)

**Calls:**
- `constructor Mat` (2)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:252` | Self: 0.0% (0us) | Total: 0.0% (3.4ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (3)

**Calls:**
- `MatVector.get` (3)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:596` | Self: 0.0% (0us) | Total: 0.4% (1.10s) | Samples: 0

**Called by:**
- `async cropBbsRows` (1)

**Calls:**
- `async cropTableRows` (1)

### `run`
`node:async_hooks:99` | Self: 0.0% (0us) | Total: 2.2% (5.05s) | Samples: 0

**Called by:**
- `async invoke` (9)
- `(anonymous)` (4)

**Calls:**
- `async (anonymous)` (9)
- `async (anonymous)` (4)

### `mupdf-wasm.wasm.wasm-function[pdf_is_ocg_hidden]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_is_ocg_hidden_imp]` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:103` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Calls:**
- `bound min` (1)

### `.wasm-function[585]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `.wasm-function[584]` (3)

**Calls:**
- `.wasm-function[280]` (3)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1102` | Self: 0.0% (0us) | Total: 0.0% (3.2ms) | Samples: 0

**Calls:**
- `async _runLoop` (3)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:1820` | Self: 0.0% (0us) | Total: 0.0% (3.4ms) | Samples: 0

**Called by:**
- `(anonymous)` (3)

**Calls:**
- `(anonymous)` (2)
- `(anonymous)` (1)

### `internal:streams/operators`
`internal:streams/operators:2` | Self: 0.0% (0us) | Total: 0.0% (867us) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `BaseChatModel`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:64` | Self: 0.0% (0us) | Total: 0.0% (18.7ms) | Samples: 0

**Called by:**
- `ChatOpenRouter` (5)

**Calls:**
- `BaseLanguageModel` (3)
- `BaseLanguageModel` (1)
- `BaseLanguageModel` (1)

### `.wasm-function[674]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (206.7ms) | Samples: 0

**Called by:**
- `(unknown)` (143)
- `wasm-stub` (44)

**Calls:**
- `.wasm-function[11624]` (143)
- `.wasm-function[15702]` (44)

### `toJsonSchema`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/json_schema.js:45` | Self: 0.0% (0us) | Total: 0.0% (869us) | Samples: 0

**Called by:**
- `convertToOpenAIFunction` (1)

**Calls:**
- `isStandardJsonSchema` (1)

### `runtimePlatformArch`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/libvips.mjs:41` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `runtimeLibc` (1)

### `__embind_finalize_value_array`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `wasm-stub` (1)

**Calls:**
- `whenDependentTypesAreResolved` (1)

### `convertCompletionsMessageToBaseMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:166` | Self: 0.0% (0us) | Total: 0.3% (770.8ms) | Samples: 0

**Called by:**
- `convertOpenRouterResponseToBaseMessage` (1)

**Calls:**
- `parseToolCall` (1)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:630` | Self: 0.0% (0us) | Total: 9.8% (22.64s) | Samples: 0

**Calls:**
- `detectHorizontalLines` (15598)
- `detectHorizontalLines` (5060)
- `detectHorizontalLines` (387)
- `detectHorizontalLines` (39)
- `detectHorizontalLines` (28)
- `detectHorizontalLines` (3)
- `detectHorizontalLines` (1)
- `detectHorizontalLines` (1)
- `detectHorizontalLines` (1)
- `detectHorizontalLines` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/imageSchema.ts:10` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `bound max` (1)

### `ZodNumberFormat`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` | Self: 0.0% (0us) | Total: 0.0% (13.6ms) | Samples: 0

**Called by:**
- `_int` (3)

**Calls:**
- `init` (3)

### `mupdf-wasm.wasm.wasm-function[show_string]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_string]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_char]` (1)

### `.wasm-function[11624]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (156.7ms) | Samples: 0

**Called by:**
- `.wasm-function[674]` (143)

**Calls:**
- `.wasm-function[390]` (143)

### `.wasm-function[491]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (195.4ms) | Samples: 0

**Called by:**
- `(unknown)` (177)

**Calls:**
- `.wasm-function[10948]` (177)

### `.wasm-function[5841]`
`[native code]` | Self: 0.0% (0us) | Total: 0.5% (1.29s) | Samples: 0

**Called by:**
- `.wasm-function[16092]` (1196)

**Calls:**
- `.wasm-function[934]` (1196)

### `.wasm-function[4554]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `wasm-stub` (2)

**Calls:**
- `wasm-stub` (2)

### `.wasm-function[4341]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `(unknown)` (1)

**Calls:**
- `.wasm-function[10719]` (1)

### `convertOpenRouterResponseToBaseMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/converters/messages.js:40` | Self: 0.0% (0us) | Total: 0.6% (1.47s) | Samples: 0

**Called by:**
- `async _generate` (1)

**Calls:**
- `cloneObject` (1)

### `attachCropImages`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:107` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async extract` (1)

**Calls:**
- `log` (1)

### `mupdf-wasm.wasm.wasm-function[fz_draw_fill_image]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (10.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_fill_image]` (7)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_get_pixmap_from_image]` (5)
- `mupdf-wasm.wasm.wasm-function[fz_transform_pixmap]` (2)

### `async detectAndCropBbs`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:121` | Self: 0.0% (0us) | Total: 0.0% (5.2ms) | Samples: 0

**Called by:**
- `async detectAndCropBbs` (5)

**Calls:**
- `async invoke` (5)

### `_tryToStartAnother`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:105` | Self: 0.0% (0us) | Total: 0.3% (723.8ms) | Samples: 0

**Called by:**
- `(anonymous)` (14)

**Calls:**
- `async run` (13)
- `async run` (1)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:693` | Self: 0.0% (0us) | Total: 0.2% (506.7ms) | Samples: 0

**Calls:**
- `_pipeline` (13)

### `async _runLoop`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1208` | Self: 0.0% (0us) | Total: 0.0% (5.5ms) | Samples: 0

**Calls:**
- `async tick` (4)
- `async tick` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_run_Do_image]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (10.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_Do]` (7)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_image]` (7)

### `.wasm-function[16092]`
`[native code]` | Self: 0.0% (0us) | Total: 0.5% (1.29s) | Samples: 0

**Called by:**
- `(unknown)` (1196)

**Calls:**
- `.wasm-function[5841]` (1196)

### `async _streamIterator`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1131` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `async next` (1)

### `bound call`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `makeSafe` (1)

**Calls:**
- `forEach` (1)

### `ZodString`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` | Self: 0.0% (0us) | Total: 1.7% (4.12s) | Samples: 0

**Called by:**
- `_string` (2)

**Calls:**
- `init` (2)

### `node:fs/promises`
`node:fs/promises:2` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `anonymous` (2)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:226` | Self: 0.0% (0us) | Total: 0.0% (227.0ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (204)

**Calls:**
- `(anonymous)` (204)

### `defineLazy`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:62` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `defineProperty` (1)

### `_prepareNextTasks`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:247` | Self: 0.0% (0us) | Total: 0.0% (4.4ms) | Samples: 0

**Called by:**
- `async tick` (4)

**Calls:**
- `_prepareSingleTask` (1)
- `_prepareSingleTask` (1)
- `_prepareSingleTask` (1)
- `_prepareSingleTask` (1)

### `async generate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:427` | Self: 0.0% (0us) | Total: 0.0% (152.0ms) | Samples: 0

**Called by:**
- `async generatePrompt` (22)

**Calls:**
- `async _generateUncached` (21)
- `async generate` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:6` | Self: 0.0% (0us) | Total: 0.0% (872us) | Samples: 0

**Calls:**
- `bound require` (1)

### `async interopParseAsync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:91` | Self: 0.0% (0us) | Total: 3.2% (7.37s) | Samples: 0

**Called by:**
- `async interopParseAsync` (6)

**Calls:**
- `async (anonymous)` (5)
- `async (anonymous)` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:108` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `bound min` (1)

### `_applyWrites`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:131` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async _first` (1)

**Calls:**
- `entries` (1)

### `int`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:530` | Self: 0.0% (0us) | Total: 0.0% (14.6ms) | Samples: 0

**Called by:**
- `bound int` (4)

**Calls:**
- `_int` (4)

### `async _generateUncached`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:212` | Self: 0.0% (0us) | Total: 0.0% (144.7ms) | Samples: 0

**Called by:**
- `async _generateUncached` (16)

**Calls:**
- `getLsParamsWithDefaults` (16)

### `async cropBbsRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:879` | Self: 0.0% (0us) | Total: 0.0% (75.9ms) | Samples: 0

**Calls:**
- `push` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_load_page_tree_internal]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_lookup_page_obj]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_page_tree_imp]` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:5` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Calls:**
- `literal` (1)
- `object` (1)

### `mupdf-wasm.wasm.wasm-function[lcms2mt_cmsCreateProfilePlaceholder]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (7.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_new_icc_colorspace]` (7)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[gmtime]` (7)

### `.wasm-function[2663]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `wasm-stub` (1)

**Calls:**
- `.wasm-function[52]` (1)

### `_createInputDescriptor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:518` | Self: 0.0% (0us) | Total: 0.0% (983us) | Samples: 0

**Called by:**
- `Sharp` (1)

**Calls:**
- `defined` (1)

### `async _runWithRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/retry.js:48` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async _runWithRetry` (1)

**Calls:**
- `async invoke` (1)

### `mupdf-wasm.wasm.wasm-function[__wasm_call_ctors]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `wasm-stub` (1)

**Calls:**
- `wasm-stub` (1)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:396` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (1)

**Calls:**
- `delete` (1)

### `_compileResolved`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:484` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `compile` (1)

**Calls:**
- `attachNode` (1)

### `_applyWrites`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:148` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async tick` (1)

**Calls:**
- `update` (1)

### `mupdf-wasm.wasm.wasm-function[fz_walk_path]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[do_flatten_stroke]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[stroke_curveto]` (1)

### `mupdf-wasm.wasm.wasm-function[fz_available_1592]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (9.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_read]` (6)
- `mupdf-wasm.wasm.wasm-function[next_concat]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[next_dctd]` (4)
- `mupdf-wasm.wasm.wasm-function[next_flated]` (3)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/sax-js/sax.js:1197` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `initializeSax` (1)

### `mupdf-wasm.wasm.wasm-function[fz_malloc_default]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (69.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[do_scavenging_malloc]` (5)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[emscripten_builtin_malloc]` (5)

### `.wasm-function[581]`
`[native code]` | Self: 0.0% (0us) | Total: 0.4% (1.03s) | Samples: 0

**Called by:**
- `.wasm-function[934]` (952)

**Calls:**
- `.wasm-function[1037]` (951)
- `.wasm-function[2904]` (1)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:127` | Self: 0.0% (0us) | Total: 0.5% (1.29s) | Samples: 0

**Called by:**
- `async cropBbsRows` (1196)

**Calls:**
- `adaptiveThreshold` (1196)

### `async cropperBatch`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:202` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `(module)` (2)

**Calls:**
- `async mapBatched` (1)
- `async mapBatched` (1)

### `registerType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (7.3ms) | Samples: 0

**Called by:**
- `onComplete` (3)
- `__embind_register_memory_view` (1)
- `__embind_register_void` (1)

**Calls:**
- `sharedRegisterType` (5)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:11` | Self: 0.0% (0us) | Total: 0.0% (189.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (176)

**Calls:**
- `(anonymous)` (176)

### `internal:stream`
`internal:stream:2` | Self: 0.0% (0us) | Total: 0.0% (3.7ms) | Samples: 0

**Called by:**
- `anonymous` (4)

**Calls:**
- `anonymous` (4)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:303` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `Promise` (1)

**Calls:**
- `patchConfig` (1)

### `mupdf-wasm.wasm.wasm-function[fz_md5_buffer]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_new_icc_colorspace]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_md5_final]` (1)

### `ensureConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js:90` | Self: 0.0% (0us) | Total: 0.0% (27.7ms) | Samples: 0

**Called by:**
- `patchConfig` (2)
- `async invoke` (1)

**Calls:**
- `reduce` (2)
- `entries` (1)

### `mupdf-wasm.wasm.wasm-function[fz_new_colorspace_context]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (8.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_new_context_imp]` (8)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_new_icc_colorspace]` (8)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/stringify.js:8` | Self: 0.0% (0us) | Total: 0.0% (51.5ms) | Samples: 0

**Calls:**
- `slice` (1)

### `async _callWithConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:156` | Self: 0.0% (0us) | Total: 15.7% (36.13s) | Samples: 0

**Called by:**
- `async invoke` (1)

**Calls:**
- `async _callWithConfig` (1)

### `__embind_register_smart_ptr`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `wasm-stub` (1)

**Calls:**
- `whenDependentTypesAreResolved` (1)

### `_pipeline`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:1729` | Self: 0.0% (0us) | Total: 3.1% (7.21s) | Samples: 0

**Called by:**
- `async cropTableRows` (13)
- `async cropAndZoom` (7)
- `async compressImage` (5)
- `async cropTableRows` (3)
- `async cropAndZoom` (2)

**Calls:**
- `Promise` (30)

### `mkdir`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (984us) | Samples: 0

**Called by:**
- `createDefaultDirectories` (1)

**Calls:**
- `mknod` (1)

### `async convertPdfToImages`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:33` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `set` (1)

### `.wasm-function[505]`
`[native code]` | Self: 0.0% (0us) | Total: 22.9% (52.63s) | Samples: 0

**Called by:**
- `(unknown)` (49100)

**Calls:**
- `.wasm-function[10385]` (49100)

### `bitwise_or`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (49.9ms) | Samples: 0

**Called by:**
- `(anonymous)` (44)

**Calls:**
- `wasm-stub` (44)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:108` | Self: 0.0% (0us) | Total: 0.0% (98.4ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `(anonymous)` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/parse.js:18` | Self: 0.0% (0us) | Total: 3.2% (7.38s) | Samples: 0

**Called by:**
- `async interopParseAsync` (5)
- `async interopSafeParseAsync` (2)

**Calls:**
- `async (anonymous)` (6)
- `async (anonymous)` (1)

### `mupdf-wasm.wasm.wasm-function[gray_line_to]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[FT_Outline_Decompose]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[gray_render_line]` (2)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/sharp.mjs:18` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `runtimePlatformArch` (1)

### `async convertPdfToImages`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:56` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `loadPage` (1)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:195` | Self: 0.0% (0us) | Total: 0.0% (49.9ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (44)

**Calls:**
- `(anonymous)` (44)

### `mupdf-wasm.wasm.wasm-function[load_cid_font]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (7.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_type0_font]` (6)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_font_descriptor]` (3)
- `mupdf-wasm.wasm.wasm-function[pdf_load_to_unicode]` (2)
- `mupdf-wasm.wasm.wasm-function[pdf_array_len]` (1)

### `.wasm-function[391]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `.wasm-function[3271]` (1)

**Calls:**
- `.wasm-function[3272]` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/utility.mjs:27` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Calls:**
- `(anonymous)` (2)

### `detectVerticalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:584` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `async cropTableRows` (1)

**Calls:**
- `map` (1)

### `attachCropImages`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:109` | Self: 0.0% (0us) | Total: 0.0% (3.1ms) | Samples: 0

**Called by:**
- `async extract` (3)

**Calls:**
- `warn` (3)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:691` | Self: 0.0% (0us) | Total: 0.0% (30.5ms) | Samples: 0

**Calls:**
- `extract` (1)

### `mupdf-wasm.wasm.wasm-function[buffer_write]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_write_data]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_append_data]` (1)

### `composite`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/composite.mjs:136` | Self: 0.0% (0us) | Total: 0.0% (45.1ms) | Samples: 0

**Called by:**
- `async createDebugImage` (1)

**Calls:**
- `map` (1)

### `RunTree`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:197` | Self: 0.0% (0us) | Total: 0.0% (197.3ms) | Samples: 0

**Called by:**
- `runWithConfig` (1)

**Calls:**
- `defineProperty` (1)

### `.wasm-function[1293]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (30.6ms) | Samples: 0

**Called by:**
- `wasm-stub` (28)

**Calls:**
- `.wasm-function[11668]` (28)

### `mupdf-wasm.wasm.wasm-function[fz_write_pixmap_as_png]`
`[native code]` | Self: 0.0% (0us) | Total: 0.4% (1.14s) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[png_from_pixmap]` (1002)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_write_band]` (1002)

### `mupdf-wasm.wasm.wasm-function[fz_fill_image]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (10.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_image_imp]` (7)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_fill_image]` (7)

### `async func`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:31` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `async (anonymous)` (2)

**Calls:**
- `async _write` (2)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:84` | Self: 0.0% (0us) | Total: 0.0% (152.0ms) | Samples: 0

**Called by:**
- `async invoke` (22)

**Calls:**
- `async generatePrompt` (22)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:4` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `async _streamIterator`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1061` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Calls:**
- `_getTracingMetadataDefaults` (1)

### `optional`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1110` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `bound optional` (1)

**Calls:**
- `ZodOptional` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1029` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `init` (1)

### `mupdf-wasm.wasm.wasm-function[glyph_from_ft_bitmap]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (978us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_render_ft_glyph]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_new_glyph_from_8bpp_data]` (1)

### `mupdf-wasm.wasm.wasm-function[end_metatext]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pop_marked_content]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_dict_get]` (1)

### `tool`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:286` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `async cropper` (2)

**Calls:**
- `DynamicStructuredTool` (1)
- `cloneObject` (1)

### `.wasm-function[4618]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `wasm-stub` (1)

**Calls:**
- `.wasm-function[52]` (1)

### `init`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `initRuntime` (1)

**Calls:**
- `createStandardStreams` (1)

### `async interopParseAsync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:90` | Self: 0.0% (0us) | Total: 3.2% (7.37s) | Samples: 0

**Called by:**
- `async call` (6)

**Calls:**
- `async interopParseAsync` (6)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/checks.js:98` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `init` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_show_char]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[show_string]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_show_glyph_aux]` (1)

### `AIMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/ai.js:84` | Self: 0.0% (0us) | Total: 1.3% (3.07s) | Samples: 0

**Called by:**
- `convertCompletionsMessageToBaseMessage` (2)

**Calls:**
- `BaseMessage` (1)
- `BaseMessage` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/sharp.mjs:61` | Self: 0.0% (0us) | Total: 0.0% (4.2ms) | Samples: 0

**Calls:**
- `bound require` (4)

### `detectHorizontalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:477` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async cropTableRows` (1)

**Calls:**
- `(anonymous)` (1)

### `makeClassHandle`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (986us) | Samples: 0

**Called by:**
- `RegisteredPointer_fromWireType` (1)

**Calls:**
- `create` (1)

### `morphologyEx`
`[native code]` | Self: 0.0% (0us) | Total: 22.9% (52.67s) | Samples: 0

**Called by:**
- `(anonymous)` (49144)

**Calls:**
- `(unknown)` (49144)

### `.wasm-function[4417]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (28.3ms) | Samples: 0

**Called by:**
- `.wasm-function[16862]` (26)

**Calls:**
- `wasm-stub` (26)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/detect-libc.js:6` | Self: 0.0% (0us) | Total: 0.0% (29.0ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `gatherIteratorSync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:53` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `_outputWrites` (1)

**Calls:**
- `generatorResume` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:29` | Self: 0.0% (0us) | Total: 0.0% (984us) | Samples: 0

**Calls:**
- `bound require` (1)

### `bound min`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `async cropper` (1)
- `async cropper` (1)

**Calls:**
- `bound check` (2)

## Files

| Self% | Self | File |
|------:|-----:|------|
| 44.6% | 102.50s | `[native code]` |
| 15.7% | 36.20s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js` |
| 7.7% | 17.80s | `internal:streams/readable` |
| 3.8% | 8.84s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js` |
| 2.9% | 6.79s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/converters/messages.js` |
| 2.8% | 6.50s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` |
| 2.6% | 6.02s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js` |
| 2.5% | 5.84s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs` |
| 2.3% | 5.29s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 1.8% | 4.31s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts` |
| 1.6% | 3.89s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js` |
| 1.6% | 3.71s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs` |
| 1.5% | 3.49s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/parse.js` |
| 1.4% | 3.37s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/normalizeCoords.ts` |
| 1.3% | 3.07s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/base.js` |
| 1.2% | 2.92s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js` |
| 1.0% | 2.47s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/ai.js` |
| 0.8% | 1.85s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts` |
| 0.5% | 1.37s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js` |
| 0.4% | 1.13s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts` |
| 0.3% | 690.5ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs` |
| 0.1% | 284.7ms | `internal:streams/writable` |
| 0.0% | 207.8ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts` |
| 0.0% | 201.8ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/env.js` |
| 0.0% | 150.2ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js` |
| 0.0% | 46.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/composite.mjs` |
| 0.0% | 42.3ms | `node:fs/promises` |
| 0.0% | 41.8ms | `internal:streams/duplex` |
| 0.0% | 36.7ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js` |
| 0.0% | 33.7ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js` |
| 0.0% | 32.2ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/serializable.js` |
| 0.0% | 26.7ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js` |
| 0.0% | 24.4ms | `node:events` |
| 0.0% | 16.8ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js` |
| 0.0% | 16.7ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js` |
| 0.0% | 14.6ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/eventemitter3/index.js` |
| 0.0% | 12.7ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js` |
| 0.0% | 12.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs` |
| 0.0% | 8.5ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 6.0ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` |
| 0.0% | 5.2ms | `node:url` |
| 0.0% | 4.3ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js` |
| 0.0% | 3.5ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js` |
| 0.0% | 3.5ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` |
| 0.0% | 3.2ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/checks.js` |
| 0.0% | 3.2ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts` |
| 0.0% | 2.4ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js` |
| 0.0% | 2.2ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js` |
| 0.0% | 2.2ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js` |
| 0.0% | 2.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/json_schema.js` |
| 0.0% | 2.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts` |
| 0.0% | 2.0ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs` |
| 0.0% | 2.0ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/callbacks/manager.js` |
| 0.0% | 2.0ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js` |
| 0.0% | 1.2ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js` |
| 0.0% | 1.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js` |
| 0.0% | 1.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/channels/last_value.js` |
| 0.0% | 1.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js` |
| 0.0% | 1.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/utility.mjs` |
| 0.0% | 1.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/sax-js/sax.js` |
| 0.0% | 1.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/prompts/chat.js` |
| 0.0% | 1.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph-checkpoint/dist/id.js` |
| 0.0% | 1.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js` |
| 0.0% | 1.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js` |
| 0.0% | 1.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/utils/config.js` |
| 0.0% | 1.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js` |
| 0.0% | 1.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js` |
| 0.0% | 1.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v3/ZodError.js` |
| 0.0% | 1.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/tool.js` |
| 0.0% | 1.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/colour.mjs` |
| 0.0% | 1.0ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/v1.js` |
| 0.0% | 1.0ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/elf.js` |
| 0.0% | 1.0ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/env.js` |
| 0.0% | 1.0ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/retry.js` |
| 0.0% | 983us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/is.mjs` |
| 0.0% | 870us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js` |
| 0.0% | 869us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/standard_schema.js` |
| 0.0% | 864us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/utils/index.js` |
