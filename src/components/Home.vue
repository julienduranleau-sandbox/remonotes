<template>
  <div id="home">
    <listing :selectedNote="selectedNote" :selectProduct="selectProduct"/>
    <detail :selectedNote="selectedNote"/>
  </div>
</template>

<script>
import Listing from './Listing'
import Detail from './Detail'

export default {
  data () {
    return {
      selectedNote: null
    }
  },
  components: {
    Listing,
    Detail
  },
  methods: {
    selectProduct(note) {
      this.selectedNote = note
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/globals.scss';

#home {
  display: flex;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: $bgColor;
  color: $textColor;
}
</style>
