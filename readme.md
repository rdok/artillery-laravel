### Scenarios covered
#### Store File
`DEBUG=http* artillery run tests/Artillery/StoreFile/store_files.yml`
#### Use environment variables
`DEBUG=http* artillery run tests/Artillery/ReadEnv/read_env.yml`

### Prepare server
- `php vendor/bin/homestead make`
 - Append to your hosts file: `192.168.10.10 homestead.test`
- `vagrant up`
- `vagrant ssh`
- `cd ~/code; cp .env.example .env; composer install; php artisan key:generate; php artisan migrate`

### Prepare artillery
> Testing machine
- `sudo npm install -g artillery`
- `npm install faker traverse dotenv` Must be run at your project's path.