"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateGithubStatsImg = exports.generateIconList = void 0;
var logger_1 = require("./logger");
/**
 * 生成语言图标列表
 */
function generateIconList(icons) {
    return icons
        .map(function (icon) {
        var imgElement = "<img height=\"20\" src=\"https://raw.githubusercontent.com/github/explore/8ab0be27a8c97992e4930e630e2d68ba8d819183/topics/".concat(icon, "/").concat(icon, ".png\" alt=\"").concat(icon, "\" />");
        if (typeof icon !== "string") {
            imgElement = "<img height=\"20\" src=\"".concat(icon.url, "\" alt=\"").concat(icon.name, "\" />");
        }
        return "<code>".concat(imgElement, "</code>");
    })
        .join("\n");
}
exports.generateIconList = generateIconList;
/**
 * https://github.com/anuraghazra/github-readme-stats#common-options
 * @param params
 */
function generateGithubStatsImg(params) {
    if (params === void 0) { params = {}; }
    var url = 'https://github-readme-stats.vercel.app/api';
    var searchParams = new URLSearchParams(params);
    var imgTag = "<img align=\"right\" width=\"450\" src=\"".concat(url, "?").concat(searchParams.toString(), "\"/>");
    logger_1.logger.info(imgTag);
    return imgTag;
}
exports.generateGithubStatsImg = generateGithubStatsImg;
