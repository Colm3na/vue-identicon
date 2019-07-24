<template>
  <div id="app" style="font-family: 'Avenir', Helvetica, Arial, sans-serif; color: #2c3e50; text-align: center; margin-top: 60px;">
    <h1>Vue identicon</h1>
    <h2>Vue component to show Polkadot UI identicons</h2>
    <identicon :address="'5Dh97JC1Yi2GuBwvFkvy3bRLq8o5Yz7ibnvUVDJytbN4Jozc'" :theme="'substrate'" :size="600" />
  </div>
</template>
<script>
import identicon from './components/identicon.vue'
export default {
  name: 'app',
  components: {
    identicon
  }
}
</script>

<style>
</style>
