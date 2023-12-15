<template lang="">
  <form @submit.prevent>
    <h4>Post Creation</h4>
    <input
      v-model="post.title"
      type="text"
      class="input"
      placeholder="Enter name"
    />
    <input
      v-model="post.body"
      type="text"
      class="input"
      placeholder="Enter description"
    />
    <button class="btn" @click="createPost">Add post</button>
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
.input {
  widows: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}

.btn {
  margin-top: 15px;
  align-self: flex-end;
  padding: 10px 15px;
  background-color: transparent;
  color: teal;
  border: 1px solid teal;
  cursor: pointer;
}
</style>
