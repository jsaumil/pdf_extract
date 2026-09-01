# CPU Profile

| Duration | Samples | Interval | Functions |
|----------|---------|----------|----------|
| 1.61s | 351 | 1.0ms | 244 |

**Top 10:** `anonymous` 65.6%, `findWasmBinary` 9.7%, `async (anonymous)` 6.2%, `slice` 3.6%, `node:worker_threads` 1.7%, `instantiate` 1.6%, `binaryDecode` 1.5%, `Events` 0.8%, `Uint8Array` 0.6%, `async (anonymous)` 0.4%

## Hot Functions (Self Time)

| Self% | Self | Total% | Total | Function | Location |
|------:|-----:|-------:|------:|----------|----------|
| 65.6% | 1.06s | 100.0% | 2.08s | `anonymous` | `[native code]` |
| 9.7% | 158.2ms | 9.7% | 158.2ms | `findWasmBinary` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 6.2% | 101.9ms | 6.2% | 101.9ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 3.6% | 58.5ms | 3.6% | 58.5ms | `slice` | `[native code]` |
| 1.7% | 28.3ms | 1.7% | 28.3ms | `node:worker_threads` | `node:worker_threads:33` |
| 1.6% | 27.1ms | 1.6% | 27.1ms | `instantiate` | `[native code]` |
| 1.5% | 25.7ms | 1.5% | 25.7ms | `binaryDecode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.8% | 14.1ms | 0.8% | 14.1ms | `Events` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/eventemitter3/index.js` |
| 0.6% | 10.0ms | 0.6% | 10.0ms | `Uint8Array` | `[native code]` |
| 0.4% | 7.6ms | 3.0% | 48.9ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.4% | 7.3ms | 0.4% | 7.3ms | `getFullYear` | `[native code]` |
| 0.4% | 6.6ms | 0.4% | 6.6ms | `init` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.4% | 6.5ms | 0.4% | 6.5ms | `Int8Array` | `[native code]` |
| 0.3% | 5.6ms | 0.3% | 5.6ms | `Function` | `[native code]` |
| 0.3% | 5.2ms | 2.6% | 43.1ms | `whenDependentTypesAreResolved` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.2% | 3.7ms | 0.3% | 6.1ms | `(anonymous)` | `[native code]` |
| 0.1% | 3.0ms | 0.1% | 3.0ms | `exposePublicSymbol` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.1% | 2.9ms | 2.6% | 43.3ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.1% | 2.8ms | 0.3% | 6.0ms | `binaryDecode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.1% | 2.7ms | 0.1% | 2.7ms | `getWasmTableEntry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.1% | 2.5ms | 0.1% | 2.5ms | `bound call` | `[native code]` |
| 0.1% | 2.4ms | 0.1% | 2.4ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.1% | 2.4ms | 0.1% | 2.4ms | `dlopen` | `[native code]` |
| 0.1% | 2.4ms | 27.8% | 450.0ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.1% | 2.4ms | 0.1% | 2.4ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:58` |
| 0.1% | 2.3ms | 0.2% | 3.4ms | `__embind_register_enum_value` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.1% | 2.2ms | 0.2% | 4.5ms | `readFileSync` | `[native code]` |
| 0.1% | 2.0ms | 0.6% | 10.0ms | `createJsInvoker` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `ZodNumber` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:40` |
| 0.0% | 1.2ms | 1.9% | 31.9ms | `.wasm-function[4417]` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/checks.js` |
| 0.0% | 1.2ms | 1.2% | 19.7ms | `craftInvokerFunction` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `getEnvStrings` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.2ms | 100.0% | 1.99s | `bound require` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `init` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:21` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `validate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v3/helpers/util.js:13` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `join` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `node:child_process` | `node:child_process:889` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `__embind_register_class_property` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `startsWith` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `createNamedFunction` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `push` | `[native code]` |
| 0.0% | 1.1ms | 0.2% | 3.8ms | `makeDynCaller` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `bind` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `internal:util/inspect` | `internal:util/inspect:9` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `open` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `.wasm-function[3812]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1212` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `replace` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `AsyncCaller` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/structured_query/base.js:19` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `setPrototypeDirectOrThrow` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `__embind_register_value_object_field` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `.wasm-function[1695]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `.wasm-function[1310]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `initializeSax` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/sax-js/sax.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `whenDependentTypesAreResolved` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `PromptCache` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/prompt_cache/index.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `defineProperty` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/filesystem.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:489` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[body]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:85` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `ColorSpace` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js` |
| 0.0% | 989us | 0.0% | 989us | `AsciiToString` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 978us | 0.0% | 978us | `attachEdge` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` |
| 0.0% | 971us | 0.0% | 971us | `SemVer` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/classes/semver.js:82` |
| 0.0% | 957us | 0.0% | 957us | `match` | `[native code]` |
| 0.0% | 944us | 0.0% | 944us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:118` |
| 0.0% | 942us | 0.0% | 942us | `replacePublicSymbol` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 936us | 0.0% | 936us | `Serializable` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/serializable.js:82` |
| 0.0% | 934us | 0.0% | 934us | `keys` | `[native code]` |
| 0.0% | 930us | 0.0% | 930us | `ZodDefault` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:40` |
| 0.0% | 930us | 0.0% | 930us | `__embind_register_std_wstring` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 928us | 0.0% | 928us | `node:worker_threads` | `node:worker_threads:771` |
| 0.0% | 919us | 0.0% | 919us | `ZodType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v3/types.js` |
| 0.0% | 918us | 0.0% | 918us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/node_modules/openai/resources/files.mjs:42` |
| 0.0% | 853us | 0.0% | 853us | `craftInvokerFunction` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 851us | 0.0% | 851us | `_` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` |
| 0.0% | 837us | 0.0% | 837us | `_addSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` |

## Call Tree (Total Time)

| Total% | Total | Self% | Self | Function | Location |
|-------:|------:|------:|-----:|----------|----------|
| 100.0% | 2.08s | 65.6% | 1.06s | `anonymous` | `[native code]` |
| 100.0% | 1.99s | 0.0% | 1.2ms | `bound require` | `[native code]` |
| 100.0% | 1.96s | 0.0% | 0us | `require` | `[native code]` |
| 59.5% | 963.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/internal/re.js:6` |
| 59.5% | 963.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:4` |
| 27.8% | 450.0ms | 0.1% | 2.4ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 23.4% | 380.1ms | 0.0% | 0us | `async createWasm` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 18.2% | 295.6ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:11` |
| 18.2% | 295.6ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:28` |
| 18.2% | 295.6ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:20` |
| 9.7% | 158.2ms | 9.7% | 158.2ms | `findWasmBinary` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 7.3% | 118.4ms | 0.0% | 0us | `wasm-stub` | `[native code]` |
| 6.2% | 101.9ms | 6.2% | 101.9ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 3.7% | 61.3ms | 0.0% | 0us | `initRuntime` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 3.7% | 61.3ms | 0.0% | 0us | `doRun` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 3.7% | 61.3ms | 0.0% | 0us | `run` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 3.6% | 58.5ms | 3.6% | 58.5ms | `slice` | `[native code]` |
| 3.6% | 58.5ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/stringify.js:8` |
| 3.3% | 53.5ms | 0.0% | 0us | `.wasm-function[16862]` | `[native code]` |
| 3.0% | 48.9ms | 0.4% | 7.6ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 2.6% | 43.3ms | 0.1% | 2.9ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 2.6% | 43.1ms | 0.3% | 5.2ms | `whenDependentTypesAreResolved` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 2.4% | 40.0ms | 0.0% | 0us | `onComplete` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 2.1% | 35.5ms | 0.0% | 0us | `node:util` | `node:util:2` |
| 1.9% | 31.9ms | 0.0% | 1.2ms | `.wasm-function[4417]` | `[native code]` |
| 1.9% | 31.7ms | 0.0% | 0us | `findWasmBinary` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 1.7% | 28.3ms | 1.7% | 28.3ms | `node:worker_threads` | `node:worker_threads:33` |
| 1.7% | 28.0ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/detect-libc.js:6` |
| 1.6% | 27.1ms | 1.6% | 27.1ms | `instantiate` | `[native code]` |
| 1.5% | 25.7ms | 1.5% | 25.7ms | `binaryDecode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 1.2% | 19.7ms | 0.0% | 1.2ms | `craftInvokerFunction` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 1.0% | 17.3ms | 0.0% | 0us | `__embind_register_class_function` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.9% | 15.2ms | 0.0% | 0us | `.wasm-function[2667]` | `[native code]` |
| 0.9% | 15.1ms | 0.0% | 0us | `init` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:22` |
| 0.8% | 14.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:3` |
| 0.8% | 14.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/eventemitter3/index.js:29` |
| 0.8% | 14.1ms | 0.8% | 14.1ms | `Events` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/eventemitter3/index.js` |
| 0.8% | 13.4ms | 0.0% | 0us | `__embind_register_function` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.7% | 11.3ms | 0.0% | 0us | `async F` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.6% | 11.1ms | 0.0% | 0us | `async instantiateArrayBuffer` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.6% | 10.6ms | 0.0% | 0us | `node:stream` | `node:stream:2` |
| 0.6% | 10.0ms | 0.1% | 2.0ms | `createJsInvoker` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.6% | 10.0ms | 0.6% | 10.0ms | `Uint8Array` | `[native code]` |
| 0.5% | 8.5ms | 0.0% | 0us | `internal:stream` | `internal:stream:2` |
| 0.5% | 8.3ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:28` |
| 0.5% | 8.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_new_context_imp]` | `[native code]` |
| 0.5% | 8.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_new_icc_colorspace]` | `[native code]` |
| 0.5% | 8.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_new_colorspace_context]` | `[native code]` |
| 0.5% | 8.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[wasm_init_context]` | `[native code]` |
| 0.4% | 7.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[gmtime]` | `[native code]` |
| 0.4% | 7.3ms | 0.4% | 7.3ms | `getFullYear` | `[native code]` |
| 0.4% | 7.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[lcms2mt_cmsCreateProfilePlaceholder]` | `[native code]` |
| 0.4% | 7.3ms | 0.0% | 0us | `k` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.4% | 7.3ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[do_tzset]` | `[native code]` |
| 0.4% | 6.6ms | 0.4% | 6.6ms | `init` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.4% | 6.5ms | 0.0% | 0us | `_` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.4% | 6.5ms | 0.0% | 0us | `R` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.4% | 6.5ms | 0.4% | 6.5ms | `Int8Array` | `[native code]` |
| 0.3% | 6.1ms | 0.2% | 3.7ms | `(anonymous)` | `[native code]` |
| 0.3% | 6.0ms | 0.1% | 2.8ms | `binaryDecode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.3% | 5.6ms | 0.3% | 5.6ms | `Function` | `[native code]` |
| 0.3% | 5.4ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/index.cjs:1` |
| 0.3% | 4.9ms | 0.0% | 0us | `internal:streams/compose` | `internal:streams/compose:2` |
| 0.2% | 4.7ms | 0.0% | 0us | `node:fs` | `node:fs:2` |
| 0.2% | 4.5ms | 0.1% | 2.2ms | `readFileSync` | `[native code]` |
| 0.2% | 3.8ms | 0.0% | 1.1ms | `makeDynCaller` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.2% | 3.8ms | 0.0% | 0us | `embind__requireFunction` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.2% | 3.5ms | 0.0% | 0us | `internal:streams/pipeline` | `internal:streams/pipeline:2` |
| 0.2% | 3.5ms | 0.0% | 0us | `literal` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1043` |
| 0.2% | 3.5ms | 0.0% | 0us | `ZodLiteral` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` |
| 0.2% | 3.4ms | 0.1% | 2.3ms | `__embind_register_enum_value` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.2% | 3.4ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/sharp.mjs:61` |
| 0.2% | 3.3ms | 0.0% | 0us | `forEach` | `[native code]` |
| 0.2% | 3.3ms | 0.0% | 0us | `sharedRegisterType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.2% | 3.3ms | 0.0% | 0us | `registerType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.1% | 3.0ms | 0.1% | 3.0ms | `exposePublicSymbol` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.1% | 2.9ms | 0.0% | 0us | `ZodNumber` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` |
| 0.1% | 2.7ms | 0.1% | 2.7ms | `getWasmTableEntry` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.1% | 2.7ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/utility.mjs:27` |
| 0.1% | 2.5ms | 0.1% | 2.5ms | `bound call` | `[native code]` |
| 0.1% | 2.5ms | 0.0% | 0us | `internal:shared` | `internal:shared:2` |
| 0.1% | 2.5ms | 0.0% | 0us | `internal:validators` | `internal:validators:2` |
| 0.1% | 2.5ms | 0.0% | 0us | `node:path` | `node:path:2` |
| 0.1% | 2.5ms | 0.0% | 0us | `internal:primordials` | `internal:primordials:51` |
| 0.1% | 2.5ms | 0.0% | 0us | `node:fs/promises` | `node:fs/promises:2` |
| 0.1% | 2.4ms | 0.0% | 0us | `lookup` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.1% | 2.4ms | 0.1% | 2.4ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.1% | 2.4ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/sharp-linux-x64/index.cjs:2` |
| 0.1% | 2.4ms | 0.1% | 2.4ms | `dlopen` | `[native code]` |
| 0.1% | 2.4ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:5` |
| 0.1% | 2.4ms | 0.1% | 2.4ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:58` |
| 0.1% | 2.4ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1030` |
| 0.1% | 2.3ms | 0.0% | 0us | `internal:streams/duplex` | `internal:streams/duplex:2` |
| 0.1% | 2.2ms | 0.0% | 0us | `async r` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.1% | 2.2ms | 0.0% | 0us | `async I` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.1% | 2.1ms | 0.0% | 0us | `compile` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:439` |
| 0.1% | 2.1ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:113` |
| 0.1% | 2.1ms | 0.0% | 0us | `.wasm-function[744]` | `[native code]` |
| 0.1% | 2.1ms | 0.0% | 0us | `__embind_register_constant` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.1% | 2.1ms | 0.0% | 0us | `__embind_register_smart_ptr` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.1% | 1.9ms | 0.0% | 0us | `__embind_register_class` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.1% | 1.9ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:507` |
| 0.1% | 1.9ms | 0.0% | 0us | `_number` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:307` |
| 0.1% | 1.9ms | 0.0% | 0us | `.wasm-function[3389]` | `[native code]` |
| 0.0% | 1.3ms | 0.0% | 0us | `_coercedNumber` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:315` |
| 0.0% | 1.3ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/extractSchema.ts:53` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `ZodNumber` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:40` |
| 0.0% | 1.2ms | 0.0% | 0us | `node:util` | `node:util:8` |
| 0.0% | 1.2ms | 0.0% | 0us | `min` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:518` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/checks.js` |
| 0.0% | 1.2ms | 0.0% | 0us | `$ZodCheckGreaterThan` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` |
| 0.0% | 1.2ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/imageSchema.ts:10` |
| 0.0% | 1.2ms | 0.0% | 0us | `_gte` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:523` |
| 0.0% | 1.2ms | 0.0% | 0us | `bound min` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/classes/comparator.js:143` |
| 0.0% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:32` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `async (anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` |
| 0.0% | 1.2ms | 0.0% | 0us | `async _` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` |
| 0.0% | 1.2ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:27` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `getEnvStrings` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.2ms | 0.0% | 0us | `_environ_sizes_get` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/priority-queue.js:3` |
| 0.0% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:5` |
| 0.0% | 1.2ms | 0.0% | 0us | `ErrnoError` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.2ms | 0.0% | 0us | `mayCreate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.2ms | 0.0% | 0us | `createDefaultDirectories` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.2ms | 0.0% | 0us | `staticInit` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.2ms | 0.0% | 0us | `mknod` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.2ms | 0.0% | 0us | `lookupNode` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.2ms | 0.0% | 0us | `mkdir` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.2ms | 0.0% | 0us | `__embind_register_enum` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.2ms | 0.0% | 0us | `union` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:818` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `init` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:21` |
| 0.0% | 1.2ms | 0.0% | 0us | `ZodUnion` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` |
| 0.0% | 1.2ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/applyPatch.js:18` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `validate` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js` |
| 0.0% | 1.2ms | 0.0% | 0us | `_compileResolved` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:456` |
| 0.0% | 1.2ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v3/helpers/util.js:71` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v3/helpers/util.js:13` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `join` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `node:child_process` | `node:child_process:889` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `__embind_register_class_property` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `startsWith` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `createNamedFunction` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:24` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:6` |
| 0.0% | 1.1ms | 0.0% | 0us | `node:fs` | `node:fs:299` |
| 0.0% | 1.1ms | 0.0% | 0us | `internal:streams/operators` | `internal:streams/operators:2` |
| 0.0% | 1.1ms | 0.0% | 0us | `internal:streams/end-of-stream` | `internal:streams/end-of-stream:17` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `push` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `bind` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `internal:util/inspect` | `internal:util/inspect:9` |
| 0.0% | 1.1ms | 0.0% | 0us | `init` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `open` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.1ms | 0.0% | 0us | `createStandardStreams` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `.wasm-function[3812]` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1212` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `replace` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1029` |
| 0.0% | 1.1ms | 0.0% | 0us | `map` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/localShell.js:5` |
| 0.0% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:1686` |
| 0.0% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:36` |
| 0.0% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:12` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `AsyncCaller` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js` |
| 0.0% | 1.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/tiktoken.js:10` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/structured_query/base.js:19` |
| 0.0% | 1.0ms | 0.0% | 0us | `internal:stream` | `internal:stream:46` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `setPrototypeDirectOrThrow` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/node_modules/openai/core/error.mjs:2` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `__embind_register_value_object_field` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `.wasm-function[1695]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:41` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `.wasm-function[1310]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `initializeSax` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/sax-js/sax.js` |
| 0.0% | 1.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/sax-js/sax.js:1197` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `whenDependentTypesAreResolved` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `PromptCache` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/prompt_cache/index.js` |
| 0.0% | 1.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/prompt_cache/index.js:326` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `defineProperty` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `__exportAll` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/_virtual/_rolldown/runtime.js:5` |
| 0.0% | 1.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/fast-json-patch/src/core.js:4` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/filesystem.js` |
| 0.0% | 1.0ms | 0.0% | 0us | `guarded` | `internal:shared:112` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:489` |
| 0.0% | 1.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:8` |
| 0.0% | 1.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/utility.mjs:18` |
| 0.0% | 1.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_md5_buffer]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `mupdf-wasm.wasm.wasm-function[fz_md5_update]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `mupdf-wasm.wasm.wasm-function[body]` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `bound check` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:508` |
| 0.0% | 1.0ms | 0.0% | 0us | `bound clone` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:85` |
| 0.0% | 1.0ms | 0.0% | 0us | `bound max` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/imageSchema.ts:12` |
| 0.0% | 1.0ms | 0.0% | 0us | `clone` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:262` |
| 0.0% | 1.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/utility.mjs:71` |
| 0.0% | 1.0ms | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:637` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `ColorSpace` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js` |
| 0.0% | 999us | 0.0% | 0us | `internal:util/inspect` | `internal:util/inspect:2` |
| 0.0% | 997us | 0.0% | 0us | `__embind_finalize_value_object` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 989us | 0.0% | 0us | `__embind_register_void` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 989us | 0.0% | 989us | `AsciiToString` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 978us | 0.0% | 978us | `attachEdge` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` |
| 0.0% | 978us | 0.0% | 0us | `_compileResolved` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:500` |
| 0.0% | 971us | 0.0% | 971us | `SemVer` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/classes/semver.js:82` |
| 0.0% | 971us | 0.0% | 0us | `Comparator` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/classes/comparator.js:25` |
| 0.0% | 971us | 0.0% | 0us | `parse` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/classes/comparator.js:53` |
| 0.0% | 971us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:45` |
| 0.0% | 971us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/ranges/subset.js:73` |
| 0.0% | 957us | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/libvips.mjs:14` |
| 0.0% | 957us | 0.0% | 957us | `match` | `[native code]` |
| 0.0% | 957us | 0.0% | 0us | `coerce` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/functions/coerce.js:24` |
| 0.0% | 944us | 0.0% | 944us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:118` |
| 0.0% | 944us | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:50` |
| 0.0% | 944us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:488` |
| 0.0% | 942us | 0.0% | 942us | `replacePublicSymbol` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 936us | 0.0% | 0us | `RunnablePassthrough` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/passthrough.js:39` |
| 0.0% | 936us | 0.0% | 936us | `Serializable` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/serializable.js:82` |
| 0.0% | 936us | 0.0% | 0us | `Runnable` | `[native code]` |
| 0.0% | 936us | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/read.js:28` |
| 0.0% | 934us | 0.0% | 934us | `keys` | `[native code]` |
| 0.0% | 934us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1207` |
| 0.0% | 934us | 0.0% | 0us | `route` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1147` |
| 0.0% | 934us | 0.0% | 0us | `deriveBFS` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1116` |
| 0.0% | 930us | 0.0% | 0us | `bound default` | `[native code]` |
| 0.0% | 930us | 0.0% | 0us | `_default` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1151` |
| 0.0% | 930us | 0.0% | 930us | `ZodDefault` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:40` |
| 0.0% | 930us | 0.0% | 930us | `__embind_register_std_wstring` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 930us | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:28` |
| 0.0% | 928us | 0.0% | 928us | `node:worker_threads` | `node:worker_threads:771` |
| 0.0% | 919us | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/messages_annotation.js:102` |
| 0.0% | 919us | 0.0% | 919us | `ZodType` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v3/types.js` |
| 0.0% | 919us | 0.0% | 0us | `ZodAny` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v3/types.js:1681` |
| 0.0% | 919us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v3/types.js:1690` |
| 0.0% | 918us | 0.0% | 918us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/node_modules/openai/resources/files.mjs:42` |
| 0.0% | 879us | 0.0% | 0us | `(anonymous)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:30` |
| 0.0% | 853us | 0.0% | 853us | `craftInvokerFunction` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 0.0% | 853us | 0.0% | 0us | `__embind_register_class_constructor` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` |
| 0.0% | 851us | 0.0% | 851us | `_` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` |
| 0.0% | 837us | 0.0% | 837us | `_addSchema` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` |
| 0.0% | 837us | 0.0% | 0us | `StateGraph` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:179` |
| 0.0% | 837us | 0.0% | 0us | `(module)` | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:104` |

## Function Details

### `anonymous`
`[native code]` | Self: 65.6% (1.06s) | Total: 100.0% (2.08s) | Samples: 38

**Called by:**
- `require` (21)
- `node:stream` (9)
- `internal:stream` (7)
- `craftInvokerFunction` (7)
- `node:util` (5)
- `internal:streams/compose` (4)
- `internal:streams/pipeline` (3)
- `node:fs` (3)
- `node:fs/promises` (2)
- `internal:streams/duplex` (2)
- `bound require` (2)
- `internal:streams/end-of-stream` (1)
- `internal:shared` (1)
- `node:path` (1)
- `internal:streams/operators` (1)
- `node:util` (1)
- `node:fs` (1)
- `internal:util/inspect` (1)
- `internal:validators` (1)
- `internal:stream` (1)

**Calls:**
- `internal:stream` (7)
- `internal:streams/compose` (4)
- `internal:streams/pipeline` (3)
- `(anonymous)` (2)
- `internal:streams/duplex` (2)
- `node:fs/promises` (2)
- `internal:streams/end-of-stream` (1)
- `internal:stream` (1)
- `internal:util/inspect` (1)
- `internal:primordials` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `internal:streams/operators` (1)
- `internal:shared` (1)
- `node:child_process` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `internal:util/inspect` (1)
- `internal:validators` (1)
- `(anonymous)` (1)

### `findWasmBinary`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 9.7% (158.2ms) | Total: 9.7% (158.2ms) | Samples: 144

**Called by:**
- `async createWasm` (144)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 6.2% (101.9ms) | Total: 6.2% (101.9ms) | Samples: 2

**Called by:**
- `async (anonymous)` (1)
- `(anonymous)` (1)

### `slice`
`[native code]` | Self: 3.6% (58.5ms) | Total: 3.6% (58.5ms) | Samples: 1

**Called by:**
- `(module)` (1)

### `node:worker_threads`
`node:worker_threads:33` | Self: 1.7% (28.3ms) | Total: 1.7% (28.3ms) | Samples: 1

### `instantiate`
`[native code]` | Self: 1.6% (27.1ms) | Total: 1.6% (27.1ms) | Samples: 26

**Called by:**
- `async (anonymous)` (15)
- `async instantiateArrayBuffer` (11)

### `binaryDecode`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 1.5% (25.7ms) | Total: 1.5% (25.7ms) | Samples: 24

**Called by:**
- `findWasmBinary` (24)

### `Events`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/eventemitter3/index.js` | Self: 0.8% (14.1ms) | Total: 0.8% (14.1ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `Uint8Array`
`[native code]` | Self: 0.6% (10.0ms) | Total: 0.6% (10.0ms) | Samples: 7

**Called by:**
- `async F` (4)
- `binaryDecode` (3)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.4% (7.6ms) | Total: 3.0% (48.9ms) | Samples: 5

**Called by:**
- `async (anonymous)` (10)
- `async I` (2)

**Calls:**
- `instantiate` (15)
- `async (anonymous)` (10)
- `async I` (2)
- `async F` (2)
- `_` (2)
- `_` (1)

### `getFullYear`
`[native code]` | Self: 0.4% (7.3ms) | Total: 0.4% (7.3ms) | Samples: 7

**Called by:**
- `k` (7)

### `init`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.4% (6.6ms) | Total: 0.4% (6.6ms) | Samples: 1

**Called by:**
- `initRuntime` (1)

### `Int8Array`
`[native code]` | Self: 0.4% (6.5ms) | Total: 0.4% (6.5ms) | Samples: 2

**Called by:**
- `R` (2)

### `Function`
`[native code]` | Self: 0.3% (5.6ms) | Total: 0.3% (5.6ms) | Samples: 5

**Called by:**
- `createJsInvoker` (5)

### `whenDependentTypesAreResolved`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.3% (5.2ms) | Total: 2.6% (43.1ms) | Samples: 5

**Called by:**
- `__embind_register_class_function` (13)
- `(anonymous)` (12)
- `__embind_register_function` (9)
- `__embind_register_constant` (2)
- `__embind_register_smart_ptr` (2)
- `__embind_register_class_constructor` (1)
- `__embind_register_class` (1)
- `__embind_finalize_value_object` (1)

**Calls:**
- `onComplete` (36)

### `(anonymous)`
`[native code]` | Self: 0.2% (3.7ms) | Total: 0.3% (6.1ms) | Samples: 4

**Called by:**
- `(module)` (3)
- `bound require` (2)
- `(module)` (1)

**Calls:**
- `dlopen` (2)

### `exposePublicSymbol`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.1% (3.0ms) | Total: 0.1% (3.0ms) | Samples: 3

**Called by:**
- `__embind_register_function` (3)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.1% (2.9ms) | Total: 2.6% (43.3ms) | Samples: 3

**Called by:**
- `onComplete` (36)
- `forEach` (3)
- `(anonymous)` (2)

**Calls:**
- `craftInvokerFunction` (18)
- `whenDependentTypesAreResolved` (12)
- `onComplete` (2)
- `(anonymous)` (2)
- `startsWith` (1)
- `replacePublicSymbol` (1)
- `(anonymous)` (1)
- `craftInvokerFunction` (1)

### `binaryDecode`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.1% (2.8ms) | Total: 0.3% (6.0ms) | Samples: 3

**Called by:**
- `findWasmBinary` (6)

**Calls:**
- `Uint8Array` (3)

### `getWasmTableEntry`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.1% (2.7ms) | Total: 0.1% (2.7ms) | Samples: 1

**Called by:**
- `makeDynCaller` (1)

### `bound call`
`[native code]` | Self: 0.1% (2.5ms) | Total: 0.1% (2.5ms) | Samples: 1

**Called by:**
- `internal:primordials` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.1% (2.4ms) | Total: 0.1% (2.4ms) | Samples: 2

**Called by:**
- `(anonymous)` (1)
- `ErrnoError` (1)

### `dlopen`
`[native code]` | Self: 0.1% (2.4ms) | Total: 0.1% (2.4ms) | Samples: 2

**Called by:**
- `(anonymous)` (2)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.1% (2.4ms) | Total: 27.8% (450.0ms) | Samples: 2

**Called by:**
- `(anonymous)` (178)
- `async (anonymous)` (177)

**Calls:**
- `async (anonymous)` (177)
- `async createWasm` (174)
- `run` (50)
- `staticInit` (1)
- `async (anonymous)` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:58` | Self: 0.1% (2.4ms) | Total: 0.1% (2.4ms) | Samples: 1

**Called by:**
- `init` (1)

### `__embind_register_enum_value`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.1% (2.3ms) | Total: 0.2% (3.4ms) | Samples: 2

**Called by:**
- `wasm-stub` (3)

**Calls:**
- `createNamedFunction` (1)

### `readFileSync`
`[native code]` | Self: 0.1% (2.2ms) | Total: 0.2% (4.5ms) | Samples: 2

**Called by:**
- `readFileSync` (2)
- `async r` (2)

**Calls:**
- `readFileSync` (2)

### `createJsInvoker`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.1% (2.0ms) | Total: 0.6% (10.0ms) | Samples: 2

**Called by:**
- `craftInvokerFunction` (9)

**Calls:**
- `Function` (5)
- `push` (1)
- `join` (1)

### `ZodNumber`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:40` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `_coercedNumber` (1)

### `.wasm-function[4417]`
`[native code]` | Self: 0.0% (1.2ms) | Total: 1.9% (31.9ms) | Samples: 1

**Called by:**
- `.wasm-function[16862]` (29)

**Calls:**
- `wasm-stub` (28)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/checks.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `init` (1)

### `craftInvokerFunction`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (1.2ms) | Total: 1.2% (19.7ms) | Samples: 1

**Called by:**
- `(anonymous)` (18)

**Calls:**
- `createJsInvoker` (9)
- `anonymous` (7)
- `bind` (1)

### `async (anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `async _` (1)

### `getEnvStrings`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `_environ_sizes_get` (1)

### `bound require`
`[native code]` | Self: 0.0% (1.2ms) | Total: 100.0% (1.99s) | Samples: 1

**Called by:**
- `(anonymous)` (4)
- `(module)` (3)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(module)` (1)
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
- `require` (21)
- `anonymous` (2)
- `(anonymous)` (2)

### `init`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:21` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `ZodUnion` (1)

### `validate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `_compileResolved` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v3/helpers/util.js:13` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `(module)` (1)

### `join`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `createJsInvoker` (1)

### `node:child_process`
`node:child_process:889` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `anonymous` (1)

### `__embind_register_class_property`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `wasm-stub` (1)

### `startsWith`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `createNamedFunction`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `__embind_register_enum_value` (1)

### `push`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `createJsInvoker` (1)

### `makeDynCaller`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (1.1ms) | Total: 0.2% (3.8ms) | Samples: 1

**Called by:**
- `embind__requireFunction` (2)

**Calls:**
- `getWasmTableEntry` (1)

### `bind`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `craftInvokerFunction` (1)

### `internal:util/inspect`
`internal:util/inspect:9` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `anonymous` (1)

### `open`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `createStandardStreams` (1)

### `.wasm-function[3812]`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `.wasm-function[744]` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1212` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `anonymous` (1)

### `replace`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `map` (1)

### `AsyncCaller`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `(module)` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/structured_query/base.js:19` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

### `setPrototypeDirectOrThrow`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `(module)` (1)

### `__embind_register_value_object_field`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `wasm-stub` (1)

### `.wasm-function[1695]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `.wasm-function[744]` (1)

### `.wasm-function[1310]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `.wasm-function[16862]` (1)

### `initializeSax`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/sax-js/sax.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `(module)` (1)

### `whenDependentTypesAreResolved`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `__embind_register_class` (1)

### `PromptCache`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/prompt_cache/index.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `(module)` (1)

### `defineProperty`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `__exportAll` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/filesystem.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `guarded` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:489` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `init` (1)

### `mupdf-wasm.wasm.wasm-function[body]`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_md5_update]` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:85` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `init` (1)

### `ColorSpace`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `(module)` (1)

### `AsciiToString`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (989us) | Total: 0.0% (989us) | Samples: 1

**Called by:**
- `__embind_register_void` (1)

### `attachEdge`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` | Self: 0.0% (978us) | Total: 0.0% (978us) | Samples: 1

**Called by:**
- `_compileResolved` (1)

### `SemVer`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/classes/semver.js:82` | Self: 0.0% (971us) | Total: 0.0% (971us) | Samples: 1

**Called by:**
- `parse` (1)

### `match`
`[native code]` | Self: 0.0% (957us) | Total: 0.0% (957us) | Samples: 1

**Called by:**
- `coerce` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:118` | Self: 0.0% (944us) | Total: 0.0% (944us) | Samples: 1

**Called by:**
- `init` (1)

### `replacePublicSymbol`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (942us) | Total: 0.0% (942us) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `Serializable`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/serializable.js:82` | Self: 0.0% (936us) | Total: 0.0% (936us) | Samples: 1

**Called by:**
- `Runnable` (1)

### `keys`
`[native code]` | Self: 0.0% (934us) | Total: 0.0% (934us) | Samples: 1

**Called by:**
- `deriveBFS` (1)

### `ZodDefault`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:40` | Self: 0.0% (930us) | Total: 0.0% (930us) | Samples: 1

**Called by:**
- `_default` (1)

### `__embind_register_std_wstring`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (930us) | Total: 0.0% (930us) | Samples: 1

**Called by:**
- `wasm-stub` (1)

### `node:worker_threads`
`node:worker_threads:771` | Self: 0.0% (928us) | Total: 0.0% (928us) | Samples: 1

### `ZodType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v3/types.js` | Self: 0.0% (919us) | Total: 0.0% (919us) | Samples: 1

**Called by:**
- `ZodAny` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/node_modules/openai/resources/files.mjs:42` | Self: 0.0% (918us) | Total: 0.0% (918us) | Samples: 1

### `craftInvokerFunction`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` | Self: 0.0% (853us) | Total: 0.0% (853us) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `_`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` | Self: 0.0% (851us) | Total: 0.0% (851us) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `_addSchema`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` | Self: 0.0% (837us) | Total: 0.0% (837us) | Samples: 1

**Called by:**
- `StateGraph` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/fast-json-patch/src/core.js:4` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `__exportAll` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:3` | Self: 0.0% (0us) | Total: 0.8% (14.1ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/ranges/subset.js:73` | Self: 0.0% (0us) | Total: 0.0% (971us) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `Comparator` (1)

### `bound default`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (930us) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `_default` (1)

### `ZodLiteral`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` | Self: 0.0% (0us) | Total: 0.2% (3.5ms) | Samples: 0

**Called by:**
- `literal` (2)

**Calls:**
- `init` (2)

### `__embind_register_class_constructor`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (853us) | Samples: 0

**Called by:**
- `wasm-stub` (1)

**Calls:**
- `whenDependentTypesAreResolved` (1)

### `lookup`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.1% (2.4ms) | Samples: 0

**Called by:**
- `lookupNode` (1)
- `lookup` (1)

**Calls:**
- `lookup` (1)
- `ErrnoError` (1)

### `k`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.4% (7.3ms) | Samples: 0

**Called by:**
- `wasm-stub` (7)

**Calls:**
- `getFullYear` (7)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:11` | Self: 0.0% (0us) | Total: 18.2% (295.6ms) | Samples: 0

**Called by:**
- `(anonymous)` (179)

**Calls:**
- `(anonymous)` (179)

### `node:fs/promises`
`node:fs/promises:2` | Self: 0.0% (0us) | Total: 0.1% (2.5ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `anonymous` (2)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/tiktoken.js:10` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `AsyncCaller` (1)

### `__embind_register_constant`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.1% (2.1ms) | Samples: 0

**Called by:**
- `wasm-stub` (2)

**Calls:**
- `whenDependentTypesAreResolved` (2)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/libvips.mjs:14` | Self: 0.0% (0us) | Total: 0.0% (957us) | Samples: 0

**Calls:**
- `coerce` (1)

### `_compileResolved`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:500` | Self: 0.0% (0us) | Total: 0.0% (978us) | Samples: 0

**Called by:**
- `compile` (1)

**Calls:**
- `attachEdge` (1)

### `registerType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.2% (3.3ms) | Samples: 0

**Called by:**
- `onComplete` (2)
- `__embind_register_enum` (1)

**Calls:**
- `sharedRegisterType` (3)

### `internal:stream`
`internal:stream:46` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `.wasm-function[744]`
`[native code]` | Self: 0.0% (0us) | Total: 0.1% (2.1ms) | Samples: 0

**Called by:**
- `.wasm-function[16862]` (2)

**Calls:**
- `.wasm-function[1695]` (1)
- `.wasm-function[3812]` (1)

### `internal:stream`
`internal:stream:2` | Self: 0.0% (0us) | Total: 0.5% (8.5ms) | Samples: 0

**Called by:**
- `anonymous` (7)

**Calls:**
- `anonymous` (7)

### `.wasm-function[2667]`
`[native code]` | Self: 0.0% (0us) | Total: 0.9% (15.2ms) | Samples: 0

**Called by:**
- `.wasm-function[16862]` (13)

**Calls:**
- `wasm-stub` (13)

### `$ZodCheckGreaterThan`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `_gte` (1)

**Calls:**
- `init` (1)

### `doRun`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 3.7% (61.3ms) | Samples: 0

**Called by:**
- `run` (50)

**Calls:**
- `initRuntime` (50)

### `staticInit`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `createDefaultDirectories` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v3/types.js:1690` | Self: 0.0% (0us) | Total: 0.0% (919us) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `ZodAny` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/messages_annotation.js:102` | Self: 0.0% (0us) | Total: 0.0% (919us) | Samples: 0

**Calls:**
- `(anonymous)` (1)

### `createStandardStreams`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `open` (1)

### `onComplete`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 2.4% (40.0ms) | Samples: 0

**Called by:**
- `whenDependentTypesAreResolved` (36)
- `(anonymous)` (2)

**Calls:**
- `(anonymous)` (36)
- `registerType` (2)

### `async instantiateArrayBuffer`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.6% (11.1ms) | Samples: 0

**Calls:**
- `instantiate` (11)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/imageSchema.ts:10` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Calls:**
- `bound min` (1)

### `wasm-stub`
`[native code]` | Self: 0.0% (0us) | Total: 7.3% (118.4ms) | Samples: 0

**Called by:**
- `initRuntime` (48)
- `.wasm-function[4417]` (28)
- `.wasm-function[2667]` (13)
- `(module)` (8)
- `mupdf-wasm.wasm.wasm-function[do_tzset]` (7)
- `.wasm-function[3389]` (2)
- `.wasm-function[16862]` (1)

**Calls:**
- `.wasm-function[16862]` (48)
- `__embind_register_class_function` (15)
- `__embind_register_function` (12)
- `mupdf-wasm.wasm.wasm-function[wasm_init_context]` (8)
- `k` (7)
- `__embind_register_enum_value` (3)
- `__embind_register_constant` (2)
- `__embind_register_class` (2)
- `__embind_register_smart_ptr` (2)
- `__embind_register_void` (1)
- `__embind_register_value_object_field` (1)
- `__embind_finalize_value_object` (1)
- `__embind_register_enum` (1)
- `__embind_register_class_property` (1)
- `_environ_sizes_get` (1)
- `__embind_register_std_wstring` (1)
- `__embind_register_class_constructor` (1)

### `Comparator`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/classes/comparator.js:25` | Self: 0.0% (0us) | Total: 0.0% (971us) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `parse` (1)

### `async _`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `async (anonymous)` (1)

### `internal:streams/duplex`
`internal:streams/duplex:2` | Self: 0.0% (0us) | Total: 0.1% (2.3ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `anonymous` (2)

### `_number`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:307` | Self: 0.0% (0us) | Total: 0.1% (1.9ms) | Samples: 0

**Called by:**
- `(module)` (1)
- `(module)` (1)

**Calls:**
- `ZodNumber` (2)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:1686` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `map` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/utility.mjs:18` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `(anonymous)` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:6` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `async r`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.1% (2.2ms) | Samples: 0

**Called by:**
- `async F` (2)

**Calls:**
- `readFileSync` (2)

### `node:util`
`node:util:8` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Calls:**
- `anonymous` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:41` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `bound clone`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `bound check` (1)

**Calls:**
- `clone` (1)

### `mupdf-wasm.wasm.wasm-function[fz_md5_update]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_md5_buffer]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[body]` (1)

### `literal`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1043` | Self: 0.0% (0us) | Total: 0.2% (3.5ms) | Samples: 0

**Called by:**
- `(module)` (1)
- `(module)` (1)

**Calls:**
- `ZodLiteral` (2)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v3/helpers/util.js:71` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Calls:**
- `(anonymous)` (1)

### `guarded`
`internal:shared:112` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `(anonymous)` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:30` | Self: 0.0% (0us) | Total: 0.0% (879us) | Samples: 0

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:45` | Self: 0.0% (0us) | Total: 0.0% (971us) | Samples: 0

**Calls:**
- `bound require` (1)

### `node:path`
`node:path:2` | Self: 0.0% (0us) | Total: 0.1% (2.5ms) | Samples: 0

**Calls:**
- `anonymous` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/extractSchema.ts:53` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Calls:**
- `_coercedNumber` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/internal/re.js:6` | Self: 0.0% (0us) | Total: 59.5% (963.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `RunnablePassthrough`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/runnables/passthrough.js:39` | Self: 0.0% (0us) | Total: 0.0% (936us) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `Runnable` (1)

### `bound max`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `bound check` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:27` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Calls:**
- `async _` (1)

### `async createWasm`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 23.4% (380.1ms) | Samples: 0

**Called by:**
- `async createWasm` (174)
- `async (anonymous)` (174)

**Calls:**
- `async createWasm` (174)
- `findWasmBinary` (144)
- `findWasmBinary` (30)

### `async I`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.1% (2.2ms) | Samples: 0

**Called by:**
- `async (anonymous)` (2)

**Calls:**
- `async (anonymous)` (2)

### `union`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:818` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `ZodUnion` (1)

### `require`
`[native code]` | Self: 0.0% (0us) | Total: 100.0% (1.96s) | Samples: 0

**Called by:**
- `bound require` (21)

**Calls:**
- `anonymous` (21)

### `_`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.4% (6.5ms) | Samples: 0

**Called by:**
- `async (anonymous)` (2)

**Calls:**
- `R` (2)

### `mupdf-wasm.wasm.wasm-function[wasm_init_context]`
`[native code]` | Self: 0.0% (0us) | Total: 0.5% (8.3ms) | Samples: 0

**Called by:**
- `wasm-stub` (8)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_new_context_imp]` (8)

### `init`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:22` | Self: 0.0% (0us) | Total: 0.9% (15.1ms) | Samples: 0

**Called by:**
- `ZodNumber` (3)
- `ZodLiteral` (2)
- `(anonymous)` (2)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `$ZodCheckGreaterThan` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

**Calls:**
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

### `forEach`
`[native code]` | Self: 0.0% (0us) | Total: 0.2% (3.3ms) | Samples: 0

**Called by:**
- `sharedRegisterType` (3)

**Calls:**
- `(anonymous)` (3)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:32` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `__embind_register_class`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.1% (1.9ms) | Samples: 0

**Called by:**
- `wasm-stub` (2)

**Calls:**
- `whenDependentTypesAreResolved` (1)
- `whenDependentTypesAreResolved` (1)

### `__embind_register_void`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (989us) | Samples: 0

**Called by:**
- `wasm-stub` (1)

**Calls:**
- `AsciiToString` (1)

### `internal:streams/compose`
`internal:streams/compose:2` | Self: 0.0% (0us) | Total: 0.3% (4.9ms) | Samples: 0

**Called by:**
- `anonymous` (4)

**Calls:**
- `anonymous` (4)

### `async F`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.7% (11.3ms) | Samples: 0

**Called by:**
- `async (anonymous)` (2)
- `async F` (2)

**Calls:**
- `Uint8Array` (4)
- `async F` (2)
- `async r` (2)

### `mknod`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mkdir` (1)

**Calls:**
- `mayCreate` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/eventemitter3/index.js:29` | Self: 0.0% (0us) | Total: 0.8% (14.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `Events` (1)

### `__embind_register_enum`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `wasm-stub` (1)

**Calls:**
- `registerType` (1)

### `__embind_register_function`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.8% (13.4ms) | Samples: 0

**Called by:**
- `wasm-stub` (12)

**Calls:**
- `whenDependentTypesAreResolved` (9)
- `exposePublicSymbol` (3)

### `mupdf-wasm.wasm.wasm-function[do_tzset]`
`[native code]` | Self: 0.0% (0us) | Total: 0.4% (7.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[gmtime]` (7)

**Calls:**
- `wasm-stub` (7)

### `map`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `replace` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:8` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `_number` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:637` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `ColorSpace` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/sharp.mjs:61` | Self: 0.0% (0us) | Total: 0.2% (3.4ms) | Samples: 0

**Calls:**
- `bound require` (3)

### `ZodAny`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v3/types.js:1681` | Self: 0.0% (0us) | Total: 0.0% (919us) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `ZodType` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/node_modules/openai/core/error.mjs:2` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `setPrototypeDirectOrThrow` (1)

### `__embind_finalize_value_object`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (997us) | Samples: 0

**Called by:**
- `wasm-stub` (1)

**Calls:**
- `whenDependentTypesAreResolved` (1)

### `mupdf-wasm.wasm.wasm-function[fz_new_icc_colorspace]`
`[native code]` | Self: 0.0% (0us) | Total: 0.5% (8.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_new_colorspace_context]` (8)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[lcms2mt_cmsCreateProfilePlaceholder]` (7)
- `mupdf-wasm.wasm.wasm-function[fz_md5_buffer]` (1)

### `Runnable`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (936us) | Samples: 0

**Called by:**
- `RunnablePassthrough` (1)

**Calls:**
- `Serializable` (1)

### `internal:streams/pipeline`
`internal:streams/pipeline:2` | Self: 0.0% (0us) | Total: 0.2% (3.5ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `anonymous` (3)

### `route`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1147` | Self: 0.0% (0us) | Total: 0.0% (934us) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `deriveBFS` (1)

### `coerce`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/functions/coerce.js:24` | Self: 0.0% (0us) | Total: 0.0% (957us) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `match` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/detect-libc.js:6` | Self: 0.0% (0us) | Total: 1.7% (28.0ms) | Samples: 0

**Calls:**
- `bound require` (2)

### `mupdf-wasm.wasm.wasm-function[fz_new_context_imp]`
`[native code]` | Self: 0.0% (0us) | Total: 0.5% (8.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[wasm_init_context]` (8)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_new_colorspace_context]` (8)

### `internal:primordials`
`internal:primordials:51` | Self: 0.0% (0us) | Total: 0.1% (2.5ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound call` (1)

### `min`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:518` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `bound min` (1)

**Calls:**
- `_gte` (1)

### `bound min`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `min` (1)

### `mupdf-wasm.wasm.wasm-function[gmtime]`
`[native code]` | Self: 0.0% (0us) | Total: 0.4% (7.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[lcms2mt_cmsCreateProfilePlaceholder]` (7)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[do_tzset]` (7)

### `ZodUnion`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `union` (1)

**Calls:**
- `init` (1)

### `sharedRegisterType`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.2% (3.3ms) | Samples: 0

**Called by:**
- `registerType` (3)

**Calls:**
- `forEach` (3)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/classes/comparator.js:143` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/priority-queue.js:3` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `node:fs`
`node:fs:2` | Self: 0.0% (0us) | Total: 0.2% (4.7ms) | Samples: 0

**Calls:**
- `anonymous` (3)

### `StateGraph`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:179` | Self: 0.0% (0us) | Total: 0.0% (837us) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `_addSchema` (1)

### `_default`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1151` | Self: 0.0% (0us) | Total: 0.0% (930us) | Samples: 0

**Called by:**
- `bound default` (1)

**Calls:**
- `ZodDefault` (1)

### `.wasm-function[3389]`
`[native code]` | Self: 0.0% (0us) | Total: 0.1% (1.9ms) | Samples: 0

**Called by:**
- `.wasm-function[16862]` (2)

**Calls:**
- `wasm-stub` (2)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/applyPatch.js:18` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Calls:**
- `union` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:28` | Self: 0.0% (0us) | Total: 18.2% (295.6ms) | Samples: 0

**Called by:**
- `(anonymous)` (179)

**Calls:**
- `async (anonymous)` (178)
- `async (anonymous)` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:28` | Self: 0.0% (0us) | Total: 0.0% (930us) | Samples: 0

**Calls:**
- `bound default` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:508` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `init` (1)

### `embind__requireFunction`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.2% (3.8ms) | Samples: 0

**Called by:**
- `__embind_register_class_function` (2)

**Calls:**
- `makeDynCaller` (2)

### `compile`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:439` | Self: 0.0% (0us) | Total: 0.1% (2.1ms) | Samples: 0

**Called by:**
- `(module)` (2)

**Calls:**
- `_compileResolved` (1)
- `_compileResolved` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/schema/imageSchema.ts:12` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `bound max` (1)

### `R`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js:1` | Self: 0.0% (0us) | Total: 0.4% (6.5ms) | Samples: 0

**Called by:**
- `_` (2)

**Calls:**
- `Int8Array` (2)

### `internal:streams/operators`
`internal:streams/operators:2` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1029` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `init` (1)

### `internal:validators`
`internal:validators:2` | Self: 0.0% (0us) | Total: 0.1% (2.5ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `run`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 3.7% (61.3ms) | Samples: 0

**Called by:**
- `async (anonymous)` (50)

**Calls:**
- `doRun` (50)

### `createDefaultDirectories`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `staticInit` (1)

**Calls:**
- `mkdir` (1)

### `_compileResolved`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js:456` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `compile` (1)

**Calls:**
- `validate` (1)

### `init`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `initRuntime` (1)

**Calls:**
- `createStandardStreams` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:36` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:507` | Self: 0.0% (0us) | Total: 0.1% (1.9ms) | Samples: 0

**Called by:**
- `init` (2)

**Calls:**
- `init` (2)

### `bound check`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `bound max` (1)

**Calls:**
- `bound clone` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:12` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:5` | Self: 0.0% (0us) | Total: 0.1% (2.4ms) | Samples: 0

**Calls:**
- `literal` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js:1030` | Self: 0.0% (0us) | Total: 0.1% (2.4ms) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `init` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:113` | Self: 0.0% (0us) | Total: 0.1% (2.1ms) | Samples: 0

**Calls:**
- `compile` (2)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/localShell.js:5` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `literal` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/index.cjs:1` | Self: 0.0% (0us) | Total: 0.3% (5.4ms) | Samples: 0

**Calls:**
- `bound require` (4)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js:28` | Self: 0.0% (0us) | Total: 0.5% (8.3ms) | Samples: 0

**Calls:**
- `wasm-stub` (8)

### `node:fs`
`node:fs:299` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `anonymous` (1)

### `deriveBFS`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1116` | Self: 0.0% (0us) | Total: 0.0% (934us) | Samples: 0

**Called by:**
- `route` (1)

**Calls:**
- `keys` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:24` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/sharp-linux-x64/index.cjs:2` | Self: 0.0% (0us) | Total: 0.1% (2.4ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `bound require` (2)

### `mupdf-wasm.wasm.wasm-function[fz_md5_buffer]`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_new_icc_colorspace]` (1)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_md5_update]` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/index.js:4` | Self: 0.0% (0us) | Total: 59.5% (963.1ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `__embind_register_class_function`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 1.0% (17.3ms) | Samples: 0

**Called by:**
- `wasm-stub` (15)

**Calls:**
- `whenDependentTypesAreResolved` (13)
- `embind__requireFunction` (2)

### `ZodNumber`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js:41` | Self: 0.0% (0us) | Total: 0.1% (2.9ms) | Samples: 0

**Called by:**
- `_number` (2)
- `clone` (1)

**Calls:**
- `init` (3)

### `mupdf-wasm.wasm.wasm-function[lcms2mt_cmsCreateProfilePlaceholder]`
`[native code]` | Self: 0.0% (0us) | Total: 0.4% (7.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_new_icc_colorspace]` (7)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[gmtime]` (7)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs:1207` | Self: 0.0% (0us) | Total: 0.0% (934us) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `route` (1)

### `ErrnoError`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `lookup` (1)

**Calls:**
- `(anonymous)` (1)

### `__exportAll`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/_virtual/_rolldown/runtime.js:5` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `defineProperty` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js:488` | Self: 0.0% (0us) | Total: 0.0% (944us) | Samples: 0

**Called by:**
- `init` (1)

**Calls:**
- `init` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/utility.mjs:27` | Self: 0.0% (0us) | Total: 0.1% (2.7ms) | Samples: 0

**Calls:**
- `(anonymous)` (3)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:20` | Self: 0.0% (0us) | Total: 18.2% (295.6ms) | Samples: 0

**Calls:**
- `(anonymous)` (179)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/sax-js/sax.js:1197` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `initializeSax` (1)

### `_gte`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:523` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `min` (1)

**Calls:**
- `$ZodCheckGreaterThan` (1)

### `initRuntime`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 3.7% (61.3ms) | Samples: 0

**Called by:**
- `doRun` (50)

**Calls:**
- `wasm-stub` (48)
- `init` (1)
- `init` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/src/langgraph.ts:104` | Self: 0.0% (0us) | Total: 0.0% (837us) | Samples: 0

**Calls:**
- `StateGraph` (1)

### `findWasmBinary`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 1.9% (31.7ms) | Samples: 0

**Called by:**
- `async createWasm` (30)

**Calls:**
- `binaryDecode` (24)
- `binaryDecode` (6)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/uuid/stringify.js:8` | Self: 0.0% (0us) | Total: 3.6% (58.5ms) | Samples: 0

**Calls:**
- `slice` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/sharp/dist/utility.mjs:71` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `mupdf-wasm.wasm.wasm-function[fz_new_colorspace_context]`
`[native code]` | Self: 0.0% (0us) | Total: 0.5% (8.3ms) | Samples: 0

**Called by:**
- `mupdf-wasm.wasm.wasm-function[fz_new_context_imp]` (8)

**Calls:**
- `mupdf-wasm.wasm.wasm-function[fz_new_icc_colorspace]` (8)

### `__embind_register_smart_ptr`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.1% (2.1ms) | Samples: 0

**Called by:**
- `wasm-stub` (2)

**Calls:**
- `whenDependentTypesAreResolved` (2)

### `node:stream`
`node:stream:2` | Self: 0.0% (0us) | Total: 0.6% (10.6ms) | Samples: 0

**Calls:**
- `anonymous` (9)

### `mayCreate`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mknod` (1)

**Calls:**
- `lookupNode` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/pregel/read.js:28` | Self: 0.0% (0us) | Total: 0.0% (936us) | Samples: 0

**Calls:**
- `RunnablePassthrough` (1)

### `internal:util/inspect`
`internal:util/inspect:2` | Self: 0.0% (0us) | Total: 0.0% (999us) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `(anonymous)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/p-queue/dist/index.js:5` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/prompt_cache/index.js:326` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Calls:**
- `PromptCache` (1)

### `node:util`
`node:util:2` | Self: 0.0% (0us) | Total: 2.1% (35.5ms) | Samples: 0

**Calls:**
- `anonymous` (5)

### `_environ_sizes_get`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `wasm-stub` (1)

**Calls:**
- `getEnvStrings` (1)

### `_coercedNumber`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/api.js:315` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `ZodNumber` (1)

### `clone`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/util.js:262` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `bound clone` (1)

**Calls:**
- `ZodNumber` (1)

### `internal:streams/end-of-stream`
`internal:streams/end-of-stream:17` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `internal:shared`
`internal:shared:2` | Self: 0.0% (0us) | Total: 0.1% (2.5ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `mkdir`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `createDefaultDirectories` (1)

**Calls:**
- `mknod` (1)

### `lookupNode`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js:23` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `mayCreate` (1)

**Calls:**
- `lookup` (1)

### `.wasm-function[16862]`
`[native code]` | Self: 0.0% (0us) | Total: 3.3% (53.5ms) | Samples: 0

**Called by:**
- `wasm-stub` (48)

**Calls:**
- `.wasm-function[4417]` (29)
- `.wasm-function[2667]` (13)
- `.wasm-function[3389]` (2)
- `.wasm-function[744]` (2)
- `wasm-stub` (1)
- `.wasm-function[1310]` (1)

### `(module)`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/dist/tools/computerUse.js:50` | Self: 0.0% (0us) | Total: 0.0% (944us) | Samples: 0

**Calls:**
- `_number` (1)

### `parse`
`/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/classes/comparator.js:53` | Self: 0.0% (0us) | Total: 0.0% (971us) | Samples: 0

**Called by:**
- `Comparator` (1)

**Calls:**
- `SemVer` (1)

## Files

| Self% | Self | File |
|------:|-----:|------|
| 74.4% | 1.20s | `[native code]` |
| 20.4% | 331.6ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@techstark/opencv-js/dist/opencv.js` |
| 1.8% | 29.2ms | `node:worker_threads` |
| 0.8% | 14.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/eventemitter3/index.js` |
| 0.5% | 9.7ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf-wasm.js` |
| 0.2% | 3.5ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/core.js` |
| 0.2% | 3.4ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/classic/schemas.js` |
| 0.1% | 1.9ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/schemas.js` |
| 0.1% | 1.8ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/state.js` |
| 0.0% | 1.2ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v4/core/checks.js` |
| 0.0% | 1.2ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/langgraph/dist/graph/graph.js` |
| 0.0% | 1.2ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v3/helpers/util.js` |
| 0.0% | 1.1ms | `node:child_process` |
| 0.0% | 1.1ms | `internal:util/inspect` |
| 0.0% | 1.1ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@img/colour/color.cjs` |
| 0.0% | 1.0ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/async_caller.js` |
| 0.0% | 1.0ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/structured_query/base.js` |
| 0.0% | 1.0ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/utils/sax-js/sax.js` |
| 0.0% | 1.0ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/langsmith/dist/utils/prompt_cache/index.js` |
| 0.0% | 1.0ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/detect-libc/lib/filesystem.js` |
| 0.0% | 1.0ms | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/mupdf/dist/mupdf.js` |
| 0.0% | 971us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/semver/classes/semver.js` |
| 0.0% | 936us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/core/dist/load/serializable.js` |
| 0.0% | 919us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/zod/v3/types.js` |
| 0.0% | 918us | `/home/azaz/Desktop/code/Buniyadbyte/Interns_work/saumil/pdf_extract/node_modules/@langchain/openai/node_modules/openai/resources/files.mjs` |
