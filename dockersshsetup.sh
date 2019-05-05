## Install Certificate -- Start
# RUN apk add netcat-openbsd bc curl wget git bash
# RUN apk add libressl
# RUN apk add sudo
# RUN git clone https://github.com/Neilpang/acme.sh.git
# RUN cd ./acme.sh && \
#     RUN sudo ./acme.sh --install && \
#     RUN sudo ./acme.sh --issue -d rasmivan.com -w /usr/share/nginx/html/rasmivan.com && \
#     RUN sudo ./acme.sh --installcert -d rasmivan.com \
#     --keypath  /usr/share/nginx/html/rasmivan.com.key \
#     --capath  /usr/share/nginx/html/rasmivan.com.ca \
#     --fullchainpath  /usr/share/nginx/html/rasmivan.com.crt \
#     --reloadcmd  "sudo service nginx reload"
## Install Certificate -- End

