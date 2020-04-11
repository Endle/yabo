 /* eslint-disable */

export default class AccountLoader {
    constructor(files) {
        this.files = files;
    }

    get status() {
        console.log("in status");
        console.log(this.files);
        return this.files.toString();
    }

    process() {
        for (var i=0; i<this.files.length; ++i) {
            let file = this.files[i];
            console.log(file);
        }
    }

    //https://stackoverflow.com/a/52947649/1166518

    /*
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
        */

}

/*export { AccountLoader };*/
