docker stop $(docker ps --filter ancestor=reactcv -a -q)
docker rm $(docker ps --filter ancestor=reactcv -a -q)
docker rmi $(docker images -f "dangling=true" -q)
docker rmi $(docker images |grep 'reactcv')
docker build . -t reactcv
docker images
docker run -d -p 80:80 reactcv