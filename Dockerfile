FROM mhart/alpine-node

WORKDIR /src
ADD . .

RUN apk add --update make gcc g++ python

RUN npm install
RUN npm run build

# If you had native dependencies you can now remove build tools
RUN apk del make gcc g++ python && \
rm -rf /tmp/* /var/cache/apk/* /root/.npm /root/.node-gyp

EXPOSE 3000
CMD ["node", "server.js"]
