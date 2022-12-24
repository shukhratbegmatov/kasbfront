<template>
  <div>
    <div class="mobile_menu" :class="{'active':isActiveM}">
       <div class="mob_menus">
        <ul>
          <li>
            <router-link to="/professions">
              Kasblar
            </router-link>
          </li>
          <li>
            <router-link to="/intro-resume">
              REZYUME YARATING
            </router-link>
          </li>
          <li>
            <router-link to="/about">
              biz haqimizda
            </router-link>
          </li>
          <li>
            <router-link to="/trainings">
              KURSLAR
            </router-link>
          </li>
        </ul>

        <div class="m_user_action">
          <div class="lang">
                  <span>
                    RU
                  </span>
            <button>
              <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.74561 10.417L11.3368 15.6253L15.9279 10.417H6.74561Z" fill="#2B2B2B"/>
              </svg>
            </button>
          </div>
          <div>
            <router-link to="/login" class="decoration">
              <div>
                Профиль
              </div>
            </router-link>
          </div>

        </div>
      </div>
    </div>
    <header>
      <div class="container">
        <div class="web_head">
            <nav class="main_nav">
              <div class="nav_brand">
                <router-link to="/">
                  KASB.MAKTAB.UZ
                </router-link>
              </div>
              <div >
                <button class="mobile_nave" @click="isActiveM=!isActiveM">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.66699 7H23.3337M4.66699 14H23.3337M4.66699 21H23.3337" stroke="#2B2B2B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
              <div class="collapses">
                <ul class="navbar">
                  <li class="nav-item">
                    <router-link to="/professions" class="nav-link">
                      Kasblar
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/intro-resume" class="nav-link">
                      REZYUME YARATING
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/about" class="nav-link">
                      biz haqimizda
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/trainings" class="nav-link">
                      KURSLAR
                    </router-link>
                  </li>
                </ul>
              </div>
              <div class="user_action">
                <div>
                  <router-link to="/login" class="decoration">
                    <div>
                      Профиль
                    </div>
                  </router-link>
                </div>
                <div class="lang">
                  <span>
                    RU
                  </span>
                  <button>
                    <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.74561 10.417L11.3368 15.6253L15.9279 10.417H6.74561Z" fill="#2B2B2B"/>
                    </svg>
                  </button>
                </div>
              </div>
            </nav>
        </div>
      </div>
    </header>

  </div>
</template>
<script>
export default {
  data(){
    return{
      isActiveM:false
    }
  }
}
</script>
