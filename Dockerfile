# stage 1
FROM node:12.20.1 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# stage 2
FROM nginx:alpine
COPY --from=node /app/dist/bio /usr/share/nginx/html
