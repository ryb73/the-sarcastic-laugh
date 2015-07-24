function playSoundEffect() {
	soundManager.play('funny');
}

soundManager.url = 'flash/';
soundManager.useFlashBlock = false;

soundManager.onload = function() {
	soundManager.createSound('funny', 'media/funny.mp3');
};

window.onload = function() {
	var b = document.getElementById('button').getElementsByTagName('img')[0];
	b.onclick = playSoundEffect;
};