/* */ 
(function(Buffer) {
  var keys = [new Buffer('2d2d2d2d2d424547494e2050524956415445204b45592d2d2d2d2d0a4d494943647749424144414e42676b71686b6947397730424151454641415343416d457767674a6441674541416f4742414b756c55545a3842317163635a38630a44585247535930386757384b764c6c63787878474334675a484e543343425546386e3552344b453330615a79595a2f727473515a7530356a755a4a78614a30710a6d62653735646c5135642b586339424d586551672f4d70545a773554414e374f4964475959704642652b31504c5a367745666a6b59724d714d55636671324c710a68544c64416276424a6e755263595a4c716d42654f51384654724b7241674d4241414543675945416e6b485262455055332f57495353517250333669794362320a532f53425a774b6b7a6d764372427844576850654473777039632f324a593736724e57664c7a793869586755473857557a76486a653631516833676d42634b650a62556154476c34567938486131594241446f3552665272646d3046453474766776752f546b7146717042425a7765753534323835686b357a6c47376e2f4437590a646e4e58557075354d6c4e623578336757306b43515144554c2f2f637763585578592f6576614a50346a53652b5a7745515a6f2b7a58524c695055756c426f560a6177323843564d757864677771416f315831494b65665065556166375251753867434b61526e704775457558416b45417a785a54664d6d766d435544496577340a35476b36624b3236355851576468636769713235346c7042474f596d446a397943453779412b7a6d415351774d73585464514f6931684f434579725875534a350a632b2b4544514a4146683357726e7a6f455042797559584d6d45543874534652574d51357670674e716833686148523562346755433268786169756e43424e4c0a315270565939416f55694479774763472f5350683933436e4b42336e69774a42414b503741747369665a6756587469697a4234614d5468546a565961535a727a0a44304b6739447548796c706b4443686d467537375447724e55516741567559746668622f6252626c56612f4630684a3465514854334a554351425654363874620a4f6752556b30615039744333303231564e383258362b6b6c6f7753514e386f425058382b546644575355696c702f2b6a3234486b792b5a3239446f3779522f520a7175746e4c39324376426c564c56343d0a2d2d2d2d2d454e442050524956415445204b45592d2d2d2d2d0a', 'hex'), new Buffer('2d2d2d2d2d424547494e205253412050524956415445204b45592d2d2d2d2d0a4d4949435641494241414a2f4f77737762466f2f757943386c7447662f794131412b6756354947646e4167506255534933477a624843412b782b544c472f744c0a76625277337231736d7070592f6a6b6b70695657314572534d754e307569787035676237385a39724831587057623557576770335761592f3945484d6a4d644f0a6b512f394c565a7652766c2f4d2f4669366f77502b712b616d4a493142456a454359666268474c33726d6c5664713471586334305177494441514142416e38490a565a3042506f414f68794633334b464d4878793872323866735667784a5559674d334e715167647634664661774359586a684a7a3964755535594a47464a474a0a57554765486c6b7959466c70693466336d377459374a61776d51555742304d4e536f4b48493363674458342f7466424e386e692b634f3065536f5235637a42590a4573414842553437703161774e46414877642b5a457576394834526d4d6e37703237397251547470416b4148334e7173322f7672524632635a554e34664958660a347848735142427955617947713861334a305547615346577636387a54554b466865727239755a6f744e70374e4a346a425869415277307138646f63585547310a416b4148676d4f4b486f4f5274416d696b71706d46454a5a4f7473584d614c43496d3445737a506f356369596f4c4d42635669743039416469516c74375a4a4c0a445930327376553162306167435a39376b446b6d48446b58416b414361384d394a454c7544732f502f76494759446b4d566174494666573662574630326546470a746157774d71436353457357766277307871597433346a5552704e62436a6d4379515677596641772f2b544c68503964416b414677526a64776a77333771706a0a646467316d4e697533376237737746786d6b694d4f585a5278614e4e736662353641313452704e337a6f6233516447557962476f644d494b5446626d552f6c750a436a71417861664a416b41473279663652576277464957664d7974375759436830566147424363677935373441696e566965456f335a5a7946664336332b786d0a33756f614e7934694c6f4a763447436a7155427a335a666356614f2f444457470a2d2d2d2d2d454e44205253412050524956415445204b45592d2d2d2d2d0a', 'hex'), new Buffer('2d2d2d2d2d424547494e205253412050524956415445204b45592d2d2d2d2d0a4d4949456a77494241414b422f6779376d6a615767506546645659445a5752434139424e69763370506230657332372b464b593068737a4c614f7734374578430a744157704473483438545841667948425977424c67756179666b344c4749757078622b43474d62526f337845703043626659314a62793236543976476a5243310a666f484444554a4738347561526279487161663469367a74346756522b786c4145496a6b614641414b38634f6f58415431435671474c4c6c6a554363684c38500a6a61486a2f7972695a2f53377264776c49334c6e41427877776d4c726d522f7637315774706d4f2f614e47384e2b31706f2b5177616768546b79513539452f5a0a7641754f6b4657486f6b32712f523650594161326a645a397a696d3046714f502b6e6b5161454452624246426d4271547635664647666b32577341664b662f520a47302f5646642b5a654d353235315465547658483639356e6c53476175566c3941674d42414145436766344c725748592f6c35346f7554685a577676627275670a70667a36734a583267396c3779586d576c455773504543566f2f375355627059467074364f5a7939397a53672b494b624771574b6664686f4b725477495674430a4c30595a304e6c6d646e414e53497a30726f785147375a786b4c352b764853772f506d443978345577662b437a38684154436d4e42763171633630646b7975570a34434c71653732716154695657526f4f316961675167684e634c6f6f36765379363545784c614344545068613779753276773468465a705769456a57346478660a7246644c696978353242433836596c416c784d452f724c6738494a5676696c62796f39615764586d784f6155544c527636506b4644312f6756647738563951720a534c4e39466c4b326b6b6a695830647a6f6962765a7733744d6e74337979644178305838372b734d5256616843316270336b56507a3448793045575834514a2f0a504d33317647697549546b324e43643531445874314c746e324f503546614a536d4361456a6830586b5534716f7559796a585774384275364254436c327675610a466730556a6939432b496b504c6d61554d624d494f7761546b386357714c74685378734c6537304a354f6b477267664b554d2f772b4248483150742f506a7a6a0a432b2b6c306b6946614f5644566141563947704c504c43426f4b2f50433952622f72784d4d6f43434e774a2f4e5a756564496e793277334c4d69693737682f540a7a53766572674e47686a5936526e7661386c4c584a36646c726b6350417970733367577778716a344e5230542b474d3062445550564c62374d303758563753580a7637564a476d35324a625247774d3173732b72385854544e656d65476b2b5752784737546774734d715947584c66423851786b2f66352f4d63633030546c38750a7758464e7366784a786d7436416273547233673336774a2f49684f6e69627a3941642b6e63686c426e4e3351655733434b48717a61523138766f717674566d320a6b4a66484b31357072482f7353476d786d6945476772434a545a78744462614e434f372f56426a6e4b756455554968434177734c747571302f7a7562397641640a384731736366497076357161534e7a6d4b6f5838624f77417276725336775037794b726354737557496c484438724a5649374945446e516f5470354738664b310a68774a2f4d4968384d35763072356455594576366f494a5747636c65364148314a6d73503557496166677137325a32323838704863434648774e59384467394a0a3736517377564c6e556850546c6d6d33454f4f50474574616d32694144357230416679746c62346c624e6f51736a32737a65584f4e4458422b366f7565616a680a564e454c55723848635350356c677a525a6a4a57366146497a6a394c44526d516e55414f6a475358564f517445774a2f4d43515a374e2f763464494b654452410a3864385545785a332b674748756d7a697a7447524a30745172795a483250616b50354937562b316c377145556e4a3263336d462b65317634314570394c4376680a627a72504b773964786831386734622b37624d707357506e7372614b6836697078633761614f615a5630447867657a347a635a753050316f6c4f30634e334b4d0a6e784a305064733352386241684e43446453324a5a61527035513d3d0a2d2d2d2d2d454e44205253412050524956415445204b45592d2d2d2d2d0a', 'hex')];
  var parseKey = require("parse-asn1");
  var privs = keys.map(parseKey);
  var crt = require("../browserify-rsa@2.0.1");
  var crypto = require("crypto");
  var test = require("tape");
  var constants = require("constants");
  var bn = require("bn.js");
  function testIt(priv, run) {
    test('r is coprime with n ' + (run + 1), function(t) {
      var len = 30;
      t.plan(len);
      var i = 0;
      while (i++ < len) {
        var r = crt.getr(priv);
        t.equals(r.gcd(priv.modulus).toString(), '1', 'are coprime run ' + i);
      }
    });
  }
  privs.forEach(testIt);
  function testMessage(key, run) {
    var len = 40;
    var i = 0;
    while (len--) {
      test('round trip key ' + (run + 1) + ' run ' + (++i), function(t) {
        t.plan(1);
        var priv = parseKey(key);
        var len = priv.modulus.byteLength();
        var r = new bn(crypto.randomBytes(len));
        while (r.cmp(priv.modulus) >= 0) {
          r = new bn(crypto.randomBytes(len));
        }
        var buf = new Buffer(r.toArray());
        if (buf.byteLength < priv.modulus.byteLength()) {
          var tmp = new Buffer(priv.modulus.byteLength() - buf.byteLength);
          tmp.fill(0);
          buf = Buffer.concat([tmp, buf]);
        }
        var nodeEncrypt = crypto.privateDecrypt({
          padding: constants.RSA_NO_PADDING,
          key: key
        }, buf).toString('hex');
        var myEncrypt = crt(buf, priv).toString('hex');
        t.equals(nodeEncrypt, myEncrypt, 'equal encrypts');
      });
    }
  }
  keys.forEach(testMessage);
})(require("buffer").Buffer);
