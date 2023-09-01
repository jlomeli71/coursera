# Installation on Pythonanywhere

mkvirtualenv django4 ...
pip install django4

workon django4

python -m django --version

# Installing sample code

git clone https://github.com/csev/dj4e-samples
cd dj4e-samples
pip install -r requirements4.txt
python manage.py check
python manage.py makemigrations
python manage.pt migrate

# Bulding your applicadtion

cd
mkdir django_projects
cd django_projects
django-admin startproject mysite

# Edit in ./django_projects/mysite/mysite/settings.py in line around 28

ALLOWED_HOSTS = [ '*' ]

# Move to ./django_projects/,ysite

python3 manage.py check

# CHeck configuration on web console like
- Source code:
- Working directory
- WSGI configuration file
- Virtualenv

# After reload, you can check from your brouser

jmlomeli71.pythonanywhere.com

# Adding a polls application

cd ./django_projects/mysiye
python manage.py startapp polls

if you ls or dir, you will find
- manage.py file
- mysite directory
- polls directory

# follow the django tutorial, you will
- create a polls/views.py file
- create a file urls.py file
- modify the ./mysite/urls.py 

python manage.py check
# instead of doing python manage.py runserver, reload wfrom web tab
# After reload, you can check from your brouser

jmlomeli71.pythonanywhere.com/polls/