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
        url: "https://simpleicons.org/icons/apachespark.svg",
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
        url: "https://simpleicons.org/icons/xiaomi.svg",
      },
      {
        name: "ByteDance",
        url: "https://simpleicons.org/icons/bytedance.svg",
      },
    ],
  },
];
