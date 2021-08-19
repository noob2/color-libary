<template>
  <div>
    <AppBar @searchColor="searchColor" @changeView="changeView" />
    <div style="height:calc(98vh - 30px);overflow:auto;">
      <TableView v-if="tableView" :colors="sortedColors" @sort="setSortOrders" />
      <GridView v-else :colors="sortedColors" />
    </div>
  </div>
</template>

<script>
import libary from './json/library.json'
import { rgb2hsl } from '../colorConvert'

export default {
  name: 'ColorLibary',
  components: {
    GridView: () => import('./GridView.vue'),
    TableView: () => import('./TableView.vue'),
    AppBar: () => import('./AppBar.vue')
  },
  data: () => ({
    colors: [],
    tableView: false,
    search: '',
    sortColumn: '',
    sortOrder: 0
  }),
  mounted() {
    //array of the colors
    const colors = Object.entries(libary.colors).map(v => v[1])
    //adding H,S,L to each color
    colors.forEach(color => {
      const decimalRGB = color.value.match(/.{1,2}/g).map(el => parseInt(el, 16))
      ;[color.h, color.s, color.l] = rgb2hsl(decimalRGB)
    })
    //only valid
    this.colors = colors.filter(c => !isNaN(c.h))
  },
  computed: {
    sortedColors() {
      const filtered = this.search
        ? this.colors.filter(c => c.value.includes(this.search.toUpperCase()) || c.name.toUpperCase().includes(this.search.toUpperCase()))
        : this.colors
      const sorted = this.sortColumn
        ? filtered.sort((a, b) => {
            if (typeof a[this.sortColumn] == 'string') {
              return a[this.sortColumn].localeCompare(b[this.sortColumn])
            } else {
              return a[this.sortColumn] - b[this.sortColumn]
            }
          })
        : filtered
      const reverse = this.sortOrder ? sorted : sorted.reverse()
      return reverse
    }
  },
  methods: {
    searchColor(e) {
      this.search = e
    },
    changeView(e) {
      this.tableView = e
    },
    setSortOrders(column, order) {
      this.sortOrder = order
      this.sortColumn = column
    }
  }
}
</script>
