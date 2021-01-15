# # stage 1
# FROM node:12.20.1 as node
# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm run build --prod

# # stage 2
# FROM nginx:alpine
# COPY --from=node /app/dist/bio /usr/share/nginx/html

### STAGE 1: Build ###
FROM node:12-alpine as builder
COPY package.json .
COPY package-lock.json .	
RUN apk add git
RUN npm i && mkdir /app && cp -R ./node_modules ./app
WORKDIR /app
COPY . .
ARG BUILD_ENV=prod
RUN npm run build -- -c $BUILD_ENV

 
### STAGE 2: Setup ###
FROM nginx:1.13.5-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/bio /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT [""]	
