<template>
  <div class="app">
    <h1>Post page with store and vuex using</h1>
    <my-input
      v-focus
      type="text"
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      placeholder="Search post"
    />

    <div class="app__btns">
      <my-button @click="showDialog">Create post</my-button>

      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>

    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Loading...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
    }),
    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: "post/fetchPosts",
    }),
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
    // changePage(pageNumber) {
    //   this.page = pageNumber;
    // },
    // async fetchPosts() {
    //   try {
    //     this.isPostsLoading = true;

    //     const response = await axios.get(
    //       "https://jsonplaceholder.typicode.com/posts",
    //       {
    //         params: {
    //           _page: this.page,
    //           _limit: this.limit,
    //         },
    //       }
    //     );
    //     this.totalPage = Math.ceil(
    //       response.headers["x-total-count"] / this.limit
    //     );
    //     this.posts = response.data;

    //     this.isPostsLoading = false;
    //   } catch (e) {
    //     alert("Error");
    //   } finally {
    //   }
    // },
    // async loadMorePosts() {
    //   try {
    //     this.page += 1;
    //     const response = await axios.get(
    //       "https://jsonplaceholder.typicode.com/posts",
    //       {
    //         params: {
    //           _page: this.page,
    //           _limit: this.limit,
    //         },
    //       }
    //     );
    //     this.totalPage = Math.ceil(
    //       response.headers["x-total-count"] / this.limit
    //     );
    //     this.posts = [...this.posts, ...response.data];
    //   } catch (e) {
    //     alert("Error");
    //   }
    // },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.isPostsLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedAndSearchedPosts: "post/sortedAndSearchedPosts",
    }),
  },
  watch: {
    // page() {
    //   this.fetchPosts();
    // },
  },
};
</script>

<style scoped>
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  padding: 10px;
}

.current-page {
  border: 2px solid teal;
}

.observer {
  height: 30px;
  background-color: green;
}
</style>
