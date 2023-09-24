<h1>Recommended installation for django<h1>
 <p>There are some recomendations for ruuning django</p>

<code>
python -m pip install --upgrade pip
python -m venv env
.\env\Scripts\activate.bat
python -m pip install Django
python -m pip install colorama

deactivate
</code>


python3 manage.py runserver # To run the server
python3 manage.py makemigrations # To compile the migrations
python3 manage.py migrate  # To migrate the changes in Database