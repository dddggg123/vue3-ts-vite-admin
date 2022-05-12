<template>
  <div class="table-container">
    <el-table class="table-book" :border="true" :stripe="true" :data="bookList" style="width: 90%">
      <el-table-column prop="img" label="封面" width="100">
        <template v-slot="scope">
          <div style="display: flex; justify-content:flex-start; align-items: center;" class="book-img-section">
            <img :src="scope.row.img" style="width: 53px; height: 68px;" class="book-img" />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="title" label="标题" width="200" />
      <el-table-column prop="author" label="作者" width="120" />
      <el-table-column prop="publish" label="出版社" width="200" />
      <el-table-column prop="pubdate" label="出版日期" width="120" />
      <el-table-column prop="isbn" label="ISBN" width="200" />
      <el-table-column prop="price" label="定价" width="120" />
      <el-table-column prop="page" label="页数" width="120" />
      <el-table-column fixed="right" label="操作">
        <template #default>
          <el-button text size="small" @click="bookBtnHandler('modify')">编辑</el-button>
          <el-button text size="small" @click="bookBtnHandler('copy')">复制</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page-row">
      <el-pagination small background layout="prev, pager, next" :total="15" class="mt-4" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const bookBtnHandler = (type: String) => {
      console.log('事件类型:' + type);
    }
    const bookList = [
      {
        img: 'https://img9.doubanio.com/view/subject/s/public/s8865866.jpg',
        title: '平凡的世界',
        author: '路遥',
        publish: '北京十月文艺出版社',
        pubdate: '2012-3-1',
        isbn: '9787530212004',
        price: '79.8元',
        page: '1251'
      }, {
        img: 'https://img2.doubanio.com/view/subject/s/public/s33974633.jpg',
        title: '活着',
        author: '余华',
        publish: '北京十月文艺出版社',
        pubdate: '2021-7',
        isbn: '9787530221532',
        price: '45元',
        page: '216'
      }, {
        img: 'https://img2.doubanio.com/view/subject/s/public/s32266692.jpg',
        title: '人生海海',
        author: '麦家',
        publish: '北京十月文艺出版社',
        pubdate: '2019-4',
        isbn: '9787530219218',
        price: '55元',
        page: '345'
      }, {
        img: 'https://img1.doubanio.com/view/subject/s/public/s34086258.jpg',
        title: '生死疲劳',
        author: '莫言',
        publish: '浙江文艺出版社',
        pubdate: '2022-1',
        isbn: '9787533966102',
        price: '69.9元',
        page: '584'
      }, {
        img: 'https://img9.doubanio.com/view/subject/s/public/s34185404.jpg',
        title: '金色河流',
        author: '鲁敏',
        publish: '译林出版社',
        pubdate: '2022-3',
        isbn: '9787544788984',
        price: '78元',
        page: '583'
      },  {
        img: 'https://img9.doubanio.com/view/subject/s/public/s8865866.jpg',
        title: '平凡的世界',
        author: '路遥',
        publish: '北京十月文艺出版社',
        pubdate: '2012-3-1',
        isbn: '9787530212004',
        price: '79.8元',
        page: '1251'
      }, {
        img: 'https://img2.doubanio.com/view/subject/s/public/s33974633.jpg',
        title: '活着',
        author: '余华',
        publish: '北京十月文艺出版社',
        pubdate: '2021-7',
        isbn: '9787530221532',
        price: '45元',
        page: '216'
      }, {
        img: 'https://img2.doubanio.com/view/subject/s/public/s32266692.jpg',
        title: '人生海海',
        author: '麦家',
        publish: '北京十月文艺出版社',
        pubdate: '2019-4',
        isbn: '9787530219218',
        price: '55元',
        page: '345'
      }, {
        img: 'https://img1.doubanio.com/view/subject/s/public/s34086258.jpg',
        title: '生死疲劳',
        author: '莫言',
        publish: '浙江文艺出版社',
        pubdate: '2022-1',
        isbn: '9787533966102',
        price: '69.9元',
        page: '584'
      }, {
        img: 'https://img9.doubanio.com/view/subject/s/public/s34185404.jpg',
        title: '金色河流',
        author: '鲁敏',
        publish: '译林出版社',
        pubdate: '2022-3',
        isbn: '9787544788984',
        price: '78元',
        page: '583'
      },  {
        img: 'https://img9.doubanio.com/view/subject/s/public/s8865866.jpg',
        title: '平凡的世界',
        author: '路遥',
        publish: '北京十月文艺出版社',
        pubdate: '2012-3-1',
        isbn: '9787530212004',
        price: '79.8元',
        page: '1251'
      }, {
        img: 'https://img2.doubanio.com/view/subject/s/public/s33974633.jpg',
        title: '活着',
        author: '余华',
        publish: '北京十月文艺出版社',
        pubdate: '2021-7',
        isbn: '9787530221532',
        price: '45元',
        page: '216'
      }, {
        img: 'https://img2.doubanio.com/view/subject/s/public/s32266692.jpg',
        title: '人生海海',
        author: '麦家',
        publish: '北京十月文艺出版社',
        pubdate: '2019-4',
        isbn: '9787530219218',
        price: '55元',
        page: '345'
      }, {
        img: 'https://img1.doubanio.com/view/subject/s/public/s34086258.jpg',
        title: '生死疲劳',
        author: '莫言',
        publish: '浙江文艺出版社',
        pubdate: '2022-1',
        isbn: '9787533966102',
        price: '69.9元',
        page: '584'
      }, {
        img: 'https://img9.doubanio.com/view/subject/s/public/s34185404.jpg',
        title: '金色河流',
        author: '鲁敏',
        publish: '译林出版社',
        pubdate: '2022-3',
        isbn: '9787544788984',
        price: '78元',
        page: '583'
      }
    ]
    return {
      bookBtnHandler,
      bookList
    }
  }
})
</script>

<style lang="scss">
.table-container {
  width: 100%;
  padding-bottom: 20px;

  .table-book {
    margin: 0 auto;
    margin-top: 50px;
  }

  .page-row {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
}
</style>