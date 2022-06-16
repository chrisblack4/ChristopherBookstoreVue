<template>
  <div class="content-container">
    <category-nav></category-nav>
    <category-book-list></category-book-list>
  </div>
</template>

<script>
import CategoryNav from "@/components/CategoryNav";
import CategoryBookList from "@/components/CategoryBookList";
export default {
  name: "categoryView",
  components: {
    CategoryNav,
    CategoryBookList,
  },
  /* created: function () {
    this.$store.dispatch("selectCategory", this.$route.params.name);
    this.$store.dispatch("fetchSelectedCategoryBooks");
  },
  */
};
</script>

<style scoped></style>
<template>
  <div>
    <category-nav></category-nav>
    <category-book-list :books="books"> </category-book-list>
  </div>
</template>

<script>
import CategoryNav from "@/components/CategoryNav";
import CategoryBookList from "@/components/CategoryBookList";

export default {
  name: "categoryView",
  components: {
    CategoryNav,
    CategoryBookList,
  },
  data: function () {
    return {
      books: [
        {
          bookId: 1001,
          title: "Big Fish, Little Fish",
          imageFile: "big-fish.gif",
          author: "Jonathan Litton",
          price: 599,
          isPublic: true,
        },
        {
          bookId: 1002,
          title: "I Love You to the \n" + "Moon and Back",
          imageFile: "moon-back.gif",
          author: "Amelia Hepworth",
          price: 756,
          isPublic: false,
        },
        {
          bookId: 1003,
          title: "Guess How Much\n" + " I Love You",
          imageFile: "guess-love.gif",
          author: "Sam McBratney",
          price: 1002,
          isPublic: false,
        },
        {
          bookId: 1004,
          title: "Where’s Spot?",
          imageFile: "where-spot.gif",
          author: "Eric Hill",
          price: 375,
          isPublic: true,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
