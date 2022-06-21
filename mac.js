'use strict';

{
  // チェックリスト用の配列群
  const checkLists = [
    {
      title: 'PCの基本操作と用語',
      list: [
        'カーソルの意味を説明できる',
        'カーソルを操作することができる',
        'マウスを操作することができる',
        '左クリック、右クリックを使い分けることができる',
        'ダブルクリックを使うことができる',
        'スクロールをすることができる',
        'デスクトップ画面とは何かを説明できる',
        'PCの起動ができる',
        'PCの再起動ができる',
        'PCのシャットダウンができる',
        'シャットダウンとスリープの違いを説明できる',
        'アプリケーション（ソフトウェア）の意味を説明できる',
      ],
    },
    {
      title: 'エディターの操作',
      list: [
        '任意のエディターを開くことができる',
        '入力モードの切り替えができる',
        'ローマ字でのタイピングができる',
        'ショートカットキーを使ってテキストのコピーができる',
        'ショートカットキーを使ってテキストの切り取りができる',
        'ショートカットキーを使ってテキストのペーストができる',
        'ショートカットキーを使って操作を取り消すことができる',
        'キーボードを使ってテキストを消すことができる',
      ],
    },
    {
      title: 'macOSの基礎',
      list: [
        'アップルメニューがどこにあるか説明できる',
        'メニューバーがどこにあるか説明できる',
        '入力メニューがどこにあるか説明できる',
        'ステータスメニューがどこにあるか説明できる',
        'ドックがどこにあるか説明できる',
        'アプリケーションとは何か説明できる',
        'アイコンとは何かを説明できる',
        'Finderを開くことができる',
        'ホームフォルダーを開くことができる',
        'Spotlight を使うことができる',
        'アプリケーションの起動することができる',
        'アプリケーションを終了させることができる',
        '起動しているアプリケーションをDockへ登録することができる',
        '画面切り替えのショートカットを使うことができる',
        'アプリケーションの『最小化』と『閉じる』の違いを説明できる',
        'スクリーンショットの意味を説明できる',
        'スクリーンショットを撮ることができる',
      ],
    },
    {
      title: 'Finderの操作',
      list: [
        'ファイルの意味を説明できる',
        'フォルダの意味を説明できる',
        'フォルダーを作ることができる',
        'フォルダーの名前の変更ができる',
        'フォルダーの移動ができる',
        'ショートカットキーを使ってフォルダーを切り取ることができる',
        'ショートカットキーを使ってフォルダーをコピーすることができる',
        'ショートカットキーを使ってフォルダーをペーストすることができる',
        'ショートカットキーを使って操作を取り消すことができる',
        'フォルダーの上書きができる',
        'フォルダーの消すことができる',
        'ファイルやフォルダの階層構造を説明できる',
        '圧縮ファイル（zipファイル）の意味を説明できる',
        '圧縮ファイルを解凍することができる',
        '圧縮ファイルを作ることができる',
      ],
    },

    {
      title: 'ブラウザの基本と操作',
      list: [
        'ブラウザとは何か説明できる',
        'Google Chrome とは何か説明できる',
        'ブラウザの種類を4つ挙げることができる',
        'ブラウザを使って検索することができる',
        'ブックマークの意味を説明できる',
        'ブックマークを登録することができる',
        'ブックマークを削除することができる',
        '履歴ページの見ることができる',
        'タブとは何かを説明できる',
        'タブを開く/閉じることができる',
        'ダウンロードとインストールの違いを説明できる',
        'ファイルのダウンロードをすることができる',
        'アプリケーションをインストールすることができる',
        'アプリケーションをアンインストールすることができる',
      ],
    },
  ];

  // 描画用のメソッド
  function renderCheckList(object) {
    const section = document.createElement('section');
    const h2 = document.createElement('h2');
    h2.textContent = object.title;
    const ul = document.createElement('ul');

    object.list.forEach(element => {
      const li = document.createElement('li');
      const input = document.createElement('input');
      input.type = 'checkbox';
      const span = document.createElement('span');
      span.textContent = element;
      // NOTE: 動画を用意していないので、a タグを非表示にする
      // const a = document.createElement('a');
      // a.target = '_blank';
      // a.href = '';
      // NOTE: 動画を用意していないので、アイコンも非表示にする
      // const i = document.createElement('i');
      // i.classList.add('bi', 'bi-play-btn-fill');
      // i.title = 'レッスン動画の該当箇所';

      li.appendChild(input);
      li.appendChild(span);
      // NOTE: 上記アイコン非表示・aタグ非表示にに連動して↓
      // a.appendChild(i);
      // li.appendChild(a);
      ul.appendChild(li);
    });

    section.appendChild(h2);
    section.appendChild(ul);
    target.appendChild(section);
  }

  // section を追加するための paragraph
  const target = document.getElementById('target');

  // チェックリストオブジェクトを全て描画
  checkLists.forEach(checkList => {
    renderCheckList(checkList);
  });

}