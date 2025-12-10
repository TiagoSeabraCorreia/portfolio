pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/TiagoSeabraCorreia/portfolio'
            }
        }

        stage('Deploy to VPS') {
            steps {
                sh '''
                    cd /host/portfolio
                    docker compose down
                    docker compose up -d --build
                '''
            }
        }
    }

    post {
        success {
            echo "Deploy completo com sucesso!"
        }
        failure {
            echo "Deploy falhou!"
        }
    }
}
