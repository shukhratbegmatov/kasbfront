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
          <div class="vide_card">
            <div class="row">
              <div class="col-xl-9">

                <video controls width="100%">
                  <source src="../../../assets/images/912899371.mp4" type="video/mp4">
                </video>
              </div>
              <div class="col-xl-3">
                <div class="menus_main">
                  <button class="menu_videos" v-for="(item,ins) in 10 " :key="ins">

                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1418_34066)">
                        <path d="M9 0.041748C7.21997 0.041748 5.47992 0.573254 3.99987 1.56905C2.51983 2.56486 1.36628 3.98022 0.685088 5.63618C0.00389955 7.29214 -0.17433 9.1143 0.172937 10.8723C0.520204 12.6302 1.37737 14.245 2.63604 15.5124C3.89472 16.7798 5.49836 17.6429 7.24419 17.9926C8.99002 18.3423 10.7996 18.1628 12.4442 17.4769C14.0887 16.791 15.4943 15.6294 16.4832 14.1391C17.4722 12.6488 18 10.8966 18 9.10425C17.9962 6.7019 17.0468 4.39905 15.3598 2.70033C13.6728 1.00161 11.3858 0.0455826 9 0.041748V0.041748ZM12.7872 9.40875L7.0272 13.0337C6.97049 13.0683 6.90619 13.0882 6.84 13.0917C6.7797 13.0921 6.72028 13.0771 6.66721 13.0483C6.61089 13.0164 6.56393 12.9701 6.53106 12.9141C6.49819 12.8581 6.48058 12.7943 6.48 12.7292V5.47925C6.48058 5.41419 6.49819 5.35044 6.53106 5.29443C6.56393 5.23842 6.61089 5.19214 6.66721 5.16025C6.72251 5.12631 6.78603 5.10835 6.85081 5.10835C6.91558 5.10835 6.9791 5.12631 7.03441 5.16025L12.7944 8.78525C12.8466 8.81683 12.8898 8.86146 12.9198 8.91482C12.9497 8.96818 12.9655 9.02844 12.9655 9.08975C12.9655 9.15105 12.9497 9.21132 12.9198 9.26468C12.8898 9.31803 12.8466 9.36267 12.7944 9.39425L12.7872 9.40875Z" fill="#0E1D25"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1418_34066">
                          <rect width="18" height="18.125" fill="white" transform="translate(0 0.041748)"/>
                        </clipPath>
                      </defs>
                    </svg>

                    Доступ к фотошопу
                  </button>
                </div>
                  </div>
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
