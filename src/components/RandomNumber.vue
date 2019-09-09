<template>
  <div>
    <span class="number">{{ randomNumber }}</span>
    <button class="btn" v-on:click="getRandomNumber">Generate Random Number</button>
  </div>
</template>

<script>
export default {
  name: "random-number",
  props: {
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      randomNumber: 0
    };
  },
  methods: {
    getRandomNumber() {
      this.randomNumber =
        Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    }
  }
};
</script>
