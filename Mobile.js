class Mobile {
    constructor(_name,_brand) {
        this.name = _name;
        this.brand = _brand;
        this.msg = '';
        this.inbox = [];
        this.outbox = [];
    }

    writeMsg(_msg){
        this.msg = _msg;
    }

    sendMsg(mobile){
        mobile.receiveMsg(this.msg);
        this.outbox.push(this.msg);
    }

    receiveMsg(_msg){
        this.inbox.push(_msg);
    }
}
