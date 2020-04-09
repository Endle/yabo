 /* eslint-disable */
import Vue from 'vue'
// import App from '@/components/App'

new Vue({ // eslint-disable-line no-new
  el: '#app',
  data: {
    message: 'Hello Vue!' + new Date().toLocaleString()
  } // ,
    // render: h => h(App)
})

new Vue({ // eslint-disable-line no-new
    methods: {
        loadBeancount(event) {
            console.log(event.target.files);
        },
    },
  el: '#loadDir',
  data: {
    message: 'a Hello Vue!' + new Date().toLocaleString()
  }
})

if (__DEV__) {
  Vue.config.devtools = true
  Vue.config.productionTip = false
}

if (__PROD__) {
  Vue.config.devtools = false
}
