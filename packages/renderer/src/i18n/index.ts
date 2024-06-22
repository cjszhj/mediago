import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: import.meta.env.MODE === "development",
    fallbackLng: "zh",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          downloadList: "Download List",
          downloadComplete: "Download Complete",
          materialExtraction: "Extraction",
          setting: "Setting",
          refresh: "Refresh",
          newDownload: "New Download",
          selectAll: "Select All",
          playOnMobile: "Play on mobile",
          openFolder: "Open folder",
          fileNotExist: "File not exist",
          downloadSuccess: "Download success",
          downloadFailed: "Download failed",
          downloadPause: "Download pause",
          downloading: "Downloading",
          liveResource: "Live Resource",
          more: "More",
          convertToAudio: "Convert to audio",
          edit: "Edit",
          convertSuccess: "Convert success",
          addTaskSuccess: "Add task success",
          download: "Download",
          pause: "Pause",
          redownload: "Redownload",
          watting: "Watting",
          continueDownload: "Continue download",
          playVideo: "Play video",
          scanToWatch: "Scan to watch (need to connect the same WIFI)",
          delete: "Delete",
          cancel: "Cancel",
          selectedItems: "Selected {{count}} items",
          help: "Help",
          openInNewWindow: "Open in new window",
          switchToMobileMode: "Switch to mobile mode",
          home: "Home",
          back: "Back",
          favorite: "Favorite",
          cancelFavorite: "Cancel favorite",
          pleaseEnterUrl: "Please enter url",
          visit: "Visit",
          mergeToMainWindow: "Merge to main window",
          loadFailed: "Load failed",
          backToHome: "Back to home",
          addShortcut: "Add shortcut",
          siteName: "Site Name",
          pleaseEnterSiteName: "Please enter site name",
          siteUrl: "Site URL",
          pleaseEnterSiteUrl: "Please enter site URL",
          pleaseEnterCorrectUrl: "Please enter correct URL",
          basicSetting: "Basic Setting",
          pleaseSelectDownloadDir: "Please select download directory",
          downloaderTheme: "Downloader Theme",
          followSystem: "Follow System",
          dark: "Dark",
          light: "Light",
          pleaseSelectTheme: "Please select theme",
          displayLanguage: "Display Language",
          chinese: "中文",
          english: "English",
          pleaseSelectLanguage: "Please select language",
          downloadPrompt: "Download Prompt",
          browserSetting: "Browser Setting",
          pleaseEnterProxy:
            "You need to enter the full address, for example: http://127.0.0.1:8000",
          proxySetting: "Proxy Setting",
          pleaseEnterProxyFirst: "Please enter proxy first",
          blockAds: "Block Ads",
          enterMobileMode: "Enter Mobile Mode",
          downloadSetting: "Download Setting",
          deleteSegments: "Delete segments after download",
          moreAction: "More Action",
          configDir: "Config Directory",
          clearCache: "Clear Cache",
          clearCacheSuccess: "Clear Cache Success",
          clearCacheFailed: "Clear Cache Failed",
          binPath: "Executable Path",
          localDir: "Local Directory",
          currentVersion: "Current Version",
          selectFolder: "Select Folder",
          proxySwitch: "Proxy Switch",
          downloadProxySwitch: "Download Proxy Switch",
          proxyDescription:
            "The proxy will take effect on the built-in browser and download",
          useImmersiveSniffing: "Use immersive sniffing",
          immersiveSniffingDescription:
            "After opening, the resources sniffed by immersive will not be displayed directly in the download list, and all resource sniffing will be handed over to the browser plug-in for processing",
          maxRunner: "Max Runner",
          maxRunnerDescription:
            "Live record does not occupy the number of simultaneous downloads",
          expand: "Expand",
          collapse: "Collapse",
          editDownload: "Edit Download",
          batchDownload: "Batch Download",
          videoLink: "Video Link",
          pleaseEnterVideoLink: "Please enter video link",
          videoName: "Video Name",
          pleaseEnterVideoName: "Please enter video name",
          additionalHeaders: "Additional Headers",
          pleaseEnterOnlineVideoUrl: "Please enter online network video URL",
          pleaseEnterCorrectVideoLink: "Please enter correct video link",
          pleaseEnterOnlineVideoUrlOrDragM3U8Here:
            "Please enter online network video URL, or drag M3U8 here",
          videoLikeDescription: `Please enter the video link, make sure one line one, for example
http://example.com/xxx.m3u8
http://example.com/xxx.m3u8`,
          additionalHeadersDescription: `Please enter additional headers, make sure one line one header, for example:
Origin: http://www.example.com
Referer: http://www.example.com`,
          cancle: "Cancle",
          terminal: "Open Terminal",
          close: "Close",
          exportLog: "Export Log",
          showTerminal: "Show Console",
          autoUpgrade: "Auto Upgrade",
          autoUpgradeTooltip: "Take effect next time you start",
          consoleOutput: "Console",
          downloadNow: "Download",
          addToDownloadList: "Confirm",
          videoType: "Video Type",
          pleaseSelectVideoType: "Please select video type",
          numberOfEpisodes: "Number of episodes",
          showNumberOfEpisodes: "Show number of episodes",
          canUseMouseWheelToAdjust: "Can use mouse wheel to adjust",
          openBrowser: "Open Browser",
          privacy: "Privacy Mode",
          privacyTooltip:
            "After turning on the switch, the browser will not save any data",
          converter: "Converter",
          addFile: "Add File",
        },
      },
      zh: {
        translation: {
          downloadList: "下载列表",
          downloadComplete: "下载完成",
          materialExtraction: "素材提取",
          setting: "软件设置",
          refresh: "刷新",
          newDownload: "新建下载",
          selectAll: "全选",
          playOnMobile: "手机上播放",
          openFolder: "打开文件夹",
          fileNotExist: "文件不存在",
          downloadSuccess: "下载成功",
          downloadFailed: "下载失败",
          downloadPause: "下载暂停",
          downloading: "下载中",
          liveResource: "直播资源",
          more: "更多",
          convertToAudio: "转换为音频",
          edit: "编辑",
          convertSuccess: "转换成功",
          addTaskSuccess: "添加任务成功",
          download: "下载",
          pause: "暂停",
          redownload: "重新下载",
          watting: "等待下载",
          continueDownload: "继续下载",
          playVideo: "播放视频",
          scanToWatch: "扫码观看(需要连接相同 WIFI)",
          delete: "删除",
          cancel: "取消",
          selectedItems: "已选择 {{count}} 项",
          help: "使用帮助",
          openInNewWindow: "在新窗口中打开",
          switchToMobileMode: "切换为手机模式",
          home: "首页",
          back: "回退",
          favorite: "收藏",
          cancelFavorite: "取消收藏",
          pleaseEnterUrl: "请输入网址",
          visit: "访问",
          mergeToMainWindow: "合并到主窗口",
          loadFailed: "加载失败",
          backToHome: "返回首页",
          addShortcut: "添加快捷方式",
          siteName: "站点名称",
          pleaseEnterSiteName: "请输入站点名称",
          siteUrl: "站点网址",
          pleaseEnterSiteUrl: "请输入站点网址",
          pleaseEnterCorrectUrl: "请输入正确的网址",
          basicSetting: "基础设置",
          pleaseSelectDownloadDir: "请选择视频下载目录",
          downloaderTheme: "下载器主题",
          followSystem: "跟随系统",
          english: "English",
          pleaseSelectLanguage: "请选择显示语言",
          downloadPrompt: "下载完成提示",
          browserSetting: "浏览器设置",
          pleaseEnterProxy: "需要填写完整的地址，例如：http://127.0.0.1:8000",
          proxySetting: "代理设置",
          pleaseEnterProxyFirst: "请先输入代理地址",
          blockAds: "开启广告过滤",
          enterMobileMode: "以手机模式进入",
          downloadSetting: "下载设置",
          deleteSegments: "下载完成删除分片",
          moreAction: "更多操作",
          configDir: "配置文件目录",
          clearCache: "清除缓存",
          clearCacheSuccess: "清除缓存成功",
          clearCacheFailed: "清除缓存失败",
          binPath: "可执行程序目录",
          localDir: "本地存储目录",
          currentVersion: "当前版本",
          selectFolder: "选择文件夹",
          proxySwitch: "代理开关",
          downloadProxySwitch: "下载代理开关",
          proxyDescription: "该代理会对软件自带浏览器以及下载时生效",
          useImmersiveSniffing: "使用沉浸式嗅探",
          immersiveSniffingDescription:
            "开启后沉浸式嗅探到的资源将不会直接显示在下载列表中，所有资源嗅探会交给浏览器插件处理",
          maxRunner: "最大同时下载数量",
          maxRunnerDescription: "直播录制不占用同时下载数量",
          expand: "展开",
          collapse: "收起",
          editDownload: "编辑下载",
          batchDownload: "批量下载",
          videoLink: "视频链接",
          pleaseEnterVideoLink: "请输入站点视频链接",
          videoName: "视频名称",
          pleaseEnterVideoName: "请输入视频名称",
          additionalHeaders: "附加标头",
          pleaseEnterOnlineVideoUrl: "请输入在线网络视频URL",
          pleaseEnterCorrectVideoLink: "请输入正确的视频链接",
          pleaseEnterOnlineVideoUrlOrDragM3U8Here:
            "请输入在线网络视频URL，或者将M3U8拖拽至此",
          videoLikeDescription: `请输入视频链接， 确保一行一个，例如：
http://example.com/xxx.m3u8
http://example.com/xxx.m3u8`,
          additionalHeadersDescription: `请输入附加标头，确保一行一个 Header， 例如：
Origin: http://www.example.com
Referer: http://www.example.com`,
          chinese: "中文",
          displayLanguage: "显示语言",
          dark: "深色",
          light: "浅色",
          pleaseSelectTheme: "请选择主题",
          cancle: "取消",
          terminal: "打开控制台",
          close: "关闭",
          exportLog: "导出日志",
          showTerminal: "显示控制台",
          autoUpgrade: "自动更新",
          autoUpgradeTooltip: "下次启动时生效",
          consoleOutput: "控制台",
          downloadNow: "下载",
          addToDownloadList: "确认",
          videoType: "视频类型",
          pleaseSelectVideoType: "请选择视频类型",
          numberOfEpisodes: "集数",
          showNumberOfEpisodes: "显示集数",
          canUseMouseWheelToAdjust: "可以使用鼠标滚轮调整",
          openBrowser: "打开浏览器",
          privacy: "隐私模式",
          privacyTooltip: "打开开关后浏览器将不保存任何数据",
          converter: "格式转换",
          addFile: "添加文件",
        },
      },
    },
  });

export default i18n;
