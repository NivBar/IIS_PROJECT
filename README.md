# AutoMD

AutoMD is a web application to diagnose a car problem according to given car sympyoms.
The user can insert the car symptoms in a free text or pick them from cascading dropdowns.

### Diagnosing the car problem according to free text:
![image](https://user-images.githubusercontent.com/99175298/214261401-54df7e4c-0b29-4a15-a8ca-8d907d1c3e2b.png)

### Diagnosing the car problem according to cascading dropdowns:
![image](https://user-images.githubusercontent.com/99175298/214261511-884c3542-7f10-4054-9266-f7e404988a16.png)

# The code structure
The code is devided into two main parts: 
1. The **client/React** part (under the src folder) 
2. The **server/Flask** part (under the flask_server folder)
<br/>
When running the code the React (nodejs) server runs on port 3000 and the flask server runs on port 5000.

# prerequisite 
In order to run the application you need to install:
1. Node.js
2. NPM
3. Python38
<br/>
you will also need to install the npm packages and to activate the flask server (see bellow) 

## install npm packages 
you will need to open a terminal in the application root and install the react packages by simply running: <br/>
**npm install**

## activate the flask server and install the requirments 
you will activate the Flask server by opening a terminal in the flask_server folder and creating python virtual environment by running: <br/>
**python -m venv venv**  <br/>
 <br/>
This will create a venv folder under the flask_server. you can activate this venv by running:  <br/>
**flask_server/venv/Scripts/activate**  <br/>
 <br/>
This will open the venv and then we can run any python and pip installation command (see the (venv) header in the terminal screenshot bellow):
![image](https://user-images.githubusercontent.com/99175298/214264559-28b9697a-ae11-4387-8ad3-d3884f84aa69.png)
 <br/>
In the same terminal (the venv terminal) install all the python packages needed:  <br/>
**pip install -r requirements.txt**  <br/> (you might need to give the full path to the requirements file: flask_server\requirement.txt)

# running the app
make sure that the .env file under the flask_server root includes the following: <br/>
**set FLASK_APP= --app app.py** <br/>
**set FLASK_ENV=development** <br/>

also make sure that you have the **package.json and package-lock.json** in the src folder (the react/client folder)

lastly, you can open a terminal in the application root and run: 
**npm run dev**
this will run the flask server and the react one and then opens a web browser with the application 

