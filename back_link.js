(function(){
    var d = document;
    var l = "https://butaba.com";
    var n = d.getElementsByTagName('script')[0];
    var s = d.createElement('script');
    s.type = 'text/javascript';
    s.src = l + '/api/zuda.js';
    s.async = 1;
    n.parentNode.insertBefore(s, n);
    window.onload = function(e) {
      ZUDA.init("https://zuda.vn/products/merawhite?company=merawhite"); // Điền địa chỉ cần back về
    }
  })();
