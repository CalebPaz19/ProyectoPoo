let editorHTML = null;
let editorCSS = null;
let editorJS = null;

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
  document.getElementById('Landing-nav').style.display = "none";
  document.getElementById('Landing-page').style.display = "none";
  document.getElementById('editor-nav').style.display = "none";
  document.getElementById('seccion-editor-codigo').style.display = "none";
  document.getElementById('pantalla-administrativa').style.display = "block";
  document.getElementById('seccion-proyectos').style.display = "block";
  document.getElementById('seccion-perfil').style.display = "none";
  document.getElementById('seccion-cuanta').style.display = "none";
  document.getElementById('seccion-planes').style.display = "none";
  document.getElementById('seccion-preferencias').style.display = "none";
  
}

const mostrarPerfil= () => {
  document.getElementById('pantall-principal').style.display = "none";
  document.getElementById('Landing-nav').style.display = "none";
  document.getElementById('Landing-page').style.display = "none";
  document.getElementById('editor-nav').style.display = "none";
  document.getElementById('seccion-editor-codigo').style.display = "none";
  document.getElementById('pantalla-administrativa').style.display = "block";
  document.getElementById('seccion-proyectos').style.display = "none";
  document.getElementById('seccion-perfil').style.display = "block";
  document.getElementById('seccion-cuanta').style.display = "none";
    document.getElementById('seccion-planes').style.display = "none";
  document.getElementById('seccion-preferencias').style.display = "none";
}

const mostrarCuenta = () => {
  document.getElementById('pantall-principal').style.display = "none";
  document.getElementById('Landing-nav').style.display = "none";
  document.getElementById('Landing-page').style.display = "none";
  document.getElementById('editor-nav').style.display = "none";
  document.getElementById('seccion-editor-codigo').style.display = "none";
  document.getElementById('pantalla-administrativa').style.display = "block";
  document.getElementById('seccion-proyectos').style.display = "none";
  document.getElementById('seccion-perfil').style.display = "none";
  document.getElementById('seccion-cuanta').style.display = "block";
  document.getElementById('seccion-planes').style.display = "none";
  document.getElementById('seccion-preferencias').style.display = "none";
}

const mostrarPlanes= () => {
  document.getElementById('pantall-principal').style.display = "none";
  document.getElementById('Landing-nav').style.display = "none";
  document.getElementById('Landing-page').style.display = "none";
  document.getElementById('editor-nav').style.display = "none";
  document.getElementById('seccion-editor-codigo').style.display = "none";
  document.getElementById('pantalla-administrativa').style.display = "block";
  document.getElementById('seccion-proyectos').style.display = "none";
  document.getElementById('seccion-perfil').style.display = "none";
  document.getElementById('seccion-cuanta').style.display = "none";
  document.getElementById('seccion-planes').style.display = "block";
  document.getElementById('seccion-preferencias').style.display = "none";
}

const mostrarPreferencias= () => {
  document.getElementById('pantall-principal').style.display = "none";
  document.getElementById('Landing-nav').style.display = "none";
  document.getElementById('Landing-page').style.display = "none";
  document.getElementById('editor-nav').style.display = "none";
  document.getElementById('seccion-editor-codigo').style.display = "none";
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
  document.getElementById('Landing-nav').style.display = "block";
  document.getElementById('Landing-page').style.display = "block";
  document.getElementById('editor-nav').style.display = "none";
  document.getElementById('seccion-editor-codigo').style.display = "none";
  document.getElementById('pantalla-administrativa').style.display = "none";
  document.getElementById('seccion-proyectos').style.display = "none";
  document.getElementById('seccion-perfil').style.display = "none";
  document.getElementById('seccion-cuanta').style.display = "none";
  document.getElementById('seccion-planes').style.display = "none";
  document.getElementById('seccion-preferencias').style.display = "none";
}



const renderizarEditorCodigo = () => {
  
  document.getElementById('pantall-principal').style.display = "block";
  document.getElementById('Landing-nav').style.display = "none";
  document.getElementById('Landing-page').style.display = "none";
  document.getElementById('editor-nav').style.display = "block";
  document.getElementById('seccion-editor-codigo').style.display = "block";
  document.getElementById('pantalla-administrativa').style.display = "none";
  document.getElementById('seccion-proyectos').style.display = "none";
  document.getElementById('seccion-perfil').style.display = "none";
  document.getElementById('seccion-cuanta').style.display = "none";
  document.getElementById('seccion-planes').style.display = "none";
  document.getElementById('seccion-preferencias').style.display = "none";
  crearEditores();
  
};

const crearEditores = () => {
  if (!editorHTML) {
    editorHTML = CodeMirror.fromTextArea(document.getElementById('editor-html'), {
      mode: 'htmlmixed',
      lineNumbers: true
    });
  }

  if (!editorCSS) {
    editorCSS = CodeMirror.fromTextArea(document.getElementById('editor-css'), {
      mode: 'css',
      lineNumbers: true
    });
  }

  if (!editorJS) {
    editorJS = CodeMirror.fromTextArea(document.getElementById('editor-js'), {
      mode: 'javascript',
      lineNumbers: true
    });
  }
};

