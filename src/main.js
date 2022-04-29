import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import "./assets/css/index.css";

import { projectAuth } from "./firebase/config";

// 聽取auth之後再渲染app

let app;

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .mount("#app");
  }
});
