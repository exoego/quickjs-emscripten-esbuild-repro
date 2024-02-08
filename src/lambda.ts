import {Context} from "aws-lambda";
import {getQuickJS} from "quickjs-emscripten";

exports.handler = async function(event: any, context: Context): Promise<any> {
    const quickjs = await getQuickJS();
    return quickjs.getWasmMemory();
}
