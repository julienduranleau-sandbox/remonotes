<template>
  <div id="detail">
    <div class="toolbar">
      <div class="toggle">
        <div
          class="left"
          :class="{ active: editMode === true}"
          @click="setEditMode(true)">
          Edit
        </div>
        <div
          class="right"
          :class="{ active: editMode === false}"
          @click="setEditMode(false)">
          Preview
        </div>
      </div>
    </div>
    <div class="text-container" v-if="selectedNote">
        <div
          class="markdown-preview"
          v-html="filterMetas(convertToMarkdown(selectedNote.content))"
          v-show="editMode === false">
        </div>

        <textarea
          class="markdown-edit"
          v-html="selectedNote.content"
          v-show="editMode === true">
        </textarea>
      </div>
  </div>
</template>

<script>
import Showdown from 'showdown/dist/showdown'
import Notes from '@/services/Notes'

export default {
  data () {
    return {
      editMode: false
    }
  },
  props: ['selectedNote'],
  methods: {
    convertToMarkdown(text) {
      let converter = new Showdown.Converter()
      let html = converter.makeHtml(text)
      return html
    },
    filterMetas(content) {
      return Notes.filterMetasFromContent(content)
    },
    setEditMode(v) {
      this.editMode = v
    }
  }
}
</script>

<style lang="scss">
/*
 * Modify dynamic html renderer content in an unscoped style
 */

@import '@/assets/scss/globals.scss';

.markdown-preview {
  a {
    color: $activeColor;;
  }
  code, pre {
    white-space: normal;
  }
}
</style>

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
  flex-grow: 1;
  position: relative;

  .markdown-preview {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow-y: auto;
    padding: 60px;
    word-wrap: break-word;
  }

  textarea.markdown-edit {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    resize: none;
    background: transparent;
    border: none;
    padding: 60px;
    color: $textColor;
    font-size: 14px;
  }
}

</style>
