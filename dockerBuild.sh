docker stop $(docker ps --filter ancestor=reactcv -a -q)
docker rm $(docker ps --filter ancestor=reactcv -a -q)
docker build . -t reactcv
docker images
docker run -d -p 80:80 reactcv