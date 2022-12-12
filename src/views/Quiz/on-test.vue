<template>
  <div>
    <Header></Header>
      <div class="container">
        <h1 class="text-center">Shахsiyat tеsti vа ishdаn qаnоаtlаnish</h1>
        <div class="on-test">
          <div class="one_test_progress">
            <div class="on-test-count">
              3/40
            </div>
            <div class="on-test-range">
              <range-slider
                  class="slider"
                  min="0"
                  max="100"

                  step="10"
                  v-model="sliderValue">
              </range-slider>
            </div>
            <div class="on-test-card">
                <div>
                  <div class="on-test-quiz">
                    Mеn hаr dоim оlingаn ахbоrоt аniqligigа ishоnch hоsil qilishgа hаrаkаt qilаmаn
                  </div>
                  <div class="on-test-values">
                      <button v-for="(item,index) in 10" :key="index">
                        {{item}}
                      </button>
                  </div>
                  <div class="on-test-button">
                    <button class="prev">

                      <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 8L1 8M8 15L1 8L8 1" stroke="#E5B25E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>

                      Odldingisi
                    </button>
                    <button class="next">
                      Keyngisi
                      <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8H17M10 1L17 8L10 15" stroke="#2B2B2B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>

                    </button>
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
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RangeSlider from 'vue-range-slider'
// you probably need to import built-in style
import 'vue-range-slider/dist/vue-range-slider.css'

export default {
  components: {Footer, Header,RangeSlider},
  data(){
    return{
      sliderValue: 0,
      value:0,
      activeIndex: 0,
    }
  }
}
</script>
