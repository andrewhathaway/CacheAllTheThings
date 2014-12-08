#!/bin/sh

# Update
sudo yum update -y

# Redis
sudo yum install redis -y
echo "bind 0.0.0.0" | sudo tee -a /etc/redis.conf
sudo service redis start
chkconfig redis on

# Memcached
sudo yum install memcached -y
sudo service memcached start
chkconfig memcached on

# Extras
echo "cd /vagrant" >> /home/vagrant/.profile