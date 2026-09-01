FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ARG GEMINI_API_KEY=
ENV GEMINI_API_KEY=$GEMINI_API_KEY

RUN npm run build

# --- Étape 2 : servir les fichiers statiques ---
FROM nginx:1.27-alpine AS portfolio
COPY --from=build /app/dist /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80