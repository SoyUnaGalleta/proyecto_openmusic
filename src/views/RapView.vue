<template>
  <div class="RapView">
    <div class="contenedor">
      <div class="tajeta" v-for="(info,index) in musica.rap" :key="index">
        <div class="nomArtista">{{ info.artist }}</div>
        <div class="contenedorImg"><img :src="info.image" alt="info.album" class="imgAlbum"></div>
        <div class="nomAlbum">{{ info.album }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'RapView',
  data: function() {
    return {

    }
  },
  methods: {},
  computed: {
    ...mapState(['musica']),
  },
  watch: {}
}
</script>

<style scoped>
.contenedor {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.tajeta{
  background-color: rgba(0, 0, 0, 0.8);
  margin: 20px;
  padding: 25px;
  width: 150px;
}
.contenedorImg {
  height: 150px;;
  width: 100%;
}
.imgAlbum {
  width: 100%;
  height: 100%;
  object-fit: cover;

}

.nomArtista {
  font-weight: bold;
  margin-bottom: 20px;
}

.nomAlbum {
  margin-top: 20px;
  font-size: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
}
</style>