### Scenarios covered
#### Store File
`artillery run tests/Artillery/StoreFile/storeFile.yml`
#### Use environment variables
`artillery run tests/Artillery/ReadEnv/readEnv.yml`
#### NTLM Auth
`artillery run tests/Artillery/NtlmAuth/ntlm_auth.yml`

### Prepare server
- `php vendor/bin/homestead make`
 - Append to your hosts file: `192.168.10.10 homestead.test`
- `vagrant up`
- `vagrant ssh`
- `cd ~/code; cp .env.example .env; composer install; php artisan key:generate; php artisan migrate`
##### For NTLM authentication
Add a url requiring ntlm authentication to the `URL_REQUIRING_NTLM_AUTH` environment variable in .env

### Prepare artillery
> Testing machine
- `sudo npm install -g artillery`
- `npm run artillerySetup`