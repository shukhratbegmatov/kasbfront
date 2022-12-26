<template>
  <div>
    <Header></Header>
    <div class="container">
      <div class="uni_tab">
        <button>Мировой</button>
        <button class="middle_btn">Европа</button>
        <button>Узбекистан</button>
      </div>
      <div class="uni_f">
        <div class="uni_content" v-for="(item,index) in $store.state.universities.results" :key="index">
          <div class="row">
            <div class="col-xl-4">
              <img :src="item.image_url" alt="">
            </div>
            <div class="col-xl-8">
              <div class="unie_title">
                {{item.title}}
              </div>
              <div class="unie_desc">
                {{item.short_description}}
              </div>
              <div class="main_uni">
                <div>
                  <router-link :to="`/universities/${item.id}`">
                    Батафсил
                  </router-link>
                </div>
                <div class="uni_addres">

                  <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 16.54L7.131 15.829C7.847 15.009 8.491 14.231 9.064 13.491L9.537 12.867C11.512 10.206 12.5 8.094 12.5 6.533C12.5 3.201 9.814 0.5 6.5 0.5C3.186 0.5 0.5 3.201 0.5 6.533C0.5 8.094 1.488 10.206 3.463 12.867L3.936 13.491C4.75344 14.5384 5.60867 15.5557 6.5 16.541V16.54Z" stroke="#303030" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.5 9C7.88071 9 9 7.88071 9 6.5C9 5.11929 7.88071 4 6.5 4C5.11929 4 4 5.11929 4 6.5C4 7.88071 5.11929 9 6.5 9Z" stroke="#303030" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  {{item.country_name}}
                </div>
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
  mounted() {
    this.$store.dispatch('getUniversity')
  }
}
</script>
