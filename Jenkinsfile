pipeline {
    agent any

    stages {

        stage('Login DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                    '''
                }
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    cd /host/portfolio
                    docker stop portfolio
                    docker rm portfolio
                    docker rmi tiagocorr/portfolio:latest
                    docker pull tiagocorr/portfolio:latest
                    docker compose down
                    docker compose up -d --force-recreate
                '''
            }
        }
    }

    post {
        success {
            echo "Deploy complete!"
        }
        failure {
            echo "Deploy failed!"
        }
    }
}
