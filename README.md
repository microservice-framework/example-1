# example-1

CRUDs example instance of mFW.

- Install mfw-cli
  ```sh
  # npm install @microservice-framework/mfw-cli -g
  ```
- Init application folder
  ```sj
  # mkdir test && cd test && mfw setup

  name:  Example-1
  version:  (1.0.0)
  Mongo URL:  (mongodb://localhost:27017/mfw)
  Mongo Options (example: ?replicaSet=rs1&slaveOk=true):
  	[ok]	/Volumes/DATA/gor/Sites/Repositories/GitHub/itpatrol/microservice/mfw-cli/2/services created.
  	[ok]	/Volumes/DATA/gor/Sites/Repositories/GitHub/itpatrol/microservice/mfw-cli/2/pids created.
  	[ok]	/Volumes/DATA/gor/Sites/Repositories/GitHub/itpatrol/microservice/mfw-cli/2/logs created.
  	[ok]	/Volumes/DATA/gor/Sites/Repositories/GitHub/itpatrol/microservice/mfw-cli/2/configs created.
  	[ok]	.gitignore copied
  	[war]	/Volumes/DATA/gor/Sites/Repositories/GitHub/itpatrol/microservice/mfw-cli/2 already exists.
  ```
  Application folder is a bundle for all your services.
  
- Install example-1
  ```sh
  # mfw install github:microservice-framework/example-1 --save
  	-	downloading example-1
  	-	copiyng example-1 to /Volumes/DATA/gor/Sites/Repositories/GitHub/itpatrol/microservice/mfw-cli/2/services/example-1
  	-	installing dependencies for example-1
  Mongo URL:  (mongodb://localhost:27017/mfw)
  Mongo Table:  (record)
  Mongo prefix(db):  (example)
  Mongo Options (example: ?replicaSet=rs1&slaveOk=true):
  IP or hostname of the server:  (127.0.0.1)
  Port:  (15001)
  Number of workers:  (2)
  Do not change:  (record.json)
  SECURE_KEY:  (1597b760b89bbf2a6c70cebad6426cd868458e0669d01d44)
  PID file path:  (../../pids/example-1.pid)
  Log file path:  (../../logs/example-1.log)
  	[ok]	github:microservice-framework/example-1 installed.
  ```
- start service in debug mode
  ```sh
  # mfw start -d example-1
	-	starting example-1:start in devel mode
  cluster:main Starting up 2 workers. +0ms
  cluster:main Worker 9955 is online +68ms
  cluster:main Worker 9956 is online +4ms
  http:log Listen on :15001 +0ms
  http:log Listen on :15001 +0ms
  ```
