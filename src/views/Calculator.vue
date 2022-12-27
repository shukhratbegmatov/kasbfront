<template>
  <div>
    <Header></Header>
    <div class="container">
        <div class="card_check">
          <div class="row">
          <div class="col-xl-3" v-for="(item,index) in $store.state.subjects" :key="index">
            <button @click="getWork(item)" :for="`check${index}`" class="label_btn">
              {{item.title}}
              <input type="checkbox" :id="`check${index}`">
            </button>
          </div>
            </div>
          <div>
            <button class="bottom_btn">

              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0001 2.5C20.3316 2.5 20.6496 2.6317 20.884 2.86612C21.1184 3.10054 21.2501 3.41848 21.2501 3.75V33.2325L29.1151 25.365C29.3498 25.1303 29.6682 24.9984 30.0001 24.9984C30.3321 24.9984 30.6504 25.1303 30.8851 25.365C31.1198 25.5997 31.2517 25.9181 31.2517 26.25C31.2517 26.5819 31.1198 26.9003 30.8851 27.135L20.8851 37.135C20.769 37.2514 20.6311 37.3438 20.4792 37.4068C20.3273 37.4698 20.1645 37.5022 20.0001 37.5022C19.8357 37.5022 19.6729 37.4698 19.521 37.4068C19.3692 37.3438 19.2312 37.2514 19.1151 37.135L9.11511 27.135C8.8804 26.9003 8.74854 26.5819 8.74854 26.25C8.74854 25.9181 8.8804 25.5997 9.11511 25.365C9.34983 25.1303 9.66817 24.9984 10.0001 24.9984C10.3321 24.9984 10.6504 25.1303 10.8851 25.365L18.7501 33.2325V3.75C18.7501 3.41848 18.8818 3.10054 19.1162 2.86612C19.3507 2.6317 19.6686 2.5 20.0001 2.5Z" fill="#2B2B2B"/>
              </svg>

            </button>
          </div>
      </div>
        <div class="row">
          <div class="col-xl-3" v-for="(item,index) in 12" :key="index">
            <div class="calculator">
              <div>
                <img src="../assets/images/image45.png" alt="">
              </div>
              <div>
                <div class="cl_title">
                  Aviakompaniya uchuvchisi {{item}}
                </div>
                <div class="cl_price">
                  10000000
                </div>
                <div class="link_btn">
                  <router-link to="/" class="text-decoration-none">
                    Batafsil
                  </router-link>
                </div>
              </div>
            </div>
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
  data(){
    return{
      cres:[],
      subId:[]
    }
  },
  mounted() {
    this.$store.dispatch('getSubjects')
  },
  methods:{
    getWork(){
      this.$store.dispatch('getSubjectWork')
    }
  }

}
</script>
