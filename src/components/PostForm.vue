<template>
  <form @submit.prevent>
    <h4>Post Creation</h4>
    <my-input v-model="post.title" type="text" placeholder="Enter name" />
    <my-input v-model="post.body" type="text" placeholder="Enter description" />
    <my-button
      style="align-self: flex-end; margin-top: 15px"
      @click="createPost"
      >Add post</my-button
    >
  </form>
</template>
<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>
<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