- open new terminal and run tests:
  ```sh
  # cd test/services/example-1
  # npm run test

  > example-1@1.0.1 test /Volumes/DATA/gor/Sites/Repositories/GitHub/itpatrol/microservice/mfw-cli/2/services/example-1
  > mocha  --timeout 15000



  RECORD CRUD API
    ✓ POST should return 200 (102ms)
    ✓ SEARCH should return 200 (80ms)
    ✓ GET should return 200
    ✓ DELETE should return 200
    ✓ GET after delete should return nothing


  5 passing (248ms)

  ```
  Example service works in debug mode, so you will see debug output in first terminal:
  ```js
  http:log Request: POST: / +1m
  http:debug Data: {"user":"example-user","body":"Example record body"} +5ms
  microservice:validate Validate:requestDetails { url: '',
  microservice:validate   headers:
  microservice:validate    { accept: 'application/json',
  microservice:validate      'user-agent': 'MicroserviceClient.1.0.1',
  microservice:validate      signature: 'sha256=8cd4b6b01bb4a238720bafeed09efa5f9bf043dd8b061d240a833a11f5e1ca9a',
  microservice:validate      host: '127.0.0.1:15001',
  microservice:validate      'content-type': 'application/json',
  microservice:validate      'content-length': '52',
  microservice:validate      connection: 'close' },
  microservice:validate   _buffer: '{"user":"example-user","body":"Example record body"}',
  microservice:validate   method: 'POST' }  +3ms
  microservice:validate Validate:SignatureSystem +4ms
  http:debug Parsed data: { user: 'example-user', body: 'Example record body' } +1ms
  http:debug Handler responce:
  http:debug  { code: 200,
  http:debug   answer:
  http:debug    { user: 'example-user',
  http:debug      body: 'Example record body',
  http:debug      created: 1494780200312,
  http:debug      changed: 1494780200312,
  http:debug      token: 'e837d5b5e14c767057c4bbfb56aaa7cde46313f577d8b7b9',
  http:debug      id: 591889281bbf3626e3777d5d } } +52ms
  http:log Request: SEARCH: / +1m
  http:debug Data: {"user":"example-user"} +4ms
  microservice:validate Validate:requestDetails { url: '',
  microservice:validate   headers:
  microservice:validate    { accept: 'application/json',
  microservice:validate      'user-agent': 'MicroserviceClient.1.0.1',
  microservice:validate      signature: 'sha256=ca30653f44e4feda5bb1625619ae9a53adf010851310f078bdcb72aa462fcdbb',
  microservice:validate      host: '127.0.0.1:15001',
  microservice:validate      'content-type': 'application/json',
  microservice:validate      'content-length': '23',
  microservice:validate      connection: 'close' },
  microservice:validate   _buffer: '{"user":"example-user"}',
  microservice:validate   method: 'SEARCH' }  +3ms
  microservice:validate Validate:SignatureSystem +4ms
  http:debug Parsed data: { user: 'example-user' } +0ms
  http:debug Handler responce:
  http:debug  { code: 200,
  http:debug   answer:
  http:debug    [ { user: 'example-user',
  http:debug        body: 'Example record body',
  http:debug        created: 1494780200312,
  http:debug        changed: 1494780200312,
  http:debug        token: 'e837d5b5e14c767057c4bbfb56aaa7cde46313f577d8b7b9',
  http:debug        id: 591889281bbf3626e3777d5d } ],
  http:debug   headers: { 'x-total-count': 1 } } +54ms
  http:log Request: GET: /591889281bbf3626e3777d5d +104ms
  microservice:validate Validate:requestDetails { url: '591889281bbf3626e3777d5d',
  microservice:validate   headers:
  microservice:validate    { accept: 'application/json',
  microservice:validate      'user-agent': 'MicroserviceClient.1.0.1',
  microservice:validate      token: 'e837d5b5e14c767057c4bbfb56aaa7cde46313f577d8b7b9',
  microservice:validate      host: '127.0.0.1:15001',
  microservice:validate      connection: 'close' },
  microservice:validate   _buffer: '',
  microservice:validate   method: 'GET' }  +1ms
  microservice:validate Validate:TokenSystem +0ms
  http:debug Parsed data: {} +12ms
  http:debug Handler responce:
  http:debug  { code: 200,
  http:debug   answer:
  http:debug    { user: 'example-user',
  http:debug      body: 'Example record body',
  http:debug      created: 1494780200312,
  http:debug      changed: 1494780200312,
  http:debug      token: 'e837d5b5e14c767057c4bbfb56aaa7cde46313f577d8b7b9',
  http:debug      id: 591889281bbf3626e3777d5d } } +5ms
  http:log Request: DELETE: /591889281bbf3626e3777d5d +33ms
  microservice:validate Validate:requestDetails { url: '591889281bbf3626e3777d5d',
  microservice:validate   headers:
  microservice:validate    { accept: 'application/json',
  microservice:validate      'user-agent': 'MicroserviceClient.1.0.1',
  microservice:validate      token: 'e837d5b5e14c767057c4bbfb56aaa7cde46313f577d8b7b9',
  microservice:validate      host: '127.0.0.1:15001',
  microservice:validate      'content-length': '0',
  microservice:validate      connection: 'close' },
  microservice:validate   _buffer: '',
  microservice:validate   method: 'DELETE' }  +1ms
  microservice:validate Validate:TokenSystem +0ms
  http:debug Parsed data: {} +9ms
  http:debug Handler responce:
  http:debug  { code: 200,
  http:debug   answer:
  http:debug    { user: 'example-user',
  http:debug      body: 'Example record body',
  http:debug      created: 1494780200312,
  http:debug      changed: 1494780200312,
  http:debug      token: 'e837d5b5e14c767057c4bbfb56aaa7cde46313f577d8b7b9',
  http:debug      id: 591889281bbf3626e3777d5d } } +5ms
  http:log Request: GET: /591889281bbf3626e3777d5d +24ms
  microservice:validate Validate:requestDetails { url: '591889281bbf3626e3777d5d',
  microservice:validate   headers:
  microservice:validate    { accept: 'application/json',
  microservice:validate      'user-agent': 'MicroserviceClient.1.0.1',
  microservice:validate      token: 'e837d5b5e14c767057c4bbfb56aaa7cde46313f577d8b7b9',
  microservice:validate      host: '127.0.0.1:15001',
  microservice:validate      connection: 'close' },
  microservice:validate   _buffer: '',
  microservice:validate   method: 'GET' }  +0ms
  microservice:validate Validate:TokenSystem +0ms
  microservice:validate MongoClient:findOneAndUpdate object not found. +3ms
  http:debug Validation error: Not found +0ms
  ```

- now you can interrupt devel mode by ctrl+C and start as a standalone service:
  ```sh
  # mfw start example-1
	-	starting example-1:start
	[ok]	example-1:start started
  ```
- check status
  ```sh
  # mfw status
	-	checking example-1:status
  
    SERVICE    VERSION   PID   CPU    MEM    Comment
   -------------------------------------------------------
    example-1  1.0.1     9326  0.60   37
   -------------------------------------------------------
    1 / 0                      0.6 %  37 Mb

  ```

- to stop service, just run:
  ```sh  
  # mfw stop example-1
	-	stopping example-1:stop

  ```

- Check service logs in file `logs/example-1.log`
  ```log
  Sun, 14 May 2017 16:45:24 GMT cluster:main Starting up 2 workers.
  Sun, 14 May 2017 16:45:24 GMT cluster:main Worker 9978 is online
  Sun, 14 May 2017 16:45:24 GMT cluster:main Worker 9977 is online
  Sun, 14 May 2017 16:45:24 GMT http:log Listen on :15001
  Sun, 14 May 2017 16:45:24 GMT http:log Listen on :15001
  ```

In file `services/example-1/schema/record.json` you can define fields for your record. Each POST request will be validated to match data to this record specification.
