var tripetto = TripettoServices.init({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVTEyb3FWSXZ6K0xXdTc5eWxta1JsdGpUaDhQNm0yMnB6Y3BEZ3lpSTBnOD0iLCJkZWZpbml0aW9uIjoidExqRjFLQytubEdXMUZzL25mUmw5UW5IUlZJTXh5TGFwQ1JJR3J5d0Fldz0iLCJ0eXBlIjoiY29sbGVjdCJ9.TFyke-zZQ1Iu6_5f1goNMaxfJ6Zy9pQAcq3f5wg2D_4" });

TripettoAutoscroll.run({
    element: document.body,
    definition: {"epilogue":{"title":"Thank you @a4da6a6d0b042fd551ab78e0d95ae5704761bf3aefad2264a7ea2a4e3a3f9480, we'll be in touch 👋"},"clusters":[{"id":"ebef07c003034dace7a6e904e9444302dbcdaa92435018f6268e00292048f884","name":"Welcome!","nodes":[{"id":"f03a572dbdada5317e43d9be46a65e80a0fb2e71872c0fa48c5ef2fc3746dfb2","disabled":false,"name":"What is your name ?","nameVisible":true,"description":"Let's start on a first-name basis.","slots":[{"id":"a4da6a6d0b042fd551ab78e0d95ae5704761bf3aefad2264a7ea2a4e3a3f9480","type":"text","kind":"static","reference":"value","label":"Text","required":true,"transformation":"capitalize"}],"block":{"type":"tripetto-block-text","version":"5.0.0"}},{"id":"baf2366106f964d5f9c2c640bdb9ca1010a2fed576e1caac057174b107b5b2cd","name":"Glad to have you here, @a4da6a6d0b042fd551ab78e0d95ae5704761bf3aefad2264a7ea2a4e3a3f9480. What can we offer you ?","nameVisible":true,"slots":[{"id":"dbe4fcda96f2bd509799959c33088e923ae9b8d2dee204b396c5db20eb5b87bf","type":"boolean","kind":"dynamic","reference":"9c5624b997a9ef55f0afc665c95b86263e4abd7d6badd1fe27778b5335c78dae","sequence":0,"label":"Choice","name":"Website","required":true,"pipeable":{"label":"Choice","content":"name","legacy":"Choice"},"labelForFalse":"Not selected","labelForTrue":"Selected"},{"id":"0b8db4e308ec6bd0f09d75e541301db20aec176da39da30189aaf6e07985fa1f","type":"boolean","kind":"dynamic","reference":"3fcabd40daea966bc834a3f6e7a984ba46f89899e79c04e29cad6ac50ffe6277","sequence":1,"label":"Choice","name":"Branding","required":true,"pipeable":{"label":"Choice","content":"name","legacy":"Choice"},"labelForFalse":"Not selected","labelForTrue":"Selected"},{"id":"9ac6e75fbb7591fb34c7f64530a9eb44e28146a95261c7463ba092b2b94c83e1","type":"boolean","kind":"dynamic","reference":"dc355a0431d9b15eafcc51bfe41a315f6796d2d5ca335df0c2da44f08a66164e","sequence":2,"label":"Choice","name":"Mobile App","required":true,"pipeable":{"label":"Choice","content":"name","legacy":"Choice"},"labelForFalse":"Not selected","labelForTrue":"Selected"},{"id":"22bdf839755f64b4993a56d9e51bce851a82db901851636d713ff096ceaf62c0","type":"boolean","kind":"dynamic","reference":"09a91fcfcc33ef24ea0a56ff5940dba08d30da69a29be8b650cba4fc49abd5ab","sequence":3,"label":"Choice","name":"Social Media Content","required":true,"pipeable":{"label":"Choice","content":"name","legacy":"Choice"},"labelForFalse":"Not selected","labelForTrue":"Selected"}],"block":{"type":"tripetto-block-multiple-choice","version":"4.0.0","choices":[{"id":"9c5624b997a9ef55f0afc665c95b86263e4abd7d6badd1fe27778b5335c78dae","name":"Website"},{"id":"3fcabd40daea966bc834a3f6e7a984ba46f89899e79c04e29cad6ac50ffe6277","name":"Branding"},{"id":"dc355a0431d9b15eafcc51bfe41a315f6796d2d5ca335df0c2da44f08a66164e","name":"Mobile App"},{"id":"09a91fcfcc33ef24ea0a56ff5940dba08d30da69a29be8b650cba4fc49abd5ab","name":"Social Media Content"}],"multiple":true,"alignment":true,"required":true}},{"id":"c6674e3856f6f36e2278c1258c8a5671a376f998af71cc116f973dc57b558a58","name":"Would you like to give us a brief explanation of the service you've chosen, for us to understand you better ?","nameVisible":true,"slots":[{"id":"a2379f8a4c5b388274dfe8431e5d158bb5845337a4cc14bf01948f7822165928","type":"string","kind":"static","reference":"choice","label":"Choice"}],"block":{"type":"tripetto-block-multiple-choice","version":"4.0.0","choices":[{"id":"b8eefb4123c646f0404364ecf841d0c0e5caadbb45a5092510170fbf39f0bb73","name":"Yes"},{"id":"143adc5d4e52ac93e1971b192a0d743dfb2f53af82b72918d869f9e3aa801140","name":"No"}]}}],"branches":[{"id":"b25c5dcae134f2ea429c5d48876b2bcdbd19df090c9842476301ff6ce544d56e","clusters":[{"id":"802bbebb3434fe4b97091761f8645ec12ac90f1a37caa0343598b6b4d90f3a09","nodes":[{"id":"cafa313f28720ba190f9119576ead0ea7574d71ae7516d02248748e94496cef6","name":"Let us understand what you need more clearly.","nameVisible":true,"slots":[{"id":"1a3b7305f249851ec5d974bbb8a08acdf1caeeccfd2217588a854c243839cef2","type":"text","kind":"static","reference":"value","label":"Multi-line text"}],"block":{"type":"tripetto-block-textarea","version":"5.0.0"}}]}],"conditions":[{"id":"5031953c7f37e3bc0d1c65c09a1b32d0f90fa6779dd2c68524a76c0472c05714","block":{"choice":"b8eefb4123c646f0404364ecf841d0c0e5caadbb45a5092510170fbf39f0bb73","type":"tripetto-block-multiple-choice","version":"4.0.0","node":"c6674e3856f6f36e2278c1258c8a5671a376f998af71cc116f973dc57b558a58","slot":"a2379f8a4c5b388274dfe8431e5d158bb5845337a4cc14bf01948f7822165928"}}]},{"id":"1ba24fb60f3f6ebadb2e6c57ad14d3787bdef895d54fc923005f8a89b30ab316","clusters":[{"id":"d60ac6eeb909b25e6292dfe4466d205966b8c36d41fee74070dfac04ca3a9bc6","nodes":[{"id":"fd0c52d4675ec1e40f440975c2f9d800f7ff4b13aab539b83446584f6913c01b","name":"Hey @a4da6a6d0b042fd551ab78e0d95ae5704761bf3aefad2264a7ea2a4e3a3f9480, looks like you prefer talking over the phone, drop in your number and we'll get back to you at the earliest.","nameVisible":true,"slots":[{"id":"6be4fb3fd5f753d7de22ea27c7eeb7a00292bc3130760be22e6b3aa83b0805ef","type":"numeric","kind":"static","reference":"number","label":"Number","required":true}],"block":{"type":"tripetto-block-number","version":"7.0.0"}}]}],"conditions":[{"id":"0d2882138260d791e6d583902bde5e4827b738bf4ab5a5d304d99edc24c0d4d4","block":{"choice":"143adc5d4e52ac93e1971b192a0d743dfb2f53af82b72918d869f9e3aa801140","type":"tripetto-block-multiple-choice","version":"4.0.0","node":"c6674e3856f6f36e2278c1258c8a5671a376f998af71cc116f973dc57b558a58","slot":"a2379f8a4c5b388274dfe8431e5d158bb5845337a4cc14bf01948f7822165928"}}]},{"id":"6625e4b2ed4d4708f2ba8ead3bcbebc5a6fc8974338a786c69e434206cafd015"},{"id":"61c6a5372f6798ea370543129d01473e0180f0d31b2ea59e1f8f7bde7065ff1b"},{"id":"d35cf863b6c6be07658315fa6ca77ffb8a2f0705880b5543a9d15aeb60399466","conditions":[{"id":"0a484fe2cc6db93053ad9368f0b963f50f046281d81f6effedbc673e52f2ef6f","block":{"choice":"b8eefb4123c646f0404364ecf841d0c0e5caadbb45a5092510170fbf39f0bb73","type":"tripetto-block-multiple-choice","version":"4.0.0","node":"c6674e3856f6f36e2278c1258c8a5671a376f998af71cc116f973dc57b558a58","slot":"a2379f8a4c5b388274dfe8431e5d158bb5845337a4cc14bf01948f7822165928"}}]},{"id":"b98ef8e8413b0715def0a448c74b92e4b27648ea0733b4c7e684018dc1a297c8","conditions":[{"id":"cc82f97130a8fb99a1a2bfa5239aa97a7d8f739eb4106034846a348ff70bce33","block":{"choice":"143adc5d4e52ac93e1971b192a0d743dfb2f53af82b72918d869f9e3aa801140","type":"tripetto-block-multiple-choice","version":"4.0.0","node":"c6674e3856f6f36e2278c1258c8a5671a376f998af71cc116f973dc57b558a58","slot":"a2379f8a4c5b388274dfe8431e5d158bb5845337a4cc14bf01948f7822165928"}}]},{"id":"a3a8574fc84e5815336fb4c2e7b11edfc4147c833fd01b320ea4db29eec56718","conditions":[{"id":"fb76b1d0d55732e66cda610be8b0d95f9b37e5666bff985f30c5321067d40cc4","block":{"choice":"143adc5d4e52ac93e1971b192a0d743dfb2f53af82b72918d869f9e3aa801140","type":"tripetto-block-multiple-choice","version":"4.0.0","node":"c6674e3856f6f36e2278c1258c8a5671a376f998af71cc116f973dc57b558a58","slot":"a2379f8a4c5b388274dfe8431e5d158bb5845337a4cc14bf01948f7822165928"}}]},{"id":"f1b08f82cc70997721433a1b757a8b67fbf9d53f39056615229d3922ac46ab8b","name":"Yes","conditions":[{"id":"210cabfc66309360b40871427342bb27e0561fdb62e39f99a4da372aa070b981","block":{"choice":"b8eefb4123c646f0404364ecf841d0c0e5caadbb45a5092510170fbf39f0bb73","type":"tripetto-block-multiple-choice","version":"4.0.0","node":"c6674e3856f6f36e2278c1258c8a5671a376f998af71cc116f973dc57b558a58","slot":"a2379f8a4c5b388274dfe8431e5d158bb5845337a4cc14bf01948f7822165928"}}]},{"id":"0a519eae8789c1b0a8c1a299ceaa9a04a11f8cb7a21491318f3ec1ebfc20a000","name":"No","conditions":[{"id":"ed1de970eb771559f0fdc14dd7aaf1569eddd94e57cb6d64625dd25b3fcba327","block":{"choice":"143adc5d4e52ac93e1971b192a0d743dfb2f53af82b72918d869f9e3aa801140","type":"tripetto-block-multiple-choice","version":"4.0.0","node":"c6674e3856f6f36e2278c1258c8a5671a376f998af71cc116f973dc57b558a58","slot":"a2379f8a4c5b388274dfe8431e5d158bb5845337a4cc14bf01948f7822165928"}}]},{"id":"edcf02d18fef74bbe066178a5203b936d6be523e4cab0886aa6d9fc487255c0d","conditions":[{"id":"a17d9dc7e7e042c4dd63eb1f09c92a46c12fff0421f333fe41f303e5f1fe05eb","block":{"choice":"143adc5d4e52ac93e1971b192a0d743dfb2f53af82b72918d869f9e3aa801140","type":"tripetto-block-multiple-choice","version":"4.0.0","node":"c6674e3856f6f36e2278c1258c8a5671a376f998af71cc116f973dc57b558a58","slot":"a2379f8a4c5b388274dfe8431e5d158bb5845337a4cc14bf01948f7822165928"}}]}]}],"builder":{"name":"tripetto","version":"4.0.1"}},
    styles: {"direction":"vertical","verticalAlignment":"middle","hidePast":false,"hideUpcoming":false,"showNavigation":"auto","showProgressbar":true,"showEnumerators":false,"autoFocus":false,"showSeparateSubmit":true,"showPreviousButton":true,"showScrollbar":false,"noBranding":false,"contract":{"name":"tripetto-runner-autoscroll","version":"5.0.2"},"background":{"url":"https://raw.githubusercontent.com/justDenzil/haloweave-website/main/typeform%20bg%20(1).webp","positioning":"cover"},"font":{"size":18,"family":"Poppins"},"inputs":{"borderSize":1,"roundness":8,"errorColor":"red","agreeColor":"green","declineColor":"red"},"color":"white","disableScrolling":false},
    attachments: tripetto.attachments,
    onSubmit: tripetto.onSubmit
});