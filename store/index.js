import Vuex from 'vuex'

const makeStore = () => {
  return new Vuex.Store({
    state: {
      posts: [],
      post: {}
    },
    mutations: {
      updatePosts (state, { posts }) {
        state.posts = posts
      },
      updatePost (state, { post }) {
        state.post = post
      }
    },
    actions: {
      getPostWithSlug ({commit, state}, slug) {
        let post = state.posts.find((post) => {
          return (post.slug === slug)
        })
        commit('updatePost', { post: post })
      },
      getPosts ({commit}) {
        commit('updatePosts', { posts: [
          {
            id: 2,
            slug: '2018-my-goals',
            title: '2018 – My Goals',
            created_at: '12/31/2017',
            meta: {
              id: 3,
              name: '2018 – My Goals',
              content: '2018 – My Goals',
              keywords: 'goal, 2018, year'
            }
          },
          {
            id: 1,
            slug: '2017-year-in-review',
            title: '2017 Year in Review – A chaotic year',
            created_at: '12/30/2017',
            meta: {
              id: 3,
              name: '2017 Year in Review – A chaotic year',
              content: '2017 Year in Review – A chaotic year',
              keywords: 'review, 2017, year'
            }
          }
        ]})
      }
    }
  })
}

export default makeStore
