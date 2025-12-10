pipeline {
    agent any

    stage('Login DockerHub') {
        steps {
            withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                sh '''
                    echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                '''
            }
        }
    }


    stages {
        stage('Deploy') {
            steps {
                sh '''
                    cd /host/portfolio
                    docker compose pull
                    docker compose down
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
