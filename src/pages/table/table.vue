<template>
  <div class="table-container">
    <div class="remark-section">
      <div class="remark-content">
        <p class="remark-title">使用说明</p>
        <p class="reamrk-desc">
          1、excel导入导出使用的依赖为：file-saver、xlsx
        </p>
        <p class="reamrk-desc">2、excel导出方法封装可见@/utils/export.ts文件</p>
      </div>
    </div>
    <div class="btn-section">
      <el-button class="btn" @click="exportExcelHandler" type="primary"
        >导出excel</el-button
      >
      <!-- <el-button class="btn" @click="importExcelHandler" type="success">导入excel</el-button> -->
    </div>
    <el-table
      class="table-book"
      :border="true"
      :stripe="true"
      :data="bookList"
      style="width: 90%"
    >
      <el-table-column prop="img" label="封面" width="100">
        <template #default="scope">
          <div
            style="
              display: flex;
              justify-content: flex-start;
              align-items: center;
            "
            class="book-img-section"
          >
            <img
              :src="scope.row.img"
              style="width: 53px; height: 68px"
              class="book-img"
            />
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
          <el-button text size="small" @click="bookBtnHandler('detail')"
            >详情</el-button
          >
          <el-button text size="small" @click="bookBtnHandler('modify')"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="page-row">
      <el-pagination
        small
        background
        layout="prev, pager, next"
        :total="5"
        class="mt-4"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { exportExcel } from "../../utils/export";
// import {useRouter} from "vue-router"

export default defineComponent({
  setup() {
    // const router = useRouter();
    const bookBtnHandler = (_type: String) => {
      // switch (type) {
      //   case 'detail':
      //     router.push('/book');
      //     break;
      //   case 'modify':
      //     break;
      // }
    };
    const bookList = [
      {
        img: "https://img9.doubanio.com/view/subject/s/public/s8865866.jpg",
        title: "平凡的世界",
        author: "路遥",
        publish: "北京十月文艺出版社",
        pubdate: "2012-3-1",
        isbn: "9787530212004",
        price: "79.8元",
        page: "1251",
      },
      {
        img: "https://img2.doubanio.com/view/subject/s/public/s33974633.jpg",
        title: "活着",
        author: "余华",
        publish: "北京十月文艺出版社",
        pubdate: "2021-7",
        isbn: "9787530221532",
        price: "45元",
        page: "216",
      },
      {
        img: "https://img2.doubanio.com/view/subject/s/public/s32266692.jpg",
        title: "人生海海",
        author: "麦家",
        publish: "北京十月文艺出版社",
        pubdate: "2019-4",
        isbn: "9787530219218",
        price: "55元",
        page: "345",
      },
      {
        img: "https://img1.doubanio.com/view/subject/s/public/s34086258.jpg",
        title: "生死疲劳",
        author: "莫言",
        publish: "浙江文艺出版社",
        pubdate: "2022-1",
        isbn: "9787533966102",
        price: "69.9元",
        page: "584",
      },
      {
        img: "https://img9.doubanio.com/view/subject/s/public/s34185404.jpg",
        title: "金色河流",
        author: "鲁敏",
        publish: "译林出版社",
        pubdate: "2022-3",
        isbn: "9787544788984",
        price: "78元",
        page: "583",
      },
    ];
    const importExcelHandler = () => {};
    const exportExcelHandler = () => {
      const tableHeder: Object = {
        img: "封面",
        title: "标题",
        author: "作者",
        publish: "出版社",
        pubdate: "出版日期",
        isbn: "ISBN",
        price: "价格",
        page: "页数",
      };
      exportExcel(bookList, tableHeder, "图书数据");
    };
    return {
      bookBtnHandler,
      bookList,
      exportExcelHandler,
      importExcelHandler,
    };
  },
});
</script>

<style lang="scss">
.table-container {
  width: 100%;
  padding-bottom: 20px;

  .remark-section {
    margin-top: 20px;
    padding: 0 5%;

    .remark-content {
      text-align: left;

      .remark-title {
        font-size: 25px;
        font-weight: 600;
      }

      .remark-desc {
        font-size: 22px;
        font-weight: 500;
      }
    }
  }

  .table-book {
    margin: 0 auto;
    margin-top: 20px;
  }

  .page-row {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  .btn-section {
    padding: 0 5%;
    margin-top: 20px;
  }
}
</style>
