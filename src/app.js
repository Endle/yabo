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
            lo.process();
            /*console.log(lo.status);*/
            /*for (var i=0, len=event.target.files.length; i<len; i++) {*/
            /*let file = event.target.files[i];*/
            /*console.log(file);*/
            /*fetchFileText(file);*/
            /*}*/
            //console.log(event.target.files);
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
