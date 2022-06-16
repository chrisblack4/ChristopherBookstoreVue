<template>
  <nav class="category-nav">
    <section class="nav_names">
      <ul class="/category-buttons">
        <li class="button selected-category-button">0-12 m</li>
        <router-link
          to="../category/8-15_months"
          tag="li"
          class="button unselected-category-button"
        >
          8-15 m
        </router-link>
        <router-link
          to="../category/1-3_years"
          tag="li"
          class="button unselected-category-button"
        >
          1-3 y
        </router-link>
        <router-link
          to="../category/3-6_years"
          tag="li"
          class="button unselected-category-button"
        >
          3-6 y
        </router-link>
      </ul>
    </section>
    <section class="Trainimg">
      <router-link to="/" class="TrainConductor">
        <img
          src="@/assets/images/site/Trainman_1.png"
          alt="Trainman"
          width="450px"
          height="auto"
        />
      </router-link>
    </section>
  </nav>
</template>

<script>
export default {
  name: "CategoryNav",
};
</script>

<style scoped>
.category-nav {
  display: flex;
  flex-direction: row;
  text-align: center;
  background-color: var(--secondary-back-color);
}

.Trainimg {
  padding-left: 20em;
  justify-items: center;
}

.button.selected-category-button {
  background-color: var(--secondary-button-color);
}

.button.unselected-category-button,
.button.unselected-category-button:visited {
  background-color: var(--secondary-back-color);
  color: #111111;
}

.button.unselected-category-button:hover,
.button.unselected-category-button:active {
  background-color: var(--primary-back-dark);
}
</style>
