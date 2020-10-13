# Ad Generation(アドジェネ)導入マニュアル

## Getting Started / バナー広告
一般的なバナー広告をアプリやWebサイトに組み込むことが出来ます。

> [Web](./Banner_Ad_Web) / [iOS](./Banner_Ad_iOS) / [Android](./Banner_Ad_Android) / [Unity](./Banner_Ad_Unity) / [Cocos2d-x](./Banner_Ad_Cocos2d-x) / [Monaca](./Banner_Ad_Monaca) / [AMP(Accelerated-Mobile-Pages)](./Banner_Ad_AMP)

###### ※ 端末いっぱいまでバナー広告を拡大するには
> [iOS](./Banner_Ad_iOS_expand) / [Android](./Banner_Ad_Android_expand)

## インタースティシャル広告
インタースティシャル広告とは、アプリの上にオーバーレイで表示されるフルスクリーン広告です。

アプリの画面が切り替わるタイミングなどの使用に適しています。

> [iOS](./Interstitial_Ad_iOS) / [Android](./Interstitial_Ad_Android) / [Unity](./Interstitial_Ad_Unity) / [Cocos2d-x](./Interstitial_Ad_Cocos2d-x)

## ネイティブ広告
ネイティブ広告は、広告を他のコンテンツと同様に機能させることで、より統一感のあるユーザー体験を提供出来ます。

> [Web](./Banner_Ad_Web) / [iOS](./Native_Ad_iOS) / [Android](./Native_Ad_Android)

> (※ Webはバナー広告と同様の実装方法になります)

## 各アドネットワーク提供のSDK連携について
提携しているアドネットワークからネイティブアプリ向けSDKを提供している場合、Ad GenerationのSDKに加え、アドネットワークのSDKや各種必要となるライブラリを参照する必要があります。

アドネットワークのSDKと連携するための注意事項や共通して行って頂く必要がある作業がございます。各アドネットワークのSDKを導入する前に以下をご確認ください。

[アドネットワークのSDKと連携する際の注意事項及び共通手順](./SDK_Mediation_Notes)

