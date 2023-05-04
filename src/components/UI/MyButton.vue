<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'my-button',
}
</script>

<style scoped>
    .btn {
        padding: 10px 15px;
        background-color: teal;
        color: white;
        border: none;
        border-radius: 30px;
        cursor: pointer;
    }
</style>