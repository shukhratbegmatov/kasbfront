<template>
  <div>
    <Header></Header>
    <section>
      <div class="container">
        <h1 class="text-center h1_main">Professional kurs va mashqlar</h1>
        <div class="row filter">
          <div class="col-xl-12 input_text_f">
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
        </div>
        <div class="row filt_body">
          <div class="col-xl-3">
            <div class="filt_category">
              <div class="filt_category_title">
                <button v-b-toggle.collapse-1>
                  Kursning hajmi bo'yicha

                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 0L8 7.5L15.5 0H0.5Z" fill="#2B2B2B"/>
                  </svg>

                </button>
              </div>
              <b-collapse id="collapse-1" >
               <div class="filt_category_body">
                <input type="radio" id="input_filt">
                <label for="input_filt">
                  5ta darsgacha
                </label>
              </div>
               <div class="filt_category_body">
                <input type="radio" id="input_filt1">
                <label for="input_filt">
                  6tadan 15tagacha
                </label>
              </div>
               <div class="filt_category_body">
                <input type="radio" id="input_filt2">
                <label for="input_filt">
                  16tadan ko’p
                </label>
              </div>
              </b-collapse>
            </div>
            <div class="filt_category">
              <div class="filt_category_title">
                <button v-b-toggle.collapse-2>
                  Kursning hajmi bo'yicha

                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 0L8 7.5L15.5 0H0.5Z" fill="#2B2B2B"/>
                  </svg>

                </button>
              </div>
              <b-collapse id="collapse-2" >
              <div class="filt_category_body">
                <input type="radio" id="input_filt4">
                <label for="input_filt">
                  5ta darsgacha
                </label>
              </div>
              <div class="filt_category_body">
                <input type="radio" id="input_filt5">
                <label for="input_filt">
                  6tadan 15tagacha
                </label>
              </div>
              <div class="filt_category_body">
                <input type="radio" id="input_filt6">
                <label for="input_filt">
                  16tadan ko’p
                </label>
              </div>
              </b-collapse>
            </div>
            <div class="filt_category">
              <div class="filt_category_title">
                <button v-b-toggle.collapse-3>
                  Kursning hajmi bo'yicha

                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 0L8 7.5L15.5 0H0.5Z" fill="#2B2B2B"/>
                  </svg>

                </button>
              </div>
              <b-collapse id="collapse-3">
              <div class="filt_category_body">
                <input type="radio" id="input_filt7">
                <label for="input_filt">
                  5ta darsgacha
                </label>
              </div>
              <div class="filt_category_body">
                <input type="radio" id="input_filt8">
                <label for="input_filt">
                  6tadan 15tagacha
                </label>
              </div>
              <div class="filt_category_body">
                <input type="radio" id="input_filt9">
                <label for="input_filt">
                  16tadan ko’p
                </label>
              </div>
              </b-collapse>
            </div>
          </div>
          <div class="col-xl-9">
            <div class="row">
              <div class="col-xl-4 position_card" v-for="(item,index) in 12" :key="index">
                  <button class="like_button" :class="{'active':isLike}" @click="isLike=!isLike">
                    <svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg" >
                      <path d="M10.5002 1.66667C5.43766 1.66667 1.3335 5.77084 1.3335 10.8333C1.3335 20 12.1668 28.3333 18.0002 30.2717C23.8335 28.3333 34.6668 20 34.6668 10.8333C34.6668 5.77084 30.5627 1.66667 25.5002 1.66667C22.4002 1.66667 19.6585 3.20584 18.0002 5.56167C17.1549 4.35768 16.032 3.37508 14.7264 2.69708C13.4209 2.01908 11.9712 1.66563 10.5002 1.66667Z" stroke="#2B2B2B" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                <router-link to="/" class="decoration">
                  <div class="trainings_card">
                    <div class="trainings_title">
                      <div class="trainings_title_main">
                        Ishga joylashishda muvaffaqiyatga erishish
                        <br> <span>iTSM</span>
                      </div>
                    </div>
                    <div class="view">
                      <div class="view_main">
                        <svg width="35" height="21" viewBox="0 0 35 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.5 0.699997C6.01825 0.699997 0 9.156 0 10.5C0 11.8405 6.01825 20.3 17.5 20.3C28.98 20.3 35 11.8405 35 10.5C35 9.156 28.98 0.699997 17.5 0.699997ZM17.5 18.0372C13.2038 18.0372 9.72125 14.6632 9.72125 10.5C9.72125 6.33675 13.2038 2.95925 17.5 2.95925C21.7962 2.95925 25.277 6.33675 25.277 10.5C25.277 14.6632 21.7962 18.0372 17.5 18.0372ZM17.5 10.5C16.7878 9.71775 18.6602 6.7305 17.5 6.7305C15.351 6.7305 13.6097 8.41925 13.6097 10.5C13.6097 12.5807 15.351 14.2695 17.5 14.2695C19.6472 14.2695 21.3902 12.5807 21.3902 10.5C21.3902 9.54275 18.1055 11.1632 17.5 10.5Z" fill="#2B2B2B"/>
                        </svg>
                        56
                      </div>
                      <div class="view_main">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 28C6.26719 28 0 21.7328 0 14C0 6.26719 6.26719 0 14 0C21.7328 0 28 6.26719 28 14C28 21.7328 21.7328 28 14 28ZM12.6875 6.5625V14C12.6875 14.4375 12.9062 14.8477 13.2727 15.0938L18.5227 18.5938C19.1242 18.9984 19.9391 18.8344 20.3438 18.2273C20.7484 17.6203 20.5844 16.8109 19.9773 16.4062L15.3125 13.3V6.5625C15.3125 5.83516 14.7273 5.25 14 5.25C13.2727 5.25 12.6875 5.83516 12.6875 6.5625Z" fill="#2B2B2B"/>
                        </svg>
                        5
                      </div>
                      <div class="check_view">

                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.6168 1.52257C17.1458 1.04051 16.5831 0.657473 15.9619 0.395957C15.3408 0.134442 14.6736 -0.000274658 13.9996 -0.000274658C13.3256 -0.000274658 12.6584 0.134442 12.0372 0.395957C11.416 0.657473 10.8534 1.04051 10.3823 1.52257L9.29382 2.63907L7.73632 2.61982C7.06213 2.61184 6.39315 2.73874 5.76873 2.99307C5.1443 3.2474 4.57703 3.62401 4.10027 4.10077C3.62352 4.57753 3.2469 5.1448 2.99257 5.76922C2.73824 6.39365 2.61134 7.06263 2.61932 7.73682L2.63682 9.29432L1.52382 10.3828C1.04176 10.8539 0.658724 11.4165 0.397208 12.0377C0.135693 12.6589 0.000976563 13.3261 0.000976562 14.0001C0.000976563 14.6741 0.135693 15.3412 0.397208 15.9624C0.658724 16.5836 1.04176 17.1463 1.52382 17.6173L2.63857 18.7058L2.61932 20.2633C2.61134 20.9375 2.73824 21.6065 2.99257 22.2309C3.2469 22.8553 3.62352 23.4226 4.10027 23.8994C4.57703 24.3761 5.1443 24.7527 5.76873 25.0071C6.39315 25.2614 7.06213 25.3883 7.73632 25.3803L9.29382 25.3628L10.3823 26.4758C10.8534 26.9579 11.416 27.3409 12.0372 27.6024C12.6584 27.8639 13.3256 27.9987 13.9996 27.9987C14.6736 27.9987 15.3408 27.8639 15.9619 27.6024C16.5831 27.3409 17.1458 26.9579 17.6168 26.4758L18.7053 25.3611L20.2628 25.3803C20.937 25.3883 21.606 25.2614 22.2304 25.0071C22.8548 24.7527 23.4221 24.3761 23.8989 23.8994C24.3756 23.4226 24.7522 22.8553 25.0066 22.2309C25.2609 21.6065 25.3878 20.9375 25.3798 20.2633L25.3623 18.7058L26.4753 17.6173C26.9574 17.1463 27.3404 16.5836 27.6019 15.9624C27.8634 15.3412 27.9982 14.6741 27.9982 14.0001C27.9982 13.3261 27.8634 12.6589 27.6019 12.0377C27.3404 11.4165 26.9574 10.8539 26.4753 10.3828L25.3606 9.29432L25.3798 7.73682C25.3878 7.06263 25.2609 6.39365 25.0066 5.76922C24.7522 5.1448 24.3756 4.57753 23.8989 4.10077C23.4221 3.62401 22.8548 3.2474 22.2304 2.99307C21.606 2.73874 20.937 2.61184 20.2628 2.61982L18.7053 2.63732L17.6168 1.52432V1.52257ZM18.1191 11.9946L12.8691 17.2446C12.7878 17.3261 12.6912 17.3907 12.5849 17.4348C12.4786 17.4789 12.3647 17.5016 12.2496 17.5016C12.1345 17.5016 12.0205 17.4789 11.9142 17.4348C11.8079 17.3907 11.7113 17.3261 11.6301 17.2446L9.00507 14.6196C8.92371 14.5382 8.85918 14.4416 8.81515 14.3353C8.77112 14.229 8.74846 14.1151 8.74846 14.0001C8.74846 13.885 8.77112 13.7711 8.81515 13.6648C8.85918 13.5585 8.92371 13.4619 9.00507 13.3806C9.08642 13.2992 9.183 13.2347 9.2893 13.1907C9.39559 13.1466 9.50952 13.124 9.62457 13.124C9.73962 13.124 9.85355 13.1466 9.95984 13.1907C10.0661 13.2347 10.1627 13.2992 10.2441 13.3806L12.2496 15.3878L16.8801 10.7556C17.0444 10.5913 17.2672 10.499 17.4996 10.499C17.7319 10.499 17.9548 10.5913 18.1191 10.7556C18.2834 10.9199 18.3757 11.1427 18.3757 11.3751C18.3757 11.6074 18.2834 11.8303 18.1191 11.9946V11.9946Z" fill="#2B2B2B"/>
                        </svg>

                      </div>
                      <div>
                        <img src="../assets/images/rectangle78.png" alt="">
                      </div>
                    </div>
                    <div class="status_card">
                      Bepul
                    </div>
                  </div>
                </router-link>
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
export default {
  components: {Footer, Header},
  data(){
    return{
      isLike:false
    }
  }
}
</script>
