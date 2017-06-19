FROM python:3.5

# Set the file maintainer (your name - the file's author)
MAINTAINER Yelken Gonzales e Ylgner
ENV PYTHONUNBUFFERED 1
RUN mkdir /config
ADD requirements.txt /config/
COPY requirements /config/
RUN pip install -r /config/prod.txt

# Set env variables used in this Dockerfile (add a unique prefix, such as DOCKYARD)
# Local directory with project source
ENV DOCKYARD_SRC=.
# Directory in container for all project files
ENV DOCKYARD_SRVHOME=/srv
# Directory in container for project source files
ENV DOCKYARD_SRVPROJ=/srv/prototipo

# Create application subdirectories
WORKDIR $DOCKYARD_SRVHOME
RUN mkdir media static logs
VOLUME ["$DOCKYARD_SRVHOME/media/", "$DOCKYARD_SRVHOME/logs/"]

# Copy application source code to SRCDIR
COPY $DOCKYARD_SRC $DOCKYARD_SRVPROJ

# Port to expose
EXPOSE 8000
