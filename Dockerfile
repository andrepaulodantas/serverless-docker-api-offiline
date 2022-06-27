FROM node:16

WORKDIR /serverless

COPY . .

RUN npm install 
RUN npm install -g serverless && npm install serverless-offline

EXPOSE 3000

ENTRYPOINT serverless offline 

#CMD ["serverless", "offline", "--host", "0.0.0.0", "--port", "5000"]

#ENTRYPOINT ["npm", "start"]