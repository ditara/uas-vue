<template>
    <div>
        <b-card
            v-bind:img-src="images"
            img-alt="Image"
            img-top
            v-bind:tag="tagss"
            style="max-width: 20rem;"
            class="card mb-2"
        >
            <h4 class="card-title">{{ title }}</h4>
            <p class="card-text">{{ text }}</p>
        </b-card>
    </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    images: String,
    tagss: String,
    title: String,
    text: String,
  },
};
</script>
<style scoped>
.card {
    transition: 0.3s ease;
}
.card:hover {
    box-shadow: 0 4px 6px 0 rgb(17, 17, 17);
}
.card-title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 400;
    font-size: 20px;
    color: #35495e;
    letter-spacing: 1px;
    text-align: center;
}
</style>
