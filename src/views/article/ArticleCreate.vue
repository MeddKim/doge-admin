<style scoped>
.container .arctle-title{
  
}
.container .arctle-content{
  margin-top: 15px; 
}
.container .arctle-operate{
  margin-top: 15px; 
}
</style>
<template>
  <div class="container">
    <el-row>
      <el-col :span="18">
          <el-input size="large" placeholder="请输入文章标题"> </el-input>
          <mavon-editor style="height: 100%" :ishljs = "true" class="arctle-content" @change = "contentChange"></mavon-editor>
      </el-col>
    </el-row>
    <el-row>
      <div class="arctle-operate" >
        <el-button type="primary" @click="saveArticle">
                保存
        </el-button>
      </div>
    </el-row>
  </div>
</template>

<script>
  import { mavonEditor } from 'mavon-editor'
  import { mapState } from 'vuex'
  import 'mavon-editor/dist/css/index.css'

  export default {
    data() {
      return {
        arctleMD:"",
        arctleHTML:"",
      }
    },
    components: {mavonEditor,mapState},
    computed:{

    },
    methods : {
      contentChange(mdContent,htmlContent){
          this.arctleMD = mdContent;
          this.arctleHTML = htmlContent;
      },
      saveArticle(){
          console.log(this.arctleMD);
          console.log(this.arctleHTML);
      }
    },
    created: function created(){
      // this.getContentList();
    }
  }
</script>