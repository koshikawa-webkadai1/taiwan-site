
// 共通機能 ローディング画面ファイル

'use strict'
//ローディング要素
const loading = document.querySelector('.loading');

// addEventListener() を使って、動作を引き起こすためのきっかけ（イベント）を設定。
// したいこと：画面（ウィンドウ）が読み込み（load）されたら、ローディング画面を非表示。
//ローディングクラスにこれを適用して、ロゴ部分はcssアニメーション
//ページが読み込み終わったら
window.addEventListener('load', () => {
  //1秒後に
  setTimeout(function () {
    //ローディング要素にhideクラスを付与
    loading.classList.add('hide');
  }, 500);
});

