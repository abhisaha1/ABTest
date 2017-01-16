# AB Testing Tool

Basic useful feature list:

 * Client sided
 * Doesn't store data. Depends on Google Analaytics
 * Easy to set up and configure

This readme document is not finished. It will never be finished.

## Setup
The tool consits of backend (dashboard) and a client(snippet). The backend is powered by php and the client is powered by nodejs server. The client resides in the client folder and the dashboard resides in the src folder.


## Configuration
Goto config folder and add the database credentials. This credentials are for the backend dashboard.
Then goto client/dev/config/mysql.config.js and add the database credentials. I know its the wrong way to add credentials and they should reside in one folder. But deal with this or change it in a more smarter say.

There is a queries.sql file. Execute that in your database.

For editing the client, edit the client/public/js/Client.js file and run grunt. Yes I know it should be in a different folder but its ok for now.

## Installation:

```
git clone git@github.com:ajaxtown/ABTest.git
cd ABTest
```

Power up the dashboard using the inbuilt php server.
```
php -S localhost:8080 -t public/
```

Inside this ABTEST folder, contains the backend dashboard powered by PHP. It also contains a folder **client** which is powered by nodeJS.

Open another terminal window. And cd into folder client and run the server.

```
node server.js
```

## ToDO
* SQL Migrations
* Unit Testing
* Compression


## Get in touch
At this point I wont be able to provide any support except the installation.

