<template>
  <div class="container">
    <button @click="clearQuillContent">Clear Quill Content</button>
    <div class="note-container">
      <div class="ql-editor-wrap">
        <QuillEditor
          @textChange="saveQuillContent"
          theme="snow"
          v-model:content="quillContent"
          content-type="html"
          ref="quill"
        />
      </div>
      <div class="preview-wrap">
        <h2>Preview</h2>
        <div class="preview" v-html="quillContent"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { ref } from "vue";

const quillContent = ref("");
const timeoutTracker = ref(null);
const quill = ref();

const clearQuillContent = () => {
  quill.value.setHTML("");
};

const populateQuillContent = () => {
  const sessionData = sessionStorage.getItem("quillContent");
  if (sessionData) {
    quillContent.value = JSON.parse(sessionData);
  }
};

populateQuillContent();

const saveQuillContent = () => {
  clearTimeout(timeoutTracker.value);
  timeoutTracker.value = setTimeout(() => {
    sessionStorage.setItem("quillContent", JSON.stringify(quillContent.value));
  }, 1000);
};
</script>

<style scoped>
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 100px 16px;
}

.note-container {
  display: flex;
  gap: 40px;
  margin-top: 20px;
}

.ql-editor-wrap,
.preview-wrap {
  flex: 1;
}
</style>
