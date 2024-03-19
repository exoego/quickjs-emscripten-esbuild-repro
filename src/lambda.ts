import {Context} from "aws-lambda";
import {getQuickJS} from "quickjs-emscripten";

const quickjs = await getQuickJS();
console.log(quickjs.getWasmMemory());
