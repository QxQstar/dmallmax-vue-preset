<template>
  <div class="g-header elem_no-scale">
    <div class="header-main elem_1x">
      <div class="logo elem_no-scale">
        <img
          class="logo__img"
          src="../../../assets/images/h_dmall.png"
        >
      </div>
      <!-- nav -->
      <ul class="nav-box elem_1x">
        <li
          v-for="(navItem,key) in data"
          :key="key"
          class="nav-box__nav"
          :class="{'nav-box__nav_active':activeTopNav === key}"
          @click="handleChangeNav(key)"
        >
          {{ navItem.name }}
        </li>
      </ul>
    </div>
    <account />
  </div>
</template>

<script>
  import menuHelper from '@/lib/menu.js'
  import { mapState } from 'vuex'
  import account from './account'
  export default {
    components:{ account },
    data() {
        return {
          data:menuHelper.getTopMenu() || []
        }
    },
    computed:{
      ...mapState({
        activeTopNav:state => state.menu.activeTopNav,
      })
    },
    methods:{
      handleChangeNav(index) {
        this.$store.commit('menu/SET_ACTIVE_TOP_NAV', index)
      }
    }
  }
</script>

<style scoped>

</style>
