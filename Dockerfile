FROM node:latest
EXPOSE 5000
WORKDIR /app
RUN npm install -g yarn
RUN yarn global add serve
COPY package.json .
RUN yarn
COPY . .
RUN yarn build
CMD ["serve", "-s", "build"]
