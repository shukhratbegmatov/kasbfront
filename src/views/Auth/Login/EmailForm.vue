<template>
  <div>
    <Header></Header>
    <div class="container">
      <div class="login">
        <div class="login_title">
          Kirish
        </div>
        <div class="row">
          <div class="col-xl-4">
            <img src="../../../assets/images/image57.png" alt="">
          </div>
          <div class="col-xl-4">
            <div class="log_form">
             <div>
               <form @submit.prevent="login()">
                 <div class="input_text">
                   <input type="email" v-model="email" placeholder="Email">
                 </div>
                 <div class="input_text">
                   <input type="password" v-model="password" placeholder="Parol">
                 </div>
                 <div class="forgot_password">
                   <router-link to="/" class="decoration">
                    Parolni tiklash
                   </router-link>
                 </div>
                 <div class="log_btn">
                   <button> Kirish</button>
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
  components: {Footer, Header},
  data(){
    return{
      email:'',
      password:''
    }
  },
  methods:{
    login(){
      this.$axiosDefault.post('/students/login/',{
        "email":this.email,
        "password":this.password
      })
          .then(res=>{
            localStorage.setItem('reg_token',res.data.access)
            this.$store.dispatch('getMe')
            this.$router.push('/')

            })
          .catch(()=>{
            this.$toast("Email yoki parol xato ", {
              timeout: 2000,
              type:"error"
            });
          })

    }
  }
}
</script>
