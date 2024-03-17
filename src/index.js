import { createApp } from 'vue/dist/vue.esm-bundler'
import LikeDislikeAction from './components/likeDislikeAction'
import Toast from './plugins/toast'
import './sass/main.scss'
import './fontawesome-free-6.5.1-web/scss/fontawesome.scss'
import './fontawesome-free-6.5.1-web/scss/regular.scss'
import './fontawesome-free-6.5.1-web/scss/solid.scss'

const timelineApp = createApp({
  components: {
    LikeDislikeAction
  }
})

timelineApp.use(Toast)
timelineApp.mount('#timeline')
