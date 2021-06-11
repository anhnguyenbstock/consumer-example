pipeline {
  agent any

  tools {nodejs "node"}

  stages {
    stage('Clone and install') {
        steps {
            git 'https://github.com/anhnguyenbstock/consumer-example'
            script {
              if(isUnix()){
                  sh 'npm install'
                }
              else {
                  bat 'npm install'
                }
            }
        }
    }

    stage('Create contract') {
        steps {
            script {
             if(isUnix()){
                  sh 'npm run test'
              }
              else {
                  bat 'npm run test'
              }
            }
        }
    }

    stage('Publish contract') {
        steps {
            script {
              if(isUnix()){
                  sh 'npm run posttest:pact'
              }
              else {
                  bat 'npm run posttest:pact'
              }
            }
        }
    }
  }
}