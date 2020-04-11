 /* eslint-disable */
// security.fileuri.strict_origin_policy
// No need to be true/false
import Vue from 'vue'
/*import Arboreal from '@/../static/arboreal/lib/arboreal.js'*/
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

//https://stackoverflow.com/a/52947649/1166518
function splitLines(t) { return t.split(/\r\n|\r|\n/); }

const removeCurrency = function(s) {
    return s.trim().replace(new RegExp('USD$'), '').trim();
}

const processLocalBeancountRecordSingleLine = function(record) {
    if (!record) {
        return;
    }
    var pos = record.search("open");
    if (pos < 4) {
        return;
    }
    var accountRaw = record.substr(pos + 4);
    var account = removeCurrency(accountRaw);
    console.log(account);
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
