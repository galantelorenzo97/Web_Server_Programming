<template>
  <div id="app">
      <myNav></myNav>
    <router-view/>
  </div>
</template>

<script>
import myNav from "@/components/Nav.vue";

export default {
  components: {
    myNav
  }
}
</script>

<style lang="scss">

</style>
