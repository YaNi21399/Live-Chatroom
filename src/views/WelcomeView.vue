<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm @login="enterChat" />
      <p>
        沒有帳號嗎？
        <span class="switchFrom" @click="showLogin = false">註冊新帳號</span>
      </p>
    </div>
    <div v-else>
      <h2>Sign up</h2>
      <SignupForm @signup="enterChat" />
      <p>
        已經有帳號了嗎？
        <span class="switchFrom" @click="showLogin = true">進入登入頁面</span>
      </p>
    </div>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";

import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true);
    const router = useRouter();

    const enterChat = () => {
      router.push({ name: 'chatroom' });
    };

    return { showLogin, enterChat };
  },
};
</script>

<style lang="scss">
.welcome {
  text-align: center;
  padding: 20px 0;

  form {
    width: 300px;
    margin: 20px auto;
    label {
      display: block;
      margin: 20px 0 10px;
    }
    input {
      width: 100%;
      padding: 10px;
      border-radius: 20px;
      border: 1px solid #eee;
      outline: none;
      color: #999;
      margin: 10px auto;
    }
    button {
      margin: 20px auto;
      &:hover {
        cursor: pointer;
      }
    }
  }
  p {
    user-select: none;
  }

  .switchFrom {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      color: #777;
    }
  }
}
</style>
