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
                     Результаты
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
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
