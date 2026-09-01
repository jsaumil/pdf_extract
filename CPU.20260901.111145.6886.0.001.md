# CPU Profile

| Duration | Samples | Interval | Functions |
|----------|---------|----------|----------|
| 426.27s | 88024 | 1.0ms | 1229 |

**Top 10:** `(anonymous)` 8.7%, `parse` 8.6%, `reduce` 6.7%, `.wasm-function[8869]` 4.9%, `.wasm-function[8885]` 4.3%, `(anonymous)` 4.3%, `.wasm-function[8901]` 4.1%, `.wasm-function[8918]` 3.2%, `Uint8Array` 2.9%, `async (anonymous)` 2.1%

## Hot Functions (Self Time)

| Self% | Self | Total% | Total | Function | Location |
|------:|-----:|-------:|------:|----------|----------|
| 8.7% | 37.20s | 12.2% | 52.18s | `(anonymous)` | `[native code]` |
| 8.6% | 36.66s | 8.6% | 36.66s | `parse` | `[native code]` |
| 6.7% | 28.84s | 6.7% | 28.86s | `reduce` | `[native code]` |
| 4.9% | 21.13s | 4.9% | 21.13s | `.wasm-function[8869]` | `[native code]` |
| 4.3% | 18.70s | 4.3% | 18.70s | `.wasm-function[8885]` | `[native code]` |
| 4.3% | 18.61s | 6.0% | 25.99s | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:852` |
| 4.1% | 17.66s | 4.1% | 17.66s | `.wasm-function[8901]` | `[native code]` |
| 3.2% | 14.02s | 3.2% | 14.02s | `.wasm-function[8918]` | `[native code]` |
| 2.9% | 12.62s | 2.9% | 12.62s | `Uint8Array` | `[native code]` |
| 2.1% | 9.16s | 2.1% | 9.16s | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:333` |
| 1.5% | 6.58s | 1.5% | 6.58s | `Serializable` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/serializable.js:82` |
| 1.5% | 6.48s | 1.5% | 6.48s | `getOwnPropertyDescriptors` | `[native code]` |
| 1.5% | 6.44s | 1.5% | 6.44s | `isRunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js` |
| 1.4% | 6.29s | 1.4% | 6.29s | `tool` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js` |
| 1.4% | 6.17s | 2.8% | 12.05s | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:426` |
| 1.3% | 5.92s | 1.3% | 5.92s | `getMicrosecondPrecisionDatestring` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:31` |
| 1.3% | 5.86s | 1.3% | 5.86s | `_createInputDescriptor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:63` |
| 1.3% | 5.75s | 1.3% | 5.75s | `isArray` | `[native code]` |
| 1.2% | 5.41s | 1.3% | 5.68s | `async compressImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:25` |
| 1.1% | 5.06s | 1.1% | 5.06s | `async call` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:248` |
| 1.1% | 4.84s | 1.1% | 4.84s | `getOwnPropertyDescriptor` | `[native code]` |
| 1.1% | 4.82s | 1.1% | 4.82s | `parseToolCall` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js` |
| 1.1% | 4.81s | 1.1% | 4.81s | `stringify` | `[native code]` |
| 1.0% | 4.58s | 1.0% | 4.58s | `ensureConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js` |
| 1.0% | 4.57s | 1.0% | 4.57s | `toJSONSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:564` |
| 1.0% | 4.57s | 18.4% | 78.50s | `(unknown)` | `[native code]` |
| 1.0% | 4.40s | 1.0% | 4.40s | `stripNonAlphanumeric` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js` |
| 0.9% | 4.07s | 0.9% | 4.07s | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/parse.js:19` |
| 0.9% | 3.96s | 0.9% | 3.96s | `BaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/base.js` |
| 0.9% | 3.93s | 1.6% | 7.01s | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:232` |
| 0.9% | 3.89s | 0.9% | 3.89s | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:33` |
| 0.8% | 3.82s | 0.8% | 3.82s | `runChecks` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:36` |
| 0.8% | 3.81s | 3.9% | 16.79s | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:316` |
| 0.8% | 3.73s | 0.8% | 3.73s | `defineProperty` | `[native code]` |
| 0.8% | 3.70s | 0.8% | 3.70s | `cloneObject` | `[native code]` |
| 0.8% | 3.60s | 0.8% | 3.60s | `getRunnableConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js:19` |
| 0.8% | 3.55s | 0.8% | 3.55s | `runChecks` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:48` |
| 0.8% | 3.54s | 21.1% | 90.12s | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.8% | 3.54s | 3.7% | 15.94s | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:83` |
| 0.8% | 3.43s | 0.8% | 3.43s | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:62` |
| 0.7% | 3.34s | 15.4% | 65.78s | `init` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:22` |
| 0.7% | 3.31s | 0.7% | 3.31s | `parseToolCall` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:26` |
| 0.7% | 3.31s | 0.7% | 3.31s | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:206` |
| 0.6% | 2.94s | 0.6% | 2.94s | `toISOString` | `[native code]` |
| 0.6% | 2.72s | 0.6% | 2.72s | `AsyncCaller` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js:184` |
| 0.5% | 2.52s | 6.6% | 28.51s | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/parse.js:20` |
| 0.5% | 2.25s | 0.5% | 2.25s | `init` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:18` |
| 0.5% | 2.22s | 0.5% | 2.22s | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/checks.js:107` |
| 0.5% | 2.21s | 0.5% | 2.21s | `init` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:21` |
| 0.4% | 2.06s | 0.4% | 2.06s | `log` | `[native code]` |
| 0.4% | 2.02s | 0.4% | 2.02s | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:103` |
| 0.4% | 2.01s | 0.4% | 2.01s | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:743` |
| 0.4% | 1.92s | 0.4% | 1.92s | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` |
| 0.4% | 1.90s | 0.4% | 1.90s | `Error` | `[native code]` |
| 0.4% | 1.87s | 0.4% | 1.87s | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:809` |
| 0.4% | 1.85s | 0.8% | 3.77s | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:141` |
| 0.4% | 1.85s | 0.4% | 1.85s | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:226` |
| 0.4% | 1.84s | 0.4% | 1.84s | `EventEmitter` | `node:events:19` |
| 0.4% | 1.75s | 0.4% | 1.75s | `assign` | `[native code]` |
| 0.3% | 1.63s | 0.4% | 1.70s | `anonymous` | `[native code]` |
| 0.3% | 1.49s | 0.5% | 2.43s | `emval_returnValue` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.3% | 1.41s | 1.3% | 5.94s | `decodeMemoryView` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.3% | 1.34s | 0.4% | 1.80s | `bound toWireType` | `[native code]` |
| 0.3% | 1.33s | 0.3% | 1.33s | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts` |
| 0.2% | 1.07s | 0.2% | 1.19s | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.2% | 1.05s | 0.2% | 1.05s | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:163` |
| 0.2% | 1.04s | 0.2% | 1.04s | `WritableState` | `internal:streams/writable:135` |
| 0.2% | 928.8ms | 0.2% | 928.8ms | `_resolvePromises` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:56` |
| 0.2% | 870.2ms | 0.2% | 870.2ms | `json` | `[native code]` |
| 0.1% | 797.2ms | 0.1% | 797.2ms | `get buffer` | `[native code]` |
| 0.1% | 746.1ms | 0.1% | 746.1ms | `.wasm-function[9388]` | `[native code]` |
| 0.1% | 676.8ms | 0.1% | 676.8ms | `.wasm-function[2953]` | `[native code]` |
| 0.1% | 651.4ms | 1.4% | 6.20s | `Mat.ucharPtr` | `[native code]` |
| 0.1% | 647.0ms | 0.1% | 647.0ms | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:269` |
| 0.1% | 618.3ms | 0.1% | 618.3ms | `shallowClone` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:186` |
| 0.1% | 533.2ms | 0.2% | 884.2ms | `bound nonConstNoSmartPtrRawPointerToWireType` | `[native code]` |
| 0.1% | 512.2ms | 2.1% | 9.20s | `.wasm-function[6148]` | `[native code]` |
| 0.1% | 429.7ms | 2.2% | 9.63s | `.wasm-function[6137]` | `[native code]` |
| 0.0% | 409.9ms | 0.1% | 771.0ms | `bound fromWireType` | `[native code]` |
| 0.0% | 402.1ms | 0.2% | 1.03s | `mupdf-wasm.wasm.wasm-function[deflate_slow]` | `[native code]` |
| 0.0% | 392.3ms | 0.0% | 392.3ms | `toWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 373.9ms | 0.0% | 373.9ms | `fromWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 350.9ms | 0.0% | 350.9ms | `nonConstNoSmartPtrRawPointerToWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 339.5ms | 0.0% | 404.7ms | `mupdf-wasm.wasm.wasm-function[fill_window]` | `[native code]` |
| 0.0% | 325.1ms | 2.4% | 10.49s | `wasm-stub` | `[native code]` |
| 0.0% | 276.3ms | 0.0% | 276.3ms | `toString` | `[native code]` |
| 0.0% | 241.9ms | 0.0% | 241.9ms | `findWasmBinary` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 209.1ms | 0.2% | 1.25s | `mupdf-wasm.wasm.wasm-function[png_write_band]` | `[native code]` |
| 0.0% | 204.4ms | 0.0% | 204.4ms | `mupdf-wasm.wasm.wasm-function[longest_match]` | `[native code]` |
| 0.0% | 204.4ms | 0.0% | 204.4ms | `set` | `[native code]` |
| 0.0% | 190.9ms | 0.0% | 190.9ms | `.wasm-function[12303]` | `[native code]` |
| 0.0% | 187.2ms | 0.0% | 187.2ms | `mkdir` | `[native code]` |
| 0.0% | 183.4ms | 0.0% | 183.4ms | `.wasm-function[9672]` | `[native code]` |
| 0.0% | 155.2ms | 0.0% | 155.2ms | `resolve` | `[native code]` |
| 0.0% | 144.8ms | 0.0% | 144.8ms | `copyDataProperties` | `[native code]` |
| 0.0% | 130.7ms | 17.5% | 74.72s | `Promise` | `[native code]` |
| 0.0% | 129.7ms | 0.0% | 129.7ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 123.1ms | 0.0% | 123.1ms | `.wasm-function[12009]` | `[native code]` |
| 0.0% | 118.8ms | 0.0% | 202.5ms | `.wasm-function[1543]` | `[native code]` |
| 0.0% | 113.6ms | 0.0% | 113.6ms | `constructor Mat` | `[native code]` |
| 0.0% | 101.1ms | 0.0% | 101.1ms | `.wasm-function[8596]` | `[native code]` |
| 0.0% | 98.3ms | 0.0% | 98.3ms | `writeFile` | `[native code]` |
| 0.0% | 94.2ms | 0.0% | 94.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:171` |
| 0.0% | 90.7ms | 17.1% | 73.03s | `.wasm-function[2968]` | `[native code]` |
| 0.0% | 90.0ms | 1.2% | 5.24s | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:308` |
| 0.0% | 84.0ms | 0.0% | 84.0ms | `invocationParams` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:244` |
| 0.0% | 83.5ms | 0.0% | 83.5ms | `.wasm-function[549]` | `[native code]` |
| 0.0% | 80.4ms | 0.0% | 80.4ms | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/stringify.js:8` |
| 0.0% | 78.6ms | 0.0% | 78.6ms | `grow` | `[native code]` |
| 0.0% | 78.2ms | 0.0% | 78.2ms | `isInteropZodSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:31` |
| 0.0% | 77.4ms | 0.0% | 77.4ms | `invocationParams` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:217` |
| 0.0% | 69.9ms | 0.0% | 69.9ms | `fetch` | `[native code]` |
| 0.0% | 65.1ms | 0.0% | 65.1ms | `mupdf-wasm.wasm.wasm-function[adler32]` | `[native code]` |
| 0.0% | 63.8ms | 0.0% | 63.8ms | `ReadableState` | `internal:streams/readable:40` |
| 0.0% | 62.8ms | 0.0% | 62.8ms | `toHandle` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 59.5ms | 0.0% | 59.5ms | `convertLangChainToolCallToOpenAI` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js` |
| 0.0% | 59.4ms | 0.0% | 59.4ms | `async pRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js:111` |
| 0.0% | 59.4ms | 0.0% | 59.4ms | `async call` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:134` |
| 0.0% | 59.0ms | 0.0% | 59.0ms | `Stream` | `internal:streams/legacy` |
| 0.0% | 58.3ms | 0.0% | 58.3ms | `_configureSync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/callbacks/manager.js:528` |
| 0.0% | 57.3ms | 0.0% | 110.9ms | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:83` |
| 0.0% | 52.0ms | 0.0% | 53.6ms | `_convertInputToPromptValue` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:225` |
| 0.0% | 52.0ms | 0.0% | 110.7ms | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:691` |
| 0.0% | 51.7ms | 0.4% | 1.79s | `.wasm-function[934]` | `[native code]` |
| 0.0% | 51.0ms | 0.0% | 51.0ms | `async pRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js:99` |
| 0.0% | 48.9ms | 0.0% | 48.9ms | `getContextVariable` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/context.js` |
| 0.0% | 47.6ms | 0.0% | 150.0ms | `.wasm-function[510]` | `[native code]` |
| 0.0% | 46.0ms | 0.0% | 46.0ms | `instantiate` | `[native code]` |
| 0.0% | 43.5ms | 0.0% | 43.5ms | `binaryDecode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 41.3ms | 0.0% | 41.3ms | `bind` | `[native code]` |
| 0.0% | 41.2ms | 0.0% | 41.2ms | `.wasm-function[12680]` | `[native code]` |
| 0.0% | 40.9ms | 0.0% | 40.9ms | `mupdf-wasm.wasm.wasm-function[paint_span_with_color_3_solid]` | `[native code]` |
| 0.0% | 39.2ms | 2.1% | 8.98s | `detectVerticalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:575` |
| 0.0% | 39.0ms | 0.0% | 39.0ms | `ensureLangGraphConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/utils/config.js` |
| 0.0% | 38.3ms | 0.0% | 38.3ms | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:229` |
| 0.0% | 37.3ms | 0.3% | 1.60s | `require` | `[native code]` |
| 0.0% | 35.6ms | 0.0% | 35.6ms | `test` | `[native code]` |
| 0.0% | 34.6ms | 0.0% | 68.3ms | `forEach` | `[native code]` |
| 0.0% | 32.6ms | 0.0% | 32.6ms | `extract` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:482` |
| 0.0% | 28.0ms | 0.0% | 28.0ms | `node:worker_threads` | `node:worker_threads:33` |
| 0.0% | 27.0ms | 0.0% | 27.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:489` |
| 0.0% | 25.1ms | 0.0% | 25.1ms | `get` | `[native code]` |
| 0.0% | 25.1ms | 1.0% | 4.40s | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:92` |
| 0.0% | 23.7ms | 0.0% | 23.7ms | `.wasm-function[11510]` | `[native code]` |
| 0.0% | 22.4ms | 0.0% | 22.4ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/checks.js:104` |
| 0.0% | 22.1ms | 0.0% | 22.1ms | `Int8Array` | `[native code]` |
| 0.0% | 21.7ms | 0.0% | 21.7ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:74` |
| 0.0% | 20.9ms | 0.0% | 20.9ms | `mupdf-wasm.wasm.wasm-function[compress_block]` | `[native code]` |
| 0.0% | 20.4ms | 0.0% | 61.3ms | `mupdf-wasm.wasm.wasm-function[fz_convert_gel]` | `[native code]` |
| 0.0% | 19.7ms | 0.0% | 19.7ms | `.wasm-function[2992]` | `[native code]` |
| 0.0% | 19.5ms | 0.0% | 19.5ms | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:37` |
| 0.0% | 18.7ms | 0.0% | 18.7ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:49` |
| 0.0% | 17.0ms | 0.0% | 17.0ms | `Function` | `[native code]` |
| 0.0% | 16.5ms | 0.0% | 16.5ms | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:70` |
| 0.0% | 16.4ms | 0.0% | 16.4ms | `Duplex` | `internal:streams/duplex:6` |
| 0.0% | 15.8ms | 0.2% | 1.16s | `Duplex` | `internal:streams/duplex:15` |
| 0.0% | 15.5ms | 1.9% | 8.30s | `int` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:530` |
| 0.0% | 14.8ms | 0.0% | 14.8ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:17` |
| 0.0% | 13.7ms | 0.0% | 13.7ms | `init` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:8` |
| 0.0% | 12.8ms | 0.0% | 12.8ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:76` |
| 0.0% | 12.6ms | 0.0% | 12.6ms | `extractDefs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:206` |
| 0.0% | 12.4ms | 0.0% | 12.4ms | `mupdf-wasm.wasm.wasm-function[draw_glyph]` | `[native code]` |
| 0.0% | 12.1ms | 1.4% | 6.17s | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:488` |
| 0.0% | 11.9ms | 0.0% | 11.9ms | `fromWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 11.4ms | 0.0% | 11.4ms | `warn` | `[native code]` |
| 0.0% | 11.0ms | 0.0% | 11.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:67` |
| 0.0% | 10.8ms | 0.0% | 10.8ms | `validateThis` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 9.9ms | 0.0% | 9.9ms | `enqueue` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/priority-queue.js:11` |
| 0.0% | 9.7ms | 0.0% | 58.6ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 9.5ms | 0.0% | 9.5ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:870` |
| 0.0% | 9.4ms | 0.0% | 9.4ms | `getVerbosity` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:117` |
| 0.0% | 9.2ms | 0.0% | 26.3ms | `createJsInvoker` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 9.1ms | 0.0% | 9.1ms | `init` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js` |
| 0.0% | 9.1ms | 0.0% | 9.1ms | `string` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/regexes.js:94` |
| 0.0% | 8.5ms | 0.0% | 8.5ms | `_createInputDescriptor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:68` |
| 0.0% | 8.4ms | 0.0% | 8.4ms | `getFullYear` | `[native code]` |
| 0.0% | 7.2ms | 0.0% | 7.2ms | `updateMemoryViews` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 5.8ms | 0.0% | 142.3ms | `mupdf-wasm.wasm.wasm-function[pdf_process_stream]` | `[native code]` |
| 0.0% | 5.5ms | 0.0% | 5.5ms | `whenDependentTypesAreResolved` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 5.4ms | 0.0% | 5.4ms | `mupdf-wasm.wasm.wasm-function[inflate]` | `[native code]` |
| 0.0% | 4.7ms | 0.0% | 68.9ms | `whenDependentTypesAreResolved` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 4.5ms | 0.0% | 33.9ms | `mupdf-wasm.wasm.wasm-function[pdf_flush_text_imp]` | `[native code]` |
| 0.0% | 4.3ms | 2.0% | 8.67s | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:500` |
| 0.0% | 4.1ms | 0.0% | 4.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 4.0ms | 0.0% | 4.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:202` |
| 0.0% | 3.8ms | 0.0% | 3.8ms | `dlopen` | `[native code]` |
| 0.0% | 3.2ms | 0.0% | 3.2ms | `create` | `[native code]` |
| 0.0% | 3.2ms | 0.0% | 11.0ms | `mupdf-wasm.wasm.wasm-function[fz_render_glyph]` | `[native code]` |
| 0.0% | 3.0ms | 0.0% | 3.0ms | `_createInputDescriptor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs` |
| 0.0% | 3.0ms | 0.0% | 3.0ms | `mupdf-wasm.wasm.wasm-function[crc32_z]` | `[native code]` |
| 0.0% | 2.9ms | 0.1% | 494.2ms | `detectVerticalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:574` |
| 0.0% | 2.4ms | 0.0% | 2.4ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:73` |
| 0.0% | 2.4ms | 0.0% | 36.1ms | `craftInvokerFunction` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.4ms | 1.9% | 8.38s | `__emval_invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.3ms | 0.0% | 2.3ms | `mupdf-wasm.wasm.wasm-function[jpeg_idct_islow]` | `[native code]` |
| 0.0% | 2.3ms | 0.0% | 26.8ms | `mupdf-wasm.wasm.wasm-function[fz_draw_fill_text]` | `[native code]` |
| 0.0% | 2.3ms | 0.0% | 2.3ms | `async next` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/import_map.js:71` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `mupdf-wasm.wasm.wasm-function[scale_row_to_temp3]` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `emit` | `node:events:86` |
| 0.0% | 2.2ms | 0.0% | 3.5ms | `mupdf-wasm.wasm.wasm-function[fz_stroke_lineto_aux]` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `mupdf-wasm.wasm.wasm-function[build_tree]` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `mupdf-wasm.wasm.wasm-function[fz_new_glyph_from_8bpp_data]` | `[native code]` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `mupdf-wasm.wasm.wasm-function[body]` | `[native code]` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `push` | `[native code]` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `png` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `hasOwnProperty` | `[native code]` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `__exportAll` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/_virtual/_rolldown/runtime.js:5` |
| 0.0% | 2.1ms | 0.0% | 3.0ms | `binaryDecode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.0ms | 0.1% | 696.8ms | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:499` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `en_default` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/locales/en.js` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `mupdf-wasm.wasm.wasm-function[jpeg_idct_16x16]` | `[native code]` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `attachCropImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:97` |
| 0.0% | 2.0ms | 0.0% | 3.2ms | `next` | `[native code]` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `AsciiToString` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `mupdf-wasm.wasm.wasm-function[ycc_rgb_convert]` | `[native code]` |
| 0.0% | 1.9ms | 0.0% | 134.3ms | `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` | `[native code]` |
| 0.0% | 1.9ms | 0.0% | 1.9ms | `node:crypto` | `node:crypto:2` |
| 0.0% | 1.9ms | 2.6% | 11.35s | `convertToOpenAITool` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/function_calling.js:45` |
| 0.0% | 1.9ms | 0.0% | 1.9ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `buffer` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/is.mjs:40` |
| 0.0% | 1.5ms | 0.0% | 3.6ms | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/registries.js:35` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `symlink` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `ChatPromptValue` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/prompt_values.js:50` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `getLangSmithEnvVarsMetadata` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/env.js` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `internal:streams/writable` | `internal:streams/writable:14` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `mupdf-wasm.wasm.wasm-function[fz_drop_font]` | `[native code]` |
| 0.0% | 1.4ms | 0.0% | 2.4ms | `mupdf-wasm.wasm.wasm-function[pdf_remap_cmap_range]` | `[native code]` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `extractDefs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:178` |
| 0.0% | 1.4ms | 0.0% | 20.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:58` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `.wasm-function[2608]` | `[native code]` |
| 0.0% | 1.4ms | 7.6% | 32.59s | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/parse.js:18` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `node:fs` | `node:fs:230` |
| 0.0% | 1.3ms | 0.0% | 11.9ms | `mupdf-wasm.wasm.wasm-function[pdf_load_font]` | `[native code]` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `async _mergeConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `AsyncCaller` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js:180` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `internal:util/inspect` | `internal:util/inspect:9` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `SafeSet` | `internal:primordials` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `mupdf-wasm.wasm.wasm-function[make_weights]` | `[native code]` |
| 0.0% | 1.3ms | 0.0% | 24.4ms | `mupdf-wasm.wasm.wasm-function[_tr_flush_block]` | `[native code]` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `BaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/base.js:141` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:143` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `mupdf-wasm.wasm.wasm-function[pdf_load_cmap]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `D` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `toJSONSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js` |
| 0.0% | 1.2ms | 0.0% | 2.4ms | `mupdf-wasm.wasm.wasm-function[gray_raster_render]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `.wasm-function[59]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `_installLazyMethods` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/imageSchema.ts:12` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `route` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `isServerConfig` | `bun:main` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `mupdf-wasm.wasm.wasm-function[fz_insert_gel]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `mupdf-wasm.wasm.wasm-function[pdf_font_cid_to_gid]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/tiktoken.js:10` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `async _streamIterator` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1133` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `process` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:43` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `async pRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `DeltaValue` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/state/values/delta.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `FSNode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `mupdf-wasm.wasm.wasm-function[fz_push_try]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `finalize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js` |
| 0.0% | 1.2ms | 0.0% | 2.4ms | `makeClassHandle` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `createStandardJSONSchemaMethod` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:1495` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `getEnv` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/env.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `__copyProps` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs` |
| 0.0% | 1.2ms | 0.0% | 4.6ms | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:496` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `guarded` | `internal:shared` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `async initialize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `mupdf-wasm.wasm.wasm-function[fz_read_byte]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `createToken` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/internal/re.js:47` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `k` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:73` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `checkpointNamespaceFromNs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `createNode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `mergeConfigs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js:23` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async _validateInput` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `asyncFunctionDrive` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mergeExtractionResults` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/mergeExtraction.ts` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js` |
| 0.0% | 1.1ms | 16.7% | 71.52s | `.wasm-function[1308]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `process` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js` |
| 0.0% | 1.1ms | 0.0% | 156.4ms | `bound resolve` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `readSync` | `node:fs` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `.wasm-function[1182]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `usesDestructorStack` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `finalize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:216` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `internal:shared` | `internal:shared:172` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async cropBbsRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `exposePublicSymbol` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:487` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `flattenRef` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:226` |
| 0.0% | 1.1ms | 0.0% | 3.4ms | `embind__requireFunction` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `node:timers/promises` | `node:timers/promises:2` |
| 0.0% | 1.1ms | 0.2% | 930.0ms | `_tryToStartAnother` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:94` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `__embind_register_void` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `_v1ToV6` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/v1ToV6.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:337` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[fz_init_process_color_converter]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 14.6ms | `async extract` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:154` |
| 0.0% | 1.1ms | 0.0% | 3.4ms | `mupdf-wasm.wasm.wasm-function[pdf_lex]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mapInput` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/io.js` |
| 0.0% | 1.1ms | 0.0% | 84.2ms | `mupdf-wasm.wasm.wasm-function[sbrk]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async parsePartialResult` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js` |
| 0.0% | 1.1ms | 0.0% | 5.2ms | `__embind_register_enum_value` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `setPrototypeDirectOrThrow` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 5.8ms | `mupdf-wasm.wasm.wasm-function[fz_transform_pixmap]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `Serializable` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/serializable.js:83` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `Duplex` | `internal:streams/duplex` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `.wasm-function[1203]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `getLsParamsWithDefaults` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:199` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `removeEventListener` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[gray_render_line]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[scale_row_from_temp]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/registries.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[begin_softmask]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[fz_keep_buffer]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `_filterInvocationParamsForTracing` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `__emval_invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.1ms | 3.2% | 13.84s | `bound check` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `wrapConversion` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1140` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `.wasm-function[1310]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:972` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:474` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `assertValidHeaders` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/node_modules/openai/internal/qs/utils.mjs` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `f` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/sha1.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `split` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `isRunnableToolLike` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/types.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `handlePropertyResult` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js` |
| 0.0% | 1.0ms | 1.5% | 6.58s | `BaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/base.js:125` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:425` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async _first` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `validateThis` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `CompiledGraph` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `.wasm-function[3269]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1205` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `_tryToStartAnother` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:100` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `isRunnableInterface` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/utils.js:3` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[fz_strtof]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[fz_drop_storable]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `RegisteredClass` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.0ms | 0.0% | 5.2ms | `sharedRegisterType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `node:child_process` | `node:child_process:198` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[fz_free]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `$constructor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js` |
| 0.0% | 1.0ms | 0.1% | 670.0ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async call` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `invocationParams` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:230` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `Buffer` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/registries.js:33` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `uuid7FromTime` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/_uuid.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `initializeSax` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/sax-js/sax.js:265` |
| 0.0% | 1.0ms | 2.6% | 11.43s | `invocationParams` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:216` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1211` |
| 0.0% | 1.0ms | 0.0% | 2.0ms | `.wasm-function[2996]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `_coercedNumber` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `callWithRetries` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `Duplex` | `internal:streams/duplex:4` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `default` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `.wasm-function[50]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:10` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `_putCheckpoint` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async normalizeCoords` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/normalizeCoords.ts` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `defineLazy` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:61` |
| 0.0% | 1.0ms | 0.4% | 1.79s | `adaptiveThreshold` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[pdf_get_xref_entry_aux]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js` |
| 0.0% | 1.0ms | 2.6% | 11.35s | `convertToOpenAIFunction` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/function_calling.js:27` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `normalizeDef` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:753` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `_compileResolved` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `_getChannelsFromSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` |
| 0.0% | 1.0ms | 0.0% | 5.3ms | `__embind_register_class_constructor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `_prepareSingleTask` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `$ZodCheckGreaterThan` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:43` |
| 0.0% | 1.0ms | 0.0% | 2.9ms | `mupdf-wasm.wasm.wasm-function[FT_Load_Glyph]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[do_recognize_document_stream_and_dir_content]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:36` |
| 0.0% | 1.0ms | 0.0% | 3.2ms | `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[pdf_lookup_cmap_full]` | `[native code]` |
| 0.0% | 999us | 1.8% | 7.85s | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:1730` |
| 0.0% | 997us | 0.0% | 997us | `_outputWrites` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 993us | 0.0% | 993us | `addEdge` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` |
| 0.0% | 992us | 0.0% | 992us | `ZodType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v3/types.js:257` |
| 0.0% | 989us | 0.0% | 297.8ms | `async pRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js:86` |
| 0.0% | 989us | 0.0% | 989us | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js` |
| 0.0% | 989us | 0.0% | 989us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/io.js:114` |
| 0.0% | 987us | 0.0% | 987us | `XXH3_len_17to128_128b` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/hash.js:220` |
| 0.0% | 984us | 0.0% | 5.2ms | `.wasm-function[585]` | `[native code]` |
| 0.0% | 983us | 0.0% | 983us | `mupdf-wasm.wasm.wasm-function[tt_face_load_cpal]` | `[native code]` |
| 0.0% | 982us | 0.0% | 982us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js` |
| 0.0% | 976us | 0.0% | 976us | `__embind_register_value_object_field` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 976us | 0.0% | 976us | `nonConstNoSmartPtrRawPointerToWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 976us | 0.0% | 976us | `getEnvironmentVariable` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/env.js:154` |
| 0.0% | 970us | 0.0% | 970us | `createNamedFunction` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 968us | 0.0% | 968us | `async _write` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js` |
| 0.0% | 967us | 0.0% | 967us | `_configureSync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/callbacks/manager.js` |
| 0.0% | 967us | 0.4% | 1.87s | `interopZodTransformInputSchemaImpl` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:405` |
| 0.0% | 956us | 0.0% | 1.9ms | `readFileSync` | `[native code]` |
| 0.0% | 956us | 0.0% | 956us | `composite` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/composite.mjs` |
| 0.0% | 955us | 0.0% | 955us | `getFunctionName` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 952us | 0.0% | 952us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js` |
| 0.0% | 944us | 0.0% | 14.0ms | `.wasm-function[2969]` | `[native code]` |
| 0.0% | 944us | 0.0% | 944us | `toJsonSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/json_schema.js` |
| 0.0% | 942us | 0.0% | 942us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:707` |
| 0.0% | 940us | 0.0% | 940us | `e` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` |
| 0.0% | 937us | 0.0% | 937us | `mupdf-wasm.wasm.wasm-function[pdf_read_xref]` | `[native code]` |
| 0.0% | 935us | 0.0% | 935us | `handleDefaultResult` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js` |
| 0.0% | 935us | 0.0% | 935us | `async _` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` |
| 0.0% | 935us | 0.0% | 935us | `Serializable` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/serializable.js` |
| 0.0% | 927us | 0.0% | 927us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js` |
| 0.0% | 925us | 0.0% | 925us | `nullable` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1134` |
| 0.0% | 924us | 0.0% | 924us | `charCodeAt` | `[native code]` |
| 0.0% | 923us | 0.0% | 2.8ms | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:66` |
| 0.0% | 919us | 0.0% | 919us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts` |
| 0.0% | 916us | 0.0% | 916us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:1` |
| 0.0% | 914us | 0.0% | 914us | `async generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` |
| 0.0% | 914us | 0.0% | 914us | `messageToOpenAIRole` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/utils/misc.js` |
| 0.0% | 912us | 0.0% | 912us | `mupdf-wasm.wasm.wasm-function[pdf_dict_find]` | `[native code]` |
| 0.0% | 907us | 0.0% | 907us | `mupdf-wasm.wasm.wasm-function[fz_hash_remove]` | `[native code]` |
| 0.0% | 902us | 0.0% | 902us | `mupdf-wasm.wasm.wasm-function[tt_glyph_load]` | `[native code]` |
| 0.0% | 901us | 0.0% | 901us | `HumanMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/human.js` |
| 0.0% | 897us | 0.0% | 897us | `async convertPdfToImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts` |
| 0.0% | 896us | 0.0% | 896us | `consume` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/channels/base.js` |
| 0.0% | 890us | 0.0% | 890us | `finish` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/channels/base.js` |
| 0.0% | 889us | 0.0% | 889us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1107` |
| 0.0% | 887us | 0.0% | 887us | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:508` |
| 0.0% | 881us | 0.0% | 881us | `async _getUpdates` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` |
| 0.0% | 877us | 0.0% | 6.2ms | `bound decodeMemoryView` | `[native code]` |
| 0.0% | 877us | 0.0% | 877us | `getEnumValues` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js` |
| 0.0% | 874us | 0.0% | 66.8ms | `mupdf-wasm.wasm.wasm-function[fz_stroke_path]` | `[native code]` |
| 0.0% | 872us | 0.0% | 872us | `defineLazy` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:62` |
| 0.0% | 868us | 0.0% | 868us | `.wasm-function[397]` | `[native code]` |
| 0.0% | 866us | 0.0% | 866us | `entries` | `[native code]` |
| 0.0% | 866us | 0.0% | 866us | `extractToDef` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:161` |
| 0.0% | 864us | 0.0% | 864us | `getBinarySync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 858us | 0.0% | 858us | `RegExp` | `[native code]` |

## Call Tree (Total Time)

| Total% | Total | Self% | Self | Function | Location |
|-------:|------:|------:|-----:|----------|----------|
| 21.1% | 90.12s | 0.8% | 3.54s | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 18.4% | 78.50s | 1.0% | 4.57s | `(unknown)` | `[native code]` |
| 17.5% | 74.72s | 0.0% | 130.7ms | `Promise` | `[native code]` |
| 17.1% | 73.04s | 0.0% | 0us | `.wasm-function[9540]` | `[native code]` |
| 17.1% | 73.03s | 0.0% | 90.7ms | `.wasm-function[2968]` | `[native code]` |
| 16.8% | 71.61s | 0.0% | 0us | `.wasm-function[557]` | `[native code]` |
| 16.7% | 71.56s | 0.0% | 0us | `morphologyEx` | `[native code]` |
| 16.7% | 71.52s | 0.0% | 0us | `.wasm-function[10385]` | `[native code]` |
| 16.7% | 71.52s | 0.0% | 1.1ms | `.wasm-function[1308]` | `[native code]` |
| 16.7% | 71.52s | 0.0% | 0us | `.wasm-function[505]` | `[native code]` |
| 15.4% | 65.78s | 0.7% | 3.34s | `init` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:22` |
| 13.3% | 57.07s | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:150` |
| 12.5% | 53.40s | 0.0% | 0us | `async _generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:284` |
| 12.5% | 53.40s | 0.0% | 0us | `convertOpenRouterResponseToBaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/converters/messages.js:33` |
| 12.2% | 52.18s | 8.7% | 37.20s | `(anonymous)` | `[native code]` |
| 9.6% | 41.13s | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:91` |
| 9.3% | 39.82s | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:631` |
| 9.0% | 38.75s | 0.0% | 0us | `convertCompletionsMessageToBaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:166` |
| 9.0% | 38.39s | 0.0% | 0us | `runWithConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js:29` |
| 9.0% | 38.39s | 0.0% | 0us | `async func` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:291` |
| 9.0% | 38.39s | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:304` |
| 9.0% | 38.39s | 0.0% | 0us | `async call` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:133` |
| 8.6% | 36.66s | 8.6% | 36.66s | `parse` | `[native code]` |
| 8.0% | 34.42s | 0.0% | 0us | `map` | `[native code]` |
| 7.6% | 32.59s | 0.0% | 1.4ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/parse.js:18` |
| 7.6% | 32.59s | 0.0% | 0us | `async call` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:104` |
| 7.6% | 32.59s | 0.0% | 0us | `async call` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:249` |
| 7.6% | 32.59s | 0.0% | 0us | `async interopParseAsync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:91` |
| 7.6% | 32.59s | 0.0% | 0us | `async interopParseAsync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:90` |
| 7.6% | 32.59s | 0.0% | 0us | `async call` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:108` |
| 7.5% | 32.14s | 0.0% | 0us | `async compressImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:9` |
| 7.5% | 32.14s | 0.0% | 0us | `async compressImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:12` |
| 7.5% | 32.14s | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:49` |
| 7.5% | 32.14s | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:35` |
| 7.5% | 32.14s | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:39` |
| 7.2% | 30.74s | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:630` |
| 7.1% | 30.61s | 0.0% | 0us | `parseToolCall` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:17` |
| 7.1% | 30.27s | 0.0% | 0us | `detectVerticalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:566` |
| 6.7% | 28.86s | 6.7% | 28.84s | `reduce` | `[native code]` |
| 6.6% | 28.51s | 0.5% | 2.52s | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/parse.js:20` |
| 6.5% | 28.03s | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:686` |
| 6.5% | 28.03s | 0.0% | 0us | `metadata` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:685` |
| 6.0% | 25.99s | 4.3% | 18.61s | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:852` |
| 5.7% | 24.65s | 0.0% | 0us | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:49` |
| 5.2% | 22.32s | 0.0% | 0us | `async cropBbsRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:840` |
| 5.0% | 21.61s | 0.0% | 0us | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:230` |
| 4.9% | 21.28s | 0.0% | 0us | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:482` |
| 4.9% | 21.13s | 4.9% | 21.13s | `.wasm-function[8869]` | `[native code]` |
| 4.3% | 18.70s | 4.3% | 18.70s | `.wasm-function[8885]` | `[native code]` |
| 4.1% | 17.66s | 4.1% | 17.66s | `.wasm-function[8901]` | `[native code]` |
| 3.9% | 16.79s | 0.8% | 3.81s | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:316` |
| 3.8% | 16.57s | 0.0% | 0us | `bound int` | `[native code]` |
| 3.7% | 15.94s | 0.8% | 3.54s | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:83` |
| 3.5% | 14.92s | 0.0% | 0us | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:349` |
| 3.2% | 14.02s | 3.2% | 14.02s | `.wasm-function[8918]` | `[native code]` |
| 3.2% | 13.84s | 0.0% | 1.1ms | `bound check` | `[native code]` |
| 3.0% | 12.98s | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:316` |
| 3.0% | 12.82s | 0.0% | 0us | `convertCompletionsMessageToBaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:183` |
| 2.9% | 12.72s | 0.0% | 0us | `clone` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:262` |
| 2.9% | 12.64s | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:102` |
| 2.9% | 12.62s | 2.9% | 12.62s | `Uint8Array` | `[native code]` |
| 2.9% | 12.60s | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:49` |
| 2.9% | 12.60s | 0.0% | 0us | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:11` |
| 2.9% | 12.60s | 0.0% | 0us | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:17` |
| 2.8% | 12.05s | 1.4% | 6.17s | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:426` |
| 2.8% | 11.95s | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:82` |
| 2.7% | 11.84s | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:84` |
| 2.7% | 11.84s | 0.0% | 0us | `async generatePrompt` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:484` |
| 2.7% | 11.83s | 0.0% | 0us | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:205` |
| 2.7% | 11.83s | 0.0% | 0us | `async generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:427` |
| 2.6% | 11.43s | 0.0% | 0us | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:212` |
| 2.6% | 11.43s | 0.0% | 0us | `getLsParamsWithDefaults` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:200` |
| 2.6% | 11.43s | 0.0% | 0us | `getLsParams` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:252` |
| 2.6% | 11.43s | 0.0% | 1.0ms | `invocationParams` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:216` |
| 2.6% | 11.35s | 0.0% | 1.9ms | `convertToOpenAITool` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/function_calling.js:45` |
| 2.6% | 11.35s | 0.0% | 1.0ms | `convertToOpenAIFunction` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/function_calling.js:27` |
| 2.4% | 10.54s | 0.0% | 0us | `AIMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/ai.js:84` |
| 2.4% | 10.49s | 0.0% | 325.1ms | `wasm-stub` | `[native code]` |
| 2.4% | 10.38s | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:155` |
| 2.3% | 10.09s | 0.0% | 0us | `toJsonSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/json_schema.js:48` |
| 2.2% | 9.63s | 0.1% | 429.7ms | `.wasm-function[6137]` | `[native code]` |
| 2.2% | 9.61s | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:182` |
| 2.1% | 9.20s | 0.1% | 512.2ms | `.wasm-function[6148]` | `[native code]` |
| 2.1% | 9.16s | 2.1% | 9.16s | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:333` |
| 2.1% | 9.11s | 0.0% | 0us | `ZodObject` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` |
| 2.1% | 8.98s | 0.0% | 39.2ms | `detectVerticalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:575` |
| 2.0% | 8.87s | 0.0% | 0us | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:345` |
| 2.0% | 8.87s | 0.0% | 0us | `v7` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/uuid/src/v7.js:8` |
| 2.0% | 8.87s | 0.0% | 0us | `v7Bytes` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/uuid/src/v7.js:46` |
| 2.0% | 8.67s | 0.0% | 4.3ms | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:500` |
| 1.9% | 8.38s | 0.0% | 2.4ms | `__emval_invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 1.9% | 8.30s | 0.0% | 15.5ms | `int` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:530` |
| 1.9% | 8.29s | 0.0% | 0us | `_int` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:324` |
| 1.9% | 8.29s | 0.0% | 0us | `ZodNumberFormat` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` |
| 1.9% | 8.23s | 0.0% | 0us | `check` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:95` |
| 1.8% | 7.98s | 0.0% | 0us | `_pipeline` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:1729` |
| 1.8% | 7.93s | 0.0% | 0us | `ZodNumber` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` |
| 1.8% | 7.87s | 0.0% | 0us | `bound clone` | `[native code]` |
| 1.8% | 7.85s | 0.0% | 999us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:1730` |
| 1.6% | 7.01s | 0.9% | 3.93s | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:232` |
| 1.5% | 6.69s | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:508` |
| 1.5% | 6.58s | 0.0% | 1.0ms | `BaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/base.js:125` |
| 1.5% | 6.58s | 1.5% | 6.58s | `Serializable` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/serializable.js:82` |
| 1.5% | 6.48s | 0.0% | 0us | `mergeDefs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:98` |
| 1.5% | 6.48s | 1.5% | 6.48s | `getOwnPropertyDescriptors` | `[native code]` |
| 1.5% | 6.44s | 0.0% | 0us | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:325` |
| 1.5% | 6.44s | 1.5% | 6.44s | `isRunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js` |
| 1.4% | 6.30s | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:44` |
| 1.4% | 6.29s | 1.4% | 6.29s | `tool` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js` |
| 1.4% | 6.20s | 0.1% | 651.4ms | `Mat.ucharPtr` | `[native code]` |
| 1.4% | 6.17s | 0.0% | 12.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:488` |
| 1.4% | 6.04s | 0.0% | 0us | `uuid7FromTime` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/_uuid.js:25` |
| 1.3% | 5.94s | 0.3% | 1.41s | `decodeMemoryView` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 1.3% | 5.92s | 1.3% | 5.92s | `getMicrosecondPrecisionDatestring` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:31` |
| 1.3% | 5.86s | 1.3% | 5.86s | `_createInputDescriptor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:63` |
| 1.3% | 5.75s | 1.3% | 5.75s | `isArray` | `[native code]` |
| 1.3% | 5.68s | 1.2% | 5.41s | `async compressImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:25` |
| 1.3% | 5.64s | 0.0% | 0us | `clone` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:106` |
| 1.3% | 5.61s | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:507` |
| 1.3% | 5.58s | 0.0% | 0us | `bound min` | `[native code]` |
| 1.3% | 5.58s | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:108` |
| 1.2% | 5.34s | 0.0% | 0us | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:46` |
| 1.2% | 5.24s | 0.0% | 90.0ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:308` |
| 1.2% | 5.24s | 0.0% | 0us | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:308` |
| 1.2% | 5.15s | 0.0% | 0us | `async _generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:266` |
| 1.2% | 5.15s | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:309` |
| 1.1% | 5.06s | 1.1% | 5.06s | `async call` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:248` |
| 1.1% | 4.85s | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:737` |
| 1.1% | 4.84s | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:868` |
| 1.1% | 4.84s | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:803` |
| 1.1% | 4.84s | 1.1% | 4.84s | `getOwnPropertyDescriptor` | `[native code]` |
| 1.1% | 4.84s | 0.0% | 0us | `interopZodObjectStrict` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:312` |
| 1.1% | 4.82s | 1.1% | 4.82s | `parseToolCall` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js` |
| 1.1% | 4.81s | 1.1% | 4.81s | `stringify` | `[native code]` |
| 1.1% | 4.76s | 0.0% | 0us | `flatIntoArrayWithCallback` | `[native code]` |
| 1.1% | 4.76s | 0.0% | 0us | `async _generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:269` |
| 1.1% | 4.76s | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:587` |
| 1.1% | 4.70s | 0.0% | 0us | `convertLangChainToolCallToOpenAI` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:43` |
| 1.0% | 4.58s | 1.0% | 4.58s | `ensureConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js` |
| 1.0% | 4.57s | 1.0% | 4.57s | `toJSONSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:564` |
| 1.0% | 4.40s | 0.0% | 25.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:92` |
| 1.0% | 4.40s | 1.0% | 4.40s | `stripNonAlphanumeric` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js` |
| 1.0% | 4.40s | 0.0% | 0us | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:362` |
| 1.0% | 4.40s | 0.0% | 0us | `convertToDottedOrderFormat` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:37` |
| 1.0% | 4.38s | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:571` |
| 1.0% | 4.38s | 0.0% | 0us | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js` |
| 1.0% | 4.26s | 0.0% | 0us | `object` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:791` |
| 1.0% | 4.26s | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:99` |
| 0.9% | 4.21s | 0.0% | 0us | `ensureConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js:90` |
| 0.9% | 4.07s | 0.9% | 4.07s | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/parse.js:19` |
| 0.9% | 3.96s | 0.9% | 3.96s | `BaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/base.js` |
| 0.9% | 3.93s | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:107` |
| 0.9% | 3.93s | 0.0% | 0us | `async compressImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:20` |
| 0.9% | 3.91s | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:570` |
| 0.9% | 3.91s | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:519` |
| 0.9% | 3.89s | 0.9% | 3.89s | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:33` |
| 0.8% | 3.82s | 0.8% | 3.82s | `runChecks` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:36` |
| 0.8% | 3.77s | 0.4% | 1.85s | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:141` |
| 0.8% | 3.76s | 0.0% | 0us | `async compressImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:23` |
| 0.8% | 3.73s | 0.8% | 3.73s | `defineProperty` | `[native code]` |
| 0.8% | 3.73s | 0.0% | 0us | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:215` |
| 0.8% | 3.70s | 0.8% | 3.70s | `cloneObject` | `[native code]` |
| 0.8% | 3.60s | 0.8% | 3.60s | `getRunnableConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js:19` |
| 0.8% | 3.60s | 0.0% | 0us | `ensureConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js:76` |
| 0.8% | 3.55s | 0.8% | 3.55s | `runChecks` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:48` |
| 0.8% | 3.47s | 0.0% | 0us | `parseCallbackConfigArg` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/callbacks/manager.js:75` |
| 0.8% | 3.47s | 0.0% | 0us | `async call` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:247` |
| 0.8% | 3.43s | 0.8% | 3.43s | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:62` |
| 0.7% | 3.31s | 0.7% | 3.31s | `parseToolCall` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:26` |
| 0.7% | 3.31s | 0.7% | 3.31s | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:206` |
| 0.6% | 2.94s | 0.6% | 2.94s | `toISOString` | `[native code]` |
| 0.6% | 2.94s | 0.0% | 0us | `getMicrosecondPrecisionDatestring` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:32` |
| 0.6% | 2.74s | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:118` |
| 0.6% | 2.74s | 0.0% | 0us | `ChatOpenRouter` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:154` |
| 0.6% | 2.74s | 0.0% | 0us | `BaseChatModel` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:64` |
| 0.6% | 2.73s | 0.0% | 0us | `BaseLanguageModel` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:186` |
| 0.6% | 2.72s | 0.6% | 2.72s | `AsyncCaller` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js:184` |
| 0.5% | 2.43s | 0.3% | 1.49s | `emval_returnValue` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.5% | 2.28s | 0.0% | 0us | `AIMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/ai.js:31` |
| 0.5% | 2.28s | 0.0% | 0us | `bound describe` | `[native code]` |
| 0.5% | 2.28s | 0.0% | 0us | `describe` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:167` |
| 0.5% | 2.25s | 0.5% | 2.25s | `init` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:18` |
| 0.5% | 2.25s | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:57` |
| 0.5% | 2.25s | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:109` |
| 0.5% | 2.24s | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:21` |
| 0.5% | 2.24s | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:738` |
| 0.5% | 2.22s | 0.5% | 2.22s | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/checks.js:107` |
| 0.5% | 2.21s | 0.5% | 2.21s | `init` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:21` |
| 0.4% | 2.06s | 0.4% | 2.06s | `log` | `[native code]` |
| 0.4% | 2.02s | 0.4% | 2.02s | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:103` |
| 0.4% | 2.01s | 0.4% | 2.01s | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:743` |
| 0.4% | 1.92s | 0.4% | 1.92s | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` |
| 0.4% | 1.90s | 0.4% | 1.90s | `Error` | `[native code]` |
| 0.4% | 1.90s | 0.0% | 0us | `toBuffer` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:159` |
| 0.4% | 1.90s | 0.0% | 0us | `Duplex` | `internal:streams/duplex:37` |
| 0.4% | 1.89s | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:324` |
| 0.4% | 1.87s | 0.0% | 0us | `toJsonSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/json_schema.js:47` |
| 0.4% | 1.87s | 0.0% | 967us | `interopZodTransformInputSchemaImpl` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:405` |
| 0.4% | 1.87s | 0.4% | 1.87s | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:809` |
| 0.4% | 1.85s | 0.4% | 1.85s | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:226` |
| 0.4% | 1.84s | 0.4% | 1.84s | `EventEmitter` | `node:events:19` |
| 0.4% | 1.84s | 0.0% | 0us | `Stream` | `internal:streams/legacy:4` |
| 0.4% | 1.81s | 0.0% | 0us | `convertCompletionsMessageToBaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:179` |
| 0.4% | 1.80s | 0.3% | 1.34s | `bound toWireType` | `[native code]` |
| 0.4% | 1.79s | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:127` |
| 0.4% | 1.79s | 0.0% | 1.0ms | `adaptiveThreshold` | `[native code]` |
| 0.4% | 1.79s | 0.0% | 0us | `.wasm-function[5841]` | `[native code]` |
| 0.4% | 1.79s | 0.0% | 0us | `.wasm-function[16092]` | `[native code]` |
| 0.4% | 1.79s | 0.0% | 51.7ms | `.wasm-function[934]` | `[native code]` |
| 0.4% | 1.75s | 0.4% | 1.75s | `assign` | `[native code]` |
| 0.4% | 1.75s | 0.0% | 0us | `mergeDefs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:99` |
| 0.4% | 1.70s | 0.3% | 1.63s | `anonymous` | `[native code]` |
| 0.3% | 1.61s | 0.0% | 0us | `bound require` | `[native code]` |
| 0.3% | 1.60s | 0.0% | 37.3ms | `require` | `[native code]` |
| 0.3% | 1.53s | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:4` |
| 0.3% | 1.48s | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:35` |
| 0.3% | 1.42s | 0.0% | 0us | `.wasm-function[1037]` | `[native code]` |
| 0.3% | 1.42s | 0.0% | 0us | `.wasm-function[581]` | `[native code]` |
| 0.3% | 1.33s | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:596` |
| 0.3% | 1.33s | 0.3% | 1.33s | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts` |
| 0.3% | 1.33s | 0.0% | 0us | `async cropBbsRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:869` |
| 0.2% | 1.25s | 0.0% | 0us | `async convertPdfToImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:76` |
| 0.2% | 1.25s | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_new_buffer_from_pixmap_as_png]` | `[native code]` |
| 0.2% | 1.25s | 0.0% | 0us | `asPNG` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:1045` |
| 0.2% | 1.25s | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[wasm_new_buffer_from_pixmap_as_png]` | `[native code]` |
| 0.2% | 1.25s | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[png_from_pixmap]` | `[native code]` |
| 0.2% | 1.25s | 0.0% | 209.1ms | `mupdf-wasm.wasm.wasm-function[png_write_band]` | `[native code]` |
| 0.2% | 1.25s | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_write_band]` | `[native code]` |
| 0.2% | 1.25s | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_write_pixmap_as_png]` | `[native code]` |
| 0.2% | 1.24s | 0.0% | 0us | `process` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:60` |
| 0.2% | 1.19s | 0.2% | 1.07s | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.2% | 1.16s | 0.0% | 15.8ms | `Duplex` | `internal:streams/duplex:15` |
| 0.2% | 1.05s | 0.2% | 1.05s | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:163` |
| 0.2% | 1.04s | 0.2% | 1.04s | `WritableState` | `internal:streams/writable:135` |
| 0.2% | 1.03s | 0.0% | 402.1ms | `mupdf-wasm.wasm.wasm-function[deflate_slow]` | `[native code]` |
| 0.2% | 1.03s | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[deflate]` | `[native code]` |
| 0.2% | 930.0ms | 0.0% | 1.1ms | `_tryToStartAnother` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:94` |
| 0.2% | 928.8ms | 0.2% | 928.8ms | `_resolvePromises` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:56` |
| 0.2% | 928.8ms | 0.0% | 0us | `_next` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:48` |
| 0.2% | 928.8ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:168` |
| 0.2% | 884.2ms | 0.1% | 533.2ms | `bound nonConstNoSmartPtrRawPointerToWireType` | `[native code]` |
| 0.2% | 870.2ms | 0.0% | 0us | `async _generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:281` |
| 0.2% | 870.2ms | 0.2% | 870.2ms | `json` | `[native code]` |
| 0.1% | 797.2ms | 0.1% | 797.2ms | `get buffer` | `[native code]` |
| 0.1% | 771.0ms | 0.0% | 409.9ms | `bound fromWireType` | `[native code]` |
| 0.1% | 746.1ms | 0.1% | 746.1ms | `.wasm-function[9388]` | `[native code]` |
| 0.1% | 696.8ms | 0.0% | 2.0ms | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:499` |
| 0.1% | 676.8ms | 0.1% | 676.8ms | `.wasm-function[2953]` | `[native code]` |
| 0.1% | 670.0ms | 0.0% | 1.0ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.1% | 647.0ms | 0.0% | 0us | `toJSONSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:598` |
| 0.1% | 647.0ms | 0.1% | 647.0ms | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:269` |
| 0.1% | 624.1ms | 0.0% | 0us | `objectProcessor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:282` |
| 0.1% | 619.4ms | 0.0% | 0us | `async extract` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:143` |
| 0.1% | 619.4ms | 0.0% | 0us | `withStructuredOutput` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:397` |
| 0.1% | 618.3ms | 0.0% | 0us | `defaultProcessor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:464` |
| 0.1% | 618.3ms | 0.1% | 618.3ms | `shallowClone` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:186` |
| 0.1% | 585.9ms | 0.0% | 0us | `async createWasm` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.1% | 554.8ms | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:707` |
| 0.1% | 505.4ms | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:715` |
| 0.1% | 494.2ms | 0.0% | 2.9ms | `detectVerticalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:574` |
| 0.1% | 451.1ms | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:693` |
| 0.0% | 422.6ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:11` |
| 0.0% | 422.6ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:20` |
| 0.0% | 422.6ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:28` |
| 0.0% | 404.7ms | 0.0% | 339.5ms | `mupdf-wasm.wasm.wasm-function[fill_window]` | `[native code]` |
| 0.0% | 392.3ms | 0.0% | 392.3ms | `toWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 373.9ms | 0.0% | 373.9ms | `fromWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 350.9ms | 0.0% | 350.9ms | `nonConstNoSmartPtrRawPointerToWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 333.9ms | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:690` |
| 0.0% | 318.3ms | 0.0% | 0us | `.wasm-function[76]` | `[native code]` |
| 0.0% | 309.9ms | 0.0% | 0us | `async _generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:272` |
| 0.0% | 308.8ms | 0.0% | 0us | `async add` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:152` |
| 0.0% | 298.9ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:171` |
| 0.0% | 297.8ms | 0.0% | 0us | `async run` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:153` |
| 0.0% | 297.8ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:157` |
| 0.0% | 297.8ms | 0.0% | 0us | `_tryToStartAnother` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:105` |
| 0.0% | 297.8ms | 0.0% | 989us | `async pRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js:86` |
| 0.0% | 284.5ms | 0.0% | 0us | `.wasm-function[68]` | `[native code]` |
| 0.0% | 276.3ms | 0.0% | 276.3ms | `toString` | `[native code]` |
| 0.0% | 241.9ms | 0.0% | 241.9ms | `findWasmBinary` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 225.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[wasm_pdf_new_pixmap_from_page_with_usage]` | `[native code]` |
| 0.0% | 225.4ms | 0.0% | 0us | `toPixmap` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:2231` |
| 0.0% | 225.4ms | 0.0% | 0us | `async convertPdfToImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:74` |
| 0.0% | 225.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_new_pixmap_from_page_with_separations_and_usage]` | `[native code]` |
| 0.0% | 224.6ms | 0.0% | 0us | `.wasm-function[674]` | `[native code]` |
| 0.0% | 224.5ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_run_page_contents_with_usage_imp]` | `[native code]` |
| 0.0% | 224.5ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_run_page_with_usage]` | `[native code]` |
| 0.0% | 224.0ms | 0.0% | 0us | `findContours` | `[native code]` |
| 0.0% | 224.0ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:226` |
| 0.0% | 210.1ms | 0.0% | 0us | `async loadImageForOpenCV` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:79` |
| 0.0% | 204.4ms | 0.0% | 204.4ms | `mupdf-wasm.wasm.wasm-function[longest_match]` | `[native code]` |
| 0.0% | 204.4ms | 0.0% | 204.4ms | `set` | `[native code]` |
| 0.0% | 202.5ms | 0.0% | 0us | `.wasm-function[491]` | `[native code]` |
| 0.0% | 202.5ms | 0.0% | 0us | `.wasm-function[10948]` | `[native code]` |
| 0.0% | 202.5ms | 0.0% | 118.8ms | `.wasm-function[1543]` | `[native code]` |
| 0.0% | 190.9ms | 0.0% | 190.9ms | `.wasm-function[12303]` | `[native code]` |
| 0.0% | 187.2ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:60` |
| 0.0% | 187.2ms | 0.0% | 0us | `async mkdir` | `node:fs/promises:247` |
| 0.0% | 187.2ms | 0.0% | 187.2ms | `mkdir` | `[native code]` |
| 0.0% | 185.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js:191` |
| 0.0% | 185.1ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:272` |
| 0.0% | 185.1ms | 0.0% | 0us | `async pRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js:124` |
| 0.0% | 183.4ms | 0.0% | 183.4ms | `.wasm-function[9672]` | `[native code]` |
| 0.0% | 183.4ms | 0.0% | 0us | `.wasm-function[11624]` | `[native code]` |
| 0.0% | 183.4ms | 0.0% | 0us | `.wasm-function[390]` | `[native code]` |
| 0.0% | 183.4ms | 0.0% | 0us | `cvtColor` | `[native code]` |
| 0.0% | 156.4ms | 0.0% | 1.1ms | `bound resolve` | `[native code]` |
| 0.0% | 155.2ms | 0.0% | 155.2ms | `resolve` | `[native code]` |
| 0.0% | 155.2ms | 0.0% | 0us | `toFile` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:77` |
| 0.0% | 150.0ms | 0.0% | 47.6ms | `.wasm-function[510]` | `[native code]` |
| 0.0% | 149.5ms | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:729` |
| 0.0% | 144.8ms | 0.0% | 144.8ms | `copyDataProperties` | `[native code]` |
| 0.0% | 142.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_process_raw_contents]` | `[native code]` |
| 0.0% | 142.3ms | 0.0% | 5.8ms | `mupdf-wasm.wasm.wasm-function[pdf_process_stream]` | `[native code]` |
| 0.0% | 142.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_process_contents]` | `[native code]` |
| 0.0% | 134.8ms | 0.0% | 0us | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:217` |
| 0.0% | 134.3ms | 0.0% | 1.9ms | `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` | `[native code]` |
| 0.0% | 133.6ms | 0.0% | 0us | `_filterInvocationParamsForTracing` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:279` |
| 0.0% | 129.7ms | 0.0% | 129.7ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 125.0ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:117` |
| 0.0% | 123.1ms | 0.0% | 123.1ms | `.wasm-function[12009]` | `[native code]` |
| 0.0% | 115.1ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:276` |
| 0.0% | 113.6ms | 0.0% | 0us | `Mat` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 113.6ms | 0.0% | 113.6ms | `constructor Mat` | `[native code]` |
| 0.0% | 110.9ms | 0.0% | 57.3ms | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:83` |
| 0.0% | 110.7ms | 0.0% | 52.0ms | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:691` |
| 0.0% | 108.0ms | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:623` |
| 0.0% | 107.2ms | 0.0% | 0us | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:215` |
| 0.0% | 106.9ms | 0.0% | 0us | `dilate` | `[native code]` |
| 0.0% | 106.9ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:211` |
| 0.0% | 101.1ms | 0.0% | 101.1ms | `.wasm-function[8596]` | `[native code]` |
| 0.0% | 99.7ms | 0.0% | 0us | `.wasm-function[4377]` | `[native code]` |
| 0.0% | 99.7ms | 0.0% | 0us | `.wasm-function[635]` | `[native code]` |
| 0.0% | 99.7ms | 0.0% | 0us | `.wasm-function[11526]` | `[native code]` |
| 0.0% | 98.6ms | 0.0% | 0us | `async withRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:31` |
| 0.0% | 98.6ms | 0.0% | 0us | `async withRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:38` |
| 0.0% | 98.3ms | 0.0% | 0us | `async writeFile` | `node:fs/promises:190` |
| 0.0% | 98.3ms | 0.0% | 0us | `bound writeFile` | `[native code]` |
| 0.0% | 98.3ms | 0.0% | 98.3ms | `writeFile` | `[native code]` |
| 0.0% | 98.3ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:61` |
| 0.0% | 95.9ms | 0.0% | 0us | `async cropTableRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:708` |
| 0.0% | 94.2ms | 0.0% | 94.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:171` |
| 0.0% | 94.2ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:170` |
| 0.0% | 88.9ms | 0.0% | 0us | `.wasm-function[14700]` | `[native code]` |
| 0.0% | 88.9ms | 0.0% | 0us | `threshold` | `[native code]` |
| 0.0% | 88.9ms | 0.0% | 0us | `.wasm-function[9595]` | `[native code]` |
| 0.0% | 87.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[emscripten_builtin_malloc]` | `[native code]` |
| 0.0% | 86.3ms | 0.0% | 0us | `Z` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 86.3ms | 0.0% | 0us | `h` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 84.2ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[sbrk]` | `[native code]` |
| 0.0% | 84.0ms | 0.0% | 84.0ms | `invocationParams` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:244` |
| 0.0% | 84.0ms | 0.0% | 0us | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:214` |
| 0.0% | 83.5ms | 0.0% | 83.5ms | `.wasm-function[549]` | `[native code]` |
| 0.0% | 83.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_malloc_default]` | `[native code]` |
| 0.0% | 83.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[do_scavenging_malloc]` | `[native code]` |
| 0.0% | 82.3ms | 0.0% | 0us | `run` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 82.3ms | 0.0% | 0us | `initRuntime` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 82.3ms | 0.0% | 0us | `doRun` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 82.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_new_run_processor]` | `[native code]` |
| 0.0% | 82.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_calloc]` | `[native code]` |
| 0.0% | 80.4ms | 0.0% | 80.4ms | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/stringify.js:8` |
| 0.0% | 79.6ms | 0.0% | 0us | `.wasm-function[16862]` | `[native code]` |
| 0.0% | 79.3ms | 0.0% | 0us | `isLangChainTool` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/types.js:47` |
| 0.0% | 79.3ms | 0.0% | 0us | `convertToOpenAITool` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/function_calling.js:43` |
| 0.0% | 78.6ms | 0.0% | 78.6ms | `grow` | `[native code]` |
| 0.0% | 78.4ms | 0.0% | 0us | `async _generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:268` |
| 0.0% | 78.2ms | 0.0% | 0us | `isStructuredToolParams` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/types.js:29` |
| 0.0% | 78.2ms | 0.0% | 78.2ms | `isInteropZodSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:31` |
| 0.0% | 77.4ms | 0.0% | 77.4ms | `invocationParams` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:217` |
| 0.0% | 77.0ms | 0.0% | 0us | `_number` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:307` |
| 0.0% | 74.8ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:101` |
| 0.0% | 69.9ms | 0.0% | 69.9ms | `fetch` | `[native code]` |
| 0.0% | 69.9ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:273` |
| 0.0% | 68.9ms | 0.0% | 4.7ms | `whenDependentTypesAreResolved` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 68.3ms | 0.0% | 34.6ms | `forEach` | `[native code]` |
| 0.0% | 66.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_show_path]` | `[native code]` |
| 0.0% | 66.8ms | 0.0% | 874us | `mupdf-wasm.wasm.wasm-function[fz_stroke_path]` | `[native code]` |
| 0.0% | 66.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_run_S]` | `[native code]` |
| 0.0% | 66.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_draw_stroke_path]` | `[native code]` |
| 0.0% | 66.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_draw_stroke_path_aux]` | `[native code]` |
| 0.0% | 65.1ms | 0.0% | 65.1ms | `mupdf-wasm.wasm.wasm-function[adler32]` | `[native code]` |
| 0.0% | 64.2ms | 0.0% | 0us | `extract` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:495` |
| 0.0% | 64.2ms | 0.0% | 0us | `isRotationExpected` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs` |
| 0.0% | 64.2ms | 0.0% | 0us | `toWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 63.8ms | 0.0% | 63.8ms | `ReadableState` | `internal:streams/readable:40` |
| 0.0% | 63.1ms | 0.0% | 0us | `onComplete` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 62.8ms | 0.0% | 62.8ms | `toHandle` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 61.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_convert_rasterizer]` | `[native code]` |
| 0.0% | 61.3ms | 0.0% | 20.4ms | `mupdf-wasm.wasm.wasm-function[fz_convert_gel]` | `[native code]` |
| 0.0% | 61.3ms | 0.0% | 0us | `async createDebugImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:795` |
| 0.0% | 60.4ms | 0.0% | 0us | `node:util` | `node:util:2` |
| 0.0% | 59.9ms | 0.0% | 0us | `extract` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:486` |
| 0.0% | 59.6ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:32` |
| 0.0% | 59.5ms | 0.0% | 59.5ms | `convertLangChainToolCallToOpenAI` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js` |
| 0.0% | 59.4ms | 0.0% | 59.4ms | `async pRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js:111` |
| 0.0% | 59.4ms | 0.0% | 59.4ms | `async call` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:134` |
| 0.0% | 59.0ms | 0.0% | 59.0ms | `Stream` | `internal:streams/legacy` |
| 0.0% | 58.6ms | 0.0% | 9.7ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 58.3ms | 0.0% | 58.3ms | `_configureSync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/callbacks/manager.js:528` |
| 0.0% | 53.6ms | 0.0% | 52.0ms | `_convertInputToPromptValue` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:225` |
| 0.0% | 53.2ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:934` |
| 0.0% | 53.2ms | 0.0% | 0us | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:464` |
| 0.0% | 51.0ms | 0.0% | 51.0ms | `async pRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js:99` |
| 0.0% | 49.6ms | 0.0% | 0us | `.wasm-function[4417]` | `[native code]` |
| 0.0% | 48.9ms | 0.0% | 0us | `_getConfigureHooks` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/context.js:120` |
| 0.0% | 48.9ms | 0.0% | 48.9ms | `getContextVariable` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/context.js` |
| 0.0% | 48.9ms | 0.0% | 0us | `_configureSync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/callbacks/manager.js:548` |
| 0.0% | 47.5ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:320` |
| 0.0% | 46.5ms | 0.0% | 0us | `findWasmBinary` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 46.0ms | 0.0% | 46.0ms | `instantiate` | `[native code]` |
| 0.0% | 43.5ms | 0.0% | 43.5ms | `binaryDecode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 41.3ms | 0.0% | 41.3ms | `bind` | `[native code]` |
| 0.0% | 41.2ms | 0.0% | 0us | `.wasm-function[503]` | `[native code]` |
| 0.0% | 41.2ms | 0.0% | 0us | `bitwise_or` | `[native code]` |
| 0.0% | 41.2ms | 0.0% | 41.2ms | `.wasm-function[12680]` | `[native code]` |
| 0.0% | 41.2ms | 0.0% | 0us | `.wasm-function[1260]` | `[native code]` |
| 0.0% | 41.2ms | 0.0% | 0us | `.wasm-function[15702]` | `[native code]` |
| 0.0% | 41.2ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:195` |
| 0.0% | 40.9ms | 0.0% | 40.9ms | `mupdf-wasm.wasm.wasm-function[paint_span_with_color_3_solid]` | `[native code]` |
| 0.0% | 40.1ms | 0.0% | 0us | `WritableState` | `internal:streams/writable:152` |
| 0.0% | 39.0ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:34` |
| 0.0% | 39.0ms | 0.0% | 39.0ms | `ensureLangGraphConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/utils/config.js` |
| 0.0% | 38.4ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/detect-libc.js:6` |
| 0.0% | 38.3ms | 0.0% | 38.3ms | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:229` |
| 0.0% | 36.1ms | 0.0% | 2.4ms | `craftInvokerFunction` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 35.6ms | 0.0% | 0us | `detectVerticalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:557` |
| 0.0% | 35.6ms | 0.0% | 35.6ms | `test` | `[native code]` |
| 0.0% | 35.6ms | 0.0% | 0us | `toFile` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:79` |
| 0.0% | 33.9ms | 0.0% | 4.5ms | `mupdf-wasm.wasm.wasm-function[pdf_flush_text_imp]` | `[native code]` |
| 0.0% | 32.6ms | 0.0% | 32.6ms | `extract` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:482` |
| 0.0% | 32.6ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_run_ET]` | `[native code]` |
| 0.0% | 31.5ms | 0.0% | 0us | `detectVerticalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:556` |
| 0.0% | 28.5ms | 0.0% | 0us | `__embind_register_function` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 28.0ms | 0.0% | 28.0ms | `node:worker_threads` | `node:worker_threads:33` |
| 0.0% | 28.0ms | 0.0% | 0us | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:462` |
| 0.0% | 27.1ms | 0.0% | 0us | `async instantiateArrayBuffer` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 27.0ms | 0.0% | 27.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:489` |
| 0.0% | 26.8ms | 0.0% | 2.3ms | `mupdf-wasm.wasm.wasm-function[fz_draw_fill_text]` | `[native code]` |
| 0.0% | 26.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_fill_text]` | `[native code]` |
| 0.0% | 26.3ms | 0.0% | 9.2ms | `createJsInvoker` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 25.4ms | 0.0% | 0us | `.wasm-function[2667]` | `[native code]` |
| 0.0% | 25.1ms | 0.0% | 25.1ms | `get` | `[native code]` |
| 0.0% | 24.8ms | 0.0% | 0us | `countNonZero` | `[native code]` |
| 0.0% | 24.4ms | 0.0% | 1.3ms | `mupdf-wasm.wasm.wasm-function[_tr_flush_block]` | `[native code]` |
| 0.0% | 23.7ms | 0.0% | 0us | `.wasm-function[466]` | `[native code]` |
| 0.0% | 23.7ms | 0.0% | 0us | `.wasm-function[1293]` | `[native code]` |
| 0.0% | 23.7ms | 0.0% | 0us | `.wasm-function[11668]` | `[native code]` |
| 0.0% | 23.7ms | 0.0% | 23.7ms | `.wasm-function[11510]` | `[native code]` |
| 0.0% | 22.9ms | 0.0% | 0us | `process` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:35` |
| 0.0% | 22.4ms | 0.0% | 22.4ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/checks.js:104` |
| 0.0% | 22.1ms | 0.0% | 22.1ms | `Int8Array` | `[native code]` |
| 0.0% | 21.7ms | 0.0% | 21.7ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:74` |
| 0.0% | 20.9ms | 0.0% | 20.9ms | `mupdf-wasm.wasm.wasm-function[compress_block]` | `[native code]` |
| 0.0% | 20.1ms | 0.0% | 1.4ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:58` |
| 0.0% | 19.7ms | 0.0% | 19.7ms | `.wasm-function[2992]` | `[native code]` |
| 0.0% | 19.5ms | 0.0% | 19.5ms | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:37` |
| 0.0% | 19.4ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:37` |
| 0.0% | 18.7ms | 0.0% | 18.7ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:49` |
| 0.0% | 17.9ms | 0.0% | 0us | `R` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 17.0ms | 0.0% | 17.0ms | `Function` | `[native code]` |
| 0.0% | 16.5ms | 0.0% | 16.5ms | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:70` |
| 0.0% | 16.4ms | 0.0% | 16.4ms | `Duplex` | `internal:streams/duplex:6` |
| 0.0% | 16.1ms | 0.0% | 0us | `toJSONSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:599` |
| 0.0% | 15.6ms | 0.0% | 0us | `ZodOptional` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` |
| 0.0% | 14.8ms | 0.0% | 14.8ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:17` |
| 0.0% | 14.6ms | 0.0% | 0us | `async F` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 14.6ms | 0.0% | 1.1ms | `async extract` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:154` |
| 0.0% | 14.4ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:111` |
| 0.0% | 14.4ms | 0.0% | 0us | `_string` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:7` |
| 0.0% | 14.4ms | 0.0% | 0us | `ZodString` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` |
| 0.0% | 14.4ms | 0.0% | 0us | `__embind_register_class_function` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 14.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_process_Do]` | `[native code]` |
| 0.0% | 14.0ms | 0.0% | 944us | `.wasm-function[2969]` | `[native code]` |
| 0.0% | 13.7ms | 0.0% | 13.7ms | `init` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:8` |
| 0.0% | 13.7ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1105` |
| 0.0% | 13.7ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:113` |
| 0.0% | 13.4ms | 0.0% | 0us | `run` | `node:async_hooks:99` |
| 0.0% | 13.3ms | 0.0% | 0us | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:73` |
| 0.0% | 12.8ms | 0.0% | 12.8ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:76` |
| 0.0% | 12.6ms | 0.0% | 12.6ms | `extractDefs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:206` |
| 0.0% | 12.4ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:316` |
| 0.0% | 12.4ms | 0.0% | 12.4ms | `mupdf-wasm.wasm.wasm-function[draw_glyph]` | `[native code]` |
| 0.0% | 12.3ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:302` |
| 0.0% | 12.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_show_image]` | `[native code]` |
| 0.0% | 12.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_fill_image]` | `[native code]` |
| 0.0% | 12.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_show_image_imp]` | `[native code]` |
| 0.0% | 12.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_draw_fill_image]` | `[native code]` |
| 0.0% | 12.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_run_Do_image]` | `[native code]` |
| 0.0% | 11.9ms | 0.0% | 1.3ms | `mupdf-wasm.wasm.wasm-function[pdf_load_font]` | `[native code]` |
| 0.0% | 11.9ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_try_load_font]` | `[native code]` |
| 0.0% | 11.9ms | 0.0% | 11.9ms | `fromWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 11.9ms | 0.0% | 0us | `node:stream` | `node:stream:2` |
| 0.0% | 11.9ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_available_1592]` | `[native code]` |
| 0.0% | 11.9ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_read]` | `[native code]` |
| 0.0% | 11.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[wasm_init_context]` | `[native code]` |
| 0.0% | 11.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_new_colorspace_context]` | `[native code]` |
| 0.0% | 11.8ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:28` |
| 0.0% | 11.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_new_context_imp]` | `[native code]` |
| 0.0% | 11.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_new_icc_colorspace]` | `[native code]` |
| 0.0% | 11.5ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/index.cjs:1` |
| 0.0% | 11.4ms | 0.0% | 11.4ms | `warn` | `[native code]` |
| 0.0% | 11.4ms | 0.0% | 0us | `attachCropImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:109` |
| 0.0% | 11.1ms | 0.0% | 0us | `_` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 11.0ms | 0.0% | 11.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:67` |
| 0.0% | 11.0ms | 0.0% | 3.2ms | `mupdf-wasm.wasm.wasm-function[fz_render_glyph]` | `[native code]` |
| 0.0% | 10.8ms | 0.0% | 10.8ms | `validateThis` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 10.7ms | 0.0% | 0us | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:58` |
| 0.0% | 10.5ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_type0_font]` | `[native code]` |
| 0.0% | 10.5ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[load_cid_font]` | `[native code]` |
| 0.0% | 10.5ms | 0.0% | 0us | `StructuredTool` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:68` |
| 0.0% | 10.5ms | 0.0% | 0us | `tool` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:286` |
| 0.0% | 10.5ms | 0.0% | 0us | `DynamicStructuredTool` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:236` |
| 0.0% | 10.2ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:37` |
| 0.0% | 10.1ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:104` |
| 0.0% | 9.9ms | 0.0% | 9.9ms | `enqueue` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/priority-queue.js:11` |
| 0.0% | 9.9ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:170` |
| 0.0% | 9.9ms | 0.0% | 0us | `BaseLanguageModel` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:178` |
| 0.0% | 9.8ms | 0.0% | 0us | `internal:stream` | `internal:stream:2` |
| 0.0% | 9.8ms | 0.0% | 0us | `__embind_register_class` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 9.6ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[lcms2mt_cmsCreateProfilePlaceholder]` | `[native code]` |
| 0.0% | 9.6ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[gmtime]` | `[native code]` |
| 0.0% | 9.6ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[do_tzset]` | `[native code]` |
| 0.0% | 9.5ms | 0.0% | 9.5ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:870` |
| 0.0% | 9.4ms | 0.0% | 0us | `BaseLangChain` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:137` |
| 0.0% | 9.4ms | 0.0% | 9.4ms | `getVerbosity` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:117` |
| 0.0% | 9.1ms | 0.0% | 9.1ms | `init` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js` |
| 0.0% | 9.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:258` |
| 0.0% | 9.1ms | 0.0% | 9.1ms | `string` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/regexes.js:94` |
| 0.0% | 9.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:135` |
| 0.0% | 8.7ms | 0.0% | 0us | `internal:streams/pipeline` | `internal:streams/pipeline:2` |
| 0.0% | 8.7ms | 0.0% | 0us | `internal:streams/compose` | `internal:streams/compose:2` |
| 0.0% | 8.5ms | 0.0% | 8.5ms | `_createInputDescriptor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:68` |
| 0.0% | 8.4ms | 0.0% | 0us | `k` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 8.4ms | 0.0% | 8.4ms | `getFullYear` | `[native code]` |
| 0.0% | 7.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_read_best]` | `[native code]` |
| 0.0% | 7.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_image_stream]` | `[native code]` |
| 0.0% | 7.7ms | 0.0% | 0us | `internal:streams/duplex` | `internal:streams/duplex:2` |
| 0.0% | 7.2ms | 0.0% | 0us | `receiveInstance` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 7.2ms | 0.0% | 7.2ms | `updateMemoryViews` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 7.2ms | 0.0% | 0us | `receiveInstantiationResult` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 6.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_font]` | `[native code]` |
| 0.0% | 6.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_font_descriptor]` | `[native code]` |
| 0.0% | 6.6ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_render_ft_glyph]` | `[native code]` |
| 0.0% | 6.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[jpeg_read_scanlines]` | `[native code]` |
| 0.0% | 6.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_get_pixmap_from_image]` | `[native code]` |
| 0.0% | 6.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[process_data_simple_main_8796]` | `[native code]` |
| 0.0% | 6.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_decomp_image_from_stream]` | `[native code]` |
| 0.0% | 6.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[compressed_image_get_pixmap]` | `[native code]` |
| 0.0% | 6.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[next_dctd]` | `[native code]` |
| 0.0% | 6.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[putchunk]` | `[native code]` |
| 0.0% | 6.2ms | 0.0% | 877us | `bound decodeMemoryView` | `[native code]` |
| 0.0% | 5.8ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[fz_transform_pixmap]` | `[native code]` |
| 0.0% | 5.8ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_stream]` | `[native code]` |
| 0.0% | 5.5ms | 0.0% | 5.5ms | `whenDependentTypesAreResolved` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 5.4ms | 0.0% | 5.4ms | `mupdf-wasm.wasm.wasm-function[inflate]` | `[native code]` |
| 0.0% | 5.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[next_flated]` | `[native code]` |
| 0.0% | 5.3ms | 0.0% | 1.0ms | `__embind_register_class_constructor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 5.3ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:259` |
| 0.0% | 5.3ms | 0.0% | 0us | `node:fs` | `node:fs:2` |
| 0.0% | 5.3ms | 0.0% | 0us | `process` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:75` |
| 0.0% | 5.2ms | 0.0% | 1.0ms | `sharedRegisterType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 5.2ms | 0.0% | 0us | `registerType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 5.2ms | 0.0% | 984us | `.wasm-function[585]` | `[native code]` |
| 0.0% | 5.2ms | 0.0% | 1.1ms | `__embind_register_enum_value` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 5.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_stroke_bezier]` | `[native code]` |
| 0.0% | 5.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/sharp.mjs:61` |
| 0.0% | 4.9ms | 0.0% | 0us | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:331` |
| 0.0% | 4.9ms | 0.0% | 0us | `getSharedClient` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:400` |
| 0.0% | 4.7ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_scale_pixmap_cached]` | `[native code]` |
| 0.0% | 4.6ms | 0.0% | 1.2ms | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:496` |
| 0.0% | 4.4ms | 0.0% | 0us | `async stream` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:924` |
| 0.0% | 4.4ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1181` |
| 0.0% | 4.4ms | 0.0% | 0us | `async stream` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:939` |
| 0.0% | 4.4ms | 0.0% | 0us | `async stream` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:119` |
| 0.0% | 4.4ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:43` |
| 0.0% | 4.4ms | 0.0% | 0us | `async detectAndCropBbs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:121` |
| 0.0% | 4.4ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1172` |
| 0.0% | 4.4ms | 0.0% | 0us | `async detectAndCropBbs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:118` |
| 0.0% | 4.4ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/utility.mjs:27` |
| 0.0% | 4.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[decompress_onepass]` | `[native code]` |
| 0.0% | 4.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[emscripten_builtin_realloc]` | `[native code]` |
| 0.0% | 4.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[do_scavenging_realloc]` | `[native code]` |
| 0.0% | 4.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_realloc]` | `[native code]` |
| 0.0% | 4.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_realloc_default]` | `[native code]` |
| 0.0% | 4.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_resize_buffer]` | `[native code]` |
| 0.0% | 4.2ms | 0.0% | 0us | `_emscripten_resize_heap` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 4.2ms | 0.0% | 0us | `.wasm-function[584]` | `[native code]` |
| 0.0% | 4.2ms | 0.0% | 0us | `.wasm-function[734]` | `[native code]` |
| 0.0% | 4.2ms | 0.0% | 0us | `updateMemoryViews` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 4.2ms | 0.0% | 0us | `.wasm-function[11375]` | `[native code]` |
| 0.0% | 4.2ms | 0.0% | 0us | `growMemory` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 4.2ms | 0.0% | 0us | `.wasm-function[182]` | `[native code]` |
| 0.0% | 4.2ms | 0.0% | 0us | `.wasm-function[1199]` | `[native code]` |
| 0.0% | 4.2ms | 0.0% | 0us | `.wasm-function[280]` | `[native code]` |
| 0.0% | 4.2ms | 0.0% | 0us | `.wasm-function[12008]` | `[native code]` |
| 0.0% | 4.1ms | 0.0% | 4.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 4.0ms | 0.0% | 4.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:202` |
| 0.0% | 4.0ms | 0.0% | 0us | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:487` |
| 0.0% | 3.8ms | 0.0% | 0us | `compile` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:439` |
| 0.0% | 3.8ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:113` |
| 0.0% | 3.8ms | 0.0% | 0us | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:47` |
| 0.0% | 3.8ms | 0.0% | 0us | `async _runLoop` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1208` |
| 0.0% | 3.8ms | 0.0% | 3.8ms | `dlopen` | `[native code]` |
| 0.0% | 3.8ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/sharp-linux-x64/index.cjs:2` |
| 0.0% | 3.7ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_to_unicode]` | `[native code]` |
| 0.0% | 3.6ms | 0.0% | 1.5ms | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/registries.js:35` |
| 0.0% | 3.5ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1074` |
| 0.0% | 3.5ms | 0.0% | 0us | `async initialize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:245` |
| 0.0% | 3.5ms | 0.0% | 0us | `async _streamIterator` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1126` |
| 0.0% | 3.5ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1076` |
| 0.0% | 3.5ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:1820` |
| 0.0% | 3.5ms | 0.0% | 0us | `node:path` | `node:path:2` |
| 0.0% | 3.5ms | 0.0% | 0us | `internal:validators` | `internal:validators:2` |
| 0.0% | 3.5ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_flatten_stroke_path]` | `[native code]` |
| 0.0% | 3.5ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[do_flatten_stroke]` | `[native code]` |
| 0.0% | 3.5ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_walk_path]` | `[native code]` |
| 0.0% | 3.5ms | 0.0% | 2.2ms | `mupdf-wasm.wasm.wasm-function[fz_stroke_lineto_aux]` | `[native code]` |
| 0.0% | 3.4ms | 0.0% | 1.1ms | `embind__requireFunction` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 3.4ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[pdf_lex]` | `[native code]` |
| 0.0% | 3.3ms | 0.0% | 0us | `node:fs/promises` | `node:fs/promises:2` |
| 0.0% | 3.2ms | 0.0% | 3.2ms | `create` | `[native code]` |
| 0.0% | 3.2ms | 0.0% | 0us | `async interopSafeParseAsync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:65` |
| 0.0% | 3.2ms | 0.0% | 0us | `async _validateResult` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:147` |
| 0.0% | 3.2ms | 0.0% | 0us | `async _validateResult` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:154` |
| 0.0% | 3.2ms | 0.0% | 0us | `async interopSafeParseAsync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:69` |
| 0.0% | 3.2ms | 0.0% | 0us | `async stream` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:121` |
| 0.0% | 3.2ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js:133` |
| 0.0% | 3.2ms | 0.0% | 0us | `AsyncGeneratorWithSetup` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js:132` |
| 0.0% | 3.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_write_data]` | `[native code]` |
| 0.0% | 3.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_ensure_buffer]` | `[native code]` |
| 0.0% | 3.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_append_data]` | `[native code]` |
| 0.0% | 3.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[buffer_write]` | `[native code]` |
| 0.0% | 3.2ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect]` | `[native code]` |
| 0.0% | 3.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect_chain]` | `[native code]` |
| 0.0% | 3.2ms | 0.0% | 2.0ms | `next` | `[native code]` |
| 0.0% | 3.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_dict_get]` | `[native code]` |
| 0.0% | 3.1ms | 0.0% | 0us | `generatorResume` | `[native code]` |
| 0.0% | 3.1ms | 0.0% | 0us | `_prepareNextTasks` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:247` |
| 0.0% | 3.0ms | 0.0% | 0us | `__embind_register_class_property` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 3.0ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:31` |
| 0.0% | 3.0ms | 0.0% | 0us | `async _route` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:39` |
| 0.0% | 3.0ms | 0.0% | 0us | `async func` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:29` |
| 0.0% | 3.0ms | 0.0% | 0us | `async _route` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:40` |
| 0.0% | 3.0ms | 0.0% | 3.0ms | `_createInputDescriptor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs` |
| 0.0% | 3.0ms | 0.0% | 0us | `Runnable` | `[native code]` |
| 0.0% | 3.0ms | 0.0% | 0us | `async _write` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:36` |
| 0.0% | 3.0ms | 0.0% | 0us | `async func` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:31` |
| 0.0% | 3.0ms | 0.0% | 2.1ms | `binaryDecode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 3.0ms | 0.0% | 0us | `async classifyImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:61` |
| 0.0% | 3.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[crc32]` | `[native code]` |
| 0.0% | 3.0ms | 0.0% | 3.0ms | `mupdf-wasm.wasm.wasm-function[crc32_z]` | `[native code]` |
| 0.0% | 3.0ms | 0.0% | 0us | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:447` |
| 0.0% | 3.0ms | 0.0% | 0us | `async _runLoop` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1204` |
| 0.0% | 3.0ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:3` |
| 0.0% | 2.9ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[FT_Load_Glyph]` | `[native code]` |
| 0.0% | 2.8ms | 0.0% | 923us | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:66` |
| 0.0% | 2.8ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:27` |
| 0.0% | 2.7ms | 0.0% | 0us | `finalize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:355` |
| 0.0% | 2.6ms | 0.0% | 0us | `createStandardStreams` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.6ms | 0.0% | 0us | `init` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.4ms | 0.0% | 2.4ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:73` |
| 0.0% | 2.4ms | 0.0% | 0us | `mknod` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.4ms | 0.0% | 0us | `createNode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.4ms | 0.0% | 0us | `callWithOptions` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js:204` |
| 0.0% | 2.4ms | 0.0% | 0us | `methodCaller<(Mat) => emscripten::val>` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:252` |
| 0.0% | 2.4ms | 0.0% | 0us | `MatVector.get` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 0us | `.wasm-function[4554]` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 0us | `bound readPointer` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 1.2ms | `makeClassHandle` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.4ms | 0.0% | 0us | `RegisteredPointer_fromWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.4ms | 0.0% | 0us | `readPointer` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_remap_cmap]` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 1.4ms | `mupdf-wasm.wasm.wasm-function[pdf_remap_cmap_range]` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 0us | `staticInit` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_page_tree_imp]` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_parse_array]` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_parse_dict]` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[FT_Render_Glyph_Internal]` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 1.2ms | `mupdf-wasm.wasm.wasm-function[gray_raster_render]` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[ft_smooth_render]` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:123` |
| 0.0% | 2.4ms | 0.0% | 0us | `HumanMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/human.js:12` |
| 0.0% | 2.4ms | 0.0% | 0us | `mount` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.3ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1207` |
| 0.0% | 2.3ms | 0.0% | 2.3ms | `mupdf-wasm.wasm.wasm-function[jpeg_idct_islow]` | `[native code]` |
| 0.0% | 2.3ms | 0.0% | 2.3ms | `async next` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js` |
| 0.0% | 2.3ms | 0.0% | 0us | `internal:shared` | `internal:shared:2` |
| 0.0% | 2.3ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:32` |
| 0.0% | 2.3ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:697` |
| 0.0% | 2.3ms | 0.0% | 0us | `boundingRect` | `[native code]` |
| 0.0% | 2.3ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:256` |
| 0.0% | 2.3ms | 0.0% | 0us | `ZodArray` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` |
| 0.0% | 2.3ms | 0.0% | 0us | `_array` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:712` |
| 0.0% | 2.3ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:707` |
| 0.0% | 2.2ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:5` |
| 0.0% | 2.2ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js:134` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/import_map.js:71` |
| 0.0% | 2.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[lex_number]` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `mupdf-wasm.wasm.wasm-function[scale_row_to_temp3]` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 0us | `makeDynCaller` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `emit` | `node:events:86` |
| 0.0% | 2.2ms | 0.0% | 0us | `queueListener` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:16` |
| 0.0% | 2.2ms | 0.0% | 0us | `getWasmTableEntry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_tos_make_trm]` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_run_Tj]` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_show_string]` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[show_string]` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_show_char]` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[stroke_lineto]` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_cache_object]` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 0us | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:43` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `mupdf-wasm.wasm.wasm-function[build_tree]` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `mupdf-wasm.wasm.wasm-function[fz_new_glyph_from_8bpp_data]` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[glyph_from_ft_bitmap]` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:306` |
| 0.0% | 2.2ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:45` |
| 0.0% | 2.2ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:304` |
| 0.0% | 2.2ms | 0.0% | 0us | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:329` |
| 0.0% | 2.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_md5_buffer]` | `[native code]` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `mupdf-wasm.wasm.wasm-function[body]` | `[native code]` |
| 0.0% | 2.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_md5_update]` | `[native code]` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `push` | `[native code]` |
| 0.0% | 2.1ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/_openapi_client/internal/qs/utils.js:11` |
| 0.0% | 2.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/_openapi_client/internal/qs/utils.js:9` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `png` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs` |
| 0.0% | 2.1ms | 0.0% | 0us | `async _callWithConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:162` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `hasOwnProperty` | `[native code]` |
| 0.0% | 2.1ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1102` |
| 0.0% | 2.1ms | 0.0% | 0us | `async _runLoop` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1200` |
| 0.0% | 2.1ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:936` |
| 0.0% | 2.1ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/standard_schema.js:3` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `__exportAll` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/_virtual/_rolldown/runtime.js:5` |
| 0.0% | 2.0ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:4` |
| 0.0% | 2.0ms | 0.0% | 0us | `internal:util/inspect` | `internal:util/inspect:2` |
| 0.0% | 2.0ms | 0.0% | 0us | `async doWrite` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:66` |
| 0.0% | 2.0ms | 0.0% | 0us | `async _write` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:50` |
| 0.0% | 2.0ms | 0.0% | 0us | `async doWrite` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:53` |
| 0.0% | 2.0ms | 0.0% | 0us | `async classifyImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:26` |
| 0.0% | 2.0ms | 0.0% | 0us | `async classifyImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:24` |
| 0.0% | 2.0ms | 0.0% | 0us | `__embind_register_constant` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/external.js:10` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `en_default` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/locales/en.js` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `mupdf-wasm.wasm.wasm-function[jpeg_idct_16x16]` | `[native code]` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `attachCropImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:97` |
| 0.0% | 2.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_image]` | `[native code]` |
| 0.0% | 2.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_compressed_stream]` | `[native code]` |
| 0.0% | 2.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_image_imp]` | `[native code]` |
| 0.0% | 2.0ms | 0.0% | 1.0ms | `.wasm-function[2996]` | `[native code]` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `AsciiToString` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 2.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[sep_upsample]` | `[native code]` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `mupdf-wasm.wasm.wasm-function[ycc_rgb_convert]` | `[native code]` |
| 0.0% | 1.9ms | 0.0% | 0us | `_commit` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:217` |
| 0.0% | 1.9ms | 0.0% | 0us | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:67` |
| 0.0% | 1.9ms | 0.0% | 0us | `putWrites` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:390` |
| 0.0% | 1.9ms | 0.0% | 1.9ms | `node:crypto` | `node:crypto:2` |
| 0.0% | 1.9ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[wasm_open_document_with_buffer]` | `[native code]` |
| 0.0% | 1.9ms | 0.0% | 0us | `async convertPdfToImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:34` |
| 0.0% | 1.9ms | 0.0% | 0us | `openDocument` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:1475` |
| 0.0% | 1.9ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_open_document_with_buffer]` | `[native code]` |
| 0.0% | 1.9ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_open_accelerated_document_with_stream_and_dir]` | `[native code]` |
| 0.0% | 1.9ms | 0.0% | 0us | `async _executeTasksWithRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:139` |
| 0.0% | 1.9ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:926` |
| 0.0% | 1.9ms | 0.0% | 0us | `async _runWithRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/retry.js:26` |
| 0.0% | 1.9ms | 0.0% | 0us | `async _runWithRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/retry.js:48` |
| 0.0% | 1.9ms | 0.0% | 956us | `readFileSync` | `[native code]` |
| 0.0% | 1.9ms | 0.0% | 0us | `async _` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 1.9ms | 0.0% | 1.9ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `buffer` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/is.mjs:40` |
| 0.0% | 1.6ms | 0.0% | 0us | `_createInputDescriptor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:66` |
| 0.0% | 1.5ms | 0.0% | 0us | `process` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:80` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `symlink` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.5ms | 0.0% | 0us | `symlink` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `ChatPromptValue` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/prompt_values.js:50` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `getLangSmithEnvVarsMetadata` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/env.js` |
| 0.0% | 1.4ms | 0.0% | 0us | `Client` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js:882` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `internal:streams/writable` | `internal:streams/writable:14` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `mupdf-wasm.wasm.wasm-function[fz_drop_font]` | `[native code]` |
| 0.0% | 1.4ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_drop_text]` | `[native code]` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `extractDefs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:178` |
| 0.0% | 1.4ms | 0.0% | 0us | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:294` |
| 0.0% | 1.4ms | 0.0% | 0us | `Mat.roi` | `[native code]` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `.wasm-function[2608]` | `[native code]` |
| 0.0% | 1.4ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:299` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `node:fs` | `node:fs:230` |
| 0.0% | 1.3ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:644` |
| 0.0% | 1.3ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:645` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `async _mergeConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js` |
| 0.0% | 1.3ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:131` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `AsyncCaller` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js:180` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `internal:util/inspect` | `internal:util/inspect:9` |
| 0.0% | 1.3ms | 0.0% | 0us | `internal:util/inspect` | `internal:util/inspect:154` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `SafeSet` | `internal:primordials` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `mupdf-wasm.wasm.wasm-function[make_weights]` | `[native code]` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `BaseMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/base.js:141` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:143` |
| 0.0% | 1.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_set_color]` | `[native code]` |
| 0.0% | 1.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_run_RG]` | `[native code]` |
| 0.0% | 1.3ms | 0.0% | 0us | `async _streamIterator` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1131` |
| 0.0% | 1.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_cmap_imp]` | `[native code]` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `mupdf-wasm.wasm.wasm-function[pdf_load_cmap]` | `[native code]` |
| 0.0% | 1.3ms | 0.0% | 0us | `async next` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js:19` |
| 0.0% | 1.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_cmap]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `toJSONSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `D` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` |
| 0.0% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:203` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `.wasm-function[59]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:45` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `_installLazyMethods` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/imageSchema.ts:12` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `route` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs` |
| 0.0% | 1.2ms | 0.0% | 0us | `__embind_finalize_value_object` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.2ms | 0.0% | 0us | `(module)` | `bun:main:14` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `isServerConfig` | `bun:main` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `mupdf-wasm.wasm.wasm-function[fz_insert_gel]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[stroke_curveto]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_add_line]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_add_line_join]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `mupdf-wasm.wasm.wasm-function[pdf_font_cid_to_gid]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/tiktoken.js:10` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `process` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:43` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `async _streamIterator` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1133` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `async pRetry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `DeltaValue` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/state/values/delta.js` |
| 0.0% | 1.2ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/state/prebuilt/messages.js:31` |
| 0.0% | 1.2ms | 0.0% | 0us | `__embind_register_value_object_field` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.2ms | 0.0% | 0us | `createDefaultDevices` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `FSNode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.2ms | 0.0% | 0us | `mkdev` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:37` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `mupdf-wasm.wasm.wasm-function[fz_push_try]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `async stream` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:120` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `finalize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `createStandardJSONSchemaMethod` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js` |
| 0.0% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:60` |
| 0.0% | 1.2ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/shell.js:7` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:1495` |
| 0.0% | 1.2ms | 0.0% | 0us | `loadProfileClientConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/profiles.js:253` |
| 0.0% | 1.2ms | 0.0% | 0us | `isBrowserLikeRuntime` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/profiles.js:11` |
| 0.0% | 1.2ms | 0.0% | 0us | `loadProfileState` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/profiles.js:39` |
| 0.0% | 1.2ms | 0.0% | 0us | `Client` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js:805` |
| 0.0% | 1.2ms | 0.0% | 0us | `getDefaultClientConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js:912` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `getEnv` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/env.js` |
| 0.0% | 1.2ms | 0.0% | 0us | `__toCommonJS` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:17` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `__copyProps` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs` |
| 0.0% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:24` |
| 0.0% | 1.2ms | 0.0% | 0us | `internal:streams/readable` | `internal:streams/readable:2` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `guarded` | `internal:shared` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `async initialize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 1.2ms | 0.0% | 0us | `async convertPdfToImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:56` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_load_page]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/internal/re.js:84` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[wasm_load_page]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_parse_ind_obj_or_newobj]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_page_imp]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_parse_ind_obj]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_page_tree_internal]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `mupdf-wasm.wasm.wasm-function[fz_read_byte]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `createToken` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/internal/re.js:47` |
| 0.0% | 1.2ms | 0.0% | 0us | `loadPage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:1536` |
| 0.0% | 1.2ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_lookup_page_obj]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `k` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:73` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `checkpointNamespaceFromNs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 1.2ms | 0.0% | 0us | `async initialize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:262` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `createNode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `mergeConfigs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js:23` |
| 0.0% | 1.2ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:35` |
| 0.0% | 1.1ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:32` |
| 0.0% | 1.1ms | 0.0% | 0us | `async _validateInput` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:706` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async _validateInput` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `async _streamIterator` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1012` |
| 0.0% | 1.1ms | 0.0% | 0us | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:340` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `asyncFunctionDrive` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mergeExtractionResults` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/mergeExtraction.ts` |
| 0.0% | 1.1ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:56` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `ZodLiteral` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` |
| 0.0% | 1.1ms | 0.0% | 0us | `literal` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1043` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/detect-libc.js:8` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/sharp-linux-x64/index.cjs:1` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `process` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `familySync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/detect-libc.js:188` |
| 0.0% | 1.1ms | 0.0% | 0us | `isNonGlibcLinuxSync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/detect-libc.js:213` |
| 0.0% | 1.1ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/sharp.mjs:18` |
| 0.0% | 1.1ms | 0.0% | 0us | `runtimeLibc` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/libvips.mjs:39` |
| 0.0% | 1.1ms | 0.0% | 0us | `readFileSync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/filesystem.js:21` |
| 0.0% | 1.1ms | 0.0% | 0us | `familyFromInterpreterSync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/detect-libc.js:152` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `readSync` | `node:fs` |
| 0.0% | 1.1ms | 0.0% | 0us | `runtimePlatformArch` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/libvips.mjs:41` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `usesDestructorStack` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `.wasm-function[173]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `.wasm-function[744]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `.wasm-function[1735]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `.wasm-function[227]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `.wasm-function[12305]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `.wasm-function[12382]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `.wasm-function[158]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `.wasm-function[1182]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `finalize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:216` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `internal:shared` | `internal:shared:172` |
| 0.0% | 1.1ms | 0.0% | 0us | `async cropBbsRowsNode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:85` |
| 0.0% | 1.1ms | 0.0% | 0us | `async cropBbsRowsNode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:81` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async cropBbsRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts` |
| 0.0% | 1.1ms | 0.0% | 0us | `async cropBbsRows` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:811` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `exposePublicSymbol` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:487` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `flattenRef` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:226` |
| 0.0% | 1.1ms | 0.0% | 0us | `finalize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:296` |
| 0.0% | 1.1ms | 0.0% | 0us | `internal:promisify` | `internal:promisify:53` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `node:timers/promises` | `node:timers/promises:2` |
| 0.0% | 1.1ms | 0.0% | 0us | `node:fs` | `node:fs:299` |
| 0.0% | 1.1ms | 0.0% | 0us | `Client` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js:821` |
| 0.0% | 1.1ms | 0.0% | 0us | `.wasm-function[3389]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `__embind_register_void` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `set concurrency` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:146` |
| 0.0% | 1.1ms | 0.0% | 0us | `AsyncCaller` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/async_caller.js:66` |
| 0.0% | 1.1ms | 0.0% | 0us | `_processQueue` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:136` |
| 0.0% | 1.1ms | 0.0% | 0us | `PQueue` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:35` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:8` |
| 0.0% | 1.1ms | 0.0% | 0us | `v1ToV6` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/v1ToV6.js:5` |
| 0.0% | 1.1ms | 0.0% | 0us | `v6` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/v6.js:12` |
| 0.0% | 1.1ms | 0.0% | 0us | `async initialize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:273` |
| 0.0% | 1.1ms | 0.0% | 0us | `emptyCheckpoint` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph-checkpoint/dist/base.js:15` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `_v1ToV6` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/v1ToV6.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[fz_init_process_color_converter]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:337` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_convert_color]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[resolve_color]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_find_color_converter]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `async gatherIterator` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:48` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mapInput` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/io.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_grow_buffer]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `async parseResult` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:166` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async parsePartialResult` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/base.js:43` |
| 0.0% | 1.1ms | 0.0% | 0us | `async parseResult` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:167` |
| 0.0% | 1.1ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tracers/console.js:70` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `setPrototypeDirectOrThrow` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `BaseLangChain` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:136` |
| 0.0% | 1.1ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:91` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `Serializable` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/serializable.js:83` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `Duplex` | `internal:streams/duplex` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `.wasm-function[1203]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `.wasm-function[1588]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `getLsParamsWithDefaults` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:199` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `removeEventListener` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[gray_conic_to]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[FT_Outline_Decompose]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[gray_render_line]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[scale_row_from_temp]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `extractDefs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:194` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/registries.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_begin_group]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[begin_softmask]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_keep_colorspace]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `mupdf-wasm.wasm.wasm-function[fz_keep_buffer]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `_filterInvocationParamsForTracing` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/imageSchema.ts:10` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `__emval_invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `wrapConversion` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1140` |
| 0.0% | 1.1ms | 0.0% | 0us | `route` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1156` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `.wasm-function[1310]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:972` |
| 0.0% | 1.1ms | 0.0% | 0us | `.wasm-function[6535]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `.wasm-function[6551]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `__emval_create_invoker` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.1ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/localShell.js:6` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:474` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/classes/comparator.js:143` |
| 0.0% | 1.1ms | 0.0% | 0us | `internal:streams/operators` | `internal:streams/operators:2` |
| 0.0% | 1.1ms | 0.0% | 0us | `internal:streams/end-of-stream` | `internal:streams/end-of-stream:17` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/node_modules/openai/internal/qs/utils.mjs` |
| 0.0% | 1.1ms | 0.0% | 0us | `Client` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js:874` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `assertValidHeaders` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/node_modules/openai/internal/qs/utils.mjs:14` |
| 0.0% | 1.1ms | 0.0% | 0us | `_prepareSingleTask` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:493` |
| 0.0% | 1.1ms | 0.0% | 0us | `v35` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/v35.js:20` |
| 0.0% | 1.1ms | 0.0% | 0us | `sha1` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/sha1.js:53` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `f` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/sha1.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `open` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `isRunnableToolLike` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/types.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `split` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `join2` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.1ms | 0.0% | 0us | `lookupPath` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.1ms | 0.0% | 0us | `normalize` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:857` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `handlePropertyResult` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `Sharp` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:425` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async _first` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 1.0ms | 0.0% | 0us | `async _first` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:647` |
| 0.0% | 1.0ms | 0.0% | 0us | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:451` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `validateThis` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.0ms | 0.0% | 0us | `CompiledStateGraph` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:559` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `CompiledGraph` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js` |
| 0.0% | 1.0ms | 0.0% | 0us | `_compileResolved` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:462` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `.wasm-function[3269]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `.wasm-function[15014]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `.wasm-function[1859]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:5` |
| 0.0% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/priority-queue.js:3` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1205` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `_tryToStartAnother` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:100` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `isRunnableInterface` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/utils.js:3` |
| 0.0% | 1.0ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:38` |
| 0.0% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:29` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[fz_strtof]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[fz_drop_storable]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_drop_icc_link]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `RegisteredClass` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.0ms | 0.0% | 0us | `__embind_register_optional` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:1657` |
| 0.0% | 1.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:10` |
| 0.0% | 1.0ms | 0.0% | 0us | `getEnumValues` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:17` |
| 0.0% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:966` |
| 0.0% | 1.0ms | 0.0% | 0us | `ZodEnum` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` |
| 0.0% | 1.0ms | 0.0% | 0us | `filter` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `_enum` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1007` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `node:child_process` | `node:child_process:198` |
| 0.0% | 1.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[ft_glyphslot_free_bitmap]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[fz_free]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[ft_free]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/errors.js:19` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `$constructor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `Buffer` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async call` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `invocationParams` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:230` |
| 0.0% | 1.0ms | 0.0% | 0us | `async convertPdfToImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:85` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/registries.js:33` |
| 0.0% | 1.0ms | 0.0% | 0us | `interopZodTransformInputSchemaImpl` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:430` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `uuid7FromTime` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/_uuid.js` |
| 0.0% | 1.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/sax-js/sax.js:1197` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `initializeSax` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/sax-js/sax.js:265` |
| 0.0% | 1.0ms | 0.0% | 0us | `async pull` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js:89` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1211` |
| 0.0% | 1.0ms | 0.0% | 0us | `onRSDefaultControllerStartFulfilled` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `async pull` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js:88` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `_coercedNumber` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `callWithRetries` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js` |
| 0.0% | 1.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/extractSchema.ts:9` |
| 0.0% | 1.0ms | 0.0% | 0us | `async cropAndZoom` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:42` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `Duplex` | `internal:streams/duplex:4` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `default` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs` |
| 0.0% | 1.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/index.mjs:17` |
| 0.0% | 1.0ms | 0.0% | 0us | `delete` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.0ms | 0.0% | 0us | `.wasm-function[4618]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `.wasm-function[50]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `.wasm-function[11387]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `releaseClassHandle` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.0ms | 0.0% | 0us | `runDestructor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.0ms | 0.0% | 0us | `.wasm-function[52]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `.wasm-function[11373]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:396` |
| 0.0% | 1.0ms | 0.0% | 0us | `async _first` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:718` |
| 0.0% | 1.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:49` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `_putCheckpoint` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:10` |
| 0.0% | 1.0ms | 0.0% | 0us | `async normalizeCoords` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/normalizeCoords.ts:4` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async normalizeCoords` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/normalizeCoords.ts` |
| 0.0% | 1.0ms | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:46` |
| 0.0% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1104` |
| 0.0% | 1.0ms | 0.0% | 0us | `async compressImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:22` |
| 0.0% | 1.0ms | 0.0% | 0us | `interopZodTransformInputSchemaImpl` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:418` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `defineLazy` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:61` |
| 0.0% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:1755` |
| 0.0% | 1.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_is_ocg_hidden_imp]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_is_ocg_hidden]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `internal:stream` | `internal:stream:47` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[pdf_get_xref_entry_aux]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `async _streamIterator` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1021` |
| 0.0% | 1.0ms | 0.0% | 0us | `IterableReadableStream` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `IterableReadableWritableStream` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/stream.js:65` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js` |
| 0.0% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:976` |
| 0.0% | 1.0ms | 0.0% | 0us | `get value` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:34` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `normalizeDef` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:753` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `_compileResolved` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` |
| 0.0% | 1.0ms | 0.0% | 0us | `StateGraph` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:163` |
| 0.0% | 1.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:104` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `_getChannelsFromSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `_prepareSingleTask` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js` |
| 0.0% | 1.0ms | 0.0% | 0us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:927` |
| 0.0% | 1.0ms | 0.0% | 0us | `min` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:518` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `$ZodCheckGreaterThan` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:43` |
| 0.0% | 1.0ms | 0.0% | 0us | `_gte` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:523` |
| 0.0% | 1.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_bound_glyph]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[do_recognize_document_stream_and_dir_content]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/extractSchema.ts:37` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:36` |
| 0.0% | 1.0ms | 0.0% | 0us | `withConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:57` |
| 0.0% | 1.0ms | 0.0% | 0us | `RunnableBinding` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:612` |
| 0.0% | 1.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_is_dict]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:121` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async _generateUncached` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` |
| 0.0% | 1.0ms | 0.0% | 0us | `detectTables` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:264` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[pdf_lookup_cmap_full]` | `[native code]` |
| 0.0% | 997us | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:45` |
| 0.0% | 997us | 0.0% | 997us | `_outputWrites` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 993us | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:107` |
| 0.0% | 993us | 0.0% | 993us | `addEdge` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` |
| 0.0% | 992us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v3/types.js:2246` |
| 0.0% | 992us | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/messages_annotation.js:102` |
| 0.0% | 992us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v3/types.js:1723` |
| 0.0% | 992us | 0.0% | 0us | `ZodNever` | `[native code]` |
| 0.0% | 992us | 0.0% | 992us | `ZodType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v3/types.js:257` |
| 0.0% | 989us | 0.0% | 0us | `_outputWrites` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:410` |
| 0.0% | 989us | 0.0% | 0us | `gatherIteratorSync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:53` |
| 0.0% | 989us | 0.0% | 989us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/io.js:114` |
| 0.0% | 989us | 0.0% | 0us | `mapOutputUpdates` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/io.js:111` |
| 0.0% | 989us | 0.0% | 0us | `prefixGenerator` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:44` |
| 0.0% | 989us | 0.0% | 989us | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js` |
| 0.0% | 987us | 0.0% | 0us | `_prepareSingleTask` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:560` |
| 0.0% | 987us | 0.0% | 987us | `XXH3_len_17to128_128b` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/hash.js:220` |
| 0.0% | 987us | 0.0% | 0us | `XXH3` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/hash.js:253` |
| 0.0% | 984us | 0.0% | 0us | `.wasm-function[155]` | `[native code]` |
| 0.0% | 983us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[open_face]` | `[native code]` |
| 0.0% | 983us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[tt_face_init]` | `[native code]` |
| 0.0% | 983us | 0.0% | 983us | `mupdf-wasm.wasm.wasm-function[tt_face_load_cpal]` | `[native code]` |
| 0.0% | 983us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[FT_New_Memory_Face]` | `[native code]` |
| 0.0% | 983us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_new_font_from_buffer]` | `[native code]` |
| 0.0% | 983us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[sfnt_load_face]` | `[native code]` |
| 0.0% | 982us | 0.0% | 0us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:1234` |
| 0.0% | 982us | 0.0% | 982us | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js` |
| 0.0% | 982us | 0.0% | 0us | `bound _invoke` | `[native code]` |
| 0.0% | 982us | 0.0% | 0us | `async _invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:1229` |
| 0.0% | 982us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:1234` |
| 0.0% | 976us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:40` |
| 0.0% | 976us | 0.0% | 976us | `__embind_register_value_object_field` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 976us | 0.0% | 0us | `getDefaultProjectName` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/project.js:4` |
| 0.0% | 976us | 0.0% | 0us | `getDefaultConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:387` |
| 0.0% | 976us | 0.0% | 976us | `nonConstNoSmartPtrRawPointerToWireType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 976us | 0.0% | 976us | `getEnvironmentVariable` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/env.js:154` |
| 0.0% | 975us | 0.0% | 0us | `__embind_register_enum` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 975us | 0.0% | 0us | `__embind_register_class_class_function` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 970us | 0.0% | 970us | `createNamedFunction` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 968us | 0.0% | 968us | `async _write` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js` |
| 0.0% | 967us | 0.0% | 0us | `runWithConfig` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js:22` |
| 0.0% | 967us | 0.0% | 967us | `_configureSync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/callbacks/manager.js` |
| 0.0% | 956us | 0.0% | 0us | `async r` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 956us | 0.0% | 0us | `async createDebugImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:796` |
| 0.0% | 956us | 0.0% | 0us | `async I` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 956us | 0.0% | 956us | `composite` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/composite.mjs` |
| 0.0% | 955us | 0.0% | 955us | `getFunctionName` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 952us | 0.0% | 952us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js` |
| 0.0% | 944us | 0.0% | 944us | `toJsonSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/json_schema.js` |
| 0.0% | 942us | 0.0% | 942us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:707` |
| 0.0% | 941us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_new_pixmap_with_bbox]` | `[native code]` |
| 0.0% | 941us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_malloc]` | `[native code]` |
| 0.0% | 941us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_new_pixmap_with_data]` | `[native code]` |
| 0.0% | 941us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_new_pixmap]` | `[native code]` |
| 0.0% | 940us | 0.0% | 940us | `e` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` |
| 0.0% | 938us | 0.0% | 0us | `process` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:47` |
| 0.0% | 938us | 0.0% | 0us | `RunTree` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:161` |
| 0.0% | 937us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_init_document]` | `[native code]` |
| 0.0% | 937us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_open_document_with_stream]` | `[native code]` |
| 0.0% | 937us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_read_xref_sections]` | `[native code]` |
| 0.0% | 937us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_load_xref]` | `[native code]` |
| 0.0% | 937us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[read_xref_section]` | `[native code]` |
| 0.0% | 937us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[open_document]` | `[native code]` |
| 0.0% | 937us | 0.0% | 937us | `mupdf-wasm.wasm.wasm-function[pdf_read_xref]` | `[native code]` |
| 0.0% | 936us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:14` |
| 0.0% | 935us | 0.0% | 935us | `Serializable` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/serializable.js` |
| 0.0% | 935us | 0.0% | 935us | `async _` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` |
| 0.0% | 935us | 0.0% | 0us | `RunnablePassthrough` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/passthrough.js:39` |
| 0.0% | 935us | 0.0% | 935us | `handleDefaultResult` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js` |
| 0.0% | 935us | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/read.js:28` |
| 0.0% | 927us | 0.0% | 927us | `async invoke` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js` |
| 0.0% | 925us | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/extractSchema.ts:80` |
| 0.0% | 925us | 0.0% | 925us | `nullable` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1134` |
| 0.0% | 925us | 0.0% | 0us | `_prepareNextTasks` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:246` |
| 0.0% | 925us | 0.0% | 0us | `bound nullable` | `[native code]` |
| 0.0% | 924us | 0.0% | 924us | `charCodeAt` | `[native code]` |
| 0.0% | 920us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/functions/compare-build.js:3` |
| 0.0% | 920us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:20` |
| 0.0% | 919us | 0.0% | 919us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts` |
| 0.0% | 916us | 0.0% | 916us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:1` |
| 0.0% | 916us | 0.0% | 0us | `RunnableCallable` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:13` |
| 0.0% | 916us | 0.0% | 0us | `attachNode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:643` |
| 0.0% | 916us | 0.0% | 0us | `ChannelWrite` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:25` |
| 0.0% | 916us | 0.0% | 0us | `_compileResolved` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:484` |
| 0.0% | 914us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:574` |
| 0.0% | 914us | 0.0% | 914us | `messageToOpenAIRole` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/utils/misc.js` |
| 0.0% | 914us | 0.0% | 914us | `async generate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` |
| 0.0% | 913us | 0.0% | 0us | `interopZodObjectStrict` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:298` |
| 0.0% | 912us | 0.0% | 912us | `mupdf-wasm.wasm.wasm-function[pdf_dict_find]` | `[native code]` |
| 0.0% | 912us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_lookup_resource]` | `[native code]` |
| 0.0% | 907us | 0.0% | 907us | `mupdf-wasm.wasm.wasm-function[fz_hash_remove]` | `[native code]` |
| 0.0% | 907us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_empty_store]` | `[native code]` |
| 0.0% | 907us | 0.0% | 0us | `async convertPdfToImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:100` |
| 0.0% | 907us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[wasm_drop_document]` | `[native code]` |
| 0.0% | 907us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_filter_store]` | `[native code]` |
| 0.0% | 907us | 0.0% | 0us | `destroy` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:510` |
| 0.0% | 907us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[pdf_drop_document_imp]` | `[native code]` |
| 0.0% | 907us | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_drop_document]` | `[native code]` |
| 0.0% | 902us | 0.0% | 902us | `mupdf-wasm.wasm.wasm-function[tt_glyph_load]` | `[native code]` |
| 0.0% | 901us | 0.0% | 0us | `async classifyImage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:33` |
| 0.0% | 901us | 0.0% | 901us | `HumanMessage` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/human.js` |
| 0.0% | 897us | 0.0% | 897us | `async convertPdfToImages` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts` |
| 0.0% | 896us | 0.0% | 896us | `consume` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/channels/base.js` |
| 0.0% | 896us | 0.0% | 0us | `_applyWrites` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:114` |
| 0.0% | 896us | 0.0% | 0us | `async tick` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:458` |
| 0.0% | 890us | 0.0% | 0us | `_localRead` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:64` |
| 0.0% | 890us | 0.0% | 890us | `finish` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/channels/base.js` |
| 0.0% | 890us | 0.0% | 0us | `_applyWrites` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:174` |
| 0.0% | 889us | 0.0% | 0us | `async cropper` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:112` |
| 0.0% | 889us | 0.0% | 889us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1107` |
| 0.0% | 889us | 0.0% | 0us | `bound optional` | `[native code]` |
| 0.0% | 889us | 0.0% | 0us | `optional` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1110` |
| 0.0% | 887us | 0.0% | 887us | `detectHorizontalLines` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:508` |
| 0.0% | 881us | 0.0% | 0us | `async _getUpdates` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:610` |
| 0.0% | 881us | 0.0% | 881us | `async _getUpdates` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` |
| 0.0% | 877us | 0.0% | 877us | `getEnumValues` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js` |
| 0.0% | 877us | 0.0% | 0us | `enumProcessor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:136` |
| 0.0% | 872us | 0.0% | 872us | `defineLazy` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:62` |
| 0.0% | 872us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:740` |
| 0.0% | 872us | 0.0% | 0us | `interopZodTransformInputSchemaImpl` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:406` |
| 0.0% | 868us | 0.0% | 868us | `.wasm-function[397]` | `[native code]` |
| 0.0% | 866us | 0.0% | 866us | `entries` | `[native code]` |
| 0.0% | 866us | 0.0% | 866us | `extractToDef` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:161` |
| 0.0% | 866us | 0.0% | 0us | `_compileResolved` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:502` |
| 0.0% | 866us | 0.0% | 0us | `extractDefs` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:182` |
| 0.0% | 864us | 0.0% | 0us | `async getWasmBinary` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 864us | 0.0% | 0us | `async instantiateAsync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 864us | 0.0% | 864us | `getBinarySync` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 858us | 0.0% | 0us | `createToken` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/internal/re.js:50` |
| 0.0% | 858us | 0.0% | 858us | `RegExp` | `[native code]` |
| 0.0% | 858us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/internal/re.js:201` |

## Function Details

### `(anonymous)`
`[native code]` | Self: 8.7% (37.20s) | Total: 12.2% (52.18s) | Samples: 1212

**Called by:**
- `__emval_invoke` (7624)
- `(anonymous)` (7232)
- `(anonymous)` (30)
- `(anonymous)` (11)
- `bound require` (4)
- `(module)` (4)
- `async convertPdfToImages` (1)
- `async (anonymous)` (1)

**Calls:**
- `decodeMemoryView` (5478)
- `.wasm-function[6137]` (4894)
- `emval_returnValue` (2140)
- `bound nonConstNoSmartPtrRawPointerToWireType` (423)
- `bound toWireType` (394)
- `bound fromWireType` (354)
- `bound decodeMemoryView` (6)
- `dlopen` (4)
- `queueListener` (1)
- `Buffer` (1)

### `parse`
`[native code]` | Self: 8.6% (36.66s) | Total: 8.6% (36.66s) | Samples: 3

**Called by:**
- `parseToolCall` (1)
- `finalize` (1)
- `uuid7FromTime` (1)

### `reduce`
`[native code]` | Self: 6.7% (28.84s) | Total: 6.7% (28.86s) | Samples: 31

**Called by:**
- `async cropAndZoom` (35)
- `ensureConfig` (2)

**Calls:**
- `(anonymous)` (6)

### `.wasm-function[8869]`
`[native code]` | Self: 4.9% (21.13s) | Total: 4.9% (21.13s) | Samples: 19421

**Called by:**
- `.wasm-function[2968]` (19421)

### `.wasm-function[8885]`
`[native code]` | Self: 4.3% (18.70s) | Total: 4.3% (18.70s) | Samples: 17235

**Called by:**
- `.wasm-function[2968]` (17235)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:852` | Self: 4.3% (18.61s) | Total: 6.0% (25.99s) | Samples: 2

**Called by:**
- `async (anonymous)` (8)
- `(anonymous)` (1)

**Calls:**
- `(anonymous)` (3)
- `runChecks` (1)
- `runChecks` (1)
- `handleDefaultResult` (1)
- `(anonymous)` (1)

### `.wasm-function[8901]`
`[native code]` | Self: 4.1% (17.66s) | Total: 4.1% (17.66s) | Samples: 16419

**Called by:**
- `.wasm-function[2968]` (16413)
- `.wasm-function[2969]` (6)

### `.wasm-function[8918]`
`[native code]` | Self: 3.2% (14.02s) | Total: 3.2% (14.02s) | Samples: 12997

**Called by:**
- `.wasm-function[2968]` (12991)
- `.wasm-function[2969]` (6)

### `Uint8Array`
`[native code]` | Self: 2.9% (12.62s) | Total: 2.9% (12.62s) | Samples: 3459

**Called by:**
- `decodeMemoryView` (3450)
- `async F` (7)
- `v7Bytes` (2)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:333` | Self: 2.1% (9.16s) | Total: 2.1% (9.16s) | Samples: 3

**Called by:**
- `async (anonymous)` (3)

### `Serializable`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/serializable.js:82` | Self: 1.5% (6.58s) | Total: 1.5% (6.58s) | Samples: 2

**Called by:**
- `BaseMessage` (1)
- `Runnable` (1)

### `getOwnPropertyDescriptors`
`[native code]` | Self: 1.5% (6.48s) | Total: 1.5% (6.48s) | Samples: 1

**Called by:**
- `mergeDefs` (1)

### `isRunTree`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js` | Self: 1.5% (6.44s) | Total: 1.5% (6.44s) | Samples: 1

**Called by:**
- `RunTree` (1)

### `tool`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js` | Self: 1.4% (6.29s) | Total: 1.4% (6.29s) | Samples: 2

**Called by:**
- `async cropper` (2)

### `Sharp`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:426` | Self: 1.4% (6.17s) | Total: 2.8% (12.05s) | Samples: 5

**Called by:**
- `Sharp` (12)

**Calls:**
- `_createInputDescriptor` (3)
- `_createInputDescriptor` (2)
- `_createInputDescriptor` (1)
- `_createInputDescriptor` (1)

### `getMicrosecondPrecisionDatestring`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:31` | Self: 1.3% (5.92s) | Total: 1.3% (5.92s) | Samples: 2

**Called by:**
- `RunTree` (2)

### `_createInputDescriptor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:63` | Self: 1.3% (5.86s) | Total: 1.3% (5.86s) | Samples: 3

**Called by:**
- `Sharp` (3)

### `isArray`
`[native code]` | Self: 1.3% (5.75s) | Total: 1.3% (5.75s) | Samples: 2

**Called by:**
- `parseCallbackConfigArg` (1)
- `AIMessage` (1)

### `async compressImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:25` | Self: 1.2% (5.41s) | Total: 1.3% (5.68s) | Samples: 1

**Calls:**
- `toString` (1)

### `async call`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:248` | Self: 1.1% (5.06s) | Total: 1.1% (5.06s) | Samples: 1

**Called by:**
- `async invoke` (1)

### `getOwnPropertyDescriptor`
`[native code]` | Self: 1.1% (4.84s) | Total: 1.1% (4.84s) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `parseToolCall`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js` | Self: 1.1% (4.82s) | Total: 1.1% (4.82s) | Samples: 1

**Called by:**
- `convertCompletionsMessageToBaseMessage` (1)

### `stringify`
`[native code]` | Self: 1.1% (4.81s) | Total: 1.1% (4.81s) | Samples: 17

**Called by:**
- `async (anonymous)` (15)
- `finalize` (1)
- `convertLangChainToolCallToOpenAI` (1)

### `ensureConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js` | Self: 1.0% (4.58s) | Total: 1.0% (4.58s) | Samples: 2

**Called by:**
- `async stream` (1)
- `async invoke` (1)

### `toJSONSchema`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:564` | Self: 1.0% (4.57s) | Total: 1.0% (4.57s) | Samples: 1

**Called by:**
- `toJsonSchema` (1)

### `(unknown)`
`[native code]` | Self: 1.0% (4.57s) | Total: 18.4% (78.50s) | Samples: 119

**Called by:**
- `morphologyEx` (66103)
- `adaptiveThreshold` (1667)
- `findContours` (207)
- `cvtColor` (171)
- `toPixmap` (132)
- `destroy` (1)
- `isRotationExpected` (1)
- `get` (1)

**Calls:**
- `.wasm-function[505]` (66061)
- `.wasm-function[16092]` (1667)
- `.wasm-function[491]` (187)
- `.wasm-function[674]` (171)
- `mupdf-wasm.wasm.wasm-function[wasm_pdf_new_pixmap_from_page_with_usage]` (132)
- `mupdf-wasm.wasm.wasm-function[wasm_drop_document]` (1)

### `stripNonAlphanumeric`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js` | Self: 1.0% (4.40s) | Total: 1.0% (4.40s) | Samples: 1

**Called by:**
- `convertToDottedOrderFormat` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/parse.js:19` | Self: 0.9% (4.07s) | Total: 0.9% (4.07s) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `BaseMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/base.js` | Self: 0.9% (3.96s) | Total: 0.9% (3.96s) | Samples: 1

**Called by:**
- `AIMessage` (1)

### `Sharp`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:232` | Self: 0.9% (3.93s) | Total: 1.6% (7.01s) | Samples: 2

**Called by:**
- `Sharp` (11)

**Calls:**
- `Duplex` (4)
- `Duplex` (2)
- `Duplex` (1)
- `Duplex` (1)
- `Duplex` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:33` | Self: 0.9% (3.89s) | Total: 0.9% (3.89s) | Samples: 1

**Called by:**
- `init` (1)

### `runChecks`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:36` | Self: 0.8% (3.82s) | Total: 0.8% (3.82s) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `async _generateUncached`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:316` | Self: 0.8% (3.81s) | Total: 3.9% (16.79s) | Samples: 1

**Calls:**
- `map` (5)

### `defineProperty`
`[native code]` | Self: 0.8% (3.73s) | Total: 0.8% (3.73s) | Samples: 5

**Called by:**
- `RunTree` (1)
- `(anonymous)` (1)
- `RunTree` (1)
- `RunTree` (1)
- `get` (1)

### `cloneObject`
`[native code]` | Self: 0.8% (3.70s) | Total: 0.8% (3.70s) | Samples: 2

**Called by:**
- `convertCompletionsMessageToBaseMessage` (1)
- `async (anonymous)` (1)

### `getRunnableConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js:19` | Self: 0.8% (3.60s) | Total: 0.8% (3.60s) | Samples: 1

**Called by:**
- `ensureConfig` (1)

### `runChecks`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:48` | Self: 0.8% (3.55s) | Total: 0.8% (3.55s) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.8% (3.54s) | Total: 21.1% (90.12s) | Samples: 3259

**Called by:**
- `detectVerticalLines` (27732)
- `detectHorizontalLines` (19686)
- `detectTables` (9715)
- `detectTables` (8970)
- `detectVerticalLines` (8178)
- `detectHorizontalLines` (7969)
- `detectTables` (207)
- `detectTables` (114)
- `detectTables` (100)
- `async loadImageForOpenCV` (90)
- `onComplete` (49)
- `detectTables` (38)
- `detectVerticalLines` (30)
- `detectHorizontalLines` (27)
- `async cropTableRows` (11)
- `forEach` (5)
- `(anonymous)` (4)

**Calls:**
- `morphologyEx` (66103)
- `(anonymous)` (7232)
- `Mat.ucharPtr` (5660)
- `findContours` (207)
- `cvtColor` (171)
- `dilate` (100)
- `set` (99)
- `bitwise_or` (38)
- `craftInvokerFunction` (30)
- `whenDependentTypesAreResolved` (12)
- `onComplete` (4)
- `(anonymous)` (4)
- `hasOwnProperty` (1)
- `get` (1)
- `createNamedFunction` (1)
- `defineProperty` (1)
- `Mat` (1)
- `RegisteredClass` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:83` | Self: 0.8% (3.54s) | Total: 3.7% (15.94s) | Samples: 1

**Called by:**
- `async cropper` (4)

**Calls:**
- `ensureConfig` (1)
- `ensureConfig` (1)
- `ensureConfig` (1)

### `async cropAndZoom`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:62` | Self: 0.8% (3.43s) | Total: 0.8% (3.43s) | Samples: 1

### `init`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:22` | Self: 0.7% (3.34s) | Total: 15.4% (65.78s) | Samples: 1

**Called by:**
- `ZodNumber` (14)
- `ZodObject` (10)
- `(anonymous)` (9)
- `(anonymous)` (5)
- `(anonymous)` (5)
- `(anonymous)` (4)
- `ZodNumberFormat` (4)
- `(anonymous)` (3)
- `(anonymous)` (3)
- `ZodOptional` (3)
- `ZodString` (3)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `ZodArray` (2)
- `(anonymous)` (2)
- `(anonymous)` (1)
- `ZodEnum` (1)
- `(anonymous)` (1)
- `ZodLiteral` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

**Calls:**
- `(anonymous)` (9)
- `(anonymous)` (6)
- `(anonymous)` (6)
- `(anonymous)` (4)
- `(anonymous)` (4)
- `(anonymous)` (4)
- `(anonymous)` (4)
- `(anonymous)` (3)
- `(anonymous)` (3)
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

### `parseToolCall`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:26` | Self: 0.7% (3.31s) | Total: 0.7% (3.31s) | Samples: 1

**Called by:**
- `convertCompletionsMessageToBaseMessage` (1)

### `async _generateUncached`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:206` | Self: 0.7% (3.31s) | Total: 0.7% (3.31s) | Samples: 2

**Called by:**
- `async _generateUncached` (1)

### `toISOString`
`[native code]` | Self: 0.6% (2.94s) | Total: 0.6% (2.94s) | Samples: 1

**Called by:**
- `getMicrosecondPrecisionDatestring` (1)

### `AsyncCaller`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js:184` | Self: 0.6% (2.72s) | Total: 0.6% (2.72s) | Samples: 1

**Called by:**
- `BaseLanguageModel` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/parse.js:20` | Self: 0.5% (2.52s) | Total: 6.6% (28.51s) | Samples: 1

**Called by:**
- `async (anonymous)` (10)

**Calls:**
- `(anonymous)` (8)
- `(anonymous)` (1)

### `init`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:18` | Self: 0.5% (2.25s) | Total: 0.5% (2.25s) | Samples: 2

**Called by:**
- `(anonymous)` (1)
- `(anonymous)` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/checks.js:107` | Self: 0.5% (2.22s) | Total: 0.5% (2.22s) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `init`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:21` | Self: 0.5% (2.21s) | Total: 0.5% (2.21s) | Samples: 3

**Called by:**
- `(anonymous)` (1)
- `ZodNumber` (1)
- `(anonymous)` (1)

### `log`
`[native code]` | Self: 0.4% (2.06s) | Total: 0.4% (2.06s) | Samples: 6

**Called by:**
- `async cropTableRows` (4)
- `(module)` (1)
- `async cropper` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:103` | Self: 0.4% (2.02s) | Total: 0.4% (2.02s) | Samples: 1

**Calls:**
- `bound min` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:743` | Self: 0.4% (2.01s) | Total: 0.4% (2.01s) | Samples: 1

**Called by:**
- `init` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` | Self: 0.4% (1.92s) | Total: 0.4% (1.92s) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `Error`
`[native code]` | Self: 0.4% (1.90s) | Total: 0.4% (1.90s) | Samples: 1

**Called by:**
- `toBuffer` (1)

### `get`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:809` | Self: 0.4% (1.87s) | Total: 0.4% (1.87s) | Samples: 1

**Called by:**
- `interopZodTransformInputSchemaImpl` (1)
- `interopZodObjectStrict` (1)

**Calls:**
- `defineProperty` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:141` | Self: 0.4% (1.85s) | Total: 0.8% (3.77s) | Samples: 1

**Calls:**
- `log` (1)

### `Sharp`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:226` | Self: 0.4% (1.85s) | Total: 0.4% (1.85s) | Samples: 2

**Called by:**
- `Sharp` (2)

### `EventEmitter`
`node:events:19` | Self: 0.4% (1.84s) | Total: 0.4% (1.84s) | Samples: 1

**Called by:**
- `Stream` (1)

### `assign`
`[native code]` | Self: 0.4% (1.75s) | Total: 0.4% (1.75s) | Samples: 4

**Called by:**
- `(anonymous)` (2)
- `mergeDefs` (1)
- `RunTree` (1)

### `anonymous`
`[native code]` | Self: 0.3% (1.63s) | Total: 0.4% (1.70s) | Samples: 46

**Called by:**
- `require` (33)
- `node:stream` (11)
- `node:util` (9)
- `internal:stream` (9)
- `internal:streams/pipeline` (8)
- `internal:streams/compose` (8)
- `internal:streams/duplex` (7)
- `craftInvokerFunction` (5)
- `node:fs` (4)
- `node:fs/promises` (3)
- `bound require` (2)
- `node:path` (2)
- `internal:validators` (2)
- `internal:util/inspect` (2)
- `internal:promisify` (1)
- `internal:streams/end-of-stream` (1)
- `internal:shared` (1)
- `internal:streams/operators` (1)
- `internal:streams/readable` (1)
- `node:fs` (1)
- `internal:stream` (1)

**Calls:**
- `internal:stream` (9)
- `internal:streams/pipeline` (8)
- `internal:streams/compose` (8)
- `internal:streams/duplex` (7)
- `(anonymous)` (4)
- `node:fs/promises` (3)
- `internal:util/inspect` (2)
- `internal:validators` (2)
- `(anonymous)` (2)
- `internal:util/inspect` (1)
- `internal:shared` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `internal:streams/end-of-stream` (1)
- `internal:streams/writable` (1)
- `internal:streams/readable` (1)
- `internal:util/inspect` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `node:child_process` (1)
- `(anonymous)` (1)
- `internal:shared` (1)
- `internal:stream` (1)
- `internal:streams/operators` (1)
- `(anonymous)` (1)
- `node:timers/promises` (1)
- `internal:promisify` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `emval_returnValue`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.3% (1.49s) | Total: 0.5% (2.43s) | Samples: 1277

**Called by:**
- `(anonymous)` (2140)

**Calls:**
- `bound toWireType` (863)

### `decodeMemoryView`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.3% (1.41s) | Total: 1.3% (5.94s) | Samples: 1294

**Called by:**
- `(anonymous)` (5478)
- `bound decodeMemoryView` (5)

**Calls:**
- `Uint8Array` (3450)
- `get buffer` (739)

### `bound toWireType`
`[native code]` | Self: 0.3% (1.34s) | Total: 0.4% (1.80s) | Samples: 1237

**Called by:**
- `emval_returnValue` (863)
- `Mat.ucharPtr` (403)
- `(anonymous)` (394)
- `Mat.roi` (1)

**Calls:**
- `toWireType` (364)
- `toWireType` (60)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts` | Self: 0.3% (1.33s) | Total: 0.3% (1.33s) | Samples: 1

**Called by:**
- `async cropTableRows` (1)

### `get`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.2% (1.07s) | Total: 0.2% (1.19s) | Samples: 989

**Called by:**
- `detectHorizontalLines` (639)
- `detectVerticalLines` (456)
- `detectHorizontalLines` (3)
- `detectTables` (1)
- `(anonymous)` (1)

**Calls:**
- `.wasm-function[549]` (75)
- `fromWireType` (12)
- `fromWireType` (12)
- `validateThis` (10)
- `wasm-stub` (1)
- `validateThis` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:163` | Self: 0.2% (1.05s) | Total: 0.2% (1.05s) | Samples: 1

### `WritableState`
`internal:streams/writable:135` | Self: 0.2% (1.04s) | Total: 0.2% (1.04s) | Samples: 1

**Called by:**
- `Duplex` (1)

### `_resolvePromises`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:56` | Self: 0.2% (928.8ms) | Total: 0.2% (928.8ms) | Samples: 1

**Called by:**
- `_tryToStartAnother` (1)

### `json`
`[native code]` | Self: 0.2% (870.2ms) | Total: 0.2% (870.2ms) | Samples: 1

**Called by:**
- `async _generate` (1)

### `get buffer`
`[native code]` | Self: 0.1% (797.2ms) | Total: 0.1% (797.2ms) | Samples: 739

**Called by:**
- `decodeMemoryView` (739)

### `.wasm-function[9388]`
`[native code]` | Self: 0.1% (746.1ms) | Total: 0.1% (746.1ms) | Samples: 687

**Called by:**
- `.wasm-function[2968]` (687)

### `.wasm-function[2953]`
`[native code]` | Self: 0.1% (676.8ms) | Total: 0.1% (676.8ms) | Samples: 630

**Called by:**
- `.wasm-function[2968]` (630)

### `Mat.ucharPtr`
`[native code]` | Self: 0.1% (651.4ms) | Total: 1.4% (6.20s) | Samples: 604

**Called by:**
- `(anonymous)` (5660)

**Calls:**
- `.wasm-function[6137]` (3893)
- `bound toWireType` (403)
- `bound nonConstNoSmartPtrRawPointerToWireType` (397)
- `bound fromWireType` (357)
- `wasm-stub` (5)
- `nonConstNoSmartPtrRawPointerToWireType` (1)

### `Sharp`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:269` | Self: 0.1% (647.0ms) | Total: 0.1% (647.0ms) | Samples: 6

**Called by:**
- `Sharp` (6)

### `shallowClone`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:186` | Self: 0.1% (618.3ms) | Total: 0.1% (618.3ms) | Samples: 1

**Called by:**
- `defaultProcessor` (1)

### `bound nonConstNoSmartPtrRawPointerToWireType`
`[native code]` | Self: 0.1% (533.2ms) | Total: 0.2% (884.2ms) | Samples: 495

**Called by:**
- `(anonymous)` (423)
- `Mat.ucharPtr` (397)

**Calls:**
- `nonConstNoSmartPtrRawPointerToWireType` (325)

### `.wasm-function[6148]`
`[native code]` | Self: 0.1% (512.2ms) | Total: 2.1% (9.20s) | Samples: 476

**Called by:**
- `.wasm-function[6137]` (8395)

**Calls:**
- `wasm-stub` (7919)

### `.wasm-function[6137]`
`[native code]` | Self: 0.1% (429.7ms) | Total: 2.2% (9.63s) | Samples: 397

**Called by:**
- `(anonymous)` (4894)
- `Mat.ucharPtr` (3893)
- `wasm-stub` (5)

**Calls:**
- `.wasm-function[6148]` (8395)

### `bound fromWireType`
`[native code]` | Self: 0.0% (409.9ms) | Total: 0.1% (771.0ms) | Samples: 377

**Called by:**
- `Mat.ucharPtr` (357)
- `(anonymous)` (354)
- `boundingRect` (1)

**Calls:**
- `fromWireType` (335)

### `mupdf-wasm.wasm.wasm-function[deflate_slow]`
`[native code]` | Self: 0.0% (402.1ms) | Total: 0.2% (1.03s) | Samples: 365

**Called by:**
- `mupdf-wasm.wasm.wasm-function[deflate]` (938)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fill_window]` (367)
- `mupdf-wasm.wasm.wasm-function[longest_match]` (184)
- `mupdf-wasm.wasm.wasm-function[_tr_flush_block]` (22)

### `toWireType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (392.3ms) | Total: 0.0% (392.3ms) | Samples: 364

**Called by:**
- `bound toWireType` (364)

### `fromWireType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (373.9ms) | Total: 0.0% (373.9ms) | Samples: 347

**Called by:**
- `bound fromWireType` (335)
- `get` (12)

### `nonConstNoSmartPtrRawPointerToWireType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (350.9ms) | Total: 0.0% (350.9ms) | Samples: 325

**Called by:**
- `bound nonConstNoSmartPtrRawPointerToWireType` (325)

### `mupdf-wasm.wasm.wasm-function[fill_window]`
`[native code]` | Self: 0.0% (339.5ms) | Total: 0.0% (404.7ms) | Samples: 307

**Called by:**
- `mupdf-wasm.wasm.wasm-function[deflate_slow]` (367)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[adler32]` (60)

### `wasm-stub`
`[native code]` | Self: 0.0% (325.1ms) | Total: 2.4% (10.49s) | Samples: 300

**Called by:**
- `.wasm-function[6148]` (7919)
- `asPNG` (1137)
- `dilate` (100)
- `threshold` (81)
- `initRuntime` (65)
- `.wasm-function[4417]` (42)
- `bitwise_or` (38)
- `countNonZero` (24)
- `.wasm-function[2667]` (19)
- `(module)` (11)
- `mupdf-wasm.wasm.wasm-function[sbrk]` (9)
- `mupdf-wasm.wasm.wasm-function[do_tzset]` (9)
- `Mat.ucharPtr` (5)
- `.wasm-function[1199]` (3)
- `openDocument` (2)
- `mupdf-wasm.wasm.wasm-function[emscripten_builtin_malloc]` (2)
- `MatVector.get` (2)
- `.wasm-function[4554]` (2)
- `loadPage` (1)
- `runDestructor` (1)
- `boundingRect` (1)
- `.wasm-function[6535]` (1)
- `get` (1)
- `.wasm-function[3389]` (1)
- `toWireType` (1)

**Calls:**
- `__emval_invoke` (7628)
- `mupdf-wasm.wasm.wasm-function[wasm_new_buffer_from_pixmap_as_png]` (1137)
- `.wasm-function[4377]` (93)
- `.wasm-function[14700]` (81)
- `.wasm-function[16862]` (65)
- `.wasm-function[674]` (38)
- `.wasm-function[1293]` (23)
- `__embind_register_function` (23)
- `__embind_register_class_function` (13)
- `mupdf-wasm.wasm.wasm-function[wasm_init_context]` (11)
- `h` (11)
- `k` (8)
- `__embind_register_enum_value` (5)
- `__embind_register_class_constructor` (5)
- `__embind_register_class` (5)
- `.wasm-function[6137]` (5)
- `_emscripten_resize_heap` (3)
- `__embind_register_class_property` (2)
- `mupdf-wasm.wasm.wasm-function[wasm_open_document_with_buffer]` (2)
- `__embind_register_constant` (2)
- `.wasm-function[4554]` (2)
- `__embind_register_optional` (1)
- `k` (1)
- `.wasm-function[4618]` (1)
- `.wasm-function[2608]` (1)
- `__embind_register_value_object_field` (1)
- `__embind_register_void` (1)
- `mupdf-wasm.wasm.wasm-function[wasm_load_page]` (1)
- `.wasm-function[1859]` (1)
- `__embind_register_value_object_field` (1)
- `__embind_finalize_value_object` (1)
- `__embind_register_enum` (1)
- `__emval_invoke` (1)
- `.wasm-function[6551]` (1)
- `__emval_create_invoker` (1)
- `__embind_register_class_class_function` (1)

### `toString`
`[native code]` | Self: 0.0% (276.3ms) | Total: 0.0% (276.3ms) | Samples: 1

**Called by:**
- `async compressImage` (1)

### `findWasmBinary`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (241.9ms) | Total: 0.0% (241.9ms) | Samples: 220

**Called by:**
- `async createWasm` (220)

### `mupdf-wasm.wasm.wasm-function[png_write_band]`
`[native code]` | Self: 0.0% (209.1ms) | Total: 0.2% (1.25s) | Samples: 194

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_write_band]` (1137)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[deflate]` (938)
- `mupdf-wasm.wasm.wasm-function[putchunk]` (5)

### `mupdf-wasm.wasm.wasm-function[longest_match]`
`[native code]` | Self: 0.0% (204.4ms) | Total: 0.0% (204.4ms) | Samples: 184

**Called by:**
- `mupdf-wasm.wasm.wasm-function[deflate_slow]` (184)

### `set`
`[native code]` | Self: 0.0% (204.4ms) | Total: 0.0% (204.4ms) | Samples: 100

**Called by:**
- `(anonymous)` (99)
- `process` (1)

### `.wasm-function[12303]`
`[native code]` | Self: 0.0% (190.9ms) | Total: 0.0% (190.9ms) | Samples: 179

**Called by:**
- `.wasm-function[76]` (179)

### `mkdir`
`[native code]` | Self: 0.0% (187.2ms) | Total: 0.0% (187.2ms) | Samples: 3

**Called by:**
- `async mkdir` (3)

### `.wasm-function[9672]`
`[native code]` | Self: 0.0% (183.4ms) | Total: 0.0% (183.4ms) | Samples: 171

**Called by:**
- `.wasm-function[68]` (171)

### `resolve`
`[native code]` | Self: 0.0% (155.2ms) | Total: 0.0% (155.2ms) | Samples: 3

**Called by:**
- `bound resolve` (3)

### `copyDataProperties`
`[native code]` | Self: 0.0% (144.8ms) | Total: 0.0% (144.8ms) | Samples: 5

**Called by:**
- `_filterInvocationParamsForTracing` (3)
- `BaseLanguageModel` (1)
- `RunTree` (1)

### `Promise`
`[native code]` | Self: 0.0% (130.7ms) | Total: 17.5% (74.72s) | Samples: 1

**Called by:**
- `_pipeline` (32)
- `async add` (29)
- `async func` (15)
- `metadata` (11)
- `AsyncGeneratorWithSetup` (3)
- `async _invoke` (1)

**Calls:**
- `(anonymous)` (31)
- `(anonymous)` (28)
- `(anonymous)` (15)
- `(anonymous)` (11)
- `(anonymous)` (3)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (129.7ms) | Total: 0.0% (129.7ms) | Samples: 5

**Called by:**
- `(anonymous)` (3)
- `async (anonymous)` (2)

### `.wasm-function[12009]`
`[native code]` | Self: 0.0% (123.1ms) | Total: 0.0% (123.1ms) | Samples: 116

**Called by:**
- `.wasm-function[76]` (116)

### `.wasm-function[1543]`
`[native code]` | Self: 0.0% (118.8ms) | Total: 0.0% (202.5ms) | Samples: 110

**Called by:**
- `.wasm-function[10948]` (187)

**Calls:**
- `.wasm-function[510]` (56)
- `.wasm-function[2992]` (18)
- `.wasm-function[2996]` (2)
- `.wasm-function[397]` (1)

### `constructor Mat`
`[native code]` | Self: 0.0% (113.6ms) | Total: 0.0% (113.6ms) | Samples: 1

**Called by:**
- `Mat` (1)

### `.wasm-function[8596]`
`[native code]` | Self: 0.0% (101.1ms) | Total: 0.0% (101.1ms) | Samples: 92

**Called by:**
- `.wasm-function[68]` (92)

### `writeFile`
`[native code]` | Self: 0.0% (98.3ms) | Total: 0.0% (98.3ms) | Samples: 1

**Called by:**
- `bound writeFile` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:171` | Self: 0.0% (94.2ms) | Total: 0.0% (94.2ms) | Samples: 2

**Called by:**
- `async withRetry` (2)

### `.wasm-function[2968]`
`[native code]` | Self: 0.0% (90.7ms) | Total: 17.1% (73.03s) | Samples: 84

**Called by:**
- `.wasm-function[9540]` (67461)

**Calls:**
- `.wasm-function[8869]` (19421)
- `.wasm-function[8885]` (17235)
- `.wasm-function[8901]` (16413)
- `.wasm-function[8918]` (12991)
- `.wasm-function[9388]` (687)
- `.wasm-function[2953]` (630)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:308` | Self: 0.0% (90.0ms) | Total: 1.2% (5.24s) | Samples: 1

**Called by:**
- `map` (36)

**Calls:**
- `async (anonymous)` (35)

### `invocationParams`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:244` | Self: 0.0% (84.0ms) | Total: 0.0% (84.0ms) | Samples: 1

**Called by:**
- `async _generateUncached` (1)

### `.wasm-function[549]`
`[native code]` | Self: 0.0% (83.5ms) | Total: 0.0% (83.5ms) | Samples: 75

**Called by:**
- `get` (75)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/stringify.js:8` | Self: 0.0% (80.4ms) | Total: 0.0% (80.4ms) | Samples: 1

### `grow`
`[native code]` | Self: 0.0% (78.6ms) | Total: 0.0% (78.6ms) | Samples: 4

**Called by:**
- `Z` (4)

### `isInteropZodSchema`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:31` | Self: 0.0% (78.2ms) | Total: 0.0% (78.2ms) | Samples: 1

**Called by:**
- `isStructuredToolParams` (1)

### `invocationParams`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:217` | Self: 0.0% (77.4ms) | Total: 0.0% (77.4ms) | Samples: 1

**Called by:**
- `async _generate` (1)

### `fetch`
`[native code]` | Self: 0.0% (69.9ms) | Total: 0.0% (69.9ms) | Samples: 7

**Called by:**
- `async (anonymous)` (7)

### `mupdf-wasm.wasm.wasm-function[adler32]`
`[native code]` | Self: 0.0% (65.1ms) | Total: 0.0% (65.1ms) | Samples: 60

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fill_window]` (60)

### `ReadableState`
`internal:streams/readable:40` | Self: 0.0% (63.8ms) | Total: 0.0% (63.8ms) | Samples: 1

**Called by:**
- `Duplex` (1)

### `toHandle`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (62.8ms) | Total: 0.0% (62.8ms) | Samples: 59

**Called by:**
- `toWireType` (59)

### `convertLangChainToolCallToOpenAI`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js` | Self: 0.0% (59.5ms) | Total: 0.0% (59.5ms) | Samples: 1

**Called by:**
- `map` (1)

### `async pRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js:111` | Self: 0.0% (59.4ms) | Total: 0.0% (59.4ms) | Samples: 2

**Called by:**
- `async pRetry` (2)

### `async call`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:134` | Self: 0.0% (59.4ms) | Total: 0.0% (59.4ms) | Samples: 1

### `Stream`
`internal:streams/legacy` | Self: 0.0% (59.0ms) | Total: 0.0% (59.0ms) | Samples: 1

**Called by:**
- `Duplex` (1)

### `_configureSync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/callbacks/manager.js:528` | Self: 0.0% (58.3ms) | Total: 0.0% (58.3ms) | Samples: 1

**Called by:**
- `async _generateUncached` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:83` | Self: 0.0% (57.3ms) | Total: 0.0% (110.9ms) | Samples: 1

**Called by:**
- `async invoke` (3)

**Calls:**
- `_convertInputToPromptValue` (2)

### `_convertInputToPromptValue`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:225` | Self: 0.0% (52.0ms) | Total: 0.0% (53.6ms) | Samples: 1

**Called by:**
- `async invoke` (2)

**Calls:**
- `ChatPromptValue` (1)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:691` | Self: 0.0% (52.0ms) | Total: 0.0% (110.7ms) | Samples: 1

**Calls:**
- `extract` (1)
- `extract` (1)

### `.wasm-function[934]`
`[native code]` | Self: 0.0% (51.7ms) | Total: 0.4% (1.79s) | Samples: 48

**Called by:**
- `.wasm-function[5841]` (1667)

**Calls:**
- `.wasm-function[581]` (1321)
- `.wasm-function[76]` (298)

### `async pRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js:99` | Self: 0.0% (51.0ms) | Total: 0.0% (51.0ms) | Samples: 1

**Called by:**
- `async pRetry` (1)

### `getContextVariable`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/context.js` | Self: 0.0% (48.9ms) | Total: 0.0% (48.9ms) | Samples: 1

**Called by:**
- `_getConfigureHooks` (1)

### `.wasm-function[510]`
`[native code]` | Self: 0.0% (47.6ms) | Total: 0.0% (150.0ms) | Samples: 44

**Called by:**
- `.wasm-function[9595]` (81)
- `.wasm-function[1543]` (56)

**Calls:**
- `.wasm-function[68]` (92)
- `.wasm-function[59]` (1)

### `instantiate`
`[native code]` | Self: 0.0% (46.0ms) | Total: 0.0% (46.0ms) | Samples: 43

**Called by:**
- `async instantiateArrayBuffer` (23)
- `async (anonymous)` (20)

### `binaryDecode`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (43.5ms) | Total: 0.0% (43.5ms) | Samples: 40

**Called by:**
- `findWasmBinary` (40)

### `bind`
`[native code]` | Self: 0.0% (41.3ms) | Total: 0.0% (41.3ms) | Samples: 2

**Called by:**
- `WritableState` (1)
- `craftInvokerFunction` (1)

### `.wasm-function[12680]`
`[native code]` | Self: 0.0% (41.2ms) | Total: 0.0% (41.2ms) | Samples: 38

**Called by:**
- `.wasm-function[503]` (38)

### `mupdf-wasm.wasm.wasm-function[paint_span_with_color_3_solid]`
`[native code]` | Self: 0.0% (40.9ms) | Total: 0.0% (40.9ms) | Samples: 38

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_convert_gel]` (38)

### `detectVerticalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:575` | Self: 0.0% (39.2ms) | Total: 2.1% (8.98s) | Samples: 35

**Called by:**
- `async cropTableRows` (8213)

**Calls:**
- `(anonymous)` (8178)

### `ensureLangGraphConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/utils/config.js` | Self: 0.0% (39.0ms) | Total: 0.0% (39.0ms) | Samples: 1

**Called by:**
- `async invoke` (1)

### `Sharp`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:229` | Self: 0.0% (38.3ms) | Total: 0.0% (38.3ms) | Samples: 1

**Called by:**
- `Sharp` (1)

### `require`
`[native code]` | Self: 0.0% (37.3ms) | Total: 0.3% (1.60s) | Samples: 2

**Called by:**
- `bound require` (35)

**Calls:**
- `anonymous` (33)

### `test`
`[native code]` | Self: 0.0% (35.6ms) | Total: 0.0% (35.6ms) | Samples: 1

**Called by:**
- `toFile` (1)

### `forEach`
`[native code]` | Self: 0.0% (34.6ms) | Total: 0.0% (68.3ms) | Samples: 4

**Called by:**
- `extract` (4)
- `whenDependentTypesAreResolved` (4)
- `sharedRegisterType` (4)

**Calls:**
- `(anonymous)` (5)
- `(anonymous)` (2)
- `(anonymous)` (1)

### `extract`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:482` | Self: 0.0% (32.6ms) | Total: 0.0% (32.6ms) | Samples: 1

**Called by:**
- `async cropTableRows` (1)

### `node:worker_threads`
`node:worker_threads:33` | Self: 0.0% (28.0ms) | Total: 0.0% (28.0ms) | Samples: 1

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:489` | Self: 0.0% (27.0ms) | Total: 0.0% (27.0ms) | Samples: 2

**Called by:**
- `forEach` (2)

### `get`
`[native code]` | Self: 0.0% (25.1ms) | Total: 0.0% (25.1ms) | Samples: 3

**Called by:**
- `getWasmTableEntry` (2)
- `process` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:92` | Self: 0.0% (25.1ms) | Total: 1.0% (4.40s) | Samples: 2

**Called by:**
- `init` (4)

**Calls:**
- `get` (1)
- `_installLazyMethods` (1)

### `.wasm-function[11510]`
`[native code]` | Self: 0.0% (23.7ms) | Total: 0.0% (23.7ms) | Samples: 23

**Called by:**
- `.wasm-function[466]` (23)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/checks.js:104` | Self: 0.0% (22.4ms) | Total: 0.0% (22.4ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `Int8Array`
`[native code]` | Self: 0.0% (22.1ms) | Total: 0.0% (22.1ms) | Samples: 14

**Called by:**
- `R` (11)
- `updateMemoryViews` (3)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:74` | Self: 0.0% (21.7ms) | Total: 0.0% (21.7ms) | Samples: 1

**Called by:**
- `init` (1)

### `mupdf-wasm.wasm.wasm-function[compress_block]`
`[native code]` | Self: 0.0% (20.9ms) | Total: 0.0% (20.9ms) | Samples: 19

**Called by:**
- `mupdf-wasm.wasm.wasm-function[_tr_flush_block]` (19)

### `mupdf-wasm.wasm.wasm-function[fz_convert_gel]`
`[native code]` | Self: 0.0% (20.4ms) | Total: 0.0% (61.3ms) | Samples: 18

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_convert_rasterizer]` (56)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[paint_span_with_color_3_solid]` (38)

### `.wasm-function[2992]`
`[native code]` | Self: 0.0% (19.7ms) | Total: 0.0% (19.7ms) | Samples: 18

**Called by:**
- `.wasm-function[1543]` (18)

### `get`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:37` | Self: 0.0% (19.5ms) | Total: 0.0% (19.5ms) | Samples: 2

**Called by:**
- `async cropper` (1)
- `describe` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:49` | Self: 0.0% (18.7ms) | Total: 0.0% (18.7ms) | Samples: 6

**Called by:**
- `reduce` (6)

### `Function`
`[native code]` | Self: 0.0% (17.0ms) | Total: 0.0% (17.0ms) | Samples: 16

**Called by:**
- `createJsInvoker` (16)

### `get`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:70` | Self: 0.0% (16.5ms) | Total: 0.0% (16.5ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `Duplex`
`internal:streams/duplex:6` | Self: 0.0% (16.4ms) | Total: 0.0% (16.4ms) | Samples: 1

**Called by:**
- `Sharp` (1)

### `Duplex`
`internal:streams/duplex:15` | Self: 0.0% (15.8ms) | Total: 0.2% (1.16s) | Samples: 1

**Called by:**
- `Sharp` (4)

**Calls:**
- `WritableState` (1)
- `WritableState` (1)
- `ReadableState` (1)

### `int`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:530` | Self: 0.0% (15.5ms) | Total: 1.9% (8.30s) | Samples: 1

**Called by:**
- `bound int` (5)

**Calls:**
- `_int` (4)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:17` | Self: 0.0% (14.8ms) | Total: 0.0% (14.8ms) | Samples: 1

**Called by:**
- `init` (1)

### `init`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:8` | Self: 0.0% (13.7ms) | Total: 0.0% (13.7ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:76` | Self: 0.0% (12.8ms) | Total: 0.0% (12.8ms) | Samples: 1

**Called by:**
- `init` (1)

### `extractDefs`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:206` | Self: 0.0% (12.6ms) | Total: 0.0% (12.6ms) | Samples: 1

**Called by:**
- `toJSONSchema` (1)

### `mupdf-wasm.wasm.wasm-function[draw_glyph]`
`[native code]` | Self: 0.0% (12.4ms) | Total: 0.0% (12.4ms) | Samples: 11

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_fill_text]` (11)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:488` | Self: 0.0% (12.1ms) | Total: 1.4% (6.17s) | Samples: 1

**Called by:**
- `init` (6)

**Calls:**
- `init` (5)

### `fromWireType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (11.9ms) | Total: 0.0% (11.9ms) | Samples: 12

**Called by:**
- `get` (12)

### `warn`
`[native code]` | Self: 0.0% (11.4ms) | Total: 0.0% (11.4ms) | Samples: 6

**Called by:**
- `attachCropImages` (6)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:67` | Self: 0.0% (11.0ms) | Total: 0.0% (11.0ms) | Samples: 1

**Called by:**
- `init` (1)

### `validateThis`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (10.8ms) | Total: 0.0% (10.8ms) | Samples: 10

**Called by:**
- `get` (10)

### `enqueue`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/priority-queue.js:11` | Self: 0.0% (9.9ms) | Total: 0.0% (9.9ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (9.7ms) | Total: 0.0% (58.6ms) | Samples: 5

**Called by:**
- `async (anonymous)` (9)
- `async I` (1)

**Calls:**
- `instantiate` (20)
- `async (anonymous)` (9)
- `_` (5)
- `D` (1)
- `async I` (1)
- `async F` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:870` | Self: 0.0% (9.5ms) | Total: 0.0% (9.5ms) | Samples: 1

**Called by:**
- `init` (1)

### `getVerbosity`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:117` | Self: 0.0% (9.4ms) | Total: 0.0% (9.4ms) | Samples: 1

**Called by:**
- `BaseLangChain` (1)

### `createJsInvoker`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (9.2ms) | Total: 0.0% (26.3ms) | Samples: 5

**Called by:**
- `craftInvokerFunction` (21)

**Calls:**
- `Function` (16)

### `init`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js` | Self: 0.0% (9.1ms) | Total: 0.0% (9.1ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `string`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/regexes.js:94` | Self: 0.0% (9.1ms) | Total: 0.0% (9.1ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `_createInputDescriptor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:68` | Self: 0.0% (8.5ms) | Total: 0.0% (8.5ms) | Samples: 1

**Called by:**
- `Sharp` (1)

### `getFullYear`
`[native code]` | Self: 0.0% (8.4ms) | Total: 0.0% (8.4ms) | Samples: 8

**Called by:**
- `k` (8)

### `updateMemoryViews`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (7.2ms) | Total: 0.0% (7.2ms) | Samples: 1

**Called by:**
- `receiveInstance` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_process_stream]`
`[native code]` | Self: 0.0% (5.8ms) | Total: 0.0% (142.3ms) | Samples: 4

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_raw_contents]` (123)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (117)
- `mupdf-wasm.wasm.wasm-function[pdf_lex]` (2)

### `whenDependentTypesAreResolved`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (5.5ms) | Total: 0.0% (5.5ms) | Samples: 1

**Called by:**
- `__embind_register_class` (1)

### `mupdf-wasm.wasm.wasm-function[inflate]`
`[native code]` | Self: 0.0% (5.4ms) | Total: 0.0% (5.4ms) | Samples: 3

**Called by:**
- `mupdf-wasm.wasm.wasm-function[next_flated]` (3)

### `whenDependentTypesAreResolved`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (4.7ms) | Total: 0.0% (68.9ms) | Samples: 4

**Called by:**
- `__embind_register_function` (21)
- `(anonymous)` (12)
- `__embind_register_class_function` (11)
- `__embind_register_class_constructor` (4)
- `__embind_register_class` (4)
- `__embind_register_class_property` (2)
- `__embind_register_constant` (2)
- `__embind_finalize_value_object` (1)
- `__embind_register_class_class_function` (1)

**Calls:**
- `onComplete` (49)
- `forEach` (4)
- `hasOwnProperty` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_flush_text_imp]`
`[native code]` | Self: 0.0% (4.5ms) | Total: 0.0% (33.9ms) | Samples: 4

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_ET]` (29)
- `mupdf-wasm.wasm.wasm-function[pdf_set_color]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_fill_text]` (24)
- `mupdf-wasm.wasm.wasm-function[pdf_begin_group]` (1)
- `mupdf-wasm.wasm.wasm-function[fz_drop_text]` (1)

### `detectHorizontalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:500` | Self: 0.0% (4.3ms) | Total: 2.0% (8.67s) | Samples: 4

**Called by:**
- `async cropTableRows` (7973)

**Calls:**
- `(anonymous)` (7969)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (4.1ms) | Total: 0.0% (4.1ms) | Samples: 3

**Called by:**
- `map` (1)
- `onComplete` (1)
- `detectTables` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:202` | Self: 0.0% (4.0ms) | Total: 0.0% (4.0ms) | Samples: 1

**Called by:**
- `init` (1)

### `dlopen`
`[native code]` | Self: 0.0% (3.8ms) | Total: 0.0% (3.8ms) | Samples: 4

**Called by:**
- `(anonymous)` (4)

### `create`
`[native code]` | Self: 0.0% (3.2ms) | Total: 0.0% (3.2ms) | Samples: 3

**Called by:**
- `__embind_register_enum_value` (2)
- `makeClassHandle` (1)

### `mupdf-wasm.wasm.wasm-function[fz_render_glyph]`
`[native code]` | Self: 0.0% (3.2ms) | Total: 0.0% (11.0ms) | Samples: 3

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_fill_text]` (10)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_render_ft_glyph]` (6)
- `mupdf-wasm.wasm.wasm-function[fz_keep_colorspace]` (1)

### `_createInputDescriptor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs` | Self: 0.0% (3.0ms) | Total: 0.0% (3.0ms) | Samples: 2

**Called by:**
- `Sharp` (2)

### `mupdf-wasm.wasm.wasm-function[crc32_z]`
`[native code]` | Self: 0.0% (3.0ms) | Total: 0.0% (3.0ms) | Samples: 3

**Called by:**
- `mupdf-wasm.wasm.wasm-function[crc32]` (3)

### `detectVerticalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:574` | Self: 0.0% (2.9ms) | Total: 0.1% (494.2ms) | Samples: 3

**Called by:**
- `async cropTableRows` (459)

**Calls:**
- `get` (456)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:73` | Self: 0.0% (2.4ms) | Total: 0.0% (2.4ms) | Samples: 2

**Called by:**
- `init` (2)

### `craftInvokerFunction`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (2.4ms) | Total: 0.0% (36.1ms) | Samples: 2

**Called by:**
- `(anonymous)` (30)

**Calls:**
- `createJsInvoker` (21)
- `anonymous` (5)
- `usesDestructorStack` (1)
- `bind` (1)

### `__emval_invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (2.4ms) | Total: 1.9% (8.38s) | Samples: 2

**Called by:**
- `wasm-stub` (7628)

**Calls:**
- `(anonymous)` (7624)
- `methodCaller<(Mat) => emscripten::val>` (2)

### `mupdf-wasm.wasm.wasm-function[jpeg_idct_islow]`
`[native code]` | Self: 0.0% (2.3ms) | Total: 0.0% (2.3ms) | Samples: 2

**Called by:**
- `mupdf-wasm.wasm.wasm-function[decompress_onepass]` (2)

### `mupdf-wasm.wasm.wasm-function[fz_draw_fill_text]`
`[native code]` | Self: 0.0% (2.3ms) | Total: 0.0% (26.8ms) | Samples: 2

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_fill_text]` (24)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[draw_glyph]` (11)
- `mupdf-wasm.wasm.wasm-function[fz_render_glyph]` (10)
- `mupdf-wasm.wasm.wasm-function[fz_drop_icc_link]` (1)

### `async next`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js` | Self: 0.0% (2.3ms) | Total: 0.0% (2.3ms) | Samples: 2

**Called by:**
- `async next` (1)
- `async pull` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/import_map.js:71` | Self: 0.0% (2.2ms) | Total: 0.0% (2.2ms) | Samples: 1

### `mupdf-wasm.wasm.wasm-function[scale_row_to_temp3]`
`[native code]` | Self: 0.0% (2.2ms) | Total: 0.0% (2.2ms) | Samples: 2

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_scale_pixmap_cached]` (2)

### `emit`
`node:events:86` | Self: 0.0% (2.2ms) | Total: 0.0% (2.2ms) | Samples: 1

**Called by:**
- `queueListener` (1)

### `mupdf-wasm.wasm.wasm-function[fz_stroke_lineto_aux]`
`[native code]` | Self: 0.0% (2.2ms) | Total: 0.0% (3.5ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[stroke_lineto]` (1)
- `mupdf-wasm.wasm.wasm-function[fz_stroke_bezier]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_add_line_join]` (1)

### `mupdf-wasm.wasm.wasm-function[build_tree]`
`[native code]` | Self: 0.0% (2.2ms) | Total: 0.0% (2.2ms) | Samples: 2

**Called by:**
- `mupdf-wasm.wasm.wasm-function[_tr_flush_block]` (2)

### `mupdf-wasm.wasm.wasm-function[fz_new_glyph_from_8bpp_data]`
`[native code]` | Self: 0.0% (2.2ms) | Total: 0.0% (2.2ms) | Samples: 2

**Called by:**
- `mupdf-wasm.wasm.wasm-function[glyph_from_ft_bitmap]` (2)

### `mupdf-wasm.wasm.wasm-function[body]`
`[native code]` | Self: 0.0% (2.1ms) | Total: 0.0% (2.1ms) | Samples: 2

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_md5_update]` (2)

### `push`
`[native code]` | Self: 0.0% (2.1ms) | Total: 0.0% (2.1ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `png`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs` | Self: 0.0% (2.1ms) | Total: 0.0% (2.1ms) | Samples: 2

**Called by:**
- `async compressImage` (1)
- `async cropAndZoom` (1)

### `hasOwnProperty`
`[native code]` | Self: 0.0% (2.1ms) | Total: 0.0% (2.1ms) | Samples: 2

**Called by:**
- `whenDependentTypesAreResolved` (1)
- `(anonymous)` (1)

### `__exportAll`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/_virtual/_rolldown/runtime.js:5` | Self: 0.0% (2.1ms) | Total: 0.0% (2.1ms) | Samples: 1

**Called by:**
- `(module)` (1)

### `binaryDecode`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (2.1ms) | Total: 0.0% (3.0ms) | Samples: 2

**Called by:**
- `findWasmBinary` (3)

**Calls:**
- `charCodeAt` (1)

### `detectHorizontalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:499` | Self: 0.0% (2.0ms) | Total: 0.1% (696.8ms) | Samples: 2

**Called by:**
- `async cropTableRows` (641)

**Calls:**
- `get` (639)

### `en_default`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/locales/en.js` | Self: 0.0% (2.0ms) | Total: 0.0% (2.0ms) | Samples: 1

**Called by:**
- `(module)` (1)

### `mupdf-wasm.wasm.wasm-function[jpeg_idct_16x16]`
`[native code]` | Self: 0.0% (2.0ms) | Total: 0.0% (2.0ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[decompress_onepass]` (1)

### `attachCropImages`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:97` | Self: 0.0% (2.0ms) | Total: 0.0% (2.0ms) | Samples: 2

**Called by:**
- `async extract` (2)

### `next`
`[native code]` | Self: 0.0% (2.0ms) | Total: 0.0% (3.2ms) | Samples: 2

**Called by:**
- `async (anonymous)` (2)
- `_prepareNextTasks` (1)

**Calls:**
- `async _streamIterator` (1)

### `AsciiToString`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (2.0ms) | Total: 0.0% (2.0ms) | Samples: 2

**Called by:**
- `__embind_register_enum_value` (2)

### `mupdf-wasm.wasm.wasm-function[ycc_rgb_convert]`
`[native code]` | Self: 0.0% (2.0ms) | Total: 0.0% (2.0ms) | Samples: 2

**Called by:**
- `mupdf-wasm.wasm.wasm-function[sep_upsample]` (2)

### `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]`
`[native code]` | Self: 0.0% (1.9ms) | Total: 0.0% (134.3ms) | Samples: 2

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_stream]` (117)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_S]` (60)
- `mupdf-wasm.wasm.wasm-function[pdf_run_ET]` (29)
- `mupdf-wasm.wasm.wasm-function[pdf_process_Do]` (11)
- `mupdf-wasm.wasm.wasm-function[pdf_try_load_font]` (9)
- `mupdf-wasm.wasm.wasm-function[pdf_run_Tj]` (2)
- `mupdf-wasm.wasm.wasm-function[pdf_run_RG]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_is_dict]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_is_ocg_hidden]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_lookup_resource]` (1)

### `node:crypto`
`node:crypto:2` | Self: 0.0% (1.9ms) | Total: 0.0% (1.9ms) | Samples: 1

### `convertToOpenAITool`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/function_calling.js:45` | Self: 0.0% (1.9ms) | Total: 2.6% (11.35s) | Samples: 1

**Called by:**
- `map` (26)

**Calls:**
- `convertToOpenAIFunction` (25)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` | Self: 0.0% (1.9ms) | Total: 0.0% (1.9ms) | Samples: 2

**Called by:**
- `async _` (2)

### `buffer`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/is.mjs:40` | Self: 0.0% (1.6ms) | Total: 0.0% (1.6ms) | Samples: 1

**Called by:**
- `_createInputDescriptor` (1)

### `get`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/registries.js:35` | Self: 0.0% (1.5ms) | Total: 0.0% (3.6ms) | Samples: 1

**Called by:**
- `process` (1)
- `interopZodTransformInputSchemaImpl` (1)
- `get` (1)

**Calls:**
- `get` (1)
- `get` (1)

### `symlink`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (1.5ms) | Total: 0.0% (1.5ms) | Samples: 1

**Called by:**
- `symlink` (1)

### `ChatPromptValue`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/prompt_values.js:50` | Self: 0.0% (1.5ms) | Total: 0.0% (1.5ms) | Samples: 1

**Called by:**
- `_convertInputToPromptValue` (1)

### `getLangSmithEnvVarsMetadata`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/env.js` | Self: 0.0% (1.4ms) | Total: 0.0% (1.4ms) | Samples: 1

**Called by:**
- `Client` (1)

### `internal:streams/writable`
`internal:streams/writable:14` | Self: 0.0% (1.4ms) | Total: 0.0% (1.4ms) | Samples: 1

**Called by:**
- `anonymous` (1)

### `mupdf-wasm.wasm.wasm-function[fz_drop_font]`
`[native code]` | Self: 0.0% (1.4ms) | Total: 0.0% (1.4ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_drop_text]` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_remap_cmap_range]`
`[native code]` | Self: 0.0% (1.4ms) | Total: 0.0% (2.4ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_remap_cmap]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_lookup_cmap_full]` (1)

### `extractDefs`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:178` | Self: 0.0% (1.4ms) | Total: 0.0% (1.4ms) | Samples: 1

**Called by:**
- `toJSONSchema` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:58` | Self: 0.0% (1.4ms) | Total: 0.0% (20.1ms) | Samples: 1

**Called by:**
- `init` (4)

**Calls:**
- `assign` (2)
- `get` (1)

### `.wasm-function[2608]`
`[native code]` | Self: 0.0% (1.4ms) | Total: 0.0% (1.4ms) | Samples: 1

**Called by:**
- `wasm-stub` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/parse.js:18` | Self: 0.0% (1.4ms) | Total: 7.6% (32.59s) | Samples: 1

**Called by:**
- `async interopParseAsync` (9)
- `async interopSafeParseAsync` (3)

**Calls:**
- `async (anonymous)` (10)
- `async (anonymous)` (1)

### `node:fs`
`node:fs:230` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

### `mupdf-wasm.wasm.wasm-function[pdf_load_font]`
`[native code]` | Self: 0.0% (1.3ms) | Total: 0.0% (11.9ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_try_load_font]` (9)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_type0_font]` (8)

### `async _mergeConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `async invoke` (1)

### `AsyncCaller`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js:180` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `BaseLanguageModel` (1)

### `internal:util/inspect`
`internal:util/inspect:9` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `anonymous` (1)

### `SafeSet`
`internal:primordials` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `internal:util/inspect` (1)

### `mupdf-wasm.wasm.wasm-function[make_weights]`
`[native code]` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_scale_pixmap_cached]` (1)

### `mupdf-wasm.wasm.wasm-function[_tr_flush_block]`
`[native code]` | Self: 0.0% (1.3ms) | Total: 0.0% (24.4ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[deflate_slow]` (22)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[compress_block]` (19)
- `mupdf-wasm.wasm.wasm-function[build_tree]` (2)

### `BaseMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/base.js:141` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `HumanMessage` (1)

### `RunTree`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:143` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `runWithConfig` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_load_cmap]`
`[native code]` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_cmap_imp]` (1)

### `D`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `toJSONSchema`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `toJsonSchema` (1)

### `mupdf-wasm.wasm.wasm-function[gray_raster_render]`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (2.4ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[ft_smooth_render]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[FT_Outline_Decompose]` (1)

### `.wasm-function[59]`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `.wasm-function[510]` (1)

### `_installLazyMethods`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/imageSchema.ts:12` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

### `route`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `isServerConfig`
`bun:main` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `(module)` (1)

### `mupdf-wasm.wasm.wasm-function[fz_insert_gel]`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_add_line]` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_font_cid_to_gid]`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_tos_make_trm]` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/tiktoken.js:10` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

### `async _streamIterator`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1133` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

### `process`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:43` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `process` (1)

### `async pRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `async pRetry` (1)

### `DeltaValue`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/state/values/delta.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `(module)` (1)

### `FSNode`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `createNode` (1)

### `mupdf-wasm.wasm.wasm-function[fz_push_try]`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_read_best]` (1)

### `finalize`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `toJsonSchema` (1)

### `makeClassHandle`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (1.2ms) | Total: 0.0% (2.4ms) | Samples: 1

**Called by:**
- `RegisteredPointer_fromWireType` (2)

**Calls:**
- `create` (1)

### `createStandardJSONSchemaMethod`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:1495` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `getEnv`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/env.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `isBrowserLikeRuntime` (1)

### `__copyProps`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `__toCommonJS` (1)

### `detectHorizontalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:496` | Self: 0.0% (1.2ms) | Total: 0.0% (4.6ms) | Samples: 1

**Called by:**
- `async cropTableRows` (4)

**Calls:**
- `get` (3)

### `guarded`
`internal:shared` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

### `async initialize`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `async initialize` (1)

### `mupdf-wasm.wasm.wasm-function[fz_read_byte]`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[lex_number]` (1)

### `createToken`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/internal/re.js:47` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `k`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `wasm-stub` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:73` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

### `checkpointNamespaceFromNs`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `async initialize` (1)

### `createNode`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `mount` (1)

### `mergeConfigs`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js:23` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `async invoke` (1)

### `async _validateInput`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async _validateInput` (1)

### `asyncFunctionDrive`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `mergeExtractionResults`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/mergeExtraction.ts` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `(module)` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `init` (1)

### `.wasm-function[1308]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 16.7% (71.52s) | Samples: 1

**Called by:**
- `.wasm-function[10385]` (66061)

**Calls:**
- `.wasm-function[557]` (66060)

### `process`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `objectProcessor` (1)

### `bound resolve`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (156.4ms) | Samples: 1

**Called by:**
- `toFile` (3)
- `(anonymous)` (1)

**Calls:**
- `resolve` (3)

### `readSync`
`node:fs` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `readFileSync` (1)

### `.wasm-function[1182]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `.wasm-function[227]` (1)

### `usesDestructorStack`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `craftInvokerFunction` (1)

### `finalize`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:216` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `toJsonSchema` (1)

### `internal:shared`
`internal:shared:172` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `anonymous` (1)

### `async cropBbsRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async cropBbsRows` (1)

### `exposePublicSymbol`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `__embind_register_function` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:487` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `forEach` (1)

### `flattenRef`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:226` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `finalize` (1)

### `embind__requireFunction`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (1.1ms) | Total: 0.0% (3.4ms) | Samples: 1

**Called by:**
- `__embind_register_class_function` (1)
- `__embind_register_value_object_field` (1)
- `__embind_register_function` (1)

**Calls:**
- `makeDynCaller` (2)

### `node:timers/promises`
`node:timers/promises:2` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `anonymous` (1)

### `_tryToStartAnother`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:94` | Self: 0.0% (1.1ms) | Total: 0.2% (930.0ms) | Samples: 1

**Called by:**
- `_processQueue` (1)
- `_next` (1)

**Calls:**
- `_resolvePromises` (1)

### `__embind_register_void`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `wasm-stub` (1)

### `_v1ToV6`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/v1ToV6.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `v1ToV6` (1)

### `RunTree`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:337` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `runWithConfig` (1)

### `mupdf-wasm.wasm.wasm-function[fz_init_process_color_converter]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_find_color_converter]` (1)

### `async extract`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:154` | Self: 0.0% (1.1ms) | Total: 0.0% (14.6ms) | Samples: 1

**Calls:**
- `attachCropImages` (6)
- `attachCropImages` (2)

### `mupdf-wasm.wasm.wasm-function[pdf_lex]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (3.4ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_stream]` (2)
- `mupdf-wasm.wasm.wasm-function[pdf_parse_array]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[lex_number]` (2)

### `mapInput`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/io.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `generatorResume` (1)

### `mupdf-wasm.wasm.wasm-function[sbrk]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (84.2ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[emscripten_builtin_malloc]` (10)

**Calls:**
- `wasm-stub` (9)

### `async parsePartialResult`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async parseResult` (1)

### `__embind_register_enum_value`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (1.1ms) | Total: 0.0% (5.2ms) | Samples: 1

**Called by:**
- `wasm-stub` (5)

**Calls:**
- `create` (2)
- `AsciiToString` (2)

### `setPrototypeDirectOrThrow`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `(module)` (1)

### `mupdf-wasm.wasm.wasm-function[fz_transform_pixmap]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (5.8ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_fill_image]` (5)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_scale_pixmap_cached]` (4)

### `Serializable`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/serializable.js:83` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `Runnable` (1)

### `Duplex`
`internal:streams/duplex` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `Sharp` (1)

### `.wasm-function[1203]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `.wasm-function[1588]` (1)

### `getLsParamsWithDefaults`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:199` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async _generateUncached` (1)

### `removeEventListener`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

### `mupdf-wasm.wasm.wasm-function[gray_render_line]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[gray_conic_to]` (1)

### `mupdf-wasm.wasm.wasm-function[scale_row_from_temp]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_scale_pixmap_cached]` (1)

### `get`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/registries.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `extractDefs` (1)

### `mupdf-wasm.wasm.wasm-function[begin_softmask]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_begin_group]` (1)

### `mupdf-wasm.wasm.wasm-function[fz_keep_buffer]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_keep_colorspace]` (1)

### `_filterInvocationParamsForTracing`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async _generateUncached` (1)

### `__emval_invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `wasm-stub` (1)

### `bound check`
`[native code]` | Self: 0.0% (1.1ms) | Total: 3.2% (13.84s) | Samples: 1

**Called by:**
- `bound int` (4)
- `bound min` (4)

**Calls:**
- `bound clone` (5)
- `check` (2)

### `wrapConversion`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1140` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `route` (1)

### `.wasm-function[1310]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `.wasm-function[16862]` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:972` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `init` (1)

### `async tick`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:474` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

### `assertValidHeaders`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `Client` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/node_modules/openai/internal/qs/utils.mjs` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `(module)` (1)

### `f`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/sha1.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `sha1` (1)

### `split`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `normalize` (1)

### `isRunnableToolLike`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/types.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `isLangChainTool` (1)

### `handlePropertyResult`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `BaseMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/base.js:125` | Self: 0.0% (1.0ms) | Total: 1.5% (6.58s) | Samples: 1

**Called by:**
- `AIMessage` (1)
- `HumanMessage` (1)

**Calls:**
- `Serializable` (1)

### `Sharp`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:425` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `Sharp` (1)

### `async _first`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `async _first` (1)

### `validateThis`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `get` (1)

### `CompiledGraph`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `CompiledStateGraph` (1)

### `.wasm-function[3269]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `.wasm-function[15014]` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1205` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `anonymous` (1)

### `_tryToStartAnother`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:100` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `isRunnableInterface`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/utils.js:3` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `async invoke` (1)

### `mupdf-wasm.wasm.wasm-function[fz_strtof]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[lex_number]` (1)

### `mupdf-wasm.wasm.wasm-function[fz_drop_storable]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_drop_icc_link]` (1)

### `RegisteredClass`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `sharedRegisterType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (1.0ms) | Total: 0.0% (5.2ms) | Samples: 1

**Called by:**
- `registerType` (5)

**Calls:**
- `forEach` (4)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `filter` (1)

### `node:child_process`
`node:child_process:198` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `anonymous` (1)

### `mupdf-wasm.wasm.wasm-function[fz_free]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[ft_free]` (1)

### `$constructor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `(module)` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (1.0ms) | Total: 0.1% (670.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (269)
- `async (anonymous)` (267)

**Calls:**
- `async (anonymous)` (267)
- `async createWasm` (264)
- `run` (67)
- `staticInit` (2)
- `async (anonymous)` (2)

### `async call`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `async call` (1)

### `invocationParams`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:230` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `async _generate` (1)

### `Buffer`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `get`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/registries.js:33` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `get` (1)

### `uuid7FromTime`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/_uuid.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `RunTree` (1)

### `initializeSax`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/sax-js/sax.js:265` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `(module)` (1)

### `invocationParams`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:216` | Self: 0.0% (1.0ms) | Total: 2.6% (11.43s) | Samples: 1

**Called by:**
- `getLsParams` (29)

**Calls:**
- `map` (28)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1211` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `anonymous` (1)

### `.wasm-function[2996]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (2.0ms) | Samples: 1

**Called by:**
- `.wasm-function[1543]` (2)

**Calls:**
- `.wasm-function[155]` (1)

### `_coercedNumber`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `(module)` (1)

### `callWithRetries`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `async _generate` (1)

### `Duplex`
`internal:streams/duplex:4` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `Sharp` (1)

### `async tick`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `async tick` (1)

### `default`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `(module)` (1)

### `.wasm-function[50]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `.wasm-function[11373]` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:10` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `init` (1)

### `_putCheckpoint`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `async _first` (1)

### `async normalizeCoords`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/normalizeCoords.ts` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `async normalizeCoords` (1)

### `defineLazy`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:61` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `adaptiveThreshold`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.4% (1.79s) | Samples: 1

**Called by:**
- `detectTables` (1668)

**Calls:**
- `(unknown)` (1667)

### `mupdf-wasm.wasm.wasm-function[pdf_get_xref_entry_aux]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_cache_object]` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `IterableReadableStream` (1)

### `convertToOpenAIFunction`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/function_calling.js:27` | Self: 0.0% (1.0ms) | Total: 2.6% (11.35s) | Samples: 1

**Called by:**
- `convertToOpenAITool` (25)

**Calls:**
- `toJsonSchema` (18)
- `toJsonSchema` (5)
- `toJsonSchema` (1)

### `normalizeDef`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:753` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `get value` (1)

### `_compileResolved`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `compile` (1)

### `_getChannelsFromSchema`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `StateGraph` (1)

### `__embind_register_class_constructor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (1.0ms) | Total: 0.0% (5.3ms) | Samples: 1

**Called by:**
- `wasm-stub` (5)

**Calls:**
- `whenDependentTypesAreResolved` (4)

### `_prepareSingleTask`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `_prepareNextTasks` (1)

### `$ZodCheckGreaterThan`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:43` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `_gte` (1)

### `mupdf-wasm.wasm.wasm-function[FT_Load_Glyph]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (2.9ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_render_ft_glyph]` (2)
- `mupdf-wasm.wasm.wasm-function[fz_bound_glyph]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[ft_glyphslot_free_bitmap]` (1)
- `mupdf-wasm.wasm.wasm-function[tt_glyph_load]` (1)

### `mupdf-wasm.wasm.wasm-function[do_recognize_document_stream_and_dir_content]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_open_accelerated_document_with_stream_and_dir]` (1)

### `get`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:36` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `(module)` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (3.2ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect_chain]` (3)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_cache_object]` (2)

### `async _generateUncached`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `async _generateUncached` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_lookup_cmap_full]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_remap_cmap_range]` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:1730` | Self: 0.0% (999us) | Total: 1.8% (7.85s) | Samples: 1

**Called by:**
- `Promise` (31)

**Calls:**
- `(anonymous)` (30)

### `_outputWrites`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` | Self: 0.0% (997us) | Total: 0.0% (997us) | Samples: 1

**Called by:**
- `putWrites` (1)

### `addEdge`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` | Self: 0.0% (993us) | Total: 0.0% (993us) | Samples: 1

**Called by:**
- `(module)` (1)

### `ZodType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v3/types.js:257` | Self: 0.0% (992us) | Total: 0.0% (992us) | Samples: 1

**Called by:**
- `ZodNever` (1)

### `async pRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js:86` | Self: 0.0% (989us) | Total: 0.0% (297.8ms) | Samples: 1

**Called by:**
- `async (anonymous)` (27)

**Calls:**
- `async pRetry` (22)
- `async pRetry` (2)
- `async pRetry` (1)
- `async pRetry` (1)

### `async tick`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js` | Self: 0.0% (989us) | Total: 0.0% (989us) | Samples: 1

**Called by:**
- `async tick` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/io.js:114` | Self: 0.0% (989us) | Total: 0.0% (989us) | Samples: 1

**Called by:**
- `flatIntoArrayWithCallback` (1)

### `XXH3_len_17to128_128b`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/hash.js:220` | Self: 0.0% (987us) | Total: 0.0% (987us) | Samples: 1

**Called by:**
- `XXH3` (1)

### `.wasm-function[585]`
`[native code]` | Self: 0.0% (984us) | Total: 0.0% (5.2ms) | Samples: 1

**Called by:**
- `.wasm-function[584]` (3)
- `.wasm-function[155]` (1)

**Calls:**
- `.wasm-function[280]` (3)

### `mupdf-wasm.wasm.wasm-function[tt_face_load_cpal]`
`[native code]` | Self: 0.0% (983us) | Total: 0.0% (983us) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[sfnt_load_face]` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js` | Self: 0.0% (982us) | Total: 0.0% (982us) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `__embind_register_value_object_field`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (976us) | Total: 0.0% (976us) | Samples: 1

**Called by:**
- `wasm-stub` (1)

### `nonConstNoSmartPtrRawPointerToWireType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (976us) | Total: 0.0% (976us) | Samples: 1

**Called by:**
- `Mat.ucharPtr` (1)

### `getEnvironmentVariable`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/env.js:154` | Self: 0.0% (976us) | Total: 0.0% (976us) | Samples: 1

**Called by:**
- `getDefaultProjectName` (1)

### `createNamedFunction`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (970us) | Total: 0.0% (970us) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `async _write`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js` | Self: 0.0% (968us) | Total: 0.0% (968us) | Samples: 1

**Called by:**
- `async _write` (1)

### `_configureSync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/callbacks/manager.js` | Self: 0.0% (967us) | Total: 0.0% (967us) | Samples: 1

**Called by:**
- `runWithConfig` (1)

### `interopZodTransformInputSchemaImpl`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:405` | Self: 0.0% (967us) | Total: 0.4% (1.87s) | Samples: 1

**Called by:**
- `toJsonSchema` (4)

**Calls:**
- `interopZodTransformInputSchemaImpl` (1)
- `interopZodTransformInputSchemaImpl` (1)
- `get` (1)

### `readFileSync`
`[native code]` | Self: 0.0% (956us) | Total: 0.0% (1.9ms) | Samples: 1

**Called by:**
- `readFileSync` (1)
- `async r` (1)

**Calls:**
- `readFileSync` (1)

### `composite`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/composite.mjs` | Self: 0.0% (956us) | Total: 0.0% (956us) | Samples: 1

**Called by:**
- `async createDebugImage` (1)

### `getFunctionName`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (955us) | Total: 0.0% (955us) | Samples: 1

**Called by:**
- `__embind_register_class_function` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js` | Self: 0.0% (952us) | Total: 0.0% (952us) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `.wasm-function[2969]`
`[native code]` | Self: 0.0% (944us) | Total: 0.0% (14.0ms) | Samples: 1

**Called by:**
- `.wasm-function[9540]` (13)

**Calls:**
- `.wasm-function[8918]` (6)
- `.wasm-function[8901]` (6)

### `toJsonSchema`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/json_schema.js` | Self: 0.0% (944us) | Total: 0.0% (944us) | Samples: 1

**Called by:**
- `convertToOpenAIFunction` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:707` | Self: 0.0% (942us) | Total: 0.0% (942us) | Samples: 1

### `e`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` | Self: 0.0% (940us) | Total: 0.0% (940us) | Samples: 1

**Called by:**
- `_` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_read_xref]`
`[native code]` | Self: 0.0% (937us) | Total: 0.0% (937us) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[read_xref_section]` (1)

### `handleDefaultResult`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js` | Self: 0.0% (935us) | Total: 0.0% (935us) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `async _`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` | Self: 0.0% (935us) | Total: 0.0% (935us) | Samples: 1

**Called by:**
- `(module)` (1)

### `Serializable`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/serializable.js` | Self: 0.0% (935us) | Total: 0.0% (935us) | Samples: 1

**Called by:**
- `Runnable` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js` | Self: 0.0% (927us) | Total: 0.0% (927us) | Samples: 1

**Called by:**
- `async invoke` (1)

### `nullable`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1134` | Self: 0.0% (925us) | Total: 0.0% (925us) | Samples: 1

**Called by:**
- `bound nullable` (1)

### `charCodeAt`
`[native code]` | Self: 0.0% (924us) | Total: 0.0% (924us) | Samples: 1

**Called by:**
- `binaryDecode` (1)

### `async tick`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:66` | Self: 0.0% (923us) | Total: 0.0% (2.8ms) | Samples: 1

**Called by:**
- `async tick` (3)

**Calls:**
- `async _executeTasksWithRetry` (2)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts` | Self: 0.0% (919us) | Total: 0.0% (919us) | Samples: 1

**Called by:**
- `async cropper` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:1` | Self: 0.0% (916us) | Total: 0.0% (916us) | Samples: 1

**Called by:**
- `RunnableCallable` (1)

### `async generate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` | Self: 0.0% (914us) | Total: 0.0% (914us) | Samples: 1

**Called by:**
- `async generatePrompt` (1)

### `messageToOpenAIRole`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/utils/misc.js` | Self: 0.0% (914us) | Total: 0.0% (914us) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_dict_find]`
`[native code]` | Self: 0.0% (912us) | Total: 0.0% (912us) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_dict_get]` (1)

### `mupdf-wasm.wasm.wasm-function[fz_hash_remove]`
`[native code]` | Self: 0.0% (907us) | Total: 0.0% (907us) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_filter_store]` (1)

### `mupdf-wasm.wasm.wasm-function[tt_glyph_load]`
`[native code]` | Self: 0.0% (902us) | Total: 0.0% (902us) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[FT_Load_Glyph]` (1)

### `HumanMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/human.js` | Self: 0.0% (901us) | Total: 0.0% (901us) | Samples: 1

**Called by:**
- `async classifyImage` (1)

### `async convertPdfToImages`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts` | Self: 0.0% (897us) | Total: 0.0% (897us) | Samples: 1

**Called by:**
- `(module)` (1)

### `consume`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/channels/base.js` | Self: 0.0% (896us) | Total: 0.0% (896us) | Samples: 1

**Called by:**
- `_applyWrites` (1)

### `finish`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/channels/base.js` | Self: 0.0% (890us) | Total: 0.0% (890us) | Samples: 1

**Called by:**
- `_applyWrites` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1107` | Self: 0.0% (889us) | Total: 0.0% (889us) | Samples: 1

**Called by:**
- `init` (1)

### `detectHorizontalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:508` | Self: 0.0% (887us) | Total: 0.0% (887us) | Samples: 1

**Called by:**
- `async cropTableRows` (1)

### `async _getUpdates`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` | Self: 0.0% (881us) | Total: 0.0% (881us) | Samples: 1

**Called by:**
- `async _getUpdates` (1)

### `bound decodeMemoryView`
`[native code]` | Self: 0.0% (877us) | Total: 0.0% (6.2ms) | Samples: 1

**Called by:**
- `(anonymous)` (6)

**Calls:**
- `decodeMemoryView` (5)

### `getEnumValues`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js` | Self: 0.0% (877us) | Total: 0.0% (877us) | Samples: 1

**Called by:**
- `enumProcessor` (1)

### `mupdf-wasm.wasm.wasm-function[fz_stroke_path]`
`[native code]` | Self: 0.0% (874us) | Total: 0.0% (66.8ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_path]` (60)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_stroke_path]` (59)

### `defineLazy`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:62` | Self: 0.0% (872us) | Total: 0.0% (872us) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `.wasm-function[397]`
`[native code]` | Self: 0.0% (868us) | Total: 0.0% (868us) | Samples: 1

**Called by:**
- `.wasm-function[1543]` (1)

### `entries`
`[native code]` | Self: 0.0% (866us) | Total: 0.0% (866us) | Samples: 1

**Called by:**
- `_compileResolved` (1)

### `extractToDef`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:161` | Self: 0.0% (866us) | Total: 0.0% (866us) | Samples: 1

**Called by:**
- `extractDefs` (1)

### `getBinarySync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (864us) | Total: 0.0% (864us) | Samples: 1

**Called by:**
- `async getWasmBinary` (1)

### `RegExp`
`[native code]` | Self: 0.0% (858us) | Total: 0.0% (858us) | Samples: 1

**Called by:**
- `createToken` (1)

### `async convertPdfToImages`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:74` | Self: 0.0% (0us) | Total: 0.0% (225.4ms) | Samples: 0

**Called by:**
- `(module)` (132)

**Calls:**
- `toPixmap` (132)

### `IterableReadableStream`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `IterableReadableWritableStream` (1)

**Calls:**
- `(anonymous)` (1)

### `mupdf-wasm.wasm.wasm-function[wasm_open_document_with_buffer]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Called by:**
- `wasm-stub` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_open_document_with_buffer]` (2)

### `mupdf-wasm.wasm.wasm-function[tt_face_init]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (983us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[open_face]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[sfnt_load_face]` (1)

### `mupdf-wasm.wasm.wasm-function[putchunk]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (6.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[png_write_band]` (5)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[crc32]` (3)
- `mupdf-wasm.wasm.wasm-function[fz_write_data]` (2)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:118` | Self: 0.0% (0us) | Total: 0.6% (2.74s) | Samples: 0

**Calls:**
- `ChatOpenRouter` (3)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:49` | Self: 0.0% (0us) | Total: 2.9% (12.60s) | Samples: 0

**Calls:**
- `async cropAndZoom` (9)

### `convertOpenRouterResponseToBaseMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/converters/messages.js:33` | Self: 0.0% (0us) | Total: 12.5% (53.40s) | Samples: 0

**Called by:**
- `async _generate` (7)

**Calls:**
- `convertCompletionsMessageToBaseMessage` (3)
- `convertCompletionsMessageToBaseMessage` (3)
- `convertCompletionsMessageToBaseMessage` (1)

### `mupdf-wasm.wasm.wasm-function[jpeg_read_scanlines]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (6.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[next_dctd]` (5)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[process_data_simple_main_8796]` (5)

### `toJSONSchema`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:599` | Self: 0.0% (0us) | Total: 0.0% (16.1ms) | Samples: 0

**Called by:**
- `toJsonSchema` (4)

**Calls:**
- `extractDefs` (1)
- `extractDefs` (1)
- `extractDefs` (1)
- `extractDefs` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:10` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `_enum` (1)

### `getEnumValues`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:17` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `filter` (1)

### `onComplete`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (63.1ms) | Samples: 0

**Called by:**
- `whenDependentTypesAreResolved` (49)
- `(anonymous)` (4)

**Calls:**
- `(anonymous)` (49)
- `registerType` (3)
- `(anonymous)` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:273` | Self: 0.0% (0us) | Total: 0.0% (69.9ms) | Samples: 0

**Called by:**
- `async (anonymous)` (7)

**Calls:**
- `fetch` (7)

### `mupdf-wasm.wasm.wasm-function[pdf_load_stream]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (5.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_font]` (4)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_image_stream]` (4)

### `async createWasm`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.1% (585.9ms) | Samples: 0

**Called by:**
- `async createWasm` (264)
- `async (anonymous)` (264)

**Calls:**
- `async createWasm` (264)
- `findWasmBinary` (220)
- `findWasmBinary` (43)
- `async instantiateAsync` (1)
- `receiveInstantiationResult` (1)

### `Duplex`
`internal:streams/duplex:37` | Self: 0.0% (0us) | Total: 0.4% (1.90s) | Samples: 0

**Called by:**
- `Sharp` (2)

**Calls:**
- `Stream` (1)
- `Stream` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect_chain]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_dict_get]` (2)
- `mupdf-wasm.wasm.wasm-function[pdf_is_dict]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect]` (3)

### `RunnablePassthrough`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/passthrough.js:39` | Self: 0.0% (0us) | Total: 0.0% (935us) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `Runnable` (1)

### `detectHorizontalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:464` | Self: 0.0% (0us) | Total: 0.0% (53.2ms) | Samples: 0

**Called by:**
- `async cropTableRows` (48)

**Calls:**
- `threshold` (48)

### `check`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:95` | Self: 0.0% (0us) | Total: 1.9% (8.23s) | Samples: 0

**Called by:**
- `bound check` (2)

**Calls:**
- `mergeDefs` (1)
- `mergeDefs` (1)

### `.wasm-function[76]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (318.3ms) | Samples: 0

**Called by:**
- `.wasm-function[934]` (298)

**Calls:**
- `.wasm-function[12303]` (179)
- `.wasm-function[12009]` (116)
- `.wasm-function[584]` (3)

### `.wasm-function[11375]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (4.2ms) | Samples: 0

**Called by:**
- `.wasm-function[280]` (3)

**Calls:**
- `.wasm-function[734]` (3)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:309` | Self: 0.0% (0us) | Total: 1.2% (5.15s) | Samples: 0

**Called by:**
- `async (anonymous)` (35)

**Calls:**
- `async _generate` (35)

### `mupdf-wasm.wasm.wasm-function[png_from_pixmap]`
`[native code]` | Self: 0.0% (0us) | Total: 0.2% (1.25s) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_new_buffer_from_pixmap_as_png]` (1137)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_write_pixmap_as_png]` (1137)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/extractSchema.ts:80` | Self: 0.0% (0us) | Total: 0.0% (925us) | Samples: 0

**Calls:**
- `bound nullable` (1)

### `mupdf-wasm.wasm.wasm-function[fz_render_ft_glyph]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (6.6ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_render_glyph]` (6)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[FT_Render_Glyph_Internal]` (2)
- `mupdf-wasm.wasm.wasm-function[FT_Load_Glyph]` (2)
- `mupdf-wasm.wasm.wasm-function[glyph_from_ft_bitmap]` (2)

### `getMicrosecondPrecisionDatestring`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:32` | Self: 0.0% (0us) | Total: 0.6% (2.94s) | Samples: 0

**Called by:**
- `RunTree` (1)

**Calls:**
- `toISOString` (1)

### `growMemory`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (4.2ms) | Samples: 0

**Called by:**
- `_emscripten_resize_heap` (3)

**Calls:**
- `updateMemoryViews` (3)

### `async call`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:247` | Self: 0.0% (0us) | Total: 0.8% (3.47s) | Samples: 0

**Called by:**
- `async invoke` (1)

**Calls:**
- `parseCallbackConfigArg` (1)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:715` | Self: 0.0% (0us) | Total: 0.1% (505.4ms) | Samples: 0

**Calls:**
- `_pipeline` (6)
- `toFile` (2)
- `toFile` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:645` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `async invoke` (1)

**Calls:**
- `async _mergeConfig` (1)

### `__embind_finalize_value_object`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `wasm-stub` (1)

**Calls:**
- `whenDependentTypesAreResolved` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_begin_group]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_flush_text_imp]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[begin_softmask]` (1)

### `async _generate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:281` | Self: 0.0% (0us) | Total: 0.2% (870.2ms) | Samples: 0

**Calls:**
- `json` (1)

### `.wasm-function[11387]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `.wasm-function[52]` (1)

**Calls:**
- `.wasm-function[11373]` (1)

### `async add`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:152` | Self: 0.0% (0us) | Total: 0.0% (308.8ms) | Samples: 0

**Called by:**
- `async _generate` (27)
- `callWithOptions` (2)

**Calls:**
- `Promise` (29)

### `async initialize`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:262` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `async initialize` (1)

**Calls:**
- `checkpointNamespaceFromNs` (1)

### `mupdf-wasm.wasm.wasm-function[fz_scale_pixmap_cached]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (4.7ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_transform_pixmap]` (4)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[scale_row_to_temp3]` (2)
- `mupdf-wasm.wasm.wasm-function[scale_row_from_temp]` (1)
- `mupdf-wasm.wasm.wasm-function[make_weights]` (1)

### `_configureSync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/callbacks/manager.js:548` | Self: 0.0% (0us) | Total: 0.0% (48.9ms) | Samples: 0

**Called by:**
- `async _generateUncached` (1)

**Calls:**
- `_getConfigureHooks` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_lookup_resource]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (912us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_dict_get]` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:571` | Self: 0.0% (0us) | Total: 1.0% (4.38s) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `init` (1)

### `convertToOpenAITool`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/function_calling.js:43` | Self: 0.0% (0us) | Total: 0.0% (79.3ms) | Samples: 0

**Called by:**
- `map` (2)

**Calls:**
- `isLangChainTool` (2)

### `.wasm-function[503]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (41.2ms) | Samples: 0

**Called by:**
- `.wasm-function[1260]` (38)

**Calls:**
- `.wasm-function[12680]` (38)

### `process`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:75` | Self: 0.0% (0us) | Total: 0.0% (5.3ms) | Samples: 0

**Called by:**
- `process` (3)
- `objectProcessor` (2)

**Calls:**
- `process` (3)
- `process` (1)
- `process` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js:191` | Self: 0.0% (0us) | Total: 0.0% (185.1ms) | Samples: 0

**Called by:**
- `async pRetry` (22)

**Calls:**
- `async (anonymous)` (22)

### `mupdf-wasm.wasm.wasm-function[next_dctd]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (6.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_available_1592]` (5)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[jpeg_read_scanlines]` (5)

### `mupdf-wasm.wasm.wasm-function[pdf_init_document]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (937us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_open_document_with_stream]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_xref]` (1)

### `getSharedClient`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:400` | Self: 0.0% (0us) | Total: 0.0% (4.9ms) | Samples: 0

**Called by:**
- `RunTree` (4)

**Calls:**
- `Client` (1)
- `Client` (1)
- `Client` (1)
- `Client` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/internal/re.js:201` | Self: 0.0% (0us) | Total: 0.0% (858us) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `createToken` (1)

### `async _streamIterator`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1126` | Self: 0.0% (0us) | Total: 0.0% (3.5ms) | Samples: 0

**Calls:**
- `async (anonymous)` (3)

### `mupdf-wasm.wasm.wasm-function[pdf_load_image_imp]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_image]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_compressed_stream]` (1)

### `BaseLanguageModel`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:178` | Self: 0.0% (0us) | Total: 0.0% (9.9ms) | Samples: 0

**Called by:**
- `BaseChatModel` (1)

**Calls:**
- `copyDataProperties` (1)

### `BaseLangChain`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:136` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `StructuredTool` (1)

**Calls:**
- `Runnable` (1)

### `async tick`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:47` | Self: 0.0% (0us) | Total: 0.0% (3.8ms) | Samples: 0

**Called by:**
- `async _runLoop` (4)

**Calls:**
- `async tick` (3)
- `async tick` (1)

### `mupdf-wasm.wasm.wasm-function[do_scavenging_malloc]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (83.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_calloc]` (8)
- `mupdf-wasm.wasm.wasm-function[fz_malloc]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_malloc_default]` (9)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:868` | Self: 0.0% (0us) | Total: 1.1% (4.84s) | Samples: 0

**Called by:**
- `init` (2)

**Calls:**
- `init` (1)
- `init` (1)

### `queueListener`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:16` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `emit` (1)

### `internal:util/inspect`
`internal:util/inspect:154` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `SafeSet` (1)

### `getDefaultConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:387` | Self: 0.0% (0us) | Total: 0.0% (976us) | Samples: 0

**Called by:**
- `RunTree` (1)

**Calls:**
- `getDefaultProjectName` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:32` | Self: 0.0% (0us) | Total: 0.0% (59.6ms) | Samples: 0

**Called by:**
- `async invoke` (14)
- `async _route` (2)
- `async doWrite` (2)
- `async invoke` (2)

**Calls:**
- `async invoke` (18)
- `async invoke` (1)
- `async invoke` (1)

### `RegisteredPointer_fromWireType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `readPointer` (2)

**Calls:**
- `makeClassHandle` (2)

### `async cropAndZoom`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:46` | Self: 0.0% (0us) | Total: 1.2% (5.34s) | Samples: 0

**Calls:**
- `_pipeline` (11)

### `_compileResolved`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:502` | Self: 0.0% (0us) | Total: 0.0% (866us) | Samples: 0

**Called by:**
- `compile` (1)

**Calls:**
- `entries` (1)

### `cvtColor`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (183.4ms) | Samples: 0

**Called by:**
- `(anonymous)` (171)

**Calls:**
- `(unknown)` (171)

### `lookupPath`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `open` (1)

**Calls:**
- `join2` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:40` | Self: 0.0% (0us) | Total: 0.0% (976us) | Samples: 0

**Calls:**
- `bound require` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_cmap]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_to_unicode]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_cmap_imp]` (1)

### `ZodObject`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` | Self: 0.0% (0us) | Total: 2.1% (9.11s) | Samples: 0

**Called by:**
- `object` (8)
- `clone` (2)

**Calls:**
- `init` (10)

### `loadProfileClientConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/profiles.js:253` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `getDefaultClientConfig` (1)

**Calls:**
- `loadProfileState` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:508` | Self: 0.0% (0us) | Total: 1.5% (6.69s) | Samples: 0

**Called by:**
- `init` (9)

**Calls:**
- `init` (9)

### `.wasm-function[1037]`
`[native code]` | Self: 0.0% (0us) | Total: 0.3% (1.42s) | Samples: 0

**Called by:**
- `.wasm-function[581]` (1321)

**Calls:**
- `.wasm-function[9540]` (1321)

### `async writeFile`
`node:fs/promises:190` | Self: 0.0% (0us) | Total: 0.0% (98.3ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `bound writeFile` (1)

### `mupdf-wasm.wasm.wasm-function[sep_upsample]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[process_data_simple_main_8796]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[ycc_rgb_convert]` (2)

### `releaseClassHandle`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `delete` (1)

**Calls:**
- `runDestructor` (1)

### `node:fs`
`node:fs:2` | Self: 0.0% (0us) | Total: 0.0% (5.3ms) | Samples: 0

**Calls:**
- `anonymous` (4)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:574` | Self: 0.0% (0us) | Total: 0.0% (914us) | Samples: 0

**Called by:**
- `flatIntoArrayWithCallback` (1)

**Calls:**
- `messageToOpenAIRole` (1)

### `node:fs`
`node:fs:299` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `anonymous` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:35` | Self: 0.0% (0us) | Total: 0.3% (1.48s) | Samples: 0

**Calls:**
- `async convertPdfToImages` (1137)
- `async convertPdfToImages` (132)
- `async convertPdfToImages` (2)
- `async convertPdfToImages` (1)
- `async convertPdfToImages` (1)
- `async convertPdfToImages` (1)
- `async convertPdfToImages` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:113` | Self: 0.0% (0us) | Total: 0.0% (3.8ms) | Samples: 0

**Calls:**
- `compile` (4)

### `runDestructor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `releaseClassHandle` (1)

**Calls:**
- `wasm-stub` (1)

### `RunTree`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:329` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `runWithConfig` (2)

**Calls:**
- `getDefaultConfig` (1)
- `copyDataProperties` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:934` | Self: 0.0% (0us) | Total: 0.0% (53.2ms) | Samples: 0

**Calls:**
- `async invoke` (14)

### `.wasm-function[12382]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `.wasm-function[1735]` (1)

**Calls:**
- `.wasm-function[158]` (1)

### `run`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (82.3ms) | Samples: 0

**Called by:**
- `async (anonymous)` (67)

**Calls:**
- `doRun` (67)

### `mupdf-wasm.wasm.wasm-function[fz_drop_document]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (907us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[wasm_drop_document]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_drop_document_imp]` (1)

### `loadPage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:1536` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `async convertPdfToImages` (1)

**Calls:**
- `wasm-stub` (1)

### `_createInputDescriptor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:66` | Self: 0.0% (0us) | Total: 0.0% (1.6ms) | Samples: 0

**Called by:**
- `Sharp` (1)

**Calls:**
- `buffer` (1)

### `countNonZero`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (24.8ms) | Samples: 0

**Called by:**
- `detectTables` (12)
- `detectTables` (12)

**Calls:**
- `wasm-stub` (24)

### `.wasm-function[9595]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (88.9ms) | Samples: 0

**Called by:**
- `.wasm-function[14700]` (81)

**Calls:**
- `.wasm-function[510]` (81)

### `mupdf-wasm.wasm.wasm-function[FT_New_Memory_Face]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (983us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_new_font_from_buffer]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[open_face]` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/base.js:43` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async _callWithConfig` (1)

**Calls:**
- `async parseResult` (1)

### `mupdf-wasm.wasm.wasm-function[wasm_pdf_new_pixmap_from_page_with_usage]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (225.4ms) | Samples: 0

**Called by:**
- `(unknown)` (132)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_new_pixmap_from_page_with_separations_and_usage]` (132)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/sharp-linux-x64/index.cjs:1` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound resolve` (1)

### `bound require`
`[native code]` | Self: 0.0% (0us) | Total: 0.3% (1.61s) | Samples: 0

**Called by:**
- `(anonymous)` (10)
- `(module)` (5)
- `(anonymous)` (4)
- `(anonymous)` (3)
- `(anonymous)` (3)
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

**Calls:**
- `require` (35)
- `(anonymous)` (4)
- `anonymous` (2)

### `async call`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:108` | Self: 0.0% (0us) | Total: 7.6% (32.59s) | Samples: 0

**Called by:**
- `async call` (9)

**Calls:**
- `async interopParseAsync` (9)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1074` | Self: 0.0% (0us) | Total: 0.0% (3.5ms) | Samples: 0

**Called by:**
- `async _streamIterator` (3)

**Calls:**
- `async (anonymous)` (3)

### `convertCompletionsMessageToBaseMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:179` | Self: 0.0% (0us) | Total: 0.4% (1.81s) | Samples: 0

**Called by:**
- `convertOpenRouterResponseToBaseMessage` (1)

**Calls:**
- `cloneObject` (1)

### `mupdf-wasm.wasm.wasm-function[process_data_simple_main_8796]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (6.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[jpeg_read_scanlines]` (5)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[decompress_onepass]` (3)
- `mupdf-wasm.wasm.wasm-function[sep_upsample]` (2)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/priority-queue.js:3` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:60` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `createStandardJSONSchemaMethod` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_load_image_stream]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (7.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_stream]` (4)
- `mupdf-wasm.wasm.wasm-function[pdf_load_compressed_stream]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_read_best]` (5)

### `async doWrite`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:53` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `async _write` (2)

**Calls:**
- `async doWrite` (2)

### `mupdf-wasm.wasm.wasm-function[wasm_load_page]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `wasm-stub` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_load_page]` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:104` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `StateGraph` (1)

### `clone`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:262` | Self: 0.0% (0us) | Total: 2.9% (12.72s) | Samples: 0

**Called by:**
- `clone` (5)
- `bound clone` (2)
- `interopZodObjectStrict` (1)
- `interopZodTransformInputSchemaImpl` (1)
- `interopZodTransformInputSchemaImpl` (1)

**Calls:**
- `ZodNumber` (6)
- `ZodOptional` (2)
- `ZodObject` (2)

### `__embind_register_class_property`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `wasm-stub` (2)

**Calls:**
- `whenDependentTypesAreResolved` (2)

### `mupdf-wasm.wasm.wasm-function[pdf_parse_ind_obj]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_cache_object]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_parse_ind_obj_or_newobj]` (1)

### `openDocument`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:1475` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Called by:**
- `async convertPdfToImages` (2)

**Calls:**
- `wasm-stub` (2)

### `createNode`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `createNode` (1)
- `mknod` (1)

**Calls:**
- `createNode` (1)
- `FSNode` (1)

### `async classifyImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:24` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `async (anonymous)` (2)

**Calls:**
- `async classifyImage` (2)

### `.wasm-function[16862]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (79.6ms) | Samples: 0

**Called by:**
- `wasm-stub` (65)

**Calls:**
- `.wasm-function[4417]` (42)
- `.wasm-function[2667]` (19)
- `.wasm-function[744]` (1)
- `.wasm-function[3389]` (1)
- `.wasm-function[1310]` (1)
- `.wasm-function[1588]` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_dict_get]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_lookup_resource]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_is_ocg_hidden_imp]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_load_page_tree_imp]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect_chain]` (2)
- `mupdf-wasm.wasm.wasm-function[pdf_dict_find]` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/external.js:10` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Calls:**
- `en_default` (1)

### `_number`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:307` | Self: 0.0% (0us) | Total: 0.0% (77.0ms) | Samples: 0

**Called by:**
- `async cropper` (7)
- `(module)` (1)
- `(module)` (1)

**Calls:**
- `ZodNumber` (9)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:211` | Self: 0.0% (0us) | Total: 0.0% (106.9ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (100)

**Calls:**
- `(anonymous)` (100)

### `mupdf-wasm.wasm.wasm-function[pdf_new_run_processor]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (82.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_page_contents_with_usage_imp]` (8)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_calloc]` (8)

### `Client`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js:821` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `getSharedClient` (1)

**Calls:**
- `AsyncCaller` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:102` | Self: 0.0% (0us) | Total: 2.9% (12.64s) | Samples: 0

**Calls:**
- `bound int` (5)
- `get` (1)

### `metadata`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:685` | Self: 0.0% (0us) | Total: 6.5% (28.03s) | Samples: 0

**Called by:**
- `async compressImage` (6)
- `async cropAndZoom` (5)

**Calls:**
- `Promise` (11)

### `mupdf-wasm.wasm.wasm-function[ft_glyphslot_free_bitmap]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[FT_Load_Glyph]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[ft_free]` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/errors.js:19` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `$constructor` (1)

### `async mkdir`
`node:fs/promises:247` | Self: 0.0% (0us) | Total: 0.0% (187.2ms) | Samples: 0

**Called by:**
- `async (anonymous)` (3)

**Calls:**
- `mkdir` (3)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:46` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `async normalizeCoords` (1)

### `mupdf-wasm.wasm.wasm-function[fz_drop_text]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_flush_text_imp]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_drop_font]` (1)

### `RunTree`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:294` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `runWithConfig` (1)

**Calls:**
- `defineProperty` (1)

### `runWithConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js:22` | Self: 0.0% (0us) | Total: 0.0% (967us) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `_configureSync` (1)

### `.wasm-function[2667]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (25.4ms) | Samples: 0

**Called by:**
- `.wasm-function[16862]` (19)

**Calls:**
- `wasm-stub` (19)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1104` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `init` (1)

### `detectVerticalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:566` | Self: 0.0% (0us) | Total: 7.1% (30.27s) | Samples: 0

**Called by:**
- `async cropTableRows` (27732)

**Calls:**
- `(anonymous)` (27732)

### `methodCaller<(Mat) => emscripten::val>`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `__emval_invoke` (2)

**Calls:**
- `bound readPointer` (2)

### `async _route`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:39` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `async (anonymous)` (3)

**Calls:**
- `async _route` (3)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/localShell.js:6` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `_array` (1)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:316` | Self: 0.0% (0us) | Total: 0.0% (12.4ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (12)

**Calls:**
- `countNonZero` (12)

### `mupdf-wasm.wasm.wasm-function[pdf_run_Tj]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_string]` (2)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:38` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `isRunnableInterface` (1)

### `bound nullable`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (925us) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `nullable` (1)

### `mupdf-wasm.wasm.wasm-function[fz_realloc]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (4.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_resize_buffer]` (3)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[do_scavenging_realloc]` (3)

### `_next`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:48` | Self: 0.0% (0us) | Total: 0.2% (928.8ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `_tryToStartAnother` (1)

### `mupdf-wasm.wasm.wasm-function[fz_get_pixmap_from_image]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (6.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_fill_image]` (5)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[compressed_image_get_pixmap]` (5)

### `async next`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js:19` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `async _streamIterator` (1)

**Calls:**
- `async next` (1)

### `symlink`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.5ms) | Samples: 0

**Called by:**
- `createStandardStreams` (1)

**Calls:**
- `symlink` (1)

### `isBrowserLikeRuntime`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/profiles.js:11` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `loadProfileState` (1)

**Calls:**
- `getEnv` (1)

### `async I`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.0% (956us) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `async (anonymous)` (1)

### `async withRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:38` | Self: 0.0% (0us) | Total: 0.0% (98.6ms) | Samples: 0

**Called by:**
- `async withRetry` (6)

**Calls:**
- `async invoke` (3)
- `(anonymous)` (2)
- `async invoke` (1)

### `mupdf-wasm.wasm.wasm-function[wasm_init_context]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (11.8ms) | Samples: 0

**Called by:**
- `wasm-stub` (11)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_new_context_imp]` (11)

### `IterableReadableWritableStream`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/stream.js:65` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async _streamIterator` (1)

**Calls:**
- `IterableReadableStream` (1)

### `.wasm-function[734]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (4.2ms) | Samples: 0

**Called by:**
- `.wasm-function[11375]` (3)

**Calls:**
- `.wasm-function[12008]` (3)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:320` | Self: 0.0% (0us) | Total: 0.0% (47.5ms) | Samples: 0

**Calls:**
- `(anonymous)` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:34` | Self: 0.0% (0us) | Total: 0.0% (39.0ms) | Samples: 0

**Called by:**
- `async invoke` (1)

**Calls:**
- `ensureLangGraphConfig` (1)

### `async _generate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:266` | Self: 0.0% (0us) | Total: 1.2% (5.15s) | Samples: 0

**Called by:**
- `async (anonymous)` (35)

**Calls:**
- `async _generate` (30)
- `async _generate` (3)
- `async _generate` (2)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:306` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `async (anonymous)` (2)

**Calls:**
- `async (anonymous)` (2)

### `async loadImageForOpenCV`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:79` | Self: 0.0% (0us) | Total: 0.0% (210.1ms) | Samples: 0

**Calls:**
- `(anonymous)` (90)

### `__embind_register_enum`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (975us) | Samples: 0

**Called by:**
- `wasm-stub` (1)

**Calls:**
- `registerType` (1)

### `mupdf-wasm.wasm.wasm-function[ft_free]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[ft_glyphslot_free_bitmap]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_free]` (1)

### `ZodOptional`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` | Self: 0.0% (0us) | Total: 0.0% (15.6ms) | Samples: 0

**Called by:**
- `clone` (2)
- `optional` (1)

**Calls:**
- `init` (3)

### `async call`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:104` | Self: 0.0% (0us) | Total: 7.6% (32.59s) | Samples: 0

**Called by:**
- `async call` (10)

**Calls:**
- `async call` (9)
- `async call` (1)

### `detectVerticalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:557` | Self: 0.0% (0us) | Total: 0.0% (35.6ms) | Samples: 0

**Called by:**
- `async cropTableRows` (33)

**Calls:**
- `threshold` (33)

### `async cropAndZoom`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:42` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `Sharp` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:39` | Self: 0.0% (0us) | Total: 7.5% (32.14s) | Samples: 0

**Called by:**
- `async cropper` (14)

**Calls:**
- `async compressImage` (14)

### `.wasm-function[12008]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (4.2ms) | Samples: 0

**Called by:**
- `.wasm-function[734]` (3)

**Calls:**
- `.wasm-function[182]` (3)

### `mupdf-wasm.wasm.wasm-function[fz_resize_buffer]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (4.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_ensure_buffer]` (2)
- `mupdf-wasm.wasm.wasm-function[fz_grow_buffer]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_realloc]` (3)

### `interopZodObjectStrict`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:298` | Self: 0.0% (0us) | Total: 0.0% (913us) | Samples: 0

**Called by:**
- `toJsonSchema` (1)

**Calls:**
- `get` (1)

### `async generatePrompt`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:484` | Self: 0.0% (0us) | Total: 2.7% (11.84s) | Samples: 0

**Called by:**
- `async invoke` (40)

**Calls:**
- `async generate` (39)
- `async generate` (1)

### `extractDefs`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:182` | Self: 0.0% (0us) | Total: 0.0% (866us) | Samples: 0

**Called by:**
- `toJSONSchema` (1)

**Calls:**
- `extractToDef` (1)

### `interopZodTransformInputSchemaImpl`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:430` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `interopZodTransformInputSchemaImpl` (1)

**Calls:**
- `get` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:644` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `async withRetry` (1)

**Calls:**
- `async invoke` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_show_string]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_Tj]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[show_string]` (2)

### `dilate`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (106.9ms) | Samples: 0

**Called by:**
- `(anonymous)` (100)

**Calls:**
- `wasm-stub` (100)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:697` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `(anonymous)` (1)
- `(anonymous)` (1)

### `toJSONSchema`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:598` | Self: 0.0% (0us) | Total: 0.1% (647.0ms) | Samples: 0

**Called by:**
- `toJsonSchema` (7)

**Calls:**
- `process` (6)
- `process` (1)

### `.wasm-function[6535]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `.wasm-function[6551]` (1)

**Calls:**
- `wasm-stub` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_process_Do]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (14.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (11)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_Do_image]` (10)
- `mupdf-wasm.wasm.wasm-function[pdf_load_image]` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_cmap_imp]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_cmap]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_cmap]` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/sharp-linux-x64/index.cjs:2` | Self: 0.0% (0us) | Total: 0.0% (3.8ms) | Samples: 0

**Called by:**
- `anonymous` (4)

**Calls:**
- `bound require` (4)

### `mupdf-wasm.wasm.wasm-function[do_flatten_stroke]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.5ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_flatten_stroke_path]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_walk_path]` (2)

### `mupdf-wasm.wasm.wasm-function[pdf_is_ocg_hidden_imp]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_is_ocg_hidden]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_dict_get]` (1)

### `async cropBbsRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:840` | Self: 0.0% (0us) | Total: 5.2% (22.32s) | Samples: 0

**Calls:**
- `detectTables` (9715)
- `detectTables` (8970)
- `detectTables` (1668)
- `detectTables` (207)
- `detectTables` (115)
- `detectTables` (100)
- `detectTables` (38)
- `detectTables` (12)
- `detectTables` (12)
- `detectTables` (2)
- `detectTables` (2)
- `detectTables` (1)
- `detectTables` (1)
- `detectTables` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1181` | Self: 0.0% (0us) | Total: 0.0% (4.4ms) | Samples: 0

**Called by:**
- `async invoke` (4)

**Calls:**
- `async stream` (4)

### `mupdf-wasm.wasm.wasm-function[FT_Outline_Decompose]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[gray_raster_render]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[gray_conic_to]` (1)

### `.wasm-function[584]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (4.2ms) | Samples: 0

**Called by:**
- `.wasm-function[76]` (3)

**Calls:**
- `.wasm-function[585]` (3)

### `async tick`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:447` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `async _runLoop` (3)

**Calls:**
- `async tick` (1)
- `async tick` (1)
- `async tick` (1)

### `isLangChainTool`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/types.js:47` | Self: 0.0% (0us) | Total: 0.0% (79.3ms) | Samples: 0

**Called by:**
- `convertToOpenAITool` (2)

**Calls:**
- `isRunnableToolLike` (1)
- `isStructuredToolParams` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:570` | Self: 0.0% (0us) | Total: 0.9% (3.91s) | Samples: 0

**Called by:**
- `init` (3)

**Calls:**
- `init` (3)

### `.wasm-function[10948]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (202.5ms) | Samples: 0

**Called by:**
- `.wasm-function[491]` (187)

**Calls:**
- `.wasm-function[1543]` (187)

### `mupdf-wasm.wasm.wasm-function[compressed_image_get_pixmap]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (6.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_get_pixmap_from_image]` (5)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_decomp_image_from_stream]` (5)

### `mupdf-wasm.wasm.wasm-function[pdf_lookup_page_obj]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_page_imp]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_page_tree_internal]` (1)

### `PQueue`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:35` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `AsyncCaller` (1)

**Calls:**
- `set concurrency` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:61` | Self: 0.0% (0us) | Total: 0.0% (98.3ms) | Samples: 0

**Calls:**
- `async writeFile` (1)

### `ZodLiteral`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `literal` (1)

**Calls:**
- `init` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/functions/compare-build.js:3` | Self: 0.0% (0us) | Total: 0.0% (920us) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `mupdf-wasm.wasm.wasm-function[fz_convert_color]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[resolve_color]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_find_color_converter]` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:107` | Self: 0.0% (0us) | Total: 0.9% (3.93s) | Samples: 0

**Calls:**
- `bound int` (4)

### `detectVerticalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:556` | Self: 0.0% (0us) | Total: 0.0% (31.5ms) | Samples: 0

**Called by:**
- `async cropTableRows` (30)

**Calls:**
- `(anonymous)` (30)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/messages_annotation.js:102` | Self: 0.0% (0us) | Total: 0.0% (992us) | Samples: 0

**Calls:**
- `(anonymous)` (1)

### `MatVector.get`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `detectTables` (2)

**Calls:**
- `wasm-stub` (2)

### `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_font]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (6.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_font_descriptor]` (5)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_stream]` (4)
- `mupdf-wasm.wasm.wasm-function[fz_new_font_from_buffer]` (1)

### `Runnable`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `RunnableBinding` (1)
- `RunnablePassthrough` (1)
- `BaseLangChain` (1)

**Calls:**
- `Serializable` (1)
- `Serializable` (1)
- `Serializable` (1)

### `_commit`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:217` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Called by:**
- `async tick` (2)

**Calls:**
- `putWrites` (2)

### `isRotationExpected`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs` | Self: 0.0% (0us) | Total: 0.0% (64.2ms) | Samples: 0

**Called by:**
- `extract` (1)

**Calls:**
- `(unknown)` (1)

### `async _streamIterator`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1012` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `next` (1)

**Calls:**
- `async _validateInput` (1)

### `set concurrency`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:146` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `PQueue` (1)

**Calls:**
- `_processQueue` (1)

### `internal:validators`
`internal:validators:2` | Self: 0.0% (0us) | Total: 0.0% (3.5ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `anonymous` (2)

### `async interopSafeParseAsync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:69` | Self: 0.0% (0us) | Total: 0.0% (3.2ms) | Samples: 0

**Called by:**
- `async interopSafeParseAsync` (3)

**Calls:**
- `async (anonymous)` (3)

### `parseCallbackConfigArg`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/callbacks/manager.js:75` | Self: 0.0% (0us) | Total: 0.8% (3.47s) | Samples: 0

**Called by:**
- `async call` (1)

**Calls:**
- `isArray` (1)

### `async extract`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:143` | Self: 0.0% (0us) | Total: 0.1% (619.4ms) | Samples: 0

**Calls:**
- `withStructuredOutput` (2)

### `async _validateResult`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:154` | Self: 0.0% (0us) | Total: 0.0% (3.2ms) | Samples: 0

**Called by:**
- `async _validateResult` (3)

**Calls:**
- `async interopSafeParseAsync` (3)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:507` | Self: 0.0% (0us) | Total: 1.3% (5.61s) | Samples: 0

**Called by:**
- `init` (6)

**Calls:**
- `init` (5)
- `init` (1)

### `async normalizeCoords`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/normalizeCoords.ts:4` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `async normalizeCoords` (1)

### `Sharp`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs:230` | Self: 0.0% (0us) | Total: 5.0% (21.61s) | Samples: 0

**Called by:**
- `async compressImage` (10)
- `async cropTableRows` (5)
- `async cropTableRows` (5)
- `async cropAndZoom` (4)
- `async cropAndZoom` (3)
- `async createDebugImage` (3)
- `async compressImage` (2)
- `async cropAndZoom` (1)

**Calls:**
- `Sharp` (12)
- `Sharp` (11)
- `Sharp` (6)
- `Sharp` (2)
- `Sharp` (1)
- `Sharp` (1)

### `mupdf-wasm.wasm.wasm-function[do_tzset]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (9.6ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[gmtime]` (9)

**Calls:**
- `wasm-stub` (9)

### `mupdf-wasm.wasm.wasm-function[fz_new_icc_colorspace]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (11.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_new_colorspace_context]` (11)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[lcms2mt_cmsCreateProfilePlaceholder]` (9)
- `mupdf-wasm.wasm.wasm-function[fz_md5_buffer]` (2)

### `getLsParamsWithDefaults`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:200` | Self: 0.0% (0us) | Total: 2.6% (11.43s) | Samples: 0

**Called by:**
- `async _generateUncached` (29)

**Calls:**
- `getLsParams` (29)

### `mupdf-wasm.wasm.wasm-function[pdf_run_page_contents_with_usage_imp]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (224.5ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_page_with_usage]` (131)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_contents]` (123)
- `mupdf-wasm.wasm.wasm-function[pdf_new_run_processor]` (8)

### `mupdf-wasm.wasm.wasm-function[pdf_is_dict]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect_chain]` (1)

### `async pull`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js:88` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `onRSDefaultControllerStartFulfilled` (1)

**Calls:**
- `async pull` (1)

### `BaseLanguageModel`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:186` | Self: 0.0% (0us) | Total: 0.6% (2.73s) | Samples: 0

**Called by:**
- `BaseChatModel` (2)

**Calls:**
- `AsyncCaller` (1)
- `AsyncCaller` (1)

### `.wasm-function[173]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `.wasm-function[12305]` (1)

**Calls:**
- `.wasm-function[227]` (1)

### `makeDynCaller`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `embind__requireFunction` (2)

**Calls:**
- `getWasmTableEntry` (2)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:45` | Self: 0.0% (0us) | Total: 0.0% (997us) | Samples: 0

**Calls:**
- `log` (1)

### `async instantiateAsync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (864us) | Samples: 0

**Called by:**
- `async createWasm` (1)

**Calls:**
- `async instantiateArrayBuffer` (1)

### `mupdf-wasm.wasm.wasm-function[fz_new_context_imp]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (11.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[wasm_init_context]` (11)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_new_colorspace_context]` (11)

### `mupdf-wasm.wasm.wasm-function[next_flated]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (5.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_available_1592]` (3)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[inflate]` (3)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:8` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:20` | Self: 0.0% (0us) | Total: 0.0% (920us) | Samples: 0

**Calls:**
- `bound require` (1)

### `AsyncGeneratorWithSetup`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js:132` | Self: 0.0% (0us) | Total: 0.0% (3.2ms) | Samples: 0

**Called by:**
- `async stream` (3)

**Calls:**
- `Promise` (3)

### `mupdf-wasm.wasm.wasm-function[pdf_load_to_unicode]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.7ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[load_cid_font]` (3)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_remap_cmap]` (2)
- `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_cmap]` (1)

### `async F`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.0% (14.6ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)
- `async F` (1)

**Calls:**
- `Uint8Array` (7)
- `async F` (1)
- `async r` (1)

### `mknod`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `mkdev` (1)
- `mknod` (1)

**Calls:**
- `createNode` (1)
- `mknod` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:91` | Self: 0.0% (0us) | Total: 9.6% (41.13s) | Samples: 0

**Called by:**
- `async cropper` (12)

**Calls:**
- `async call` (10)
- `async call` (1)
- `async call` (1)

### `detectHorizontalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:482` | Self: 0.0% (0us) | Total: 4.9% (21.28s) | Samples: 0

**Called by:**
- `async cropTableRows` (19686)

**Calls:**
- `(anonymous)` (19686)

### `async r`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.0% (956us) | Samples: 0

**Called by:**
- `async F` (1)

**Calls:**
- `readFileSync` (1)

### `mupdf-wasm.wasm.wasm-function[fz_new_pixmap]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (941us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_new_pixmap_with_bbox]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_new_pixmap_with_data]` (1)

### `describe`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:167` | Self: 0.0% (0us) | Total: 0.5% (2.28s) | Samples: 0

**Called by:**
- `bound describe` (3)

**Calls:**
- `bound clone` (2)
- `get` (1)

### `async initialize`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:245` | Self: 0.0% (0us) | Total: 0.0% (3.5ms) | Samples: 0

**Called by:**
- `async (anonymous)` (3)

**Calls:**
- `async initialize` (1)
- `async initialize` (1)
- `async initialize` (1)

### `mupdf-wasm.wasm.wasm-function[fz_read]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (11.9ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_decomp_image_from_stream]` (5)
- `mupdf-wasm.wasm.wasm-function[fz_read_best]` (3)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_available_1592]` (8)

### `async _validateInput`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:706` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async _streamIterator` (1)

**Calls:**
- `async _validateInput` (1)

### `internal:streams/duplex`
`internal:streams/duplex:2` | Self: 0.0% (0us) | Total: 0.0% (7.7ms) | Samples: 0

**Called by:**
- `anonymous` (7)

**Calls:**
- `anonymous` (7)

### `async compressImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:12` | Self: 0.0% (0us) | Total: 7.5% (32.14s) | Samples: 0

**Called by:**
- `async compressImage` (16)

**Calls:**
- `Sharp` (10)
- `metadata` (6)

### `process`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:47` | Self: 0.0% (0us) | Total: 0.0% (938us) | Samples: 0

**Called by:**
- `process` (1)

**Calls:**
- `set` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:123` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Calls:**
- `HumanMessage` (2)

### `mupdf-wasm.wasm.wasm-function[fz_filter_store]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (907us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_empty_store]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_hash_remove]` (1)

### `RunnableBinding`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:612` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `withConfig` (1)

**Calls:**
- `Runnable` (1)

### `bound clone`
`[native code]` | Self: 0.0% (0us) | Total: 1.8% (7.87s) | Samples: 0

**Called by:**
- `bound check` (5)
- `describe` (2)

**Calls:**
- `clone` (5)
- `clone` (2)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js:134` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `next` (2)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:45` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `async _generateUncached`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:214` | Self: 0.0% (0us) | Total: 0.0% (84.0ms) | Samples: 0

**Called by:**
- `async _generateUncached` (1)

**Calls:**
- `invocationParams` (1)

### `isNonGlibcLinuxSync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/detect-libc.js:213` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `runtimeLibc` (1)

**Calls:**
- `familySync` (1)

### `.wasm-function[557]`
`[native code]` | Self: 0.0% (0us) | Total: 16.8% (71.61s) | Samples: 0

**Called by:**
- `.wasm-function[1308]` (66060)
- `.wasm-function[635]` (93)

**Calls:**
- `.wasm-function[9540]` (66153)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:44` | Self: 0.0% (0us) | Total: 1.4% (6.30s) | Samples: 0

**Calls:**
- `tool` (2)
- `tool` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1105` | Self: 0.0% (0us) | Total: 0.0% (13.7ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `init` (1)

### `parseToolCall`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:17` | Self: 0.0% (0us) | Total: 7.1% (30.61s) | Samples: 0

**Called by:**
- `convertCompletionsMessageToBaseMessage` (1)

**Calls:**
- `parse` (1)

### `async tick`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:451` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async tick` (1)

**Calls:**
- `async _first` (1)

### `__embind_register_class_class_function`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (975us) | Samples: 0

**Called by:**
- `wasm-stub` (1)

**Calls:**
- `whenDependentTypesAreResolved` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:82` | Self: 0.0% (0us) | Total: 2.8% (11.95s) | Samples: 0

**Called by:**
- `async withRetry` (3)

**Calls:**
- `async invoke` (40)
- `async invoke` (3)

### `mupdf-wasm.wasm.wasm-function[resolve_color]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_stroke_path_aux]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_convert_color]` (1)

### `.wasm-function[1735]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `.wasm-function[744]` (1)

**Calls:**
- `.wasm-function[12382]` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1076` | Self: 0.0% (0us) | Total: 0.0% (3.5ms) | Samples: 0

**Called by:**
- `async (anonymous)` (3)

**Calls:**
- `async initialize` (3)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:803` | Self: 0.0% (0us) | Total: 1.1% (4.84s) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `getOwnPropertyDescriptor` (1)

### `.wasm-function[6551]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `wasm-stub` (1)

**Calls:**
- `.wasm-function[6535]` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/extractSchema.ts:37` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `get` (1)

### `async _getUpdates`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:610` | Self: 0.0% (0us) | Total: 0.0% (881us) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `async _getUpdates` (1)

### `convertLangChainToolCallToOpenAI`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:43` | Self: 0.0% (0us) | Total: 1.1% (4.70s) | Samples: 0

**Called by:**
- `map` (1)

**Calls:**
- `stringify` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:121` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `withConfig` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:56` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `mergeExtractionResults` (1)

### `clone`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:106` | Self: 0.0% (0us) | Total: 1.3% (5.64s) | Samples: 0

**Called by:**
- `bound clone` (5)

**Calls:**
- `clone` (5)

### `defaultProcessor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:464` | Self: 0.0% (0us) | Total: 0.1% (618.3ms) | Samples: 0

**Called by:**
- `process` (1)

**Calls:**
- `shallowClone` (1)

### `updateMemoryViews`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (4.2ms) | Samples: 0

**Called by:**
- `growMemory` (3)

**Calls:**
- `Int8Array` (3)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:3` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `internal:streams/compose`
`internal:streams/compose:2` | Self: 0.0% (0us) | Total: 0.0% (8.7ms) | Samples: 0

**Called by:**
- `anonymous` (8)

**Calls:**
- `anonymous` (8)

### `async _generate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:268` | Self: 0.0% (0us) | Total: 0.0% (78.4ms) | Samples: 0

**Called by:**
- `async _generate` (2)

**Calls:**
- `invocationParams` (1)
- `invocationParams` (1)

### `.wasm-function[4377]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (99.7ms) | Samples: 0

**Called by:**
- `wasm-stub` (93)

**Calls:**
- `.wasm-function[11526]` (93)

### `mupdf-wasm.wasm.wasm-function[fz_draw_stroke_path_aux]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (66.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_stroke_path]` (59)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_convert_rasterizer]` (56)
- `mupdf-wasm.wasm.wasm-function[fz_flatten_stroke_path]` (2)
- `mupdf-wasm.wasm.wasm-function[resolve_color]` (1)

### `async _generateUncached`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:215` | Self: 0.0% (0us) | Total: 0.0% (107.2ms) | Samples: 0

**Called by:**
- `async _generateUncached` (2)

**Calls:**
- `_configureSync` (1)
- `_configureSync` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_run_ET]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (32.6ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (29)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_flush_text_imp]` (29)

### `Client`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js:805` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `getSharedClient` (1)

**Calls:**
- `getDefaultClientConfig` (1)

### `process`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:60` | Self: 0.0% (0us) | Total: 0.2% (1.24s) | Samples: 0

**Called by:**
- `toJSONSchema` (6)
- `objectProcessor` (2)

**Calls:**
- `objectProcessor` (6)
- `defaultProcessor` (1)
- `enumProcessor` (1)

### `mupdf-wasm.wasm.wasm-function[fz_new_font_from_buffer]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (983us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_font]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[FT_New_Memory_Face]` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_set_color]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_RG]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_flush_text_imp]` (1)

### `.wasm-function[1260]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (41.2ms) | Samples: 0

**Called by:**
- `.wasm-function[15702]` (38)

**Calls:**
- `.wasm-function[503]` (38)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:623` | Self: 0.0% (0us) | Total: 0.0% (108.0ms) | Samples: 0

**Calls:**
- `(anonymous)` (11)

### `async _`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Called by:**
- `(module)` (2)

**Calls:**
- `async (anonymous)` (2)

### `toFile`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:79` | Self: 0.0% (0us) | Total: 0.0% (35.6ms) | Samples: 0

**Called by:**
- `async cropTableRows` (1)

**Calls:**
- `test` (1)

### `async tick`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:67` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Calls:**
- `_commit` (2)

### `mupdf-wasm.wasm.wasm-function[fz_find_color_converter]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_convert_color]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_init_process_color_converter]` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_try_load_font]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (11.9ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (9)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_font]` (9)

### `mupdf-wasm.wasm.wasm-function[lex_number]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_lex]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_strtof]` (1)
- `mupdf-wasm.wasm.wasm-function[fz_read_byte]` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:272` | Self: 0.0% (0us) | Total: 0.0% (185.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (22)

**Calls:**
- `async (anonymous)` (15)
- `async (anonymous)` (7)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:57` | Self: 0.0% (0us) | Total: 0.5% (2.25s) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `init` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_load_page_tree_imp]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_page_tree_imp]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_load_page_tree_internal]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_dict_get]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_load_page_tree_imp]` (1)

### `async compressImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:9` | Self: 0.0% (0us) | Total: 7.5% (32.14s) | Samples: 0

**Called by:**
- `async cropper` (14)
- `async classifyImage` (2)

**Calls:**
- `async compressImage` (16)

### `join2`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `lookupPath` (1)

**Calls:**
- `normalize` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:24` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `__toCommonJS` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_load_compressed_stream]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_image_imp]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_image_stream]` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_load_image]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_Do]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_image_imp]` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_process_contents]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (142.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_page_contents_with_usage_imp]` (123)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_raw_contents]` (123)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/standard_schema.js:3` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Calls:**
- `__exportAll` (1)

### `mupdf-wasm.wasm.wasm-function[fz_bound_glyph]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_tos_make_trm]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[FT_Load_Glyph]` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/_openapi_client/internal/qs/utils.js:11` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Calls:**
- `(anonymous)` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_cache_object]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_resolve_indirect]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_parse_ind_obj]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_get_xref_entry_aux]` (1)

### `ZodNumber`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` | Self: 0.0% (0us) | Total: 1.8% (7.93s) | Samples: 0

**Called by:**
- `_number` (9)
- `clone` (6)

**Calls:**
- `init` (14)
- `init` (1)

### `_getConfigureHooks`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/context.js:120` | Self: 0.0% (0us) | Total: 0.0% (48.9ms) | Samples: 0

**Called by:**
- `_configureSync` (1)

**Calls:**
- `getContextVariable` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1207` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `route` (1)
- `route` (1)

### `async _generateUncached`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:217` | Self: 0.0% (0us) | Total: 0.0% (134.8ms) | Samples: 0

**Called by:**
- `async _generateUncached` (4)

**Calls:**
- `_filterInvocationParamsForTracing` (3)
- `_filterInvocationParamsForTracing` (1)

### `async call`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:249` | Self: 0.0% (0us) | Total: 7.6% (32.59s) | Samples: 0

**Called by:**
- `async invoke` (10)

**Calls:**
- `async call` (10)

### `async _callWithConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:162` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Calls:**
- `bound _invoke` (1)
- `async (anonymous)` (1)

### `_prepareSingleTask`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:493` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `_prepareNextTasks` (1)

**Calls:**
- `v35` (1)

### `mupdf-wasm.wasm.wasm-function[sfnt_load_face]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (983us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[tt_face_init]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[tt_face_load_cpal]` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:31` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `async func` (3)

**Calls:**
- `async _route` (3)

### `staticInit`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `async (anonymous)` (2)

**Calls:**
- `mount` (1)
- `createDefaultDevices` (1)

### `__embind_register_constant`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `wasm-stub` (2)

**Calls:**
- `whenDependentTypesAreResolved` (2)

### `mupdf-wasm.wasm.wasm-function[wasm_new_buffer_from_pixmap_as_png]`
`[native code]` | Self: 0.0% (0us) | Total: 0.2% (1.25s) | Samples: 0

**Called by:**
- `wasm-stub` (1137)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_new_buffer_from_pixmap_as_png]` (1137)

### `object`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:791` | Self: 0.0% (0us) | Total: 1.0% (4.26s) | Samples: 0

**Called by:**
- `async cropper` (7)
- `(module)` (1)

**Calls:**
- `ZodObject` (8)

### `async _first`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:647` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async tick` (1)

**Calls:**
- `async _first` (1)

### `mupdf-wasm.wasm.wasm-function[fz_open_accelerated_document_with_stream_and_dir]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_open_document_with_buffer]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[open_document]` (1)
- `mupdf-wasm.wasm.wasm-function[do_recognize_document_stream_and_dir_content]` (1)

### `.wasm-function[10385]`
`[native code]` | Self: 0.0% (0us) | Total: 16.7% (71.52s) | Samples: 0

**Called by:**
- `.wasm-function[505]` (66061)

**Calls:**
- `.wasm-function[1308]` (66061)

### `async _write`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:50` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `async _write` (2)

**Calls:**
- `async doWrite` (2)

### `mupdf-wasm.wasm.wasm-function[pdf_load_font_descriptor]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (6.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[load_cid_font]` (5)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_embedded_font]` (5)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:738` | Self: 0.0% (0us) | Total: 0.5% (2.24s) | Samples: 0

**Called by:**
- `init` (4)

**Calls:**
- `init` (3)
- `init` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_remap_cmap]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_to_unicode]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_remap_cmap_range]` (2)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:20` | Self: 0.0% (0us) | Total: 0.0% (422.6ms) | Samples: 0

**Calls:**
- `(anonymous)` (272)

### `_gte`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:523` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `min` (1)

**Calls:**
- `$ZodCheckGreaterThan` (1)

### `.wasm-function[227]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `.wasm-function[173]` (1)

**Calls:**
- `.wasm-function[1182]` (1)

### `.wasm-function[1859]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `wasm-stub` (1)

**Calls:**
- `.wasm-function[15014]` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/index.mjs:17` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `default` (1)

### `async _generateUncached`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:308` | Self: 0.0% (0us) | Total: 1.2% (5.24s) | Samples: 0

**Calls:**
- `map` (36)

### `mupdf-wasm.wasm.wasm-function[do_scavenging_realloc]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (4.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_realloc]` (3)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_realloc_default]` (3)

### `mupdf-wasm.wasm.wasm-function[pdf_parse_ind_obj_or_newobj]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_parse_ind_obj]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_parse_dict]` (1)

### `.wasm-function[1199]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (4.2ms) | Samples: 0

**Called by:**
- `.wasm-function[182]` (3)

**Calls:**
- `wasm-stub` (3)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:587` | Self: 0.0% (0us) | Total: 1.1% (4.76s) | Samples: 0

**Called by:**
- `flatIntoArrayWithCallback` (2)

**Calls:**
- `map` (2)

### `ZodNever`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (992us) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `ZodType` (1)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:707` | Self: 0.0% (0us) | Total: 0.1% (554.8ms) | Samples: 0

**Calls:**
- `Sharp` (5)

### `async _generate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:284` | Self: 0.0% (0us) | Total: 12.5% (53.40s) | Samples: 0

**Calls:**
- `convertOpenRouterResponseToBaseMessage` (7)

### `toJsonSchema`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/json_schema.js:48` | Self: 0.0% (0us) | Total: 2.3% (10.09s) | Samples: 0

**Called by:**
- `convertToOpenAIFunction` (18)
- `withStructuredOutput` (2)

**Calls:**
- `toJSONSchema` (7)
- `toJSONSchema` (4)
- `finalize` (2)
- `finalize` (1)
- `interopZodObjectStrict` (1)
- `toJSONSchema` (1)
- `finalize` (1)
- `finalize` (1)
- `toJSONSchema` (1)
- `interopZodObjectStrict` (1)

### `_string`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:7` | Self: 0.0% (0us) | Total: 0.0% (14.4ms) | Samples: 0

**Called by:**
- `async cropper` (3)

**Calls:**
- `ZodString` (3)

### `.wasm-function[9540]`
`[native code]` | Self: 0.0% (0us) | Total: 17.1% (73.04s) | Samples: 0

**Called by:**
- `.wasm-function[557]` (66153)
- `.wasm-function[1037]` (1321)

**Calls:**
- `.wasm-function[2968]` (67461)
- `.wasm-function[2969]` (13)

### `RunnableCallable`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:13` | Self: 0.0% (0us) | Total: 0.0% (916us) | Samples: 0

**Called by:**
- `ChannelWrite` (1)

**Calls:**
- `(anonymous)` (1)

### `RunTree`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:325` | Self: 0.0% (0us) | Total: 1.5% (6.44s) | Samples: 0

**Called by:**
- `runWithConfig` (1)

**Calls:**
- `isRunTree` (1)

### `async convertPdfToImages`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:76` | Self: 0.0% (0us) | Total: 0.2% (1.25s) | Samples: 0

**Called by:**
- `(module)` (1137)

**Calls:**
- `asPNG` (1137)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:27` | Self: 0.0% (0us) | Total: 0.0% (2.8ms) | Samples: 0

**Calls:**
- `async _` (2)
- `async _` (1)

### `async compressImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:22` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `png` (1)

### `mupdf-wasm.wasm.wasm-function[fz_fill_text]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (26.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_flush_text_imp]` (24)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_fill_text]` (24)

### `mupdf-wasm.wasm.wasm-function[pdf_show_path]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (66.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_S]` (60)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_stroke_path]` (60)

### `async stream`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:939` | Self: 0.0% (0us) | Total: 0.0% (4.4ms) | Samples: 0

**Called by:**
- `async stream` (4)

**Calls:**
- `async stream` (4)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:1657` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `getEnumValues` (1)

### `min`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:518` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `bound min` (1)

**Calls:**
- `_gte` (1)

### `isStructuredToolParams`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/types.js:29` | Self: 0.0% (0us) | Total: 0.0% (78.2ms) | Samples: 0

**Called by:**
- `isLangChainTool` (1)

**Calls:**
- `isInteropZodSchema` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_process_raw_contents]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (142.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_contents]` (123)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_stream]` (123)

### `finalize`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:296` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `toJsonSchema` (1)

**Calls:**
- `flattenRef` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/classes/comparator.js:143` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `findWasmBinary`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (46.5ms) | Samples: 0

**Called by:**
- `async createWasm` (43)

**Calls:**
- `binaryDecode` (40)
- `binaryDecode` (3)

### `.wasm-function[68]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (284.5ms) | Samples: 0

**Called by:**
- `.wasm-function[390]` (171)
- `.wasm-function[510]` (92)

**Calls:**
- `.wasm-function[9672]` (171)
- `.wasm-function[8596]` (92)

### `node:stream`
`node:stream:2` | Self: 0.0% (0us) | Total: 0.0% (11.9ms) | Samples: 0

**Calls:**
- `anonymous` (11)

### `mupdf-wasm.wasm.wasm-function[fz_new_pixmap_with_data]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (941us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_new_pixmap]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_malloc]` (1)

### `internal:util/inspect`
`internal:util/inspect:2` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `anonymous` (2)

### `h`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.0% (86.3ms) | Samples: 0

**Called by:**
- `wasm-stub` (11)

**Calls:**
- `Z` (11)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:737` | Self: 0.0% (0us) | Total: 1.1% (4.85s) | Samples: 0

**Called by:**
- `init` (4)

**Calls:**
- `init` (4)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:302` | Self: 0.0% (0us) | Total: 0.0% (12.3ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (12)

**Calls:**
- `countNonZero` (12)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:37` | Self: 0.0% (0us) | Total: 0.0% (19.4ms) | Samples: 0

**Called by:**
- `async invoke` (18)

**Calls:**
- `run` (10)
- `runWithConfig` (8)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs:686` | Self: 0.0% (0us) | Total: 6.5% (28.03s) | Samples: 0

**Called by:**
- `Promise` (11)

**Calls:**
- `(anonymous)` (11)

### `_processQueue`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:136` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `set concurrency` (1)

**Calls:**
- `_tryToStartAnother` (1)

### `RunTree`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:215` | Self: 0.0% (0us) | Total: 0.8% (3.73s) | Samples: 0

**Called by:**
- `runWithConfig` (1)

**Calls:**
- `defineProperty` (1)

### `.wasm-function[155]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (984us) | Samples: 0

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
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `wasm-stub` (1)

**Calls:**
- `map` (1)

### `.wasm-function[635]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (99.7ms) | Samples: 0

**Called by:**
- `.wasm-function[11526]` (93)

**Calls:**
- `.wasm-function[557]` (93)

### `async parseResult`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:167` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async parseResult` (1)

**Calls:**
- `async parsePartialResult` (1)

### `async run`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:153` | Self: 0.0% (0us) | Total: 0.0% (297.8ms) | Samples: 0

**Called by:**
- `_tryToStartAnother` (27)

**Calls:**
- `async (anonymous)` (27)

### `withStructuredOutput`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:397` | Self: 0.0% (0us) | Total: 0.1% (619.4ms) | Samples: 0

**Called by:**
- `async extract` (2)

**Calls:**
- `toJsonSchema` (2)

### `mergeDefs`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:99` | Self: 0.0% (0us) | Total: 0.4% (1.75s) | Samples: 0

**Called by:**
- `check` (1)

**Calls:**
- `assign` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:168` | Self: 0.0% (0us) | Total: 0.2% (928.8ms) | Samples: 0

**Calls:**
- `_next` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:49` | Self: 0.0% (0us) | Total: 7.5% (32.14s) | Samples: 0

**Calls:**
- `async cropper` (15)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:45` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `async (anonymous)` (2)

**Calls:**
- `asyncFunctionDrive` (1)
- `async (anonymous)` (1)

### `_prepareNextTasks`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:246` | Self: 0.0% (0us) | Total: 0.0% (925us) | Samples: 0

**Called by:**
- `async tick` (1)

**Calls:**
- `next` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:135` | Self: 0.0% (0us) | Total: 0.0% (9.1ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `string` (1)

### `async func`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:29` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `async (anonymous)` (3)

**Calls:**
- `async (anonymous)` (3)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:708` | Self: 0.0% (0us) | Total: 0.0% (95.9ms) | Samples: 0

**Calls:**
- `extract` (1)
- `extract` (1)

### `async createDebugImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:796` | Self: 0.0% (0us) | Total: 0.0% (956us) | Samples: 0

**Calls:**
- `composite` (1)

### `async tick`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:458` | Self: 0.0% (0us) | Total: 0.0% (896us) | Samples: 0

**Called by:**
- `async tick` (1)

**Calls:**
- `_applyWrites` (1)

### `_applyWrites`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:174` | Self: 0.0% (0us) | Total: 0.0% (890us) | Samples: 0

**Called by:**
- `_localRead` (1)

**Calls:**
- `finish` (1)

### `async stream`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:924` | Self: 0.0% (0us) | Total: 0.0% (4.4ms) | Samples: 0

**Called by:**
- `async invoke` (4)

**Calls:**
- `async stream` (4)

### `async func`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:291` | Self: 0.0% (0us) | Total: 9.0% (38.39s) | Samples: 0

**Called by:**
- `async call` (15)

**Calls:**
- `Promise` (15)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:264` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (1)

**Calls:**
- `get` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:1755` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `defineLazy` (1)

### `async cropAndZoom`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:58` | Self: 0.0% (0us) | Total: 0.0% (10.7ms) | Samples: 0

**Calls:**
- `Sharp` (3)

### `async stream`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:121` | Self: 0.0% (0us) | Total: 0.0% (3.2ms) | Samples: 0

**Called by:**
- `async stream` (3)

**Calls:**
- `AsyncGeneratorWithSetup` (3)

### `sha1`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/sha1.js:53` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `v35` (1)

**Calls:**
- `f` (1)

### `findContours`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (224.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (207)

**Calls:**
- `(unknown)` (207)

### `detectHorizontalLines`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:462` | Self: 0.0% (0us) | Total: 0.0% (28.0ms) | Samples: 0

**Called by:**
- `async cropTableRows` (27)

**Calls:**
- `(anonymous)` (27)

### `internal:streams/pipeline`
`internal:streams/pipeline:2` | Self: 0.0% (0us) | Total: 0.0% (8.7ms) | Samples: 0

**Called by:**
- `anonymous` (8)

**Calls:**
- `anonymous` (8)

### `process`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:80` | Self: 0.0% (0us) | Total: 0.0% (1.5ms) | Samples: 0

**Called by:**
- `objectProcessor` (1)

**Calls:**
- `get` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_run_S]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (66.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (60)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_path]` (60)

### `async _route`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js:40` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `async _route` (3)

**Calls:**
- `async invoke` (2)
- `_localRead` (1)

### `.wasm-function[1588]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `.wasm-function[16862]` (1)

**Calls:**
- `.wasm-function[1203]` (1)

### `bound int`
`[native code]` | Self: 0.0% (0us) | Total: 3.8% (16.57s) | Samples: 0

**Called by:**
- `async cropper` (5)
- `async cropper` (4)

**Calls:**
- `int` (5)
- `bound check` (4)

### `mupdf-wasm.wasm.wasm-function[gmtime]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (9.6ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[lcms2mt_cmsCreateProfilePlaceholder]` (9)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[do_tzset]` (9)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:157` | Self: 0.0% (0us) | Total: 0.0% (297.8ms) | Samples: 0

**Called by:**
- `async run` (27)

**Calls:**
- `async pRetry` (27)

### `async cropAndZoom`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:17` | Self: 0.0% (0us) | Total: 2.9% (12.60s) | Samples: 0

**Called by:**
- `async cropAndZoom` (9)

**Calls:**
- `metadata` (5)
- `Sharp` (4)

### `enumProcessor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:136` | Self: 0.0% (0us) | Total: 0.0% (877us) | Samples: 0

**Called by:**
- `process` (1)

**Calls:**
- `getEnumValues` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:5` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:631` | Self: 0.0% (0us) | Total: 9.3% (39.82s) | Samples: 0

**Calls:**
- `detectVerticalLines` (27732)
- `detectVerticalLines` (8213)
- `detectVerticalLines` (459)
- `detectVerticalLines` (33)
- `detectVerticalLines` (30)

### `async _generateUncached`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:205` | Self: 0.0% (0us) | Total: 2.7% (11.83s) | Samples: 0

**Called by:**
- `async generate` (39)

**Calls:**
- `async _generateUncached` (30)
- `async _generateUncached` (4)
- `async _generateUncached` (2)
- `async _generateUncached` (1)
- `async _generateUncached` (1)
- `async _generateUncached` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:304` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `run` (2)

**Calls:**
- `async (anonymous)` (2)

### `mupdf-wasm.wasm.wasm-function[decompress_onepass]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (4.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[process_data_simple_main_8796]` (3)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[jpeg_idct_islow]` (2)
- `mupdf-wasm.wasm.wasm-function[jpeg_idct_16x16]` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:112` | Self: 0.0% (0us) | Total: 0.0% (889us) | Samples: 0

**Calls:**
- `bound optional` (1)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:729` | Self: 0.0% (0us) | Total: 0.0% (149.5ms) | Samples: 0

**Calls:**
- `log` (4)

### `Stream`
`internal:streams/legacy:4` | Self: 0.0% (0us) | Total: 0.4% (1.84s) | Samples: 0

**Called by:**
- `Duplex` (1)

**Calls:**
- `EventEmitter` (1)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:256` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (2)

**Calls:**
- `boundingRect` (2)

### `mupdf-wasm.wasm.wasm-function[pdf_run_RG]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_set_color]` (1)

### `threshold`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (88.9ms) | Samples: 0

**Called by:**
- `detectHorizontalLines` (48)
- `detectVerticalLines` (33)

**Calls:**
- `wasm-stub` (81)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/state/prebuilt/messages.js:31` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Calls:**
- `DeltaValue` (1)

### `RunTree`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:331` | Self: 0.0% (0us) | Total: 0.0% (4.9ms) | Samples: 0

**Called by:**
- `runWithConfig` (4)

**Calls:**
- `getSharedClient` (4)

### `delete`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `detectTables` (1)

**Calls:**
- `releaseClassHandle` (1)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:117` | Self: 0.0% (0us) | Total: 0.0% (125.0ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (115)

**Calls:**
- `(anonymous)` (114)
- `(anonymous)` (1)

### `process`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:35` | Self: 0.0% (0us) | Total: 0.0% (22.9ms) | Samples: 0

**Called by:**
- `toJSONSchema` (1)

**Calls:**
- `get` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_read_xref_sections]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (937us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_xref]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[read_xref_section]` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:101` | Self: 0.0% (0us) | Total: 0.0% (74.8ms) | Samples: 0

**Calls:**
- `_number` (7)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:966` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `init` (1)

### `objectProcessor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js:282` | Self: 0.0% (0us) | Total: 0.1% (624.1ms) | Samples: 0

**Called by:**
- `process` (6)

**Calls:**
- `process` (2)
- `process` (2)
- `process` (1)
- `process` (1)

### `async call`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:133` | Self: 0.0% (0us) | Total: 9.0% (38.39s) | Samples: 0

**Calls:**
- `async func` (15)

### `toPixmap`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:2231` | Self: 0.0% (0us) | Total: 0.0% (225.4ms) | Samples: 0

**Called by:**
- `async convertPdfToImages` (132)

**Calls:**
- `(unknown)` (132)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/index.ts:43` | Self: 0.0% (0us) | Total: 0.0% (4.4ms) | Samples: 0

**Calls:**
- `async detectAndCropBbs` (4)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1172` | Self: 0.0% (0us) | Total: 0.0% (4.4ms) | Samples: 0

**Called by:**
- `async detectAndCropBbs` (4)

**Calls:**
- `async invoke` (4)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:155` | Self: 0.0% (0us) | Total: 2.4% (10.38s) | Samples: 0

**Called by:**
- `async cropBbsRows` (9715)

**Calls:**
- `(anonymous)` (9715)

### `mupdf-wasm.wasm.wasm-function[open_document]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (937us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_open_accelerated_document_with_stream_and_dir]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_open_document_with_stream]` (1)

### `async pull`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js:89` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async pull` (1)

**Calls:**
- `async next` (1)

### `bound writeFile`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (98.3ms) | Samples: 0

**Called by:**
- `async writeFile` (1)

**Calls:**
- `writeFile` (1)

### `async classifyImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:61` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Calls:**
- `async withRetry` (3)

### `uuid7FromTime`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/_uuid.js:25` | Self: 0.0% (0us) | Total: 1.4% (6.04s) | Samples: 0

**Called by:**
- `RunTree` (1)

**Calls:**
- `parse` (1)

### `async _generate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:269` | Self: 0.0% (0us) | Total: 1.1% (4.76s) | Samples: 0

**Called by:**
- `async _generate` (3)

**Calls:**
- `flatIntoArrayWithCallback` (3)

### `familySync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/detect-libc.js:188` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `isNonGlibcLinuxSync` (1)

**Calls:**
- `familyFromInterpreterSync` (1)

### `emptyCheckpoint`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph-checkpoint/dist/base.js:15` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async initialize` (1)

**Calls:**
- `v6` (1)

### `internal:streams/end-of-stream`
`internal:streams/end-of-stream:17` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `mupdf-wasm.wasm.wasm-function[fz_write_band]`
`[native code]` | Self: 0.0% (0us) | Total: 0.2% (1.25s) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_write_pixmap_as_png]` (1137)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[png_write_band]` (1137)

### `async pRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js:124` | Self: 0.0% (0us) | Total: 0.0% (185.1ms) | Samples: 0

**Called by:**
- `async pRetry` (22)

**Calls:**
- `(anonymous)` (22)

### `_outputWrites`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:410` | Self: 0.0% (0us) | Total: 0.0% (989us) | Samples: 0

**Called by:**
- `putWrites` (1)

**Calls:**
- `gatherIteratorSync` (1)

### `async cropBbsRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:869` | Self: 0.0% (0us) | Total: 0.3% (1.33s) | Samples: 0

**Calls:**
- `async cropTableRows` (1)

### `__embind_register_class_function`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (14.4ms) | Samples: 0

**Called by:**
- `wasm-stub` (13)

**Calls:**
- `whenDependentTypesAreResolved` (11)
- `embind__requireFunction` (1)
- `getFunctionName` (1)

### `createDefaultDevices`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `staticInit` (1)

**Calls:**
- `mkdev` (1)

### `mount`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `mount` (1)
- `staticInit` (1)

**Calls:**
- `mount` (1)
- `createNode` (1)

### `async classifyImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:33` | Self: 0.0% (0us) | Total: 0.0% (901us) | Samples: 0

**Calls:**
- `HumanMessage` (1)

### `getWasmTableEntry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `makeDynCaller` (2)

**Calls:**
- `get` (2)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:91` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `tool` (1)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:299` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (1)

**Calls:**
- `Mat.roi` (1)

### `async cropAndZoom`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:43` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Calls:**
- `extract` (2)

### `_filterInvocationParamsForTracing`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:279` | Self: 0.0% (0us) | Total: 0.0% (133.6ms) | Samples: 0

**Called by:**
- `async _generateUncached` (3)

**Calls:**
- `copyDataProperties` (3)

### `mupdf-wasm.wasm.wasm-function[fz_read_best]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (7.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_image_stream]` (5)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_read]` (3)
- `mupdf-wasm.wasm.wasm-function[fz_grow_buffer]` (1)
- `mupdf-wasm.wasm.wasm-function[fz_push_try]` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tracers/console.js:70` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `setPrototypeDirectOrThrow` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v3/types.js:2246` | Self: 0.0% (0us) | Total: 0.0% (992us) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `(anonymous)` (1)

### `filter`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `getEnumValues` (1)

**Calls:**
- `(anonymous)` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:109` | Self: 0.0% (0us) | Total: 0.5% (2.25s) | Samples: 0

**Calls:**
- `bound describe` (1)

### `async convertPdfToImages`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:85` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `(anonymous)` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_run_page_with_usage]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (224.5ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_new_pixmap_from_page_with_separations_and_usage]` (131)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_page_contents_with_usage_imp]` (131)

### `__embind_register_value_object_field`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `wasm-stub` (1)

**Calls:**
- `embind__requireFunction` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:259` | Self: 0.0% (0us) | Total: 0.0% (5.3ms) | Samples: 0

**Called by:**
- `init` (2)

**Calls:**
- `init` (2)

### `mupdf-wasm.wasm.wasm-function[pdf_load_type0_font]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (10.5ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_font]` (8)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[load_cid_font]` (8)

### `mupdf-wasm.wasm.wasm-function[pdf_show_image_imp]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (12.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_image]` (10)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_fill_image]` (10)

### `initRuntime`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (82.3ms) | Samples: 0

**Called by:**
- `doRun` (67)

**Calls:**
- `wasm-stub` (65)
- `init` (2)

### `interopZodObjectStrict`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:312` | Self: 0.0% (0us) | Total: 1.1% (4.84s) | Samples: 0

**Called by:**
- `toJsonSchema` (1)

**Calls:**
- `clone` (1)

### `StructuredTool`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:68` | Self: 0.0% (0us) | Total: 0.0% (10.5ms) | Samples: 0

**Called by:**
- `DynamicStructuredTool` (2)

**Calls:**
- `BaseLangChain` (1)
- `BaseLangChain` (1)

### `mupdf-wasm.wasm.wasm-function[gray_conic_to]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[FT_Outline_Decompose]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[gray_render_line]` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:170` | Self: 0.0% (0us) | Total: 0.0% (94.2ms) | Samples: 0

**Calls:**
- `async withRetry` (2)

### `R`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.0% (17.9ms) | Samples: 0

**Called by:**
- `Z` (7)
- `_` (4)

**Calls:**
- `Int8Array` (11)

### `mupdf-wasm.wasm.wasm-function[fz_load_page]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[wasm_load_page]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_page_imp]` (1)

### `mupdf-wasm.wasm.wasm-function[fz_realloc_default]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (4.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[do_scavenging_realloc]` (3)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[emscripten_builtin_realloc]` (3)

### `async classifyImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:26` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `async classifyImage` (2)

**Calls:**
- `async compressImage` (2)

### `async _generate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:272` | Self: 0.0% (0us) | Total: 0.0% (309.9ms) | Samples: 0

**Called by:**
- `async _generate` (30)

**Calls:**
- `async add` (27)
- `callWithOptions` (2)
- `callWithRetries` (1)

### `async cropAndZoom`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:49` | Self: 0.0% (0us) | Total: 5.7% (24.65s) | Samples: 0

**Calls:**
- `reduce` (35)

### `.wasm-function[390]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (183.4ms) | Samples: 0

**Called by:**
- `.wasm-function[11624]` (171)

**Calls:**
- `.wasm-function[68]` (171)

### `mupdf-wasm.wasm.wasm-function[fz_open_document_with_buffer]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[wasm_open_document_with_buffer]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_open_accelerated_document_with_stream_and_dir]` (2)

### `Client`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js:874` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `getSharedClient` (1)

**Calls:**
- `assertValidHeaders` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_drop_document_imp]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (907us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_drop_document]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_empty_store]` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:35` | Self: 0.0% (0us) | Total: 7.5% (32.14s) | Samples: 0

**Called by:**
- `(module)` (15)

**Calls:**
- `async cropper` (14)
- `async cropper` (1)

### `mupdf-wasm.wasm.wasm-function[fz_add_line_join]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_stroke_lineto_aux]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_add_line]` (1)

### `__embind_register_function`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (28.5ms) | Samples: 0

**Called by:**
- `wasm-stub` (23)

**Calls:**
- `whenDependentTypesAreResolved` (21)
- `embind__requireFunction` (1)
- `exposePublicSymbol` (1)

### `.wasm-function[280]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (4.2ms) | Samples: 0

**Called by:**
- `.wasm-function[585]` (3)

**Calls:**
- `.wasm-function[11375]` (3)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:111` | Self: 0.0% (0us) | Total: 0.0% (14.4ms) | Samples: 0

**Calls:**
- `_string` (3)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:316` | Self: 0.0% (0us) | Total: 3.0% (12.98s) | Samples: 0

**Called by:**
- `map` (5)

**Calls:**
- `async (anonymous)` (3)
- `async (anonymous)` (1)
- `async (anonymous)` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:1234` | Self: 0.0% (0us) | Total: 0.0% (982us) | Samples: 0

**Called by:**
- `Promise` (1)

**Calls:**
- `run` (1)

### `readPointer`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `bound readPointer` (2)

**Calls:**
- `RegisteredPointer_fromWireType` (2)

### `async _executeTasksWithRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js:139` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Called by:**
- `async tick` (2)

**Calls:**
- `async _runWithRetry` (2)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:936` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Calls:**
- `async invoke` (2)

### `mupdf-wasm.wasm.wasm-function[wasm_drop_document]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (907us) | Samples: 0

**Called by:**
- `(unknown)` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_drop_document]` (1)

### `_int`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:324` | Self: 0.0% (0us) | Total: 1.9% (8.29s) | Samples: 0

**Called by:**
- `int` (4)

**Calls:**
- `ZodNumberFormat` (4)

### `async stream`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:120` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `async stream` (1)

**Calls:**
- `ensureConfig` (1)

### `mupdf-wasm.wasm.wasm-function[fz_decomp_image_from_stream]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (6.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[compressed_image_get_pixmap]` (5)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_read]` (5)

### `ChannelWrite`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:25` | Self: 0.0% (0us) | Total: 0.0% (916us) | Samples: 0

**Called by:**
- `attachNode` (1)

**Calls:**
- `RunnableCallable` (1)

### `async _streamIterator`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1021` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `IterableReadableWritableStream` (1)

### `mkdev`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `createDefaultDevices` (1)

**Calls:**
- `mknod` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:203` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `init` (1)

### `mupdf-wasm.wasm.wasm-function[ft_smooth_render]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[FT_Render_Glyph_Internal]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[gray_raster_render]` (2)

### `async tick`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:487` | Self: 0.0% (0us) | Total: 0.0% (4.0ms) | Samples: 0

**Calls:**
- `_prepareNextTasks` (3)
- `_prepareNextTasks` (1)

### `.wasm-function[11668]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (23.7ms) | Samples: 0

**Called by:**
- `.wasm-function[1293]` (23)

**Calls:**
- `.wasm-function[466]` (23)

### `mupdf-wasm.wasm.wasm-function[fz_md5_update]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_md5_buffer]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[body]` (2)

### `async _write`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:36` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `async func` (3)

**Calls:**
- `async _write` (2)
- `async _write` (1)

### `literal`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1043` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `ZodLiteral` (1)

### `mupdf-wasm.wasm.wasm-function[fz_write_data]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[putchunk]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[buffer_write]` (2)

### `Z`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.0% (86.3ms) | Samples: 0

**Called by:**
- `h` (11)

**Calls:**
- `R` (7)
- `grow` (4)

### `bound _invoke`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (982us) | Samples: 0

**Called by:**
- `async _callWithConfig` (1)

**Calls:**
- `async _invoke` (1)

### `WritableState`
`internal:streams/writable:152` | Self: 0.0% (0us) | Total: 0.0% (40.1ms) | Samples: 0

**Called by:**
- `Duplex` (1)

**Calls:**
- `bind` (1)

### `destroy`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:510` | Self: 0.0% (0us) | Total: 0.0% (907us) | Samples: 0

**Called by:**
- `async convertPdfToImages` (1)

**Calls:**
- `(unknown)` (1)

### `.wasm-function[15702]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (41.2ms) | Samples: 0

**Called by:**
- `.wasm-function[674]` (38)

**Calls:**
- `.wasm-function[1260]` (38)

### `get`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js` | Self: 0.0% (0us) | Total: 1.0% (4.38s) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `(unknown)` (1)

### `.wasm-function[744]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `.wasm-function[16862]` (1)

**Calls:**
- `.wasm-function[1735]` (1)

### `mupdf-wasm.wasm.wasm-function[stroke_curveto]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_walk_path]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_stroke_bezier]` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/extractSchema.ts:9` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `_coercedNumber` (1)

### `k`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.0% (8.4ms) | Samples: 0

**Called by:**
- `wasm-stub` (8)

**Calls:**
- `getFullYear` (8)

### `mupdf-wasm.wasm.wasm-function[pdf_show_image]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (12.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_Do_image]` (10)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_image_imp]` (10)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:276` | Self: 0.0% (0us) | Total: 0.0% (115.1ms) | Samples: 0

**Called by:**
- `async (anonymous)` (15)

**Calls:**
- `stringify` (15)

### `mupdf-wasm.wasm.wasm-function[fz_grow_buffer]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_read_best]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_resize_buffer]` (1)

### `async doWrite`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:66` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `async doWrite` (2)

**Calls:**
- `async invoke` (2)

### `mupdf-wasm.wasm.wasm-function[fz_calloc]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (82.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_new_run_processor]` (8)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[do_scavenging_malloc]` (8)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:171` | Self: 0.0% (0us) | Total: 0.0% (298.9ms) | Samples: 0

**Called by:**
- `Promise` (28)

**Calls:**
- `_tryToStartAnother` (27)
- `_tryToStartAnother` (1)

### `async cropAndZoom`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:11` | Self: 0.0% (0us) | Total: 2.9% (12.60s) | Samples: 0

**Called by:**
- `async (anonymous)` (9)

**Calls:**
- `async cropAndZoom` (9)

### `.wasm-function[14700]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (88.9ms) | Samples: 0

**Called by:**
- `wasm-stub` (81)

**Calls:**
- `.wasm-function[9595]` (81)

### `_compileResolved`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:462` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `compile` (1)

**Calls:**
- `CompiledStateGraph` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_parse_array]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_parse_dict]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_lex]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_parse_dict]` (1)

### `async detectAndCropBbs`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:118` | Self: 0.0% (0us) | Total: 0.0% (4.4ms) | Samples: 0

**Called by:**
- `(module)` (4)

**Calls:**
- `async detectAndCropBbs` (4)

### `interopZodTransformInputSchemaImpl`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:406` | Self: 0.0% (0us) | Total: 0.0% (872us) | Samples: 0

**Called by:**
- `toJsonSchema` (1)

**Calls:**
- `clone` (1)

### `v7Bytes`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/uuid/src/v7.js:46` | Self: 0.0% (0us) | Total: 2.0% (8.87s) | Samples: 0

**Called by:**
- `v7` (2)

**Calls:**
- `Uint8Array` (2)

### `async _runWithRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/retry.js:26` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Called by:**
- `async _executeTasksWithRetry` (2)

**Calls:**
- `async _runWithRetry` (2)

### `async createDebugImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:795` | Self: 0.0% (0us) | Total: 0.0% (61.3ms) | Samples: 0

**Calls:**
- `Sharp` (3)

### `getLsParams`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:252` | Self: 0.0% (0us) | Total: 2.6% (11.43s) | Samples: 0

**Called by:**
- `getLsParamsWithDefaults` (29)

**Calls:**
- `invocationParams` (29)

### `async stream`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:119` | Self: 0.0% (0us) | Total: 0.0% (4.4ms) | Samples: 0

**Called by:**
- `async stream` (4)

**Calls:**
- `async stream` (3)
- `async stream` (1)

### `async parseResult`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:166` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `async parseResult` (1)

### `async _runLoop`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1204` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `async _runLoop` (2)

**Calls:**
- `async tick` (3)

### `StateGraph`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:163` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `_getChannelsFromSchema` (1)

### `.wasm-function[466]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (23.7ms) | Samples: 0

**Called by:**
- `.wasm-function[11668]` (23)

**Calls:**
- `.wasm-function[11510]` (23)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:21` | Self: 0.0% (0us) | Total: 0.5% (2.24s) | Samples: 0

**Called by:**
- `init` (2)

**Calls:**
- `(anonymous)` (1)
- `(anonymous)` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/_openapi_client/internal/qs/utils.js:9` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `push` (1)

### `.wasm-function[12305]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `.wasm-function[158]` (1)

**Calls:**
- `.wasm-function[173]` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:258` | Self: 0.0% (0us) | Total: 0.0% (9.1ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `init` (1)

### `route`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1156` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `wrapConversion` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_load_page_imp]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_load_page]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_lookup_page_obj]` (1)

### `__embind_register_class`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (9.8ms) | Samples: 0

**Called by:**
- `wasm-stub` (5)

**Calls:**
- `whenDependentTypesAreResolved` (4)
- `whenDependentTypesAreResolved` (1)

### `toBuffer`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:159` | Self: 0.0% (0us) | Total: 0.4% (1.90s) | Samples: 0

**Called by:**
- `async compressImage` (1)

**Calls:**
- `Error` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:49` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `_number` (1)

### `_enum`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1007` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `ZodEnum` (1)

### `loadProfileState`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/profiles.js:39` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `loadProfileClientConfig` (1)

**Calls:**
- `isBrowserLikeRuntime` (1)

### `.wasm-function[15014]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `.wasm-function[1859]` (1)

**Calls:**
- `.wasm-function[3269]` (1)

### `convertCompletionsMessageToBaseMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:183` | Self: 0.0% (0us) | Total: 3.0% (12.82s) | Samples: 0

**Called by:**
- `convertOpenRouterResponseToBaseMessage` (3)

**Calls:**
- `AIMessage` (2)
- `AIMessage` (1)

### `AIMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/ai.js:31` | Self: 0.0% (0us) | Total: 0.5% (2.28s) | Samples: 0

**Called by:**
- `convertCompletionsMessageToBaseMessage` (1)

**Calls:**
- `isArray` (1)

### `toFile`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:77` | Self: 0.0% (0us) | Total: 0.0% (155.2ms) | Samples: 0

**Called by:**
- `async cropTableRows` (2)
- `async cropTableRows` (1)

**Calls:**
- `bound resolve` (3)

### `mupdf-wasm.wasm.wasm-function[deflate]`
`[native code]` | Self: 0.0% (0us) | Total: 0.2% (1.03s) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[png_write_band]` (938)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[deflate_slow]` (938)

### `async _invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:1229` | Self: 0.0% (0us) | Total: 0.0% (982us) | Samples: 0

**Called by:**
- `bound _invoke` (1)

**Calls:**
- `Promise` (1)

### `mupdf-wasm.wasm.wasm-function[fz_drop_icc_link]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_fill_text]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_drop_storable]` (1)

### `XXH3`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/hash.js:253` | Self: 0.0% (0us) | Total: 0.0% (987us) | Samples: 0

**Called by:**
- `_prepareSingleTask` (1)

**Calls:**
- `XXH3_len_17to128_128b` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_new_pixmap_from_page_with_separations_and_usage]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (225.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[wasm_pdf_new_pixmap_from_page_with_usage]` (132)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_run_page_with_usage]` (131)
- `mupdf-wasm.wasm.wasm-function[fz_new_pixmap_with_bbox]` (1)

### `mupdf-wasm.wasm.wasm-function[fz_stroke_bezier]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (5.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_stroke_bezier]` (3)
- `mupdf-wasm.wasm.wasm-function[stroke_curveto]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_stroke_bezier]` (3)
- `mupdf-wasm.wasm.wasm-function[fz_stroke_lineto_aux]` (1)

### `runtimeLibc`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/libvips.mjs:39` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `runtimePlatformArch` (1)

**Calls:**
- `isNonGlibcLinuxSync` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:60` | Self: 0.0% (0us) | Total: 0.0% (187.2ms) | Samples: 0

**Calls:**
- `async mkdir` (3)

### `mupdf-wasm.wasm.wasm-function[fz_ensure_buffer]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_append_data]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_resize_buffer]` (2)

### `async convertPdfToImages`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:34` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Called by:**
- `(module)` (2)

**Calls:**
- `openDocument` (2)

### `onRSDefaultControllerStartFulfilled`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `async pull` (1)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:690` | Self: 0.0% (0us) | Total: 0.0% (333.9ms) | Samples: 0

**Calls:**
- `Sharp` (5)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:304` | Self: 0.0% (0us) | Total: 9.0% (38.39s) | Samples: 0

**Called by:**
- `Promise` (15)

**Calls:**
- `runWithConfig` (13)
- `run` (2)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:99` | Self: 0.0% (0us) | Total: 1.0% (4.26s) | Samples: 0

**Calls:**
- `object` (7)

### `_emscripten_resize_heap`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (4.2ms) | Samples: 0

**Called by:**
- `wasm-stub` (3)

**Calls:**
- `growMemory` (3)

### `mupdf-wasm.wasm.wasm-function[fz_append_data]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[buffer_write]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_ensure_buffer]` (2)

### `mupdf-wasm.wasm.wasm-function[fz_keep_colorspace]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_render_glyph]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_keep_buffer]` (1)

### `Mat.roi`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `detectTables` (1)

**Calls:**
- `bound toWireType` (1)

### `node:path`
`node:path:2` | Self: 0.0% (0us) | Total: 0.0% (3.5ms) | Samples: 0

**Calls:**
- `anonymous` (2)

### `generatorResume`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.1ms) | Samples: 0

**Called by:**
- `gatherIteratorSync` (1)
- `async gatherIterator` (1)
- `prefixGenerator` (1)

**Calls:**
- `mapInput` (1)
- `mapOutputUpdates` (1)
- `prefixGenerator` (1)

### `prefixGenerator`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:44` | Self: 0.0% (0us) | Total: 0.0% (989us) | Samples: 0

**Called by:**
- `generatorResume` (1)

**Calls:**
- `generatorResume` (1)

### `bound describe`
`[native code]` | Self: 0.0% (0us) | Total: 0.5% (2.28s) | Samples: 0

**Called by:**
- `async cropper` (1)
- `async cropper` (1)
- `async cropper` (1)

**Calls:**
- `describe` (3)

### `mupdf-wasm.wasm.wasm-function[stroke_lineto]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_walk_path]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_stroke_lineto_aux]` (1)

### `async withRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:31` | Self: 0.0% (0us) | Total: 0.0% (98.6ms) | Samples: 0

**Called by:**
- `async classifyImage` (3)
- `async cropper` (2)
- `async cropper` (1)

**Calls:**
- `async withRetry` (6)

### `_array`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:712` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Called by:**
- `(module)` (1)
- `(module)` (1)

**Calls:**
- `ZodArray` (2)

### `mupdf-wasm.wasm.wasm-function[pdf_parse_dict]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_parse_array]` (1)
- `mupdf-wasm.wasm.wasm-function[pdf_parse_ind_obj_or_newobj]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_parse_array]` (2)

### `AsyncCaller`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/async_caller.js:66` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `Client` (1)

**Calls:**
- `PQueue` (1)

### `mupdf-wasm.wasm.wasm-function[fz_convert_rasterizer]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (61.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_stroke_path_aux]` (56)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_convert_gel]` (56)

### `getDefaultProjectName`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/project.js:4` | Self: 0.0% (0us) | Total: 0.0% (976us) | Samples: 0

**Called by:**
- `getDefaultConfig` (1)

**Calls:**
- `getEnvironmentVariable` (1)

### `.wasm-function[3389]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `.wasm-function[16862]` (1)

**Calls:**
- `wasm-stub` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:28` | Self: 0.0% (0us) | Total: 0.0% (422.6ms) | Samples: 0

**Called by:**
- `(anonymous)` (272)

**Calls:**
- `async (anonymous)` (269)
- `async (anonymous)` (3)

### `compile`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:439` | Self: 0.0% (0us) | Total: 0.0% (3.8ms) | Samples: 0

**Called by:**
- `(module)` (4)

**Calls:**
- `_compileResolved` (1)
- `_compileResolved` (1)
- `_compileResolved` (1)
- `_compileResolved` (1)

### `mupdf-wasm.wasm.wasm-function[fz_new_buffer_from_pixmap_as_png]`
`[native code]` | Self: 0.0% (0us) | Total: 0.2% (1.25s) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[wasm_new_buffer_from_pixmap_as_png]` (1137)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[png_from_pixmap]` (1137)

### `runWithConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js:29` | Self: 0.0% (0us) | Total: 9.0% (38.39s) | Samples: 0

**Called by:**
- `(anonymous)` (13)
- `async invoke` (8)

**Calls:**
- `RunTree` (4)
- `RunTree` (4)
- `RunTree` (3)
- `RunTree` (2)
- `RunTree` (1)
- `RunTree` (1)
- `RunTree` (1)
- `RunTree` (1)
- `RunTree` (1)
- `RunTree` (1)
- `RunTree` (1)
- `RunTree` (1)

### `async _runLoop`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1200` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `async (anonymous)` (2)

**Calls:**
- `async _runLoop` (2)

### `bound readPointer`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `methodCaller<(Mat) => emscripten::val>` (2)

**Calls:**
- `readPointer` (2)

### `HumanMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/human.js:12` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `async cropper` (2)

**Calls:**
- `BaseMessage` (1)
- `BaseMessage` (1)

### `extract`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:486` | Self: 0.0% (0us) | Total: 0.0% (59.9ms) | Samples: 0

**Called by:**
- `async cropAndZoom` (2)
- `async cropTableRows` (1)
- `async cropTableRows` (1)

**Calls:**
- `forEach` (4)

### `mupdf-wasm.wasm.wasm-function[buffer_write]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_write_data]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_append_data]` (2)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:107` | Self: 0.0% (0us) | Total: 0.0% (993us) | Samples: 0

**Calls:**
- `addEdge` (1)

### `RunTree`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:349` | Self: 0.0% (0us) | Total: 3.5% (14.92s) | Samples: 0

**Called by:**
- `runWithConfig` (4)

**Calls:**
- `v7` (2)
- `uuid7FromTime` (1)
- `uuid7FromTime` (1)

### `.wasm-function[1293]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (23.7ms) | Samples: 0

**Called by:**
- `wasm-stub` (23)

**Calls:**
- `.wasm-function[11668]` (23)

### `mupdf-wasm.wasm.wasm-function[pdf_is_ocg_hidden]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_keyword]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_is_ocg_hidden_imp]` (1)

### `doRun`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (82.3ms) | Samples: 0

**Called by:**
- `run` (67)

**Calls:**
- `initRuntime` (67)

### `async _validateResult`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js:147` | Self: 0.0% (0us) | Total: 0.0% (3.2ms) | Samples: 0

**Calls:**
- `async _validateResult` (3)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:926` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Called by:**
- `async _runWithRetry` (2)

**Calls:**
- `async invoke` (1)
- `async invoke` (1)

### `RunTree`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:161` | Self: 0.0% (0us) | Total: 0.0% (938us) | Samples: 0

**Called by:**
- `runWithConfig` (1)

**Calls:**
- `defineProperty` (1)

### `mupdf-wasm.wasm.wasm-function[fz_draw_stroke_path]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (66.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_stroke_path]` (59)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_stroke_path_aux]` (59)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:519` | Self: 0.0% (0us) | Total: 0.9% (3.91s) | Samples: 0

**Called by:**
- `init` (3)

**Calls:**
- `init` (2)
- `init` (1)

### `receiveInstantiationResult`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (7.2ms) | Samples: 0

**Called by:**
- `async createWasm` (1)

**Calls:**
- `receiveInstance` (1)

### `mupdf-wasm.wasm.wasm-function[FT_Render_Glyph_Internal]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_render_ft_glyph]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[ft_smooth_render]` (2)

### `_localRead`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:64` | Self: 0.0% (0us) | Total: 0.0% (890us) | Samples: 0

**Called by:**
- `async _route` (1)

**Calls:**
- `_applyWrites` (1)

### `BaseLangChain`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js:137` | Self: 0.0% (0us) | Total: 0.0% (9.4ms) | Samples: 0

**Called by:**
- `StructuredTool` (1)

**Calls:**
- `getVerbosity` (1)

### `CompiledStateGraph`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:559` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `_compileResolved` (1)

**Calls:**
- `CompiledGraph` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:104` | Self: 0.0% (0us) | Total: 0.0% (10.1ms) | Samples: 0

**Calls:**
- `bound describe` (1)

### `.wasm-function[182]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (4.2ms) | Samples: 0

**Called by:**
- `.wasm-function[12008]` (3)

**Calls:**
- `.wasm-function[1199]` (3)

### `async compressImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:23` | Self: 0.0% (0us) | Total: 0.8% (3.76s) | Samples: 0

**Calls:**
- `_pipeline` (4)
- `toBuffer` (1)

### `_prepareSingleTask`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:560` | Self: 0.0% (0us) | Total: 0.0% (987us) | Samples: 0

**Called by:**
- `_prepareNextTasks` (1)

**Calls:**
- `XXH3` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:150` | Self: 0.0% (0us) | Total: 13.3% (57.07s) | Samples: 0

**Calls:**
- `async invoke` (12)
- `async invoke` (4)

### `receiveInstance`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (7.2ms) | Samples: 0

**Called by:**
- `receiveInstantiationResult` (1)

**Calls:**
- `updateMemoryViews` (1)

### `RunTree`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:362` | Self: 0.0% (0us) | Total: 1.0% (4.40s) | Samples: 0

**Called by:**
- `runWithConfig` (1)

**Calls:**
- `convertToDottedOrderFormat` (1)

### `callWithOptions`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js:204` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `async _generate` (2)

**Calls:**
- `async add` (2)

### `internal:promisify`
`internal:promisify:53` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `putWrites`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:390` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Called by:**
- `_commit` (2)

**Calls:**
- `_outputWrites` (1)
- `_outputWrites` (1)

### `toJsonSchema`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/json_schema.js:47` | Self: 0.0% (0us) | Total: 0.4% (1.87s) | Samples: 0

**Called by:**
- `convertToOpenAIFunction` (5)

**Calls:**
- `interopZodTransformInputSchemaImpl` (4)
- `interopZodTransformInputSchemaImpl` (1)

### `mergeDefs`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:98` | Self: 0.0% (0us) | Total: 1.5% (6.48s) | Samples: 0

**Called by:**
- `check` (1)

**Calls:**
- `getOwnPropertyDescriptors` (1)

### `async instantiateArrayBuffer`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (27.1ms) | Samples: 0

**Called by:**
- `async instantiateAsync` (1)
- `async instantiateArrayBuffer` (1)

**Calls:**
- `instantiate` (23)
- `async getWasmBinary` (1)
- `async instantiateArrayBuffer` (1)

### `node:util`
`node:util:2` | Self: 0.0% (0us) | Total: 0.0% (60.4ms) | Samples: 0

**Calls:**
- `anonymous` (9)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/internal/re.js:84` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `createToken` (1)

### `extractDefs`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:194` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `toJSONSchema` (1)

**Calls:**
- `get` (1)

### `convertToDottedOrderFormat`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:37` | Self: 0.0% (0us) | Total: 1.0% (4.40s) | Samples: 0

**Called by:**
- `RunTree` (1)

**Calls:**
- `stripNonAlphanumeric` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:4` | Self: 0.0% (0us) | Total: 0.3% (1.53s) | Samples: 0

**Calls:**
- `bound require` (3)

### `mupdf-wasm.wasm.wasm-function[emscripten_builtin_malloc]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (87.4ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_malloc_default]` (9)
- `mupdf-wasm.wasm.wasm-function[emscripten_builtin_realloc]` (3)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[sbrk]` (10)
- `wasm-stub` (2)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:113` | Self: 0.0% (0us) | Total: 0.0% (13.7ms) | Samples: 0

**Calls:**
- `bound describe` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_empty_store]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (907us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_drop_document_imp]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_filter_store]` (1)

### `mupdf-wasm.wasm.wasm-function[fz_flatten_stroke_path]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.5ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_stroke_path_aux]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[do_flatten_stroke]` (2)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:324` | Self: 0.0% (0us) | Total: 0.4% (1.89s) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `cloneObject` (1)

### `mupdf-wasm.wasm.wasm-function[fz_add_line]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_add_line_join]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_insert_gel]` (1)

### `.wasm-function[158]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `.wasm-function[12382]` (1)

**Calls:**
- `.wasm-function[12305]` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/node_modules/openai/internal/qs/utils.mjs:14` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `(anonymous)` (1)

### `.wasm-function[11526]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (99.7ms) | Samples: 0

**Called by:**
- `.wasm-function[4377]` (93)

**Calls:**
- `.wasm-function[635]` (93)

### `DynamicStructuredTool`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:236` | Self: 0.0% (0us) | Total: 0.0% (10.5ms) | Samples: 0

**Called by:**
- `tool` (2)

**Calls:**
- `StructuredTool` (2)

### `async convertPdfToImages`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:100` | Self: 0.0% (0us) | Total: 0.0% (907us) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `destroy` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:976` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `get value` (1)

### `createStandardStreams`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.6ms) | Samples: 0

**Called by:**
- `init` (2)

**Calls:**
- `symlink` (1)
- `open` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:1234` | Self: 0.0% (0us) | Total: 0.0% (982us) | Samples: 0

**Called by:**
- `run` (1)

**Calls:**
- `async (anonymous)` (1)

### `mupdf-wasm.wasm.wasm-function[emscripten_builtin_realloc]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (4.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_realloc_default]` (3)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[emscripten_builtin_malloc]` (3)

### `async cropAndZoom`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts:73` | Self: 0.0% (0us) | Total: 0.0% (13.3ms) | Samples: 0

**Calls:**
- `_pipeline` (5)
- `png` (1)

### `async getWasmBinary`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (864us) | Samples: 0

**Called by:**
- `async instantiateArrayBuffer` (1)

**Calls:**
- `getBinarySync` (1)

### `async interopSafeParseAsync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:65` | Self: 0.0% (0us) | Total: 0.0% (3.2ms) | Samples: 0

**Called by:**
- `async _validateResult` (3)

**Calls:**
- `async interopSafeParseAsync` (3)

### `readFileSync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/filesystem.js:21` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `familyFromInterpreterSync` (1)

**Calls:**
- `readSync` (1)

### `_`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.0% (11.1ms) | Samples: 0

**Called by:**
- `async (anonymous)` (5)

**Calls:**
- `R` (4)
- `e` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js:927` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async invoke` (1)

**Calls:**
- `ensureConfig` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:32` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Calls:**
- `bound require` (2)

### `RunTree`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:345` | Self: 0.0% (0us) | Total: 2.0% (8.87s) | Samples: 0

**Called by:**
- `runWithConfig` (3)

**Calls:**
- `getMicrosecondPrecisionDatestring` (2)
- `getMicrosecondPrecisionDatestring` (1)

### `mupdf-wasm.wasm.wasm-function[read_xref_section]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (937us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_read_xref_sections]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_read_xref]` (1)

### `interopZodTransformInputSchemaImpl`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:418` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `interopZodTransformInputSchemaImpl` (1)

**Calls:**
- `clone` (1)

### `run`
`node:async_hooks:99` | Self: 0.0% (0us) | Total: 0.0% (13.4ms) | Samples: 0

**Called by:**
- `async invoke` (10)
- `(anonymous)` (2)
- `(anonymous)` (1)

**Calls:**
- `async (anonymous)` (10)
- `async (anonymous)` (2)
- `async (anonymous)` (1)

### `ChatOpenRouter`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js:154` | Self: 0.0% (0us) | Total: 0.6% (2.74s) | Samples: 0

**Called by:**
- `async cropper` (3)

**Calls:**
- `BaseChatModel` (3)

### `mupdf-wasm.wasm.wasm-function[open_face]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (983us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[FT_New_Memory_Face]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[tt_face_init]` (1)

### `async initialize`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:273` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async initialize` (1)

**Calls:**
- `emptyCheckpoint` (1)

### `map`
`[native code]` | Self: 0.0% (0us) | Total: 8.0% (34.42s) | Samples: 0

**Called by:**
- `async _generateUncached` (36)
- `invocationParams` (28)
- `async _generateUncached` (5)
- `(anonymous)` (2)
- `__emval_create_invoker` (1)

**Calls:**
- `async (anonymous)` (36)
- `convertToOpenAITool` (26)
- `async (anonymous)` (5)
- `convertToOpenAITool` (2)
- `(anonymous)` (1)
- `convertLangChainToolCallToOpenAI` (1)
- `convertLangChainToolCallToOpenAI` (1)

### `async cropBbsRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:811` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async cropBbsRowsNode` (1)

**Calls:**
- `async cropBbsRows` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js:133` | Self: 0.0% (0us) | Total: 0.0% (3.2ms) | Samples: 0

**Called by:**
- `Promise` (3)

**Calls:**
- `async (anonymous)` (2)
- `runWithConfig` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:170` | Self: 0.0% (0us) | Total: 0.0% (9.9ms) | Samples: 0

**Called by:**
- `Promise` (1)

**Calls:**
- `enqueue` (1)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:182` | Self: 0.0% (0us) | Total: 2.2% (9.61s) | Samples: 0

**Called by:**
- `async cropBbsRows` (8970)

**Calls:**
- `(anonymous)` (8970)

### `normalize`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `join2` (1)

**Calls:**
- `split` (1)

### `Mat`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (113.6ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `constructor Mat` (1)

### `open`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `createStandardStreams` (1)

**Calls:**
- `lookupPath` (1)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:252` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (2)

**Calls:**
- `MatVector.get` (2)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:596` | Self: 0.0% (0us) | Total: 0.3% (1.33s) | Samples: 0

**Called by:**
- `async cropBbsRows` (1)

**Calls:**
- `async cropTableRows` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_open_document_with_stream]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (937us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[open_document]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_init_document]` (1)

### `boundingRect`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Called by:**
- `detectTables` (2)

**Calls:**
- `bound fromWireType` (1)
- `wasm-stub` (1)

### `async compressImage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts:20` | Self: 0.0% (0us) | Total: 0.9% (3.93s) | Samples: 0

**Calls:**
- `Sharp` (2)

### `get value`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:34` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `normalizeDef` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1102` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Calls:**
- `async _runLoop` (2)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:1820` | Self: 0.0% (0us) | Total: 0.0% (3.5ms) | Samples: 0

**Called by:**
- `(anonymous)` (3)

**Calls:**
- `(anonymous)` (2)
- `(anonymous)` (1)

### `internal:streams/operators`
`internal:streams/operators:2` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `BaseChatModel`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:64` | Self: 0.0% (0us) | Total: 0.6% (2.74s) | Samples: 0

**Called by:**
- `ChatOpenRouter` (3)

**Calls:**
- `BaseLanguageModel` (2)
- `BaseLanguageModel` (1)

### `.wasm-function[674]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (224.6ms) | Samples: 0

**Called by:**
- `(unknown)` (171)
- `wasm-stub` (38)

**Calls:**
- `.wasm-function[11624]` (171)
- `.wasm-function[15702]` (38)

### `runtimePlatformArch`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/libvips.mjs:41` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `runtimeLibc` (1)

### `familyFromInterpreterSync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/detect-libc.js:152` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `familySync` (1)

**Calls:**
- `readFileSync` (1)

### `convertCompletionsMessageToBaseMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/converters/completions.js:166` | Self: 0.0% (0us) | Total: 9.0% (38.75s) | Samples: 0

**Called by:**
- `convertOpenRouterResponseToBaseMessage` (3)

**Calls:**
- `parseToolCall` (1)
- `parseToolCall` (1)
- `parseToolCall` (1)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:630` | Self: 0.0% (0us) | Total: 7.2% (30.74s) | Samples: 0

**Calls:**
- `detectHorizontalLines` (19686)
- `detectHorizontalLines` (7973)
- `detectHorizontalLines` (641)
- `detectHorizontalLines` (48)
- `detectHorizontalLines` (27)
- `detectHorizontalLines` (4)
- `detectHorizontalLines` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:32` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `_array` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/index.cjs:1` | Self: 0.0% (0us) | Total: 0.0% (11.5ms) | Samples: 0

**Calls:**
- `bound require` (10)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:28` | Self: 0.0% (0us) | Total: 0.0% (11.8ms) | Samples: 0

**Calls:**
- `wasm-stub` (11)

### `async cropTableRows`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:693` | Self: 0.0% (0us) | Total: 0.1% (451.1ms) | Samples: 0

**Calls:**
- `_pipeline` (6)
- `toFile` (1)

### `async _runLoop`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1208` | Self: 0.0% (0us) | Total: 0.0% (3.8ms) | Samples: 0

**Calls:**
- `async tick` (4)

### `v7`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/uuid/src/v7.js:8` | Self: 0.0% (0us) | Total: 2.0% (8.87s) | Samples: 0

**Called by:**
- `RunTree` (2)

**Calls:**
- `v7Bytes` (2)

### `ZodNumberFormat`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` | Self: 0.0% (0us) | Total: 1.9% (8.29s) | Samples: 0

**Called by:**
- `_int` (4)

**Calls:**
- `init` (4)

### `mupdf-wasm.wasm.wasm-function[show_string]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_string]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_char]` (2)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/detect-libc.js:8` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `.wasm-function[11624]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (183.4ms) | Samples: 0

**Called by:**
- `.wasm-function[674]` (171)

**Calls:**
- `.wasm-function[390]` (171)

### `.wasm-function[491]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (202.5ms) | Samples: 0

**Called by:**
- `(unknown)` (187)

**Calls:**
- `.wasm-function[10948]` (187)

### `.wasm-function[5841]`
`[native code]` | Self: 0.0% (0us) | Total: 0.4% (1.79s) | Samples: 0

**Called by:**
- `.wasm-function[16092]` (1667)

**Calls:**
- `.wasm-function[934]` (1667)

### `.wasm-function[4554]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `wasm-stub` (2)

**Calls:**
- `wasm-stub` (2)

### `v1ToV6`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/v1ToV6.js:5` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `v6` (1)

**Calls:**
- `_v1ToV6` (1)

### `async _first`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js:718` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `_putCheckpoint` (1)

### `mupdf-wasm.wasm.wasm-function[fz_draw_fill_image]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (12.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_fill_image]` (10)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_get_pixmap_from_image]` (5)
- `mupdf-wasm.wasm.wasm-function[fz_transform_pixmap]` (5)

### `async detectAndCropBbs`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:121` | Self: 0.0% (0us) | Total: 0.0% (4.4ms) | Samples: 0

**Called by:**
- `async detectAndCropBbs` (4)

**Calls:**
- `async invoke` (4)

### `_tryToStartAnother`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:105` | Self: 0.0% (0us) | Total: 0.0% (297.8ms) | Samples: 0

**Called by:**
- `(anonymous)` (27)

**Calls:**
- `async run` (27)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:707` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Called by:**
- `init` (2)

**Calls:**
- `init` (2)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/imageSchema.ts:10` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `bound min` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_run_Do_image]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (12.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_process_Do]` (10)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_image]` (10)

### `RunTree`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js:340` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `runWithConfig` (1)

**Calls:**
- `assign` (1)

### `.wasm-function[16092]`
`[native code]` | Self: 0.0% (0us) | Total: 0.4% (1.79s) | Samples: 0

**Called by:**
- `(unknown)` (1667)

**Calls:**
- `.wasm-function[5841]` (1667)

### `async _streamIterator`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js:1131` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Calls:**
- `async next` (1)

### `attachNode`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:643` | Self: 0.0% (0us) | Total: 0.0% (916us) | Samples: 0

**Called by:**
- `_compileResolved` (1)

**Calls:**
- `ChannelWrite` (1)

### `__toCommonJS`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:17` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `__copyProps` (1)

### `ZodString`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` | Self: 0.0% (0us) | Total: 0.0% (14.4ms) | Samples: 0

**Called by:**
- `_string` (3)

**Calls:**
- `init` (3)

### `node:fs/promises`
`node:fs/promises:2` | Self: 0.0% (0us) | Total: 0.0% (3.3ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `anonymous` (3)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:226` | Self: 0.0% (0us) | Total: 0.0% (224.0ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (207)

**Calls:**
- `(anonymous)` (207)

### `_prepareNextTasks`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:247` | Self: 0.0% (0us) | Total: 0.0% (3.1ms) | Samples: 0

**Called by:**
- `async tick` (3)

**Calls:**
- `_prepareSingleTask` (1)
- `_prepareSingleTask` (1)
- `_prepareSingleTask` (1)

### `v35`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/v35.js:20` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `_prepareSingleTask` (1)

**Calls:**
- `sha1` (1)

### `Client`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js:882` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `getSharedClient` (1)

**Calls:**
- `getLangSmithEnvVarsMetadata` (1)

### `async generate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:427` | Self: 0.0% (0us) | Total: 2.7% (11.83s) | Samples: 0

**Called by:**
- `async generatePrompt` (39)

**Calls:**
- `async _generateUncached` (39)

### `mupdf-wasm.wasm.wasm-function[lcms2mt_cmsCreateProfilePlaceholder]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (9.6ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_new_icc_colorspace]` (9)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[gmtime]` (9)

### `flatIntoArrayWithCallback`
`[native code]` | Self: 0.0% (0us) | Total: 1.1% (4.76s) | Samples: 0

**Called by:**
- `async _generate` (3)
- `mapOutputUpdates` (1)

**Calls:**
- `(anonymous)` (2)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `bound optional`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (889us) | Samples: 0

**Called by:**
- `async cropper` (1)

**Calls:**
- `optional` (1)

### `internal:shared`
`internal:shared:2` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `_applyWrites`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js:114` | Self: 0.0% (0us) | Total: 0.0% (896us) | Samples: 0

**Called by:**
- `async tick` (1)

**Calls:**
- `consume` (1)

### `asPNG`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:1045` | Self: 0.0% (0us) | Total: 0.2% (1.25s) | Samples: 0

**Called by:**
- `async convertPdfToImages` (1137)

**Calls:**
- `wasm-stub` (1137)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:37` | Self: 0.0% (0us) | Total: 0.0% (10.2ms) | Samples: 0

**Called by:**
- `run` (10)

**Calls:**
- `async func` (3)
- `async func` (3)
- `async classifyImage` (2)
- `async cropBbsRowsNode` (1)
- `async _getUpdates` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:740` | Self: 0.0% (0us) | Total: 0.0% (872us) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `defineLazy` (1)

### `(module)`
`bun:main:14` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Calls:**
- `isServerConfig` (1)

### `mupdf-wasm.wasm.wasm-function[crc32]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[putchunk]` (3)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[crc32_z]` (3)

### `mupdf-wasm.wasm.wasm-function[fz_new_pixmap_with_bbox]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (941us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_new_pixmap_from_page_with_separations_and_usage]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_new_pixmap]` (1)

### `async _generateUncached`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:212` | Self: 0.0% (0us) | Total: 2.6% (11.43s) | Samples: 0

**Called by:**
- `async _generateUncached` (30)

**Calls:**
- `getLsParamsWithDefaults` (29)
- `getLsParamsWithDefaults` (1)

### `mupdf-wasm.wasm.wasm-function[pdf_load_page_tree_internal]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_lookup_page_obj]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_page_tree_imp]` (1)

### `mapOutputUpdates`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/io.js:111` | Self: 0.0% (0us) | Total: 0.0% (989us) | Samples: 0

**Called by:**
- `generatorResume` (1)

**Calls:**
- `flatIntoArrayWithCallback` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:5` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Calls:**
- `literal` (1)
- `object` (1)

### `async interopParseAsync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:91` | Self: 0.0% (0us) | Total: 7.6% (32.59s) | Samples: 0

**Called by:**
- `async interopParseAsync` (9)

**Calls:**
- `async (anonymous)` (9)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:14` | Self: 0.0% (0us) | Total: 0.0% (936us) | Samples: 0

**Calls:**
- `bound require` (1)

### `async _runWithRetry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/retry.js:48` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Called by:**
- `async _runWithRetry` (2)

**Calls:**
- `async invoke` (2)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:396` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (1)

**Calls:**
- `delete` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:108` | Self: 0.0% (0us) | Total: 1.3% (5.58s) | Samples: 0

**Calls:**
- `bound min` (3)

### `mupdf-wasm.wasm.wasm-function[fz_walk_path]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.5ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[do_flatten_stroke]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[stroke_lineto]` (1)
- `mupdf-wasm.wasm.wasm-function[stroke_curveto]` (1)

### `mupdf-wasm.wasm.wasm-function[fz_available_1592]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (11.9ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_read]` (8)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[next_dctd]` (5)
- `mupdf-wasm.wasm.wasm-function[next_flated]` (3)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/shell.js:7` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Calls:**
- `_number` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/sax-js/sax.js:1197` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `initializeSax` (1)

### `mupdf-wasm.wasm.wasm-function[fz_malloc_default]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (83.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[do_scavenging_malloc]` (9)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[emscripten_builtin_malloc]` (9)

### `.wasm-function[581]`
`[native code]` | Self: 0.0% (0us) | Total: 0.3% (1.42s) | Samples: 0

**Called by:**
- `.wasm-function[934]` (1321)

**Calls:**
- `.wasm-function[1037]` (1321)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:127` | Self: 0.0% (0us) | Total: 0.4% (1.79s) | Samples: 0

**Called by:**
- `async cropBbsRows` (1668)

**Calls:**
- `adaptiveThreshold` (1668)

### `registerType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (5.2ms) | Samples: 0

**Called by:**
- `onComplete` (3)
- `__embind_register_enum` (1)
- `__embind_register_optional` (1)

**Calls:**
- `sharedRegisterType` (5)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:11` | Self: 0.0% (0us) | Total: 0.0% (422.6ms) | Samples: 0

**Called by:**
- `(anonymous)` (272)

**Calls:**
- `(anonymous)` (272)

### `internal:stream`
`internal:stream:2` | Self: 0.0% (0us) | Total: 0.0% (9.8ms) | Samples: 0

**Called by:**
- `anonymous` (9)

**Calls:**
- `anonymous` (9)

### `_pipeline`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs:1729` | Self: 0.0% (0us) | Total: 1.8% (7.98s) | Samples: 0

**Called by:**
- `async cropAndZoom` (11)
- `async cropTableRows` (6)
- `async cropTableRows` (6)
- `async cropAndZoom` (5)
- `async compressImage` (4)

**Calls:**
- `Promise` (32)

### `.wasm-function[4417]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (49.6ms) | Samples: 0

**Called by:**
- `.wasm-function[16862]` (42)

**Calls:**
- `wasm-stub` (42)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/detect-libc.js:6` | Self: 0.0% (0us) | Total: 0.0% (38.4ms) | Samples: 0

**Calls:**
- `bound require` (3)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v3/types.js:1723` | Self: 0.0% (0us) | Total: 0.0% (992us) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `ZodNever` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:29` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `bound min`
`[native code]` | Self: 0.0% (0us) | Total: 1.3% (5.58s) | Samples: 0

**Called by:**
- `async cropper` (3)
- `async cropper` (1)
- `(module)` (1)

**Calls:**
- `bound check` (4)
- `min` (1)

### `gatherIteratorSync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:53` | Self: 0.0% (0us) | Total: 0.0% (989us) | Samples: 0

**Called by:**
- `_outputWrites` (1)

**Calls:**
- `generatorResume` (1)

### `getDefaultClientConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js:912` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `Client` (1)

**Calls:**
- `loadProfileClientConfig` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/sharp.mjs:18` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `runtimePlatformArch` (1)

### `finalize`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js:355` | Self: 0.0% (0us) | Total: 0.0% (2.7ms) | Samples: 0

**Called by:**
- `toJsonSchema` (2)

**Calls:**
- `stringify` (1)
- `parse` (1)

### `ensureConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js:90` | Self: 0.0% (0us) | Total: 0.9% (4.21s) | Samples: 0

**Called by:**
- `async invoke` (1)
- `async invoke` (1)

**Calls:**
- `reduce` (2)

### `mupdf-wasm.wasm.wasm-function[fz_new_colorspace_context]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (11.8ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_new_context_imp]` (11)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_new_icc_colorspace]` (11)

### `ZodEnum`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `_enum` (1)

**Calls:**
- `init` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/read.js:28` | Self: 0.0% (0us) | Total: 0.0% (935us) | Samples: 0

**Calls:**
- `RunnablePassthrough` (1)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:35` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `async invoke` (1)

**Calls:**
- `mergeConfigs` (1)

### `.wasm-function[11373]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `.wasm-function[11387]` (1)

**Calls:**
- `.wasm-function[50]` (1)

### `v6`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/v6.js:12` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `emptyCheckpoint` (1)

**Calls:**
- `v1ToV6` (1)

### `.wasm-function[505]`
`[native code]` | Self: 0.0% (0us) | Total: 16.7% (71.52s) | Samples: 0

**Called by:**
- `(unknown)` (66061)

**Calls:**
- `.wasm-function[10385]` (66061)

### `bitwise_or`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (41.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (38)

**Calls:**
- `wasm-stub` (38)

### `ZodArray`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Called by:**
- `_array` (2)

**Calls:**
- `init` (2)

### `mupdf-wasm.wasm.wasm-function[fz_md5_buffer]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_new_icc_colorspace]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_md5_update]` (2)

### `async convertPdfToImages`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts:56` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `loadPage` (1)

### `detectTables`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts:195` | Self: 0.0% (0us) | Total: 0.0% (41.2ms) | Samples: 0

**Called by:**
- `async cropBbsRows` (38)

**Calls:**
- `(anonymous)` (38)

### `__embind_register_optional`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `wasm-stub` (1)

**Calls:**
- `registerType` (1)

### `async gatherIterator`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js:48` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `generatorResume` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:857` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `handlePropertyResult` (1)

### `mupdf-wasm.wasm.wasm-function[load_cid_font]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (10.5ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_type0_font]` (8)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_load_font_descriptor]` (5)
- `mupdf-wasm.wasm.wasm-function[pdf_load_to_unicode]` (3)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/utility.mjs:27` | Self: 0.0% (0us) | Total: 0.0% (4.4ms) | Samples: 0

**Calls:**
- `(anonymous)` (4)

### `attachCropImages`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts:109` | Self: 0.0% (0us) | Total: 0.0% (11.4ms) | Samples: 0

**Called by:**
- `async extract` (6)

**Calls:**
- `warn` (6)

### `mupdf-wasm.wasm.wasm-function[pdf_load_xref]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (937us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_init_document]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_read_xref_sections]` (1)

### `init`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (2.6ms) | Samples: 0

**Called by:**
- `initRuntime` (2)

**Calls:**
- `createStandardStreams` (2)

### `_compileResolved`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:484` | Self: 0.0% (0us) | Total: 0.0% (916us) | Samples: 0

**Called by:**
- `compile` (1)

**Calls:**
- `attachNode` (1)

### `mupdf-wasm.wasm.wasm-function[fz_fill_image]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (12.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_image_imp]` (10)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_draw_fill_image]` (10)

### `async func`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js:31` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `async (anonymous)` (3)

**Calls:**
- `async _write` (3)

### `async invoke`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js:84` | Self: 0.0% (0us) | Total: 2.7% (11.84s) | Samples: 0

**Called by:**
- `async invoke` (40)

**Calls:**
- `async generatePrompt` (40)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:37` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `toWireType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (64.2ms) | Samples: 0

**Called by:**
- `bound toWireType` (60)

**Calls:**
- `toHandle` (59)
- `wasm-stub` (1)

### `extract`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs:495` | Self: 0.0% (0us) | Total: 0.0% (64.2ms) | Samples: 0

**Called by:**
- `async cropTableRows` (1)

**Calls:**
- `isRotationExpected` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:4` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `optional`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1110` | Self: 0.0% (0us) | Total: 0.0% (889us) | Samples: 0

**Called by:**
- `bound optional` (1)

**Calls:**
- `ZodOptional` (1)

### `async cropper`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts:131` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Calls:**
- `async withRetry` (1)

### `mupdf-wasm.wasm.wasm-function[glyph_from_ft_bitmap]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_render_ft_glyph]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_new_glyph_from_8bpp_data]` (2)

### `.wasm-function[52]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `.wasm-function[4618]` (1)

**Calls:**
- `.wasm-function[11387]` (1)

### `tool`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js:286` | Self: 0.0% (0us) | Total: 0.0% (10.5ms) | Samples: 0

**Called by:**
- `async cropper` (1)
- `async cropper` (1)

**Calls:**
- `DynamicStructuredTool` (2)

### `.wasm-function[4618]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `wasm-stub` (1)

**Calls:**
- `.wasm-function[52]` (1)

### `async interopParseAsync`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js:90` | Self: 0.0% (0us) | Total: 7.6% (32.59s) | Samples: 0

**Called by:**
- `async call` (9)

**Calls:**
- `async interopParseAsync` (9)

### `mupdf-wasm.wasm.wasm-function[pdf_tos_make_trm]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[pdf_show_char]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_font_cid_to_gid]` (1)
- `mupdf-wasm.wasm.wasm-function[fz_bound_glyph]` (1)

### `mupdf-wasm.wasm.wasm-function[fz_write_pixmap_as_png]`
`[native code]` | Self: 0.0% (0us) | Total: 0.2% (1.25s) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[png_from_pixmap]` (1137)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_write_band]` (1137)

### `mupdf-wasm.wasm.wasm-function[pdf_show_char]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[show_string]` (2)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[pdf_tos_make_trm]` (2)

### `AIMessage`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/ai.js:84` | Self: 0.0% (0us) | Total: 2.4% (10.54s) | Samples: 0

**Called by:**
- `convertCompletionsMessageToBaseMessage` (2)

**Calls:**
- `BaseMessage` (1)
- `BaseMessage` (1)

### `internal:streams/readable`
`internal:streams/readable:2` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `mupdf-wasm.wasm.wasm-function[fz_malloc]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (941us) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_new_pixmap_with_data]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[do_scavenging_malloc]` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/sharp.mjs:61` | Self: 0.0% (0us) | Total: 0.0% (5.0ms) | Samples: 0

**Calls:**
- `bound require` (5)

### `createToken`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/internal/re.js:50` | Self: 0.0% (0us) | Total: 0.0% (858us) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `RegExp` (1)

### `internal:stream`
`internal:stream:47` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

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

### `ensureConfig`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js:76` | Self: 0.0% (0us) | Total: 0.8% (3.60s) | Samples: 0

**Called by:**
- `async invoke` (1)

**Calls:**
- `getRunnableConfig` (1)

### `morphologyEx`
`[native code]` | Self: 0.0% (0us) | Total: 16.7% (71.56s) | Samples: 0

**Called by:**
- `(anonymous)` (66103)

**Calls:**
- `(unknown)` (66103)

## Files

| Self% | Self | File |
|------:|-----:|------|
| 56.9% | 242.65s | `[native code]` |
| 7.4% | 31.79s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js` |
| 4.3% | 18.37s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/chat_models.js` |
| 3.9% | 16.77s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/run_trees.js` |
| 3.5% | 14.96s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/index.js` |
| 2.9% | 12.64s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/constructor.mjs` |
| 2.1% | 9.20s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 1.9% | 8.20s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js` |
| 1.8% | 7.84s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js` |
| 1.5% | 6.60s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/parse.js` |
| 1.5% | 6.58s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/serializable.js` |
| 1.3% | 5.87s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/input.mjs` |
| 1.2% | 5.41s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/api_helpers.ts` |
| 1.0% | 4.58s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/config.js` |
| 1.0% | 4.58s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/json-schema-processors.js` |
| 0.9% | 3.97s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/imageExtractor.ts` |
| 0.9% | 3.96s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/base.js` |
| 0.8% | 3.60s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js` |
| 0.8% | 3.45s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/tools/zoomTool.ts` |
| 0.6% | 2.73s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js` |
| 0.5% | 2.24s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/checks.js` |
| 0.5% | 2.13s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js` |
| 0.4% | 1.99s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js` |
| 0.4% | 1.84s | `node:events` |
| 0.3% | 1.43s | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/bbs.ts` |
| 0.2% | 1.04s | `internal:streams/writable` |
| 0.1% | 638.7ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js` |
| 0.0% | 163.5ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openrouter/dist/chat_models/index.js` |
| 0.0% | 112.7ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/p-retry/index.js` |
| 0.0% | 80.4ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/stringify.js` |
| 0.0% | 79.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/types/zod.js` |
| 0.0% | 63.8ms | `internal:streams/readable` |
| 0.0% | 62.6ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/language_models/base.js` |
| 0.0% | 61.9ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/resize.mjs` |
| 0.0% | 59.3ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/callbacks/manager.js` |
| 0.0% | 59.0ms | `internal:streams/legacy` |
| 0.0% | 48.9ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/singletons/async_local_storage/context.js` |
| 0.0% | 39.0ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/utils/config.js` |
| 0.0% | 34.4ms | `internal:streams/duplex` |
| 0.0% | 28.0ms | `node:worker_threads` |
| 0.0% | 22.2ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/to-json-schema.js` |
| 0.0% | 15.9ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` |
| 0.0% | 9.9ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/priority-queue.js` |
| 0.0% | 9.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/regexes.js` |
| 0.0% | 7.6ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/loop.js` |
| 0.0% | 5.7ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs` |
| 0.0% | 5.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` |
| 0.0% | 3.7ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/registries.js` |
| 0.0% | 3.6ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/env.js` |
| 0.0% | 3.3ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/stream.js` |
| 0.0% | 3.2ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/base.js` |
| 0.0% | 3.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/extractor.ts` |
| 0.0% | 3.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/output.mjs` |
| 0.0% | 2.9ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/function_calling.js` |
| 0.0% | 2.5ms | `node:fs` |
| 0.0% | 2.3ms | `internal:shared` |
| 0.0% | 2.2ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/import_map.js` |
| 0.0% | 2.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/io.js` |
| 0.0% | 2.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/_virtual/_rolldown/runtime.js` |
| 0.0% | 2.0ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/locales/en.js` |
| 0.0% | 1.9ms | `node:crypto` |
| 0.0% | 1.9ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/runner.js` |
| 0.0% | 1.7ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/channels/base.js` |
| 0.0% | 1.6ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/is.mjs` |
| 0.0% | 1.5ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/prompt_values.js` |
| 0.0% | 1.3ms | `internal:util/inspect` |
| 0.0% | 1.3ms | `internal:primordials` |
| 0.0% | 1.2ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/imageSchema.ts` |
| 0.0% | 1.2ms | `bun:main` |
| 0.0% | 1.2ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/tiktoken.js` |
| 0.0% | 1.2ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/index.js` |
| 0.0% | 1.2ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/state/values/delta.js` |
| 0.0% | 1.2ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/internal/re.js` |
| 0.0% | 1.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/mergeExtraction.ts` |
| 0.0% | 1.1ms | `node:timers/promises` |
| 0.0% | 1.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/v1ToV6.js` |
| 0.0% | 1.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/client.js` |
| 0.0% | 1.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/node_modules/openai/internal/qs/utils.mjs` |
| 0.0% | 1.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/sha1.js` |
| 0.0% | 1.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/tools/types.js` |
| 0.0% | 1.0ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js` |
| 0.0% | 1.0ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/utils.js` |
| 0.0% | 1.0ms | `node:child_process` |
| 0.0% | 1.0ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/_uuid.js` |
| 0.0% | 1.0ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/sax-js/sax.js` |
| 0.0% | 1.0ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js` |
| 0.0% | 1.0ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/utils/normalizeCoords.ts` |
| 0.0% | 1.0ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/algo.js` |
| 0.0% | 992us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v3/types.js` |
| 0.0% | 987us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/hash.js` |
| 0.0% | 968us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/write.js` |
| 0.0% | 956us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/composite.mjs` |
| 0.0% | 944us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/json_schema.js` |
| 0.0% | 942us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js` |
| 0.0% | 916us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/utils.js` |
| 0.0% | 914us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/utils/misc.js` |
| 0.0% | 901us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/messages/human.js` |
| 0.0% | 897us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/pdfToImage.ts` |
