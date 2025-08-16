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
  const idPropietario = sessionStorage.getItem("idUsuarioactual");

  if (!idPropietario) {
    alert("Primero debes iniciar sesión para ver tus proyectos");
    mostrarLandingPage();
    return; // no sigas mostrando la sección proyectos
  }

  // Si hay usuario, sí cargamos proyectos
  cargarProyectos(idPropietario);
  
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
  const cont = document.getElementById("contenedor-cards");
  cont.innerHTML = ""; // limpia

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
  // Obtener elementos del DOM (solo lo necesario para errores)
  const nombreInput = document.getElementById('signUp-nombre');
  const emailInput = document.getElementById('signUp-email');
  const contraseñaInput = document.getElementById('signUp-contraseña');
  const nombreError = document.getElementById('signUp-nombre-error');
  const emailError = document.getElementById('signUp-email-error');
  const contraseñaError = document.getElementById('signUp-contraseña-error');

  // Limpiar errores previos
  nombreError.innerHTML = '';
  emailError.innerHTML = '';
  contraseñaError.innerHTML = '';
  nombreInput.classList.remove('input-error');
  emailInput.classList.remove('input-error');
  contraseñaInput.classList.remove('input-error');

  // Valores originales (sin cambios)
  const nombre = nombreInput.value.trim();
  const email = emailInput.value.trim().toLowerCase();
  const contraseña = contraseñaInput.value;

  // Validación de campos vacíos (solo cambio en cómo se muestran errores)
  if (!nombre || !email || !contraseña) {
    if (!nombre) {
      nombreError.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Nombre es requerido';
      nombreInput.classList.add('input-error');
    }
    if (!email) {
      emailError.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Email es requerido';
      emailInput.classList.add('input-error');
    }
    if (!contraseña) {
      contraseñaError.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Contraseña es requerida';
      contraseñaInput.classList.add('input-error');
    }
    return;
  }

  // Validación del formato del email (solo cambio en cómo se muestra el error)
  const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(email)) {
    emailError.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Por favor ingrese un email válido';
    emailInput.classList.add('input-error');
    emailInput.focus();
    return;
  }

  // El resto de tu código permanece EXACTAMENTE igual
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
        // Cambio mínimo: Mostrar error en div en lugar de alert
        emailError.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> ${data.message || "No se pudo registrar"}`;
        emailInput.classList.add('input-error');
        return;
      }
      
      // Éxito (sin cambios)
      mostrarPantallaProyectos();
      document.getElementById('signUp-nombre').value = "";
      document.getElementById('signUp-email').value = "";
      document.getElementById('signUp-contraseña').value = "";
      alert("Registro exitoso, bienvenido");
    }
    registrarUsuario();

  } catch (e) {
    console.error(e);
    // Cambio mínimo: Mostrar error en div en lugar de alert
    emailError.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Error de red o servidor';
    emailInput.classList.add('input-error');
  }
}

const iniciarSesion = async () => {
  const emailInput = document.getElementById('logIn-email');
  const contraseñaInput = document.getElementById('logIn-contraseña');
  const emailError = document.getElementById('logIn-email-error');
  const contraseñaError = document.getElementById('logIn-contraseña-error'); 

  // Limpiar errores previos
  emailError.innerHTML = '';
  contraseñaError.innerHTML = '';
  emailInput.classList.remove('input-error');
  contraseñaInput.classList.remove('input-error');

  // Valores originales
  const email = emailInput.value.trim().toLowerCase();
  const contraseña = contraseñaInput.value;

  if (!email || !contraseña) {
    if (!email) {
      emailError.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Email es requerido';
      emailInput.classList.add('input-error');
    }
    if (!contraseña) {
      contraseñaError.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Contraseña es requerida';
      contraseñaInput.classList.add('input-error');
    }
    return;
  }

  // Validación del formato del email
  const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(email)) {
    emailError.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Por favor ingrese un email válido';
    emailInput.classList.add('input-error');
    emailInput.focus();
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
      const data = await respuestaInicioSesion.json();
      

      if (!respuestaInicioSesion.ok || data?.ok === false) {
        // Cambio mínimo: Mostrar error en div en lugar de alert
        contraseñaError.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> ${data?.message || `Error ${respuestaInicioSesion.status}: No se pudo iniciar sesión`}`;
        emailInput.classList.add('input-error');
        return;
      }

      sessionStorage.setItem("idUsuarioactual", data.Usuario._id);
      
      // Éxito (sin cambios)
      alert("Inicio de sesión exitoso, bienvenido " + (data.Usuario?.nombre || data.Usuario?.email || ""));
      mostrarPantallaProyectos();
      await cargarProyectos(data.Usuario._id);
      emailInput.value = "";
      contraseñaInput.value = "";
    }
    buscarUsuario();

  } catch (e) {
    console.error(e);
    // Cambio mínimo: Mostrar error en div en lugar de alert
    emailError.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Error de red o servidor';
    emailInput.classList.add('input-error');
  }
}

const crearNuevoProyecto = async() => {
  const modal = new bootstrap.Modal(document.getElementById('crearProyectoModal'));
  const nombreInput = document.getElementById('nombreProyectoInput');
  const errorDiv = document.getElementById('nombreProyectoError');
  
  // Limpiar estado previo
  nombreInput.value = '';
  errorDiv.textContent = '';
  nombreInput.classList.remove('input-error');
  
  // Mostrar modal y esperar respuesta
  return new Promise((resolve) => {
    // Función para manejar la respuesta
    const handleResponse = async (nombre) => {
      if (!nombre) return resolve();
      
      // Verificar sesión de usuario
      const idPropietario = sessionStorage.getItem("idUsuarioactual");
      if (!idPropietario) {
        // Mostrar error en la modal
        errorDiv.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Primero inicia sesión para crear proyectos';
        nombreInput.classList.add('input-error');
        modal.show(); // Volver a mostrar la modal
        return resolve();
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
          // Mostrar error del servidor en la modal
          errorDiv.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> ${data.message || `Error ${respuestaNuevoProyecto.status}: No se pudo crear el proyecto`}`;
          nombreInput.classList.add('input-error');
          modal.show(); // Volver a mostrar la modal
          return resolve();
        }

        const proyecto = data.proyecto;
        localStorage.setItem("proyectoActualtId", proyecto._id);

        // Si quieres, refresca la lista de tarjetas:
        await cargarProyectos(idPropietario);

        // Abre el editor
        renderizarEditorCodigo();

      } catch (e) {
        console.error(e);
        // Mostrar error en la modal
        errorDiv.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Error de red o servidor';
        nombreInput.classList.add('input-error');
        modal.show(); // Volver a mostrar la modal
      } finally {
        resolve();
      }
    };
    
    // Configurar evento del botón Crear
    document.getElementById('btnConfirmarCrearProyecto').onclick = () => {
      const nombre = nombreInput.value.trim();
      
      if (!nombre) {
        errorDiv.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> El nombre del proyecto es requerido';
        nombreInput.classList.add('input-error');
        return;
      }
      
      modal.hide();
      handleResponse(nombre);
    };
    
    // Configurar evento al cerrar modal
    modal._element.addEventListener('hidden.bs.modal', () => {
      handleResponse(null); 
    });
    
    modal.show();
  });
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
              <h5 class="card-title">${p.nombre}</h5>
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