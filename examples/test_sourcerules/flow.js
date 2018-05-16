[{"id":"4bcbacef.cbeb64","type":"nrl-source out","z":"913d507e.24399","config":"968a800f.e3207","uid":"0f8fffd8-476a-414c-d7a8-48a9902a2893","name":"Simple","def":"","expire":false,"timeout":100,"timeoutUnits":"seconds","expval":"false","output":false,"hysteresis":0,"toggle":false,"outputs":0,"x":450,"y":80,"wires":[]},{"id":"8c0233f1.b54ff","type":"nrl-source out","z":"913d507e.24399","config":"968a800f.e3207","uid":"8d804abb-3293-437b-1108-e7d1564b2b3e","name":"Init value (10)","def":"10","expire":false,"timeout":100,"timeoutUnits":"seconds","expval":"false","output":false,"hysteresis":0,"toggle":false,"outputs":0,"x":470,"y":140,"wires":[]},{"id":"ba31f69f.5fb6e8","type":"nrl-source out","z":"913d507e.24399","config":"968a800f.e3207","uid":"69062d4f-b9c8-4914-ffb7-b8771aabb10a","name":"Expire in 10s","def":"","expire":true,"timeout":"10","timeoutUnits":"seconds","expval":"0","output":false,"hysteresis":0,"toggle":false,"outputs":0,"x":470,"y":200,"wires":[]},{"id":"8b41fced.99697","type":"nrl-source out","z":"913d507e.24399","config":"968a800f.e3207","uid":"d7f39d65-af90-4f4a-cd1e-cd3270124474","name":"Toggle","def":"0","expire":false,"timeout":"10","timeoutUnits":"seconds","expval":"false","output":false,"hysteresis":0,"toggle":true,"outputs":0,"x":450,"y":260,"wires":[]},{"id":"c3cdbbb0.71ca08","type":"nrl-source out","z":"913d507e.24399","config":"968a800f.e3207","uid":"7912a7f3-fa3d-44f3-5268-290288916597","name":"Toggle + Output","def":"0","expire":false,"timeout":"10","timeoutUnits":"seconds","expval":"false","output":true,"hysteresis":0,"toggle":true,"outputs":1,"x":480,"y":320,"wires":[["d8aa4fed.ef6be"]]},{"id":"65b7034d.088aec","type":"nrl-source out","z":"913d507e.24399","config":"968a800f.e3207","uid":"39587ab4-b470-4aec-2704-f48639c37e5f","name":"Toggle + Output + Expire 10s","def":"0","expire":true,"timeout":"10","timeoutUnits":"seconds","expval":"0","output":true,"hysteresis":0,"toggle":true,"outputs":1,"x":520,"y":380,"wires":[["ca09297b.da72f8"]]},{"id":"3fb98c48.24fc64","type":"inject","z":"913d507e.24399","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":200,"y":80,"wires":[["4bcbacef.cbeb64"]]},{"id":"74a203fb.a876fc","type":"inject","z":"913d507e.24399","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":200,"y":140,"wires":[["8c0233f1.b54ff"]]},{"id":"f4da11f.909fdf","type":"inject","z":"913d507e.24399","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":200,"y":200,"wires":[["ba31f69f.5fb6e8"]]},{"id":"299df2c4.30f9fe","type":"inject","z":"913d507e.24399","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":200,"y":260,"wires":[["8b41fced.99697"]]},{"id":"31a24552.bf872a","type":"inject","z":"913d507e.24399","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":200,"y":320,"wires":[["c3cdbbb0.71ca08"]]},{"id":"d8aa4fed.ef6be","type":"debug","z":"913d507e.24399","name":"","active":true,"tosidebar":true,"console":false,"tostatus":true,"complete":"payload","x":700,"y":320,"wires":[]},{"id":"ca09297b.da72f8","type":"debug","z":"913d507e.24399","name":"","active":true,"tosidebar":true,"console":false,"tostatus":true,"complete":"payload","x":770,"y":380,"wires":[]},{"id":"bf6db76a.23e748","type":"inject","z":"913d507e.24399","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":200,"y":380,"wires":[["65b7034d.088aec"]]},{"id":"bd50b472.a16b08","type":"nrl-eval in","z":"913d507e.24399","config":"968a800f.e3207","name":"Toggle","rules":[{"s":"d7f39d65-af90-4f4a-cd1e-cd3270124474","t":"eq","v":"1"}],"checkall":"true","inputson":false,"outputdelay":false,"disablerepeat":false,"inputs":0,"x":170,"y":500,"wires":[["eb96e818.a1b2f8","ec47de01.abfc9"]]},{"id":"eb96e818.a1b2f8","type":"nrl-source out","z":"913d507e.24399","config":"968a800f.e3207","uid":"bd2e230d-904d-40a1-5eb5-38e4f42a2ae0","name":"Message","def":"","expire":false,"timeout":100,"timeoutUnits":"seconds","expval":"false","output":false,"hysteresis":0,"toggle":false,"outputs":0,"x":460,"y":500,"wires":[]},{"id":"860c26e1.733f78","type":"nrl-eval in","z":"913d507e.24399","config":"968a800f.e3207","name":"Toggle and Expire + no delay + no repeat","rules":[{"s":"d7f39d65-af90-4f4a-cd1e-cd3270124474","t":"eq","v":"1"},{"s":"69062d4f-b9c8-4914-ffb7-b8771aabb10a","t":"gt","v":"0"}],"checkall":"true","inputson":false,"outputdelay":true,"disablerepeat":true,"inputs":0,"x":280,"y":620,"wires":[["8f793061.f0bf3"]]},{"id":"8f793061.f0bf3","type":"debug","z":"913d507e.24399","name":"","active":true,"tosidebar":true,"console":false,"tostatus":true,"complete":"payload.enabled","x":600,"y":620,"wires":[]},{"id":"694942.0ede06c","type":"comment","z":"913d507e.24399","name":"Store values","info":"","x":200,"y":40,"wires":[]},{"id":"3a8b30ea.6c1a2","type":"comment","z":"913d507e.24399","name":"Testing eval node","info":"","x":200,"y":460,"wires":[]},{"id":"a14433e3.0a9fa","type":"comment","z":"913d507e.24399","name":"Store message","info":"Uses msg.payload.enabled","x":480,"y":460,"wires":[]},{"id":"1bd43bcc.157b94","type":"comment","z":"913d507e.24399","name":"Testing gateway node","info":"","x":220,"y":740,"wires":[]},{"id":"2b52424f.cf41be","type":"nrl-gate in","z":"913d507e.24399","config":"968a800f.e3207","name":"Toggle","rules":[{"s":"d7f39d65-af90-4f4a-cd1e-cd3270124474","t":"eq","v":"1"}],"checkall":"true","x":370,"y":800,"wires":[["f37b6ce8.f2322"],["d72d3cdf.9bea4"]]},{"id":"9781ad86.1dea4","type":"inject","z":"913d507e.24399","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":180,"y":800,"wires":[["2b52424f.cf41be"]]},{"id":"f37b6ce8.f2322","type":"debug","z":"913d507e.24399","name":"Gateway is open","active":true,"tosidebar":true,"console":false,"tostatus":true,"complete":"payload","x":610,"y":780,"wires":[]},{"id":"d72d3cdf.9bea4","type":"debug","z":"913d507e.24399","name":"Gateway is closed","active":true,"tosidebar":true,"console":false,"tostatus":true,"complete":"payload","x":610,"y":840,"wires":[]},{"id":"ec47de01.abfc9","type":"function","z":"913d507e.24399","name":"Receives repeat every 1min","func":"var count = flow.get('count')||0;\ncount++;\nflow.set('count', count);\nnode.status({text:count});","outputs":1,"noerr":0,"x":530,"y":560,"wires":[[]]},{"id":"968a800f.e3207","type":"nrl-config","z":"","delay":"1","name":""}]