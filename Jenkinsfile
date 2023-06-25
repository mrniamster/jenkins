pipeline{
    agent any
    environment{
        staging_server='123.123.133.1023'
    }

    stages{
        stage('Deploy to remote'){
            steps{
                sh 'scp ${WORKSPACE}/* root@:${staging_server}/var/www/html/xyz'
            }
        }
    }
}