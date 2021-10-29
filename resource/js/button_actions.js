function init() {
    var copy = document.getElementsByClassName('btn_copy');
    for (var i = 0; i < copy.length; ++i) {
        copy[i].addEventListener('click', function(e) {
            var digits = getDigits(e.target.offsetParent.dataset.value);
            navigator.clipboard.writeText(digits).then(function() {
                window.alert('계좌번호가 복사 되었습니다.');
            }, function() {
            });
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

}

function getDigits(val) {
    var pattern = /(\D+)/;
    let replacedVal = val.replace(pattern, '').replace(/-/gi, '');
    return replacedVal;
}
