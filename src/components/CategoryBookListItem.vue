<template>
  <li class="book-box">
    <div class="book-info">
      <div class="book-image">
        <router-link to="/">
          <img
            :src="require('@/assets/images/books/' + book.imageFile)"
            :alt="book.title"
            width="200"
          />
        </router-link>
        <button v-show="book.isPublic" class="secondary-button read-now">
          Read Now
        </button>
      </div>
      <div class="book-title">{{ book.title }}</div>
      <div class="book-author">By {{ book.author }}</div>
      <div class="book-price">${{ (book.price / 100).toFixed(2) }}</div>
    </div>
    <button class="secondary-button add-to-cart-button">Add to Cart</button>
  </li>
</template>

<script>
export default {
  name: "categoryBookListItem",
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.book-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--secondary-back-color);
  color: var(--secondary-text-color);
  padding: 1em;
  gap: 1em;
}

.book-info {
  display: flex;
  flex-direction: column;
  gap: 0.25em;
}

.book-title {
  font-weight: bold;
  font-size: larger;
  max-width: 10em;
}

.book-author {
  font-style: italic;
}

.read-now {
  border-radius: 100%;
  font-size: small;
  width: 50px;
  height: 50px;
  z-index: 2;
  text-align: center;
  transform: translateY(-195px);
  margin-left: 150px;
}

.book-price {
  color: #111111;
  font-size: xx-large;
}
.add-to-cart-button {
  align-self: flex-end;
  width: 110px;
  font-size: medium;
  line-height: 2em;
  font-weight: bold;
}
</style>
