<template>
  <div>
    <Header></Header>
    <div class="container">
      <div class="login">
        <div class="login_title">
          Авторизация
        </div>
        <div class="row">
          <div class="col-xl-4">
            <img src="../../../assets/images/image57.png" alt="">
          </div>
          <div class="col-xl-4">
            <div class="log_form">
             <div>
               <form action="">
                 <div class="input_text">
                   <input type="email" placeholder="Email">
                 </div>
                 <div class="input_text">
                   <input type="password" placeholder="Password">
                 </div>
                 <div class="forgot_password">
                   <router-link to="/" class="decoration">
                     Сбросить пароль
                   </router-link>
                 </div>
                 <div class="log_btn">
                   <button>Войти</button>
                 </div>
               </form>
             </div>
            </div>
          </div>
          <div class="col-xl-4">
            <img src="../../../assets/images/image58.png" alt="">
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
