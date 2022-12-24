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
          <div class="settings_prof">
            <div class="images_prof">
              <img src="../../../assets/images/Ellipse32.png" alt="">
            </div>
            <div class="prof_data">
              <div class="pro_names">Икромов Джавлон Абукаюмович</div>
              <div class="prof_mail">Ikromovjavlon@gmail.com</div>
            </div>
          </div>
          <div class="card_profiles_change">
           <div class="container">
             <div class="change_input">
               <div class="row">
                 <div class="col-xl-6">
                   <div>
                     <label>Имя</label>
                   </div>
                   <div>
                     <input type="text">
                   </div>
                 </div>
                 <div class="col-xl-6">
                   <div>
                     <label>Фамилия</label>
                   </div>
                   <div>
                     <input type="text">
                   </div>
                 </div>
               </div>
             </div>
             <div class="change_input mt-4">
               <div class="row">
                 <div class="col-xl-6">
                   <div>
                     <label>Област</label>
                   </div>
                   <div>
                     <input type="text">
                   </div>
                 </div>
                 <div class="col-xl-6">
                   <div>
                     <label>Район</label>
                   </div>
                   <div>
                     <input type="text">
                   </div>
                 </div>
               </div>
             </div>
             <div class="change_input mt-4">
               <div class="row">
                 <div>
                   <label>Э-Маил</label>
                 </div>
                 <div>
                   <input type="email">
                 </div>
               </div>
             </div>
             <div class="change_img">
               <div>
                 <div class="info_img">
                   <input type="file" id="info_img">
                   <label for="info_img">
                     <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <rect x="3.5" y="3" width="40" height="40" rx="20" fill="#F2F4F7"/>
                       <g clip-path="url(#clip0_1470_8967)">
                         <path d="M26.8335 26.3332L23.5002 22.9999M23.5002 22.9999L20.1669 26.3332M23.5002 22.9999V30.4999M30.4919 28.3249C31.3047 27.8818 31.9467 27.1806 32.3168 26.3321C32.6868 25.4835 32.7637 24.5359 32.5354 23.6388C32.307 22.7417 31.7865 21.9462 31.0558 21.3778C30.3251 20.8094 29.4259 20.5005 28.5002 20.4999H27.4502C27.198 19.5243 26.7278 18.6185 26.0752 17.8507C25.4225 17.0829 24.6042 16.4731 23.682 16.0671C22.7597 15.661 21.7573 15.4694 20.7503 15.5065C19.7433 15.5436 18.7578 15.8085 17.8679 16.2813C16.9779 16.7541 16.2068 17.4225 15.6124 18.2362C15.018 19.05 14.6158 19.9879 14.436 20.9794C14.2563 21.9709 14.3036 22.9903 14.5746 23.961C14.8455 24.9316 15.3329 25.8281 16.0002 26.5832" stroke="#043936" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                       </g>
                       <rect x="3.5" y="3" width="40" height="40" rx="20" stroke="#043936" stroke-opacity="0.3" stroke-width="6"/>
                       <defs>
                         <clipPath id="clip0_1470_8967">
                           <rect width="20" height="20" fill="white" transform="translate(13.5 13)"/>
                         </clipPath>
                       </defs>
                     </svg>
                   </label>

                 </div>
                 <div class="info_text">
                   <span>Нажмите, чтобы загрузить</span>
                   или перетащите
                 </div>
                 <div class="info_size">
                   SVG, PNG, JPG или GIF (Макс. 800x400px)
                 </div>
               </div>
             </div>
           </div>
            <div class="button_main_p">
              <button class="remove">Отмена</button>
              <button class="save">Сохранить изменения</button>
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
