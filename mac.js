'use strict';

{
  // チェックリスト用の配列群
  const checkLists = [
    {
      title: 'PCの基本操作と用語',
      list: [
        'カーソルを操作することができる',
        'マウスを操作することができる',
        '左クリック、右クリックを使い分けることができる',
        'ダブルクリックを使うことができる',
        'スクロールをすることができる',
        'デスクトップ画面とは何かを説明できる',
        'ウィンドウとは何かを説明できる',
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
        'エディターとは何か説明できる',
        '任意のエディターを開くことができる',
        '入力モードの切り替えができる',
        'ローマ字でタイピングができる',
        'ショートカットキーを使ってテキストのコピーができる',
        'ショートカットキーを使ってテキストの切り取りができる',
        'ショートカットキーを使ってテキストのペーストができる',
        'ショートカットキーを使って操作を取り消すことができる',
        '入力したテキストを消すことができる',
      ],
    },
    {
      title: 'macOSの基礎',
      list: [
        'アップルメニューがどこにあるか説明できる',
        'メニューバーがどこにあるか説明できる',
        '入力メニューがどこにあるか説明できる',
        'ステータスメニューがどこにあるか説明できる',
        'Dock（ドック）がどこにあるか説明できる',
        'アイコンとは何かを説明できる',
        'Finderを開くことができる',
        'ホームフォルダーを開くことができる',
        'Spotlight を使うことができる',
        'アプリケーションとは何か説明できる',
        'macOS 内にあるアプリケーションを起動することができる',
        '起動しているアプリケーションを終了することができる',
        '起動しているアプリケーションを Dock へ登録することができる',
        'アプリケーションの『最小化・閉じる・終了』の違いを説明できる',
        'ウィンドウ切り替えのショートカットを使うことができる',
        'スクリーンショットの意味を説明できる',
        'スクリーンショットを撮ることができる',
      ],
    },
    {
      title: 'Finderの操作',
      list: [
        'ファイルの意味を説明できる',
        'フォルダーの意味を説明できる',
        'フォルダーを作ることができる',
        'フォルダーの名前を変更することができる',
        '任意のフォルダーを別のフォルダーに移動することができる',
        'ショートカットキーを使ってフォルダーを切り取ることができる',
        'ショートカットキーを使ってフォルダーをコピーすることができる',
        'ショートカットキーを使ってフォルダーをペーストすることができる',
        'フォルダーを上書きすることができる',
        'フォルダーを削除することができる',
        'ファイルやフォルダの階層構造について説明できる',
        '圧縮ファイル（zipファイル等）の意味を説明できる',
        '圧縮ファイルを解凍することができる',
        '圧縮ファイルを作ることができる',
      ],
    },

    {
      title: 'ブラウザの基本と操作',
      list: [
        'ブラウザとは何か説明できる',
        'Google Chrome とは何か説明できる',
        'ブラウザの種類を 2 つ以上挙げることができる',
        'ブラウザを使って検索することができる',
        'ブックマークの意味を説明できる',
        'ブックマークを登録することができる',
        'ブックマークを削除することができる',
        '履歴ページを見ることができる',
        'タブとは何か説明できる',
        'タブを開く/閉じることができる',
        'ダウンロードとインストールの違いを説明できる',
        'ファイルをダウンロードすることができる',
        'アプリケーションをインストールすることができる',
        'アプリケーションをアンインストールすることができる',
      ],
    },
  ];
  // チェックリスト追加用のタグ
  const target = document.getElementById('target');

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

  // チェックリストオブジェクトを全て描画
  checkLists.forEach(checkList => {
    renderCheckList(checkList);
  });
}