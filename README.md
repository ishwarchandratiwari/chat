# chat-example

very simple chat example

### run
```
1 .
docker images

output:
WareWolf:msgchat ishwar$ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
ishwar786/chat      latest              3750e64a7c6a        9 minutes ago       83.3MB
node                8.2.1-alpine        442930c9c9fb        2 years ago         64.6MB

2.
docker run -p 3000:3000 -d ishwar786/chat

```

### publish
```
docker login
docker build -t ishwar786/chat .
docker run -p 3000:3000 -d ishwar786/chat
docker push ishwar786/chat
```



### stop
```
docker stop $(docker ps -a -q)
```




```
npm install 
nodemon
```