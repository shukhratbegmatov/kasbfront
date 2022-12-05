<template>
  <div>
    <Header></Header>
    <section>
      <div class="container">
        <h1 class="text-center h1_main">Kasbga yo'naltirish testi haqida ma'lumot</h1>
        <div class="about_card">
          <div class="about_card_imf">
            <div>
              <img src="../assets/images/image333.png" alt="">
            </div>
            <div>
              <p>
                Sinov bir necha taniqli xalqaro va mahalliy psixologik testlarning kombinatsiyasi bo'lib, ular uzoq vaqt
                davomida o'zlarini isbotladilar. Xususiy amaliyotda muvaffaqiyatli sinovdan o'tkazilib, u diqqatga
                sazovor natijalarni ko'rsatdi va endi hamma uchun deyarli har qanday zamonaviy qurilmadan o'tish mumkin
                bo'lgan onlayn versiya sifatida mavjud. O'rta maktab o'quvchilari (9-11 sinflar) va kattalar uchun juda
                mos keladi.

                Oson o'tish uchun test 3 ta katta blokga va 14 ta subtestga bo'linadi, ular ma'lum bir tartibda o'tish
                uchun taklif etiladi.

                Sinovning tuzilishi quyidagicha ifodalanishi mumkin:
              </p>
            </div>
          </div>
          <div class="about_body">
            <div class="row">
              <div class="col-xl-6">
                <div class="about_ul_title">
                  Professional yo'nalishlar va moyilliklar bloki:
                </div>
                <ul>
                  <li>Kasbiy faoliyatning ustuvor yo'nalishlari;</li>
                  <li>Kasbiy moyillikni aniqlash;</li>
                </ul>
              </div>
              <div class="col-xl-6">
                <div class="about_ul_title">
                  Aql tuzilishi bloki:
                </div>
                <ul>
                  <li>Umumiy xabardorlik;</li>
                  <li>Mavhum fikrlash;</li>
                  <li>Mantiqiy fikrlash;</li>
                </ul>
              </div>
              <div class="col-xl-6">
                <div class="about_ul_title">
                  Shaxsiy tuzilish bloki:
                </div>
                <ul>
                  <li>Ekstraversiya;</li>
                  <li>Tajribaga ochiqlik;</li>
                  <li>Samimiylik</li>
                  <li>Yaxshi niyat;</li>
                </ul>
              </div>

            </div>
          </div>
          <div class="about_desc">
            Har bir subtestdan so'ng siz tanaffus qilishingiz va istalgan qulay vaqtda davom etishingiz mumkin – to'liq
            o'tgan subtestlarning natijasi saqlanib qoladi. Shunday qilib, to'liq o'tish uchun etarli miqdordagi vaqt
            qoplanadi va hamma ham bir vaqtning o'zida sarflashga qodir emas.
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  components: {Footer, Header}
}
</script>
