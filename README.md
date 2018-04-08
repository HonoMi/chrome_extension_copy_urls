# chrome_extension_copy_urls
* ./dist/chrome をchrome拡張として登録すること。
* ctrl+7: 見ているページのURLをクリップボードに送る。
* ctrl+y: 見ているページのURLとタイトルをクリップボードに送る。

コピーするだけでなく、URLエンコーディングが解除されるのがメリット。

## If you are [Vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb) user
There is a conflict with the default Vimium key mappings.
If you want to use the ctrl+y function of this extension instead of that of Vimium, go to the Vimium Options and add `unmap <c-y>` in Custom key mappings.
