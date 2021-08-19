<template>
  <div id="app">
    <ColorLibary />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    ColorLibary: () => import('./components/ColorLibary.vue')
  }
}
</script>
<style>
body {
  background-color: rgb(25 25 29);
}

/* scrollbar styles */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #000000;
}
::-webkit-scrollbar-thumb {
  background: #888;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
