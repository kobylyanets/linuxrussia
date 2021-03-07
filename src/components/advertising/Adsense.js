import React from 'react';
import AdSense from 'react-adsense';

const GoogleAd = () => (
  <AdSense.Google
    client="ca-pub-2178539334794330"
    slot="8568996919"
    style={{ display: 'block' }}
    format="auto"
    responsive="true"
  />
);

export default GoogleAd;

// `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
// <!-- sidebar_top -->
// <ins class="adsbygoogle"
//      style="display:block"
//      data-ad-client="ca-pub-2178539334794330"
//      data-ad-slot="8568996919"
//      data-ad-format="auto"
//      data-full-width-responsive="true"></ins>
// <script>
//      (adsbygoogle = window.adsbygoogle || []).push({});
// </script>
// `
