pipeline {
  agent {
    node {
      label 'nodejs'
    }

  }
  stages {
    stage('Initial Message ') {
      parallel {
        stage('Initial Message ') {
          steps {
            echo 'This just an initial message...'
          }
        }

        stage('Hello') {
          steps {
            echo 'Welcome.......'
          }
        }

      }
    }

    stage('Shell Script') {
      parallel {
        stage('Shell Script') {
          steps {
            sh '''npm install 
npm start'''
          }
        }

        stage('hello') {
          steps {
            echo 'Lets install npm packages and run code'
          }
        }

      }
    }

  }
}