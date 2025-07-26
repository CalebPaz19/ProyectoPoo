
 /* CodeMirror.fromTextArea(document.getElementById("editor-html"), {
    lineNumbers: true,
    mode: "htmlmixed",
    theme: "default"
  });

  CodeMirror.fromTextArea(document.getElementById("editor-css"), {
    lineNumbers: true,
    mode: "css",
    theme: "default"
  });

  CodeMirror.fromTextArea(document.getElementById("editor-js"), {
    lineNumbers: true,
    mode: "javascript",
    theme: "default"
  });*/


const renderizarEditorCodigo = () => {
  document.getElementById("Landing-page").style.display = "none";
  document.querySelector("nav").innerHTML = 
  `<section id="editor-nav" class="Landingpage-nav">
                <div class="Landingpage-nav-div">
                    <svg xmlns="http://www.w3.org/2000/svg" width="410" height="48" viewBox="0 0 260 48" fill="none">

                        
                        <polygon points="24,0 48,24 24,48 0,24" fill="#007BFF"/>
                        <path d="M18 12 L10 24 L18 36" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" fill="none"/>
                        <path d="M30 12 L38 24 L30 36" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" fill="none"/>

                                                <text x="64" y="32" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="600">
                        <tspan fill="#FFFFFF">Nombre</tspan>
                        <tspan fill="#FFFFFF" dx="4">del</tspan>
                        <tspan fill="#007BFF" dx="4">Proyecto</tspan>
                        </text>
                    </svg>
                </div>
                <div class="Landingpage-nav-div">
                    <ul>
                        <li><Button><i id="icono-nube" class=" fa-chisel fa-regular fa-cloud"></i>Guardar</Button></li>
                        <li><i class="fa-solid fa-bars"></i></li>
                    </ul>
                </div>
            </section>`;
  document.querySelector("main").innerHTML = 
  `<section id="editor-codigo">
                <div id="contenedor-editores"  class="row">
                    <div class="col">
                        <section id="html" class="altura-editores">
                            <div>
                                <span>HTML</span>
                            </div>
                            <div class="contenedor-codigo">
                                <div id="editor-html" class="editor-texto" contenteditable="true"></div>
                            </div>
                        </section>
                    </div>
                    <div class="col">
                        <section id="css" class="altura-editores">
                            <div>
                                <span>CSS</span>
                            </div>
                            <div class="contenedor-codigo">
                                <div id="editor-css" class="editor-texto" contenteditable="true"></div>
                            </div>
                        </section>
                    </div>
                    <div class="col">
                        <section id="javascript" class="altura-editores">
                            <div>
                                <span>JAVASCRIPT</span>
                            </div>
                            <div class="contenedor-codigo">
                                <div id="editor-js" class="editor-texto" contenteditable="true"></div>
                            </div>
                        </section>
                    </div>
                </div>
                <div>
                    <iframe id="resultado-codigo" src="" frameborder="0"></iframe>
                </div>

        </section>`;
};
