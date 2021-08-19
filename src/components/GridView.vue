<template>
  <div class="container">
    <div
      class="item"
      :style="
        `background-color:#${color.value};
      color:${color.l < 50 ? 'whitesmoke' : 'black'}`
      "
      v-for="color in colors"
      :key="color.value"
    >
      <b>{{ color.name }}</b>
      <br />
      <b>#{{ color.value }}</b>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridView',
  props: {
    colors: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
.container {
  justify-content: center;
  display: grid;
  grid-template-columns: 16.66% 16.66% 16.66% 16.66% 16.66% 16.66%;
}
.item {
  aspect-ratio: 1;
  margin: 2%;
  border-radius: 2%;
}
</style>
