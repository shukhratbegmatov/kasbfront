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
              <router-link to="/trainings" class="decoration">
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
          <div class="profile_card">
            <div class="row">
              <div class="col-xl-8">
                <div class="title_pro_card">
                  TEst Natijalari
                </div>
                <div class="test_body">
                  <div>
                    <div class="test_title">Tartib</div>
                    <div class="test_desc">#</div>
                  </div>
                  <div>
                    <div class="test_title">	Test vaqti</div>
                    <div class="test_desc">2022-09-26 17:42</div>
                  </div>
                  <div>
                    <div class="test_title">
                      Ko‘rish
                    </div>
                    <div class="test_btn">
                      <button>Saqlash</button>
                    </div>
                  </div>
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
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
export default {
  components: {Footer, Header}
}
</script>
