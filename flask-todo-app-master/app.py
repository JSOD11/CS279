# import some important libraries
import os
from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

# set up project root and database
PROJECT_ROOT = os.path.dirname(os.path.realpath(__file__))
DATABASE = os.path.join(PROJECT_ROOT, 'todo.db')

# create flask app
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////" + DATABASE
# create database
db = SQLAlchemy(app)

# Create the todo class
class Todo(db.Model):
    # elements are id, title, and whether or not complete
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80))
    complete = db.Column(db.Boolean)


# create default path
@app.route("/")
def index():
    todo_list = Todo.query.all()
    return render_template("index.html", todo_list=todo_list)

# create add path
@app.route("/add", methods=["POST"])
def add():
    # add new todo
    title = request.form.get("title")
    new_todo = Todo(title=title, complete=False)
    db.session.add(new_todo)
    db.session.commit()
    return redirect(url_for("index"))


# complete one of the todos
@app.route("/complete/<string:todo_id>")
def complete(todo_id):
    todo = Todo.query.filter_by(id=todo_id).first()
    # update to opposite of what it was before (complete -> not complete, or vice versa)
    todo.complete = not todo.complete
    db.session.commit()
    return redirect(url_for("index"))

# delete a todo
@app.route("/delete/<string:todo_id>")
def delete(todo_id):
    todo = Todo.query.filter_by(id=todo_id).first()
    # delete
    db.session.delete(todo)
    db.session.commit()
    return redirect(url_for("index"))

# create all and run the app
if __name__ == "__main__":
    db.create_all()
    app.run(debug=True)
