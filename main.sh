#!/bin/bash
function mvdir() {
mv -n `find $1/* -maxdepth 0 -type d` ./
rm -rf $1
}

git clone --depth 1 https://github.com/kiddin9/openwrt-bypass && mvdir openwrt-bypass
git clone --depth 1 https://github.com/xiaorouji/openwrt-passwall
git clone -b 18.06 --depth 1 https://github.com/kiddin9/luci-theme-edge
git clone --depth 1 https://github.com/jerrykuku/luci-app-vssr
git clone --depth 1 https://github.com/hubbylei/luci-app-clash
git clone --depth 1 https://github.com/zzsj0928/luci-app-pushbot
git clone -b lede https://github.com/pymumu/luci-app-smartdns
git clone --depth 1 https://github.com/esirplayground/LingTiGameAcc
git clone --depth 1 https://github.com/esirplayground/luci-app-LingTiGameAcc
git clone --depth 1 https://github.com/jefferymvp/luci-app-koolproxyR
git clone --depth 1 https://github.com/destan19/OpenAppFilter && mvdir OpenAppFilter
git clone -b 18.06 --depth 1 https://github.com/jerrykuku/luci-theme-argon
git clone --depth 1 https://github.com/jerrykuku/luci-app-argon-config
git clone --depth 1 https://github.com/sundaqiang/openwrt-packages && mv -n openwrt-packages/luci-* ./; rm -rf openwrt-packages


svn co https://github.com/fw876/helloworld/trunk/luci-app-ssr-plus
svn co https://github.com/vernesong/OpenClash/trunk/luci-app-openclash
svn co https://github.com/kenzok8/jell/trunk/luci-app-adguardhome
svn co https://github.com/Lienol/openwrt-package/trunk/luci-app-fileassistant
svn co https://github.com/sirpdboy/sirpdboy-package/trunk/luci-app-advanced
svn co https://github.com/sirpdboy/sirpdboy-package/trunk/luci-app-aliddns
svn co https://github.com/sirpdboy/netspeedtest/trunk/luci-app-netspeedtest
svn co https://github.com/sirpdboy/sirpdboy-package/trunk/luci-app-koolddns
svn co https://github.com/sirpdboy/sirpdboy-package/trunk/luci-theme-atmaterial
svn co https://github.com/sirpdboy/sirpdboy-package/trunk/luci-theme-ifit
svn co https://github.com/sirpdboy/sirpdboy-package/trunk/luci-theme-opentopd
svn co https://github.com/Lienol/openwrt-package/trunk/luci-app-control-timewol
svn co https://github.com/Lienol/openwrt-package/trunk/luci-app-control-webrestriction
svn co https://github.com/Lienol/openwrt-package/trunk/luci-app-control-weburl
svn co https://github.com/Lienol/openwrt-package/trunk/luci-app-kodexplorer

mv -n openwrt-passwall/* ./ ; rm -Rf openwrt-passwall

rm -rf ./*/.git & rm -f ./*/.gitattributes
rm -rf ./*/.svn & rm -rf ./*/.github & rm -rf ./*/.gitignore
exit 0
