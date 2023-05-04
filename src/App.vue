<template>
  <div>
    <Navbar />
    <div class="app">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar,
  }
}
</script>

<style>
   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
      font-family: 'Roboto', sans-serif;
    }

    .app {
        padding: 20px;
    }
</style>
