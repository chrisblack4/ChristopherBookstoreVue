<template>
  <header class="container">
    <section class="bookstore-logoandCategory">
      <router-link to="/">
        <img
          src="@/assets/images/site/BFB_logo.png"
          alt="BFB Bookstore Logo"
          width="150px"
          height="auto"
        />
      </router-link>
      <header-dropdown-menu></header-dropdown-menu>
    </section>
    <section class="title-and-search-bar">
      <router-link to="/" tag="h1" class="text-logo">
        Baby's First Books
      </router-link>
      <div class="search-bar">
        <input
          class="search-input"
          type="text"
          placeholder="Search"
          aria-label="search field"
        />
        <button class="search-button" aria-label="submit search">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </section>
    <section class="Cartandlogin">
      <div class="login">Christopher</div>
      <div class="shopping-cart">
        <div class="cart-icon icon-button">
          <i class="fa-solid fa-cart-arrow-down"></i>
        </div>
        <div class="cart-count">5</div>
      </div>
    </section>
  </header>
</template>

<script>
import HeaderDropdownMenu from "@/components/HeaderDropdown";
export default {
  name: "AppHeader",
  components: { HeaderDropdownMenu },
  component: {
    HeaderDropdownMenu,
  },
};
</script>

<style scoped>
header {
  background: var(--primary-back-dark);
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1em;
  gap: 1em;
}

.bookstore-logoandCategory {
  text-align: left;
  display: flex;
  gap: 0.5rem;
  justify-content: end;
  align-items: end;
}

.text-logo {
  font-family: var(--title-font-family);
  text-align: left;
  font-size: 2rem;
  padding-bottom: 0.3em;
}
.Cartandlogin {
  display: flex;
  gap: 1em;
  padding-top: 2em;
  padding-right: 0.5em;
}

.login {
  padding-left: 1.3em;
  margin-bottom: -1em;
}

.search-bar {
  padding: 3px;
  color: #111;
  background-color: #ffffff;
  display: flex;
  align-items: flex-start;
  border: solid 2px var(--secondary-button-color);
  border-radius: 100vh;
  size: var(--default-font-size);
}

.search-input {
  width: 75px;
  align-items: inherit;
  transition: width 300ms ease-in-out;
  padding-left: 0.05em;
  border: none;
  outline: 0;
  border-radius: 100vh;
}

.search-input:focus,
.search-input:active {
  width: 100px;
}

.search-button {
  background-color: var(--secondary-back-color);
  color: var(--default-dark-text-color);
  border: var(--secondary-button-color);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10em;
}

.shopping-cart {
  text-align: center;
}

.cart-count {
  color: white;
  font-weight: bold;
  transform: translateY(-40px);
}

@media (max-width: 600px) {
  header {
    flex-direction: column;
  }
  .title-and-search-bar {
    text-align: end;
    width: 75%;
  }

  .header-dropdown {
    text-align: left;
    text-align: end;
  }
}
</style>
