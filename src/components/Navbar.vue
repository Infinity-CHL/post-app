<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <my-button
        @click="$router.push('/posts')"
        style="margin-right: 10px"
      >
        Посты
      </my-button>
      <my-button
        @click="$router.push('/about')"
      >
        О сайте
      </my-button>
      <my-button
        @click="$router.push('/store')"
      >
        Store
      </my-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
  padding: 0 10px;
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
}

.navbar__btns {
  margin-left: auto;
}
</style>
