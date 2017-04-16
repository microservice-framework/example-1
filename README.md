# example-1
CRUDs example instance of mFW.

- copy .env-example into .env
- install all dependencies
  ```
  # npm install
  ```
- Make sure that MongoDB is available on localhost or update .env properly.
- start service
  ```sh
  # npm run devel-start

  > example-1@1.0.0 devel-start /Volumes/DATA/gor/Sites/Repositories/GitHub/itpatrol/microservice/example-1
  > DEBUG=* node  --max-old-space-size=48 example-1.js

  cluster:main Starting up 2 workers. +0ms
  cluster:main Worker 90921 is online +72ms
  cluster:main Worker 90922 is online +4ms
  http:log Listen on :10002 +0ms
  http:log Listen on :10002 +0ms
  ```
- open new terminal and start tests
  ```sh
  # npm run test
  
  > example-1@1.0.0 test /Volumes/DATA/gor/Sites/Repositories/GitHub/itpatrol/microservice/example-1
  > mocha  --timeout 15000



  RECORD CRUD API
{ message: 'Task accepted',
  id: '58f3fea19609f5632be2f05f',
  token: '111df98f0bb9e7aaebb081774c9c1fbe7ee0e351e4f0027c' }
    ✓ POST should return 200 (106ms)
[ { _id: '58f3fea19609f5632be2f05f',
    user: 'example-user',
    body: 'Example record body',
    created: 1492385441092,
    changed: 1492385441092,
    token: '111df98f0bb9e7aaebb081774c9c1fbe7ee0e351e4f0027c' } ]
    ✓ SEARCH should return 200 (82ms)
{ _id: '58f3fea19609f5632be2f05f',
  user: 'example-user',
  body: 'Example record body',
  created: 1492385441092,
  changed: 1492385441092,
  token: '111df98f0bb9e7aaebb081774c9c1fbe7ee0e351e4f0027c' }
    ✓ GET should return 200
    ✓ DELETE should return 200 (41ms)
    ✓ GET after delete should return nothing


  5 passing (281ms)

  ```
  
  Example service works in debug mode, so you will see debug output in first terminal:
  ```js
  http:debug Data: {"user":"example-user","body":"Example record body"} +3ms
  microservice:debug Validate:requestDetails { url: '',
  microservice:debug   headers:
  microservice:debug    { accept: 'application/json',
  microservice:debug      'user-agent': 'MicroserviceClient.1.0.0',
  microservice:debug      signature: 'sha256=d2d017ba37d2b0194ff2e3d4534f3e5031b57905c016c6d21394eacbe8a0f1af',
  microservice:debug      host: 'localhost:10002',
  microservice:debug      'content-type': 'application/json',
  microservice:debug      'content-length': '52',
  microservice:debug      connection: 'close' },
  microservice:debug   _buffer: '{"user":"example-user","body":"Example record body"}',
  microservice:debug   method: 'POST' }  +2ms
  microservice:debug Validate:SignatureSystem +4ms
  http:debug Parsed data: { user: 'example-user', body: 'Example record body' } +1ms
  http:debug Handler responce:
  http:debug  { code: 200,
  http:debug   answer:
  http:debug    { message: 'Task accepted',
  http:debug      id: 58f3fea19609f5632be2f05f,
  http:debug      token: '111df98f0bb9e7aaebb081774c9c1fbe7ee0e351e4f0027c' } } +54ms
  http:log Request: SEARCH: / +42s
  http:debug Data: {"user":"example-user"} +3ms
  microservice:debug Validate:requestDetails { url: '',
  microservice:debug   headers:
  microservice:debug    { accept: 'application/json',
  microservice:debug      'user-agent': 'MicroserviceClient.1.0.0',
  microservice:debug      signature: 'sha256=2cf7c0c9e872c10e94a91a502eb3e591cce7bc761c71c47b1ca04fa7523249d3',
  microservice:debug      host: 'localhost:10002',
  microservice:debug      'content-type': 'application/json',
  microservice:debug      'content-length': '23',
  microservice:debug      connection: 'close' },
  microservice:debug   _buffer: '{"user":"example-user"}',
  microservice:debug   method: 'SEARCH' }  +2ms
  microservice:debug Validate:SignatureSystem +5ms
  http:debug Parsed data: { user: 'example-user' } +0ms
  http:debug Handler responce:
  http:debug  { code: 200,
  http:debug   answer:
  http:debug    [ { _id: 58f3fea19609f5632be2f05f,
  http:debug        user: 'example-user',
  http:debug        body: 'Example record body',
  http:debug        created: 1492385441092,
  http:debug        changed: 1492385441092,
  http:debug        token: '111df98f0bb9e7aaebb081774c9c1fbe7ee0e351e4f0027c' } ],
  http:debug   headers: { 'x-total-count': 1 } } +55ms
  http:log Request: GET: /58f3fea19609f5632be2f05f +109ms
  http:debug Data: null +1ms
  microservice:debug Validate:requestDetails { url: '58f3fea19609f5632be2f05f',
  microservice:debug   headers:
  microservice:debug    { accept: 'application/json',
  microservice:debug      'user-agent': 'MicroserviceClient.1.0.0',
  microservice:debug      token: '111df98f0bb9e7aaebb081774c9c1fbe7ee0e351e4f0027c',
  microservice:debug      host: 'localhost:10002',
  microservice:debug      'content-type': 'application/json',
  microservice:debug      'content-length': '4',
  microservice:debug      connection: 'close' },
  microservice:debug   _buffer: 'null',
  microservice:debug   method: 'GET' }  +0ms
  microservice:debug Validate:TokenSystem +1ms
  http:debug Parsed data: null +12ms
  http:debug Handler responce:
  http:debug  { code: 200,
  http:debug   answer:
  http:debug    { _id: 58f3fea19609f5632be2f05f,
  http:debug      user: 'example-user',
  http:debug      body: 'Example record body',
  http:debug      created: 1492385441092,
  http:debug      changed: 1492385441092,
  http:debug      token: '111df98f0bb9e7aaebb081774c9c1fbe7ee0e351e4f0027c' } } +4ms
  http:log Request: DELETE: /58f3fea19609f5632be2f05f +36ms
  http:debug Data: null +0ms
  microservice:debug Validate:requestDetails { url: '58f3fea19609f5632be2f05f',
  microservice:debug   headers:
  microservice:debug    { accept: 'application/json',
  microservice:debug      'user-agent': 'MicroserviceClient.1.0.0',
  microservice:debug      token: '111df98f0bb9e7aaebb081774c9c1fbe7ee0e351e4f0027c',
  microservice:debug      host: 'localhost:10002',
  microservice:debug      'content-type': 'application/json',
  microservice:debug      'content-length': '4',
  microservice:debug      connection: 'close' },
  microservice:debug   _buffer: 'null',
  microservice:debug   method: 'DELETE' }  +0ms
  microservice:debug Validate:TokenSystem +17ms
  http:debug Parsed data: null +12ms
  http:debug Handler responce:
  http:debug  { code: 200,
  http:debug   answer:
  http:debug    { _id: 58f3fea19609f5632be2f05f,
  http:debug      user: 'example-user',
  http:debug      body: 'Example record body',
  http:debug      created: 1492385441092,
  http:debug      changed: 1492385441092,
  http:debug      token: '111df98f0bb9e7aaebb081774c9c1fbe7ee0e351e4f0027c' } } +6ms
  http:log Request: GET: /58f3fea19609f5632be2f05f +48ms
  http:debug Data: null +0ms
  microservice:debug Validate:requestDetails { url: '58f3fea19609f5632be2f05f',
  microservice:debug   headers:
  microservice:debug    { accept: 'application/json',
  microservice:debug      'user-agent': 'MicroserviceClient.1.0.0',
  microservice:debug      token: '111df98f0bb9e7aaebb081774c9c1fbe7ee0e351e4f0027c',
  microservice:debug      host: 'localhost:10002',
  microservice:debug      'content-type': 'application/json',
  microservice:debug      'content-length': '4',
  microservice:debug      connection: 'close' },
  microservice:debug   _buffer: 'null',
  microservice:debug   method: 'GET' }  +1ms
  microservice:debug Validate:TokenSystem +0ms
  microservice:debug MongoClient:findOneAndUpdate object not found. +4ms
  http:debug Validation error: Not found +0ms
  ```
