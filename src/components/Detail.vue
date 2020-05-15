<template>
<div>
    <div class="row row-about p-5" v-for="data in results" :key="data.idMeal">
        <div class="col-md-6 p-4">
            <img :src="data.strMealThumb" class="img-fluid"/>
        </div>
        <div class="col-md-6 p-4">
            <titlee :strtitle="data.strMeal"/>
            <cbadge :strvariant="variant1" :text="data.strCategory"/>
            <cbadge :strvariant="variant2" :text="data.strArea"/>
            <div v-if="user.loggedIn">
              <button
              @click="addFav(data.idMeal,data.strMealThumb,data.strMeal,data.strCategory)"
              class="btn btn-danger mt-4">Add To Favourites</button>
            </div>
            <p class="text-justify mt-4">
{{data.strIngredient1}} <span class="badge badge-pill badge-warning">{{data.strMeasure1}}</span>,
{{data.strIngredient2}} <span class="badge badge-pill badge-warning">{{data.strMeasure2}}</span>,
{{data.strIngredient3}} <span class="badge badge-pill badge-warning">{{data.strMeasure3}}</span>,
{{data.strIngredient4}} <span class="badge badge-pill badge-warning">{{data.strMeasure4}}</span>,
{{data.strIngredient5}} <span class="badge badge-pill badge-warning">{{data.strMeasure5}}</span>,
{{data.strIngredient6}} <span class="badge badge-pill badge-warning">{{data.strMeasure6}}</span>,
{{data.strIngredient7}} <span class="badge badge-pill badge-warning">{{data.strMeasure7}}</span>,
{{data.strIngredient8}} <span class="badge badge-pill badge-warning">{{data.strMeasure8}}</span>,
{{data.strIngredient9}} <span class="badge badge-pill badge-warning">{{data.strMeasure9}}</span>,
{{data.strIngredient10}} <span class="badge badge-pill badge-warning">{{data.strMeasure10}}</span>,
{{data.strIngredient11}} <span class="badge badge-pill badge-warning">{{data.strMeasure11}}</span>,
{{data.strIngredient12}} <span class="badge badge-pill badge-warning">{{data.strMeasure12}}</span>,
{{data.strIngredient13}} <span class="badge badge-pill badge-warning">{{data.strMeasure13}}</span>,
{{data.strIngredient14}} <span class="badge badge-pill badge-warning">{{data.strMeasure14}}</span>,
{{data.strIngredient15}} <span class="badge badge-pill badge-warning">{{data.strMeasure15}}</span>,
{{data.strIngredient16}} <span class="badge badge-pill badge-warning">{{data.strMeasure16}}</span>,
{{data.strIngredient17}} <span class="badge badge-pill badge-warning">{{data.strMeasure17}}</span>,
{{data.strIngredient18}} <span class="badge badge-pill badge-warning">{{data.strMeasure18}}</span>,
{{data.strIngredient19}} <span class="badge badge-pill badge-warning">{{data.strMeasure19}}</span>,
{{data.strIngredient20}} <span class="badge badge-pill badge-warning">{{data.strMeasure20}}</span>,
            </p>
            <p class="text-justify mt-4">
                {{ data.strInstructions }}
            </p>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import titlee from './Title.vue';
import cbadge from './Badge.vue';

const STORAGE_KEY = 'FAVOURITESDATA';

export default {
  name: 'Meals Detail',
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: 'user',
    }),
  },
  data() {
    return {
      variant1: 'success',
      variant2: 'info',
      results: '',
      fav: [],
    };
  },
  components: {
    titlee,
    cbadge,
  },
  mounted() {
    axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php', {
      params: {
        i: this.$route.params.id,
      },
    })
      .then((response) => {
        this.results = response.data.meals;
      });
  },
  methods: {
    addFav(favId, favPict, favName, favCategory) {
      this.fav.push({
        id: favId, picture: favPict, name: favName, category: favCategory,
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.fav));
      this.$toast.success('Added to favorites !', {
        theme: 'bubble',
        position: 'top-center',
        duration: '1500',
      });
    },
  },
};
</script>
<style>
.row-category {
    background-color: none;
    padding: 50px;
}
.category-text {
    text-align: center;
}
</style>
