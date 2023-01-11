FROM node:18-alpine
WORKDIR /app
COPY ./ /app
RUN ls -a
RUN npm install
RUN npm run build
EXPOSE 3005
CMD ["npm", "run", "start"]