(function (doc) {
    'use strict';
    var ID = function (a) {
        return doc.getElementById(a);
    }, C = function (a) {
        return doc.createElement(a);
    }, cw = 'contentWindow',
        de = 'documentElement',
        ie = 'v' == '\v',
        __defer = function (o) {
            var th = this,
                iso = true;
            th.fn = {
                prepare: 0,
                load: 0
            };
            th.frame = o;
            for (var n in th.fn)
            (function (m) {
                th[m] = function (f) {
                    th.fn[m] = f;
                    if (iso && m == 'prepare') th.frame[cw].document.close();
                    return th;
                };
            })(n);
            this.retry = function () {
                window.preparedFrame(th.frame.name, th);
                return th;
            };
            this.abort = function () {
                th.frame.src = null;
                return th;
            };
            this.toString = function () {
                return '[object preparedFrame]'
            };
        };
    window.preparedFrame = function (name, old) {
        var frame = C('iframe'),
            style = frame.style,
            root = doc[de],
            isdef = old instanceof __defer;
        style.width = '0';
        style.height = '0';
        style.visibility = 'hidden';
        var defer = frame.defer = isdef ? (old.frame = frame, old) : new __defer(frame),
            prepare = function (e) {
                e = e || window.event;
                if (typeof (defer.fn.load) == 'function') defer.fn.load.call(this, e);
                root.removeChild(frame);
            };
        frame.onload = function (e) {
            e = e || window.event; //alert(defer.fn.prepare);
            if (typeof (defer.fn.prepare) == 'function') defer.fn.prepare.call(this, e);
            frame.onload = prepare;
        };
        frame.setForm = function (f) {
            var root = frame[cw].document[de];
            if (frame.form) root.removeChild(root.lastChild);
            if (typeof (f) == 'string') f = ID(f) || doc.forms[f];
            frame.form = root.appendChild(f.cloneNode(true));
            return frame.form;
        };
        frame.name = name || '';
        frame.src = 'about:blank';
        root.appendChild(frame);
        var fd = frame[cw].document;
        fd.open();
        fd.write('<!DOCTYPE html><html><head></head><body></body></html>');
        //fd.close();
        return defer;
    };
})(document);
//alert(window.preparedFrame);
document.getElementById('testform').onsubmit = function () {
    var form = this;
    preparedFrame().prepare(function () {
        alert('prepare called.');
        this.setForm(form).submit();
    }).load(function () {
        alert('onload called.');
    });
    return false;
};
