pipeline {
  agent any
  stages {

    stage('removing existing docker container') {
      steps {
        sh "docker-compose -f docker-compose.yml down"
      }
    }

    stage('build reactapp docker container') {
      steps {
        sh "docker-compose -f docker-compose.yml up --build -d"
      }
    }

  }
}