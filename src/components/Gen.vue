<template>
	<h1 class="text-info my-4">
		<a href="/">
			乱数生成アプリケーション
		</a>
	</h1>
	<div class="form">
		<form id="form" mb="4">
			<input type="button" class="btn btn-outline-danger active" value="生成!" onclick="RandomNumber()">
			<input type="number" id="maxn" class="numinput" value="6" placeholder="乱数最大値を入力">
			<input type="number" id="minn" class="numinput" value="0" placeholder="乱数最小値を入力">
			<br>
			<input type="button" value="バックログ削除（再読み込み）" onclick="location.reload(false);">
		</form>
		<br>
		<code>
		<span id="out" class="out">
			まだ生成していません!
		</span>
	</code>
		<br>
		<div id="HistoryNum" class="HistoryNum"></div>
	</div>
	<footer id="footer-1" class="footer-1 fixed-bottom">
		This tool is created by <a href="https://nakatai.ga">Nakatai</a>.<br>
		This Program Used <a href="https://chancejs.com/">Chance.js</a>, <a
			href="https://github.com/devicons/devicon/">Devicon</a>&nbsp;and&nbsp;<a
			href="https://getbootstrap.jp/">bootstrap</a>.
	</footer>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap);
@import url(https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap);

body {
	font-family: "Montserrat", "Noto Sans JP", sans-serif;
	text-align: center;
	font-size: 20px;
}

p {
	font-weight: 600;
	font-size: 20px;
	line-height: 40px;
}

.historyNum {
	font-size: 10px;
	font-weight: bold;
}

.numinput {
	font-weight: 550;
}

.out {
	font-size: 40px;
}
</style>
