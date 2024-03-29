var buttons = document.querySelectorAll('button')

document.getElementById('iya').addEventListener('click', function(){
    buttons.forEach(function(button) {
        button.remove();
    });
    var img = document.getElementById('image');
    img.src = './resources/teknisi.png';
    document.getElementById('judul').innerText = 'Anda Berbohong!';
    document.querySelector('.container > .main-container > p').innerText = 'Anda adalah seorang Teknisi'
    document.querySelector('.container > .main-container').style.backgroundColor = '#E12E2E';
});

document.getElementById('tidak').addEventListener('click', function(){
    buttons.forEach(function(button) {
        button.remove();
    });
    var img = document.getElementById('image');
    img.src = './resources/mahasiswa.png';
    document.getElementById('judul').innerText = 'Anda Benar!';
    document.querySelector('.container > .main-container > p').innerText = 'Anda adalah seorang Mahasiswa'
    document.querySelector('.container > .main-container').style.backgroundColor = '#6FD240';
});
