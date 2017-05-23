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
        prop="id"
        label="账户ID"
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="账户名称"
        width="100">
      </el-table-column>
      <el-table-column
        prop="company_address"
        label="地址"
        width="250">
      </el-table-column>
      <el-table-column
        prop="package_name"
        label="账户等级"
        width="100">
      </el-table-column>
      <el-table-column
        prop="package_name"
        label="使用数/子账户数目">
      </el-table-column>
      <el-table-column
        label="操作" >
          <template scope="scope">
              <el-button type="text" size="mall">编辑</el-button>
              <el-button type="text" size="mall">停用</el-button>
          </template>
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
  export default {
    data() {
      return {
        tableData: [{"create_userid":null,"version_no":0,"duplicate_url":null,"package_id":1,"experience_in_scope":null,"type":1,"account_max_num":5,"create_usermac":null,"create_time_db":"2017-02-14 16:04:59","company_address":"上海市浦东新区张江镇沪南路","update_userip":null,"update_time":null,"is_deleted":0,"server_ip":null,"id":1,"create_userip":null,"account_total":5,"client_versionno":null,"update_usermac":null,"create_time":"2017-02-15 20:39:03","update_userid":null,"create_username":null,"extension3":null,"extension1":null,"extension2":null,"name":"酱心","package_name":"至尊VIP","update_time_db":null,"update_username":null,"org_code":"10012","effective_license_date":null},

        {"create_userid":null,"version_no":0,"duplicate_url":null,"package_id":1,"experience_in_scope":null,"type":1,"account_max_num":5,"create_usermac":null,"create_time_db":"2017-02-14 16:04:59","company_address":"上海市浦东新区孙桥镇","update_userip":null,"update_time":null,"is_deleted":0,"server_ip":null,"id":2,"create_userip":null,"account_total":5,"client_versionno":null,"update_usermac":null,"create_time":"2017-02-15 20:39:03","update_userid":null,"create_username":null,"extension3":null,"extension1":null,"extension2":null,"name":"工酱铺","package_name":"至尊VIP","update_time_db":null,"update_username":null,"org_code":"10012","effective_license_date":null}
        ]
      }
    }
  }
</script>