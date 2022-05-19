from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from app.models import db, Post, Reply
from app.forms import ReplyForm

reply_routes = Blueprint('replies', __name__)

@reply_routes.route('/', methods=['GET'])
@login_required
def get_replies():
    replies = Reply.query.all()
    reply = {'replies': [reply.to_dict() for reply in replies]}
    return jsonify(reply)

#Create A Reply
@reply_routes.route('/new', methods=['POST'])
@login_required
def create_reply():
    form = ReplyForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        reply = Reply(
            user_id = current_user.id,
            post_id = form.data['post_id'],
            body = form.data['body']
        )
        db.session.add(reply)
        db.session.commit()
        return reply.to_dict()

    if form.errors:
        return jsonify(form.errors), 403

#Edit A Reply
@reply_routes.route('/<int:id>/', methods=['PATCH'])
@login_required
def edit_reply(id):
    reply = Reply.query.get(id)
    form = ReplyForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        reply.body = form.data['caption']
        db.session.commit()
        return reply.to_dict()
    return jsonify(form.errors), 400

#Delete A Post
@reply_routes.route('/<int:id>/delete/', methods=['DELETE'])
@login_required
def delete_reply(id):
    reply = Reply.query.get(id)

    db.session.delete(reply)
    db.session.commit()
    return { "Message": "Reply Deleted"}
