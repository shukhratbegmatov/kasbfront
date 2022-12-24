<template>
  <div class="t_login">
    <div class="t_login_img">

    </div>
    <div class="t_login_form">
      <div class="login_forms">
        <div>
          <div class="text_login">O'qituvchi tizimiga kirish</div>
          <form @submit.prevent="login()">
            <div>
              <input type="text" placeholder="Username">
            </div>
            <div>
              <input type="password" placeholder="Parol">
            </div>
            <div class="login_btn">
              <button>
                <span>Kirish</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    login(){
      this.$router.push('/teacher-dashboard')
    }
  }
}
</script>
