FROM node:16.14.2-alpine as builder
WORKDIR /app
COPY ./package*.json /app/
RUN npm install --force
COPY ./ /app/
RUN npm run build

# nginix
FROM nginx:1.11-alpine
COPY --from=builder /app/build/ /usr/share/nginx/html
COPY --from=builder /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