### Facebook Audience Networkとの連携方法
「[Audience Network](https://developers.facebook.com/products/app-monetization/audience-network/)」は、Facebook 上でユーザーに表示している広告を Facebook 以外のモバイルアプリ上でも表示出来るアドネットワークです。

- バナー広告/インターステシャル広告

  > [iOS](./FacebookAudienceNetwork_Banner_Interstitial_Ad_iOS) / [Android](./FacebookAudienceNetwork_Banner_Interstitial_Ad_Android)

- ネイティブ広告

  > [iOS](./FacebookAudienceNetwork_Native_Ad_iOS) / [Android](./FacebookAudienceNetwork_Native_Ad_Android)

- ネイティブバナー広告

  > [iOS](./FacebookAudienceNetwork_NativeBanner_Ad_iOS) / [Android](./FacebookAudienceNetwork_NativeBanner_Ad_Android)

### FIVEとの連携方法
「[FIVE](https://www.five-corp.com/)」は、モバイルアプリ向け動画広告アドネットワークです。

> [iOS](./FIVE_Banner_Interstitial_Ad_iOS) / [Android](./FIVE_Banner_Interstitial_Ad_Android)

### LINE広告ネットワーク(LINE Ads Platform)との連携方法
- [iOS/Android](./LINEAdsNetwork_iOS_Android)

### Amazon Mobile Ad Networkとの連携方法
「[Amazon Mobile Ad Network](https://developer.amazon.com/public/ja/apis/earn/mobile-ads)」は、Amazonの提供するモバイルアプリ向けアドネットワークです。

> [iOS](./Amazon_Mobile_Ad_Network_Banner_Ad_iOS) / [Android](./Amazon_Mobile_Ad_Network_Banner_Ad_Android)


### Amazon Publisher Servicesとの連携方法
「[Amazon Publisher Services](https://aps.amazon.com/aps/index.html)」は、Amazonによるパブリッシャー向けマネタイズソリューションです。

> [iOS](./Amazon_Publisher_Services_iOS) / [Android](./Amazon_Publisher_Services_Android) / [Web](./Amazon_Publisher_Services_Web)

### AdMobとの連携方法
「[AdMob](https://www.google.co.jp/admob/)」は、Googleの運営する広告配信プラットフォームです。

> [iOS](./AdMobAdapter_iOS_Manual) / [Android](./AdMobAdapter_Android_Manual)

#### AdMobメディエーションでAd Generationを配信する場合

AdMobから他社の配信元の広告をアプリに配信できる「AdMobメディエーション(カスタムイベント)」の機能を使用してAd Generationを連携させる場合はこちらを参照ください。

> [iOS](./AdMobMediation_Banner_Interstitial_Ad_iOS) / [Android](./AdMobMediation_Banner_Interstitial_Ad_Android)

### MoPubとの連携方法

「[MoPub](https://www.mopub.com/)」は、Twitterの運営する広告配信プラットフォームです。

- バナー広告/インタースティシャル広告
> [iOS](./MoPub-Banner_Interstitial_Ad_iOS) / [Android](./MoPub-Banner_Interstitial_Ad_Android) / [Unity](./MoPub-Banner_Interstitial_Ad_Unity)

- ネイティブ広告
> [iOS](./MoPub-Native_Ad_iOS) / [Android](./MoPub-Native_Ad_Android)

### AppLovinとの連携方法
「[AppLovin](https://www.applovin.com/)」は、AppLovin社によるモバイルアプリに特化した広告配信プラットフォームです。

> [iOS](./AppLovin_Interstitial_Ad_iOS) / [Android](./AppLovin_Interstitial_Ad_Android)

### UnityAdsとの連携方法
「[UnityAds](https://unityads.jp/)」は、モバイルゲームに特化した動画広告サービスです。

> [iOS](./UnityAds_Interstitial_Ad_iOS) / [Android](./UnityAds_Interstitial_Ad_Android)

### maioとの連携方法
「[maio](https://maio.jp/)」は、スマートフォンアプリを利用中のユーザーに対して、動画広告を配信するプラットフォームです。

> [iOS](./Maio_Interstitial_Ad_iOS) / [Android](./Maio_Interstitial_Ad_Android)

### Prebid.jsとの連携方法
「[Prebid.js](http://Prebid.org/)」は、パブリッシャーがヘッダービディングを実装するためのオープンソースライブラリです。

> [Web](./Prebid_Web) /  [Web Amazon Publisher Servicesとの併用](./Prebid_APS_Banner_Ad_Web)

## リファレンス
> [iOS](./Reference_iOS) / [Android](./Reference_Android)

## その他

- [テスト用の広告枠ID一覧](./Test_ID)
- [iOS SDK導入時のApp Transport Security(ATS)対応について](./iOS_ATS)
- [Androidアプリにて　targetSDKVersionが28以上でビルドする場合の SDK導入時の対応について](./Android_http_block)
- [位置情報の扱いについて](./Location)
- [Supershipポリシー及びオプトアウトリンク掲載について](https://ad-generation.jp/support/adg-help/more/optout)

---
## 動画リワード広告

動画リワード広告とは、ユーザーに15秒～30秒ほどの動画広告を完全視聴してもらい、その報酬（インセンティブ）を与える広告フォーマットです。

SDKの導入手順はこちらをご確認ください。
> [iOS](https://github.com/AdGeneration/VAMP-iOS-SDK/wiki) / [Android](https://github.com/AdGeneration/VAMP-Android-SDK/wiki) / [Unity](https://github.com/AdGeneration/VAMP-Unity-Plugin/wiki/Integration-Guide) / [Cocos2d-x](https://github.com/AdGeneration/VAMP-Cocos2d-x-Plugin/wiki/Integration-Guide)

---
## お問い合わせ
広告実装に関することや、その他 Ad Generation(アドジェネ)に関する全般的なお問い合わせはこちらからお願いいたします。
- [お問い合わせ](https://docs.google.com/forms/d/e/1FAIpQLScYROjUpoEQGERI5T9Ii9pZ-LHlsqZYKJgsPBZcHHCZIO0S8w/viewform)
