docker stop $(docker ps --filter ancestor=reactcv -a -q) #stop reactcv container
docker rm $(docker ps --filter ancestor=reactcv -a -q) #remove reactcv container
docker rmi $(docker images |grep 'reactcv') #remove reactcv image
docker ps -a | grep Exit | cut -d ' ' -f 1 | xargs sudo docker rm #remove all the exit container
docker rmi -f $(docker images -f "dangling=true" -q) #remove all dangling image

docker build . -t reactcv
docker images
docker run -d -p 80:80 reactcv

## Deploye into git Hub homepage
#npm install gh-pages
#npm run deploy