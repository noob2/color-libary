<template>
  <div style="justify-content:space-between;display:flex;margin-bottom:8px">
    <span style="color:white;cursor:pointer">
      <icon size="lg" icon="bars" v-if="!checked" @click="checked = true" />
      <icon size="lg" icon="th" v-else @click="checked = false" />
    </span>
    <input class="search" v-model="search" @input="onInput" placeholder="Color search" />
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'AppBar',
  data: () => ({
    search: '',
    checked: false
  }),
  watch: {
    checked(val) {
      this.$emit('changeView', val)
    }
  },
  methods: {
    onInput: _.debounce(function() {
      this.$emit('searchColor', this.search)
    }, 700)
  }
}
</script>

<style scoped>
.search {
  padding: 2px;
  font-size: 15px;
  border-width: 0px;
  border-radius: 4px;
  background-color: #5c595c;
  width: 25%;
}
</style>
