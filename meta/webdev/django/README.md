<h1>Recommended installation for django<h1>
 <p>There are some recomendations for ruuning django</p>

<code>
python -m pip install --upgrade pip
python -m venv djenv
.\djenv\Scripts\activate.bat
python -m pip install Django
python -m pip install colorama

<h3>Project Structure</h3>
<p>When installing Django globally or in a virtual environment, Python recommends using isolated environment libraries and other dependencies required for a particular application.</p>

<p>Python's standard library contains the venv module.</p> 

<p>It installs a command-line utility called Django-admin in the system path and is located in the scripts folder of your current Python environment.</p>

<p>As the name suggests, you use the django-admin utility to perform various administrative tasks.</p> 

<p>These tasks include creating the project and app, performing  migrations to generate database tables, whose structure matches data models, and running a development server.</p>

<h5>What is a project?</h5>
<p>When you set out to build a modular, extensible and scalable web application, you need an arrangement that controls the standard features of its various sub-modules.</p>

<p>A Django project is a Python package containing the database configuration used by various sub-modules (Django calls them apps) and other Django-specific settings.</p>

<p>Use the startproject command of Django-admin as follows:</p>   

<code>
django-admin startproject demoproject .
</code>

<p>The startproject is Django’s default project template. It creates the following file structure in the Python environment:  </p>

<code>
\demoproject 
│   manage.py 
└───demoproject 
        asgi.py 
        settings.py 
        urls.py 
        wsgi.py 
        __init__.py 
</code>

<p>As mentioned above, a Django project folder can contain one or more apps. An app is also represented by a folder of a specific file system. The command to create an app is: </p>

<code>
python manage.py startapp <name of app>
</code>

<p>You will explore the structure of an app later. </p>

