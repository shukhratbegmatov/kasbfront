<template>
  <div>
    <Header></Header>
    <div class="container">
        <div class="login">
          <div class="login_title">
            Tizmga kirish
          </div>
          <div class="row">
            <div class="col-xl-6">
              <router-link to="/email-login" class="decoration">
                <div class="logo_email">
                  <div>Email</div>

                  <img src="../../../assets/images/image56.svg" alt="">

                </div>
              </router-link>
            </div>
            <div class="col-xl-6">
              <router-link to="/" class="decoration">
                <div class="logo_email">
                  <div>Telefon raqam</div>

                  <img src="../../../assets/images/image55.svg" alt="">
                </div>
              </router-link>
            </div>
          </div>
          <div class="reg_link_title">
            Ro'yxatdan o'tish
          </div>
          <div class="reg_link">
            <router-link to="/registration" class="decoration"> Registratsiya</router-link>
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
  components: {Footer, Header},


}
</script>
