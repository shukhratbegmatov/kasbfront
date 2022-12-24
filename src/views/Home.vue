<template>
  <div class="home">
    <Header></Header>
    <section class="main_section">
      <div class=" first_section">

        <video autoplay muted loop id="myVideo">
          <source src="../assets/images/912899371.mp4" type="video/mp4">
        </video>
        <VueSlickCarousel v-bind="settings" ref="carousel">

          <div class="slid_bg" v-for="(item,index) in 2" :key="index">

            <div class="bg_margin">
              <div class="bg_title">
                KASB MAKTAB.UZ
              </div>
              <div class="bg_description">
                Бесплатная программа обучения, проферентаций и карьерного сопровождения
              </div>
            </div>
          </div>

        </VueSlickCarousel>
        <div class="sw_button_position">
          <div class="sw_button">
            <div class="prev_btn">
              <button @click="prev()">
                <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 8L4 4.18182L1 1" stroke="#F8F8F8"/>
                </svg>
              </button>
            </div>
            <div class="next_btn">
              <button @click="next()">

                <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 1L1 4.81818L4 8" stroke="#F8F8F8"/>
                </svg>

              </button>
            </div>
          </div>
        </div>
        <div class="progress_bar">
          <progress-bar
              v-for="(ban, i) in 4"
              :key="i"
              id="sliderProgress"
              :class="{ 'active': activeIndex == i }"
              :options="options"
              :value="activeIndex === i ? value : 15"
          />
        </div>
      </div>
    </section>
    <section>
      <div class="second_section">
