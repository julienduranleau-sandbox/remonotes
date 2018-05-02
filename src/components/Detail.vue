<template>
  <div id="detail">
    <div class="toolbar">
      <div class="toggle">
        <div class="left active">Edit</div>
        <div class="right">Preview</div>
      </div>
    </div>
    <div class="text-container" v-if="selectedNote">
      {{ selectedNote.content }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['selectedNote']
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/globals.scss';

#detail {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
}

.toolbar {
  width: 100%;
  height: 55px;
  flex: none;
  box-sizing: border-box;
  border-bottom: 2px solid $borderColor;

  .toggle {
    width: 150px;
    display: flex;
    border: 2px solid $activeColor;
    border-radius: 5px;
    margin: 10px auto;

    .left, .right {
      flex-grow: 1;
      text-align: center;
      padding: 5px 0px;
      border-radius: 2px;
      cursor: pointer;
      font-size: 14px;

      &.active {
        cursor: default;
        background: $activeColor;
      }
    }

    .left {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
    .right {
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }
  }
}

.text-container {
  padding: 60px;
  flex-grow: 1;
  overflow-y: auto;

  a {
    color: $activeColor;
  }
}

</style>
