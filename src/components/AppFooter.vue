<template>
  <footer class="container">
    <section class="copyrighted">
      <i class="far fa-copyright"></i>
      <span>2022</span>
      <span> Baby's First Book, LLC</span>
    </section>
    <section class="Contactinfo">
      <router-link to="/">About</router-link>
      <router-link to="/">Contact</router-link>
      <router-link to="/">Directions</router-link>
    </section>
    <section class="social-media-links">
      <router-link to="/" class="facebook-link">
        <img
          src="@/assets/images/site/FB_logo.png"
          alt="Twitter Logo"
          width="50px"
          height="auto"
        />
      </router-link>
      <router-link to="/" class="Twitter-link">
        <img
          src="@/assets/images/site/tw_logo.png"
          alt="Twitter Logo"
          width="50px"
          height="auto"
      /></router-link>
    </section>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
footer {
  background: var(--primary-back-dark);
  display: flex;
  padding: 1.5rem !important;
  justify-content: space-between;
  flex-shrink: 0;
}

footer .Contactinfo a:not(:first-child) {
  padding-left: 0.5em;
  border-left: 1px solid var(--default-text-color);
}
footer a:hover {
  color: #57b54f;
}
.copyrighted {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--default-text-color);
  gap: 0.5em;
  text-decoration: none;
}

.Contactinfo {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--default-text-color);
  gap: 0.5em;
  text-decoration: none;
  justify-items: center;
}

.social-media-links {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--default-text-color);
  gap: 0.5em;
  text-decoration: none;
}

.Contactinfo a:hover {
  text-decoration: underline;
  color: #57b54f;
}

.social-media-links {
  text-align: center;
  cursor: pointer;
  font-size: 0.7em;
  gap: 1.5em;
}

@media (max-width: 900px) {
  footer {
    flex-direction: column;
    align-items: center;
    gap: 0.5em;
  }
}
</style>
