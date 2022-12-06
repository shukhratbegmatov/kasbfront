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
                    <img src="../../../assets/images/Ellipse32.png" alt="" class="img_prof">
                    <label for="changeImage">
                      <img src="../../../assets/images/Vector.svg" alt="">
                    </label>
                    <input type="file" id="changeImage" class="d-none">
                  </div>
                  <div class="change_bio">
                    <input type="text" placeholder="Био">
                  </div>
                  <div class="clear_img">
                    <label>
                      Удалить Фото
                    </label>
                  </div>
                  <div class="change_password_title">
                    Изменить Пароль
                  </div>
                  <div class="change_password">
                    <div>

                      <div class="change_input_p">
                        <input type="password"  placeholder="Старый пароль">
                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.9094 5.28646C13.4971 2.53099 10.7013 0.666664 7.49999 0.666664C4.29868 0.666664 1.50207 2.53229 0.0906108 5.28672C0.0310383 5.40456 0 5.53475 0 5.66679C0 5.79884 0.0310383 5.92903 0.0906108 6.04687C1.50285 8.80234 4.29868 10.6667 7.49999 10.6667C10.7013 10.6667 13.4979 8.80104 14.9094 6.04661C14.9689 5.92877 15 5.79858 15 5.66653C15 5.53449 14.9689 5.4043 14.9094 5.28646ZM7.49999 9.41666C6.75831 9.41666 6.03328 9.19673 5.4166 8.78467C4.79991 8.37262 4.31927 7.78695 4.03544 7.10173C3.75161 6.4165 3.67735 5.6625 3.82204 4.93508C3.96674 4.20765 4.32389 3.53946 4.84834 3.01501C5.37278 2.49057 6.04097 2.13341 6.7684 1.98872C7.49583 1.84402 8.24983 1.91829 8.93505 2.20212C9.62027 2.48594 10.2059 2.96659 10.618 3.58328C11.0301 4.19996 11.25 4.92498 11.25 5.66666C11.2502 6.15919 11.1534 6.64693 10.965 7.10201C10.7767 7.55709 10.5004 7.97058 10.1522 8.31885C9.8039 8.66712 9.39041 8.94333 8.93533 9.1317C8.48025 9.32007 7.99251 9.4169 7.49999 9.41666ZM7.49999 3.16666C7.27684 3.16978 7.05514 3.20298 6.84087 3.26536C7.01749 3.50538 7.10225 3.80075 7.07977 4.0979C7.05729 4.39505 6.92906 4.67431 6.71834 4.88502C6.50763 5.09574 6.22837 5.22397 5.93122 5.24645C5.63407 5.26892 5.3387 5.18417 5.09868 5.00755C4.96201 5.51109 4.98668 6.04481 5.16923 6.53359C5.35177 7.02237 5.683 7.44161 6.11629 7.73228C6.54958 8.02295 7.06311 8.17043 7.58461 8.15396C8.10611 8.13748 8.60931 7.95788 9.02339 7.64044C9.43747 7.323 9.74158 6.8837 9.89291 6.38437C10.0442 5.88504 10.0352 5.35083 9.86699 4.85692C9.69881 4.36301 9.37997 3.93428 8.95536 3.63107C8.53075 3.32786 8.02174 3.16544 7.49999 3.16666Z" fill="#2B2B2B"/>
                        </svg>
                      </div>
                      <div class="change_input_p">
                        <input type="password"  placeholder="Новый Пароль">
                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.9094 5.28646C13.4971 2.53099 10.7013 0.666664 7.49999 0.666664C4.29868 0.666664 1.50207 2.53229 0.0906108 5.28672C0.0310383 5.40456 0 5.53475 0 5.66679C0 5.79884 0.0310383 5.92903 0.0906108 6.04687C1.50285 8.80234 4.29868 10.6667 7.49999 10.6667C10.7013 10.6667 13.4979 8.80104 14.9094 6.04661C14.9689 5.92877 15 5.79858 15 5.66653C15 5.53449 14.9689 5.4043 14.9094 5.28646ZM7.49999 9.41666C6.75831 9.41666 6.03328 9.19673 5.4166 8.78467C4.79991 8.37262 4.31927 7.78695 4.03544 7.10173C3.75161 6.4165 3.67735 5.6625 3.82204 4.93508C3.96674 4.20765 4.32389 3.53946 4.84834 3.01501C5.37278 2.49057 6.04097 2.13341 6.7684 1.98872C7.49583 1.84402 8.24983 1.91829 8.93505 2.20212C9.62027 2.48594 10.2059 2.96659 10.618 3.58328C11.0301 4.19996 11.25 4.92498 11.25 5.66666C11.2502 6.15919 11.1534 6.64693 10.965 7.10201C10.7767 7.55709 10.5004 7.97058 10.1522 8.31885C9.8039 8.66712 9.39041 8.94333 8.93533 9.1317C8.48025 9.32007 7.99251 9.4169 7.49999 9.41666ZM7.49999 3.16666C7.27684 3.16978 7.05514 3.20298 6.84087 3.26536C7.01749 3.50538 7.10225 3.80075 7.07977 4.0979C7.05729 4.39505 6.92906 4.67431 6.71834 4.88502C6.50763 5.09574 6.22837 5.22397 5.93122 5.24645C5.63407 5.26892 5.3387 5.18417 5.09868 5.00755C4.96201 5.51109 4.98668 6.04481 5.16923 6.53359C5.35177 7.02237 5.683 7.44161 6.11629 7.73228C6.54958 8.02295 7.06311 8.17043 7.58461 8.15396C8.10611 8.13748 8.60931 7.95788 9.02339 7.64044C9.43747 7.323 9.74158 6.8837 9.89291 6.38437C10.0442 5.88504 10.0352 5.35083 9.86699 4.85692C9.69881 4.36301 9.37997 3.93428 8.95536 3.63107C8.53075 3.32786 8.02174 3.16544 7.49999 3.16666Z" fill="#2B2B2B"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <button class="edit_btn change_btn">
                    ИЗМЕНИТЬ
                  </button>
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
