from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from app.models import db, Post, User
from app.forms import PostForm

post_routes = Blueprint('posts', __name__)

@post_routes.route('/', methods=['GET'])
@login_required
def get_posts():
    posts = Post.query.all()
    response = {'posts' : [post.to_dict() for post in posts]}
    return jsonify(response)

#Get Specific Post
@post_routes.route('/<int:id>', methods=['GET'])
@login_required
def get_post(id):
    post = Post.query.get(id)
    response = post.to_dict()
    return jsonify(response)

#Create A Post
@post_routes.route('/new', methods=['POST'])
@login_required
def create_post():
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        post = Post(
            user_id = current_user.id,
            caption = form.data['caption'],
            photo_url = form.data['photo_url']
        )
        db.session.add(post)
        db.session.commit()
        return post.to_dict()

    return jsonify(form.errors), 403

#Edit A Post
@post_routes.route('/<int:id>/', methods=['PATCH'])
@login_required
def edit_post(id):
    post = Post.query.get(id)
    form = PostForm()
    print(form.data)
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        post.caption = form.data['caption']
        db.session.commit()
        return post.to_dict()
    return jsonify(form.errors), 400

#Delete A Post
@post_routes.route('/<int:id>/delete/', methods=['DELETE'])
@login_required
def delete_post(id):
    post = Post.query.get(id)

    db.session.delete(post)
    db.session.commit()
    return jsonify(post.id)
