<template>
  <div>
    <Header></Header>

    <div class="container">
      <div class="profile_title">
        Мои  профил
      </div>
      <div class="row">
        <div class="col-xl-3">
          <SidebarMain></SidebarMain>
        </div>
        <div class="col-xl-9">
          <div class="profile_card">
           <div class="row">
             <div class="col-xl-4">
               <div class="profile_img">
                 <img src="../../../assets/images/Ellipse32.png" alt="">
               </div>
             </div>
             <div class="col-xl-8">
                <div>
                  <div class="profile_c_text">
                    Число входов 265
                  </div>
                  <div class="prof_name">
                    Икромов Джавлон Абукаюмович
                  </div>
                  <div class="main_position">
                    Темперемент
                  </div>
                  <div class="main_position">
                    Последний результат теста
                  </div>
                  <div class="main_position">
                    Интересно
                  </div>
                  <div class="main_position">
                    Цель: Я буду мэром Ташкента
                  </div>
                </div>
               <div class="results">
                 <div class="result_count">
                   <div class="r_text">
                     Осталось дойти до цели
                   </div>
                   <div class="r_count">
                     1351
                   </div>
                   <div class="r-day">
                     день
                   </div>
                 </div>
                 <div class="result_img">
                   <img src="../../../assets/images/results.svg" alt="">
                 </div>
               </div>
             </div>
           </div>
          </div>
          <div class="people_r">
            <div class="peo_title">Результаты моих друзей</div>
            <div class="peo_table">
              <table>
                <thead>
                <tr>
                  <th>Имя и фамиля</th>
                  <th>IQ Уровен</th>
                  <th>Число входов</th>
                  <th>Пройденные курсы</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item,i) in 10" :key="i">
                  <td>Якубова Салима Давроновна</td>
                  <td>253</td>
                  <td>123</td>
                  <td>
                    <button>
                    Посмотреть Результаты
                  </button>
                  </td>
                </tr>
                </tbody>
              </table>
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
import SidebarMain from "../../../components/SidebarMain";
export default {
  components: {SidebarMain, Footer, Header}
}
</script>
