# Dockerfile
# Pulling image
FROM node:14
# Set up work dir
WORKDIR /app
# Copy application data
COPY . /app

RUN npm config set @pm2:registry https://registry.npmjs.org/
RUN rm -rf node_modules
RUN rm -rf package.lock.json

# Install global depencies, project depencies and pm2 globally,
RUN node --max_old_space_size=1024 $(which npm) install
RUN node --max_old_space_size=1024 $(which npm) install pm2 -g

# Building client app
RUN node --max_old_space_size=1024 $(which npm) run build

# Exposing application ports
EXPOSE 4426

# Executing
CMD ["pm2-runtime", "./tool/view.js"]
