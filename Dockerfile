FROM gatsbyjs/gatsby:latest

VOLUME ["./", "/project"]

WORKDIR "/project"
RUN gatsby develop
