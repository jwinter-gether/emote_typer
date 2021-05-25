$(function() {
  if( ! $(".fr-toolbar")[0] ){
    return;
  }
  
  var imgArr = new Array();
  imgArr.push("https://upload.tgd.kr/20210411/bd06540e3b41cb4bc2cc9f75ccf5103f.png");
  imgArr.push("https://upload.tgd.kr/20210411/e3597aec18b0a2b85c066ebc7894b334.png");
  imgArr.push("https://upload.tgd.kr/20210411/dceed8995b71d8486d7edf90bb50c2fe.png");
  imgArr.push("https://upload.tgd.kr/20210411/91fd09974b298932479496110b412285.png");
  imgArr.push("https://upload.tgd.kr/20210411/4c36bb65c88e02e84e168eb4fdca2781.png");
  imgArr.push("https://upload.tgd.kr/20210411/fb2fbf15b6e681120843e1ca316e8f8d.png");
  imgArr.push("https://upload.tgd.kr/20210411/11577f3a3069096f5cd6517293d20135.png");
  imgArr.push("https://upload.tgd.kr/20210411/9a3dcd4b0713ad387e8ab50874f0d0fa.png");
  imgArr.push("https://upload.tgd.kr/20210411/2bac015ef9456b1d64e0b8994ff7245a.png");
  imgArr.push("https://upload.tgd.kr/20210411/479f7e71d128eb13ba8eacacf3cef9d7.png");
  imgArr.push("https://upload.tgd.kr/20210411/bfcbb758b25fb07eacc0aa69b8905358.png");
  imgArr.push("https://upload.tgd.kr/20210411/6f149a24554f5750ba9fd6106dc4d054.png");
  imgArr.push("https://upload.tgd.kr/20210411/e1f2e763eeee8d041956a0475cf700a2.png");
  imgArr.push("https://upload.tgd.kr/20210411/825af21f48976bf0323b658a5a54b0f5.png");
  imgArr.push("https://upload.tgd.kr/20210411/c20521aa158d82708a2493c3ceae58e4.png");
  imgArr.push("https://upload.tgd.kr/20210411/3b14bf7e5ea7b58d314c22b119418d38.png");
  imgArr.push("https://upload.tgd.kr/20210411/f0460f1c387918933201e8c418eac6f6.png");
  imgArr.push("https://upload.tgd.kr/20210411/f32a16c0c08c2a8f615ac37537ad68ba.png");
  imgArr.push("https://upload.tgd.kr/20210411/f656d7aed78b1b21ed6a54e430ca1e16.png");
  imgArr.push("https://upload.tgd.kr/20210411/75f6731b5cb0ce3ff5e4b8a32320c294.png");
  imgArr.push("https://upload.tgd.kr/20210411/35e0563e4ed647583ea64cf229622afd.png");
  imgArr.push("https://upload.tgd.kr/20210411/f5de8ca6b7fd87b53ae0c1aad173a7c3.png");
  imgArr.push("https://upload.tgd.kr/20210411/a4e28c28f4cb2ab6a282267665adca6c.png");
  imgArr.push("https://upload.tgd.kr/20210411/472776f66888c86423bd05f090674a27.png");
  imgArr.push("https://upload.tgd.kr/20210411/8e5850a84749f904ad918553b70b5384.png");
  imgArr.push("https://upload.tgd.kr/20210411/91fa07665fac133f8a445cf7a431a80d.png");
  imgArr.push("https://upload.tgd.kr/20210411/ec1f414a66f3b9e6fdae7e36c3b39ba4.png");
  imgArr.push("https://upload.tgd.kr/20210411/b38011c62a8414aab59951ad6af8553f.png");
  imgArr.push("https://upload.tgd.kr/20210411/f49bc902a19135e1f476bc4ec5e812be.png");
  imgArr.push("https://upload.tgd.kr/20210411/5733113b0bad11b78a82d379cfada0db.png");
  imgArr.push("https://upload.tgd.kr/20210411/5e3a16f1cbe9de4688e4141babbc5a29.png");
  imgArr.push("https://upload.tgd.kr/20210411/ad7bf260afa35abc5582937a8e5ed043.png");
  imgArr.push("https://upload.tgd.kr/20210411/02ceed8f6ecc33e4da85bfd92b453c90.png");
  imgArr.push("https://upload.tgd.kr/20210411/049fcb629ce59aa8b3050824024e9f08.png");
  imgArr.push("https://upload.tgd.kr/20210411/089e34a9f862eb9a95aeacab0b22885d.png");
  imgArr.push("https://upload.tgd.kr/20210411/d58db8f71a55503d9cb0e2efd1c32ab4.png");
  imgArr.push("https://upload.tgd.kr/20210411/e3044631fa97279cf4a81d030c14d31f.png");
  imgArr.push("https://upload.tgd.kr/20210411/3a98138a1ef7d21877d9cf23ed9472c6.png");
  imgArr.push("https://upload.tgd.kr/20210415/ecbdf42297ec0ee8ebe6c6a200b414dd.png");
  imgArr.push("https://upload.tgd.kr/20210415/308a224ff57b2872b9d23285ab5ff9f5.png");
  imgArr.push("https://upload.tgd.kr/20210415/d227bf93997056c4c2f89b18857c5ee0.png");
  imgArr.push("https://upload.tgd.kr/20210415/f67bd33400f504df1762e73fe1516127.png");
  imgArr.push("https://upload.tgd.kr/20210415/5ef46e5219325136756e7e99fe9cc666.png");
  imgArr.push("https://upload.tgd.kr/20210415/489e8383a3e6e4c56e2dee0f8b0f2392.png");
  imgArr.push("https://upload.tgd.kr/20210415/9251adc70082d191d308f3dbbf640825.png");
  imgArr.push("https://upload.tgd.kr/20210415/39a4081a658fbfe7f6da13941ff60e71.png");
  imgArr.push("https://upload.tgd.kr/20210415/84fca27a07e4ae02ad460b5b7dca943e.png");
  imgArr.push("https://upload.tgd.kr/20210415/e185b9d7bb5dccc1b07b2fc535128ae8.png");
  imgArr.push("https://upload.tgd.kr/20210415/6f14e16043c528813a789c7512eb2b60.png");
  imgArr.push("https://upload.tgd.kr/20210415/e530934482e3df173eb69f8449212d47.png");
  imgArr.push("https://upload.tgd.kr/20210415/e2d973ab7d098a12c56923de57bc7eab.png");
  imgArr.push("https://upload.tgd.kr/20210415/c78036518febde3866bfa55a9fb94bd3.png");
  imgArr.push("https://upload.tgd.kr/20210415/90c8c037a50c061b4924043e52cffaaf.png");
  imgArr.push("https://upload.tgd.kr/20210415/f3e63b665906b766382636b051f12bc0.png");
  imgArr.push("https://upload.tgd.kr/20210415/1162d8a3c781ea7014bc2e1ef342a01f.png");
  imgArr.push("https://upload.tgd.kr/20210415/6d8549d3a499d3a93f017ad70bd65895.png");
  imgArr.push("https://upload.tgd.kr/20210415/7f59f180c1d65b99b3934b5c671472e5.png");
  imgArr.push("https://upload.tgd.kr/20210415/c765fd59df18da969273b896d488e9d9.png");
  imgArr.push("https://upload.tgd.kr/20210415/677b02c4799953e024a7b9e2f66fc2a0.png");
  imgArr.push("https://upload.tgd.kr/20210415/fcee9ff0371f92c8a8e20dc66a38eb81.png");
  
  var toolCode = ''
  +'<button id="jwinterConBtn" type="button">'
  +  '<img src="https://upload.tgd.kr/20210411/dceed8995b71d8486d7edf90bb50c2fe.png">'
  +'</button>'
  +'<div id="jwinterConSizeArea">'
  +  '입력크기: <input type="number" id="jwinterConSize" value="100" min="0" max="100" step="10"> px'
  +'</div>'
  +'<div id="jwinterConList">';
      var imgArrLen = imgArr.length;
      for(var i=0;i<imgArrLen;i++){
        toolCode += '<img src="' + imgArr[i] + '">';
        if( (i+1)%4 === 0 ){
          toolCode += '<br>';
        }
      }
      toolCode += ''
  +'</div>';
  
  $(".fr-toolbar").append(toolCode);
  
  $("#jwinterConBtn").on("click", function(e){
    if( $("#jwinterConList").css("display") == "none" ){
      $("#jwinterConSizeArea").show();
      $("#jwinterConList").show();
    }
    else{
      $("#jwinterConSizeArea").hide();
      $("#jwinterConList").hide();
    }
  });
  
  $("#jwinterConList img").on("click", function(e){
    var src = $(this).attr("src");
    var $paragraph = $(this).parent().parent().parent().find(".fr-view p:last-child");
    var code = '<img src="' + src + '" class="fr-fil fr-dib" '
    + 'style="display:inline-block;margin-right:5px;width:' + $("#jwinterConSize").val() + 'px;">';
    
    if( $paragraph.html() == "<br>" ){
      $paragraph.html(code);
    }
    else{
      $paragraph.append(code);
    }
  });
});