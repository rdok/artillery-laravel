> See tests/Artillery/StoreFile/store_files.yml

### Prepare artillery
- php artisan migrate
- npm install -g artillery  
- npm install faker traverse dotenv

#### Scenario - Store File
- Given I am an authenticated user with basic auth
- When I a make a request to upload a file
- Then I see a successful response