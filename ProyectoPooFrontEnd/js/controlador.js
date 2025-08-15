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

const guardarPantallaActual = (pantalla) => {
  sessionStorage.setItem("pantallaActual", pantalla);
}

const mostrarPantallaProyectos= () => {

  guardarPantallaActual("proyectos");
  
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
  guardarPantallaActual("perfil");

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
  guardarPantallaActual("cuenta");

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
  guardarPantallaActual("planes");

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
  guardarPantallaActual("preferencias");

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
  guardarPantallaActual("landigPage");

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
  
  if(sessionStorage.getItem("idUsuarioactual")){
    sessionStorage.setItem("idUsuarioactual", "");

  }
}



const renderizarEditorCodigo = () => {
  guardarPantallaActual("editor");
  
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

window.onload = () => {
  const pantalla = sessionStorage.getItem("pantallaActual");
  if (pantalla) {
    switch (pantalla) {
      case "proyectos":
        mostrarPantallaProyectos();
        break;
      case "perfil":
        mostrarPerfil();
        break;
      case "cuenta":
        mostrarCuenta();
        break;
      case "planes":
        mostrarPlanes();
        break;
      case "preferencias":
        mostrarPreferencias();
        break;
      case "editor":
        renderizarEditorCodigo();
        break;
      default:
        mostrarLandingPage();
    }
  } else {
    mostrarLandingPage(); // Por defecto
  }
};

const registrarUsuarios = async() => {
  const nombre = document.getElementById('signUp-nombre').value.trim();
  const emailInput = document.getElementById('signUp-email');
  const email = emailInput.value.trim().toLowerCase();
  const contraseña = document.getElementById('signUp-contraseña').value;

  // Validación del formato del email con regex
  const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (email && !emailRegex.test(email)) {
    alert("Por favor ingrese un email válido");
    emailInput.style.border = '2px solid red';
    emailInput.focus();
    return;
  } else {
    emailInput.style.border = '';
  }

  try {
    const registrarUsuario = async() => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, contraseña }),
        redirect: "follow"
      };
      const respuestaRegistro = await fetch("http://localhost:8000/codeMaker/registro",requestOptions );
      const data = await respuestaRegistro.json().catch(() => ({}));

      if (!respuestaRegistro.ok || !data.okk) {
        // Muestra el mensaje de error devuelto por la API
        alert(data.message || "No se pudo registrar");
        return;
      }
      
      // Éxito: cierra modal y manda a proyectos (o a editor si prefieres)
      mostrarPantallaProyectos();
      document.getElementById('signUp-nombre').value = "";
      document.getElementById('signUp-email').value = "";
      document.getElementById('signUp-contraseña').value = "";
      alert("Registro exitoso, bienvenido");
      }
      registrarUsuario();

  } catch (e) {
    console.error(e);
    alert("Error de red o servidor");
  }
}

const iniciarSesion = async () => {
  const email = document.getElementById('logIn-email').value.trim().toLowerCase();
  const contraseña = document.getElementById('logIn-contraseña').value;

  // Validación de campos vacíos
  if (!email || !contraseña) {
    alert("Email y contraseña son requeridos");
    return;
  }

  // Validación del formato del email con regex
  const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(email)) {
    alert("Por favor ingrese un email válido");
    return;
  }

  try {
    const buscarUsuario = async () => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, contraseña }),
        redirect: "follow"
      };
      const respuestaInicioSesion = await fetch("http://localhost:8000/codeMaker/inicioSesion", requestOptions);
      // Intenta parsear JSON aunque haya error 4xx/5xx
      const data = await respuestaInicioSesion.json();
      

      if (!respuestaInicioSesion.ok || data?.ok === false) {
        alert(data?.message || `Error ${respuestaInicioSesion.status}: No se pudo iniciar sesión`);
        return;
      }

      sessionStorage.setItem("idUsuarioactual", data.Usuario._id);
      
      // Éxito: cierra modal y manda a proyectos (o a editor si prefieres)
      //console.log(data);
      alert("Inicio de sesión exitoso, bienvenido " + (data.Usuario?.nombre || data.Usuario?.email || ""));
      mostrarPantallaProyectos();
      await cargarProyectos(data.Usuario._id);
      document.getElementById('logIn-email').value = "";
      document.getElementById('logIn-contraseña').value = "";
    }
    buscarUsuario();

  } catch (e) {
    console.error(e);
    alert("Error de red o servidor");
  }
}

const crearNuevoProyecto = async() => {
  const nombre = prompt("Nombre del proyecto:");
  if (!nombre || !nombre.trim()) return;
  
  // reemplaza por el id real del usuario logueado
  const idPropietario = sessionStorage.getItem("idUsuarioactual");
  if (!idPropietario) {
    alert("Primero inicia sesión para crear proyectos");
    return;
  }

  try {

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idPropietario, nombre }),
      redirect: "follow"
    }

    const respuestaNuevoProyecto = await fetch("http://localhost:8000/codeMaker/proyectos", requestOptions);
    const data = await respuestaNuevoProyecto.json().catch(() => ({}));

    if (!respuestaNuevoProyecto.ok || !data.ok) {
      alert(data.message || `Error ${respuestaNuevoProyecto.status}: No se pudo crear el proyecto`);
      return;
    }

    const proyecto = data.proyecto;
    // Guarda el proyecto actual y navega al editor
    localStorage.setItem("currentProjectId", proyecto._id);
    localStorage.setItem("currentProjectnombre", proyecto.nombre);

    // Si quieres, refresca la lista de tarjetas:
    //await cargarProyectos(idPropietario);

    // Abre el editor
    renderizarEditorCodigo();

  } catch (e) {
    console.error(e);
    alert("Error de red o servidor");
  }
}

const cargarProyectos = async(idPropietario) => {
  try {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    }
    const respuestaCargarProyectos = await fetch(`http://localhost:8000/codeMaker/proyectos/${idPropietario}`, requestOptions);
    const data = await respuestaCargarProyectos.json().catch(() => ({}));
    
    if (!respuestaCargarProyectos.ok || !data.ok) {
      alert(data.message || "No se pudieron cargar los proyectos");
      return;
    }
    console.log(data.proyectos.nombre)
    const cont = document.getElementById("contenedor-cards");
    cont.innerHTML = ""; // limpia
    
    data.proyectos.forEach(p => {
      cont.innerHTML +=
      `<div class="card">
          <div>
              <img src="img/img_referencia.webp" class="card-img-top" alt="...">
          </div>

          <div class="card-body">
              <h5 class="card-title">${data.proyectos.nombre}</h5>
              <button class="btn btn-danger">Eliminar</button>
          </div>
      </div>`  
    });
  } catch (e) {
    console.error(e);
    alert("Error de red o servidor");
  }
}

// function abrirProyecto(id, name) {
//   localStorage.setItem("currentProjectId", id);
//   localStorage.setItem("currentProjectName", name);
//   renderizarEditorCodigo();
// }

