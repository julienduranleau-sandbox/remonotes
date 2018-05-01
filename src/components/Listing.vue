<template>
  <div id="listing">
    <div class="search">
      <input type="text" name="" value="" placeholder="Search...">
    </div>
    <div class="notes">
      <div class="note" v-for="note in notes" :key="note.title" @click="selectNote(note)">
        <p class="title">{{ note.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Notes from '@/services/Notes'

export default {
  data () {
    return {
      notes: Notes.fetch()
    }
  },
  methods: {
    selectNote(note) {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/globals.scss';

#listing {
  width: 300px;
  flex: none;
  border-right: 2px solid $borderColor;
  height: 100%;
}
.search {
  text-align: center;
  padding: 14px 0px;
  border-bottom: 2px solid $borderColor;
  height: 55px;
  box-sizing: border-box;

  input {
    background: transparent;
    border: 2px solid $borderColor;
    border-radius: 15px;
    color: $textColor;
    text-indent: 10px;
    padding: 3px 0px;
    outline: none;
  }
}
.note {
  border-bottom: 2px solid $borderColor;
  cursor: pointer;

  &:hover {
    color: $activeColor;
  }

  &.selected {
    color: $textColor;
    background: $activeColor;
    position: relative;
    top: -2px;
    border-bottom: 0px;
  }

  .title {
    padding-left: 30px;
    font-size: 18px;
    padding: 10px 0px 10px 20px;
    margin: 0px;
  }
}
</style>
