import { createApp } from 'vue/dist/vue.esm-bundler'
import LikeDislikeAction from './components/likeDislikeAction'
import LoadingIcon from './components/loadingIcon'
import Toast from './plugins/toast'
import Watcher from './plugins/watcher'
import './sass/main.scss'
import './fontawesome-free-6.5.1-web/scss/fontawesome.scss'
import './fontawesome-free-6.5.1-web/scss/regular.scss'
import './fontawesome-free-6.5.1-web/scss/solid.scss'

const timelineApp = createApp()
timelineApp.component('LikeDislikeAction', LikeDislikeAction)
timelineApp.component('LoadingIcon', LoadingIcon)
timelineApp.use(Toast)
timelineApp.use(Watcher)
timelineApp.mount('#timeline')

const toastApp = createApp()
toastApp.use(Toast)
toastApp.mount('#toast')
