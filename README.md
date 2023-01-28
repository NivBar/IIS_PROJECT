# AutoMD

AutoMD is a web application to diagnose a car problem according to given car sympyoms.
The user can insert the car symptoms in a free text or pick them from cascading dropdowns.

### Diagnosing the car problem according to free text:
![image](https://user-images.githubusercontent.com/99175298/214261401-54df7e4c-0b29-4a15-a8ca-8d907d1c3e2b.png)

### Diagnosing the car problem according to cascading dropdowns:
![image](https://user-images.githubusercontent.com/99175298/214261511-884c3542-7f10-4054-9266-f7e404988a16.png)

# prerequisite 
In order to run the application you need to install:
1. Node.js
2. NPM
3. Python38

### install npm packages 
you will need to open a terminal in the application root and install the react packages by simply running:
**npm install**

### activate the flask server
you will activate the Flask server by opening a terminal in the flask_server folder and create python virtual environment by running:
**python -m venv venv**
This will create a venv folder under the flask_server. you can activate this venv by running:
**flask_server/venv/Scripts/activate**
This will open the venv and then we can run any python and pip installation command:
![image](https://user-images.githubusercontent.com/99175298/214264559-28b9697a-ae11-4387-8ad3-d3884f84aa69.png)

### using the venv directory activated above 
Install all the python packages needed using pip install in the activated venv above 

# running the app
make sure that the .env file under the flask_server root includes the following:
**set FLASK_APP= --app app.py 
set FLASK_ENV=development**

also make sure that you have the **package.json and package-lock.json** in the src folder (the react/client folder)

lastly, you can open a terminal in the application root and run: 
**npm run dev**
this will run the flask server and the react one and then opens a web browser with the application 

