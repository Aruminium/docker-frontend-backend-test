FROM node:16.14.2-alpine3.15

WORKDIR /usr/src/next

COPY ./ ./
RUN apk update && apk add bash
RUN npm install

CMD ["npm", "run", "dev"]