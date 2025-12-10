pipeline {
    agent any

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
