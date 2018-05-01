<template>
  <div id="detail">
    <div class="toolbar">
      <div class="toggle">
        <div class="left active">Edit</div>
        <div class="right">Preview</div>
      </div>
    </div>
    <div class="text-container">
      <h1>HTML Ipsum Presents</h1>

      <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

      <h2>Header Level 2</h2>

      <ol>
         <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
         <li>Aliquam tincidunt mauris eu risus.</li>
      </ol>

      <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

      <h3>Header Level 3</h3>

      <ul>
         <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
         <li>Aliquam tincidunt mauris eu risus.</li>
      </ul>

      <pre><code>
      #header h1 a {
        display: block;
        width: 300px;
        height: 80px;
      }
      </code></pre>
      <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

      <h2>Header Level 2</h2>

      <ol>
         <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
         <li>Aliquam tincidunt mauris eu risus.</li>
      </ol>

      <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

      <h3>Header Level 3</h3>

      <ul>
         <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
         <li>Aliquam tincidunt mauris eu risus.</li>
      </ul>

      <pre><code>
      #header h1 a {
        display: block;
        width: 300px;
        height: 80px;
      }
      </code></pre>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
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
