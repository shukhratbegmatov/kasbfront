<template>
  <div>
    <Header></Header>

    <div class="container">
      <h1 class="text-center h1_main"> Ro'yxatdan o'tish </h1>
      <div class="reg_main">
        <div class="form_main">
          <div class="form_tab ">
            <div class="tab_1 w-100 active">
              <button @click="$router.push('/teacher/email-verify')" class="w-100">O'qituvchi</button>
            </div>
          </div>
          <div class="form_tab mt-4">
            <div class="tab_1 w-100 active">
              <button class="w-100" @click="$router.push('/student/email-verify')">O'quvchi</button>
            </div>
          </div>
          <div class="form_tab mt-4">
            <div class="tab_1 w-100 active">
              <button class="w-100">Oddiy foydalanuvchi</button>
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
  components: {Footer, Header},
  data(){
    return{
      email:'',
      password:'',
      passport_number:'',
      passport_jshshr:''
    }
  },
  mounted() {
    console.log(this.$route.query.token)
    localStorage.setItem('reg_token',this.$route.query.token)
  }

}
</script>
