"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = require("./logger");
var fs_1 = require("fs");
var utils_1 = require("@yunyoujun/utils");
var utils_2 = require("./utils");
var iconsList_1 = require("../data/iconsList");
var readmeFile = "README.md";
var readmeContent = fs_1.default.readFileSync(readmeFile, "utf-8");
iconsList_1.iconsList.forEach(function (item) {
    readmeContent = utils_1.markdown.injectContentBetweenTags(item.namespace, readmeContent, (0, utils_2.generateIconList)(item.icons));
});
logger_1.logger.success("Generate ".concat(readmeFile, " successfully!"));
readmeContent = utils_1.markdown.injectContentBetweenTags('github-stats', readmeContent, (0, utils_2.generateGithubStatsImg)({
    username: 'YunYouJun',
    show_icons: true,
    icon_color: '0078e7',
    title_color: '0078e7',
    include_all_commits: true
}));
logger_1.logger.success("Generate github-stats successfully!");
if (readmeContent)
    fs_1.default.writeFileSync(readmeFile, readmeContent);
