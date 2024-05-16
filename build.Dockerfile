FROM clangd-in-browser-clangd-configure

COPY build-docker.sh /builder/build-docker.sh
COPY wait_stdin.patch /builder/wait_stdin.patch

RUN (cd /builder; ./build-docker.sh)
