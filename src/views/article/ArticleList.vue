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
    <link-item v-bind:items = 'items'></link-item>
    <el-table
      :data="contentList"
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
        prop="commentCount"
        label="评论"
        width="">
      </el-table-column>
      <el-table-column
        prop="created"
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
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import LinkItem from '../../components/LinkItem'

  export default {
    data() {
      return {
        items:[{'name':'heheh'},{'name':'hahahaha'},{'name':'hahahaha'},{'name':'hahahaha'}]
      }
    },
    components: {LinkItem},
    computed:{
      ...mapState({
        contentList : state => state.article.contentList
      })
    },
    methods : {
      getContentList() {
        this.$store.dispatch('getContentList');

      }
    },
    created: function created(){
      this.getContentList();
    }
  }
</script>