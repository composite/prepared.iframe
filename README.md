prepared.iframe
===============

prepared for background upload/chucked streaming iframe

What is it?
-----------

just use iframe with few lines. that's all.

What is useful for this?
------------------------

with background upload or streaming with chunked transfer encoding, this plugin will useful.

Must I have Javascript framework such as jQuery or Prototype?
-------------------------------------------------------------

No. You don't need any library with using this plugin.

What is have cool stuff?
------------------------

I don't know. but you don't care about browser history.

How to use this?
----------------
call, prepare, load!

basic example :
```js
preparedFrame().prepare(function(){
  alert('prepare called.');
  this.src='http://www.google.com';
}).load(function(){
  alert('load successful!')
});
```
form submit example :
```js
preparedFrame().prepare(function(){
  alert('prepare called.');
  this.setForm('form_upload').submit();
}).load(function(){
  alert('load successful!')
});
```

basic usage API
---------------

```
preparedFrame(name) - iframe initializer. "name" is frame target name.
.prepare(callback) - if preparedFrame's iframe is ready to request, it'll be called with your defined callback.
.load(callback) - if iframe's request is complete to load. it'll be called with your defined callback.
.retry() - retry iframe request with already defined name and callback.
```

callback API
------------

```
this - the preparedFrame's iframe object.
this.setForm(form) - clone form object to iframe. form argument can add form's id, name or form object.
this.defer - the preparedFrame object.
```

License
-------

(The MIT License)

Copyright (c) 2011-2012 Ukjin 'composite' Yang <ukjinplant@msn.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
