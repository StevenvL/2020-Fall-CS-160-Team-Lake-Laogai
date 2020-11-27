FROM node:15.3.0-alpine3.10
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]