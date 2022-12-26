<template>
  <div>
    <Header></Header>
    <div class="container">
      <div class="main_univer" >
        <div class="dark_shadow">
          <div class="dark_title">
           {{$store.state.universitiessingle.university.title}}
          </div>
          <div class="dark_description" v-html="$store.state.universitiessingle.university.short_description">
            Ish joyi: Ish odatda ofisda boʻlib, ba'zi ishlarni uydan turib ishlash mumkin. Mijozlar bilan uchrashish
            uchun safarga chiqish talab qilinadi.Ish joyi: Ish odatda ofisda boʻlib, ba'zi ishlarni uydan turib ishlash
            mumkin. Mijozlar bilan uchrashish uchun safarga chiqish talab qilinadi.
          </div>
        </div>
        <div class="uni_bg" :style="{ backgroundImage: 'url(' + $store.state.universitiessingle.university.inside_image_url + ')' }">

        </div>
      </div>
      <div class="uni_about">
        <div class="row">
          <div class="col-xl-8">
            <div class="skill" v-for="item in 3" :key="item">

              <div class="skill_check">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M13.7133 6.21163C13.8894 6.04399 14.1237 5.95131 14.3668 5.95315C14.6099 5.95499 14.8428 6.0512 15.0164 6.22149C15.1899 6.39177 15.2905 6.62281 15.2969 6.86585C15.3033 7.10888 15.2151 7.34491 15.0508 7.52413L10.0633 13.7616C9.97755 13.854 9.87404 13.9281 9.75897 13.9796C9.64391 14.031 9.51965 14.0588 9.39362 14.0611C9.2676 14.0634 9.1424 14.0403 9.0255 13.9932C8.90861 13.946 8.80243 13.8758 8.71331 13.7866L5.40581 10.4791C5.3137 10.3933 5.23982 10.2898 5.18858 10.1748C5.13734 10.0598 5.10979 9.93566 5.10757 9.80978C5.10535 9.6839 5.1285 9.55887 5.17565 9.44213C5.22281 9.3254 5.29299 9.21935 5.38201 9.13033C5.47103 9.04131 5.57708 8.97113 5.69381 8.92398C5.81055 8.87682 5.93558 8.85367 6.06146 8.85589C6.18734 8.85811 6.31148 8.88566 6.42648 8.9369C6.54148 8.98814 6.64498 9.06202 6.73081 9.15413L9.34831 11.7704L13.6896 6.23913C13.6974 6.22951 13.7057 6.22032 13.7146 6.21163H13.7133Z"
                      fill="#F8F8F8"/>
                </svg>
              </div>
              Firibgarlikni tekshirishda va tadqiqot olib borishda detallarga e'tibor.
            </div>
          </div>
          <div class="col-xl-4">
            <img src="../assets/images/image42.png" alt="" width="100%">
          </div>
        </div>
        <h1 class="unierr_title">Universitet haqida</h1>
        <div class="uni_descr" v-html="$store.state.universitiessingle.university.description">

        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  components: {Footer, Header},
  mounted() {
    this.$store.dispatch('getUniversitySingle')
  }
}
</script>
