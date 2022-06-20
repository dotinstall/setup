'use strict';

{
  const arrPC = {
    title: 'PC操作の基本用語',
    list: [
      'カーソルの意味を知っている',
      'マウスの使い方を知っている',
      '左クリック、右クリックの違いを知っている',
      'ダブルクリックの意味を知っている',
      'スクロールの意味を知っている',
      '入力モードの切り替えができる',
      'ローマ字でのタイピングができる',
      'デスクトップ画面とは何かを知っている',
      'カーソルの意味を知っている',
      'ファイルの意味を知っている',
      'フォルダの意味を知っている',
      'ファイルやフォルダの階層構造を知っている',
    ],
  };
  const arrMacDisplay = {
    title: 'Macの画面',
    list: [
      'アップルメニューとは何かを知っている',
      'メニューバーとは何かを知っている',
      '入力メニューとは何かを知っている',
      'ステータスメニューとは何かを知っている',
      'ドックとは何かを知っている',
      'アプリケーションとは何かを知っている',
      'アイコンとは何かを知っている',
      'Finderについて知っている',
      'ホームフォルダーを知っている',
      'Spotlight の使い方を知っている',
    ],
  }
  const arrBasicOperation = {
    title: 'Mac の基本操作',
    list: [
      'テキストのコピーができる',
      'テキストの切り取りができる',
      'テキストのペーストができる',
      'テキストを1文字消すことができる',
      'フォルダーの作ることができる',
      'フォルダーの名前の変更ができる',
      'フォルダーの移動ができる',
      'フォルダーのコピーができる',
      'フォルダーの上書きができる',
      'フォルダーの消すことができる',
    ],
  }
  const arrAdvancedOperation = {
    title: 'Mac の応用操作',
    list: [
      'PCの起動ができる',
      'PCの再起動ができる',
      'PCのシャットダウンができる',
      'シャットダウンとスリープの違いを知っている',
      'コピーをするショートカットキーを使うことができる',
      '切り取りをするショートカットキーを使うことができる',
      'ペーストをするショートカットキーを使うことができる',
      '操作を取り消すショートカットキーを使うことができる',
      '圧縮ファイル（zipファイル）の意味を知っている',
      '圧縮ファイルを解凍することができる',
      '圧縮ファイルを作ることができる',
      'アプリケーション（ソフトウェア）の意味を知っている',
      'アプリケーションの起動方法を知っている',
      '起動しているアプリケーションのDockへ登録することができる',
      '画面切り替えのショートカットを使うことができる',
      'アプリケーションの『最小化』と『閉じる』の違いを知っている',
      'スクリーンショットの意味を知っている',
      'スクリーンショットの撮ることができる',
      'ダウンロードとインストールの違いを知っている',
      'ファイルのダウンロードをすることができる',
      'アプリケーションを終了させることができる',
      'アプリケーションをインストールすることができる',
      'アプリケーションをアンインストールすることができる',
    ],
  }
  const arrBrowser = {
    title: 'ブラウザの基本',
    list: [
      'ブラウザとは何か知っている',
      'Google Chrome とは何か知っている',
      'ブラウザの種類を4つ挙げることができる',
      '検索とは何か知っている',
      'ブラウザを使って検索することができる',
      'ブックマークの意味を知っている',
      'ブックマークを登録することができる',
      'ブックマークを削除することができる',
      '履歴ページの見方を知っている',
      'タブとは何かを知っている',
      'タブを開く/閉じることができる',
    ],
  }

  const p = document.querySelector('p');

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
      const a = document.createElement('a');
      a.setAttribute('target', '_blank');
      a.setAttribute('href', '');
      const i = document.createElement('i');
      i.classList.add('bi', 'bi-play-btn-fill');
      i.title = 'レッスン動画の該当箇所';

      li.appendChild(input);
      li.appendChild(span);
      a.appendChild(i);
      li.appendChild(a);
      ul.appendChild(li);
    });

    section.appendChild(h2);
    section.appendChild(ul);
    p.appendChild(section);
  }

  renderCheckList(arrPC);
  renderCheckList(arrMacDisplay);
  renderCheckList(arrBasicOperation);
  renderCheckList(arrAdvancedOperation);
  renderCheckList(arrBrowser);
}