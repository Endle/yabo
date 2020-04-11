 /* eslint-disable */
// security.fileuri.strict_origin_policy
// No need to be true/false
import Vue from 'vue'
import Arboreal from '@/../static/arboreal/lib/arboreal.js'

// import App from '@/components/App'
//
// tree structure works
var tree = new Arboreal()
tree
  .appendChild("Expense")
  .appendChild()
  .children[0]
     .appendChild()
     .appendChild();

new Vue({ // eslint-disable-line no-new
  el: '#app',
  data: {
    message: 'Hello Vue!' + new Date().toLocaleString() + tree.toString()
  } // ,

    // render: h => h(App)
})

new Vue({ // eslint-disable-line no-new
  el: '#currentAccounts',
  data: {
    beancountFileList: 'Nothing yet'
  }
})

//https://stackoverflow.com/a/52947649/1166518
function splitLines(t) { return t.split(/\r\n|\r|\n/); }


const processLocalBeancountRecordSingleLine = function(record) {
    console.log(record);
}

const processLocalBeancountRecord = function(records) {
    let lines = splitLines(records);
    for (var i=0,len=records.length; i<len; i++) {
        processLocalBeancountRecordSingleLine(lines[i]);
    }
}

const fetchFileText = async file => {
    let fr = new FileReader();
    fr.onload=function() {
        processLocalBeancountRecord(fr.result);
    }
    fr.readAsText(file);
}

new Vue({ // eslint-disable-line no-new
    methods: {
        loadBeancount(event) {
            var f;
            for (var i=0, len=event.target.files.length; i<len; i++) {
                let file = event.target.files[i];
                console.log(file);
                fetchFileText(file);
            }
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
