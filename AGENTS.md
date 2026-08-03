# AGENTS.md

个人工具速查书：记录各种工具（lazygit、lazyvim……）的特点和快捷键，忘了就来翻。
Astro Starlight + Pagefind（中文可搜），部署在 <https://tools-docs.bytcloud.org>。

## 结构

- `src/content/docs/<工具名>.md` —— 一个工具一个文件（小写文件名），这是唯一需要动的内容
- 侧边栏和搜索索引由文件自动生成，**不存在需要手动维护的目录/索引文件**
- `.pi/skills/tool-chapter/SKILL.md` —— 新增/更新章节的完整流程和风格规范
- `.github/workflows/deploy.yml` —— push 到 main 即自动构建部署

## 命令

```sh
npm install      # 首次
npm run build    # 提交前必须通过
npm run dev      # 本地预览
```

## 写章节的规矩

1. 快捷键、命令必须先联网核对官方文档，不写没核实的键位
2. 风格是自由的"快速查找书"，无固定模板：开头一两段说清工具是什么、特点在哪，
   然后按需用两列表格（键 → 作用）列快捷键；样板见 `src/content/docs/lazygit.md`
3. frontmatter 必须有 `title`，建议加 `description`
4. 动作用中文描述（"撤销"、"变基"），否则中文搜不到
5. 篇幅"常用够查"即可，穷举交给结尾的官方文档链接

## 工作流

改完 → `npm run build` 通过 → `git commit`（简短中文说明）→ `git push`，部署全自动。
