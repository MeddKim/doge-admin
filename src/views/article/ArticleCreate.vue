<style scoped>

</style>
<template>
  <div class="container">
    <mavon-editor style="height: 100%" :ishljs = "true"></mavon-editor>
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