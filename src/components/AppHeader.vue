<template>
  <div>
    <button class="btn" v-show="loggedIn">Logout</button>
  </div>
</template>

<script>
export default {
  name: "app-header",
  data() {
    return {
      loggedIn: false
    };
  }
};
</script>
