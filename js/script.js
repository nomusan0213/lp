/*************************
==== LOGOの表示
*************************/
$(window).on('load',function(){
    $("#loading").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    // $("#logo-element").delay(3000).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});


/*************************
==== 最初の画面
*************************/
// スクロールイベントを監視
$(window).scroll(function() {
  // ページトップからのスクロール量を取得
  var scrollPosition = $(this).scrollTop();

  // フェードアウトさせたい要素
  var logoElement = $("#logo-element");

  // スクロール位置に応じて透明度を設定
  // ここではスクロール位置が200px未満の場合は完全に不透明、それ以外はフェードアウト
  if (scrollPosition < 400) {
    logoElement.css("opacity", 1.0);
  } else {
    logoElement.css("opacity", 0.0);
  }
});

/*************************
==== TOP画面スライドショー
*************************/
$(document).ready(function() {
  const images = $(".header-img"); // すべての画像要素を取得
  let currentIndex = 0; // 現在の画像インデックス

  // 画像切り替え関数
  function changeImage() {
    images.hide(); // すべての画像を非表示に
    images.eq(currentIndex).show(); // 現在の画像を表示
    currentIndex = (currentIndex + 1) % images.length; // 次の画像インデックスを計算
  }

  // 初期状態として最初の画像を表示
  images.eq(currentIndex).show();

  // 2秒ごとに画像を切り替える
  setInterval(changeImage, 4000);
});

/*************************
==== section2の画像の透明度を調節
*************************/
// スクロールイベントを監視
$(window).scroll(function() {
  // ページトップからのスクロール量を取得
  var scrollPosition = $(this).scrollTop();

  // フェードアウトさせたい要素
  var logoElement1 = $(".sec2-img01");
  var logoElement2 = $(".sec2-img02");
  var logoElement3 = $(".sec2-img03");
  var logoElement4 = $(".sec2-img04");
  var logoElement5 = $(".sec2-img05");
  var logoElement6 = $(".sec2-img06");
  var logoElement7 = $(".sec2-img07");

  // if (scrollPosition > 800) {
  //   logoElement1.css("opacity", 1.0);
  //   logoElement2.css("opacity", 1.0);
  //   logoElement3.css("opacity", 1.0);
  //   logoElement4.css("opacity", 1.0);
  //   logoElement5.css("opacity", 1.0);
  //   logoElement6.css("opacity", 1.0);
  //   logoElement7.css("opacity", 1.0);
  // } else if (scrollPosition > 600) {
  //   logoElement1.css("opacity", 0.5);
  //   logoElement2.css("opacity", 0.5);
  //   logoElement3.css("opacity", 0.5);
  //   logoElement4.css("opacity", 0.5);
  //   logoElement5.css("opacity", 0.5);
  //   logoElement6.css("opacity", 0.5);
  //   logoElement7.css("opacity", 0.5);
  // } else {
  //   logoElement1.css("opacity", 0.0);
  //   logoElement2.css("opacity", 0.0);
  //   logoElement3.css("opacity", 0.0);
  //   logoElement4.css("opacity", 0.0);
  //   logoElement5.css("opacity", 0.0);
  //   logoElement6.css("opacity", 0.0);
  //   logoElement7.css("opacity", 0.0);
  // }
});

$(document).ready(function() {
  // 初期状態で要素を非表示にする
  $(".menu").hide();

  // 2秒後に要素を表示する
  setTimeout(function() {
    $(".menu").fadeIn(); // フェードインアニメーションを使用して表示
  }, 2000); // 2000ミリ秒（2秒）後に実行
});

$(document).ready(function() {
  // 初期状態で要素を非表示にする
  $(".top-logo").hide();

  // スクロールイベントを監視
  $(window).scroll(function() {
    var scrollPosition = $(this).scrollTop();

    if (scrollPosition > 600) {
      $(".top-logo").fadeIn(); // フェードインアニメーションを使用して表示
    } else {
      $(".top-logo").fadeOut(); // スクロール位置が200px未満の場合は非表示
    }
  });
});

$(document).ready(function() {
  $(".gallery-img").hover(function() {
      $(this).css("transform", "scale(1.2)"); // ホバー時にズームイン
  }, function() {
      $(this).css("transform", "scale(1)"); // ホバーから外れたら元に戻す
  });
});


/*************************
==== PRICEのタブ切り替え
*************************/
$(document).ready(function() {
  $('.category-link').click(function(e) {
    e.preventDefault();
    const targetClass = $(this).data('target');

    // すべてのカテゴリコンテンツを非表示に
    $('.category-content').hide();

    // クリックされたカテゴリコンテンツを表示
    $('.' + targetClass).show();

    // クリックされたリンクの背景色を変更
    $('.category-link').css('background-color', 'transparent'); // すべてのリンクの背景色を透明に
    $(this).css('background-color', 'rgb(250,247,243)'); // クリックされたリンクの背景色を変更
  });
});

/*************************
==== gallery カテゴリー別
*************************/
$(document).ready(function() {
  $('.photo-category').click(function(e) {
    e.preventDefault(); // デフォルトの動作を防ぐ
    const targetClass = $(this).data('target');

    // すべてのカテゴリコンテンツを非表示に
    $('.space').hide();

    // クリックされたカテゴリコンテンツを表示
    $('.' + targetClass).show();
  });
});

/*************************
==== マタニティのタブ切り替え
*************************/
$(document).ready(function() {
  $('.maternity-category-link').click(function(e) {
    e.preventDefault();
    const targetClass = $(this).data('target');

    // すべてのカテゴリコンテンツを非表示に
    $('.maternity-categ').hide();

    // クリックされたカテゴリコンテンツを表示
    $('.' + targetClass).show();

    // すべてのリンクの背景色を透明に
    $('.maternity-category-link').css('background-color', 'transparent');

    // クリックされたリンクの背景色を変更
    $(this).css('background-color', 'rgb(241,236,231)');
  });
});


/*************************
==== フッター
*************************/
$(document).ready(function() {
  $(window).scroll(function() {
    // スクロール位置を取得
    var scrollPosition = $(window).scrollTop();
    var windowHeight = $(window).height(); // ウィンドウの高さ

    // 各セクションの位置を取得
    var section1Position = $('#section1').offset().top;
    var section2Position = $('#section2').offset().top;
    var section3Position = $('#section3').offset().top;
    var section4Position = $('#section4').offset().top;
    var section5Position = $('#section5').offset().top;

    // フッターのテキストを初期化
    $('footer div span').css('display', 'none');

    // スクロール位置に応じてフッターのテキストを切り替え
    if (
      scrollPosition + windowHeight / 2 >= section1Position &&
      scrollPosition + windowHeight / 2 < section2Position
    ) {
      $('#topText').css('display', 'block');
    } else if (
      scrollPosition + windowHeight / 2 >= section2Position &&
      scrollPosition + windowHeight / 2 < section3Position
    ) {
      $('#mindText').css('display', 'block');
    } else if (
      scrollPosition + windowHeight / 2 >= section3Position &&
      scrollPosition + windowHeight / 2 < section4Position
    ) {
      $('#iamText').css('display', 'block');
    } else if (
      scrollPosition + windowHeight / 2 >= section4Position &&
      scrollPosition + windowHeight / 2 < section5Position
    ) {
      $('#galleryText').css('display', 'block');
    } else if (scrollPosition + windowHeight / 2 >= section5Position) {
      $('#priceText').css('display', 'block');
    }
  });
});

/*************************
==== モーダル
*************************/
$(document).ready(function() {
  // モーダルを表示する
  $("#open-modal").click(function() {
    $("#contact-modal").css("display", "block");
  });

  // モーダルを閉じる
  $("#close-modal, .modal").click(function() {
    $("#contact-modal").css("display", "none");
  });

  // モーダル内のコンテンツがクリックされても閉じないようにする
  $(".modal-content").click(function(event) {
    event.stopPropagation();
  });
});

/*************************
==== セクション2の丸型が広がっていく
*************************/
$(document).ready(function() {
  // ウィンドウのスクロールを監視し、指定の要素が画面に表示されたらアニメーションを開始
  $(window).scroll(function() {
    var element = $(".circle-clip1");
    var windowHeight = $(window).height();
    var scroll = $(window).scrollTop();

    if (element.offset().top - scroll < windowHeight) {
      // 要素が画面内に表示されたらクリッピングを変更
      element.css("clip-path", "circle(50% at center)");
    }
  });
});