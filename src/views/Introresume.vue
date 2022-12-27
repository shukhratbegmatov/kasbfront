<template>
  <div class="resume">
    <Header></Header>
    <section class="into_section">
      <div class="container">
        <h1 class="text-center h1_main">REZYUME YARATING</h1>
        <div class="row">
          <div class="col-xl-4">
            <div class="res_img">
              <img src="../assets/images/image34.png" alt="">
            </div>
          </div>
          <div class="col-xl-8">
            <div>
              <div class="resume_title">Oson va tushunarli konstruktor yordamida bir necha daqiqada rezyume yarating,
                shaxsiy ma’lumotlarni kiriting va rezyumeni yuklab oling!
              </div>
              <div class="resume_budy">
                <div class="res_link">
                  <a href="#" @click="error_func()" class="decoration">Boshlash</a>
                </div>
                <div class="res_card">
                  <div class="res_f">
                    <div class="rec_icon">
                      <img src="../assets/images/book.svg" alt="">
                    </div>
                    <div class="f_title">
                      <div class="rec_title">
                        Mutaxassislar tomonidan tavsiya etilgan
                      </div>
                      <div class="rec_desc">
                        Rezyume andozalari HR mutaxassislari tomonidan ma’qullangan
                      </div>
                    </div>
                  </div>
                  <div class="res_f">
                    <div class="rec_icon">
                      <img src="../assets/images/protection.svg" alt="">
                    </div>
                    <div class="f_title">
                      <div class="rec_title">
                        Mutaxassislar tomonidan tavsiya etilgan
                      </div>
                      <div class="rec_desc">
                        Rezyume andozalari HR mutaxassislari tomonidan ma’qullangan
                      </div>
                    </div>
                  </div>
                  <div class="res_f">
                    <div class="rec_icon">
                      <img src="../assets/images/handshake.svg" alt="">
                    </div>
                    <div class="f_title">
                      <div class="rec_title">
                        Mutaxassislar tomonidan tavsiya etilgan
                      </div>
                      <div class="rec_desc">
                        Rezyume andozalari HR mutaxassislari tomonidan ma’qullangan
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="res_section">
      <div class="container">
        <h1 class="text-center">Qanday qilib aniqlaymiz ?</h1>
        <div class="main_f">
          <div class="with_main">
            <div class="border_div"></div>
            <div class="main_absolut">
              <div class="count">
                1
              </div>
              <div class="icon_smart">
                <img src="../assets/images/icon-park-outline_thinking-problem.svg" alt="">
              </div>
              <div class="icon_text">
                Ro‘yxatdan o‘ting
              </div>
            </div>
            <div class="main_absolut absolut1">
              <div class="count">
                2
              </div>
              <div class="icon_smart">
                <img src="../assets/images/carbon_touch-1.svg" alt="">
              </div>
              <div class="icon_text text2">
                Rezyume uchun kerakli ma’lumotlarni kiriting
              </div>
            </div>
            <div class="main_absolut absolut2">
              <div class="count">
                3
              </div>
              <div class="icon_smart">
                <img src="../assets/images/heroicons-solid_user-group.svg" alt="">
              </div>
              <div class="icon_text">
                Ro‘yxatdan o‘ting
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    <section class="res_section2">
      <div class="container">
          <div class="row">
            <div class="col-xl-8">
              <div class="into_card">
                <div class="into_title">Professional rezyume – bu:</div>
                <div class="into_card_child">
                  <div class="into_body">
                    <div class="into_body_child">
                      <div class="prosent_into">
                        76%
                      </div>
                      <div class="prosent_title">
                        Ko‘p sonli ko‘rishlar
                      </div>
                    </div>
                    <div>
                      <div class="prosent_into">
                        54%
                      </div>
                      <div class="prosent_title">
                        Ishga joylashish ehtimoli
                      </div>
                    </div>
                    <div>
                      <div class="prosent_into">
                        4X
                      </div>
                      <div class="prosent_title">
                        Baravar ko‘p takliflar
                      </div>
                    </div>
                  </div>
                  <div>
                    <img src="../assets/images/imageicon.svg" alt="">
                  </div>
                </div>
              </div>
              <div class="link_into">
                <div class="res_link">
                  <a href="#" class="decoration" @click="error_func()">Boshlash</a>
                </div>
              </div>
            </div>
            <div class="col-xl-4">
              <div class="icon_into">
                <img src="../assets/images/image355.svg" alt="">
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

export default {
  components: {Footer, Header},
  methods:{
    error_func(){
      this.$toast("Siz ro'yxatdan o'tmagansiz", {
        timeout: 2000,
        type:"error"
      });
    }

  }
}
</script>
