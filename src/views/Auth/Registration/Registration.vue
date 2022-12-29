<template>
  <div>
    <Header></Header>

    <div class="container">
      <h1 class="text-center h1_main"> Ro'yxatdan o'tish </h1>
      <div class="reg_main">
        <div class="form_main">
          <div class="form_tab">
            <div class="tab_1 active">
              <button>Email</button>
            </div>
            <div class="tab_1">
              <button>Telefon raqam</button>
            </div>
          </div>
          <div class="border_main"></div>
         <div class="reg_forms">
           <form @submit.prevent="regIstration()">
             <div class="input_text">
               <input type="email" v-model="email" placeholder="Email">
             </div>
             <div class="input_text">
               <input type="password" v-model="password" placeholder="Password">
             </div>
             <div class="log_btn reg_btn">
               <button>Отправить</button>
             </div>
           </form>
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
    regIstration(){
      this.$axiosDefault.post('/students/register/',{
        "email":this.email,
        "password":this.password
      })
      .then(()=>{
        this.$toast("Emailga xabar jo'natildi iltimos tekshirib ko'ring", {
          timeout: 10000,
          type:"success"
        });
      })
      .catch(()=>{
        this.$toast("Bu email oldin ro'yxatdan o'tgan", {
          timeout: 10000,
          type:"error"
        });
      })

    }
  }

}
</script>
