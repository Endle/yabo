 /* eslint-disable */
// security.fileuri.strict_origin_policy
// No need to be true/false
import Vue from 'vue'
/*import Arboreal from '@/../static/arboreal/lib/arboreal.js'*/
import AccountLoader from '@/accountLoader.js'
import Immutable from 'immutable'
// import App from '@/components/App'
//
// tree structure works
var map1 = Immutable.Map({ a: 1, b: 2, c: 3 });

new Vue({ // eslint-disable-line no-new
  el: '#app',
  data: {
    message: 'Hello Vue!' + new Date().toLocaleString() + map1.get('a').toString()
  } // ,

    // render: h => h(App)
})

new Vue({ // eslint-disable-line no-new
  el: '#currentAccounts',
  data: {
    beancountFileList: 'Nothing yet'
  }
})


new Vue({ // eslint-disable-line no-new
    methods: {
        loadBeancount(event) {
            let lo = new AccountLoader(event.target.files);
            lo.process().then(
            console.log(lo.accounts));
        },
    },
  el: '#loadDir',
  data: {
  }
})

if (__DEV__) {
  Vue.config.devtools = true
  Vue.config.productionTip = false
}

if (__PROD__) {
  Vue.config.devtools = false
}
