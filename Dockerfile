FROM node:14

COPY ./* ./

RUN npm install

EXPOSE 3001

CMD ["node", "server.js"]
