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
    <el-input size="large" placeholder="请输入文章标题"> </el-input>
    <mavon-editor style="height: 100%" :ishljs = "true" class="arctle-content" @change = "contentChange"></mavon-editor>
    <div class="arctle-operate" >
        <el-button type="primary" @click="saveArticle">
          保存
        </el-button>
    </div>
  </div>
</template>

<script>
  import { mavonEditor } from 'mavon-editor'
  import { mapState } from 'vuex'
  import 'mavon-editor/dist/css/index.css'

  export default {
    data() {
      return {
        items:[{'name':'heheh'},{'name':'hahahaha'},{'name':'hahahaha'},{'name':'hahahaha'}]
      }
    },
    components: {mavonEditor,mapState},
    computed:{

    },
    methods : {
      contentChange(text,mkContent){
        console.log(text);
        console.log(mkContent);
        console.log("哈哈哈");
      },
      saveArticle(){

      }
    },
    created: function created(){
      // this.getContentList();
    }
  }
</script>