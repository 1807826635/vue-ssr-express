import Vue from "vue";
import {routers} from "./router/index";
import App from "./App.vue";

export default (context) => {
  const router = routers();
  const app = new Vue({
    router,
    components: { App },
    template: '<App/>'
  });
  return {
    app,
    router
  }
}