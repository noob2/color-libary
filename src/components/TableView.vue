<template>
  <div class="container">
    <table>
      <tr class="table-header">
        <th>
          Material name
          <icon class="arrow" icon="long-arrow-alt-up" @click="e => sort('name', 1, e)" />
          &nbsp;
          <icon class="arrow" icon="long-arrow-alt-down" @click="e => sort('name', 0, e)" />
        </th>
        <th>
          Hue
          <icon class="arrow" icon="long-arrow-alt-up" @click="e => sort('h', 1, e)" />
          &nbsp;
          <icon class="arrow" icon="long-arrow-alt-down" @click="e => sort('h', 0, e)" />
        </th>
        <th>
          Luminocity
          <icon class="arrow" icon="long-arrow-alt-up" @click="e => sort('l', 1, e)" />
          &nbsp;
          <icon class="arrow" icon="long-arrow-alt-down" @click="e => sort('l', 0, e)" />
        </th>
        <th>
          Saturation
          <icon class="arrow" icon="long-arrow-alt-up" @click="e => sort('s', 1, e)" />
          &nbsp;
          <icon class="arrow" icon="long-arrow-alt-down" @click="e => sort('s', 0, e)" />
        </th>
      </tr>
      <tr v-for="color in colors" :key="color.value">
        <td style="display: flex;">
          <span class="item" :style="`background-color:#${color.value};`" />
          <span class="center">
            {{ color.name }}
            <br />
            #{{ color.value }}
          </span>
        </td>
        <td>{{ Math.round(color.h) }}</td>
        <td>{{ Math.round(color.l) }}%</td>
        <td>{{ Math.round(color.s) }}%</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableView',
  props: {
    colors: {
      type: Array,
      default: []
    }
  },
  methods: {
    sort(column, order, e) {
      document.getElementsByClassName('arrow').forEach(arrow => {
        arrow.style.color = 'whitesmoke'
      })
      e.currentTarget.style.color = 'green'
      this.$emit('sort', column, order)
    }
  }
}
</script>

<style scoped>
.item {
  margin: 8px 60px 8px 8px;
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 3%;
}
table {
  border-collapse: collapse;

  color: whitesmoke;
  width: 100%;
}
.table-header {
  text-align: left;
  border-bottom: 1px solid;
  border-top: 1px solid;
  height: 34px;
}
.arrow {
  cursor: pointer;
}
.center {
  margin: auto 0;
}
</style>
