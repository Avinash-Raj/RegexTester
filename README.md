# RegexTester
=============
RegexTester is an online Regular Expression tester. Currenty it supports Javascript only.

### Requirements

* Server-side language
    * [Python](http://www.python.org)
    * [Pip](http://www.pip-installer.org)

**Installation Instructions**

1. Clone the project.

2. Create a new virtual environment using `virtualenv_wrapper` tool. `mkvirtualenv tweeter`

3. `cd` intro the project directory, and install dependencies from requirements.txt via `pip install -r requirements.txt`

4. create tables and load fixtures. `python manage.py migrate`

5. Run the server via: `python manage.py runserver`

6. The application will be available at <a href="http://localhost:8000" target="_blank">http://localhost:8000</a>

