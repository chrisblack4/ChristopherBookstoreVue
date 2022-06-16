<template>
  <div class="home-page_middle">
    <section class="bookstore-long-Logo">
      <div class="text-long-logo">
        <p class="LogoText">Baby's First Books</p>
      </div>
      <router-link to="/">
        <img
          src="@/assets/images/site/BFB_long_logo.png"
          class="BFB_Bookstore_long_Logo"
          alt="BFB_Bookstore_long_Logo"
          width="300px"
          height="auto"
        />
      </router-link>
      <div class="text-wonder">
        <p class="wonder">Opening a World of Wonder</p>
      </div>
      <div class="buttontoshop">
        <router-link
          to="../category/classics"
          tag="li"
          class="ShopButton tertiary-button"
          >SHOP FOR BOOKS
        </router-link>
      </div>
    </section>
    <section class="Babyimage">
      <router-link to="/">
        <img
          src="@/assets/images/site/BFB_babysleeping.png"
          alt="BFB Bookstore long Logo"
          width="710px"
          height="auto"
        />
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
header {
  background-color: var(--secondary-back-color);
}

.home-page_middle {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  background-color: var(--secondary-back-color);
}

.bookstore-long-Logo {
  justify-content: space-between;
  height: 100%;
  align-items: center;
  align-content: center;
  align-self: center;
  justify-items: center;
  padding-top: 8em;
  padding-bottom: 16em;
  padding-left: 9em;
}

.text-long-logo {
  color: var(--secondary-text-color);
  font-family: var(--title-font-family);
  font-size: 2.2rem;
  padding-bottom: 0.3em;
  font-weight: bolder;
}

.text-wonder {
  color: var(--secondary-text-color);
  font-family: var(--title-font-family);
  font-size: 1.4rem;
  padding-bottom: 0.3em;
  font-weight: bolder;
}

.BFB_Bookstore_long_Logo {
  align-items: center;
  align-content: center;
}
.buttontoshop {
  justify-content: center;
  align-items: center;
  padding-left: 3em;
}

.ShopButton {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  text-align: center;
  flex-direction: column;
  justify-self: center;
  align-self: center;
}

a:hover {
  color: white;
}

@media (max-width: 900px) {
  .button-holder {
    text-align: center;
  }
}
</style>
