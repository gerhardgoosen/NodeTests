FROM node:argon

# Create app directory
RUN mkdir -p /opt/mean/TEST
WORKDIR /opt/mean/TEST

# Bundle app source
COPY . /opt/mean/TEST

#COPY package.json /opt/mean/TEST
# Install app dependencies
RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]
