docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker build . -t reactcv
docker images
docker run -d -p 80:80 reactcv