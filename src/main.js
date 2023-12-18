import { createApp } from "vue";
import App from "./App.vue";
import components from "./components/UI";
import router from "./router/router";
import VIntersection from "@/directives/VIntersection";
import directives from "@/directives";
import store from "@/store";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(router).use(store).mount("#app");

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});
