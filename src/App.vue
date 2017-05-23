<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .layout-breadcrumb{
        padding: 15px 15px 0px 15px;
        font-size: 16px;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 15px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #324157;
        height: 100%;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-copy{
        margin-bottom: 0px;
        text-align: center;
        display: fixed;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-ceiling{
        background: #324157;
        padding: 10px 0;
        overflow: hidden;
        height: 60px;
    }  
    .layout-ceiling-main{
        float: right;
        margin-right: 15px;
        padding-top:10px;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .is-active .router-link-active{
        color:#20a0ff;
    }
    .router-link-active{
        color: #bfcbd9;
    }
    /*.acive */
</style>
<template>
  <div id="app">
        
        <div class="layout">
             <el-col :span="4" class="layout-menu-left">
                    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark" router>
                      <div class="layout-logo-left"></div>

                
                       <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            文章
                        </template>   
                        <el-menu-item index="1-1"> 所有文章 </el-menu-item>
                        <el-menu-item index="1-2"> 撰写文章 </el-menu-item>
                        <el-menu-item index="1-3"> 分类 </el-menu-item>
                        <el-menu-item index="1-4"> 专题 </el-menu-item>
                        <el-menu-item index="1-5"> 标签 </el-menu-item>
                        <el-menu-item index="1-6"> 评论 </el-menu-item>     
                      </el-submenu> 
                      <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            页面
                        </template>     
                        <el-menu-item index="2-1"> 所有页面 </el-menu-item>
                        <el-menu-item index="2-2"> 新建页面 </el-menu-item>
                        <el-menu-item index="2-3"> 评论 </el-menu-item>      
                      </el-submenu>

                      <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            附件
                        </template>     
                        <el-menu-item index="3-1"> 所有附件 </el-menu-item>
                        <el-menu-item index="3-2"> 上传 </el-menu-item>     
                      </el-submenu>

                      <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            微信
                        </template>     
                        <el-menu-item index="4-1"> 自动回复 </el-menu-item>
                        <el-menu-item index="4-2"> 默认回复 </el-menu-item>
                        <el-menu-item index="4-3"> 菜单设置 </el-menu-item>
                        <el-menu-item index="4-4"> 微信设置 </el-menu-item>     
                      </el-submenu>
                        
                      <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            用户
                        </template>     
                        <el-menu-item index="5-1"> 所有用户 </el-menu-item>
                        <el-menu-item index="5-2"> 添加 </el-menu-item>
                        <el-menu-item index="5-3"> 我的资料 </el-menu-item>    
                      </el-submenu>
                        
                      <el-submenu index="6">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            模板
                        </template>     
                        <el-menu-item index="6-1"> 所有模板 </el-menu-item>
                        <el-menu-item index="6-2"> 安装模板 </el-menu-item>
                        <el-menu-item index="6-3"> 菜单 </el-menu-item> 
                        <el-menu-item index="6-4"> 设置 </el-menu-item>
                        <el-menu-item index="6-5"> 编辑 </el-menu-item>   
                      </el-submenu>
                      
                      <el-submenu index="6">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            插件
                        </template>     
                        <el-menu-item index="6-1"> 所有插件 </el-menu-item>
                        <el-menu-item index="6-2"> 安装 </el-menu-item> 
                      </el-submenu>
                    
                      <el-submenu index="7">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            设置
                        </template>     
                        <el-menu-item index="7-1"> 常规 </el-menu-item>
                        <el-menu-item index="7-2"> 评论 </el-menu-item>
                        <el-menu-item index="7-3"> 通知 </el-menu-item>
                        <el-menu-item index="7-4"> SEO </el-menu-item>
                        <el-menu-item index="7-5"> 水印 </el-menu-item>
                        <el-menu-item index="7-6"> 连接形式 </el-menu-item>
                        <el-menu-item index="7-7"> 登陆注册 </el-menu-item> 
                        <el-menu-item index="7-8"> CDN加速 </el-menu-item>
                        <el-menu-item index="7-9"> API应用 </el-menu-item>    
                      </el-submenu>
                        
                     <el-submenu index="8">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            工具
                        </template>     
                        <el-menu-item index="8-1"> 导入 </el-menu-item>
                        <el-menu-item index="8-2"> 导出 </el-menu-item>
                        <el-menu-item index="8-3"> 同步 </el-menu-item>  
                      </el-submenu>
                        
                    </el-menu>
            </el-col>
            <el-col :span="20">
                <div class="layout-header">
                     <div class="layout-ceiling">
                        <div class="layout-ceiling-main">
                            <a href="#">注册登录</a> |
                            <a href="#">帮助中心</a> |
                            <a href="#">安全中心</a> |
                            <a href="#">服务大厅</a>
                        </div>
                    </div>
                </div>
                <div class="layout-breadcrumb">
                    <el-breadcrumb separator="/">
                      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">
                        <router-view></router-view>
                    </div>
                </div>
            </el-col>           
        </div>


  </div>
</template>

<script>

  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    }
  }
</script>

<!--
<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
        height: 100%;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-copy{
        margin-bottom: 0px;
        text-align: center;
        display: fixed;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-ceiling{
        background: #464c5b;
        padding: 10px 0;
        overflow: hidden;
        height: 60px;
    }
    .layout-ceiling-main{
        float: right;
        margin-right: 15px;
        padding-top:10px;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
</style>
<template>
    <div  id="app" class="layout">

            <i-col span="5" class="layout-menu-left">
                <Menu active-key="1-2" theme="dark" width="auto" :open-keys="['1']">
                    <div class="layout-logo-left"></div>
                    <Submenu key="1" name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            导航一
                        </template>
                        <Menu-item key="1-1" name="1-1">选项 1</Menu-item>
                        <Menu-item key="1-2" name="1-2">选项 2</Menu-item>
                        <Menu-item key="1-3" name="1-3">选项 3</Menu-item>
                    </Submenu>
                    <Submenu key="2" name="1">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            导航二
                        </template>
                        <Menu-item key="2-1" name="2-1">选项 1</Menu-item>
                        <Menu-item key="2-2" name="2-2">选项 2</Menu-item>
                    </Submenu>
                    <Submenu key="3" name="1">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            导航三
                        </template>
                        <Menu-item key="3-1" name="3-1">选项 1</Menu-item>
                        <Menu-item key="3-2" name="3-2">选项 2</Menu-item>
                    </Submenu>
                </Menu>
            </i-col>
            <i-col span="19">
                <div class="layout-header">
                     <div class="layout-ceiling">
                        <div class="layout-ceiling-main">
                            <a href="#">注册登录</a> |
                            <a href="#">帮助中心</a> |
                            <a href="#">安全中心</a> |
                            <a href="#">服务大厅</a>
                        </div>
                    </div>
                </div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item href="#">首页</Breadcrumb-item>
                        <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                        <Breadcrumb-item>某应用</Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">内容区域</div>
                </div>
            </i-col>
            <div class="layout-copy">
                    2011-2016 &copy; TalkingData
            </div>
    </div>
</template>
<script>
    export default {
        
    }
</script> 
-->