<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>

import Navbar from "./components/subcomponent/Navbar.vue"

export default {
  name: 'App',
  components: {
    Navbar,
  },
}
</script>