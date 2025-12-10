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
                    docker compose pull
                    docker compose down
                    docker compose build --no-cache
                    docker compose up -d
                '''
            }
        }
    }

    post {
        success {
            echo "Deploy concluído!"
        }
        failure {
            echo "Deploy falhou!"
        }
    }
}
