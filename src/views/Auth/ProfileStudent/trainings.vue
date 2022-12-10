<template>
  <div>
    <Header></Header>

    <div class="container">
      <h1 class="text-center h1_main">Profil</h1>
      <div class="row">
        <div class="col-xl-4">
          <div class="profile_link">
            <div class="pro_count">
              <div class="main_count">
                <div class="count_m">112</div>
                <div class="count_t">раз зашли</div>
              </div>
            </div>
          </div>
          <div class="prof_link_card">
            <div class="profiles_link">
              <router-link to="/profile" class="decoration">
                Shaxsiy ma’Lumotlar
              </router-link>
            </div>
            <div class="profiles_link">
              <router-link to="/test-result" class="decoration">
                TEst natijalari
              </router-link>
            </div>
            <div class="profiles_link">
              <router-link to="/tab/trainings" class="decoration">
                Kurslar
              </router-link>
            </div>
            <div class="profiles_link">
              <router-link to="/wishlist" class="decoration">
                Tanlangan Kurslar
              </router-link>
            </div>
            <div class="profiles_link">
              <router-link to="/my-resume" class="decoration">
                MEning Rezumeyim
              </router-link>
            </div>
            <div class="profiles_link">
              <router-link to="/" class="decoration">
                Chiqish
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-xl-8">
          <div class="tab_card">
            <h1>TAnlangan KURslar</h1>
          </div>
          <div class="row">
            <div class="col-xl-4" v-for="(item,index) in 12" :key="index">
              <router-link to="/" class="decoration">
                <div class="tab_card_main">
                  <div class="tab_card_title">
                    Ishga joylashishda muvaffaqiyatga erishish
                  </div>
                  <div class="tab_card_body">
                    <div class="tab_card_name">
                      iTSM
                    </div>
                    <div class="tab_card_img">
                      <img src="../../../assets/images/rectangle78.png" alt="">
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
export default {
  components: {Footer, Header}
}
</script>
