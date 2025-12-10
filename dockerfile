FROM node:22.15.0-alpine as builder

WORKDIR /app

COPY ./package.json ./package.json
RUN npm install

COPY . .
RUN npm run build

# Final stage
FROM nginx:1.27-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]