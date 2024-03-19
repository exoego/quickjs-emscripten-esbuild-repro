import {getQuickJS} from "quickjs-emscripten";

const handler = async () => {
    const quickjs = await getQuickJS();
    console.log(quickjs.newRuntime());
}

handler()
