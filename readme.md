> See tests/Artillery/StoreFile/store_files.yml
### Prepare dev machine
- `php vendor/bin/homestead make`
 - Append to your hosts file: `192.168.10.10 homestead.test`
- `vagrant up`
- `vagrant ssh`
- `cd ~/code; cp .env.example .env; php artisan key:generate`

### Prepare artillery
- vagrant ssh
- `sudo npm install -g artillery`
- `cd ~/code; php artisan migrate; npm install faker traverse dotenv`

#### Scenario - Store File
> 
- Given I am an authenticated user with basic auth
- When I a make a request to upload a file
- Then I see a successful response