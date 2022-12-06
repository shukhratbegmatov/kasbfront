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
                    Shaxsiy ma’lumotlar
                  </div>
                <form>
                  <div class="row">
                    <div class="col-xl-6">
                      <div class="prof_forms">
                        <div class="input_prof">
                          <label>Ismingiz</label>
                        </div>
                        <input type="text" >
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="prof_forms">
                        <div class="input_prof">
                          <label>Familiyangiz</label>
                        </div>
                        <input type="text" >
                      </div>
                    </div>

                    <div class="col-xl-6">
                      <div class="prof_forms">
                        <div class="input_prof">
                          <label>Viloyat</label>
                        </div>
                        <input type="text" >
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="prof_forms">
                        <div class="input_prof">
                          <label>Tuman</label>
                        </div>
                        <input type="text" >
                      </div>
                    </div>

                    <div class="col-xl-6">
                      <div class="prof_forms">
                        <div class="input_prof">
                          <label>Maktab #</label>
                        </div>
                        <input type="text" >
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="prof_forms">
                        <div class="input_prof">
                          <label>Sinf</label>
                        </div>
                        <input type="text" >
                      </div>
                    </div>
                    <div class="prof_inputs">
                      <div class="prof_titles">
                        <label>
                          <span>E-mail</span>
                          Телефон Номер
                        </label>
                      </div>
                      <input type="text">
                    </div>
                    <div class="prof_inputs">
                      <div class="prof_titles">
                        <label>
                          <span>Новый E-mail</span>
                          Новый Телефон Номер
                        </label>
                      </div>
                      <input type="text">
                    </div>
                  </div>
                  <button class="edit_btn">
                    ИЗМЕНИТЬ
                  </button>
                </form>
              </div>
              <div class="col-xl-3">
                <form>
                  <div class="form_image">
                    <img src="../../../assets/images/Ellipse32.png" alt="">
                    <label for="changeImage">
                      <img src="../../../assets/images/Vector.svg" alt="">
                    </label>
                    <input type="file" id="changeImage" class="d-none">
                  </div>
                </form>
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
