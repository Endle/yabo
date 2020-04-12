 /* eslint-disable */

export default class AccountLoader {
    constructor(files) {
        this.files = files;
        this.extracted = []
    }

    get status() {
        console.log("in status");
        return this.files.toString();
    }

    get accounts() {
        return this.extracted;
    }

    process() {
        for (var i=0; i<this.files.length; ++i) {
            let file = this.files[i];
            this.fetchFileText(file, this);
        }
    }


    static removeCurrency(s) {
        return s.trim().replace(new RegExp('USD$'), '').trim();
    }

    processLocalBeancountRecordSingleLine(record) {
        if (!record) {
            return;
        }
        var pos = record.search("open");
        if (pos < 4) {
            return;
        }
        var accountRaw = record.substr(pos + 4);
        var account = AccountLoader.removeCurrency(accountRaw);
        this.extracted.push(account);
    }

    //https://stackoverflow.com/a/52947649/1166518
    static splitLines(t) { return t.split(/\r\n|\r|\n/); }

    processLocalBeancountRecord = async (records, loader) => {
        let lines = AccountLoader.splitLines(records);
        for (var i=0,len=lines.length; i<len; i++) {
            loader.processLocalBeancountRecordSingleLine(lines[i]);
        }
    }

    fetchFileText = async (file, loader) => {
        let fr = new FileReader();
        fr.onload=function() {
            loader.processLocalBeancountRecord(fr.result, loader);
        }
        fr.readAsText(file);
    }

}

