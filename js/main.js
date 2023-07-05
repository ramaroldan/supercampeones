document.getElementById(
  "header"
).innerHTML = `<nav class="navbar navbar-expand-sm navbar-light bg-light">
<div class="container">
<a class="navbar-brand" href="index.html"><img src="./img/logo.png" alt="" style="height: 3rem;"></a>
<button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
  aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="collapsibleNavId">
  <ul class="navbar-nav me-auto mt-2 mt-lg-0">
    <li class="nav-item">
      <a class="nav-link active" href="index.html" aria-current="page" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color:#191c32;">HOME<span class="visually-hidden">(current)</span></a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color:#191c32;">ÁLBUM</a>
      <div class="dropdown-menu" aria-labelledby="dropdownId">
        <a class="dropdown-item" href="jugadores.html">Mostrar jugadores</a>
        <a class="dropdown-item" href="jugador_editar.html">Editar jugador</a>
        <a class="dropdown-item" href="jugador_nuevo.html">Crear jugador</a>
      </div>
    </li>
  </ul>
  <form class="d-flex my-2 my-lg-0" >
    <input class="form-control me-sm-2" type="text" placeholder="Search" >
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" style="color:#191c32; border-color:#191c32;">Search</button>
  </form>
</div>
</div>
</nav>`;

document.getElementById(
  "footer"
).innerHTML = `<section id="footer_info" style="background-color: rgba(252, 252, 252, 0.8);
padding: 1rem;  display: flex; justify-content: space-evenly;">
<section>
  <nav class="info_foot" style="width: 35rem; display: inline-flex; justify-content: space-evenly;">
    <a href="#" class="links_foot"  style="color: #2b3055; text-decoration: none; padding: 1rem;" >Política de privacidad</a>
    <a href="#" class="links_foot"  style="color: #2b3055; text-decoration: none; padding: 1rem;">Política de cookies</a>
    <a href="#" class="links_foot"  style="color: #2b3055; text-decoration: none; padding: 1rem;">Condiciones de uso</a>
  </nav>
</section>
<section>
  <nav class="redes">
    <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram" style="font-size: 2rem; color: #2b3055; padding: 1rem;"></i></a>
    <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook" style="font-size: 2rem; color: #2b3055; padding: 1rem;"></i></a>
    <a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter-square" style="font-size: 2rem; color: #2b3055; padding: 1rem;"></i></a>
  </nav>
</section>
</section>
<section id="copyright_section" style="text-align: center; color: #2b3055;">
<p>
  &copy; Copyright 2023 Supercampeones. Todos los derechos reservados.
</p>
</section>`;
