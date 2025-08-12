
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

const navOriginal = document.querySelector("nav").innerHTML;
const mainOriginal = document.querySelector("main").innerHTML;

const abrirModal = (boton) => {
  const loginModal = new bootstrap.Modal(document.getElementById('login-modal'));
  const singUpModal = new bootstrap.Modal(document.getElementById('singUp-modal'));

  if (boton.id === 'boton-formulario-iniciarSesion') {
    loginModal.show();
  } else if (boton.id === 'boton-formulario-registro') {
    singUpModal.show();
  }
};

const mostrarPantallaProyectos= () => {
  
  const loginModalEl = document.getElementById('login-modal');
  const signUpModalEl = document.getElementById('singUp-modal');

  const loginModal = bootstrap.Modal.getInstance(loginModalEl);
  const signUpModal = bootstrap.Modal.getInstance(signUpModalEl);

  if (loginModal) loginModal.hide();
  if (signUpModal) signUpModal.hide();
  
  document.getElementById('pantall-principal').style.display = "none";
  document.getElementById('pantalla-administrativa').style.display = "block";
  document.getElementById('seccion-proyectos').style.display = "block";
  document.getElementById('seccion-perfil').style.display = "none";
  document.getElementById('seccion-cuanta').style.display = "none";
  document.getElementById('seccion-planes').style.display = "none";
  document.getElementById('seccion-preferencias').style.display = "none";
  
}

const mostrarPerfil= () => {
  document.getElementById('pantall-principal').style.display = "none";
  document.getElementById('pantalla-administrativa').style.display = "block";
  document.getElementById('seccion-proyectos').style.display = "none";
  document.getElementById('seccion-perfil').style.display = "block";
  document.getElementById('seccion-cuanta').style.display = "none";
    document.getElementById('seccion-planes').style.display = "none";
  document.getElementById('seccion-preferencias').style.display = "none";
}

const mostrarCuenta= () => {
  document.getElementById('pantall-principal').style.display = "none";
  document.getElementById('pantalla-administrativa').style.display = "block";
  document.getElementById('seccion-proyectos').style.display = "none";
  document.getElementById('seccion-perfil').style.display = "none";
  document.getElementById('seccion-cuanta').style.display = "block";
  document.getElementById('seccion-planes').style.display = "none";
  document.getElementById('seccion-preferencias').style.display = "none";
}

const mostrarPlanes= () => {
  document.getElementById('pantall-principal').style.display = "none";
  document.getElementById('pantalla-administrativa').style.display = "block";
  document.getElementById('seccion-proyectos').style.display = "none";
  document.getElementById('seccion-perfil').style.display = "none";
  document.getElementById('seccion-cuanta').style.display = "none";
  document.getElementById('seccion-planes').style.display = "block";
  document.getElementById('seccion-preferencias').style.display = "none";
}

const mostrarPreferencias= () => {
  document.getElementById('pantall-principal').style.display = "none";
  document.getElementById('pantalla-administrativa').style.display = "block";
  document.getElementById('seccion-proyectos').style.display = "none";
  document.getElementById('seccion-perfil').style.display = "none";
  document.getElementById('seccion-cuanta').style.display = "none";
  document.getElementById('seccion-planes').style.display = "none";
  document.getElementById('seccion-preferencias').style.display = "block";
}

// const mostrarPlanes= () => {
//   document.getElementById('seccion-proyectos').style.display = "none";
//   document.getElementById('seccion-perfil').style.display = "none";
//   document.getElementById('seccion-cuanta').style.display = "block";
//   document.getElementById('seccion-preferencias').style.display = "none";
// }

const mostrarLandingPage= () => {
  document.getElementById('pantall-principal').style.display = "block";
  document.querySelector("nav").innerHTML = navOriginal; // Opcional: puedes volver a cargar el nav original si quieres
  document.querySelector("main").innerHTML = mainOriginal; // Borra el editor
  document.getElementById("pantall-principal").style.display = "block";
  document.getElementById("pantalla-administrativa").style.display = "none";

  // document.getElementById('Landing-nav').style.display = "block";
  // document.getElementById('editor-nav-nav').style.display = "none";
  document.getElementById('seccion-proyectos').style.display = "none";
  document.getElementById('seccion-perfil').style.display = "none";
  document.getElementById('seccion-cuanta').style.display = "none";
  document.getElementById('seccion-planes').style.display = "none";
  document.getElementById('seccion-preferencias').style.display = "block";
}



const renderizarEditorCodigo = () => {
  document.getElementById('pantall-principal').style.display = "block";
  document.getElementById("Landing-page").style.display = "none";
  document.getElementById('pantalla-administrativa').style.display = "none";
  document.getElementById('seccion-proyectos').style.display = "none";
  document.getElementById('seccion-perfil').style.display = "none";
  document.getElementById('seccion-cuanta').style.display = "none";
  document.getElementById('seccion-planes').style.display = "none";
  document.getElementById('seccion-preferencias').style.display = "none";
  document.querySelector("nav").innerHTML = 
  `<section id="editor-nav" style="display: block;">
      <div class="Landingpage-nav">
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
          <div class="seccion-derecha-navegacion">
                  <Button><i id="icono-nube" class=" fa-chisel fa-regular fa-cloud"></i>Guardar</Button>
                  <div class="btn-group">
                  <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fa-solid fa-bars"></i>
                  </button>
                  <ul class="dropdown-menu">
                      <li onclick="mostrarPerfil()"><a class="dropdown-item" href="#">Perfil</a></li>
                      <li onclick="mostrarPreferencias()"><a class="dropdown-item" href="#">Ajustes</a></li>
                      <li onclick="mostrarLandingPage()"><a class="dropdown-item" href="#">Cerrar sesion</a></li>
                  </ul>
              </div>
          </div>
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
                                <textarea id="editor-html"></textarea>
                            </div>
                        </section>
                    </div>
                    <div class="col">
                        <section id="css" class="altura-editores">
                            <div>
                                <span>CSS</span>
                            </div>
                            <div class="contenedor-codigo">
                                <textarea id="editor-css"></textarea>
                            </div>
                        </section>
                    </div>
                    <div class="col">
                        <section id="javascript" class="altura-editores">
                            <div>
                                <span>JAVASCRIPT</span>
                            </div>
                            <div class="contenedor-codigo">
                                <textarea id="editor-js"></textarea>
                            </div>
                        </section>
                    </div>
                </div>
                <div>
                    <iframe id="resultado-codigo" src="" frameborder="0"></iframe>
                </div>

        </section>`;
};

window.addEventListener('DOMContentLoaded', () => {
      CodeMirror.fromTextArea(document.getElementById('editor-html'), {
        mode: 'htmlmixed',
        lineNumbers: true,
      });

      CodeMirror.fromTextArea(document.getElementById('editor-css'), {
        mode: 'css',
        lineNumbers: true,
      });

      CodeMirror.fromTextArea(document.getElementById('editor-js'), {
        mode: 'javascript',
        lineNumbers: true,
      });
    });
