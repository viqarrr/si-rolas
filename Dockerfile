# --- Stage 1: Build frontend ---
FROM node:20-alpine AS build-frontend
WORKDIR /app
COPY package*.json vite.config.* tsconfig.* ./
COPY resources ./resources
RUN npm install && npm run build

# --- Stage 2: Build PHP app ---
FROM dunglas/frankenphp:1.1-php8.3
WORKDIR /app

# Install dependencies
RUN apt-get update && apt-get install -y \
    git unzip libpq-dev && \
    docker-php-ext-install pdo pdo_pgsql && \
    rm -rf /var/lib/apt/lists/*

# Copy backend
COPY . .

# Copy built assets from frontend
COPY --from=build-frontend /app/public/build ./public/build

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Set permissions
RUN chown -R www-data:www-data storage bootstrap/cache

# Expose port 80
EXPOSE 80

# Run FrankenPHP
CMD ["php", "artisan", "frankenphp:start", "--port=80"]
