FROM node:18-alpine

WORKDIR /projets/demo1/leon/myhello_actions
COPY ./ /projets/demo1/leon/myhello_actions

RUN ls -a

RUN npm install

RUN npm run build

EXPOSE 3005

CMD ["npm", "run", "start"]