<template>
  <div v-html="svgString" v-bind:title="address"></div>
</template>

<script>
import { u8aToHex } from '@polkadot/util';
import { decodeAddress } from '@polkadot/util-crypto';
import jdenticon from 'jdenticon';
export default {
  props: ["address", "theme", "size"],
  data: function() {
    return {
      svgString: ''
    }
  },
  created: function () {
    if (this.theme == 'substrate') {
      this.showJdentIconSvg();
    }
  },
  methods: {
    showJdentIconSvg: function () {
      this.svgString = jdenticon.toSvg(u8aToHex(decodeAddress(this.address)), this.size);
    }
  }
}
</script>

<style>
</style>