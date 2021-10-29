function init() {
    var copy = document.getElementsByClassName('btn_copy');
    for (var i = 0; i < copy.length; ++i) {
        var digits = getDigits(copy[i].dataset.value);
        var clipboard = new ClipboardJS(copy[i]);
        copy[i].dataset.clipboardText = digits;
        clipboard.on('success', function () {
            window.alert('계좌번호가 복사 되었습니다.');
        });
    }

    var kpay = document.getElementsByClassName('btn_kpay');
    for (var i = 0; i < kpay.length; ++i) {
        kpay[i].addEventListener('click', function(e) {
            location.href = e.target.dataset.value;
        });
    }
}

function copyToClipboard(val) {
    var btn = document.querySelector('#b');
    var clipboard = new ClipboardJS(btn);
    btn.dataset.clipboardText = getUrlParams().val;

    clipboard.on('success', function () {
        window.alert('계좌번호가 복사 되었습니다.');
        window.open('', '_self', '');
        window.close();
    });
}

function getDigits(val) {
    var pattern = /(\D+)/;
    let replacedVal = val.replace(pattern, '').replace(/-/gi, '');
    return replacedVal;
}
