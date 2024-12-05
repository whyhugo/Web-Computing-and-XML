# HTML5 網頁實習說明文件
臺師大資工二 41247013S 王修佑
## Homework Requirement
- [x] Design a Pure HTML5 Website. The Website should include images, hyperlinks, tables, and any form of multimedia contents. 
- [x] At least 4 pages.
- [x] At least one page with SVG or \<canvas> scalar graphics.
- [x] One page show your resume.xml (or name card in HW1).
- [x] Use WCAG 2.1 Web Accessible Design (at least 3 items).
- [x] Please use RWD for laptop and mobile devices.
- [x] Give a report to discuss your design.

## My Website
<img src="img\README_img\mockup_merge_light.png">

> [https://whyhugo.github.io/Web-Computing-and-XML/](https://whyhugo.github.io/Web-Computing-and-XML/) 
- 共 5 個頁面
  - 首頁 - Home
  - 我的課表 - Schedule
  - 旅遊紀錄 - Travel
  - 聯絡資訊 - Contact
  - 履歷表 - Resume
### Feature
- RWD Design  
  5 個頁面皆有 RWD 設計，詳見後段各頁面說明。
  <img src="img\README_img\mockup_merge_dark.png">
- Accessibility
  - 至少符合 5 項 WCAG 2.1 Web Accessible Design
    > [無障礙網路空間服務網 十三指引](https://accessibility.moda.gov.tw/Accessible/Guide/68)
    - 指引 1.3：可調適  
      使用 RWD 設計適應網頁呈現於各種裝置，HTML 使用清楚且有意義的層次呈現。建立能以不同方式呈現（例如簡化的版面），而不會喪失資訊或結構的內容。
      <img src="img\README_img\RWD_carbon.png" width="70%">
    - 指引 1.4：可辨識  
      網頁中所有文字與內容方塊皆有足夠的對比度與陰影設計，並且採用清楚且足夠的邊距布局。讓使用者能更容易地看見及聽到內容、區分前景和背景。
    - 指引 2.3：預防痙攣和身體不適反應  
      網頁所有元素每秒閃爍次數低於 3 次，且有淡入動畫呈現。無使用任何已知會引發痙攣或身體反應的方式來設計內容。
    - 指引 3.1：可讀性  
      每個網頁指定語言（lang="en"），便於屏幕閱讀器正確朗讀並可理解。
      <img src="img\README_img\lang_carbon.png" width="70%">
    - 指引 3.3：輸入協助  
      Contact 頁面的聯絡表單若未完整輸入，會在錯誤欄位旁跳出輔助提示，幫助使用者避開及更正錯誤。

      <img src="img\README_img\Contact_formNotice.png" width="50%">
  - Chrome Lighthouse  
    5 個頁面的 Desktop display 和 Mobile display 在 Chrome Lighthouse Accessibility 共 10 項次的測試全數皆超過 90 分，其中 8 項次獲得滿分 100
  - 使用 iloveadaptive 進行手動 RWD 測試，確保網頁與各種螢幕尺寸皆能舒適瀏覽
    > [iloveadaptive](http://iloveadaptive.com/)
    
    <img src="img\README_img\iloveadaptive.png" width="70%">
    <br>
    <br>
- User Experience
  - Navigation Bar  
    讓使用者可以在 5 個頁面間連續且自由的切換，並且在當前頁面按鈕以醒目顏色提示。同時使用 RWD 設計在窄螢幕會以 Hamburger Bar 的方式呈現。
    <img src="img\README_img\Mac_and_S23.png" width="70%"> 
  - Footer  
    使用頁面 Footer 設計，呈現網頁基本資訊與開發者的相關連結，也上使用者知道何處為頁面底部。

    <img src="img\README_img\Home_footer.png" width="70%">
- User Interface
  - Slide in animation  
    除 Navigation Bar 與 Footer 以外，所有頁面元素在出現時皆採用向上淡出的 Slide in animaiton，提升滾動瀏覽時的視覺體驗。
  - 一致的圓弧四角邊界  
    所有方塊元素皆有一致的圓弧邊角，且內外邊角符合半徑落差設計原理，提升平面視覺體驗舒適性。

    <img src="img\README_img\border-radius.png" width="45%">
  - 操作提示與回饋  
    所有按鈕解採用醒目色彩，引導使用者正確操作。且有觸碰與點擊回饋。
    <img src="img\README_img\Contact_linktree.png" width="60%">
  - Favicon  
    Favicon 圖片使用 [DALL-E 生成](https://chatgpt.com/share/67516462-4b60-8013-8a78-713de17850e0)。讓網頁在瀏覽器上的呈現具有標誌性。
    <img src="img\README_img\tabWithFavicon.png" width="80%">
  - 配色方法使用 Adobe Color 色票，並且在 CSS 中以 root 方法管理
    <img src="img\README_img\AdobeColor-Teal_and_Blush.jpeg" width="50%">
    
- Deployment and Analytics
  - GitHub Pages  
    使用 GitHub Pages 服務使得網頁可以在自己的 GitHub domain 下呈現。同時便於進行 Chrome Lighthouse、iloveadaptive 等各項線上 Accessibility 檢測。
  - Google Analytics 與 Clarity  
    清楚使用者網頁瀏覽體驗，包含點擊 Heatmaps、流量趨勢、使用者系統、使用者裝置、使用者瀏覽器、停留時間、滾動比率等資訊。便於日後提升網頁設計與服務。

<br>
<br>

## Home Page
> [https://whyhugo.github.io/Web-Computing-and-XML/](https://whyhugo.github.io/Web-Computing-and-XML/)

網頁主頁。呈現簡易自介、講課錄影、喜歡的歌單等。
### Feature
- 頂部 banner 使用 SVG 呈現，並且製作成重複播放的動畫
  <img src="img\README_img\Home_desktop.png" width="70%">
- 自我介紹區段包含文字、圖片與超連結，游標觸碰圖片會有放大且不溢出邊框的動畫
- 外部嵌入元素
  - YouTube Video。呈現尺寸跟隨整理 RWD 設定，並且同時維持 16:9 橫向呈現，允許全螢幕撥放、預設靜音、1080p 畫面呈現，提升使用者體驗
    <img src="img\README_img\Home_YouTube.png" width="70%">

  - Spotify Playlist  
    <img src="img\README_img\Home_Spotify.png" width="70%">
- Chrome Lighthouse Accessibility Score (Desktop/Mobile): 100/100
  > <a href="accessibility_doc/home.pdf" target="_blank"> Desktop report summary</a> / <a href="accessibility_doc/home_mobile.pdf" target="_blank"> Mobile report summary</a>

<br>

## Schedule Page
> [https://whyhugo.github.io/Web-Computing-and-XML/schedule.html](https://whyhugo.github.io/Web-Computing-and-XML/schedule.html)

呈現每週的課表，包含課程時間、名稱與地點。電腦版以表格方式完整呈現整週課表；手機版為避免橫向滾動，讓使用者改以按鈕方式自行選擇切換呈現其中一天的課表。
<img src="img\README_img\Schedule_desktop_fullSize.png" width="60%">

### Feature
- 表格首欄底色配合網頁主色系，並且通過文字背景對比度檢測
- 使用 JavaScript 輔助 RWD 設計，為避免手機使用者出現橫向滾動，在手機版設計 6 個按鈕來選擇呈現單日課表
  <img src="img\README_img\Schedule_Mobile_fullSize.png" width="25%">

- 按鈕觸碰與點擊回饋運用 CSS transition 設計，配色配合網頁整體色票
- 此頁面容易由於在手機版會有內容高度短於顯示器高度的情況，因此運用 css min-height 計算來解決
- Chrome Lighthouse Accessibility Score (Desktop/Mobile): 100/100
  > <a href="accessibility_doc/schedule.pdf" target="_blank"> Desktop report summary</a> / <a href="accessibility_doc/schedule_mobile.pdf" target="_blank"> Mobile report summary</a>

<br>

## Travel Page
> [https://whyhugo.github.io/Web-Computing-and-XML/travel.html](https://whyhugo.github.io/Web-Computing-and-XML/travel.html)

此頁面呈現旅遊紀錄，包含自己過去旅遊過程中的拍攝作品與簡易遊記。

<img src="img\README_img\Travel.png" width="30%">

### Feature
- 整體頁面大多以方塊呈現資訊，每個方塊皆有陰影設計
- 邊界距離完全一致
- 頂部使用 Stacked images srcoll-driven animations 設計
  <img src="img\README_img\Travel_stackedImages.png" width="70%">

- Stacked images 方塊中的圖片以 background image 方式呈現，使得圖片不容易被任意下載使用
- 遊記方塊的四角圓弧與其中圖片方塊的圓弧半徑有 5px 的差距，符合協調性的設計原理
- 遊記文字使用左右平均分散對齊  
  <img src="img\README_img\Travel_Keelung.png" width="70%">

- 圖片使用 Flickr 網址嵌入，缺點是畫質高會造成載入速度較慢，優點是可以降低 GitHub repo 的檔案大小負擔
- Chrome Lighthouse Accessibility Score (Desktop/Mobile): 92/94
  > <a href="accessibility_doc/travel.pdf" target="_blank"> Desktop report summary</a> / <a href="accessibility_doc/travel_mobile.pdf" target="_blank"> Mobile report summary</a>

<br>

## Contact Page
> [https://whyhugo.github.io/Web-Computing-and-XML/contact.html](https://whyhugo.github.io/Web-Computing-and-XML/contact.html)

此頁面首段以類似 link tree 的方式呈現我的社群媒體與 blog 連結。後段以表單方式讓使用者可以與我聯絡，不過目前尚未串接任何後端服務，僅提供前端功能。

### Feature
- link tree 聯絡按鈕連結設計採用觸碰與點擊回饋  
  <img src="img\README_img\Contact_linktree.png" width="50%">
  
- link tree 按鈕中的 icon 使用 Font Awesome 服務
- 使用 JavaScript 達成表單服務  
  <img src="img\README_img\Contact_form.png" width="60%">
  <img src="img\README_img\Contact_formReply.png" width="60%">

- Chrome Lighthouse Accessibility Score (Desktop/Mobile): 100/100
  > <a href="accessibility_doc/contact.pdf" target="_blank"> Desktop report summary</a> / <a href="accessibility_doc/contact_mobile.pdf" target="_blank"> Mobile report summary</a>

<br>

## Resume Page
> [https://whyhugo.github.io/Web-Computing-and-XML/resume.html](https://whyhugo.github.io/Web-Computing-and-XML/resume.html)

此頁面呈現 HW1 中的 resume.xml。

<img src="img\README_img\Resume_desktop_fullSize.png" width="30%">

### Feature
- 使用 JavaScript 將 resume.xml 呈現到網頁上
- 資料完全無缺失，且保有超連結設計
- Chrome Lighthouse Accessibility Score (Desktop/Mobile): 100/100
  > <a href="accessibility_doc/resume.pdf" target="_blank"> Desktop report summary</a> / <a href="accessibility_doc/resume_mobile.pdf" target="_blank"> Mobile report summary</a>
