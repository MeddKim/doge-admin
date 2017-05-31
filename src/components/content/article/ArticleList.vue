<style scoped>
  .page{
    margin:15px 35% 0px;
  }
  .container{
    /*text-align: center;*/
    position : static;
    width: 100%;
  }
</style>
<template>
  <div class="container">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="title"
        label="标题"
        >
      </el-table-column>
      <el-table-column
        prop="author"
        label="作者"
        width="">
      </el-table-column>
      <el-table-column
        prop="kind"
        label="分类"
        width="">
      </el-table-column>
      <el-table-column
        prop="subject"
        label="专题"
        width="">
      </el-table-column>
      <el-table-column
        prop="tag"
        label="标签"
        width="">
      </el-table-column>
      <el-table-column
        prop="comment_num"
        label="评论"
        width="">
      </el-table-column>
      <el-table-column
        prop="publish_time"
        label="发布日期"
        width="">
      </el-table-column>
    </el-table>  
    <!-- <div class="page"> -->
      <el-pagination
        layout="prev, pager, next"
        :total="1000" class="page">
      </el-pagination>
    <!-- </div> -->
                  <button
                class="btn btn-xs btn-danger delete-button"
                @click="findContents()">
              X
              </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{"title":"Python学习笔记","author":"meddkim","kind":"学习","subject":"ptyon基础学习","tag":"Java,Python","comment_num":5,"publish_time":"2017-05-23 18:24:05"},{"title":"Python学习笔记","author":"meddkim","kind":"学习","subject":"ptyon基础学习","tag":"Java,Python","comment_num":5,"publish_time":"2017-05-23 18:24:05"}]
      }
    },
         methods : {
        findContents() {
          // this.$store.dispatch('deletePlan',idx)
          this.$store.dispatch('findContents');
        }
      }
  }
</script>