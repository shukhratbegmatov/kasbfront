<template>
  <div class="mail_v">
    <Header></Header>
    <div class="container">
      <div class="reg_main">
        <div class="card-body card_main_one">
          <div class="wrapper text-center">
            <sweetalert-icon icon="success"></sweetalert-icon>
            <h2>Muvaffaqiyatli ro'yxatdan o'toldi!</h2>
            <button class="btn btn-primary" @click="$router.push('/settings')">Profile sahifaga o'tish</button>
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
    this.$axiosDefault.get('students/verify-email',{
      params:{
          'token':localStorage.getItem('reg_token')
      }
    })
    console.log(this.$route.query.token)
    localStorage.setItem('reg_token',this.$route.query.token)
  }

}
</script>
