<template>
  <div class="header-dropdown">
    <button class="secondary-button categories-button">
      Categories <i class="fa-solid fa-caret-down"></i>
    </button>
    <ul>
      <router-link to="../category/0-15_months" tag="li">
        0-12 months
      </router-link>
      <router-link to="../category/12-18_months" tag="li">
        8-15 months
      </router-link>
      <router-link to="../category/1-3_years" tag="li"> 1-3 years </router-link>
      <router-link to="../category/3-6_years" tag="li"> 3-6 years </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HeaderDropdownMenu",
};
</script>

<style scoped>
.header-dropdown {
  position: relative;
}

.categories-button {
  background-color: var(--primary-back-dark);
  margin-top: 0.25em;
  border: none;
  font: var(--default-font-family);
}
.categories-button:hover {
  color: black;
}

.header-dropdown ul {
  background-color: var(--primary-button-color);
  color: #ffffff;
  display: none;
}

.header-dropdown li {
  padding: 0.25em 0.5em;
}

.header-dropdown a {
  color: black;
  text-decoration: none;
}

.header-dropdown li:hover {
  background: var(--secondary-button-color);
}

.header-dropdown:hover ul {
  display: block;
  position: absolute;
  min-width: 8em;
  z-index: 1;
  cursor: pointer;
}
</style>
