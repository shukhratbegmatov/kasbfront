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
            <div class="on-test-card">
                <div>
                  <div class="on-test-quiz">
                    Mеn hаr dоim оlingаn ахbоrоt аniqligigа ishоnch hоsil qilishgа hаrаkаt qilаmаn
                  </div>
                  <div class="on-test-values" :class="{'active':isActive}">
                      <button v-for="(item,index) in 10" :key="index" @click="isActive=!isActive">
                        {{item}}
                      </button>
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
      max:40,
      isActive:false
    }
  },
  methods:{
    nextStart(){
      if(this.sliderValue<40){
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
