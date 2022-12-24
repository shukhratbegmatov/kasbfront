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
          <div class="resume_body">

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
