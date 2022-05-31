<template>
  <div class="form-container">
    <div class="form-content">
      <el-row>
        <el-col :span="3">
          <div class="title-section">
            <span class="require">*</span>
            <span class="title">优惠券名称：</span>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="content-section">
            <el-input
              class="text-input"
              v-model="form.name"
              placeholder="请输入优惠券名称"
            />
            <span class="desc">优惠券名称不能超过10个字</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3">
          <div class="title-section">
            <span class="require">*</span>
            <span class="title">优惠券数量：</span>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="content-section">
            <el-input-number
              v-model="form.num"
              :min="1"
              :max="999"
              @change="numChangeHandler"
            />
            <span class="desc">优惠券数量不能超过999</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3">
          <div class="title-section">
            <span class="require">*</span>
            <span class="title">每人限领数量：</span>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="content-section">
            <el-input-number
              v-model="form.limit"
              :min="1"
              :max="999"
              @change="limitChangeHandler"
            />
            <span class="desc">每人限领数量不能超过优惠券数量</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3">
          <div class="title-section">
            <span class="require">*</span>
            <span class="title">优惠券类型：</span>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="content-section">
            <el-radio-group v-model="form.type" class="ml-4">
              <el-radio label="discount" size="large">折扣券</el-radio>
              <el-radio label="reduce" size="large">满减券</el-radio>
            </el-radio-group>
          </div>
        </el-col>
      </el-row>
      <el-row v-if="currentType == 'discount'">
        <el-col :span="3">
          <div class="title-section">
            <span class="require">*</span>
            <span class="title">优惠券折扣：</span>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="content-section">
            <el-input
              class="text-input"
              v-model="form.name"
              placeholder="请输入折扣"
            />
            <span class="desc">优惠券折扣为0.1-9.9之间</span>
          </div>
        </el-col>
      </el-row>
      <el-row v-if="currentType == 'reduce'">
        <el-col :span="3">
          <div class="title-section">
            <span class="require">*</span>
            <span class="title">优惠券减免：</span>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="content-section">
            <el-input
              class="text-input"
              v-model="form.name"
              placeholder="请输入减免金额"
            />
            <span class="desc">减免金额不能超过原价</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3">
          <div class="title-section">
            <span class="require">*</span>
            <span class="title">优惠日期时间：</span>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="content-section">
            <el-date-picker
              v-model="form.duration"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期时间"
              end-placeholder="截止日期时间"
            />
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3">
          <div class="title-section">
            <span class="require">*</span>
            <span class="title">优惠券说明：</span>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="content-section">
            <el-input
              type="textarea"
              class="text-input"
              v-model="form.remark"
              placeholder="请输入优惠券说明"
            />
            <span class="desc">优惠券说明不能超过100个字</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3">
          <div class="title-section">
            <span class="require">*</span>
            <span class="title">优惠商品</span>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="content-section">
            <div class="checkbox-section">
              <el-checkbox
                v-model="checkAll"
                :indeterminate="isIndeterminate"
                @change="productAllSelectChangeHandler"
              >
                全选
              </el-checkbox>
              <el-checkbox-group
                v-model="form.checkedProducts"
                @change="productSelectChangeHandler"
              >
                <el-checkbox
                  v-for="product in productList"
                  :key="product"
                  :label="product"
                  product
                >
                </el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
        </el-col>
      </el-row>
      <div class="btn-section">
        <el-button type="primary">保存</el-button>
        <el-button>重置</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";

const form = reactive({
  name: "",
  num: 1,
  limit: 1,
  type: "discount",
  duration: [],
  remark: "",
  checkedProducts: ["Vivo", "ThinkPad"],
});

const checkAll = ref(false);
const isIndeterminate = ref(true);
const productList = [
  "华为Mate50 pro",
  "苹果13",
  "Mac pro",
  "Vivo",
  "OPPO",
  "ThinkPad",
  "Mini",
  "Haval",
];

const productAllSelectChangeHandler = (val: boolean) => {
  form.checkedProducts = val ? productList : [];
  isIndeterminate.value = false;
};
const productSelectChangeHandler = (value: string[]) => {
  const checkedCount = value.length;
  checkAll.value = checkedCount === productList.length;
  isIndeterminate.value = checkedCount > 0 && checkedCount < productList.length;
};
const currentType = ref("discount");

const numChangeHandler = () => {};

const limitChangeHandler = () => {};

watch(
  () => form.type,
  (newvalue) => {
    console.log(newvalue);
    currentType.value = newvalue;
  },
  {
    deep: true,
  }
);
</script>

<style lang="scss">
.form-container {
  height: 100%;
  padding-left: 5%;

  .form-content {
    margin-top: 20px;

    .el-row {
      margin-top: 20px;

      &:first-child {
        margin-top: 0;
      }
    }

    .title-section {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
      line-height: 100%;

      .require {
        color: red;
        margin-right: 5px;
      }

      .title {
        font-size: 15px;
        font-weight: 550;
      }
    }

    .content-section {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .text-input {
        width: 250px;
      }

      .desc {
        font-size: 13px;
        color: gray;
        margin-left: 10px;
      }
    }

    .btn-section {
      margin-top: 40px;
    }
  }
}
</style>
