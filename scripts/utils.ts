import { logger } from "./logger";

export interface CustomIcon {
  /**
   * 名称
   */
  name: string;
  /**
   * 图标地址
   */
  img: string;
  /**
   * 图标链接
   */
  url?: string;
  /**
   * 类型
   */
  type?: string;
}

/**
 * 生成语言图标列表
 */
export function generateIconList(icons: (string | CustomIcon)[]) {
  return icons
    .map((icon) => {
      let imgElement = `<img height="20" title="${icon}" src="https://raw.githubusercontent.com/github/explore/8ab0be27a8c97992e4930e630e2d68ba8d819183/topics/${icon}/${icon}.png" alt="${icon}" />`;
      if (typeof icon !== "string") {
        imgElement = `<a href="${icon.url}"><img height="20" title= "${icon.name}" src="${icon.img}" alt="${icon.name}" /></a>`;
      }
      return `<code>${imgElement}</code>`;
    })
    .join("\n");
}

export interface GithubStatsParams extends Record<string, string | boolean> {
  username: string,
  /**
   * 'true' | 'false'
   */
  show_icons: boolean,
  icon_color: string,
  title_color: string
  /**
   * Count total commits instead of just the current year commits
   */
  include_all_commits: boolean
}

/**
 * https://github.com/anuraghazra/github-readme-stats#common-options
 * @param params 
 */
export function generateGithubStatsImg(params: Partial<GithubStatsParams> = {}) {
  const url = 'https://github-readme-stats.vercel.app/api'
  const searchParams = new URLSearchParams(params as Record<string, string>)
  const imgTag = `<img align="right" width="450" src="${url}?${searchParams.toString()}"/>`
  logger.info(imgTag)
  return imgTag
}
