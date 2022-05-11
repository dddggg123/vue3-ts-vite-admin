<template>
  <div class="table-container">
    <el-table :data="bookList" style="width: 100%">
      <el-table-column prop="img" label="封面" width="150" />
      <el-table-column prop="title" label="标题" width="120" />
      <el-table-column prop="author" label="作者" width="120" />
      <el-table-column prop="publish" label="出版社" width="120" />
      <el-table-column prop="pubdate" label="出版日期" width="120" />
      <el-table-column prop="isbn" label="ISBN" width="120" />
      <el-table-column prop="price" label="定价" width="120" />
      <el-table-column prop="page" label="页数" width="120" />
      <el-table-column fixed="tool" label="操作">
        <template #default>
          <el-button text size="small" @click="handleClick">Detail</el-button>
          <el-button text size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const handleClick = () => {
      console.log('click')
    }
    const bookList = [
      {
        img: '2016-05-03',
        title: 'Tom',
        author: 'California',
        publish: 'Los Angeles',
        pubdate: 'No. 189, Grove St, Los Angeles',
        isbn: 'CA 90036',
        price: 'Home',
        page: 'Home'
      }
    ]
    return {
      handleClick,
      bookList
    }
  }
})
</script>

<style lang="scss">
.table-container {
  width: 100%;
  height: 100%;
  padding: 50px;
}
</style>