# CPU Profile

| Duration | Samples | Interval | Functions |
|----------|---------|----------|----------|
| 273.36s | 96662 | 1.0ms | 1280 |

**Top 10:** `async invoke` 10.1%, `.wasm-function[8869]` 9.2%, `.wasm-function[8885]` 7.5%, `.wasm-function[8901]` 7.3%, `(anonymous)` 6.6%, `.wasm-function[8918]` 5.8%, `log` 5.7%, `withStructuredOutput` 5.5%, `(anonymous)` 3.0%, `async mapBatched` 2.5%

## Hot Functions (Self Time)

| Self% | Self | Total% | Total | Function | Location |
|------:|-----:|-------:|------:|----------|----------|
| 10.1% | 27.80s | 10.1% | 27.80s | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/base.js` |
| 9.2% | 25.27s | 9.2% | 25.27s | `.wasm-function[8869]` | `[native code]` |
| 7.5% | 20.69s | 7.5% | 20.69s | `.wasm-function[8885]` | `[native code]` |
| 7.3% | 20.03s | 7.3% | 20.03s | `.wasm-function[8901]` | `[native code]` |
| 6.6% | 18.19s | 12.8% | 35.18s | `(anonymous)` | `[native code]` |
| 5.8% | 16.07s | 5.8% | 16.07s | `.wasm-function[8918]` | `[native code]` |
| 5.7% | 15.63s | 5.7% | 15.63s | `log` | `[native code]` |
| 5.5% | 15.06s | 5.5% | 15.06s | `withStructuredOutput` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js` |
| 3.0% | 8.45s | 5.8% | 16.08s | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:304` |
| 2.5% | 6.91s | 2.5% | 6.91s | `async mapBatched` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:89` |
| 2.5% | 6.87s | 2.5% | 7.09s | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:426` |
| 1.9% | 5.22s | 1.9% | 5.22s | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:333` |
| 1.7% | 4.66s | 1.7% | 4.66s | `Uint8Array` | `[native code]` |
| 1.6% | 4.37s | 1.6% | 4.37s | `isZodSchemaV4` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js` |
| 1.4% | 4.03s | 37.7% | 103.06s | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 1.4% | 4.03s | 1.4% | 4.03s | `AIMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/ai.js:64` |
| 1.3% | 3.56s | 1.3% | 3.56s | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:345` |
| 1.2% | 3.46s | 1.2% | 3.46s | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js:90` |
| 1.1% | 3.25s | 1.1% | 3.25s | `handleMultiModalOutput` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/utils/output.js` |
| 1.1% | 3.11s | 1.1% | 3.11s | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:269` |
| 1.0% | 2.96s | 1.0% | 2.96s | `convertCompletionsMessageToBaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:165` |
| 1.0% | 2.84s | 3.3% | 9.29s | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:316` |
| 0.8% | 2.43s | 2.1% | 5.95s | `reduce` | `[native code]` |
| 0.7% | 2.07s | 0.7% | 2.07s | `replace` | `[native code]` |
| 0.7% | 2.01s | 0.7% | 2.01s | `BaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/base.js:122` |
| 0.7% | 1.99s | 0.7% | 1.99s | `convertOpenRouterResponseToBaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/converters/messages.js:39` |
| 0.7% | 1.93s | 0.8% | 2.19s | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:232` |
| 0.6% | 1.86s | 0.6% | 1.86s | `isInstance` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/base.js` |
| 0.6% | 1.79s | 0.6% | 1.83s | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.5% | 1.56s | 0.5% | 1.56s | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js` |
| 0.5% | 1.48s | 0.8% | 2.44s | `emval_returnValue` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.5% | 1.48s | 2.5% | 6.84s | `decodeMemoryView` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.5% | 1.48s | 0.7% | 1.99s | `bound toWireType` | `[native code]` |
| 0.4% | 1.35s | 0.4% | 1.35s | `emit` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/eventemitter3/index.js:167` |
| 0.4% | 1.32s | 0.7% | 2.03s | `convertCompletionsMessageToBaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:166` |
| 0.4% | 1.30s | 0.4% | 1.30s | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js` |
| 0.4% | 1.29s | 0.5% | 1.43s | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.4% | 1.22s | 0.4% | 1.22s | `copyDataProperties` | `[native code]` |
| 0.4% | 1.11s | 0.4% | 1.11s | `cloneObject` | `[native code]` |
| 0.3% | 916.1ms | 0.3% | 916.1ms | `get buffer` | `[native code]` |
| 0.3% | 909.7ms | 0.3% | 909.7ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.3% | 890.2ms | 0.3% | 890.2ms | `json` | `[native code]` |
| 0.3% | 846.2ms | 0.3% | 846.2ms | `.wasm-function[9388]` | `[native code]` |
| 0.3% | 824.9ms | 0.3% | 824.9ms | `handleMultiModalOutput` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/utils/output.js:81` |
| 0.2% | 811.3ms | 0.2% | 811.3ms | `_next` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:47` |
| 0.2% | 787.7ms | 0.2% | 787.7ms | `.wasm-function[2953]` | `[native code]` |
| 0.2% | 759.4ms | 0.3% | 900.3ms | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:206` |
| 0.2% | 708.5ms | 0.2% | 708.5ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:137` |
| 0.2% | 651.7ms | 3.7% | 10.32s | `.wasm-function[6148]` | `[native code]` |
| 0.2% | 629.8ms | 2.3% | 6.39s | `Mat.ucharPtr` | `[native code]` |
| 0.2% | 619.2ms | 0.2% | 619.2ms | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:145` |
| 0.2% | 586.3ms | 0.4% | 1.28s | `mupdf-wasm.wasm.wasm-function[deflate_slow]` | `[native code]` |
| 0.2% | 568.1ms | 0.3% | 889.7ms | `bound nonConstNoSmartPtrRawPointerToWireType` | `[native code]` |
| 0.2% | 554.0ms | 0.2% | 554.0ms | `parseToolCall` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:26` |
| 0.1% | 491.5ms | 0.1% | 491.5ms | `get size` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/priority-queue.js` |
| 0.1% | 470.6ms | 0.1% | 470.6ms | `async _generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:267` |
| 0.1% | 469.9ms | 3.9% | 10.79s | `.wasm-function[6137]` | `[native code]` |
| 0.1% | 405.9ms | 0.1% | 484.9ms | `mupdf-wasm.wasm.wasm-function[fill_window]` | `[native code]` |
| 0.1% | 389.6ms | 4.3% | 11.93s | `wasm-stub` | `[native code]` |
| 0.1% | 388.2ms | 0.1% | 388.2ms | `fromWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.1% | 367.4ms | 0.1% | 367.4ms | `toWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.1% | 365.9ms | 0.2% | 743.8ms | `bound fromWireType` | `[native code]` |
| 0.1% | 342.9ms | 0.1% | 342.9ms | `ChatOpenRouter` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:157` |
| 0.1% | 326.4ms | 0.1% | 326.4ms | `set` | `[native code]` |
| 0.1% | 319.6ms | 0.1% | 319.6ms | `nonConstNoSmartPtrRawPointerToWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.1% | 318.6ms | 0.1% | 320.1ms | `runChecks` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:34` |
| 0.1% | 288.0ms | 0.1% | 288.0ms | `findWasmBinary` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 234.9ms | 0.5% | 1.54s | `mupdf-wasm.wasm.wasm-function[png_write_band]` | `[native code]` |
| 0.0% | 230.3ms | 0.0% | 230.3ms | `stringify` | `[native code]` |
| 0.0% | 209.4ms | 0.0% | 209.4ms | `_createInputDescriptor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:109` |
| 0.0% | 207.9ms | 0.1% | 288.3ms | `anonymous` | `[native code]` |
| 0.0% | 202.6ms | 0.0% | 202.6ms | `v7Bytes` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/uuid/src/v7.js:42` |
| 0.0% | 198.9ms | 0.0% | 198.9ms | `.wasm-function[9672]` | `[native code]` |
| 0.0% | 198.7ms | 0.0% | 198.7ms | `fetch` | `[native code]` |
| 0.0% | 193.3ms | 0.0% | 193.3ms | `mupdf-wasm.wasm.wasm-function[longest_match]` | `[native code]` |
| 0.0% | 192.1ms | 0.0% | 192.1ms | `Error` | `[native code]` |
| 0.0% | 174.5ms | 0.0% | 174.5ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:851` |
| 0.0% | 169.0ms | 0.1% | 301.7ms | `.wasm-function[1543]` | `[native code]` |
| 0.0% | 169.0ms | 0.0% | 169.0ms | `.wasm-function[12303]` | `[native code]` |
| 0.0% | 165.5ms | 31.1% | 85.17s | `(unknown)` | `[native code]` |
| 0.0% | 153.6ms | 0.0% | 153.6ms | `parse` | `[native code]` |
| 0.0% | 143.7ms | 0.0% | 143.7ms | `toHandle` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 136.5ms | 0.0% | 136.5ms | `Duplex` | `internal:streams/duplex:4` |
| 0.0% | 134.0ms | 0.0% | 134.0ms | `defineProperty` | `[native code]` |
| 0.0% | 133.1ms | 0.0% | 133.1ms | `.wasm-function[12009]` | `[native code]` |
| 0.0% | 130.6ms | 0.0% | 130.6ms | `.wasm-function[8596]` | `[native code]` |
| 0.0% | 128.8ms | 30.6% | 83.83s | `.wasm-function[2968]` | `[native code]` |
| 0.0% | 125.8ms | 0.0% | 125.8ms | `growMemory` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 120.8ms | 0.0% | 120.8ms | `push` | `[native code]` |
| 0.0% | 98.8ms | 0.0% | 98.8ms | `.wasm-function[549]` | `[native code]` |
| 0.0% | 94.3ms | 0.0% | 94.3ms | `getStore` | `node:async_hooks:145` |
| 0.0% | 86.2ms | 6.2% | 16.97s | `map` | `[native code]` |
| 0.0% | 86.0ms | 0.0% | 86.0ms | `mupdf-wasm.wasm.wasm-function[build_filter]` | `[native code]` |
| 0.0% | 80.4ms | 0.0% | 80.4ms | `mupdf-wasm.wasm.wasm-function[adler32]` | `[native code]` |
| 0.0% | 71.1ms | 0.0% | 189.4ms | `async withRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:31` |
| 0.0% | 70.2ms | 0.0% | 70.2ms | `.wasm-function[12680]` | `[native code]` |
| 0.0% | 68.3ms | 0.0% | 68.3ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:73` |
| 0.0% | 65.5ms | 0.0% | 65.5ms | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:226` |
| 0.0% | 63.3ms | 0.0% | 63.3ms | `join` | `[native code]` |
| 0.0% | 61.2ms | 0.0% | 61.2ms | `mkdir` | `[native code]` |
| 0.0% | 61.0ms | 0.0% | 61.0ms | `node:worker_threads` | `node:worker_threads:36` |
| 0.0% | 60.0ms | 0.0% | 60.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:489` |
| 0.0% | 59.7ms | 0.1% | 493.7ms | `async run` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:153` |
| 0.0% | 59.1ms | 0.7% | 2.00s | `.wasm-function[934]` | `[native code]` |
| 0.0% | 58.2ms | 0.0% | 188.9ms | `.wasm-function[510]` | `[native code]` |
| 0.0% | 57.8ms | 0.0% | 57.8ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts` |
| 0.0% | 57.4ms | 0.0% | 57.4ms | `keys` | `[native code]` |
| 0.0% | 57.0ms | 0.0% | 57.0ms | `mupdf-wasm.wasm.wasm-function[paint_span_with_color_3_solid]` | `[native code]` |
| 0.0% | 56.7ms | 0.0% | 132.7ms | `flatIntoArrayWithCallback` | `[native code]` |
| 0.0% | 56.7ms | 0.0% | 56.7ms | `newResolvedPromise` | `[native code]` |
| 0.0% | 55.8ms | 0.0% | 55.8ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:49` |
| 0.0% | 55.6ms | 0.0% | 55.6ms | `binaryDecode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 55.2ms | 0.0% | 55.2ms | `convertToOpenAIFunction` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/function_calling.js:26` |
| 0.0% | 54.6ms | 0.0% | 54.6ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` |
| 0.0% | 51.8ms | 0.0% | 51.8ms | `extract` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:483` |
| 0.0% | 51.7ms | 0.0% | 51.7ms | `_addVersion` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js` |
| 0.0% | 48.9ms | 0.0% | 48.9ms | `getRunnableConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js` |
| 0.0% | 48.7ms | 0.0% | 48.7ms | `instantiate` | `[native code]` |
| 0.0% | 48.3ms | 0.0% | 48.3ms | `ReadableState` | `internal:streams/readable` |
| 0.0% | 43.3ms | 3.4% | 9.49s | `detectVerticalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:575` |
| 0.0% | 43.2ms | 0.0% | 43.2ms | `.wasm-function[2992]` | `[native code]` |
| 0.0% | 39.4ms | 0.0% | 39.4ms | `messageToOpenAIRole` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/utils/misc.js:27` |
| 0.0% | 39.3ms | 0.0% | 39.3ms | `WritableState` | `internal:streams/writable:135` |
| 0.0% | 38.4ms | 0.0% | 38.4ms | `.wasm-function[11510]` | `[native code]` |
| 0.0% | 38.1ms | 0.0% | 38.1ms | `WritableState` | `internal:streams/writable:140` |
| 0.0% | 38.0ms | 0.0% | 38.0ms | `resolve` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 37.6ms | 0.0% | 37.6ms | `isFinite` | `[native code]` |
| 0.0% | 36.8ms | 0.0% | 36.8ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js` |
| 0.0% | 36.8ms | 0.0% | 36.8ms | `find` | `[native code]` |
| 0.0% | 34.1ms | 0.0% | 34.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:585` |
| 0.0% | 33.6ms | 0.0% | 33.6ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:1731` |
| 0.0% | 32.2ms | 0.0% | 87.8ms | `mupdf-wasm.wasm.wasm-function[fz_convert_gel]` | `[native code]` |
| 0.0% | 28.8ms | 0.0% | 96.9ms | `forEach` | `[native code]` |
| 0.0% | 27.2ms | 0.0% | 27.2ms | `Int8Array` | `[native code]` |
| 0.0% | 26.8ms | 0.0% | 26.8ms | `tool` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js` |
| 0.0% | 23.8ms | 0.0% | 23.8ms | `mergeDefs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js` |
| 0.0% | 23.5ms | 0.0% | 23.5ms | `string` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/regexes.js:94` |
| 0.0% | 22.4ms | 0.0% | 22.4ms | `ZodNumber` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:43` |
| 0.0% | 20.6ms | 0.0% | 20.6ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:192` |
| 0.0% | 20.5ms | 0.0% | 20.5ms | `mupdf-wasm.wasm.wasm-function[compress_block]` | `[native code]` |
| 0.0% | 19.6ms | 0.0% | 19.6ms | `has` | `[native code]` |
| 0.0% | 18.9ms | 0.0% | 18.9ms | `BaseLangChain` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:139` |
| 0.0% | 16.3ms | 0.0% | 16.3ms | `validateThis` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 15.5ms | 0.0% | 15.5ms | `init` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:13` |
| 0.0% | 15.3ms | 0.0% | 16.7ms | `mupdf-wasm.wasm.wasm-function[draw_glyph]` | `[native code]` |
| 0.0% | 12.1ms | 0.0% | 15.6ms | `fromWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 11.6ms | 0.0% | 63.8ms | `whenDependentTypesAreResolved` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 9.6ms | 0.0% | 9.6ms | `getFullYear` | `[native code]` |
| 0.0% | 9.5ms | 0.0% | 9.5ms | `Function` | `[native code]` |
| 0.0% | 7.9ms | 0.0% | 7.9ms | `mupdf-wasm.wasm.wasm-function[fz_hash_find]` | `[native code]` |
| 0.0% | 7.7ms | 0.0% | 7.7ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` |
| 0.0% | 6.5ms | 0.0% | 7.7ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:92` |
| 0.0% | 6.5ms | 0.0% | 6.5ms | `mupdf-wasm.wasm.wasm-function[jpeg_idct_16x16]` | `[native code]` |
| 0.0% | 6.4ms | 0.0% | 6.4ms | `resize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:268` |
| 0.0% | 6.0ms | 3.4% | 9.30s | `__emval_invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 5.8ms | 0.0% | 15.8ms | `mupdf-wasm.wasm.wasm-function[fz_render_glyph]` | `[native code]` |
| 0.0% | 5.3ms | 0.0% | 14.9ms | `createJsInvoker` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 5.2ms | 0.0% | 7.8ms | `mupdf-wasm.wasm.wasm-function[inflate]` | `[native code]` |
| 0.0% | 4.6ms | 0.0% | 5.9ms | `binaryDecode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 4.5ms | 3.7% | 10.21s | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:500` |
| 0.0% | 4.5ms | 0.2% | 628.0ms | `detectVerticalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:574` |
| 0.0% | 4.4ms | 0.0% | 39.7ms | `mupdf-wasm.wasm.wasm-function[pdf_flush_text_imp]` | `[native code]` |
| 0.0% | 4.4ms | 0.0% | 4.4ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 4.3ms | 0.0% | 4.3ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/passthrough.js` |
| 0.0% | 4.2ms | 0.0% | 4.2ms | `dlopen` | `[native code]` |
| 0.0% | 4.1ms | 0.2% | 807.8ms | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:499` |
| 0.0% | 4.0ms | 0.0% | 7.0ms | `mupdf-wasm.wasm.wasm-function[pdf_show_char]` | `[native code]` |
| 0.0% | 3.7ms | 0.0% | 3.7ms | `mupdf-wasm.wasm.wasm-function[scale_row_to_temp3]` | `[native code]` |
| 0.0% | 3.6ms | 0.0% | 3.6ms | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/list.js:134` |
| 0.0% | 3.6ms | 0.0% | 3.6ms | `attachCropImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:97` |
| 0.0% | 3.5ms | 13.4% | 36.70s | `Promise` | `[native code]` |
| 0.0% | 3.5ms | 0.0% | 3.5ms | `entries` | `[native code]` |
| 0.0% | 3.3ms | 0.0% | 3.3ms | `mupdf-wasm.wasm.wasm-function[pdf_run_Tr]` | `[native code]` |
| 0.0% | 3.3ms | 0.0% | 3.3ms | `mupdf-wasm.wasm.wasm-function[crc32_z]` | `[native code]` |
| 0.0% | 3.2ms | 0.0% | 3.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:67` |
| 0.0% | 3.2ms | 0.0% | 3.2ms | `cached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js` |
| 0.0% | 3.2ms | 0.0% | 3.2ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` |
| 0.0% | 3.2ms | 0.0% | 5.3ms | `__embind_register_enum_value` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 3.1ms | 0.0% | 3.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/checks.js:104` |
| 0.0% | 3.1ms | 0.0% | 4.0ms | `exposePublicSymbol` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 3.0ms | 30.0% | 82.21s | `.wasm-function[557]` | `[native code]` |
| 0.0% | 2.9ms | 0.0% | 2.9ms | `assign` | `[native code]` |
| 0.0% | 2.9ms | 0.0% | 2.9ms | `isZodNullableV4` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:229` |
| 0.0% | 2.8ms | 0.0% | 2.8ms | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/registries.js:33` |
| 0.0% | 2.7ms | 0.0% | 35.2ms | `mupdf-wasm.wasm.wasm-function[fz_draw_fill_text]` | `[native code]` |
| 0.0% | 2.6ms | 0.0% | 190.1ms | `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` | `[native code]` |
| 0.0% | 2.6ms | 0.0% | 2.6ms | `PriorityQueue` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/priority-queue.js` |
| 0.0% | 2.5ms | 0.0% | 2.5ms | `mupdf-wasm.wasm.wasm-function[FT_Outline_Get_CBox]` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 3.7ms | `mupdf-wasm.wasm.wasm-function[ft_glyphslot_preset_bitmap]` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 2.4ms | `mupdf-wasm.wasm.wasm-function[pdf_get_xref_entry_aux]` | `[native code]` |
| 0.0% | 2.3ms | 0.0% | 17.5ms | `.wasm-function[2969]` | `[native code]` |
| 0.0% | 2.3ms | 0.0% | 2.3ms | `_createInputDescriptor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:63` |
| 0.0% | 2.3ms | 0.0% | 2.3ms | `now` | `[native code]` |
| 0.0% | 2.3ms | 0.0% | 2.3ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 2.3ms | 0.0% | 2.3ms | `async call` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:743` |
| 0.0% | 2.2ms | 0.0% | 4.4ms | `mupdf-wasm.wasm.wasm-function[fz_read_byte]` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `validateThis` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `warn` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 4.5ms | `writeFileSync` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `__emval_decref` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `add` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/registries.js:10` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:78` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v3/types.js:479` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `mupdf-wasm.wasm.wasm-function[pqdownheap]` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `hasOwnProperty` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `mupdf-wasm.wasm.wasm-function[tt_face_get_location]` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `get` | `[native code]` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `mupdf-wasm.wasm.wasm-function[body]` | `[native code]` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `detectVerticalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `isZodSchemaV3` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:13` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` |
| 0.0% | 2.0ms | 0.0% | 41.5ms | `.wasm-function[466]` | `[native code]` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `RegExp` | `[native code]` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `mupdf-wasm.wasm.wasm-function[pdf_lookup_cmap_full]` | `[native code]` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `_createInputDescriptor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `slice` | `[native code]` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` |
| 0.0% | 1.9ms | 0.0% | 1.9ms | `nonConstNoSmartPtrRawPointerToWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.9ms | 0.0% | 1.9ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:58` |
| 0.0% | 1.9ms | 0.0% | 1.9ms | `RegisteredPointer_fromWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.9ms | 0.0% | 3.9ms | `readFileSync` | `[native code]` |
| 0.0% | 1.9ms | 0.0% | 1.9ms | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/node_modules/openai/resources/beta/threads/runs/runs.mjs:186` |
| 0.0% | 1.9ms | 0.0% | 1.9ms | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts` |
| 0.0% | 1.8ms | 0.0% | 1.8ms | `objectProcessor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:278` |
| 0.0% | 1.8ms | 0.0% | 1.8ms | `validatesOnlyStrings` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/json_schema.js` |
| 0.0% | 1.8ms | 0.0% | 1.8ms | `runChecks` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:48` |
| 0.0% | 1.8ms | 0.0% | 1.8ms | `mupdf-wasm.wasm.wasm-function[ucdn_get_bidi_class]` | `[native code]` |
| 0.0% | 1.7ms | 0.0% | 1.7ms | `_pipeline` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:1709` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `objectProcessor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `_addVersion` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:144` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `defineProperties` | `[native code]` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `objectProcessor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:289` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `mupdf-wasm.wasm.wasm-function[fz_subpixel_adjust]` | `[native code]` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `Graph$1` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `$ZodNever` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:43` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:13` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `toISOString` | `[native code]` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `aborted` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `_configHasToolCallId` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/utils.js` |
| 0.0% | 1.4ms | 0.0% | 26.3ms | `mupdf-wasm.wasm.wasm-function[emscripten_builtin_malloc]` | `[native code]` |
| 0.0% | 1.4ms | 0.0% | 9.3ms | `mupdf-wasm.wasm.wasm-function[fz_find_item]` | `[native code]` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `runWithConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js:33` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/registries.js:37` |
| 0.0% | 1.3ms | 0.0% | 3.1ms | `async generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:432` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `mupdf-wasm.wasm.wasm-function[pdf_open_raw_filter]` | `[native code]` |
| 0.0% | 1.3ms | 0.0% | 94.1ms | `mupdf-wasm.wasm.wasm-function[pdf_show_path]` | `[native code]` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `getStore` | `node:async_hooks` |
| 0.0% | 1.3ms | 0.0% | 21.4ms | `DynamicStructuredTool` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:236` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:391` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts` |
| 0.0% | 1.3ms | 0.0% | 24.9ms | `Z` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `internal:streams/destroy` | `internal:streams/destroy:16` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `async _route` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js` |
| 0.0% | 1.2ms | 0.0% | 5.7ms | `mupdf-wasm.wasm.wasm-function[pdf_lex]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `mupdf-wasm.wasm.wasm-function[fz_do_catch]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `mupdf-wasm.wasm.wasm-function[gray_render_line]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `__emval_decref` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `_isSkipWrite` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js` |
| 0.0% | 1.2ms | 2.2% | 6.06s | `runWithConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js:29` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `guarded` | `internal:shared` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `_commit` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `process` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:93` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `.wasm-function[1709]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:334` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `finalize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js` |
| 0.0% | 1.2ms | 0.0% | 108.4ms | `require` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `async _first` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `toJSONSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `getCurrentRunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/singletons/traceable.js:26` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `pump` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/stream.js` |
| 0.0% | 1.2ms | 0.0% | 3.4ms | `__embind_register_constant` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:177` |
| 0.0% | 1.2ms | 0.0% | 40.9ms | `mupdf-wasm.wasm.wasm-function[pdf_run_ET]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/utils/config.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `mupdf-wasm.wasm.wasm-function[fz_insert_gel]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `run` | `node:async_hooks` |
| 0.0% | 1.2ms | 0.4% | 1.35s | `_resolvePromises` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:57` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `setPrototypeDirectOrThrow` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `BinaryOperatorAggregate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/channels/binop.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `createNamedFunction` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` |
| 0.0% | 1.2ms | 0.0% | 2.4ms | `mupdf-wasm.wasm.wasm-function[fz_stroke_lineto_aux]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `interopZodObjectStrict` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:299` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:202` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `convertToDottedOrderFormat` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js` |
| 0.0% | 1.2ms | 0.0% | 121.1ms | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:32` |
| 0.0% | 1.2ms | 0.0% | 2.3ms | `mupdf-wasm.wasm.wasm-function[fz_open_document_with_buffer]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `setPrototypeDirect` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `isDeltaChannel` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/channels/base.js:12` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `rng` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/uuid/src/rng.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `readSync` | `node:fs` |
| 0.0% | 1.2ms | 0.0% | 2.4ms | `defineLazy` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:62` |
| 0.0% | 1.2ms | 0.0% | 27.5ms | `mupdf-wasm.wasm.wasm-function[do_scavenging_malloc]` | `[native code]` |
| 0.0% | 1.1ms | 0.2% | 685.9ms | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:308` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `ZodNumber` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:42` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[do_scavenging_realloc]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `bind` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mapDebugTaskResults` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/debug.js` |
| 0.0% | 1.1ms | 0.0% | 5.2ms | `sharedRegisterType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `putWrites` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `sha1` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/sha1.js:66` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[paint_affine_near_3_fb0]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `asyncFunctionDrive` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async _runLoop` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1205` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[pdf_dict_find]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async channelsFromCheckpoint` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/channels/base.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `BaseLangChain` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:137` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async initialize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[make_weights]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `flatMap` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `readChannel` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/io.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `.wasm-function[397]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `toString` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 198.4ms | `mupdf-wasm.wasm.wasm-function[pdf_process_stream]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[pdf_load_cmap]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 13.0ms | `mupdf-wasm.wasm.wasm-function[fz_new_colorspace_context]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `getWriters` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/read.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `getGlobalAsyncLocalStorageInstance` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/globals.js:8` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[resolve_color]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[inflate_table]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async cropBbsRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async _runWithRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/retry.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `$ZodCheckGreaterThan` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `.wasm-function[12335]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `.wasm-function[107]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/composite.mjs:142` |
| 0.0% | 1.1ms | 0.0% | 130.6ms | `.wasm-function[182]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:27` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `call` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `node:fs/promises` | `node:fs/promises:8` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `createToken` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/internal/re.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1211` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `invocationParams` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:221` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `__embind_register_bigint` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `emval_lookupTypes` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[fz_new_stream]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 90.8ms | `extract` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:486` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `IterableReadableStream` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `resolvePromiseWithFirstResolvingFunctionCallCheck` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `toBuffer` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs` |
| 0.0% | 1.1ms | 0.0% | 3.0ms | `getStructuringElement` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `Page` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `convertLangChainToolCallToOpenAI` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:43` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `WritableState` | `internal:streams/writable:139` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `extractDefs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/checks.js:99` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `.wasm-function[1310]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `normalizeDef` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:746` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `delete` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async _` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:487` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `FSStream` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `isRunnable` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `node:fs` | `node:fs:553` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `prefixGenerator` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `AsyncGeneratorWithSetup` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js` |
| 0.0% | 1.0ms | 0.0% | 42.6ms | `countNonZero` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/io.js` |
| 0.0% | 1.0ms | 0.0% | 199.8ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:273` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `getBinarySync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `wrapConversion` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1135` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `get lc_serializable_keys` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/serializable.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `EventEmitter` | `node:events:16` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `unshift` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `__embind_register_class_function` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.0ms | 0.0% | 3.1ms | `bound optional` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `ChannelWrite` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/sax-js/sax.js:522` |
| 0.0% | 1.0ms | 0.0% | 19.9ms | `.wasm-function[2667]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `_getTracingInheritableMetadataFromConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js` |
| 0.0% | 1.0ms | 0.0% | 4.3ms | `bound decodeMemoryView` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[jpeg_fill_bit_buffer]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:1751` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts` |
| 0.0% | 1.0ms | 0.3% | 830.9ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.0ms | 0.0% | 2.1ms | `_isIntervalPaused` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:66` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `padStart` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `Buffer` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `includes` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 3.1ms | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:496` |
| 0.0% | 1.0ms | 0.0% | 3.2ms | `mupdf-wasm.wasm.wasm-function[build_tree]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 2.1ms | `min` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:518` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `isDir` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `ReadableState` | `internal:streams/readable:30` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:33` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `lc_name` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js` |
| 0.0% | 1.0ms | 0.0% | 54.6ms | `.wasm-function[4417]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async doWrite` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js` |
| 0.0% | 1.0ms | 0.0% | 2.3ms | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:91` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:1` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `.wasm-function[197]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `nullableProcessor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[pdf_drop_gstate]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 8.0ms | `mupdf-wasm.wasm.wasm-function[show_string]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:204` |
| 0.0% | 999us | 0.0% | 999us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/checks.js` |
| 0.0% | 999us | 0.0% | 999us | `Userdata` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js` |
| 0.0% | 995us | 0.0% | 995us | `_array` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:718` |
| 0.0% | 993us | 0.0% | 993us | `mupdf-wasm.wasm.wasm-function[tt_face_goto_table]` | `[native code]` |
| 0.0% | 992us | 0.0% | 992us | `close` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/stream.js` |
| 0.0% | 991us | 0.0% | 2.0ms | `getMicrosecondPrecisionDatestring` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:31` |
| 0.0% | 991us | 30.6% | 83.84s | `.wasm-function[9540]` | `[native code]` |
| 0.0% | 989us | 0.0% | 989us | `buffer` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/is.mjs:40` |
| 0.0% | 989us | 10.1% | 27.81s | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:936` |
| 0.0% | 989us | 0.0% | 989us | `async pRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js` |
| 0.0% | 986us | 0.0% | 986us | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:36` |
| 0.0% | 986us | 0.0% | 986us | `node:path` | `node:path:4` |
| 0.0% | 985us | 0.0% | 985us | `attachEdge` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` |
| 0.0% | 983us | 0.0% | 983us | `isCheckpointEnvelope` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/stream/convert.js` |
| 0.0% | 981us | 0.0% | 981us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/node_modules/openai/internal/qs/utils.mjs` |
| 0.0% | 978us | 0.0% | 978us | `emptyChannels` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/channels/base.js:88` |
| 0.0% | 977us | 0.0% | 977us | `.wasm-function[1948]` | `[native code]` |
| 0.0% | 977us | 0.0% | 977us | `async convertPdfToImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts` |
| 0.0% | 975us | 0.0% | 975us | `v1` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/v1.js` |
| 0.0% | 975us | 0.0% | 131.6ms | `.wasm-function[280]` | `[native code]` |
| 0.0% | 972us | 0.0% | 972us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:359` |
| 0.0% | 968us | 0.0% | 1.9ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:1534` |
| 0.0% | 966us | 0.0% | 966us | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 966us | 0.0% | 966us | `__embind_register_value_array_element` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 966us | 0.0% | 966us | `async _runLoop` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js` |
| 0.0% | 966us | 0.0% | 966us | `__embind_register_class` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 965us | 0.0% | 965us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs` |
| 0.0% | 958us | 0.0% | 958us | `resize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs` |
| 0.0% | 956us | 0.0% | 956us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:1055` |
| 0.0% | 956us | 0.0% | 956us | `checkpointNamespaceFromNs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 953us | 0.0% | 953us | `mupdf-wasm.wasm.wasm-function[init_block]` | `[native code]` |
| 0.0% | 947us | 0.0% | 947us | `convertToOpenAITool` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/function_calling.js` |
| 0.0% | 944us | 0.0% | 944us | `isStructuredToolParams` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/types.js:29` |
| 0.0% | 940us | 0.0% | 940us | `AsciiToString` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 940us | 0.0% | 940us | `XXH3_mul128_fold64` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/hash.js` |
| 0.0% | 936us | 0.0% | 936us | `toUpperCase` | `[native code]` |
| 0.0% | 934us | 0.0% | 6.8ms | `filter` | `[native code]` |
| 0.0% | 934us | 0.0% | 51.1ms | `bound int` | `[native code]` |
| 0.0% | 933us | 0.0% | 933us | `@lazy` | `[native code]` |
| 0.0% | 931us | 0.0% | 931us | `RegisteredPointer` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 931us | 0.0% | 931us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:19` |
| 0.0% | 929us | 0.0% | 929us | `mupdf-wasm.wasm.wasm-function[scale_row_from_temp]` | `[native code]` |
| 0.0% | 929us | 0.0% | 929us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:275` |
| 0.0% | 925us | 0.0% | 925us | `__embind_register_constant` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 922us | 0.0% | 922us | `from` | `[native code]` |
| 0.0% | 921us | 0.0% | 921us | `ZodObject` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:40` |
| 0.0% | 918us | 0.0% | 918us | `hexToBytes` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/xxhash/xxhash.js:20` |
| 0.0% | 912us | 0.0% | 912us | `async _executeTasksWithRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js` |
| 0.0% | 910us | 0.0% | 9.2ms | `objectProcessor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:282` |
| 0.0% | 910us | 0.1% | 431.7ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js:191` |
| 0.0% | 909us | 0.0% | 909us | `integer` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/is.mjs` |
| 0.0% | 907us | 0.0% | 907us | `_prepareSingleTask` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js` |
| 0.0% | 905us | 0.0% | 54.0ms | `onComplete` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 896us | 0.0% | 896us | `getDefaultClientConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js:923` |
| 0.0% | 893us | 0.0% | 2.1ms | `next` | `[native code]` |
| 0.0% | 893us | 0.0% | 893us | `async _generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js` |
| 0.0% | 891us | 0.0% | 891us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/ranges/intersects.js:9` |
| 0.0% | 891us | 0.0% | 891us | `Client` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js` |
| 0.0% | 889us | 0.0% | 889us | `Serializable` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/serializable.js:82` |
| 0.0% | 886us | 0.0% | 886us | `performIteration` | `[native code]` |
| 0.0% | 882us | 0.0% | 882us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:64` |

## Call Tree (Total Time)

| Total% | Total | Self% | Self | Function | Location |
|-------:|------:|------:|-----:|----------|----------|
| 37.7% | 103.06s | 1.4% | 4.03s | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 31.1% | 85.17s | 0.0% | 165.5ms | `(unknown)` | `[native code]` |
| 30.6% | 83.84s | 0.0% | 991us | `.wasm-function[9540]` | `[native code]` |
| 30.6% | 83.83s | 0.0% | 128.8ms | `.wasm-function[2968]` | `[native code]` |
| 30.0% | 82.21s | 0.0% | 3.0ms | `.wasm-function[557]` | `[native code]` |
| 30.0% | 82.15s | 0.0% | 0us | `morphologyEx` | `[native code]` |
| 30.0% | 82.08s | 0.0% | 0us | `.wasm-function[505]` | `[native code]` |
| 30.0% | 82.08s | 0.0% | 0us | `.wasm-function[1308]` | `[native code]` |
| 30.0% | 82.08s | 0.0% | 0us | `.wasm-function[10385]` | `[native code]` |
| 15.8% | 43.42s | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:631` |
| 13.4% | 36.70s | 0.0% | 3.5ms | `Promise` | `[native code]` |
| 12.9% | 35.51s | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:630` |
| 12.8% | 35.18s | 6.6% | 18.19s | `(anonymous)` | `[native code]` |
| 12.1% | 33.22s | 0.0% | 0us | `detectVerticalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:566` |
| 10.1% | 27.81s | 0.0% | 989us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:936` |
| 10.1% | 27.80s | 10.1% | 27.80s | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/base.js` |
| 9.9% | 27.27s | 0.0% | 0us | `async cropBbsRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:840` |
| 9.2% | 25.27s | 9.2% | 25.27s | `.wasm-function[8869]` | `[native code]` |
| 8.9% | 24.37s | 0.0% | 0us | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:482` |
| 7.5% | 20.69s | 7.5% | 20.69s | `.wasm-function[8885]` | `[native code]` |
| 7.3% | 20.03s | 7.3% | 20.03s | `.wasm-function[8901]` | `[native code]` |
| 7.1% | 19.54s | 0.0% | 0us | `async call` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:133` |
| 7.1% | 19.54s | 0.0% | 0us | `async func` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:291` |
| 6.6% | 18.13s | 0.0% | 0us | `async _generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:284` |
| 6.2% | 16.97s | 0.0% | 86.2ms | `map` | `[native code]` |
| 5.9% | 16.13s | 0.0% | 0us | `convertOpenRouterResponseToBaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/converters/messages.js:33` |
| 5.8% | 16.08s | 3.0% | 8.45s | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:304` |
| 5.8% | 16.07s | 5.8% | 16.07s | `.wasm-function[8918]` | `[native code]` |
| 5.7% | 15.63s | 5.7% | 15.63s | `log` | `[native code]` |
| 5.5% | 15.06s | 0.0% | 0us | `async extract` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:143` |
| 5.5% | 15.06s | 5.5% | 15.06s | `withStructuredOutput` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js` |
| 4.7% | 12.97s | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:176` |
| 4.6% | 12.81s | 0.0% | 0us | `_pipeline` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:1729` |
| 4.6% | 12.81s | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:1730` |
| 4.6% | 12.80s | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:182` |
| 4.5% | 12.40s | 0.0% | 0us | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:230` |
| 4.3% | 11.93s | 0.1% | 389.6ms | `wasm-stub` | `[native code]` |
| 4.2% | 11.74s | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:155` |
| 3.9% | 10.79s | 0.1% | 469.9ms | `.wasm-function[6137]` | `[native code]` |
| 3.7% | 10.32s | 0.2% | 651.7ms | `.wasm-function[6148]` | `[native code]` |
| 3.7% | 10.21s | 0.0% | 4.5ms | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:500` |
| 3.4% | 9.49s | 0.0% | 43.3ms | `detectVerticalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:575` |
| 3.4% | 9.30s | 0.0% | 6.0ms | `__emval_invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 3.3% | 9.29s | 1.0% | 2.84s | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:316` |
| 3.3% | 9.29s | 0.0% | 0us | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:316` |
| 2.6% | 7.12s | 0.0% | 0us | `async compressImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:23` |
| 2.5% | 7.09s | 2.5% | 6.87s | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:426` |
| 2.5% | 6.97s | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:150` |
| 2.5% | 6.92s | 0.0% | 0us | `async call` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:249` |
| 2.5% | 6.92s | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:91` |
| 2.5% | 6.92s | 0.0% | 0us | `async call` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:104` |
| 2.5% | 6.91s | 0.0% | 0us | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:11` |
| 2.5% | 6.91s | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:49` |
| 2.5% | 6.91s | 0.0% | 0us | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:17` |
| 2.5% | 6.91s | 2.5% | 6.91s | `async mapBatched` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:89` |
| 2.5% | 6.84s | 0.5% | 1.48s | `decodeMemoryView` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 2.4% | 6.70s | 0.0% | 0us | `async compressImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:12` |
| 2.4% | 6.70s | 0.0% | 0us | `async compressImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:9` |
| 2.4% | 6.70s | 0.0% | 0us | `async mapBatched` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:86` |
| 2.4% | 6.69s | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:35` |
| 2.4% | 6.69s | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:39` |
| 2.3% | 6.39s | 0.2% | 629.8ms | `Mat.ucharPtr` | `[native code]` |
| 2.2% | 6.06s | 0.0% | 1.2ms | `runWithConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js:29` |
| 2.2% | 6.05s | 0.0% | 0us | `convertCompletionsMessageToBaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:183` |
| 2.1% | 5.95s | 0.8% | 2.43s | `reduce` | `[native code]` |
| 1.9% | 5.22s | 1.9% | 5.22s | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:333` |
| 1.7% | 4.66s | 1.7% | 4.66s | `Uint8Array` | `[native code]` |
| 1.6% | 4.37s | 0.0% | 0us | `isInteropZodSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:32` |
| 1.6% | 4.37s | 0.0% | 0us | `async call` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:107` |
| 1.6% | 4.37s | 1.6% | 4.37s | `isZodSchemaV4` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js` |
| 1.4% | 4.07s | 0.0% | 0us | `convertCompletionsMessageToBaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:184` |
| 1.4% | 4.03s | 1.4% | 4.03s | `AIMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/ai.js:64` |
| 1.4% | 3.82s | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:686` |
| 1.4% | 3.82s | 0.0% | 0us | `metadata` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:685` |
| 1.3% | 3.56s | 1.3% | 3.56s | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:345` |
| 1.2% | 3.54s | 0.0% | 0us | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:46` |
| 1.2% | 3.46s | 0.0% | 0us | `ensureConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js:90` |
| 1.2% | 3.46s | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:303` |
| 1.2% | 3.46s | 1.2% | 3.46s | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js:90` |
| 1.2% | 3.46s | 0.0% | 0us | `patchConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js:128` |
| 1.1% | 3.25s | 1.1% | 3.25s | `handleMultiModalOutput` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/utils/output.js` |
| 1.1% | 3.11s | 1.1% | 3.11s | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:269` |
| 1.0% | 2.96s | 1.0% | 2.96s | `convertCompletionsMessageToBaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:165` |
| 0.9% | 2.65s | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:168` |
| 0.9% | 2.55s | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/parse.js:20` |
| 0.9% | 2.55s | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/parse.js:18` |
| 0.9% | 2.54s | 0.0% | 0us | `async interopParseAsync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:90` |
| 0.9% | 2.54s | 0.0% | 0us | `async interopParseAsync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:91` |
| 0.9% | 2.54s | 0.0% | 0us | `async call` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:108` |
| 0.9% | 2.48s | 0.0% | 0us | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:49` |
| 0.8% | 2.44s | 0.5% | 1.48s | `emval_returnValue` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.8% | 2.19s | 0.7% | 1.93s | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:232` |
| 0.7% | 2.08s | 0.0% | 0us | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:362` |
| 0.7% | 2.07s | 0.0% | 0us | `convertToDottedOrderFormat` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:37` |
| 0.7% | 2.07s | 0.7% | 2.07s | `replace` | `[native code]` |
| 0.7% | 2.03s | 0.4% | 1.32s | `convertCompletionsMessageToBaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:166` |
| 0.7% | 2.01s | 0.0% | 0us | `AIMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/ai.js:84` |
| 0.7% | 2.01s | 0.7% | 2.01s | `BaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/base.js:122` |
| 0.7% | 2.00s | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:127` |
| 0.7% | 2.00s | 0.0% | 0us | `.wasm-function[5841]` | `[native code]` |
| 0.7% | 2.00s | 0.0% | 59.1ms | `.wasm-function[934]` | `[native code]` |
| 0.7% | 2.00s | 0.0% | 0us | `.wasm-function[16092]` | `[native code]` |
| 0.7% | 2.00s | 0.0% | 0us | `adaptiveThreshold` | `[native code]` |
| 0.7% | 1.99s | 0.7% | 1.99s | `convertOpenRouterResponseToBaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/converters/messages.js:39` |
| 0.7% | 1.99s | 0.5% | 1.48s | `bound toWireType` | `[native code]` |
| 0.6% | 1.86s | 0.0% | 0us | `async _generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:285` |
| 0.6% | 1.86s | 0.6% | 1.86s | `isInstance` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/base.js` |
| 0.6% | 1.86s | 0.0% | 0us | `isInstance` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/ai.js:121` |
| 0.6% | 1.85s | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:596` |
| 0.6% | 1.85s | 0.0% | 0us | `async cropBbsRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:869` |
| 0.6% | 1.85s | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:604` |
| 0.6% | 1.84s | 0.0% | 0us | `_next` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:48` |
| 0.6% | 1.84s | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:38` |
| 0.6% | 1.83s | 0.6% | 1.79s | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.5% | 1.63s | 0.0% | 0us | `.wasm-function[1037]` | `[native code]` |
| 0.5% | 1.63s | 0.0% | 0us | `.wasm-function[581]` | `[native code]` |
| 0.5% | 1.58s | 0.0% | 0us | `run` | `node:async_hooks:99` |
| 0.5% | 1.56s | 0.5% | 1.56s | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js` |
| 0.5% | 1.54s | 0.0% | 0us | `async convertPdfToImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:76` |
| 0.5% | 1.54s | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[png_from_pixmap]` | `[native code]` |
| 0.5% | 1.54s | 0.0% | 0us | `asPNG` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:1045` |
| 0.5% | 1.54s | 0.0% | 234.9ms | `mupdf-wasm.wasm.wasm-function[png_write_band]` | `[native code]` |
| 0.5% | 1.54s | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_write_pixmap_as_png]` | `[native code]` |
| 0.5% | 1.54s | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_new_buffer_from_pixmap_as_png]` | `[native code]` |
| 0.5% | 1.54s | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[wasm_new_buffer_from_pixmap_as_png]` | `[native code]` |
| 0.5% | 1.54s | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_write_band]` | `[native code]` |
| 0.5% | 1.43s | 0.4% | 1.29s | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.4% | 1.35s | 0.0% | 1.2ms | `_resolvePromises` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:57` |
| 0.4% | 1.35s | 0.0% | 0us | `_tryToStartAnother` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:94` |
| 0.4% | 1.35s | 0.4% | 1.35s | `emit` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/eventemitter3/index.js:167` |
| 0.4% | 1.30s | 0.4% | 1.30s | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js` |
| 0.4% | 1.28s | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[deflate]` | `[native code]` |
| 0.4% | 1.28s | 0.2% | 586.3ms | `mupdf-wasm.wasm.wasm-function[deflate_slow]` | `[native code]` |
| 0.4% | 1.26s | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:11` |
| 0.4% | 1.26s | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:28` |
| 0.4% | 1.26s | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:20` |
| 0.4% | 1.22s | 0.4% | 1.22s | `copyDataProperties` | `[native code]` |
| 0.4% | 1.22s | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:326` |
| 0.4% | 1.17s | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:177` |
| 0.4% | 1.11s | 0.4% | 1.11s | `cloneObject` | `[native code]` |
| 0.3% | 1.07s | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:852` |
| 0.3% | 1.01s | 0.0% | 0us | `convertCompletionsMessageToBaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:179` |
| 0.3% | 999.5ms | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:693` |
| 0.3% | 916.1ms | 0.3% | 916.1ms | `get buffer` | `[native code]` |
| 0.3% | 909.7ms | 0.3% | 909.7ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.3% | 900.3ms | 0.2% | 759.4ms | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:206` |
| 0.3% | 890.2ms | 0.3% | 890.2ms | `json` | `[native code]` |
| 0.3% | 890.2ms | 0.0% | 0us | `async _generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:281` |
| 0.3% | 889.7ms | 0.2% | 568.1ms | `bound nonConstNoSmartPtrRawPointerToWireType` | `[native code]` |
| 0.3% | 846.2ms | 0.3% | 846.2ms | `.wasm-function[9388]` | `[native code]` |
| 0.3% | 830.9ms | 0.0% | 1.0ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.3% | 824.9ms | 0.3% | 824.9ms | `handleMultiModalOutput` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/utils/output.js:81` |
| 0.2% | 811.3ms | 0.2% | 811.3ms | `_next` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:47` |
| 0.2% | 808.3ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:141` |
| 0.2% | 807.8ms | 0.0% | 4.1ms | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:499` |
| 0.2% | 787.7ms | 0.2% | 787.7ms | `.wasm-function[2953]` | `[native code]` |
| 0.2% | 743.8ms | 0.1% | 365.9ms | `bound fromWireType` | `[native code]` |
| 0.2% | 741.6ms | 0.0% | 0us | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:73` |
| 0.2% | 708.5ms | 0.2% | 708.5ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:137` |
| 0.2% | 701.2ms | 0.0% | 0us | `async createWasm` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.2% | 685.9ms | 0.0% | 1.1ms | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:308` |
| 0.2% | 684.7ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:309` |
| 0.2% | 684.7ms | 0.0% | 0us | `async _generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:266` |
| 0.2% | 684.7ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:308` |
| 0.2% | 647.9ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:178` |
| 0.2% | 628.0ms | 0.0% | 4.5ms | `detectVerticalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:574` |
| 0.2% | 619.2ms | 0.2% | 619.2ms | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:145` |
| 0.2% | 610.0ms | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:715` |
| 0.2% | 554.0ms | 0.2% | 554.0ms | `parseToolCall` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:26` |
| 0.1% | 497.0ms | 0.0% | 0us | `async _generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:272` |
| 0.1% | 497.0ms | 0.0% | 0us | `async add` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:152` |
| 0.1% | 495.8ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:171` |
| 0.1% | 493.7ms | 0.0% | 59.7ms | `async run` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:153` |
| 0.1% | 493.7ms | 0.0% | 0us | `_tryToStartAnother` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:105` |
| 0.1% | 491.5ms | 0.1% | 491.5ms | `get size` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/priority-queue.js` |
| 0.1% | 491.5ms | 0.0% | 0us | `_tryToStartAnother` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:87` |
| 0.1% | 484.9ms | 0.1% | 405.9ms | `mupdf-wasm.wasm.wasm-function[fill_window]` | `[native code]` |
| 0.1% | 478.9ms | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:707` |
| 0.1% | 470.6ms | 0.1% | 470.6ms | `async _generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:267` |
| 0.1% | 434.0ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:157` |
| 0.1% | 434.0ms | 0.0% | 0us | `async pRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js:86` |
| 0.1% | 431.7ms | 0.0% | 910us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js:191` |
| 0.1% | 431.7ms | 0.0% | 0us | `async pRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js:124` |
| 0.1% | 430.8ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:272` |
| 0.1% | 407.2ms | 0.0% | 0us | `v7` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/uuid/src/v7.js:8` |
| 0.1% | 407.2ms | 0.0% | 0us | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:349` |
| 0.1% | 388.2ms | 0.1% | 388.2ms | `fromWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.1% | 367.4ms | 0.1% | 367.4ms | `toWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.1% | 342.9ms | 0.0% | 0us | `async classifyImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:28` |
| 0.1% | 342.9ms | 0.1% | 342.9ms | `ChatOpenRouter` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:157` |
| 0.1% | 341.4ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:82` |
| 0.1% | 341.4ms | 0.0% | 0us | `async generatePrompt` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:484` |
| 0.1% | 341.4ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:84` |
| 0.1% | 340.4ms | 0.0% | 0us | `async generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:427` |
| 0.1% | 337.2ms | 0.0% | 0us | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:205` |
| 0.1% | 330.9ms | 0.0% | 0us | `findContours` | `[native code]` |
| 0.1% | 330.9ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:226` |
| 0.1% | 329.6ms | 0.0% | 0us | `.wasm-function[68]` | `[native code]` |
| 0.1% | 326.4ms | 0.1% | 326.4ms | `set` | `[native code]` |
| 0.1% | 320.1ms | 0.1% | 318.6ms | `runChecks` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:34` |
| 0.1% | 319.6ms | 0.1% | 319.6ms | `nonConstNoSmartPtrRawPointerToWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.1% | 305.8ms | 0.0% | 0us | `.wasm-function[76]` | `[native code]` |
| 0.1% | 301.7ms | 0.0% | 0us | `.wasm-function[491]` | `[native code]` |
| 0.1% | 301.7ms | 0.0% | 169.0ms | `.wasm-function[1543]` | `[native code]` |
| 0.1% | 301.7ms | 0.0% | 0us | `.wasm-function[10948]` | `[native code]` |
| 0.1% | 289.7ms | 0.0% | 0us | `async convertPdfToImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:74` |
| 0.1% | 289.7ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[wasm_pdf_new_pixmap_from_page_with_usage]` | `[native code]` |
| 0.1% | 289.7ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_new_pixmap_from_page_with_separations_and_usage]` | `[native code]` |
| 0.1% | 289.7ms | 0.0% | 0us | `toPixmap` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:2231` |
| 0.1% | 288.3ms | 0.0% | 207.9ms | `anonymous` | `[native code]` |
| 0.1% | 288.0ms | 0.1% | 288.0ms | `findWasmBinary` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.1% | 284.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_run_page_with_usage]` | `[native code]` |
| 0.1% | 284.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_process_raw_contents]` | `[native code]` |
| 0.1% | 284.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_run_page_contents_with_usage_imp]` | `[native code]` |
| 0.1% | 284.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_process_contents]` | `[native code]` |
| 0.0% | 269.2ms | 0.0% | 0us | `.wasm-function[674]` | `[native code]` |
| 0.0% | 247.8ms | 0.0% | 0us | `init` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:22` |
| 0.0% | 231.2ms | 0.0% | 0us | `async loadImageForOpenCV` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:79` |
| 0.0% | 230.3ms | 0.0% | 230.3ms | `stringify` | `[native code]` |
| 0.0% | 228.9ms | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:690` |
| 0.0% | 228.9ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:276` |
| 0.0% | 216.7ms | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:623` |
| 0.0% | 209.4ms | 0.0% | 209.4ms | `_createInputDescriptor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:109` |
| 0.0% | 203.3ms | 0.0% | 0us | `v7Bytes` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/uuid/src/v7.js:46` |
| 0.0% | 202.6ms | 0.0% | 202.6ms | `v7Bytes` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/uuid/src/v7.js:42` |
| 0.0% | 200.1ms | 0.0% | 0us | `cvtColor` | `[native code]` |
| 0.0% | 199.8ms | 0.0% | 1.0ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:273` |
| 0.0% | 198.9ms | 0.0% | 0us | `.wasm-function[11624]` | `[native code]` |
| 0.0% | 198.9ms | 0.0% | 198.9ms | `.wasm-function[9672]` | `[native code]` |
| 0.0% | 198.9ms | 0.0% | 0us | `.wasm-function[390]` | `[native code]` |
| 0.0% | 198.7ms | 0.0% | 198.7ms | `fetch` | `[native code]` |
| 0.0% | 198.4ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[pdf_process_stream]` | `[native code]` |
| 0.0% | 193.3ms | 0.0% | 193.3ms | `mupdf-wasm.wasm.wasm-function[longest_match]` | `[native code]` |
| 0.0% | 192.1ms | 0.0% | 192.1ms | `Error` | `[native code]` |
| 0.0% | 191.1ms | 0.0% | 0us | `toFile` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:90` |
| 0.0% | 190.1ms | 0.0% | 2.6ms | `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` | `[native code]` |
| 0.0% | 189.4ms | 0.0% | 71.1ms | `async withRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:31` |
| 0.0% | 188.9ms | 0.0% | 58.2ms | `.wasm-function[510]` | `[native code]` |
| 0.0% | 185.2ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:170` |
| 0.0% | 174.5ms | 0.0% | 174.5ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:851` |
| 0.0% | 169.0ms | 0.0% | 169.0ms | `.wasm-function[12303]` | `[native code]` |
| 0.0% | 153.6ms | 0.0% | 153.6ms | `parse` | `[native code]` |
| 0.0% | 150.2ms | 0.0% | 0us | `parseToolCall` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:17` |
| 0.0% | 149.4ms | 0.0% | 0us | `bound require` | `[native code]` |
| 0.0% | 145.3ms | 0.0% | 0us | `dilate` | `[native code]` |
| 0.0% | 145.3ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:211` |
| 0.0% | 143.7ms | 0.0% | 143.7ms | `toHandle` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 143.7ms | 0.0% | 0us | `toWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 136.5ms | 0.0% | 136.5ms | `Duplex` | `internal:streams/duplex:4` |
| 0.0% | 134.0ms | 0.0% | 134.0ms | `defineProperty` | `[native code]` |
| 0.0% | 134.0ms | 0.0% | 0us | `.wasm-function[11526]` | `[native code]` |
| 0.0% | 134.0ms | 0.0% | 0us | `.wasm-function[635]` | `[native code]` |
| 0.0% | 134.0ms | 0.0% | 0us | `.wasm-function[4377]` | `[native code]` |
| 0.0% | 133.1ms | 0.0% | 133.1ms | `.wasm-function[12009]` | `[native code]` |
| 0.0% | 132.7ms | 0.0% | 56.7ms | `flatIntoArrayWithCallback` | `[native code]` |
| 0.0% | 131.6ms | 0.0% | 975us | `.wasm-function[280]` | `[native code]` |
| 0.0% | 131.5ms | 0.0% | 0us | `async _generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:269` |
| 0.0% | 130.6ms | 0.0% | 0us | `.wasm-function[734]` | `[native code]` |
| 0.0% | 130.6ms | 0.0% | 0us | `.wasm-function[12008]` | `[native code]` |
| 0.0% | 130.6ms | 0.0% | 0us | `.wasm-function[11375]` | `[native code]` |
| 0.0% | 130.6ms | 0.0% | 1.1ms | `.wasm-function[182]` | `[native code]` |
| 0.0% | 130.6ms | 0.0% | 130.6ms | `.wasm-function[8596]` | `[native code]` |
| 0.0% | 130.4ms | 0.0% | 0us | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:349` |
| 0.0% | 129.5ms | 0.0% | 0us | `.wasm-function[1199]` | `[native code]` |
| 0.0% | 129.5ms | 0.0% | 0us | `_emscripten_resize_heap` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 128.0ms | 0.0% | 0us | `Duplex` | `internal:streams/duplex:15` |
| 0.0% | 125.8ms | 0.0% | 0us | `Mat` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 125.8ms | 0.0% | 125.8ms | `growMemory` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 125.8ms | 0.0% | 0us | `.wasm-function[6673]` | `[native code]` |
| 0.0% | 125.8ms | 0.0% | 0us | `.wasm-function[6662]` | `[native code]` |
| 0.0% | 125.8ms | 0.0% | 0us | `constructor Mat` | `[native code]` |
| 0.0% | 125.8ms | 0.0% | 0us | `.wasm-function[98]` | `[native code]` |
| 0.0% | 122.1ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:117` |
| 0.0% | 121.1ms | 0.0% | 1.2ms | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:32` |
| 0.0% | 120.8ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/stringify.js:8` |
| 0.0% | 120.8ms | 0.0% | 120.8ms | `push` | `[native code]` |
| 0.0% | 119.6ms | 0.0% | 0us | `initRuntime` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 119.6ms | 0.0% | 0us | `doRun` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 119.6ms | 0.0% | 0us | `run` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 118.2ms | 0.0% | 0us | `async withRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:38` |
| 0.0% | 115.7ms | 0.0% | 0us | `invocationParams` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:216` |
| 0.0% | 113.8ms | 0.0% | 0us | `convertToOpenAITool` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/function_calling.js:45` |
| 0.0% | 111.8ms | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:691` |
| 0.0% | 110.7ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:934` |
| 0.0% | 108.4ms | 0.0% | 1.2ms | `require` | `[native code]` |
| 0.0% | 105.2ms | 0.0% | 0us | `async createDebugImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:795` |
| 0.0% | 103.0ms | 0.0% | 0us | `threshold` | `[native code]` |
| 0.0% | 101.8ms | 0.0% | 0us | `.wasm-function[14700]` | `[native code]` |
| 0.0% | 101.8ms | 0.0% | 0us | `.wasm-function[9595]` | `[native code]` |
| 0.0% | 98.8ms | 0.0% | 98.8ms | `.wasm-function[549]` | `[native code]` |
| 0.0% | 96.9ms | 0.0% | 28.8ms | `forEach` | `[native code]` |
| 0.0% | 96.8ms | 0.0% | 0us | `getRunnableConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js:19` |
| 0.0% | 96.7ms | 0.0% | 0us | `ensureLangGraphConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/utils/config.js:142` |
| 0.0% | 96.5ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:34` |
| 0.0% | 95.5ms | 0.0% | 0us | `isRootLevelExplicitInvoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/utils/config.js:131` |
| 0.0% | 94.7ms | 0.0% | 0us | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:210` |
| 0.0% | 94.3ms | 0.0% | 94.3ms | `getStore` | `node:async_hooks:145` |
| 0.0% | 94.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_run_S]` | `[native code]` |
| 0.0% | 94.1ms | 0.0% | 1.3ms | `mupdf-wasm.wasm.wasm-function[pdf_show_path]` | `[native code]` |
| 0.0% | 91.5ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_draw_stroke_path]` | `[native code]` |
| 0.0% | 91.5ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_stroke_path]` | `[native code]` |
| 0.0% | 91.5ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_draw_stroke_path_aux]` | `[native code]` |
| 0.0% | 90.8ms | 0.0% | 1.1ms | `extract` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:486` |
| 0.0% | 87.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_convert_rasterizer]` | `[native code]` |
| 0.0% | 87.8ms | 0.0% | 32.2ms | `mupdf-wasm.wasm.wasm-function[fz_convert_gel]` | `[native code]` |
| 0.0% | 87.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_open_filter]` | `[native code]` |
| 0.0% | 87.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_open_image_stream]` | `[native code]` |
| 0.0% | 86.4ms | 0.0% | 0us | `bound check` | `[native code]` |
| 0.0% | 86.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_open_object_array]` | `[native code]` |
| 0.0% | 86.0ms | 0.0% | 86.0ms | `mupdf-wasm.wasm.wasm-function[build_filter]` | `[native code]` |
| 0.0% | 80.4ms | 0.0% | 0us | `.wasm-function[16862]` | `[native code]` |
| 0.0% | 80.4ms | 0.0% | 80.4ms | `mupdf-wasm.wasm.wasm-function[adler32]` | `[native code]` |
| 0.0% | 70.2ms | 0.0% | 0us | `bitwise_or` | `[native code]` |
| 0.0% | 70.2ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:195` |
| 0.0% | 70.2ms | 0.0% | 70.2ms | `.wasm-function[12680]` | `[native code]` |
| 0.0% | 70.2ms | 0.0% | 0us | `.wasm-function[503]` | `[native code]` |
| 0.0% | 70.2ms | 0.0% | 0us | `.wasm-function[15702]` | `[native code]` |
| 0.0% | 70.2ms | 0.0% | 0us | `.wasm-function[1260]` | `[native code]` |
| 0.0% | 68.3ms | 0.0% | 68.3ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:73` |
| 0.0% | 65.5ms | 0.0% | 65.5ms | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:226` |
| 0.0% | 63.8ms | 0.0% | 11.6ms | `whenDependentTypesAreResolved` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 63.3ms | 0.0% | 63.3ms | `join` | `[native code]` |
| 0.0% | 62.1ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:59` |
| 0.0% | 62.1ms | 0.0% | 0us | `bound join` | `[native code]` |
| 0.0% | 61.5ms | 0.0% | 0us | `findWasmBinary` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 61.2ms | 0.0% | 0us | `async mkdir` | `node:fs/promises:247` |
| 0.0% | 61.2ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:60` |
| 0.0% | 61.2ms | 0.0% | 61.2ms | `mkdir` | `[native code]` |
| 0.0% | 61.0ms | 0.0% | 61.0ms | `node:worker_threads` | `node:worker_threads:36` |
| 0.0% | 60.5ms | 0.0% | 0us | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:464` |
| 0.0% | 60.4ms | 0.0% | 0us | `getLsParams` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:252` |
| 0.0% | 60.4ms | 0.0% | 0us | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:212` |
| 0.0% | 60.4ms | 0.0% | 0us | `getLsParamsWithDefaults` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:200` |
| 0.0% | 60.0ms | 0.0% | 60.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:489` |
| 0.0% | 58.5ms | 0.0% | 0us | `convertToOpenAIFunction` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/function_calling.js:27` |
| 0.0% | 58.0ms | 0.0% | 0us | `bound min` | `[native code]` |
| 0.0% | 57.8ms | 0.0% | 57.8ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts` |
| 0.0% | 57.4ms | 0.0% | 57.4ms | `keys` | `[native code]` |
| 0.0% | 57.3ms | 0.0% | 0us | `async _mergeConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:621` |
| 0.0% | 57.3ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:645` |
| 0.0% | 57.3ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:644` |
| 0.0% | 57.1ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:118` |
| 0.0% | 57.0ms | 0.0% | 57.0ms | `mupdf-wasm.wasm.wasm-function[paint_span_with_color_3_solid]` | `[native code]` |
| 0.0% | 56.7ms | 0.0% | 0us | `async writeFile` | `node:fs/promises:187` |
| 0.0% | 56.7ms | 0.0% | 56.7ms | `newResolvedPromise` | `[native code]` |
| 0.0% | 56.7ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:61` |
| 0.0% | 56.2ms | 0.0% | 0us | `async _mergeConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:622` |
| 0.0% | 56.2ms | 0.0% | 0us | `mergeConfigs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js:23` |
| 0.0% | 55.8ms | 0.0% | 55.8ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:49` |
| 0.0% | 55.6ms | 0.0% | 55.6ms | `binaryDecode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 55.5ms | 0.0% | 0us | `ChatOpenRouter` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:154` |
| 0.0% | 55.5ms | 0.0% | 0us | `BaseChatModel` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:64` |
| 0.0% | 55.2ms | 0.0% | 55.2ms | `convertToOpenAIFunction` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/function_calling.js:26` |
| 0.0% | 55.2ms | 0.0% | 0us | `async _generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:268` |
| 0.0% | 54.6ms | 0.0% | 54.6ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` |
| 0.0% | 54.6ms | 0.0% | 1.0ms | `.wasm-function[4417]` | `[native code]` |
| 0.0% | 54.0ms | 0.0% | 905us | `onComplete` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 51.8ms | 0.0% | 51.8ms | `extract` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:483` |
| 0.0% | 51.7ms | 0.0% | 0us | `BaseLanguageModel` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:179` |
| 0.0% | 51.7ms | 0.0% | 51.7ms | `_addVersion` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js` |
| 0.0% | 51.7ms | 0.0% | 0us | `BaseLangChain` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:141` |
| 0.0% | 51.1ms | 0.0% | 934us | `bound int` | `[native code]` |
| 0.0% | 48.9ms | 0.0% | 48.9ms | `getRunnableConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js` |
| 0.0% | 48.9ms | 0.0% | 0us | `ensureConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js:76` |
| 0.0% | 48.9ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:83` |
| 0.0% | 48.8ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:44` |
| 0.0% | 48.7ms | 0.0% | 48.7ms | `instantiate` | `[native code]` |
| 0.0% | 48.3ms | 0.0% | 48.3ms | `ReadableState` | `internal:streams/readable` |
| 0.0% | 47.8ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:4` |
| 0.0% | 46.4ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:102` |
| 0.0% | 45.5ms | 0.0% | 0us | `clone` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:262` |
| 0.0% | 44.7ms | 0.0% | 0us | `ZodNumber` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` |
| 0.0% | 43.2ms | 0.0% | 43.2ms | `.wasm-function[2992]` | `[native code]` |
| 0.0% | 42.6ms | 0.0% | 1.0ms | `countNonZero` | `[native code]` |
| 0.0% | 42.5ms | 0.0% | 0us | `detectVerticalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:557` |
| 0.0% | 42.2ms | 0.0% | 0us | `toJsonSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/json_schema.js:48` |
| 0.0% | 41.5ms | 0.0% | 2.0ms | `.wasm-function[466]` | `[native code]` |
| 0.0% | 41.5ms | 0.0% | 0us | `.wasm-function[1293]` | `[native code]` |
| 0.0% | 41.5ms | 0.0% | 0us | `.wasm-function[11668]` | `[native code]` |
| 0.0% | 40.9ms | 0.0% | 1.2ms | `mupdf-wasm.wasm.wasm-function[pdf_run_ET]` | `[native code]` |
| 0.0% | 40.1ms | 0.0% | 0us | `detectVerticalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:556` |
| 0.0% | 39.7ms | 0.0% | 4.4ms | `mupdf-wasm.wasm.wasm-function[pdf_flush_text_imp]` | `[native code]` |
| 0.0% | 39.4ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:574` |
| 0.0% | 39.4ms | 0.0% | 39.4ms | `messageToOpenAIRole` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/utils/misc.js:27` |
| 0.0% | 39.3ms | 0.0% | 39.3ms | `WritableState` | `internal:streams/writable:135` |
| 0.0% | 39.1ms | 0.0% | 0us | `init` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 39.1ms | 0.0% | 0us | `createStandardStreams` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 38.9ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:108` |
| 0.0% | 38.7ms | 0.0% | 0us | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:462` |
| 0.0% | 38.5ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:101` |
| 0.0% | 38.5ms | 0.0% | 0us | `_number` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:307` |
| 0.0% | 38.4ms | 0.0% | 38.4ms | `.wasm-function[11510]` | `[native code]` |
| 0.0% | 38.1ms | 0.0% | 38.1ms | `WritableState` | `internal:streams/writable:140` |
| 0.0% | 38.0ms | 0.0% | 38.0ms | `resolve` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 38.0ms | 0.0% | 0us | `symlink` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 37.6ms | 0.0% | 37.6ms | `isFinite` | `[native code]` |
| 0.0% | 37.6ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:497` |
| 0.0% | 36.8ms | 0.0% | 36.8ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js` |
| 0.0% | 36.8ms | 0.0% | 0us | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:215` |
| 0.0% | 36.8ms | 0.0% | 0us | `isTracingEnabled` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/callbacks.js:10` |
| 0.0% | 36.8ms | 0.0% | 36.8ms | `find` | `[native code]` |
| 0.0% | 36.8ms | 0.0% | 0us | `_configureSync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/callbacks/manager.js:523` |
| 0.0% | 36.7ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/detect-libc.js:6` |
| 0.0% | 36.0ms | 0.0% | 0us | `node:util` | `node:util:2` |
| 0.0% | 35.2ms | 0.0% | 2.7ms | `mupdf-wasm.wasm.wasm-function[fz_draw_fill_text]` | `[native code]` |
| 0.0% | 35.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_fill_text]` | `[native code]` |
| 0.0% | 34.5ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:103` |
| 0.0% | 34.1ms | 0.0% | 34.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:585` |
| 0.0% | 33.6ms | 0.0% | 33.6ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:1731` |
| 0.0% | 33.3ms | 0.0% | 0us | `check` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:98` |
| 0.0% | 31.0ms | 0.0% | 0us | `bound clone` | `[native code]` |
| 0.0% | 30.9ms | 0.0% | 0us | `craftInvokerFunction` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 28.2ms | 0.0% | 0us | `async instantiateArrayBuffer` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 27.7ms | 0.0% | 0us | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:43` |
| 0.0% | 27.5ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_malloc]` | `[native code]` |
| 0.0% | 27.5ms | 0.0% | 1.2ms | `mupdf-wasm.wasm.wasm-function[do_scavenging_malloc]` | `[native code]` |
| 0.0% | 27.3ms | 0.0% | 0us | `__embind_register_function` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 27.2ms | 0.0% | 27.2ms | `Int8Array` | `[native code]` |
| 0.0% | 26.8ms | 0.0% | 26.8ms | `tool` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js` |
| 0.0% | 26.6ms | 0.0% | 0us | `clone` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:106` |
| 0.0% | 26.3ms | 0.0% | 1.4ms | `mupdf-wasm.wasm.wasm-function[emscripten_builtin_malloc]` | `[native code]` |
| 0.0% | 26.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_malloc_default]` | `[native code]` |
| 0.0% | 25.9ms | 0.0% | 0us | `ZodString` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` |
| 0.0% | 25.9ms | 0.0% | 0us | `_string` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:7` |
| 0.0% | 25.3ms | 0.0% | 0us | `check` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:95` |
| 0.0% | 25.3ms | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:729` |
| 0.0% | 25.2ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:488` |
| 0.0% | 25.0ms | 0.0% | 0us | `process` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:60` |
| 0.0% | 24.9ms | 0.0% | 1.3ms | `Z` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 24.9ms | 0.0% | 0us | `h` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 24.7ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[_tr_flush_block]` | `[native code]` |
| 0.0% | 23.8ms | 0.0% | 23.8ms | `mergeDefs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js` |
| 0.0% | 23.6ms | 0.0% | 0us | `R` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 23.5ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:135` |
| 0.0% | 23.5ms | 0.0% | 23.5ms | `string` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/regexes.js:94` |
| 0.0% | 23.5ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:111` |
| 0.0% | 23.5ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:258` |
| 0.0% | 23.5ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:108` |
| 0.0% | 23.3ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:37` |
| 0.0% | 23.2ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:302` |
| 0.0% | 22.6ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:508` |
| 0.0% | 22.4ms | 0.0% | 22.4ms | `ZodNumber` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:43` |
| 0.0% | 21.4ms | 0.0% | 0us | `tool` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:286` |
| 0.0% | 21.4ms | 0.0% | 1.3ms | `DynamicStructuredTool` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:236` |
| 0.0% | 21.0ms | 0.0% | 0us | `toJSONSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:598` |
| 0.0% | 20.6ms | 0.0% | 20.6ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:192` |
| 0.0% | 20.5ms | 0.0% | 20.5ms | `mupdf-wasm.wasm.wasm-function[compress_block]` | `[native code]` |
| 0.0% | 20.1ms | 0.0% | 0us | `StructuredTool` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:68` |
| 0.0% | 19.9ms | 0.0% | 1.0ms | `.wasm-function[2667]` | `[native code]` |
| 0.0% | 19.6ms | 0.0% | 0us | `ZodNumberFormat` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` |
| 0.0% | 19.6ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:570` |
| 0.0% | 19.6ms | 0.0% | 0us | `int` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:530` |
| 0.0% | 19.6ms | 0.0% | 0us | `_int` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:324` |
| 0.0% | 19.6ms | 0.0% | 19.6ms | `has` | `[native code]` |
| 0.0% | 19.4ms | 0.0% | 0us | `toJsonSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/json_schema.js:47` |
| 0.0% | 19.4ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:316` |
| 0.0% | 19.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_font]` | `[native code]` |
| 0.0% | 19.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_try_load_font]` | `[native code]` |
| 0.0% | 18.9ms | 0.0% | 18.9ms | `BaseLangChain` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:139` |
| 0.0% | 18.6ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/index.cjs:1` |
| 0.0% | 18.5ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:519` |
| 0.0% | 18.5ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:16` |
| 0.0% | 17.8ms | 0.0% | 0us | `ZodObject` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` |
| 0.0% | 17.5ms | 0.0% | 2.3ms | `.wasm-function[2969]` | `[native code]` |
| 0.0% | 16.7ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:37` |
| 0.0% | 16.7ms | 0.0% | 15.3ms | `mupdf-wasm.wasm.wasm-function[draw_glyph]` | `[native code]` |
| 0.0% | 16.3ms | 0.0% | 16.3ms | `validateThis` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 15.9ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_process_Do]` | `[native code]` |
| 0.0% | 15.8ms | 0.0% | 5.8ms | `mupdf-wasm.wasm.wasm-function[fz_render_glyph]` | `[native code]` |
| 0.0% | 15.6ms | 0.0% | 12.1ms | `fromWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 15.5ms | 0.0% | 15.5ms | `init` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:13` |
| 0.0% | 15.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_available_1592]` | `[native code]` |
| 0.0% | 15.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:3` |
| 0.0% | 14.9ms | 0.0% | 5.3ms | `createJsInvoker` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 14.5ms | 0.0% | 0us | `async F` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 14.5ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_fill_image]` | `[native code]` |
| 0.0% | 14.5ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_show_image_imp]` | `[native code]` |
| 0.0% | 14.5ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_draw_fill_image]` | `[native code]` |
| 0.0% | 14.5ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_show_image]` | `[native code]` |
| 0.0% | 14.5ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_run_Do_image]` | `[native code]` |
| 0.0% | 13.8ms | 0.0% | 0us | `node:fs` | `node:fs:2` |
| 0.0% | 13.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_read]` | `[native code]` |
| 0.0% | 13.0ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[fz_new_colorspace_context]` | `[native code]` |
| 0.0% | 13.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[wasm_init_context]` | `[native code]` |
| 0.0% | 13.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:28` |
| 0.0% | 13.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_new_context_imp]` | `[native code]` |
| 0.0% | 12.0ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:738` |
| 0.0% | 11.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_new_icc_colorspace]` | `[native code]` |
| 0.0% | 11.4ms | 0.0% | 0us | `node:stream` | `node:stream:2` |
| 0.0% | 11.0ms | 0.0% | 0us | `interopZodTransformInputSchemaImpl` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:406` |
| 0.0% | 10.2ms | 0.0% | 0us | `internal:stream` | `internal:stream:2` |
| 0.0% | 9.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_type0_font]` | `[native code]` |
| 0.0% | 9.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[load_cid_font]` | `[native code]` |
| 0.0% | 9.6ms | 0.0% | 9.6ms | `getFullYear` | `[native code]` |
| 0.0% | 9.6ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[lcms2mt_cmsCreateProfilePlaceholder]` | `[native code]` |
| 0.0% | 9.6ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[do_tzset]` | `[native code]` |
| 0.0% | 9.6ms | 0.0% | 0us | `k` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 9.6ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[gmtime]` | `[native code]` |
| 0.0% | 9.5ms | 0.0% | 0us | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/registries.js:35` |
| 0.0% | 9.5ms | 0.0% | 9.5ms | `Function` | `[native code]` |
| 0.0% | 9.3ms | 0.0% | 1.4ms | `mupdf-wasm.wasm.wasm-function[fz_find_item]` | `[native code]` |
| 0.0% | 9.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_find_item]` | `[native code]` |
| 0.0% | 9.2ms | 0.0% | 0us | `node:fs/promises` | `node:fs/promises:2` |
| 0.0% | 9.2ms | 0.0% | 910us | `objectProcessor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:282` |
| 0.0% | 8.7ms | 0.0% | 0us | `__embind_register_class_function` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 8.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_render_ft_glyph]` | `[native code]` |
| 0.0% | 8.4ms | 0.0% | 0us | `interopZodTransformInputSchemaImpl` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:405` |
| 0.0% | 8.2ms | 0.0% | 0us | `internal:streams/pipeline` | `internal:streams/pipeline:2` |
| 0.0% | 8.2ms | 0.0% | 0us | `internal:streams/compose` | `internal:streams/compose:2` |
| 0.0% | 8.2ms | 0.0% | 0us | `async extract` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:154` |
| 0.0% | 8.0ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[show_string]` | `[native code]` |
| 0.0% | 8.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_run_Tj]` | `[native code]` |
| 0.0% | 8.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_show_string]` | `[native code]` |
| 0.0% | 7.9ms | 0.0% | 7.9ms | `mupdf-wasm.wasm.wasm-function[fz_hash_find]` | `[native code]` |
| 0.0% | 7.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[next_flated]` | `[native code]` |
| 0.0% | 7.8ms | 0.0% | 5.2ms | `mupdf-wasm.wasm.wasm-function[inflate]` | `[native code]` |
| 0.0% | 7.7ms | 0.0% | 6.5ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:92` |
| 0.0% | 7.7ms | 0.0% | 0us | `_` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 7.7ms | 0.0% | 7.7ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` |
| 0.0% | 7.6ms | 0.0% | 0us | `__embind_register_class` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 7.5ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[decompress_onepass]` | `[native code]` |
| 0.0% | 7.5ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_get_pixmap_from_image]` | `[native code]` |
| 0.0% | 7.5ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[jpeg_read_scanlines]` | `[native code]` |
| 0.0% | 7.5ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[process_data_simple_main_8796]` | `[native code]` |
| 0.0% | 7.5ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[next_dctd]` | `[native code]` |
| 0.0% | 7.5ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_decomp_image_from_stream]` | `[native code]` |
| 0.0% | 7.5ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[compressed_image_get_pixmap]` | `[native code]` |
| 0.0% | 7.0ms | 0.0% | 4.0ms | `mupdf-wasm.wasm.wasm-function[pdf_show_char]` | `[native code]` |
| 0.0% | 7.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_image_stream]` | `[native code]` |
| 0.0% | 6.9ms | 0.0% | 0us | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:67` |
| 0.0% | 6.8ms | 0.0% | 0us | `__embind_register_class_constructor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 6.8ms | 0.0% | 934us | `filter` | `[native code]` |
| 0.0% | 6.6ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_font_descriptor]` | `[native code]` |
| 0.0% | 6.6ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_font]` | `[native code]` |
| 0.0% | 6.6ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:507` |
| 0.0% | 6.5ms | 0.0% | 6.5ms | `mupdf-wasm.wasm.wasm-function[jpeg_idct_16x16]` | `[native code]` |
| 0.0% | 6.4ms | 0.0% | 6.4ms | `resize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:268` |
| 0.0% | 6.4ms | 0.0% | 0us | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:68` |
| 0.0% | 6.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_new_pixmap]` | `[native code]` |
| 0.0% | 6.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_new_pixmap_with_data]` | `[native code]` |
| 0.0% | 6.3ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:1820` |
| 0.0% | 6.3ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:41` |
| 0.0% | 6.2ms | 0.0% | 0us | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:487` |
| 0.0% | 6.2ms | 0.0% | 0us | `_prepareNextTasks` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:247` |
| 0.0% | 6.1ms | 0.0% | 0us | `node:path` | `node:path:2` |
| 0.0% | 6.1ms | 0.0% | 0us | `internal:validators` | `internal:validators:2` |
| 0.0% | 5.9ms | 0.0% | 0us | `internal:streams/duplex` | `internal:streams/duplex:2` |
| 0.0% | 5.9ms | 0.0% | 4.6ms | `binaryDecode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 5.8ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/utility.mjs:27` |
| 0.0% | 5.8ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1172` |
| 0.0% | 5.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_scale_pixmap_cached]` | `[native code]` |
| 0.0% | 5.8ms | 0.0% | 0us | `async stream` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:924` |
| 0.0% | 5.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_transform_pixmap]` | `[native code]` |
| 0.0% | 5.8ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1181` |
| 0.0% | 5.8ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:46` |
| 0.0% | 5.8ms | 0.0% | 0us | `async detectAndCropBbs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:118` |
| 0.0% | 5.8ms | 0.0% | 0us | `async detectAndCropBbs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:121` |
| 0.0% | 5.7ms | 0.0% | 1.2ms | `mupdf-wasm.wasm.wasm-function[pdf_lex]` | `[native code]` |
| 0.0% | 5.6ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_stream]` | `[native code]` |
| 0.0% | 5.6ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_read_best]` | `[native code]` |
| 0.0% | 5.6ms | 0.0% | 0us | `generatorResume` | `[native code]` |
| 0.0% | 5.6ms | 0.0% | 0us | `_commit` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:217` |
| 0.0% | 5.5ms | 0.0% | 0us | `toJSONSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:599` |
| 0.0% | 5.4ms | 0.0% | 0us | `process` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:47` |
| 0.0% | 5.4ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/sharp.mjs:61` |
| 0.0% | 5.3ms | 0.0% | 3.2ms | `__embind_register_enum_value` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 5.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_new_pixmap_with_bbox]` | `[native code]` |
| 0.0% | 5.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[sbrk]` | `[native code]` |
| 0.0% | 5.2ms | 0.0% | 0us | `registerType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 5.2ms | 0.0% | 1.1ms | `sharedRegisterType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 5.1ms | 0.0% | 0us | `async classifyImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:24` |
| 0.0% | 5.1ms | 0.0% | 0us | `async classifyImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:26` |
| 0.0% | 5.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[ft_smooth_render]` | `[native code]` |
| 0.0% | 5.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[FT_Render_Glyph_Internal]` | `[native code]` |
| 0.0% | 4.8ms | 0.0% | 0us | `finalize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:355` |
| 0.0% | 4.8ms | 0.0% | 0us | `.wasm-function[585]` | `[native code]` |
| 0.0% | 4.7ms | 0.0% | 0us | `async func` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:31` |
| 0.0% | 4.7ms | 0.0% | 0us | `async _write` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:36` |
| 0.0% | 4.7ms | 0.0% | 0us | `async _write` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:50` |
| 0.0% | 4.7ms | 0.0% | 0us | `async compressImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:20` |
| 0.0% | 4.7ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:107` |
| 0.0% | 4.5ms | 0.0% | 0us | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:58` |
| 0.0% | 4.5ms | 0.0% | 2.2ms | `writeFileSync` | `[native code]` |
| 0.0% | 4.4ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:31` |
| 0.0% | 4.4ms | 0.0% | 0us | `async func` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:29` |
| 0.0% | 4.4ms | 0.0% | 0us | `async stream` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:939` |
| 0.0% | 4.4ms | 0.0% | 0us | `async stream` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:121` |
| 0.0% | 4.4ms | 0.0% | 0us | `async stream` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:119` |
| 0.0% | 4.4ms | 0.0% | 0us | `async interopSafeParseAsync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:65` |
| 0.0% | 4.4ms | 0.0% | 0us | `async interopSafeParseAsync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:69` |
| 0.0% | 4.4ms | 0.0% | 0us | `async _validateResult` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:154` |
| 0.0% | 4.4ms | 0.0% | 0us | `async _validateResult` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:147` |
| 0.0% | 4.4ms | 0.0% | 2.2ms | `mupdf-wasm.wasm.wasm-function[fz_read_byte]` | `[native code]` |
| 0.0% | 4.4ms | 0.0% | 4.4ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 4.3ms | 0.0% | 0us | `RunnablePassthrough` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/passthrough.js:39` |
| 0.0% | 4.3ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/read.js:28` |
| 0.0% | 4.3ms | 0.0% | 4.3ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/passthrough.js` |
| 0.0% | 4.3ms | 0.0% | 0us | `node:crypto` | `node:crypto:2` |
| 0.0% | 4.3ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:27` |
| 0.0% | 4.3ms | 0.0% | 1.0ms | `bound decodeMemoryView` | `[native code]` |
| 0.0% | 4.2ms | 0.0% | 0us | `object` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:791` |
| 0.0% | 4.2ms | 0.0% | 4.2ms | `dlopen` | `[native code]` |
| 0.0% | 4.2ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/sharp-linux-x64/index.cjs:2` |
| 0.0% | 4.1ms | 0.0% | 0us | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:42` |
| 0.0% | 4.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:21` |
| 0.0% | 4.0ms | 0.0% | 3.1ms | `exposePublicSymbol` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 3.9ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:1737` |
| 0.0% | 3.9ms | 0.0% | 1.9ms | `readFileSync` | `[native code]` |
| 0.0% | 3.8ms | 0.0% | 0us | `AsyncCaller` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js:185` |
| 0.0% | 3.8ms | 0.0% | 0us | `BaseLanguageModel` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:186` |
| 0.0% | 3.7ms | 0.0% | 0us | `async doWrite` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:53` |
| 0.0% | 3.7ms | 0.0% | 2.4ms | `mupdf-wasm.wasm.wasm-function[ft_glyphslot_preset_bitmap]` | `[native code]` |
| 0.0% | 3.7ms | 0.0% | 0us | `.wasm-function[4554]` | `[native code]` |
| 0.0% | 3.7ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:252` |
| 0.0% | 3.7ms | 0.0% | 0us | `MatVector.get` | `[native code]` |
| 0.0% | 3.7ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_stroke_bezier]` | `[native code]` |
| 0.0% | 3.7ms | 0.0% | 3.7ms | `mupdf-wasm.wasm.wasm-function[scale_row_to_temp3]` | `[native code]` |
| 0.0% | 3.6ms | 0.0% | 3.6ms | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/list.js:134` |
| 0.0% | 3.6ms | 0.0% | 0us | `.wasm-function[584]` | `[native code]` |
| 0.0% | 3.6ms | 0.0% | 0us | `updateMemoryViews` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 3.6ms | 0.0% | 0us | `growMemory` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 3.6ms | 0.0% | 3.6ms | `attachCropImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:97` |
| 0.0% | 3.5ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_dict_get]` | `[native code]` |
| 0.0% | 3.5ms | 0.0% | 3.5ms | `entries` | `[native code]` |
| 0.0% | 3.5ms | 0.0% | 0us | `get value` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:34` |
| 0.0% | 3.4ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:737` |
| 0.0% | 3.4ms | 0.0% | 0us | `interopZodObjectStrict` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:312` |
| 0.0% | 3.4ms | 0.0% | 1.2ms | `__embind_register_constant` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 3.4ms | 0.0% | 0us | `some` | `[native code]` |
| 0.0% | 3.3ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js:133` |
| 0.0% | 3.3ms | 0.0% | 0us | `AsyncGeneratorWithSetup` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js:132` |
| 0.0% | 3.3ms | 0.0% | 0us | `bound describe` | `[native code]` |
| 0.0% | 3.3ms | 0.0% | 0us | `describe` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:167` |
| 0.0% | 3.3ms | 0.0% | 0us | `ZodOptional` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` |
| 0.0% | 3.3ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1074` |
| 0.0% | 3.3ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1076` |
| 0.0% | 3.3ms | 0.0% | 0us | `async initialize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:245` |
| 0.0% | 3.3ms | 0.0% | 3.3ms | `mupdf-wasm.wasm.wasm-function[pdf_run_Tr]` | `[native code]` |
| 0.0% | 3.3ms | 0.0% | 0us | `async _streamIterator` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1126` |
| 0.0% | 3.3ms | 0.0% | 3.3ms | `mupdf-wasm.wasm.wasm-function[crc32_z]` | `[native code]` |
| 0.0% | 3.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[putchunk]` | `[native code]` |
| 0.0% | 3.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[crc32]` | `[native code]` |
| 0.0% | 3.2ms | 0.0% | 3.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:67` |
| 0.0% | 3.2ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[build_tree]` | `[native code]` |
| 0.0% | 3.2ms | 0.0% | 3.2ms | `cached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js` |
| 0.0% | 3.2ms | 0.0% | 0us | `bound call` | `[native code]` |
| 0.0% | 3.2ms | 0.0% | 3.2ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` |
| 0.0% | 3.2ms | 0.0% | 0us | `async _` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 3.2ms | 0.0% | 0us | `callWithOptions` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js:204` |
| 0.0% | 3.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_to_unicode]` | `[native code]` |
| 0.0% | 3.1ms | 0.0% | 0us | `defaultProcessor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:461` |
| 0.0% | 3.1ms | 0.0% | 0us | `compile` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:439` |
| 0.0% | 3.1ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:113` |
| 0.0% | 3.1ms | 0.0% | 0us | `async _runLoop` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1200` |
| 0.0% | 3.1ms | 0.0% | 1.3ms | `async generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:432` |
| 0.0% | 3.1ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1102` |
| 0.0% | 3.1ms | 0.0% | 0us | `async _route` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:40` |
| 0.0% | 3.1ms | 0.0% | 0us | `async _route` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:39` |
| 0.0% | 3.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:697` |
| 0.0% | 3.1ms | 0.0% | 1.0ms | `bound optional` | `[native code]` |
| 0.0% | 3.1ms | 0.0% | 3.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/checks.js:104` |
| 0.0% | 3.1ms | 0.0% | 1.0ms | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:496` |
| 0.0% | 3.1ms | 0.0% | 0us | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:47` |
| 0.0% | 3.1ms | 0.0% | 0us | `async _runLoop` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1208` |
| 0.0% | 3.0ms | 0.0% | 0us | `withStructuredOutput` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:397` |
| 0.0% | 3.0ms | 0.0% | 1.1ms | `getStructuringElement` | `[native code]` |
| 0.0% | 3.0ms | 0.0% | 0us | `__embind_register_class_property` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 3.0ms | 0.0% | 0us | `createNode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 3.0ms | 0.0% | 0us | `async classifyImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:61` |
| 0.0% | 2.9ms | 0.0% | 0us | `staticInit` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.9ms | 0.0% | 0us | `mknod` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.9ms | 0.0% | 0us | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:340` |
| 0.0% | 2.9ms | 0.0% | 2.9ms | `assign` | `[native code]` |
| 0.0% | 2.9ms | 0.0% | 2.9ms | `isZodNullableV4` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:229` |
| 0.0% | 2.9ms | 0.0% | 0us | `interopZodTransformInputSchemaImpl` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:422` |
| 0.0% | 2.9ms | 0.0% | 0us | `interopZodTransformInputSchemaImpl` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:417` |
| 0.0% | 2.8ms | 0.0% | 2.8ms | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/registries.js:33` |
| 0.0% | 2.6ms | 0.0% | 0us | `PQueue` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:33` |
| 0.0% | 2.6ms | 0.0% | 2.6ms | `PriorityQueue` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/priority-queue.js` |
| 0.0% | 2.5ms | 0.0% | 2.5ms | `mupdf-wasm.wasm.wasm-function[FT_Outline_Get_CBox]` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 0us | `async doWrite` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:66` |
| 0.0% | 2.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_walk_path]` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 1.2ms | `mupdf-wasm.wasm.wasm-function[fz_stroke_lineto_aux]` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_flatten_stroke_path]` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[do_flatten_stroke]` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 0us | `__emval_create_invoker` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.4ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1104` |
| 0.0% | 2.4ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:1755` |
| 0.0% | 2.4ms | 0.0% | 1.2ms | `defineLazy` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:62` |
| 0.0% | 2.4ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:259` |
| 0.0% | 2.4ms | 0.0% | 0us | `.wasm-function[744]` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 2.4ms | `mupdf-wasm.wasm.wasm-function[pdf_get_xref_entry_aux]` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect]` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect_chain]` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_cache_object]` | `[native code]` |
| 0.0% | 2.3ms | 0.0% | 2.3ms | `_createInputDescriptor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:63` |
| 0.0% | 2.3ms | 0.0% | 2.3ms | `now` | `[native code]` |
| 0.0% | 2.3ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:976` |
| 0.0% | 2.3ms | 0.0% | 2.3ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 2.3ms | 0.0% | 0us | `async _first` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:704` |
| 0.0% | 2.3ms | 0.0% | 0us | `node:events` | `node:events:10` |
| 0.0% | 2.3ms | 0.0% | 0us | `async convertPdfToImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:34` |
| 0.0% | 2.3ms | 0.0% | 1.2ms | `mupdf-wasm.wasm.wasm-function[fz_open_document_with_buffer]` | `[native code]` |
| 0.0% | 2.3ms | 0.0% | 0us | `openDocument` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:1475` |
| 0.0% | 2.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[wasm_open_document_with_buffer]` | `[native code]` |
| 0.0% | 2.3ms | 0.0% | 2.3ms | `async call` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js` |
| 0.0% | 2.3ms | 0.0% | 1.0ms | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:91` |
| 0.0% | 2.3ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:868` |
| 0.0% | 2.2ms | 0.0% | 0us | `attachCropImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:107` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:743` |
| 0.0% | 2.2ms | 0.0% | 0us | `gatherIteratorSync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:53` |
| 0.0% | 2.2ms | 0.0% | 0us | `putWrites` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:390` |
| 0.0% | 2.2ms | 0.0% | 0us | `prefixGenerator` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:44` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `validateThis` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `warn` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 0us | `attachCropImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:109` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js` |
| 0.0% | 2.2ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:5` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `__emval_decref` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 2.2ms | 0.0% | 0us | `interopZodTransformInputSchemaImpl` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:431` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `add` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/registries.js:10` |
| 0.0% | 2.2ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:99` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:78` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v3/types.js:479` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `mupdf-wasm.wasm.wasm-function[pqdownheap]` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 0us | `async _runLoop` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1204` |
| 0.0% | 2.2ms | 0.0% | 0us | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:447` |
| 0.0% | 2.2ms | 0.0% | 0us | `__embind_register_smart_ptr` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `hasOwnProperty` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[tt_glyph_load]` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[load_truetype_glyph]` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[FT_Load_Glyph]` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `mupdf-wasm.wasm.wasm-function[tt_face_get_location]` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 0us | `makeDynCaller` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `get` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 0us | `getWasmTableEntry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.2ms | 0.0% | 0us | `embind__requireFunction` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.1ms | 0.0% | 0us | `async _runWithRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/retry.js:26` |
| 0.0% | 2.1ms | 0.0% | 0us | `async _executeTasksWithRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:139` |
| 0.0% | 2.1ms | 0.0% | 0us | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:66` |
| 0.0% | 2.1ms | 0.0% | 1.0ms | `min` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:518` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `mupdf-wasm.wasm.wasm-function[body]` | `[native code]` |
| 0.0% | 2.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_md5_buffer]` | `[native code]` |
| 0.0% | 2.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_md5_update]` | `[native code]` |
| 0.0% | 2.1ms | 0.0% | 0us | `ZodNullable` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` |
| 0.0% | 2.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1128` |
| 0.0% | 2.1ms | 0.0% | 0us | `route` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1156` |
| 0.0% | 2.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1207` |
| 0.0% | 2.1ms | 0.0% | 0us | `async convertPdfToImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:85` |
| 0.0% | 2.1ms | 0.0% | 0us | `async convertPdfToImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:56` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `detectVerticalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts` |
| 0.0% | 2.1ms | 0.0% | 0us | `_tryToStartAnother` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:98` |
| 0.0% | 2.1ms | 0.0% | 1.0ms | `_isIntervalPaused` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:66` |
| 0.0% | 2.1ms | 0.0% | 893us | `next` | `[native code]` |
| 0.0% | 2.1ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js:134` |
| 0.0% | 2.1ms | 0.0% | 0us | `interopZodTransformInputSchemaImpl` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:395` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `isZodSchemaV3` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:13` |
| 0.0% | 2.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[next_concat]` | `[native code]` |
| 0.0% | 2.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[lex_number]` | `[native code]` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` |
| 0.0% | 2.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:32` |
| 0.0% | 2.1ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:926` |
| 0.0% | 2.0ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:112` |
| 0.0% | 2.0ms | 0.0% | 0us | `optional` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1110` |
| 0.0% | 2.0ms | 0.0% | 0us | `__embind_finalize_value_object` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.0ms | 0.0% | 0us | `mount` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.0ms | 0.0% | 0us | `internal:shared` | `internal:shared:2` |
| 0.0% | 2.0ms | 0.0% | 0us | `createToken` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/internal/re.js:50` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `RegExp` | `[native code]` |
| 0.0% | 2.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:145` |
| 0.0% | 2.0ms | 0.0% | 991us | `getMicrosecondPrecisionDatestring` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:31` |
| 0.0% | 2.0ms | 0.0% | 0us | `_prepareSingleTask` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:490` |
| 0.0% | 2.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_remap_cmap_range]` | `[native code]` |
| 0.0% | 2.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_remap_cmap]` | `[native code]` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `mupdf-wasm.wasm.wasm-function[pdf_lookup_cmap_full]` | `[native code]` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `_createInputDescriptor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs` |
| 0.0% | 2.0ms | 0.0% | 0us | `asPNG` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:1047` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `slice` | `[native code]` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` |
| 0.0% | 1.9ms | 0.0% | 1.9ms | `nonConstNoSmartPtrRawPointerToWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.9ms | 0.0% | 1.9ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:58` |
| 0.0% | 1.9ms | 0.0% | 1.9ms | `RegisteredPointer_fromWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.9ms | 0.0% | 0us | `async I` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 1.9ms | 0.0% | 0us | `async r` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 1.9ms | 0.0% | 0us | `mkdir` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.9ms | 0.0% | 968us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:1534` |
| 0.0% | 1.9ms | 0.0% | 1.9ms | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/node_modules/openai/resources/beta/threads/runs/runs.mjs:186` |
| 0.0% | 1.9ms | 0.0% | 1.9ms | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts` |
| 0.0% | 1.8ms | 0.0% | 0us | `__embind_register_enum` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.8ms | 0.0% | 1.8ms | `objectProcessor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:278` |
| 0.0% | 1.8ms | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:708` |
| 0.0% | 1.8ms | 0.0% | 0us | `async cropperBatch` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:202` |
| 0.0% | 1.8ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:48` |
| 0.0% | 1.8ms | 0.0% | 0us | `async mapBatched` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:71` |
| 0.0% | 1.8ms | 0.0% | 0us | `tool` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:267` |
| 0.0% | 1.8ms | 0.0% | 1.8ms | `validatesOnlyStrings` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/json_schema.js` |
| 0.0% | 1.8ms | 0.0% | 0us | `_separateRunnableConfigFromCallOptions` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:131` |
| 0.0% | 1.8ms | 0.0% | 0us | `_separateRunnableConfigFromCallOptionsCompat` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:72` |
| 0.0% | 1.8ms | 0.0% | 1.8ms | `runChecks` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:48` |
| 0.0% | 1.8ms | 0.0% | 1.8ms | `mupdf-wasm.wasm.wasm-function[ucdn_get_bidi_class]` | `[native code]` |
| 0.0% | 1.7ms | 0.0% | 0us | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:331` |
| 0.0% | 1.7ms | 0.0% | 0us | `getSharedClient` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:400` |
| 0.0% | 1.7ms | 0.0% | 1.7ms | `_pipeline` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:1709` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `objectProcessor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js` |
| 0.0% | 1.6ms | 0.0% | 0us | `extractDefs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:106` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `_addVersion` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:144` |
| 0.0% | 1.5ms | 0.0% | 0us | `ChatOpenRouter` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:155` |
| 0.0% | 1.5ms | 0.0% | 0us | `process` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:54` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `defineProperties` | `[native code]` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `objectProcessor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:289` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `mupdf-wasm.wasm.wasm-function[fz_subpixel_adjust]` | `[native code]` |
| 0.0% | 1.4ms | 0.0% | 0us | `StateGraph` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:159` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `Graph$1` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js` |
| 0.0% | 1.4ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:104` |
| 0.0% | 1.4ms | 0.0% | 0us | `interopZodObjectStrict` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:315` |
| 0.0% | 1.4ms | 0.0% | 0us | `_never` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:457` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `$ZodNever` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:43` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:13` |
| 0.0% | 1.4ms | 0.0% | 0us | `getMicrosecondPrecisionDatestring` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:32` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `toISOString` | `[native code]` |
| 0.0% | 1.4ms | 0.0% | 0us | `convertToDottedOrderFormat` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:35` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `aborted` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `_configHasToolCallId` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/utils.js` |
| 0.0% | 1.4ms | 0.0% | 0us | `async call` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:128` |
| 0.0% | 1.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_new_name]` | `[native code]` |
| 0.0% | 1.4ms | 0.0% | 0us | `extractDefs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:105` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `runWithConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js:33` |
| 0.0% | 1.3ms | 0.0% | 0us | `extractDefs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:194` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/registries.js:37` |
| 0.0% | 1.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_image_imp]` | `[native code]` |
| 0.0% | 1.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_compressed_stream]` | `[native code]` |
| 0.0% | 1.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_image]` | `[native code]` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `mupdf-wasm.wasm.wasm-function[pdf_open_raw_filter]` | `[native code]` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `getStore` | `node:async_hooks` |
| 0.0% | 1.3ms | 0.0% | 0us | `async stream` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:926` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:391` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts` |
| 0.0% | 1.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[end_metatext]` | `[native code]` |
| 0.0% | 1.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_run_EMC]` | `[native code]` |
| 0.0% | 1.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pop_marked_content]` | `[native code]` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `internal:streams/destroy` | `internal:streams/destroy:16` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `async _route` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `mupdf-wasm.wasm.wasm-function[fz_do_catch]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[gray_conic_to]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[gray_raster_render]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[FT_Outline_Decompose]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `mupdf-wasm.wasm.wasm-function[gray_render_line]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `__emval_decref` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.2ms | 0.0% | 0us | `async pRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js:119` |
| 0.0% | 1.2ms | 0.0% | 0us | `async doWrite` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:70` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `_isSkipWrite` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `guarded` | `internal:shared` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[lex_name]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `_commit` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `process` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:93` |
| 0.0% | 1.2ms | 0.0% | 0us | `.wasm-function[158]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `.wasm-function[12382]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `.wasm-function[1709]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `.wasm-function[1735]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `.wasm-function[12363]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:334` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `finalize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js` |
| 0.0% | 1.2ms | 0.0% | 0us | `normalizeDef` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:744` |
| 0.0% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/priority-queue.js:3` |
| 0.0% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:5` |
| 0.0% | 1.2ms | 0.0% | 0us | `async _first` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:647` |
| 0.0% | 1.2ms | 0.0% | 0us | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:451` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `async _first` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `toJSONSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js` |
| 0.0% | 1.2ms | 0.0% | 0us | `_configureSync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/callbacks/manager.js:522` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `getCurrentRunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/singletons/traceable.js:26` |
| 0.0% | 1.2ms | 0.0% | 0us | `getTraceableRunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tracers/tracer_langchain.js:153` |
| 0.0% | 1.2ms | 0.0% | 0us | `runWithConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js:22` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `pump` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/stream.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:177` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/utils/config.js` |
| 0.0% | 1.2ms | 0.0% | 0us | `async _streamIterator` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1009` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_add_line]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[stroke_curveto]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `mupdf-wasm.wasm.wasm-function[fz_insert_gel]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `isRootLevelExplicitInvoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/utils/config.js:130` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `run` | `node:async_hooks` |
| 0.0% | 1.2ms | 0.0% | 0us | `async _getUpdates` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:625` |
| 0.0% | 1.2ms | 0.0% | 0us | `async _getUpdates` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:610` |
| 0.0% | 1.2ms | 0.0% | 0us | `_processQueue` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:136` |
| 0.0% | 1.2ms | 0.0% | 0us | `set concurrency` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:146` |
| 0.0% | 1.2ms | 0.0% | 0us | `PQueue` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:35` |
| 0.0% | 1.2ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/shell.js:6` |
| 0.0% | 1.2ms | 0.0% | 0us | `brand` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/namespace.js:37` |
| 0.0% | 1.2ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/utils/errors.js:80` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `setPrototypeDirectOrThrow` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `BinaryOperatorAggregate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/channels/binop.js` |
| 0.0% | 1.2ms | 0.0% | 0us | `getChannel` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/annotation.js:94` |
| 0.0% | 1.2ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/messages_annotation.js:41` |
| 0.0% | 1.2ms | 0.0% | 0us | `nullable` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1134` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `createNamedFunction` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.2ms | 0.0% | 0us | `bound nullable` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/extractSchema.ts:12` |
| 0.0% | 1.2ms | 0.0% | 0us | `async _route` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:47` |
| 0.0% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/classes/semver.js:7` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` |
| 0.0% | 1.2ms | 0.0% | 0us | `async branchWriter` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:689` |
| 0.0% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:6` |
| 0.0% | 1.2ms | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:613` |
| 0.0% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:203` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_bound_glyph]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_tos_make_trm]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[stroke_lineto]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `_installLazyMethods` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:32` |
| 0.0% | 1.2ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:39` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `interopZodObjectStrict` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:299` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts` |
| 0.0% | 1.2ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/imageSchema.ts:5` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `convertToDottedOrderFormat` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:202` |
| 0.0% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:45` |
| 0.0% | 1.2ms | 0.0% | 0us | `Comparator` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/classes/comparator.js:21` |
| 0.0% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/ranges/subset.js:73` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `setPrototypeDirect` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `internal:stream` | `internal:stream:57` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `isDeltaChannel` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/channels/base.js:12` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `rng` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/uuid/src/rng.js` |
| 0.0% | 1.2ms | 0.0% | 0us | `putWrites` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:383` |
| 0.0% | 1.2ms | 0.0% | 0us | `readFileSync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/filesystem.js:21` |
| 0.0% | 1.2ms | 0.0% | 0us | `isNonGlibcLinuxSync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/detect-libc.js:213` |
| 0.0% | 1.2ms | 0.0% | 0us | `familySync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/detect-libc.js:188` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `readSync` | `node:fs` |
| 0.0% | 1.2ms | 0.0% | 0us | `runtimeLibc` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/libvips.mjs:39` |
| 0.0% | 1.2ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/sharp.mjs:18` |
| 0.0% | 1.2ms | 0.0% | 0us | `runtimePlatformArch` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/libvips.mjs:41` |
| 0.0% | 1.2ms | 0.0% | 0us | `familyFromInterpreterSync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/detect-libc.js:152` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_new_glyph_from_8bpp_data]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[glyph_from_ft_bitmap]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:109` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `ZodNumber` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:42` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_realloc]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[do_scavenging_realloc]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_realloc_array_imp]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[push_cmd]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_moveto]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_run_m]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `_outputWrites` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:412` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mapDebugTaskResults` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/debug.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `bind` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `sha1` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/sha1.js:66` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `putWrites` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `_prepareSingleTask` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:493` |
| 0.0% | 1.1ms | 0.0% | 0us | `v35` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/v35.js:20` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:816` |
| 0.0% | 1.1ms | 0.0% | 0us | `runDestructor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.1ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:396` |
| 0.0% | 1.1ms | 0.0% | 0us | `releaseClassHandle` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.1ms | 0.0% | 0us | `delete` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs` |
| 0.0% | 1.1ms | 0.0% | 0us | `interopZodObjectStrict` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:309` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_paint_image]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_paint_image_imp]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[paint_affine_near_3_fb0]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[pdf_dict_find]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_lookup_resource]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async _runLoop` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1205` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `asyncFunctionDrive` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async channelsFromCheckpoint` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/channels/base.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `async initialize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:304` |
| 0.0% | 1.1ms | 0.0% | 0us | `async channelsFromCheckpoint` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/channels/base.js:168` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async initialize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `BaseLangChain` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:137` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[make_weights]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `flatMap` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:576` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `readChannel` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/io.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `.wasm-function[397]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `toString` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `_procInput` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:731` |
| 0.0% | 1.1ms | 0.0% | 0us | `async compressImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:25` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_cmap]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[pdf_load_cmap]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_cmap_imp]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:40` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `getWriters` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/read.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `_prepareSingleTask` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:510` |
| 0.0% | 1.1ms | 0.0% | 0us | `getNode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/read.js:84` |
| 0.0% | 1.1ms | 0.0% | 0us | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:809` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `getGlobalAsyncLocalStorageInstance` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/globals.js:8` |
| 0.0% | 1.1ms | 0.0% | 0us | `getInstance` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js:16` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[resolve_color]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async cropBbsRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts` |
| 0.0% | 1.1ms | 0.0% | 0us | `async cropBbsRowsNode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:81` |
| 0.0% | 1.1ms | 0.0% | 0us | `async cropBbsRowsNode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:85` |
| 0.0% | 1.1ms | 0.0% | 0us | `async cropBbsRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:811` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[inflate_table]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async _runWithRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/retry.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `$ZodCheckGreaterThan` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `_gte` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:523` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `.wasm-function[12335]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `.wasm-function[221]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `.wasm-function[1086]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `.wasm-function[2136]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `.wasm-function[107]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:61` |
| 0.0% | 1.1ms | 0.0% | 0us | `composite` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/composite.mjs:136` |
| 0.0% | 1.1ms | 0.0% | 0us | `async createDebugImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:796` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/composite.mjs:142` |
| 0.0% | 1.1ms | 0.0% | 0us | `.wasm-function[2996]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `.wasm-function[155]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:972` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:801` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:27` |
| 0.0% | 1.1ms | 0.0% | 0us | `internal:util/inspect` | `internal:util/inspect:154` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `internal:util/inspect:154` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `call` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `_compileResolved` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:456` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `node:fs/promises` | `node:fs/promises:8` |
| 0.0% | 1.1ms | 0.0% | 0us | `validate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:154` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `createToken` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/internal/re.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/internal/re.js:59` |
| 0.0% | 1.1ms | 0.0% | 0us | `get allEdges` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:323` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:38` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1211` |
| 0.0% | 1.1ms | 0.0% | 0us | `.wasm-function[6535]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `.wasm-function[6551]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `invocationParams` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:221` |
| 0.0% | 1.1ms | 0.0% | 0us | `.wasm-function[3389]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_open_buffer]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `__embind_register_bigint` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[fz_new_stream]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `emval_lookupTypes` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:214` |
| 0.0% | 1.1ms | 0.0% | 0us | `IterableReadableWritableStream` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/stream.js:65` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `IterableReadableStream` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `async _streamIterator` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1021` |
| 0.0% | 1.1ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:131` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `resolvePromiseWithFirstResolvingFunctionCallCheck` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `detectVerticalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:561` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `toBuffer` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `convertLangChainToolCallToOpenAI` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:43` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:587` |
| 0.0% | 1.1ms | 0.0% | 0us | `loadPage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:1540` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `Page` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `PDFPage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:2209` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:966` |
| 0.0% | 1.1ms | 0.0% | 0us | `ZodEnum` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:1657` |
| 0.0% | 1.1ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:10` |
| 0.0% | 1.1ms | 0.0% | 0us | `_enum` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1007` |
| 0.0% | 1.1ms | 0.0% | 0us | `getEnumValues` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:17` |
| 0.0% | 1.1ms | 0.0% | 0us | `internal:util/inspect` | `internal:util/inspect:2` |
| 0.0% | 1.1ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:264` |
| 0.0% | 1.1ms | 0.0% | 0us | `detectVerticalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:572` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `WritableState` | `internal:streams/writable:139` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/internal/re.js:197` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `extractDefs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/checks.js:99` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:518` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `.wasm-function[1310]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `normalizeDef` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:746` |
| 0.0% | 1.1ms | 0.0% | 0us | `boundingRect` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:256` |
| 0.0% | 1.1ms | 0.0% | 0us | `_filterInvocationParamsForTracing` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:279` |
| 0.0% | 1.1ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:356` |
| 0.0% | 1.1ms | 0.0% | 0us | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:217` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `delete` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `internal:streams/readable` | `internal:streams/readable:2` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:34` |
| 0.0% | 1.1ms | 0.0% | 0us | `ZodLiteral` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` |
| 0.0% | 1.1ms | 0.0% | 0us | `literal` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1043` |
| 0.0% | 1.1ms | 0.0% | 0us | `init` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:18` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async _` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_is_ocg_hidden]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_is_ocg_hidden_imp]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:487` |
| 0.0% | 1.0ms | 0.0% | 0us | `createStream` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `FSStream` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `open` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.0ms | 0.0% | 0us | `arrayProcessor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:270` |
| 0.0% | 1.0ms | 0.0% | 0us | `addNode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:359` |
| 0.0% | 1.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:105` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `isRunnable` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js` |
| 0.0% | 1.0ms | 0.0% | 0us | `async gatherIterator` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:48` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `node:fs` | `node:fs:553` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `prefixGenerator` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `AsyncGeneratorWithSetup` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js` |
| 0.0% | 1.0ms | 0.0% | 0us | `internal:streams/operators` | `internal:streams/operators:2` |
| 0.0% | 1.0ms | 0.0% | 0us | `_outputWrites` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:410` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/io.js` |
| 0.0% | 1.0ms | 0.0% | 0us | `mapOutputUpdates` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/io.js:109` |
| 0.0% | 1.0ms | 0.0% | 0us | `async getWasmBinary` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `getBinarySync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.0ms | 0.0% | 0us | `async instantiateAsync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `wrapConversion` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1135` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `get lc_serializable_keys` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/serializable.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `EventEmitter` | `node:events:16` |
| 0.0% | 1.0ms | 0.0% | 0us | `Runnable` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `Stream` | `internal:streams/legacy:4` |
| 0.0% | 1.0ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:121` |
| 0.0% | 1.0ms | 0.0% | 0us | `Serializable` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/serializable.js:83` |
| 0.0% | 1.0ms | 0.0% | 0us | `Duplex` | `internal:streams/duplex:37` |
| 0.0% | 1.0ms | 0.0% | 0us | `RunnableBinding` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:612` |
| 0.0% | 1.0ms | 0.0% | 0us | `withConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:57` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `unshift` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `wrapConversion` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1139` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `__embind_register_class_function` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:59` |
| 0.0% | 1.0ms | 0.0% | 0us | `attachNode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:643` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `ChannelWrite` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js` |
| 0.0% | 1.0ms | 0.0% | 0us | `_compileResolved` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:484` |
| 0.0% | 1.0ms | 0.0% | 0us | `initializeSax` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/sax-js/sax.js:520` |
| 0.0% | 1.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/sax-js/sax.js:1197` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/sax-js/sax.js:522` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `_getTracingInheritableMetadataFromConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js` |
| 0.0% | 1.0ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:928` |
| 0.0% | 1.0ms | 0.0% | 0us | `async getCallbackManagerForConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js:19` |
| 0.0% | 1.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[decode_mcu_8778]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[jpeg_fill_bit_buffer]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:14` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:1751` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts` |
| 0.0% | 1.0ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:306` |
| 0.0% | 1.0ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:304` |
| 0.0% | 1.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/utility.mjs:71` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `padStart` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `Buffer` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `includes` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `ensureLangGraphConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/utils/config.js:160` |
| 0.0% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:9` |
| 0.0% | 1.0ms | 0.0% | 0us | `async _runWithRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/retry.js:48` |
| 0.0% | 1.0ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:927` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `isDir` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `ReadableState` | `internal:streams/readable:30` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:33` |
| 0.0% | 1.0ms | 0.0% | 0us | `loadPage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:1536` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `lc_name` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js` |
| 0.0% | 1.0ms | 0.0% | 0us | `getName` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:33` |
| 0.0% | 1.0ms | 0.0% | 0us | `addConditionalEdges` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:108` |
| 0.0% | 1.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:108` |
| 0.0% | 1.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/imageSchema.ts:10` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async doWrite` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:1` |
| 0.0% | 1.0ms | 0.0% | 0us | `createDefaultDirectories` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.0ms | 0.0% | 0us | `FSNode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:47` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `.wasm-function[197]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `readPointer` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.0ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:268` |
| 0.0% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:29` |
| 0.0% | 1.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_grestore]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[pdf_drop_gstate]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_run_Q]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `nullableProcessor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:204` |
| 0.0% | 1.0ms | 0.0% | 0us | `optionalProcessor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:511` |
| 0.0% | 999us | 0.0% | 999us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/checks.js` |
| 0.0% | 999us | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:637` |
| 0.0% | 999us | 0.0% | 999us | `Userdata` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js` |
| 0.0% | 999us | 0.0% | 0us | `ColorSpace` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:594` |
| 0.0% | 998us | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/extractSchema.ts:31` |
| 0.0% | 998us | 0.0% | 0us | `_coercedNumber` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:315` |
| 0.0% | 997us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/detect-libc.js:7` |
| 0.0% | 996us | 0.0% | 0us | `metadata` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:642` |
| 0.0% | 995us | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/extractSchema.ts:107` |
| 0.0% | 995us | 0.0% | 995us | `_array` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:718` |
| 0.0% | 993us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[tt_face_init]` | `[native code]` |
| 0.0% | 993us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[sfnt_load_face]` | `[native code]` |
| 0.0% | 993us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[FT_New_Memory_Face]` | `[native code]` |
| 0.0% | 993us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[open_face]` | `[native code]` |
| 0.0% | 993us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_new_font_from_buffer]` | `[native code]` |
| 0.0% | 993us | 0.0% | 993us | `mupdf-wasm.wasm.wasm-function[tt_face_goto_table]` | `[native code]` |
| 0.0% | 992us | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1126` |
| 0.0% | 992us | 0.0% | 992us | `close` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/stream.js` |
| 0.0% | 991us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:1234` |
| 0.0% | 991us | 0.0% | 0us | `bound _invoke` | `[native code]` |
| 0.0% | 991us | 0.0% | 0us | `async _callWithConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:162` |
| 0.0% | 991us | 0.0% | 0us | `async _invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:1229` |
| 0.0% | 989us | 0.0% | 989us | `buffer` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/is.mjs:40` |
| 0.0% | 989us | 0.0% | 0us | `_createInputDescriptor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:66` |
| 0.0% | 989us | 0.0% | 989us | `async pRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js` |
| 0.0% | 986us | 0.0% | 986us | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:36` |
| 0.0% | 986us | 0.0% | 986us | `node:path` | `node:path:4` |
| 0.0% | 985us | 0.0% | 0us | `_compileResolved` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:500` |
| 0.0% | 985us | 0.0% | 985us | `attachEdge` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` |
| 0.0% | 983us | 0.0% | 0us | `async _streamIterator` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1135` |
| 0.0% | 983us | 0.0% | 983us | `isCheckpointEnvelope` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/stream/convert.js` |
| 0.0% | 981us | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/node_modules/openai/internal/qs/utils.mjs:14` |
| 0.0% | 981us | 0.0% | 981us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/node_modules/openai/internal/qs/utils.mjs` |
| 0.0% | 978us | 0.0% | 0us | `_localRead` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:63` |
| 0.0% | 978us | 0.0% | 978us | `emptyChannels` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/channels/base.js:88` |
| 0.0% | 977us | 0.0% | 977us | `async convertPdfToImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts` |
| 0.0% | 977us | 0.0% | 977us | `.wasm-function[1948]` | `[native code]` |
| 0.0% | 975us | 0.0% | 975us | `v1` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/v1.js` |
| 0.0% | 975us | 0.0% | 0us | `bound RegisteredPointer_fromWireType` | `[native code]` |
| 0.0% | 975us | 0.0% | 0us | `createCheckpoint` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/channels/base.js:149` |
| 0.0% | 975us | 0.0% | 0us | `.wasm-function[1530]` | `[native code]` |
| 0.0% | 975us | 0.0% | 0us | `_putCheckpoint` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:847` |
| 0.0% | 975us | 0.0% | 0us | `.wasm-function[10719]` | `[native code]` |
| 0.0% | 975us | 0.0% | 0us | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:477` |
| 0.0% | 975us | 0.0% | 0us | `.wasm-function[444]` | `[native code]` |
| 0.0% | 975us | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:206` |
| 0.0% | 975us | 0.0% | 0us | `v6` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/v6.js:8` |
| 0.0% | 975us | 0.0% | 0us | `.wasm-function[4341]` | `[native code]` |
| 0.0% | 975us | 0.0% | 0us | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:474` |
| 0.0% | 972us | 0.0% | 0us | `every` | `[native code]` |
| 0.0% | 972us | 0.0% | 972us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:359` |
| 0.0% | 972us | 0.0% | 0us | `putWrites` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:359` |
| 0.0% | 966us | 0.0% | 966us | `async _runLoop` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js` |
| 0.0% | 966us | 0.0% | 966us | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 966us | 0.0% | 966us | `__embind_register_class` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 966us | 0.0% | 966us | `__embind_register_value_array_element` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 965us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:4` |
| 0.0% | 965us | 0.0% | 965us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs` |
| 0.0% | 958us | 0.0% | 958us | `resize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs` |
| 0.0% | 958us | 0.0% | 0us | `async compressImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:21` |
| 0.0% | 956us | 0.0% | 0us | `async initialize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:262` |
| 0.0% | 956us | 0.0% | 956us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:1055` |
| 0.0% | 956us | 0.0% | 956us | `checkpointNamespaceFromNs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 953us | 0.0% | 953us | `mupdf-wasm.wasm.wasm-function[init_block]` | `[native code]` |
| 0.0% | 949us | 0.0% | 0us | `internal:primordials` | `internal:primordials:73` |
| 0.0% | 949us | 0.0% | 0us | `makeSafe` | `internal:primordials:31` |
| 0.0% | 948us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/internal/re.js:142` |
| 0.0% | 947us | 0.0% | 947us | `convertToOpenAITool` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/function_calling.js` |
| 0.0% | 944us | 0.0% | 944us | `isStructuredToolParams` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/types.js:29` |
| 0.0% | 944us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[emscripten_builtin_free]` | `[native code]` |
| 0.0% | 944us | 0.0% | 0us | `convertToOpenAITool` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/function_calling.js:43` |
| 0.0% | 944us | 0.0% | 0us | `isLangChainTool` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/types.js:47` |
| 0.0% | 944us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[emscripten_builtin_realloc]` | `[native code]` |
| 0.0% | 940us | 0.0% | 940us | `XXH3_mul128_fold64` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/hash.js` |
| 0.0% | 940us | 0.0% | 940us | `AsciiToString` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 940us | 0.0% | 0us | `XXH3` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/hash.js:253` |
| 0.0% | 940us | 0.0% | 0us | `XXH3_mix32B` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/hash.js:136` |
| 0.0% | 940us | 0.0% | 0us | `XXH3_len_17to128_128b` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/hash.js:224` |
| 0.0% | 940us | 0.0% | 0us | `_prepareSingleTask` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:560` |
| 0.0% | 936us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/_openapi_client/internal/qs/utils.js:9` |
| 0.0% | 936us | 0.0% | 936us | `toUpperCase` | `[native code]` |
| 0.0% | 936us | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/_openapi_client/internal/qs/utils.js:11` |
| 0.0% | 934us | 0.0% | 0us | `createSpecialDirectories` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 934us | 0.0% | 0us | `lookupPath` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 933us | 0.0% | 933us | `@lazy` | `[native code]` |
| 0.0% | 933us | 0.0% | 0us | `node:crypto` | `node:crypto:39` |
| 0.0% | 931us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:24` |
| 0.0% | 931us | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/extractSchema.ts:63` |
| 0.0% | 931us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:1785` |
| 0.0% | 931us | 0.0% | 931us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:19` |
| 0.0% | 931us | 0.0% | 931us | `RegisteredPointer` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 929us | 0.0% | 929us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:275` |
| 0.0% | 929us | 0.0% | 929us | `mupdf-wasm.wasm.wasm-function[scale_row_from_temp]` | `[native code]` |
| 0.0% | 926us | 0.0% | 0us | `node:worker_threads` | `node:worker_threads:367` |
| 0.0% | 925us | 0.0% | 925us | `__embind_register_constant` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 923us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/classes/comparator.js:143` |
| 0.0% | 922us | 0.0% | 922us | `from` | `[native code]` |
| 0.0% | 922us | 0.0% | 0us | `objectProcessor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:299` |
| 0.0% | 921us | 0.0% | 921us | `ZodObject` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:40` |
| 0.0% | 921us | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:18` |
| 0.0% | 918us | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/xxhash/xxhash.js:24` |
| 0.0% | 918us | 0.0% | 918us | `hexToBytes` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/xxhash/xxhash.js:20` |
| 0.0% | 912us | 0.0% | 912us | `async _executeTasksWithRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js` |
| 0.0% | 912us | 0.0% | 0us | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:61` |
| 0.0% | 909us | 0.0% | 909us | `integer` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/is.mjs` |
| 0.0% | 909us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:488` |
| 0.0% | 907us | 0.0% | 907us | `_prepareSingleTask` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js` |
| 0.0% | 899us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:18` |
| 0.0% | 899us | 0.0% | 0us | `node:util` | `node:util:8` |
| 0.0% | 896us | 0.0% | 896us | `getDefaultClientConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js:923` |
| 0.0% | 896us | 0.0% | 0us | `Client` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js:805` |
| 0.0% | 893us | 0.0% | 893us | `async _generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js` |
| 0.0% | 891us | 0.0% | 891us | `Client` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js` |
| 0.0% | 891us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:43` |
| 0.0% | 891us | 0.0% | 891us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/ranges/intersects.js:9` |
| 0.0% | 889us | 0.0% | 0us | `BaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/base.js:125` |
| 0.0% | 889us | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:123` |
| 0.0% | 889us | 0.0% | 0us | `HumanMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/human.js:12` |
| 0.0% | 889us | 0.0% | 889us | `Serializable` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/serializable.js:82` |
| 0.0% | 886us | 0.0% | 0us | `finalize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:295` |
| 0.0% | 886us | 0.0% | 886us | `performIteration` | `[native code]` |
| 0.0% | 884us | 0.0% | 0us | `_array` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:712` |
| 0.0% | 884us | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/localShell.js:6` |
| 0.0% | 884us | 0.0% | 0us | `ZodArray` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` |
| 0.0% | 882us | 0.0% | 882us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:64` |
| 0.0% | 882us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1105` |
| 0.0% | 874us | 0.0% | 0us | `_procInput` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:740` |

## Function Details

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/base.js` | Self: 10.1% (27.80s) | Total: 10.1% (27.80s) | Samples: 1

**Called by:**
- `async invoke` (1)

### `.wasm-function[8869]`
`[native code]` | Self: 9.2% (25.27s) | Total: 9.2% (25.27s) | Samples: 22183

**Called by:**
- `.wasm-function[2968]` (22183)

### `.wasm-function[8885]`
`[native code]` | Self: 7.5% (20.69s) | Total: 7.5% (20.69s) | Samples: 18680

**Called by:**
- `.wasm-function[2968]` (18680)

### `.wasm-function[8901]`
`[native code]` | Self: 7.3% (20.03s) | Total: 7.3% (20.03s) | Samples: 17618

**Called by:**
- `.wasm-function[2968]` (17610)
- `.wasm-function[2969]` (8)

### `(anonymous)`
`[native code]` | Self: 6.6% (18.19s) | Total: 12.8% (35.18s) | Samples: 1411

**Called by:**
- `__emval_invoke` (8228)
- `(anonymous)` (8138)
- `(anonymous)` (37)
- `(anonymous)` (6)
- `(module)` (5)
- `bound require` (4)
- `async convertPdfToImages` (1)
- `(anonymous)` (1)

**Calls:**
- `decodeMemoryView` (6039)
- `.wasm-function[6137]` (5532)
- `emval_returnValue` (2184)
- `bound toWireType` (466)
- `bound nonConstNoSmartPtrRawPointerToWireType` (424)
- `bound fromWireType` (354)
- `dlopen` (4)
- `bound decodeMemoryView` (4)
- `Buffer` (1)
- `readPointer` (1)

### `.wasm-function[8918]`
`[native code]` | Self: 5.8% (16.07s) | Total: 5.8% (16.07s) | Samples: 13959

**Called by:**
- `.wasm-function[2968]` (13953)
- `.wasm-function[2969]` (6)

### `log`
`[native code]` | Self: 5.7% (15.63s) | Total: 5.7% (15.63s) | Samples: 10

**Called by:**
- `async cropper` (2)
- `attachCropImages` (2)
- `(module)` (1)
- `async cropper` (1)
- `(module)` (1)
- `async cropper` (1)
- `async cropTableRows` (1)
- `async cropper` (1)

### `withStructuredOutput`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js` | Self: 5.5% (15.06s) | Total: 5.5% (15.06s) | Samples: 1

**Called by:**
- `async extract` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:304` | Self: 3.0% (8.45s) | Total: 5.8% (16.08s) | Samples: 2

**Called by:**
- `Promise` (15)

**Calls:**
- `runWithConfig` (10)
- `run` (2)
- `runWithConfig` (1)

### `async mapBatched`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:89` | Self: 2.5% (6.91s) | Total: 2.5% (6.91s) | Samples: 1

### `Sharp`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:426` | Self: 2.5% (6.87s) | Total: 2.5% (7.09s) | Samples: 5

**Called by:**
- `Sharp` (11)

**Calls:**
- `_createInputDescriptor` (2)
- `_createInputDescriptor` (2)
- `_createInputDescriptor` (1)
- `_createInputDescriptor` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:333` | Self: 1.9% (5.22s) | Total: 1.9% (5.22s) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `Uint8Array`
`[native code]` | Self: 1.7% (4.66s) | Total: 1.7% (4.66s) | Samples: 3903

**Called by:**
- `decodeMemoryView` (3895)
- `async F` (6)
- `v7Bytes` (1)
- `binaryDecode` (1)

### `isZodSchemaV4`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js` | Self: 1.6% (4.37s) | Total: 1.6% (4.37s) | Samples: 1

**Called by:**
- `isInteropZodSchema` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 1.4% (4.03s) | Total: 37.7% (103.06s) | Samples: 3647

**Called by:**
- `detectVerticalLines` (29769)
- `detectHorizontalLines` (20794)
- `detectTables` (11140)
- `detectTables` (10786)
- `detectHorizontalLines` (9015)
- `detectVerticalLines` (8542)
- `detectTables` (274)
- `detectTables` (129)
- `detectTables` (111)
- `async loadImageForOpenCV` (98)
- `detectTables` (52)
- `onComplete` (41)
- `detectVerticalLines` (36)
- `detectHorizontalLines` (34)
- `async cropTableRows` (14)
- `(anonymous)` (4)
- `forEach` (4)
- `map` (1)
- `detectHorizontalLines` (1)
- `detectVerticalLines` (1)
- `detectTables` (1)

**Calls:**
- `morphologyEx` (72489)
- `(anonymous)` (8138)
- `Mat.ucharPtr` (5776)
- `findContours` (274)
- `cvtColor` (181)
- `dilate` (129)
- `set` (110)
- `bitwise_or` (52)
- `craftInvokerFunction` (28)
- `whenDependentTypesAreResolved` (8)
- `onComplete` (4)
- `(anonymous)` (4)
- `getStructuringElement` (3)
- `RegisteredPointer` (1)
- `get` (1)
- `hasOwnProperty` (1)
- `Mat` (1)

### `AIMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/ai.js:64` | Self: 1.4% (4.03s) | Total: 1.4% (4.03s) | Samples: 1

**Called by:**
- `convertCompletionsMessageToBaseMessage` (1)

### `RunTree`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:345` | Self: 1.3% (3.56s) | Total: 1.3% (3.56s) | Samples: 1

**Called by:**
- `runWithConfig` (3)

**Calls:**
- `getMicrosecondPrecisionDatestring` (2)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js:90` | Self: 1.2% (3.46s) | Total: 1.2% (3.46s) | Samples: 1

**Called by:**
- `reduce` (1)

### `handleMultiModalOutput`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/utils/output.js` | Self: 1.1% (3.25s) | Total: 1.1% (3.25s) | Samples: 2

**Called by:**
- `convertCompletionsMessageToBaseMessage` (2)

### `Sharp`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:269` | Self: 1.1% (3.11s) | Total: 1.1% (3.11s) | Samples: 9

**Called by:**
- `Sharp` (9)

### `convertCompletionsMessageToBaseMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:165` | Self: 1.0% (2.96s) | Total: 1.0% (2.96s) | Samples: 1

**Called by:**
- `convertOpenRouterResponseToBaseMessage` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:316` | Self: 1.0% (2.84s) | Total: 3.3% (9.29s) | Samples: 2

**Called by:**
- `map` (4)

**Calls:**
- `async (anonymous)` (1)
- `async (anonymous)` (1)

### `reduce`
`[native code]` | Self: 0.8% (2.43s) | Total: 2.1% (5.95s) | Samples: 40

**Called by:**
- `async cropAndZoom` (50)
- `ensureConfig` (2)

**Calls:**
- `(anonymous)` (11)
- `(anonymous)` (1)

### `replace`
`[native code]` | Self: 0.7% (2.07s) | Total: 0.7% (2.07s) | Samples: 2

**Called by:**
- `convertToDottedOrderFormat` (2)

### `BaseMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/base.js:122` | Self: 0.7% (2.01s) | Total: 0.7% (2.01s) | Samples: 1

**Called by:**
- `AIMessage` (1)

### `convertOpenRouterResponseToBaseMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/converters/messages.js:39` | Self: 0.7% (1.99s) | Total: 0.7% (1.99s) | Samples: 1

**Called by:**
- `async _generate` (1)

### `Sharp`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:232` | Self: 0.7% (1.93s) | Total: 0.8% (2.19s) | Samples: 3

**Called by:**
- `Sharp` (11)

**Calls:**
- `Duplex` (5)
- `Duplex` (2)
- `Duplex` (1)

### `isInstance`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/base.js` | Self: 0.6% (1.86s) | Total: 0.6% (1.86s) | Samples: 1

**Called by:**
- `isInstance` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.6% (1.79s) | Total: 0.6% (1.83s) | Samples: 1

**Called by:**
- `async (anonymous)` (6)
- `async I` (2)

**Calls:**
- `instantiate` (21)
- `async (anonymous)` (6)
- `async I` (2)
- `async F` (2)
- `_` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js` | Self: 0.5% (1.56s) | Total: 0.5% (1.56s) | Samples: 1

**Called by:**
- `run` (1)

### `emval_returnValue`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.5% (1.48s) | Total: 0.8% (2.44s) | Samples: 1328

**Called by:**
- `(anonymous)` (2184)

**Calls:**
- `bound toWireType` (856)

### `decodeMemoryView`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.5% (1.48s) | Total: 2.5% (6.84s) | Samples: 1316

**Called by:**
- `(anonymous)` (6039)
- `bound decodeMemoryView` (3)

**Calls:**
- `Uint8Array` (3895)
- `get buffer` (831)

### `bound toWireType`
`[native code]` | Self: 0.5% (1.48s) | Total: 0.7% (1.99s) | Samples: 1325

**Called by:**
- `emval_returnValue` (856)
- `(anonymous)` (466)
- `Mat.ucharPtr` (460)
- `(unknown)` (4)

**Calls:**
- `toWireType` (332)
- `toWireType` (129)

### `emit`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/eventemitter3/index.js:167` | Self: 0.4% (1.35s) | Total: 0.4% (1.35s) | Samples: 1

**Called by:**
- `_resolvePromises` (1)

### `convertCompletionsMessageToBaseMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:166` | Self: 0.4% (1.32s) | Total: 0.7% (2.03s) | Samples: 1

**Called by:**
- `convertOpenRouterResponseToBaseMessage` (5)

**Calls:**
- `parseToolCall` (3)
- `parseToolCall` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js` | Self: 0.4% (1.30s) | Total: 0.4% (1.30s) | Samples: 4

**Called by:**
- `init` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `async (anonymous)` (1)

### `get`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.4% (1.29s) | Total: 0.5% (1.43s) | Samples: 1112

**Called by:**
- `detectHorizontalLines` (711)
- `detectVerticalLines` (525)
- `detectHorizontalLines` (2)
- `(anonymous)` (1)
- `detectTables` (1)
- `detectTables` (1)
- `detectVerticalLines` (1)

**Calls:**
- `.wasm-function[549]` (88)
- `validateThis` (15)
- `fromWireType` (13)
- `fromWireType` (10)
- `wasm-stub` (2)
- `validateThis` (2)

### `copyDataProperties`
`[native code]` | Self: 0.4% (1.22s) | Total: 0.4% (1.22s) | Samples: 2

**Called by:**
- `async (anonymous)` (1)
- `_filterInvocationParamsForTracing` (1)

### `cloneObject`
`[native code]` | Self: 0.4% (1.11s) | Total: 0.4% (1.11s) | Samples: 4

**Called by:**
- `convertCompletionsMessageToBaseMessage` (1)
- `process` (1)
- `objectProcessor` (1)
- `async _generateUncached` (1)

### `get buffer`
`[native code]` | Self: 0.3% (916.1ms) | Total: 0.3% (916.1ms) | Samples: 831

**Called by:**
- `decodeMemoryView` (831)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.3% (909.7ms) | Total: 0.3% (909.7ms) | Samples: 3

**Called by:**
- `async (anonymous)` (2)
- `(anonymous)` (1)

### `json`
`[native code]` | Self: 0.3% (890.2ms) | Total: 0.3% (890.2ms) | Samples: 1

**Called by:**
- `async _generate` (1)

### `.wasm-function[9388]`
`[native code]` | Self: 0.3% (846.2ms) | Total: 0.3% (846.2ms) | Samples: 772

**Called by:**
- `.wasm-function[2968]` (772)

### `handleMultiModalOutput`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/utils/output.js:81` | Self: 0.3% (824.9ms) | Total: 0.3% (824.9ms) | Samples: 1

**Called by:**
- `convertCompletionsMessageToBaseMessage` (1)

### `_next`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:47` | Self: 0.2% (811.3ms) | Total: 0.2% (811.3ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `.wasm-function[2953]`
`[native code]` | Self: 0.2% (787.7ms) | Total: 0.2% (787.7ms) | Samples: 721

**Called by:**
- `.wasm-function[2968]` (721)

### `async _generateUncached`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:206` | Self: 0.2% (759.4ms) | Total: 0.3% (900.3ms) | Samples: 1

**Called by:**
- `async _generateUncached` (2)

**Calls:**
- `map` (2)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:137` | Self: 0.2% (708.5ms) | Total: 0.2% (708.5ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `.wasm-function[6148]`
`[native code]` | Self: 0.2% (651.7ms) | Total: 3.7% (10.32s) | Samples: 579

**Called by:**
- `.wasm-function[6137]` (9147)

**Calls:**
- `wasm-stub` (8568)

### `Mat.ucharPtr`
`[native code]` | Self: 0.2% (629.8ms) | Total: 2.3% (6.39s) | Samples: 576

**Called by:**
- `(anonymous)` (5776)

**Calls:**
- `.wasm-function[6137]` (4038)
- `bound toWireType` (460)
- `bound nonConstNoSmartPtrRawPointerToWireType` (383)
- `bound fromWireType` (316)
- `wasm-stub` (2)
- `fromWireType` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:145` | Self: 0.2% (619.2ms) | Total: 0.2% (619.2ms) | Samples: 1

### `mupdf-wasm.wasm.wasm-function[deflate_slow]`
`[native code]` | Self: 0.2% (586.3ms) | Total: 0.4% (1.28s) | Samples: 518

**Called by:**
- `mupdf-wasm.wasm.wasm-function[deflate]` (1149)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fill_window]` (440)
- `mupdf-wasm.wasm.wasm-function[longest_match]` (170)
- `mupdf-wasm.wasm.wasm-function[_tr_flush_block]` (21)

### `bound nonConstNoSmartPtrRawPointerToWireType`
`[native code]` | Self: 0.2% (568.1ms) | Total: 0.3% (889.7ms) | Samples: 512

**Called by:**
- `(anonymous)` (424)
- `Mat.ucharPtr` (383)

**Calls:**
- `nonConstNoSmartPtrRawPointerToWireType` (293)
- `nonConstNoSmartPtrRawPointerToWireType` (2)

### `parseToolCall`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:26` | Self: 0.2% (554.0ms) | Total: 0.2% (554.0ms) | Samples: 3

**Called by:**
- `convertCompletionsMessageToBaseMessage` (3)

### `get size`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/priority-queue.js` | Self: 0.1% (491.5ms) | Total: 0.1% (491.5ms) | Samples: 1

**Called by:**
- `_tryToStartAnother` (1)

### `async _generate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:267` | Self: 0.1% (470.6ms) | Total: 0.1% (470.6ms) | Samples: 1

### `.wasm-function[6137]`
`[native code]` | Self: 0.1% (469.9ms) | Total: 3.9% (10.79s) | Samples: 425

**Called by:**
- `(anonymous)` (5532)
- `Mat.ucharPtr` (4038)
- `wasm-stub` (2)

**Calls:**
- `.wasm-function[6148]` (9147)

### `mupdf-wasm.wasm.wasm-function[fill_window]`
`[native code]` | Self: 0.1% (405.9ms) | Total: 0.1% (484.9ms) | Samples: 368

**Called by:**
- `mupdf-wasm.wasm.wasm-function[deflate_slow]` (440)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[adler32]` (72)

### `wasm-stub`
`[native code]` | Self: 0.1% (389.6ms) | Total: 4.3% (11.93s) | Samples: 350

**Called by:**
- `.wasm-function[6148]` (8568)
- `asPNG` (1378)
- `dilate` (129)
- `threshold` (93)
- `initRuntime` (74)
- `bitwise_or` (52)
- `.wasm-function[4417]` (50)
- `countNonZero` (36)
- `.wasm-function[2667]` (17)
- `mupdf-wasm.wasm.wasm-function[emscripten_builtin_malloc]` (13)
- `(module)` (12)
- `mupdf-wasm.wasm.wasm-function[do_tzset]` (9)
- `mupdf-wasm.wasm.wasm-function[sbrk]` (4)
- `MatVector.get` (3)
- `.wasm-function[1199]` (3)
- `.wasm-function[4554]` (3)
- `Mat.ucharPtr` (2)
- `get` (2)
- `openDocument` (2)
- `mupdf-wasm.wasm.wasm-function[emscripten_builtin_free]` (1)
- `loadPage` (1)
- `runDestructor` (1)
- `.wasm-function[6535]` (1)
- `.wasm-function[3389]` (1)

**Calls:**
- `__emval_invoke` (8233)
- `mupdf-wasm.wasm.wasm-function[wasm_new_buffer_from_pixmap_as_png]` (1378)
- `.wasm-function[4377]` (120)
- `.wasm-function[14700]` (92)
- `.wasm-function[16862]` (74)
- `.wasm-function[674]` (52)
- `.wasm-function[1293]` (36)
- `__embind_register_function` (26)
- `h` (17)
- `mupdf-wasm.wasm.wasm-function[wasm_init_context]` (12)
- `k` (9)
- `__embind_register_class_function` (8)
- `__embind_register_class` (7)
- `__embind_register_class_constructor` (5)
- `__embind_register_enum_value` (5)
- `_emscripten_resize_heap` (3)
- `__embind_register_constant` (3)
- `.wasm-function[4554]` (3)
- `__embind_register_class_property` (3)
- `.wasm-function[6137]` (2)
- `mupdf-wasm.wasm.wasm-function[wasm_open_document_with_buffer]` (2)
- `__emval_create_invoker` (2)
- `__embind_finalize_value_object` (2)
- `__embind_register_smart_ptr` (2)
- `__embind_register_enum` (2)
- `.wasm-function[6551]` (1)
- `.wasm-function[549]` (1)
- `__embind_register_class` (1)
- `__embind_register_constant` (1)
- `__embind_register_class_function` (1)
- `__embind_register_value_array_element` (1)
- `__embind_register_bigint` (1)

### `fromWireType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.1% (388.2ms) | Total: 0.1% (388.2ms) | Samples: 353

**Called by:**
- `bound fromWireType` (340)
- `get` (13)

### `toWireType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.1% (367.4ms) | Total: 0.1% (367.4ms) | Samples: 332

**Called by:**
- `bound toWireType` (332)

### `bound fromWireType`
`[native code]` | Self: 0.1% (365.9ms) | Total: 0.2% (743.8ms) | Samples: 328

**Called by:**
- `(anonymous)` (354)
- `Mat.ucharPtr` (316)
- `boundingRect` (1)

**Calls:**
- `fromWireType` (340)
- `fromWireType` (3)

### `ChatOpenRouter`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:157` | Self: 0.1% (342.9ms) | Total: 0.1% (342.9ms) | Samples: 1

**Called by:**
- `async classifyImage` (1)

### `set`
`[native code]` | Self: 0.1% (326.4ms) | Total: 0.1% (326.4ms) | Samples: 111

**Called by:**
- `(anonymous)` (110)
- `process` (1)

### `nonConstNoSmartPtrRawPointerToWireType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.1% (319.6ms) | Total: 0.1% (319.6ms) | Samples: 293

**Called by:**
- `bound nonConstNoSmartPtrRawPointerToWireType` (293)

### `runChecks`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:34` | Self: 0.1% (318.6ms) | Total: 0.1% (320.1ms) | Samples: 1

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `aborted` (1)

### `findWasmBinary`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.1% (288.0ms) | Total: 0.1% (288.0ms) | Samples: 265

**Called by:**
- `async createWasm` (265)

### `mupdf-wasm.wasm.wasm-function[png_write_band]`
`[native code]` | Self: 0.0% (234.9ms) | Total: 0.5% (1.54s) | Samples: 213

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_write_band]` (1378)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[deflate]` (1149)
- `mupdf-wasm.wasm.wasm-function[fz_malloc]` (13)
- `mupdf-wasm.wasm.wasm-function[putchunk]` (3)

### `stringify`
`[native code]` | Self: 0.0% (230.3ms) | Total: 0.0% (230.3ms) | Samples: 15

**Called by:**
- `async (anonymous)` (14)
- `finalize` (1)

### `_createInputDescriptor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:109` | Self: 0.0% (209.4ms) | Total: 0.0% (209.4ms) | Samples: 1

**Called by:**
- `Sharp` (1)

### `anonymous`
`[native code]` | Self: 0.0% (207.9ms) | Total: 0.1% (288.3ms) | Samples: 63

**Called by:**
- `require` (38)
- `craftInvokerFunction` (14)
- `node:fs` (10)
- `node:stream` (10)
- `internal:stream` (9)
- `internal:streams/pipeline` (7)
- `internal:streams/compose` (7)
- `node:fs/promises` (7)
- `node:util` (5)
- `internal:streams/duplex` (5)
- `node:path` (3)
- `internal:validators` (3)
- `internal:shared` (2)
- `bound require` (2)
- `internal:streams/operators` (1)
- `internal:streams/readable` (1)
- `node:util` (1)
- `node:worker_threads` (1)
- `internal:util/inspect` (1)
- `node:events` (1)
- `node:crypto` (1)

**Calls:**
- `internal:stream` (9)
- `internal:streams/compose` (7)
- `node:fs/promises` (7)
- `internal:streams/pipeline` (7)
- `internal:streams/duplex` (5)
- `(anonymous)` (4)
- `internal:validators` (3)
- `(anonymous)` (2)
- `internal:shared` (2)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `internal:util/inspect` (1)
- `internal:primordials` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `internal:util/inspect` (1)
- `(anonymous)` (1)
- `internal:stream` (1)
- `(anonymous)` (1)
- `node:fs/promises` (1)
- `internal:streams/operators` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `internal:streams/readable` (1)
- `internal:streams/destroy` (1)
- `node:events` (1)

### `v7Bytes`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/uuid/src/v7.js:42` | Self: 0.0% (202.6ms) | Total: 0.0% (202.6ms) | Samples: 1

**Called by:**
- `v7` (1)

### `.wasm-function[9672]`
`[native code]` | Self: 0.0% (198.9ms) | Total: 0.0% (198.9ms) | Samples: 180

**Called by:**
- `.wasm-function[68]` (180)

### `fetch`
`[native code]` | Self: 0.0% (198.7ms) | Total: 0.0% (198.7ms) | Samples: 7

**Called by:**
- `async (anonymous)` (7)

### `mupdf-wasm.wasm.wasm-function[longest_match]`
`[native code]` | Self: 0.0% (193.3ms) | Total: 0.0% (193.3ms) | Samples: 170

**Called by:**
- `mupdf-wasm.wasm.wasm-function[deflate_slow]` (170)

### `Error`
`[native code]` | Self: 0.0% (192.1ms) | Total: 0.0% (192.1ms) | Samples: 3

**Called by:**
- `toFile` (2)
- `metadata` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:851` | Self: 0.0% (174.5ms) | Total: 0.0% (174.5ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `.wasm-function[1543]`
`[native code]` | Self: 0.0% (169.0ms) | Total: 0.1% (301.7ms) | Samples: 137

**Called by:**
- `.wasm-function[10948]` (249)

**Calls:**
- `.wasm-function[510]` (77)
- `.wasm-function[2992]` (33)
- `.wasm-function[397]` (1)
- `.wasm-function[2996]` (1)

### `.wasm-function[12303]`
`[native code]` | Self: 0.0% (169.0ms) | Total: 0.0% (169.0ms) | Samples: 155

**Called by:**
- `.wasm-function[76]` (155)

### `(unknown)`
`[native code]` | Self: 0.0% (165.5ms) | Total: 31.1% (85.17s) | Samples: 144

**Called by:**
- `morphologyEx` (72489)
- `adaptiveThreshold` (1833)
- `findContours` (274)
- `cvtColor` (181)
- `toPixmap` (145)
- `getStructuringElement` (1)
- `constructor Mat` (1)

**Calls:**
- `.wasm-function[505]` (72429)
- `.wasm-function[16092]` (1833)
- `.wasm-function[491]` (249)
- `.wasm-function[674]` (180)
- `mupdf-wasm.wasm.wasm-function[wasm_pdf_new_pixmap_from_page_with_usage]` (145)
- `bound toWireType` (4)
- `.wasm-function[6673]` (1)
- `mupdf-wasm.wasm.wasm-function[emscripten_builtin_realloc]` (1)
- `.wasm-function[4341]` (1)

### `parse`
`[native code]` | Self: 0.0% (153.6ms) | Total: 0.0% (153.6ms) | Samples: 4

**Called by:**
- `finalize` (3)
- `parseToolCall` (1)

### `toHandle`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (143.7ms) | Total: 0.0% (143.7ms) | Samples: 129

**Called by:**
- `toWireType` (129)

### `Duplex`
`internal:streams/duplex:4` | Self: 0.0% (136.5ms) | Total: 0.0% (136.5ms) | Samples: 2

**Called by:**
- `Sharp` (2)

### `defineProperty`
`[native code]` | Self: 0.0% (134.0ms) | Total: 0.0% (134.0ms) | Samples: 4

**Called by:**
- `async _generateUncached` (1)
- `_installLazyMethods` (1)
- `defineLazy` (1)
- `get` (1)

### `.wasm-function[12009]`
`[native code]` | Self: 0.0% (133.1ms) | Total: 0.0% (133.1ms) | Samples: 124

**Called by:**
- `.wasm-function[76]` (124)

### `.wasm-function[8596]`
`[native code]` | Self: 0.0% (130.6ms) | Total: 0.0% (130.6ms) | Samples: 115

**Called by:**
- `.wasm-function[68]` (115)

### `.wasm-function[2968]`
`[native code]` | Self: 0.0% (128.8ms) | Total: 30.6% (83.83s) | Samples: 109

**Called by:**
- `.wasm-function[9540]` (74028)

**Calls:**
- `.wasm-function[8869]` (22183)
- `.wasm-function[8885]` (18680)
- `.wasm-function[8901]` (17610)
- `.wasm-function[8918]` (13953)
- `.wasm-function[9388]` (772)
- `.wasm-function[2953]` (721)

### `growMemory`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (125.8ms) | Total: 0.0% (125.8ms) | Samples: 1

**Called by:**
- `_emscripten_resize_heap` (1)

### `push`
`[native code]` | Self: 0.0% (120.8ms) | Total: 0.0% (120.8ms) | Samples: 1

**Called by:**
- `(module)` (1)

### `.wasm-function[549]`
`[native code]` | Self: 0.0% (98.8ms) | Total: 0.0% (98.8ms) | Samples: 89

**Called by:**
- `get` (88)
- `wasm-stub` (1)

### `getStore`
`node:async_hooks:145` | Self: 0.0% (94.3ms) | Total: 0.0% (94.3ms) | Samples: 1

**Called by:**
- `getRunnableConfig` (1)

### `map`
`[native code]` | Self: 0.0% (86.2ms) | Total: 6.2% (16.97s) | Samples: 1

**Called by:**
- `invocationParams` (38)
- `async _generateUncached` (38)
- `async mapBatched` (6)
- `async _generateUncached` (4)
- `async _generateUncached` (2)
- `check` (2)
- `__emval_create_invoker` (1)
- `composite` (1)
- `(anonymous)` (1)

**Calls:**
- `async (anonymous)` (38)
- `convertToOpenAITool` (36)
- `async cropper` (5)
- `async (anonymous)` (4)
- `(anonymous)` (2)
- `convertToOpenAITool` (1)
- `convertToOpenAITool` (1)
- `(anonymous)` (1)
- `convertLangChainToolCallToOpenAI` (1)
- `(anonymous)` (1)
- `async cropper` (1)
- `(anonymous)` (1)

### `mupdf-wasm.wasm.wasm-function[build_filter]`
`[native code]` | Self: 0.0% (86.0ms) | Total: 0.0% (86.0ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_open_filter]` (1)

### `mupdf-wasm.wasm.wasm-function[adler32]`
`[native code]` | Self: 0.0% (80.4ms) | Total: 0.0% (80.4ms) | Samples: 73

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fill_window]` (72)
- `mupdf-wasm.wasm.wasm-function[inflate]` (1)

### `async withRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:31` | Self: 0.0% (71.1ms) | Total: 0.0% (189.4ms) | Samples: 1

**Called by:**
- `async classifyImage` (3)
- `async cropper` (3)
- `async cropper` (1)

**Calls:**
- `async withRetry` (6)

### `.wasm-function[12680]`
`[native code]` | Self: 0.0% (70.2ms) | Total: 0.0% (70.2ms) | Samples: 52

**Called by:**
- `.wasm-function[503]` (52)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:73` | Self: 0.0% (68.3ms) | Total: 0.0% (68.3ms) | Samples: 1

### `Sharp`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:226` | Self: 0.0% (65.5ms) | Total: 0.0% (65.5ms) | Samples: 2

**Called by:**
- `async cropTableRows` (2)

### `join`
`[native code]` | Self: 0.0% (63.3ms) | Total: 0.0% (63.3ms) | Samples: 2

**Called by:**
- `bound join` (1)
- `Comparator` (1)

### `mkdir`
`[native code]` | Self: 0.0% (61.2ms) | Total: 0.0% (61.2ms) | Samples: 1

**Called by:**
- `async mkdir` (1)

### `node:worker_threads`
`node:worker_threads:36` | Self: 0.0% (61.0ms) | Total: 0.0% (61.0ms) | Samples: 1

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:489` | Self: 0.0% (60.0ms) | Total: 0.0% (60.0ms) | Samples: 1

**Called by:**
- `forEach` (1)

### `async run`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:153` | Self: 0.0% (59.7ms) | Total: 0.1% (493.7ms) | Samples: 1

**Called by:**
- `_tryToStartAnother` (28)

**Calls:**
- `async (anonymous)` (27)

### `.wasm-function[934]`
`[native code]` | Self: 0.0% (59.1ms) | Total: 0.7% (2.00s) | Samples: 54

**Called by:**
- `.wasm-function[5841]` (1833)

**Calls:**
- `.wasm-function[581]` (1498)
- `.wasm-function[76]` (281)

### `.wasm-function[510]`
`[native code]` | Self: 0.0% (58.2ms) | Total: 0.0% (188.9ms) | Samples: 54

**Called by:**
- `.wasm-function[9595]` (92)
- `.wasm-function[1543]` (77)

**Calls:**
- `.wasm-function[68]` (115)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts` | Self: 0.0% (57.8ms) | Total: 0.0% (57.8ms) | Samples: 1

**Called by:**
- `async withRetry` (1)

### `keys`
`[native code]` | Self: 0.0% (57.4ms) | Total: 0.0% (57.4ms) | Samples: 2

**Called by:**
- `mergeConfigs` (1)
- `normalizeDef` (1)

### `mupdf-wasm.wasm.wasm-function[paint_span_with_color_3_solid]`
`[native code]` | Self: 0.0% (57.0ms) | Total: 0.0% (57.0ms) | Samples: 49

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_convert_gel]` (48)
- `mupdf-wasm.wasm.wasm-function[draw_glyph]` (1)

### `flatIntoArrayWithCallback`
`[native code]` | Self: 0.0% (56.7ms) | Total: 0.0% (132.7ms) | Samples: 2

**Called by:**
- `async _generate` (5)
- `get allEdges` (1)

**Calls:**
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `newResolvedPromise`
`[native code]` | Self: 0.0% (56.7ms) | Total: 0.0% (56.7ms) | Samples: 1

**Called by:**
- `async writeFile` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:49` | Self: 0.0% (55.8ms) | Total: 0.0% (55.8ms) | Samples: 11

**Called by:**
- `reduce` (11)

### `binaryDecode`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (55.6ms) | Total: 0.0% (55.6ms) | Samples: 51

**Called by:**
- `findWasmBinary` (51)

### `convertToOpenAIFunction`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/function_calling.js:26` | Self: 0.0% (55.2ms) | Total: 0.0% (55.2ms) | Samples: 1

**Called by:**
- `convertToOpenAITool` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` | Self: 0.0% (54.6ms) | Total: 0.0% (54.6ms) | Samples: 1

**Called by:**
- `map` (1)

### `extract`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:483` | Self: 0.0% (51.8ms) | Total: 0.0% (51.8ms) | Samples: 1

**Called by:**
- `async cropTableRows` (1)

### `_addVersion`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js` | Self: 0.0% (51.7ms) | Total: 0.0% (51.7ms) | Samples: 1

**Called by:**
- `BaseLangChain` (1)

### `getRunnableConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js` | Self: 0.0% (48.9ms) | Total: 0.0% (48.9ms) | Samples: 1

**Called by:**
- `ensureConfig` (1)

### `instantiate`
`[native code]` | Self: 0.0% (48.7ms) | Total: 0.0% (48.7ms) | Samples: 46

**Called by:**
- `async instantiateArrayBuffer` (25)
- `async (anonymous)` (21)

### `ReadableState`
`internal:streams/readable` | Self: 0.0% (48.3ms) | Total: 0.0% (48.3ms) | Samples: 1

**Called by:**
- `Duplex` (1)

### `detectVerticalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:575` | Self: 0.0% (43.3ms) | Total: 3.4% (9.49s) | Samples: 36

**Called by:**
- `async cropTableRows` (8578)

**Calls:**
- `(anonymous)` (8542)

### `.wasm-function[2992]`
`[native code]` | Self: 0.0% (43.2ms) | Total: 0.0% (43.2ms) | Samples: 33

**Called by:**
- `.wasm-function[1543]` (33)

### `messageToOpenAIRole`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/utils/misc.js:27` | Self: 0.0% (39.4ms) | Total: 0.0% (39.4ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `WritableState`
`internal:streams/writable:135` | Self: 0.0% (39.3ms) | Total: 0.0% (39.3ms) | Samples: 1

**Called by:**
- `Duplex` (1)

### `.wasm-function[11510]`
`[native code]` | Self: 0.0% (38.4ms) | Total: 0.0% (38.4ms) | Samples: 34

**Called by:**
- `.wasm-function[466]` (34)

### `WritableState`
`internal:streams/writable:140` | Self: 0.0% (38.1ms) | Total: 0.0% (38.1ms) | Samples: 1

**Called by:**
- `Duplex` (1)

### `resolve`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (38.0ms) | Total: 0.0% (38.0ms) | Samples: 1

**Called by:**
- `symlink` (1)

### `isFinite`
`[native code]` | Self: 0.0% (37.6ms) | Total: 0.0% (37.6ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js` | Self: 0.0% (36.8ms) | Total: 0.0% (36.8ms) | Samples: 5

**Called by:**
- `map` (2)
- `process` (2)
- `init` (1)

### `find`
`[native code]` | Self: 0.0% (36.8ms) | Total: 0.0% (36.8ms) | Samples: 1

**Called by:**
- `isTracingEnabled` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:585` | Self: 0.0% (34.1ms) | Total: 0.0% (34.1ms) | Samples: 1

**Called by:**
- `flatIntoArrayWithCallback` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:1731` | Self: 0.0% (33.6ms) | Total: 0.0% (33.6ms) | Samples: 1

### `mupdf-wasm.wasm.wasm-function[fz_convert_gel]`
`[native code]` | Self: 0.0% (32.2ms) | Total: 0.0% (87.8ms) | Samples: 19

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_convert_rasterizer]` (67)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[paint_span_with_color_3_solid]` (48)

### `forEach`
`[native code]` | Self: 0.0% (28.8ms) | Total: 0.0% (96.9ms) | Samples: 3

**Called by:**
- `extract` (5)
- `sharedRegisterType` (4)
- `whenDependentTypesAreResolved` (1)
- `bound call` (1)
- `initializeSax` (1)

**Calls:**
- `(anonymous)` (4)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `Int8Array`
`[native code]` | Self: 0.0% (27.2ms) | Total: 0.0% (27.2ms) | Samples: 18

**Called by:**
- `R` (16)
- `updateMemoryViews` (2)

### `tool`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js` | Self: 0.0% (26.8ms) | Total: 0.0% (26.8ms) | Samples: 1

**Called by:**
- `async cropper` (1)

### `mergeDefs`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js` | Self: 0.0% (23.8ms) | Total: 0.0% (23.8ms) | Samples: 1

**Called by:**
- `check` (1)

### `string`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/regexes.js:94` | Self: 0.0% (23.5ms) | Total: 0.0% (23.5ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `ZodNumber`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:43` | Self: 0.0% (22.4ms) | Total: 0.0% (22.4ms) | Samples: 2

**Called by:**
- `_coercedNumber` (1)
- `clone` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:192` | Self: 0.0% (20.6ms) | Total: 0.0% (20.6ms) | Samples: 1

**Called by:**
- `init` (1)

### `mupdf-wasm.wasm.wasm-function[compress_block]`
`[native code]` | Self: 0.0% (20.5ms) | Total: 0.0% (20.5ms) | Samples: 17

**Called by:**
- `mupdf-wasm.wasm.wasm-function[_tr_flush_block]` (17)

### `has`
`[native code]` | Self: 0.0% (19.6ms) | Total: 0.0% (19.6ms) | Samples: 2

**Called by:**
- `init` (1)
- `(anonymous)` (1)

### `BaseLangChain`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:139` | Self: 0.0% (18.9ms) | Total: 0.0% (18.9ms) | Samples: 1

**Called by:**
- `StructuredTool` (1)

### `validateThis`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (16.3ms) | Total: 0.0% (16.3ms) | Samples: 15

**Called by:**
- `get` (15)

### `init`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:13` | Self: 0.0% (15.5ms) | Total: 0.0% (15.5ms) | Samples: 1

**Called by:**
- `ZodNumber` (1)

### `mupdf-wasm.wasm.wasm-function[draw_glyph]`
`[native code]` | Self: 0.0% (15.3ms) | Total: 0.0% (16.7ms) | Samples: 11

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_fill_text]` (12)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[paint_span_with_color_3_solid]` (1)

### `fromWireType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (12.1ms) | Total: 0.0% (15.6ms) | Samples: 11

**Called by:**
- `get` (10)
- `bound fromWireType` (3)
- `Mat.ucharPtr` (1)

**Calls:**
- `__emval_decref` (2)
- `__emval_decref` (1)

### `whenDependentTypesAreResolved`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (11.6ms) | Total: 0.0% (63.8ms) | Samples: 11

**Called by:**
- `__embind_register_function` (24)
- `(anonymous)` (8)
- `__embind_register_class_function` (7)
- `__embind_register_class_constructor` (5)
- `__embind_register_class` (5)
- `__embind_register_class_property` (3)
- `__embind_register_constant` (2)
- `__embind_finalize_value_object` (2)
- `__embind_register_smart_ptr` (1)

**Calls:**
- `onComplete` (44)
- `forEach` (1)
- `entries` (1)

### `getFullYear`
`[native code]` | Self: 0.0% (9.6ms) | Total: 0.0% (9.6ms) | Samples: 9

**Called by:**
- `k` (9)

### `Function`
`[native code]` | Self: 0.0% (9.5ms) | Total: 0.0% (9.5ms) | Samples: 9

**Called by:**
- `createJsInvoker` (9)

### `mupdf-wasm.wasm.wasm-function[fz_hash_find]`
`[native code]` | Self: 0.0% (7.9ms) | Total: 0.0% (7.9ms) | Samples: 3

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_find_item]` (3)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` | Self: 0.0% (7.7ms) | Total: 0.0% (7.7ms) | Samples: 1

**Called by:**
- `_` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:92` | Self: 0.0% (6.5ms) | Total: 0.0% (7.7ms) | Samples: 1

**Called by:**
- `init` (2)

**Calls:**
- `_installLazyMethods` (1)

### `mupdf-wasm.wasm.wasm-function[jpeg_idct_16x16]`
`[native code]` | Self: 0.0% (6.5ms) | Total: 0.0% (6.5ms) | Samples: 4

**Called by:**
- `mupdf-wasm.wasm.wasm-function[decompress_onepass]` (4)

### `resize`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:268` | Self: 0.0% (6.4ms) | Total: 0.0% (6.4ms) | Samples: 2

**Called by:**
- `async cropAndZoom` (2)

### `__emval_invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (6.0ms) | Total: 3.4% (9.30s) | Samples: 5

**Called by:**
- `wasm-stub` (8233)

**Calls:**
- `(anonymous)` (8228)

### `mupdf-wasm.wasm.wasm-function[fz_render_glyph]`
`[native code]` | Self: 0.0% (5.8ms) | Total: 0.0% (15.8ms) | Samples: 4

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_fill_text]` (10)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_render_ft_glyph]` (5)
- `mupdf-wasm.wasm.wasm-function[fz_subpixel_adjust]` (1)

### `createJsInvoker`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (5.3ms) | Total: 0.0% (14.9ms) | Samples: 4

**Called by:**
- `craftInvokerFunction` (13)

**Calls:**
- `Function` (9)

### `mupdf-wasm.wasm.wasm-function[inflate]`
`[native code]` | Self: 0.0% (5.2ms) | Total: 0.0% (7.8ms) | Samples: 4

**Called by:**
- `mupdf-wasm.wasm.wasm-function[next_flated]` (6)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[inflate_table]` (1)
- `mupdf-wasm.wasm.wasm-function[adler32]` (1)

### `binaryDecode`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (4.6ms) | Total: 0.0% (5.9ms) | Samples: 4

**Called by:**
- `findWasmBinary` (5)

**Calls:**
- `Uint8Array` (1)

### `detectHorizontalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:500` | Self: 0.0% (4.5ms) | Total: 3.7% (10.21s) | Samples: 4

**Called by:**
- `async cropTableRows` (9019)

**Calls:**
- `(anonymous)` (9015)

### `detectVerticalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:574` | Self: 0.0% (4.5ms) | Total: 0.2% (628.0ms) | Samples: 4

**Called by:**
- `async cropTableRows` (529)

**Calls:**
- `get` (525)

### `mupdf-wasm.wasm.wasm-function[pdf_flush_text_imp]`
`[native code]` | Self: 0.0% (4.4ms) | Total: 0.0% (39.7ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_ET]` (25)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_fill_text]` (24)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (4.4ms) | Total: 0.0% (4.4ms) | Samples: 4

**Called by:**
- `onComplete` (3)
- `detectHorizontalLines` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/passthrough.js` | Self: 0.0% (4.3ms) | Total: 0.0% (4.3ms) | Samples: 1

**Called by:**
- `RunnablePassthrough` (1)

### `dlopen`
`[native code]` | Self: 0.0% (4.2ms) | Total: 0.0% (4.2ms) | Samples: 4

**Called by:**
- `(anonymous)` (4)

### `detectHorizontalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:499` | Self: 0.0% (4.1ms) | Total: 0.2% (807.8ms) | Samples: 4

**Called by:**
- `async cropTableRows` (715)

**Calls:**
- `get` (711)

### `mupdf-wasm.wasm.wasm-function[pdf_show_char]`
`[native code]` | Self: 0.0% (4.0ms) | Total: 0.0% (7.0ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[show_string]` (3)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[ucdn_get_bidi_class]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_tos_make_trm]` (1)

### `mupdf-wasm.wasm.wasm-function[scale_row_to_temp3]`
`[native code]` | Self: 0.0% (3.7ms) | Total: 0.0% (3.7ms) | Samples: 2

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_scale_pixmap_cached]` (2)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/list.js:134` | Self: 0.0% (3.6ms) | Total: 0.0% (3.6ms) | Samples: 1

### `attachCropImages`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:97` | Self: 0.0% (3.6ms) | Total: 0.0% (3.6ms) | Samples: 3

**Called by:**
- `async extract` (3)

### `Promise`
`[native code]` | Self: 0.0% (3.5ms) | Total: 13.4% (36.70s) | Samples: 3

**Called by:**
- `_pipeline` (39)
- `async add` (31)
- `async func` (16)
- `metadata` (6)
- `AsyncGeneratorWithSetup` (3)
- `async _invoke` (1)

**Calls:**
- `(anonymous)` (37)
- `(anonymous)` (30)
- `(anonymous)` (15)
- `(anonymous)` (6)
- `(anonymous)` (3)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `entries`
`[native code]` | Self: 0.0% (3.5ms) | Total: 0.0% (3.5ms) | Samples: 3

**Called by:**
- `whenDependentTypesAreResolved` (1)
- `extractDefs` (1)
- `ensureConfig` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_run_Tr]`
`[native code]` | Self: 0.0% (3.3ms) | Total: 0.0% (3.3ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (1)

### `mupdf-wasm.wasm.wasm-function[crc32_z]`
`[native code]` | Self: 0.0% (3.3ms) | Total: 0.0% (3.3ms) | Samples: 3

**Called by:**
- `mupdf-wasm.wasm.wasm-function[crc32]` (3)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:67` | Self: 0.0% (3.2ms) | Total: 0.0% (3.2ms) | Samples: 2

**Called by:**
- `init` (2)

### `cached`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js` | Self: 0.0% (3.2ms) | Total: 0.0% (3.2ms) | Samples: 2

**Called by:**
- `(anonymous)` (1)
- `(module)` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` | Self: 0.0% (3.2ms) | Total: 0.0% (3.2ms) | Samples: 3

**Called by:**
- `async _` (3)

### `__embind_register_enum_value`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (3.2ms) | Total: 0.0% (5.3ms) | Samples: 3

**Called by:**
- `wasm-stub` (5)

**Calls:**
- `createNamedFunction` (1)
- `AsciiToString` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/checks.js:104` | Self: 0.0% (3.1ms) | Total: 0.0% (3.1ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `exposePublicSymbol`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (3.1ms) | Total: 0.0% (4.0ms) | Samples: 3

**Called by:**
- `__embind_register_class` (2)
- `__embind_register_function` (2)

**Calls:**
- `hasOwnProperty` (1)

### `.wasm-function[557]`
`[native code]` | Self: 0.0% (3.0ms) | Total: 30.0% (82.21s) | Samples: 1

**Called by:**
- `.wasm-function[1308]` (72429)
- `.wasm-function[635]` (120)

**Calls:**
- `.wasm-function[9540]` (72548)

### `assign`
`[native code]` | Self: 0.0% (2.9ms) | Total: 0.0% (2.9ms) | Samples: 1

**Called by:**
- `RunTree` (1)

### `isZodNullableV4`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:229` | Self: 0.0% (2.9ms) | Total: 0.0% (2.9ms) | Samples: 2

**Called by:**
- `interopZodTransformInputSchemaImpl` (2)

### `get`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/registries.js:33` | Self: 0.0% (2.8ms) | Total: 0.0% (2.8ms) | Samples: 2

**Called by:**
- `get` (2)

### `mupdf-wasm.wasm.wasm-function[fz_draw_fill_text]`
`[native code]` | Self: 0.0% (2.7ms) | Total: 0.0% (35.2ms) | Samples: 2

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_fill_text]` (24)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[draw_glyph]` (12)
- `mupdf-wasm.wasm.wasm-function[fz_render_glyph]` (10)

### `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]`
`[native code]` | Self: 0.0% (2.6ms) | Total: 0.0% (190.1ms) | Samples: 2

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_stream]` (134)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_S]` (72)
- `mupdf-wasm.wasm.wasm-function[pdf_run_ET]` (26)
- `mupdf-wasm.wasm.wasm-function[pdf_try_load_font]` (13)
- `mupdf-wasm.wasm.wasm-function[pdf_process_Do]` (11)
- `mupdf-wasm.wasm.wasm-function[pdf_run_Tj]` (4)
- `mupdf-wasm.wasm.wasm-function[pdf_run_Tr]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_run_Q]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_run_m]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_is_ocg_hidden]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_run_EMC]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_lookup_resource]` (1)

### `PriorityQueue`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/priority-queue.js` | Self: 0.0% (2.6ms) | Total: 0.0% (2.6ms) | Samples: 1

**Called by:**
- `PQueue` (1)

### `mupdf-wasm.wasm.wasm-function[FT_Outline_Get_CBox]`
`[native code]` | Self: 0.0% (2.5ms) | Total: 0.0% (2.5ms) | Samples: 2

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_bound_glyph]` (1)
- `mupdf-wasm.wasm.wasm-function[ft_glyphslot_preset_bitmap]` (1)

### `mupdf-wasm.wasm.wasm-function[ft_glyphslot_preset_bitmap]`
`[native code]` | Self: 0.0% (2.4ms) | Total: 0.0% (3.7ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[ft_smooth_render]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[FT_Outline_Get_CBox]` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_get_xref_entry_aux]`
`[native code]` | Self: 0.0% (2.4ms) | Total: 0.0% (2.4ms) | Samples: 2

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_cache_object]` (2)

### `.wasm-function[2969]`
`[native code]` | Self: 0.0% (2.3ms) | Total: 0.0% (17.5ms) | Samples: 2

**Called by:**
- `.wasm-function[9540]` (16)

**Calls:**
- `.wasm-function[8901]` (8)
- `.wasm-function[8918]` (6)

### `_createInputDescriptor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:63` | Self: 0.0% (2.3ms) | Total: 0.0% (2.3ms) | Samples: 2

**Called by:**
- `Sharp` (2)

### `now`
`[native code]` | Self: 0.0% (2.3ms) | Total: 0.0% (2.3ms) | Samples: 2

**Called by:**
- `async pRetry` (1)
- `_isIntervalPaused` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` | Self: 0.0% (2.3ms) | Total: 0.0% (2.3ms) | Samples: 1

**Called by:**
- `filter` (1)

### `async call`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js` | Self: 0.0% (2.3ms) | Total: 0.0% (2.3ms) | Samples: 2

**Called by:**
- `async call` (1)
- `async call` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:743` | Self: 0.0% (2.2ms) | Total: 0.0% (2.2ms) | Samples: 1

**Called by:**
- `init` (1)

### `mupdf-wasm.wasm.wasm-function[fz_read_byte]`
`[native code]` | Self: 0.0% (2.2ms) | Total: 0.0% (4.4ms) | Samples: 2

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_lex]` (1)
- `mupdf-wasm.wasm.wasm-function[lex_number]` (1)
- `mupdf-wasm.wasm.wasm-function[lex_name]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[next_concat]` (1)

### `validateThis`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (2.2ms) | Total: 0.0% (2.2ms) | Samples: 2

**Called by:**
- `get` (2)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js` | Self: 0.0% (2.2ms) | Total: 0.0% (2.2ms) | Samples: 2

**Called by:**
- `filter` (1)
- `get value` (1)

### `warn`
`[native code]` | Self: 0.0% (2.2ms) | Total: 0.0% (2.2ms) | Samples: 2

**Called by:**
- `attachCropImages` (2)

### `writeFileSync`
`[native code]` | Self: 0.0% (2.2ms) | Total: 0.0% (4.5ms) | Samples: 2

**Called by:**
- `writeFileSync` (2)
- `async convertPdfToImages` (1)
- `(module)` (1)

**Calls:**
- `writeFileSync` (2)

### `__emval_decref`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (2.2ms) | Total: 0.0% (2.2ms) | Samples: 2

**Called by:**
- `fromWireType` (2)

### `add`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/registries.js:10` | Self: 0.0% (2.2ms) | Total: 0.0% (2.2ms) | Samples: 1

**Called by:**
- `interopZodTransformInputSchemaImpl` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:78` | Self: 0.0% (2.2ms) | Total: 0.0% (2.2ms) | Samples: 1

**Called by:**
- `init` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v3/types.js:479` | Self: 0.0% (2.2ms) | Total: 0.0% (2.2ms) | Samples: 1

### `mupdf-wasm.wasm.wasm-function[pqdownheap]`
`[native code]` | Self: 0.0% (2.2ms) | Total: 0.0% (2.2ms) | Samples: 2

**Called by:**
- `mupdf-wasm.wasm.wasm-function[build_tree]` (2)

### `hasOwnProperty`
`[native code]` | Self: 0.0% (2.2ms) | Total: 0.0% (2.2ms) | Samples: 2

**Called by:**
- `exposePublicSymbol` (1)
- `(anonymous)` (1)

### `mupdf-wasm.wasm.wasm-function[tt_face_get_location]`
`[native code]` | Self: 0.0% (2.2ms) | Total: 0.0% (2.2ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[load_truetype_glyph]` (1)

### `get`
`[native code]` | Self: 0.0% (2.2ms) | Total: 0.0% (2.2ms) | Samples: 2

**Called by:**
- `getWasmTableEntry` (2)

### `mupdf-wasm.wasm.wasm-function[body]`
`[native code]` | Self: 0.0% (2.1ms) | Total: 0.0% (2.1ms) | Samples: 2

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_md5_update]` (2)

### `detectVerticalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts` | Self: 0.0% (2.1ms) | Total: 0.0% (2.1ms) | Samples: 1

**Called by:**
- `async cropTableRows` (1)

### `isZodSchemaV3`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:13` | Self: 0.0% (2.1ms) | Total: 0.0% (2.1ms) | Samples: 1

**Called by:**
- `interopZodTransformInputSchemaImpl` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` | Self: 0.0% (2.1ms) | Total: 0.0% (2.1ms) | Samples: 2

**Called by:**
- `filter` (1)
- `_procInput` (1)

### `.wasm-function[466]`
`[native code]` | Self: 0.0% (2.0ms) | Total: 0.0% (41.5ms) | Samples: 1

**Called by:**
- `.wasm-function[11668]` (36)

**Calls:**
- `.wasm-function[11510]` (34)
- `.wasm-function[197]` (1)

### `RegExp`
`[native code]` | Self: 0.0% (2.0ms) | Total: 0.0% (2.0ms) | Samples: 2

**Called by:**
- `createToken` (2)

### `mupdf-wasm.wasm.wasm-function[pdf_lookup_cmap_full]`
`[native code]` | Self: 0.0% (2.0ms) | Total: 0.0% (2.0ms) | Samples: 2

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_remap_cmap_range]` (2)

### `_createInputDescriptor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs` | Self: 0.0% (2.0ms) | Total: 0.0% (2.0ms) | Samples: 2

**Called by:**
- `Sharp` (2)

### `slice`
`[native code]` | Self: 0.0% (2.0ms) | Total: 0.0% (2.0ms) | Samples: 1

**Called by:**
- `asPNG` (1)

### `async _generateUncached`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` | Self: 0.0% (2.0ms) | Total: 0.0% (2.0ms) | Samples: 2

**Called by:**
- `async _generateUncached` (2)

### `nonConstNoSmartPtrRawPointerToWireType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (1.9ms) | Total: 0.0% (1.9ms) | Samples: 2

**Called by:**
- `bound nonConstNoSmartPtrRawPointerToWireType` (2)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:58` | Self: 0.0% (1.9ms) | Total: 0.0% (1.9ms) | Samples: 2

**Called by:**
- `init` (2)

### `RegisteredPointer_fromWireType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (1.9ms) | Total: 0.0% (1.9ms) | Samples: 2

**Called by:**
- `readPointer` (1)
- `bound RegisteredPointer_fromWireType` (1)

### `readFileSync`
`[native code]` | Self: 0.0% (1.9ms) | Total: 0.0% (3.9ms) | Samples: 2

**Called by:**
- `readFileSync` (2)
- `async r` (2)

**Calls:**
- `readFileSync` (2)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/node_modules/openai/resources/beta/threads/runs/runs.mjs:186` | Self: 0.0% (1.9ms) | Total: 0.0% (1.9ms) | Samples: 1

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts` | Self: 0.0% (1.9ms) | Total: 0.0% (1.9ms) | Samples: 2

**Called by:**
- `map` (1)
- `async cropper` (1)

### `objectProcessor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:278` | Self: 0.0% (1.8ms) | Total: 0.0% (1.8ms) | Samples: 1

**Called by:**
- `process` (1)

### `validatesOnlyStrings`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/json_schema.js` | Self: 0.0% (1.8ms) | Total: 0.0% (1.8ms) | Samples: 1

**Called by:**
- `tool` (1)

### `runChecks`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:48` | Self: 0.0% (1.8ms) | Total: 0.0% (1.8ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `mupdf-wasm.wasm.wasm-function[ucdn_get_bidi_class]`
`[native code]` | Self: 0.0% (1.8ms) | Total: 0.0% (1.8ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_char]` (1)

### `_pipeline`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:1709` | Self: 0.0% (1.7ms) | Total: 0.0% (1.7ms) | Samples: 1

**Called by:**
- `async cropAndZoom` (1)

### `objectProcessor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js` | Self: 0.0% (1.6ms) | Total: 0.0% (1.6ms) | Samples: 1

**Called by:**
- `process` (1)

### `_addVersion`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:144` | Self: 0.0% (1.5ms) | Total: 0.0% (1.5ms) | Samples: 1

**Called by:**
- `ChatOpenRouter` (1)

### `defineProperties`
`[native code]` | Self: 0.0% (1.5ms) | Total: 0.0% (1.5ms) | Samples: 1

**Called by:**
- `check` (1)

### `objectProcessor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:289` | Self: 0.0% (1.5ms) | Total: 0.0% (1.5ms) | Samples: 1

**Called by:**
- `process` (1)

### `mupdf-wasm.wasm.wasm-function[fz_subpixel_adjust]`
`[native code]` | Self: 0.0% (1.4ms) | Total: 0.0% (1.4ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_render_glyph]` (1)

### `Graph$1`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js` | Self: 0.0% (1.4ms) | Total: 0.0% (1.4ms) | Samples: 1

**Called by:**
- `StateGraph` (1)

### `$ZodNever`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:43` | Self: 0.0% (1.4ms) | Total: 0.0% (1.4ms) | Samples: 1

**Called by:**
- `_never` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:13` | Self: 0.0% (1.4ms) | Total: 0.0% (1.4ms) | Samples: 1

**Called by:**
- `init` (1)

### `toISOString`
`[native code]` | Self: 0.0% (1.4ms) | Total: 0.0% (1.4ms) | Samples: 1

**Called by:**
- `getMicrosecondPrecisionDatestring` (1)

### `aborted`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js` | Self: 0.0% (1.4ms) | Total: 0.0% (1.4ms) | Samples: 1

**Called by:**
- `runChecks` (1)

### `_configHasToolCallId`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/utils.js` | Self: 0.0% (1.4ms) | Total: 0.0% (1.4ms) | Samples: 1

**Called by:**
- `async call` (1)

### `mupdf-wasm.wasm.wasm-function[emscripten_builtin_malloc]`
`[native code]` | Self: 0.0% (1.4ms) | Total: 0.0% (26.3ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_malloc_default]` (18)

**Calls:**
- `wasm-stub` (13)
- `mupdf-wasm.wasm.wasm-function[sbrk]` (4)

### `mupdf-wasm.wasm.wasm-function[fz_find_item]`
`[native code]` | Self: 0.0% (1.4ms) | Total: 0.0% (9.3ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_find_item]` (4)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_hash_find]` (3)

### `runWithConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js:33` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `get`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/registries.js:37` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `get` (1)

### `async generate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:432` | Self: 0.0% (1.3ms) | Total: 0.0% (3.1ms) | Samples: 1

**Called by:**
- `async generate` (2)

**Calls:**
- `_separateRunnableConfigFromCallOptionsCompat` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_open_raw_filter]`
`[native code]` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_open_filter]` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_show_path]`
`[native code]` | Self: 0.0% (1.3ms) | Total: 0.0% (94.1ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_S]` (72)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_stroke_path]` (70)
- `mupdf-wasm.wasm.wasm-function[fz_do_catch]` (1)

### `getStore`
`node:async_hooks` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `getRunnableConfig` (1)

### `DynamicStructuredTool`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:236` | Self: 0.0% (1.3ms) | Total: 0.0% (21.4ms) | Samples: 1

**Called by:**
- `tool` (3)

**Calls:**
- `StructuredTool` (2)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:391` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `anonymous` (1)

### `async cropAndZoom`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `async cropAndZoom` (1)

### `Z`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (1.3ms) | Total: 0.0% (24.9ms) | Samples: 1

**Called by:**
- `h` (17)

**Calls:**
- `R` (16)

### `internal:streams/destroy`
`internal:streams/destroy:16` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `anonymous` (1)

### `async _route`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_lex]`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (5.7ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_stream]` (4)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_read_byte]` (1)
- `mupdf-wasm.wasm.wasm-function[lex_number]` (1)
- `mupdf-wasm.wasm.wasm-function[lex_name]` (1)

### `mupdf-wasm.wasm.wasm-function[fz_do_catch]`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_path]` (1)

### `mupdf-wasm.wasm.wasm-function[gray_render_line]`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[gray_conic_to]` (1)

### `__emval_decref`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `fromWireType` (1)

### `_isSkipWrite`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `async doWrite` (1)

### `runWithConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js:29` | Self: 0.0% (1.2ms) | Total: 2.2% (6.06s) | Samples: 1

**Called by:**
- `(anonymous)` (10)
- `async invoke` (5)
- `(anonymous)` (1)

**Calls:**
- `RunTree` (4)
- `RunTree` (3)
- `RunTree` (3)
- `RunTree` (2)
- `RunTree` (1)
- `RunTree` (1)
- `RunTree` (1)

### `guarded`
`internal:shared` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

### `_commit`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `async tick` (1)

### `process`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:93` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `objectProcessor` (1)

### `.wasm-function[1709]`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `.wasm-function[12363]` (1)

### `RunTree`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:334` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `runWithConfig` (1)

### `finalize`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `toJsonSchema` (1)

### `require`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (108.4ms) | Samples: 1

**Called by:**
- `bound require` (39)

**Calls:**
- `anonymous` (38)

### `async _first`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `async _first` (1)

### `RunTree`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `runWithConfig` (1)

### `toJSONSchema`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `toJsonSchema` (1)

### `getCurrentRunTree`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/singletons/traceable.js:26` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `getTraceableRunTree` (1)

### `pump`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/stream.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

### `__embind_register_constant`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (1.2ms) | Total: 0.0% (3.4ms) | Samples: 1

**Called by:**
- `wasm-stub` (3)

**Calls:**
- `whenDependentTypesAreResolved` (2)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:177` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `anonymous` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_run_ET]`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (40.9ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (26)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_flush_text_imp]` (25)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/utils/config.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `some` (1)

### `mupdf-wasm.wasm.wasm-function[fz_insert_gel]`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_add_line]` (1)

### `run`
`node:async_hooks` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `_resolvePromises`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:57` | Self: 0.0% (1.2ms) | Total: 0.4% (1.35s) | Samples: 1

**Called by:**
- `_tryToStartAnother` (2)

**Calls:**
- `emit` (1)

### `setPrototypeDirectOrThrow`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `brand` (1)

### `BinaryOperatorAggregate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/channels/binop.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `getChannel` (1)

### `createNamedFunction`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `__embind_register_enum_value` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `async branchWriter` (1)

### `mupdf-wasm.wasm.wasm-function[fz_stroke_lineto_aux]`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (2.4ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[stroke_lineto]` (1)
- `mupdf-wasm.wasm.wasm-function[fz_stroke_bezier]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_add_line]` (1)

### `interopZodObjectStrict`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:299` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `toJsonSchema` (1)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `async cropBbsRows` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:202` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `init` (1)

### `convertToDottedOrderFormat`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `RunTree` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:32` | Self: 0.0% (1.2ms) | Total: 0.0% (121.1ms) | Samples: 1

**Called by:**
- `async invoke` (16)
- `async invoke` (5)
- `async _route` (2)
- `async doWrite` (2)

**Calls:**
- `async invoke` (21)
- `async invoke` (3)

### `mupdf-wasm.wasm.wasm-function[fz_open_document_with_buffer]`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (2.3ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[wasm_open_document_with_buffer]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_open_buffer]` (1)

### `setPrototypeDirect`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `internal:stream` (1)

### `isDeltaChannel`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/channels/base.js:12` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `putWrites` (1)

### `rng`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/uuid/src/rng.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `v7` (1)

### `readSync`
`node:fs` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `readFileSync` (1)

### `defineLazy`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:62` | Self: 0.0% (1.2ms) | Total: 0.0% (2.4ms) | Samples: 1

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `defineProperty` (1)

### `mupdf-wasm.wasm.wasm-function[do_scavenging_malloc]`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (27.5ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_malloc]` (19)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_malloc_default]` (18)

### `async _generateUncached`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:308` | Self: 0.0% (1.1ms) | Total: 0.2% (685.9ms) | Samples: 1

**Calls:**
- `map` (38)

### `ZodNumber`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:42` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `clone` (1)

### `mupdf-wasm.wasm.wasm-function[do_scavenging_realloc]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_realloc]` (1)

### `bind`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `craftInvokerFunction` (1)

### `mapDebugTaskResults`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/debug.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `generatorResume` (1)

### `sharedRegisterType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (1.1ms) | Total: 0.0% (5.2ms) | Samples: 1

**Called by:**
- `registerType` (5)

**Calls:**
- `forEach` (4)

### `putWrites`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `_commit` (1)

### `sha1`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/sha1.js:66` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `v35` (1)

### `Sharp`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async compressImage` (1)

### `mupdf-wasm.wasm.wasm-function[paint_affine_near_3_fb0]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_paint_image_imp]` (1)

### `asyncFunctionDrive`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `async _runLoop`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1205` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

### `mupdf-wasm.wasm.wasm-function[pdf_dict_find]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_dict_get]` (1)

### `async channelsFromCheckpoint`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/channels/base.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async channelsFromCheckpoint` (1)

### `BaseLangChain`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:137` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `StructuredTool` (1)

### `async initialize`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async initialize` (1)

### `mupdf-wasm.wasm.wasm-function[make_weights]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_scale_pixmap_cached]` (1)

### `flatMap`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `readChannel`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/io.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `_procInput` (1)

### `.wasm-function[397]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `.wasm-function[1543]` (1)

### `toString`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async compressImage` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_process_stream]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (198.4ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_raw_contents]` (140)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (134)
- `mupdf-wasm.wasm.wasm-function[pdf_lex]` (4)
- `mupdf-wasm.wasm.wasm-function[pdf_new_name]` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_load_cmap]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_cmap_imp]` (1)

### `mupdf-wasm.wasm.wasm-function[fz_new_colorspace_context]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (13.0ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_new_context_imp]` (12)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_new_icc_colorspace]` (11)

### `getWriters`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/read.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `getNode` (1)

### `getGlobalAsyncLocalStorageInstance`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/globals.js:8` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `getInstance` (1)

### `mupdf-wasm.wasm.wasm-function[resolve_color]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_stroke_path_aux]` (1)

### `mupdf-wasm.wasm.wasm-function[inflate_table]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[inflate]` (1)

### `async cropBbsRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async cropBbsRows` (1)

### `async _runWithRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/retry.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async _runWithRetry` (1)

### `$ZodCheckGreaterThan`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `_gte` (1)

### `.wasm-function[12335]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `.wasm-function[221]` (1)

### `.wasm-function[107]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `.wasm-function[2136]` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/composite.mjs:142` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `map` (1)

### `.wasm-function[182]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (130.6ms) | Samples: 1

**Called by:**
- `.wasm-function[12008]` (4)

**Calls:**
- `.wasm-function[1199]` (3)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:27` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `init` (1)

### `call`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `bound call` (1)

### `node:fs/promises`
`node:fs/promises:8` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `anonymous` (1)

### `createToken`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/internal/re.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1211` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `anonymous` (1)

### `invocationParams`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:221` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async _generateUncached` (1)

### `__embind_register_bigint`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `wasm-stub` (1)

### `emval_lookupTypes`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `__emval_create_invoker` (1)

### `mupdf-wasm.wasm.wasm-function[fz_new_stream]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_open_buffer]` (1)

### `extract`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:486` | Self: 0.0% (1.1ms) | Total: 0.0% (90.8ms) | Samples: 1

**Called by:**
- `async cropTableRows` (2)
- `async cropAndZoom` (2)
- `async cropAndZoom` (1)
- `async cropTableRows` (1)

**Calls:**
- `forEach` (5)

### `IterableReadableStream`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `IterableReadableWritableStream` (1)

### `resolvePromiseWithFirstResolvingFunctionCallCheck`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async _mergeConfig` (1)

### `toBuffer`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async cropAndZoom` (1)

### `getStructuringElement`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (3.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (3)

**Calls:**
- `(unknown)` (1)
- `bound RegisteredPointer_fromWireType` (1)

### `Page`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `PDFPage` (1)

### `convertLangChainToolCallToOpenAI`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:43` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `map` (1)

### `WritableState`
`internal:streams/writable:139` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `Duplex` (1)

### `extractDefs`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `toJSONSchema` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/checks.js:99` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `init` (1)

### `.wasm-function[1310]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `.wasm-function[16862]` (1)

### `normalizeDef`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:746` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `get value` (1)

### `delete`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `detectTables` (1)

### `async _`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `(module)` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:487` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `forEach` (1)

### `FSStream`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `createStream` (1)

### `isRunnable`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `addNode` (1)

### `node:fs`
`node:fs:553` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

### `prefixGenerator`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `generatorResume` (1)

### `AsyncGeneratorWithSetup`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `async stream` (1)

### `countNonZero`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (42.6ms) | Samples: 1

**Called by:**
- `detectTables` (20)
- `detectTables` (17)

**Calls:**
- `wasm-stub` (36)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/io.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `some` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:273` | Self: 0.0% (1.0ms) | Total: 0.0% (199.8ms) | Samples: 1

**Called by:**
- `async (anonymous)` (8)

**Calls:**
- `fetch` (7)

### `getBinarySync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `async getWasmBinary` (1)

### `wrapConversion`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1135` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `route` (1)

### `get lc_serializable_keys`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/serializable.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `Serializable` (1)

### `EventEmitter`
`node:events:16` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `Stream` (1)

### `unshift`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `wrapConversion` (1)

### `__embind_register_class_function`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `wasm-stub` (1)

### `bound optional`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (3.1ms) | Samples: 1

**Called by:**
- `async cropper` (2)
- `(module)` (1)

**Calls:**
- `optional` (2)

### `ChannelWrite`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `attachNode` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/sax-js/sax.js:522` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `forEach` (1)

### `.wasm-function[2667]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (19.9ms) | Samples: 1

**Called by:**
- `.wasm-function[16862]` (18)

**Calls:**
- `wasm-stub` (17)

### `_getTracingInheritableMetadataFromConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `async getCallbackManagerForConfig` (1)

### `bound decodeMemoryView`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (4.3ms) | Samples: 1

**Called by:**
- `(anonymous)` (4)

**Calls:**
- `decodeMemoryView` (3)

### `mupdf-wasm.wasm.wasm-function[jpeg_fill_bit_buffer]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[decode_mcu_8778]` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:1751` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (1.0ms) | Total: 0.3% (830.9ms) | Samples: 1

**Called by:**
- `(anonymous)` (328)
- `async (anonymous)` (326)

**Calls:**
- `async (anonymous)` (326)
- `async createWasm` (322)
- `run` (76)
- `staticInit` (3)
- `async (anonymous)` (2)

### `_isIntervalPaused`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:66` | Self: 0.0% (1.0ms) | Total: 0.0% (2.1ms) | Samples: 1

**Called by:**
- `_tryToStartAnother` (2)

**Calls:**
- `now` (1)

### `padStart`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `getMicrosecondPrecisionDatestring` (1)

### `Buffer`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `includes`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `ensureLangGraphConfig` (1)

### `detectHorizontalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:496` | Self: 0.0% (1.0ms) | Total: 0.0% (3.1ms) | Samples: 1

**Called by:**
- `async cropTableRows` (3)

**Calls:**
- `get` (2)

### `mupdf-wasm.wasm.wasm-function[build_tree]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (3.2ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[_tr_flush_block]` (3)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pqdownheap]` (2)

### `min`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:518` | Self: 0.0% (1.0ms) | Total: 0.0% (2.1ms) | Samples: 1

**Called by:**
- `bound min` (2)

**Calls:**
- `_gte` (1)

### `isDir`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `createNode` (1)

### `ReadableState`
`internal:streams/readable:30` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `Duplex` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:33` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `init` (1)

### `async generate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `async generatePrompt` (1)

### `lc_name`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `getName` (1)

### `.wasm-function[4417]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (54.6ms) | Samples: 1

**Called by:**
- `.wasm-function[16862]` (51)

**Calls:**
- `wasm-stub` (50)

### `async doWrite`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `async _write` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:91` | Self: 0.0% (1.0ms) | Total: 0.0% (2.3ms) | Samples: 1

**Calls:**
- `tool` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:1` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `FSNode` (1)

### `.wasm-function[197]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `.wasm-function[466]` (1)

### `nullableProcessor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `process` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_drop_gstate]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_grestore]` (1)

### `mupdf-wasm.wasm.wasm-function[show_string]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (8.0ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_string]` (4)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_char]` (3)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:204` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `process` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/checks.js` | Self: 0.0% (999us) | Total: 0.0% (999us) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `Userdata`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js` | Self: 0.0% (999us) | Total: 0.0% (999us) | Samples: 1

**Called by:**
- `ColorSpace` (1)

### `_array`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:718` | Self: 0.0% (995us) | Total: 0.0% (995us) | Samples: 1

**Called by:**
- `(module)` (1)

### `mupdf-wasm.wasm.wasm-function[tt_face_goto_table]`
`[native code]` | Self: 0.0% (993us) | Total: 0.0% (993us) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[sfnt_load_face]` (1)

### `close`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/stream.js` | Self: 0.0% (992us) | Total: 0.0% (992us) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `getMicrosecondPrecisionDatestring`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:31` | Self: 0.0% (991us) | Total: 0.0% (2.0ms) | Samples: 1

**Called by:**
- `RunTree` (2)

**Calls:**
- `padStart` (1)

### `.wasm-function[9540]`
`[native code]` | Self: 0.0% (991us) | Total: 30.6% (83.84s) | Samples: 1

**Called by:**
- `.wasm-function[557]` (72548)
- `.wasm-function[1037]` (1497)

**Calls:**
- `.wasm-function[2968]` (74028)
- `.wasm-function[2969]` (16)

### `buffer`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/is.mjs:40` | Self: 0.0% (989us) | Total: 0.0% (989us) | Samples: 1

**Called by:**
- `_createInputDescriptor` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:936` | Self: 0.0% (989us) | Total: 10.1% (27.81s) | Samples: 1

**Calls:**
- `async invoke` (5)
- `async invoke` (1)

### `async pRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js` | Self: 0.0% (989us) | Total: 0.0% (989us) | Samples: 1

**Called by:**
- `async pRetry` (1)

### `get`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:36` | Self: 0.0% (986us) | Total: 0.0% (986us) | Samples: 1

**Called by:**
- `async cropper` (1)

### `node:path`
`node:path:4` | Self: 0.0% (986us) | Total: 0.0% (986us) | Samples: 1

### `attachEdge`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` | Self: 0.0% (985us) | Total: 0.0% (985us) | Samples: 1

**Called by:**
- `_compileResolved` (1)

### `isCheckpointEnvelope`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/stream/convert.js` | Self: 0.0% (983us) | Total: 0.0% (983us) | Samples: 1

**Called by:**
- `async _streamIterator` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/node_modules/openai/internal/qs/utils.mjs` | Self: 0.0% (981us) | Total: 0.0% (981us) | Samples: 1

**Called by:**
- `(module)` (1)

### `emptyChannels`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/channels/base.js:88` | Self: 0.0% (978us) | Total: 0.0% (978us) | Samples: 1

**Called by:**
- `_localRead` (1)

### `.wasm-function[1948]`
`[native code]` | Self: 0.0% (977us) | Total: 0.0% (977us) | Samples: 1

**Called by:**
- `.wasm-function[1037]` (1)

### `async convertPdfToImages`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts` | Self: 0.0% (977us) | Total: 0.0% (977us) | Samples: 1

**Called by:**
- `(module)` (1)

### `v1`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/v1.js` | Self: 0.0% (975us) | Total: 0.0% (975us) | Samples: 1

**Called by:**
- `v6` (1)

### `.wasm-function[280]`
`[native code]` | Self: 0.0% (975us) | Total: 0.0% (131.6ms) | Samples: 1

**Called by:**
- `.wasm-function[585]` (3)
- `.wasm-function[98]` (1)
- `.wasm-function[444]` (1)

**Calls:**
- `.wasm-function[11375]` (4)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:359` | Self: 0.0% (972us) | Total: 0.0% (972us) | Samples: 1

**Called by:**
- `every` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:1534` | Self: 0.0% (968us) | Total: 0.0% (1.9ms) | Samples: 1

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `(anonymous)` (1)

### `async tick`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` | Self: 0.0% (966us) | Total: 0.0% (966us) | Samples: 1

**Called by:**
- `async tick` (1)

### `__embind_register_value_array_element`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (966us) | Total: 0.0% (966us) | Samples: 1

**Called by:**
- `wasm-stub` (1)

### `async _runLoop`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js` | Self: 0.0% (966us) | Total: 0.0% (966us) | Samples: 1

**Called by:**
- `async _runLoop` (1)

### `__embind_register_class`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (966us) | Total: 0.0% (966us) | Samples: 1

**Called by:**
- `wasm-stub` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs` | Self: 0.0% (965us) | Total: 0.0% (965us) | Samples: 1

**Called by:**
- `forEach` (1)

### `resize`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs` | Self: 0.0% (958us) | Total: 0.0% (958us) | Samples: 1

**Called by:**
- `async compressImage` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:1055` | Self: 0.0% (956us) | Total: 0.0% (956us) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `checkpointNamespaceFromNs`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` | Self: 0.0% (956us) | Total: 0.0% (956us) | Samples: 1

**Called by:**
- `async initialize` (1)

### `mupdf-wasm.wasm.wasm-function[init_block]`
`[native code]` | Self: 0.0% (953us) | Total: 0.0% (953us) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[_tr_flush_block]` (1)

### `convertToOpenAITool`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/function_calling.js` | Self: 0.0% (947us) | Total: 0.0% (947us) | Samples: 1

**Called by:**
- `map` (1)

### `isStructuredToolParams`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/types.js:29` | Self: 0.0% (944us) | Total: 0.0% (944us) | Samples: 1

**Called by:**
- `isLangChainTool` (1)

### `AsciiToString`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (940us) | Total: 0.0% (940us) | Samples: 1

**Called by:**
- `__embind_register_enum_value` (1)

### `XXH3_mul128_fold64`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/hash.js` | Self: 0.0% (940us) | Total: 0.0% (940us) | Samples: 1

**Called by:**
- `XXH3_mix32B` (1)

### `toUpperCase`
`[native code]` | Self: 0.0% (936us) | Total: 0.0% (936us) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `filter`
`[native code]` | Self: 0.0% (934us) | Total: 0.0% (6.8ms) | Samples: 1

**Called by:**
- `getEnumValues` (1)
- `async _getUpdates` (1)
- `bound call` (1)
- `lookupPath` (1)
- `async _first` (1)

**Calls:**
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `bound int`
`[native code]` | Self: 0.0% (934us) | Total: 0.0% (51.1ms) | Samples: 1

**Called by:**
- `async cropper` (6)
- `async cropper` (2)

**Calls:**
- `bound check` (5)
- `int` (2)

### `@lazy`
`[native code]` | Self: 0.0% (933us) | Total: 0.0% (933us) | Samples: 1

**Called by:**
- `node:crypto` (1)

### `RegisteredPointer`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (931us) | Total: 0.0% (931us) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:19` | Self: 0.0% (931us) | Total: 0.0% (931us) | Samples: 1

**Called by:**
- `init` (1)

### `mupdf-wasm.wasm.wasm-function[scale_row_from_temp]`
`[native code]` | Self: 0.0% (929us) | Total: 0.0% (929us) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_scale_pixmap_cached]` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:275` | Self: 0.0% (929us) | Total: 0.0% (929us) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `__embind_register_constant`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (925us) | Total: 0.0% (925us) | Samples: 1

**Called by:**
- `wasm-stub` (1)

### `from`
`[native code]` | Self: 0.0% (922us) | Total: 0.0% (922us) | Samples: 1

**Called by:**
- `objectProcessor` (1)

### `ZodObject`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:40` | Self: 0.0% (921us) | Total: 0.0% (921us) | Samples: 1

**Called by:**
- `object` (1)

### `hexToBytes`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/xxhash/xxhash.js:20` | Self: 0.0% (918us) | Total: 0.0% (918us) | Samples: 1

**Called by:**
- `(module)` (1)

### `async _executeTasksWithRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js` | Self: 0.0% (912us) | Total: 0.0% (912us) | Samples: 1

**Called by:**
- `async tick` (1)

### `objectProcessor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:282` | Self: 0.0% (910us) | Total: 0.0% (9.2ms) | Samples: 1

**Called by:**
- `process` (8)

**Calls:**
- `process` (4)
- `process` (1)
- `process` (1)
- `cloneObject` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js:191` | Self: 0.0% (910us) | Total: 0.1% (431.7ms) | Samples: 1

**Called by:**
- `async pRetry` (25)

**Calls:**
- `async (anonymous)` (24)

### `integer`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/is.mjs` | Self: 0.0% (909us) | Total: 0.0% (909us) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `_prepareSingleTask`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js` | Self: 0.0% (907us) | Total: 0.0% (907us) | Samples: 1

**Called by:**
- `_prepareNextTasks` (1)

### `onComplete`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (905us) | Total: 0.0% (54.0ms) | Samples: 1

**Called by:**
- `whenDependentTypesAreResolved` (44)
- `(anonymous)` (4)

**Calls:**
- `(anonymous)` (41)
- `registerType` (3)
- `(anonymous)` (3)

### `getDefaultClientConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js:923` | Self: 0.0% (896us) | Total: 0.0% (896us) | Samples: 1

**Called by:**
- `Client` (1)

### `next`
`[native code]` | Self: 0.0% (893us) | Total: 0.0% (2.1ms) | Samples: 1

**Called by:**
- `async (anonymous)` (2)

**Calls:**
- `async _streamIterator` (1)

### `async _generate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js` | Self: 0.0% (893us) | Total: 0.0% (893us) | Samples: 1

**Called by:**
- `async _generate` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/ranges/intersects.js:9` | Self: 0.0% (891us) | Total: 0.0% (891us) | Samples: 1

**Called by:**
- `anonymous` (1)

### `Client`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js` | Self: 0.0% (891us) | Total: 0.0% (891us) | Samples: 1

**Called by:**
- `getSharedClient` (1)

### `Serializable`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/serializable.js:82` | Self: 0.0% (889us) | Total: 0.0% (889us) | Samples: 1

**Called by:**
- `BaseMessage` (1)

### `performIteration`
`[native code]` | Self: 0.0% (886us) | Total: 0.0% (886us) | Samples: 1

**Called by:**
- `finalize` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:64` | Self: 0.0% (882us) | Total: 0.0% (882us) | Samples: 1

**Called by:**
- `init` (1)

### `convertOpenRouterResponseToBaseMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/converters/messages.js:33` | Self: 0.0% (0us) | Total: 5.9% (16.13s) | Samples: 0

**Called by:**
- `async _generate` (12)

**Calls:**
- `convertCompletionsMessageToBaseMessage` (5)
- `convertCompletionsMessageToBaseMessage` (3)
- `convertCompletionsMessageToBaseMessage` (2)
- `convertCompletionsMessageToBaseMessage` (1)
- `convertCompletionsMessageToBaseMessage` (1)

### `async _getUpdates`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:625` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `async _getUpdates` (1)

**Calls:**
- `filter` (1)

### `async mapBatched`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:71` | Self: 0.0% (0us) | Total: 0.0% (1.8ms) | Samples: 0

**Called by:**
- `async cropperBatch` (2)

**Calls:**
- `async mapBatched` (2)

### `isInteropZodSchema`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:32` | Self: 0.0% (0us) | Total: 1.6% (4.37s) | Samples: 0

**Called by:**
- `async call` (1)

**Calls:**
- `isZodSchemaV4` (1)

### `mupdf-wasm.wasm.wasm-function[wasm_open_document_with_buffer]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Called by:**
- `wasm-stub` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_open_document_with_buffer]` (2)

### `async extract`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:154` | Self: 0.0% (0us) | Total: 0.0% (8.2ms) | Samples: 0

**Calls:**
- `attachCropImages` (3)
- `attachCropImages` (2)
- `attachCropImages` (2)

### `__embind_register_class_property`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `wasm-stub` (3)

**Calls:**
- `whenDependentTypesAreResolved` (3)

### `mupdf-wasm.wasm.wasm-function[jpeg_read_scanlines]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (7.5ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[next_dctd]` (5)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[process_data_simple_main_8796]` (5)

### `mupdf-wasm.wasm.wasm-function[FT_Outline_Decompose]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[gray_raster_render]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[gray_conic_to]` (1)

### `.wasm-function[584]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.6ms) | Samples: 0

**Called by:**
- `.wasm-function[76]` (2)

**Calls:**
- `.wasm-function[585]` (2)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:49` | Self: 0.0% (0us) | Total: 2.5% (6.91s) | Samples: 0

**Calls:**
- `async cropAndZoom` (10)

### `async _mergeConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:622` | Self: 0.0% (0us) | Total: 0.0% (56.2ms) | Samples: 0

**Called by:**
- `async _mergeConfig` (1)

**Calls:**
- `mergeConfigs` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:177` | Self: 0.0% (0us) | Total: 0.4% (1.17s) | Samples: 0

**Calls:**
- `log` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:697` | Self: 0.0% (0us) | Total: 0.0% (3.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (3)

**Calls:**
- `(anonymous)` (3)

### `ensureLangGraphConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/utils/config.js:160` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async invoke` (1)

**Calls:**
- `includes` (1)

### `lookupPath`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (934us) | Samples: 0

**Called by:**
- `mknod` (1)

**Calls:**
- `filter` (1)

### `openDocument`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:1475` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Called by:**
- `async convertPdfToImages` (2)

**Calls:**
- `wasm-stub` (2)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:40` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `isLangChainTool`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/types.js:47` | Self: 0.0% (0us) | Total: 0.0% (944us) | Samples: 0

**Called by:**
- `convertToOpenAITool` (1)

**Calls:**
- `isStructuredToolParams` (1)

### `async tick`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:447` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `async _runLoop` (2)

**Calls:**
- `async tick` (1)
- `async tick` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_cmap]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_to_unicode]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_cmap_imp]` (1)

### `.wasm-function[16862]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (80.4ms) | Samples: 0

**Called by:**
- `wasm-stub` (74)

**Calls:**
- `.wasm-function[4417]` (51)
- `.wasm-function[2667]` (18)
- `.wasm-function[744]` (2)
- `.wasm-function[3389]` (1)
- `.wasm-function[2136]` (1)
- `.wasm-function[1310]` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/detect-libc.js:7` | Self: 0.0% (0us) | Total: 0.0% (997us) | Samples: 0

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:868` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Called by:**
- `init` (2)

**Calls:**
- `init` (2)

### `.wasm-function[6535]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `.wasm-function[6551]` (1)

**Calls:**
- `wasm-stub` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:326` | Self: 0.0% (0us) | Total: 0.4% (1.22s) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `copyDataProperties` (1)

### `_never`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:457` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `interopZodObjectStrict` (1)

**Calls:**
- `$ZodNever` (1)

### `node:events`
`node:events:10` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_process_Do]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (15.9ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (11)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_Do_image]` (10)
- `mupdf-wasm.wasm.wasm-function[pdf_load_image]` (1)

### `defaultProcessor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:461` | Self: 0.0% (0us) | Total: 0.0% (3.1ms) | Samples: 0

**Called by:**
- `process` (3)

**Calls:**
- `process` (3)

### `async tick`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:47` | Self: 0.0% (0us) | Total: 0.0% (3.1ms) | Samples: 0

**Called by:**
- `async _runLoop` (3)

**Calls:**
- `async tick` (2)
- `async tick` (1)

### `mupdf-wasm.wasm.wasm-function[load_truetype_glyph]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[tt_glyph_load]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[tt_face_get_location]` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_cmap_imp]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_cmap]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_cmap]` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/sharp-linux-x64/index.cjs:2` | Self: 0.0% (0us) | Total: 0.0% (4.2ms) | Samples: 0

**Called by:**
- `anonymous` (4)

**Calls:**
- `bound require` (4)

### `.wasm-function[1308]`
`[native code]` | Self: 0.0% (0us) | Total: 30.0% (82.08s) | Samples: 0

**Called by:**
- `.wasm-function[10385]` (72429)

**Calls:**
- `.wasm-function[557]` (72429)

### `runWithConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js:22` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `async invoke` (1)

**Calls:**
- `_configureSync` (1)

### `Duplex`
`internal:streams/duplex:37` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `Sharp` (1)

**Calls:**
- `Stream` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1181` | Self: 0.0% (0us) | Total: 0.0% (5.8ms) | Samples: 0

**Called by:**
- `async invoke` (5)

**Calls:**
- `async stream` (5)

### `RunnablePassthrough`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/passthrough.js:39` | Self: 0.0% (0us) | Total: 0.0% (4.3ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `(anonymous)` (1)

### `async cropAndZoom`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:46` | Self: 0.0% (0us) | Total: 1.2% (3.54s) | Samples: 0

**Calls:**
- `_pipeline` (7)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:24` | Self: 0.0% (0us) | Total: 0.0% (931us) | Samples: 0

**Calls:**
- `bound require` (1)

### `toJSONSchema`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:598` | Self: 0.0% (0us) | Total: 0.0% (21.0ms) | Samples: 0

**Called by:**
- `toJsonSchema` (13)

**Calls:**
- `process` (12)
- `process` (1)

### `mupdf-wasm.wasm.wasm-function[do_flatten_stroke]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_flatten_stroke_path]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_walk_path]` (2)

### `async classifyImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:24` | Self: 0.0% (0us) | Total: 0.0% (5.1ms) | Samples: 0

**Called by:**
- `async (anonymous)` (5)

**Calls:**
- `async classifyImage` (5)

### `every`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (972us) | Samples: 0

**Called by:**
- `putWrites` (1)

**Calls:**
- `(anonymous)` (1)

### `createNode`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `mount` (1)
- `createNode` (1)
- `mknod` (1)

**Calls:**
- `createNode` (1)
- `FSNode` (1)
- `isDir` (1)

### `async createWasm`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.2% (701.2ms) | Samples: 0

**Called by:**
- `async createWasm` (322)
- `async (anonymous)` (322)

**Calls:**
- `async createWasm` (322)
- `findWasmBinary` (265)
- `findWasmBinary` (56)
- `async instantiateAsync` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_new_name]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_stream]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_malloc]` (1)

### `_compileResolved`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:500` | Self: 0.0% (0us) | Total: 0.0% (985us) | Samples: 0

**Called by:**
- `compile` (1)

**Calls:**
- `attachEdge` (1)

### `check`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:95` | Self: 0.0% (0us) | Total: 0.0% (25.3ms) | Samples: 0

**Called by:**
- `bound check` (2)

**Calls:**
- `mergeDefs` (1)
- `defineProperties` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_is_ocg_hidden_imp]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_is_ocg_hidden]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_dict_get]` (1)

### `async cropBbsRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:840` | Self: 0.0% (0us) | Total: 9.9% (27.27s) | Samples: 0

**Calls:**
- `detectTables` (11140)
- `detectTables` (10786)
- `detectTables` (1833)
- `detectTables` (274)
- `detectTables` (129)
- `detectTables` (111)
- `detectTables` (52)
- `detectTables` (20)
- `detectTables` (17)
- `detectTables` (3)
- `detectTables` (1)
- `detectTables` (1)
- `detectTables` (1)
- `detectTables` (1)
- `detectTables` (1)
- `detectTables` (1)
- `detectTables` (1)

### `craftInvokerFunction`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (30.9ms) | Samples: 0

**Called by:**
- `(anonymous)` (28)

**Calls:**
- `anonymous` (14)
- `createJsInvoker` (13)
- `bind` (1)

### `putWrites`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:383` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `_commit` (1)

**Calls:**
- `isDeltaChannel` (1)

### `async cropAndZoom`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:42` | Self: 0.0% (0us) | Total: 0.0% (4.1ms) | Samples: 0

**Calls:**
- `Sharp` (4)

### `async branchWriter`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:689` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `async _route` (1)

**Calls:**
- `async (anonymous)` (1)

### `mupdf-wasm.wasm.wasm-function[fz_render_ft_glyph]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (8.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_render_glyph]` (5)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[FT_Render_Glyph_Internal]` (3)
- `mupdf-wasm.wasm.wasm-function[FT_Load_Glyph]` (1)
- `mupdf-wasm.wasm.wasm-function[glyph_from_ft_bitmap]` (1)

### `growMemory`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (3.6ms) | Samples: 0

**Called by:**
- `_emscripten_resize_heap` (2)

**Calls:**
- `updateMemoryViews` (2)

### `detectVerticalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:557` | Self: 0.0% (0us) | Total: 0.0% (42.5ms) | Samples: 0

**Called by:**
- `async cropTableRows` (38)

**Calls:**
- `threshold` (38)

### `async call`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:104` | Self: 0.0% (0us) | Total: 2.5% (6.92s) | Samples: 0

**Called by:**
- `async call` (11)

**Calls:**
- `async call` (9)
- `async call` (1)
- `async call` (1)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:715` | Self: 0.0% (0us) | Total: 0.2% (610.0ms) | Samples: 0

**Calls:**
- `_pipeline` (6)
- `toFile` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:645` | Self: 0.0% (0us) | Total: 0.0% (57.3ms) | Samples: 0

**Called by:**
- `async invoke` (2)

**Calls:**
- `async _mergeConfig` (2)

### `__embind_finalize_value_object`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `wasm-stub` (2)

**Calls:**
- `whenDependentTypesAreResolved` (2)

### `nullable`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1134` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `bound nullable` (1)

**Calls:**
- `ZodNullable` (1)

### `async add`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:152` | Self: 0.0% (0us) | Total: 0.1% (497.0ms) | Samples: 0

**Called by:**
- `async _generate` (28)
- `callWithOptions` (3)

**Calls:**
- `Promise` (31)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:309` | Self: 0.0% (0us) | Total: 0.2% (684.7ms) | Samples: 0

**Called by:**
- `async (anonymous)` (38)

**Calls:**
- `async _generate` (38)

### `__embind_register_enum`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.8ms) | Samples: 0

**Called by:**
- `wasm-stub` (2)

**Calls:**
- `registerType` (2)

### `some`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.4ms) | Samples: 0

**Called by:**
- `mapOutputUpdates` (1)
- `some` (1)
- `isRootLevelExplicitInvoke` (1)

**Calls:**
- `(anonymous)` (1)
- `(anonymous)` (1)
- `some` (1)

### `async loadImageForOpenCV`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:79` | Self: 0.0% (0us) | Total: 0.0% (231.2ms) | Samples: 0

**Calls:**
- `(anonymous)` (98)

### `convertToOpenAITool`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/function_calling.js:45` | Self: 0.0% (0us) | Total: 0.0% (113.8ms) | Samples: 0

**Called by:**
- `map` (36)

**Calls:**
- `convertToOpenAIFunction` (35)
- `convertToOpenAIFunction` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_lookup_resource]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_dict_get]` (1)

### `mupdf-wasm.wasm.wasm-function[fz_paint_image_imp]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_paint_image]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[paint_affine_near_3_fb0]` (1)

### `async _streamIterator`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1126` | Self: 0.0% (0us) | Total: 0.0% (3.3ms) | Samples: 0

**Calls:**
- `async (anonymous)` (3)

### `mupdf-wasm.wasm.wasm-function[push_cmd]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_moveto]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_realloc_array_imp]` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:306` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `async (anonymous)` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_load_image_imp]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_image]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_compressed_stream]` (1)

### `releaseClassHandle`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `delete` (1)

**Calls:**
- `runDestructor` (1)

### `mupdf-wasm.wasm.wasm-function[putchunk]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[png_write_band]` (3)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[crc32]` (3)

### `dilate`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (145.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (129)

**Calls:**
- `wasm-stub` (129)

### `async channelsFromCheckpoint`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/channels/base.js:168` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async initialize` (1)

**Calls:**
- `async channelsFromCheckpoint` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_show_string]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (8.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_Tj]` (4)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[show_string]` (4)

### `internal:util/inspect`
`internal:util/inspect:154` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound call` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:644` | Self: 0.0% (0us) | Total: 0.0% (57.3ms) | Samples: 0

**Called by:**
- `async withRetry` (2)

**Calls:**
- `async invoke` (2)

### `cvtColor`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (200.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (181)

**Calls:**
- `(unknown)` (181)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:508` | Self: 0.0% (0us) | Total: 0.0% (22.6ms) | Samples: 0

**Called by:**
- `init` (3)

**Calls:**
- `init` (3)

### `embind__requireFunction`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `__embind_register_smart_ptr` (1)
- `__embind_register_class_function` (1)

**Calls:**
- `makeDynCaller` (2)

### `mupdf-wasm.wasm.wasm-function[pdf_load_font]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (19.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_try_load_font]` (13)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_type0_font]` (9)
- `mupdf-wasm.wasm.wasm-function[pdf_find_item]` (4)

### `async _generate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:266` | Self: 0.0% (0us) | Total: 0.2% (684.7ms) | Samples: 0

**Called by:**
- `async (anonymous)` (38)

**Calls:**
- `async _generate` (31)
- `async _generate` (5)
- `async _generate` (1)
- `async _generate` (1)

### `node:fs`
`node:fs:2` | Self: 0.0% (0us) | Total: 0.0% (13.8ms) | Samples: 0

**Calls:**
- `anonymous` (10)

### `mupdf-wasm.wasm.wasm-function[pdf_open_image_stream]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (87.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_open_object_array]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_load_image_stream]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_open_filter]` (2)

### `v6`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/v6.js:8` | Self: 0.0% (0us) | Total: 0.0% (975us) | Samples: 0

**Called by:**
- `createCheckpoint` (1)

**Calls:**
- `v1` (1)

### `async generatePrompt`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:484` | Self: 0.0% (0us) | Total: 0.1% (341.4ms) | Samples: 0

**Called by:**
- `async invoke` (48)

**Calls:**
- `async generate` (47)
- `async generate` (1)

### `_prepareSingleTask`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:490` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `_prepareNextTasks` (2)

**Calls:**
- `_procInput` (1)
- `_procInput` (1)

### `.wasm-function[12008]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (130.6ms) | Samples: 0

**Called by:**
- `.wasm-function[734]` (4)

**Calls:**
- `.wasm-function[182]` (4)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:39` | Self: 0.0% (0us) | Total: 2.4% (6.69s) | Samples: 0

**Called by:**
- `async cropper` (4)

**Calls:**
- `async compressImage` (4)

### `node:util`
`node:util:8` | Self: 0.0% (0us) | Total: 0.0% (899us) | Samples: 0

**Calls:**
- `anonymous` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:934` | Self: 0.0% (0us) | Total: 0.0% (110.7ms) | Samples: 0

**Calls:**
- `async invoke` (16)

### `mupdf-wasm.wasm.wasm-function[lex_name]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_lex]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_read_byte]` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:61` | Self: 0.0% (0us) | Total: 0.0% (56.7ms) | Samples: 0

**Calls:**
- `async writeFile` (1)

### `.wasm-function[1086]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `.wasm-function[744]` (1)

**Calls:**
- `.wasm-function[221]` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_font]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (6.6ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_font_descriptor]` (6)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_stream]` (5)
- `mupdf-wasm.wasm.wasm-function[fz_new_font_from_buffer]` (1)

### `MatVector.get`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.7ms) | Samples: 0

**Called by:**
- `detectTables` (3)

**Calls:**
- `wasm-stub` (3)

### `detectVerticalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:556` | Self: 0.0% (0us) | Total: 0.0% (40.1ms) | Samples: 0

**Called by:**
- `async cropTableRows` (36)

**Calls:**
- `(anonymous)` (36)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/imageSchema.ts:5` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Calls:**
- `_string` (1)

### `getMicrosecondPrecisionDatestring`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:32` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `convertToDottedOrderFormat` (1)

**Calls:**
- `toISOString` (1)

### `get allEdges`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:323` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `validate` (1)

**Calls:**
- `flatIntoArrayWithCallback` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:107` | Self: 0.0% (0us) | Total: 0.0% (4.7ms) | Samples: 0

**Calls:**
- `bound int` (2)

### `ZodLiteral`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `literal` (1)

**Calls:**
- `init` (1)

### `mupdf-wasm.wasm.wasm-function[png_from_pixmap]`
`[native code]` | Self: 0.0% (0us) | Total: 0.5% (1.54s) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_new_buffer_from_pixmap_as_png]` (1378)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_write_pixmap_as_png]` (1378)

### `.wasm-function[11375]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (130.6ms) | Samples: 0

**Called by:**
- `.wasm-function[280]` (4)

**Calls:**
- `.wasm-function[734]` (4)

### `mupdf-wasm.wasm.wasm-function[pdf_run_m]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_moveto]` (1)

### `invocationParams`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:216` | Self: 0.0% (0us) | Total: 0.0% (115.7ms) | Samples: 0

**Called by:**
- `getLsParams` (37)
- `async _generate` (1)

**Calls:**
- `map` (38)

### `PQueue`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:35` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `AsyncCaller` (1)

**Calls:**
- `set concurrency` (1)

### `async initialize`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:262` | Self: 0.0% (0us) | Total: 0.0% (956us) | Samples: 0

**Called by:**
- `async initialize` (1)

**Calls:**
- `checkpointNamespaceFromNs` (1)

### `runDestructor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `releaseClassHandle` (1)

**Calls:**
- `wasm-stub` (1)

### `_configureSync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/callbacks/manager.js:523` | Self: 0.0% (0us) | Total: 0.0% (36.8ms) | Samples: 0

**Called by:**
- `async _generateUncached` (1)

**Calls:**
- `isTracingEnabled` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:113` | Self: 0.0% (0us) | Total: 0.0% (3.1ms) | Samples: 0

**Calls:**
- `compile` (3)

### `convertToOpenAIFunction`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/function_calling.js:27` | Self: 0.0% (0us) | Total: 0.0% (58.5ms) | Samples: 0

**Called by:**
- `convertToOpenAITool` (35)

**Calls:**
- `toJsonSchema` (26)
- `toJsonSchema` (9)

### `mupdf-wasm.wasm.wasm-function[compressed_image_get_pixmap]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (7.5ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_get_pixmap_from_image]` (5)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_decomp_image_from_stream]` (5)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:574` | Self: 0.0% (0us) | Total: 0.0% (39.4ms) | Samples: 0

**Called by:**
- `flatIntoArrayWithCallback` (1)

**Calls:**
- `messageToOpenAIRole` (1)

### `.wasm-function[10948]`
`[native code]` | Self: 0.0% (0us) | Total: 0.1% (301.7ms) | Samples: 0

**Called by:**
- `.wasm-function[491]` (249)

**Calls:**
- `.wasm-function[1543]` (249)

### `mupdf-wasm.wasm.wasm-function[fz_scale_pixmap_cached]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (5.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_transform_pixmap]` (4)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[scale_row_to_temp3]` (2)
- `mupdf-wasm.wasm.wasm-function[scale_row_from_temp]` (1)
- `mupdf-wasm.wasm.wasm-function[make_weights]` (1)

### `getSharedClient`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:400` | Self: 0.0% (0us) | Total: 0.0% (1.7ms) | Samples: 0

**Called by:**
- `RunTree` (2)

**Calls:**
- `Client` (1)
- `Client` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/internal/re.js:197` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `createToken` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:34` | Self: 0.0% (0us) | Total: 0.0% (96.5ms) | Samples: 0

**Called by:**
- `async invoke` (3)

**Calls:**
- `ensureLangGraphConfig` (2)
- `ensureLangGraphConfig` (1)

### `mupdf-wasm.wasm.wasm-function[next_dctd]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (7.5ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_available_1592]` (5)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[jpeg_read_scanlines]` (5)

### `.wasm-function[503]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (70.2ms) | Samples: 0

**Called by:**
- `.wasm-function[1260]` (52)

**Calls:**
- `.wasm-function[12680]` (52)

### `.wasm-function[734]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (130.6ms) | Samples: 0

**Called by:**
- `.wasm-function[11375]` (4)

**Calls:**
- `.wasm-function[12008]` (4)

### `.wasm-function[2136]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `.wasm-function[16862]` (1)

**Calls:**
- `.wasm-function[107]` (1)

### `createCheckpoint`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/channels/base.js:149` | Self: 0.0% (0us) | Total: 0.0% (975us) | Samples: 0

**Called by:**
- `_putCheckpoint` (1)

**Calls:**
- `v6` (1)

### `BaseMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/base.js:125` | Self: 0.0% (0us) | Total: 0.0% (889us) | Samples: 0

**Called by:**
- `HumanMessage` (1)

**Calls:**
- `Serializable` (1)

### `convertToOpenAITool`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/function_calling.js:43` | Self: 0.0% (0us) | Total: 0.0% (944us) | Samples: 0

**Called by:**
- `map` (1)

**Calls:**
- `isLangChainTool` (1)

### `.wasm-function[1037]`
`[native code]` | Self: 0.0% (0us) | Total: 0.5% (1.63s) | Samples: 0

**Called by:**
- `.wasm-function[581]` (1498)

**Calls:**
- `.wasm-function[9540]` (1497)
- `.wasm-function[1948]` (1)

### `.wasm-function[76]`
`[native code]` | Self: 0.0% (0us) | Total: 0.1% (305.8ms) | Samples: 0

**Called by:**
- `.wasm-function[934]` (281)

**Calls:**
- `.wasm-function[12303]` (155)
- `.wasm-function[12009]` (124)
- `.wasm-function[584]` (2)

### `IterableReadableWritableStream`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/stream.js:65` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async _streamIterator` (1)

**Calls:**
- `IterableReadableStream` (1)

### `mupdf-wasm.wasm.wasm-function[wasm_init_context]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (13.0ms) | Samples: 0

**Called by:**
- `wasm-stub` (12)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_new_context_imp]` (12)

### `async withRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:38` | Self: 0.0% (0us) | Total: 0.0% (118.2ms) | Samples: 0

**Called by:**
- `async withRetry` (6)

**Calls:**
- `async invoke` (3)
- `async invoke` (2)
- `(anonymous)` (1)

### `async I`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Called by:**
- `async (anonymous)` (2)

**Calls:**
- `async (anonymous)` (2)

### `async classifyImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:28` | Self: 0.0% (0us) | Total: 0.1% (342.9ms) | Samples: 0

**Calls:**
- `ChatOpenRouter` (1)

### `symlink`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (38.0ms) | Samples: 0

**Called by:**
- `createStandardStreams` (1)

**Calls:**
- `resolve` (1)

### `addConditionalEdges`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:108` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `getName` (1)

### `async _generate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:281` | Self: 0.0% (0us) | Total: 0.3% (890.2ms) | Samples: 0

**Calls:**
- `json` (1)

### `ZodOptional`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` | Self: 0.0% (0us) | Total: 0.0% (3.3ms) | Samples: 0

**Called by:**
- `optional` (2)
- `clone` (1)

**Calls:**
- `init` (3)

### `async compressImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:9` | Self: 0.0% (0us) | Total: 2.4% (6.70s) | Samples: 0

**Called by:**
- `async classifyImage` (5)
- `async cropper` (4)

**Calls:**
- `async compressImage` (9)

### `asPNG`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:1047` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `async convertPdfToImages` (1)

**Calls:**
- `slice` (1)

### `mupdf-wasm.wasm.wasm-function[lex_number]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_lex]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_read_byte]` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:272` | Self: 0.0% (0us) | Total: 0.1% (430.8ms) | Samples: 0

**Called by:**
- `(anonymous)` (24)

**Calls:**
- `async (anonymous)` (14)
- `async (anonymous)` (8)
- `asyncFunctionDrive` (1)
- `async (anonymous)` (1)

### `async mkdir`
`node:fs/promises:247` | Self: 0.0% (0us) | Total: 0.0% (61.2ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `mkdir` (1)

### `mupdf-wasm.wasm.wasm-function[next_concat]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_read_byte]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_available_1592]` (1)

### `_coercedNumber`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:315` | Self: 0.0% (0us) | Total: 0.0% (998us) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `ZodNumber` (1)

### `BaseLanguageModel`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:179` | Self: 0.0% (0us) | Total: 0.0% (51.7ms) | Samples: 0

**Called by:**
- `BaseChatModel` (1)

**Calls:**
- `BaseLangChain` (1)

### `createSpecialDirectories`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (934us) | Samples: 0

**Called by:**
- `staticInit` (1)

**Calls:**
- `mkdir` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:102` | Self: 0.0% (0us) | Total: 0.0% (46.4ms) | Samples: 0

**Calls:**
- `bound int` (6)

### `detectVerticalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:572` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async cropTableRows` (1)

**Calls:**
- `get` (1)

### `metadata`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:685` | Self: 0.0% (0us) | Total: 1.4% (3.82s) | Samples: 0

**Called by:**
- `async cropAndZoom` (4)
- `async compressImage` (2)

**Calls:**
- `Promise` (6)

### `_prepareSingleTask`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:510` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `_prepareNextTasks` (1)

**Calls:**
- `getNode` (1)

### `mupdf-wasm.wasm.wasm-function[gray_raster_render]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[ft_smooth_render]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[FT_Outline_Decompose]` (1)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:211` | Self: 0.0% (0us) | Total: 0.0% (145.3ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (129)

**Calls:**
- `(anonymous)` (129)

### `mupdf-wasm.wasm.wasm-function[decode_mcu_8778]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[decompress_onepass]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[jpeg_fill_bit_buffer]` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_load_compressed_stream]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_image_imp]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_image_stream]` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_load_image]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_Do]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_image_imp]` (1)

### `_number`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:307` | Self: 0.0% (0us) | Total: 0.0% (38.5ms) | Samples: 0

**Called by:**
- `async cropper` (4)

**Calls:**
- `ZodNumber` (4)

### `convertToDottedOrderFormat`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:35` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `RunTree` (1)

**Calls:**
- `getMicrosecondPrecisionDatestring` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:570` | Self: 0.0% (0us) | Total: 0.0% (19.6ms) | Samples: 0

**Called by:**
- `init` (2)

**Calls:**
- `init` (2)

### `async _`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.0% (3.2ms) | Samples: 0

**Called by:**
- `(module)` (3)

**Calls:**
- `async (anonymous)` (3)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:623` | Self: 0.0% (0us) | Total: 0.0% (216.7ms) | Samples: 0

**Calls:**
- `(anonymous)` (14)

### `mupdf-wasm.wasm.wasm-function[pdf_process_contents]`
`[native code]` | Self: 0.0% (0us) | Total: 0.1% (284.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_page_contents_with_usage_imp]` (141)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_raw_contents]` (141)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:972` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `get value` (1)

### `BaseLanguageModel`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:186` | Self: 0.0% (0us) | Total: 0.0% (3.8ms) | Samples: 0

**Called by:**
- `BaseChatModel` (2)

**Calls:**
- `AsyncCaller` (2)

### `makeDynCaller`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `embind__requireFunction` (2)

**Calls:**
- `getWasmTableEntry` (2)

### `async instantiateAsync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async createWasm` (1)

**Calls:**
- `async instantiateArrayBuffer` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_run_Tj]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (8.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (4)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_string]` (4)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:316` | Self: 0.0% (0us) | Total: 0.0% (19.4ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (17)

**Calls:**
- `countNonZero` (17)

### `mupdf-wasm.wasm.wasm-function[fz_new_context_imp]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (13.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[wasm_init_context]` (12)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_new_colorspace_context]` (12)

### `mupdf-wasm.wasm.wasm-function[next_flated]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (7.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_available_1592]` (6)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[inflate]` (6)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/localShell.js:6` | Self: 0.0% (0us) | Total: 0.0% (884us) | Samples: 0

**Calls:**
- `_array` (1)

### `PQueue`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:33` | Self: 0.0% (0us) | Total: 0.0% (2.6ms) | Samples: 0

**Called by:**
- `AsyncCaller` (1)

**Calls:**
- `PriorityQueue` (1)

### `AsyncGeneratorWithSetup`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js:132` | Self: 0.0% (0us) | Total: 0.0% (3.3ms) | Samples: 0

**Called by:**
- `async stream` (3)

**Calls:**
- `Promise` (3)

### `async _route`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:39` | Self: 0.0% (0us) | Total: 0.0% (3.1ms) | Samples: 0

**Called by:**
- `async (anonymous)` (3)

**Calls:**
- `async _route` (3)

### `.wasm-function[1260]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (70.2ms) | Samples: 0

**Called by:**
- `.wasm-function[15702]` (52)

**Calls:**
- `.wasm-function[503]` (52)

### `(anonymous)`
`internal:util/inspect:154` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `filter` (1)

**Calls:**
- `bound call` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:123` | Self: 0.0% (0us) | Total: 0.0% (889us) | Samples: 0

**Calls:**
- `HumanMessage` (1)

### `detectVerticalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:566` | Self: 0.0% (0us) | Total: 12.1% (33.22s) | Samples: 0

**Called by:**
- `async cropTableRows` (29769)

**Calls:**
- `(anonymous)` (29769)

### `_putCheckpoint`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:847` | Self: 0.0% (0us) | Total: 0.0% (975us) | Samples: 0

**Called by:**
- `async tick` (1)

**Calls:**
- `createCheckpoint` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1104` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `init` (2)

**Calls:**
- `init` (2)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/utility.mjs:71` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `async tick`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:67` | Self: 0.0% (0us) | Total: 0.0% (6.9ms) | Samples: 0

**Calls:**
- `_commit` (5)
- `_commit` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_dict_get]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.5ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[end_metatext]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_is_ocg_hidden_imp]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_lookup_resource]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect_chain]` (2)
- `mupdf-wasm.wasm.wasm-function[pdf_dict_find]` (1)

### `_installLazyMethods`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:32` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `defineProperty` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_try_load_font]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (19.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (13)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_font]` (13)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:39` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Calls:**
- `_string` (1)

### `async _getUpdates`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:610` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `async _getUpdates` (1)

### `internal:streams/compose`
`internal:streams/compose:2` | Self: 0.0% (0us) | Total: 0.0% (8.2ms) | Samples: 0

**Called by:**
- `anonymous` (7)

**Calls:**
- `anonymous` (7)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:82` | Self: 0.0% (0us) | Total: 0.1% (341.4ms) | Samples: 0

**Called by:**
- `async withRetry` (3)

**Calls:**
- `async invoke` (48)

### `async _generate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:268` | Self: 0.0% (0us) | Total: 0.0% (55.2ms) | Samples: 0

**Called by:**
- `async _generate` (1)

**Calls:**
- `invocationParams` (1)

### `updateMemoryViews`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (3.6ms) | Samples: 0

**Called by:**
- `growMemory` (2)

**Calls:**
- `Int8Array` (2)

### `async _streamIterator`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1135` | Self: 0.0% (0us) | Total: 0.0% (983us) | Samples: 0

**Calls:**
- `isCheckpointEnvelope` (1)

### `async call`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:249` | Self: 0.0% (0us) | Total: 2.5% (6.92s) | Samples: 0

**Called by:**
- `async invoke` (12)

**Calls:**
- `async call` (11)
- `async call` (1)

### `clone`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:106` | Self: 0.0% (0us) | Total: 0.0% (26.6ms) | Samples: 0

**Called by:**
- `bound clone` (4)

**Calls:**
- `clone` (4)

### `async _callWithConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:162` | Self: 0.0% (0us) | Total: 0.0% (991us) | Samples: 0

**Calls:**
- `bound _invoke` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:121` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `withConfig` (1)

### `_prepareSingleTask`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:493` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `_prepareNextTasks` (1)

**Calls:**
- `v35` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:308` | Self: 0.0% (0us) | Total: 0.2% (684.7ms) | Samples: 0

**Called by:**
- `map` (38)

**Calls:**
- `async (anonymous)` (38)

### `async _generateUncached`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:217` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async _generateUncached` (1)

**Calls:**
- `_filterInvocationParamsForTracing` (1)

### `mupdf-wasm.wasm.wasm-function[sfnt_load_face]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (993us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[tt_face_init]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[tt_face_goto_table]` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:31` | Self: 0.0% (0us) | Total: 0.0% (4.4ms) | Samples: 0

**Called by:**
- `async func` (4)

**Calls:**
- `async _route` (3)
- `async _route` (1)

### `staticInit`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `async (anonymous)` (3)

**Calls:**
- `mount` (1)
- `createSpecialDirectories` (1)
- `createDefaultDirectories` (1)

### `async _mergeConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:621` | Self: 0.0% (0us) | Total: 0.0% (57.3ms) | Samples: 0

**Called by:**
- `async invoke` (2)

**Calls:**
- `resolvePromiseWithFirstResolvingFunctionCallCheck` (1)
- `async _mergeConfig` (1)

### `Serializable`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/serializable.js:83` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `Runnable` (1)

**Calls:**
- `get lc_serializable_keys` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:3` | Self: 0.0% (0us) | Total: 0.0% (15.1ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:852` | Self: 0.0% (0us) | Total: 0.3% (1.07s) | Samples: 0

**Called by:**
- `async (anonymous)` (9)
- `(anonymous)` (3)

**Calls:**
- `(anonymous)` (6)
- `runChecks` (2)
- `(anonymous)` (2)
- `runChecks` (1)
- `(anonymous)` (1)

### `async tick`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:66` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `async tick` (2)

**Calls:**
- `async _executeTasksWithRetry` (2)

### `.wasm-function[6551]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `wasm-stub` (1)

**Calls:**
- `.wasm-function[6535]` (1)

### `async _route`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:47` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Calls:**
- `async branchWriter` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1076` | Self: 0.0% (0us) | Total: 0.0% (3.3ms) | Samples: 0

**Called by:**
- `async (anonymous)` (3)

**Calls:**
- `async initialize` (3)

### `ZodNumber`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` | Self: 0.0% (0us) | Total: 0.0% (44.7ms) | Samples: 0

**Called by:**
- `_number` (4)
- `clone` (4)

**Calls:**
- `init` (7)
- `init` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:176` | Self: 0.0% (0us) | Total: 4.7% (12.97s) | Samples: 0

**Calls:**
- `log` (2)

### `async _generateUncached`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:215` | Self: 0.0% (0us) | Total: 0.0% (36.8ms) | Samples: 0

**Called by:**
- `async _generateUncached` (1)

**Calls:**
- `_configureSync` (1)

### `mupdf-wasm.wasm.wasm-function[fz_new_font_from_buffer]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (993us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_font]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[FT_New_Memory_Face]` (1)

### `toFile`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:90` | Self: 0.0% (0us) | Total: 0.0% (191.1ms) | Samples: 0

**Called by:**
- `async cropTableRows` (1)
- `async cropTableRows` (1)

**Calls:**
- `Error` (2)

### `mupdf-wasm.wasm.wasm-function[fz_bound_glyph]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_tos_make_trm]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[FT_Outline_Get_CBox]` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/_openapi_client/internal/qs/utils.js:11` | Self: 0.0% (0us) | Total: 0.0% (936us) | Samples: 0

**Calls:**
- `(anonymous)` (1)

### `process`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:60` | Self: 0.0% (0us) | Total: 0.0% (25.0ms) | Samples: 0

**Called by:**
- `toJSONSchema` (12)
- `objectProcessor` (4)
- `defaultProcessor` (3)
- `arrayProcessor` (1)
- `optionalProcessor` (1)

**Calls:**
- `objectProcessor` (8)
- `defaultProcessor` (3)
- `(anonymous)` (2)
- `objectProcessor` (1)
- `objectProcessor` (1)
- `(anonymous)` (1)
- `nullableProcessor` (1)
- `objectProcessor` (1)
- `optionalProcessor` (1)
- `arrayProcessor` (1)
- `objectProcessor` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_cache_object]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_get_xref_entry_aux]` (2)

### `async _streamIterator`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1009` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `next` (1)

**Calls:**
- `ensureLangGraphConfig` (1)

### `XXH3_mix32B`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/hash.js:136` | Self: 0.0% (0us) | Total: 0.0% (940us) | Samples: 0

**Called by:**
- `XXH3_len_17to128_128b` (1)

**Calls:**
- `XXH3_mul128_fold64` (1)

### `.wasm-function[98]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (125.8ms) | Samples: 0

**Called by:**
- `.wasm-function[6662]` (1)

**Calls:**
- `.wasm-function[280]` (1)

### `async call`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:128` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Calls:**
- `_configHasToolCallId` (1)

### `async _generateUncached`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:210` | Self: 0.0% (0us) | Total: 0.0% (94.7ms) | Samples: 0

**Called by:**
- `async _generateUncached` (1)

**Calls:**
- `cloneObject` (1)

### `arrayProcessor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:270` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `process` (1)

**Calls:**
- `process` (1)

### `async cropAndZoom`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:68` | Self: 0.0% (0us) | Total: 0.0% (6.4ms) | Samples: 0

**Calls:**
- `resize` (2)

### `Client`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js:805` | Self: 0.0% (0us) | Total: 0.0% (896us) | Samples: 0

**Called by:**
- `getSharedClient` (1)

**Calls:**
- `getDefaultClientConfig` (1)

### `_localRead`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:63` | Self: 0.0% (0us) | Total: 0.0% (978us) | Samples: 0

**Called by:**
- `async _route` (1)

**Calls:**
- `emptyChannels` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1207` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `route` (2)

### `mupdf-wasm.wasm.wasm-function[fz_draw_stroke_path_aux]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (91.5ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_stroke_path]` (70)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_convert_rasterizer]` (67)
- `mupdf-wasm.wasm.wasm-function[fz_flatten_stroke_path]` (2)
- `mupdf-wasm.wasm.wasm-function[resolve_color]` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:488` | Self: 0.0% (0us) | Total: 0.0% (25.2ms) | Samples: 0

**Called by:**
- `init` (5)

**Calls:**
- `init` (5)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/utils/errors.js:80` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Calls:**
- `brand` (1)

### `.wasm-function[4377]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (134.0ms) | Samples: 0

**Called by:**
- `wasm-stub` (120)

**Calls:**
- `.wasm-function[11526]` (120)

### `bound require`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (149.4ms) | Samples: 0

**Called by:**
- `(anonymous)` (9)
- `(module)` (5)
- `(anonymous)` (4)
- `(anonymous)` (4)
- `(anonymous)` (2)
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
- `(module)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

**Calls:**
- `require` (39)
- `(anonymous)` (4)
- `anonymous` (2)

### `.wasm-function[1735]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `.wasm-function[744]` (1)

**Calls:**
- `.wasm-function[12382]` (1)

### `async initialize`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:245` | Self: 0.0% (0us) | Total: 0.0% (3.3ms) | Samples: 0

**Called by:**
- `async (anonymous)` (3)

**Calls:**
- `async initialize` (1)
- `async initialize` (1)
- `async initialize` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1074` | Self: 0.0% (0us) | Total: 0.0% (3.3ms) | Samples: 0

**Called by:**
- `async _streamIterator` (3)

**Calls:**
- `async (anonymous)` (3)

### `mupdf-wasm.wasm.wasm-function[fz_read]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (13.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_decomp_image_from_stream]` (5)
- `mupdf-wasm.wasm.wasm-function[fz_read_best]` (5)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_available_1592]` (10)

### `internal:streams/duplex`
`internal:streams/duplex:2` | Self: 0.0% (0us) | Total: 0.0% (5.9ms) | Samples: 0

**Called by:**
- `anonymous` (5)

**Calls:**
- `anonymous` (5)

### `async compressImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:12` | Self: 0.0% (0us) | Total: 2.4% (6.70s) | Samples: 0

**Called by:**
- `async compressImage` (9)

**Calls:**
- `Sharp` (5)
- `metadata` (2)
- `Sharp` (1)
- `metadata` (1)

### `process`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:47` | Self: 0.0% (0us) | Total: 0.0% (5.4ms) | Samples: 0

**Called by:**
- `toJSONSchema` (1)

**Calls:**
- `set` (1)

### `async call`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:108` | Self: 0.0% (0us) | Total: 0.9% (2.54s) | Samples: 0

**Called by:**
- `async call` (9)

**Calls:**
- `async interopParseAsync` (9)

### `mupdf-wasm.wasm.wasm-function[pdf_load_to_unicode]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[load_cid_font]` (3)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_remap_cmap]` (2)
- `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_cmap]` (1)

### `RunnableBinding`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:612` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `withConfig` (1)

**Calls:**
- `Runnable` (1)

### `bound clone`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (31.0ms) | Samples: 0

**Called by:**
- `bound check` (5)
- `describe` (3)

**Calls:**
- `clone` (4)
- `clone` (4)

### `convertCompletionsMessageToBaseMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:179` | Self: 0.0% (0us) | Total: 0.3% (1.01s) | Samples: 0

**Called by:**
- `convertOpenRouterResponseToBaseMessage` (1)

**Calls:**
- `cloneObject` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js:134` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `next` (2)

### `mupdf-wasm.wasm.wasm-function[_tr_flush_block]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (24.7ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[deflate_slow]` (21)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[compress_block]` (17)
- `mupdf-wasm.wasm.wasm-function[build_tree]` (3)
- `mupdf-wasm.wasm.wasm-function[init_block]` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:45` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/classes/semver.js:7` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `async _generateUncached`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:214` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async _generateUncached` (1)

**Calls:**
- `invocationParams` (1)

### `isNonGlibcLinuxSync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/detect-libc.js:213` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `runtimeLibc` (1)

**Calls:**
- `familySync` (1)

### `mupdf-wasm.wasm.wasm-function[wasm_pdf_new_pixmap_from_page_with_usage]`
`[native code]` | Self: 0.0% (0us) | Total: 0.1% (289.7ms) | Samples: 0

**Called by:**
- `(unknown)` (145)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_new_pixmap_from_page_with_separations_and_usage]` (145)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:637` | Self: 0.0% (0us) | Total: 0.0% (999us) | Samples: 0

**Calls:**
- `ColorSpace` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:44` | Self: 0.0% (0us) | Total: 0.0% (48.8ms) | Samples: 0

**Calls:**
- `tool` (2)
- `tool` (1)
- `tool` (1)

### `bound RegisteredPointer_fromWireType`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (975us) | Samples: 0

**Called by:**
- `getStructuringElement` (1)

**Calls:**
- `RegisteredPointer_fromWireType` (1)

### `interopZodTransformInputSchemaImpl`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:417` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `interopZodTransformInputSchemaImpl` (2)

**Calls:**
- `interopZodTransformInputSchemaImpl` (2)

### `node:worker_threads`
`node:worker_threads:367` | Self: 0.0% (0us) | Total: 0.0% (926us) | Samples: 0

**Calls:**
- `anonymous` (1)

### `clone`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:262` | Self: 0.0% (0us) | Total: 0.0% (45.5ms) | Samples: 0

**Called by:**
- `clone` (4)
- `bound clone` (4)
- `interopZodTransformInputSchemaImpl` (4)
- `interopZodObjectStrict` (2)

**Calls:**
- `ZodObject` (6)
- `ZodNumber` (4)
- `ZodNumber` (1)
- `ZodNumber` (1)
- `ZodOptional` (1)
- `ZodNullable` (1)

### `interopZodTransformInputSchemaImpl`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:422` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `interopZodTransformInputSchemaImpl` (2)

**Calls:**
- `isZodNullableV4` (2)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:206` | Self: 0.0% (0us) | Total: 0.0% (975us) | Samples: 0

**Called by:**
- `async cropBbsRows` (1)

**Calls:**
- `(anonymous)` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:145` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Calls:**
- `cached` (1)

### `init`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:18` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `ZodLiteral` (1)

**Calls:**
- `has` (1)

### `putWrites`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:359` | Self: 0.0% (0us) | Total: 0.0% (972us) | Samples: 0

**Called by:**
- `_commit` (1)

**Calls:**
- `every` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:104` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Calls:**
- `StateGraph` (1)

### `mupdf-wasm.wasm.wasm-function[tt_face_init]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (993us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[open_face]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[sfnt_load_face]` (1)

### `async F`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.0% (14.5ms) | Samples: 0

**Called by:**
- `async (anonymous)` (2)
- `async F` (2)

**Calls:**
- `Uint8Array` (6)
- `async F` (2)
- `async r` (2)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:59` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `bound optional` (1)

### `async doWrite`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:53` | Self: 0.0% (0us) | Total: 0.0% (3.7ms) | Samples: 0

**Called by:**
- `async _write` (3)

**Calls:**
- `async doWrite` (2)
- `async doWrite` (1)

### `async tick`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:61` | Self: 0.0% (0us) | Total: 0.0% (912us) | Samples: 0

**Called by:**
- `async tick` (1)

**Calls:**
- `async _executeTasksWithRetry` (1)

### `mknod`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `mkdir` (2)
- `mknod` (1)

**Calls:**
- `createNode` (1)
- `mknod` (1)
- `lookupPath` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_load_image_stream]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (7.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_stream]` (5)
- `mupdf-wasm.wasm.wasm-function[pdf_load_compressed_stream]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_read_best]` (5)
- `mupdf-wasm.wasm.wasm-function[pdf_open_image_stream]` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/priority-queue.js:3` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:91` | Self: 0.0% (0us) | Total: 2.5% (6.92s) | Samples: 0

**Called by:**
- `async cropper` (12)

**Calls:**
- `async call` (12)

### `.wasm-function[12382]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `.wasm-function[1735]` (1)

**Calls:**
- `.wasm-function[158]` (1)

### `detectHorizontalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:482` | Self: 0.0% (0us) | Total: 8.9% (24.37s) | Samples: 0

**Called by:**
- `async cropTableRows` (20794)

**Calls:**
- `(anonymous)` (20794)

### `async compressImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:25` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `toString` (1)

### `async r`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Called by:**
- `async F` (2)

**Calls:**
- `readFileSync` (2)

### `mupdf-wasm.wasm.wasm-function[fz_new_pixmap]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (6.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_new_pixmap_with_bbox]` (4)
- `mupdf-wasm.wasm.wasm-function[fz_new_glyph_from_8bpp_data]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_new_pixmap_with_data]` (5)

### `AsyncCaller`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js:185` | Self: 0.0% (0us) | Total: 0.0% (3.8ms) | Samples: 0

**Called by:**
- `BaseLanguageModel` (2)

**Calls:**
- `PQueue` (1)
- `PQueue` (1)

### `describe`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:167` | Self: 0.0% (0us) | Total: 0.0% (3.3ms) | Samples: 0

**Called by:**
- `bound describe` (3)

**Calls:**
- `bound clone` (3)

### `mupdf-wasm.wasm.wasm-function[fz_get_pixmap_from_image]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (7.5ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_fill_image]` (5)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[compressed_image_get_pixmap]` (5)

### `XXH3_len_17to128_128b`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/hash.js:224` | Self: 0.0% (0us) | Total: 0.0% (940us) | Samples: 0

**Called by:**
- `XXH3` (1)

**Calls:**
- `XXH3_mix32B` (1)

### `async _generate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:285` | Self: 0.0% (0us) | Total: 0.6% (1.86s) | Samples: 0

**Calls:**
- `isInstance` (1)

### `async extract`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:143` | Self: 0.0% (0us) | Total: 5.5% (15.06s) | Samples: 0

**Calls:**
- `withStructuredOutput` (3)
- `withStructuredOutput` (1)

### `loadPage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:1536` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async convertPdfToImages` (1)

**Calls:**
- `wasm-stub` (1)

### `mupdf-wasm.wasm.wasm-function[sbrk]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (5.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[emscripten_builtin_malloc]` (4)

**Calls:**
- `wasm-stub` (4)

### `createDefaultDirectories`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `staticInit` (1)

**Calls:**
- `mkdir` (1)

### `_createInputDescriptor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:66` | Self: 0.0% (0us) | Total: 0.0% (989us) | Samples: 0

**Called by:**
- `Sharp` (1)

**Calls:**
- `buffer` (1)

### `run`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (119.6ms) | Samples: 0

**Called by:**
- `async (anonymous)` (76)

**Calls:**
- `doRun` (76)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:613` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `async cropTableRows` (1)

**Calls:**
- `_pipeline` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:507` | Self: 0.0% (0us) | Total: 0.0% (6.6ms) | Samples: 0

**Called by:**
- `init` (4)

**Calls:**
- `init` (4)

### `mupdf-wasm.wasm.wasm-function[process_data_simple_main_8796]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (7.5ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[jpeg_read_scanlines]` (5)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[decompress_onepass]` (5)

### `async call`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:107` | Self: 0.0% (0us) | Total: 1.6% (4.37s) | Samples: 0

**Called by:**
- `async call` (1)

**Calls:**
- `isInteropZodSchema` (1)

### `optionalProcessor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:511` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `process` (1)

**Calls:**
- `process` (1)

### `mupdf-wasm.wasm.wasm-function[do_tzset]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (9.6ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[gmtime]` (9)

**Calls:**
- `wasm-stub` (9)

### `_next`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:48` | Self: 0.0% (0us) | Total: 0.6% (1.84s) | Samples: 0

**Called by:**
- `async (anonymous)` (2)

**Calls:**
- `_tryToStartAnother` (1)
- `_tryToStartAnother` (1)

### `mupdf-wasm.wasm.wasm-function[fz_realloc]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_realloc_array_imp]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[do_scavenging_realloc]` (1)

### `Sharp`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:230` | Self: 0.0% (0us) | Total: 4.5% (12.40s) | Samples: 0

**Called by:**
- `async cropTableRows` (5)
- `async cropAndZoom` (5)
- `async compressImage` (5)
- `async cropAndZoom` (4)
- `async cropTableRows` (4)
- `async cropAndZoom` (3)
- `async compressImage` (3)
- `async cropTableRows` (1)
- `async createDebugImage` (1)

**Calls:**
- `Sharp` (11)
- `Sharp` (11)
- `Sharp` (9)

### `normalizeDef`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:744` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `get value` (1)

**Calls:**
- `keys` (1)

### `bound nullable`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `nullable` (1)

### `mupdf-wasm.wasm.wasm-function[fz_new_icc_colorspace]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (11.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_new_colorspace_context]` (11)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[lcms2mt_cmsCreateProfilePlaceholder]` (9)
- `mupdf-wasm.wasm.wasm-function[fz_md5_buffer]` (2)

### `Runnable`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `RunnableBinding` (1)

**Calls:**
- `Serializable` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_run_page_contents_with_usage_imp]`
`[native code]` | Self: 0.0% (0us) | Total: 0.1% (284.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_page_with_usage]` (141)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_contents]` (141)

### `wrapConversion`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1139` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `route` (1)

**Calls:**
- `unshift` (1)

### `_procInput`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:740` | Self: 0.0% (0us) | Total: 0.0% (874us) | Samples: 0

**Called by:**
- `_prepareSingleTask` (1)

**Calls:**
- `(anonymous)` (1)

### `mupdf-wasm.wasm.wasm-function[FT_New_Memory_Face]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (993us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_new_font_from_buffer]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[open_face]` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1105` | Self: 0.0% (0us) | Total: 0.0% (882us) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `init` (1)

### `.wasm-function[9595]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (101.8ms) | Samples: 0

**Called by:**
- `.wasm-function[14700]` (92)

**Calls:**
- `.wasm-function[510]` (92)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/extractSchema.ts:107` | Self: 0.0% (0us) | Total: 0.0% (995us) | Samples: 0

**Calls:**
- `_array` (1)

### `_tryToStartAnother`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:98` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `_isIntervalPaused` (2)

### `parseToolCall`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:17` | Self: 0.0% (0us) | Total: 0.0% (150.2ms) | Samples: 0

**Called by:**
- `convertCompletionsMessageToBaseMessage` (1)

**Calls:**
- `parse` (1)

### `async tick`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:451` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `async tick` (1)

**Calls:**
- `async _first` (1)

### `node:crypto`
`node:crypto:2` | Self: 0.0% (0us) | Total: 0.0% (4.3ms) | Samples: 0

**Calls:**
- `anonymous` (1)

### `convertCompletionsMessageToBaseMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:184` | Self: 0.0% (0us) | Total: 1.4% (4.07s) | Samples: 0

**Called by:**
- `convertOpenRouterResponseToBaseMessage` (3)

**Calls:**
- `handleMultiModalOutput` (2)
- `handleMultiModalOutput` (1)

### `getLsParamsWithDefaults`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:200` | Self: 0.0% (0us) | Total: 0.0% (60.4ms) | Samples: 0

**Called by:**
- `async _generateUncached` (37)

**Calls:**
- `getLsParams` (37)

### `async compressImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:21` | Self: 0.0% (0us) | Total: 0.0% (958us) | Samples: 0

**Calls:**
- `resize` (1)

### `PDFPage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:2209` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `loadPage` (1)

**Calls:**
- `Page` (1)

### `_commit`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:217` | Self: 0.0% (0us) | Total: 0.0% (5.6ms) | Samples: 0

**Called by:**
- `async tick` (5)

**Calls:**
- `putWrites` (2)
- `putWrites` (1)
- `putWrites` (1)
- `putWrites` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:41` | Self: 0.0% (0us) | Total: 0.0% (6.3ms) | Samples: 0

**Calls:**
- `log` (1)

### `_compileResolved`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:456` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `compile` (1)

**Calls:**
- `validate` (1)

### `set concurrency`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:146` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `PQueue` (1)

**Calls:**
- `_processQueue` (1)

### `mupdf-wasm.wasm.wasm-function[fz_stroke_path]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (91.5ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_path]` (70)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_stroke_path]` (70)

### `node:crypto`
`node:crypto:39` | Self: 0.0% (0us) | Total: 0.0% (933us) | Samples: 0

**Calls:**
- `@lazy` (1)

### `Duplex`
`internal:streams/duplex:15` | Self: 0.0% (0us) | Total: 0.0% (128.0ms) | Samples: 0

**Called by:**
- `Sharp` (5)

**Calls:**
- `ReadableState` (1)
- `WritableState` (1)
- `WritableState` (1)
- `ReadableState` (1)
- `WritableState` (1)

### `internal:validators`
`internal:validators:2` | Self: 0.0% (0us) | Total: 0.0% (6.1ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `anonymous` (3)

### `async _validateResult`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:154` | Self: 0.0% (0us) | Total: 0.0% (4.4ms) | Samples: 0

**Called by:**
- `async _validateResult` (4)

**Calls:**
- `async interopSafeParseAsync` (4)

### `async interopSafeParseAsync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:69` | Self: 0.0% (0us) | Total: 0.0% (4.4ms) | Samples: 0

**Called by:**
- `async interopSafeParseAsync` (4)

**Calls:**
- `async (anonymous)` (4)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:112` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Calls:**
- `bound optional` (2)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:707` | Self: 0.0% (0us) | Total: 0.1% (478.9ms) | Samples: 0

**Calls:**
- `Sharp` (5)
- `Sharp` (2)

### `async _generate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:284` | Self: 0.0% (0us) | Total: 6.6% (18.13s) | Samples: 0

**Calls:**
- `convertOpenRouterResponseToBaseMessage` (12)
- `convertOpenRouterResponseToBaseMessage` (1)

### `tool`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:267` | Self: 0.0% (0us) | Total: 0.0% (1.8ms) | Samples: 0

**Called by:**
- `async cropper` (1)

**Calls:**
- `validatesOnlyStrings` (1)

### `toJsonSchema`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/json_schema.js:48` | Self: 0.0% (0us) | Total: 0.0% (42.2ms) | Samples: 0

**Called by:**
- `convertToOpenAIFunction` (26)
- `withStructuredOutput` (3)

**Calls:**
- `toJSONSchema` (13)
- `toJSONSchema` (4)
- `finalize` (4)
- `interopZodObjectStrict` (2)
- `interopZodObjectStrict` (1)
- `interopZodObjectStrict` (1)
- `toJSONSchema` (1)
- `interopZodObjectStrict` (1)
- `finalize` (1)
- `finalize` (1)

### `_string`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:7` | Self: 0.0% (0us) | Total: 0.0% (25.9ms) | Samples: 0

**Called by:**
- `(module)` (1)
- `(module)` (1)
- `async cropper` (1)

**Calls:**
- `ZodString` (3)

### `mupdf-wasm.wasm.wasm-function[tt_glyph_load]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[FT_Load_Glyph]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[load_truetype_glyph]` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/internal/re.js:142` | Self: 0.0% (0us) | Total: 0.0% (948us) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `createToken` (1)

### `__embind_register_class_constructor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (6.8ms) | Samples: 0

**Called by:**
- `wasm-stub` (5)

**Calls:**
- `whenDependentTypesAreResolved` (5)

### `mupdf-wasm.wasm.wasm-function[pdf_open_object_array]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (86.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_raw_contents]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_open_image_stream]` (1)

### `async convertPdfToImages`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:76` | Self: 0.0% (0us) | Total: 0.5% (1.54s) | Samples: 0

**Called by:**
- `(module)` (1379)

**Calls:**
- `asPNG` (1378)
- `asPNG` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:27` | Self: 0.0% (0us) | Total: 0.0% (4.3ms) | Samples: 0

**Calls:**
- `async _` (3)
- `async _` (1)

### `h`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.0% (24.9ms) | Samples: 0

**Called by:**
- `wasm-stub` (17)

**Calls:**
- `Z` (17)

### `async _generateUncached`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:205` | Self: 0.0% (0us) | Total: 0.1% (337.2ms) | Samples: 0

**Called by:**
- `async generate` (45)

**Calls:**
- `async _generateUncached` (37)
- `async _generateUncached` (2)
- `async _generateUncached` (2)
- `async _generateUncached` (1)
- `async _generateUncached` (1)
- `async _generateUncached` (1)
- `async _generateUncached` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:304` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `run` (1)

**Calls:**
- `async (anonymous)` (1)

### `mupdf-wasm.wasm.wasm-function[decompress_onepass]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (7.5ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[process_data_simple_main_8796]` (5)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[jpeg_idct_16x16]` (4)
- `mupdf-wasm.wasm.wasm-function[decode_mcu_8778]` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:587` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `flatIntoArrayWithCallback` (1)

**Calls:**
- `map` (1)

### `mupdf-wasm.wasm.wasm-function[pop_marked_content]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_EMC]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[end_metatext]` (1)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:729` | Self: 0.0% (0us) | Total: 0.0% (25.3ms) | Samples: 0

**Calls:**
- `log` (1)

### `Stream`
`internal:streams/legacy:4` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `Duplex` (1)

**Calls:**
- `EventEmitter` (1)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:256` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (1)

**Calls:**
- `boundingRect` (1)

### `threshold`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (103.0ms) | Samples: 0

**Called by:**
- `detectHorizontalLines` (55)
- `detectVerticalLines` (38)

**Calls:**
- `wasm-stub` (93)

### `RunTree`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:331` | Self: 0.0% (0us) | Total: 0.0% (1.7ms) | Samples: 0

**Called by:**
- `runWithConfig` (2)

**Calls:**
- `getSharedClient` (2)

### `delete`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `detectTables` (1)

**Calls:**
- `releaseClassHandle` (1)

### `_procInput`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:731` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `_prepareSingleTask` (1)

**Calls:**
- `readChannel` (1)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:117` | Self: 0.0% (0us) | Total: 0.0% (122.1ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (111)

**Calls:**
- `(anonymous)` (111)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:631` | Self: 0.0% (0us) | Total: 15.8% (43.42s) | Samples: 0

**Calls:**
- `detectVerticalLines` (29769)
- `detectVerticalLines` (8578)
- `detectVerticalLines` (529)
- `detectVerticalLines` (38)
- `detectVerticalLines` (36)
- `detectVerticalLines` (1)
- `detectVerticalLines` (1)
- `detectVerticalLines` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:101` | Self: 0.0% (0us) | Total: 0.0% (38.5ms) | Samples: 0

**Calls:**
- `_number` (4)

### `async getCallbackManagerForConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js:19` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async invoke` (1)

**Calls:**
- `_getTracingInheritableMetadataFromConfig` (1)

### `_tryToStartAnother`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:87` | Self: 0.0% (0us) | Total: 0.1% (491.5ms) | Samples: 0

**Called by:**
- `_next` (1)

**Calls:**
- `get size` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:966` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `init` (1)

### `async _first`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:647` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `async tick` (1)

**Calls:**
- `async _first` (1)

### `.wasm-function[155]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `.wasm-function[2996]` (1)

**Calls:**
- `.wasm-function[585]` (1)

### `async cropBbsRowsNode`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:85` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async cropBbsRowsNode` (1)

**Calls:**
- `async cropBbsRows` (1)

### `__emval_create_invoker`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `wasm-stub` (2)

**Calls:**
- `map` (1)
- `emval_lookupTypes` (1)

### `.wasm-function[635]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (134.0ms) | Samples: 0

**Called by:**
- `.wasm-function[11526]` (120)

**Calls:**
- `.wasm-function[557]` (120)

### `BaseLangChain`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:141` | Self: 0.0% (0us) | Total: 0.0% (51.7ms) | Samples: 0

**Called by:**
- `BaseLanguageModel` (1)

**Calls:**
- `_addVersion` (1)

### `withStructuredOutput`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:397` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `async extract` (3)

**Calls:**
- `toJsonSchema` (3)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/shell.js:6` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Calls:**
- `bound describe` (1)

### `isRootLevelExplicitInvoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/utils/config.js:130` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `ensureLangGraphConfig` (1)

**Calls:**
- `some` (1)

### `ColorSpace`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:594` | Self: 0.0% (0us) | Total: 0.0% (999us) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `Userdata` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_run_Q]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_grestore]` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:48` | Self: 0.0% (0us) | Total: 0.0% (1.8ms) | Samples: 0

**Calls:**
- `async cropperBatch` (2)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:105` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `addNode` (1)

### `mupdf-wasm.wasm.wasm-function[wasm_new_buffer_from_pixmap_as_png]`
`[native code]` | Self: 0.0% (0us) | Total: 0.5% (1.54s) | Samples: 0

**Called by:**
- `wasm-stub` (1378)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_new_buffer_from_pixmap_as_png]` (1378)

### `object`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:791` | Self: 0.0% (0us) | Total: 0.0% (4.2ms) | Samples: 0

**Called by:**
- `(module)` (1)
- `async cropper` (1)
- `(module)` (1)

**Calls:**
- `ZodObject` (2)
- `ZodObject` (1)

### `async call`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:133` | Self: 0.0% (0us) | Total: 7.1% (19.54s) | Samples: 0

**Calls:**
- `async func` (16)

### `brand`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/namespace.js:37` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `setPrototypeDirectOrThrow` (1)

### `.wasm-function[10385]`
`[native code]` | Self: 0.0% (0us) | Total: 30.0% (82.08s) | Samples: 0

**Called by:**
- `.wasm-function[505]` (72429)

**Calls:**
- `.wasm-function[1308]` (72429)

### `mupdf-wasm.wasm.wasm-function[pdf_find_item]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (9.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_font]` (4)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_find_item]` (4)

### `async _write`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:50` | Self: 0.0% (0us) | Total: 0.0% (4.7ms) | Samples: 0

**Called by:**
- `async _write` (4)

**Calls:**
- `async doWrite` (3)
- `async doWrite` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_load_font_descriptor]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (6.6ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[load_cid_font]` (6)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_font]` (6)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:738` | Self: 0.0% (0us) | Total: 0.0% (12.0ms) | Samples: 0

**Called by:**
- `init` (4)

**Calls:**
- `init` (4)

### `mupdf-wasm.wasm.wasm-function[pdf_remap_cmap]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_to_unicode]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_remap_cmap_range]` (2)

### `getTraceableRunTree`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tracers/tracer_langchain.js:153` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `_configureSync` (1)

**Calls:**
- `getCurrentRunTree` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:20` | Self: 0.0% (0us) | Total: 0.4% (1.26s) | Samples: 0

**Calls:**
- `(anonymous)` (329)

### `_gte`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:523` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `min` (1)

**Calls:**
- `$ZodCheckGreaterThan` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:497` | Self: 0.0% (0us) | Total: 0.0% (37.6ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `isFinite` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_remap_cmap_range]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_remap_cmap]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_lookup_cmap_full]` (2)

### `bound join`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (62.1ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `join` (1)

### `.wasm-function[1199]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (129.5ms) | Samples: 0

**Called by:**
- `.wasm-function[182]` (3)

**Calls:**
- `wasm-stub` (3)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:5` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:1755` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `init` (2)

**Calls:**
- `defineLazy` (2)

### `async cropAndZoom`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:58` | Self: 0.0% (0us) | Total: 0.0% (4.5ms) | Samples: 0

**Calls:**
- `Sharp` (3)
- `extract` (1)

### `mupdf-wasm.wasm.wasm-function[fz_transform_pixmap]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (5.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_fill_image]` (4)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_scale_pixmap_cached]` (4)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:168` | Self: 0.0% (0us) | Total: 0.9% (2.65s) | Samples: 0

**Calls:**
- `_next` (2)
- `_next` (1)

### `findContours`
`[native code]` | Self: 0.0% (0us) | Total: 0.1% (330.9ms) | Samples: 0

**Called by:**
- `(anonymous)` (274)

**Calls:**
- `(unknown)` (274)

### `detectHorizontalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:462` | Self: 0.0% (0us) | Total: 0.0% (38.7ms) | Samples: 0

**Called by:**
- `async cropTableRows` (35)

**Calls:**
- `(anonymous)` (34)
- `(anonymous)` (1)

### `internal:streams/pipeline`
`internal:streams/pipeline:2` | Self: 0.0% (0us) | Total: 0.0% (8.2ms) | Samples: 0

**Called by:**
- `anonymous` (7)

**Calls:**
- `anonymous` (7)

### `mupdf-wasm.wasm.wasm-function[pdf_run_S]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (94.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (72)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_path]` (72)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/messages_annotation.js:41` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Calls:**
- `getChannel` (1)

### `async _route`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:40` | Self: 0.0% (0us) | Total: 0.0% (3.1ms) | Samples: 0

**Called by:**
- `async _route` (3)

**Calls:**
- `async invoke` (2)
- `_localRead` (1)

### `get`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/registries.js:35` | Self: 0.0% (0us) | Total: 0.0% (9.5ms) | Samples: 0

**Called by:**
- `get` (4)
- `extractDefs` (1)
- `interopZodObjectStrict` (1)
- `extractDefs` (1)

**Calls:**
- `get` (4)
- `get` (2)
- `get` (1)

### `mupdf-wasm.wasm.wasm-function[gmtime]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (9.6ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[lcms2mt_cmsCreateProfilePlaceholder]` (9)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[do_tzset]` (9)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:157` | Self: 0.0% (0us) | Total: 0.1% (434.0ms) | Samples: 0

**Called by:**
- `async run` (27)

**Calls:**
- `async pRetry` (27)

### `.wasm-function[2996]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `.wasm-function[1543]` (1)

**Calls:**
- `.wasm-function[155]` (1)

### `async cropAndZoom`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:17` | Self: 0.0% (0us) | Total: 2.5% (6.91s) | Samples: 0

**Called by:**
- `async cropAndZoom` (9)

**Calls:**
- `Sharp` (5)
- `metadata` (4)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:264` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (1)

**Calls:**
- `get` (1)

### `internal:shared`
`internal:shared:2` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `anonymous` (2)

### `asPNG`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:1045` | Self: 0.0% (0us) | Total: 0.5% (1.54s) | Samples: 0

**Called by:**
- `async convertPdfToImages` (1378)

**Calls:**
- `wasm-stub` (1378)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:37` | Self: 0.0% (0us) | Total: 0.0% (16.7ms) | Samples: 0

**Called by:**
- `run` (15)

**Calls:**
- `async classifyImage` (5)
- `async func` (4)
- `async func` (4)
- `async cropBbsRowsNode` (1)
- `async _getUpdates` (1)

### `_tryToStartAnother`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:94` | Self: 0.0% (0us) | Total: 0.4% (1.35s) | Samples: 0

**Called by:**
- `_processQueue` (1)
- `_next` (1)

**Calls:**
- `_resolvePromises` (2)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:83` | Self: 0.0% (0us) | Total: 0.0% (48.9ms) | Samples: 0

**Called by:**
- `async cropper` (1)

**Calls:**
- `ensureConfig` (1)

### `mupdf-wasm.wasm.wasm-function[crc32]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[putchunk]` (3)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[crc32_z]` (3)

### `mupdf-wasm.wasm.wasm-function[fz_new_pixmap_with_bbox]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (5.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_new_pixmap_from_page_with_separations_and_usage]` (4)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_new_pixmap]` (4)

### `.wasm-function[6662]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (125.8ms) | Samples: 0

**Called by:**
- `.wasm-function[6673]` (1)

**Calls:**
- `.wasm-function[98]` (1)

### `int`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:530` | Self: 0.0% (0us) | Total: 0.0% (19.6ms) | Samples: 0

**Called by:**
- `bound int` (2)

**Calls:**
- `_int` (2)

### `async _generateUncached`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:212` | Self: 0.0% (0us) | Total: 0.0% (60.4ms) | Samples: 0

**Called by:**
- `async _generateUncached` (37)

**Calls:**
- `getLsParamsWithDefaults` (37)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:5` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Calls:**
- `literal` (1)
- `object` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_open_filter]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (87.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_open_image_stream]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_open_raw_filter]` (1)
- `mupdf-wasm.wasm.wasm-function[build_filter]` (1)

### `mupdf-wasm.wasm.wasm-function[lcms2mt_cmsCreateProfilePlaceholder]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (9.6ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_new_icc_colorspace]` (9)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[gmtime]` (9)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:14` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `async classifyImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:61` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Calls:**
- `async withRetry` (3)

### `adaptiveThreshold`
`[native code]` | Self: 0.0% (0us) | Total: 0.7% (2.00s) | Samples: 0

**Called by:**
- `detectTables` (1833)

**Calls:**
- `(unknown)` (1833)

### `async pRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js:86` | Self: 0.0% (0us) | Total: 0.1% (434.0ms) | Samples: 0

**Called by:**
- `async (anonymous)` (27)

**Calls:**
- `async pRetry` (25)
- `async pRetry` (1)
- `async pRetry` (1)

### `async _first`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:704` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Calls:**
- `filter` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:18` | Self: 0.0% (0us) | Total: 0.0% (899us) | Samples: 0

**Calls:**
- `bound require` (1)

### `toPixmap`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:2231` | Self: 0.0% (0us) | Total: 0.1% (289.7ms) | Samples: 0

**Called by:**
- `async convertPdfToImages` (145)

**Calls:**
- `(unknown)` (145)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:576` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `flatIntoArrayWithCallback` (1)

**Calls:**
- `flatMap` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:816` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `cached` (1)

### `isTracingEnabled`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/callbacks.js:10` | Self: 0.0% (0us) | Total: 0.0% (36.8ms) | Samples: 0

**Called by:**
- `_configureSync` (1)

**Calls:**
- `find` (1)

### `internal:primordials`
`internal:primordials:73` | Self: 0.0% (0us) | Total: 0.0% (949us) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `makeSafe` (1)

### `makeSafe`
`internal:primordials:31` | Self: 0.0% (0us) | Total: 0.0% (949us) | Samples: 0

**Called by:**
- `internal:primordials` (1)

**Calls:**
- `bound call` (1)

### `ensureLangGraphConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/utils/config.js:142` | Self: 0.0% (0us) | Total: 0.0% (96.7ms) | Samples: 0

**Called by:**
- `async invoke` (2)
- `async _streamIterator` (1)

**Calls:**
- `isRootLevelExplicitInvoke` (2)
- `isRootLevelExplicitInvoke` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1172` | Self: 0.0% (0us) | Total: 0.0% (5.8ms) | Samples: 0

**Called by:**
- `async detectAndCropBbs` (5)

**Calls:**
- `async invoke` (5)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:155` | Self: 0.0% (0us) | Total: 4.2% (11.74s) | Samples: 0

**Called by:**
- `async cropBbsRows` (10786)

**Calls:**
- `(anonymous)` (10786)

### `interopZodObjectStrict`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:315` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `toJsonSchema` (1)

**Calls:**
- `_never` (1)

### `internal:stream`
`internal:stream:57` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `setPrototypeDirect` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:518` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `init` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect_chain]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_cache_object]` (2)

### `async _generate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:269` | Self: 0.0% (0us) | Total: 0.0% (131.5ms) | Samples: 0

**Called by:**
- `async _generate` (5)

**Calls:**
- `flatIntoArrayWithCallback` (5)

### `async stream`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:121` | Self: 0.0% (0us) | Total: 0.0% (4.4ms) | Samples: 0

**Called by:**
- `async stream` (4)

**Calls:**
- `AsyncGeneratorWithSetup` (3)
- `AsyncGeneratorWithSetup` (1)

### `async func`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:29` | Self: 0.0% (0us) | Total: 0.0% (4.4ms) | Samples: 0

**Called by:**
- `async (anonymous)` (4)

**Calls:**
- `async (anonymous)` (4)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:135` | Self: 0.0% (0us) | Total: 0.0% (23.5ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `string` (1)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:708` | Self: 0.0% (0us) | Total: 0.0% (1.8ms) | Samples: 0

**Calls:**
- `extract` (2)

### `async createDebugImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:796` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `composite` (1)

### `Comparator`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/classes/comparator.js:21` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `join` (1)

### `ChatOpenRouter`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:155` | Self: 0.0% (0us) | Total: 0.0% (1.5ms) | Samples: 0

**Called by:**
- `async cropper` (1)

**Calls:**
- `_addVersion` (1)

### `bound check`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (86.4ms) | Samples: 0

**Called by:**
- `bound int` (5)
- `bound min` (4)

**Calls:**
- `bound clone` (5)
- `check` (2)
- `check` (2)

### `async func`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:291` | Self: 0.0% (0us) | Total: 7.1% (19.54s) | Samples: 0

**Called by:**
- `async call` (16)

**Calls:**
- `Promise` (16)

### `async _generateUncached`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:316` | Self: 0.0% (0us) | Total: 3.3% (9.29s) | Samples: 0

**Calls:**
- `map` (4)

### `async stream`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:924` | Self: 0.0% (0us) | Total: 0.0% (5.8ms) | Samples: 0

**Called by:**
- `async invoke` (5)

**Calls:**
- `async stream` (4)
- `async stream` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_load_type0_font]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (9.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_font]` (9)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[load_cid_font]` (9)

### `mupdf-wasm.wasm.wasm-function[fz_write_band]`
`[native code]` | Self: 0.0% (0us) | Total: 0.5% (1.54s) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_write_pixmap_as_png]` (1378)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[png_write_band]` (1378)

### `async pRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js:124` | Self: 0.0% (0us) | Total: 0.1% (431.7ms) | Samples: 0

**Called by:**
- `async pRetry` (25)

**Calls:**
- `(anonymous)` (25)

### `_outputWrites`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:410` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `putWrites` (1)

**Calls:**
- `gatherIteratorSync` (1)

### `async cropBbsRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:869` | Self: 0.0% (0us) | Total: 0.6% (1.85s) | Samples: 0

**Calls:**
- `async cropTableRows` (2)

### `__embind_register_class_function`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (8.7ms) | Samples: 0

**Called by:**
- `wasm-stub` (8)

**Calls:**
- `whenDependentTypesAreResolved` (7)
- `embind__requireFunction` (1)

### `mount`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `mount` (1)
- `staticInit` (1)

**Calls:**
- `mount` (1)
- `createNode` (1)

### `getWasmTableEntry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `makeDynCaller` (2)

**Calls:**
- `get` (2)

### `async cropAndZoom`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:43` | Self: 0.0% (0us) | Total: 0.0% (27.7ms) | Samples: 0

**Calls:**
- `extract` (2)

### `familySync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/detect-libc.js:188` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `isNonGlibcLinuxSync` (1)

**Calls:**
- `familyFromInterpreterSync` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:38` | Self: 0.0% (0us) | Total: 0.6% (1.84s) | Samples: 0

**Calls:**
- `async convertPdfToImages` (1379)
- `async convertPdfToImages` (145)
- `async convertPdfToImages` (2)
- `async convertPdfToImages` (2)
- `async convertPdfToImages` (2)
- `async convertPdfToImages` (1)

### `mupdf-wasm.wasm.wasm-function[fz_read_best]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (5.6ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_image_stream]` (5)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_read]` (5)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:109` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `bound describe` (1)

### `async convertPdfToImages`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:85` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `(module)` (2)

**Calls:**
- `writeFileSync` (1)
- `(anonymous)` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_run_page_with_usage]`
`[native code]` | Self: 0.0% (0us) | Total: 0.1% (284.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_new_pixmap_from_page_with_separations_and_usage]` (141)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_page_contents_with_usage_imp]` (141)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:259` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `init` (2)

**Calls:**
- `init` (2)

### `_filterInvocationParamsForTracing`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:279` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async _generateUncached` (1)

**Calls:**
- `copyDataProperties` (1)

### `patchConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js:128` | Self: 0.0% (0us) | Total: 1.2% (3.46s) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `ensureConfig` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_show_image_imp]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (14.5ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_image]` (10)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_fill_image]` (10)

### `initRuntime`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (119.6ms) | Samples: 0

**Called by:**
- `doRun` (76)

**Calls:**
- `wasm-stub` (74)
- `init` (2)

### `mupdf-wasm.wasm.wasm-function[fz_realloc_array_imp]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[push_cmd]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_realloc]` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:16` | Self: 0.0% (0us) | Total: 0.0% (18.5ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `has` (1)

### `interopZodObjectStrict`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:312` | Self: 0.0% (0us) | Total: 0.0% (3.4ms) | Samples: 0

**Called by:**
- `toJsonSchema` (2)

**Calls:**
- `clone` (2)

### `async _generateUncached`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:349` | Self: 0.0% (0us) | Total: 0.0% (130.4ms) | Samples: 0

**Calls:**
- `defineProperty` (1)

### `StructuredTool`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:68` | Self: 0.0% (0us) | Total: 0.0% (20.1ms) | Samples: 0

**Called by:**
- `DynamicStructuredTool` (2)

**Calls:**
- `BaseLangChain` (1)
- `BaseLangChain` (1)

### `async createDebugImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:795` | Self: 0.0% (0us) | Total: 0.0% (105.2ms) | Samples: 0

**Calls:**
- `Sharp` (1)

### `initializeSax`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/sax-js/sax.js:520` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `forEach` (1)

### `finalize`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:295` | Self: 0.0% (0us) | Total: 0.0% (886us) | Samples: 0

**Called by:**
- `toJsonSchema` (1)

**Calls:**
- `performIteration` (1)

### `getLsParams`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:252` | Self: 0.0% (0us) | Total: 0.0% (60.4ms) | Samples: 0

**Called by:**
- `getLsParamsWithDefaults` (37)

**Calls:**
- `invocationParams` (37)

### `async stream`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:119` | Self: 0.0% (0us) | Total: 0.0% (4.4ms) | Samples: 0

**Called by:**
- `async stream` (4)

**Calls:**
- `async stream` (4)

### `async _runLoop`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1204` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `async _runLoop` (2)

**Calls:**
- `async tick` (2)

### `__embind_register_function`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (27.3ms) | Samples: 0

**Called by:**
- `wasm-stub` (26)

**Calls:**
- `whenDependentTypesAreResolved` (24)
- `exposePublicSymbol` (2)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:170` | Self: 0.0% (0us) | Total: 0.0% (185.2ms) | Samples: 0

**Calls:**
- `async withRetry` (3)

### `R`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.0% (23.6ms) | Samples: 0

**Called by:**
- `Z` (16)

**Calls:**
- `Int8Array` (16)

### `async classifyImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:26` | Self: 0.0% (0us) | Total: 0.0% (5.1ms) | Samples: 0

**Called by:**
- `async classifyImage` (5)

**Calls:**
- `async compressImage` (5)

### `constructor Mat`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (125.8ms) | Samples: 0

**Called by:**
- `Mat` (1)

**Calls:**
- `(unknown)` (1)

### `async _generate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:272` | Self: 0.0% (0us) | Total: 0.1% (497.0ms) | Samples: 0

**Called by:**
- `async _generate` (31)

**Calls:**
- `async add` (28)
- `callWithOptions` (3)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:356` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (1)

**Calls:**
- `delete` (1)

### `async initialize`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:304` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async initialize` (1)

**Calls:**
- `async channelsFromCheckpoint` (1)

### `async cropAndZoom`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:49` | Self: 0.0% (0us) | Total: 0.9% (2.48s) | Samples: 0

**Calls:**
- `reduce` (50)

### `.wasm-function[390]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (198.9ms) | Samples: 0

**Called by:**
- `.wasm-function[11624]` (180)

**Calls:**
- `.wasm-function[68]` (180)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:35` | Self: 0.0% (0us) | Total: 2.4% (6.69s) | Samples: 0

**Called by:**
- `map` (5)

**Calls:**
- `async cropper` (4)
- `async cropper` (1)

### `interopZodTransformInputSchemaImpl`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:405` | Self: 0.0% (0us) | Total: 0.0% (8.4ms) | Samples: 0

**Called by:**
- `toJsonSchema` (5)

**Calls:**
- `interopZodTransformInputSchemaImpl` (2)
- `get` (1)
- `interopZodTransformInputSchemaImpl` (1)
- `interopZodTransformInputSchemaImpl` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:38` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `isInstance`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/ai.js:121` | Self: 0.0% (0us) | Total: 0.6% (1.86s) | Samples: 0

**Called by:**
- `async _generate` (1)

**Calls:**
- `isInstance` (1)

### `mupdf-wasm.wasm.wasm-function[gray_conic_to]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[FT_Outline_Decompose]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[gray_render_line]` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:928` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async invoke` (1)

**Calls:**
- `async getCallbackManagerForConfig` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:111` | Self: 0.0% (0us) | Total: 0.0% (23.5ms) | Samples: 0

**Calls:**
- `_string` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:47` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `log` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:1234` | Self: 0.0% (0us) | Total: 0.0% (991us) | Samples: 0

**Called by:**
- `Promise` (1)

**Calls:**
- `runWithConfig` (1)

### `mergeConfigs`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js:23` | Self: 0.0% (0us) | Total: 0.0% (56.2ms) | Samples: 0

**Called by:**
- `async _mergeConfig` (1)

**Calls:**
- `keys` (1)

### `readPointer`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `RegisteredPointer_fromWireType` (1)

### `validate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:154` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `_compileResolved` (1)

**Calls:**
- `get allEdges` (1)

### `async _executeTasksWithRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:139` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `async tick` (2)

**Calls:**
- `async _runWithRetry` (2)

### `async mapBatched`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:86` | Self: 0.0% (0us) | Total: 2.4% (6.70s) | Samples: 0

**Called by:**
- `async mapBatched` (2)

**Calls:**
- `map` (6)

### `_int`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:324` | Self: 0.0% (0us) | Total: 0.0% (19.6ms) | Samples: 0

**Called by:**
- `int` (2)

**Calls:**
- `ZodNumberFormat` (2)

### `mupdf-wasm.wasm.wasm-function[fz_decomp_image_from_stream]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (7.5ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[compressed_image_get_pixmap]` (5)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_read]` (5)

### `async _streamIterator`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1021` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `IterableReadableWritableStream` (1)

### `mupdf-wasm.wasm.wasm-function[emscripten_builtin_free]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (944us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[emscripten_builtin_realloc]` (1)

**Calls:**
- `wasm-stub` (1)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:268` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (1)

**Calls:**
- `get` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:203` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `init` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:1657` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `getEnumValues` (1)

### `mupdf-wasm.wasm.wasm-function[ft_smooth_render]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (5.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[FT_Render_Glyph_Internal]` (3)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[ft_glyphslot_preset_bitmap]` (2)
- `mupdf-wasm.wasm.wasm-function[gray_raster_render]` (1)

### `k`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.0% (9.6ms) | Samples: 0

**Called by:**
- `wasm-stub` (9)

**Calls:**
- `getFullYear` (9)

### `mupdf-wasm.wasm.wasm-function[pdf_show_image]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (14.5ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_Do_image]` (10)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_image_imp]` (10)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:276` | Self: 0.0% (0us) | Total: 0.0% (228.9ms) | Samples: 0

**Called by:**
- `async (anonymous)` (14)

**Calls:**
- `stringify` (14)

### `async doWrite`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:66` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `async doWrite` (2)

**Calls:**
- `async invoke` (2)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:171` | Self: 0.0% (0us) | Total: 0.1% (495.8ms) | Samples: 0

**Called by:**
- `Promise` (30)

**Calls:**
- `_tryToStartAnother` (28)
- `_tryToStartAnother` (2)

### `async cropAndZoom`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:11` | Self: 0.0% (0us) | Total: 2.5% (6.91s) | Samples: 0

**Called by:**
- `async (anonymous)` (10)

**Calls:**
- `async cropAndZoom` (9)
- `async cropAndZoom` (1)

### `.wasm-function[14700]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (101.8ms) | Samples: 0

**Called by:**
- `wasm-stub` (92)

**Calls:**
- `.wasm-function[9595]` (92)

### `async detectAndCropBbs`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:118` | Self: 0.0% (0us) | Total: 0.0% (5.8ms) | Samples: 0

**Called by:**
- `(module)` (5)

**Calls:**
- `async detectAndCropBbs` (5)

### `interopZodTransformInputSchemaImpl`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:406` | Self: 0.0% (0us) | Total: 0.0% (11.0ms) | Samples: 0

**Called by:**
- `toJsonSchema` (4)

**Calls:**
- `clone` (4)

### `v7Bytes`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/uuid/src/v7.js:46` | Self: 0.0% (0us) | Total: 0.0% (203.3ms) | Samples: 0

**Called by:**
- `v7` (1)

**Calls:**
- `Uint8Array` (1)

### `interopZodTransformInputSchemaImpl`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:431` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `interopZodTransformInputSchemaImpl` (1)

**Calls:**
- `add` (1)

### `mupdf-wasm.wasm.wasm-function[fz_fill_text]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (35.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_flush_text_imp]` (24)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_fill_text]` (24)

### `async stream`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:939` | Self: 0.0% (0us) | Total: 0.0% (4.4ms) | Samples: 0

**Called by:**
- `async stream` (4)

**Calls:**
- `async stream` (4)

### `mapOutputUpdates`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/io.js:109` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `generatorResume` (1)

**Calls:**
- `some` (1)

### `async tick`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:474` | Self: 0.0% (0us) | Total: 0.0% (975us) | Samples: 0

**Calls:**
- `_putCheckpoint` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_process_raw_contents]`
`[native code]` | Self: 0.0% (0us) | Total: 0.1% (284.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_contents]` (141)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_stream]` (140)
- `mupdf-wasm.wasm.wasm-function[pdf_open_object_array]` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/classes/comparator.js:143` | Self: 0.0% (0us) | Total: 0.0% (923us) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `findWasmBinary`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (61.5ms) | Samples: 0

**Called by:**
- `async createWasm` (56)

**Calls:**
- `binaryDecode` (51)
- `binaryDecode` (5)

### `.wasm-function[68]`
`[native code]` | Self: 0.0% (0us) | Total: 0.1% (329.6ms) | Samples: 0

**Called by:**
- `.wasm-function[390]` (180)
- `.wasm-function[510]` (115)

**Calls:**
- `.wasm-function[9672]` (180)
- `.wasm-function[8596]` (115)

### `node:stream`
`node:stream:2` | Self: 0.0% (0us) | Total: 0.0% (11.4ms) | Samples: 0

**Calls:**
- `anonymous` (10)

### `mupdf-wasm.wasm.wasm-function[fz_new_pixmap_with_data]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (6.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_new_pixmap]` (5)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_malloc]` (5)

### `internal:util/inspect`
`internal:util/inspect:2` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:737` | Self: 0.0% (0us) | Total: 0.0% (3.4ms) | Samples: 0

**Called by:**
- `init` (3)

**Calls:**
- `init` (3)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:302` | Self: 0.0% (0us) | Total: 0.0% (23.2ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (20)

**Calls:**
- `countNonZero` (20)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:37` | Self: 0.0% (0us) | Total: 0.0% (23.3ms) | Samples: 0

**Called by:**
- `async invoke` (21)

**Calls:**
- `run` (15)
- `runWithConfig` (5)
- `runWithConfig` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:686` | Self: 0.0% (0us) | Total: 1.4% (3.82s) | Samples: 0

**Called by:**
- `Promise` (6)

**Calls:**
- `(anonymous)` (6)

### `_processQueue`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:136` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `set concurrency` (1)

**Calls:**
- `_tryToStartAnother` (1)

### `async pRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js:119` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `async pRetry` (1)

**Calls:**
- `now` (1)

### `XXH3`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/hash.js:253` | Self: 0.0% (0us) | Total: 0.0% (940us) | Samples: 0

**Called by:**
- `_prepareSingleTask` (1)

**Calls:**
- `XXH3_len_17to128_128b` (1)

### `async doWrite`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:70` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `async doWrite` (1)

**Calls:**
- `_isSkipWrite` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:21` | Self: 0.0% (0us) | Total: 0.0% (4.1ms) | Samples: 0

**Called by:**
- `init` (2)

**Calls:**
- `(anonymous)` (1)
- `(anonymous)` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/_openapi_client/internal/qs/utils.js:9` | Self: 0.0% (0us) | Total: 0.0% (936us) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `toUpperCase` (1)

### `_configureSync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/callbacks/manager.js:522` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `runWithConfig` (1)

**Calls:**
- `getTraceableRunTree` (1)

### `route`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1156` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `wrapConversion` (1)
- `wrapConversion` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:258` | Self: 0.0% (0us) | Total: 0.0% (23.5ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `init` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/internal/re.js:59` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `createToken` (1)

### `__embind_register_class`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (7.6ms) | Samples: 0

**Called by:**
- `wasm-stub` (7)

**Calls:**
- `whenDependentTypesAreResolved` (5)
- `exposePublicSymbol` (2)

### `async _runWithRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/retry.js:26` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `async _executeTasksWithRetry` (2)

**Calls:**
- `async _runWithRetry` (1)
- `async _runWithRetry` (1)

### `_enum`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1007` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `ZodEnum` (1)

### `convertCompletionsMessageToBaseMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:183` | Self: 0.0% (0us) | Total: 2.2% (6.05s) | Samples: 0

**Called by:**
- `convertOpenRouterResponseToBaseMessage` (2)

**Calls:**
- `AIMessage` (1)
- `AIMessage` (1)

### `loadPage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:1540` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async convertPdfToImages` (1)

**Calls:**
- `PDFPage` (1)

### `mupdf-wasm.wasm.wasm-function[deflate]`
`[native code]` | Self: 0.0% (0us) | Total: 0.4% (1.28s) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[png_write_band]` (1149)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[deflate_slow]` (1149)

### `async _invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:1229` | Self: 0.0% (0us) | Total: 0.0% (991us) | Samples: 0

**Called by:**
- `bound _invoke` (1)

**Calls:**
- `Promise` (1)

### `async _runWithRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/retry.js:48` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async _runWithRetry` (1)

**Calls:**
- `async invoke` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_new_pixmap_from_page_with_separations_and_usage]`
`[native code]` | Self: 0.0% (0us) | Total: 0.1% (289.7ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[wasm_pdf_new_pixmap_from_page_with_usage]` (145)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_page_with_usage]` (141)
- `mupdf-wasm.wasm.wasm-function[fz_new_pixmap_with_bbox]` (4)

### `mupdf-wasm.wasm.wasm-function[fz_stroke_bezier]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.7ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_stroke_bezier]` (2)
- `mupdf-wasm.wasm.wasm-function[stroke_curveto]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_stroke_bezier]` (2)
- `mupdf-wasm.wasm.wasm-function[fz_stroke_lineto_aux]` (1)

### `runtimeLibc`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/libvips.mjs:39` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `runtimePlatformArch` (1)

**Calls:**
- `isNonGlibcLinuxSync` (1)

### `async tick`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:487` | Self: 0.0% (0us) | Total: 0.0% (6.2ms) | Samples: 0

**Calls:**
- `_prepareNextTasks` (6)

### `.wasm-function[11668]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (41.5ms) | Samples: 0

**Called by:**
- `.wasm-function[1293]` (36)

**Calls:**
- `.wasm-function[466]` (36)

### `mupdf-wasm.wasm.wasm-function[fz_md5_update]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_md5_buffer]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[body]` (2)

### `async _write`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:36` | Self: 0.0% (0us) | Total: 0.0% (4.7ms) | Samples: 0

**Called by:**
- `async func` (4)

**Calls:**
- `async _write` (4)

### `literal`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1043` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `ZodLiteral` (1)

### `bound _invoke`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (991us) | Samples: 0

**Called by:**
- `async _callWithConfig` (1)

**Calls:**
- `async _invoke` (1)

### `init`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:22` | Self: 0.0% (0us) | Total: 0.0% (247.8ms) | Samples: 0

**Called by:**
- `ZodObject` (8)
- `ZodNumber` (7)
- `(anonymous)` (5)
- `(anonymous)` (4)
- `(anonymous)` (4)
- `ZodString` (3)
- `(anonymous)` (3)
- `(anonymous)` (3)
- `ZodOptional` (3)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `ZodNullable` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `ZodNumberFormat` (2)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `ZodArray` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `ZodEnum` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

**Calls:**
- `(anonymous)` (5)
- `(anonymous)` (4)
- `(anonymous)` (4)
- `(anonymous)` (3)
- `(anonymous)` (3)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
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
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `.wasm-function[15702]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (70.2ms) | Samples: 0

**Called by:**
- `.wasm-function[674]` (52)

**Calls:**
- `.wasm-function[1260]` (52)

### `.wasm-function[744]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `.wasm-function[16862]` (2)

**Calls:**
- `.wasm-function[1086]` (1)
- `.wasm-function[1735]` (1)

### `.wasm-function[1530]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (975us) | Samples: 0

**Called by:**
- `.wasm-function[10719]` (1)

**Calls:**
- `.wasm-function[444]` (1)

### `mupdf-wasm.wasm.wasm-function[stroke_curveto]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_walk_path]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_stroke_bezier]` (1)

### `async cropBbsRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:811` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async cropBbsRowsNode` (1)

**Calls:**
- `async cropBbsRows` (1)

### `mupdf-wasm.wasm.wasm-function[fz_paint_image]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_fill_image]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_paint_image_imp]` (1)

### `mupdf-wasm.wasm.wasm-function[fz_new_glyph_from_8bpp_data]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[glyph_from_ft_bitmap]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_new_pixmap]` (1)

### `.wasm-function[3389]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `.wasm-function[16862]` (1)

**Calls:**
- `wasm-stub` (1)

### `StateGraph`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:159` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `Graph$1` (1)

### `isRootLevelExplicitInvoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/utils/config.js:131` | Self: 0.0% (0us) | Total: 0.0% (95.5ms) | Samples: 0

**Called by:**
- `ensureLangGraphConfig` (2)

**Calls:**
- `getRunnableConfig` (2)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:28` | Self: 0.0% (0us) | Total: 0.4% (1.26s) | Samples: 0

**Called by:**
- `(anonymous)` (329)

**Calls:**
- `async (anonymous)` (328)
- `async (anonymous)` (1)

### `compile`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:439` | Self: 0.0% (0us) | Total: 0.0% (3.1ms) | Samples: 0

**Called by:**
- `(module)` (3)

**Calls:**
- `_compileResolved` (1)
- `_compileResolved` (1)
- `_compileResolved` (1)

### `mupdf-wasm.wasm.wasm-function[fz_new_buffer_from_pixmap_as_png]`
`[native code]` | Self: 0.0% (0us) | Total: 0.5% (1.54s) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[wasm_new_buffer_from_pixmap_as_png]` (1378)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[png_from_pixmap]` (1378)

### `async _runLoop`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1200` | Self: 0.0% (0us) | Total: 0.0% (3.1ms) | Samples: 0

**Called by:**
- `async (anonymous)` (3)

**Calls:**
- `async _runLoop` (2)
- `async _runLoop` (1)

### `.wasm-function[10719]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (975us) | Samples: 0

**Called by:**
- `.wasm-function[4341]` (1)

**Calls:**
- `.wasm-function[1530]` (1)

### `HumanMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/human.js:12` | Self: 0.0% (0us) | Total: 0.0% (889us) | Samples: 0

**Called by:**
- `async cropper` (1)

**Calls:**
- `BaseMessage` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/extractSchema.ts:63` | Self: 0.0% (0us) | Total: 0.0% (931us) | Samples: 0

**Calls:**
- `bound describe` (1)

### `process`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:54` | Self: 0.0% (0us) | Total: 0.0% (1.5ms) | Samples: 0

**Called by:**
- `objectProcessor` (1)

**Calls:**
- `cloneObject` (1)

### `ChatOpenRouter`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:154` | Self: 0.0% (0us) | Total: 0.0% (55.5ms) | Samples: 0

**Called by:**
- `async cropper` (3)

**Calls:**
- `BaseChatModel` (3)

### `mupdf-wasm.wasm.wasm-function[open_face]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (993us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[FT_New_Memory_Face]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[tt_face_init]` (1)

### `mupdf-wasm.wasm.wasm-function[fz_convert_rasterizer]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (87.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_stroke_path_aux]` (67)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_convert_gel]` (67)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js:133` | Self: 0.0% (0us) | Total: 0.0% (3.3ms) | Samples: 0

**Called by:**
- `Promise` (3)

**Calls:**
- `async (anonymous)` (2)
- `run` (1)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:182` | Self: 0.0% (0us) | Total: 4.6% (12.80s) | Samples: 0

**Called by:**
- `async cropBbsRows` (11140)

**Calls:**
- `(anonymous)` (11140)

### `Mat`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (125.8ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `constructor Mat` (1)

### `open`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `createStandardStreams` (1)

**Calls:**
- `createStream` (1)

### `_separateRunnableConfigFromCallOptions`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:131` | Self: 0.0% (0us) | Total: 0.0% (1.8ms) | Samples: 0

**Called by:**
- `_separateRunnableConfigFromCallOptionsCompat` (1)

**Calls:**
- `ensureConfig` (1)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:252` | Self: 0.0% (0us) | Total: 0.0% (3.7ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (3)

**Calls:**
- `MatVector.get` (3)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:596` | Self: 0.0% (0us) | Total: 0.6% (1.85s) | Samples: 0

**Called by:**
- `async cropBbsRows` (2)

**Calls:**
- `async cropTableRows` (1)
- `async cropTableRows` (1)

### `run`
`node:async_hooks:99` | Self: 0.0% (0us) | Total: 0.5% (1.58s) | Samples: 0

**Called by:**
- `async invoke` (15)
- `(anonymous)` (2)

**Calls:**
- `async (anonymous)` (15)
- `async (anonymous)` (1)
- `async (anonymous)` (1)

### `getNode`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/read.js:84` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `_prepareSingleTask` (1)

**Calls:**
- `getWriters` (1)

### `async compressImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:20` | Self: 0.0% (0us) | Total: 0.0% (4.7ms) | Samples: 0

**Calls:**
- `Sharp` (3)

### `get value`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:34` | Self: 0.0% (0us) | Total: 0.0% (3.5ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)
- `(anonymous)` (1)

**Calls:**
- `(anonymous)` (1)
- `normalizeDef` (1)
- `normalizeDef` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:103` | Self: 0.0% (0us) | Total: 0.0% (34.5ms) | Samples: 0

**Calls:**
- `bound min` (2)
- `get` (1)

### `.wasm-function[585]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (4.8ms) | Samples: 0

**Called by:**
- `.wasm-function[584]` (2)
- `.wasm-function[155]` (1)

**Calls:**
- `.wasm-function[280]` (3)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1102` | Self: 0.0% (0us) | Total: 0.0% (3.1ms) | Samples: 0

**Calls:**
- `async _runLoop` (3)

### `async instantiateArrayBuffer`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (28.2ms) | Samples: 0

**Called by:**
- `async instantiateAsync` (1)
- `async instantiateArrayBuffer` (1)

**Calls:**
- `instantiate` (25)
- `async getWasmBinary` (1)
- `async instantiateArrayBuffer` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:9` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `mupdf-wasm.wasm.wasm-function[fz_draw_stroke_path]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (91.5ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_stroke_path]` (70)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_stroke_path_aux]` (70)

### `mupdf-wasm.wasm.wasm-function[FT_Render_Glyph_Internal]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (5.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_render_ft_glyph]` (3)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[ft_smooth_render]` (3)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:519` | Self: 0.0% (0us) | Total: 0.0% (18.5ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `init` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/extractSchema.ts:12` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Calls:**
- `bound nullable` (1)

### `mupdf-wasm.wasm.wasm-function[FT_Load_Glyph]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_render_ft_glyph]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[tt_glyph_load]` (1)

### `async compressImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:23` | Self: 0.0% (0us) | Total: 2.6% (7.12s) | Samples: 0

**Calls:**
- `_pipeline` (5)

### `_prepareSingleTask`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:560` | Self: 0.0% (0us) | Total: 0.0% (940us) | Samples: 0

**Called by:**
- `_prepareNextTasks` (1)

**Calls:**
- `XXH3` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:150` | Self: 0.0% (0us) | Total: 2.5% (6.97s) | Samples: 0

**Calls:**
- `async invoke` (12)
- `async invoke` (1)

### `RunTree`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:362` | Self: 0.0% (0us) | Total: 0.7% (2.08s) | Samples: 0

**Called by:**
- `runWithConfig` (4)

**Calls:**
- `convertToDottedOrderFormat` (2)
- `convertToDottedOrderFormat` (1)
- `convertToDottedOrderFormat` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_run_EMC]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pop_marked_content]` (1)

### `callWithOptions`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js:204` | Self: 0.0% (0us) | Total: 0.0% (3.2ms) | Samples: 0

**Called by:**
- `async _generate` (3)

**Calls:**
- `async add` (3)

### `putWrites`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:390` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `_commit` (2)

**Calls:**
- `_outputWrites` (1)
- `_outputWrites` (1)

### `toJsonSchema`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/json_schema.js:47` | Self: 0.0% (0us) | Total: 0.0% (19.4ms) | Samples: 0

**Called by:**
- `convertToOpenAIFunction` (9)

**Calls:**
- `interopZodTransformInputSchemaImpl` (5)
- `interopZodTransformInputSchemaImpl` (4)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:1820` | Self: 0.0% (0us) | Total: 0.0% (6.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (6)

**Calls:**
- `(anonymous)` (3)
- `(anonymous)` (2)
- `(anonymous)` (1)

### `mupdf-wasm.wasm.wasm-function[stroke_lineto]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_walk_path]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_stroke_lineto_aux]` (1)

### `async convertPdfToImages`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:34` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Called by:**
- `(module)` (2)

**Calls:**
- `openDocument` (2)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:99` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Calls:**
- `object` (1)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:690` | Self: 0.0% (0us) | Total: 0.0% (228.9ms) | Samples: 0

**Calls:**
- `Sharp` (4)

### `_emscripten_resize_heap`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (129.5ms) | Samples: 0

**Called by:**
- `wasm-stub` (3)

**Calls:**
- `growMemory` (2)
- `growMemory` (1)

### `extractDefs`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:105` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `toJSONSchema` (1)

**Calls:**
- `entries` (1)

### `node:path`
`node:path:2` | Self: 0.0% (0us) | Total: 0.0% (6.1ms) | Samples: 0

**Calls:**
- `anonymous` (3)

### `generatorResume`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (5.6ms) | Samples: 0

**Called by:**
- `gatherIteratorSync` (2)
- `prefixGenerator` (2)
- `async gatherIterator` (1)

**Calls:**
- `prefixGenerator` (2)
- `mapDebugTaskResults` (1)
- `mapOutputUpdates` (1)
- `prefixGenerator` (1)

### `bound describe`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.3ms) | Samples: 0

**Called by:**
- `(module)` (1)
- `async cropper` (1)
- `(module)` (1)

**Calls:**
- `describe` (3)

### `.wasm-function[12363]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `.wasm-function[158]` (1)

**Calls:**
- `.wasm-function[1709]` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/xxhash/xxhash.js:24` | Self: 0.0% (0us) | Total: 0.0% (918us) | Samples: 0

**Calls:**
- `hexToBytes` (1)

### `prefixGenerator`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:44` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `generatorResume` (2)

**Calls:**
- `generatorResume` (2)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:60` | Self: 0.0% (0us) | Total: 0.0% (61.2ms) | Samples: 0

**Calls:**
- `async mkdir` (1)

### `_array`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:712` | Self: 0.0% (0us) | Total: 0.0% (884us) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `ZodArray` (1)

### `interopZodTransformInputSchemaImpl`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:395` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `interopZodTransformInputSchemaImpl` (1)

**Calls:**
- `isZodSchemaV3` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:141` | Self: 0.0% (0us) | Total: 0.2% (808.3ms) | Samples: 0

**Calls:**
- `log` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:1737` | Self: 0.0% (0us) | Total: 0.0% (3.9ms) | Samples: 0

**Calls:**
- `(anonymous)` (1)

### `mupdf-wasm.wasm.wasm-function[emscripten_builtin_realloc]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (944us) | Samples: 0

**Called by:**
- `(unknown)` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[emscripten_builtin_free]` (1)

### `async cropAndZoom`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:73` | Self: 0.0% (0us) | Total: 0.2% (741.6ms) | Samples: 0

**Calls:**
- `_pipeline` (10)
- `toBuffer` (1)
- `_pipeline` (1)

### `async getWasmBinary`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async instantiateArrayBuffer` (1)

**Calls:**
- `getBinarySync` (1)

### `async interopSafeParseAsync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:65` | Self: 0.0% (0us) | Total: 0.0% (4.4ms) | Samples: 0

**Called by:**
- `async _validateResult` (4)

**Calls:**
- `async interopSafeParseAsync` (4)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/ranges/subset.js:73` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `Comparator` (1)

### `readFileSync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/filesystem.js:21` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `familyFromInterpreterSync` (1)

**Calls:**
- `readSync` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:43` | Self: 0.0% (0us) | Total: 0.0% (891us) | Samples: 0

**Calls:**
- `bound require` (1)

### `_`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.0% (7.7ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `(anonymous)` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:488` | Self: 0.0% (0us) | Total: 0.0% (909us) | Samples: 0

**Called by:**
- `forEach` (1)

**Calls:**
- `integer` (1)

### `getChannel`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/annotation.js:94` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `BinaryOperatorAggregate` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:927` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async invoke` (1)

**Calls:**
- `ensureConfig` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:32` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Calls:**
- `bound require` (2)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:108` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `addConditionalEdges` (1)

### `async interopParseAsync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:90` | Self: 0.0% (0us) | Total: 0.9% (2.54s) | Samples: 0

**Called by:**
- `async call` (9)

**Calls:**
- `async interopParseAsync` (9)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1128` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `init` (2)

**Calls:**
- `init` (2)

### `async convertPdfToImages`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:74` | Self: 0.0% (0us) | Total: 0.1% (289.7ms) | Samples: 0

**Called by:**
- `(module)` (145)

**Calls:**
- `toPixmap` (145)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:118` | Self: 0.0% (0us) | Total: 0.0% (57.1ms) | Samples: 0

**Calls:**
- `ChatOpenRouter` (3)
- `ChatOpenRouter` (1)

### `interopZodObjectStrict`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:309` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `toJsonSchema` (1)

**Calls:**
- `get` (1)

### `toJSONSchema`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:599` | Self: 0.0% (0us) | Total: 0.0% (5.5ms) | Samples: 0

**Called by:**
- `toJsonSchema` (4)

**Calls:**
- `extractDefs` (1)
- `extractDefs` (1)
- `extractDefs` (1)
- `extractDefs` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_load_stream]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (5.6ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_font]` (5)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_image_stream]` (5)

### `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect_chain]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_dict_get]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect]` (2)

### `detectHorizontalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:464` | Self: 0.0% (0us) | Total: 0.0% (60.5ms) | Samples: 0

**Called by:**
- `async cropTableRows` (55)

**Calls:**
- `threshold` (55)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:46` | Self: 0.0% (0us) | Total: 0.0% (5.8ms) | Samples: 0

**Calls:**
- `async detectAndCropBbs` (5)

### `getEnumValues`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:17` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `filter` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:10` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `_enum` (1)

### `getRunnableConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js:19` | Self: 0.0% (0us) | Total: 0.0% (96.8ms) | Samples: 0

**Called by:**
- `isRootLevelExplicitInvoke` (2)
- `async stream` (1)

**Calls:**
- `getStore` (1)
- `getStore` (1)
- `getInstance` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_grestore]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_Q]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_drop_gstate]` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:4` | Self: 0.0% (0us) | Total: 0.0% (47.8ms) | Samples: 0

**Calls:**
- `bound require` (4)

### `internal:streams/operators`
`internal:streams/operators:2` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `BaseChatModel`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:64` | Self: 0.0% (0us) | Total: 0.0% (55.5ms) | Samples: 0

**Called by:**
- `ChatOpenRouter` (3)

**Calls:**
- `BaseLanguageModel` (2)
- `BaseLanguageModel` (1)

### `check`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:98` | Self: 0.0% (0us) | Total: 0.0% (33.3ms) | Samples: 0

**Called by:**
- `bound check` (2)

**Calls:**
- `map` (2)

### `.wasm-function[674]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (269.2ms) | Samples: 0

**Called by:**
- `(unknown)` (180)
- `wasm-stub` (52)

**Calls:**
- `.wasm-function[11624]` (180)
- `.wasm-function[15702]` (52)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:34` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `runtimePlatformArch`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/libvips.mjs:41` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `runtimeLibc` (1)

### `familyFromInterpreterSync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/detect-libc.js:152` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `familySync` (1)

**Calls:**
- `readFileSync` (1)

### `metadata`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:642` | Self: 0.0% (0us) | Total: 0.0% (996us) | Samples: 0

**Called by:**
- `async compressImage` (1)

**Calls:**
- `Error` (1)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:630` | Self: 0.0% (0us) | Total: 12.9% (35.51s) | Samples: 0

**Calls:**
- `detectHorizontalLines` (20794)
- `detectHorizontalLines` (9019)
- `detectHorizontalLines` (715)
- `detectHorizontalLines` (55)
- `detectHorizontalLines` (35)
- `detectHorizontalLines` (3)
- `detectHorizontalLines` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/parse.js:20` | Self: 0.0% (0us) | Total: 0.9% (2.55s) | Samples: 0

**Called by:**
- `async (anonymous)` (13)

**Calls:**
- `(anonymous)` (9)
- `(anonymous)` (2)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/index.cjs:1` | Self: 0.0% (0us) | Total: 0.0% (18.6ms) | Samples: 0

**Calls:**
- `bound require` (9)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:28` | Self: 0.0% (0us) | Total: 0.0% (13.0ms) | Samples: 0

**Calls:**
- `wasm-stub` (12)

### `extractDefs`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:194` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `toJSONSchema` (1)

**Calls:**
- `get` (1)

### `convertToDottedOrderFormat`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:37` | Self: 0.0% (0us) | Total: 0.7% (2.07s) | Samples: 0

**Called by:**
- `RunTree` (2)

**Calls:**
- `replace` (2)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:926` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `async _runWithRetry` (1)

**Calls:**
- `async invoke` (1)
- `async invoke` (1)

### `.wasm-function[444]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (975us) | Samples: 0

**Called by:**
- `.wasm-function[1530]` (1)

**Calls:**
- `.wasm-function[280]` (1)

### `mupdf-wasm.wasm.wasm-function[fz_flatten_stroke_path]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_stroke_path_aux]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[do_flatten_stroke]` (2)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:59` | Self: 0.0% (0us) | Total: 0.0% (62.1ms) | Samples: 0

**Calls:**
- `bound join` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:178` | Self: 0.0% (0us) | Total: 0.2% (647.9ms) | Samples: 0

**Calls:**
- `log` (1)

### `mupdf-wasm.wasm.wasm-function[fz_add_line]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_stroke_lineto_aux]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_insert_gel]` (1)

### `.wasm-function[158]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `.wasm-function[12382]` (1)

**Calls:**
- `.wasm-function[12363]` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/node_modules/openai/internal/qs/utils.mjs:14` | Self: 0.0% (0us) | Total: 0.0% (981us) | Samples: 0

**Calls:**
- `(anonymous)` (1)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:604` | Self: 0.0% (0us) | Total: 0.6% (1.85s) | Samples: 0

**Called by:**
- `async cropTableRows` (1)

**Calls:**
- `Sharp` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:61` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `writeFileSync` (1)

### `.wasm-function[11526]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (134.0ms) | Samples: 0

**Called by:**
- `.wasm-function[4377]` (120)

**Calls:**
- `.wasm-function[635]` (120)

### `node:util`
`node:util:2` | Self: 0.0% (0us) | Total: 0.0% (36.0ms) | Samples: 0

**Calls:**
- `anonymous` (5)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:976` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Called by:**
- `async (anonymous)` (2)

**Calls:**
- `get value` (2)

### `mupdf-wasm.wasm.wasm-function[fz_moveto]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_m]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[push_cmd]` (1)

### `createStandardStreams`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (39.1ms) | Samples: 0

**Called by:**
- `init` (2)

**Calls:**
- `symlink` (1)
- `open` (1)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:226` | Self: 0.0% (0us) | Total: 0.1% (330.9ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (274)

**Calls:**
- `(anonymous)` (274)

### `_tryToStartAnother`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:105` | Self: 0.0% (0us) | Total: 0.1% (493.7ms) | Samples: 0

**Called by:**
- `(anonymous)` (28)

**Calls:**
- `async run` (28)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:693` | Self: 0.0% (0us) | Total: 0.3% (999.5ms) | Samples: 0

**Calls:**
- `_pipeline` (10)
- `toFile` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1126` | Self: 0.0% (0us) | Total: 0.0% (992us) | Samples: 0

**Calls:**
- `close` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/imageSchema.ts:10` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `bound min` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_run_Do_image]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (14.5ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_Do]` (10)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_image]` (10)

### `RunTree`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:340` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `runWithConfig` (1)

**Calls:**
- `assign` (1)

### `.wasm-function[16092]`
`[native code]` | Self: 0.0% (0us) | Total: 0.7% (2.00s) | Samples: 0

**Called by:**
- `(unknown)` (1833)

**Calls:**
- `.wasm-function[5841]` (1833)

### `.wasm-function[6673]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (125.8ms) | Samples: 0

**Called by:**
- `(unknown)` (1)

**Calls:**
- `.wasm-function[6662]` (1)

### `_separateRunnableConfigFromCallOptionsCompat`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:72` | Self: 0.0% (0us) | Total: 0.0% (1.8ms) | Samples: 0

**Called by:**
- `async generate` (1)

**Calls:**
- `_separateRunnableConfigFromCallOptions` (1)

### `attachNode`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:643` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `_compileResolved` (1)

**Calls:**
- `ChannelWrite` (1)

### `bound call`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.2ms) | Samples: 0

**Called by:**
- `internal:util/inspect` (1)
- `makeSafe` (1)
- `(anonymous)` (1)

**Calls:**
- `filter` (1)
- `call` (1)
- `forEach` (1)

### `ZodString`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` | Self: 0.0% (0us) | Total: 0.0% (25.9ms) | Samples: 0

**Called by:**
- `_string` (3)

**Calls:**
- `init` (3)

### `node:fs/promises`
`node:fs/promises:2` | Self: 0.0% (0us) | Total: 0.0% (9.2ms) | Samples: 0

**Called by:**
- `anonymous` (7)

**Calls:**
- `anonymous` (7)

### `getInstance`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js:16` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `getRunnableConfig` (1)

**Calls:**
- `getGlobalAsyncLocalStorageInstance` (1)

### `async writeFile`
`node:fs/promises:187` | Self: 0.0% (0us) | Total: 0.0% (56.7ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `newResolvedPromise` (1)

### `async detectAndCropBbs`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:121` | Self: 0.0% (0us) | Total: 0.0% (5.8ms) | Samples: 0

**Called by:**
- `async detectAndCropBbs` (5)

**Calls:**
- `async invoke` (5)

### `_prepareNextTasks`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:247` | Self: 0.0% (0us) | Total: 0.0% (6.2ms) | Samples: 0

**Called by:**
- `async tick` (6)

**Calls:**
- `_prepareSingleTask` (2)
- `_prepareSingleTask` (1)
- `_prepareSingleTask` (1)
- `_prepareSingleTask` (1)
- `_prepareSingleTask` (1)

### `async generate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:427` | Self: 0.0% (0us) | Total: 0.1% (340.4ms) | Samples: 0

**Called by:**
- `async generatePrompt` (47)

**Calls:**
- `async _generateUncached` (45)
- `async generate` (2)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:6` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `v35`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/v35.js:20` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `_prepareSingleTask` (1)

**Calls:**
- `sha1` (1)

### `get`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:809` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `interopZodTransformInputSchemaImpl` (1)

**Calls:**
- `defineProperty` (1)

### `async interopParseAsync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:91` | Self: 0.0% (0us) | Total: 0.9% (2.54s) | Samples: 0

**Called by:**
- `async interopParseAsync` (9)

**Calls:**
- `async (anonymous)` (9)

### `_compileResolved`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:484` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `compile` (1)

**Calls:**
- `attachNode` (1)

### `mupdf-wasm.wasm.wasm-function[fz_fill_image]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (14.5ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_image_imp]` (10)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_fill_image]` (10)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:801` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `init` (1)

### `async func`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:31` | Self: 0.0% (0us) | Total: 0.0% (4.7ms) | Samples: 0

**Called by:**
- `async (anonymous)` (4)

**Calls:**
- `async _write` (4)

### `createStream`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `open` (1)

**Calls:**
- `FSStream` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:84` | Self: 0.0% (0us) | Total: 0.1% (341.4ms) | Samples: 0

**Called by:**
- `async invoke` (48)

**Calls:**
- `async generatePrompt` (48)

### `toWireType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (143.7ms) | Samples: 0

**Called by:**
- `bound toWireType` (129)

**Calls:**
- `toHandle` (129)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/extractSchema.ts:31` | Self: 0.0% (0us) | Total: 0.0% (998us) | Samples: 0

**Calls:**
- `_coercedNumber` (1)

### `async _runLoop`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1208` | Self: 0.0% (0us) | Total: 0.0% (3.1ms) | Samples: 0

**Calls:**
- `async tick` (3)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:1730` | Self: 0.0% (0us) | Total: 4.6% (12.81s) | Samples: 0

**Called by:**
- `Promise` (37)

**Calls:**
- `(anonymous)` (37)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:396` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (1)

**Calls:**
- `delete` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:108` | Self: 0.0% (0us) | Total: 0.0% (23.5ms) | Samples: 0

**Calls:**
- `bound min` (3)

### `mupdf-wasm.wasm.wasm-function[fz_walk_path]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[do_flatten_stroke]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[stroke_lineto]` (1)
- `mupdf-wasm.wasm.wasm-function[stroke_curveto]` (1)

### `mupdf-wasm.wasm.wasm-function[fz_available_1592]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (15.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_read]` (10)
- `mupdf-wasm.wasm.wasm-function[next_concat]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[next_flated]` (6)
- `mupdf-wasm.wasm.wasm-function[next_dctd]` (5)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/sax-js/sax.js:1197` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `initializeSax` (1)

### `mupdf-wasm.wasm.wasm-function[fz_malloc_default]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (26.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[do_scavenging_malloc]` (18)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[emscripten_builtin_malloc]` (18)

### `.wasm-function[581]`
`[native code]` | Self: 0.0% (0us) | Total: 0.5% (1.63s) | Samples: 0

**Called by:**
- `.wasm-function[934]` (1498)

**Calls:**
- `.wasm-function[1037]` (1498)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:127` | Self: 0.0% (0us) | Total: 0.7% (2.00s) | Samples: 0

**Called by:**
- `async cropBbsRows` (1833)

**Calls:**
- `adaptiveThreshold` (1833)

### `async cropperBatch`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:202` | Self: 0.0% (0us) | Total: 0.0% (1.8ms) | Samples: 0

**Called by:**
- `(module)` (2)

**Calls:**
- `async mapBatched` (2)

### `registerType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (5.2ms) | Samples: 0

**Called by:**
- `onComplete` (3)
- `__embind_register_enum` (2)

**Calls:**
- `sharedRegisterType` (5)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:11` | Self: 0.0% (0us) | Total: 0.4% (1.26s) | Samples: 0

**Called by:**
- `(anonymous)` (329)

**Calls:**
- `(anonymous)` (329)

### `internal:stream`
`internal:stream:2` | Self: 0.0% (0us) | Total: 0.0% (10.2ms) | Samples: 0

**Called by:**
- `anonymous` (9)

**Calls:**
- `anonymous` (9)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:303` | Self: 0.0% (0us) | Total: 1.2% (3.46s) | Samples: 0

**Called by:**
- `Promise` (1)

**Calls:**
- `patchConfig` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:4` | Self: 0.0% (0us) | Total: 0.0% (965us) | Samples: 0

**Calls:**
- `bound require` (1)

### `v7`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/uuid/src/v7.js:8` | Self: 0.0% (0us) | Total: 0.1% (407.2ms) | Samples: 0

**Called by:**
- `RunTree` (3)

**Calls:**
- `v7Bytes` (1)
- `rng` (1)
- `v7Bytes` (1)

### `ZodNumberFormat`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` | Self: 0.0% (0us) | Total: 0.0% (19.6ms) | Samples: 0

**Called by:**
- `_int` (2)

**Calls:**
- `init` (2)

### `.wasm-function[11624]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (198.9ms) | Samples: 0

**Called by:**
- `.wasm-function[674]` (180)

**Calls:**
- `.wasm-function[390]` (180)

### `.wasm-function[491]`
`[native code]` | Self: 0.0% (0us) | Total: 0.1% (301.7ms) | Samples: 0

**Called by:**
- `(unknown)` (249)

**Calls:**
- `.wasm-function[10948]` (249)

### `.wasm-function[5841]`
`[native code]` | Self: 0.0% (0us) | Total: 0.7% (2.00s) | Samples: 0

**Called by:**
- `.wasm-function[16092]` (1833)

**Calls:**
- `.wasm-function[934]` (1833)

### `.wasm-function[4554]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.7ms) | Samples: 0

**Called by:**
- `wasm-stub` (3)

**Calls:**
- `wasm-stub` (3)

### `.wasm-function[221]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `.wasm-function[1086]` (1)

**Calls:**
- `.wasm-function[12335]` (1)

### `async stream`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:926` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `async stream` (1)

**Calls:**
- `getRunnableConfig` (1)

### `objectProcessor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:299` | Self: 0.0% (0us) | Total: 0.0% (922us) | Samples: 0

**Called by:**
- `process` (1)

**Calls:**
- `from` (1)

### `.wasm-function[4341]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (975us) | Samples: 0

**Called by:**
- `(unknown)` (1)

**Calls:**
- `.wasm-function[10719]` (1)

### `attachCropImages`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:107` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `async extract` (2)

**Calls:**
- `log` (2)

### `addNode`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:359` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `isRunnable` (1)

### `mupdf-wasm.wasm.wasm-function[fz_open_buffer]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_open_document_with_buffer]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_new_stream]` (1)

### `mupdf-wasm.wasm.wasm-function[fz_draw_fill_image]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (14.5ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_fill_image]` (10)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_get_pixmap_from_image]` (5)
- `mupdf-wasm.wasm.wasm-function[fz_transform_pixmap]` (4)
- `mupdf-wasm.wasm.wasm-function[fz_paint_image]` (1)

### `mupdf-wasm.wasm.wasm-function[fz_md5_buffer]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_new_icc_colorspace]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_md5_update]` (2)

### `__embind_register_smart_ptr`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `wasm-stub` (2)

**Calls:**
- `whenDependentTypesAreResolved` (1)
- `embind__requireFunction` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/read.js:28` | Self: 0.0% (0us) | Total: 0.0% (4.3ms) | Samples: 0

**Calls:**
- `RunnablePassthrough` (1)

### `_pipeline`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:1729` | Self: 0.0% (0us) | Total: 4.6% (12.81s) | Samples: 0

**Called by:**
- `async cropAndZoom` (10)
- `async cropTableRows` (10)
- `async cropAndZoom` (7)
- `async cropTableRows` (6)
- `async compressImage` (5)
- `async cropTableRows` (1)

**Calls:**
- `Promise` (39)

### `_outputWrites`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:412` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `putWrites` (1)

**Calls:**
- `gatherIteratorSync` (1)

### `mkdir`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Called by:**
- `createSpecialDirectories` (1)
- `createDefaultDirectories` (1)

**Calls:**
- `mknod` (2)

### `.wasm-function[505]`
`[native code]` | Self: 0.0% (0us) | Total: 30.0% (82.08s) | Samples: 0

**Called by:**
- `(unknown)` (72429)

**Calls:**
- `.wasm-function[10385]` (72429)

### `extractDefs`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:106` | Self: 0.0% (0us) | Total: 0.0% (1.6ms) | Samples: 0

**Called by:**
- `toJSONSchema` (1)

**Calls:**
- `get` (1)

### `bitwise_or`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (70.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (52)

**Calls:**
- `wasm-stub` (52)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:108` | Self: 0.0% (0us) | Total: 0.0% (38.9ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `(anonymous)` (1)
- `(anonymous)` (1)

### `FSNode`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `createNode` (1)

**Calls:**
- `(anonymous)` (1)

### `detectVerticalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:561` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async cropTableRows` (1)

**Calls:**
- `(anonymous)` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/parse.js:18` | Self: 0.0% (0us) | Total: 0.9% (2.55s) | Samples: 0

**Called by:**
- `async interopParseAsync` (9)
- `async interopSafeParseAsync` (4)

**Calls:**
- `async (anonymous)` (13)

### `getName`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:33` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `addConditionalEdges` (1)

**Calls:**
- `lc_name` (1)

### `ZodArray`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` | Self: 0.0% (0us) | Total: 0.0% (884us) | Samples: 0

**Called by:**
- `_array` (1)

**Calls:**
- `init` (1)

### `ZodEnum`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `_enum` (1)

**Calls:**
- `init` (1)

### `async convertPdfToImages`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:56` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `(module)` (2)

**Calls:**
- `loadPage` (1)
- `loadPage` (1)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:195` | Self: 0.0% (0us) | Total: 0.0% (70.2ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (52)

**Calls:**
- `(anonymous)` (52)

### `async gatherIterator`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:48` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `generatorResume` (1)

### `mupdf-wasm.wasm.wasm-function[load_cid_font]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (9.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_type0_font]` (9)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_font_descriptor]` (6)
- `mupdf-wasm.wasm.wasm-function[pdf_load_to_unicode]` (3)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/utility.mjs:27` | Self: 0.0% (0us) | Total: 0.0% (5.8ms) | Samples: 0

**Calls:**
- `(anonymous)` (5)

### `attachCropImages`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:109` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `async extract` (2)

**Calls:**
- `warn` (2)

### `boundingRect`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `detectTables` (1)

**Calls:**
- `bound fromWireType` (1)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:691` | Self: 0.0% (0us) | Total: 0.0% (111.8ms) | Samples: 0

**Calls:**
- `extract` (1)
- `extract` (1)

### `composite`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/composite.mjs:136` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async createDebugImage` (1)

**Calls:**
- `map` (1)

### `RunTree`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:349` | Self: 0.0% (0us) | Total: 0.1% (407.2ms) | Samples: 0

**Called by:**
- `runWithConfig` (3)

**Calls:**
- `v7` (3)

### `.wasm-function[1293]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (41.5ms) | Samples: 0

**Called by:**
- `wasm-stub` (36)

**Calls:**
- `.wasm-function[11668]` (36)

### `mupdf-wasm.wasm.wasm-function[pdf_is_ocg_hidden]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_is_ocg_hidden_imp]` (1)

### `doRun`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (119.6ms) | Samples: 0

**Called by:**
- `run` (76)

**Calls:**
- `initRuntime` (76)

### `async _validateResult`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:147` | Self: 0.0% (0us) | Total: 0.0% (4.4ms) | Samples: 0

**Calls:**
- `async _validateResult` (4)

### `detectHorizontalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:477` | Self: 0.0% (0us) | Total: 0.0% (975us) | Samples: 0

**Called by:**
- `async cropTableRows` (1)

**Calls:**
- `(anonymous)` (1)

### `optional`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1110` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `bound optional` (2)

**Calls:**
- `ZodOptional` (2)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:131` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `async withRetry` (1)

### `mupdf-wasm.wasm.wasm-function[glyph_from_ft_bitmap]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_render_ft_glyph]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_new_glyph_from_8bpp_data]` (1)

### `mupdf-wasm.wasm.wasm-function[end_metatext]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pop_marked_content]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_dict_get]` (1)

### `tool`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:286` | Self: 0.0% (0us) | Total: 0.0% (21.4ms) | Samples: 0

**Called by:**
- `async cropper` (2)
- `async cropper` (1)

**Calls:**
- `DynamicStructuredTool` (3)

### `init`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (39.1ms) | Samples: 0

**Called by:**
- `initRuntime` (2)

**Calls:**
- `createStandardStreams` (2)

### `mupdf-wasm.wasm.wasm-function[pdf_tos_make_trm]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_char]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_bound_glyph]` (1)

### `ZodNullable`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `nullable` (1)
- `clone` (1)

**Calls:**
- `init` (2)

### `mupdf-wasm.wasm.wasm-function[fz_write_pixmap_as_png]`
`[native code]` | Self: 0.0% (0us) | Total: 0.5% (1.54s) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[png_from_pixmap]` (1378)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_write_band]` (1378)

### `AIMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/ai.js:84` | Self: 0.0% (0us) | Total: 0.7% (2.01s) | Samples: 0

**Called by:**
- `convertCompletionsMessageToBaseMessage` (1)

**Calls:**
- `BaseMessage` (1)

### `internal:streams/readable`
`internal:streams/readable:2` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `mupdf-wasm.wasm.wasm-function[fz_malloc]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (27.5ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[png_write_band]` (13)
- `mupdf-wasm.wasm.wasm-function[fz_new_pixmap_with_data]` (5)
- `mupdf-wasm.wasm.wasm-function[pdf_new_name]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[do_scavenging_malloc]` (19)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/sharp.mjs:61` | Self: 0.0% (0us) | Total: 0.0% (5.4ms) | Samples: 0

**Calls:**
- `bound require` (5)

### `createToken`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/internal/re.js:50` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)
- `(anonymous)` (1)

**Calls:**
- `RegExp` (2)

### `ZodObject`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` | Self: 0.0% (0us) | Total: 0.0% (17.8ms) | Samples: 0

**Called by:**
- `clone` (6)
- `object` (2)

**Calls:**
- `init` (8)

### `withConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:57` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async cropper` (1)

**Calls:**
- `RunnableBinding` (1)

### `async cropBbsRowsNode`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:81` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `async cropBbsRowsNode` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:1785` | Self: 0.0% (0us) | Total: 0.0% (931us) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `init` (1)

### `ensureConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js:76` | Self: 0.0% (0us) | Total: 0.0% (48.9ms) | Samples: 0

**Called by:**
- `async invoke` (1)

**Calls:**
- `getRunnableConfig` (1)

### `morphologyEx`
`[native code]` | Self: 0.0% (0us) | Total: 30.0% (82.15s) | Samples: 0

**Called by:**
- `(anonymous)` (72489)

**Calls:**
- `(unknown)` (72489)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:18` | Self: 0.0% (0us) | Total: 0.0% (921us) | Samples: 0

**Calls:**
- `object` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/detect-libc.js:6` | Self: 0.0% (0us) | Total: 0.0% (36.7ms) | Samples: 0

**Calls:**
- `bound require` (2)

### `gatherIteratorSync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:53` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `_outputWrites` (1)
- `_outputWrites` (1)

**Calls:**
- `generatorResume` (2)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:29` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `bound min`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (58.0ms) | Samples: 0

**Called by:**
- `async cropper` (3)
- `async cropper` (2)
- `(module)` (1)

**Calls:**
- `bound check` (4)
- `min` (2)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/sharp.mjs:18` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Calls:**
- `runtimePlatformArch` (1)

### `finalize`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:355` | Self: 0.0% (0us) | Total: 0.0% (4.8ms) | Samples: 0

**Called by:**
- `toJsonSchema` (4)

**Calls:**
- `parse` (3)
- `stringify` (1)

### `ensureConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js:90` | Self: 0.0% (0us) | Total: 1.2% (3.46s) | Samples: 0

**Called by:**
- `async invoke` (1)
- `_separateRunnableConfigFromCallOptions` (1)
- `patchConfig` (1)

**Calls:**
- `reduce` (2)
- `entries` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/stringify.js:8` | Self: 0.0% (0us) | Total: 0.0% (120.8ms) | Samples: 0

**Calls:**
- `push` (1)

## Files

| Self% | Self | File |
|------:|-----:|------|
| 51.5% | 140.95s | `[native code]` |
| 10.1% | 27.80s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/base.js` |
| 5.8% | 15.88s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js` |
| 4.3% | 11.99s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs` |
| 4.0% | 11.03s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 3.6% | 10.05s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js` |
| 3.2% | 8.88s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` |
| 2.5% | 6.98s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts` |
| 1.6% | 4.38s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js` |
| 1.5% | 4.32s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js` |
| 1.4% | 4.07s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/utils/output.js` |
| 1.4% | 4.03s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/ai.js` |
| 1.4% | 3.88s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/base.js` |
| 1.3% | 3.57s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js` |
| 1.2% | 3.46s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js` |
| 0.9% | 2.51s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js` |
| 0.7% | 1.99s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/converters/messages.js` |
| 0.6% | 1.81s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` |
| 0.4% | 1.35s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/eventemitter3/index.js` |
| 0.3% | 873.3ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js` |
| 0.2% | 749.4ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts` |
| 0.2% | 555.2ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js` |
| 0.1% | 494.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/priority-queue.js` |
| 0.0% | 213.8ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs` |
| 0.0% | 202.6ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/uuid/src/v7.js` |
| 0.0% | 136.5ms | `internal:streams/duplex` |
| 0.0% | 122.4ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs` |
| 0.0% | 96.9ms | `node:async_hooks` |
| 0.0% | 78.9ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js` |
| 0.0% | 78.6ms | `internal:streams/writable` |
| 0.0% | 73.4ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js` |
| 0.0% | 62.2ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts` |
| 0.0% | 61.0ms | `node:worker_threads` |
| 0.0% | 57.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts` |
| 0.0% | 56.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/function_calling.js` |
| 0.0% | 51.6ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js` |
| 0.0% | 49.3ms | `internal:streams/readable` |
| 0.0% | 42.6ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js` |
| 0.0% | 39.4ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/utils/misc.js` |
| 0.0% | 37.5ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs` |
| 0.0% | 31.9ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js` |
| 0.0% | 23.5ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/regexes.js` |
| 0.0% | 8.8ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 8.2ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js` |
| 0.0% | 6.4ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/registries.js` |
| 0.0% | 5.2ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/checks.js` |
| 0.0% | 4.7ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs` |
| 0.0% | 4.3ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/passthrough.js` |
| 0.0% | 4.3ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` |
| 0.0% | 3.6ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/list.js` |
| 0.0% | 3.6ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js` |
| 0.0% | 3.6ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts` |
| 0.0% | 3.3ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js` |
| 0.0% | 3.3ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/channels/base.js` |
| 0.0% | 3.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js` |
| 0.0% | 2.7ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js` |
| 0.0% | 2.3ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js` |
| 0.0% | 2.3ms | `node:fs` |
| 0.0% | 2.2ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/io.js` |
| 0.0% | 2.2ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/stream.js` |
| 0.0% | 2.2ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v3/types.js` |
| 0.0% | 2.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js` |
| 0.0% | 2.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js` |
| 0.0% | 1.9ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/serializable.js` |
| 0.0% | 1.9ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/node_modules/openai/resources/beta/threads/runs/runs.mjs` |
| 0.0% | 1.8ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/is.mjs` |
| 0.0% | 1.8ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/json_schema.js` |
| 0.0% | 1.7ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js` |
| 0.0% | 1.4ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/utils.js` |
| 0.0% | 1.3ms | `internal:streams/destroy` |
| 0.0% | 1.2ms | `internal:shared` |
| 0.0% | 1.2ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/singletons/traceable.js` |
| 0.0% | 1.2ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/utils/config.js` |
| 0.0% | 1.2ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/channels/binop.js` |
| 0.0% | 1.2ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/uuid/src/rng.js` |
| 0.0% | 1.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/debug.js` |
| 0.0% | 1.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/sha1.js` |
| 0.0% | 1.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/read.js` |
| 0.0% | 1.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/globals.js` |
| 0.0% | 1.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/retry.js` |
| 0.0% | 1.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/composite.mjs` |
| 0.0% | 1.1ms | `node:fs/promises` |
| 0.0% | 1.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/internal/re.js` |
| 0.0% | 1.0ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js` |
| 0.0% | 1.0ms | `node:events` |
| 0.0% | 1.0ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/sax-js/sax.js` |
| 0.0% | 999us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js` |
| 0.0% | 995us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js` |
| 0.0% | 989us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js` |
| 0.0% | 986us | `node:path` |
| 0.0% | 983us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/stream/convert.js` |
| 0.0% | 981us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/node_modules/openai/internal/qs/utils.mjs` |
| 0.0% | 977us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts` |
| 0.0% | 975us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/v1.js` |
| 0.0% | 944us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/types.js` |
| 0.0% | 940us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/hash.js` |
| 0.0% | 918us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/xxhash/xxhash.js` |
| 0.0% | 910us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js` |
| 0.0% | 907us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js` |
| 0.0% | 891us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/ranges/intersects.js` |
