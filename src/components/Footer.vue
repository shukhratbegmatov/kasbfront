<template>
  <div>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-xl-4">
              <div class="footer_brand">
                <router-link class="decoration" to="/">
                  KASB.MAKTAB.UZ
                </router-link>
              </div>
            <div class="address">
              Ташкент ул. Навои 2а
            </div>
            <div class="footer_link">
                <router-link to="/" class="decoration">
                  Maxfiylik siyosati
                </router-link>
            </div>
            <div class="footer_link">
              <router-link to="/" class="decoration">
                Foydalanuvchi shartnomasi
              </router-link>
            </div>
            <div class="copy_right">
              <span >
                © Copyright Kasb.Maktab.uz 2022-2023
              </span>
            </div>
          </div>
          <div class="col-xl-4">
              <div class="footer_path" v-for="(item,index) in $store.state.headers.menus" :key="index">
                <router-link class="decoration" :to="item.url" >
                  {{item.title}}
                </router-link>
              </div>
          </div>
          <div class="col-xl-4">
              <div class="messengers">
                <a href="#" class="decoration">
                  <img src="../assets/logo/image1.svg" alt="">
                </a>
                <a href="#" class="decoration">
                  <img src="../assets/logo/image3.svg" alt="">
                </a>
                <a href="#" class="decoration">
                  <img src="../assets/logo/image2.svg" alt="">
                </a>
              </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {

  mounted() {
    this.$store.dispatch('getMenus')
  }
}
</script>
