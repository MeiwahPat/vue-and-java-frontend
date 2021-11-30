<template>
  <el-menu
    class="categories"
    default-active="0"
    @select="handleSelect"
    active-text-color="red">
    <el-menu-item index="0">
      <i class="el-icon-menu"/>
      <span slot="title">全部</span>
    </el-menu-item>
    <el-menu-item v-for="(item) in library.categories" :key="item.id" :index="item.id + ''">
      <i class="el-icon-menu"/>
      <span slot="title">{{item.name}}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from 'vuex'

export default {
  name: 'SideMenu',
  data () {
    return {
      cid: ''
    }
  },
  computed: {
    ...mapState(['library'])
  },
  created () {
    this.$store.dispatch('getCategories')
  },
  methods: {
    handleSelect (key, keyPath) {
      this.cid = key
      this.$emit('indexSelect')
    }
  }
}
</script>

<style scoped>
  .categories {
    position: fixed;
    margin-left: 50%;
    left: -600px;
    top: 100px;
    width: 150px;
  }
</style>
