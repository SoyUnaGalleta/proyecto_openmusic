<template>
  <div id="banner">
      <h1>Open Music</h1>
  </div>
  <div id="fondo">
    <div v-if="renderizar">
      <p>Número de albumes: {{ contarAlbumes }} </p>
    </div>
    <nav>
      <router-link to="/">Rock</router-link>
      <router-link to="/pop">Pop</router-link>
      <router-link to="/rap">Rap</router-link>
    </nav>
    <div  v-if="renderizar">
      <h2>Agregar un nuevo album</h2>
      <form>

        <label for="txtArtista">Artista</label>
        <input type="txt" id="txtArtista" v-model="form.artist">

        <label for="txtAlbum">Album</label>
        <input type="txt" id="txtAlbum" v-model="form.album"><br><br>

        <label for="txtImagen">Imagen</label>
        <input type="txt" id="txtImagen" v-model="form.image">

        <label for="txtGenero">Genero</label>
        <select name="txtGenero" id="txtGenero" v-on:change="asignarGenero">
          <option value="" selected disabled hidden>Elige un genero</option>
          <option value="rock">Rock</option>
          <option value="pop">Pop</option>
          <option value="rap">Rap</option>
        </select><br>

        <button @click.prevent="enviarDatos">Agregar</button>

      </form>
    </div>

    <router-view/>

  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'app',
  data: function() {
    return {
      form: {
        artist: "",
        category: "",
        album: "",
        image: ""
      }

    }
  },
  methods: {
    asignarGenero: function() {
      let opcion = document.getElementById('txtGenero').value
      this.form.category = opcion
    },
    enviarDatos: function() {
      let opcion = document.getElementById('txtGenero').value
      let data = {...this.form}
      if (
        this.form.artist != ""
        && this.form.category != ""
        && this.form.album != ""
        && this.form.image != ""
        && opcion != ""
      ) {
        this.$store.commit('ADD_ALBUM', data)
        this.clean()
      }
    },
    clean: function() {
      let opcion = document.getElementById('txtGenero').value
      this.form.artist = ""
      this.form.category = ""
      this.form.album = ""
      this.form.image = ""
      opcion = ""
    }
  },
  computed: {
    ...mapGetters(['contarAlbumes']),
    ...mapState(['renderizar']),
  },
  watch: {},
  created() {
    /*let url= 'musica.json';
    fetch(url)
    .then( respuesta => respuesta.json() )
    .then( objetoJson => {
      this.$store.state.musica = objetoJson
      
    })
    .catch(error => {
      console.log('Error: ', error);
    })
    */
  }
}
</script>

<style>
#app {
  background-image: url('assets/conciertos.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100dvh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  padding:1px;
}

#fondo {
  background-color: rgba(0, 0, 0, 0.75);
  margin: 20px auto;
  padding: 30px;
  width: 90%;
}

#banner {
  font-size: 35px;
  letter-spacing: 1px;
  text-shadow: -3px -3px #be769e, 3px 3px #7e2f51;
  text-transform: uppercase;
}

#banner h1 {
  margin: 30px 0px 0px 0px;
  padding: 0px;
}

nav {
  padding: 10px;
}

nav a {
  display: inline-block;
  background-color: #111;
  box-shadow: 0px 0px 8px #111;
  border-radius: 10px;
  margin: 10px 10px 20px 10px;
  padding: 15px 20px;
  width: 150px;
  color:  #7e2f51 ;
  font-weight: bold;
  text-decoration-line: none;
  text-transform: uppercase;
}

nav a.router-link-exact-active {
  color:  #be769e;
}

label {
  margin: 0px 10px;
}

button {
  color: #fff;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;
  background-color: rgba(0, 0, 0, 0.4);
  margin: 20px 0px 10px 0px;
  padding: 15px 20px;
  transition-duration: 0.5s;
}

button:hover {
  background-color: rgba(0, 0, 0, 1);
  transition-duration: 0.5s;
}
</style>
