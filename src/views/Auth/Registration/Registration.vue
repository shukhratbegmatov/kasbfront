<template>
  <div>
    <Header></Header>

    <div class="container">
      <h1 class="text-center h1_main"> РЕгистрация </h1>
      <div class="reg_main">
        <div class="form_main">
          <div class="form_tab">
            <div class="tab_1 active">
              <button>eMAIL</button>
            </div>
            <div class="tab_1">
              <button>Телефонный номер</button>
            </div>
          </div>
          <div class="border_main"></div>
         <div class="reg_forms">
           <form action="">
             <div class="input_text">
               <input type="email" placeholder="Email">
             </div>
             <div class="input_text">
               <input type="password" placeholder="Password">
             </div>
             <div class="input_text">
               <input type="text" placeholder="Серия паспорта">
             </div>
             <div class="input_text">
               <input type="text" placeholder="Имя">
             </div>
             <div class="input_text">
               <input type="text" placeholder="Фамилия">
             </div>
             <div class="input_text">
               <input type="text" placeholder="Регион ">
             </div>
             <div class="input_text">
               <input type="text" placeholder="Город/Район">
             </div>
             <div class="input_text">
               <input type="text" placeholder="Школа">
             </div>
             <div class="input_text">
               <input type="text" placeholder="Номер и буква класса">
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
  components: {Footer, Header}
}
</script>
