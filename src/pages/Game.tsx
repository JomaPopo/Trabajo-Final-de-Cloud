import {Unity, useUnityContext} from "react-unity-webgl";

function Game() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/5JuegosCLOUD.loader.js",
        dataUrl: "/5JuegosCLOUD.data.unityweb",
        frameworkUrl: "/5JuegosCLOUD.framework.js.unityweb",
        codeUrl: "/5JuegosCLOUD.wasm.unityweb",
    });

    

    return (
        <>
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">Joma Games</h1>
                    <Unity unityProvider={unityProvider} className="centered-unity" />

                    <div className="centered-content">
                    </div>

                </div>
            </div>

        </>
    );
}


export default Game 