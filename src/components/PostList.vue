<template>
  <div v-if="posts.length">
    <h3>Users list</h3>
    <post-item
      :post="post"
      v-for="post in posts"
      :key="post.id"
      @remove="$emit('remove', post)"
    />
  </div>
  <h2 v-else="!posts.length" style="color: green">There are no posts yet</h2>
</template>
<script>
import PostItem from "@/components/PostItem.vue";
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped></style>
