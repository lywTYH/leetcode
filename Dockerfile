FROM circleci/node:latest-browsers
# ENV NODE_ENV production
WORKDIR /usr/src/app/
USER root
COPY package.json ./
RUN yarn
COPY ./ ./
RUN yarn lint && yarn test
