import { CustomIcon } from "../scripts/utils";

type Icons = (string | CustomIcon)[];

interface IconList {
  namespace: string;
  icons: Icons;
}

export const iconsList: IconList[] = [
  {
    namespace: "languages",
    icons: [
      "java",
      "go",
      "python",
      "javascript"
    ],
  },
  {
    namespace: "tools",
    icons: [
      "spring",
      "spring-boot",
      {
        name: "Spark",
        img: "https://simpleicons.org/icons/apachespark.svg",
      },
      "vue",
      "react",
      "git",
      "visual-studio-code",
      "macos",
    ],
  },
  {
    namespace: "experience",
    icons: [
      {
        name: "XiaoMi",
        img: "https://cdn.cnbj1.fds.api.mi-img.com/info-app-webfile/%20hr-official-website-web/pc-nav/logo.svg",
        url: "https://www.mi.com/en",
      },
      {
        name: "ByteDance",
        img: "https://simpleicons.org/icons/bytedance.svg",
        url: "https://www.bytedance.com/en/",
      },
      {
        name: "Wuhan University",
        img: "https://www.whu.edu.cn/__local/5/2F/C2/57EDDD9FB0DF712F3AB627163C2_1EF15655_13FCA.png",
        url: "https://en.whu.edu.cn/",
      },
    ],
  },
];
