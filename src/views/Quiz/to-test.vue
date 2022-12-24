<template>
  <div>
    <Header></Header>
    <div class="container">
      <h1 class="text-center">Shахsiyat tеsti vа ishdаn qаnоаtlаnish</h1>
      <div class="on-test">
        <div class="one_test_progress">
          <div class="on-test-count">
            {{ sliderValue }}/{{max}}
          </div>
          <div class="on-test-range">
            <range-slider
                class="slider"
                min="1"
                :max="max"
                step="1"
                v-model="sliderValue">
            </range-slider>
          </div>
          <div class="on-test-quiz mt-4">
            Mеn hаr dоim оlingаn ахbоrоt аniqligigа ishоnch hоsil qilishgа hаrаkаt qilаmаn
          </div>
          <div class="on-test-card">
            <div>
              <div class="row" v-for="(item,index) in 3" :key="index">
                <div class="answer_main">
                  Tikuvchi
                </div>
                <div class="col-xl-4"  v-for="(item,index) in 3" :key="index">
                  <button class="answer_w">
                    Birinchi

                    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.71233 1.21261C8.88842 1.04497 9.12274 0.952289 9.36585 0.954128C9.60897 0.955968 9.84186 1.05218 10.0154 1.22246C10.1889 1.39275 10.2895 1.62379 10.2959 1.86682C10.3024 2.10986 10.2141 2.34589 10.0498 2.52511L5.06233 8.76261C4.97657 8.85498 4.87306 8.92911 4.758 8.98056C4.64293 9.03202 4.51867 9.05974 4.39264 9.06208C4.26662 9.06441 4.14142 9.04131 4.02453 8.99415C3.90763 8.94699 3.80145 8.87674 3.71233 8.78761L0.404831 5.48011C0.312722 5.39428 0.238845 5.29078 0.187605 5.17578C0.136365 5.06078 0.108812 4.93664 0.106591 4.81076C0.10437 4.68488 0.127526 4.55984 0.174678 4.44311C0.221829 4.32637 0.29201 4.22033 0.381033 4.13131C0.470057 4.04228 0.576099 3.9721 0.692834 3.92495C0.809569 3.8778 0.934606 3.85464 1.06048 3.85687C1.18636 3.85909 1.3105 3.88664 1.4255 3.93788C1.5405 3.98912 1.644 4.063 1.72983 4.15511L4.34733 6.77136L8.68858 1.24011C8.6964 1.23048 8.70474 1.2213 8.71358 1.21261H8.71233Z" fill="#2B2B2B"/>
                    </svg>

                  </button>
                </div>
              </div>
              <div class="on-test-button">
                <button class="prev" @click="prevStart()">

                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 8L1 8M8 15L1 8L8 1" stroke="#E5B25E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>Odldingisi</span>

                </button>
                <button class="next" @click="nextStart()">
                  <span>Keyngisi</span>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 8H17M10 1L17 8L10 15" stroke="#2B2B2B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>

                </button>
              </div>
              <div class="quiz_error">
                <div>
                  Har xil variant tanlang
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
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RangeSlider from 'vue-range-slider'
// you probably need to import built-in style
import 'vue-range-slider/dist/vue-range-slider.css'

export default {
  components: {Footer, Header,RangeSlider},
  data(){
    return{
      sliderValue: 1,
      value:0,
      activeIndex: 0,
      max:34,
      isActive:false
    }
  },
  methods:{
    nextStart(){
      if(this.sliderValue<34){
        this.sliderValue++
      }
    },
    prevStart(){
      if(this.sliderValue>1){
        this.sliderValue--
      }
    }
  }
}
</script>
