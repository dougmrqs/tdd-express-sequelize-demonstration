## Test Driven Development with Express, Sequelize and Jest
Simple user registering with a single 'users' table. This sample shows how tests are made even before the functionalities,
as well as interactions with a Express server without running it.    
As seen on Rocketseat's class: https://youtu.be/2G_mWfG0DZE


### Sequelize cheat sheet    
Create a migration
`npx sequelize migration:create --name=create-users`
Migrate to latest
`npx sequelize-cli db:migrate`


#### NOTE:
This was developed on Windows 10, so setting an ENV inline with the "test" script will not work. A module called win-node-env
is meant to solve this problem. Ref: https://github.com/laggingreflex/win-node-env    
If you are running this on Linux, I'd recommend to remove the said development dependency at "package.json" file.