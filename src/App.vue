<template>
  <div class="app">
    <h1>Page with posts</h1>
    <my-button @click="showDialog" style="margin: 15px 0"
      >Create post</my-button
    >
    <my-dialog v-model:show="dialogVisible" :show="true">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list :posts="posts" @remove="removePost" />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "./components/PostList.vue";
export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "JS", body: "Post description" },
        { id: 2, title: "JS 2", body: "Post description 2" },
        { id: 3, title: "JS 3", body: "Post description 3" },
        { id: 4, title: "JS 4", body: "Post description 4" },
      ],
      dialogVisible: false,
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>
