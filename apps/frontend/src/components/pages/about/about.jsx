import React from "react";
import '../about/about.css';

function About() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-5 p-5">
                    <div className="p-5">
                        <div className="p-5">
                            <h2 className="card-title">
                                Se uso herramientas para la parte del diseño una de ellas es:
                            </h2>
                        </div>
                        <div className="mockup-browser border border-base-300">
                            <div className="mockup-browser-toolbar">
                                <div className="input border border-base-300 url">https://daisyui.com/</div>
                            </div>
                            <div className="flex justify-center px-4 py-16 border-t border-base-300">Con esta Herramienta Ayudo a completar los detalles de diseño ademas de usar bootstrap</div>
                        </div>
                    </div>
                </div>
                <div className="col-5 p-5">
                    <div className="p-5">
                        <div className="p-5">
                            <h2 className="card-title">Hacerca de la Instalacion de paquetes de Recurso</h2>
                        </div>
                        <div className="mockup-code">
                            <pre data-prefix="$"><code>npm install zustand</code></pre>
                            <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
                            <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
                        </div>
                        <div className="p-5">
                            <h2 className="card-title">
                                Instalacion Turborepo
                            </h2>
                        </div>
                        <div className="mockup-code">
                            <pre data-prefix="$"><code>npm install turbo</code></pre>
                            <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
                            <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;