<template>
    <div id="NotFoundComponent">
        <h1>Not Found</h1>
        <p>Página no encontrada</p>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'NotFoundComponent',
  data: function() {
    return {

    }
  },
  methods: {},
  computed: {
    ...mapState(['renderizar']),
  },
  watch: {},
  created() {
    this.$store.state.renderizar = false
  },
  unmounted() {
    this.$store.state.renderizar = true
  }
}
</script>

<style scoped>
#NotFoundComponent {
    letter-spacing: 1px;
    text-transform: uppercase;
}

p {
    font-size: 13px;
    letter-spacing: 3px;
}
</style>