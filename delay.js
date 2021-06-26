var flag = new RegExp('(express-cut.ovh)|(bitlinks.pw)|(neonlink.net)|(faucet.100count.net)|(bitcoinly.in)|\
(kiiw.icu)|(adbull.me)|(owllink.net)|(pingit.im)|(cashurl.in)|(adshort.co)|(aii.sh)|\
(riful.com)|(fc.lc)')
    function sleep(e) {
        for (var n = (new Date).getTime(); new Date < n + 1e3 * e;);
        return 0
    }
    if(flag.test(window.location.host)){
       alert('workinh')
    }
