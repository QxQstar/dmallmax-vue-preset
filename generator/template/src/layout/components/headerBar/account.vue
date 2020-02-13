<template>
  <div class="account-box elem_no-scale">
    <el-dropdown @command="handleDropdown">
      <span class="account-box__link link-text">
        {{ name || '未知用户' }}
        <i class="el-icon-arrow-down el-icon--right" />
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="modifyPw">
          修改密码
        </el-dropdown-item>
        <el-dropdown-item command="logout">
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { logout } from "@/lib/account";

  export default {
    data() {
      return {

      }
    },
    computed:{
      ...mapGetters([
        'name'
      ])
    },
    methods:{
      handleDropdown(command) {
        if(command === 'logout') {
          logout()
        } else if(command === 'modifyPw') {
          this.$message.info('修改密码')
        }
      }
    }
  }

</script>

<style scoped lang="less">
  .account-box__link{
    color: #ffffff;
  }
</style>
