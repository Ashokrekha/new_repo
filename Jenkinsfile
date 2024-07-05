pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/Ashokrekha/new_repo.git'
            }
        }
        
        stage('Change Directory and npm install') {
            steps {
                sh 'cd /var/lib/jenkins/workspace/pipe/'
                sh 'sudo npm install express'
                sh 'sudo npm install'
            }
        }
        
        stage('Run Node Application') {
            steps {
                sh 'cd /var/lib/jenkins/workspace/pipe/' 
                    // Start Node.js application in background with nohup
                sh 'nohup node index.js > node.log 2>&1 &'
                    
                    // Optionally sleep to give time for the application to start
                sleep 10
                    
                    // Verify application is running
                sh "curl http://localhost:3002"
            }
        }
    }
    
    post {
        success {
            echo "Node.js application started successfully! Access it at: http://localhost:3001"
        }
        failure {
            echo "Failed to start Node.js application :("
        }
    }
}
