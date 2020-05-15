<template>
  <div>
    <div class="container-fluid">
      <Area />
      <Category />
    </div>
  </div>
</template>

<script>
import Category from '@/components/Category.vue';
import Area from '@/components/Area.vue';

export default {
  name: 'Home',
  components: {
    Category,
    Area,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
.container-fluid {
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: none;
}
</style>
