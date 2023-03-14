# chatGPT API example project

이 결과물은 Node.js 기반 chatGPT api 라이브러리인 [chatgpt-api](https://github.com/transitive-bullshit/chatgpt-api)를 이용하여 만들었습니다. 도움이 되시기를 바랍니다! 🥺🥺

## example

## execute

아래의 사항에 따라 실행해 주시면 됩니다.

### `npm run i-all`

위의 프로젝트는 node.js - React로 이뤄져 있기 때문에 client와 server 외부 등 필요한 라이브러리가 존재합니다. 별도의 명령어를 세팅해 놓았으므로, 위의 명령어를 통해 필요한 라이브러리를 먼저 설치합니다.

### `npm run start`

프로젝트를 실행하여 chatGPT 예제를 실행해 볼 수 있습니다.

### `npx kill-port 8080 3000`

충돌이 날 경우에는 위의 명령어를 실행하여 해당 포트의 프로세스를 종료하고 다시 실행해보세요.

## environment setting

/server 디렉토리 안에 .env 파일을 생성하고 아래와 같이 chatGPT 개인API키를 넣어주세요.

```
OPENAI_API_KEY=[your-chatgpt-api-key]
```
