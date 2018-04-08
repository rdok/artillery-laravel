> See tests/Artillery/StoreFile/store_files.yml
### Prepare dev machine
- php vendor/bin/homestead make
 - Append to your hosts file: homestead.test
- vagrant up
- vagrant ssh
- php ~/code/artisan key:generate

### Prepare artillery
- vagrant ssh
- cd ~/code
- php migrate
- sudo npm install -g artillery  
- npm install faker traverse dotenv

#### Scenario - Store File
- Given I am an authenticated user with basic auth
- When I a make a request to upload a file
- Then I see a successful response