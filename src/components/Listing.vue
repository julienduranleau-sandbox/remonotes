<template>
  <div id="listing">
    <div class="search">
      <input type="text" name="" value="" placeholder="Search...">
    </div>
    <div class="notes">
      <div
        class="note"
        v-for="(note, noteIndex) in notes"
        :key="noteIndex"
        :class="{ selected: selectedNote && selectedNote.title === note.title }"
        @click="selectProduct(note)"
        >
        <p class="title">{{ note.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Notes from '@/services/Notes'

export default {
  props: ['selectedNote', 'selectProduct'],
  created() {
    this.getNotes()
  },
  data () {
    return {
      notes: []
    }
  },
  methods: {
    getNotes() {
      Notes.fetch().then(notes => {
        this.notes = notes
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/globals.scss';

#listing {
  width: 300px;
  flex: none;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  border-right: 2px solid $borderColor;
  height: 100%;
}
.search {
  text-align: center;
  padding: 14px 0px;
  border-bottom: 2px solid $borderColor;
  height: 55px;
  box-sizing: border-box;
  flex: none;

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
.notes {
  flex-grow: 1;
  overflow-y: auto;

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
}
</style>
