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
        img: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzA5NTQyMTE5NDM2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ1MzQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTcxNi44IDBjMTY5LjY2NCAwIDMwNy4yIDEzNy41MzYgMzA3LjIgMzA3LjJ2NDA5LjZjMCAxNjkuNjY0LTEzNy41MzYgMzA3LjItMzA3LjIgMzA3LjJIMzA3LjJDMTM3LjUzNiAxMDI0IDAgODg2LjQ2NCAwIDcxNi44VjMwNy4yQzAgMTM3LjUzNiAxMzcuNTM2IDAgMzA3LjIgMGg0MDkuNnpNNTI5LjYxMjggMzIwLjUyNDhIMjI4LjYwOGE0LjIzNjggNC4yMzY4IDAgMCAwLTQuMTk4NCA0LjI3NTJ2MzcyLjYwOGE0LjIyNCA0LjIyNCAwIDAgMCA0LjE5ODQgNC4yNDk2aDgwLjQwOTZjMi4zMTY4IDAgNC4xOTg0LTEuOTIgNC4xOTg0LTQuMjg4VjQwNC45MjhjMC0yLjM2OCAxLjg4MTYtNC4zMDA4IDQuMTk4NC00LjMwMDhoMTcyLjkwMjRjMzIuNDczNiAwIDU4LjgwMzIgMjcuMDA4IDU4LjgwMzIgNjAuMzAwOHYyMzYuNDQxNmMwIDIuMzY4IDEuODgxNiA0LjI4OCA0LjE4NTYgNC4yODhoNzkuMjMyYTQuMjI0IDQuMjI0IDAgMCAwIDQuMTcyOC00LjI3NTJWNDMwLjM4NzJjMC02MC42NzItNDcuOTM2LTEwOS44NjI0LTEwNy4wODQ4LTEwOS44NjI0ek00NzAuMTQ0IDQ2OC45OTJoLTgwLjM4NGE0LjI0OTYgNC4yNDk2IDAgMCAwLTQuMTk4NCA0LjMwMDh2MjI0LjA4OTZjMCAyLjM4MDggMS44Njg4IDQuMjg4IDQuMTk4NCA0LjI4OGg4MC4zODRjMS4xMTM2IDAgMi4xNzYtMC40NDggMi45NTY4LTEuMjQxNmE0LjMzOTIgNC4zMzkyIDAgMCAwIDEuMjI4OC0zLjA0NjRWNDczLjI4YTQuMzUyIDQuMzUyIDAgMCAwLTEuMjI4OC0zLjA0NjQgNC4xMzQ0IDQuMTM0NCAwIDAgMC0yLjk1NjgtMS4yNTQ0eiBtMzIxLjQzMzYtMTQ4LjQ0MTZoLTgwLjM1ODRjLTIuMzI5NiAwLTQuMjI0IDEuOTItNC4yMjQgNC4zMDA4djM3Mi41MzEyYzAgMi4zODA4IDEuODk0NCA0LjI4OCA0LjIyNCA0LjI4OGg4MC4zNTg0YzIuMzI5NiAwIDQuMjExMi0xLjkyIDQuMjExMi00LjI4OFYzMjQuODM4NGE0LjM1MiA0LjM1MiAwIDAgMC0xLjIyODgtMy4wNDY0IDQuMTQ3MiA0LjE0NzIgMCAwIDAtMi45ODI0LTEuMjU0NHoiIGZpbGw9IiNGRjZBMDAiIHAtaWQ9IjQ1MzUiPjwvcGF0aD48L3N2Zz4=",
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
