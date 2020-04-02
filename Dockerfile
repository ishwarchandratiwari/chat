FROM node:10.15.0
WORKDIR /Users/ishwar/Desktop/apple/msgchat
COPY package.json ./
RUN npm install
COPY . .
# EXPOSE 3007
CMD ["node","index.js"]