<!--        <div class="left_img">-->
<!--          <img src="../assets/logo/image6.svg" alt="">-->
<!--        </div>-->
<!--        <div class="right_img">-->
<!--          <img src="../assets/logo/image5.svg" alt="">-->
<!--        </div>-->
        <div class="container">
          <div class="row">
            <div class="col-xl-6">
              <div class="second_section_title">
                Bolalarni Kasbga Yo’naltirish testi!
              </div>
              <div class="second_section_description">
                O'rta maktab o'quvchilari uchun kasb tanlashda professional hali bunday imkoniyat bo'lmagan!
              </div>
              <div class="link_group">
                <div>
                  <router-link class="link_main decoration" to="/start-test">
                    <div>
                      SINOVDAN O’TING
                    </div>
                  </router-link>
                </div>
                <div>
                  <router-link class="link_main_calk decoration" to="/">
                    <div>
                      kalkulyator
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="video_content">
                <div class="shadow_videos">

                </div>
                <video id="player"
                       src="https://upload.wikimedia.org/wikipedia/commons/transcoded/1/18/Big_Buck_Bunny_Trailer_1080p.ogv/Big_Buck_Bunny_Trailer_1080p.ogv.360p.vp9.webm"
                       autoplay loop muted>
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="three_section">
      <div class="container">
        <div class="row">
          <div class="col-xl-4">
            <div class="section_category">
              <div class="category_icon">
                <img src="../assets/logo/checklist.svg" alt="">
              </div>
              <div class="category_text">
                <div class="category_title">
                  Onlayn test
                </div>
                <div class="category_description">
                  Ro'yxatdan o'tish va shaharning
                  narigi tomoniga borish shart emas.
                  Kompyuter yoki planshet yetarli
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4">

            <div class="section_category">
              <div class="category_icon">
                <img src="../assets/logo/clock.svg" alt="">
              </div>
              <div class="category_text">
                <div class="category_title">
                  Qulay o'tish vaqti
                </div>
                <div class="category_description">
                  Sinovning umumiy vaqti 1,5-2 soat davom etadi, ammo sizning qulayligingiz uchun u siz uchun qulay
                  bo'lgan har qanday vaqtda o'tkazilishi mumkin bo'lgan 14 ta subtestga bo'lingan
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4">

            <div class="section_category">
              <div class="category_icon">
                <img src="../assets/logo/shopping.svg" alt="">
              </div>
              <div class="category_text">
                <div class="category_title">
                  O'rta maktab o'quvchilari uchun javob beradi
                </div>
                <div class="category_description">
                  Amaldagi usullar allaqachon ish tajribasiga ega bo'lgan kattalar uchun ham, odamlar uchun ham, o'rta
                  maktab o'quvchilari va maktab bitiruvchilari uchun ham bir xil darajada yaxshi ishlaydi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="four_section">
      <div class="container">
        <h1>Лучшие Ученики</h1>
        <div class="row">
          <div class="col-xl-3">
            <div class="students_card">
              <div class="s_card_img">
                <img src="../assets/images/Ellipse72.png" alt="">
              </div>
              <div class="s_card_data">
                <div class="s_card_name">София Аллен</div>
                <div class="s_card_title">Интересы и Предпочтения </div>
                <div class="s_card_description">Люди и отношения</div>
                <div class="count_f">
                  <div class="s_card_count">97</div>
                </div>
              </div>
              <div class="s_card_data">
                <div class="s_card_title">Навыки и Способности </div>
                <div class="s_card_description">Решение Проблем</div>
                <div class="count_f">
                  <div class="s_card_count">96</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-9" >
            <div class="stu_cards" v-for="(item,index) in 2" :key="index+'A'">
              <div class="stu_images">
                <div>
                  <img src="../assets/images/Ellipse73.png" alt="">
                </div>
                <div class="author">
                  Катя Варнава
                </div>
              </div>
              <div class="s_card_data">
                <div class="s_card_title">Интересы и Предпочтения  </div>
                <div class="s_card_description">Люди и отношения </div>
                <div class="count_f">
                  <div class="s_card_count">96</div>
                </div>
              </div>
              <div>
                <div class="s_card_data">
                  <div class="s_card_title">Навыки и Способности </div>
                  <div class="s_card_description">Решение Проблем </div>
                  <div class="count_f">
                    <div class="s_card_count">97</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="five_section">
      <div class="container">
        <div class="stats_title">
          <h1>Узнай, какими навыками обладаешь</h1>
          <div class="stats_desc">
            Важно определить, каким набором навыков ты обладаешь еще до начала поисков профессии
          </div>
        </div>
        <div class="stats_main">
          <div class="row">
            <div class="col-xl-6">
              <div class="stats_ranges">
                <div class="range_title">Интересы и предпочтения </div>
                <div class="range_body">
                  <label>Техника и технологий </label>
                  <range-slider
                      class="slider"
                      min="10"
                      max="1000"
                      step="10"
                      v-model="sliderValue">
                  </range-slider>
                  <div class="rage_count">
                    87
                  </div>
                </div>
                <div class="range_body">
                  <label>Анализ информации </label>
                  <range-slider
                      class="slider"
                      min="10"
                      max="1000"
                      step="10"
                      v-model="sliderValue">
                  </range-slider>
                  <div class="rage_count">
                    87
                  </div>
                </div>
                <div class="range_body">
                  <label>Физическое развитие </label>
                  <range-slider
                      class="slider"
                      min="10"
                      max="1000"
                      step="10"
                      v-model="sliderValue">
                  </range-slider>
                  <div class="rage_count">
                    87
                  </div>
                </div>
                <div class="range_body">
                  <label>Бизнес и управление </label>
                  <range-slider
                      class="slider"
                      min="10"
                      max="1000"
                      step="10"
                      v-model="sliderValue">
                  </range-slider>
                  <div class="rage_count">
                    87
                  </div>
                </div>
                <div class="range_body">
                  <label>Творчество и искусство </label>
                  <range-slider
                      class="slider"
                      min="10"
                      max="1000"
                      step="10"
                      v-model="sliderValue">
                  </range-slider>
                  <div class="rage_count">
                    87
                  </div>
                </div>
                <div class="range_body">
                  <label>Люди и отношения  </label>
                  <range-slider
                      class="slider"
                      min="10"
                      max="1000"
                      step="10"
                      v-model="sliderValue">
                  </range-slider>
                  <div class="rage_count">
                    87
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6">

              <div class="stats_ranges">
                <div class="world_title">Интересы и предпочтения </div>
                <div class="world_desc">
                  <div>
                    Конструирование и математика
                  </div>
                </div>
                <div class="web_img">
                  <img src="../assets/images/web.jpg" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="sex_section">
      <div class="container">
        <div class="row">
          <div class="col-xl-4" v-for="(item,index) in 3" :key="index">
            <div class="uni_card">
              <div class="uni_card_title">
                Мировой
              </div>
             <router-link class="decoration" to="/">
               <div class="image_group">
                 <img src="../assets/images/rectangle.png" alt="">
                 <div class="absolute_text">
                   Стэнфордский Университет
                 </div>
               </div>
             </router-link>
              <div class="more_uni">
                <router-link to="/" class="decoration">
                  Полный Список Университетов
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-xl-4"></div>
          <div class="col-xl-4"></div>
        </div>
      </div>
    </section>
    <section class="news">
      <div class="container">
        <h1>Новости</h1>
        <div class="row">
          <div class="col-xl-4" v-for="(item,index) in 6" :key="index">
            <router-link to="/" class="decoration">
              <div class="news_main">
                <img src="../assets/images/news.png" alt="">
                <div class="news_body">
                  <div class="news_date">10</div>
                  <div class="news_month">Октября</div>
                  <div class="news_title">Планируется расширить выпуск количества учебников в 2023</div>
                </div>
              </div>
            </router-link>
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

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import RangeSlider from 'vue-range-slider'
// you probably need to import built-in style
import 'vue-range-slider/dist/vue-range-slider.css'
export default {
  components: {Footer, Header, VueSlickCarousel,RangeSlider},
  data() {
    return {
      sliderValue: 50,
      value:0,
      activeIndex: 0,
      delay: 2000,
      time: 0,
      timeId: "",
      intervalId: "",
      options: {
        text: {
          color: "#E5B25E",
          shadowEnable: false,
          dynamicPosition: false,
          hideText: true,
        },
        progress: {
          color: "#E5B25E",
          backgroundColor: " #F8F8F8",
          inverted: false,
        },
        layout: {
          height: 12,
          width: 12,
          verticalTextAlign: 61,
          horizontalTextAlign: 43,
          zeroOffset: 0,
          strokeWidth: 12,
          progressPadding: 0,
          type: "line",
        },
      },

      settings: {
        "autoplay": true,
        "autoplaySpeed": 6000,
        "dots": false,
        "dotsClass": "slick-dots custom-dot-class",
        "edgeFriction": 0.35,
        "infinite": true,
        "speed": 500,
        "slidesToShow": 1,
        "slidesToScroll": 1,
      }
    }
  },
  methods: {
    prev() {

      clearTimeout(this.timeId);
      if (this.activeIndex === 0) {
        this.activeIndex = 3;
      } else {
        this.activeIndex -= 1;
      }
      this.autoplay();
      this.$refs.carousel.prev()
    },
    next() {

      clearTimeout(this.timeId);
      if (this.activeIndex === 3) {
        this.activeIndex = 0;
      } else {
        this.activeIndex += 1;
      }
      this.autoplay();
      this.$refs.carousel.next()
    },
    autoplay() {
      this.time = 0;
      this.timeId = setTimeout(() => {
        this.time = this.delay;
      }, 2000);
    },
  },

  mounted() {
    this.autoplay();
    this.intervalId = setInterval(() => {
      this.value += 1;
    }, 20);
  },
  destroyed() {
    clearInterval(this.intervalId);
    clearTimeout(this.timeId);
  },
  watch: {
    time() {
      if (this.time == this.delay) {
        this.next();
      }
    },
    activeIndex() {
      this.value = 0;
    },
  },

}
</script>
