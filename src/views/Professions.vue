<template>
  <div>
    <Header></Header>
    <section class="prof">
      <div class="container">
        <h1 class="text-center h1_main">BARCHA KASBLAR</h1>
        <div class="row filter">
          <div class="col-xl-4 filt_f">
            <model-select :options="options"
                          v-model="item"
                          placeholder="Barcha Kasblar ">
            </model-select>
          </div>
          <div class="col-xl-4 input_text_f">
            <div class="input_filt">
              <input type="text" placeholder="Qidiruv">
              <div class="icon_f">

                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M15 27C17.6625 26.9995 20.2482 26.1081 22.3455 24.468L28.9395 31.062L31.0605 28.941L24.4665 22.347C26.1075 20.2495 26.9994 17.6632 27 15C27 8.3835 21.6165 3 15 3C8.3835 3 3 8.3835 3 15C3 21.6165 8.3835 27 15 27ZM15 6C19.9635 6 24 10.0365 24 15C24 19.9635 19.9635 24 15 24C10.0365 24 6 19.9635 6 15C6 10.0365 10.0365 6 15 6Z"
                      fill="white"/>
                </svg>

              </div>
            </div>
          </div>
          <div class="col-xl-4 filt_f1">
            <model-select :options="options"
                          v-model="item"
                          placeholder="Eng yuqori maosh">
            </model-select>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-4" v-for="(item,index) in 27" :key="index">
            <div class="prof_card">
                <div>
                  <div class="prof_title">Kiberxavfsizlik tahlilchisi</div>
                  <div class="prof_desc">Ish joyi: Ish odatda ofisda boʻlib, ba'zi ishlarni uydan turib ishlash mumkin. Mijozlar bilan uchrashish uchun safarga chiqish talab qilinadi.</div>
                  <div class="prof_price">Maoshi: 5000000 - 25000000</div>
                  <div class="prof_link">
                    <router-link class="decoration" to="/">Batafsil</router-link>
                  </div>
                </div>
                <div class="card_img">
                  <img src="../assets/images/prof.png" alt="">
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import {ModelSelect} from 'vue-search-select'

export default {
  components: {Footer, Header, ModelSelect},
  data() {
    return {
      options: [
        {value: '1', text: 'aa' + ' - ' + '1'},
        {value: '2', text: 'ab' + ' - ' + '2'},
        {value: '3', text: 'bc' + ' - ' + '3'},
        {value: '4', text: 'cd' + ' - ' + '4'},
        {value: '5', text: 'de' + ' - ' + '5'}
      ],
      item: {
        value: '',
        text: ''
      },
    }
  }
}
</script>
