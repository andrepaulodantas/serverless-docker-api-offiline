FROM node:16

WORKDIR /serverless

COPY . .

RUN npm install 
RUN npm install -g serverless && npm install serverless-offline

EXPOSE 3500

#ENTRYPOINT serverless offline 

CMD ["serverless", "offline", "node", "app.js"]

#ENTRYPOINT ["npm", "start"]