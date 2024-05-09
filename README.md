# acumen-dialogue-generator

生成一个网页，页面分左右两个区域
左侧区域宽度为208px，最上方展示文字Acumen，在Acumen下方展示一个按钮，按钮里展示“新建对话”，按钮下方一条横线，横线下展示高10px，长52px的文字及时间，文字及时间换行展示（可以写：标题1 2024-04-15 19:19:04，展示4条这样的数据，每个标题之间用线分开，样式与上面的线的样式不同）
右侧区域背景上部分是一组左右对话的内容，分别展示头像占位图和对话，示例：左边头像：比亚迪有几个型号，右边头像：比亚迪有3个型号，右侧区域的底部有一个语音麦克按钮和一个输入框，要注意输入框和麦克风按钮仅在右部区域，不要出现在左部区域，输入框内部最右侧有一个发送按钮

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/acumen-dialogue-generator.git
cd acumen-dialogue-generator
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
