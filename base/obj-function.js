var test = {
    a: 1,
    init: function () {
        var m = this;
        m.render();
        m.bind();
    },
    render: function () {
        var mme = this;
        me.btn = document.getElementById('test');
    },
    bind: function () {
        this.btn.onclick = this.getm;
    },
    getm: function () {

    }
}

test.init();