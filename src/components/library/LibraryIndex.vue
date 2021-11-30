<template>
  <el-container>
    <el-aside style="width: 200px; margin-top: 20px; ">
      <switch/>
      <side-menu ref="sideMenu" @indexSelect="listByCategory"/>
    </el-aside>
    <el-main>
      <books class="books-area" ref="booksArea"/>
    </el-main>
  </el-container>
</template>

<script>
import SideMenu from './SideMenu'
import Books from './Books'
export default {
  name: 'LibraryIndex',
  components: {Books, SideMenu},
  data () {
    return {

    }
  },
  methods: {
    listByCategory () {
      var _this = this
      var cid = this.$refs.sideMenu.cid
      var url = 'categories/' + cid + '/books'
      this.$axios.get(url).then(resp => {
        if (resp && resp.status === 200) {
          _this.$refs.booksArea.books = resp.data
        }
      })
    }
  }
}
</script>

<style scoped>
.books-area {
  width: 990px;
  margin-left: auto;
  margin-right: auto;
}
</style>