- now you can interrupt devel mode by ctrl+C and start as a standalone service:
  ```sh
  # npm run start
  > example-1@1.0.0 start /Volumes/DATA/gor/Sites/Repositories/GitHub/itpatrol/microservice/example-1
  > DEBUG=http:log,cluster:* node  --max-old-space-size=48 example-1.js >> `cat .env|grep LOGFILE|awk -F= {'print$2'}` 2>&1 &
  ```
- to stop service, just run:
  ```sh  
  # npm run stop

  > example-1@1.0.0 stop /Volumes/DATA/gor/Sites/Repositories/GitHub/itpatrol/microservice/example-1
  > cat `cat .env|grep PIDFILE|awk -F= {'print$2'}` |xargs kill -2  2>&1 &

  ```

- Check service logs in file `record.log`
  ```log
  Sun, 16 Apr 2017 23:34:48 GMT cluster:main Starting up 2 workers.
  Sun, 16 Apr 2017 23:34:48 GMT cluster:main Worker 90982 is online
  Sun, 16 Apr 2017 23:34:48 GMT cluster:main Worker 90983 is online
  Sun, 16 Apr 2017 23:34:49 GMT http:log Listen on :10002
  Sun, 16 Apr 2017 23:34:49 GMT http:log Listen on :10002
  Sun, 16 Apr 2017 23:34:51 GMT cluster:main Caught interrupt signal
  ```

We encorage you to use jscs, so package.json contain jscs comman that you can run next way:
```
# npm run jscs
```
