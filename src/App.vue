<template>
  <div id="app">
    <!--       :class="{ appHero: $route.name === 'home-view' }">-->
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
.appHero {
  background-image: url("@/assets/images/site/Graphic Design2.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-repeat: no-repeat;
}
</style>
