<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatform />
  </div>
</template>

<script>

// components
import Navbar from "../components/Navbar.vue";
import NewChatform from '../components/NewChatform.vue'
import ChatWindow from "../components/ChatWindow.vue"

// composables
import getUser from '../composables/getUser'

import { watch } from 'vue'
import { useRouter } from 'vue-router'
export default {
  components: {
    Navbar,
    NewChatform,
    ChatWindow
  },
  setup() {
    const { user } = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user.value) {
        router.push({ name: "welcome" });
      }
    });

    return { user };
  },
};
</script>