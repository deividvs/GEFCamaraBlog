# GAMARA BLOG

# [7diasparaosucesso.com](http://www.7diasparaosucesso.com)

## Programming:
* Adolfo Peccin
* Alvaro Caxone
* Eduardo Morango
* Murilo Lucas
* Rodrigo Azevedo

## Ruby, Rails and PostgreSQL versions (Suggested use of RVM to handle ruby and gems)
* Ruby 2.2.5
* Rails 5.0.1
* PostgreSQL 9.6.1

## How to install project:
    $ gem install bundler
    $ bundle install
    $ bundle exec rake db:create
    $ bundle exec rake db:migrate

### bundle install issues
http://stackoverflow.com/questions/33475709/install-therubyracer-gem-on-osx-10-11-el-capitan

## Facebook login works on localhost
Open /etc/hosts file
`sudo vim /etc/hosts`

Put this on file
`127.0.0.1	local.7diasparaosucesso.com`

## Admin rules
Save the Use instance
user.role_id = 4

## Run project
http://local.7diasparaosucesso.com:3000/

## Production
We use Heroku for production